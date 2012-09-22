module.exports = function(win, addHandler) {
	var Styles = require("Styles");
	
	var addButton = Titanium.UI.createButton(Styles.extend("addEventSaveButton", {
		title: "Save"
	}));
	
	addButton.addEventListener("click", addHandler);
	
	win.add(addButton);
};
