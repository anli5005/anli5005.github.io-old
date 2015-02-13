this.lastTimerId = -1;

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

function scrollTo(selector) {
    if (this.lastTimerId >= 0) {
        window.clearInterval(this.lastTimerId);
    }
    
    var offset = $(selector).offset().top;
    var body = $("body");
    var st = body.scrollTop();
    
    // Prepare animation blocks
    function scrollUp() {
        body.scrollTop(body.scrollTop() - 3);
    }
    function scrollDown() {
        body.scrollTop(body.scrollTop() + 3);
    }
    function doNothing() {
        
    }
    
    // Schedule timeouts
    var scrollAnimFunction;
    if (st > offset) {
        scrollAnimFunction = scrollUp;
    } else if (st < offset) {
        scrollAnimFunction = scrollDown;
    } else {
        scrollAnimFunction = doNothing;
    }
    
    var timerId = window.setInterval(scrollAnimFunction, 1);
    function stopInterval() {
        window.clearInterval(timerId);
        body.scrollTop(offset);
    }
    window.setTimeout(stopInterval, (Math.abs(st - offset) * 3));
    
    this.lastTimerId = timerId;
}

$(document).ready(whenReady);