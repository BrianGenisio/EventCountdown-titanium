module.exports = function(win, addHandler) {
	var addButton = Titanium.UI.createButton({
		title: "Save"
	});
	
	addButton.addEventListener("click", addHandler);
	
	win.rightNavButton = addButton;
};
