const loadContactPage = () => {
    const content = document.getElementById('content');
    const page = document.getElementById('page');

    page.innerHTML = `
    <h1 class="contactTitle">CONTACT</h1>
    <div class="contactContainer">
                <div class="contactInfo">
                    <h2>NAME:</h2>
                    <h3>01000010 01100101 01101110 01100100 01100101 01110010</h3>
                    <h2 class="phone">COMMUNICATION MODULE NUMBER:</h2>
                    <h3>00110101 00110101 00110101 00101101 00110101 00110101 00110101 00101101 00110101 00110101 00110101 00110101</h3>
                    <h2 class="address">ADDRESS:</h2>
                    <h3>42° 25' 5.412'' N <br> 71° 15' 15.264'' W</h3>
                </div>
                <div class="contactPicture"></div>
            </div>
    `;
}

export { loadContactPage };
