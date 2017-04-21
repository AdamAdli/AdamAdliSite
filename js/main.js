var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", function (event) {
    var sideNav = $("#main-sidenav");
    if (sideNav.width() === 0) {
        closeNav(sideNav);
    } else {
        openNav(sideNav);
    }
});
