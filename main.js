// Create HTML5 elements.
document.createElement("header");
document.createElement("section");
document.createElement("footer");

this.lastTimerId = -1;

function loadProjects() {
    var listRows = $("ol#project-list li");
    
    var table = $("table#projects");
    var rows = Math.floor(listRows.length / 2) + 1;
    var cells = listRows.length;
    
    var rowNum = 0;
    while (rowNum < rows) {
        var row = $("<tr></tr>");
        var i = 0;
        while ((i < 2) && (((2 * rowNum) + i) < cells)) {
            var cellNum = (2 * rowNum) + i;
            var cellData = listRows.eq(cellNum);
            var cell = $("<td></td>");
            
            var cellLink = cellData.children().filter("a");
            var cellSpan = cellData.children().filter(".about");
            
            var nameData = cellLink.text();
            var linkData = cellLink.attr("href");
            var moreData = cellSpan.text();
            
            var cellLeft = $("<div class=\"left-project-detail\"></div>");
            var cellName = $("<p class=\"big\"></p>");
            cellName.text(nameData).appendTo(cellLeft);
            cellLeft.appendTo(cell);
            
            var cellRight = $("<div class=\"right-project-detail\"></div>");
            var visitLink = $("<a>Visit</a>");
            visitLink.attr("href", linkData);
            if (linkData.indexOf("github") < 0) {
                visitLink.attr("target", "_blank");
            }
            visitLink.appendTo(cellRight);
            cellRight.appendTo(cell);
            
            cell.appendTo(row);
            i++;
        }
        row.appendTo(table);
        rowNum++;
    }
}

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
    
    // Calculate "scroll down for more" showing
    if (scrollTop > (navTop - $(window).height())) {
        $("#scroll-message").hide();
    } else {
        $("#scroll-message").show();
    }
}

function animCompelete() {}

function animateHome() {
    $("#page-home").hide();
    $("#page-home").fadeIn(1500);
}

function whenReady() {
    $("ol#project-list").hide();
    
    var navLinkIds = ["#page-home", "#page-about", "#page-projects", ""];
    var navElements = $("nav ul li a");
    var i = 0;
    while (i < navLinkIds.length) {
        if (navLinkIds[i] != "") {
            var element = navElements.eq(i);
            element.attr("href", "javascript:scrollTo(\""+navLinkIds[i]+"\")");
        }
        i++;
    }
    
    loadProjects();
    
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
    
    if (offset > $("#navigation-bar").offset().top) {
        offset -= $("nav").height();
    }
    
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