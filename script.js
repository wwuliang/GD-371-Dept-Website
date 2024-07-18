document.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;
    var scrolled = window.scrollY;
    var footer = document.querySelector("footer");

    console.log("Scrolled: ", scrolled);
    console.log("Window Height: ", windowHeight);
    console.log("Full Height: ", fullHeight);

    if (scrolled + windowHeight >= fullHeight) {
        console.log("Footer should be visible");
        footer.style.opacity = 1; // Make footer visible
        footer.style.display = "block"; // Ensure it's not display:none
    } else {
        console.log("Footer should be invisible");
        footer.style.opacity = 0; // Make footer invisible

        // Ensure the event listener is only added once
        footer.removeEventListener('transitionend', handleTransitionEnd);
        footer.addEventListener('transitionend', handleTransitionEnd, { once: true });
    }
});

function handleTransitionEnd() {
    var footer = document.querySelector("footer");
    if (footer.style.opacity === "0") {
        footer.style.display = "none"; // Hide after transition
    }
    console.log("Transition ended. Footer visibility updated.");
}
