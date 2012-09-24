var Events = require('model/Events');
var Styles = require("Styles");
var AddEventView = require("ui/AddEventView");
var EventDetails = require("ui/EventDetails");
var DateFormatting = require("ui/DateFormatting");
var createAddButton = require("ui/EventListView.AddButton");
var _ = require("underscore");

var EventListItemView = function(item) {
	var self = Titanium.UI.createTableViewRow({
		id: item.id,
		hasChild: true,
		className: "eventListItem"
	});
	
	var titleLabel = Titanium.UI.createLabel(Styles.extend("eventListItemTitleLabel", {
		text: item.title
	}));
	
	var detailLabel = Titanium.UI.createLabel(Styles.extend("eventListItemDetailLabel", {
		text: DateFormatting.daysAwayText(item)
	}));
	
	self.add(titleLabel);
	self.add(detailLabel);
	
	return self;
};

var EventListView = function(controller) {
	var self = Titanium.UI.createWindow(Styles.extend("eventListView", {  
	    title:'Events'
	}));
	
	createAddButton(self, function(e) {
		controller.open(new AddEventView(controller));
	});
			
	var listView = Titanium.UI.createTableView();
	listView.addEventListener("click", function(e) {
		controller.open(new EventDetails(controller, e.rowData));
	});
	self.add(listView);
	
	function updateData() {
		var data = Events.findAll();
		
		var rows = _(data).map(function(item) {
			return new EventListItemView(item);
		});
		
		listView.setData(rows);
	};
	
	updateData();
	
	Ti.App.addEventListener('dataChanged:Events', updateData);
	
	return self;
};

module.exports = EventListView;
