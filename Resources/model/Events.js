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

db().execute('CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY, title TEXT, type TEXT, eventDate TEXT);');
close();

function getEvent(list) {
	return new Event({
			id: list.fieldByName('id'),
			title: list.fieldByName('title'),
			type: list.fieldByName('type'),
			date: new Date(parseInt(list.fieldByName('eventDate')))
	});
}

exports.findAll = function() {
	var result = [];
	var list = db().execute('SELECT * FROM events');
	
	while(list.isValidRow()) {
		result.push(getEvent(list));
		list.next();
	}
	list.close();
	close();
	
	return result;
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

exports.get = function(id) {
	var list = db().execute('SELECT * FROM events WHERE id = ? LIMIT 1', id);
	var result = getEvent(list);
	close();
	return result;
}
