exports.daysAwayText = function(item) {
	var daysAway = item.daysAway();
	var daysString = Math.abs(daysAway) > 1 ? 'days' : 'day'; 
	
	if(daysAway < 0) return Math.abs(daysAway) + " " + daysString + " ago";
    if(daysAway == 0) return "today";
    return daysAway + " " + daysString + " away";
};