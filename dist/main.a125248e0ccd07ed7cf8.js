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
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\\nSassError: style declaration must contain a value\\n        on line 169 of src/scss/style.scss\\n>>   top: ;\\r\\n   -----^\\n\\n    at processResult (C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:701:19)\\n    at C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:807:5\\n    at C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:399:11\\n    at C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:251:18\\n    at context.callback (C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:124:13)\\n    at Object.callback (C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:54:7)\\n    at Object.done [as callback] (C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\neo-async\\\\async.js:8069:18)\\n    at options.error (C:\\\\Users\\\\dom\\\\Desktop\\\\SunGuy v.1.1\\\\node_modules\\\\node-sass\\\\lib\\\\index.js:293:32)\");\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle.js */ \"./js/obstacle.js\");\n\r\n\r\n\r\nconst startMenu = document.querySelector('.screen__main')\r\nconst controlMenu = document.querySelector('.screen__controls')\r\nconst endGameMenu = document.querySelector('.screen__endgame')\r\nconst menus = [startMenu, controlMenu, endGameMenu]\r\nlet isAlive\r\ncontrolMenu.classList.add('hide')\r\nendGameMenu.classList.add('hide')\r\n\r\nstartMenu.addEventListener('click', event => {\r\n    openControls(event)\r\n    StartGameHandler(event)\r\n})\r\nendGameMenu.addEventListener('click', event => {\r\n    openControls(event)\r\n    StartGameHandler(event)\r\n    if (event.target.dataset.type === \"menu\") {\r\n        location.href = location.href\r\n    }\r\n})\r\ncontrolMenu.addEventListener('click', event => {\r\n    if (event.target.dataset.type === 'back') {\r\n        controlMenu.classList.add('hide')\r\n    }\r\n})\r\nfunction openControls(event) {\r\n    if (event.target.dataset.type === 'controls') {\r\n        controlMenu.classList.remove('hide')\r\n    }\r\n}\r\nfunction StartGameHandler(event) {\r\n    if (event.target.dataset.type === \"start\") startGame()\r\n}\r\n//gameplay ----------------\r\n\r\nfunction startGame() {\r\n    isAlive = true\r\n    menus.forEach(el => { el.classList.add('hide') })\r\n    const screenGame = document.createElement('div')\r\n    screenGame.classList.add('screen__game')\r\n    startMenu.insertAdjacentElement('beforebegin', screenGame)\r\n    screenGame.innerHTML = getGameHTML()\r\n    const char = screenGame.querySelector('.game__character')\r\n    let gameSpeed = +(0.8).toFixed(2)\r\n    let obstCount = 0;\r\n\r\n    document.addEventListener('keydown', event => { if (event.code === 'Space') jump() })\r\n    screenGame.addEventListener('click', jump)\r\n\r\n    spawnObstacle()\r\n    backgroundMove()\r\n\r\n    function backgroundMove() {\r\n        if (isAlive) {\r\n            const bg = screenGame.querySelector('.game__ground')\r\n            let bgX = 0\r\n            bg.style.left = 0\r\n            const bgInterval = setInterval(() => {\r\n                if (!isAlive) clearInterval(bgInterval)\r\n                bg.style.left = `${(bgX -= gameSpeed).toFixed(2)}%`\r\n                if (bgX <= -105) bgX = 0\r\n            }, 10);\r\n        }\r\n    }\r\n    function spawnObstacle() {\r\n        if (isAlive) {\r\n            obstCount++\r\n            if (obstCount % 10 === 0) gameSpeed = +(gameSpeed * 1.05).toFixed(2)\r\n            let obstX = 105\r\n            const obst = new _obstacle_js__WEBPACK_IMPORTED_MODULE_1__.Obstacle('div', 'obstacle')\r\n            screenGame.insertAdjacentElement('beforeend', obst)\r\n            const spawning = setInterval(() => {\r\n                if (!isAlive) clearInterval(spawning)\r\n                obst.style.left = `${(obstX -= gameSpeed).toFixed(2)}%`;\r\n                if (obstX < -5) obst.remove()\r\n                isAliveHandler(obstX)\r\n            }, 10);\r\n            const spawnTime = getRandomNum(500, 2500)\r\n            setTimeout(() => {\r\n                spawnObstacle()\r\n            }, spawnTime);\r\n        }\r\n    }\r\n    function jump() {\r\n        if (!char.classList.contains('jump')) {\r\n            char.classList.add('jump')\r\n            setTimeout(() => {\r\n                char.classList.remove('jump')\r\n            }, 500)\r\n        }\r\n    }\r\n    function isAliveHandler(obstX) {\r\n        const charY = parseInt(window.getComputedStyle(char).bottom)\r\n        if (charY <= 110 && (obstX <= 25 && obstX >= 20)) {\r\n            isAlive = false\r\n            screenGame.remove()\r\n            endGameMenu.classList.remove('hide')\r\n        }\r\n    }\r\n}\r\nfunction getRandomNum(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min)\r\n}\r\nfunction getGameHTML() {\r\n    return `\r\n        <div class=\"game__ground\"></div>\r\n        <div class=\"game__bg\"></div>\r\n        <div class=\"game__character\"></div>\r\n        <div class=\"game__score\">\r\n            high: <span class=\"game__highscore\"></span>\r\n            score: <span class=\"game__score\"></span>\r\n        </div>\r\n    `\r\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/obstacle.js":
/*!************************!*\
  !*** ./js/obstacle.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Obstacle\": () => (/* binding */ Obstacle)\n/* harmony export */ });\nconst obstClasses = ['obst-1', 'obst-2', 'obst-3', 'obst-4']\r\nclass Obstacle {\r\n    constructor(tag, cls) {\r\n        const obst = document.createElement(tag)\r\n        obst.classList.add(cls)\r\n        obst.classList.add(obstClasses[Math.round(Math.random() * (obstClasses.length - 1))])\r\n        return obst\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/obstacle.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;