var _ = require("underscore");

module.exports = {
	extend: function(id, data) {
		return _.extend(this[id] || {}, data);
	},
	
	eventListView: {
		backgroundColor:'#fff',
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
		right: 10, 
		height: 40,
	},
	
	addEventDateInput: {
		bottom: 0,
	},
	
	eventDetailsView: {
		backgroundColor: '#fff'
	},
	
	eventListItemTitleLabel: {
		left: 10,
		top: 10,
		color: 'black',
		font: {
			fontSize: 20,
			fontWeight: 'bold'
		}
	},
	
	eventListItemDetailLabel: {
		left: 10,
		top: 35,
		color: '#aaa'
	},
	
	eventDetailsHeader: {
		top: 10,
		left: 10,
		font: {
			fontSize: 18,
			fontWeight: 'bold',
		},
	},
	
	eventDetailsDays: {
		top: 40,
		left: 10,
		font: {
			fontSize: 22,
			fontWeight: 'bold',
		},
	},
	
	eventDetailsHours: {
		top: 70,
		left: 10,
		font: {
			fontSize: 22,
			fontWeight: 'bold',
		},
	}

};
