webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! exports provided: homeRoute, aboutRoute, productRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoute", function() { return homeRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutRoute", function() { return aboutRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productRoute", function() { return productRoute; });
var homeRoute = function homeRoute(query) {
  return {
    pathname: '/',
    query: query
  };
};
var aboutRoute = function aboutRoute(query) {
  return {
    pathname: '/about',
    query: query
  };
}; //query: { name: 'ZEIT' }

var productRoute = function productRoute(query) {
  return {
    pathname: '/products/[id]',
    query: query
  };
}; //query: { name: 'ZEIT' }

/***/ })

})
//# sourceMappingURL=index.js.f64462bc2359867e3526.hot-update.js.map