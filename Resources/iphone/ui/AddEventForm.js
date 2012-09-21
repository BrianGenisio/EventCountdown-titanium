var AddEventForm = function() {
	var Styles = require("ui/Styles");
	
	var self = Titanium.UI.createTableView(Styles.addEventTable);
	var section = Titanium.UI.createTableViewSection({
		headerTitle: "Create an event"
	});
	
	var addRow = function(label, input) {
		var label = Titanium.UI.createLabel(Styles.extend("addEventTextLabel", {
			text: label
		}));
		
		var row = Titanium.UI.createTableViewRow({
			className: 'field'
		});
		
		row.add(label);
		row.add(input);
		
		section.add(row);
	};
	
	self.titleInput = Titanium.UI.createTextField(Styles.extend("addEventTextInput", {
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	}));
	
	addRow("Title", self.titleInput);
	
	self.typeInput = Titanium.UI.createPicker(Styles.extend("addEventPickerInput", {
		
	}));
	self.typeInput.add([
		Titanium.UI.createPickerRow({title: 'Birthday'}),
		Titanium.UI.createPickerRow({title: 'Holiday'}),
		Titanium.UI.createPickerRow({title: 'Party'}),
	]);
	
	addRow("Type", self.typeInput);
	
	
	self.setData([section]);
	
	return self;
};

module.exports = AddEventForm;