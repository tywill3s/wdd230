// Get the current date
const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Update the date in the header
const dateDisplay = document.querySelector('.header__date');
dateDisplay.textContent = `${daysOfWeek[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

// Toggle the navigation menu
const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__nav');
hamburger.addEventListener('click', () => {
  navigation.classList.toggle('header__nav--active');
});

// Update the copyright year in the footer
const copyright = document.querySelector('.footer__copyright-year');
copyright.textContent = today.getFullYear();

// Update the last modification date in the footer
const lastModified = document.querySelector('.footer__last-modified');
lastModified.textContent = `Last modified: ${daysOfWeek[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
