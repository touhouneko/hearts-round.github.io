(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{365:function(e,t,i){"use strict";function a(e,t,i){return{get:function(){var e=i.value.bind(this);return Object.defineProperty(this,t,{value:e}),e}}}i.d(t,"a",function(){return a})},366:function(e,t,i){},367:function(e,t,i){"use strict";var a=i(365),n=function(e,t,i,a){var n,r=arguments.length,l=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,i,l):n(t,i))||l);return r>3&&l&&Object.defineProperty(t,i,l),l},r=function(){function e(e){var t,i,a,n,r,l,o;t=e.vocal,this.vocal=void 0===t?"":t,i=e.original,this.original=void 0===i?"":i,a=e.composer,this.composer=void 0===a?"":a,n=e.arrange,this.arrange=void 0===n?"":n,r=e.lyrics,this.lyrics=void 0===r?"":r,l=e.pv,this.pv=void 0===l?"":l,o=e.illustrator,this.illustrator=void 0===o?"":o}return e.prototype.merge=function(e,t){return""===this[e]&&""===this[t]?"":""===this[e]?this[t]:""===this[t]?this[e]:this[e]+" | "+this[t]},n([a.a],e.prototype,"merge",null),e}();t.a=r},368:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var a=function(){return function(e,t,i){this.music=e,this.image=t,this.videoId=i}}()},369:function(e,t,i){"use strict";var a=i(101),n=i(365),r=(i(366),function(e,t,i,a){var n,r=arguments.length,l=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(r<3?n(l):r>3?n(t,i,l):n(t,i))||l);return r>3&&l&&Object.defineProperty(t,i,l),l}),l=new(function(){function e(){this.historyCount=0,this.openCount=0,this.baseZIndex=999}return e.prototype.createFullscreenMask=function(){this.historyCount++,this.openCount++;var e=document.createElement("div");return e.style.zIndex=(this.baseZIndex+this.historyCount).toString(),e.classList.add("lt-modal__mask"),document.getElementsByTagName("body")[0].classList.add("modal-open"),e},e.prototype.closeModal=function(e){Object(a.unmountComponentAtNode)(e),this.openCount--,0===this.openCount&&document.getElementsByTagName("body")[0].classList.remove("modal-open"),e.parentNode.removeChild(e)},r([n.a],e.prototype,"createFullscreenMask",null),r([n.a],e.prototype,"closeModal",null),e}());t.a=l},370:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var a=i(1),n=i.n(a);function r(e,t,i){function a(i){null!==e.current&&(e.current.contains(i.target)||t())}n.a.useEffect(function(){return void 0===i&&(i=document),i.addEventListener("click",a),function(){i.removeEventListener("click",a)}},[])}},371:function(e,t,i){"use strict";var a=i(1),n=i.n(a),r=(i(366),n.a.forwardRef(function(e,t){var i=e.className,a=void 0===i?"":i,r=e.children,l=e.nextLabel,o=e.prevLabel,c=e.handlePrev,s=e.handleNext;return n.a.createElement("div",{ref:t,className:"lt-modal__window lt-modal__window--center lt-modal__window--nav "+a},r,n.a.createElement("div",{className:"nav__wrapper"},n.a.createElement("a",{onClick:c,className:"nav__button nav__button--previous clickable "+(""===o?"hide":"")},n.a.createElement("span",null,"← ",o)),n.a.createElement("a",{onClick:s,className:"nav__button nav__button--next clickable "+(""===l?"hide":"")},n.a.createElement("span",null,l," →"))))}));t.a=r},374:function(e,t,i){"use strict";var a=i(375),n=i.n(a),r=i(368),l=function(){return function(e,t,i,a,n,l,o,c){this.cover=e,this.title=t,this.principle=i,this.author=a,this.description=o,this.hasLyrics=c,this.links=new r.a,this.links.videoId=n,this.links.music=l}}(),o=i(367),c=function(){return(c=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=n.a.map(function(e,t){return new l(e.cover,e.title,{name:e.principle,link:e.principle_url},new o.a(c({},e)),{bilibili:e.video_bilibili,niconico:e.video_niconico,youtube:e.video_youtube},e.ext_link,{top:e.info_1.split(";"),bottom:e.info_2},"true"===e.has_lyrics)});t.a=s},375:function(e,t){e.exports=[{principle:"work001",principle_url:"https://weibo.com/u/6500013650",title:"title1",cover:"https://via.placeholder.com/270x150",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"收录于专辑bbbbb",video_bilibili:"av35219233/?p=1",video_niconico:"",video_youtube:"sm30379034",original:"CoreTania",compose:"magic girl",arrange:"CoreTania",lyric:"CoreTania",illust:"CoreTania",vocal:"CoreTania",pv:"CoreTania",has_lyrics:"true",ext_link:""},{principle:"work002",principle_url:"",title:"title2",cover:"https://via.placeholder.com/190x190",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"",video_bilibili:"av2739129/?p=2",video_niconico:"dpw9EHDh2bM",video_youtube:"",original:"",compose:"magic girl",arrange:"CoreTania",lyric:"CoreTania",illust:"",vocal:"CoreTania",pv:"",has_lyrics:"true",ext_link:"https://weibo.com/u/6500013650"},{principle:"work003",principle_url:"https://weibo.com/u/6500013650",title:"title1",cover:"",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"收录于专辑bbbbb",video_bilibili:"av35219233/?p=1",video_niconico:"",video_youtube:"sm30379034",original:"CoreTania",compose:"magic girl",arrange:"CoreTania",lyric:"",illust:"CoreTania",vocal:"CoreTania",pv:"CoreTania",has_lyrics:"false",ext_link:""},{principle:"work004",principle_url:"",title:"title3",cover:"https://via.placeholder.com/190x190",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"收录于专辑bbbbb",video_bilibili:"av35219233/?p=1",video_niconico:"dpw9EHDh2bM",video_youtube:"",original:"CoreTania",compose:"",arrange:"CoreTania",lyric:"CoreTania",illust:"",vocal:"",pv:"",has_lyrics:"true",ext_link:"https://weibo.com/u/6500013650"},{principle:"work005",principle_url:"https://weibo.com/u/6500013650",title:"title4",cover:"https://via.placeholder.com/270x150",info_1:"xxx乐曲xxxxx;Arrangement提供",info_2:"",video_bilibili:"av35219233/?p=1",video_niconico:"dpw9EHDh2bM",video_youtube:"sm30379034",original:"CoreTania",compose:"magic girl",arrange:"",lyric:"",illust:"CoreTania",vocal:"",pv:"CoreTania",has_lyrics:"false",ext_link:"https://weibo.com/u/6500013650"}]},376:function(e,t,i){"use strict";i.d(t,"a",function(){return o}),i.d(t,"b",function(){return d});var a=i(1),n=i.n(a),r=i(34),l=function(){return(l=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=Object(a.createContext)(null),c=Object(a.forwardRef)(function(e,t){var i=e.width,c=e.height,s=Object(a.useContext)(o),u=s.videoId,d=s.site,m=Object(a.useState)(!0),p=m[0],v=m[1],_={width:i,height:c,frameBorder:0,allowFullScreen:!0,type:"text/html"};switch(d){case"youtube":_.src="https://www.youtube.com/embed/"+u.youtube;break;case"bilibili":var h=u.bilibili.slice(2).split("/?p="),b=h[0],f=h[1],y=void 0===f?"1":f;_.src="https://player.bilibili.com/player.html?aid="+b+"&page="+y}return n.a.createElement(n.a.Fragment,null,n.a.createElement("iframe",l({},_,{ref:t,onLoad:v.bind(null,!1),className:"v-modal__embed "+(p?"hide":"")})),p?n.a.createElement("div",{style:{height:c,width:i}},n.a.createElement(r.a,null)):null)}),s=function(e){var t=e.field,i=e.value;return void 0===i||""===i?null:n.a.createElement("p",{className:"section__text"},t,": ",i)},u=function(e){var t=e.videoId,i=e.site,a="#";if(""!==t)switch(i){case"bilibili":a="https://www.bilibili.com/video/"+t;break;case"youtube":a="https://www.youtube.com/watch?v="+t;break;case"niconico":a="https://www.nicovideo.jp/watch/"+t}return n.a.createElement("p",{className:"section__text"},n.a.createElement("a",{target:"_blank",className:""===t?"modal__link--disabled":"modal__link",href:""===t?void 0:a},i))};function d(){var e=Object(a.useContext)(o),t=Object(a.useRef)(null);return n.a.createElement("main",{className:"v-modal__window"},n.a.createElement("div",{className:"v-modal__column--video"},n.a.createElement("header",{className:"v-modal__title-container"},n.a.createElement("h2",{className:"v-modal__title modal__title"},e.title),n.a.createElement("a",{target:"_blank",href:""===e.lyricsUrl?void 0:e.lyricsUrl,className:"v-modal__header-link v-modal__header-link--lyrics\n              "+(""===e.lyricsUrl?"disabled":"")}),n.a.createElement("a",{target:"_blank",href:""===e.externalUrl?void 0:e.externalUrl,className:"v-modal__header-link v-modal__header-link--music\n              "+(""===e.externalUrl?"disabled":"")})),n.a.createElement(c,{height:300,width:530,key:e.title,ref:t})),n.a.createElement("article",{className:"v-modal__column--description"},n.a.createElement("section",{className:"v-modal-description__section with-v-bar"},n.a.createElement("p",{className:"section__text"},n.a.createElement("a",{href:e.linkUrl,target:"_blank",className:"modal__link"},e.linkLabel))),n.a.createElement("section",{className:"v-modal-description__section with-v-bar"},n.a.createElement(s,{field:"Original",value:e.author.original}),n.a.createElement(s,{field:"Compose",value:e.author.composer}),n.a.createElement(s,{field:"Arrange",value:e.author.arrange}),n.a.createElement(s,{field:"Lyric",value:e.author.lyrics}),n.a.createElement(s,{field:"Vocal",value:e.author.vocal}),n.a.createElement(s,{field:"PV",value:e.author.pv})),n.a.createElement("section",{className:"v-modal-description__section description__section--link with-v-bar"},n.a.createElement("p",{className:"section__text section__text--gap"},"Link"),n.a.createElement(u,{site:"bilibili",videoId:e.videoId.bilibili}),n.a.createElement(u,{site:"youtube",videoId:e.videoId.youtube}),n.a.createElement(u,{site:"niconico",videoId:e.videoId.niconico}))))}},391:function(e,t,i){},412:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(374),l=i(101),o=i(370),c=i(376),s=i(371),u=i(369),d=function(){return(d=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},m=r.a.filter(function(e){return""!==e.cover});function p(e){var t=e.initialIdx,i=e.container,r=Object(a.useState)(t),l=r[0],p=r[1],v=n.a.useRef(null);return Object(o.a)(v,u.a.closeModal.bind(u.a,i),i),n.a.createElement(s.a,{prevLabel:l>0?m[l-1].title:"",nextLabel:l<m.length-1?m[l+1].title:"",handleNext:function(){return p(l+1)},handlePrev:function(){return p(l-1)},ref:v,className:"video-modal"},n.a.createElement(c.a.Provider,{value:d({},m[l],{site:"bilibili",videoId:m[l].links.videoId,linkUrl:m[l].principle.link,linkLabel:m[l].principle.name,lyricsUrl:m[l].hasLyrics?"/discography/lyrics/works/"+("00"+(l+1)).slice(-3):"",externalUrl:m[l].links.music})},n.a.createElement(c.b,null)))}i(391);var v,_,h=(v=[],_=0,r.a.forEach(function(e){""===e.cover&&_--,v.push(_)}),v),b=function(e){var t=e.work,i=e.idx;return n.a.createElement("li",{className:"work__item"},n.a.createElement("article",{className:"work__article"},n.a.createElement("h3",{className:"work__header"},""===t.principle.link?n.a.createElement("span",null,t.principle.name):n.a.createElement("a",{target:"_blank",href:t.principle.link,className:"principle__link"},t.principle.name)),n.a.createElement("div",{className:"work__content"},n.a.createElement("img",{onClick:function(e){var t=u.a.createFullscreenMask();Object(l.render)(n.a.createElement(p,{initialIdx:e,container:t}),t),document.getElementsByTagName("body")[0].appendChild(t)}.bind(null,i+h[i]),className:"work__cover clickable",src:t.cover}),n.a.createElement("section",{className:"work__info"},n.a.createElement("p",{className:"info__item"},t.description.top[0]),n.a.createElement("p",{className:"info__item"},t.description.top[1]),n.a.createElement("p",{className:"info__item"},t.description.bottom)))))};t.default=function(){return n.a.createElement("main",{className:"work__container"},n.a.createElement("h1",{className:"page__title"},"Works"),n.a.createElement("ul",{className:"work__list"},r.a.map(function(e,t){return n.a.createElement(b,{work:e,idx:t,key:t})})))}}}]);