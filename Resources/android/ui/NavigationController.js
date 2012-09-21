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
	
	return self;
};

module.exports = NavigationController;