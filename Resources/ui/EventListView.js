var EventListView = function() {
	var self = Titanium.UI.createWindow({  
	    title:'Events',
	    backgroundColor:'#fff'
	});
		
	var data = [
		{
			title: "Birthday",
			hasChild: true
		}, 
		{
			title: "Party",
			hasChild: true
		}];
		
	var listView = Titanium.UI.createTableView({
		data: data
	});
	
	self.add(listView);
	
	return self;
};

module.exports = EventListView;
