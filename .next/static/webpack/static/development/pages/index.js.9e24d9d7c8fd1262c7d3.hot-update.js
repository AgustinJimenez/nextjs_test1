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

var productRoute = function productRoute(_ref) {
  var query = _ref.query,
      id = _ref.id;
  return {
    pathname: '/products/[id]',
    query: query,
    as: "/products/".concat(id)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.9e24d9d7c8fd1262c7d3.hot-update.js.map