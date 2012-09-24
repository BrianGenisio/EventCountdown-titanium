module.exports = function(win, addHandler) {
	win.activity.onCreateOptionsMenu = function(e){
        var menuItem = e.menu.add({ title: "Remove" });
        menuItem.addEventListener("click", addHandler);
   }; 
};