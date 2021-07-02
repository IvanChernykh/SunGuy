/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./js/gameplay.js":
/*!************************!*\
  !*** ./js/gameplay.js ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Identifier 'obst' has already been declared (15:14)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n|         })\\n>         const obst = document.createElement('div')\\n|         obst.classList.add('obstacle')\\n|         screenGame.insertAdjacentElement('beforeend', obst)\");\n\n//# sourceURL=webpack:///./js/gameplay.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _gameplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay.js */ \"./js/gameplay.js\");\n\r\n\r\n\r\nconst startMenu = document.querySelector('.screen__main')\r\nconst controlMenu = document.querySelector('.screen__controls')\r\nconst endGameMenu = document.querySelector('.screen__endgame')\r\nconst menus = [startMenu, controlMenu, endGameMenu]\r\nlet isAlive\r\ncontrolMenu.classList.add('hide')\r\nendGameMenu.classList.add('hide')\r\n\r\nstartMenu.addEventListener('click', event => {\r\n    openControls(event)\r\n    StartGameHandler(event)\r\n})\r\nendGameMenu.addEventListener('click', event => {\r\n    openControls(event)\r\n    StartGameHandler(event)\r\n    if (event.target.dataset.type === \"menu\") {\r\n        location.href = location.href\r\n    }\r\n})\r\ncontrolMenu.addEventListener('click', event => {\r\n    if (event.target.dataset.type === 'back') {\r\n        controlMenu.classList.add('hide')\r\n    }\r\n})\r\nfunction openControls(event) {\r\n    if (event.target.dataset.type === 'controls') {\r\n        controlMenu.classList.remove('hide')\r\n    }\r\n}\r\nfunction StartGameHandler(event) {\r\n    if (event.target.dataset.type === \"start\") startGame()\r\n}\r\n//gameplay ----------------\r\n\r\nfunction startGame() {\r\n    isAlive = true\r\n    menus.forEach(el => { el.classList.add('hide') })\r\n    const screenGame = document.createElement('div')\r\n    screenGame.classList.add('screen__game')\r\n    startMenu.insertAdjacentElement('beforebegin', screenGame)\r\n    screenGame.innerHTML = getGameHTML\r\n    const char = screenGame.querySelector('.game__character')\r\n    let gameSpeed = 1\r\n    let obstCount = 0;\r\n\r\n    document.addEventListener('keydown', event => { if (event.code === 'Space') jump() })\r\n    screenGame.addEventListener('click', jump)\r\n\r\n    spawnObstacle()\r\n    function spawnObstacle() {\r\n        if (isAlive) {\r\n            obstCount++\r\n            if (obstCount % 10 === 0) gameSpeed = +(gameSpeed * 1.05).toFixed(2)\r\n            let obstX = 105\r\n            const obst = document.createElement('div')\r\n            obst.classList.add('obstacle')\r\n            screenGame.insertAdjacentElement('beforeend', obst)\r\n            setInterval(() => {\r\n                obst.style.left = `${obstX -= gameSpeed}%`;\r\n                if (obstX < -5) obst.remove()\r\n                isAliveHandler(obstX)\r\n            }, 15);\r\n            const spawnTime = getRandomNum(500, 2500)\r\n            setTimeout(() => {\r\n                spawnObstacle()\r\n            }, spawnTime);\r\n        }\r\n    }\r\n    function jump() {\r\n        if (!char.classList.contains('jump')) {\r\n            char.classList.add('jump')\r\n            setTimeout(() => {\r\n                char.classList.remove('jump')\r\n            }, 500)\r\n        }\r\n    }\r\n    function isAliveHandler(obstX) {\r\n        const charY = parseInt(window.getComputedStyle(char).bottom)\r\n        if (charY <= 110 && (obstX <= 25 && obstX >= 20)) {\r\n            console.log('you died');\r\n            isAlive = false\r\n            screenGame.remove()\r\n            endGameMenu.classList.remove('hide')\r\n        }\r\n    }\r\n}\r\nfunction getRandomNum(min, max) {\r\n    const a = Math.floor(Math.random() * (max - min) + min)\r\n    console.log(a);\r\n    return a\r\n}\r\nfunction getGameHTML() {\r\n    return `\r\n        <div class=\"game__ground\"></div>\r\n        <div class=\"game__bg\"></div>\r\n        <div class=\"game__character\"></div>\r\n    `\r\n}\n\n//# sourceURL=webpack:///./js/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;