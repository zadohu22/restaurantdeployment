// import './styles.css';


import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadHeaderNav } from "./pageLoad";

loadHeaderNav();
loadHomePage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

homeButton.addEventListener('click', () => {
    page.innerHTML = '';

    loadHomePage();
});

menuButton.addEventListener('click', () => {
    page.innerHTML = '';
    loadMenuPage();
});


const content = document.getElementById("content");
const thePage = document.getElementById("page");



content.appendChild(page);


// loadHomePage();


// const contactButton = document.getElementById("contact");




// contactButton.addEventListener('click', () => { import { loadContactPage } from "./contact"})





