(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("react"), require("styled-components"));
	else
		root["lib"] = factory(root["React"], root["styled-components"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Pulse/Pulse.jsx":
/*!****************************************!*\
  !*** ./src/components/Pulse/Pulse.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n    0% {opacity: 0.0}\\n    50% {opacity: 1.0}\\n    100% {opacity: 0.0}\\n'], ['\\n    0% {opacity: 0.0}\\n    50% {opacity: 1.0}\\n    100% {opacity: 0.0}\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n    display: inline-block;\\n    animation: ', ' 2s linear infinite;\\n'], ['\\n    display: inline-block;\\n    animation: ', ' 2s linear infinite;\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar rotate360 = (0, _styledComponents.keyframes)(_templateObject);\n\nvar Pulse = _styledComponents2.default.div(_templateObject2, rotate360);\n\nexports.default = Pulse;\n\n//# sourceURL=webpack://lib/./src/components/Pulse/Pulse.jsx?");

/***/ }),

/***/ "./src/components/Rotate/Rotate.jsx":
/*!******************************************!*\
  !*** ./src/components/Rotate/Rotate.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  from {\\n    transform: rotate(0deg);\\n  }\\n\\n  to {\\n    transform: rotate(360deg);\\n  }\\n'], ['\\n  from {\\n    transform: rotate(0deg);\\n  }\\n\\n  to {\\n    transform: rotate(360deg);\\n  }\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n    display: inline-block;\\n    animation: ', ' 7s linear infinite;\\n'], ['\\n    display: inline-block;\\n    animation: ', ' 7s linear infinite;\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar rotate360 = (0, _styledComponents.keyframes)(_templateObject);\n\nvar Rotate = _styledComponents2.default.div(_templateObject2, rotate360);\n\nexports.default = Rotate;\n\n//# sourceURL=webpack://lib/./src/components/Rotate/Rotate.jsx?");

/***/ }),

/***/ "./src/components/Splash/Splash.jsx":
/*!******************************************!*\
  !*** ./src/components/Splash/Splash.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n    container: {\n        width: '100vw',\n        height: '100vh',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center'\n    }\n};\n\nvar Splash = function Splash(_ref) {\n    var children = _ref.children;\n    return _react2.default.createElement(\n        'div',\n        { style: styles.container },\n        children\n    );\n};\n\nexports.default = Splash;\n\n//# sourceURL=webpack://lib/./src/components/Splash/Splash.jsx?");

/***/ }),

/***/ "./src/components/Title/Title.jsx":
/*!****************************************!*\
  !*** ./src/components/Title/Title.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n    font-size: 84px;\\n    color: #fff;\\n'], ['\\n    font-size: 84px;\\n    color: #fff;\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar Title = _styledComponents2.default.h1(_templateObject);\n\nexports.default = Title;\n\n//# sourceURL=webpack://lib/./src/components/Title/Title.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Title = exports.Pulse = exports.Rotate = exports.Splash = undefined;\n\nvar _Splash = __webpack_require__(/*! ./components/Splash/Splash */ \"./src/components/Splash/Splash.jsx\");\n\nvar _Splash2 = _interopRequireDefault(_Splash);\n\nvar _Rotate = __webpack_require__(/*! ./components/Rotate/Rotate */ \"./src/components/Rotate/Rotate.jsx\");\n\nvar _Rotate2 = _interopRequireDefault(_Rotate);\n\nvar _Pulse = __webpack_require__(/*! ./components/Pulse/Pulse */ \"./src/components/Pulse/Pulse.jsx\");\n\nvar _Pulse2 = _interopRequireDefault(_Pulse);\n\nvar _Title = __webpack_require__(/*! ./components/Title/Title */ \"./src/components/Title/Title.jsx\");\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Splash = _Splash2.default;\nexports.Rotate = _Rotate2.default;\nexports.Pulse = _Pulse2.default;\nexports.Title = _Title2.default;\n\n//# sourceURL=webpack://lib/./src/index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://lib/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),

/***/ "styled-components":
/*!**************************************************************************************************************************************!*\
  !*** external {"root":"styled-components","commonjs":"styled-components","commonjs2":"styled-components","amd":"styled-components"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;\n\n//# sourceURL=webpack://lib/external_%7B%22root%22:%22styled-components%22,%22commonjs%22:%22styled-components%22,%22commonjs2%22:%22styled-components%22,%22amd%22:%22styled-components%22%7D?");

/***/ })

/******/ });
});