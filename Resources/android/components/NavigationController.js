var _ = require("underscore");

var NavigationController = function() {
	var self = this;
	
	self.open = function(windowToOpen) {
		//hack - setting this property ensures the window is "heavyweight" (associated with an Android activity)
		windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;
	
		if(!self.rootWindow) {
			windowToOpen.exitOnClose = true;
			self.rootWindow = windowToOpen;
		}
		
		windowToOpen.open();
	};
	
	self.close = function(windowToClose) {
		windowToClose.close();
	};
	
	return self;
};

module.exports = NavigationController;