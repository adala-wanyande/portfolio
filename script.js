document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div');
  overlay.classList.add('background-overlay');
  document.body.appendChild(overlay);
  overlay.style.display = 'block';

  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate offsets to center the overlay
    const offsetX = -600;
    const offsetY = -600;

    // Update overlay position with offsets
    overlay.style.left = `${mouseX + offsetX}px`;
    overlay.style.top = `${mouseY + offsetY}px`;

    // Ensure the overlay class is applied
    overlay.classList.add('background-overlay');
  });

  document.addEventListener('mouseenter', function () {
    // Show overlay when mouse enters the document
    overlay.style.display = 'block';
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

