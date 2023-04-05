const heroButton = document.querySelector('.hero-button');

// add an event listener to the button element to listen for a click event
heroButton.addEventListener('click', () => {
  // when the button is clicked, redirect the user to the specified link
  window.location.href = 'about.html';
});