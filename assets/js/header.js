const open = document.getElementById("menu"),
    menu = document.querySelector(".nav-links");

open.addEventListener("click", () => {
    menu.classList.toggle("active");
});
