/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    page.innerHTML = `<div class="menuContainer">
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
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
// import './styles.css';






(0,_pageLoad__WEBPACK_IMPORTED_MODULE_2__.loadHeaderNav)();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

homeButton.addEventListener('click', () => {
    page.innerHTML = '';

    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
});

menuButton.addEventListener('click', () => {
    page.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();
});


const content = document.getElementById("content");
const thePage = document.getElementById("page");



content.appendChild(page);


// loadHomePage();


// const contactButton = document.getElementById("contact");




// contactButton.addEventListener('click', () => { import { loadContactPage } from "./contact"})






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOzs7O0FBSXdCOzs7Ozs7Ozs7Ozs7Ozs7QUN0QnhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BOzs7QUFHc0M7QUFDQTtBQUNLOztBQUUzQyx3REFBYTtBQUNiLG1EQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLG1EQUFZO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsQ0FBQzs7O0FBR0Q7QUFDQTs7OztBQUlBOzs7QUFHQTs7O0FBR0E7Ozs7O0FBS0EsbURBQW1ELFNBQVMsa0JBQWtCLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlX3RvcC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZV90b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2VfdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZV90b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZV90b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZV90b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xuICAgIFxuICAgIFxuICAgIHBhZ2UuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJib2R5Q29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImhvdXJzQ29udGFpbmVyXCI+XG4gICAgICAgIDxoMz5IT1VSUyBPRiBPUEVSQVRJT046PC9oMz5cbiAgICAgICAgPHA+WUVTPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uQ29udGFpbmVyXCI+XG4gICAgICAgIDxoMz5MT0NBVElPTjo8L2gzPlxuICAgICAgICA8cD40MsKwIDI1JyA1LjQxMicnIE4gPGJyPiA3McKwIDE1JyAxNS4yNjQnJyBXPC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+O2A7XG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG59XG5cblxuXG5leHBvcnQgeyBsb2FkSG9tZVBhZ2UgfTtcbiIsImNvbnN0IGxvYWRNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcblxuICAgIHBhZ2UuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtZW51Q29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJvd2xPZlNjcmV3c1wiPjwvZGl2PlxuICAgIDxoMT5TT1VQPC9oMT5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGFnaGV0dGlcIj48L2Rpdj5cbiAgICA8cD5GcmVlIHBob3RvIDxhIGhyZWY9XCJodHRwczovL3d3dy5kcmVhbXN0aW1lLmNvbS9ib3dsLWN5YmVyLW5vb2RsZXMtZnJlZS1zdG9jay1waG90b3MtaW1hZ2UtZnJlZS03NzcyODI4XCI+Nzc3MjgyODwvYT4gwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmRyZWFtc3RpbWUuY29tL2dyeWJhel9pbmZvXCIgaXRlbXByb3A9XCJhdXRob3JcIj5FaW1hbnRhcyBCdXphczwvYT4gLSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZHJlYW1zdGltZS5jb20vXCI+RHJlYW1zdGltZS5jb208L2E+PC9wPlxuICAgIDxoMT5TUEFHSEVUVEk8L2gxPlxuXG4gICAgPGRpdiBjbGFzcz1cIndhdGVyXCI+PC9kaXY+XG4gICAgPGgxPldBVEVSPC9oMT5cblxuPC9kaXY+YDtcblxuY29uc29sZS5sb2coXCJtZW51XCIpXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xufVxuXG5cbmV4cG9ydCB7IGxvYWRNZW51UGFnZSB9OyIsImNvbnN0IGxvYWRIZWFkZXJOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImhlYWRlckNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlRPVEFMTFkgUkVBTCBIVU1BTiBGT09EIEZPUiBIVU1BTlM8L2gxPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJuYXZDb250YWluZXJcIj5cbiAgICA8dWw+XG4gICAgICAgIDxsaT48YSBpZD1cImhvbWVcIiBocmVmPSM+SE9NRTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaWQ9XCJtZW51XCIgaHJlZj0jPk1FTlU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGlkPVwiY29udGFjdFwiIGhyZWY9Iz5DT05UQUNUPC9hPjwvbGk+XG4gICAgPC91bD5cbjwvZGl2PlxuYFxuY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG5cbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBhZ2UuaW5uZXJIVE1MID0gJ0hJJztcbnBhZ2UuaWQgPSBcInBhZ2VcIjtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG59XG5cbmV4cG9ydCB7IGxvYWRIZWFkZXJOYXYgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBsb2FkSGVhZGVyTmF2IH0gZnJvbSBcIi4vcGFnZUxvYWRcIjtcblxubG9hZEhlYWRlck5hdigpO1xubG9hZEhvbWVQYWdlKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkSG9tZVBhZ2UoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgbG9hZE1lbnVQYWdlKCk7XG59KTtcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgdGhlUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKTtcblxuXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG5cblxuLy8gbG9hZEhvbWVQYWdlKCk7XG5cblxuLy8gY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxuXG5cblxuLy8gY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwifSlcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=