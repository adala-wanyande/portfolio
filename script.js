document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.createElement("div");
  overlay.classList.add("background-overlay");
  document.body.appendChild(overlay);
  overlay.style.display = "block";

  document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate offsets to center the overlay
    const offsetX = -600;
    const offsetY = -600;

    // Update overlay position with offsets
    overlay.style.left = `${mouseX + offsetX}px`;
    overlay.style.top = `${mouseY + offsetY}px`;

    // Ensure the overlay class is applied
    overlay.classList.add("background-overlay");
  });

  document.addEventListener("mouseenter", function () {
    // Show overlay when mouse enters the document
    overlay.style.display = "block";
  });

  // Handle the focused state for the navigation bar
  const navItems = document.querySelectorAll("nav a");
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function () {
      // Remove 'focused' class from all navigation items
      navItems.forEach((item) => {
        item.parentNode.classList.remove("focused");
      });

      // Add 'focused' class to the clicked navigation item's parent
      this.parentNode.classList.add("focused");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("html").classList.add("fade-in");
});

document.addEventListener("DOMContentLoaded", makeLinksSmooth);

function makeLinksSmooth() {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  function isSmallScreen() {
    return window.innerWidth < 1026; // Adjust breakpoint if needed
  }

  function syncScroll(event) {
    if (isSmallScreen()) return; // Disable scroll sync on small screens

    event.preventDefault(); // Prevent default scroll behavior

    main.scrollBy({
      top: event.deltaY, // Scroll the main section based on wheel movement
      // behavior: "smooth",
    });
  }

  function syncTouchScroll(event) {
    if (isSmallScreen()) return; // Disable scroll sync on small screens

    event.preventDefault();

    main.scrollBy({
      top: event.touches[0].clientY / 2, // Adjust scroll sensitivity for touch devices
      // behavior: "smooth",
    });
  }

  // Attach event listeners only if it's not a small screen
  header.addEventListener("wheel", syncScroll);
  header.addEventListener("touchmove", syncTouchScroll);

  // Listen for screen resize to adjust behavior dynamically
  window.addEventListener("resize", function () {
    if (isSmallScreen()) {
      // Remove event listeners if on a small screen
      header.removeEventListener("wheel", syncScroll);
      header.removeEventListener("touchmove", syncTouchScroll);
    } else {
      // Reattach event listeners if the screen is resized back to large
      header.addEventListener("wheel", syncScroll);
      header.addEventListener("touchmove", syncTouchScroll);
    }
  });
});
