exports.formatNumber = function(value)
{
    value += '';
    var matcher = /(\d+)(\d{3})/;
    while (matcher.test(value)) {
        value = value.replace(matcher, '$1' + ',' + '$2');
    }
    return value;
};

function formatTimeText(value, pluralUnit, singularUnit) {
	var unitString = Math.abs(value) > 1 ? pluralUnit : singularUnit;
	if(value < 0) return exports.formatNumber(Math.abs(value)) + " " + unitString + " ago";
	return exports.formatNumber(value) + " " + unitString + " away";
}

exports.daysAwayText = function(item) {
	return formatTimeText(item.daysAway(), "days", "day");
};

exports.hoursAwayText = function(item) {
	return formatTimeText(item.hoursAway(), "hours", "hour");
};

exports.minutesAwayText = function(item) {
	return formatTimeText(item.minutesAway(), "minutes", "minute");
};

exports.secondsAwayText = function(item) {
	return formatTimeText(item.secondsAway(), "seconds", "second");
};

exports.dateText = function(item) {
	var date = item.date;
	return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
};
