var Event = require("model/Event");
var _ = require("underscore");

var __db = null;
function db() {
	if(!__db) {
		__db = Ti.Database.open('EventCountdownDB');
	}
	return __db;
}

function close() {
	if(__db) __db.close()
	__db = null;
}

function dataChanged() {
	Ti.App.fireEvent('dataChanged:Events');
}

db().execute('DROP TABLE events');
db().execute('CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY, title TEXT, type TEXT, eventDate TEXT);');
close();

exports.findAll = function() {
	var result = [];
	var list = db().execute('SELECT * FROM events');
	
	while(list.isValidRow()) {
		result.push({
			id: list.fieldByName('id'),
			title: list.fieldByName('title'),
			type: list.fieldByName('type'),
			date: new Date(parseInt(list.fieldByName('eventDate')))
		});
		list.next();
	}
	list.close();
	close();
	
	return _(result).map(function(item) {
		return new Event(item);
	});
}

exports.add = function(item) {
	db().execute('INSERT INTO events(title, type, eventDate) VALUES(?,?,?) ', item.title, item.type, (item.date ? item.date.getTime().toString() : '0'));
	close()
	dataChanged();
}

exports.remove = function(item) {
	db().execute("DELETE FROM events where id = ?", item.id);
	close();
	dataChanged();
}

_(exports.findAll()).each(exports.remove);
if(!exports.findAll().length) exports.add({title: "Brian's Birthday", type: "Birthday", date: new Date()});
