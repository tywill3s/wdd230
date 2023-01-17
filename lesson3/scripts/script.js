function updateTime() {

    var timeElement = document.getElementById("last-update");

    var lastModified = document.lastModified;

    timeElement.textContent = "Last update: " + lastModified;
  }
  window.onload = updateTime;