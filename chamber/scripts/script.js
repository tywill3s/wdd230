const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector("#year-field").innerText = currentYear;
document.querySelector("#last-update-field").innerText = document.lastModified;
document.querySelector("#current-date").textContent = Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(currentDate);


const buttonOpen = document.getElementById("burger-open");
const buttonClose = document.getElementById("burger-close");
const burgerMenu = document.getElementById("burger-menu");

function toggleMenu() {
    burgerMenu.classList.toggle("hidden");
    
    if(burgerMenu.classList.contains("hidden")) {
        burgerMenu.classList.remove("flex");
        
        buttonOpen.classList.remove("hidden");
        buttonClose.classList.add("hidden"); }
    else {
        burgerMenu.classList.add("flex");

        buttonOpen.classList.add("hidden");
        buttonClose.classList.remove("hidden");  }
}

document.getElementById("burger-open").onclick = toggleMenu;
document.getElementById("burger-close").onclick = toggleMenu;


const day = new Date().getDay();
const header = document.querySelector("header");

const dayOfTheWeek = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

if(dayOfTheWeek[day] == "Monday" | dayOfTheWeek[day] == "Tuesday") {
    const alertBanner = document.createElement("div");
    alertBanner.innerHTML = '<span>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</span>';
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<img src="images/close-icon.svg" alt="close alert" width="20" height="20">'
    alertBanner.appendChild(deleteButton);
    alertBanner.classList.add("alert");
    header.prepend(alertBanner);
    deleteButton.addEventListener("click", () => {
        alertBanner.remove();    
});
}


