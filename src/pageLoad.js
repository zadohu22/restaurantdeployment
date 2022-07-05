const loadHomePage = (() => {
    const container = document.getElementById('content');

    container.innerHTML = `<div class="headerContainer">
    <div class="titleContainer">
        <h1 id="title">TOTALLY REAL HUMAN FOOD FOR HUMANS</h1>
    </div>
</div>

<div class="navContainer">
    <ul>
        <li><a href=#>HOME</a></li>
        <li><a href=#>MENU</a></li>
        <li><a href=#>CONTACT</a></li>
    </ul>
</div>

<div class="bodyContainer">
    <div class="hoursContainer">
        <h3>HOURS OF OPERATION:</h3>
        <p>YES</p>
    </div>

    <div class="locationContainer">
        <h3>LOCATION:</h3>
        <p>42° 25' 5.412'' N <br> 71° 15' 15.264'' W</p>
    </div>
</div>`;

console.log("working")
})()

export default { loadHomePage };