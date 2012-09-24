var Event = function(data) {
	var self = data;
	
	self.msAway = function() {
        var today = new Date();
        return self.date.getTime() - today.getTime();
    };
    
    self.calculateUnits = function(msInUnit) {
        return Math.ceil(this.msAway() / msInUnit);
    };
    
    self.daysAway = function() {
        return self.calculateUnits(1000 * 60 * 60 * 24);
    };
    
    self.hoursAway = function() {
        return self.calculateUnits(1000 * 60 * 60);
    };
    
    self.minutesAway = function() {
     	return self.calculateUnits(1000 * 60);
    };
    
    self.secondsAway = function() {
        return self.calculateUnits(1000);
    };
	
	return self;
};

module.exports = Event;
