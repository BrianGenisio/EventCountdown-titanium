var AddEventView = function(controller) {
	var Styles = require("ui/Styles");
	var AddEventForm = require("ui/AddEventForm");
	var createSaveButton = require("ui/AddEventView.SaveButton");
	
	var self = Titanium.UI.createWindow(Styles.extend("addEventWindow", {
		title: "New Event",		
	}));
	
	var form = new AddEventForm();
	
	self.add(form);
	
	createSaveButton(self, function() {
		Titanium.API.log("SAVE IT");
	});
	
	return self;
};

module.exports = AddEventView;
