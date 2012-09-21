
var Main = function() {
	var NavigationController = require('ui/NavigationController').NavigationController
	var EventListView = require("ui/EventListView");
	
	
	var self = new NavigationController();
	var eventList = new EventListView(self);
	
    self.open(eventList);
    
	return self;
};

module.exports = Main;
