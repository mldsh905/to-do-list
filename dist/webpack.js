/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/add-new.js":
/*!***************************!*\
  !*** ./src/js/add-new.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNew\": () => (/* binding */ addNew)\n/* harmony export */ });\n//add new list\nfunction addNew() {\n    const modal_task = document.querySelector(\"#task\");\n    const modal_detail = document.querySelector(\"#detail\");\n    const modal_ddl = document.querySelector(\"#ddl\");\n    const modal_priority = document.querySelector(\"#priority\");\n    return ({\n        name: `${modal_task.value}`, detail: `${modal_detail.value}`,\n        date: `${modal_ddl.value}`, priority: `${modal_priority.value}`,\n        id: `${Number(Math.random().toString())}`,checked:false\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/js/add-new.js?");

/***/ }),

/***/ "./src/js/create-list.js":
/*!*******************************!*\
  !*** ./src/js/create-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList)\n/* harmony export */ });\n//create list\nfunction createList(item) {\n    const content = document.querySelector(\".content\");\n    const sublist = document.createElement(\"div\");\n    sublist.classList.add(\"sublist\");\n    sublist.setAttribute(\"id\", item.id)\n    content.appendChild(sublist);\n\n    const sublist_left = document.createElement(\"div\");\n    sublist_left.classList.add(\"sublist-left\");\n    const sublist_right = document.createElement(\"div\");\n    sublist_right.classList.add(\"sublist-right\");\n    sublist.appendChild(sublist_left);\n    sublist.appendChild(sublist_right);\n\n    const checkbox = document.createElement(\"input\");\n    checkbox.classList.add(\"checkbox\");\n    checkbox.setAttribute(\"type\", \"checkbox\");\n    checkbox.checked = item.checked;\n    checkbox.checked ? sublist.classList.add(\"checked\") : sublist.classList.remove(\"checked\");\n    const sublist_task = document.createElement(\"div\");\n    sublist_task.classList.add(\"sublist-task\");\n    const sublist_detail = document.createElement(\"div\");\n    sublist_detail.classList.add(\"sublist-detail\");\n    sublist_left.appendChild(checkbox);\n    sublist_left.appendChild(sublist_task);\n    sublist_left.appendChild(sublist_detail);\n    checkbox.addEventListener(\"click\", () => {\n        checkbox.checked ? sublist.classList.add(\"checked\") : sublist.classList.remove(\"checked\");\n        let data = JSON.parse(localStorage.getItem('key'));\n        data.forEach(e => {\n            if (e.id === item.id) {\n                e.checked = checkbox.checked\n            }\n        })\n        localStorage.setItem('key', JSON.stringify(data));\n    })\n\n    const sublist_date = document.createElement(\"div\");\n    sublist_date.classList.add(\"sublist-date\");\n    const sublist_priority = document.createElement(\"div\");\n    sublist_priority.classList.add(\"sublist-priority\");\n    const sublist_icon = document.createElement(\"div\");\n    sublist_icon.classList.add(\"sublist-icon\");\n    sublist_right.appendChild(sublist_date);\n    sublist_right.appendChild(sublist_priority);\n    sublist_right.appendChild(sublist_icon);\n\n    const win1 = document.querySelector(\".window1\");\n    const icon1 = document.createElement(\"i\");\n    icon1.classList.add(\"fa-solid\");\n    icon1.classList.add(\"fa-pen-to-square\");\n    icon1.addEventListener(\"click\", () => {\n        const modal_task1 = document.querySelector(\"#task1\");\n        const modal_detail1 = document.querySelector(\"#detail1\");\n        const modal_ddl1 = document.querySelector(\"#ddl1\");\n        const modal_priority1 = document.querySelector(\"#priority1\");\n        win1.style.display = \"grid\";\n        const cancel1 = document.querySelector(\".cancel1\");\n        cancel1.addEventListener(\"click\",()=>{\n            win1.style.display = \"none\"\n        })\n        win1.addEventListener(\"click\", (item) => {\n            if (item.target.classList.value.includes(\"window1\")) {\n                win1.style.display = \"none\"\n            }\n        })\n\n\n        modal_task1.value = `${sublist_task.textContent}`;\n        modal_detail1.value = `${sublist_detail.textContent}`;\n        modal_ddl1.value = `${sublist_date.textContent}`;\n        modal_priority1.value = `${sublist_priority.textContent}`;\n        const modal_btn1 = document.querySelector(\".modal-btn1\");\n        modal_btn1.addEventListener(\"click\", () => {\n\n            sublist_task.textContent = `${modal_task1.value}`;\n            sublist_detail.textContent = `${modal_detail1.value}`;\n            sublist_date.textContent = `${modal_ddl1.value}`;\n            sublist_priority.textContent = `${modal_priority1.value}`;\n\n            let data = (JSON.parse(localStorage.getItem('key'))) || [];\n            data.forEach(e => {\n                if (e.id === item.id) {\n                    e.name = `${modal_task1.value}`;\n                    e.detail = `${modal_detail1.value}`;\n                    e.date = `${modal_ddl1.value}`;\n                    e.priority = `${modal_priority1.value}`;\n                }\n            })\n            localStorage.setItem('key', JSON.stringify(data));\n\n            win1.style.display = \"none\";\n        }, {once: true})\n    })\n\n\n    const icon2 = document.createElement(\"i\");\n    icon2.classList.add(\"fa-solid\");\n    icon2.classList.add(\"fa-trash-can\");\n    sublist_icon.appendChild(icon1);\n    sublist_icon.appendChild(icon2);\n    icon2.addEventListener(\"click\", () => {\n        sublist.remove();\n        let data = (JSON.parse(localStorage.getItem('key'))) || [];\n        data.forEach(e => {\n            if (e.id === sublist.id) {\n                data.splice(data.indexOf(e), 1)\n            }\n        })\n        localStorage.setItem('key', JSON.stringify(data));\n    })\n\n    sublist_task.textContent = item.name;\n    sublist_detail.textContent = `${item.detail}`;\n    sublist_date.textContent = `${item.date}`;\n    sublist_priority.textContent = `${item.priority}`;\n\n    const modal_task = document.querySelector(\"#task\");\n    const modal_detail = document.querySelector(\"#detail\");\n    const modal_ddl = document.querySelector(\"#ddl\");\n    const modal_priority = document.querySelector(\"#priority\");\n\n    modal_task.value = \"\";\n    modal_detail.value = \"\";\n    modal_ddl.value = \"\";\n    modal_priority.value = \"low\";\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/create-list.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/js/sidebar.js\");\n/* harmony import */ var _window_create_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window-create-new */ \"./src/js/window-create-new.js\");\n/* harmony import */ var _create_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-list */ \"./src/js/create-list.js\");\n\n\n\n\n(0,_window_create_new__WEBPACK_IMPORTED_MODULE_1__.addWin)();\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.to_do)();\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.all_task)();\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.finished)();\n\n//create main page\nlet data = (JSON.parse(localStorage.getItem('key'))) || [];\ndata.forEach(item => {\n    (0,_create_list__WEBPACK_IMPORTED_MODULE_2__.createList)(item)\n})\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/main.js?");

