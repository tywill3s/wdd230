let timeBetween
const myStorage = localStorage.getItem('dates');
let dates
if(myStorage){
    dates = JSON.parse(myStorage);
} else {
    dates = [];
}
const now = new Date();
const lastVisit = dates.at(-1);
dates.push(now);

if(lastVisit){
    timeBetween = Math.floor((now.getTime() - new Date(lastVisit).getTime()) / 1000 / 60 / 60 / 24);
}

localStorage.setItem('dates', JSON.stringify(dates));

if (timeBetween == 0) {
    console.log("TEST");
    document.querySelector('#lastVisit').innerHTML += "This is your first time on this page! Welcome.";

} else {
    console.log("TESTTTT");
    document.querySelector('#lastVisit').innterHTML += "You last visited this site: ";
    document.querySelector('#lastVisit').innterHTML += timeBetween += " days ago";
}