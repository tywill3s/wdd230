const apiKey = "be0c2f3d095fa3b9d77406dae565af23";
const city = "Eagle Mountain";
const units = "imperial";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    console.log(temperature);
    const condition = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const windChill = calculateWindChill(temperature, windSpeed);
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    var temp = document.getElementById('temperature').innerHTML = temperature;
  

  })
  .catch((error) => {
    console.log(error);
  });

function calculateWindChill(temp, speed) {
  const fahrenheit = (temp * 9) / 5 + 32;
  if (fahrenheit > 50 || speed < 3) {
    return "N/A";
  }
  const windChill = Math.round(
    35.74 +
      0.6215 * fahrenheit -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * fahrenheit * Math.pow(speed, 0.16)
  );
  return `${windChill} °F`;
}