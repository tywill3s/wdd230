//const apiKey = 'f1f14329592a86fcef69094ab4345637';
const apiKey = '32f60e407429e5c25a0d1f653108f601';

const lat = 33.1581;
const lon = -117.3506;
const exclude = 'minutely,hourly'; 
const units = 'imperial';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=metric&appid=${apiKey}`;

const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');
const humidityEl = document.querySelector('.humidity');
const forecastEls = document.querySelectorAll('.day');

const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');

const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');
const title3 = document.querySelector('#title3');
const high1 = document.querySelector('#high1');
const high2 = document.querySelector('#high2');
const high3 = document.querySelector('#high3');
const low1 = document.querySelector('#low1');
const low2 = document.querySelector('#low2');
const low3 = document.querySelector('#low3');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const celsius = data.main.temp;
    const far = Math.round((celsius * 9/5) + 32);
    temperatureEl.textContent = `${far}°F`;
    descriptionEl.textContent = data.weather[0].description;
    humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
  });

fetch(`https://api.openweathermap.org/data/3.0/onecall?appid=${apiKey}&lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}`)
  .then(response => response.json())
  .then(data => {
    let today = new Date();
    let forecastDay1 = new Date();
    let forecastDay2 = new Date();
    let forecastDay3 = new Date();
    forecastDay1.setDate(today.getDate() + 1);
    forecastDay2.setDate(today.getDate() + 2);
    forecastDay3.setDate(today.getDate() + 3);

    const options = { weekday: 'long'};
    day1.textContent = forecastDay1.toLocaleString('en-US', options);
    day2.textContent = forecastDay2.toLocaleString('en-US', options);
    day3.textContent = forecastDay3.toLocaleString('en-US', options);

    let dailyForecast = [];
    dailyForecast[0] = data.daily[1];
    dailyForecast[1] = data.daily[2];
    dailyForecast[2] = data.daily[3];

    day1.textContent = dailyForecast[0].temp.day;
    low1.textContent = dailyForecast[0].temp.min;
    high1.textContent = dailyForecast[0].temp.max;
    day2.textContent = dailyForecast[1].temp.day;
    low2.textContent = dailyForecast[1].temp.min;
    high2.textContent = dailyForecast[1].temp.max;
    day3.textContent = dailyForecast[2].temp.day;
    low3.textContent = dailyForecast[2].temp.min;
    high3.textContent = dailyForecast[2].temp.max;


    });





     
  