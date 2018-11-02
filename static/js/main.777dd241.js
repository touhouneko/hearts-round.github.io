/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		6: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({"1":"contact","2":"discography","3":"discography-album","4":"discography-video","5":"home","7":"management"}[chunkId]||chunkId) + "." + "777dd241" + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"2":1,"4":1,"5":1,"7":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "static/css/" + ({"1":"contact","2":"discography","3":"discography-album","4":"discography-video","5":"home","7":"management"}[chunkId]||chunkId) + "." + "777dd241" + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([84,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/loading/style-base.css
var style_base = __webpack_require__(48);

// CONCATENATED MODULE: ./src/components/loading/loading-base.tsx


var BaseLoading = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (react_default.a.createElement("div", { className: "lt-loading__container " + className },
        react_default.a.createElement("div", { className: "lt-loading__rect lt-loading__rect--0" }),
        react_default.a.createElement("div", { className: "lt-loading__rect lt-loading__rect--1" }),
        react_default.a.createElement("div", { className: "lt-loading__rect lt-loading__rect--2" })));
};
/* harmony default export */ var loading_base = (BaseLoading);

// EXTERNAL MODULE: ./src/containers/page-loading/style.css
var style = __webpack_require__(49);

// CONCATENATED MODULE: ./src/containers/page-loading/index.tsx



var PageLoading = function () { return (react_default.a.createElement("div", { className: "global__page-loading" },
    react_default.a.createElement(loading_base, null))); };
/* harmony default export */ var page_loading = __webpack_exports__["a"] = (PageLoading);


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js
var BrowserRouter = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Redirect.js + 2 modules
var Redirect = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 1 modules
var Route = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(13);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/NavLink.js + 1 modules
var NavLink = __webpack_require__(93);

// EXTERNAL MODULE: ./src/containers/top-nav/style.css
var style = __webpack_require__(46);

// CONCATENATED MODULE: ./src/containers/top-nav/index.tsx



var routes = [
    { label: 'home', exact: true, path: '/home' },
    { label: 'discography', exact: false, path: '/discography' },
    { label: 'gallery', exact: false, path: '/gallery' },
    { label: 'works', exact: false, path: '/works' },
    { label: 'about', exact: false, path: '/about' },
    { label: 'contact', exact: true, path: '/contact' },
];
function navItem(route, idx) {
    return (react_default.a.createElement("li", { className: 'nav__item', key: route.label },
        react_default.a.createElement(NavLink["a" /* default */], { className: 'nav__item-text', activeClassName: 'active', to: route.path, exact: route.exact }, route.label)));
}
var Header = function () { return (react_default.a.createElement("header", { className: "global__header" },
    react_default.a.createElement("nav", { className: "nav__container" },
        react_default.a.createElement("div", { className: "logo__wrapper" },
            react_default.a.createElement("img", { className: "logo" })),
        react_default.a.createElement("ul", { className: "nav__list" }, routes.map(navItem))))); };
/* harmony default export */ var top_nav = (Header);

// EXTERNAL MODULE: ./src/containers/page-loading/index.tsx + 1 modules
var page_loading = __webpack_require__(12);

// EXTERNAL MODULE: ./src/containers/footer/style.css
var footer_style = __webpack_require__(50);

// CONCATENATED MODULE: ./src/containers/footer/index.tsx


var Footer = function () { return (react_default.a.createElement("footer", { className: "global__footer" },
    react_default.a.createElement("section", { className: "footer__section footer__section--social" },
        react_default.a.createElement("div", { className: "social__logo-wrapper social__logo-wrapper--twitter" },
            react_default.a.createElement("i", { className: "social__logo social__logo--twitter" })),
        react_default.a.createElement("div", { className: "social__logo-wrapper social__logo-wrapper--weibo" },
            react_default.a.createElement("i", { className: "social__logo social__logo--weibo" }))),
    react_default.a.createElement("section", { className: "footer__section footer__section--site-name" },
        react_default.a.createElement("p", { className: "section__paragraph" }, "- All Rounds of Hearts -")),
    react_default.a.createElement("section", { className: "footer__section footer__section--copyright" },
        react_default.a.createElement("p", { className: "section__paragraph" }, "\u00A9 2018 HeartsRounds All Rights Reserved.")))); };
/* harmony default export */ var footer = (Footer);

// EXTERNAL MODULE: ./src/site.css
var site = __webpack_require__(51);

// CONCATENATED MODULE: ./src/app.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Home = lib_default()({
    loader: function () { return __webpack_require__.e(/* import() | home */ 5).then(__webpack_require__.bind(null, 114)); },
    loading: page_loading["a" /* default */]
});
var Discography = lib_default()({
    loader: function () { return __webpack_require__.e(/* import() | discography */ 2).then(__webpack_require__.bind(null, 111)); },
    loading: page_loading["a" /* default */]
});
var Contact = lib_default()({
    loader: function () { return __webpack_require__.e(/* import() | contact */ 1).then(__webpack_require__.bind(null, 112)); },
    loading: page_loading["a" /* default */]
});
var Management = lib_default()({
    loader: function () { return Promise.all(/* import() | management */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 113)); },
    loading: page_loading["a" /* default */]
});
var app_App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return [
            react_default.a.createElement(top_nav, { key: "nav" }),
            react_default.a.createElement("div", { className: "global__body", key: "body" },
                react_default.a.createElement(Switch["a" /* default */], null,
                    react_default.a.createElement(Redirect["a" /* default */], { exact: true, path: '/', to: '/home' }),
                    react_default.a.createElement(Route["a" /* default */], { exact: true, path: '/home', component: Home }),
                    react_default.a.createElement(Route["a" /* default */], { path: '/discography', component: Discography }),
                    react_default.a.createElement(Route["a" /* default */], { exact: true, path: '/contact', component: Contact }),
                    react_default.a.createElement(Route["a" /* default */], { exact: true, path: '/management', component: Management }))),
            react_default.a.createElement(footer, { key: "footer" })
        ];
    };
    return App;
}(react_default.a.Component));
/* harmony default export */ var app = (app_App);

// CONCATENATED MODULE: ./src/index.tsx




Object(react_dom["render"])(react_default.a.createElement(BrowserRouter["a" /* default */], null,
    react_default.a.createElement(app, null)), document.getElementById('root'));
var src_module;
if (src_module !== undefined && src_module.hot) {
    src_module.hot.accept();
}


/***/ })

/******/ });