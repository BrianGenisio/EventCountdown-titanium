var EventListView = function() {
	var Events = require('model/Events');
	
	var self = Titanium.UI.createWindow({  
	    title:'Events',
	    backgroundColor:'#fff'
	});
	
	if (Ti.Platform.osname !== 'android') {
    	var addButton = Titanium.UI.createButton({
			systemButton: Titanium.UI.iPhone.SystemButton.ADD
		});
		
		self.rightNavButton = addButton;
	} else {
    	var activity = self.activity;
    	activity.onCreateOptionsMenu = function(e){
	        var menu = e.menu;
	        var menuItem = menu.add({ title: "Add" });
	    };
	}
	
	var data = Events.findAll();
		
	var listView = Titanium.UI.createTableView({
		data: data
	});
	
	self.add(listView);
	
	return self;
};

module.exports = EventListView;
