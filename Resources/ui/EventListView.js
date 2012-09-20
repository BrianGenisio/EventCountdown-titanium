var EventListView = function() {
	var Events = require('model/Events');
	
	var self = Titanium.UI.createWindow({  
	    title:'Events',
	    backgroundColor:'#fff'
	});
		
	var data = Events.findAll();
		
	var listView = Titanium.UI.createTableView({
		data: data
	});
	
	self.add(listView);
	
	return self;
};

module.exports = EventListView;
