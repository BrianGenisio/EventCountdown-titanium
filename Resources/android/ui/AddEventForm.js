var Styles = require("Styles");
	
var AddEventForm = function(controller) {	
	var self = Titanium.UI.createView();
	
	function addLabel(name, text) {
		var label = Titanium.UI.createLabel(Styles.extend(name, {
			text: text
		}));
		
		self.add(label);
	};
	
	addLabel("addEventHeaderLabel", "Create an event");
	addLabel("addEventTitleLabel", "Title");
	
	self.titleInput = Titanium.UI.createTextField(Styles.extend("addEventTextInput", {
		returnKeyType: Titanium.UI.RETURNKEY_DONE
	}));
	
	self.add(self.titleInput)
	
	addLabel("addEventTypeLabel", "Type");
	
	self.typeInput = Titanium.UI.createPicker(Styles.extend("addEventTypeInput", { }));
	self.typeInput.add([
		Ti.UI.createPickerRow({title:'Birthday'}),
		Ti.UI.createPickerRow({title:'Holiday'}),
		Ti.UI.createPickerRow({title:'Party'}),
	])
	self.add(self.typeInput);
	
	addLabel("addEventDateLabel", "Date");
	
	self.dateInput = Titanium.UI.createPicker(Styles.extend("addEventDateInput", {
		type: Ti.UI.PICKER_TYPE_DATE
	}));
	self.add(self.dateInput);
	
	return self;
};

module.exports = AddEventForm;
