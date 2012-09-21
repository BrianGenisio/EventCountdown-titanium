var AddEventView = function(controller) {
	var Styles = require("ui/Styles");
	var AddEventForm = require("ui/AddEventForm");
	
	var self = Titanium.UI.createWindow(Styles.extend("addEventWindow", {
		title: "New Event",		
	}));
	
	var form = new AddEventForm();
	
	self.add(form);
	
	return self;
};

module.exports = AddEventView;
