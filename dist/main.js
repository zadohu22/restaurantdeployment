/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactPage": () => (/* binding */ loadContactPage)
/* harmony export */ });
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




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
const loadHomePage = () => {
    const content = document.getElementById('content');
    const page = document.getElementById('page');
    
    
    page.innerHTML = `
    <h1 class="homeTitle"> HOME </h1>
    <div class="bodyContainer">
    
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






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuPage": () => (/* binding */ loadMenuPage)
/* harmony export */ });
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




/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeaderNav": () => (/* binding */ loadHeaderNav)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");








(0,_pageLoad__WEBPACK_IMPORTED_MODULE_3__.loadHeaderNav)();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById('contact');
const content = document.getElementById("content");


homeButton.addEventListener('click', () => {
    page.innerHTML = '';

    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
});

menuButton.addEventListener('click', () => {
    page.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();
});

contactButton.addEventListener('click', () => {
    page.innerHTML = '';
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();
})





content.appendChild(page);


// loadHomePage();









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7QUNwQjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOzs7O0FBSXdCOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIc0M7QUFDQTtBQUNNO0FBQ0Q7O0FBRTNDLHdEQUFhO0FBQ2IsbURBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsSUFBSSxtREFBWTtBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUkseURBQWU7QUFDbkIsQ0FBQzs7Ozs7O0FBTUQ7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2VfdG9wLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2VfdG9wLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2VfdG9wLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2VfdG9wLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZV90b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG5cbiAgICBwYWdlLmlubmVySFRNTCA9IGBcbiAgICA8aDEgY2xhc3M9XCJjb250YWN0VGl0bGVcIj5DT05UQUNUPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TkFNRTo8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+MDEwMDAwMTAgMDExMDAxMDEgMDExMDExMTAgMDExMDAxMDAgMDExMDAxMDEgMDExMTAwMTA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwaG9uZVwiPkNPTU1VTklDQVRJT04gTU9EVUxFIE5VTUJFUjo8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+MDAxMTAxMDEgMDAxMTAxMDEgMDAxMTAxMDEgMDAxMDExMDEgMDAxMTAxMDEgMDAxMTAxMDEgMDAxMTAxMDEgMDAxMDExMDEgMDAxMTAxMDEgMDAxMTAxMDEgMDAxMTAxMDEgMDAxMTAxMDE8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhZGRyZXNzXCI+QUREUkVTUzo8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+NDLCsCAyNScgNS40MTInJyBOIDxicj4gNzHCsCAxNScgMTUuMjY0JycgVzwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RQaWN0dXJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5leHBvcnQgeyBsb2FkQ29udGFjdFBhZ2UgfTtcbiIsImNvbnN0IGxvYWRIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICBcbiAgICBcbiAgICBwYWdlLmlubmVySFRNTCA9IGBcbiAgICA8aDEgY2xhc3M9XCJob21lVGl0bGVcIj4gSE9NRSA8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJib2R5Q29udGFpbmVyXCI+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImhvdXJzQ29udGFpbmVyXCI+XG4gICAgICAgIDxoMz5IT1VSUyBPRiBPUEVSQVRJT046PC9oMz5cbiAgICAgICAgPHA+WUVTPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uQ29udGFpbmVyXCI+XG4gICAgICAgIDxoMz5MT0NBVElPTjo8L2gzPlxuICAgICAgICA8cD40MsKwIDI1JyA1LjQxMicnIE4gPGJyPiA3McKwIDE1JyAxNS4yNjQnJyBXPC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+O2A7XG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG59XG5cblxuXG5leHBvcnQgeyBsb2FkSG9tZVBhZ2UgfTtcbiIsImNvbnN0IGxvYWRNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcblxuICAgIHBhZ2UuaW5uZXJIVE1MID0gYFxuICAgIDxoMSBjbGFzcz1cIm1lbnVUaXRsZVwiPiBNRU5VIDwvaDE+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnVDb250YWluZXJcIj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiYm93bE9mU2NyZXdzXCI+PC9kaXY+XG4gICAgPGgxPlNPVVA8L2gxPlxuXG4gICAgPGRpdiBjbGFzcz1cInNwYWdoZXR0aVwiPjwvZGl2PlxuICAgIDxwPkZyZWUgcGhvdG8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmRyZWFtc3RpbWUuY29tL2Jvd2wtY3liZXItbm9vZGxlcy1mcmVlLXN0b2NrLXBob3Rvcy1pbWFnZS1mcmVlLTc3NzI4MjhcIj43NzcyODI4PC9hPiDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZHJlYW1zdGltZS5jb20vZ3J5YmF6X2luZm9cIiBpdGVtcHJvcD1cImF1dGhvclwiPkVpbWFudGFzIEJ1emFzPC9hPiAtIDxhIGhyZWY9XCJodHRwczovL3d3dy5kcmVhbXN0aW1lLmNvbS9cIj5EcmVhbXN0aW1lLmNvbTwvYT48L3A+XG4gICAgPGgxPlNQQUdIRVRUSTwvaDE+XG5cbiAgICA8ZGl2IGNsYXNzPVwid2F0ZXJcIj48L2Rpdj5cbiAgICA8aDE+V0FURVI8L2gxPlxuXG48L2Rpdj5gO1xuXG5jb25zb2xlLmxvZyhcIm1lbnVcIilcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG59XG5cblxuZXhwb3J0IHsgbG9hZE1lbnVQYWdlIH07IiwiY29uc3QgbG9hZEhlYWRlck5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaGVhZGVyQ29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBpZD1cInRpdGxlXCI+VE9UQUxMWSBSRUFMIEhVTUFOIEZPT0QgRk9SIEhVTUFOUzwvaDE+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm5hdkNvbnRhaW5lclwiPlxuICAgIDx1bD5cbiAgICAgICAgPGxpPjxhIGlkPVwiaG9tZVwiIGhyZWY9Iz5IT01FPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBpZD1cIm1lbnVcIiBocmVmPSM+TUVOVTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaWQ9XCJjb250YWN0XCIgaHJlZj0jPkNPTlRBQ1Q8L2E+PC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG5gXG5jb25zb2xlLmxvZyhcIndvcmtpbmdcIilcblxuY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGFnZS5pbm5lckhUTUwgPSAnSEknO1xucGFnZS5pZCA9IFwicGFnZVwiO1xuY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbn1cblxuZXhwb3J0IHsgbG9hZEhlYWRlck5hdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5cblxuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbG9hZE1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHsgbG9hZEhlYWRlck5hdiB9IGZyb20gXCIuL3BhZ2VMb2FkXCI7XG5cbmxvYWRIZWFkZXJOYXYoKTtcbmxvYWRIb21lUGFnZSgpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkSG9tZVBhZ2UoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgbG9hZE1lbnVQYWdlKCk7XG59KTtcblxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwYWdlLmlubmVySFRNTCA9ICcnO1xuICAgIGxvYWRDb250YWN0UGFnZSgpO1xufSlcblxuXG5cblxuXG5jb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuXG5cbi8vIGxvYWRIb21lUGFnZSgpO1xuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==