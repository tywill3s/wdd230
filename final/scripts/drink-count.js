const infoCard = document.querySelector('#drink-count');

let numSpecialtyDrinks = 0;

if (localStorage.getItem('numSpecialtyDrinks')) {
    numSpecialtyDrinks = parseInt(localStorage.getItem('numSpecialtyDrinks'));
  }

infoCard.textContent = numSpecialtyDrinks;
