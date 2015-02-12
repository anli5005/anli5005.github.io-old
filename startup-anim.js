// Only for use in anli5005's projects
// This project assumes that the images (startup_1 and startup_2) are in the same directory
// To change this behavior: COMING SOON.
// You also need startup-anim.css

// Step 1. Set up the startup animation
// Pass a jQuery object here; returns the element
// This provides the necessary elements needed. Of course, if you have them, you can just skip this part.
// The CSS selector is #startup-anim
function appendStartupElementsTo(element) {
    var div = $("<div class='startup-anim'></div>");
    var img = $("<img></img>");
    img.attr("src", "startup_2.png");
    div.append(img).appendTo(element);
    return img;
}

// Step 2. Animate
// Pass true if you want the startup image to stay there
function animateStartupElements(isPersistent, completion) {
    var img = $(".startup-anim img");
    var img2 = $(".startup-anim");
    
    img.hide();
    function secondAnimation() {
        function prepareThirdAnimation() {
            if (!isPersistent) {
                function thirdAnimation() {
                    img2.animate({"background-size": 0}, {duration: 750, complete: secondAnimation, queue: false});
                    img2.fadeOut(750, completion);
                }
                window.setTimeout(thirdAnimation, 1000);
            }
        }
        img.fadeIn(1500, prepareThirdAnimation);
    }
    img2.css("background-size", 0);
    img2.animate({"background-size": 375}, 750, secondAnimation);
}

// Skip everything and come here if you're a starter
function startupAnimation(appendTo, isPersistent, completion) {
    var e = appendStartupElementsTo(appendTo);
    animateStartupElements(isPersistent, completion);
    return e;
}