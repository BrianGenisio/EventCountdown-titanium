var NavigationController = require('components/NavigationController')
var EventListView = require("ui/EventListView");
	
var Main = function() {
	var self = new NavigationController();
	self.open(new EventListView(self));
	return self;
};

module.exports = Main;
