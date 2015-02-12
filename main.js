function onScroll() {
    var scrollTop = $("body").scrollTop();
    var navTop = $("#navigation-bar").offset().top;
    var navBar = $("nav");
    if (scrollTop > navTop) {
        if (!(navBar.hasClass("fixed"))) {
            navBar.addClass("fixed");
        }
    } else {
        if (navBar.hasClass("fixed")) {
            navBar.removeClass("fixed");
        }
    }
}

function animateNavbar() {
    $("nav").fadeIn(750);
}

function whenReady() {
    console.clear();
    $("nav").hide();
    animateStartupElements(true, animateNavbar);
    $("#page-home").hide();
    $("#page-home").fadeIn(1500);
    $(window).scroll(onScroll);
}

$(document).ready(whenReady);