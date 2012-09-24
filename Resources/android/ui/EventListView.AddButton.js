module.exports = function(win, addHandler) {
	win.activity.onCreateOptionsMenu = function(e){
        var menuItem = e.menu.add({ title: "Add" });
        menuItem.addEventListener("click", addHandler);
   }; 
};
