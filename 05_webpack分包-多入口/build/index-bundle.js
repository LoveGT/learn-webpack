"use strict";
(self["webpackChunkbabel_use"] = self["webpackChunkbabel_use"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
// index作为入口

var msg = 'helloWorld';
console.log(msg);
function foo() {
  console.log('foo function exec~');
}
foo();
axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('').then(function (res) {
  console.log(res);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);