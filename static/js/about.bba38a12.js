(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{136:function(t,e,a){"use strict";a.r(e);var i=a(0),o=a.n(i),c=a(33),l=a(36),r=a(83),n=a.n(r),s=[];n.a.filter(function(t){return"others"===t.role}).forEach(function(t){s.push({name:t.name,avatar:t.avatar,social:{bilibili:t.social_bilibili,twitter:t.social_twitter,weibo:t.social_weibo},description:t.description.split(";")})});var m={name:"Others",path:"/others",role:"",introduction:s},w=n.a.filter(function(t){return"others"!==t.role}).map(function(t){return{name:t.name,role:t.role,path:"/"+encodeURI(t.name).toLowerCase(),introduction:[{name:t.name,avatar:t.avatar,social:{bilibili:t.social_bilibili,twitter:t.social_twitter,weibo:t.social_weibo},description:t.description.split(";")}]}});w[0].name="心界巡",w[0].introduction[0].name=w[0].name;var b=w.concat([m]);a(84);function _(t){var e=t.name,a=t.role,i=t.to;return o.a.createElement("li",{className:"nav__item"},o.a.createElement("h4",{className:"nav__role"},a),o.a.createElement(c.a,{className:"nav__link",activeClassName:"active",exact:!0,to:"/about"+i},e))}a.d(e,"default",function(){return h});var p=function(t){var e=t.intro;return o.a.createElement("li",{className:"about__content-container"},o.a.createElement("article",{className:"about__content about__content--article"},o.a.createElement("h2",{className:"article__heading"},e.name),o.a.createElement("section",{className:"article__body"},e.description.map(function(t,e){return o.a.createElement("p",{className:"article__paragraph",key:e},t)}))),o.a.createElement("div",{className:"about__content about__content--avatar"},o.a.createElement("img",{src:e.avatar,className:"about__avatar"}),o.a.createElement("div",{className:"about__link-container"},o.a.createElement("a",{className:"about__link clickable",href:e.social.twitter},o.a.createElement("i",{className:"about__icon about__icon--twitter"})),o.a.createElement("a",{className:"about__link clickable",href:e.social.bilibili},o.a.createElement("i",{className:"about__icon about__icon--bilibili"})),o.a.createElement("a",{className:"about__link clickable",href:e.social.weibo},o.a.createElement("i",{className:"about__icon about__icon--weibo"})))))};function h(t){var e=t.match.params.staff,a=function(t){return""===t?b[0]:b.find(function(e){return e.name.toLowerCase()===t})}(void 0===e?"":e);return void 0===a?o.a.createElement(l.a,{to:"/404"}):o.a.createElement("main",{className:"about__container",key:window.location.pathname},o.a.createElement("aside",{className:"about__aside"},o.a.createElement("nav",{className:"about__nav"},o.a.createElement("img",{src:"https://via.placeholder.com/205x150",className:"about__logo--large"}),o.a.createElement("ul",{className:"nav__list"},b.map(function(t){return o.a.createElement(_,{name:t.name,role:t.role,to:t.path,key:t.path})})))),o.a.createElement("ul",{className:"about__introduction-list"},a.introduction.map(function(t,e){return o.a.createElement(p,{intro:t,key:e})})))}},83:function(t,e){t.exports=[{name:"",role:"",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"http://www.bilibili.com",social_weibo:"http://www.weibo.com",description:"社团主催之一,歌姬,也负责社团词作传工作。;常用ID“桃桃子”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"CoreTania",role:"Arrangement",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"http://www.bilibili.com",social_weibo:"http://www.weibo.com",description:"催之一,歌姬,也社团词作与宣传工作。;常用ID“桃桃子”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"伊吹三枚",role:"Vocal/Lyrics",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"http://www.bilibili.com",social_weibo:"http://www.weibo.com",description:"社催之一,歌姬,责社团词作与宣传工作。;常用ID“桃桃子”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"CHILDWOLF",role:"Vocal/Lyrics",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"http://www.bilibili.com",social_weibo:"http://www.weibo.com",description:"团主催之一,歌也负责社团词作与宣传工作。;常用ID“桃桃子”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"xxxA",role:"others",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"http://www.bilibili.com",social_weibo:"http://www.weibo.com",description:"团主催之一,歌也负责社团词作与宣传工作。;常用ID“XXXA”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"xxxB",role:"others",avatar:"https://via.placeholder.com/200x200",social_twitter:"",social_bilibili:"http://www.bilibili.com",social_weibo:"http://www.weibo.com",description:"团主催之一,歌也负责社团词作与宣传工作。;常用ID“CCCB”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"xxxC",role:"others",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"",social_weibo:"http://www.weibo.com",description:"团主催之一,歌也负责社团词作与宣传工作。;常用ID“XXXC”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"},{name:"xxxD",role:"others",avatar:"https://via.placeholder.com/200x200",social_twitter:"http://www.twitter.com",social_bilibili:"http://www.bilibili.com",social_weibo:"",description:"团主催之一,歌也负责社团词作与宣传工作。;常用ID“XXXD”，常年出没在江浙沪及西南地区各大展子的Live中，擅长流行与电子风格的曲目演唱;还做一些社团的杂活"}]},84:function(t,e,a){}}]);