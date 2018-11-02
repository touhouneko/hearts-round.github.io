(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(25);

// EXTERNAL MODULE: ./src/components/modal/style.css
var style = __webpack_require__(100);

// CONCATENATED MODULE: ./src/components/modal/modal-nav.tsx


var ModalWithNav = react_default.a.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, nextLabel = _a.nextLabel, prevLabel = _a.prevLabel, handlePrev = _a.handlePrev, handleNext = _a.handleNext;
    return (react_default.a.createElement("div", { ref: ref, className: "lt-modal__window lt-modal__window--center lt-modal__window--nav " + className },
        children,
        react_default.a.createElement("div", { className: "nav__wrapper" },
            react_default.a.createElement("a", { onClick: handlePrev, className: "nav__button nav__button--previous clickable " + (prevLabel === '' ? 'hide' : '') },
                react_default.a.createElement("span", null,
                    "\u2190\u2002",
                    prevLabel)),
            react_default.a.createElement("a", { onClick: handleNext, className: "nav__button nav__button--next clickable " + (nextLabel === '' ? 'hide' : '') },
                react_default.a.createElement("span", null,
                    nextLabel,
                    "\u2002\u2192")))));
});
/* harmony default export */ var modal_nav = (ModalWithNav);

// EXTERNAL MODULE: ./src/decorators/bindthis.ts
var bindthis = __webpack_require__(95);

// CONCATENATED MODULE: ./src/components/modal/factory.tsx
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var factory_ModalFactory = /** @class */ (function () {
    function ModalFactory() {
        this.historyCount = 0;
        this.openCount = 0;
        this.baseZIndex = 999;
    }
    ModalFactory.prototype.createFullscreenMask = function () {
        this.historyCount++;
        this.openCount++;
        var container = document.createElement('div');
        container.style.zIndex = (this.baseZIndex + this.historyCount).toString();
        container.classList.add('lt-modal__mask');
        document.getElementsByTagName('body')[0].classList.add('modal-open');
        return container;
    };
    ModalFactory.prototype.turnoffMask = function (container) {
        this.openCount--;
        if (this.openCount === 0)
            document.getElementsByTagName('body')[0].classList.remove('modal-open');
        container.parentNode.removeChild(container);
    };
    __decorate([
        bindthis["a" /* default */]
    ], ModalFactory.prototype, "createFullscreenMask", null);
    __decorate([
        bindthis["a" /* default */]
    ], ModalFactory.prototype, "turnoffMask", null);
    return ModalFactory;
}());
var modalFactory = new factory_ModalFactory();
/* harmony default export */ var factory = (modalFactory);

// CONCATENATED MODULE: ./src/hooks/click-outside.ts

