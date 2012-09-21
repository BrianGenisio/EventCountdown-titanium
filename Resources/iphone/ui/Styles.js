var _ = require("underscore");

module.exports = {
	extend: function(id, data) {
		return _.extend(this[id] || {}, data);
	},
	
	addEventWindow: {
		backgroundColor:'#fff',
	},
	
	addEventTable: {
		style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
	},
	
	addEventTextLabel: {
		left: 10,
		font: {fontWeight: 'bold'},	
	},
	
	addEventTextInput: {
		left: 100,
		right: 5, 
		height: 40,
		width: 200,
	}

};
