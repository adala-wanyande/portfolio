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
});