function useClickOutside(wrapperRef, handler) {
    function handleClick(ev) {
        if (wrapperRef.current === null)
            return;
        else if (wrapperRef.current.contains(ev.target))
            return;
        handler();
    }
    react_default.a.useEffect(function () {
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
}

// EXTERNAL MODULE: ./src/containers/home/news-section/modal-style.css
var modal_style = __webpack_require__(101);

// CONCATENATED MODULE: ./src/containers/home/news-section/modal.tsx






function closeModal(container) {
    Object(react_dom["unmountComponentAtNode"])(container);
    factory.turnoffMask(container);
}
function NewsModal(_a) {
    var news = _a.news, initIdx = _a.initIdx, container = _a.container;
    var _b = react_default.a.useState(initIdx), idx = _b[0], setIdx = _b[1];
    var windowRef = react_default.a.useRef(null);
    useClickOutside(windowRef, closeModal.bind(null, container));
    return (react_default.a.createElement(modal_nav, { prevLabel: idx > 0 ? '上一条' : '', nextLabel: idx < news.length - 1 ? '下一条' : '', handleNext: function () { return setIdx(idx + 1); }, handlePrev: function () { return setIdx(idx - 1); }, ref: windowRef, className: "news-modal" },
        react_default.a.createElement("article", { className: "news-modal__container" },
            react_default.a.createElement("h1", { className: "news-modal__date" },
                react_default.a.createElement("time", null, news[idx].date)),
            react_default.a.createElement("p", { className: "news-modal__content" }, news[idx].title.chs))));
}
function popupModal(news, initIdx) {
    var container = factory.createFullscreenMask();
    Object(react_dom["render"])(react_default.a.createElement(NewsModal, { container: container, news: news, initIdx: initIdx }), container);
    document.getElementsByTagName('body')[0].appendChild(container);
}

// EXTERNAL MODULE: ./src/data/news.ts
var data_news = __webpack_require__(98);

// CONCATENATED MODULE: ./src/apis/index.ts

var apis_Apis = /** @class */ (function () {
    function Apis() {
    }
    Apis.prototype.getNews = function () {
        return new Promise(function (resolve, reject) {
            resolve(data_news["a" /* default */]);
        });
    };
    return Apis;
}());
var apis = new apis_Apis();
/* harmony default export */ var src_apis = (apis);

// EXTERNAL MODULE: ./src/containers/home/news-section/style.css
var news_section_style = __webpack_require__(102);

// CONCATENATED MODULE: ./src/containers/home/news-section/index.tsx




function NewsSection() {
    var _a = react_default.a.useState([]), news = _a[0], setNews = _a[1];
    react_default.a.useEffect(function () {
        src_apis.getNews().then(setNews).catch(console.error);
    }, []);
    function NewsItem(_a) {
        var item = _a.item, idx = _a.idx;
        return (react_default.a.createElement("li", { className: "news__item" },
            react_default.a.createElement("time", { className: "news__time" }, item.date),
            react_default.a.createElement("p", { className: "news__content" },
                react_default.a.createElement("span", { className: "news__text clickable", onClick: function () { return popupModal(news, idx); } }, item.title.chs))));
    }
    return (react_default.a.createElement("section", { className: "news__container" },
        react_default.a.createElement("h1", { className: "news__title" }, "News"),
        react_default.a.createElement("ul", { className: "news__list" }, news.map(function (news, idx) { return (react_default.a.createElement(NewsItem, { item: news, idx: idx, key: idx })); }))));
}

// EXTERNAL MODULE: ./src/containers/home/style.css
var home_style = __webpack_require__(103);

// CONCATENATED MODULE: ./src/containers/home/index.tsx



var Home = function () { return (react_default.a.createElement("main", { className: "home__container" },
    react_default.a.createElement(NewsSection, null))); };
/* harmony default export */ var home = __webpack_exports__["default"] = (Home);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindthis; });
function bindthis(target, name, descriptor) {
    return {
        get: function () {
            var boundFunc = descriptor.value.bind(this);
            Object.defineProperty(this, name, {
                value: boundFunc
            });
            return boundFunc;
        }
    };
}


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var MultiLanguageText = /** @class */ (function () {
    function MultiLanguageText(chs, cht, jp) {
        if (chs === void 0) { chs = ''; }
        if (cht === void 0) { cht = ''; }
        if (jp === void 0) { jp = ''; }
        this.chs = chs;
        this.cht = cht;
        this.jp = jp;
    }
    return MultiLanguageText;
}());
/* harmony default export */ __webpack_exports__["a"] = (MultiLanguageText);


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableNewsModel; });
/* harmony import */ var _models_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _decorators_bindthis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewsModel = /** @class */ (function () {
    function NewsModel(date, title) {
        this.date = date;
        this.title = title;
    }
    return NewsModel;
}());
/* harmony default export */ __webpack_exports__["b"] = (NewsModel);
var EditableNewsModel = /** @class */ (function () {
    function EditableNewsModel(news) {
        if (news === void 0) { news = new NewsModel('', new _models_text__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]()); }
        this.news = news;
        this.editable = false;
        this.edited = false;
        this.editing = false;
    }
    Object.defineProperty(EditableNewsModel.prototype, "date", {
        get: function () {
            return this.news.date;
        },
        set: function (val) {
            this.news.date = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableNewsModel.prototype, "title", {
        get: function () {
            return this.news.title;
        },
        enumerable: true,
        configurable: true
    });
    EditableNewsModel.prototype.addEditEffect = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        this.edited = true;
        setTimeout(function () { return _this.edited = false; }, timeout);
    };
    __decorate([
        _decorators_bindthis__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
    ], EditableNewsModel.prototype, "addEditEffect", null);
    return EditableNewsModel;
}());



/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_news_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _data_news_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_news_csv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony import */ var _models_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);



function verifyInput(raw) {
    return true;
    // const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日$/;
    // return dateRegex.test(raw.date) &&
    // return typeof raw.date === 'string' && raw.date.length > 0 &&
    // typeof raw.title_chs === 'string' && raw.title_chs.length > 0 &&
    // typeof raw.title_cht === 'string' && raw.title_cht.length > 0 &&
    // typeof raw.title_jp === 'string' && raw.title_jp.length > 0;
}
function parseOne(raw) {
    if (!verifyInput(raw)) {
        throw new Error('error parsing news');
    }
    var title = new _models_text__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](raw.title_chs, raw.title_cht, raw.title_jp);
    return new _models_news__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"](raw.date, title);
}
var news = _data_news_csv__WEBPACK_IMPORTED_MODULE_0___default.a.map(parseOne);
/* harmony default export */ __webpack_exports__["a"] = (news);


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = [{"date":"2018年11月02日","title_chs":"客户端测试","title_cht":"客户端测试","title_jp":"客户端测试"},{"date":"2018年10月07日","title_chs":"测试 07","title_cht":"测试 07","title_jp":"测试 07"},{"date":"2018年10月08日","title_chs":"测试 08","title_cht":"测试 08","title_jp":"测试 08"},{"date":"8102年10月09日","title_chs":"測試 09","title_cht":"測試 09","title_jp":"測試 09"}]

/***/ })

}]);