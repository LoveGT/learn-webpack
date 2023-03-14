"use strict";
(self["webpackChunkbabel_use"] = self["webpackChunkbabel_use"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
// main作为入口

var msg = 'hello main';
console.log(msg);
function bar() {
  console.log('bar function exec~');
}
bar();
axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('').then(function (res) {
  console.log(res);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);