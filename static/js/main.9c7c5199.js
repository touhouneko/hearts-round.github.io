!function(e){function t(t){for(var r,o,l=t[0],c=t[1],u=t[2],s=0,d=[];s<l.length;s++)o=l[s],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={15:0},a={15:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,17:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="static/css/"+({0:"about",1:"albumInfo",2:"contact",3:"discography",4:"discography-album",5:"discography-video",6:"gallery",7:"home",8:"lyrics",9:"lyrics-loader0",10:"lyrics-loader1",11:"lyrics-loader2",12:"lyrics-loader3",13:"lyrics-loader4",14:"lyrics-loader5",17:"work"}[e]||e)+"."+{0:"74e6aa7d",1:"77e53308",2:"5fa6e51c",3:"244bb82e",4:"49b22634",5:"96194961",6:"bd08d1c6",7:"d0f88920",8:"0783046c",9:"3364e2fa",10:"ee150349",11:"84b85811",12:"031d1548",13:"7122ac22",14:"cefe40b9",17:"ef2f6d3d"}[e]+".css",o=l.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=(s=a[i]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){var s;if((c=(s=u[i]).getAttribute("data-href"))===r||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=function(e){return l.p+"static/js/"+({0:"about",1:"albumInfo",2:"contact",3:"discography",4:"discography-album",5:"discography-video",6:"gallery",7:"home",8:"lyrics",9:"lyrics-loader0",10:"lyrics-loader1",11:"lyrics-loader2",12:"lyrics-loader3",13:"lyrics-loader4",14:"lyrics-loader5",17:"work"}[e]||e)+"."+{0:"74e6aa7d",1:"77e53308",2:"5fa6e51c",3:"244bb82e",4:"49b22634",5:"96194961",6:"bd08d1c6",7:"d0f88920",8:"0783046c",9:"3364e2fa",10:"ee150349",11:"84b85811",12:"031d1548",13:"7122ac22",14:"cefe40b9",17:"ef2f6d3d"}[e]+".js"}(e),i=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,c.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=u;i.push([31,16]),n()}([,function(e,t,n){e.exports=n(22)()},function(e,t,n){"use strict";e.exports=function(){}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,l){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,i,l],s=0;(c=new Error(t.replace(/%s/g,function(){return u[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(27),function(e){var t=e.className,n=void 0===t?"":t;return o.a.createElement("div",{className:"lt-loading__container "+n},o.a.createElement("div",{className:"lt-loading__rect lt-loading__rect--0"}),o.a.createElement("div",{className:"lt-loading__rect lt-loading__rect--1"}),o.a.createElement("div",{className:"lt-loading__rect lt-loading__rect--2"}))});n(28),t.a=function(){return o.a.createElement("div",{className:"global__page-loading"},o.a.createElement(a,null))}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n(1),u=[],s=[];function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function d(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(r){var o=f(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(e){t.error=e}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function p(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function h(e,t){var f,d;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:p,webpack:null,modules:null},t),m=null;function y(){return m||(m=e(h.loader)),m.promise}return u.push(y),"function"==typeof h.webpack&&s.push(function(){if(e=h.webpack,"object"===r(n.m)&&e().every(function(e){return void 0!==e&&void 0!==n.m[e]}))return y();var e}),d=f=function(t){function n(r){o(this,n);var i=a(this,t.call(this,r));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),m=e(h.loader),i._loadModule()},y(),i.state={error:m.error,pastDelay:!1,timedOut:!1,loading:m.loading,loaded:m.loaded},i}return i(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach(function(t){e.context.loadable.report(t)}),m.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},h.timeout));var t=function(){e._mounted&&(e.setState({error:m.error,loaded:m.loaded,loading:m.loading}),e._clearTimeouts())};m.promise.then(function(){t()}).catch(function(e){t()})}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},n}(l.Component),f.contextTypes={loadable:c.shape({report:c.func.isRequired})},d}function m(e){return h(f,e)}m.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(d,e)};var y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function v(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then(function(){if(e.length)return v(e)})}y.propTypes={report:c.func.isRequired},y.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},m.Capture=y,m.preloadAll=function(){return new Promise(function(e,t){v(u).then(e,t)})},m.preloadReady=function(){return new Promise(function(e,t){v(s).then(e,e)})},e.exports=m},function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(3),i=n.n(a);function l(e){return"/"===e.charAt(0)}function c(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&l(e),a=t&&l(t),i=o||a;if(e&&l(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var u=void 0;if(r.length){var s=r[r.length-1];u="."===s||".."===s||""===s}else u=!1;for(var f=0,d=r.length;d>=0;d--){var p=r[d];"."===p?c(r,d):".."===p?(c(r,d),f++):f&&(c(r,d),f--)}if(!i)for(;f--;f)r.unshift("..");!i||""===r[0]||r[0]&&l(r[0])||r.unshift("");var h=r.join("/");return u&&"/"!==h.substr(-1)&&(h+="/"),h},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,r){return e(t,n[r])});var r=void 0===t?"undefined":s(t);if(r!==(void 0===n?"undefined":s(n)))return!1;if("object"===r){var o=t.valueOf(),a=n.valueOf();if(o!==t||a!==n)return e(o,a);var i=Object.keys(t),l=Object.keys(n);return i.length===l.length&&i.every(function(r){return e(t[r],n[r])})}return!1},d=function(e){return"/"===e.charAt(0)?e:"/"+e},p=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)},h=function(e,t){return p(e,t)?e.substr(t.length):e},m=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},y=function(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e,t,n,r){var o=void 0;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=v({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=u(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o},g=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&f(e.state,t.state)},w=function(){var e=null,t=[];return{setPrompt:function(t){return o()(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,a){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof r?r(i,a):(o()(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),a(!0)):a(!1!==i)}else a(!0)},appendListener:function(e){var n=!0,r=function(){n&&e.apply(void 0,arguments)};return t.push(r),function(){n=!1,t=t.filter(function(e){return e!==r})}},notifyListeners:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach(function(e){return e.apply(void 0,n)})}}},_=!("undefined"==typeof window||!window.document||!window.document.createElement),E=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},x=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},O=function(e,t){return t(window.confirm(e))},k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j=function(){try{return window.history.state||{}}catch(e){return{}}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(_,"Browser history needs a DOM");var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),l=e.forceRefresh,c=void 0!==l&&l,u=e.getUserConfirmation,s=void 0===u?O:u,f=e.keyLength,v=void 0===f?6:f,g=e.basename?m(d(e.basename)):"",P=function(e){var t=e||{},n=t.key,r=t.state,a=window.location,i=a.pathname+a.search+a.hash;return o()(!g||p(i,g),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+g+'".'),g&&(i=h(i,g)),b(i,r,n)},S=function(){return Math.random().toString(36).substr(2,v)},A=w(),N=function(e){T(Y,e),Y.length=n.length,A.notifyListeners(Y.location,Y.action)},L=function(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||M(P(e.state))},C=function(){M(P(j()))},R=!1,M=function(e){R?(R=!1,N()):A.confirmTransitionTo(e,"POP",s,function(t){t?N({action:"POP",location:e}):I(e)})},I=function(e){var t=Y.location,n=B.indexOf(t.key);-1===n&&(n=0);var r=B.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(R=!0,D(o))},q=P(j()),B=[q.key],U=function(e){return g+y(e)},D=function(e){n.go(e)},F=0,H=function(e){1===(F+=e)?(E(window,"popstate",L),a&&E(window,"hashchange",C)):0===F&&(x(window,"popstate",L),a&&x(window,"hashchange",C))},W=!1,Y={length:n.length,action:"POP",location:q,createHref:U,push:function(e,t){o()(!("object"===(void 0===e?"undefined":k(e))&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=b(e,t,S(),Y.location);A.confirmTransitionTo(a,"PUSH",s,function(e){if(e){var t=U(a),i=a.key,l=a.state;if(r)if(n.pushState({key:i,state:l},null,t),c)window.location.href=t;else{var u=B.indexOf(Y.location.key),s=B.slice(0,-1===u?0:u+1);s.push(a.key),B=s,N({action:"PUSH",location:a})}else o()(void 0===l,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=t}})},replace:function(e,t){o()(!("object"===(void 0===e?"undefined":k(e))&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=b(e,t,S(),Y.location);A.confirmTransitionTo(a,"REPLACE",s,function(e){if(e){var t=U(a),i=a.key,l=a.state;if(r)if(n.replaceState({key:i,state:l},null,t),c)window.location.replace(t);else{var u=B.indexOf(Y.location.key);-1!==u&&(B[u]=a.key),N({action:"REPLACE",location:a})}else o()(void 0===l,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(t)}})},go:D,goBack:function(){return D(-1)},goForward:function(){return D(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=A.setPrompt(e);return W||(H(1),W=!0),function(){return W&&(W=!1,H(-1)),t()}},listen:function(e){var t=A.appendListener(e);return H(1),function(){H(-1),t()}}};return Y};Object.assign,"function"==typeof Symbol&&Symbol.iterator,Object.assign;n.d(t,"a",function(){return P}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return g})},,,,,,function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))o.call(n,u)&&(l[u]=n[u]);if(r){i=r(n);for(var s=0;s<i.length;s++)a.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}},function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(){return o.a.createElement("main",{className:"404__container"},o.a.createElement("article",null,o.a.createElement("h1",null,"404"),o.a.createElement("p",null,"这里什么也没有"),o.a.createElement("p",null,"There is nothing here")))}},,,,,,function(e,t,n){"use strict";e.exports=n(21)},function(e,t,n){"use strict";
/** @license React v16.7.0-alpha.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r=null,o=3,a=-1,i=-1,l=!1,c=!1,u="object"==typeof performance&&"function"==typeof performance.now,s={timeRemaining:u?function(){if(null!==r&&r.expirationTime<i)return 0;var e=g()-performance.now();return 0<e?e:0}:function(){if(null!==r&&r.expirationTime<i)return 0;var e=g()-Date.now();return 0<e?e:0},didTimeout:!1};function f(){if(!l){var e=r.expirationTime;c?b():c=!0,v(h,e)}}function d(){var e=r,t=r.next;if(r===t)r=null;else{var n=r.previous;r=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var a=o,l=i;o=e,i=t;try{var c=n(s)}finally{o=a,i=l}if("function"==typeof c)if(c={callback:c,priorityLevel:e,expirationTime:t,next:null,previous:null},null===r)r=c.next=c.previous=c;else{n=null,e=r;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==r);null===n?n=r:n===r&&(r=c,f()),(t=n.previous).next=n.previous=c,c.next=n,c.previous=t}}function p(){if(-1===a&&null!==r&&1===r.priorityLevel){l=!0,s.didTimeout=!0;try{do{d()}while(null!==r&&1===r.priorityLevel)}finally{l=!1,null!==r?f():c=!1}}}function h(e){l=!0,s.didTimeout=e;try{if(e)for(;null!==r;){var n=t.unstable_now();if(!(r.expirationTime<=n))break;do{d()}while(null!==r&&r.expirationTime<=n)}else if(null!==r)do{d()}while(null!==r&&0<g()-t.unstable_now())}finally{l=!1,null!==r?f():c=!1,p()}}var m,y,v,b,g,w=Date,_="function"==typeof setTimeout?setTimeout:void 0,E="function"==typeof clearTimeout?clearTimeout:void 0,x="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,O="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function k(e){m=x(function(t){E(y),e(t)}),y=_(function(){O(m),e(t.unstable_now())},100)}if(u){var T=performance;t.unstable_now=function(){return T.now()}}else t.unstable_now=function(){return w.now()};if("undefined"!=typeof window&&window._schedMock){var j=window._schedMock;v=j[0],b=j[1],g=j[2]}else if("undefined"==typeof window||"function"!=typeof window.addEventListener){var P=null,S=-1,A=function(e,t){if(null!==P){var n=P;P=null;try{S=t,n(e)}finally{S=-1}}};v=function(e,t){-1!==S?setTimeout(v,0,e,t):(P=e,setTimeout(A,t,!0,t),setTimeout(A,1073741823,!1,1073741823))},b=function(){P=null},g=function(){return 1/0},t.unstable_now=function(){return-1===S?0:S}}else{"undefined"!=typeof console&&("function"!=typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof O&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var N=null,L=!1,C=-1,R=!1,M=!1,I=0,q=33,B=33;g=function(){return I};var U="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){if(e.source===window&&e.data===U){L=!1,e=N;var n=C;N=null,C=-1;var r=t.unstable_now(),o=!1;if(0>=I-r){if(!(-1!==n&&n<=r))return R||(R=!0,k(D)),N=e,void(C=n);o=!0}if(null!==e){M=!0;try{e(o)}finally{M=!1}}}},!1);var D=function(e){if(null!==N){k(D);var t=e-I+B;t<B&&q<B?(8>t&&(t=8),B=t<q?q:t):q=t,I=e+B,L||(L=!0,window.postMessage(U,"*"))}else R=!1};v=function(e,t){N=e,C=t,M||0>t?window.postMessage(U,"*"):R||(R=!0,k(D))},b=function(){N=null,L=!1,C=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:break;default:e=3}var r=o,i=a;o=e,a=t.unstable_now();try{return n()}finally{o=r,a=i,p()}},t.unstable_scheduleCallback=function(e,n){var i=-1!==a?a:t.unstable_now();if("object"==typeof n&&null!==n&&"number"==typeof n.timeout)n=i+n.timeout;else switch(o){case 1:n=i+-1;break;case 2:n=i+250;break;case 4:n=i+1073741823;break;default:n=i+5e3}if(e={callback:e,priorityLevel:o,expirationTime:n,next:null,previous:null},null===r)r=e.next=e.previous=e,f();else{i=null;var l=r;do{if(l.expirationTime>n){i=l;break}l=l.next}while(l!==r);null===i?i=r:i===r&&(r=e,f()),(n=i.previous).next=i.previous=e,e.next=i,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)r=null;else{e===r&&(r=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=o;return function(){var r=o,i=a;o=n,a=t.unstable_now();try{return e.apply(this,arguments)}finally{o=r,a=i,p()}}},t.unstable_getCurrentPriorityLevel=function(){return o}},function(e,t,n){"use strict";var r=n(23);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),i=n(33),l=n(35),c=n(32),u=n(15),s=n(36),f=n(6),d=n.n(f);n(24);var p=n(34),h=(n(25),[{label:"home",exact:!0,path:"/home"},{label:"discography",exact:!1,path:"/discography"},{label:"gallery",exact:!1,path:"/gallery"},{label:"works",exact:!1,path:"/works"},{label:"about",exact:!1,path:"/about"},{label:"contact",exact:!0,path:"/contact"}]);function m(e,t){return o.a.createElement("li",{className:"nav__item",key:e.label},o.a.createElement(p.a,{className:"nav__item-text",activeClassName:"active",to:e.path,exact:e.exact},e.label))}var y=o.a.forwardRef(function(e,t){return o.a.createElement("header",{className:"global__header"},o.a.createElement("nav",{className:"nav__container",ref:t},o.a.createElement("div",{className:"logo__wrapper"},o.a.createElement("i",{className:"logo"}),o.a.createElement("span",{className:"logo__text"},"Hearts Rounds")),o.a.createElement("ul",{className:"nav__list"},h.map(m))))}),v=n(5),b=(n(29),function(){return o.a.createElement("footer",{className:"global__footer"},o.a.createElement("section",{className:"footer__section footer__section--social"},o.a.createElement("a",{href:"https://twitter.com",target:"_blank",className:"social__logo-wrapper social__logo-wrapper--twitter clickable"},o.a.createElement("i",{className:"social__logo social__logo--twitter"})),o.a.createElement("a",{href:"https://weibo.com/u/6411746236",target:"_blank",className:"social__logo-wrapper social__logo-wrapper--weibo clickable"},o.a.createElement("i",{className:"social__logo social__logo--weibo"}))),o.a.createElement("section",{className:"footer__section footer__section--site-name"},o.a.createElement("p",{className:"section__paragraph"},"- All Rounds of Hearts -")),o.a.createElement("section",{className:"footer__section footer__section--copyright"},o.a.createElement("p",{className:"section__paragraph"},"© 2018 HeartsRounds All Rights Reserved.")))}),g=n(14),w=(n(30),d()({loader:function(){return n.e(7).then(n.bind(null,81))},loading:v.a})),_=d()({loader:function(){return n.e(3).then(n.bind(null,79))},loading:v.a}),E=d()({loader:function(){return n.e(8).then(n.bind(null,83))},loading:v.a}),x=d()({loader:function(){return n.e(2).then(n.bind(null,80))},loading:v.a}),O=d()({loader:function(){return n.e(6).then(n.bind(null,82))},loading:v.a}),k=d()({loader:function(){return n.e(17).then(n.bind(null,84))},loading:v.a}),T=d()({loader:function(){return n.e(0).then(n.bind(null,85))},loading:v.a}),j=d()({loader:function(){return n.e(1).then(n.bind(null,86))},loading:v.a});var P=Object(s.a)(function(e){var t,n=e.location,a=Object(r.useRef)(null),i=document.getElementsByTagName("html")[0],s="/about"===n.pathname.slice(0,6)||"/"===n.pathname||"/home"===n.pathname.slice(0,5);return t=function(){if(null!==a.current){var e=a.current.clientWidth;i.style.minWidth=e+"px"}},Object(r.useEffect)(function(){return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{key:"nav",ref:a}),o.a.createElement("div",{className:"global__body "+(s?"full-width":""),key:"body"},o.a.createElement(l.a,null,o.a.createElement(c.a,{exact:!0,path:"/",to:"/home"}),o.a.createElement(u.a,{exact:!0,path:"/home",component:w}),o.a.createElement(u.a,{exact:!0,path:"/discography/lyrics/:albumCode/:trackId",component:E}),o.a.createElement(u.a,{exact:!0,path:"/discography/album/:code",component:j}),o.a.createElement(u.a,{path:"/discography",component:_}),o.a.createElement(u.a,{exact:!0,path:"/contact",component:x}),o.a.createElement(u.a,{exact:!0,path:"/gallery",component:O}),o.a.createElement(u.a,{exact:!0,path:"/works",component:k}),o.a.createElement(u.a,{exact:!0,path:"/about",component:T}),o.a.createElement(u.a,{exact:!0,path:"/about/:staff",component:T}),o.a.createElement(u.a,{exact:!0,path:"/404",component:g.a}),o.a.createElement(c.a,{to:"/404"}))),o.a.createElement(b,{key:"footer"}))});Object(a.render)(o.a.createElement(i.a,null,o.a.createElement(P,null)),document.getElementById("root"))}]);