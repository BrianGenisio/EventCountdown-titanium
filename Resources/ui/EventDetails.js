var Styles = require("Styles");
var Events = require("model/Events");
var DateFormatting = require("ui/DateFormatting");

function getHeader(data) {
  	switch(data.type.toLowerCase()) {
    	case "birthday": return "Happy birthday";
        case "holiday": return "Happy holiday";
        case "party": return "Party time";
    }
    return "The event";
}

function addLabel(view, id) {
	var label = Titanium.UI.createLabel(Styles.extend(id, {}));
	view.add(label);
	view[id] = label;
	return label;
}

var EventDetails = function(controller, eventId) {
	var data = Events.get(eventId);
	
	var self = Titanium.UI.createWindow(Styles.extend("eventDetailsView", {
		title: data.title
	}));

	addLabel(self, "eventDetailsHeader");
	addLabel(self, "eventDetailsDays");
    addLabel(self, "eventDetailsHours");
    addLabel(self, "eventDetailsMinutes");
    addLabel(self, "eventDetailsSeconds");
	
	function render() {
		self.eventDetailsHeader.text = getHeader(data) + " on " + DateFormatting.dateText(data);
		self.eventDetailsDays.text = DateFormatting.daysAwayText(data);
		self.eventDetailsHours.text = DateFormatting.hoursAwayText(data);
		self.eventDetailsMinutes.text = DateFormatting.minutesAwayText(data);
		self.eventDetailsSeconds.text = DateFormatting.secondsAwayText(data);
		
		setTimeout(render, 1000);
	}
	
	render();
	
	return self;
};

module.exports = EventDetails;
