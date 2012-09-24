var _ = require("underscore");

var __db = null;
function db() {
	if(!__db) {
		__db = Ti.Database.open('EventCountdown');
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

db().execute('CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY, title TEXT, type TEXT, date DATETIME);');
close();

exports.findAll = function() {
	var result = [];
	var list = db().execute('SELECT * FROM events');
	
	while(list.isValidRow()) {
		result.push({
			id: list.fieldByName('id'),
			title: list.fieldByName('title'),
			type: list.fieldByName('type'),
			date: list.fieldByName('date')
		});
		list.next();
	}
	list.close();
	close();
	
	return result;
}

exports.add = function(item) {
	db().execute('INSERT INTO events(title, type, date) VALUES(?,?,?) ', item.title, item.type, item.date);
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
