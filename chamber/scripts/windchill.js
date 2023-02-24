var temp = document.getElementById("temperature").innerText;
var text = document.getElementById("windchill");
var windspeed = document.getElementById("sky").innerText;


if (temp <= 50 && windspeed > 3) {
    var windchill = (35.74 + ((0.6215*temp)+ (-35.75*(windspeed**0.16))) + (0.4275*temp*(windspeed**0.16)));
    console.log(windchill);
    text.innerText = Math.round(windchill * 100) / 100;
}
else {
    text.innerText = "N/A";
}