/***/ }),

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"all_task\": () => (/* binding */ all_task),\n/* harmony export */   \"finished\": () => (/* binding */ finished),\n/* harmony export */   \"to_do\": () => (/* binding */ to_do)\n/* harmony export */ });\n/* harmony import */ var _create_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-list */ \"./src/js/create-list.js\");\n\n\n//change list  --- all task\nfunction all_task() {\n    const all = document.querySelector(\".all\");\n    const content = document.querySelector(\".content\");\n    all.addEventListener(\"click\", () => {\n        content.textContent = \"\";\n        let data=(JSON.parse(localStorage.getItem('key')))||[];\n        data.forEach(item=>{(0,_create_list__WEBPACK_IMPORTED_MODULE_0__.createList)(item)})\n    })\n}\n\n\n//change list  --- finished\nfunction finished() {\n    const finished = document.querySelector(\".finished\");\n    const content = document.querySelector(\".content\");\n    finished.addEventListener(\"click\", () => {\n        content.textContent = \"\";\n        let data=(JSON.parse(localStorage.getItem('key')))||[];\n        data.forEach(item=>{\n            if (item.checked === true){\n                (0,_create_list__WEBPACK_IMPORTED_MODULE_0__.createList)(item)\n            }\n        })\n    })\n}\n\n\n//change list  --- to do\nfunction to_do() {\n    const to_do = document.querySelector(\".to-do\");\n    const content = document.querySelector(\".content\");\n    to_do.addEventListener(\"click\", () => {\n        content.textContent = \"\";\n        let data=(JSON.parse(localStorage.getItem('key')))||[];\n        data.forEach(item=>{\n            if (item.checked === false){\n                (0,_create_list__WEBPACK_IMPORTED_MODULE_0__.createList)(item)\n            }\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/js/sidebar.js?");

/***/ }),

/***/ "./src/js/update-list.js":
/*!*******************************!*\
  !*** ./src/js/update-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateList\": () => (/* binding */ updateList)\n/* harmony export */ });\n/* harmony import */ var _create_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-list */ \"./src/js/create-list.js\");\n//update list\n\n\n\nfunction updateList() {\n    const content = document.querySelector(\".content\");\n    content.textContent = \"\";\n    let data=(JSON.parse(localStorage.getItem('key')))||[];\n    data.forEach(item => {\n        (0,_create_list__WEBPACK_IMPORTED_MODULE_0__.createList)(item)\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/js/update-list.js?");

/***/ }),

/***/ "./src/js/window-create-new.js":
/*!*************************************!*\
  !*** ./src/js/window-create-new.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addWin\": () => (/* binding */ addWin)\n/* harmony export */ });\n/* harmony import */ var _add_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new */ \"./src/js/add-new.js\");\n/* harmony import */ var _update_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-list */ \"./src/js/update-list.js\");\n//open/close window\n\n\n\nfunction addWin() {\n    const add_btn = document.querySelector(\".add-btn\");\n    const win = document.querySelector(\".window\");\n    add_btn.addEventListener(\"click\", () => {\n        win.style.display = \"grid\";\n        win.addEventListener(\"click\", (item) => {\n            if (item.target.classList.value.includes(\"window\")) {\n                win.style.display = \"none\"\n            }\n        }, {once: true})\n    })\n    const cancel = document.querySelector(\".cancel\");\n    cancel.addEventListener(\"click\",()=>{\n        win.style.display = \"none\"\n    })\n\n    //create new list\n    const modal_btn = document.querySelector(\".modal-btn\");\n    const modal_task = document.querySelector(\"#task\");\n\n    modal_btn.addEventListener(\"click\", () => {\n        if (modal_task.value === \"\") {alert(\"Please fill in task name\")}\n        else {\n            let data = (JSON.parse(localStorage.getItem('key'))) || [];\n            data.push((0,_add_new__WEBPACK_IMPORTED_MODULE_0__.addNew)());\n            localStorage.setItem('key', JSON.stringify(data));\n\n            (0,_update_list__WEBPACK_IMPORTED_MODULE_1__.updateList)();\n            const win = document.querySelector(\".window\");\n            win.style.display = \"none\";\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/js/window-create-new.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;