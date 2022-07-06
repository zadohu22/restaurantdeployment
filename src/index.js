


import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";
import { loadHeaderNav } from "./pageLoad";

loadHeaderNav();
loadHomePage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById('contact');
const content = document.getElementById("content");


homeButton.addEventListener('click', () => {
    page.innerHTML = '';

    loadHomePage();
});

menuButton.addEventListener('click', () => {
    page.innerHTML = '';
    loadMenuPage();
});

contactButton.addEventListener('click', () => {
    page.innerHTML = '';
    loadContactPage();
})



console.log('test');

content.appendChild(page);


// loadHomePage();








