var Window1 = function() {
	var self = Titanium.UI.createWindow({  
	    title:'Tab 1',
	    backgroundColor:'#fff'
	});
		
	var label1 = Titanium.UI.createLabel({
		color:'#999',
		text:'I am Window 1',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	
	self.add(label1);
	
	return self;
};

module.exports = Window1;
