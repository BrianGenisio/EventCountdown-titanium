var Main = function() {
	var EventListView = require("ui/EventListView");
	
	
	Titanium.UI.setBackgroundColor('#000');
	
	var self = Titanium.UI.createTabGroup();
	
	var eventList = new EventListView();
	eventList.tabBarHidden = true;
	
	var tab1 = Titanium.UI.createTab({  
	    title:'Tab 1',
	    window: eventList
	});
	
	self.addTab(tab1);  
	
	return self;
};

module.exports = Main;
