var Styles = require("Styles");

var EventDetails = function(controller, data) {
	var self = Titanium.UI.createWindow(Styles.extend("eventDetailsView", {
		title: data.title
	}));

	
	return self;
};

module.exports = EventDetails;
