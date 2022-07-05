const loadHomePage = () => {
    const content = document.getElementById('content');
    const page = document.getElementById('page');
    
    
    page.innerHTML = `<div class="bodyContainer">
    <div class="hoursContainer">
        <h3>HOURS OF OPERATION:</h3>
        <p>YES</p>
    </div>

    <div class="locationContainer">
        <h3>LOCATION:</h3>
        <p>42° 25' 5.412'' N <br> 71° 15' 15.264'' W</p>
    </div>
</div>;`;

// content.appendChild(page);
}



export { loadHomePage };
