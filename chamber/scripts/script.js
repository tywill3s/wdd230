function updateTime() {

  var timeElement = document.getElementById("last-update");

  var lastModified = document.lastModified;

  timeElement.textContent = "Last update: " + lastModified;
}
window.onload = updateTime;


let currentDate = new Date();
let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
let dateString = currentDate.toLocaleDateString('en-US', options);
document.querySelector('#currentDate').textContent = dateString;


// Get the current date
var today = new Date();

// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
var dayOfWeek = today.getDay();

// Check if today is Monday or Tuesday
if (dayOfWeek === 1 || dayOfWeek === 2) {
  // Create the banner element
  var banner = document.createElement("div");
  banner.style.position = "fixed";
  banner.style.top = 0;
  banner.style.width = "98.65em";
  banner.style.backgroundColor = "#fff";
  banner.style.padding = "10px";
  banner.style.textAlign = "center";
  banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.style.zIndex = 1;
  banner.id = "banner";
  // Add the banner to the page
  document.body.prepend(banner);
}