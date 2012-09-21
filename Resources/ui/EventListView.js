var EventListView = function() {
	var Events = require('model/Events');
	var createAddButton = require(Titanium.Platform.osname + "/EventListView.AddButton");
	
	var self = Titanium.UI.createWindow({  
	    title:'Events',
	    backgroundColor:'#fff'
	});
	
	createAddButton(self, function(e) {
		Titanium.API.log("ADD IT");
	});
	
	var data = Events.findAll();
		
	var listView = Titanium.UI.createTableView({
		data: data
	});
	
	self.add(listView);
	
	return self;
};

module.exports = EventListView;
