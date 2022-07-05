const loadHeaderNav = () => {
    const content = document.getElementById('content');
    
    
    content.innerHTML = `<div class="headerContainer">
    <div class="titleContainer">
        <h1 id="title">TOTALLY REAL HUMAN FOOD FOR HUMANS</h1>
    </div>
</div>

<div class="navContainer">
    <ul>
        <li><a id="home" href=#>HOME</a></li>
        <li><a id="menu" href=#>MENU</a></li>
        <li><a id="contact" href=#>CONTACT</a></li>
    </ul>
</div>
`
console.log("working")

const page = document.createElement('div');
page.innerHTML = 'HI';
page.id = "page";
content.appendChild(page);
}

export { loadHeaderNav };