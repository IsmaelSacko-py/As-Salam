import{g as re}from"./theme-9c065fc6.js";function M(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var F={exports:{}};(function(s,l){(function(c){s.exports=c()})(function(){return function(){function c(f,v,r){function d(t,a){if(!v[t]){if(!f[t]){var u=typeof M=="function"&&M;if(!a&&u)return u(t,!0);if(e)return e(t,!0);var g=new Error("Cannot find module '"+t+"'");throw g.code="MODULE_NOT_FOUND",g}var y=v[t]={exports:{}};f[t][0].call(y.exports,function(o){var x=f[t][1][o];return d(x||o)},y,y.exports,c,f,v,r)}return v[t].exports}for(var e=typeof M=="function"&&M,i=0;i<r.length;i++)d(r[i]);return d}return c}()({1:[function(c,f,v){/*! rater-js. [c] 2018 Fredrik Olsson. MIT License */c("./style.css"),f.exports=function(r){var d=!0;if(typeof r.element>"u"||r.element===null)throw new Error("element required");if(typeof r.showToolTip<"u"&&(d=!!r.showToolTip),typeof r.step<"u"&&(r.step<=0||r.step>1))throw new Error("step must be a number between 0 and 1");var e=r.element,i=r.reverse,t=r.max||5,a=r.starSize||16,u=r.step||1,g=r.onHover,y=r.onLeave,o=null,x;e.classList.add("star-rating");var S=document.createElement("div");S.classList.add("star-value"),i&&S.classList.add("rtl"),S.style.backgroundSize=a+"px",e.appendChild(S),e.style.width=a*t+"px",e.style.height=a+"px",e.style.backgroundSize=a+"px";var Z=r.rateCallback,h=!!r.readOnly,L,A=!1,q=r.isBusyText,m,E;if(typeof r.disableText<"u"?L=r.disableText:L="{rating}/{maxRating}",typeof r.ratingText<"u"?E=r.ratingText:E="{rating}/{maxRating}",r.rating)N(r.rating);else{var G=e.dataset.rating;G&&N(+G)}o||(e.querySelector(".star-value").style.width="0px"),h&&X();function Y(n){I(n,!1)}function I(n,Q){if(!(h===!0||A===!0)){var b=null,w,D=e.offsetWidth,k=e.getBoundingClientRect();if(i){Q?b=n.changedTouches[0].pageX-k.left:b=n.pageX-window.scrollX-k.left;var $=D-b,ee=D/100;w=$/ee}else Q?b=n.changedTouches[0].pageX-k.left:b=n.offsetX,w=b/D*100;if(w<101){if(u===1)m=Math.ceil(w/100*t);else for(var te=w/100*t,R=0;;R+=u)if(R>=te){m=R;break}if(m>t&&(m=t),e.querySelector(".star-value").style.width=m/t*100+"%",d){var j=E.replace("{rating}",m);j=j.replace("{maxRating}",t),e.setAttribute("title",j)}typeof g=="function"&&g(m,o)}}}function C(n){o?(e.querySelector(".star-value").style.width=o/t*100+"%",e.setAttribute("data-rating",o)):(e.querySelector(".star-value").style.width="0%",e.removeAttribute("data-rating")),typeof y=="function"&&y(m,o)}function z(n){h!==!0&&A!==!0&&typeof Z<"u"&&(A=!0,x=m,typeof q>"u"?e.removeAttribute("title"):e.setAttribute("title",q),e.classList.add("is-busy"),Z.call(this,x,function(){h===!1&&e.removeAttribute("title"),A=!1,e.classList.remove("is-busy")}))}function X(){if(h=!0,e.classList.add("disabled"),d&&L){var n=L.replace("{rating}",o||0);n=n.replace("{maxRating}",t),e.setAttribute("title",n)}else e.removeAttribute("title")}function V(){h=!1,e.removeAttribute("title"),e.classList.remove("disabled")}function N(n){if(typeof n>"u")throw new Error("Value not set.");if(n===null)throw new Error("Value cannot be null.");if(typeof n!="number")throw new Error("Value must be a number.");if(n<0||n>t)throw new Error("Value too high. Please set a rating of "+t+" or below.");o=n,e.querySelector(".star-value").style.width=n/t*100+"%",e.setAttribute("data-rating",n)}function U(){return o}function K(){o=null,e.querySelector(".star-value").style.width="0px",e.removeAttribute("title")}function _(){e.removeEventListener("mousemove",Y),e.removeEventListener("mouseleave",C),e.removeEventListener("click",z),e.removeEventListener("touchmove",H,!1),e.removeEventListener("touchstart",W,!1),e.removeEventListener("touchend",J,!1),e.removeEventListener("touchcancel",B,!1)}e.addEventListener("mousemove",Y),e.addEventListener("mouseleave",C);var T={setRating:N,getRating:U,disable:X,enable:V,clear:K,dispose:_,get element(){return e}};function H(n){n.preventDefault(),I(n,!0)}function W(n){n.preventDefault(),I(n,!0)}function J(n){n.preventDefault(),I(n,!0),z.call(T)}function B(n){n.preventDefault(),C()}return e.addEventListener("click",z.bind(T)),e.addEventListener("touchmove",H,!1),e.addEventListener("touchstart",W,!1),e.addEventListener("touchend",J,!1),e.addEventListener("touchcancel",B,!1),T}},{"./style.css":2}],2:[function(c,f,v){var r=`.star-rating {
  width: 0;
  position: relative;
  display: inline-block;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDguOSIgaGVpZ2h0PSIxMDMuNiIgdmlld0JveD0iMCAwIDEwOC45IDEwMy42Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2UzZTZlNjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN0YXJfMDwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTA4LjkgMzkuNiA3MS4zIDM0LjEgNTQuNCAwIDM3LjYgMzQuMSAwIDM5LjYgMjcuMiA2Ni4xIDIwLjggMTAzLjYgNTQuNCA4NS45IDg4LjEgMTAzLjYgODEuNyA2Ni4xIDEwOC45IDM5LjYiLz48L2c+PC9nPjwvc3ZnPg0K);
  background-position: 0 0;
  background-repeat: repeat-x;
  cursor: pointer;
}
.star-rating .star-value {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url('data:image/svg+xml;base64,PHN2Zw0KCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwOC45IiBoZWlnaHQ9IjEwMy42IiB2aWV3Qm94PSIwIDAgMTA4LjkgMTAzLjYiPg0KCTxkZWZzPg0KCQk8c3R5bGU+LmNscy0xe2ZpbGw6I2YxYzk0Nzt9PC9zdHlsZT4NCgk8L2RlZnM+DQoJPHRpdGxlPnN0YXIxPC90aXRsZT4NCgk8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4NCgkJPGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj4NCgkJCTxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1NC40IDAgNzEuMyAzNC4xIDEwOC45IDM5LjYgODEuNyA2Ni4xIDg4LjEgMTAzLjYgNTQuNCA4NS45IDIwLjggMTAzLjYgMjcuMiA2Ni4xIDAgMzkuNiAzNy42IDM0LjEgNTQuNCAwIi8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4NCg==');
  background-repeat: repeat-x;
}
.star-rating.disabled {
  cursor: default;
}
.star-rating.is-busy {
  cursor: wait;
}
.star-rating .star-value.rtl {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
  right: 0;
  left: auto;
}
`;c("browserify-css").createStyle(r,{href:"lib\\style.css"},{insertAt:"bottom"}),f.exports=r},{"browserify-css":3}],3:[function(c,f,v){var r=[],d=function(e,i){var t=document.head||document.getElementsByTagName("head")[0],a=r[r.length-1];if(i=i||{},i.insertAt=i.insertAt||"bottom",i.insertAt==="top")a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),r.push(e);else if(i.insertAt==="bottom")t.appendChild(e);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};f.exports={createLink:function(e,i){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("link");a.href=e,a.rel="stylesheet";for(var u in i)if(i.hasOwnProperty(u)){var g=i[u];a.setAttribute("data-"+u,g)}t.appendChild(a)},createStyle:function(e,i,t){t=t||{};var a=document.createElement("style");a.type="text/css";for(var u in i)if(i.hasOwnProperty(u)){var g=i[u];a.setAttribute("data-"+u,g)}a.sheet?(a.innerHTML=e,a.sheet.cssText=e,d(a,{insertAt:t.insertAt})):a.styleSheet?(d(a,{insertAt:t.insertAt}),a.styleSheet.cssText=e):(a.appendChild(document.createTextNode(e)),d(a,{insertAt:t.insertAt}))}}},{}]},{},[1])(1)})})(F);var ne=F.exports;const p=re(ne);document.querySelector("#basic-rater")&&p({starSize:22,rating:3,element:document.querySelector("#basic-rater"),rateCallback:function(s,l){this.setRating(s),l()}}),document.querySelector("#rater-step")&&p({starSize:22,rating:1.5,element:document.querySelector("#rater-step"),rateCallback:function(s,l){this.setRating(s),l()}});var P,O,ae={rate:function(s){return{then:function(l){setTimeout(function(){l(5*Math.random())},1e3)}}}};document.querySelector("#rater-message")&&(P=p({isBusyText:"Rating in progress. Please wait...",starSize:22,element:document.querySelector("#rater-message"),rateCallback:function(s,l){P.setRating(s),ae.rate().then(function(c){P.setRating(c),l()})}})),document.querySelector("#rater-unlimitedstar")&&p({starSize:22,max:5,readOnly:!0,rating:3.5,element:document.querySelector("#rater-unlimitedstar")}),document.querySelector("#rater-onhover")&&p({starSize:22,rating:1,element:document.querySelector("#rater-onhover"),rateCallback:function(s,l){this.setRating(s),l()},onHover:function(s,l){document.querySelector(".ratingnum").textContent=s},onLeave:function(s,l){document.querySelector(".ratingnum").textContent=l}}),document.querySelector("#raterreset")&&(O=p({starSize:22,rating:2,element:document.querySelector("#raterreset"),rateCallback:function(s,l){this.setRating(s),l()}})),document.querySelector("#raterreset-button")&&document.querySelector("#raterreset-button").addEventListener("click",function(){O.clear()},!1);
