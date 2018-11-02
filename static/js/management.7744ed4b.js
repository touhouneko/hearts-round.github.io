(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/NavLink.js + 1 modules
var NavLink = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/HashRouter.js
var HashRouter = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Redirect.js + 2 modules
var Redirect = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 1 modules
var Route = __webpack_require__(38);

// CONCATENATED MODULE: ./src/containers/management/pwd-context.ts

var context = Object(react["createContext"])('');
/* harmony default export */ var pwd_context = (context);

// CONCATENATED MODULE: ./src/containers/management/albums/index.tsx

function AlbumManagement() {
    return (react_default.a.createElement("div", { className: "management__form management__form--album" },
        react_default.a.createElement("h2", { className: "form_title" }, "Albums Management")));
}

// EXTERNAL MODULE: ./node_modules/papaparse/papaparse.js
var papaparse = __webpack_require__(85);
var papaparse_default = /*#__PURE__*/__webpack_require__.n(papaparse);

// EXTERNAL MODULE: ./node_modules/sha256/lib/sha256.js
var sha256 = __webpack_require__(88);
var sha256_default = /*#__PURE__*/__webpack_require__.n(sha256);

// EXTERNAL MODULE: ./src/decorators/bindthis.ts
var bindthis = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(89);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/apis/base-api.ts

var base_api_BaseApi = /** @class */ (function () {
    function BaseApi(config) {
        if (config === void 0) { config = {}; }
        this.axiosInstance = axios_default.a.create(config);
    }
    return BaseApi;
}());
/* harmony default export */ var base_api = (base_api_BaseApi);

// CONCATENATED MODULE: ./src/apis/github-api.ts
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var github_api_GithubApi = /** @class */ (function (_super) {
    __extends(GithubApi, _super);
    function GithubApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GithubApi.prototype.updateFile = function (file, path, password) {
        var hashedPwd = sha256_default()(password).toUpperCase();
        var content = btoa(unescape(encodeURIComponent(file)));
        var url = 'https://kmtcckw6m9.execute-api.ap-southeast-2.amazonaws.com/prod/content';
        return this.axiosInstance.put(url + "?path=" + path + "&content=" + content + "&password=" + hashedPwd);
    };
    GithubApi.prototype.updateNews = function (file, password) {
        return this.updateFile(file, 'src/data/news.csv', password);
    };
    __decorate([
        bindthis["a" /* default */]
    ], GithubApi.prototype, "updateFile", null);
    __decorate([
        bindthis["a" /* default */]
    ], GithubApi.prototype, "updateNews", null);
    return GithubApi;
}(base_api));
var githubApi = new github_api_GithubApi();
/* harmony default export */ var github_api = (githubApi);

// CONCATENATED MODULE: ./src/types/enums.ts
var EAjaxStatus;
(function (EAjaxStatus) {
    EAjaxStatus[EAjaxStatus["notSubmit"] = 0] = "notSubmit";
    EAjaxStatus[EAjaxStatus["pending"] = 1] = "pending";
    EAjaxStatus[EAjaxStatus["success"] = 2] = "success";
    EAjaxStatus[EAjaxStatus["failed"] = 3] = "failed";
})(EAjaxStatus || (EAjaxStatus = {}));

// EXTERNAL MODULE: ./src/containers/page-loading/index.tsx + 1 modules
var page_loading = __webpack_require__(12);

// CONCATENATED MODULE: ./src/containers/management/news/row.tsx

var TdInput = function (_a) {
    var field = _a.field, value = _a.value, editable = _a.editable, dispatch = _a.dispatch, idx = _a.idx;
    return (react_default.a.createElement("td", null, editable ?
        (react_default.a.createElement("input", { value: value, onChange: function (ev) { return dispatch({
                type: 'CHANGE',
                payload: {
                    field: field,
                    idx: idx,
                    value: ev.target.value
                }
            }); } })) :
        (react_default.a.createElement("span", null, value))));
};
var TableRow = function (_a) {
    var news = _a.news, idx = _a.idx, dispatch = _a.dispatch;
    return (react_default.a.createElement("tr", { className: "table__row " + (news.edited ? 'edited' : '') },
        react_default.a.createElement("td", null, idx),
        react_default.a.createElement(TdInput, { field: "date", value: news.date, dispatch: dispatch, editable: news.editable, idx: idx }),
        react_default.a.createElement(TdInput, { field: "title_chs", value: news.title.chs, dispatch: dispatch, editable: news.editable, idx: idx }),
        react_default.a.createElement(TdInput, { field: "title_cht", value: news.title.cht, dispatch: dispatch, editable: news.editable, idx: idx }),
        react_default.a.createElement(TdInput, { field: "title_jp", value: news.title.jp, dispatch: dispatch, editable: news.editable, idx: idx }),
        react_default.a.createElement("td", null,
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'SAVE', payload: { idx: idx } }), className: "operation__button clickable " + (news.editable ? '' : 'hide') }, "Save"),
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'EDIT', payload: { idx: idx } }), className: "operation__button clickable " + (news.editable ? 'hide' : '') }, "Edit"),
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'UP', payload: { idx: idx } }), className: "operation__button clickable" }, "Up"),
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'DOWN', payload: { idx: idx } }), className: "operation__button clickable" }, "Down"),
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'DELETE', payload: { idx: idx } }), className: "operation__button clickable" }, "Delete"))));
};
/* harmony default export */ var row = (TableRow);

