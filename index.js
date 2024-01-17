// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    const clickMeButton = document.getElementById('clickMeButton');

    // Add a click event listener to the button
    clickMeButton.addEventListener('click', function () {
        alert('Button clicked! Add your custom functionality here.');
    });
});
