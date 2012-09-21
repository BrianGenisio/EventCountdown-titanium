module.exports = function(win, addHandler) {
	var addButton = Titanium.UI.createButton({
		systemButton: Titanium.UI.iPhone.SystemButton.ADD
	});
	
	addButton.addEventListener("click", addHandler);
	
	win.rightNavButton = addButton;
};
