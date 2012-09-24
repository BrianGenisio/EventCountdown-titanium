var Styles = require("Styles");
	
module.exports = function(win, addHandler) {
	var saveButton = Titanium.UI.createButton(Styles.extend("addEventSaveButton", {
		title: "Save"
	}));
	
	saveButton.addEventListener("click", addHandler);
	
	win.add(saveButton);
};

