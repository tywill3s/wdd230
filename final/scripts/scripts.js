const apiKey = 'f1f14329592a86fcef69094ab4345637';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=carlsbad&units=metric&cnt=4&appid=${apiKey}`;

const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');
const humidityEl = document.querySelector('.humidity');
const forecastEls = document.querySelectorAll('.day');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    temperatureEl.textContent = `${data.main.temp}°C`;
    descriptionEl.textContent = data.weather[0].description;
    humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
  });

fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    for (let i = 1; i <= 3; i++) {
      forecastEls[i - 1].querySelector('h3').textContent = new Date(data.list[i].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
      forecastEls[i - 1].querySelector('.high').textContent = `${data.list[i].temp.max}°C`;
      forecastEls[i - 1].querySelector('.low').textContent = `${data.list[i].temp.min}°C`;
    }
  });


const drinkForm = document.querySelector('#fresh-form');
const drinkCountEl = document.querySelector('#drink-count');

// Check if the user has a drink count stored locally
if (localStorage.getItem('drinkCount')) {
  // If yes, display the stored count
  drinkCountEl.textContent = localStorage.getItem('drinkCount');
} else {
  // If not, initialize the count to 0
  localStorage.setItem('drinkCount', 0);
  drinkCountEl.textContent = 0;
}

drinkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Increment the drink count and store it locally
  const drinkCount = parseInt(localStorage.getItem('drinkCount'));
  localStorage.setItem('drinkCount', drinkCount + 1);
  drinkCountEl.textContent = drinkCount + 1;

  // Submit the form
  drinkForm.submit();
});


const lastModifiedEl = document.querySelector('#last-modified');
const lastModified = new Date(document.lastModified);
lastModifiedEl.textContent = lastModified.toLocaleString();



// select form and output elements
const form = document.querySelector('#fresh-form');
const output = document.querySelector('#fresh-output');

// fetch fruit data from external JSON source
fetch('../json.json')
  .then(response => response.json())
  .then(data => {
    // populate select elements with fruit options
    const fruits = data.fruits;
    const selectElems = document.querySelectorAll('.fruit-select');
    selectElems.forEach(selectElem => {
      fruits.forEach(fruit => {
        console.log("WORKED");
        const option = document.createElement('option');
        option.text = fruit.name;
        option.value = fruit.id;
        selectElem.add(option);
      });
    });

    // handle form submission
    form.addEventListener('submit', event => {
      event.preventDefault(); // prevent default form submission behavior

      // get form input values
      const firstName = form.elements['first-name'].value;
      const email = form.elements.email.value;
      const phone = form.elements.phone.value;
      const fruitIds = Array.from(form.elements['fruit-select']).map(select => select.value);
      const specialInstructions = form.elements['special-instructions'].value;

      // calculate total nutrition values
      let totalCarbs = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;
      fruitIds.forEach(fruitId => {
        const fruit = fruits.find(fruit => fruit.id === fruitId);
        if (fruit) {
          totalCarbs += fruit.nutrition.carbs;
          totalProtein += fruit.nutrition.protein;
          totalFat += fruit.nutrition.fat;
          totalSugar += fruit.nutrition.sugar;
          totalCalories += fruit.nutrition.calories;
        }
      });

      // format output
      const date = new Date();
      const outputHTML = `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Fruits:</strong> ${fruitIds.map(id => fruits.find(fruit => fruit.id === id).name).join(', ')}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <p><strong>Order Date:</strong> ${date.toISOString()}</p>
        <h3>Total Nutrition Values</h3>
        <p><strong>Carbs:</strong> ${totalCarbs}g</p>
        <p><strong>Protein:</strong> ${totalProtein}g</p>
        <p><strong>Fat:</strong> ${totalFat}g</p>
        <p><strong>Sugar:</strong> ${totalSugar}g</p>
        <p><strong>Calories:</strong> ${totalCalories}cal</p>
      `;

      // display output
      output.innerHTML = outputHTML;
    });
  })
  .catch(error => {
    console.error('Failed to fetch fruit data', error);
  });


  async function initMap() {
    const center = { lat: 37.7749, lng: -122.4194 };
    
    try {
      const map = await new google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 12
      });
      
      const marker = await new google.maps.Marker({
        position: center,
        map,
        title: 'Our Location'
      });
    } catch (error) {
      console.error('Error loading map:', error);
    }
  }
  


     
  