module.exports = function(win, addHandler) {
	var activity = win.activity;
	activity.onCreateOptionsMenu = function(e){
        var menu = e.menu;
        var menuItem = menu.add({ title: "Add" });
        menuItem.addEventListener("click", addHandler);
   }; 
};
