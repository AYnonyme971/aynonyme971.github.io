const navBtn = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');

console.error('Développeur détecté');
console.warn('Regarde pas le code, tu es trop curieux')

function clickForResponsive() {
    navMenu.classList.toggle('show-menu');
    console.log("Menu responsive");
}
navBtn.addEventListener('click', clickForResponsive);