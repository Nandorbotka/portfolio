const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-a");
const checkOutBtn = document.querySelector(".check-btn");
const sitesDiv = document.querySelector(".sites-div");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLink.forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

checkOutBtn.addEventListener("click", () => {
    sitesDiv.classList.toggle("active");
});
