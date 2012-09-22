var Styles = require("Styles");
var _ = require("underscore");

var PickerView = function(options) {
	var self = Titanium.UI.createView({
		height:251,
		bottom:-251
	});
	 
	self.done =  Titanium.UI.createButton({
		title:'Done',
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	 
	var spacer =  Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	 
	var toolbar =  Titanium.UI.createToolbar({
		top:0,
		items:[spacer, self.done]
	});
	 
	self.picker = Titanium.UI.createPicker({
			top:43
	});
	self.picker.selectionIndicator=true;
	 
	var picker_data = _(options).map(function(option) {
		return Titanium.UI.createPickerRow({title:option})
	});
	 
	self.picker.add(picker_data);
	 
	self.add(toolbar);
	self.add(self.picker);
	
	return self;
};

var TextFieldPicker = function(parentView, options, defaultValue) {
	var self = Titanium.UI.createTextField(Styles.extend("addEventTextInput", {
		value: defaultValue
	}));
	
	var pickerView = new PickerView(options);
	parentView.add(pickerView);
	
	self.slideIn = function() {
		pickerView.animate(Titanium.UI.createAnimation({bottom:-251}));
	};
	
	self.slideOut = function() {
		pickerView.animate(Titanium.UI.createAnimation({bottom:0}));
	};
	
	self.addEventListener('focus', function() {
		self.blur();
		self.slideOut();
	});
	
	pickerView.done.addEventListener('click',function() {
		self.slideIn();
	});
	 
	pickerView.picker.addEventListener('change', function() {
		self.value = pickerView.picker.getSelectedRow(0).title;
	});
	
	return self;
};

module.exports = TextFieldPicker;