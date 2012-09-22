var AddEventForm = function() {
	var Styles = require("ui/Styles");
	var TextFieldPicker = require("ui/TextFieldPicker");	
	
	var self = Titanium.UI.createView();
	var table = Titanium.UI.createTableView(Styles.addEventTable);
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
	
	self.dateInput = Titanium.UI.createPicker(Styles.extend("addEventDateInput", {
		type: Ti.UI.PICKER_TYPE_DATE
	}));
	
	table.add(self.dateInput);
	
	self.typeInput = new TextFieldPicker(table, ['Birthday', 'Holiday', 'Party'], 'Birthday');
	
	addRow("Type", self.typeInput);
	
	table.setData([section]);
	
	self.add(table);
	
	return self;
};

module.exports = AddEventForm;