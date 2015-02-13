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

function animCompelete() {}

function animateHome() {
    $("#page-home").hide();
    $("#page-home").fadeIn(1500);
}

function whenReady() {
    animateStartupElements(true, animCompelete);
    animateHome();
    $(window).scroll(onScroll);
    onScroll();
}

$(document).ready(whenReady);