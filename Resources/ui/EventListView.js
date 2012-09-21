var EventListView = function(controller) {
	var Events = require('model/Events');
	var AddEventView = require("ui/AddEventView");
	var createAddButton = require("ui/EventListView.AddButton");
	var _ = require("underscore");
	
	var self = Titanium.UI.createWindow({  
	    title:'Events',
	    backgroundColor:'#fff'
	});
	
	createAddButton(self, function(e) {
		controller.open(new AddEventView(controller));
	});
	
	var data = Events.findAll();
		
	var uiProperties = {
		hasChild: true,
		color: "black"
	};
		
	_(data).each(function(item) {
		_.extend(item, uiProperties);
	});
		
	var listView = Titanium.UI.createTableView({
		data: data
	});
	
	self.add(listView);
	
	return self;
};

module.exports = EventListView;
