document.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;
    var scrolled = window.scrollY;
    var footer = document.querySelector("footer");

    if (scrolled + windowHeight >= fullHeight) {
        footer.style.opacity = 1; // Make footer visible
        footer.style.display = "block"; // Ensure it's not display:none
    } else {
        footer.style.opacity = 0; // Make footer invisible
        footer.addEventListener('transitionend', function() {
            if (footer.style.opacity === "0") {
                footer.style.display = "none"; // Hide after transition
            }
        }, { once: true });
    }
});
