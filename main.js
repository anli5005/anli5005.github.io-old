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
    $("nav ul li p").fadeIn(750);
}

function whenReady() {
    $("nav ul li p").hide();
    animateStartupElements(true, animateNavbar);
    $("#page-home").hide();
    $("#page-home").fadeIn(1500);
    $(window).scroll(onScroll);
    onScroll();
}

$(document).ready(whenReady);