// EXTERNAL MODULE: ./src/data/news.ts
var data_news = __webpack_require__(98);

// EXTERNAL MODULE: ./src/models/news.ts
var models_news = __webpack_require__(97);

// CONCATENATED MODULE: ./src/containers/management/news/reducer.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


;
;
var initState = {
    news: data_news["a" /* default */].map(function (n) { return new models_news["a" /* EditableNewsModel */](n); })
};
function reducer(state, _a) {
    var type = _a.type, payload = _a.payload;
    var idx;
    switch (type) {
        case 'ADD':
            var newNews = new models_news["a" /* EditableNewsModel */]();
            newNews.editable = true;
            newNews.edited = true;
            state.news = [newNews].concat(state.news);
            break;
        case 'UP':
            idx = payload.idx;
            if (idx <= 0)
                break;
            var tempUp = state.news[idx];
            state.news[idx] = state.news[idx - 1];
            state.news[idx - 1] = tempUp;
            state.news[idx].edited = true;
            state.news[idx - 1].edited = true;
            break;
        case 'DOWN':
            idx = payload.idx;
            if (idx < 0 || idx >= state.news.length - 1)
                break;
            var tempDown = state.news[idx];
            state.news[idx] = state.news[idx + 1];
            state.news[idx + 1] = tempDown;
            state.news[idx].edited = true;
            state.news[idx + 1].edited = true;
            break;
        case 'RESET':
            state.news = data_news["a" /* default */].map(function (n) { return new models_news["a" /* EditableNewsModel */](n); });
            break;
        case 'SAVE':
            state.news[payload.idx].editable = false;
            break;
        case 'EDIT':
            state.news[payload.idx].editable = true;
            break;
        case 'DELETE':
            state.news = state.news.filter(function (_, idx) { return idx !== payload.idx; });
            break;
        case 'CHANGE':
            switch (payload.field) {
                case 'date':
                    state.news[payload.idx].date = payload.value;
                    break;
                case 'title_chs':
                    state.news[payload.idx].title.chs = payload.value;
                    break;
                case 'title_cht':
                    state.news[payload.idx].title.cht = payload.value;
                    break;
                case 'title_jp':
                    state.news[payload.idx].title.jp = payload.value;
                    break;
            }
            state.news[payload.idx].edited = true;
            break;
    }
    return __assign({}, state);
}

// EXTERNAL MODULE: ./src/containers/management/news/style.css
var style = __webpack_require__(106);

// CONCATENATED MODULE: ./src/containers/management/news/index.tsx









var TableHeader = function () { return (react_default.a.createElement("tr", { className: "table__header" },
    react_default.a.createElement("th", null, "id"),
    react_default.a.createElement("th", null, "Date"),
    react_default.a.createElement("th", null, "Title_chs"),
    react_default.a.createElement("th", null, "Title_cht"),
    react_default.a.createElement("th", null, "Title_jp"),
    react_default.a.createElement("th", null, "Operation"))); };
