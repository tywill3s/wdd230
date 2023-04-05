
// Find the select element in your HTML code

const url = './json/drinks.json';


// Fetch the external JSON file
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Loop through each object in the array and add an option element for its name

    data.forEach(item => {
        const select = document.querySelector('#fruit-select');
      const option = document.createElement('option');
      option.text = item.name;
      select.add(option);
    });
  });

  fetch(url)
  .then(response => response.json())
  .then(data => {
    // Loop through each object in the array and add an option element for its name

    data.forEach(item => {
        const select = document.querySelector('#fruit-select2');
      const option = document.createElement('option');
      option.text = item.name;
      select.add(option);
    });
  });

  fetch(url)
  .then(response => response.json())
  .then(data => {
    // Loop through each object in the array and add an option element for its name

    data.forEach(item => {
        const select = document.querySelector('#fruit-select3');
      const option = document.createElement('option');
      option.text = item.name;
      select.add(option);
    });
  });

const form = document.querySelector('#order-form');
let numSpecialtyDrinks = 0;

if (localStorage.getItem('numSpecialtyDrinks')) {
    numSpecialtyDrinks = parseInt(localStorage.getItem('numSpecialtyDrinks'));
  }

form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById("div1").innerHTML = '';

  const firstName = form.elements.firstName.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const fruit1 = form.elements.fruit1.value;
  const fruit2 = form.elements.fruit2.value;
  const fruit3 = form.elements.fruit3.value;
  const specialInstructions = form.elements.specialInstructions.value;

  const order = {
    firstName: firstName,
    email: email,
    phone: phone,
    fruit1: fruit1,
    fruit2: fruit2,
    fruit3: fruit3,
    special: specialInstructions,
  };

  numSpecialtyDrinks++;
  localStorage.setItem('numSpecialtyDrinks', numSpecialtyDrinks);

const currentDate = new Date();


const newH = document.createElement("h2");
newH.innerHTML = "Thank you for submitting this form!";

const newP = document.createElement("p");
newP.innerHTML = `
Here is your order:<br><br>
<strong>First Name</strong>: ${order.firstName}<br>
<strong>Email</strong>: ${order.email}<br>
<strong>Phone</strong>: ${order.phone}<br>
<strong>Fruit 1</strong>: ${order.fruit1}<br>
<strong>Fruit 2</strong>: ${order.fruit2}<br>
<strong>Fruit 3</strong>: ${order.fruit3}<br>
<strong>Special Instructions</strong>: ${order.special}<br><br>
<strong>Order Date</strong>: ${currentDate};
`;


document.getElementById("div1").appendChild(newH);
document.getElementById("div1").appendChild(newP);
});


