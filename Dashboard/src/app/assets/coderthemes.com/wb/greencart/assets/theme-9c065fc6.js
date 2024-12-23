var V2=Object.defineProperty;var O2=(M,d,w)=>d in M?V2(M,d,{enumerable:!0,configurable:!0,writable:!0,value:w}):M[d]=w;var V1=(M,d,w)=>(O2(M,typeof d!="symbol"?d+"":d,w),w);(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))l(b);new MutationObserver(b=>{for(const T of b)if(T.type==="childList")for(const C of T.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&l(C)}).observe(document,{childList:!0,subtree:!0});function w(b){const T={};return b.integrity&&(T.integrity=b.integrity),b.referrerPolicy&&(T.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?T.credentials="include":b.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function l(b){if(b.ep)return;b.ep=!0;const T=w(b);fetch(b.href,T)}})();class T2{constructor(){V1(this,"theme","light");V1(this,"onThemeChange",()=>{this.theme==="dark"?this.html.classList.add("dark"):this.html.classList.remove("dark"),this.lightTheme&&this.darkTheme&&(this.theme==="light"?(this.lightTheme.classList.remove("hidden"),this.darkTheme.classList.add("hidden")):(this.darkTheme.classList.remove("hidden"),this.lightTheme.classList.add("hidden"))),localStorage.setItem("__GreenCart_CONFIG__",JSON.stringify({theme:this.theme}))})}init(){this.html=document.getElementsByTagName("html")[0];const d=localStorage.getItem("__GreenCart_CONFIG__");if(d){const w=JSON.parse(d);this.theme=w.theme}this.theme==="dark"&&this.html.classList.add("dark"),this.onThemeChange(),window.addEventListener("DOMContentLoaded",()=>{this.after()})}after(){this.lightTheme=document.getElementById("light-theme"),this.darkTheme=document.getElementById("dark-theme"),this.lightTheme&&this.darkTheme&&(this.lightTheme.addEventListener("click",d=>{this.theme="dark",this.onThemeChange()}),this.darkTheme.addEventListener("click",d=>{this.theme="light",this.onThemeChange()})),this.onThemeChange()}}new T2().init();/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=(M,d,w=[])=>{const l=document.createElementNS("http://www.w3.org/2000/svg",M);return Object.keys(d).forEach(b=>{l.setAttribute(b,String(d[b]))}),w.length&&w.forEach(b=>{const T=o2(...b);l.appendChild(T)}),l};var k2=([M,d,w])=>o2(M,d,w);/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=M=>Array.from(M.attributes).reduce((d,w)=>(d[w.name]=w.value,d),{}),P2=M=>typeof M=="string"?M:!M||!M.class?"":M.class&&typeof M.class=="string"?M.class.split(" "):M.class&&Array.isArray(M.class)?M.class:"",B2=M=>M.flatMap(P2).map(w=>w.trim()).filter(Boolean).filter((w,l,b)=>b.indexOf(w)===l).join(" "),_2=M=>M.replace(/(\w)(\w*)(_|-|\s*)/g,(d,w,l)=>w.toUpperCase()+l.toLowerCase()),ce=(M,{nameAttr:d,icons:w,attrs:l})=>{var h;const b=M.getAttribute(d);if(b==null)return;const T=_2(b),C=w[T];if(!C)return console.warn(`${M.outerHTML} icon name was not found in the provided icons object.`);const m=I2(M),[A,f,H]=C,g={...f,"data-lucide":b,...l,...m},x=B2(["lucide",`lucide-${b}`,m,l]);x&&Object.assign(g,{class:x});const u=k2([A,g,H]);return(h=M.parentNode)==null?void 0:h.replaceChild(u,M)};/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=["svg",t,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=["svg",t,[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=["svg",t,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=["svg",t,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["polygon",{points:"12 15 17 21 7 21 12 15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=["svg",t,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=["svg",t,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=["svg",t,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=["svg",t,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=["svg",t,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=["svg",t,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=["svg",t,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",t,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",t,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",t,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",t,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",t,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",t,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",t,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",t,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",t,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",t,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",t,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",t,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",t,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",t,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M22 7h-5"}],["path",{d:"M7 7H1"}],["path",{d:"M22 17h-3"}],["path",{d:"M5 17H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",t,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",t,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",t,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",t,[["circle",{cx:"12",cy:"5",r:"3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h0"}],["path",{d:"M15 10h0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",t,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"14.31",x2:"20.05",y1:"8",y2:"17.94"}],["line",{x1:"9.69",x2:"21.17",y1:"8",y2:"8"}],["line",{x1:"7.38",x2:"13.12",y1:"12",y2:"2.06"}],["line",{x1:"9.69",x2:"3.95",y1:"16",y2:"6.06"}],["line",{x1:"14.31",x2:"2.83",y1:"16",y2:"16"}],["line",{x1:"16.62",x2:"10.88",y1:"12",y2:"21.94"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",t,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",t,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",t,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",t,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",t,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",t,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",t,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",t,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9h6z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=["svg",t,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",t,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=["svg",t,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",t,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",t,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",t,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",t,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",t,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",t,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",t,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",t,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",t,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",t,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",t,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",t,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",t,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",t,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",t,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",t,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",t,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",t,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",t,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",t,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",t,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",t,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",t,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",t,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",t,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",t,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",t,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",t,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",t,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",t,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",t,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",t,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",t,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",t,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",t,[["circle",{cx:"12",cy:"8",r:"6"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",t,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=["svg",t,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",t,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",t,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",t,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",t,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",t,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",t,[["path",{d:"M3 3v18h18"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",t,[["path",{d:"M3 3v18h18"}],["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",t,[["path",{d:"M3 3v18h18"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=["svg",t,[["path",{d:"M3 3v18h18"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",t,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=["svg",t,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",t,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",t,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=["svg",t,[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=["svg",t,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=["svg",t,[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=["svg",t,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=["svg",t,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=["svg",t,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=["svg",t,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=["svg",t,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=["svg",t,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=["svg",t,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=["svg",t,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=["svg",t,[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=["svg",t,[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=["svg",t,[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=["svg",t,[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=["svg",t,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=["svg",t,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=["svg",t,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=["svg",t,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=["svg",t,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=["svg",t,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=["svg",t,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=["svg",t,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=["svg",t,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=["svg",t,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=["svg",t,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=["svg",t,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=["svg",t,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=["svg",t,[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=["svg",t,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=["svg",t,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=["svg",t,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",t,[["path",{d:"M20 22h-2"}],["path",{d:"M20 15v2h-2"}],["path",{d:"M4 19.5V15"}],["path",{d:"M20 8v3"}],["path",{d:"M18 2h2v2"}],["path",{d:"M4 11V9"}],["path",{d:"M12 2h2"}],["path",{d:"M12 22h2"}],["path",{d:"M12 17h2"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"9",cy:"12",r:"1"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"14",cy:"8",r:"2"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"m19 3 1 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",t,[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=["svg",t,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}],["path",{d:"M6 8h2"}],["path",{d:"M6 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M16 12h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",t,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 7h6"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M12 6v7"}],["path",{d:"M10 13h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M15 13a3 3 0 1 0-6 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m14.5 7-5 5"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=["svg",t,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=["svg",t,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=["svg",t,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",t,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=["svg",t,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=["svg",t,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=["svg",t,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=["svg",t,[["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"}],["path",{d:"M16 8V5c0-1.1.9-2 2-2"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=["svg",t,[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=["svg",t,[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=["svg",t,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=["svg",t,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=["svg",t,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=["svg",t,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m12 12 8 5-8 5Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=["svg",t,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",t,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=["svg",t,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=["svg",t,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",t,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",t,[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"}],["path",{d:"M3 5V3"}],["path",{d:"M7 5V3"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"}],["path",{d:"M17 21v-2"}],["path",{d:"M21 21v-2"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",t,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=["svg",t,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h0.01"}],["path",{d:"M12 4h0.01"}],["path",{d:"M17 4h0.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",t,[["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",t,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.25V14"}],["path",{d:"M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",t,[["path",{d:"M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",t,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",t,[["path",{d:"M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",t,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"19",x2:"19",y1:"16",y2:"22"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",t,[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",t,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"17",x2:"22",y1:"17",y2:"22"}],["line",{x1:"17",x2:"22",y1:"22",y2:"17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"10",x2:"14",y1:"14",y2:"18"}],["line",{x1:"14",x2:"10",y1:"14",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",t,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",t,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",t,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",t,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",t,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",t,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",t,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",t,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",t,[["rect",{width:"4",height:"4",x:"2",y:"9"}],["rect",{width:"4",height:"10",x:"10",y:"9"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["circle",{cx:"8",cy:"19",r:"2"}],["path",{d:"M10 19h12v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",t,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",t,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",t,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",t,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",t,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",t,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",t,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",t,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",t,[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",t,[["path",{d:"m9 11 3 3L22 4"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",t,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",t,[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",t,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",t,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",t,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",t,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",t,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",t,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",t,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",t,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=["svg",t,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=["svg",t,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=["svg",t,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=["svg",t,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=["svg",t,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=["svg",t,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=["svg",t,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=["svg",t,[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 22V5l-6-3-6 3v17"}],["path",{d:"M12 7v5"}],["path",{d:"M10 9h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M12 12H2v4h14"}],["path",{d:"M22 12v4"}],["path",{d:"M18 12h-.5"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=["svg",t,[["path",{d:"M18 12H2v4h16"}],["path",{d:"M22 12v4"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=["svg",t,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=["svg",t,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=["svg",t,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=["svg",t,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=["svg",t,[["line",{x1:"9",x2:"15",y1:"15",y2:"9"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",t,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=["svg",t,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=["svg",t,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=["svg",t,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=["svg",t,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=["svg",t,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=["svg",t,[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=["svg",t,[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=["svg",t,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=["svg",t,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=["svg",t,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=["svg",t,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=["svg",t,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=["svg",t,[["path",{d:"M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"}],["path",{d:"M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"}],["path",{d:"M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"}],["path",{d:"M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"}],["path",{d:"m7 17-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=["svg",t,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=["svg",t,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=["svg",t,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=["svg",t,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=["svg",t,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=["svg",t,[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=["svg",t,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=["svg",t,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=["svg",t,[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1"}],["polyline",{points:"7 21 10 18 7 15"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",t,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",t,[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",t,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",t,[["path",{d:"M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",t,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",t,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",t,[["path",{d:"M16 18a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",t,[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["circle",{cx:"12",cy:"10",r:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",t,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",t,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",t,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",t,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",t,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",t,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",t,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",t,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",t,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",t,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",t,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",t,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",t,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",t,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",t,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",t,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",t,[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"9",y:"9",width:"6",height:"6"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",t,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",t,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",t,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",t,[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",t,[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",t,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=["svg",t,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=["svg",t,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=["svg",t,[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=["svg",t,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=["svg",t,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=["svg",t,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=["svg",t,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=["svg",t,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=["svg",t,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=["svg",t,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=["svg",t,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=["svg",t,[["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1-1"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",t,[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=["svg",t,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",t,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",t,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=["svg",t,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=["svg",t,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m8 17 4 4 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",t,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",t,[["circle",{cx:"12",cy:"5",r:"2"}],["path",{d:"m3 21 8.02-14.26"}],["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0"}],["path",{d:"m21 21-2.16-3.84"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=["svg",t,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",t,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",t,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=["svg",t,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",t,[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",t,[["path",{d:"m6.5 6.5 11 11"}],["path",{d:"m21 21-1-1"}],["path",{d:"m3 3 1 1"}],["path",{d:"m18 22 4-4"}],["path",{d:"m2 6 4-4"}],["path",{d:"m3 10 7-7"}],["path",{d:"m14 21 7-7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=["svg",t,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",t,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",t,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",t,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",t,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",t,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",t,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",t,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",t,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",t,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",t,[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}],["polyline",{points:"15 3 21 3 21 9"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",t,[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",t,[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",t,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",t,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",t,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",t,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",t,[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",t,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",t,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",t,[["path",{d:"M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"10",cy:"20",r:"2"}],["path",{d:"M10 7V6"}],["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}],["circle",{cx:"3",cy:"17",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",t,[["path",{d:"M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"}],["path",{d:"M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"}],["path",{d:"M2 19v-3a6 6 0 0 1 12 0v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M8 10v8h8"}],["path",{d:"m8 18 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",t,[["path",{d:"M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-6"}],["path",{d:"M8 18v-1"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-4"}],["path",{d:"M8 18v-2"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",t,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"}],["path",{d:"m7 17-4.74-2.85"}],["path",{d:"m7 17 4.74-2.85"}],["path",{d:"M7 17v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",t,[["path",{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m9 18 3-3-3-3"}],["path",{d:"m5 12-3 3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 13-2 2 2 2"}],["path",{d:"m14 17 2-2-2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",t,[["circle",{cx:"6",cy:"13",r:"3"}],["path",{d:"m9.7 14.4-.9-.3"}],["path",{d:"m3.2 11.9-.9-.3"}],["path",{d:"m4.6 16.7.3-.9"}],["path",{d:"m7.6 16.7-.4-1"}],["path",{d:"m4.8 10.3-.4-1"}],["path",{d:"m2.3 14.6 1-.4"}],["path",{d:"m8.7 11.8 1-.4"}],["path",{d:"m7.4 9.3-.3.9"}],["path",{d:"M14 2v6h6"}],["path",{d:"M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 13V7"}],["path",{d:"M9 10h6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",t,[["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M14 2v6h6"}],["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",t,[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",t,[["path",{d:"M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"10",cy:"13",r:"2"}],["path",{d:"m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",t,[["path",{d:"M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",t,[["path",{d:"M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M15 12v-2a3 3 0 1 0-6 0v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",t,[["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"}],["path",{d:"M8 18v-7.7L16 9v7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 15h10"}],["path",{d:"m5 12-3 3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",t,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"}],["path",{d:"M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",t,[["path",{d:"M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.25 16.25 15 18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"m9 18-1.5-1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",t,[["path",{d:"M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"}],["path",{d:"M8 18h1"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M8 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 13h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",t,[["path",{d:"M16 2v5h5"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M4 18v-1a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M4 18h2"}],["path",{d:"M5 12v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M11 18h2"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",t,[["path",{d:"M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"}],["path",{d:"M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"}],["path",{d:"M8 15h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m7 10-3 2H2v4h2l3 2v-8Z"}],["path",{d:"M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v6h6"}],["path",{d:"m3 12.5 5 5"}],["path",{d:"m8 12.5-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"9.5",x2:"14.5",y1:"12.5",y2:"17.5"}],["line",{x1:"14.5",x2:"9.5",y1:"12.5",y2:"17.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",t,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",t,[["path",{d:"M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"}],["path",{d:"M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"}],["path",{d:"M15 2v5h5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",t,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",t,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",t,[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",t,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",t,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",t,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",t,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",t,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",t,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",t,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",t,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",t,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",t,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",t,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",t,[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}],["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h9"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",t,[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",t,[["path",{d:"M10 2v7.31"}],["path",{d:"M14 9.3V1.99"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0"}],["path",{d:"M5.52 16h12.96"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",t,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",t,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",t,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",t,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",t,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",t,[["path",{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m8 16 1.5-1.5"}],["path",{d:"M14.5 9.5 16 8"}],["path",{d:"m8 8 1.5 1.5"}],["path",{d:"M14.5 14.5 16 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",t,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",t,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",t,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",t,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",t,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",t,[["path",{d:"M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",t,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",t,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",t,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",t,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",t,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",t,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",t,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",t,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",t,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",t,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",t,[["path",{d:"M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",t,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",t,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",t,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",t,[["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.5-1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",t,[["path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"}],["path",{d:"m8 16 3-3-3-3"}],["path",{d:"M2 16v-1a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",t,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",t,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",t,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",t,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",t,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",t,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",t,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",t,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",t,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",t,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",t,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",t,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",t,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",t,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",t,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",t,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",t,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",t,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",t,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",t,[["path",{d:"m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",t,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",t,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",t,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",t,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",t,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",t,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",t,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",t,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",t,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",t,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",t,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",t,[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",t,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",t,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",t,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.55 10.23A9 9 0 1 1 8 4.94"}],["path",{d:"M8 10a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",t,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",t,[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",t,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",t,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",t,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",t,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",t,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",t,[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z"}],["path",{d:"m17 7-5.1 5.1"}],["circle",{cx:"11.5",cy:"12.5",r:".5"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4"}],["path",{d:"m6 16 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",t,[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"}],["path",{d:"M17.64 15 22 10.64"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",t,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",t,[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",t,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",t,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",t,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",t,[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",t,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",t,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",t,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 10v4h4"}],["path",{d:"M21 10v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",t,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",t,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",t,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",t,[["path",{d:"m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"}],["path",{d:"m2 14 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",t,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",t,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",t,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",t,[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["polyline",{points:"9 22 9 12 15 12 15 22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",t,[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"}],["path",{d:"M17.5 17.5c-2.5 0-4 0-6-1"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"}],["path",{d:"M22 22c-2 0-3.5-.5-5.5-1.5"}],["path",{d:"M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",t,[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"}],["path",{d:"M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"}],["path",{d:"M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"}],["path",{d:"M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"}],["path",{d:"M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",t,[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"}],["path",{d:"M8 7h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M10 22v-6.5m4 0V22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",t,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",t,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",t,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",t,[["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"}],["path",{d:"m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3 3v-6"}],["path",{d:"m17 22.5 3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",t,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",t,[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",t,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",t,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",t,[["polyline",{points:"3 8 7 12 3 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",t,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",t,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",t,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",t,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",t,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",t,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",t,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",t,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=["svg",t,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",t,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",t,[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"}],["circle",{cx:"16.5",cy:"7.5",r:".5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",t,[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",t,[["circle",{cx:"7.5",cy:"15.5",r:"5.5"}],["path",{d:"m21 2-9.6 9.6"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2"}],["path",{d:"M6 8h.001"}],["path",{d:"M10 8h.001"}],["path",{d:"M14 8h.001"}],["path",{d:"M18 8h.001"}],["path",{d:"M8 12h.001"}],["path",{d:"M12 12h.001"}],["path",{d:"M16 12h.001"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",t,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",t,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",t,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",t,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",t,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",t,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",t,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",t,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",t,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",t,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",t,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",t,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",t,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",t,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",t,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",t,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",t,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",t,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",t,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",t,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",t,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",t,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",t,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",t,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",t,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",t,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",t,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",t,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",t,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",t,[["path",{d:"M3 3v18h18"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",t,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",t,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",t,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",t,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",t,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",t,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",t,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",t,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",t,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",t,[["line",{x1:"10",x2:"21",y1:"6",y2:"6"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18"}],["path",{d:"M4 6h1v4"}],["path",{d:"M4 10h2"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",t,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",t,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",t,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",t,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",t,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",t,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",t,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",t,[["line",{x1:"8",x2:"21",y1:"6",y2:"6"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",t,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",t,[["line",{x1:"12",x2:"12",y1:"2",y2:"6"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",t,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",t,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",t,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",t,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",t,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",t,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",t,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",t,[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",t,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",t,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",t,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",t,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",t,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",t,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",t,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",t,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",t,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",t,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",t,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",t,[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",t,[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",t,[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",t,[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",t,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",t,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",t,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",t,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",t,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",t,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",t,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",t,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",t,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",t,[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",t,[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2"}],["path",{d:"M11 3h3"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2"}],["path",{d:"M21 9v2"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1"}],["path",{d:"M14 17h-3"}],["path",{d:"m7 17-4 4v-5"}],["path",{d:"M3 12v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["line",{x1:"9",x2:"15",y1:"10",y2:"10"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",t,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",t,[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"}],["circle",{cx:"17",cy:"7",r:"5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",t,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",t,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",t,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",t,[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}],["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",t,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",t,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",t,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",t,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",t,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",t,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",t,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",t,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",t,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",t,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",t,[["path",{d:"m10 7 5 3-5 3Z"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",t,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",t,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",t,[["rect",{x:"9",y:"7",width:"6",height:"6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",t,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",t,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",t,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",t,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}],["path",{d:"M19 3v4"}],["path",{d:"M21 5h-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",t,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",t,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",t,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",t,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",t,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",t,[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",t,[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"M14 4.1 12 6"}],["path",{d:"m6 12-1.9 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",t,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=["svg",t,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",t,[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}],["path",{d:"m13 13 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",t,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=["svg",t,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",t,[["polyline",{points:"5 11 5 5 11 5"}],["polyline",{points:"19 13 19 19 13 19"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",t,[["polyline",{points:"13 5 19 5 19 11"}],["polyline",{points:"11 19 5 19 5 13"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",t,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",t,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",t,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",t,[["polyline",{points:"18 8 22 12 18 16"}],["polyline",{points:"6 8 2 12 6 16"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",t,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",t,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",t,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",t,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",t,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",t,[["polyline",{points:"8 18 12 22 16 18"}],["polyline",{points:"8 6 12 2 16 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",t,[["polyline",{points:"5 9 2 12 5 15"}],["polyline",{points:"9 5 12 2 15 5"}],["polyline",{points:"15 19 12 22 9 19"}],["polyline",{points:"19 9 22 12 19 15"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",t,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",t,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",t,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",t,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",t,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",t,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",t,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",t,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",t,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",t,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",t,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",t,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",t,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",t,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",t,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",t,[["polyline",{points:"7 8 3 12 7 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",t,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",t,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",t,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",t,[["path",{d:"M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"}],["path",{d:"m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"}],["line",{x1:"12",x2:"12",y1:"22",y2:"13"}],["path",{d:"M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",t,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",t,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",t,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",t,[["path",{d:"m7.5 4.27 9 5.15"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",t,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",t,[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"}],["path",{d:"M6 12V2h12v10"}],["path",{d:"M14 2v4"}],["path",{d:"M10 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",t,[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"}],["path",{d:"M14.5 17.5 4.5 15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",t,[["circle",{cx:"13.5",cy:"6.5",r:".5"}],["circle",{cx:"17.5",cy:"10.5",r:".5"}],["circle",{cx:"8.5",cy:"7.5",r:".5"}],["circle",{cx:"6.5",cy:"12.5",r:".5"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",t,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"9",x2:"9",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",t,[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",t,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",t,[["path",{d:"M9 9a3 3 0 1 1 6 0"}],["path",{d:"M12 12v3"}],["path",{d:"M11 15h2"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",t,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",t,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",t,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",t,[["rect",{width:"4",height:"16",x:"6",y:"4"}],["rect",{width:"4",height:"16",x:"14",y:"4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",t,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",t,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=["svg",t,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=["svg",t,[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",t,[["path",{d:"m12 19 7-7 3 3-7 7-3-3z"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}],["path",{d:"m2 2 7.586 7.586"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=["svg",t,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",t,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",t,[["path",{d:"m15 5 4 4"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",t,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",t,[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",t,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",t,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",t,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",t,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",t,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",t,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",t,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",t,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",t,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",t,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",t,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",t,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",t,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",t,[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",t,[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",t,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",t,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",t,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",t,[["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",t,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",t,[["path",{d:"M15 11h.01"}],["path",{d:"M11 15h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",t,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",t,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",t,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",t,[["polygon",{points:"5 3 19 12 5 21 5 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",t,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",t,[["path",{d:"m13 2-2 2.5h3L12 7"}],["path",{d:"M10 14v-3"}],["path",{d:"M14 14v-3"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",t,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",t,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",t,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",t,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",t,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",t,[["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",t,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",t,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",t,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",t,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 12V6"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",t,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 7v5"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",t,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",t,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",t,[["polyline",{points:"6 9 6 2 18 2 18 9"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["rect",{width:"12",height:"8",x:"6",y:"14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",t,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",t,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",t,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",t,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",t,[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",t,[["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"}],["path",{d:"M7.61 12.53a3 3 0 1 0-1.6 4.3"}],["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",t,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",t,[["path",{d:"M12 12h0.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",t,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",t,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",t,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",t,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",t,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",t,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",t,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",t,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17V7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",t,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",t,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",t,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",t,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",t,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",t,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",t,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",t,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",t,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",t,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",t,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",t,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",t,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",t,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",t,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",t,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",t,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",t,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",t,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",t,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",t,[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"}],["path",{d:"m9.35 14.53 2.64-3.31"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",t,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",t,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",t,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",t,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",t,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",t,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",t,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",t,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",t,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",t,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",t,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",t,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",t,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",t,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",t,[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",t,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",t,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",t,[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"}],["path",{d:"M10 2v4h6"}],["path",{d:"M18 18v-7h-8v7"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",t,[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}],["polyline",{points:"17 21 17 13 7 13 7 21"}],["polyline",{points:"7 3 7 8 15 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=["svg",t,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M5 7v12h12"}],["path",{d:"m5 19 6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",t,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",t,[["path",{d:"M21 3 9 15"}],["path",{d:"M12 3H3v18h18v-9"}],["path",{d:"M16 3h5v5"}],["path",{d:"M14 15H9v-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",t,[["circle",{cx:"7.5",cy:"7.5",r:".5"}],["circle",{cx:"18.5",cy:"5.5",r:".5"}],["circle",{cx:"11.5",cy:"11.5",r:".5"}],["circle",{cx:"7.5",cy:"16.5",r:".5"}],["circle",{cx:"17.5",cy:"14.5",r:".5"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",t,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",t,[["path",{d:"m4 6 8-4 8 4"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 5v17"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",t,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",t,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",t,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",t,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",t,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",t,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",t,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M15 8h-5"}],["path",{d:"M15 12h-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",t,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",t,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",t,[["path",{d:"m9 9-2 2 2 2"}],["path",{d:"m13 13 2-2-2-2"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",t,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",t,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=["svg",t,[["path",{d:"m3 3 3 9-3 9 19-9Z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",t,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",t,[["path",{d:"m22 2-7 20-4-9-9-4Z"}],["path",{d:"M22 2 11 13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",t,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",t,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",t,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",t,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",t,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",t,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",t,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",t,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",t,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",t,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",t,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m4 5 14 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",t,[["path",{d:"M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h8"}],["path",{d:"M12 15V7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m14.5 9-5 5"}],["path",{d:"m9.5 9 5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",t,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",t,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",t,[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M12 10v4"}],["path",{d:"M12 2v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",t,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",t,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",t,[["path",{d:"m5 11 4-7"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"}],["path",{d:"m9 11 1 9"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m15 11-1 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",t,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",t,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",t,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",t,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",t,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",t,[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"}],["path",{d:"m18 14 4 4-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",t,[["path",{d:"M18 7V4H6l6 8-6 8h12v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",t,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",t,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",t,[["path",{d:"M12 3v3"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z"}],["path",{d:"M12 13v8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",t,[["path",{d:"M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"}],["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",t,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",t,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",t,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["path",{d:"M8 20v2h8v-2"}],["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",t,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",t,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",t,[["path",{d:"m8 14-6 6h9v-3"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",t,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",t,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",t,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",t,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",t,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",t,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=["svg",t,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=["svg",t,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=["svg",t,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=["svg",t,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=["svg",t,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",t,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",t,[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=["svg",t,[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}],["path",{d:"M5 3v4"}],["path",{d:"M19 17v4"}],["path",{d:"M3 5h4"}],["path",{d:"M17 19h4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",t,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",t,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=["svg",t,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=["svg",t,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=["svg",t,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=["svg",t,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=["svg",t,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=["svg",t,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",t,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",t,[["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",t,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",t,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=["svg",t,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",t,[["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}],["path",{d:"M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M15.2 22a3 3 0 0 0-2.2-5"}],["path",{d:"M18 13h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",t,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",t,[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",t,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",t,[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",t,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",t,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",t,[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",t,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M15 3v6h6"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}],["path",{d:"M8 13h0"}],["path",{d:"M16 13h0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",t,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M15 3v6h6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{width:"6",height:"6",x:"9",y:"9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",t,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",t,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",t,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",t,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",t,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",t,[["path",{d:"M7 13h4"}],["path",{d:"M15 13h2"}],["path",{d:"M7 9h2"}],["path",{d:"M13 9h4"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",t,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",t,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",t,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",t,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",t,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",t,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",t,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",t,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",t,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",t,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",t,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",t,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",t,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",t,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",t,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",t,[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}],["path",{d:"M7 7h.01"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",t,[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"}],["path",{d:"M6 9.01V9"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",t,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",t,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",t,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",t,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",t,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",t,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",t,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",t,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",t,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",t,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",t,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",t,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=["svg",t,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",t,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",t,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",t,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",t,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",t,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",t,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",t,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",t,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",t,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",t,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",t,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",t,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",t,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",t,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",t,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",t,[["path",{d:"M3 4h9l1 7"}],["path",{d:"M4 11V4"}],["path",{d:"M8 10V4"}],["path",{d:"M18 5c-.6 0-1 .4-1 1v5.6"}],["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"}],["circle",{cx:"7",cy:"15",r:".5"}],["circle",{cx:"7",cy:"15",r:"5"}],["path",{d:"M16 18h-5"}],["circle",{cx:"18",cy:"18",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",t,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",t,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",t,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",t,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=["svg",t,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h0"}],["path",{d:"M16 15h0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",t,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",t,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",t,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",t,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",t,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",t,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",t,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",t,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",t,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",t,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",t,[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M15 18H9"}],["circle",{cx:"17",cy:"18",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",t,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",t,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",t,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",t,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",t,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",t,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",t,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",t,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",t,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",t,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",t,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",t,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",t,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",t,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",t,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",t,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",t,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",t,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",t,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",t,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m16 16-4-4-4 4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",t,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",t,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",t,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=["svg",t,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",t,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=["svg",t,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",t,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",t,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",t,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",t,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",t,[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",t,[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",t,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",t,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",t,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",t,[["path",{d:"m22 8-6 4 6 4V8Z"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",t,[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",t,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",t,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",t,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",t,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",t,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",t,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",t,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",t,[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",t,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",t,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",t,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h0"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",t,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",t,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",t,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",t,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",t,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",t,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",t,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",t,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",t,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",t,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",t,[["path",{d:"M5 13a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",t,[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",t,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",t,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",t,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",t,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",t,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",t,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",t,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",t,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",t,[["polyline",{points:"12.41 6.75 13 2 10.57 4.92"}],["polyline",{points:"18.57 12.91 21 10 15.66 10"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",t,[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:D2,Activity:q2,ActivitySquare:Z2,AirVent:N2,Airplay:z2,AlarmCheck:le,AlarmClock:R2,AlarmClockCheck:le,AlarmClockOff:F2,AlarmMinus:j2,AlarmPlus:W2,Album:$2,AlertCircle:U2,AlertOctagon:G2,AlertTriangle:X2,AlignCenter:J2,AlignCenterHorizontal:Y2,AlignCenterVertical:K2,AlignEndHorizontal:Q2,AlignEndVertical:ta,AlignHorizontalDistributeCenter:ea,AlignHorizontalDistributeEnd:aa,AlignHorizontalDistributeStart:na,AlignHorizontalJustifyCenter:sa,AlignHorizontalJustifyEnd:ia,AlignHorizontalJustifyStart:oa,AlignHorizontalSpaceAround:ra,AlignHorizontalSpaceBetween:ha,AlignJustify:ca,AlignLeft:la,AlignRight:da,AlignStartHorizontal:pa,AlignStartVertical:va,AlignVerticalDistributeCenter:ua,AlignVerticalDistributeEnd:ya,AlignVerticalDistributeStart:ga,AlignVerticalJustifyCenter:Ma,AlignVerticalJustifyEnd:fa,AlignVerticalJustifyStart:ma,AlignVerticalSpaceAround:xa,AlignVerticalSpaceBetween:wa,Ampersand:ba,Ampersands:Ca,Anchor:Sa,Angry:La,Annoyed:Aa,Antenna:Ha,Aperture:Ea,AppWindow:Va,Apple:Oa,Archive:Ia,ArchiveRestore:Ta,ArchiveX:ka,AreaChart:Pa,Armchair:Ba,ArrowBigDown:Da,ArrowBigDownDash:_a,ArrowBigLeft:qa,ArrowBigLeftDash:Za,ArrowBigRight:za,ArrowBigRightDash:Na,ArrowBigUp:Ra,ArrowBigUpDash:Fa,ArrowDown:on,ArrowDown01:ja,ArrowDown10:Wa,ArrowDownAZ:de,ArrowDownAz:de,ArrowDownCircle:$a,ArrowDownFromLine:Ua,ArrowDownLeft:Ya,ArrowDownLeftFromCircle:Ga,ArrowDownLeftSquare:Xa,ArrowDownNarrowWide:Ka,ArrowDownRight:tn,ArrowDownRightFromCircle:Ja,ArrowDownRightSquare:Qa,ArrowDownSquare:en,ArrowDownToDot:an,ArrowDownToLine:nn,ArrowDownUp:sn,ArrowDownWideNarrow:pe,ArrowDownZA:ve,ArrowDownZa:ve,ArrowLeft:pn,ArrowLeftCircle:rn,ArrowLeftFromLine:hn,ArrowLeftRight:cn,ArrowLeftSquare:ln,ArrowLeftToLine:dn,ArrowRight:fn,ArrowRightCircle:vn,ArrowRightFromLine:un,ArrowRightLeft:yn,ArrowRightSquare:gn,ArrowRightToLine:Mn,ArrowUp:Pn,ArrowUp01:mn,ArrowUp10:xn,ArrowUpAZ:ue,ArrowUpAz:ue,ArrowUpCircle:wn,ArrowUpDown:bn,ArrowUpFromDot:Cn,ArrowUpFromLine:Sn,ArrowUpLeft:Hn,ArrowUpLeftFromCircle:Ln,ArrowUpLeftSquare:An,ArrowUpNarrowWide:ye,ArrowUpRight:On,ArrowUpRightFromCircle:En,ArrowUpRightSquare:Vn,ArrowUpSquare:Tn,ArrowUpToLine:kn,ArrowUpWideNarrow:In,ArrowUpZA:ge,ArrowUpZa:ge,ArrowsUpFromLine:Bn,Asterisk:_n,AtSign:Dn,Atom:Zn,AudioLines:qn,AudioWaveform:Nn,Award:zn,Axe:Fn,Axis3D:Me,Axis3d:Me,Baby:Rn,Backpack:jn,Badge:os,BadgeAlert:Wn,BadgeCent:$n,BadgeCheck:fe,BadgeDollarSign:Un,BadgeEuro:Gn,BadgeHelp:Xn,BadgeIndianRupee:Yn,BadgeInfo:Kn,BadgeJapaneseYen:Jn,BadgeMinus:Qn,BadgePercent:ts,BadgePlus:es,BadgePoundSterling:as,BadgeRussianRuble:ns,BadgeSwissFranc:ss,BadgeX:is,BaggageClaim:rs,Ban:hs,Banana:cs,Banknote:ls,BarChart:Ms,BarChart2:ds,BarChart3:ps,BarChart4:vs,BarChartBig:us,BarChartHorizontal:gs,BarChartHorizontalBig:ys,Barcode:fs,Baseline:ms,Bath:xs,Battery:As,BatteryCharging:ws,BatteryFull:bs,BatteryLow:Cs,BatteryMedium:Ss,BatteryWarning:Ls,Beaker:Hs,Bean:Vs,BeanOff:Es,Bed:ks,BedDouble:Os,BedSingle:Ts,Beef:Is,Beer:Ps,Bell:Ns,BellDot:Bs,BellMinus:_s,BellOff:Ds,BellPlus:Zs,BellRing:qs,Bike:zs,Binary:Fs,Biohazard:Rs,Bird:js,Bitcoin:Ws,Blinds:$s,Blocks:Us,Bluetooth:Ks,BluetoothConnected:Gs,BluetoothOff:Xs,BluetoothSearching:Ys,Bold:Js,Bomb:Qs,Bone:ti,Book:Ci,BookA:ei,BookAudio:ai,BookCheck:ni,BookCopy:si,BookDashed:me,BookDown:ii,BookHeadphones:oi,BookHeart:ri,BookImage:hi,BookKey:ci,BookLock:li,BookMarked:di,BookMinus:pi,BookOpen:yi,BookOpenCheck:vi,BookOpenText:ui,BookPlus:gi,BookTemplate:me,BookText:Mi,BookType:fi,BookUp:xi,BookUp2:mi,BookUser:wi,BookX:bi,Bookmark:Ei,BookmarkCheck:Si,BookmarkMinus:Li,BookmarkPlus:Ai,BookmarkX:Hi,BoomBox:Vi,Bot:Oi,Box:ki,BoxSelect:Ti,Boxes:Ii,Braces:xe,Brackets:Pi,Brain:Di,BrainCircuit:Bi,BrainCog:_i,Briefcase:Zi,BringToFront:qi,Brush:Ni,Bug:Ri,BugOff:zi,BugPlay:Fi,Building:Wi,Building2:ji,Bus:Ui,BusFront:$i,Cable:Xi,CableCar:Gi,Cake:Ki,CakeSlice:Yi,Calculator:Ji,Calendar:po,CalendarCheck:to,CalendarCheck2:Qi,CalendarClock:eo,CalendarDays:ao,CalendarHeart:no,CalendarMinus:so,CalendarOff:io,CalendarPlus:oo,CalendarRange:ro,CalendarSearch:ho,CalendarX:lo,CalendarX2:co,Camera:uo,CameraOff:vo,CandlestickChart:yo,Candy:fo,CandyCane:go,CandyOff:Mo,Car:wo,CarFront:mo,CarTaxiFront:xo,Caravan:bo,Carrot:Co,CaseLower:So,CaseSensitive:Lo,CaseUpper:Ao,CassetteTape:Ho,Cast:Eo,Castle:Vo,Cat:Oo,Check:_o,CheckCheck:To,CheckCircle:Io,CheckCircle2:ko,CheckSquare:Bo,CheckSquare2:Po,ChefHat:Do,Cherry:Zo,ChevronDown:zo,ChevronDownCircle:qo,ChevronDownSquare:No,ChevronFirst:Fo,ChevronLast:Ro,ChevronLeft:$o,ChevronLeftCircle:jo,ChevronLeftSquare:Wo,ChevronRight:Xo,ChevronRightCircle:Uo,ChevronRightSquare:Go,ChevronUp:Jo,ChevronUpCircle:Yo,ChevronUpSquare:Ko,ChevronsDown:t0,ChevronsDownUp:Qo,ChevronsLeft:a0,ChevronsLeftRight:e0,ChevronsRight:s0,ChevronsRightLeft:n0,ChevronsUp:o0,ChevronsUpDown:i0,Chrome:r0,Church:h0,Cigarette:l0,CigaretteOff:c0,Circle:m0,CircleDashed:d0,CircleDollarSign:p0,CircleDot:u0,CircleDotDashed:v0,CircleEllipsis:y0,CircleEqual:g0,CircleOff:M0,CircleSlash:f0,CircleSlash2:we,CircleSlashed:we,CircleUser:Ce,CircleUserRound:be,CircuitBoard:x0,Citrus:w0,Clapperboard:b0,Clipboard:T0,ClipboardCheck:C0,ClipboardCopy:S0,ClipboardEdit:L0,ClipboardList:A0,ClipboardPaste:H0,ClipboardSignature:E0,ClipboardType:V0,ClipboardX:O0,Clock:j0,Clock1:k0,Clock10:I0,Clock11:P0,Clock12:B0,Clock2:_0,Clock3:D0,Clock4:Z0,Clock5:q0,Clock6:N0,Clock7:z0,Clock8:F0,Clock9:R0,Cloud:sr,CloudCog:W0,CloudDrizzle:$0,CloudFog:U0,CloudHail:G0,CloudLightning:X0,CloudMoon:K0,CloudMoonRain:Y0,CloudOff:J0,CloudRain:tr,CloudRainWind:Q0,CloudSnow:er,CloudSun:nr,CloudSunRain:ar,Cloudy:ir,Clover:or,Club:rr,Code:cr,Code2:hr,Codepen:lr,Codesandbox:dr,Coffee:pr,Cog:vr,Coins:ur,Columns:yr,Combine:gr,Command:Mr,Compass:fr,Component:mr,Computer:xr,ConciergeBell:wr,Cone:br,Construction:Cr,Contact:Lr,Contact2:Sr,Container:Ar,Contrast:Hr,Cookie:Er,Copy:Pr,CopyCheck:Vr,CopyMinus:Or,CopyPlus:Tr,CopySlash:kr,CopyX:Ir,Copyleft:Br,Copyright:_r,CornerDownLeft:Dr,CornerDownRight:Zr,CornerLeftDown:qr,CornerLeftUp:Nr,CornerRightDown:zr,CornerRightUp:Fr,CornerUpLeft:Rr,CornerUpRight:jr,Cpu:Wr,CreativeCommons:$r,CreditCard:Ur,Croissant:Gr,Crop:Xr,Cross:Yr,Crosshair:Kr,Crown:Jr,Cuboid:Qr,CupSoda:th,CurlyBraces:xe,Currency:eh,Cylinder:ah,Database:ih,DatabaseBackup:nh,DatabaseZap:sh,Delete:oh,Dessert:rh,Diameter:hh,Diamond:ch,Dice1:lh,Dice2:dh,Dice3:ph,Dice4:vh,Dice5:uh,Dice6:yh,Dices:gh,Diff:Mh,Disc:wh,Disc2:fh,Disc3:mh,DiscAlbum:xh,Divide:Sh,DivideCircle:bh,DivideSquare:Ch,Dna:Ah,DnaOff:Lh,Dog:Hh,DollarSign:Eh,Donut:Vh,DoorClosed:Oh,DoorOpen:Th,Dot:kh,Download:Ph,DownloadCloud:Ih,DraftingCompass:Bh,Drama:_h,Dribbble:Dh,Droplet:Zh,Droplets:qh,Drum:Nh,Drumstick:zh,Dumbbell:Fh,Ear:jh,EarOff:Rh,Edit:T1,Edit2:Ze,Edit3:De,Egg:Uh,EggFried:Wh,EggOff:$h,Equal:Xh,EqualNot:Gh,Eraser:Yh,Euro:Kh,Expand:Jh,ExternalLink:Qh,Eye:ec,EyeOff:tc,Facebook:ac,Factory:nc,Fan:sc,FastForward:ic,Feather:oc,FerrisWheel:rc,Figma:hc,File:cl,FileArchive:cc,FileAudio:dc,FileAudio2:lc,FileAxis3D:Se,FileAxis3d:Se,FileBadge:vc,FileBadge2:pc,FileBarChart:yc,FileBarChart2:uc,FileBox:gc,FileCheck:fc,FileCheck2:Mc,FileClock:mc,FileCode:wc,FileCode2:xc,FileCog:Le,FileCog2:Le,FileDiff:bc,FileDigit:Cc,FileDown:Sc,FileEdit:Lc,FileHeart:Ac,FileImage:Hc,FileInput:Ec,FileJson:Oc,FileJson2:Vc,FileKey:kc,FileKey2:Tc,FileLineChart:Ic,FileLock:Bc,FileLock2:Pc,FileMinus:Dc,FileMinus2:_c,FileMusic:Zc,FileOutput:qc,FilePieChart:Nc,FilePlus:Fc,FilePlus2:zc,FileQuestion:Rc,FileScan:jc,FileSearch:$c,FileSearch2:Wc,FileSignature:Uc,FileSpreadsheet:Gc,FileStack:Xc,FileSymlink:Yc,FileTerminal:Kc,FileText:Jc,FileType:tl,FileType2:Qc,FileUp:el,FileVideo:nl,FileVideo2:al,FileVolume:il,FileVolume2:sl,FileWarning:ol,FileX:hl,FileX2:rl,Files:ll,Film:dl,Filter:vl,FilterX:pl,Fingerprint:ul,Fish:Ml,FishOff:yl,FishSymbol:gl,Flag:wl,FlagOff:fl,FlagTriangleLeft:ml,FlagTriangleRight:xl,Flame:Cl,FlameKindling:bl,Flashlight:Ll,FlashlightOff:Sl,FlaskConical:Hl,FlaskConicalOff:Al,FlaskRound:El,FlipHorizontal:Ol,FlipHorizontal2:Vl,FlipVertical:kl,FlipVertical2:Tl,Flower:Pl,Flower2:Il,Focus:Bl,FoldHorizontal:_l,FoldVertical:Dl,Folder:dd,FolderArchive:Zl,FolderCheck:ql,FolderClock:Nl,FolderClosed:zl,FolderCog:Ae,FolderCog2:Ae,FolderDot:Fl,FolderDown:Rl,FolderEdit:jl,FolderGit:$l,FolderGit2:Wl,FolderHeart:Ul,FolderInput:Gl,FolderKanban:Xl,FolderKey:Yl,FolderLock:Kl,FolderMinus:Jl,FolderOpen:td,FolderOpenDot:Ql,FolderOutput:ed,FolderPlus:ad,FolderRoot:nd,FolderSearch:id,FolderSearch2:sd,FolderSymlink:od,FolderSync:rd,FolderTree:hd,FolderUp:cd,FolderX:ld,Folders:pd,Footprints:vd,Forklift:ud,FormInput:yd,Forward:gd,Frame:Md,Framer:fd,Frown:md,Fuel:xd,Fullscreen:wd,FunctionSquare:bd,GalleryHorizontal:Sd,GalleryHorizontalEnd:Cd,GalleryThumbnails:Ld,GalleryVertical:Hd,GalleryVerticalEnd:Ad,Gamepad:Vd,Gamepad2:Ed,GanttChart:Od,GanttChartSquare:He,Gauge:kd,GaugeCircle:Td,Gavel:Id,Gem:Pd,Ghost:Bd,Gift:_d,GitBranch:Zd,GitBranchPlus:Dd,GitCommit:Ee,GitCommitHorizontal:Ee,GitCommitVertical:qd,GitCompare:zd,GitCompareArrows:Nd,GitFork:Fd,GitGraph:Rd,GitMerge:jd,GitPullRequest:Yd,GitPullRequestArrow:Wd,GitPullRequestClosed:$d,GitPullRequestCreate:Gd,GitPullRequestCreateArrow:Ud,GitPullRequestDraft:Xd,Github:Kd,Gitlab:Jd,GlassWater:Qd,Glasses:tp,Globe:ap,Globe2:ep,Goal:np,Grab:sp,GraduationCap:ip,Grape:op,Grid:O1,Grid2X2:Ve,Grid2x2:Ve,Grid3X3:O1,Grid3x3:O1,Grip:cp,GripHorizontal:rp,GripVertical:hp,Group:lp,Guitar:dp,Hammer:pp,Hand:up,HandMetal:vp,HardDrive:Mp,HardDriveDownload:yp,HardDriveUpload:gp,HardHat:fp,Hash:mp,Haze:xp,HdmiPort:wp,Heading:Ep,Heading1:bp,Heading2:Cp,Heading3:Sp,Heading4:Lp,Heading5:Ap,Heading6:Hp,Headphones:Vp,Heart:Pp,HeartCrack:Op,HeartHandshake:Tp,HeartOff:kp,HeartPulse:Ip,HelpCircle:Bp,HelpingHand:_p,Hexagon:Dp,Highlighter:Zp,History:qp,Home:Np,Hop:Fp,HopOff:zp,Hotel:Rp,Hourglass:jp,IceCream:$p,IceCream2:Wp,Image:Kp,ImageDown:Up,ImageMinus:Gp,ImageOff:Xp,ImagePlus:Yp,Import:Jp,Inbox:Qp,Indent:t4,IndianRupee:e4,Infinity:a4,Info:n4,Inspect:ke,Instagram:s4,Italic:i4,IterationCcw:o4,IterationCw:r4,JapaneseYen:h4,Joystick:c4,Kanban:l4,KanbanSquare:Te,KanbanSquareDashed:Oe,Key:v4,KeyRound:d4,KeySquare:p4,Keyboard:y4,KeyboardMusic:u4,Lamp:w4,LampCeiling:g4,LampDesk:M4,LampFloor:f4,LampWallDown:m4,LampWallUp:x4,LandPlot:b4,Landmark:C4,Languages:S4,Laptop:A4,Laptop2:L4,Lasso:E4,LassoSelect:H4,Laugh:V4,Layers:k4,Layers2:O4,Layers3:T4,Layout:q4,LayoutDashboard:I4,LayoutGrid:P4,LayoutList:B4,LayoutPanelLeft:_4,LayoutPanelTop:D4,LayoutTemplate:Z4,Leaf:N4,LeafyGreen:z4,Library:j4,LibraryBig:F4,LibrarySquare:R4,LifeBuoy:W4,Ligature:$4,Lightbulb:G4,LightbulbOff:U4,LineChart:X4,Link:J4,Link2:K4,Link2Off:Y4,Linkedin:Q4,List:v5,ListChecks:t5,ListEnd:e5,ListFilter:a5,ListMinus:n5,ListMusic:s5,ListOrdered:i5,ListPlus:o5,ListRestart:r5,ListStart:h5,ListTodo:c5,ListTree:l5,ListVideo:d5,ListX:p5,Loader:y5,Loader2:u5,Locate:f5,LocateFixed:g5,LocateOff:M5,Lock:x5,LockKeyhole:m5,LogIn:w5,LogOut:b5,Lollipop:C5,Luggage:S5,MSquare:L5,Magnet:A5,Mail:B5,MailCheck:H5,MailMinus:E5,MailOpen:V5,MailPlus:O5,MailQuestion:T5,MailSearch:k5,MailWarning:I5,MailX:P5,Mailbox:_5,Mails:D5,Map:z5,MapPin:q5,MapPinOff:Z5,MapPinned:N5,Martini:F5,Maximize:j5,Maximize2:R5,Medal:W5,Megaphone:U5,MegaphoneOff:$5,Meh:G5,MemoryStick:X5,Menu:K5,MenuSquare:Y5,Merge:J5,MessageCircle:Q5,MessageSquare:av,MessageSquareDashed:tv,MessageSquarePlus:ev,MessagesSquare:nv,Mic:ov,Mic2:sv,MicOff:iv,Microscope:rv,Microwave:hv,Milestone:cv,Milk:dv,MilkOff:lv,Minimize:vv,Minimize2:pv,Minus:gv,MinusCircle:uv,MinusSquare:yv,Monitor:Ev,MonitorCheck:Mv,MonitorDot:fv,MonitorDown:mv,MonitorOff:xv,MonitorPause:wv,MonitorPlay:bv,MonitorSmartphone:Cv,MonitorSpeaker:Sv,MonitorStop:Lv,MonitorUp:Av,MonitorX:Hv,Moon:Ov,MoonStar:Vv,MoreHorizontal:Tv,MoreVertical:kv,Mountain:Pv,MountainSnow:Iv,Mouse:qv,MousePointer:Zv,MousePointer2:Bv,MousePointerClick:_v,MousePointerSquare:ke,MousePointerSquareDashed:Dv,Move:Jv,Move3D:Ie,Move3d:Ie,MoveDiagonal:zv,MoveDiagonal2:Nv,MoveDown:jv,MoveDownLeft:Fv,MoveDownRight:Rv,MoveHorizontal:Wv,MoveLeft:$v,MoveRight:Uv,MoveUp:Yv,MoveUpLeft:Gv,MoveUpRight:Xv,MoveVertical:Kv,Music:a3,Music2:Qv,Music3:t3,Music4:e3,Navigation:o3,Navigation2:s3,Navigation2Off:n3,NavigationOff:i3,Network:r3,Newspaper:h3,Nfc:c3,Nut:d3,NutOff:l3,Octagon:p3,Option:v3,Orbit:u3,Outdent:y3,Package:C3,Package2:g3,PackageCheck:M3,PackageMinus:f3,PackageOpen:m3,PackagePlus:x3,PackageSearch:w3,PackageX:b3,PaintBucket:S3,Paintbrush:A3,Paintbrush2:L3,Palette:H3,Palmtree:E3,PanelBottom:k3,PanelBottomClose:V3,PanelBottomInactive:O3,PanelBottomOpen:T3,PanelLeft:_e,PanelLeftClose:Pe,PanelLeftInactive:I3,PanelLeftOpen:Be,PanelRight:D3,PanelRightClose:P3,PanelRightInactive:B3,PanelRightOpen:_3,PanelTop:z3,PanelTopClose:Z3,PanelTopInactive:q3,PanelTopOpen:N3,Paperclip:F3,Parentheses:R3,ParkingCircle:W3,ParkingCircleOff:j3,ParkingMeter:$3,ParkingSquare:G3,ParkingSquareOff:U3,PartyPopper:X3,Pause:J3,PauseCircle:Y3,PauseOctagon:K3,PawPrint:Q3,PcCase:tu,Pen:Ze,PenBox:T1,PenLine:De,PenSquare:T1,PenTool:eu,Pencil:su,PencilLine:au,PencilRuler:nu,Pentagon:iu,Percent:cu,PercentCircle:ou,PercentDiamond:ru,PercentSquare:hu,PersonStanding:lu,Phone:Mu,PhoneCall:du,PhoneForwarded:pu,PhoneIncoming:vu,PhoneMissed:uu,PhoneOff:yu,PhoneOutgoing:gu,Pi:mu,PiSquare:fu,Piano:xu,PictureInPicture:bu,PictureInPicture2:wu,PieChart:Cu,PiggyBank:Su,Pilcrow:Au,PilcrowSquare:Lu,Pill:Hu,Pin:Vu,PinOff:Eu,Pipette:Ou,Pizza:Tu,Plane:Pu,PlaneLanding:ku,PlaneTakeoff:Iu,Play:Du,PlayCircle:Bu,PlaySquare:_u,Plug:zu,Plug2:Zu,PlugZap:Nu,PlugZap2:qu,Plus:ju,PlusCircle:Fu,PlusSquare:Ru,Pocket:$u,PocketKnife:Wu,Podcast:Uu,Pointer:Gu,Popcorn:Xu,Popsicle:Yu,PoundSterling:Ku,Power:e6,PowerCircle:Ju,PowerOff:Qu,PowerSquare:t6,Presentation:a6,Printer:n6,Projector:s6,Puzzle:i6,Pyramid:o6,QrCode:r6,Quote:h6,Rabbit:c6,Radar:l6,Radiation:d6,Radio:u6,RadioReceiver:p6,RadioTower:v6,Radius:y6,RailSymbol:g6,Rainbow:M6,Rat:f6,Ratio:m6,Receipt:x6,RectangleHorizontal:w6,RectangleVertical:b6,Recycle:C6,Redo:A6,Redo2:S6,RedoDot:L6,RefreshCcw:E6,RefreshCcwDot:H6,RefreshCw:O6,RefreshCwOff:V6,Refrigerator:T6,Regex:k6,RemoveFormatting:I6,Repeat:_6,Repeat1:P6,Repeat2:B6,Replace:Z6,ReplaceAll:D6,Reply:N6,ReplyAll:q6,Rewind:z6,Ribbon:F6,Rocket:R6,RockingChair:j6,RollerCoaster:W6,Rotate3D:qe,Rotate3d:qe,RotateCcw:$6,RotateCw:U6,Route:X6,RouteOff:G6,Router:Y6,Rows:K6,Rss:J6,Ruler:Q6,RussianRuble:t8,Sailboat:e8,Salad:a8,Sandwich:n8,Satellite:i8,SatelliteDish:s8,Save:r8,SaveAll:o8,Scale:h8,Scale3D:Ne,Scale3d:Ne,Scaling:c8,Scan:g8,ScanBarcode:l8,ScanEye:d8,ScanFace:p8,ScanLine:v8,ScanSearch:u8,ScanText:y8,ScatterChart:M8,School:m8,School2:f8,Scissors:C8,ScissorsLineDashed:x8,ScissorsSquare:b8,ScissorsSquareDashedBottom:w8,ScreenShare:L8,ScreenShareOff:S8,Scroll:H8,ScrollText:A8,Search:k8,SearchCheck:E8,SearchCode:V8,SearchSlash:O8,SearchX:T8,Send:P8,SendHorizonal:ze,SendHorizontal:ze,SendToBack:I8,SeparatorHorizontal:B8,SeparatorVertical:_8,Server:N8,ServerCog:D8,ServerCrash:Z8,ServerOff:q8,Settings:F8,Settings2:z8,Shapes:R8,Share:W8,Share2:j8,Sheet:$8,Shell:U8,Shield:n7,ShieldAlert:G8,ShieldBan:X8,ShieldCheck:Y8,ShieldClose:Fe,ShieldEllipsis:K8,ShieldHalf:J8,ShieldMinus:Q8,ShieldOff:t7,ShieldPlus:e7,ShieldQuestion:a7,ShieldX:Fe,Ship:i7,ShipWheel:s7,Shirt:o7,ShoppingBag:r7,ShoppingBasket:h7,ShoppingCart:c7,Shovel:l7,ShowerHead:d7,Shrink:p7,Shrub:v7,Shuffle:u7,Sidebar:_e,SidebarClose:Pe,SidebarOpen:Be,Sigma:g7,SigmaSquare:y7,Signal:w7,SignalHigh:M7,SignalLow:f7,SignalMedium:m7,SignalZero:x7,Signpost:C7,SignpostBig:b7,Siren:S7,SkipBack:L7,SkipForward:A7,Skull:H7,Slack:E7,Slash:V7,Slice:O7,Sliders:k7,SlidersHorizontal:T7,Smartphone:B7,SmartphoneCharging:I7,SmartphoneNfc:P7,Smile:D7,SmilePlus:_7,Snail:Z7,Snowflake:q7,Sofa:N7,SortAsc:ye,SortDesc:pe,Soup:z7,Space:F7,Spade:R7,Sparkle:j7,Sparkles:Re,Speaker:W7,Speech:$7,SpellCheck:G7,SpellCheck2:U7,Spline:X7,Split:J7,SplitSquareHorizontal:Y7,SplitSquareVertical:K7,SprayCan:Q7,Sprout:ty,Square:cy,SquareAsterisk:ey,SquareCode:ay,SquareDashedBottom:sy,SquareDashedBottomCode:ny,SquareDot:iy,SquareEqual:oy,SquareGantt:He,SquareKanban:Te,SquareKanbanDashed:Oe,SquareSlash:ry,SquareStack:hy,SquareUser:We,SquareUserRound:je,Squirrel:ly,Stamp:dy,Star:uy,StarHalf:py,StarOff:vy,Stars:Re,StepBack:yy,StepForward:gy,Stethoscope:My,Sticker:fy,StickyNote:my,StopCircle:xy,Store:wy,StretchHorizontal:by,StretchVertical:Cy,Strikethrough:Sy,Subscript:Ly,Subtitles:Ay,Sun:Ty,SunDim:Hy,SunMedium:Ey,SunMoon:Vy,SunSnow:Oy,Sunrise:ky,Sunset:Iy,Superscript:Py,SwissFranc:By,SwitchCamera:_y,Sword:Dy,Swords:Zy,Syringe:qy,Table:Fy,Table2:Ny,TableProperties:zy,Tablet:jy,TabletSmartphone:Ry,Tablets:Wy,Tag:$y,Tags:Uy,Tally1:Gy,Tally2:Xy,Tally3:Yy,Tally4:Ky,Tally5:Jy,Tangent:Qy,Target:tg,Tent:ag,TentTree:eg,Terminal:sg,TerminalSquare:ng,TestTube:og,TestTube2:ig,TestTubes:rg,Text:dg,TextCursor:cg,TextCursorInput:hg,TextQuote:lg,TextSelect:$e,TextSelection:$e,Theater:pg,Thermometer:yg,ThermometerSnowflake:vg,ThermometerSun:ug,ThumbsDown:gg,ThumbsUp:Mg,Ticket:fg,Timer:wg,TimerOff:mg,TimerReset:xg,ToggleLeft:bg,ToggleRight:Cg,Tornado:Sg,Torus:Lg,Touchpad:Hg,TouchpadOff:Ag,TowerControl:Eg,ToyBrick:Vg,Tractor:Og,TrafficCone:Tg,Train:Ue,TrainFront:Ig,TrainFrontTunnel:kg,TrainTrack:Pg,TramFront:Ue,Trash:_g,Trash2:Bg,TreeDeciduous:Dg,TreePine:Zg,Trees:qg,Trello:Ng,TrendingDown:zg,TrendingUp:Fg,Triangle:jg,TriangleRight:Rg,Trophy:Wg,Truck:$g,Turtle:Ug,Tv:Xg,Tv2:Gg,Twitch:Yg,Twitter:Kg,Type:Jg,Umbrella:tM,UmbrellaOff:Qg,Underline:eM,Undo:sM,Undo2:aM,UndoDot:nM,UnfoldHorizontal:iM,UnfoldVertical:oM,Ungroup:rM,Unlink:cM,Unlink2:hM,Unlock:dM,UnlockKeyhole:lM,Unplug:pM,Upload:uM,UploadCloud:vM,Usb:yM,User:wM,User2:Qe,UserCheck:gM,UserCheck2:Ge,UserCircle:Ce,UserCircle2:be,UserCog:MM,UserCog2:Xe,UserMinus:fM,UserMinus2:Ye,UserPlus:mM,UserPlus2:Ke,UserRound:Qe,UserRoundCheck:Ge,UserRoundCog:Xe,UserRoundMinus:Ye,UserRoundPlus:Ke,UserRoundX:Je,UserSquare:We,UserSquare2:je,UserX:xM,UserX2:Je,Users:bM,Users2:t2,UsersRound:t2,Utensils:SM,UtensilsCrossed:CM,UtilityPole:LM,Variable:AM,Vegan:HM,VenetianMask:EM,Verified:fe,Vibrate:OM,VibrateOff:VM,Video:kM,VideoOff:TM,Videotape:IM,View:PM,Voicemail:BM,Volume:qM,Volume1:_M,Volume2:DM,VolumeX:ZM,Vote:NM,Wallet:RM,Wallet2:zM,WalletCards:FM,Wallpaper:jM,Wand:$M,Wand2:WM,Warehouse:UM,Watch:GM,Waves:XM,Waypoints:YM,Webcam:KM,Webhook:JM,Weight:QM,Wheat:ef,WheatOff:tf,WholeWord:af,Wifi:sf,WifiOff:nf,Wind:of,Wine:hf,WineOff:rf,Workflow:cf,WrapText:lf,Wrench:df,X:yf,XCircle:pf,XOctagon:vf,XSquare:uf,Youtube:gf,Zap:ff,ZapOff:Mf,ZoomIn:mf,ZoomOut:xf},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=({icons:M={},nameAttr:d="data-lucide",attrs:w={}}={})=>{if(!Object.values(M).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const l=document.querySelectorAll(`[${d}]`);if(Array.from(l).forEach(b=>ce(b,{nameAttr:d,icons:M,attrs:w})),d==="data-lucide"){const b=document.querySelectorAll("[icon-name]");b.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(b).forEach(T=>ce(T,{nameAttr:"icon-name",icons:M,attrs:w})))}};var c9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cf(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var Sf=!!(typeof window<"u"&&window.document&&window.document.createElement),Lf=Sf;const _1=Cf(Lf);var Af=typeof global=="object"&&global&&global.Object===Object&&global;const Hf=Af;var Ef=typeof self=="object"&&self&&self.Object===Object&&self,Vf=Hf||Ef||Function("return this")();const r2=Vf;var Of=r2.Symbol;const l1=Of;var h2=Object.prototype,Tf=h2.hasOwnProperty,kf=h2.toString,Kt=l1?l1.toStringTag:void 0;function If(M){var d=Tf.call(M,Kt),w=M[Kt];try{M[Kt]=void 0;var l=!0}catch{}var b=kf.call(M);return l&&(d?M[Kt]=w:delete M[Kt]),b}var Pf=Object.prototype,Bf=Pf.toString;function _f(M){return Bf.call(M)}var Df="[object Null]",Zf="[object Undefined]",e2=l1?l1.toStringTag:void 0;function qf(M){return M==null?M===void 0?Zf:Df:e2&&e2 in Object(M)?If(M):_f(M)}function Nf(M){return M!=null&&typeof M=="object"}var zf="[object Symbol]";function Ff(M){return typeof M=="symbol"||Nf(M)&&qf(M)==zf}var Rf=/\s/;function jf(M){for(var d=M.length;d--&&Rf.test(M.charAt(d)););return d}var Wf=/^\s+/;function $f(M){return M&&M.slice(0,jf(M)+1).replace(Wf,"")}function d1(M){var d=typeof M;return M!=null&&(d=="object"||d=="function")}var a2=0/0,Uf=/^[-+]0x[0-9a-f]+$/i,Gf=/^0b[01]+$/i,Xf=/^0o[0-7]+$/i,Yf=parseInt;function n2(M){if(typeof M=="number")return M;if(Ff(M))return a2;if(d1(M)){var d=typeof M.valueOf=="function"?M.valueOf():M;M=d1(d)?d+"":d}if(typeof M!="string")return M===0?M:+M;M=$f(M);var w=Gf.test(M);return w||Xf.test(M)?Yf(M.slice(2),w?2:8):Uf.test(M)?a2:+M}var Kf=function(){return r2.Date.now()};const k1=Kf;var Jf="Expected a function",Qf=Math.max,t9=Math.min;function h1(M,d,w){var l,b,T,C,m,A,f=0,H=!1,g=!1,x=!0;if(typeof M!="function")throw new TypeError(Jf);d=n2(d)||0,d1(w)&&(H=!!w.leading,g="maxWait"in w,T=g?Qf(n2(w.maxWait)||0,d):T,x="trailing"in w?!!w.trailing:x);function u(c){var y=l,O=b;return l=b=void 0,f=c,C=M.apply(O,y),C}function h(c){return f=c,m=setTimeout(a,d),H?u(c):C}function s(c){var y=c-A,O=c-f,L=d-y;return g?t9(L,T-O):L}function e(c){var y=c-A,O=c-f;return A===void 0||y>=d||y<0||g&&O>=T}function a(){var c=k1();if(e(c))return n(c);m=setTimeout(a,s(c))}function n(c){return m=void 0,x&&l?u(c):(l=b=void 0,C)}function i(){m!==void 0&&clearTimeout(m),f=0,l=A=b=m=void 0}function o(){return m===void 0?C:n(k1())}function r(){var c=k1(),y=e(c);if(l=arguments,b=this,A=c,y){if(m===void 0)return h(A);if(g)return clearTimeout(m),m=setTimeout(a,d),u(A)}return m===void 0&&(m=setTimeout(a,d)),C}return r.cancel=i,r.flush=o,r}var e9="Expected a function";function a9(M,d,w){var l=!0,b=!0;if(typeof M!="function")throw new TypeError(e9);return d1(w)&&(l="leading"in w?!!w.leading:l,b="trailing"in w?!!w.trailing:b),h1(M,d,{leading:l,maxWait:d,trailing:b})}var Wt=function(){return Wt=Object.assign||function(d){for(var w,l=1,b=arguments.length;l<b;l++){w=arguments[l];for(var T in w)Object.prototype.hasOwnProperty.call(w,T)&&(d[T]=w[T])}return d},Wt.apply(this,arguments)},jt=null,s2=null;_1&&window.addEventListener("resize",function(){s2!==window.devicePixelRatio&&(s2=window.devicePixelRatio,jt=null)});function i2(){if(jt===null){if(typeof document>"u")return jt=0,jt;var M=document.body,d=document.createElement("div");d.classList.add("simplebar-hide-scrollbar"),M.appendChild(d);var w=d.getBoundingClientRect().right;M.removeChild(d),jt=w}return jt}function c2(M){return!M||!M.ownerDocument||!M.ownerDocument.defaultView?window:M.ownerDocument.defaultView}function l2(M){return!M||!M.ownerDocument?document:M.ownerDocument}var d2=function(M){var d={},w=Array.prototype.reduce.call(M,function(l,b){var T=b.name.match(/data-simplebar-(.+)/);if(T){var C=T[1].replace(/\W+(.)/g,function(m,A){return A.toUpperCase()});switch(b.value){case"true":l[C]=!0;break;case"false":l[C]=!1;break;case void 0:l[C]=!0;break;default:l[C]=b.value}}return l},d);return w};function p2(M,d){var w;M&&(w=M.classList).add.apply(w,d.split(" "))}function v2(M,d){M&&d.split(" ").forEach(function(w){M.classList.remove(w)})}function u2(M){return".".concat(M.split(" ").join("."))}var n9=Object.freeze({__proto__:null,getElementWindow:c2,getElementDocument:l2,getOptions:d2,addClasses:p2,removeClasses:v2,classNamesToQuery:u2}),St=c2,I1=l2,s9=d2,Lt=p2,At=v2,it=u2,c1=function(){function M(d,w){w===void 0&&(w={});var l=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var b=St(l.el);l.scrollXTicking||(b.requestAnimationFrame(l.scrollX),l.scrollXTicking=!0),l.scrollYTicking||(b.requestAnimationFrame(l.scrollY),l.scrollYTicking=!0),l.isScrolling||(l.isScrolling=!0,Lt(l.el,l.classNames.scrolling)),l.showScrollbar("x"),l.showScrollbar("y"),l.onStopScrolling()},this.scrollX=function(){l.axis.x.isOverflowing&&l.positionScrollbar("x"),l.scrollXTicking=!1},this.scrollY=function(){l.axis.y.isOverflowing&&l.positionScrollbar("y"),l.scrollYTicking=!1},this._onStopScrolling=function(){At(l.el,l.classNames.scrolling),l.options.autoHide&&(l.hideScrollbar("x"),l.hideScrollbar("y")),l.isScrolling=!1},this.onMouseEnter=function(){l.isMouseEntering||(Lt(l.el,l.classNames.mouseEntered),l.showScrollbar("x"),l.showScrollbar("y"),l.isMouseEntering=!0),l.onMouseEntered()},this._onMouseEntered=function(){At(l.el,l.classNames.mouseEntered),l.options.autoHide&&(l.hideScrollbar("x"),l.hideScrollbar("y")),l.isMouseEntering=!1},this._onMouseMove=function(b){l.mouseX=b.clientX,l.mouseY=b.clientY,(l.axis.x.isOverflowing||l.axis.x.forceVisible)&&l.onMouseMoveForAxis("x"),(l.axis.y.isOverflowing||l.axis.y.forceVisible)&&l.onMouseMoveForAxis("y")},this.onMouseLeave=function(){l.onMouseMove.cancel(),(l.axis.x.isOverflowing||l.axis.x.forceVisible)&&l.onMouseLeaveForAxis("x"),(l.axis.y.isOverflowing||l.axis.y.forceVisible)&&l.onMouseLeaveForAxis("y"),l.mouseX=-1,l.mouseY=-1},this._onWindowResize=function(){l.scrollbarWidth=l.getScrollbarWidth(),l.hideNativeScrollbar()},this.onPointerEvent=function(b){if(!(!l.axis.x.track.el||!l.axis.y.track.el||!l.axis.x.scrollbar.el||!l.axis.y.scrollbar.el)){var T,C;l.axis.x.track.rect=l.axis.x.track.el.getBoundingClientRect(),l.axis.y.track.rect=l.axis.y.track.el.getBoundingClientRect(),(l.axis.x.isOverflowing||l.axis.x.forceVisible)&&(T=l.isWithinBounds(l.axis.x.track.rect)),(l.axis.y.isOverflowing||l.axis.y.forceVisible)&&(C=l.isWithinBounds(l.axis.y.track.rect)),(T||C)&&(b.stopPropagation(),b.type==="pointerdown"&&b.pointerType!=="touch"&&(T&&(l.axis.x.scrollbar.rect=l.axis.x.scrollbar.el.getBoundingClientRect(),l.isWithinBounds(l.axis.x.scrollbar.rect)?l.onDragStart(b,"x"):l.onTrackClick(b,"x")),C&&(l.axis.y.scrollbar.rect=l.axis.y.scrollbar.el.getBoundingClientRect(),l.isWithinBounds(l.axis.y.scrollbar.rect)?l.onDragStart(b,"y"):l.onTrackClick(b,"y"))))}},this.drag=function(b){var T,C,m,A,f,H,g,x,u,h,s;if(!(!l.draggedAxis||!l.contentWrapperEl)){var e,a=l.axis[l.draggedAxis].track,n=(C=(T=a.rect)===null||T===void 0?void 0:T[l.axis[l.draggedAxis].sizeAttr])!==null&&C!==void 0?C:0,i=l.axis[l.draggedAxis].scrollbar,o=(A=(m=l.contentWrapperEl)===null||m===void 0?void 0:m[l.axis[l.draggedAxis].scrollSizeAttr])!==null&&A!==void 0?A:0,r=parseInt((H=(f=l.elStyles)===null||f===void 0?void 0:f[l.axis[l.draggedAxis].sizeAttr])!==null&&H!==void 0?H:"0px",10);b.preventDefault(),b.stopPropagation(),l.draggedAxis==="y"?e=b.pageY:e=b.pageX;var c=e-((x=(g=a.rect)===null||g===void 0?void 0:g[l.axis[l.draggedAxis].offsetAttr])!==null&&x!==void 0?x:0)-l.axis[l.draggedAxis].dragOffset;c=l.draggedAxis==="x"&&l.isRtl?((h=(u=a.rect)===null||u===void 0?void 0:u[l.axis[l.draggedAxis].sizeAttr])!==null&&h!==void 0?h:0)-i.size-c:c;var y=c/(n-i.size),O=y*(o-r);l.draggedAxis==="x"&&l.isRtl&&(O=!((s=M.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?-O:O),l.contentWrapperEl[l.axis[l.draggedAxis].scrollOffsetAttr]=O}},this.onEndDrag=function(b){var T=I1(l.el),C=St(l.el);b.preventDefault(),b.stopPropagation(),At(l.el,l.classNames.dragging),T.removeEventListener("mousemove",l.drag,!0),T.removeEventListener("mouseup",l.onEndDrag,!0),l.removePreventClickId=C.setTimeout(function(){T.removeEventListener("click",l.preventClick,!0),T.removeEventListener("dblclick",l.preventClick,!0),l.removePreventClickId=null})},this.preventClick=function(b){b.preventDefault(),b.stopPropagation()},this.el=d,this.options=Wt(Wt({},M.defaultOptions),w),this.classNames=Wt(Wt({},M.defaultOptions.classNames),w.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=a9(this._onMouseMove,64),this.onWindowResize=h1(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=h1(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=h1(this._onMouseEntered,this.stopScrollDelay),this.init()}return M.getRtlHelpers=function(){if(M.rtlHelpers)return M.rtlHelpers;var d=document.createElement("div");d.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var w=d.firstElementChild,l=w==null?void 0:w.firstElementChild;if(!l)return null;document.body.appendChild(w),w.scrollLeft=0;var b=M.getOffset(w),T=M.getOffset(l);w.scrollLeft=-999;var C=M.getOffset(l);return document.body.removeChild(w),M.rtlHelpers={isScrollOriginAtZero:b.left!==T.left,isScrollingToNegative:T.left!==C.left},M.rtlHelpers},M.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:i2()}catch{return i2()}},M.getOffset=function(d){var w=d.getBoundingClientRect(),l=I1(d),b=St(d);return{top:w.top+(b.pageYOffset||l.documentElement.scrollTop),left:w.left+(b.pageXOffset||l.documentElement.scrollLeft)}},M.prototype.init=function(){_1&&(this.initDOM(),this.rtlHelpers=M.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},M.prototype.initDOM=function(){var d,w;this.wrapperEl=this.el.querySelector(it(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(it(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(it(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(it(this.classNames.offset)),this.maskEl=this.el.querySelector(it(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,it(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(it(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(it(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(it(this.classNames.track)).concat(it(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(it(this.classNames.track)).concat(it(this.classNames.vertical))),this.axis.x.scrollbar.el=((d=this.axis.x.track.el)===null||d===void 0?void 0:d.querySelector(it(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((w=this.axis.y.track.el)===null||w===void 0?void 0:w.querySelector(it(this.classNames.scrollbar)))||null,this.options.autoHide||(Lt(this.axis.x.scrollbar.el,this.classNames.visible),Lt(this.axis.y.scrollbar.el,this.classNames.visible))},M.prototype.initListeners=function(){var d=this,w,l=St(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(w=this.contentWrapperEl)===null||w===void 0||w.addEventListener("scroll",this.onScroll),l.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var b=!1,T=l.ResizeObserver||ResizeObserver;this.resizeObserver=new T(function(){b&&l.requestAnimationFrame(function(){d.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),l.requestAnimationFrame(function(){b=!0})}this.mutationObserver=new l.MutationObserver(function(){l.requestAnimationFrame(function(){d.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},M.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var d=St(this.el);this.elStyles=d.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var w=this.contentEl.offsetWidth,l=this.heightAutoObserverEl.offsetHeight<=1,b=this.heightAutoObserverEl.offsetWidth<=1||w>0,T=this.contentWrapperEl.offsetWidth,C=this.elStyles.overflowX,m=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var A=this.contentEl.scrollHeight,f=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=l?"auto":"100%",this.placeholderEl.style.width=b?"".concat(w||f,"px"):"auto",this.placeholderEl.style.height="".concat(A,"px");var H=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=w!==0&&f>w,this.axis.y.isOverflowing=A>H,this.axis.x.isOverflowing=C==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=m==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var g=this.axis.x.isOverflowing?this.scrollbarWidth:0,x=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&f>T-x,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&A>H-g,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},M.prototype.getScrollbarSize=function(d){var w,l;if(d===void 0&&(d="y"),!this.axis[d].isOverflowing||!this.contentEl)return 0;var b=this.contentEl[this.axis[d].scrollSizeAttr],T=(l=(w=this.axis[d].track.el)===null||w===void 0?void 0:w[this.axis[d].offsetSizeAttr])!==null&&l!==void 0?l:0,C=T/b,m;return m=Math.max(~~(C*T),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(m=Math.min(m,this.options.scrollbarMaxSize)),m},M.prototype.positionScrollbar=function(d){var w,l,b;d===void 0&&(d="y");var T=this.axis[d].scrollbar;if(!(!this.axis[d].isOverflowing||!this.contentWrapperEl||!T.el||!this.elStyles)){var C=this.contentWrapperEl[this.axis[d].scrollSizeAttr],m=((w=this.axis[d].track.el)===null||w===void 0?void 0:w[this.axis[d].offsetSizeAttr])||0,A=parseInt(this.elStyles[this.axis[d].sizeAttr],10),f=this.contentWrapperEl[this.axis[d].scrollOffsetAttr];f=d==="x"&&this.isRtl&&(!((l=M.getRtlHelpers())===null||l===void 0)&&l.isScrollOriginAtZero)?-f:f,d==="x"&&this.isRtl&&(f=!((b=M.getRtlHelpers())===null||b===void 0)&&b.isScrollingToNegative?f:-f);var H=f/(C-A),g=~~((m-T.size)*H);g=d==="x"&&this.isRtl?-g+(m-T.size):g,T.el.style.transform=d==="x"?"translate3d(".concat(g,"px, 0, 0)"):"translate3d(0, ".concat(g,"px, 0)")}},M.prototype.toggleTrackVisibility=function(d){d===void 0&&(d="y");var w=this.axis[d].track.el,l=this.axis[d].scrollbar.el;!w||!l||!this.contentWrapperEl||(this.axis[d].isOverflowing||this.axis[d].forceVisible?(w.style.visibility="visible",this.contentWrapperEl.style[this.axis[d].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(d))):(w.style.visibility="hidden",this.contentWrapperEl.style[this.axis[d].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(d))),this.axis[d].isOverflowing?l.style.display="block":l.style.display="none")},M.prototype.showScrollbar=function(d){d===void 0&&(d="y"),this.axis[d].isOverflowing&&!this.axis[d].scrollbar.isVisible&&(Lt(this.axis[d].scrollbar.el,this.classNames.visible),this.axis[d].scrollbar.isVisible=!0)},M.prototype.hideScrollbar=function(d){d===void 0&&(d="y"),this.axis[d].isOverflowing&&this.axis[d].scrollbar.isVisible&&(At(this.axis[d].scrollbar.el,this.classNames.visible),this.axis[d].scrollbar.isVisible=!1)},M.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},M.prototype.onMouseMoveForAxis=function(d){d===void 0&&(d="y");var w=this.axis[d];!w.track.el||!w.scrollbar.el||(w.track.rect=w.track.el.getBoundingClientRect(),w.scrollbar.rect=w.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(w.track.rect)?(this.showScrollbar(d),Lt(w.track.el,this.classNames.hover),this.isWithinBounds(w.scrollbar.rect)?Lt(w.scrollbar.el,this.classNames.hover):At(w.scrollbar.el,this.classNames.hover)):(At(w.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(d)))},M.prototype.onMouseLeaveForAxis=function(d){d===void 0&&(d="y"),At(this.axis[d].track.el,this.classNames.hover),At(this.axis[d].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(d)},M.prototype.onDragStart=function(d,w){var l;w===void 0&&(w="y");var b=I1(this.el),T=St(this.el),C=this.axis[w].scrollbar,m=w==="y"?d.pageY:d.pageX;this.axis[w].dragOffset=m-(((l=C.rect)===null||l===void 0?void 0:l[this.axis[w].offsetAttr])||0),this.draggedAxis=w,Lt(this.el,this.classNames.dragging),b.addEventListener("mousemove",this.drag,!0),b.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(b.addEventListener("click",this.preventClick,!0),b.addEventListener("dblclick",this.preventClick,!0)):(T.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},M.prototype.onTrackClick=function(d,w){var l=this,b,T,C,m;w===void 0&&(w="y");var A=this.axis[w];if(!(!this.options.clickOnTrack||!A.scrollbar.el||!this.contentWrapperEl)){d.preventDefault();var f=St(this.el);this.axis[w].scrollbar.rect=A.scrollbar.el.getBoundingClientRect();var H=this.axis[w].scrollbar,g=(T=(b=H.rect)===null||b===void 0?void 0:b[this.axis[w].offsetAttr])!==null&&T!==void 0?T:0,x=parseInt((m=(C=this.elStyles)===null||C===void 0?void 0:C[this.axis[w].sizeAttr])!==null&&m!==void 0?m:"0px",10),u=this.contentWrapperEl[this.axis[w].scrollOffsetAttr],h=w==="y"?this.mouseY-g:this.mouseX-g,s=h<0?-1:1,e=s===-1?u-x:u+x,a=40,n=function(){l.contentWrapperEl&&(s===-1?u>e&&(u-=a,l.contentWrapperEl[l.axis[w].scrollOffsetAttr]=u,f.requestAnimationFrame(n)):u<e&&(u+=a,l.contentWrapperEl[l.axis[w].scrollOffsetAttr]=u,f.requestAnimationFrame(n)))};n()}},M.prototype.getContentElement=function(){return this.contentEl},M.prototype.getScrollElement=function(){return this.contentWrapperEl},M.prototype.removeListeners=function(){var d=St(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),d.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},M.prototype.unMount=function(){this.removeListeners()},M.prototype.isWithinBounds=function(d){return this.mouseX>=d.left&&this.mouseX<=d.left+d.width&&this.mouseY>=d.top&&this.mouseY<=d.top+d.height},M.prototype.findChild=function(d,w){var l=d.matches||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector;return Array.prototype.filter.call(d.children,function(b){return l.call(b,w)})[0]},M.rtlHelpers=null,M.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},M.getOptions=s9,M.helpers=n9,M}(),B1=function(M,d){return B1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,l){w.__proto__=l}||function(w,l){for(var b in l)Object.prototype.hasOwnProperty.call(l,b)&&(w[b]=l[b])},B1(M,d)};function i9(M,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");B1(M,d);function w(){this.constructor=M}M.prototype=d===null?Object.create(d):(w.prototype=d.prototype,new w)}var y2=c1.helpers,P1=y2.getOptions,ct=y2.addClasses,g2=function(M){i9(d,M);function d(){for(var w=[],l=0;l<arguments.length;l++)w[l]=arguments[l];var b=M.apply(this,w)||this;return d.instances.set(w[0],b),b}return d.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(w){w.getAttribute("data-simplebar")!=="init"&&!d.instances.has(w)&&new d(w,P1(w.attributes))})},d.removeObserver=function(){var w;(w=d.globalObserver)===null||w===void 0||w.disconnect()},d.prototype.initDOM=function(){var w=this,l,b,T;if(!Array.prototype.filter.call(this.el.children,function(A){return A.classList.contains(w.classNames.wrapper)}).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),ct(this.wrapperEl,this.classNames.wrapper),ct(this.contentWrapperEl,this.classNames.contentWrapper),ct(this.offsetEl,this.classNames.offset),ct(this.maskEl,this.classNames.mask),ct(this.contentEl,this.classNames.contentEl),ct(this.placeholderEl,this.classNames.placeholder),ct(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),ct(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),(l=this.contentWrapperEl)===null||l===void 0||l.setAttribute("tabindex","0"),(b=this.contentWrapperEl)===null||b===void 0||b.setAttribute("role","region"),(T=this.contentWrapperEl)===null||T===void 0||T.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var C=document.createElement("div"),m=document.createElement("div");ct(C,this.classNames.track),ct(m,this.classNames.scrollbar),C.appendChild(m),this.axis.x.track.el=C.cloneNode(!0),ct(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=C.cloneNode(!0),ct(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}c1.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},d.prototype.unMount=function(){c1.prototype.unMount.call(this),d.instances.delete(this.el)},d.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),typeof MutationObserver<"u"&&(this.globalObserver=new MutationObserver(d.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},d.handleMutations=function(w){w.forEach(function(l){l.addedNodes.forEach(function(b){b.nodeType===1&&(b.hasAttribute("data-simplebar")?!d.instances.has(b)&&document.documentElement.contains(b)&&new d(b,P1(b.attributes)):b.querySelectorAll("[data-simplebar]").forEach(function(T){T.getAttribute("data-simplebar")!=="init"&&!d.instances.has(T)&&document.documentElement.contains(T)&&new d(T,P1(T.attributes))}))}),l.removedNodes.forEach(function(b){b.nodeType===1&&(b.getAttribute("data-simplebar")==="init"?d.instances.has(b)&&!document.documentElement.contains(b)&&d.instances.get(b).unMount():Array.prototype.forEach.call(b.querySelectorAll('[data-simplebar="init"]'),function(T){d.instances.has(T)&&!document.documentElement.contains(T)&&d.instances.get(T).unMount()}))})})},d.instances=new WeakMap,d}(c1);_1&&g2.initHtmlApi();var o9={exports:{}};(function(M,d){(function(w,l){M.exports=l()})(self,()=>(()=>{var w={492:(C,m,A)=>{A.r(m),A.d(m,{afterMain:()=>nt,afterRead:()=>L,afterWrite:()=>Ht,applyStyles:()=>v1,arrow:()=>F1,auto:()=>u,basePlacements:()=>h,beforeMain:()=>_,beforeRead:()=>y,beforeWrite:()=>rt,bottom:()=>H,clippingParents:()=>a,computeStyles:()=>M1,createPopper:()=>L2,createPopperBase:()=>S2,createPopperLite:()=>A2,detectOverflow:()=>Dt,end:()=>e,eventListeners:()=>f1,flip:()=>G1,hide:()=>K1,left:()=>x,main:()=>J,modifierPhases:()=>$t,offset:()=>J1,placements:()=>c,popper:()=>i,popperGenerator:()=>a1,popperOffsets:()=>C1,preventOverflow:()=>Q1,read:()=>O,reference:()=>o,right:()=>g,start:()=>s,top:()=>f,variationPlacements:()=>r,viewport:()=>n,write:()=>It});var f="top",H="bottom",g="right",x="left",u="auto",h=[f,H,g,x],s="start",e="end",a="clippingParents",n="viewport",i="popper",o="reference",r=h.reduce(function(v,p){return v.concat([p+"-"+s,p+"-"+e])},[]),c=[].concat(h,[u]).reduce(function(v,p){return v.concat([p,p+"-"+s,p+"-"+e])},[]),y="beforeRead",O="read",L="afterRead",_="beforeMain",J="main",nt="afterMain",rt="beforeWrite",It="write",Ht="afterWrite",$t=[y,O,L,_,J,nt,rt,It,Ht];function yt(v){return v?(v.nodeName||"").toLowerCase():null}function ot(v){if(v==null)return window;if(v.toString()!=="[object Window]"){var p=v.ownerDocument;return p&&p.defaultView||window}return v}function Et(v){return v instanceof ot(v).Element||v instanceof Element}function ht(v){return v instanceof ot(v).HTMLElement||v instanceof HTMLElement}function p1(v){return typeof ShadowRoot<"u"&&(v instanceof ot(v).ShadowRoot||v instanceof ShadowRoot)}const v1={name:"applyStyles",enabled:!0,phase:"write",fn:function(v){var p=v.state;Object.keys(p.elements).forEach(function(S){var E=p.styles[S]||{},P=p.attributes[S]||{},V=p.elements[S];ht(V)&&yt(V)&&(Object.assign(V.style,E),Object.keys(P).forEach(function(B){var k=P[B];k===!1?V.removeAttribute(B):V.setAttribute(B,k===!0?"":k)}))})},effect:function(v){var p=v.state,S={popper:{position:p.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(p.elements.popper.style,S.popper),p.styles=S,p.elements.arrow&&Object.assign(p.elements.arrow.style,S.arrow),function(){Object.keys(p.elements).forEach(function(E){var P=p.elements[E],V=p.attributes[E]||{},B=Object.keys(p.styles.hasOwnProperty(E)?p.styles[E]:S[E]).reduce(function(k,I){return k[I]="",k},{});ht(P)&&yt(P)&&(Object.assign(P.style,B),Object.keys(V).forEach(function(k){P.removeAttribute(k)}))})}},requires:["computeStyles"]};function gt(v){return v.split("-")[0]}var Vt=Math.max,Jt=Math.min,Pt=Math.round;function u1(){var v=navigator.userAgentData;return v!=null&&v.brands&&Array.isArray(v.brands)?v.brands.map(function(p){return p.brand+"/"+p.version}).join(" "):navigator.userAgent}function D1(){return!/^((?!chrome|android).)*safari/i.test(u1())}function Bt(v,p,S){p===void 0&&(p=!1),S===void 0&&(S=!1);var E=v.getBoundingClientRect(),P=1,V=1;p&&ht(v)&&(P=v.offsetWidth>0&&Pt(E.width)/v.offsetWidth||1,V=v.offsetHeight>0&&Pt(E.height)/v.offsetHeight||1);var B=(Et(v)?ot(v):window).visualViewport,k=!D1()&&S,I=(E.left+(k&&B?B.offsetLeft:0))/P,q=(E.top+(k&&B?B.offsetTop:0))/V,Z=E.width/P,D=E.height/V;return{width:Z,height:D,top:q,right:I+Z,bottom:q+D,left:I,x:I,y:q}}function y1(v){var p=Bt(v),S=v.offsetWidth,E=v.offsetHeight;return Math.abs(p.width-S)<=1&&(S=p.width),Math.abs(p.height-E)<=1&&(E=p.height),{x:v.offsetLeft,y:v.offsetTop,width:S,height:E}}function Z1(v,p){var S=p.getRootNode&&p.getRootNode();if(v.contains(p))return!0;if(S&&p1(S)){var E=p;do{if(E&&v.isSameNode(E))return!0;E=E.parentNode||E.host}while(E)}return!1}function mt(v){return ot(v).getComputedStyle(v)}function M2(v){return["table","td","th"].indexOf(yt(v))>=0}function wt(v){return((Et(v)?v.ownerDocument:v.document)||window.document).documentElement}function Qt(v){return yt(v)==="html"?v:v.assignedSlot||v.parentNode||(p1(v)?v.host:null)||wt(v)}function q1(v){return ht(v)&&mt(v).position!=="fixed"?v.offsetParent:null}function Ut(v){for(var p=ot(v),S=q1(v);S&&M2(S)&&mt(S).position==="static";)S=q1(S);return S&&(yt(S)==="html"||yt(S)==="body"&&mt(S).position==="static")?p:S||function(E){var P=/firefox/i.test(u1());if(/Trident/i.test(u1())&&ht(E)&&mt(E).position==="fixed")return null;var V=Qt(E);for(p1(V)&&(V=V.host);ht(V)&&["html","body"].indexOf(yt(V))<0;){var B=mt(V);if(B.transform!=="none"||B.perspective!=="none"||B.contain==="paint"||["transform","perspective"].indexOf(B.willChange)!==-1||P&&B.willChange==="filter"||P&&B.filter&&B.filter!=="none")return V;V=V.parentNode}return null}(v)||p}function g1(v){return["top","bottom"].indexOf(v)>=0?"x":"y"}function Gt(v,p,S){return Vt(v,Jt(p,S))}function N1(v){return Object.assign({},{top:0,right:0,bottom:0,left:0},v)}function z1(v,p){return p.reduce(function(S,E){return S[E]=v,S},{})}const F1={name:"arrow",enabled:!0,phase:"main",fn:function(v){var p,S=v.state,E=v.name,P=v.options,V=S.elements.arrow,B=S.modifiersData.popperOffsets,k=gt(S.placement),I=g1(k),q=[x,g].indexOf(k)>=0?"height":"width";if(V&&B){var Z=function(X,U){return N1(typeof(X=typeof X=="function"?X(Object.assign({},U.rects,{placement:U.placement})):X)!="number"?X:z1(X,h))}(P.padding,S),D=y1(V),Y=I==="y"?f:x,F=I==="y"?H:g,K=S.rects.reference[q]+S.rects.reference[I]-B[I]-S.rects.popper[q],G=B[I]-S.rects.reference[I],z=Ut(V),tt=z?I==="y"?z.clientHeight||0:z.clientWidth||0:0,Q=K/2-G/2,j=Z[Y],W=tt-D[q]-Z[F],N=tt/2-D[q]/2+Q,R=Gt(j,N,W),$=I;S.modifiersData[E]=((p={})[$]=R,p.centerOffset=R-N,p)}},effect:function(v){var p=v.state,S=v.options.element,E=S===void 0?"[data-popper-arrow]":S;E!=null&&(typeof E!="string"||(E=p.elements.popper.querySelector(E)))&&Z1(p.elements.popper,E)&&(p.elements.arrow=E)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _t(v){return v.split("-")[1]}var f2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function R1(v){var p,S=v.popper,E=v.popperRect,P=v.placement,V=v.variation,B=v.offsets,k=v.position,I=v.gpuAcceleration,q=v.adaptive,Z=v.roundOffsets,D=v.isFixed,Y=B.x,F=Y===void 0?0:Y,K=B.y,G=K===void 0?0:K,z=typeof Z=="function"?Z({x:F,y:G}):{x:F,y:G};F=z.x,G=z.y;var tt=B.hasOwnProperty("x"),Q=B.hasOwnProperty("y"),j=x,W=f,N=window;if(q){var R=Ut(S),$="clientHeight",X="clientWidth";R===ot(S)&&mt(R=wt(S)).position!=="static"&&k==="absolute"&&($="scrollHeight",X="scrollWidth"),(P===f||(P===x||P===g)&&V===e)&&(W=H,G-=(D&&R===N&&N.visualViewport?N.visualViewport.height:R[$])-E.height,G*=I?1:-1),(P===x||(P===f||P===H)&&V===e)&&(j=g,F-=(D&&R===N&&N.visualViewport?N.visualViewport.width:R[X])-E.width,F*=I?1:-1)}var U,et=Object.assign({position:k},q&&f2),st=Z===!0?function(lt,dt){var xt=lt.x,Mt=lt.y,at=dt.devicePixelRatio||1;return{x:Pt(xt*at)/at||0,y:Pt(Mt*at)/at||0}}({x:F,y:G},ot(S)):{x:F,y:G};return F=st.x,G=st.y,I?Object.assign({},et,((U={})[W]=Q?"0":"",U[j]=tt?"0":"",U.transform=(N.devicePixelRatio||1)<=1?"translate("+F+"px, "+G+"px)":"translate3d("+F+"px, "+G+"px, 0)",U)):Object.assign({},et,((p={})[W]=Q?G+"px":"",p[j]=tt?F+"px":"",p.transform="",p))}const M1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(v){var p=v.state,S=v.options,E=S.gpuAcceleration,P=E===void 0||E,V=S.adaptive,B=V===void 0||V,k=S.roundOffsets,I=k===void 0||k,q={placement:gt(p.placement),variation:_t(p.placement),popper:p.elements.popper,popperRect:p.rects.popper,gpuAcceleration:P,isFixed:p.options.strategy==="fixed"};p.modifiersData.popperOffsets!=null&&(p.styles.popper=Object.assign({},p.styles.popper,R1(Object.assign({},q,{offsets:p.modifiersData.popperOffsets,position:p.options.strategy,adaptive:B,roundOffsets:I})))),p.modifiersData.arrow!=null&&(p.styles.arrow=Object.assign({},p.styles.arrow,R1(Object.assign({},q,{offsets:p.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:I})))),p.attributes.popper=Object.assign({},p.attributes.popper,{"data-popper-placement":p.placement})},data:{}};var t1={passive:!0};const f1={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(v){var p=v.state,S=v.instance,E=v.options,P=E.scroll,V=P===void 0||P,B=E.resize,k=B===void 0||B,I=ot(p.elements.popper),q=[].concat(p.scrollParents.reference,p.scrollParents.popper);return V&&q.forEach(function(Z){Z.addEventListener("scroll",S.update,t1)}),k&&I.addEventListener("resize",S.update,t1),function(){V&&q.forEach(function(Z){Z.removeEventListener("scroll",S.update,t1)}),k&&I.removeEventListener("resize",S.update,t1)}},data:{}};var m2={left:"right",right:"left",bottom:"top",top:"bottom"};function e1(v){return v.replace(/left|right|bottom|top/g,function(p){return m2[p]})}var x2={start:"end",end:"start"};function j1(v){return v.replace(/start|end/g,function(p){return x2[p]})}function m1(v){var p=ot(v);return{scrollLeft:p.pageXOffset,scrollTop:p.pageYOffset}}function x1(v){return Bt(wt(v)).left+m1(v).scrollLeft}function w1(v){var p=mt(v),S=p.overflow,E=p.overflowX,P=p.overflowY;return/auto|scroll|overlay|hidden/.test(S+P+E)}function W1(v){return["html","body","#document"].indexOf(yt(v))>=0?v.ownerDocument.body:ht(v)&&w1(v)?v:W1(Qt(v))}function Xt(v,p){var S;p===void 0&&(p=[]);var E=W1(v),P=E===((S=v.ownerDocument)==null?void 0:S.body),V=ot(E),B=P?[V].concat(V.visualViewport||[],w1(E)?E:[]):E,k=p.concat(B);return P?k:k.concat(Xt(Qt(B)))}function b1(v){return Object.assign({},v,{left:v.x,top:v.y,right:v.x+v.width,bottom:v.y+v.height})}function $1(v,p,S){return p===n?b1(function(E,P){var V=ot(E),B=wt(E),k=V.visualViewport,I=B.clientWidth,q=B.clientHeight,Z=0,D=0;if(k){I=k.width,q=k.height;var Y=D1();(Y||!Y&&P==="fixed")&&(Z=k.offsetLeft,D=k.offsetTop)}return{width:I,height:q,x:Z+x1(E),y:D}}(v,S)):Et(p)?function(E,P){var V=Bt(E,!1,P==="fixed");return V.top=V.top+E.clientTop,V.left=V.left+E.clientLeft,V.bottom=V.top+E.clientHeight,V.right=V.left+E.clientWidth,V.width=E.clientWidth,V.height=E.clientHeight,V.x=V.left,V.y=V.top,V}(p,S):b1(function(E){var P,V=wt(E),B=m1(E),k=(P=E.ownerDocument)==null?void 0:P.body,I=Vt(V.scrollWidth,V.clientWidth,k?k.scrollWidth:0,k?k.clientWidth:0),q=Vt(V.scrollHeight,V.clientHeight,k?k.scrollHeight:0,k?k.clientHeight:0),Z=-B.scrollLeft+x1(E),D=-B.scrollTop;return mt(k||V).direction==="rtl"&&(Z+=Vt(V.clientWidth,k?k.clientWidth:0)-I),{width:I,height:q,x:Z,y:D}}(wt(v)))}function w2(v,p,S,E){var P=p==="clippingParents"?function(I){var q=Xt(Qt(I)),Z=["absolute","fixed"].indexOf(mt(I).position)>=0&&ht(I)?Ut(I):I;return Et(Z)?q.filter(function(D){return Et(D)&&Z1(D,Z)&&yt(D)!=="body"}):[]}(v):[].concat(p),V=[].concat(P,[S]),B=V[0],k=V.reduce(function(I,q){var Z=$1(v,q,E);return I.top=Vt(Z.top,I.top),I.right=Jt(Z.right,I.right),I.bottom=Jt(Z.bottom,I.bottom),I.left=Vt(Z.left,I.left),I},$1(v,B,E));return k.width=k.right-k.left,k.height=k.bottom-k.top,k.x=k.left,k.y=k.top,k}function U1(v){var p,S=v.reference,E=v.element,P=v.placement,V=P?gt(P):null,B=P?_t(P):null,k=S.x+S.width/2-E.width/2,I=S.y+S.height/2-E.height/2;switch(V){case f:p={x:k,y:S.y-E.height};break;case H:p={x:k,y:S.y+S.height};break;case g:p={x:S.x+S.width,y:I};break;case x:p={x:S.x-E.width,y:I};break;default:p={x:S.x,y:S.y}}var q=V?g1(V):null;if(q!=null){var Z=q==="y"?"height":"width";switch(B){case s:p[q]=p[q]-(S[Z]/2-E[Z]/2);break;case e:p[q]=p[q]+(S[Z]/2-E[Z]/2)}}return p}function Dt(v,p){p===void 0&&(p={});var S=p,E=S.placement,P=E===void 0?v.placement:E,V=S.strategy,B=V===void 0?v.strategy:V,k=S.boundary,I=k===void 0?a:k,q=S.rootBoundary,Z=q===void 0?n:q,D=S.elementContext,Y=D===void 0?i:D,F=S.altBoundary,K=F!==void 0&&F,G=S.padding,z=G===void 0?0:G,tt=N1(typeof z!="number"?z:z1(z,h)),Q=Y===i?o:i,j=v.rects.popper,W=v.elements[K?Q:Y],N=w2(Et(W)?W:W.contextElement||wt(v.elements.popper),I,Z,B),R=Bt(v.elements.reference),$=U1({reference:R,element:j,strategy:"absolute",placement:P}),X=b1(Object.assign({},j,$)),U=Y===i?X:R,et={top:N.top-U.top+tt.top,bottom:U.bottom-N.bottom+tt.bottom,left:N.left-U.left+tt.left,right:U.right-N.right+tt.right},st=v.modifiersData.offset;if(Y===i&&st){var lt=st[P];Object.keys(et).forEach(function(dt){var xt=[g,H].indexOf(dt)>=0?1:-1,Mt=[f,H].indexOf(dt)>=0?"y":"x";et[dt]+=lt[Mt]*xt})}return et}const G1={name:"flip",enabled:!0,phase:"main",fn:function(v){var p=v.state,S=v.options,E=v.name;if(!p.modifiersData[E]._skip){for(var P=S.mainAxis,V=P===void 0||P,B=S.altAxis,k=B===void 0||B,I=S.fallbackPlacements,q=S.padding,Z=S.boundary,D=S.rootBoundary,Y=S.altBoundary,F=S.flipVariations,K=F===void 0||F,G=S.allowedAutoPlacements,z=p.options.placement,tt=gt(z),Q=I||(tt===z||!K?[e1(z)]:function(pt){if(gt(pt)===u)return[];var vt=e1(pt);return[j1(pt),vt,j1(vt)]}(z)),j=[z].concat(Q).reduce(function(pt,vt){return pt.concat(gt(vt)===u?function(qt,Ct){Ct===void 0&&(Ct={});var ut=Ct,s1=ut.placement,i1=ut.boundary,Nt=ut.rootBoundary,S1=ut.padding,L1=ut.flipVariations,zt=ut.allowedAutoPlacements,A1=zt===void 0?c:zt,Yt=_t(s1),o1=Yt?L1?r:r.filter(function(ft){return _t(ft)===Yt}):h,Ft=o1.filter(function(ft){return A1.indexOf(ft)>=0});Ft.length===0&&(Ft=o1);var Rt=Ft.reduce(function(ft,Tt){return ft[Tt]=Dt(qt,{placement:Tt,boundary:i1,rootBoundary:Nt,padding:S1})[gt(Tt)],ft},{});return Object.keys(Rt).sort(function(ft,Tt){return Rt[ft]-Rt[Tt]})}(p,{placement:vt,boundary:Z,rootBoundary:D,padding:q,flipVariations:K,allowedAutoPlacements:G}):vt)},[]),W=p.rects.reference,N=p.rects.popper,R=new Map,$=!0,X=j[0],U=0;U<j.length;U++){var et=j[U],st=gt(et),lt=_t(et)===s,dt=[f,H].indexOf(st)>=0,xt=dt?"width":"height",Mt=Dt(p,{placement:et,boundary:Z,rootBoundary:D,altBoundary:Y,padding:q}),at=dt?lt?g:x:lt?H:f;W[xt]>N[xt]&&(at=e1(at));var bt=e1(at),Ot=[];if(V&&Ot.push(Mt[st]<=0),k&&Ot.push(Mt[at]<=0,Mt[bt]<=0),Ot.every(function(pt){return pt})){X=et,$=!1;break}R.set(et,Ot)}if($)for(var n1=function(pt){var vt=j.find(function(qt){var Ct=R.get(qt);if(Ct)return Ct.slice(0,pt).every(function(ut){return ut})});if(vt)return X=vt,"break"},Zt=K?3:1;Zt>0&&n1(Zt)!=="break";Zt--);p.placement!==X&&(p.modifiersData[E]._skip=!0,p.placement=X,p.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function X1(v,p,S){return S===void 0&&(S={x:0,y:0}),{top:v.top-p.height-S.y,right:v.right-p.width+S.x,bottom:v.bottom-p.height+S.y,left:v.left-p.width-S.x}}function Y1(v){return[f,g,H,x].some(function(p){return v[p]>=0})}const K1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(v){var p=v.state,S=v.name,E=p.rects.reference,P=p.rects.popper,V=p.modifiersData.preventOverflow,B=Dt(p,{elementContext:"reference"}),k=Dt(p,{altBoundary:!0}),I=X1(B,E),q=X1(k,P,V),Z=Y1(I),D=Y1(q);p.modifiersData[S]={referenceClippingOffsets:I,popperEscapeOffsets:q,isReferenceHidden:Z,hasPopperEscaped:D},p.attributes.popper=Object.assign({},p.attributes.popper,{"data-popper-reference-hidden":Z,"data-popper-escaped":D})}},J1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(v){var p=v.state,S=v.options,E=v.name,P=S.offset,V=P===void 0?[0,0]:P,B=c.reduce(function(Z,D){return Z[D]=function(Y,F,K){var G=gt(Y),z=[x,f].indexOf(G)>=0?-1:1,tt=typeof K=="function"?K(Object.assign({},F,{placement:Y})):K,Q=tt[0],j=tt[1];return Q=Q||0,j=(j||0)*z,[x,g].indexOf(G)>=0?{x:j,y:Q}:{x:Q,y:j}}(D,p.rects,V),Z},{}),k=B[p.placement],I=k.x,q=k.y;p.modifiersData.popperOffsets!=null&&(p.modifiersData.popperOffsets.x+=I,p.modifiersData.popperOffsets.y+=q),p.modifiersData[E]=B}},C1={name:"popperOffsets",enabled:!0,phase:"read",fn:function(v){var p=v.state,S=v.name;p.modifiersData[S]=U1({reference:p.rects.reference,element:p.rects.popper,strategy:"absolute",placement:p.placement})},data:{}},Q1={name:"preventOverflow",enabled:!0,phase:"main",fn:function(v){var p=v.state,S=v.options,E=v.name,P=S.mainAxis,V=P===void 0||P,B=S.altAxis,k=B!==void 0&&B,I=S.boundary,q=S.rootBoundary,Z=S.altBoundary,D=S.padding,Y=S.tether,F=Y===void 0||Y,K=S.tetherOffset,G=K===void 0?0:K,z=Dt(p,{boundary:I,rootBoundary:q,padding:D,altBoundary:Z}),tt=gt(p.placement),Q=_t(p.placement),j=!Q,W=g1(tt),N=W==="x"?"y":"x",R=p.modifiersData.popperOffsets,$=p.rects.reference,X=p.rects.popper,U=typeof G=="function"?G(Object.assign({},p.rects,{placement:p.placement})):G,et=typeof U=="number"?{mainAxis:U,altAxis:U}:Object.assign({mainAxis:0,altAxis:0},U),st=p.modifiersData.offset?p.modifiersData.offset[p.placement]:null,lt={x:0,y:0};if(R){if(V){var dt,xt=W==="y"?f:x,Mt=W==="y"?H:g,at=W==="y"?"height":"width",bt=R[W],Ot=bt+z[xt],n1=bt-z[Mt],Zt=F?-X[at]/2:0,pt=Q===s?$[at]:X[at],vt=Q===s?-X[at]:-$[at],qt=p.elements.arrow,Ct=F&&qt?y1(qt):{width:0,height:0},ut=p.modifiersData["arrow#persistent"]?p.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},s1=ut[xt],i1=ut[Mt],Nt=Gt(0,$[at],Ct[at]),S1=j?$[at]/2-Zt-Nt-s1-et.mainAxis:pt-Nt-s1-et.mainAxis,L1=j?-$[at]/2+Zt+Nt+i1+et.mainAxis:vt+Nt+i1+et.mainAxis,zt=p.elements.arrow&&Ut(p.elements.arrow),A1=zt?W==="y"?zt.clientTop||0:zt.clientLeft||0:0,Yt=(dt=st==null?void 0:st[W])!=null?dt:0,o1=bt+L1-Yt,Ft=Gt(F?Jt(Ot,bt+S1-Yt-A1):Ot,bt,F?Vt(n1,o1):n1);R[W]=Ft,lt[W]=Ft-bt}if(k){var Rt,ft=W==="x"?f:x,Tt=W==="x"?H:g,kt=R[N],r1=N==="y"?"height":"width",ae=kt+z[ft],ne=kt-z[Tt],H1=[f,x].indexOf(tt)!==-1,se=(Rt=st==null?void 0:st[N])!=null?Rt:0,ie=H1?ae:kt-$[r1]-X[r1]-se+et.altAxis,oe=H1?kt+$[r1]+X[r1]-se-et.altAxis:ne,re=F&&H1?function(H2,E2,E1){var he=Gt(H2,E2,E1);return he>E1?E1:he}(ie,kt,oe):Gt(F?ie:ae,kt,F?oe:ne);R[N]=re,lt[N]=re-kt}p.modifiersData[E]=lt}},requiresIfExists:["offset"]};function b2(v,p,S){S===void 0&&(S=!1);var E,P,V=ht(p),B=ht(p)&&function(D){var Y=D.getBoundingClientRect(),F=Pt(Y.width)/D.offsetWidth||1,K=Pt(Y.height)/D.offsetHeight||1;return F!==1||K!==1}(p),k=wt(p),I=Bt(v,B,S),q={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(V||!V&&!S)&&((yt(p)!=="body"||w1(k))&&(q=(E=p)!==ot(E)&&ht(E)?{scrollLeft:(P=E).scrollLeft,scrollTop:P.scrollTop}:m1(E)),ht(p)?((Z=Bt(p,!0)).x+=p.clientLeft,Z.y+=p.clientTop):k&&(Z.x=x1(k))),{x:I.left+q.scrollLeft-Z.x,y:I.top+q.scrollTop-Z.y,width:I.width,height:I.height}}function C2(v){var p=new Map,S=new Set,E=[];function P(V){S.add(V.name),[].concat(V.requires||[],V.requiresIfExists||[]).forEach(function(B){if(!S.has(B)){var k=p.get(B);k&&P(k)}}),E.push(V)}return v.forEach(function(V){p.set(V.name,V)}),v.forEach(function(V){S.has(V.name)||P(V)}),E}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ee(){for(var v=arguments.length,p=new Array(v),S=0;S<v;S++)p[S]=arguments[S];return!p.some(function(E){return!(E&&typeof E.getBoundingClientRect=="function")})}function a1(v){v===void 0&&(v={});var p=v,S=p.defaultModifiers,E=S===void 0?[]:S,P=p.defaultOptions,V=P===void 0?te:P;return function(B,k,I){I===void 0&&(I=V);var q,Z,D={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,V),modifiersData:{},elements:{reference:B,popper:k},attributes:{},styles:{}},Y=[],F=!1,K={state:D,setOptions:function(z){var tt=typeof z=="function"?z(D.options):z;G(),D.options=Object.assign({},V,D.options,tt),D.scrollParents={reference:Et(B)?Xt(B):B.contextElement?Xt(B.contextElement):[],popper:Xt(k)};var Q,j,W=function(N){var R=C2(N);return $t.reduce(function($,X){return $.concat(R.filter(function(U){return U.phase===X}))},[])}((Q=[].concat(E,D.options.modifiers),j=Q.reduce(function(N,R){var $=N[R.name];return N[R.name]=$?Object.assign({},$,R,{options:Object.assign({},$.options,R.options),data:Object.assign({},$.data,R.data)}):R,N},{}),Object.keys(j).map(function(N){return j[N]})));return D.orderedModifiers=W.filter(function(N){return N.enabled}),D.orderedModifiers.forEach(function(N){var R=N.name,$=N.options,X=$===void 0?{}:$,U=N.effect;if(typeof U=="function"){var et=U({state:D,name:R,instance:K,options:X}),st=function(){};Y.push(et||st)}}),K.update()},forceUpdate:function(){if(!F){var z=D.elements,tt=z.reference,Q=z.popper;if(ee(tt,Q)){D.rects={reference:b2(tt,Ut(Q),D.options.strategy==="fixed"),popper:y1(Q)},D.reset=!1,D.placement=D.options.placement,D.orderedModifiers.forEach(function(U){return D.modifiersData[U.name]=Object.assign({},U.data)});for(var j=0;j<D.orderedModifiers.length;j++)if(D.reset!==!0){var W=D.orderedModifiers[j],N=W.fn,R=W.options,$=R===void 0?{}:R,X=W.name;typeof N=="function"&&(D=N({state:D,options:$,name:X,instance:K})||D)}else D.reset=!1,j=-1}}},update:(q=function(){return new Promise(function(z){K.forceUpdate(),z(D)})},function(){return Z||(Z=new Promise(function(z){Promise.resolve().then(function(){Z=void 0,z(q())})})),Z}),destroy:function(){G(),F=!0}};if(!ee(B,k))return K;function G(){Y.forEach(function(z){return z()}),Y=[]}return K.setOptions(I).then(function(z){!F&&I.onFirstUpdate&&I.onFirstUpdate(z)}),K}}var S2=a1(),L2=a1({defaultModifiers:[f1,C1,M1,v1,J1,G1,Q1,F1,K1]}),A2=a1({defaultModifiers:[f1,C1,M1,v1]})},190:(C,m)=>{Object.defineProperty(m,"__esModule",{value:!0}),m.COMBO_BOX_ACCESSIBILITY_KEY_SET=m.SELECT_ACCESSIBILITY_KEY_SET=m.TABS_ACCESSIBILITY_KEY_SET=m.OVERLAY_ACCESSIBILITY_KEY_SET=m.DROPDOWN_ACCESSIBILITY_KEY_SET=m.POSITIONS=void 0,m.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},m.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],m.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],m.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],m.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],m.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"]},460:function(C,m,A){/*
 * HSAccordion
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)});Object.defineProperty(m,"__esModule",{value:!0});var g=A(969),x=function(u){function h(s,e,a){var n=u.call(this,s,e,a)||this;return n.toggle=n.el.querySelector(".hs-accordion-toggle")||null,n.content=n.el.querySelector(".hs-accordion-content")||null,n.group=n.el.closest(".hs-accordion-group")||null,n.isAlwaysOpened=n.group.hasAttribute("data-hs-accordion-always-open")||!1,n.toggle&&n.content&&n.init(),n}return H(h,u),h.prototype.init=function(){var s=this;this.createCollection(window.$hsAccordionCollection,this),this.toggle.addEventListener("click",function(){s.el.classList.contains("active")?s.hide():s.show()})},h.prototype.show=function(){var s=this;if(this.group&&!this.isAlwaysOpened&&this.group.querySelector(".hs-accordion.active")&&this.group.querySelector(".hs-accordion.active")!==this.el&&window.$hsAccordionCollection.find(function(e){return e.element.el===s.group.querySelector(".hs-accordion.active")}).element.hide(),this.el.classList.contains("active"))return!1;this.el.classList.add("active"),this.content.style.display="block",this.content.style.height="0",setTimeout(function(){s.content.style.height="".concat(s.content.scrollHeight,"px")}),(0,g.afterTransition)(this.content,function(){s.content.style.display="block",s.content.style.height="",s.fireEvent("open",s.el),(0,g.dispatch)("open.hs.accordion",s.el,s.el)})},h.prototype.hide=function(){var s=this;if(!this.el.classList.contains("active"))return!1;this.el.classList.remove("active"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){s.content.style.height="0"}),(0,g.afterTransition)(this.content,function(){s.content.style.display="",s.content.style.height="0",s.fireEvent("close",s.el),(0,g.dispatch)("close.hs.accordion",s.el,s.el)})},h.getInstance=function(s,e){var a=window.$hsAccordionCollection.find(function(n){return n.element.el===(typeof s=="string"?document.querySelector(s):s)});return a?e?a:a.element.el:null},h.show=function(s){var e=window.$hsAccordionCollection.find(function(a){return a.element.el===(typeof s=="string"?document.querySelector(s):s)});e&&e.element.content.style.display!=="block"&&e.element.show()},h.hide=function(s){var e=window.$hsAccordionCollection.find(function(a){return a.element.el===(typeof s=="string"?document.querySelector(s):s)});e&&e.element.content.style.display==="block"&&e.element.hide()},h.autoInit=function(){window.$hsAccordionCollection||(window.$hsAccordionCollection=[]),document.querySelectorAll(".hs-accordion:not(.--prevent-on-load-init)").forEach(function(s){window.$hsAccordionCollection.find(function(e){var a;return((a=e==null?void 0:e.element)===null||a===void 0?void 0:a.el)===s})||new h(s)})},h.on=function(s,e,a){var n=window.$hsAccordionCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)});n&&(n.element.events[s]=a)},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),typeof window<"u"&&(window.HSAccordion=x),m.default=x},737:(C,m)=>{/*
 * HSBasePlugin
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */Object.defineProperty(m,"__esModule",{value:!0});var A=function(){function f(H,g,x){this.el=H,this.options=g,this.events=x,this.el=H,this.options=g,this.events={}}return f.prototype.createCollection=function(H,g){var x;H.push({id:((x=g==null?void 0:g.el)===null||x===void 0?void 0:x.id)||H.length+1,element:g})},f.prototype.fireEvent=function(H,g){if(g===void 0&&(g=null),this.events.hasOwnProperty(H))return this.events[H](g)},f.prototype.on=function(H,g){this.events[H]=g},f}();m.default=A},629:function(C,m,A){/*
 * HSCarousel
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)}),g=this&&this.__assign||function(){return g=Object.assign||function(u){for(var h,s=1,e=arguments.length;s<e;s++)for(var a in h=arguments[s])Object.prototype.hasOwnProperty.call(h,a)&&(u[a]=h[a]);return u},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=function(u){function h(s,e){var a,n,i,o=u.call(this,s,e)||this,r=s.getAttribute("data-hs-carousel"),c=r?JSON.parse(r):{},y=g(g({},c),e);return o.currentIndex=y.currentIndex||0,o.loadingClasses=y.loadingClasses?"".concat(y.loadingClasses).split(","):null,o.loadingClassesRemove=!((a=o.loadingClasses)===null||a===void 0)&&a[0]?o.loadingClasses[0].split(" "):"opacity-0",o.loadingClassesAdd=!((n=o.loadingClasses)===null||n===void 0)&&n[1]?o.loadingClasses[1].split(" "):"",o.afterLoadingClassesAdd=!((i=o.loadingClasses)===null||i===void 0)&&i[2]?o.loadingClasses[2].split(" "):"",o.isAutoPlay=y.isAutoPlay!==void 0&&y.isAutoPlay,o.speed=y.speed||4e3,o.isInfiniteLoop=y.isInfiniteLoop===void 0||y.isInfiniteLoop,o.inner=o.el.querySelector(".hs-carousel-body")||null,o.slides=o.el.querySelectorAll(".hs-carousel-slide")||[],o.prev=o.el.querySelector(".hs-carousel-prev")||null,o.next=o.el.querySelector(".hs-carousel-next")||null,o.dots=o.el.querySelectorAll(".hs-carousel-pagination > *")||null,o.sliderWidth=o.inner.parentElement.clientWidth,o.touchX={start:0,end:0},o.init(),o}return H(h,u),h.prototype.init=function(){var s,e,a=this;this.createCollection(window.$hsCarouselCollection,this),this.inner&&(this.calculateWidth(),this.loadingClassesRemove&&(typeof this.loadingClassesRemove=="string"?this.inner.classList.remove(this.loadingClassesRemove):(s=this.inner.classList).remove.apply(s,this.loadingClassesRemove)),this.loadingClassesAdd&&(typeof this.loadingClassesAdd=="string"?this.inner.classList.add(this.loadingClassesAdd):(e=this.inner.classList).add.apply(e,this.loadingClassesAdd))),this.prev&&this.prev.addEventListener("click",function(){a.goToPrev(),a.isAutoPlay&&(a.resetTimer(),a.setTimer())}),this.next&&this.next.addEventListener("click",function(){a.goToNext(),a.isAutoPlay&&(a.resetTimer(),a.setTimer())}),this.dots&&this.dots.forEach(function(n,i){return n.addEventListener("click",function(){a.goTo(i),a.isAutoPlay&&(a.resetTimer(),a.setTimer())})}),this.slides.length&&(this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isAutoPlay&&this.autoPlay()),this.inner&&this.afterLoadingClassesAdd&&setTimeout(function(){var n;typeof a.afterLoadingClassesAdd=="string"?a.inner.classList.add(a.afterLoadingClassesAdd):(n=a.inner.classList).add.apply(n,a.afterLoadingClassesAdd)}),this.el.classList.add("init"),this.el.addEventListener("touchstart",function(n){a.touchX.start=n.changedTouches[0].screenX}),this.el.addEventListener("touchend",function(n){a.touchX.end=n.changedTouches[0].screenX,a.detectDirection()}),this.observeResize()},h.prototype.observeResize=function(){var s=this;new ResizeObserver(function(){return s.recalculateWidth()}).observe(document.querySelector("body"))},h.prototype.calculateWidth=function(){var s=this;this.inner.style.width="".concat(this.sliderWidth*this.slides.length,"px"),this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.slides.forEach(function(e){e.style.width="".concat(s.sliderWidth,"px")})},h.prototype.addCurrentClass=function(){var s=this;this.slides.forEach(function(e,a){a===s.currentIndex?e.classList.add("active"):e.classList.remove("active")}),this.dots&&this.dots.forEach(function(e,a){a===s.currentIndex?e.classList.add("active"):e.classList.remove("active")})},h.prototype.addDisabledClass=function(){if(!this.prev||!this.next)return!1;this.currentIndex===0?(this.next.classList.remove("disabled"),this.prev.classList.add("disabled")):this.currentIndex===this.slides.length-1?(this.prev.classList.remove("disabled"),this.next.classList.add("disabled")):(this.prev.classList.remove("disabled"),this.next.classList.remove("disabled"))},h.prototype.autoPlay=function(){this.setTimer()},h.prototype.setTimer=function(){var s=this;this.timer=setInterval(function(){s.currentIndex===s.slides.length-1?s.goTo(0):s.goToNext()},this.speed)},h.prototype.resetTimer=function(){clearInterval(this.timer)},h.prototype.detectDirection=function(){var s=this.touchX,e=s.start,a=s.end;a<e&&this.goToNext(),a>e&&this.goToPrev()},h.prototype.recalculateWidth=function(){this.sliderWidth=this.inner.parentElement.clientWidth,this.calculateWidth()},h.prototype.goToPrev=function(){this.currentIndex===0&&this.isInfiniteLoop?(this.currentIndex=this.slides.length-1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex!==0&&(this.currentIndex-=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},h.prototype.goToNext=function(){this.currentIndex===this.slides.length-1&&this.isInfiniteLoop?(this.currentIndex=0,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex<this.slides.length-1&&(this.currentIndex+=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},h.prototype.goTo=function(s){this.currentIndex=s,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()},h.getInstance=function(s,e){var a=window.$hsCarouselCollection.find(function(n){return n.element.el===(typeof s=="string"?document.querySelector(s):s)});return a?e?a:a.element:null},h.autoInit=function(){window.$hsCarouselCollection||(window.$hsCarouselCollection=[]),document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach(function(s){window.$hsCarouselCollection.find(function(e){var a;return((a=e==null?void 0:e.element)===null||a===void 0?void 0:a.el)===s})||new h(s)})},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),window.addEventListener("resize",function(){if(!window.$hsCarouselCollection)return!1;window.$hsCarouselCollection.forEach(function(u){u.element.recalculateWidth()})}),typeof window<"u"&&(window.HSCarousel=x),m.default=x},652:function(C,m,A){/*
 * HSCollapse
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)});Object.defineProperty(m,"__esModule",{value:!0});var g=A(969),x=function(u){function h(s,e,a){var n=u.call(this,s,e,a)||this;return n.contentId=n.el.dataset.hsCollapse,n.content=document.querySelector(n.contentId),n.animationInProcess=!1,n.content&&n.init(),n}return H(h,u),h.prototype.init=function(){var s=this;this.createCollection(window.$hsCollapseCollection,this),this.el.addEventListener("click",function(){s.content.classList.contains("open")?s.hide():s.show()})},h.prototype.hideAllMegaMenuItems=function(){this.content.querySelectorAll(".hs-mega-menu-content.block").forEach(function(s){s.classList.remove("block"),s.classList.add("hidden")})},h.prototype.show=function(){var s=this;if(this.animationInProcess||this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.add("open"),this.content.classList.add("open"),this.content.classList.remove("hidden"),this.content.style.height="0",setTimeout(function(){s.content.style.height="".concat(s.content.scrollHeight,"px")}),(0,g.afterTransition)(this.content,function(){s.content.style.height="",s.fireEvent("open",s.el),(0,g.dispatch)("open.hs.collapse",s.el,s.el),s.animationInProcess=!1})},h.prototype.hide=function(){var s=this;if(this.animationInProcess||!this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.remove("open"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){s.content.style.height="0"}),this.content.classList.remove("open"),(0,g.afterTransition)(this.content,function(){s.content.classList.add("hidden"),s.content.style.height="",s.fireEvent("hide",s.el),(0,g.dispatch)("hide.hs.collapse",s.el,s.el),s.animationInProcess=!1}),this.content.querySelectorAll(".hs-mega-menu-content.block").length&&this.hideAllMegaMenuItems()},h.getInstance=function(s,e){e===void 0&&(e=!1);var a=window.$hsCollapseCollection.find(function(n){return n.element.el===(typeof s=="string"?document.querySelector(s):s)});return a?e?a:a.element.el:null},h.autoInit=function(){window.$hsCollapseCollection||(window.$hsCollapseCollection=[]),document.querySelectorAll(".hs-collapse-toggle:not(.--prevent-on-load-init)").forEach(function(s){window.$hsCollapseCollection.find(function(e){var a;return((a=e==null?void 0:e.element)===null||a===void 0?void 0:a.el)===s})||new h(s)})},h.show=function(s){var e=window.$hsCollapseCollection.find(function(a){return a.element.el===(typeof s=="string"?document.querySelector(s):s)});e&&e.element.content.classList.contains("hidden")&&e.element.show()},h.hide=function(s){var e=window.$hsCollapseCollection.find(function(a){return a.element.el===(typeof s=="string"?document.querySelector(s):s)});e&&!e.element.content.classList.contains("hidden")&&e.element.hide()},h.on=function(s,e,a){var n=window.$hsCollapseCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)});n&&(n.element.events[s]=a)},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),typeof window<"u"&&(window.HSCollapse=x),m.default=x},413:function(C,m,A){/*
 * HSCopyMarkup
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a){var n=h.call(this,e,a)||this,i=e.getAttribute("data-hs-copy-markup"),o=i?JSON.parse(i):{},r=g(g({},o),a);return n.targetSelector=(r==null?void 0:r.targetSelector)||null,n.wrapperSelector=(r==null?void 0:r.wrapperSelector)||null,n.limit=(r==null?void 0:r.limit)||null,n.items=[],n.targetSelector&&n.init(),n}return H(s,h),s.prototype.init=function(){var e=this;this.createCollection(window.$hsCopyMarkupCollection,this),this.setTarget(),this.setWrapper(),this.addPredefinedItems(),this.el.addEventListener("click",function(){return e.copy()})},s.prototype.copy=function(){if(this.limit&&this.items.length>=this.limit)return!1;this.el.hasAttribute("disabled")&&this.el.setAttribute("disabled","");var e=this.target.cloneNode(!0);this.addToItems(e),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled"),this.fireEvent("copy",e),(0,x.dispatch)("copy.hs.copyMarkup",e,e)},s.prototype.addPredefinedItems=function(){var e=this;Array.from(this.wrapper.children).filter(function(a){return!a.classList.contains("[--ignore-for-count]")}).forEach(function(a){e.addToItems(a)})},s.prototype.setTarget=function(){var e=typeof this.targetSelector=="string"?document.querySelector(this.targetSelector).cloneNode(!0):this.targetSelector.cloneNode(!0);e.removeAttribute("id"),this.target=e},s.prototype.setWrapper=function(){this.wrapper=typeof this.wrapperSelector=="string"?document.querySelector(this.wrapperSelector):this.wrapperSelector},s.prototype.addToItems=function(e){var a=this,n=e.querySelector("[data-hs-copy-markup-delete-item]");this.wrapper?this.wrapper.append(e):this.el.before(e),n&&n.addEventListener("click",function(){return a.delete(e)}),this.items.push(e)},s.prototype.delete=function(e){var a=this.items.indexOf(e);a!==-1&&this.items.splice(a,1),e.remove(),this.fireEvent("delete",e),(0,x.dispatch)("delete.hs.copyMarkup",e,e)},s.getInstance=function(e,a){var n=window.$hsCopyMarkupCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)});return n?a?n:n.element:null},s.autoInit=function(){window.$hsCopyMarkupCollection||(window.$hsCopyMarkupCollection=[]),document.querySelectorAll("[data-hs-copy-markup]:not(.--prevent-on-load-init)").forEach(function(e){if(!window.$hsCopyMarkupCollection.find(function(i){var o;return((o=i==null?void 0:i.element)===null||o===void 0?void 0:o.el)===e})){var a=e.getAttribute("data-hs-copy-markup"),n=a?JSON.parse(a):{};new s(e,n)}})},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSCopyMarkup=u),m.default=u},610:function(C,m,A){/*
 * HSDropdown
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(a,n){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,o){i.__proto__=o}||function(i,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])},f(a,n)},function(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=a}f(a,n),a.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}),g=this&&this.__spreadArray||function(a,n,i){if(i||arguments.length===2)for(var o,r=0,c=n.length;r<c;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return a.concat(o||Array.prototype.slice.call(n))};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=A(492),h=A(737),s=A(190),e=function(a){function n(i,o,r){var c=a.call(this,i,o,r)||this;return c.toggle=c.el.querySelector(":scope > .hs-dropdown-toggle")||c.el.children[0],c.menu=c.el.querySelector(":scope > .hs-dropdown-menu"),c.eventMode=(0,x.getClassProperty)(c.el,"--trigger","click"),c.closeMode=(0,x.getClassProperty)(c.el,"--auto-close","true"),c.animationInProcess=!1,c.toggle&&c.menu&&c.init(),c}return H(n,a),n.prototype.init=function(){var i=this;if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle.addEventListener("click",function(){return i.onClickHandler()}),(0,x.isIOS)()||(0,x.isIpadOS)()||(this.el.addEventListener("mouseenter",function(){return i.onMouseEnterHandler()}),this.el.addEventListener("mouseleave",function(){return i.onMouseLeaveHandler()}))},n.prototype.resizeHandler=function(){this.eventMode=(0,x.getClassProperty)(this.el,"--trigger","click")},n.prototype.onClickHandler=function(){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()},n.prototype.onMouseEnterHandler=function(){if(this.eventMode!=="hover")return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()},n.prototype.onMouseLeaveHandler=function(){if(this.eventMode!=="hover")return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()},n.prototype.destroyPopper=function(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1},n.prototype.absoluteStrategyModifiers=function(){var i=this;return[{name:"applyStyles",fn:function(o){var r=(window.getComputedStyle(i.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),c=(window.getComputedStyle(i.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");o.state.elements.popper.style.position=r,o.state.elements.popper.style.transform=c==="adaptive"?o.state.styles.popper.transform:null,o.state.elements.popper.style.top=null,o.state.elements.popper.style.bottom=null,o.state.elements.popper.style.left=null,o.state.elements.popper.style.right=null,o.state.elements.popper.style.margin=0}},{name:"computeStyles",options:{adaptive:!1}}]},n.prototype.open=function(){var i=this;if(this.el.classList.contains("open")||this.animationInProcess)return!1;this.animationInProcess=!0;var o=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),r=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),c=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),y=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ",""));c!=="static"&&(this.el._popper=(0,u.createPopper)(this.el,this.menu,{placement:s.POSITIONS[o]||"bottom-start",strategy:c,modifiers:g(g([],c!=="fixed"?this.absoluteStrategyModifiers():[],!0),[{name:"flip",enabled:r==="true"},{name:"offset",options:{offset:[0,y]}}],!1)})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout(function(){i.el.classList.add("open"),i.animationInProcess=!1}),this.fireEvent("open",this.el),(0,x.dispatch)("open.hs.dropdown",this.el,this.el)},n.prototype.close=function(i){var o=this;if(i===void 0&&(i=!0),this.animationInProcess||!this.el.classList.contains("open"))return!1;if(this.animationInProcess=!0,i){var r=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,x.afterTransition)(r,function(){return o.destroyPopper()})}else this.destroyPopper();this.menu.style.margin=null,this.el.classList.remove("open"),this.fireEvent("close",this.el),(0,x.dispatch)("close.hs.dropdown",this.el,this.el)},n.prototype.forceClearState=function(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")},n.getInstance=function(i,o){var r=window.$hsDropdownCollection.find(function(c){return c.element.el===(typeof i=="string"?document.querySelector(i):i)});return r?o?r:r.element.el:null},n.autoInit=function(){if(window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach(function(o){window.$hsDropdownCollection.find(function(r){var c;return((c=r==null?void 0:r.element)===null||c===void 0?void 0:c.el)===o})||new n(o)}),window.$hsDropdownCollection){document.addEventListener("keydown",function(o){return n.accessibility(o)}),window.addEventListener("click",function(o){var r=o.target;n.closeCurrentlyOpened(r)});var i=window.innerWidth;window.addEventListener("resize",function(){window.innerWidth!==i&&(i=innerWidth,n.closeCurrentlyOpened(null,!1))})}},n.open=function(i){var o=window.$hsDropdownCollection.find(function(r){return r.element.el===(typeof i=="string"?document.querySelector(i):i)});o&&o.element.menu.classList.contains("hidden")&&o.element.open()},n.close=function(i){var o=window.$hsDropdownCollection.find(function(r){return r.element.el===(typeof i=="string"?document.querySelector(i):i)});o&&!o.element.menu.classList.contains("hidden")&&o.element.close()},n.accessibility=function(i){this.history=x.menuSearchHistory;var o=window.$hsDropdownCollection.find(function(r){return r.element.el.classList.contains("open")});if(o&&(s.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(i.code)||i.code.length===4&&i.code[i.code.length-1].match(/^[A-Z]*$/))&&!i.metaKey&&!o.element.menu.querySelector("input:focus"))switch(console.log("Key code:",i.code),i.code){case"Escape":o.element.menu.querySelector(".hs-select.active")||(i.preventDefault(),this.onEscape(i));break;case"Enter":o.element.menu.querySelector(".hs-select button:focus")||o.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(i);break;case"ArrowUp":i.preventDefault(),this.onArrow();break;case"ArrowDown":i.preventDefault(),this.onArrow(!1);break;case"Home":i.preventDefault(),this.onStartEnd();break;case"End":i.preventDefault(),this.onStartEnd(!1);break;default:i.preventDefault(),this.onFirstLetter(i.key)}},n.onEscape=function(i){var o=i.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find(function(c){return c.element.el===o})){var r=window.$hsDropdownCollection.find(function(c){return c.element.el===o});r&&(r.element.close(),r.element.toggle.focus())}else this.closeCurrentlyOpened()},n.onEnter=function(i){var o=i.target.parentElement;if(window.$hsDropdownCollection.find(function(c){return c.element.el===o})){i.preventDefault();var r=window.$hsDropdownCollection.find(function(c){return c.element.el===o});r&&r.element.open()}},n.onArrow=function(i){i===void 0&&(i=!0);var o=window.$hsDropdownCollection.find(function(L){return L.element.el.classList.contains("open")});if(o){var r=o.element.menu;if(!r)return!1;var c=(i?Array.from(r.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(r.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter(function(L){return!L.classList.contains("disabled")}),y=r.querySelector("a:focus, button:focus"),O=c.findIndex(function(L){return L===y});O+1<c.length&&O++,c[O].focus()}},n.onStartEnd=function(i){i===void 0&&(i=!0);var o=window.$hsDropdownCollection.find(function(y){return y.element.el.classList.contains("open")});if(o){var r=o.element.menu;if(!r)return!1;var c=(i?Array.from(r.querySelectorAll("a")):Array.from(r.querySelectorAll("a")).reverse()).filter(function(y){return!y.classList.contains("disabled")});c.length&&c[0].focus()}},n.onFirstLetter=function(i){var o=this,r=window.$hsDropdownCollection.find(function(_){return _.element.el.classList.contains("open")});if(r){var c=r.element.menu;if(!c)return!1;var y=Array.from(c.querySelectorAll("a")),O=function(){return y.findIndex(function(_,J){return _.innerText.toLowerCase().charAt(0)===i.toLowerCase()&&o.history.existsInHistory(J)})},L=O();L===-1&&(this.history.clearHistory(),L=O()),L!==-1&&(y[L].focus(),this.history.addHistory(L))}},n.closeCurrentlyOpened=function(i,o){i===void 0&&(i=null),o===void 0&&(o=!0);var r=i&&i.closest(".hs-dropdown")&&i.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?i.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null,c=r?window.$hsDropdownCollection.filter(function(y){return y.element.el.classList.contains("open")&&y.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===r}):window.$hsDropdownCollection.filter(function(y){return y.element.el.classList.contains("open")});i&&i.closest(".hs-dropdown")&&(0,x.getClassPropertyAlt)(i.closest(".hs-dropdown"),"--auto-close")==="inside"&&(c=c.filter(function(y){return y.element.el!==i.closest(".hs-dropdown")})),c&&c.forEach(function(y){if(y.element.closeMode==="false"||y.element.closeMode==="outside")return!1;y.element.close(o)})},n.on=function(i,o,r){var c=window.$hsDropdownCollection.find(function(y){return y.element.el===(typeof o=="string"?document.querySelector(o):o)});c&&(c.element.events[i]=r)},n}(h.default);window.addEventListener("load",function(){e.autoInit()}),window.addEventListener("resize",function(){window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach(function(a){return a.element.resizeHandler()})}),typeof window<"u"&&(window.HSDropdown=e),m.default=e},371:function(C,m,A){/*
 * HSInputNumber
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)});Object.defineProperty(m,"__esModule",{value:!0});var g=A(969),x=function(u){function h(s,e){var a=u.call(this,s,e)||this;return a.input=a.el.querySelector("[data-hs-input-number-input]")||null,a.increment=a.el.querySelector("[data-hs-input-number-increment]")||null,a.decrement=a.el.querySelector("[data-hs-input-number-decrement]")||null,a.inputValue=a.input?parseInt(a.input.value):0,a.init(),a}return H(h,u),h.prototype.init=function(){this.createCollection(window.$hsInputNumberCollection,this),this.input&&this.increment&&this.build()},h.prototype.build=function(){this.input&&this.buildInput(),this.increment&&this.buildIncrement(),this.decrement&&this.buildDecrement(),this.inputValue<=0&&(this.inputValue=0,this.input.value="0",this.changeValue()),this.input.hasAttribute("disabled")&&this.disableButtons()},h.prototype.buildInput=function(){var s=this;this.input.addEventListener("input",function(){return s.changeValue()})},h.prototype.buildIncrement=function(){var s=this;this.increment.addEventListener("click",function(){s.changeValue("increment")})},h.prototype.buildDecrement=function(){var s=this;this.decrement.addEventListener("click",function(){s.changeValue("decrement")})},h.prototype.changeValue=function(s){s===void 0&&(s="none");var e={inputValue:this.inputValue};switch(s){case"increment":this.inputValue+=1,this.input.value=this.inputValue.toString();break;case"decrement":this.inputValue-=this.inputValue<=0?0:1,this.input.value=this.inputValue.toString();break;default:this.inputValue=parseInt(this.input.value)<=0?0:parseInt(this.input.value),this.inputValue<=0&&(this.input.value=this.inputValue.toString())}e.inputValue=this.inputValue,this.inputValue===0?(this.el.classList.add("disabled"),this.decrement&&this.disableButtons("decrement")):(this.el.classList.remove("disabled"),this.decrement&&this.enableButtons("decrement")),this.fireEvent("change",e),(0,g.dispatch)("change.hs.inputNumber",this.el,e)},h.prototype.disableButtons=function(s){s===void 0&&(s="all"),s==="all"?(this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.setAttribute("disabled","disabled"),this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.setAttribute("disabled","disabled")):s==="increment"?this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.setAttribute("disabled","disabled"):s==="decrement"&&(this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.setAttribute("disabled","disabled"))},h.prototype.enableButtons=function(s){s===void 0&&(s="all"),s==="all"?(this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.removeAttribute("disabled"),this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.removeAttribute("disabled")):s==="increment"?this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.removeAttribute("disabled"):s==="decrement"&&(this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.removeAttribute("disabled"))},h.getInstance=function(s,e){var a=window.$hsInputNumberCollection.find(function(n){return n.element.el===(typeof s=="string"?document.querySelector(s):s)});return a?e?a:a.element:null},h.autoInit=function(){window.$hsInputNumberCollection||(window.$hsInputNumberCollection=[]),document.querySelectorAll("[data-hs-input-number]:not(.--prevent-on-load-init)").forEach(function(s){window.$hsInputNumberCollection.find(function(e){var a;return((a=e==null?void 0:e.element)===null||a===void 0?void 0:a.el)===s})||new h(s)})},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),typeof window<"u"&&(window.HSInputNumber=x),m.default=x},770:function(C,m,A){/*
 * HSOverlay
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a,n){var i,o,r=h.call(this,e,a,n)||this,c=e.getAttribute("data-hs-overlay-options"),y=c?JSON.parse(c):{},O=g(g({},y),a);return r.hiddenClass=(O==null?void 0:O.hiddenClass)||"hidden",r.isClosePrev=(i=O==null?void 0:O.isClosePrev)===null||i===void 0||i,r.backdropClasses=(o=O==null?void 0:O.backdropClasses)!==null&&o!==void 0?o:"transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 hs-overlay-backdrop",r.openNextOverlay=!1,r.autoHide=null,r.overlayId=r.el.getAttribute("data-hs-overlay"),r.overlay=document.querySelector(r.overlayId),r.overlay&&(r.isCloseWhenClickInside=(0,x.getClassProperty)(r.overlay,"--close-when-click-inside","false")||"false",r.isTabAccessibilityLimited=(0,x.getClassProperty)(r.overlay,"--tab-accessibility-limited","true")||"true",r.hasAutofocus=(0,x.getClassProperty)(r.overlay,"--has-autofocus","true")||"true",r.hasAbilityToCloseOnBackdropClick=r.overlay.getAttribute("data-hs-overlay-keyboard")||"true"),r.overlay&&r.init(),r}return H(s,h),s.prototype.init=function(){var e=this;this.createCollection(window.$hsOverlayCollection,this),this.el.addEventListener("click",function(){e.overlay.classList.contains(e.hiddenClass)?e.open():e.close()}),this.overlay.addEventListener("click",function(a){a.target.id&&"#".concat(a.target.id)===e.overlayId&&e.isCloseWhenClickInside==="true"&&e.hasAbilityToCloseOnBackdropClick==="true"&&e.close()})},s.prototype.hideAuto=function(){var e=this,a=parseInt((0,x.getClassProperty)(this.overlay,"--auto-hide","0"));a&&(this.autoHide=setTimeout(function(){e.close()},a))},s.prototype.checkTimer=function(){this.autoHide&&(clearTimeout(this.autoHide),this.autoHide=null)},s.prototype.buildBackdrop=function(){var e=this,a=this.overlay.classList.value.split(" "),n=parseInt(window.getComputedStyle(this.overlay).getPropertyValue("z-index")),i=this.overlay.getAttribute("data-hs-overlay-backdrop-container")||!1,o=document.createElement("div"),r=this.backdropClasses,c=(0,x.getClassProperty)(this.overlay,"--overlay-backdrop","true")!=="static",y=(0,x.getClassProperty)(this.overlay,"--overlay-backdrop","true")==="false";o.id="".concat(this.overlay.id,"-backdrop"),"style"in o&&(o.style.zIndex="".concat(n-1));for(var O=0,L=a;O<L.length;O++){var _=L[O];(_.startsWith("hs-overlay-backdrop-open:")||_.includes(":hs-overlay-backdrop-open:"))&&(r+=" ".concat(_))}y||(i&&((o=document.querySelector(i).cloneNode(!0)).classList.remove("hidden"),r="".concat(o.classList.toString()),o.classList.value=""),c&&o.addEventListener("click",function(){return e.close()},!0),o.setAttribute("data-hs-overlay-backdrop-template",""),document.body.appendChild(o),setTimeout(function(){o.classList.value=r}))},s.prototype.destroyBackdrop=function(){var e=document.querySelector("#".concat(this.overlay.id,"-backdrop"));e&&(this.openNextOverlay&&(e.style.transitionDuration="".concat(1.8*parseFloat(window.getComputedStyle(e).transitionDuration.replace(/[^\d.-]/g,"")),"s")),e.classList.add("opacity-0"),(0,x.afterTransition)(e,function(){e.remove()}))},s.prototype.focusElement=function(){var e=this.overlay.querySelector("[autofocus]");if(!e)return!1;e.focus()},s.prototype.open=function(){var e=this;if(!this.overlay)return!1;var a=window.$hsOverlayCollection.find(function(i){return i.element.overlay===document.querySelector(".hs-overlay.open")}),n=(0,x.getClassProperty)(this.overlay,"--body-scroll","false")!=="true";if(this.isClosePrev&&a)return this.openNextOverlay=!0,a.element.close().then(function(){e.open(),e.openNextOverlay=!1});n&&(document.body.style.overflow="hidden"),this.buildBackdrop(),this.checkTimer(),this.hideAuto(),this.overlay.classList.remove(this.hiddenClass),this.overlay.setAttribute("aria-overlay","true"),this.overlay.setAttribute("tabindex","-1"),setTimeout(function(){if(e.overlay.classList.contains(e.hiddenClass))return!1;e.overlay.classList.add("open"),e.fireEvent("open",e.el),(0,x.dispatch)("open.hs.overlay",e.el,e.el),e.hasAutofocus==="true"&&e.focusElement()},50)},s.prototype.close=function(){var e=this;return new Promise(function(a){if(!e.overlay)return!1;e.overlay.classList.remove("open"),e.overlay.removeAttribute("aria-overlay"),e.overlay.removeAttribute("tabindex"),(0,x.afterTransition)(e.overlay,function(){if(e.overlay.classList.contains("open"))return!1;e.overlay.classList.add(e.hiddenClass),e.destroyBackdrop(),e.fireEvent("close",e.el),(0,x.dispatch)("close.hs.overlay",e.el,e.el),document.body.style.overflow="",a(e.overlay)})})},s.getInstance=function(e,a){var n=window.$hsOverlayCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)||i.element.overlay===(typeof e=="string"?document.querySelector(e):e)});return n?a?n:n.element.el:null},s.autoInit=function(){window.$hsOverlayCollection||(window.$hsOverlayCollection=[]),document.querySelectorAll("[data-hs-overlay]:not(.--prevent-on-load-init)").forEach(function(e){window.$hsOverlayCollection.find(function(a){var n;return((n=a==null?void 0:a.element)===null||n===void 0?void 0:n.el)===e})||new s(e)}),window.$hsOverlayCollection&&document.addEventListener("keydown",function(e){return s.accessibility(e)})},s.open=function(e){var a=window.$hsOverlayCollection.find(function(n){return n.element.el===(typeof e=="string"?document.querySelector(e):e)||n.element.overlay===(typeof e=="string"?document.querySelector(e):e)});a&&a.element.overlay.classList.contains(a.element.hiddenClass)&&a.element.open()},s.close=function(e){var a=window.$hsOverlayCollection.find(function(n){return n.element.el===(typeof e=="string"?document.querySelector(e):e)||n.element.overlay===(typeof e=="string"?document.querySelector(e):e)});a&&!a.element.overlay.classList.contains(a.element.hiddenClass)&&a.element.close()},s.accessibility=function(e){var a,n,i=window.$hsOverlayCollection.filter(function(O){return O.element.overlay.classList.contains("open")}),o=i[i.length-1],r=(n=(a=o==null?void 0:o.element)===null||a===void 0?void 0:a.overlay)===null||n===void 0?void 0:n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),c=[];r!=null&&r.length&&r.forEach(function(O){(0,x.isParentOrElementHidden)(O)||c.push(O)});var y=o&&!e.metaKey;if(y&&o.element.isTabAccessibilityLimited==="false"&&e.code==="Tab")return!1;y&&c.length&&e.code==="Tab"&&(e.preventDefault(),this.onTab(o,c)),y&&e.code==="Escape"&&(e.preventDefault(),this.onEscape(o))},s.onEscape=function(e){e&&e.element.close()},s.onTab=function(e,a){if(!a.length)return!1;var n=e.element.overlay.querySelector(":focus"),i=Array.from(a).indexOf(n);i>-1?a[(i+1)%a.length].focus():a[0].focus()},s.on=function(e,a,n){var i=window.$hsOverlayCollection.find(function(o){return o.element.el===(typeof a=="string"?document.querySelector(a):a)||o.element.overlay===(typeof a=="string"?document.querySelector(a):a)});i&&(i.element.events[e]=n)},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSOverlay=u),m.default=u},659:function(C,m,A){/*
 * HSPinInput
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a){var n=h.call(this,e,a)||this,i=e.getAttribute("data-hs-pin-input"),o=i?JSON.parse(i):{},r=g(g({},o),a);return n.items=n.el.querySelectorAll("[data-hs-pin-input-item]"),n.currentItem=null,n.currentValue=new Array(n.items.length).fill(""),n.placeholders=[],n.availableCharsRE=new RegExp((r==null?void 0:r.availableCharsRE)||"^[a-zA-Z0-9]+$"),n.init(),n}return H(s,h),s.prototype.init=function(){this.createCollection(window.$hsPinInputCollection,this),this.items.length&&this.build()},s.prototype.build=function(){this.buildInputItems()},s.prototype.buildInputItems=function(){var e=this;this.items.forEach(function(a,n){e.placeholders.push(a.getAttribute("placeholder")||""),a.hasAttribute("autofocus")&&e.onFocusIn(n),a.addEventListener("input",function(i){return e.onInput(i,n)}),a.addEventListener("paste",function(i){return e.onPaste(i)}),a.addEventListener("keydown",function(i){return e.onKeydown(i,n)}),a.addEventListener("focusin",function(){return e.onFocusIn(n)}),a.addEventListener("focusout",function(){return e.onFocusOut(n)})})},s.prototype.checkIfNumber=function(e){return e.match(this.availableCharsRE)},s.prototype.autoFillAll=function(e){var a=this;Array.from(e).forEach(function(n,i){if(!(a!=null&&a.items[i]))return!1;a.items[i].value=n,a.items[i].dispatchEvent(new Event("input",{bubbles:!0}))})},s.prototype.setCurrentValue=function(){this.currentValue=Array.from(this.items).map(function(e){return e.value})},s.prototype.toggleCompleted=function(){this.currentValue.includes("")?this.el.classList.remove("active"):this.el.classList.add("active")},s.prototype.onInput=function(e,a){var n=e.target.value;if(this.currentItem=e.target,this.currentItem.value="",this.currentItem.value=n[n.length-1],!this.checkIfNumber(this.currentItem.value))return this.currentItem.value=this.currentValue[a]||"",!1;if(this.setCurrentValue(),this.currentItem.value){if(a<this.items.length-1&&this.items[a+1].focus(),!this.currentValue.includes("")){var i={currentValue:this.currentValue};this.fireEvent("completed",i),(0,x.dispatch)("completed.hs.pinInput",this.el,i)}this.toggleCompleted()}else a>0&&this.items[a-1].focus()},s.prototype.onKeydown=function(e,a){e.key==="Backspace"&&a>0&&(this.items[a].value===""?(this.items[a-1].value="",this.items[a-1].focus()):this.items[a].value=""),this.setCurrentValue(),this.toggleCompleted()},s.prototype.onFocusIn=function(e){this.items[e].setAttribute("placeholder","")},s.prototype.onFocusOut=function(e){this.items[e].setAttribute("placeholder",this.placeholders[e])},s.prototype.onPaste=function(e){var a=this;e.preventDefault(),this.items.forEach(function(n){document.activeElement===n&&a.autoFillAll(e.clipboardData.getData("text"))})},s.getInstance=function(e,a){var n=window.$hsPinInputCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)});return n?a?n:n.element:null},s.autoInit=function(){window.$hsPinInputCollection||(window.$hsPinInputCollection=[]),document.querySelectorAll("[data-hs-pin-input]:not(.--prevent-on-load-init)").forEach(function(e){window.$hsPinInputCollection.find(function(a){var n;return((n=a==null?void 0:a.element)===null||n===void 0?void 0:n.el)===e})||new s(e)})},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSPinInput=u),m.default=u},139:function(C,m,A){/*
 * HSRemoveElement
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a){var n=h.call(this,e,a)||this,i=e.getAttribute("data-hs-remove-element-options"),o=i?JSON.parse(i):{},r=g(g({},o),a);return n.removeTargetId=n.el.getAttribute("data-hs-remove-element"),n.removeTarget=document.querySelector(n.removeTargetId),n.removeTargetAnimationClass=(r==null?void 0:r.removeTargetAnimationClass)||"hs-removing",n.removeTarget&&n.init(),n}return H(s,h),s.prototype.init=function(){var e=this;this.createCollection(window.$hsRemoveElementCollection,this),this.el.addEventListener("click",function(){return e.remove()})},s.prototype.remove=function(){var e=this;if(!this.removeTarget)return!1;this.removeTarget.classList.add(this.removeTargetAnimationClass),(0,x.afterTransition)(this.removeTarget,function(){e.removeTarget.remove()})},s.autoInit=function(){window.$hsRemoveElementCollection||(window.$hsRemoveElementCollection=[]),document.querySelectorAll("[data-hs-remove-element]:not(.--prevent-on-load-init)").forEach(function(e){window.$hsRemoveElementCollection.find(function(a){var n;return((n=a==null?void 0:a.element)===null||n===void 0?void 0:n.el)===e})||new s(e)})},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSRemoveElement=u),m.default=u},591:function(C,m,A){/*
 * HSScrollspy
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)});Object.defineProperty(m,"__esModule",{value:!0});var g=A(969),x=function(u){function h(s,e){e===void 0&&(e={});var a=u.call(this,s,e)||this;return a.activeSection=null,a.contentId=a.el.getAttribute("data-hs-scrollspy"),a.content=document.querySelector(a.contentId),a.links=a.el.querySelectorAll("[href]"),a.sections=[],a.scrollableId=a.el.getAttribute("data-hs-scrollspy-scrollable-parent"),a.scrollable=a.scrollableId?document.querySelector(a.scrollableId):document,a.init(),a}return H(h,u),h.prototype.init=function(){var s=this;this.createCollection(window.$hsScrollspyCollection,this),this.links.forEach(function(e){s.sections.push(s.scrollable.querySelector(e.getAttribute("href")))}),Array.from(this.sections).forEach(function(e){if(!e.getAttribute("id"))return!1;s.scrollable.addEventListener("scroll",function(a){return s.update(a,e)})}),this.links.forEach(function(e){e.addEventListener("click",function(a){if(a.preventDefault(),e.getAttribute("href")==="javascript:;")return!1;s.scrollTo(e)})})},h.prototype.update=function(s,e){var a=parseInt((0,g.getClassProperty)(this.el,"--scrollspy-offset","0")),n=parseInt((0,g.getClassProperty)(e,"--scrollspy-offset"))||a,i=s.target===document?0:parseInt(String(s.target.getBoundingClientRect().top)),o=parseInt(String(e.getBoundingClientRect().top))-n-i,r=e.offsetHeight;if(o<=0&&o+r>0){if(this.activeSection===e)return!1;this.links.forEach(function(L){L.classList.remove("active")});var c=this.el.querySelector('[href="#'.concat(e.getAttribute("id"),'"]'));if(c){c.classList.add("active");var y=c.closest("[data-hs-scrollspy-group]");if(y){var O=y.querySelector("[href]");O&&O.classList.add("active")}}this.activeSection=e}},h.prototype.scrollTo=function(s){var e=s.getAttribute("href"),a=document.querySelector(e),n=parseInt((0,g.getClassProperty)(this.el,"--scrollspy-offset","0")),i=parseInt((0,g.getClassProperty)(a,"--scrollspy-offset"))||n,o=this.scrollable===document?0:this.scrollable.offsetTop,r=a.offsetTop-i-o,c=this.scrollable===document?window:this.scrollable,y=function(){window.history.replaceState(null,null,s.getAttribute("href")),"scrollTo"in c&&c.scrollTo({top:r,left:0,behavior:"smooth"})},O=this.fireEvent("beforeScroll",this.el);(0,g.dispatch)("beforeScroll.hs.scrollspy",this.el,this.el),O instanceof Promise?O.then(function(){return y()}):y()},h.getInstance=function(s,e){e===void 0&&(e=!1);var a=window.$hsScrollspyCollection.find(function(n){return n.element.el===(typeof s=="string"?document.querySelector(s):s)});return a?e?a:a.element.el:null},h.autoInit=function(){window.$hsScrollspyCollection||(window.$hsScrollspyCollection=[]),document.querySelectorAll("[data-hs-scrollspy]:not(.--prevent-on-load-init)").forEach(function(s){window.$hsScrollspyCollection.find(function(e){var a;return((a=e==null?void 0:e.element)===null||a===void 0?void 0:a.el)===s})||new h(s)})},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),typeof window<"u"&&(window.HSScrollspy=x),m.default=x},961:function(C,m,A){/*
 * HSTogglePassword
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(e,a){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},f(e,a)},function(e,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=e}f(e,a),e.prototype=a===null?Object.create(a):(n.prototype=a.prototype,new n)}),g=this&&this.__assign||function(){return g=Object.assign||function(e){for(var a,n=1,i=arguments.length;n<i;n++)for(var o in a=arguments[n])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e},g.apply(this,arguments)},x=this&&this.__awaiter||function(e,a,n,i){return new(n||(n=Promise))(function(o,r){function c(L){try{O(i.next(L))}catch(_){r(_)}}function y(L){try{O(i.throw(L))}catch(_){r(_)}}function O(L){var _;L.done?o(L.value):(_=L.value,_ instanceof n?_:new n(function(J){J(_)})).then(c,y)}O((i=i.apply(e,a||[])).next())})},u=this&&this.__generator||function(e,a){var n,i,o,r,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function y(O){return function(L){return function(_){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,_[0]&&(c=0)),c;)try{if(n=1,i&&(o=2&_[0]?i.return:_[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,_[1])).done)return o;switch(i=0,o&&(_=[2&_[0],o.value]),_[0]){case 0:case 1:o=_;break;case 4:return c.label++,{value:_[1],done:!1};case 5:c.label++,i=_[1],_=[0];continue;case 7:_=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!((o=o.length>0&&o[o.length-1])||_[0]!==6&&_[0]!==2)){c=0;continue}if(_[0]===3&&(!o||_[1]>o[0]&&_[1]<o[3])){c.label=_[1];break}if(_[0]===6&&c.label<o[1]){c.label=o[1],o=_;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(_);break}o[2]&&c.ops.pop(),c.trys.pop();continue}_=a.call(e,c)}catch(J){_=[6,J],i=0}finally{n=o=0}if(5&_[0])throw _[1];return{value:_[0]?_[1]:void 0,done:!0}}([O,L])}}};Object.defineProperty(m,"__esModule",{value:!0});var h=A(969),s=function(e){function a(n,i){var o=e.call(this,n,i)||this,r=n.getAttribute("data-hs-search-by-json"),c=r?JSON.parse(r):{},y=g(g({},c),i);return o.jsonUrl=y.jsonUrl,o.minChars=y.minChars||3,o.dropdownTemplate=y.dropdownTemplate||"<div></div>",o.dropdownClasses=y.dropdownClasses||"absolute top-full z-[1] w-full bg-white border border-gray-200 rounded-md hidden mt-2",o.dropdownItemTemplate=y.dropdownItemTemplate||"<div></div>",o.dropdownItemTemplatesByType=y.dropdownItemTemplatesByType||null,o.dropdownItemClasses=y.dropdownItemClasses||"py-2 px-4 w-full cursor-pointer text-sm hover:bg-gray-300 hover:text-black",o.highlightedTextTagName=y.highlightedTextTagName||"u",o.highlightedTextClasses=y.highlightedTextClasses||"bg-green-200",o.jsonUrl&&o.fetchData().then(function(){return o.init()}),o}return H(a,e),a.prototype.init=function(){var n=this;this.createCollection(window.$hsSearchByJsonCollection,this),this.buildDropdown(),this.el.addEventListener("input",(0,h.debounce)(function(i){n.val=i.target.value,n.val.length>n.minChars?n.searchData(n.val):n.result=[],n.result.length?n.dropdown.classList.remove("hidden"):n.dropdown.classList.add("hidden"),n.buildItems(),console.log("result:",n.result)}))},a.prototype.fetchData=function(){return x(this,void 0,void 0,function(){var n=this;return u(this,function(i){switch(i.label){case 0:return[4,fetch(this.jsonUrl).then(function(o){return o.json()}).then(function(o){return n.json=o})];case 1:return i.sent(),[2]}})})},a.prototype.searchData=function(n){this.result=this.json.filter(function(i){var o=n.toLowerCase(),r=i.title.toLowerCase(),c=i.description.toLowerCase();return r.includes(o)||c.includes(o)})},a.prototype.buildDropdown=function(){this.dropdown=(0,h.htmlToElement)(this.dropdownTemplate),this.dropdownClasses&&(0,h.classToClassList)(this.dropdownClasses,this.dropdown),this.el.after(this.dropdown)},a.prototype.buildItems=function(){var n=this;this.dropdown.innerHTML="",this.result.forEach(function(i){var o=(0,h.htmlToElement)('<a class="block" href="'.concat(i.url,'" target="_blank"></a>'));o.append(n.itemTemplate(i)),n.dropdown.append(o)})},a.prototype.itemTemplate=function(n){var i=new RegExp(this.val,"gi"),o=n.title.replace(i,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),r=n.description.replace(i,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),c=this.dropdownItemTemplatesByType?this.dropdownItemTemplatesByType.find(function(J){return J.type===n.type}):null,y=c?(0,h.htmlToElement)(c.markup):(0,h.htmlToElement)(this.dropdownItemTemplate);this.dropdownItemClasses&&(0,h.classToClassList)(this.dropdownItemClasses,y);var O=y.querySelector("[data-title]");O?O.append((0,h.htmlToElement)("<span>".concat(o,"</span>"))):y.append((0,h.htmlToElement)("<span>".concat(o,"</span>")));var L=y.querySelector("[data-description]");if(L)L.append((0,h.htmlToElement)("<span>".concat(r,"</span>")));else if(!c){var _=(0,h.htmlToElement)("<br />");y.append(_),y.append((0,h.htmlToElement)("<span>".concat(r,"</span>")))}return y},a.getInstance=function(n){var i=window.$hsSearchByJsonCollection.find(function(o){return o.element.el===(typeof n=="string"?document.querySelector(n):n)});return i?i.element:null},a.autoInit=function(){window.$hsSearchByJsonCollection||(window.$hsSearchByJsonCollection=[]),document.querySelectorAll("[data-hs-search-by-json]:not(.--prevent-on-load-init)").forEach(function(n){window.$hsSearchByJsonCollection.find(function(i){var o;return((o=i==null?void 0:i.element)===null||o===void 0?void 0:o.el)===n})||new a(n)})},a}(A(737).default);window.addEventListener("load",function(){s.autoInit()}),typeof window<"u"&&(window.HSSearchByJson=s),m.default=s},233:function(C,m,A){/*
 * HSSelect
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(a,n){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,o){i.__proto__=o}||function(i,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])},f(a,n)},function(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=a}f(a,n),a.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}),g=this&&this.__assign||function(){return g=Object.assign||function(a){for(var n,i=1,o=arguments.length;i<o;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r]);return a},g.apply(this,arguments)},x=this&&this.__spreadArray||function(a,n,i){if(i||arguments.length===2)for(var o,r=0,c=n.length;r<c;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return a.concat(o||Array.prototype.slice.call(n))};Object.defineProperty(m,"__esModule",{value:!0});var u=A(969),h=A(737),s=A(190),e=function(a){function n(i,o){var r,c=a.call(this,i,o)||this,y=i.getAttribute("data-hs-select"),O=y?JSON.parse(y):{},L=g(g({},O),o);return c.value=(L==null?void 0:L.value)||c.el.value||null,c.placeholder=(L==null?void 0:L.placeholder)||"Select...",c.hasSearch=(L==null?void 0:L.hasSearch)||!1,c.mode=(L==null?void 0:L.mode)||"default",c.viewport=(L==null?void 0:L.viewport)!==void 0?document.querySelector(L==null?void 0:L.viewport):null,c.isOpened=!!(L!=null&&L.isOpened)||!1,c.isMultiple=c.el.hasAttribute("multiple")||!1,c.isDisabled=c.el.hasAttribute("disabled")||!1,c.toggleTag=(L==null?void 0:L.toggleTag)||null,c.toggleClasses=(L==null?void 0:L.toggleClasses)||null,c.toggleCountText=(L==null?void 0:L.toggleCountText)||null,c.toggleCountTextMinItems=(L==null?void 0:L.toggleCountTextMinItems)||1,c.tagsClasses=(L==null?void 0:L.tagsClasses)||null,c.tagsItemTemplate=(L==null?void 0:L.tagsItemTemplate)||null,c.tagsItemClasses=(L==null?void 0:L.tagsItemClasses)||null,c.tagsInputClasses=(L==null?void 0:L.tagsInputClasses)||null,c.dropdownTag=(L==null?void 0:L.dropdownTag)||null,c.dropdownClasses=(L==null?void 0:L.dropdownClasses)||null,c.dropdownDirectionClasses=(L==null?void 0:L.dropdownDirectionClasses)||null,c.dropdownSpace=(L==null?void 0:L.dropdownSpace)||10,c.searchWrapperTemplate=(L==null?void 0:L.searchWrapperTemplate)||null,c.searchWrapperClasses=(L==null?void 0:L.searchWrapperClasses)||"bg-white p-2 sticky top-0",c.searchClasses=(L==null?void 0:L.searchClasses)||"block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 py-2 px-3 my-2 mx-4",c.searchPlaceholder=(L==null?void 0:L.searchPlaceholder)||"Search...",c.searchNoResultText=(L==null?void 0:L.searchNoResultText)||"No options found...",c.searchNoResultClasses=(L==null?void 0:L.searchNoResultClasses)||"px-4 text-sm",c.optionTemplate=(L==null?void 0:L.optionTemplate)||null,c.optionTag=(L==null?void 0:L.optionTag)||null,c.optionClasses=(L==null?void 0:L.optionClasses)||null,c.descriptionClasses=(L==null?void 0:L.descriptionClasses)||null,c.iconClasses=(L==null?void 0:L.iconClasses)||null,c.isAddTagOnEnter=(r=L==null?void 0:L.isAddTagOnEnter)===null||r===void 0||r,c.animationInProcess=!1,c.selectOptions=[],c.init(),c}return H(n,a),n.prototype.init=function(){this.createCollection(window.$hsSelectCollection,this),this.build()},n.prototype.build=function(){var i=this;if(this.el.style.display="none",this.el.children&&Array.from(this.el.children).filter(function(c){return c.value&&c.value!==""}).forEach(function(c){var y=c.getAttribute("data-hs-select-option");i.selectOptions=x(x([],i.selectOptions,!0),[{title:c.textContent,val:c.value,options:y!=="undefined"?JSON.parse(y):null}],!1)}),this.isMultiple){var o=Array.from(this.el.options).filter(function(c){return c.selected});if(o){var r=[];o.forEach(function(c){r.push(c.value)}),this.value=r}}this.buildWrapper(),this.mode==="tags"?this.buildTags():this.buildToggle(),this.buildDropdown()},n.prototype.buildWrapper=function(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("hs-select","relative"),this.el.before(this.wrapper),this.wrapper.append(this.el)},n.prototype.buildToggle=function(){var i,o,r,c=this;this.toggleTextWrapper=document.createElement("span"),this.toggleTextWrapper.classList.add("truncate"),this.toggle=(0,u.htmlToElement)(this.toggleTag||"<div></div>"),o=this.toggle.querySelector("[data-icon]"),r=this.toggle.querySelector("[data-title]"),!this.isMultiple&&o&&this.setToggleIcon(),!this.isMultiple&&r&&this.setToggleTitle(),this.isMultiple?this.toggleTextWrapper.innerHTML=this.value.length?this.stringFromValue():this.placeholder:this.toggleTextWrapper.innerHTML=((i=this.getItemByValue(this.value))===null||i===void 0?void 0:i.title)||this.placeholder,r||this.toggle.append(this.toggleTextWrapper),this.toggleClasses&&(0,u.classToClassList)(this.toggleClasses,this.toggle),this.isDisabled&&this.toggle.classList.add("disabled"),this.wrapper&&this.wrapper.append(this.toggle),this.toggle.addEventListener("click",function(){if(c.isDisabled)return!1;c.isOpened?c.close():c.open()})},n.prototype.setToggleIcon=function(){var i,o,r=this.toggle.querySelector("[data-icon]");if(r.innerHTML="",r){var c=(0,u.htmlToElement)(((o=(i=this.getItemByValue(this.value))===null||i===void 0?void 0:i.options)===null||o===void 0?void 0:o.icon)||"");r.append(c),c?r.classList.remove("hidden"):r.classList.add("hidden")}},n.prototype.setToggleTitle=function(){var i,o=this.toggle.querySelector("[data-title]");if(o.classList.add("truncate"),o.innerHTML="",o){var r=((i=this.getItemByValue(this.value))===null||i===void 0?void 0:i.title)||this.placeholder;o.innerHTML=r,this.toggle.append(o)}},n.prototype.buildTags=function(){this.tags=document.createElement("div"),this.tags.classList.add("flex"),this.tagsClasses&&(0,u.classToClassList)(this.tagsClasses,this.tags),this.buildTagsInput(),this.buildTagsItems(),this.setTagsItems(),this.wrapper&&this.wrapper.append(this.tags)},n.prototype.buildTagsItems=function(){this.tagsItems=document.createElement("div"),this.tagsItems.classList.add("flex","flex-wrap","flex-0","items-center"),this.setTagsItems(),this.tags.append(this.tagsItems)},n.prototype.buildTagsItem=function(i){var o,r,c,y,O,L,_,J=this,nt=this.getItemByValue(i),rt=document.createElement("div");if(this.tagsItemClasses&&(0,u.classToClassList)(this.tagsItemClasses,rt),this.tagsItemTemplate&&(y=(0,u.htmlToElement)(this.tagsItemTemplate),rt.append(y)),(o=nt==null?void 0:nt.options)===null||o===void 0?void 0:o.icon){var It=(0,u.htmlToElement)((r=nt==null?void 0:nt.options)===null||r===void 0?void 0:r.icon);(_=y?y.querySelector("[data-icon]"):document.createElement("span")).append(It),y||rt.append(_)}y&&y.querySelector("[data-icon]")&&!(!((c=nt==null?void 0:nt.options)===null||c===void 0)&&c.icon)&&y.querySelector("[data-icon]").classList.add("hidden"),(O=y?y.querySelector("[data-title]"):document.createElement("span")).textContent=nt.title||"",y||rt.append(O),y?L=y.querySelector("[data-remove]"):((L=document.createElement("span")).textContent="X",rt.append(L)),L.addEventListener("click",function(){J.value=J.value.filter(function(Ht){return Ht!==i}),J.unselectMultipleItems(),J.setTagsItems(),J.selectMultipleItems()}),this.tagsItems.append(rt)},n.prototype.getItemByValue=function(i){return this.selectOptions.find(function(o){return o.val===i})},n.prototype.setTagsItems=function(){var i=this;this.tagsItems.innerHTML="",this.value&&(this.value.forEach(function(o){i.buildTagsItem(o)}),this.tagsInput.readOnly=!0),this.value.length||(this.tagsInput.placeholder=this.placeholder,this.tagsInput.readOnly=!1)},n.prototype.buildTagsInput=function(){var i=this;this.tagsInput=document.createElement("input"),this.tagsInput.placeholder=this.placeholder,this.tagsInputClasses&&(0,u.classToClassList)(this.tagsInputClasses,this.tagsInput),this.tagsInput.addEventListener("focus",function(){return i.open()}),this.tagsInput.addEventListener("input",(0,u.debounce)(function(o){return i.searchOptions(o.target.value)})),this.tagsInput.addEventListener("keydown",function(o){if(o.key==="Enter"&&i.isAddTagOnEnter){var r=o.target.value;if(i.selectOptions.find(function(c){return c.val===r}))return!1;i.addSelectOption(r,r),i.buildOption(r,r),i.dropdown.querySelector('[data-value="'.concat(r,'"]')).click(),i.resetTagsInputField(),i.close()}}),this.tags.append(this.tagsInput)},n.prototype.buildDropdown=function(){var i=this;this.dropdown=(0,u.htmlToElement)(this.dropdownTag||"<div></div>"),this.dropdown.classList.add("absolute","top-full"),this.isOpened||this.dropdown.classList.add("hidden"),this.dropdownClasses&&(0,u.classToClassList)(this.dropdownClasses,this.dropdown),this.wrapper&&this.wrapper.append(this.dropdown),this.dropdown&&this.hasSearch&&this.buildSearch(),this.selectOptions&&this.selectOptions.forEach(function(o,r){return i.buildOption(o.title,o.val,o.options,"".concat(r))})},n.prototype.buildSearch=function(){var i,o=this;this.searchWrapper=(0,u.htmlToElement)(this.searchWrapperTemplate||"<div></div>"),this.searchWrapperClasses&&(0,u.classToClassList)(this.searchWrapperClasses,this.searchWrapper),i=this.searchWrapper.querySelector("[data-input]"),this.search=(0,u.htmlToElement)('<input type="text" />'),this.search.placeholder=this.searchPlaceholder,this.searchClasses&&(0,u.classToClassList)(this.searchClasses,this.search),this.search.addEventListener("input",(0,u.debounce)(function(r){return o.searchOptions(r.target.value)})),i?i.append(this.search):this.searchWrapper.append(this.search),this.dropdown.append(this.searchWrapper)},n.prototype.buildOption=function(i,o,r,c){var y=this;c===void 0&&(c="1");var O=null,L=(0,u.htmlToElement)(this.optionTag||"<div></div>");if(L.setAttribute("data-value",o),L.setAttribute("data-title-value",i),L.setAttribute("tabIndex",c),L.classList.add("cursor-pointer"),this.optionTemplate&&(O=(0,u.htmlToElement)(this.optionTemplate),L.append(O)),O?O.querySelector("[data-title]").textContent=i||"":L.textContent=i||"",r){if(r.icon){var _=(0,u.htmlToElement)(r.icon);if(_.classList.add("mw-full"),O)O.querySelector("[data-icon]").append(_);else{var J=(0,u.htmlToElement)("<div></div>");this.iconClasses&&(0,u.classToClassList)(this.iconClasses,J),J.append(_),L.append(J)}}if(r.description)if(O)O.querySelector("[data-description]").append(r.description);else{var nt=(0,u.htmlToElement)("<div></div>");nt.textContent=r.description,this.descriptionClasses&&(0,u.classToClassList)(this.descriptionClasses,nt),L.append(nt)}}O&&O.querySelector("[data-icon]")&&!r&&!(r!=null&&r.icon)&&O.querySelector("[data-icon]").classList.add("hidden"),this.value&&(this.isMultiple?this.value.includes(o):this.value===o)&&L.classList.add("selected"),L.addEventListener("click",function(){return y.onSelectOption(o)}),this.optionClasses&&(0,u.classToClassList)(this.optionClasses,L),this.dropdown&&this.dropdown.append(L)},n.prototype.destroyOption=function(i){var o=this.dropdown.querySelector('[data-value="'.concat(i,'"]'));if(!o)return!1;o.remove()},n.prototype.buildOriginalOption=function(i,o,r){var c=(0,u.htmlToElement)("<option></option>");c.setAttribute("value",o),c.setAttribute("data-hs-select-option",JSON.stringify(r)),c.innerText=i,this.el.append(c)},n.prototype.destroyOriginalOption=function(i){var o=this.el.querySelector('[value="'.concat(i,'"]'));if(!o)return!1;o.remove()},n.prototype.onSelectOption=function(i){this.clearSelections(),this.isMultiple?(this.value=this.value.includes(i)?Array.from(this.value).filter(function(o){return o!==i}):x(x([],Array.from(this.value),!0),[i],!1),this.selectMultipleItems(),this.setNewValue()):(this.value=i,this.selectSingleItem(),this.setNewValue()),this.fireEvent("change",this.value),(0,u.dispatch)("change.hs.select",this.el,this.value),this.mode==="tags"&&this.resetTagsInputField(),this.isMultiple||(this.toggle.querySelector("[data-icon]")&&this.setToggleIcon(),this.toggle.querySelector("[data-title]")&&this.setToggleTitle(),this.close()),this.value.length||this.mode!=="tags"||(this.tagsInput.placeholder=this.placeholder)},n.prototype.addSelectOption=function(i,o,r){this.selectOptions=x(x([],this.selectOptions,!0),[{title:i,val:o,options:r}],!1)},n.prototype.removeSelectOption=function(i){if(!this.selectOptions.some(function(o){return o.val===i}))return!1;this.selectOptions=this.selectOptions.filter(function(o){return o.val!==i})},n.prototype.resetTagsInputField=function(){this.tagsInput.value="",this.tagsInput.placeholder="",this.searchOptions("")},n.prototype.clearSelections=function(){Array.from(this.dropdown.children).forEach(function(i){i.classList.contains("selected")&&i.classList.remove("selected")}),Array.from(this.el.children).forEach(function(i){i.selected&&(i.selected=!1)})},n.prototype.setNewValue=function(){this.mode==="tags"?this.setTagsItems():this.value.length?this.toggleTextWrapper.innerHTML=this.stringFromValue():this.toggleTextWrapper.innerHTML=this.placeholder},n.prototype.stringFromValue=function(){var i=this,o=[];return this.selectOptions.forEach(function(r){i.isMultiple?i.value.includes(r.val)&&o.push(r.title):i.value===r.val&&o.push(r.title)}),this.toggleCountText&&this.toggleCountText!==""&&o.length>=this.toggleCountTextMinItems?"".concat(o.length," ").concat(this.toggleCountText):o.join(", ")},n.prototype.selectSingleItem=function(){var i=this;Array.from(this.el.children).find(function(o){return i.value===o.value}).selected=!0,Array.from(this.dropdown.children).find(function(o){return i.value===o.getAttribute("data-value")}).classList.add("selected")},n.prototype.selectMultipleItems=function(){var i=this;Array.from(this.dropdown.children).filter(function(o){return i.value.includes(o.getAttribute("data-value"))}).forEach(function(o){return o.classList.add("selected")}),Array.from(this.el.children).filter(function(o){return i.value.includes(o.value)}).forEach(function(o){return o.selected=!0})},n.prototype.unselectMultipleItems=function(){Array.from(this.dropdown.children).forEach(function(i){return i.classList.remove("selected")}),Array.from(this.el.children).forEach(function(i){return i.selected=!1})},n.prototype.searchOptions=function(i){this.searchNoResult&&(this.searchNoResult.remove(),this.searchNoResult=null),this.searchNoResult=(0,u.htmlToElement)("<span></span>"),this.searchNoResult.innerText=this.searchNoResultText,(0,u.classToClassList)(this.searchNoResultClasses,this.searchNoResult);var o=this.dropdown.querySelectorAll("[data-value]"),r=!1;o.forEach(function(c){c.getAttribute("data-title-value").toLowerCase().includes(i.toLowerCase())?(c.classList.remove("hidden"),r=!0):c.classList.add("hidden")}),r||this.dropdown.append(this.searchNoResult)},n.prototype.eraseToggleIcon=function(){var i=this.toggle.querySelector("[data-icon]");i&&(i.innerHTML=null,i.classList.add("hidden"))},n.prototype.eraseToggleTitle=function(){var i=this.toggle.querySelector("[data-title]");i?i.innerHTML=this.placeholder:this.toggleTextWrapper.innerHTML=this.placeholder},n.prototype.destroy=function(){var i=this.el.parentElement.parentElement;this.el.classList.remove("hidden"),this.el.style.display="",i.prepend(this.el),i.querySelector(".hs-select").remove(),this.wrapper=null},n.prototype.open=function(){var i=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.dropdown.classList.remove("hidden"),this.recalculateDirection(),setTimeout(function(){i.wrapper.classList.add("active"),i.dropdown.classList.add("opened"),i.hasSearch&&i.search.focus(),i.animationInProcess=!1}),this.isOpened=!0},n.prototype.close=function(){var i,o,r,c=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.wrapper.classList.remove("active"),this.dropdown.classList.remove("opened","bottom-full","top-full"),!((i=this.dropdownDirectionClasses)===null||i===void 0)&&i.bottom&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),!((o=this.dropdownDirectionClasses)===null||o===void 0)&&o.top&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.style.marginBottom="",(0,u.afterTransition)(this.dropdown,function(){c.dropdown.classList.add("hidden"),c.hasSearch&&(c.search.value="",c.search.dispatchEvent(new Event("input",{bubbles:!0})),c.search.blur()),c.animationInProcess=!1}),(r=this.dropdown.querySelector(".hs-select-option-highlighted"))===null||r===void 0||r.classList.remove("hs-select-option-highlighted"),this.isOpened=!1},n.prototype.addOption=function(i){var o=this,r="".concat(this.selectOptions.length),c=function(y){var O=y.title,L=y.val,_=y.options;o.selectOptions.some(function(J){return J.val===L})||(o.addSelectOption(O,L,_),o.buildOption(O,L,_,r),o.buildOriginalOption(O,L,_))};Array.isArray(i)?i.forEach(function(y){c(y)}):c(i)},n.prototype.removeOption=function(i){var o=this,r=function(c){o.selectOptions.some(function(y){return y.val===c})&&(o.removeSelectOption(c),o.destroyOption(c),o.destroyOriginalOption(c),o.value===c&&(o.value=null,o.eraseToggleTitle(),o.eraseToggleIcon()))};Array.isArray(i)?i.forEach(function(c){r(c)}):r(i)},n.prototype.recalculateDirection=function(){var i,o,r,c;(0,u.isEnoughSpace)(this.dropdown,this.toggle||this.tagsInput,"bottom",this.dropdownSpace,this.viewport)?(this.dropdown.classList.remove("bottom-full"),!((i=this.dropdownDirectionClasses)===null||i===void 0)&&i.bottom&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="",this.dropdown.classList.add("top-full"),!((o=this.dropdownDirectionClasses)===null||o===void 0)&&o.top&&this.dropdown.classList.add(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="".concat(this.dropdownSpace,"px")):(this.dropdown.classList.remove("top-full"),!((r=this.dropdownDirectionClasses)===null||r===void 0)&&r.top&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.classList.add("bottom-full"),!((c=this.dropdownDirectionClasses)===null||c===void 0)&&c.bottom&&this.dropdown.classList.add(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="".concat(this.dropdownSpace,"px"))},n.getInstance=function(i,o){var r=window.$hsSelectCollection.find(function(c){return c.element.el===(typeof i=="string"?document.querySelector(i):i)});return r?o?r:r.element:null},n.autoInit=function(){window.$hsSelectCollection||(window.$hsSelectCollection=[]),document.querySelectorAll("[data-hs-select]:not(.--prevent-on-load-init)").forEach(function(i){if(!window.$hsSelectCollection.find(function(c){var y;return((y=c==null?void 0:c.element)===null||y===void 0?void 0:y.el)===i})){var o=i.getAttribute("data-hs-select"),r=o?JSON.parse(o):{};new n(i,r)}}),window.$hsSelectCollection&&(window.addEventListener("click",function(i){var o=i.target;n.closeCurrentlyOpened(o)}),document.addEventListener("keydown",function(i){return n.accessibility(i)}))},n.close=function(i){var o=window.$hsSelectCollection.find(function(r){return r.element.el===(typeof i=="string"?document.querySelector(i):i)});o&&o.element.isOpened&&o.element.close()},n.closeCurrentlyOpened=function(i){if(i===void 0&&(i=null),!i.closest(".hs-select.active")){var o=window.$hsSelectCollection.filter(function(r){return r.element.isOpened})||null;o&&o.forEach(function(r){r.element.close()})}},n.accessibility=function(i){var o=window.$hsSelectCollection.find(function(r){return r.element.isOpened});if(o&&s.SELECT_ACCESSIBILITY_KEY_SET.includes(i.code)&&!i.metaKey)switch(console.log(o),console.log("Key code:",i.code),i.code){case"Escape":i.preventDefault(),this.onEscape();break;case"ArrowUp":i.preventDefault(),this.onArrow();break;case"ArrowDown":i.preventDefault(),this.onArrow(!1);break;case"Tab":i.preventDefault(),this.onTab(i.shiftKey);break;case"Home":i.preventDefault(),this.onStartEnd();break;case"End":i.preventDefault(),this.onStartEnd(!1);break;case"Enter":i.preventDefault(),this.onEnter(i)}},n.onEscape=function(){var i=window.$hsSelectCollection.find(function(o){return o.element.isOpened});i&&i.element.close()},n.onArrow=function(i){i===void 0&&(i=!0);var o=window.$hsSelectCollection.find(function(L){return L.element.isOpened});if(o){var r=o.element.dropdown;if(!r)return!1;var c=(i?Array.from(r.querySelectorAll(":scope > *:not(.hidden)")).reverse():Array.from(r.querySelectorAll(":scope > *:not(.hidden)"))).filter(function(L){return!L.classList.contains("disabled")}),y=r.querySelector(".hs-select-option-highlighted");y||c[0].classList.add("hs-select-option-highlighted");var O=c.findIndex(function(L){return L===y});O+1<c.length&&O++,c[O].focus(),y&&y.classList.remove("hs-select-option-highlighted"),c[O].classList.add("hs-select-option-highlighted")}},n.onTab=function(i){i===void 0&&(i=!0);var o=window.$hsSelectCollection.find(function(L){return L.element.isOpened});if(o){var r=o.element.dropdown;if(!r)return!1;var c=(i?Array.from(r.querySelectorAll(":scope >  *:not(.hidden)")).reverse():Array.from(r.querySelectorAll(":scope >  *:not(.hidden)"))).filter(function(L){return!L.classList.contains("disabled")}),y=r.querySelector(".hs-select-option-highlighted");y||c[0].classList.add("hs-select-option-highlighted");var O=c.findIndex(function(L){return L===y});if(!(O+1<c.length))return y&&y.classList.remove("hs-select-option-highlighted"),o.element.close(),o.element.toggle.focus(),!1;c[++O].focus(),y&&y.classList.remove("hs-select-option-highlighted"),c[O].classList.add("hs-select-option-highlighted")}},n.onStartEnd=function(i){i===void 0&&(i=!0);var o=window.$hsSelectCollection.find(function(O){return O.element.isOpened});if(o){var r=o.element.dropdown;if(!r)return!1;var c=(i?Array.from(r.querySelectorAll(":scope >  *:not(.hidden)")):Array.from(r.querySelectorAll(":scope >  *:not(.hidden)")).reverse()).filter(function(O){return!O.classList.contains("disabled")}),y=r.querySelector(".hs-select-option-highlighted");c.length&&(c[0].focus(),y&&y.classList.remove("hs-select-option-highlighted"),c[0].classList.add("hs-select-option-highlighted"))}},n.onEnter=function(i){var o=i.target.previousSibling;if(window.$hsSelectCollection.find(function(y){return y.element.el===o})){var r=window.$hsSelectCollection.find(function(y){return y.element.isOpened}),c=window.$hsSelectCollection.find(function(y){return y.element.el===o});r.element.close(),c.element.open()}else(c=window.$hsSelectCollection.find(function(y){return y.element.isOpened}))&&c.element.onSelectOption(i.target.dataset.value||"")},n}(h.default);window.addEventListener("load",function(){e.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsSelectCollection)return!1;var a=window.$hsSelectCollection.find(function(n){return n.element.isOpened});a&&a.element.recalculateDirection()}),typeof window<"u"&&(window.HSSelect=e),m.default=e},957:function(C,m,A){/*
 * HSStepper
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a){var n=h.call(this,e,a)||this,i=e.getAttribute("data-hs-stepper"),o=i?JSON.parse(i):{},r=g(g({},o),a);return n.currentIndex=(r==null?void 0:r.currentIndex)||1,n.mode=(r==null?void 0:r.mode)||"linear",n.isCompleted=(r==null?void 0:r.isCompleted)!==void 0&&(r==null?void 0:r.isCompleted),n.totalSteps=1,n.navItems=[],n.contentItems=[],n.init(),n}return H(s,h),s.prototype.init=function(){this.createCollection(window.$hsStepperCollection,this),this.buildNav(),this.buildContent(),this.buildButtons(),this.setTotalSteps()},s.prototype.getUncompletedSteps=function(e){return e===void 0&&(e=!1),this.navItems.filter(function(a){var n=a.isCompleted,i=a.isSkip;return e?!n||i:!n&&!i})},s.prototype.setTotalSteps=function(){var e=this;this.navItems.forEach(function(a){var n=a.index;n>e.totalSteps&&(e.totalSteps=n)})},s.prototype.buildNav=function(){var e=this;this.el.querySelectorAll("[data-hs-stepper-nav-item]").forEach(function(a){return e.addNavItem(a)}),this.navItems.forEach(function(a){return e.buildNavItem(a)})},s.prototype.buildNavItem=function(e){var a=this,n=e.index,i=e.isDisabled,o=e.el;n===this.currentIndex&&this.setCurrentNavItem(),(this.mode!=="linear"||i)&&o.addEventListener("click",function(){return a.handleNavItemClick(e)})},s.prototype.addNavItem=function(e){var a=JSON.parse(e.getAttribute("data-hs-stepper-nav-item")),n=a.index,i=a.isFinal,o=i!==void 0&&i,r=a.isCompleted,c=r!==void 0&&r,y=a.isSkip,O=y!==void 0&&y,L=a.isOptional,_=L!==void 0&&L,J=a.isDisabled,nt=J!==void 0&&J,rt=a.isProcessed,It=rt!==void 0&&rt,Ht=a.hasError,$t=Ht!==void 0&&Ht;c&&e.classList.add("success"),O&&e.classList.add("skipped"),nt&&(e.tagName!=="BUTTON"&&e.tagName!=="INPUT"||e.setAttribute("disabled","disabled"),e.classList.add("disabled")),$t&&e.classList.add("error"),this.navItems.push({index:n,isFinal:o,isCompleted:c,isSkip:O,isOptional:_,isDisabled:nt,isProcessed:It,hasError:$t,el:e})},s.prototype.setCurrentNavItem=function(){var e=this;this.navItems.forEach(function(a){var n=a.index,i=a.el;n===e.currentIndex?e.setCurrentNavItemActions(i):e.unsetCurrentNavItemActions(i)})},s.prototype.setCurrentNavItemActions=function(e){e.classList.add("active"),this.fireEvent("active",this.currentIndex),(0,x.dispatch)("active.hs.stepper",this.el,this.currentIndex)},s.prototype.getNavItem=function(e){return e===void 0&&(e=this.currentIndex),this.navItems.find(function(a){return a.index===e})},s.prototype.setProcessedNavItemActions=function(e){e.isProcessed=!0,e.el.classList.add("processed")},s.prototype.setErrorNavItemActions=function(e){e.hasError=!0,e.el.classList.add("error")},s.prototype.unsetCurrentNavItemActions=function(e){e.classList.remove("active")},s.prototype.handleNavItemClick=function(e){var a=e.index;this.currentIndex=a,this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep()},s.prototype.buildContent=function(){var e=this;this.el.querySelectorAll("[data-hs-stepper-content-item]").forEach(function(a){return e.addContentItem(a)}),this.navItems.forEach(function(a){return e.buildContentItem(a)})},s.prototype.buildContentItem=function(e){e.index===this.currentIndex&&this.setCurrentContentItem()},s.prototype.addContentItem=function(e){var a=JSON.parse(e.getAttribute("data-hs-stepper-content-item")),n=a.index,i=a.isFinal,o=i!==void 0&&i,r=a.isCompleted,c=r!==void 0&&r,y=a.isSkip,O=y!==void 0&&y;c&&e.classList.add("success"),O&&e.classList.add("skipped"),this.contentItems.push({index:n,isFinal:o,isCompleted:c,isSkip:O,el:e})},s.prototype.setCurrentContentItem=function(){var e=this;if(this.isCompleted){var a=this.contentItems.find(function(i){return i.isFinal}),n=this.contentItems.filter(function(i){return!i.isFinal});return a.el.style.display="",n.forEach(function(i){return i.el.style.display="none"}),!1}this.contentItems.forEach(function(i){var o=i.index,r=i.el;o===e.currentIndex?e.setCurrentContentItemActions(r):e.unsetCurrentContentItemActions(r)})},s.prototype.hideAllContentItems=function(){this.contentItems.forEach(function(e){return e.el.style.display="none"})},s.prototype.setCurrentContentItemActions=function(e){e.style.display=""},s.prototype.unsetCurrentContentItemActions=function(e){e.style.display="none"},s.prototype.disableAll=function(){var e=this.getNavItem(this.currentIndex);e.hasError=!1,e.isCompleted=!1,e.isDisabled=!1,e.el.classList.remove("error","success"),this.disableButtons()},s.prototype.disableNavItemActions=function(e){e.isDisabled=!0,e.el.classList.add("disabled")},s.prototype.enableNavItemActions=function(e){e.isDisabled=!1,e.el.classList.remove("disabled")},s.prototype.buildButtons=function(){this.backBtn=this.el.querySelector("[data-hs-stepper-back-btn]"),this.nextBtn=this.el.querySelector("[data-hs-stepper-next-btn]"),this.skipBtn=this.el.querySelector("[data-hs-stepper-skip-btn]"),this.completeStepBtn=this.el.querySelector("[data-hs-stepper-complete-step-btn]"),this.finishBtn=this.el.querySelector("[data-hs-stepper-finish-btn]"),this.resetBtn=this.el.querySelector("[data-hs-stepper-reset-btn]"),this.buildBackButton(),this.buildNextButton(),this.buildSkipButton(),this.buildCompleteStepButton(),this.buildFinishButton(),this.buildResetButton()},s.prototype.buildBackButton=function(){var e=this;this.backBtn&&(this.checkForTheFirstStep(),this.backBtn.addEventListener("click",function(){if(e.handleBackButtonClick(),e.mode==="linear"){var a=e.navItems.find(function(i){return i.index===e.currentIndex}),n=e.contentItems.find(function(i){return i.index===e.currentIndex});if(!a||!n)return;a.isCompleted&&(a.isCompleted=!1,a.isSkip=!1,a.el.classList.remove("success","skipped")),n.isCompleted&&(n.isCompleted=!1,n.isSkip=!1,n.el.classList.remove("success","skipped")),e.mode==="linear"&&e.currentIndex!==e.totalSteps&&(e.nextBtn&&(e.nextBtn.style.display=""),e.completeStepBtn&&(e.completeStepBtn.style.display="")),e.showSkipButton(),e.showFinishButton(),e.showCompleteStepButton()}}))},s.prototype.handleBackButtonClick=function(){this.currentIndex!==1&&(this.mode==="linear"&&this.removeOptionalClasses(),this.currentIndex--,this.mode==="linear"&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.fireEvent("back",this.currentIndex),(0,x.dispatch)("back.hs.stepper",this.el,this.currentIndex))},s.prototype.checkForTheFirstStep=function(){this.currentIndex===1?this.setToDisabled(this.backBtn):this.setToNonDisabled(this.backBtn)},s.prototype.setToDisabled=function(e){e.tagName!=="BUTTON"&&e.tagName!=="INPUT"||e.setAttribute("disabled","disabled"),e.classList.add("disabled")},s.prototype.setToNonDisabled=function(e){e.tagName!=="BUTTON"&&e.tagName!=="INPUT"||e.removeAttribute("disabled"),e.classList.remove("disabled")},s.prototype.buildNextButton=function(){var e=this;this.nextBtn&&this.nextBtn.addEventListener("click",function(){var a;if(e.fireEvent("beforeNext",e.currentIndex),(0,x.dispatch)("beforeNext.hs.stepper",e.el,e.currentIndex),(a=e.getNavItem(e.currentIndex))===null||a===void 0?void 0:a.isProcessed)return e.disableAll(),!1;e.goToNext()})},s.prototype.unsetProcessedNavItemActions=function(e){e.isProcessed=!1,e.el.classList.remove("processed")},s.prototype.handleNextButtonClick=function(e){if(e===void 0&&(e=!0),e)this.currentIndex===this.totalSteps?this.currentIndex=1:this.currentIndex++;else{var a=this.getUncompletedSteps();if(a.length===1){var n=a[0].index;this.currentIndex=n}else{if(this.currentIndex===this.totalSteps)return;this.currentIndex++}}this.mode==="linear"&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton(),this.showFinishButton(),this.showCompleteStepButton(),this.fireEvent("next",this.currentIndex),(0,x.dispatch)("next.hs.stepper",this.el,this.currentIndex)},s.prototype.removeOptionalClasses=function(){var e=this,a=this.navItems.find(function(i){return i.index===e.currentIndex}),n=this.contentItems.find(function(i){return i.index===e.currentIndex});a.isSkip=!1,a.hasError=!1,a.isDisabled=!1,n.isSkip=!1,a.el.classList.remove("skipped","success","error"),n.el.classList.remove("skipped","success","error")},s.prototype.buildSkipButton=function(){var e=this;this.skipBtn&&(this.showSkipButton(),this.skipBtn.addEventListener("click",function(){e.handleSkipButtonClick(),e.mode==="linear"&&e.currentIndex===e.totalSteps&&(e.nextBtn&&(e.nextBtn.style.display="none"),e.completeStepBtn&&(e.completeStepBtn.style.display="none"),e.finishBtn&&(e.finishBtn.style.display=""))}))},s.prototype.setSkipItem=function(e){var a=this,n=this.navItems.find(function(o){return o.index===(e||a.currentIndex)}),i=this.contentItems.find(function(o){return o.index===(e||a.currentIndex)});n&&i&&(this.setSkipItemActions(n),this.setSkipItemActions(i))},s.prototype.setSkipItemActions=function(e){e.isSkip=!0,e.el.classList.add("skipped")},s.prototype.showSkipButton=function(){var e=this;if(this.skipBtn){var a=this.navItems.find(function(n){return n.index===e.currentIndex}).isOptional;this.skipBtn.style.display=a?"":"none"}},s.prototype.handleSkipButtonClick=function(){this.setSkipItem(),this.handleNextButtonClick(),this.fireEvent("skip",this.currentIndex),(0,x.dispatch)("skip.hs.stepper",this.el,this.currentIndex)},s.prototype.buildCompleteStepButton=function(){var e=this;this.completeStepBtn&&(this.completeStepBtnDefaultText=this.completeStepBtn.innerText,this.completeStepBtn.addEventListener("click",function(){return e.handleCompleteStepButtonClick()}))},s.prototype.changeTextAndDisableCompleteButtonIfStepCompleted=function(){var e=this,a=this.navItems.find(function(i){return i.index===e.currentIndex}),n=JSON.parse(this.completeStepBtn.getAttribute("data-hs-stepper-complete-step-btn")).completedText;a&&(a.isCompleted?(this.completeStepBtn.innerText=n||this.completeStepBtnDefaultText,this.completeStepBtn.setAttribute("disabled","disabled"),this.completeStepBtn.classList.add("disabled")):(this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")))},s.prototype.setCompleteItem=function(e){var a=this,n=this.navItems.find(function(o){return o.index===(e||a.currentIndex)}),i=this.contentItems.find(function(o){return o.index===(e||a.currentIndex)});n&&i&&(this.setCompleteItemActions(n),this.setCompleteItemActions(i))},s.prototype.setCompleteItemActions=function(e){e.isCompleted=!0,e.el.classList.add("success")},s.prototype.showCompleteStepButton=function(){this.completeStepBtn&&(this.getUncompletedSteps().length===1?this.completeStepBtn.style.display="none":this.completeStepBtn.style.display="")},s.prototype.handleCompleteStepButtonClick=function(){this.setCompleteItem(),this.fireEvent("complete",this.currentIndex),(0,x.dispatch)("complete.hs.stepper",this.el,this.currentIndex),this.handleNextButtonClick(!1),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton()},s.prototype.buildFinishButton=function(){var e=this;this.finishBtn&&(this.isCompleted&&this.setCompleted(),this.finishBtn.addEventListener("click",function(){return e.handleFinishButtonClick()}))},s.prototype.setCompleted=function(){this.el.classList.add("completed")},s.prototype.unsetCompleted=function(){this.el.classList.remove("completed")},s.prototype.showFinishButton=function(){this.finishBtn&&(this.getUncompletedSteps().length===1?this.finishBtn.style.display="":this.finishBtn.style.display="none")},s.prototype.handleFinishButtonClick=function(){var e=this,a=this.getUncompletedSteps(),n=this.getUncompletedSteps(!0),i=this.contentItems.find(function(r){return r.isFinal}).el;a.length&&a.forEach(function(r){var c=r.index;return e.setCompleteItem(c)}),this.currentIndex=this.totalSteps,this.setCurrentNavItem(),this.hideAllContentItems();var o=this.navItems.find(function(r){return r.index===e.currentIndex});(o?o.el:null).classList.remove("active"),i.style.display="block",this.backBtn&&(this.backBtn.style.display="none"),this.nextBtn&&(this.nextBtn.style.display="none"),this.skipBtn&&(this.skipBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"),this.finishBtn&&(this.finishBtn.style.display="none"),this.resetBtn&&(this.resetBtn.style.display=""),n.length<=1&&(this.isCompleted=!0,this.setCompleted()),this.fireEvent("finish",this.currentIndex),(0,x.dispatch)("finish.hs.stepper",this.el,this.currentIndex)},s.prototype.buildResetButton=function(){var e=this;this.resetBtn&&this.resetBtn.addEventListener("click",function(){return e.handleResetButtonClick()})},s.prototype.handleResetButtonClick=function(){var e=this;this.backBtn&&(this.backBtn.style.display=""),this.nextBtn&&(this.nextBtn.style.display=""),this.completeStepBtn&&(this.completeStepBtn.style.display="",this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")),this.resetBtn&&(this.resetBtn.style.display="none"),this.navItems.forEach(function(a){var n=a.el;a.isSkip=!1,a.isCompleted=!1,e.unsetCurrentNavItemActions(n),n.classList.remove("success","skipped")}),this.contentItems.forEach(function(a){var n=a.el;a.isSkip=!1,a.isCompleted=!1,e.unsetCurrentContentItemActions(n),n.classList.remove("success","skipped")}),this.currentIndex=1,this.setCurrentNavItem(),this.setCurrentContentItem(),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.unsetCompleted(),this.isCompleted=!1,this.fireEvent("reset",this.currentIndex),(0,x.dispatch)("reset.hs.stepper",this.el,this.currentIndex)},s.prototype.setProcessedNavItem=function(e){var a=this.getNavItem(e);a&&this.setProcessedNavItemActions(a)},s.prototype.unsetProcessedNavItem=function(e){var a=this.getNavItem(e);a&&this.unsetProcessedNavItemActions(a)},s.prototype.goToNext=function(){this.mode==="linear"&&this.setCompleteItem(),this.handleNextButtonClick(this.mode!=="linear"),this.mode==="linear"&&this.currentIndex===this.totalSteps&&(this.nextBtn&&(this.nextBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"))},s.prototype.disableButtons=function(){this.backBtn&&this.setToDisabled(this.backBtn),this.nextBtn&&this.setToDisabled(this.nextBtn)},s.prototype.enableButtons=function(){this.backBtn&&this.setToNonDisabled(this.backBtn),this.nextBtn&&this.setToNonDisabled(this.nextBtn)},s.prototype.setErrorNavItem=function(e){var a=this.getNavItem(e);a&&this.setErrorNavItemActions(a)},s.getInstance=function(e,a){var n=window.$hsStepperCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)});return n?a?n:n.element:null},s.autoInit=function(){window.$hsStepperCollection||(window.$hsStepperCollection=[]),document.querySelectorAll("[data-hs-stepper]:not(.--prevent-on-load-init)").forEach(function(e){window.$hsStepperCollection.find(function(a){var n;return((n=a==null?void 0:a.element)===null||n===void 0?void 0:n.el)===e})||new s(e)})},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSStepper=u),m.default=u},983:function(C,m,A){/*
 * HSStrongPassword
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a){var n=h.call(this,e,a)||this;n.isOpened=!1,n.strength=0,n.passedRules=new Set;var i=e.getAttribute("data-hs-strong-password"),o=i?JSON.parse(i):{},r=g(g({},o),a);return n.target=r!=null&&r.target?typeof(r==null?void 0:r.target)=="string"?document.querySelector(r.target):r.target:null,n.hints=r!=null&&r.hints?typeof(r==null?void 0:r.hints)=="string"?document.querySelector(r.hints):r.hints:null,n.stripClasses=(r==null?void 0:r.stripClasses)||null,n.minLength=(r==null?void 0:r.minLength)||6,n.mode=(r==null?void 0:r.mode)||"default",n.popoverSpace=(r==null?void 0:r.popoverSpace)||10,n.checksExclude=(r==null?void 0:r.checksExclude)||[],n.availableChecks=["lowercase","uppercase","numbers","special-characters","min-length"].filter(function(c){return!n.checksExclude.includes(c)}),n.specialCharactersSet=(r==null?void 0:r.specialCharactersSet)||"!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~",n.target&&n.init(),n}return H(s,h),s.prototype.init=function(){this.createCollection(window.$hsStrongPasswordCollection,this),this.availableChecks.length&&this.build()},s.prototype.build=function(){var e=this;this.buildStrips(),this.hints&&this.buildHints(),this.setStrength(this.target.value),this.target.addEventListener("input",function(a){e.setStrength(a.target.value)})},s.prototype.buildStrips=function(){if(this.el.innerHTML="",this.stripClasses)for(var e=0;e<this.availableChecks.length;e++){var a=(0,x.htmlToElement)("<div></div>");(0,x.classToClassList)(this.stripClasses,a),this.el.append(a)}},s.prototype.buildHints=function(){var e=this;this.weakness=this.hints.querySelector("[data-hs-strong-password-hints-weakness-text]")||null,this.rules=Array.from(this.hints.querySelectorAll("[data-hs-strong-password-hints-rule-text]"))||null,this.rules.forEach(function(a){var n,i=a.getAttribute("data-hs-strong-password-hints-rule-text");!((n=e.checksExclude)===null||n===void 0)&&n.includes(i)&&a.remove()}),this.weakness&&this.buildWeakness(),this.rules&&this.buildRules(),this.mode==="popover"&&(this.target.addEventListener("focus",function(){e.isOpened=!0,e.hints.classList.remove("hidden"),e.hints.classList.add("block"),e.recalculateDirection()}),this.target.addEventListener("blur",function(){e.isOpened=!1,e.hints.classList.remove("block","bottom-full","top-full"),e.hints.classList.add("hidden"),e.hints.style.marginTop="",e.hints.style.marginBottom=""}))},s.prototype.buildWeakness=function(){var e=this;this.checkStrength(this.target.value),this.setWeaknessText(),this.target.addEventListener("input",function(){return setTimeout(function(){return e.setWeaknessText()})})},s.prototype.buildRules=function(){var e=this;this.setRulesText(),this.target.addEventListener("input",function(){return setTimeout(function(){return e.setRulesText()})})},s.prototype.setWeaknessText=function(){var e=this.weakness.getAttribute("data-hs-strong-password-hints-weakness-text"),a=JSON.parse(e);this.weakness.textContent=a[this.strength]},s.prototype.setRulesText=function(){var e=this;this.rules.forEach(function(a){var n=a.getAttribute("data-hs-strong-password-hints-rule-text");e.checkIfPassed(a,e.passedRules.has(n))})},s.prototype.togglePopover=function(){var e=this.el.querySelector(".popover");e&&e.classList.toggle("show")},s.prototype.checkStrength=function(e){var a=new Set,n={lowercase:/[a-z]+/,uppercase:/[A-Z]+/,numbers:/[0-9]+/,"special-characters":new RegExp("[".concat(this.specialCharactersSet,"]"))},i=0;return this.availableChecks.includes("lowercase")&&e.match(n.lowercase)&&(i+=1,a.add("lowercase")),this.availableChecks.includes("uppercase")&&e.match(n.uppercase)&&(i+=1,a.add("uppercase")),this.availableChecks.includes("numbers")&&e.match(n.numbers)&&(i+=1,a.add("numbers")),this.availableChecks.includes("special-characters")&&e.match(n["special-characters"])&&(i+=1,a.add("special-characters")),this.availableChecks.includes("min-length")&&e.length>=this.minLength&&(i+=1,a.add("min-length")),e.length||(i=0),i===this.availableChecks.length?this.el.classList.add("accepted"):this.el.classList.remove("accepted"),this.strength=i,this.passedRules=a,{strength:this.strength,rules:this.passedRules}},s.prototype.checkIfPassed=function(e,a){a===void 0&&(a=!1);var n=e.querySelector("[data-check]"),i=e.querySelector("[data-uncheck]");a?(e.classList.add("active"),n.classList.remove("hidden"),i.classList.add("hidden")):(e.classList.remove("active"),n.classList.add("hidden"),i.classList.remove("hidden"))},s.prototype.setStrength=function(e){var a=this.checkStrength(e),n=a.strength,i={strength:n,rules:a.rules};this.hideStrips(n),this.fireEvent("change",i),(0,x.dispatch)("change.hs.strongPassword",this.el,i)},s.prototype.hideStrips=function(e){Array.from(this.el.children).forEach(function(a,n){n<e?a.classList.add("passed"):a.classList.remove("passed")})},s.prototype.recalculateDirection=function(){(0,x.isEnoughSpace)(this.hints,this.target,"bottom",this.popoverSpace)?(this.hints.classList.remove("bottom-full"),this.hints.classList.add("top-full"),this.hints.style.marginBottom="",this.hints.style.marginTop="".concat(this.popoverSpace,"px")):(this.hints.classList.remove("top-full"),this.hints.classList.add("bottom-full"),this.hints.style.marginTop="",this.hints.style.marginBottom="".concat(this.popoverSpace,"px"))},s.getInstance=function(e){var a=window.$hsStrongPasswordCollection.find(function(n){return n.element.el===(typeof e=="string"?document.querySelector(e):e)});return a?a.element:null},s.autoInit=function(){window.$hsStrongPasswordCollection||(window.$hsStrongPasswordCollection=[]),document.querySelectorAll("[data-hs-strong-password]:not(.--prevent-on-load-init)").forEach(function(e){if(!window.$hsStrongPasswordCollection.find(function(i){var o;return((o=i==null?void 0:i.element)===null||o===void 0?void 0:o.el)===e})){var a=e.getAttribute("data-hs-strong-password"),n=a?JSON.parse(a):{};new s(e,n)}})},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsStrongPasswordCollection)return!1;var h=window.$hsStrongPasswordCollection.find(function(s){return s.element.isOpened});h&&h.element.recalculateDirection()}),typeof window<"u"&&(window.HSStrongPassword=u),m.default=u},949:function(C,m,A){/*
 * HSTabs
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(s,e){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])},f(s,e)},function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=s}f(s,e),s.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)});Object.defineProperty(m,"__esModule",{value:!0});var g=A(969),x=A(737),u=A(190),h=function(s){function e(a,n,i){var o=s.call(this,a,n,i)||this;return o.toggles=o.el.querySelectorAll("[data-hs-tab]"),o.extraToggleId=o.el.getAttribute("hs-data-tab-select"),o.extraToggle=document.querySelector(o.extraToggleId),o.current=Array.from(o.toggles).find(function(r){return r.classList.contains("active")}),o.currentContentId=o.current.getAttribute("data-hs-tab"),o.currentContent=document.querySelector(o.currentContentId),o.prev=null,o.prevContentId=null,o.prevContent=null,o.init(),o}return H(e,s),e.prototype.init=function(){var a=this;this.createCollection(window.$hsTabsCollection,this),this.toggles.forEach(function(n){n.addEventListener("click",function(){return a.open(n)})}),this.extraToggle&&this.extraToggle.addEventListener("change",function(n){return a.change(n)})},e.prototype.open=function(a){this.prev=this.current,this.prevContentId=this.currentContentId,this.prevContent=this.currentContent,this.current=a,this.currentContentId=this.current.getAttribute("data-hs-tab"),this.currentContent=document.querySelector(this.currentContentId),this.prev.classList.remove("active"),this.prevContent.classList.add("hidden"),this.current.classList.add("active"),this.currentContent.classList.remove("hidden"),this.fireEvent("change",{el:a,prev:this.prevContentId,current:this.currentContentId}),(0,g.dispatch)("change.hs.tab",a,{el:a,prev:this.prevContentId,current:this.currentContentId})},e.prototype.change=function(a){var n=document.querySelector('[data-hs-tab="'.concat(a.target.value,'"]'));n&&n.click()},e.getInstance=function(a,n){var i=window.$hsTabsCollection.find(function(o){return o.element.el===(typeof a=="string"?document.querySelector(a):a)});return i?n?i:i.element:null},e.autoInit=function(){window.$hsTabsCollection||(window.$hsTabsCollection=[]),document.querySelectorAll('[role="tablist"]:not(select):not(.--prevent-on-load-init)').forEach(function(a){window.$hsTabsCollection.find(function(n){var i;return((i=n==null?void 0:n.element)===null||i===void 0?void 0:i.el)===a})||new e(a)}),window.$hsTabsCollection&&document.addEventListener("keydown",function(a){return e.accessibility(a)})},e.open=function(a){var n=window.$hsTabsCollection.find(function(o){return Array.from(o.element.toggles).includes(typeof a=="string"?document.querySelector(a):a)}),i=Array.from(n.element.toggles).find(function(o){return o===(typeof a=="string"?document.querySelector(a):a)});i&&!i.classList.contains("active")&&n.element.open(i)},e.accessibility=function(a){var n=document.querySelector("[data-hs-tab]:focus");if(n&&u.TABS_ACCESSIBILITY_KEY_SET.includes(a.code)&&!a.metaKey){var i=n.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical");switch(a.preventDefault(),console.log("Key code:",a.code),a.code){case(i==="true"?"ArrowUp":"ArrowLeft"):this.onArrow();break;case(i==="true"?"ArrowDown":"ArrowRight"):this.onArrow(!1);break;case"Home":this.onStartEnd();break;case"End":this.onStartEnd(!1)}}},e.onArrow=function(a){a===void 0&&(a=!0);var n=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),i=window.$hsTabsCollection.find(function(y){return y.element.el===n});if(i){var o=a?Array.from(i.element.toggles).reverse():Array.from(i.element.toggles),r=o.find(function(y){return document.activeElement===y}),c=o.findIndex(function(y){return y===r});o[c=c+1<o.length?c+1:0].focus(),o[c].click()}},e.onStartEnd=function(a){a===void 0&&(a=!0);var n=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),i=window.$hsTabsCollection.find(function(r){return r.element.el===n});if(i){var o=a?Array.from(i.element.toggles):Array.from(i.element.toggles).reverse();o.length&&(o[0].focus(),o[0].click())}},e.on=function(a,n,i){var o=window.$hsTabsCollection.find(function(r){return Array.from(r.element.toggles).includes(typeof n=="string"?document.querySelector(n):n)});o&&(o.element.events[a]=i)},e}(x.default);window.addEventListener("load",function(){h.autoInit()}),typeof window<"u"&&(window.HSTabs=h),m.default=h},557:function(C,m,A){var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)}),g=this&&this.__assign||function(){return g=Object.assign||function(u){for(var h,s=1,e=arguments.length;s<e;s++)for(var a in h=arguments[s])Object.prototype.hasOwnProperty.call(h,a)&&(u[a]=h[a]);return u},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=function(u){function h(s,e){var a=u.call(this,s,e)||this,n=s.getAttribute("data-hs-theme-switch"),i=n?JSON.parse(n):{},o=g(g({},i),e);return a.theme=(o==null?void 0:o.theme)||localStorage.getItem("hs_theme")||"default",a.themeSet=["dark","light","default"],a.init(),a}return H(h,u),h.prototype.init=function(){this.createCollection(window.$hsThemeSwitchCollection,this),this.theme!=="default"&&this.setAppearance()},h.prototype.setResetStyles=function(){var s=document.createElement("style");return s.innerText="*{transition: unset !important;}",s.setAttribute("data-hs-appearance-onload-styles",""),document.head.appendChild(s),s},h.prototype.setAppearance=function(s,e,a){s===void 0&&(s=this.theme),e===void 0&&(e=!0),a===void 0&&(a=!0);var n=this.setResetStyles(),i=document.querySelector("html");e&&localStorage.setItem("hs_theme",s),s==="auto"&&(s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"),i.classList.remove("dark","default","auto"),i.classList.add(s),setTimeout(function(){return n.remove()}),a&&window.dispatchEvent(new CustomEvent("on-hs-appearance-change",{detail:s}))},h.getInstance=function(s){var e=window.$hsThemeSwitchCollection.find(function(a){return a.element.el===(typeof s=="string"?document.querySelector(s):s)});return e?e.element:null},h.autoInit=function(){window.$hsThemeSwitchCollection||(window.$hsThemeSwitchCollection=[]),document.querySelectorAll("[data-hs-theme-switch]:not(.--prevent-on-load-init)").forEach(function(s){if(!window.$hsThemeSwitchCollection.find(function(a){var n;return((n=a==null?void 0:a.element)===null||n===void 0?void 0:n.el)===s})){var e=new h(s);e.el.checked=e.theme==="dark",e.el.addEventListener("change",function(a){e.setAppearance(a.target.checked?"dark":"default")})}}),document.querySelectorAll("[data-hs-theme-click-value]:not(.--prevent-on-load-init)").forEach(function(s){var e=s.getAttribute("data-hs-theme-click-value"),a=new h(s);a.el.addEventListener("click",function(){return a.setAppearance(e)})})},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),window.$hsThemeSwitchCollection&&window.addEventListener("on-hs-appearance-change",function(u){window.$hsThemeSwitchCollection.forEach(function(h){h.element.el.checked=u.detail==="dark"})}),typeof window<"u"&&(window.HSThemeSwitch=x),m.default=x},87:function(C,m,A){/*
 * HSToggleCount
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(u,h){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a])},f(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function s(){this.constructor=u}f(u,h),u.prototype=h===null?Object.create(h):(s.prototype=h.prototype,new s)}),g=this&&this.__assign||function(){return g=Object.assign||function(u){for(var h,s=1,e=arguments.length;s<e;s++)for(var a in h=arguments[s])Object.prototype.hasOwnProperty.call(h,a)&&(u[a]=h[a]);return u},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=function(u){function h(s,e){var a=u.call(this,s,e)||this,n=s.getAttribute("data-hs-toggle-count"),i=n?JSON.parse(n):{},o=g(g({},i),e);return a.target=o!=null&&o.target?typeof(o==null?void 0:o.target)=="string"?document.querySelector(o.target):o.target:null,a.min=(o==null?void 0:o.min)||0,a.max=(o==null?void 0:o.max)||0,a.duration=(o==null?void 0:o.duration)||700,a.isChecked=a.target.checked||!1,a.target&&a.init(),a}return H(h,u),h.prototype.init=function(){var s=this;this.createCollection(window.$hsToggleCountCollection,this),this.isChecked&&(this.el.innerText=String(this.max)),this.target.addEventListener("change",function(){s.isChecked=!s.isChecked,s.toggle()})},h.prototype.toggle=function(){this.isChecked?this.countUp():this.countDown()},h.prototype.animate=function(s,e){var a=this,n=0,i=function(o){n||(n=o);var r=Math.min((o-n)/a.duration,1);a.el.innerText=String(Math.floor(r*(e-s)+s)),r<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)},h.prototype.countUp=function(){this.animate(this.min,this.max)},h.prototype.countDown=function(){this.animate(this.max,this.min)},h.getInstance=function(s,e){var a=window.$hsToggleCountCollection.find(function(n){return n.element.el===(typeof s=="string"?document.querySelector(s):s)});return a?e?a:a.element:null},h.autoInit=function(){window.$hsToggleCountCollection||(window.$hsToggleCountCollection=[]),document.querySelectorAll("[data-hs-toggle-count]:not(.--prevent-on-load-init)").forEach(function(s){window.$hsToggleCountCollection.find(function(e){var a;return((a=e==null?void 0:e.element)===null||a===void 0?void 0:a.el)===s})||new h(s)})},h}(A(737).default);window.addEventListener("load",function(){x.autoInit()}),typeof window<"u"&&(window.HSToggleCount=x),m.default=x},366:function(C,m,A){/*
 * HSTogglePassword
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(h,s){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])},f(h,s)},function(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function e(){this.constructor=h}f(h,s),h.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}),g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var s,e=1,a=arguments.length;e<a;e++)for(var n in s=arguments[e])Object.prototype.hasOwnProperty.call(s,n)&&(h[n]=s[n]);return h},g.apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var x=A(969),u=function(h){function s(e,a){var n=h.call(this,e,a)||this,i=e.getAttribute("data-hs-toggle-password"),o=i?JSON.parse(i):{},r=g(g({},o),a),c=[];return r!=null&&r.target&&typeof(r==null?void 0:r.target)=="string"?(r==null?void 0:r.target.split(",")).forEach(function(y){c.push(document.querySelector(y))}):r!=null&&r.target&&typeof(r==null?void 0:r.target)=="object"?r.target.forEach(function(y){return c.push(document.querySelector(y))}):r.target.forEach(function(y){return c.push(y)}),n.target=c,n.isShown=!!n.el.hasAttribute("type")&&n.el.checked,n.eventType=(0,x.isFormElement)(n.el)?"change":"click",n.isMultiple=n.target.length>1&&!!n.el.closest("[data-hs-toggle-password-group]"),n.target&&n.init(),n}return H(s,h),s.prototype.init=function(){var e=this;this.createCollection(window.$hsTogglePasswordCollection,this),this.isShown?this.show():this.hide(),this.el.addEventListener(this.eventType,function(){e.isShown?e.hide():e.show(),e.fireEvent("toggle",e.target),(0,x.dispatch)("toggle.hs.toggle-select",e.el,e.target)})},s.prototype.getMultipleToggles=function(){var e=this.el.closest("[data-hs-toggle-password-group]").querySelectorAll("[data-hs-toggle-password]"),a=[];return e.forEach(function(n){a.push(s.getInstance(n))}),a},s.prototype.show=function(){this.isMultiple?(this.getMultipleToggles().forEach(function(e){return!!e&&(e.isShown=!0)}),this.el.closest("[data-hs-toggle-password-group]").classList.add("active")):(this.isShown=!0,this.el.classList.add("active")),this.target.forEach(function(e){e.type="text"})},s.prototype.hide=function(){this.isMultiple?(this.getMultipleToggles().forEach(function(e){return!!e&&(e.isShown=!1)}),this.el.closest("[data-hs-toggle-password-group]").classList.remove("active")):(this.isShown=!1,this.el.classList.remove("active")),this.target.forEach(function(e){e.type="password"})},s.getInstance=function(e,a){var n=window.$hsTogglePasswordCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)});return n?a?n:n.element:null},s.autoInit=function(){window.$hsTogglePasswordCollection||(window.$hsTogglePasswordCollection=[]),document.querySelectorAll("[data-hs-toggle-password]:not(.--prevent-on-load-init)").forEach(function(e){window.$hsTogglePasswordCollection.find(function(a){var n;return((n=a==null?void 0:a.element)===null||n===void 0?void 0:n.el)===e})||new s(e)})},s}(A(737).default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSTogglePassword=u),m.default=u},679:function(C,m,A){/*
 * HSTooltip
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var f,H=this&&this.__extends||(f=function(n,i){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(o[c]=r[c])},f(n,i)},function(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=n}f(n,i),n.prototype=i===null?Object.create(i):(o.prototype=i.prototype,new o)}),g=this&&this.__assign||function(){return g=Object.assign||function(n){for(var i,o=1,r=arguments.length;o<r;o++)for(var c in i=arguments[o])Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);return n},g.apply(this,arguments)},x=this&&this.__spreadArray||function(n,i,o){if(o||arguments.length===2)for(var r,c=0,y=i.length;c<y;c++)!r&&c in i||(r||(r=Array.prototype.slice.call(i,0,c)),r[c]=i[c]);return n.concat(r||Array.prototype.slice.call(i))};Object.defineProperty(m,"__esModule",{value:!0});var u=A(492),h=A(969),s=A(737),e=A(190),a=function(n){function i(o,r,c){var y=n.call(this,o,r,c)||this;return y.el&&(y.toggle=y.el.querySelector(".hs-tooltip-toggle")||y.el,y.content=y.el.querySelector(".hs-tooltip-content"),y.eventMode=(0,h.getClassProperty)(y.el,"--trigger")||"hover",y.preventPopper=(0,h.getClassProperty)(y.el,"--prevent-popper","false"),y.placement=(0,h.getClassProperty)(y.el,"--placement"),y.strategy=(0,h.getClassProperty)(y.el,"--strategy")),y.el&&y.toggle&&y.content&&y.init(),y}return H(i,n),i.prototype.init=function(){var o=this;this.createCollection(window.$hsTooltipCollection,this),this.eventMode==="click"?this.toggle.addEventListener("click",function(){return o.click()}):this.eventMode==="focus"?this.toggle.addEventListener("click",function(){return o.focus()}):this.eventMode==="hover"&&(this.toggle.addEventListener("mouseenter",function(){return o.enter()}),this.toggle.addEventListener("mouseleave",function(){return o.leave()})),this.preventPopper==="false"&&this.buildPopper()},i.prototype.enter=function(){this.show()},i.prototype.leave=function(){this.hide()},i.prototype.click=function(){var o=this;if(this.el.classList.contains("show"))return!1;this.show();var r=function(){setTimeout(function(){o.hide(),o.toggle.removeEventListener("click",r,!0),o.toggle.removeEventListener("blur",r,!0)})};this.toggle.addEventListener("click",r,!0),this.toggle.addEventListener("blur",r,!0)},i.prototype.focus=function(){var o=this;this.show();var r=function(){o.hide(),o.toggle.removeEventListener("blur",r,!0)};this.toggle.addEventListener("blur",r,!0)},i.prototype.buildPopper=function(){this.popperInstance=(0,u.createPopper)(this.toggle,this.content,{placement:e.POSITIONS[this.placement]||"top",strategy:this.strategy||"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})},i.prototype.show=function(){var o=this;this.content.classList.remove("hidden"),this.preventPopper==="false"&&(this.popperInstance.setOptions(function(r){return g(g({},r),{modifiers:x(x([],r.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this.popperInstance.update()),setTimeout(function(){o.el.classList.add("show"),o.fireEvent("show",o.el),(0,h.dispatch)("show.hs.tooltip",o.el,o.el)})},i.prototype.hide=function(){var o=this;this.el.classList.remove("show"),this.preventPopper==="false"&&this.popperInstance.setOptions(function(r){return g(g({},r),{modifiers:x(x([],r.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this.fireEvent("hide",this.el),(0,h.dispatch)("hide.hs.tooltip",this.el,this.el),(0,h.afterTransition)(this.content,function(){if(o.el.classList.contains("show"))return!1;o.content.classList.add("hidden")})},i.getInstance=function(o,r){r===void 0&&(r=!1);var c=window.$hsTooltipCollection.find(function(y){return y.element.el===(typeof o=="string"?document.querySelector(o):o)});return c?r?c:c.element.el:null},i.autoInit=function(){window.$hsTooltipCollection||(window.$hsTooltipCollection=[]),document.querySelectorAll(".hs-tooltip").forEach(function(o){window.$hsTooltipCollection.find(function(r){var c;return((c=r==null?void 0:r.element)===null||c===void 0?void 0:c.el)===o})||new i(o)})},i.show=function(o){var r=window.$hsTooltipCollection.find(function(c){return c.element.el===(typeof o=="string"?document.querySelector(o):o)});if(r)switch(r.element.eventMode){case"click":r.element.click();break;case"focus":r.element.focus();break;default:r.element.enter()}},i.hide=function(o){var r=window.$hsTooltipCollection.find(function(c){return c.element.el===(typeof o=="string"?document.querySelector(o):o)});r&&r.element.hide()},i.on=function(o,r,c){var y=window.$hsTooltipCollection.find(function(O){return O.element.el===(typeof r=="string"?document.querySelector(r):r)});y&&(y.element.events[o]=c)},i}(s.default);window.addEventListener("load",function(){a.autoInit()}),typeof window<"u"&&(window.HSTooltip=a),m.default=a},362:(C,m,A)=>{Object.defineProperty(m,"__esModule",{value:!0}),m.COLLECTIONS=void 0;var f=A(413),H=A(460),g=A(629),x=A(652),u=A(610),h=A(371),s=A(770),e=A(659),a=A(139),n=A(591),i=A(233),o=A(957),r=A(983),c=A(949),y=A(87),O=A(366),L=A(679);m.COLLECTIONS=[{key:"copy-markup",fn:f.default},{key:"accordion",fn:H.default},{key:"carousel",fn:g.default},{key:"collapse",fn:x.default},{key:"dropdown",fn:u.default},{key:"input-number",fn:h.default},{key:"overlay",fn:s.default},{key:"pin-input",fn:e.default},{key:"remove-element",fn:a.default},{key:"scrollspy",fn:n.default},{key:"select",fn:i.default},{key:"stepper",fn:o.default},{key:"strong-password",fn:r.default},{key:"tabs",fn:c.default},{key:"toggle-count",fn:y.default},{key:"toggle-password",fn:O.default},{key:"tooltip",fn:L.default}]},313:(C,m,A)=>{/*
 * HSStaticMethods
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */Object.defineProperty(m,"__esModule",{value:!0});var f=A(969),H=A(362),g={getClassProperty:f.getClassProperty,afterTransition:f.afterTransition,autoInit:function(x){x===void 0&&(x="all"),x==="all"?H.COLLECTIONS.forEach(function(u){var h=u.fn;h==null||h.autoInit()}):H.COLLECTIONS.forEach(function(u){var h=u.key,s=u.fn;x.includes(h)&&(s==null||s.autoInit())})}};typeof window<"u"&&(window.HSStaticMethods=g),m.default=g},969:function(C,m){var A=this;Object.defineProperty(m,"__esModule",{value:!0}),m.menuSearchHistory=m.classToClassList=m.htmlToElement=m.afterTransition=m.dispatch=m.debounce=m.isFormElement=m.isParentOrElementHidden=m.isEnoughSpace=m.isIpadOS=m.isIOS=m.getClassPropertyAlt=m.getClassProperty=void 0,m.getClassProperty=function(H,g,x){return x===void 0&&(x=""),(window.getComputedStyle(H).getPropertyValue(g)||x).replace(" ","")},m.getClassPropertyAlt=function(H,g,x){x===void 0&&(x="");var u="";return H.classList.forEach(function(h){h.includes(g)&&(u=h)}),u.match(/:(.*)]/)?u.match(/:(.*)]/)[1]:x},m.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},m.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},m.isEnoughSpace=function(H,g,x,u,h){x===void 0&&(x="auto"),u===void 0&&(u=10),h===void 0&&(h=null);var s=g.getBoundingClientRect(),e=h?h.getBoundingClientRect():null,a=window.innerHeight,n=e?s.top-e.top:s.top,i=(h?e.bottom:a)-s.bottom,o=H.clientHeight+u;return x==="bottom"?i>=o:x==="top"?n>=o:n>=o||i>=o},m.isFormElement=function(H){return H instanceof HTMLInputElement||H instanceof HTMLTextAreaElement||H instanceof HTMLSelectElement};var f=function(H){return!!H&&(window.getComputedStyle(H).display==="none"||f(H.parentElement))};m.isParentOrElementHidden=f,m.debounce=function(H,g){var x;return g===void 0&&(g=200),function(){for(var u=[],h=0;h<arguments.length;h++)u[h]=arguments[h];clearTimeout(x),x=setTimeout(function(){H.apply(A,u)},g)}},m.dispatch=function(H,g,x){x===void 0&&(x=null);var u=new CustomEvent(H,{detail:{payload:x},bubbles:!0,cancelable:!0,composed:!1});g.dispatchEvent(u)},m.afterTransition=function(H,g){var x=function(){g(),H.removeEventListener("transitionend",x,!0)};window.getComputedStyle(H,null).getPropertyValue("transition")!=="all 0s ease 0s"?H.addEventListener("transitionend",x,!0):g()},m.htmlToElement=function(H){var g=document.createElement("template");return H=H.trim(),g.innerHTML=H,g.content.firstChild},m.classToClassList=function(H,g,x){x===void 0&&(x=" "),H.split(x).forEach(function(u){return g.classList.add(u)})},m.menuSearchHistory={historyIndex:-1,addHistory:function(H){this.historyIndex=H},existsInHistory:function(H){return H>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},l={};function b(C){var m=l[C];if(m!==void 0)return m.exports;var A=l[C]={exports:{}};return w[C].call(A.exports,A,A.exports,b),A.exports}b.d=(C,m)=>{for(var A in m)b.o(m,A)&&!b.o(C,A)&&Object.defineProperty(C,A,{enumerable:!0,get:m[A]})},b.o=(C,m)=>Object.prototype.hasOwnProperty.call(C,m),b.r=C=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})};var T={};return(()=>{var C=T;Object.defineProperty(C,"__esModule",{value:!0}),C.HSStaticMethods=C.HSTooltip=C.HSTogglePassword=C.HSToggleCount=C.HSThemeSwitch=C.HSTabs=C.HSStrongPassword=C.HSStepper=C.HSSelect=C.HSScrollspy=C.HSSearchByJson=C.HSRemoveElement=C.HSPinInput=C.HSOverlay=C.HSInputNumber=C.HSDropdown=C.HSCollapse=C.HSCarousel=C.HSAccordion=C.HSCopyMarkup=void 0;var m=b(413);Object.defineProperty(C,"HSCopyMarkup",{enumerable:!0,get:function(){return m.default}});var A=b(460);Object.defineProperty(C,"HSAccordion",{enumerable:!0,get:function(){return A.default}});var f=b(629);Object.defineProperty(C,"HSCarousel",{enumerable:!0,get:function(){return f.default}});var H=b(652);Object.defineProperty(C,"HSCollapse",{enumerable:!0,get:function(){return H.default}});var g=b(610);Object.defineProperty(C,"HSDropdown",{enumerable:!0,get:function(){return g.default}});var x=b(371);Object.defineProperty(C,"HSInputNumber",{enumerable:!0,get:function(){return x.default}});var u=b(770);Object.defineProperty(C,"HSOverlay",{enumerable:!0,get:function(){return u.default}});var h=b(659);Object.defineProperty(C,"HSPinInput",{enumerable:!0,get:function(){return h.default}});var s=b(139);Object.defineProperty(C,"HSRemoveElement",{enumerable:!0,get:function(){return s.default}});var e=b(961);Object.defineProperty(C,"HSSearchByJson",{enumerable:!0,get:function(){return e.default}});var a=b(591);Object.defineProperty(C,"HSScrollspy",{enumerable:!0,get:function(){return a.default}});var n=b(233);Object.defineProperty(C,"HSSelect",{enumerable:!0,get:function(){return n.default}});var i=b(957);Object.defineProperty(C,"HSStepper",{enumerable:!0,get:function(){return i.default}});var o=b(983);Object.defineProperty(C,"HSStrongPassword",{enumerable:!0,get:function(){return o.default}});var r=b(949);Object.defineProperty(C,"HSTabs",{enumerable:!0,get:function(){return r.default}});var c=b(557);Object.defineProperty(C,"HSThemeSwitch",{enumerable:!0,get:function(){return c.default}});var y=b(87);Object.defineProperty(C,"HSToggleCount",{enumerable:!0,get:function(){return y.default}});var O=b(366);Object.defineProperty(C,"HSTogglePassword",{enumerable:!0,get:function(){return O.default}});var L=b(679);Object.defineProperty(C,"HSTooltip",{enumerable:!0,get:function(){return L.default}});var _=b(313);Object.defineProperty(C,"HSStaticMethods",{enumerable:!0,get:function(){return _.default}})})(),T})())})(o9);window.SimpleBar=g2;function r9(){bf({icons:wf});function M(){function C(){const m=document.getElementById("navbar");m&&(document.body.scrollTop>=1||document.documentElement.scrollTop>=1?m.classList.add("nav-sticky"):m.classList.remove("nav-sticky"))}window.addEventListener("scroll",m=>{m.preventDefault(),C()})}function d(){const C=window.location.href.split(/[?#]/)[0];Array.from(document.querySelectorAll(".menu a")).forEach(A=>{if(A.href===C){A.classList.add("active");const f=A.parentElement.parentElement.parentElement;if(f!=null&&f.classList.contains("menu-item")){const g=f.querySelector(".hs-dropdown-toggle");g==null||g.classList.add("active")}const H=A.parentElement.parentElement.parentElement.parentElement.parentElement;if(H!=null&&H.classList.contains("menu-item")){const g=H.querySelector(".hs-dropdown-toggle");g==null||g.classList.add("active")}}})}function w(){var C=window.location.href.split(/[?#]/)[0];document.querySelectorAll("ul.admin-menu .menu-item a").forEach(f=>{if(f.href===C){f.classList.add("active");let H=f.parentElement.parentElement.parentElement.parentElement;if(H&&H.classList.contains("menu-item")){const g=H.querySelector(".hs-accordion-toggle");if(g){g.classList.add("active"),g.classList.add("open"),H.classList.add("active");const x=g.nextElementSibling;x&&x.classList.remove("hidden")}}}}),setTimeout(function(){var f=document.querySelector("ul.admin-menu .menu-item a.active");if(f!=null){var H=document.querySelector("#application-sidebar .simplebar-content-wrapper"),g=f.offsetTop-300;H&&g>100&&A(H,g,600)}},200);function m(f,H,g,x){return f/=x/2,f<1?g/2*f*f+H:(f--,-g/2*(f*(f-2)-1)+H)}function A(f,H,g){var x=f.scrollTop,u=H-x,h=0,s=20,e=function(){h+=s;var a=m(h,x,u,g);f.scrollTop=a,h<g&&setTimeout(e,s)};e()}}function l(){const C=document.querySelector('[data-toggle="back-to-top"]');window.addEventListener("scroll",function(){C&&(window.pageYOffset>72?C.classList.remove("opacity-0"):C.classList.add("opacity-0"))}),C&&C.addEventListener("click",function(m){m.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})}function b(){document.querySelectorAll("[data-x-password]").forEach(C=>{const m=C.querySelector(".form-password"),A=C.querySelector(".password-eye-on"),f=C.querySelector(".password-eye-off");m&&A&&f&&(f.classList.add("hidden"),A.addEventListener("click",H=>{A.classList.add("hidden"),f.classList.remove("hidden"),m.type="text"}),f.addEventListener("click",H=>{f.classList.add("hidden"),A.classList.remove("hidden"),m.type="password"}))})}function T(){var C=document.querySelector('[data-toggle="fullscreen"]');C&&C.addEventListener("click",function(m){m.preventDefault(),document.body.classList.toggle("group-fullscreen"),!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement?document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()})}M(),d(),w(),l(),b(),T()}r9();export{c9 as c,Cf as g};
