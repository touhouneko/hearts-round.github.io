(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t){e.exports=[{url_cover:"https://via.placeholder.com/280x290",url_origin:"https://via.placeholder.com/890x490",author_name:"Coretania1",author_url:"https://weibo.com/u/6500013650"},{url_cover:"https://via.placeholder.com/290x280",url_origin:"https://via.placeholder.com/730x450",author_name:"Coretania2",author_url:"https://weibo.com/u/6500013650"},{url_cover:"https://via.placeholder.com/270x290",url_origin:"https://via.placeholder.com/530x360",author_name:"Coretania2",author_url:"https://weibo.com/u/6500013650"},{url_cover:"https://via.placeholder.com/290x270",url_origin:"https://via.placeholder.com/230x860",author_name:"Coretania3",author_url:"https://weibo.com/u/6500013650"},{url_cover:"https://via.placeholder.com/250x290",url_origin:"https://via.placeholder.com/430x860",author_name:"Coretania4",author_url:"https://weibo.com/u/6500013650"},{url_cover:"https://via.placeholder.com/290x250",url_origin:"https://via.placeholder.com/730x460",author_name:"Coretania5",author_url:"https://weibo.com/u/6500013650"},{url_cover:"https://via.placeholder.com/210x210",url_origin:"https://via.placeholder.com/830x860",author_name:"Coretania6",author_url:"https://weibo.com/u/6500013650"}]},104:function(e,t,a){},105:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(103),l=a.n(o).a.map(function(e){return{url:{cover:e.url_cover,origin:e.url_origin},author:{name:e.author_name,page:e.author_url}}}),c=a(13),i=a(41),u=a(45),s=a(40);a(104);function m(e){var t=e.initialIdx,a=e.container,o=Object(n.useState)(t),c=o[0],m=o[1],d=Object(n.useRef)(null),p=l[c];return Object(s.a)(d,i.a.closeModal.bind(i.a,a),a),r.a.createElement(u.a,{prevLabel:c>0?"Previous":"",nextLabel:c<l.length-1?"Next":"",handleNext:function(){return m(c+1)},handlePrev:function(){return m(c-1)},ref:d},r.a.createElement("main",{className:"gallery__modal"},r.a.createElement("img",{src:p.url.origin,className:"modal__image modal__image--gallery"}),r.a.createElement("article",{className:"modal__description modal__description--gallery"},r.a.createElement("section",{className:"description__section with-v-bar"},r.a.createElement("p",{className:"section__text"},p.author.name)),r.a.createElement("section",{className:"description__section description__section--link with-v-bar"},r.a.createElement("p",{className:"section__text section__text--gap"},"Link"),r.a.createElement("p",{className:"section__text"},r.a.createElement("a",{href:p.url.origin,target:"_blank"},"下载原图")),r.a.createElement("p",{className:"section__text"},r.a.createElement("a",{href:p.author.page,target:"_blank"},"画师主页"))))))}a(105);var d=function(e){var t=e.info,a=e.idx;return r.a.createElement("li",{onClick:function(e){var t=i.a.createFullscreenMask();Object(c.render)(r.a.createElement(m,{initialIdx:e,container:t}),t),document.getElementsByTagName("body")[0].appendChild(t)}.bind(null,a),className:"illustration__item illustration__item--"+a%3+" clickable"},r.a.createElement("img",{src:t.url.cover,className:"illustration__image"}))};t.default=function(){return r.a.createElement("ul",{className:"illustration__list"},l.map(function(e,t){return r.a.createElement(d,{info:e,idx:t,key:t})}))}},39:function(e,t,a){},40:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n);function o(e,t,a){function n(a){null!==e.current&&(e.current.contains(a.target)||t())}r.a.useEffect(function(){return void 0===a&&(a=document),a.addEventListener("click",n),function(){a.removeEventListener("click",n)}},[])}},41:function(e,t,a){"use strict";var n=a(13),r=a(43),o=(a(39),function(e,t,a,n){var r,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(o<3?r(l):o>3?r(t,a,l):r(t,a))||l);return o>3&&l&&Object.defineProperty(t,a,l),l}),l=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.closeModal=function(e){Object(n.unmountComponentAtNode)(e),this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},o([r.a],e.prototype,"createFullscreenMask",null),o([r.a],e.prototype,"closeModal",null),e}());t.a=l},43:function(e,t,a){"use strict";function n(e,t,a){return{get:function(){var e=a.value.bind(this);return Object.defineProperty(this,t,{value:e}),e}}}a.d(t,"a",function(){return n})},45:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(39),r.a.forwardRef(function(e,t){var a=e.className,n=void 0===a?"":a,o=e.children,l=e.nextLabel,c=e.prevLabel,i=e.handlePrev,u=e.handleNext;return r.a.createElement("div",{ref:t,className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+n},o,r.a.createElement("div",{className:"nav__wrapper"},r.a.createElement("a",{onClick:i,className:"nav__button nav__button--previous clickable "+(""===c?"hide":"")},r.a.createElement("span",null,"← ",c)),r.a.createElement("a",{onClick:u,className:"nav__button nav__button--next clickable "+(""===l?"hide":"")},r.a.createElement("span",null,l," →"))))}));t.a=o}}]);