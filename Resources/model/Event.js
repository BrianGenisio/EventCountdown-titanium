var Event = function(data) {
	var self = data;
	
	self.today = data.today ? data.today : new Date();
	
	self.msAway = function() {
        return self.date.getTime() - self.today.getTime();
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
