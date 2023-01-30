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
