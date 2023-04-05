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
    const celsius = data.main.temp;
    const far = Math.round((celsius * 9/5) + 32);
    temperatureEl.textContent = `${far}°F`;
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





     
  