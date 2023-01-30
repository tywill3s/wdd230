const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector("#year-field").innerText = currentYear;
document.querySelector("#last-update-field").innerText = document.lastModified;
document.querySelector("#current-date").textContent = Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(currentDate);


const buttonOpen = document.getElementById("burger-open");
const buttonClose = document.getElementById("burger-close");
function toggleMenu() {
    console.log("Click-eth-ed");
    document.getElementById("burger-nav").classList.toggle("hidden");
    
    if(document.getElementById("burger-nav").classList.contains("hidden")) {
        buttonOpen.classList.remove("hidden");
        buttonClose.classList.add("hidden"); }
    else {
        buttonOpen.classList.add("hidden");
        buttonClose.classList.remove("hidden");  }
}

document.getElementById("burger-open").onclick = toggleMenu;
document.getElementById("burger-close").onclick = toggleMenu;


/* const body = document.querySelector("header");
const observer = new IntersectionObserver( 
  ([event]) => { event.target.childNodes[1].classList.toggle("menu-pinned", event.intersectionRatio < 1); console.log(event.intersectionRatio)},
  { threshold: [1] }
);
//todo: I think the intersection is not being met.  header-gradient is never allowed to intersect?

observer.observe(body); */