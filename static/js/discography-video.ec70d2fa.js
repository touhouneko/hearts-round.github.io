(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{36:function(e,a,t){"use strict";function n(e,a,t){return{get:function(){var e=t.value.bind(this);return Object.defineProperty(this,a,{value:e}),e}}}t.d(a,"a",function(){return n})},37:function(e,a,t){},38:function(e,a,t){"use strict";var n=t(36),i=function(e,a,t,n){var i,l=arguments.length,r=l<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(l<3?i(r):l>3?i(a,t,r):i(a,t))||r);return l>3&&r&&Object.defineProperty(a,t,r),r},l=function(){function e(e){var a,t,n,i,l,r,o;a=e.vocal,this.vocal=void 0===a?"":a,t=e.original,this.original=void 0===t?"":t,n=e.composer,this.composer=void 0===n?"":n,i=e.arrange,this.arrange=void 0===i?"":i,l=e.lyrics,this.lyrics=void 0===l?"":l,r=e.pv,this.pv=void 0===r?"":r,o=e.illustrator,this.illustrator=void 0===o?"":o}return e.prototype.merge=function(e,a){return""===this[e]&&""===this[a]?"":""===this[e]?this[a]:""===this[a]?this[e]:this[e]+" | "+this[a]},i([n.a],e.prototype,"merge",null),e}();a.a=l},39:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(0),i=t.n(n);function l(e,a,t){function n(t){null!==e.current&&(e.current.contains(t.target)||a())}i.a.useEffect(function(){return void 0===t&&(t=document),t.addEventListener("click",n),function(){t.removeEventListener("click",n)}},[])}},40:function(e,a,t){"use strict";var n=t(11),i=t(36),l=(t(37),function(e,a,t,n){var i,l=arguments.length,r=l<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(l<3?i(r):l>3?i(a,t,r):i(a,t))||r);return l>3&&r&&Object.defineProperty(a,t,r),r}),r=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.closeModal=function(e){Object(n.unmountComponentAtNode)(e),this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},l([i.a],e.prototype,"createFullscreenMask",null),l([i.a],e.prototype,"closeModal",null),e}());a.a=r},41:function(e,a,t){"use strict";var n=t(44),i=t(38),l=function(){function e(e,a,t,n,i,l,r){this.code=e,this.name=a,this.date=t,this.cover=n,this.thanks=i,this.purchaseLink=l,this.tracks=r,this.author=this.generateAuthor()}return e.prototype.generateAuthor=function(){var e=new Map;this.tracks.forEach(function(a){Object.keys(a.author).forEach(function(t){""===a.author[t]&&void 0!==a.author[t]||(void 0===e.get(t)?e.set(t,[a.author[t]]):e.get(t).findIndex(function(e){return e===a.author[t]})<0&&e.get(t).push(a.author[t]))})});for(var a=new i.a({}),t=e.entries(),n=t.next().value;void 0!==n;){var l=n[0],r=n[1];void 0!==r&&(a[l]=r.join(" | ")),n=t.next().value}return a},e}(),r=function(){return function(e,a,t,n,i){void 0===n&&(n=""),void 0===i&&(i=!1),this.title=e,this.length=a,this.author=t,this.link=n,this.hasLyrics=i}}(),o=n.map(function(e){return new l(e.code,e.name,e.date,e.cover,e.thanks,e.product_link,e.tracks.map(function(e){return new r(e.title,e.length,new i.a(e),e.link,e.has_lyrics)}))});a.a=o},42:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=(t(37),i.a.forwardRef(function(e,a){var t=e.className,n=void 0===t?"":t,l=e.children,r=e.nextLabel,o=e.prevLabel,c=e.handlePrev,s=e.handleNext;return i.a.createElement("div",{ref:a,className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+n},l,i.a.createElement("div",{className:"nav__wrapper"},i.a.createElement("a",{onClick:c,className:"nav__button nav__button--previous clickable "+(""===o?"hide":"")},i.a.createElement("span",null,"← ",o)),i.a.createElement("a",{onClick:s,className:"nav__button nav__button--next clickable "+(""===r?"hide":"")},i.a.createElement("span",null,r," →"))))}));a.a=l},43:function(e,a,t){},44:function(e){e.exports=[{name:"album001",code:"HATO001",cover:"https://via.placeholder.com/500x500",date:"2017-12-9",thanks:"Renka",product_link:{taobao:"https://www.taobao.com"},tracks:[{title:"track 001",vocal:"CoreTania",original:"original track 001",composer:"xxx",arrange:"xiaobai2",pv:"some_one",lyrics:"N-apoleon1",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 002",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album002",code:"HATO002",date:"2017-12-12",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 004",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0},{title:"track 005",vocal:"CoreTania",original:"original track 001",pv:"some_one",illustrator:"TOMATO",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!1}]},{name:"album003",code:"HATO003",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 008",vocal:"CoreTania",original:"original track 001",illustrator:"TOMATO",arrange:"xiaobai",lyrics:"N-apoleon",pv:"some_one",length:"04:32",link:"mp3_link",has_lyrics:!1},{title:"track 007",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",has_lyrics:!0}]},{name:"album004",code:"HATO004",date:"2017-11-11",cover:"https://via.placeholder.com/500x500",thanks:"Renka",product_link:{taobao:"https://www.taobao.com",tora:"https://www.toranoana.jp/"},tracks:[{title:"track 021",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",illustrator:"TOMATO",lyrics:"N-apoleon",length:"04:32",pv:"some_one",link:"mp3_link",has_lyrics:!0},{title:"track 011",vocal:"CoreTania",original:"original track 001",arrange:"xiaobai",lyrics:"N-apoleon",length:"04:32",link:"mp3_link",pv:"some_one",has_lyrics:!0}]}]},45:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(11),r=t(39),o=t(42),c=t(40),s=t(41);t(37),t(43);function u(e){var a=e.links,t=e.container,l=Object(n.useRef)(null);return Object(r.a)(l,c.a.closeModal.bind(c.a,t)),i.a.createElement("ul",{ref:l,className:"lt-modal__window lt-modal__window--center purchase-modal__container"},i.a.createElement("li",{className:"purchase-modal__item"},i.a.createElement("a",{href:a.taobao,className:"purchase-modal__link",target:"_blank"},i.a.createElement("i",{className:"purchase-modal__icon purchase-modal__icon--taobao"}),i.a.createElement("p",{className:"purchase-modal__region"},"中国大陆"))),i.a.createElement("li",{className:"purchase-modal__item"},i.a.createElement("a",{href:a.tora,className:"purchase-modal__link",target:"_blank"},i.a.createElement("i",{className:"purchase-modal__icon purchase-modal__icon--tora"}),i.a.createElement("p",{className:"purchase-modal__region"},"日本"))))}t.d(a,"a",function(){return _});var m=function(e){var a=e.field,t=e.value;return i.a.createElement("li",{className:"album-info__author-item"},i.a.createElement("p",{className:"album-info__author album-info__author--field"},i.a.createElement("span",{className:"underlined"},a)),i.a.createElement("p",{className:"album-info__author album-info__author--value"},t))};function d(e){var a=e.initialIdx,t=e.container,d=Object(n.useState)(a),_=d[0],h=d[1],p=i.a.useRef(null);Object(r.a)(p,c.a.closeModal.bind(c.a,t),t);var v=s.a[_];return i.a.createElement(o.a,{prevLabel:_>0?s.a[_-1].name:"",nextLabel:_<s.a.length-1?s.a[_+1].name:"",handleNext:function(){return h(_+1)},handlePrev:function(){return h(_-1)},ref:p,className:"album-modal"},i.a.createElement("main",{className:"album-modal__window"},i.a.createElement("section",{className:"album-info__container"},i.a.createElement("div",{className:"album-info__column--left"},i.a.createElement("img",{src:v.cover,className:"album-info__cover"}),i.a.createElement("p",{className:"album-info__code"},v.code," ©Hearts Rounds 2017 All Rights Reserved.")),i.a.createElement("article",{className:"album-info__column--right"},i.a.createElement("header",{className:"album-info__header"},i.a.createElement("div",{className:"album-info__title-wrapper"},i.a.createElement("h2",{className:"album-info__title"},"『",v.name,"』"),i.a.createElement("time",{className:"album-info__time"},v.date)),i.a.createElement("i",{onClick:function(e){var a=c.a.createFullscreenMask();Object(l.render)(i.a.createElement(u,{links:e,container:a}),a),document.getElementsByTagName("body")[0].appendChild(a)}.bind(null,v.purchaseLink),className:"album-info__buy clickable"})),i.a.createElement("ul",{className:"album-info__author-list"},i.a.createElement(m,{field:"Original",value:v.author.original}),i.a.createElement(m,{field:"Compose & Arrange",value:v.author.merge("composer","arrange")}),i.a.createElement(m,{field:"Lyrics",value:v.author.lyrics}),i.a.createElement(m,{field:"Vocal",value:v.author.vocal}),i.a.createElement(m,{field:"Illustration",value:v.author.illustrator}),i.a.createElement(m,{field:"Special Thanks",value:v.thanks})))),i.a.createElement("section",{className:"track-info__container"},i.a.createElement("ul",{className:"track-info__list"}))))}function _(e){var a=c.a.createFullscreenMask();Object(l.render)(i.a.createElement(d,{initialIdx:e,container:a}),a),document.getElementsByTagName("body")[0].appendChild(a)}},66:function(e,a){e.exports=[{album_code:"HATO001",track_id:"1",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"},{album_code:"HATO002",track_id:"2",cover:"https://via.placeholder.com/290x290",id_youtube:"",id_bilibili:"av2739129/?p=2",id_niconico:""},{album_code:"HATO003",track_id:"1",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"},{album_code:"HATO003",track_id:"2",cover:"https://via.placeholder.com/290x290",id_youtube:"dpw9EHDh2bM",id_bilibili:"av35219233/?p=1",id_niconico:""},{album_code:"HATO004",track_id:"1",cover:"https://via.placeholder.com/290x290",id_youtube:"",id_bilibili:"av35219233/?p=1",id_niconico:"sm30379034"}]},67:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(41),r=t(66),o=t.n(r),c=function(){return function(e,a,t,n){this.albumName=a,this.cover=t,this.videoId=n,this.title=e.title,this.author=e.author}}(),s=o.a.map(function(e){var a=l.a.filter(function(a){return a.code.toLowerCase()===e.album_code.toLowerCase()})[0],t=parseInt(e.track_id,10)-1,n=a.tracks[t];return new c(n,a.name,e.cover,{bilibili:e.id_bilibili,youtube:e.id_youtube,niconico:e.id_niconico})}),u=t(11),m=t(39),d=t(45),_=t(6),h=t(42),p=t(40),v=function(){return(v=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var i in a=arguments[t])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e}).apply(this,arguments)},b=Object(n.createContext)(null);var f=Object(n.forwardRef)(function(e,a){var t=e.width,l=e.height,r=Object(n.useContext)(b),o=r.videoId,c=r.site,s=Object(n.useState)(!0),u=s[0],m=s[1],d={width:t,height:l,frameBorder:0,allowFullScreen:!0,type:"text/html"};switch(c){case"youtube":d.src="https://www.youtube.com/embed/"+o.youtube;break;case"bilibili":var h=o.bilibili.slice(2).split("/?p="),p=h[0],f=h[1],k=void 0===f?"1":f;d.src="https://player.bilibili.com/player.html?aid="+p+"&page="+k}return i.a.createElement(i.a.Fragment,null,i.a.createElement("iframe",v({},d,{ref:a,onLoad:m.bind(null,!1),className:"v-modal__embed "+(u?"hide":"")})),u?i.a.createElement("div",{style:{height:l,width:t}},i.a.createElement(_.a,null)):null)});function k(){var e=Object(n.useContext)(b),a=Object(n.useRef)(null);return i.a.createElement("main",{className:"video-modal__window"},i.a.createElement("div",{className:"video-modal__column--video"},i.a.createElement("div",{className:"video-modal__title-container"},i.a.createElement("h2",{className:"video-modal__title modal__title"},e.title)),i.a.createElement(f,{height:300,width:530,key:e.title,ref:a})),i.a.createElement("article",{className:"video-modal__column--description"},i.a.createElement("section",{className:"video-modal-description__section with-v-bar"},i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{className:"clickable",onClick:function(e,a){var t=l.a.findIndex(function(a){return a.name===e});t<0?alert("The album can not be found"):null!==a.current&&(a.current.src=a.current.src,Object(d.a)(t))}.bind(null,e.albumName,a)},"『",e.albumName,"』"),"ss")),i.a.createElement("section",{className:"video-modal-description__section with-v-bar"},i.a.createElement("p",{className:"section__text"},"Original: ",e.author.original),i.a.createElement("p",{className:"section__text"},"Arrange: ",e.author.arrange),i.a.createElement("p",{className:"section__text"},"Lyric: ",e.author.lyrics),i.a.createElement("p",{className:"section__text"},"Illust: ",e.author.illustrator),i.a.createElement("p",{className:"section__text"},"Vocal: ",e.author.vocal),i.a.createElement("p",{className:"section__text"},"Pv: ",e.author.pv)),i.a.createElement("section",{className:"video-modal-description__section description__section--link with-v-bar"},i.a.createElement("p",{className:"section__text section__text--gap"},"Link"),i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{target:"_blank",href:"https://www.bilibili.com/video/"+e.videoId.bilibili},"Bilibili")),i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{target:"_blank",href:"https://www.nicovideo.jp/watch/"+e.videoId.niconico},"Niconico")),i.a.createElement("p",{className:"section__text"},i.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/watch?v="+e.videoId.youtube},"Youtube")))))}function E(e){var a=e.contents,t=e.initialIdx,l=e.container,r=e.site,o=Object(n.useState)(t),c=o[0],s=o[1],u=i.a.useRef(null);return Object(m.a)(u,p.a.closeModal.bind(p.a,l),l),i.a.createElement(h.a,{prevLabel:c>0?a[c-1].title:"",nextLabel:c<a.length-1?a[c+1].title:"",handleNext:function(){return s(c+1)},handlePrev:function(){return s(c-1)},ref:u,className:"video-modal"},i.a.createElement(b.Provider,{value:v({},a[c],{site:r})},i.a.createElement(k,null)))}t(67);var g=function(e){var a=e.info,t=e.idx;return i.a.createElement("section",{className:"list__video"},i.a.createElement("div",{className:"video__cover clickable",onClick:function(e,a,t){var n=p.a.createFullscreenMask();Object(u.render)(i.a.createElement(E,{initialIdx:t,contents:e,site:a,container:n}),n),document.getElementsByTagName("body")[0].appendChild(n)}.bind(null,s,"bilibili",t)},i.a.createElement("img",{src:a.cover}),i.a.createElement("div",{className:"video__button--outer"},i.a.createElement("i",{className:"video__button--inner"}))),i.a.createElement("article",{className:"video__info"},i.a.createElement("h1",{className:"info__title"},a.title),i.a.createElement("p",{className:"indent info__album"},"『",a.albumName,"』"),i.a.createElement("p",{className:"indent info__others"},"Original: ",a.author.original),i.a.createElement("p",{className:"indent info__others"},"Arrange: ",a.author.arrange),i.a.createElement("p",{className:"indent info__others"},"Lyric: ",a.author.lyrics),i.a.createElement("p",{className:"indent info__others"},"Illust: ",a.author.illustrator),i.a.createElement("p",{className:"indent info__others"},"Vocal: ",a.author.vocal),i.a.createElement("div",{className:"indent info__urls"},i.a.createElement("i",{className:"urls__icon urls__icon--bilibili clickable"}),i.a.createElement("i",{className:"urls__icon urls__icon--niconico clickable"}),i.a.createElement("i",{className:"urls__icon urls__icon--youtube clickable"}))))};a.default=function(){return i.a.createElement("div",{className:"video__container"},s.map(function(e,a){return i.a.createElement(g,{info:e,idx:a,key:a})}))}}}]);