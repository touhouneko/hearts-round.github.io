(window.webpackJsonp=window.webpackJsonp||[]).push([[11],Array(39).concat([function(e,t,n){"use strict";var r=n(72),a=n(114),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},,,,,function(e,t,n){"use strict";function r(e,t,n){return{get:function(){var e=n.value.bind(this);return Object.defineProperty(this,t,{value:e}),e}}}n.d(t,"a",function(){return r})},,,,,,,,function(e,t,n){"use strict";var r=function(){return function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=""),void 0===n&&(n=""),this.chs=e,this.cht=t,this.jp=n}}();t.a=r},,,function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(52),a=n(44),o=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},i=function(){return function(e,t){this.date=e,this.title=t}}();t.b=i;var s=function(){function e(e){void 0===e&&(e=new i("",new r.a)),this.news=e,this.editable=!1,this.edited=!1,this.editing=!1}return Object.defineProperty(e.prototype,"date",{get:function(){return this.news.date},set:function(e){this.news.date=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.news.title},enumerable:!0,configurable:!0}),e.prototype.addEditEffect=function(e){var t=this;void 0===e&&(e=0),this.edited=!0,setTimeout(function(){return t.edited=!1},e)},o([a.a],e.prototype,"addEditEffect",null),e}()},,,function(e,t,n){"use strict";var r=n(59),a=n.n(r),o=n(55),i=n(52);var s=a.a.map(function(e){var t=new i.a(e.title_chs,e.title_cht,e.title_jp);return new o.b(e.date,t)});t.a=s},function(e,t){e.exports=[{date:"8102年15月61日",title_chs:"Ovovovovoo",title_cht:"Oxixixici",title_jp:"Jcjcjcjcjcjc"},{date:"2018年10月07日",title_chs:"测试 07",title_cht:"测试 07",title_jp:"测试 07"},{date:"8102年10月09日",title_chs:"測試 09",title_cht:"測試 09",title_jp:"測試 09"},{date:"2018年10月08日",title_chs:"测试 08",title_cht:"测试 08",title_jp:"测试 08"},{date:"2018年11月02日",title_chs:"客户端测试1",title_cht:"客户端测试1",title_jp:"客户端测试1"}]},,,,function(e,t,n){"use strict";(function(t){var r=n(39),a=n(116),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n(73):void 0!==t&&(s=n(73)),s),transformRequest:[function(e,t){return a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(o)}),e.exports=c}).call(this,n(51))},,,,,,,,,function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(39),a=n(117),o=n(119),i=n(120),s=n(121),c=n(74),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(122);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",w=e.auth.password||"";p.Authorization="Basic "+u(v+":"+w)}if(d.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};a(t,l,r),d=null}},d.onerror=function(){l(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var b=n(123),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,n){"use strict";var r=n(118);e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){!function(t){"use strict";var r={};e.exports?(r.bytesToHex=n(110).bytesToHex,r.convertString=n(111),e.exports=u):(r.bytesToHex=t.convertHex.bytesToHex,r.convertString=t.convertString,t.sha256=u);var a=[];!function(){function e(e){for(var t=Math.sqrt(e),n=2;n<=t;n++)if(!(e%n))return!1;return!0}function t(e){return 4294967296*(e-(0|e))|0}for(var n=2,r=0;r<64;)e(n)&&(a[r]=t(Math.pow(n,1/3)),r++),n++}();var o=function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},i=function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},s=[],c=function(e,t,n){for(var r=e[0],o=e[1],i=e[2],c=e[3],u=e[4],l=e[5],f=e[6],p=e[7],d=0;d<64;d++){if(d<16)s[d]=0|t[n+d];else{var h=s[d-15],m=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,v=s[d-2],w=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;s[d]=m+s[d-7]+w+s[d-16]}var b=r&o^r&i^o&i,y=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),g=p+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&l^~u&f)+a[d]+s[d];p=f,f=l,l=u,u=c+g|0,c=i,i=o,o=r,r=g+(y+b)|0}e[0]=e[0]+r|0,e[1]=e[1]+o|0,e[2]=e[2]+i|0,e[3]=e[3]+c|0,e[4]=e[4]+u|0,e[5]=e[5]+l|0,e[6]=e[6]+f|0,e[7]=e[7]+p|0};function u(e,t){e.constructor===String&&(e=r.convertString.UTF8.stringToBytes(e));var n=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a=o(e),s=8*e.length;a[s>>5]|=128<<24-s%32,a[15+(s+64>>9<<4)]=s;for(var u=0;u<a.length;u+=16)c(n,a,u);var l=i(n);return t&&t.asBytes?l:t&&t.asString?r.convertString.bytesToString(l):r.bytesToHex(l)}u.x2=function(e,t){return u(u(e,{asBytes:!0}),t)}}(this)},function(e,t,n){!function(t){"use strict";var n={bytesToHex:function(e){return function(e){return e.map(function(e){return t=e.toString(16),n=2,t.length>n?t:Array(n-t.length+1).join("0")+t;var t,n}).join("")}(e)},hexToBytes:function(e){if(e.length%2==1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===e.indexOf("0x")&&(e=e.slice(2)),e.match(/../g).map(function(e){return parseInt(e,16)})}};e.exports?e.exports=n:t.convertHex=n}(this)},function(e,t,n){!function(t){"use strict";var n={bytesToString:function(e){return e.map(function(e){return String.fromCharCode(e)}).join("")},stringToBytes:function(e){return e.split("").map(function(e){return e.charCodeAt(0)})}};n.UTF8={bytesToString:function(e){return decodeURIComponent(escape(n.bytesToString(e)))},stringToBytes:function(e){return n.stringToBytes(unescape(encodeURIComponent(e)))}},e.exports?e.exports=n:t.convertString=n}(this)},function(e,t,n){e.exports=n(113)},function(e,t,n){"use strict";var r=n(39),a=n(72),o=n(115),i=n(63);function s(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(i);c.Axios=o,c.create=function(e){return s(r.merge(i,e))},c.Cancel=n(76),c.CancelToken=n(129),c.isCancel=n(75),c.all=function(e){return Promise.all(e)},c.spread=n(130),e.exports=c,e.exports.default=c},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(63),a=n(39),o=n(124),i=n(125);function s(e){this.defaults=e,this.interceptors={request:new o,response:new o}}s.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),(e=a.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},function(e,t,n){"use strict";var r=n(39);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(74);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e}},function(e,t,n){"use strict";var r=n(39);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))}))}),o=i.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,n){"use strict";var r=n(39),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(39);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function a(){this.message="String contains an invalid character"}a.prototype=new Error,a.prototype.code=5,a.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,o=String(e),i="",s=0,c=r;o.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new a;t=t<<8|n}return i}},function(e,t,n){"use strict";var r=n(39);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(39);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},function(e,t,n){"use strict";var r=n(39),a=n(126),o=n(75),i=n(63),s=n(127),c=n(128);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return u(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(39);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(76);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(t){e=t}),cancel:e}},e.exports=a},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),i=n(35),s=n(37),c=n(36),u=n(17),l=Object(r.createContext)("");function f(){return a.a.createElement("div",{className:"management__form management__form--album"},a.a.createElement("h2",{className:"form_title"},"Albums Management"))}var p,d,h=n(64),m=n.n(h),v=n(109),w=n.n(v),b=n(44),y=n(112),g=n.n(y),E=function(){return function(e){void 0===e&&(e={}),this.axiosInstance=g.a.create(e)}}(),x=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},j=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.updateFile=function(e,t,n){var r=w()(n).toUpperCase(),a=btoa(unescape(encodeURIComponent(e)));return this.axiosInstance.put("https://kmtcckw6m9.execute-api.ap-southeast-2.amazonaws.com/prod/content?path="+t+"&content="+a+"&password="+r)},t.prototype.updateNews=function(e,t){return this.updateFile(e,"src/data/news.csv",t)},_([b.a],t.prototype,"updateFile",null),_([b.a],t.prototype,"updateNews",null),t}(E));!function(e){e[e.notSubmit=0]="notSubmit",e[e.pending=1]="pending",e[e.success=2]="success",e[e.failed=3]="failed"}(d||(d={}));var C=n(6),S=function(e){var t=e.field,n=e.value,r=e.editable,o=e.dispatch,i=e.idx;return a.a.createElement("td",null,r?a.a.createElement("input",{value:n,onChange:function(e){return o({type:"CHANGE",payload:{field:t,idx:i,value:e.target.value}})}}):a.a.createElement("span",null,n))},N=function(e){var t=e.news,n=e.idx,r=e.dispatch;return a.a.createElement("tr",{className:"table__row "+(t.edited?"edited":"")},a.a.createElement("td",null,n),a.a.createElement(S,{field:"date",value:t.date,dispatch:r,editable:t.editable,idx:n}),a.a.createElement(S,{field:"title_chs",value:t.title.chs,dispatch:r,editable:t.editable,idx:n}),a.a.createElement(S,{field:"title_cht",value:t.title.cht,dispatch:r,editable:t.editable,idx:n}),a.a.createElement(S,{field:"title_jp",value:t.title.jp,dispatch:r,editable:t.editable,idx:n}),a.a.createElement("td",null,a.a.createElement("a",{onClick:r.bind(null,{type:"SAVE",payload:{idx:n}}),className:"operation__button clickable "+(t.editable?"":"hide")},"Save"),a.a.createElement("a",{onClick:r.bind(null,{type:"EDIT",payload:{idx:n}}),className:"operation__button clickable "+(t.editable?"hide":"")},"Edit"),a.a.createElement("a",{onClick:r.bind(null,{type:"UP",payload:{idx:n}}),className:"operation__button clickable"},"Up"),a.a.createElement("a",{onClick:r.bind(null,{type:"DOWN",payload:{idx:n}}),className:"operation__button clickable"},"Down"),a.a.createElement("a",{onClick:r.bind(null,{type:"DELETE",payload:{idx:n}}),className:"operation__button clickable"},"Delete")))},T=n(58),k=n(55),R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},A={news:T.a.map(function(e){return new k.a(e)})};function O(e,t){var n,r=t.type,a=t.payload;switch(r){case"ADD":var o=new k.a;o.editable=!0,o.edited=!0,e.news=[o].concat(e.news);break;case"UP":if((n=a.idx)<=0)break;var i=e.news[n];e.news[n]=e.news[n-1],e.news[n-1]=i,e.news[n].edited=!0,e.news[n-1].edited=!0;break;case"DOWN":if((n=a.idx)<0||n>=e.news.length-1)break;var s=e.news[n];e.news[n]=e.news[n+1],e.news[n+1]=s,e.news[n].edited=!0,e.news[n+1].edited=!0;break;case"RESET":e.news=T.a.map(function(e){return new k.a(e)});break;case"SAVE":e.news[a.idx].editable=!1;break;case"EDIT":e.news[a.idx].editable=!0;break;case"DELETE":e.news=e.news.filter(function(e,t){return t!==a.idx});break;case"CHANGE":switch(a.field){case"date":e.news[a.idx].date=a.value;break;case"title_chs":e.news[a.idx].title.chs=a.value;break;case"title_cht":e.news[a.idx].title.cht=a.value;break;case"title_jp":e.news[a.idx].title.jp=a.value}e.news[a.idx].edited=!0}return R({},e)}n(131);var B=function(){return a.a.createElement("tr",{className:"table__header"},a.a.createElement("th",null,"id"),a.a.createElement("th",null,"Date"),a.a.createElement("th",null,"Title_chs"),a.a.createElement("th",null,"Title_cht"),a.a.createElement("th",null,"Title_jp"),a.a.createElement("th",null,"Operation"))};function D(){var e=a.a.useContext(l),t=a.a.useReducer(O,A),n=t[0],r=t[1],o=a.a.useState(d.notSubmit),i=o[0],s=o[1];return i===d.pending?a.a.createElement(C.a,null):a.a.createElement("form",{className:"management__form management__form--news"},a.a.createElement("h2",{className:"form_title"},"News Management"),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement(B,null),n.news.map(function(e,t){return a.a.createElement(N,{news:e,idx:t,key:t,dispatch:r})}))),a.a.createElement("div",{className:"form__buttons"},a.a.createElement("a",{onClick:function(e,t){var n=e.map(function(e){return{date:e.date,title_chs:e.title.chs,title_cht:e.title.cht,title_jp:e.title.jp}}),r=m.a.unparse(n);s(d.pending),j.updateNews(r,t).then(function(e){s(d.success)}).catch(function(e){alert("submission failed, please try again"),s(d.failed),console.error(e)})}.bind(null,n.news,e),className:"button button--submit clickable"},"Submit"),a.a.createElement("a",{onClick:r.bind(null,{type:"ADD"}),className:"button button--add clickable"},"Add"),a.a.createElement("a",{onClick:r.bind(null,{type:"RESET"}),className:"button button--reset clickable"},"Reset")),i===d.success?a.a.createElement("article",{className:"form__result"},a.a.createElement("h3",{className:"result__title"},"Update News successfully"),a.a.createElement("p",null,"Please wait for few minutes before the update takes effect."),a.a.createElement("p",null,"Compilation progress can be found at  ",a.a.createElement("a",{href:"https://travis-ci.org/hearts-round/hearts-round.github.io/branches"},"here"))):null)}var P=n(15);n(132);n.d(t,"default",function(){return L});var U=function(e){var t=e.to,n=e.label;return a.a.createElement(o.a,{to:t,exact:!0,className:"navigation__button",activeClassName:"active",replace:!0},n)};function L(e){e.location;var t=a.a.useState(""),n=t[0],r=t[1];return a.a.createElement(i.a,null,a.a.createElement("main",{className:"management__container"},a.a.createElement("p",{className:"management__auth-info"},a.a.createElement("span",null,"Password: "),a.a.createElement("input",{className:"auth__input",value:n,onChange:function(e){return r(e.target.value)}})),a.a.createElement("nav",{className:"management__nav"},a.a.createElement(U,{to:"/news",label:"News"}),a.a.createElement(U,{to:"/albums",label:"Albums"})),a.a.createElement(l.Provider,{value:n},a.a.createElement(s.a,null,a.a.createElement(c.a,{exact:!0,path:"/",to:"/news"}),a.a.createElement(u.a,{exact:!0,path:"/news",component:D}),a.a.createElement(u.a,{exact:!0,path:"/albums",component:f}),a.a.createElement(u.a,{component:P.a})))))}}])]);