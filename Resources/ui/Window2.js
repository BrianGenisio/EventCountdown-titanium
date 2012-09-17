var Window2 = function() {
	var self = Titanium.UI.createWindow({  
	    title:'Tab 2',
	    backgroundColor:'#fff'
	});
	
	var label2 = Titanium.UI.createLabel({
		color:'#999',
		text:'I am Window 2, yo',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	
	self.add(label2);
	return self;	
};

module.exports = Window2;
