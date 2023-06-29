(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hello", {
  enumerable: true,
  get: function () {
    return _Hello.default;
  }
});
var _Hello = _interopRequireDefault(__webpack_require__(/*! ./src/Action/Hello.action */ "./src/Action/Hello.action.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/Action/Hello.action.js":
/*!************************************!*\
  !*** ./src/Action/Hello.action.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Hello = void 0;
var _lambdaWrapper = __webpack_require__(/*! @comicrelief/lambda-wrapper */ "@comicrelief/lambda-wrapper");
var _Configuration = _interopRequireDefault(__webpack_require__(/*! ../Config/Configuration */ "./src/Config/Configuration.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * An example handler
 *
 * @param {DependencyInjection} di
 * @param {RequestService} request
 */
const Hello = async (di, request) => {
  // Get a name from the query parameters.
  const name = request.get('name');
  const body = {
    response: name !== null ? `Hello ${name}` : 'Hello'
  };
  return _lambdaWrapper.ResponseModel.generate(body, 200, 'ok');
};
exports.Hello = Hello;
var _default = (0, _lambdaWrapper.LambdaWrapper)(_Configuration.default, Hello);
exports.default = _default;

/***/ }),

/***/ "./src/Config/Configuration.js":
/*!*************************************!*\
  !*** ./src/Config/Configuration.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEPENDENCIES = exports.DEFINITIONS = void 0;
var _lambdaWrapper = __webpack_require__(/*! @comicrelief/lambda-wrapper */ "@comicrelief/lambda-wrapper");
// Define Definitions
const definitions = {};
const DEFINITIONS = {
  ...definitions,
  ..._lambdaWrapper.DEFINITIONS
};

// Define Dependencies
exports.DEFINITIONS = DEFINITIONS;
const DEPENDENCIES = {};

// Define Configuration
exports.DEPENDENCIES = DEPENDENCIES;
var _default = {
  DEFINITIONS,
  DEPENDENCIES
};
exports.default = _default;

/***/ }),

/***/ "@comicrelief/lambda-wrapper":
/*!**********************************************!*\
  !*** external "@comicrelief/lambda-wrapper" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@comicrelief/lambda-wrapper");

/***/ })

/******/ })));
//# sourceMappingURL=handler.map