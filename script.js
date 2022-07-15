// hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
});

// const navLi = document.querySelectorAll("nav ul li");
// navLi.forEach((n) => {
//     n.addEventListener("click", () => {
//         nav.classList.toggle("slide");
//     });
// });
