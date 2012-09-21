var _ = require("underscore");

module.exports = {
	extend: function(id, data) {
		return _.extend(this[id] || {}, data);
	},
	
	addEventWindow: {
		backgroundColor:'#fff'
	},
	
	addEventTable: {
		backgroundColor: 'white',
		rowBackgroundColor: 'white',
		top: 10, bottom: 10,
		width: 300,
		borderColor: 'black',
		borderWidth: 1
	},
	
	addEventTitleText: {
		height: 40,
		width: 280
	}

};
