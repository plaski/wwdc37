!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){(function(n){var r,o;/*! smooth-scroll v14.2.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){for(var e={},t=0;t<arguments.length;t++)!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(arguments[t]);return e},r=function(t){return parseInt(e.getComputedStyle(t).height,10)},o=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},i=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,i="",s=n.charCodeAt(0);++o<r;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&t<=31||127==t||0===o&&t>=48&&t<=57||1===o&&t>=48&&t<=57&&45===s?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(o):"\\"+n.charAt(o)}var c;try{c=decodeURIComponent("#"+i)}catch(e){c="#"+i}return c},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e){return e?r(e)+e.offsetTop:0},a=function(t,n,r,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(r,l){var u,d,f,m,p,h,v={cancelScroll:function(e){cancelAnimationFrame(h),h=null,e||a("scrollCancel",u)},animateScroll:function(r,o,i){var l=n(u||t,i||{}),d="[object Number]"===Object.prototype.toString.call(r),p=d||!r.tagName?null:r;if(d||p){var g=e.pageYOffset;l.header&&!f&&(f=document.querySelector(l.header)),m||(m=c(f));var y,b,L,S=d?r:function(t,n,r,o){var i=0;if(t.offsetParent)do{i+=t.offsetTop,t=t.offsetParent}while(t);return i=Math.max(i-n-r,0),o&&(i=Math.min(i,s()-e.innerHeight)),i}(p,m,parseInt("function"==typeof l.offset?l.offset(r,o):l.offset,10),l.clip),w=S-g,E=s(),O=0,_=function(t,n){var i=e.pageYOffset;if(t==n||i==n||(g<n&&e.innerHeight+i)>=E)return v.cancelScroll(!0),function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))}(r,n,d),a("scrollStop",l,r,o),y=null,h=null,!0},x=function(t){y||(y=t),b=(O+=t-y)/parseInt(l.speed,10),L=g+w*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,b=b>1?1:b),e.scrollTo(0,Math.floor(L)),_(L,S)||(h=e.requestAnimationFrame(x),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(r,d,l),a("scrollStart",l,r,o),v.cancelScroll(!0),e.requestAnimationFrame(x)}}},g=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(d=t.target.closest(r))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var n=i(o(d.hash)),s=u.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(s=s||"#top"!==n?s:document.documentElement)&&(t.preventDefault(),v.animateScroll(s,d))}},y=function(e){if(history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)&&history.state.anchor){var t=document.querySelector(i(o(history.state.anchor)));t&&v.animateScroll(t,null,{updateURL:!1})}},b=function(e){p||(p=setTimeout(function(){p=null,m=c(f)},66))};return v.destroy=function(){u&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",b,!1),e.removeEventListener("popstate",y,!1),v.cancelScroll(),u=null,d=null,f=null,m=null,p=null,h=null)},v.init=function(r){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";v.destroy(),u=n(t,r||{}),f=u.header?document.querySelector(u.header):null,m=c(f),document.addEventListener("click",g,!1),f&&e.addEventListener("resize",b,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",y,!1)},v.init(l),v}}(o)}.apply(t,[]))||(e.exports=r)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports="img/skater.png"},function(e,t){e.exports="img/laptop.png"},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,l=0,u=[],d=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],t))}else{var c=[];for(s=0;s<r.parts.length;s++)c.push(y(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}function p(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),p(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=l++;n=a||(a=v(t)),r=S.bind(null,n,s,!1),o=S.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(c=i[s.id]).refs--,r.push(c)}e&&f(m(e,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var b,L=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function S(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=L(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},,function(e,t,n){},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";n.r(t);n(8),n(3),n(2);var r=n(0),o=n.n(r);!function(){const e=function(){const e=document.querySelector("header button"),t=document.querySelector("nav");e.classList.remove("header__menu-button--close"),t.classList.remove("nav--open")};window.addEventListener("scroll",function(){const e=window.pageYOffset;let t=document.querySelectorAll("section");const n=document.querySelector("footer");(t=[...t,n]).forEach(function(t){const n=t.getBoundingClientRect();if(e+50>=n.top+e&&e<=n.bottom+e){let e=document.querySelector(".nav__list").querySelectorAll("a");(e=Array.from(e)).forEach(function(e){e.getAttribute("href")=="#"+t.id?e.classList.add("nav__link--active"):e.classList.remove("nav__link--active")})}})}),new o.a('a[href*="#"]',{speed:1e3}),document.addEventListener("scrollStart",e,!1),window.addEventListener("scroll",function(){const e=window.innerWidth,t=document.querySelector(".hero").offsetHeight;if(e>=900){const e=window.pageYOffset,n=document.querySelector(".nav");e>=t-50?n.classList.add("nav--scroll"):n.classList.remove("nav--scroll")}}),function(){const e=[...document.querySelectorAll(".clients__item")];e.forEach(function(t){t.addEventListener("click",function(){if(t.classList.contains("clients__item--active"))return;const n=t.dataset.author,r=t.dataset.quote,o=t.querySelector("img").getAttribute("src"),i=document.querySelector(".clients__image-wrap"),s=document.querySelector(".clients__image"),c=document.querySelector(".clients__text-wrap");e.forEach(function(e){e.classList.remove("clients__item--active")}),t.classList.add("clients__item--active");const a=document.createElement("img");a.classList.add("clients__image"),a.src=o,a.alt="client",i.insertBefore(a,i.firstChild),s.classList.add("transition-img"),c.classList.add("transition-text"),c.addEventListener("transitionend",function(){c.children[0].innerText=r,c.children[1].innerText=n,c.classList.remove("transition-text")}),s.addEventListener("transitionend",function(){document.querySelector(".clients__image-wrap").querySelectorAll("img")[1].remove()})})})}(),function(){const e=document.querySelector(".carousel__button--prev"),t=document.querySelector(".carousel__button--next");e.addEventListener("click",function(){const e=document.querySelectorAll(".item");e[0].classList.add("item--center"),e[1].classList.add("item--right"),e[2].classList.add("item--left"),e[0].classList.remove("item--left"),e[1].classList.remove("item--center"),e[2].classList.remove("item--right"),e[0].addEventListener("transitionend",function t(){e[0].parentElement.insertBefore(e[2],e[0]),e[0].removeEventListener("transitionend",t)})}),t.addEventListener("click",function(){console.log("change next");const e=document.querySelectorAll(".item");e[0].classList.add("item--right"),e[1].classList.add("item--left"),e[2].classList.add("item--center"),e[0].classList.remove("item--left"),e[1].classList.remove("item--center"),e[2].classList.remove("item--right"),e[2].addEventListener("transitionend",function t(){e[2].parentElement.insertBefore(e[0],null),e[2].removeEventListener("transitionend",t)})})}(),function(){const e=document.querySelector("header button"),t=document.querySelector("nav");e.addEventListener("click",function(n){n.preventDefault(),e.classList.toggle("header__menu-button--close"),t.classList.toggle("nav--open")})}()}()}]);