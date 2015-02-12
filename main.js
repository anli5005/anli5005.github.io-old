function animateNavbar() {
    
}

function whenReady() {
    animateStartupElements(true, animateNavbar);
    $("#page-home").hide();
    $("#page-home").fadeIn(1500);
}

$(document).ready(whenReady);