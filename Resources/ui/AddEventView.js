var Events = require("model/Events");
var Styles = require("Styles");
var AddEventForm = require("ui/AddEventForm");
var createSaveButton = require("ui/AddEventView.SaveButton");

var AddEventView = function(controller) {
	var self = Titanium.UI.createWindow(Styles.extend("addEventWindow", {
		title: "New Event",		
	}));
	
	var form = new AddEventForm();
	self.add(form);
	
	form.typeInput.addEventListener("change", function(e){
		if(e.value) {
			e.source.value = e.value;
	    } else {
	   		e.source.value = e.selectedValue[0];
	    }
    });
	
	form.dateInput.addEventListener("change", function(e){
    	e.source.value = e.value;
    });
	form.dateInput.value = new Date();
	
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
