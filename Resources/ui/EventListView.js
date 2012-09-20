var EventListView = function() {
	var Events = require('model/Events');
	
	var self = Titanium.UI.createWindow({  
	    title:'Events',
	    backgroundColor:'#fff'
	});
	
	var addButton = Titanium.UI.createButton({
		systemButton: Titanium.UI.iPhone.SystemButton.ADD
	});
	
	self.rightNavButton = addButton;
	
	var data = Events.findAll();
		
	var listView = Titanium.UI.createTableView({
		data: data
	});
	
	self.add(listView);
	
	return self;
};

module.exports = EventListView;
