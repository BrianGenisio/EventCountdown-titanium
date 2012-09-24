var Events = require('model/Events');
var Styles = require("Styles");
var AddEventView = require("ui/AddEventView");
var EventDetails = require("ui/EventDetails");
var createAddButton = require("ui/EventListView.AddButton");
var _ = require("underscore");


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
		
		_(data).each(function(item) {
			_.extend(item, {
				hasChild: true,
				color: "black"
			});
		});
		
		listView.setData(data);
	};
	
	updateData();
	
	Ti.App.addEventListener('dataChanged:Events', updateData);
	
	return self;
};

module.exports = EventListView;
