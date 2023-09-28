const navbar = document.querySelector(".navbar");
const barButton = document.querySelector(".barButton");
const lineBar = document.querySelectorAll(".lineBar");


barButton.addEventListener("click", function () {
    navbar.classList.toggle("showNavbar");

    lineBar.forEach(function (e) {
        e.classList.toggle("lineBarReverse");
    });
});


const list = document.querySelectorAll(".list");

list.forEach(function (navList) {
    navList.addEventListener("click", function () {
        navbar.classList.remove("showNavbar");
    });
});