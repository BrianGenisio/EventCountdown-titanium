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

function createLabel(id, text) {
	return Titanium.UI.createLabel(Styles.extend(id, {
		text: text
	}));
}

var EventDetails = function(controller, eventId) {
	var data = Events.get(eventId);
	
	var self = Titanium.UI.createWindow(Styles.extend("eventDetailsView", {
		title: data.title
	}));

	self.add(createLabel("eventDetailsHeader", getHeader(data) + " on " + DateFormatting.dateText(data)));
	self.add(createLabel("eventDetailsDays", DateFormatting.daysAwayText(data)));
    self.add(createLabel("eventDetailsHours", DateFormatting.hoursAwayText(data)));
    self.add(createLabel("eventDetailsMinutes", DateFormatting.minutesAwayText(data)));
    self.add(createLabel("eventDetailsSeconds", DateFormatting.secondsAwayText(data)));
	
	return self;
};

module.exports = EventDetails;
