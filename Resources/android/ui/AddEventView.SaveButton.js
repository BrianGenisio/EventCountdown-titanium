module.exports = function(win, addHandler) {
	var Styles = require("ui/Styles");
	
	var saveButton = Titanium.UI.createButton(Styles.extend("addEventSaveButton", {
		title: "Save"
	}));
	
	saveButton.addEventListener("click", addHandler);
	
	win.add(saveButton);
};