function NewsManagement() {
    var password = react_default.a.useContext(pwd_context);
    var _a = react_default.a.useReducer(reducer, initState), state = _a[0], dispatch = _a[1];
    var _b = react_default.a.useState(EAjaxStatus.notSubmit), ajaxStatus = _b[0], setAjaxStatus = _b[1];
    function handleSubmit(news, password) {
        var json = news.map(function (n) { return ({
            date: n.date,
            title_chs: n.title.chs,
            title_cht: n.title.cht,
            title_jp: n.title.jp
        }); });
        var csv = papaparse_default.a.unparse(json);
        setAjaxStatus(EAjaxStatus.pending);
        github_api.updateNews(csv, password).then(function (res) {
            setAjaxStatus(EAjaxStatus.success);
        }).catch(function (err) {
            alert('submission failed, please try again');
            setAjaxStatus(EAjaxStatus.failed);
            console.error(err);
        });
    }
    if (ajaxStatus === EAjaxStatus.pending)
        return (react_default.a.createElement(page_loading["a" /* default */], null));
    return (react_default.a.createElement("form", { className: "management__form management__form--news" },
        react_default.a.createElement("h2", { className: "form_title" }, "News Management"),
        react_default.a.createElement("table", null,
            react_default.a.createElement("tbody", null,
                react_default.a.createElement(TableHeader, null),
                state.news.map(function (n, idx) { return (react_default.a.createElement(row, { news: n, idx: idx, key: idx, dispatch: dispatch })); }))),
        react_default.a.createElement("div", { className: "form__buttons" },
            react_default.a.createElement("a", { onClick: handleSubmit.bind(null, state.news, password), className: "button button--submit clickable" }, "Submit"),
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'ADD' }), className: "button button--add clickable" }, "Add"),
            react_default.a.createElement("a", { onClick: dispatch.bind(null, { type: 'RESET' }), className: "button button--reset clickable" }, "Reset")),
        ajaxStatus === EAjaxStatus.success ? (react_default.a.createElement("article", { className: "form__result" },
            react_default.a.createElement("h3", { className: "result__title" }, "Update News successfully"),
            react_default.a.createElement("p", null, "Please wait for few minutes before the update takes effect."),
            react_default.a.createElement("p", null,
                "Compilation progress can be found at \u00A0",
                react_default.a.createElement("a", { href: "https://travis-ci.org/hearts-round/hearts-round.github.io/branches" }, "here")))) : null));
}

// EXTERNAL MODULE: ./src/containers/management/style.css
var management_style = __webpack_require__(107);

// CONCATENATED MODULE: ./src/containers/management/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagementPage; });






var NavItem = function (_a) {
    var to = _a.to, label = _a.label;
    return (react_default.a.createElement(NavLink["a" /* default */], { to: to, exact: true, className: "navigation__button", activeClassName: "active", replace: true }, label));
};
function ManagementPage(_a) {
    var location = _a.location;
    var _b = react_default.a.useState(''), password = _b[0], setPassword = _b[1];
    return (react_default.a.createElement(HashRouter["a" /* default */], null,
        react_default.a.createElement("main", { className: "management__container" },
            react_default.a.createElement("p", { className: "management__auth-info" },
                react_default.a.createElement("span", null, "Password: "),
                react_default.a.createElement("input", { className: "auth__input", value: password, onChange: function (ev) { return setPassword(ev.target.value); } })),
            react_default.a.createElement("nav", { className: "management__nav" },
                react_default.a.createElement(NavItem, { to: "/news", label: 'News' }),
                react_default.a.createElement(NavItem, { to: "/albums", label: 'Albums' })),
            react_default.a.createElement(pwd_context.Provider, { value: password },
                react_default.a.createElement(Switch["a" /* default */], null,
                    react_default.a.createElement(Redirect["a" /* default */], { exact: true, path: "/", to: "/news" }),
                    react_default.a.createElement(Route["a" /* default */], { exact: true, path: "/news", component: NewsManagement }),
                    react_default.a.createElement(Route["a" /* default */], { exact: true, path: "/albums", component: AlbumManagement }))))));
}


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

/* (ignored) */

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