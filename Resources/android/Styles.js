var _ = require("underscore");

module.exports = {
	extend: function(id, data) {
		return _.extend(this[id] || {}, data);
	},
	
	eventListView: {
		backgroundColor:'#fff',
	},
	
	addEventWindow: {
		backgroundColor:'#fff'
	},
	
	addEventHeaderLabel: {
		top: 10,
		left: 10,
		color: 'black',
		font: {
			fontSize: 20,
			fontWeight: 'bold'
		},
	},
	
	addEventTitleLabel: {
		top: 50,
		left: 10,
		color: 'black',
		font: {
			fontWeight: 'bold'
		},
	},
	
	addEventTextInput: {
		top: 75,
		left: 10,
		right: 10
	},
	
	addEventTypeLabel: {
		top: 125,
		left: 10,
		color: 'black',
		font: {
			fontWeight: 'bold'
		},
	},
	
	addEventTypeInput: {
		top: 150,
		left: 10,
		right: 10
	},
	
	addEventDateLabel: {
		top: 200,
		left: 10,
		color: 'black',
		font: {
			fontWeight: 'bold'
		},
	},
	
	addEventDateInput: {
		top: 225,
		left: 10,
		right: 10
	},
	
	addEventSaveButton: {
		bottom: 10,
		left: 10,
		right: 10,
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
		color: 'black',
		font: {
			fontSize: 18,
			fontWeight: 'bold',
		},
	},
	
	eventDetailsDays: {
		top: 60,
		left: 10,
		color: 'black',
		font: {
			fontSize: 22,
			fontWeight: 'bold',
		},
	},
	
	eventDetailsHours: {
		top: 90,
		left: 10,
		color: 'black',
		font: {
			fontSize: 22,
			fontWeight: 'bold',
		},
	}, 
	
	eventDetailsMinutes: {
		top: 120,
		left: 10,
		color: 'black',
		font: {
			fontSize: 22,
			fontWeight: 'bold',
		},
	},
	
	eventDetailsSeconds: {
		top: 150,
		left: 10,
		color: 'black',
		font: {
			fontSize: 22,
			fontWeight: 'bold',
		},
	},

	eventDetailsImage: {
		opacity: 0.2, 
		backgroundColor: '#fff',
		left:0,
		right:0,
		top:10,
	},


};
