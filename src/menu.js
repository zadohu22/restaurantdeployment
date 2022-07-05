const loadMenuPage = () => {
    const content = document.getElementById('content');
    const page = document.getElementById('page');

    page.innerHTML = `
    <h1 class="menuTitle"> MENU </h1>
    <div class="menuContainer">
    
    <div class="bowlOfScrews"></div>
    <h1>SOUP</h1>

    <div class="spaghetti"></div>
    <p>Free photo <a href="https://www.dreamstime.com/bowl-cyber-noodles-free-stock-photos-image-free-7772828">7772828</a> © <a href="https://www.dreamstime.com/grybaz_info" itemprop="author">Eimantas Buzas</a> - <a href="https://www.dreamstime.com/">Dreamstime.com</a></p>
    <h1>SPAGHETTI</h1>

    <div class="water"></div>
    <h1>WATER</h1>

</div>`;

console.log("menu")
// content.appendChild(page);
}


export { loadMenuPage };