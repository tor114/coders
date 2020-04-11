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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./1_Zadania/Dzien_2/5_export_import/js/task01/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./1_Zadania/Dzien_2/5_export_import/js/task01/Polygon.js":
/*!****************************************************************!*\
  !*** ./1_Zadania/Dzien_2/5_export_import/js/task01/Polygon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Polygon {\n  constructor(height, width) {\n    this.name = 'Polygon';\n    this.height = height;\n    this.width = width;\n  }\n\n  area() {\n    return this.height * this.width;\n  }\n\n  sayName() {\n    console.log('Cześć jestem', this.name + '.');\n  }\n\n} // module.exports = Polygon;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Polygon);\n\n//# sourceURL=webpack:///./1_Zadania/Dzien_2/5_export_import/js/task01/Polygon.js?");

/***/ }),

/***/ "./1_Zadania/Dzien_2/5_export_import/js/task01/Square.js":
/*!***************************************************************!*\
  !*** ./1_Zadania/Dzien_2/5_export_import/js/task01/Square.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polygon */ \"./1_Zadania/Dzien_2/5_export_import/js/task01/Polygon.js\");\n// const Polygon  = require('./Polygon');\n\n\nclass Square extends _Polygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(dim = 5) {\n    super(dim, dim);\n    this.name = 'Square';\n  }\n\n} // module.exports = Square;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);\n\n//# sourceURL=webpack:///./1_Zadania/Dzien_2/5_export_import/js/task01/Square.js?");

/***/ }),

/***/ "./1_Zadania/Dzien_2/5_export_import/js/task01/app.js":
/*!************************************************************!*\
  !*** ./1_Zadania/Dzien_2/5_export_import/js/task01/app.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./1_Zadania/Dzien_2/5_export_import/js/task01/Square.js\");\n// const Square = require('./Square');\n\nlet square = new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](9);\nsquare.sayName();\nconsole.log(square.area());\nconsole.log(new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().area());\n\n//# sourceURL=webpack:///./1_Zadania/Dzien_2/5_export_import/js/task01/app.js?");

/***/ })

/******/ });