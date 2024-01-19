document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div');
  overlay.classList.add('background-overlay');
  document.body.appendChild(overlay);

  // Initialize last known mouse position
  let lastMouseX = 0;
  let lastMouseY = 0;

  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate offsets to center the overlay
    const offsetX = -600;
    const offsetY = -600;

    // Update overlay position with offsets
    overlay.style.left = `${mouseX + offsetX}px`;
    overlay.style.top = `${mouseY + offsetY}px`;

    // Update last known mouse position
    lastMouseX = mouseX;
    lastMouseY = mouseY;

    // Ensure the overlay class is applied
    overlay.classList.add('background-overlay');
  });

  document.addEventListener('mouseenter', function () {
    // Show overlay when mouse enters the document
    overlay.style.display = 'block';
  });

  document.addEventListener('mouseleave', function () {
    // Update overlay position to the last known mouse position
    overlay.style.left = `${lastMouseX}px`;
    overlay.style.top = `${lastMouseY}px`;

    // Hide overlay and remove the overlay class when mouse leaves the document
    overlay.style.display = 'none';
    overlay.classList.remove('background-overlay');
  });

  // Handle the focused state for the navigation bar
  const navItems = document.querySelectorAll('nav a');
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', function () {
      // Remove 'focused' class from all navigation items
      navItems.forEach((item) => {
        item.parentNode.classList.remove('focused');
      });

      // Add 'focused' class to the clicked navigation item's parent
      this.parentNode.classList.add('focused');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('html').classList.add('fade-in');
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
    targetElement.scrollIntoView({ behavior: "smooth", });
  }
}