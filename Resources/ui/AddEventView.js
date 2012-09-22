var Events = require("model/Events");

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
		Events.add({
			title: form.titleInput.value,
			type: form.typeInput.value,
			date: form.dateInput.value
		});
		
		controller.close(self);
	});
	
	return self;
};

module.exports = AddEventView;
