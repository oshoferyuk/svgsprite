/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/page.js":
/*!*************************!*\
  !*** ./app/src/page.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _second_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second.svg */ \"./app/src/second.svg\");\n/* harmony import */ var _second_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_second_svg__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet stores = [\r\n {name: \"Cambridge Naturals\",     x: -71.1189, y: 42.3895},\r\n {name: \"Sarah's Market\",         x: -71.1311, y: 42.3823},\r\n {name: \"Whole Foods Fresh Pond\", x: -71.1420, y: 42.3904},\r\n];\r\nlet here = {name: \"You are here\",  x: -71.1470, y: 42.3834};\r\nlet nearest = sortByDistance(here, stores)[0];\r\ndocument.getElementById(\"nearest-store\").innerHTML = nearest.name;\n\n//# sourceURL=webpack:///./app/src/page.js?");

/***/ }),

/***/ "./app/src/second.svg":
/*!****************************!*\
  !*** ./app/src/second.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var publicPath = __webpack_require__.p;\n                    var symbolUrl = 'test66666.svg#icon-second-19609';\n                    var viewUrl = 'test66666.svg#view-icon-second-19609';\n\n                    \n                        var addCacheBust = typeof document !== 'undefined' && document.readyState === 'complete';\n    \n                        if (addCacheBust) {\n                            symbolUrl = 'test66666.svg?icon-second-19609#icon-second-19609';\n                            viewUrl = 'test66666.svg?icon-second-19609#view-icon-second-19609';\n                        }\n                    \n\n                    module.exports = {\n                        symbol: publicPath + symbolUrl,\n                        view: publicPath + viewUrl,\n                        viewBox: '0 0 273.4 222.2',\n                        title: '',\n                        toString: function () {\n                            return JSON.stringify(this.view);\n                        }\n                    };\n\n//# sourceURL=webpack:///./app/src/second.svg?");

/***/ })

/******/ });