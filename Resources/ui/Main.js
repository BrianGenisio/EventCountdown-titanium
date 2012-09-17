var Main = function() {
	var Window1 = require("ui/Window1");
	var Window2 = require("ui/Window2");
	
	
	Titanium.UI.setBackgroundColor('#000');
	
	var self = Titanium.UI.createTabGroup();
	
	var tab1 = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Tab 1',
	    window: new Window1()
	});
	
	
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Tab 2',
	    window:new Window2()
	});
	
	self.addTab(tab1);  
	self.addTab(tab2);  
	
	return self;
};

module.exports = Main;
