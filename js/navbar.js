/**
 * Created by Adam on 4/21/2017.
 */
function openNav(sideNav) {
    sideNav.css("width", "250px");
    $("#main-navbar").css("width",  $(window).width() - 250 + "px");
    $("#main-navbar-sidenavbtn-icon").text('close');
}

function closeNav(sideNav) {
    sideNav.css("width", "0");
    $("#main-navbar").css("width",  $(window).width() + "px");
    $("#main-navbar-sidenavbtn-icon").text('menu');
}

function toggleNav() {
    var sideNav = $("#main-sidenav");
    if (sideNav.width() === 0) {
        openNav(sideNav);
    } else {
        closeNav(sideNav);
    }
}
