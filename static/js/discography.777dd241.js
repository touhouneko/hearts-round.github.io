(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _page_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);





var AlbumPage = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
    loader: function () { return __webpack_require__.e(/* import() | discography-album */ 3).then(__webpack_require__.bind(null, 108)); },
    loading: _page_loading__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]
});
var VideoPage = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
    loader: function () { return __webpack_require__.e(/* import() | discography-video */ 4).then(__webpack_require__.bind(null, 109)); },
    loading: _page_loading__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]
});
var Discography = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { basename: "discography" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", { className: "discography__container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: "discography__navigation" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { to: '/albums', className: "navigation__button", activeClassName: "active" }, "Album"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { to: '/videos', className: "navigation__button", activeClassName: "active" }, "Video")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { exact: true, from: '/', to: '/albums' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { exact: true, path: '/albums', component: AlbumPage }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { exact: true, path: '/videos', component: VideoPage }))))); };
/* harmony default export */ __webpack_exports__["default"] = (Discography);


/***/ })

}]);