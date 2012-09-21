
var Main = function() {
	var NavigationController = require('ui/NavigationController').NavigationController
	var EventListView = require("ui/EventListView");
	
	
	Titanium.UI.setBackgroundColor('#000');
	var self = new NavigationController();
	var eventList = new EventListView();
	
    self.open(eventList);
    
	return self;
};

module.exports = Main;
