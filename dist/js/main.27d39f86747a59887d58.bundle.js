"use strict";(globalThis.webpackChunkwebpack_react_ts_tw_bp=globalThis.webpackChunkwebpack_react_ts_tw_bp||[]).push([[179],{516:(e,t,s)=>{var l=s(745),n=s(294),a=s(893);const r=(0,n.createContext)({}),c=e=>{let{children:t}=e;const[s,l]=(0,n.useState)(""),[c,i]=(0,n.useState)(""),[o,h]=(0,n.useState)(""),d={location:s,setLocation:l,weather:c,setWeather:i,img:o,setImg:h};return(0,a.jsx)(r.Provider,{value:d,children:t})},i=e=>{let{children:t}=e;return(0,a.jsx)(c,{children:t})},o=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"container",children:t})},h=()=>(0,a.jsx)("footer",{className:"py-8",children:(0,a.jsx)(o,{children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-1 text-gray-900",children:[(0,a.jsx)("span",{children:"Coded with ❤️ by"}),(0,a.jsx)("a",{className:"font-medium transition-all hover:underline",href:"https://valentine-samoylov.vercel.app/",children:"Valentine Samoylov"}),(0,a.jsx)("span",{children:"using"}),(0,a.jsx)("a",{className:"font-medium transition-all hover:underline",href:"https://openweathermap.org/",children:"OpenWeather"}),(0,a.jsx)("span",{children:" and "}),(0,a.jsx)("a",{className:"font-medium transition-all hover:underline",href:"https://unsplash.com/",children:"Unsplash"}),(0,a.jsx)("span",{children:"APIs."})]})})}),d=e=>{let{children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("main",{className:"text-gray-700 bg-slate-100",children:t}),(0,a.jsx)(h,{})]})};var m=s(669),x=s.n(m);const p="fe9f85b3d7f6e038dfffa132fc35d717",u="https://api.openweathermap.org/data/2.5/weather",g=`${u}?appid=${p}&q=kyiv`,v=()=>{const{setWeather:e}=(0,n.useContext)(r),t=async e=>{try{const t=x().get(e);return await t}catch(e){console.log(e)}};return(0,n.useEffect)((()=>{t(`${g}&units=metric`).then((t=>{e(t?.data)}))}),[e]),[s=>{t(`${u}/?q=${s}&appid=${p}&units=metric`).then((t=>{e(t?.data),console.log(t?.data)}))}]},j="6oFn8OgO5H67B1_pNDex3Xq8-Bec8ZVuGWHHhDcIM6Y",w="https://api.unsplash.com/search/photos",f=`${w}?client_id=${j}&page=1&query=`,b=`${w}?client_id=${j}&page=1&query=kyiv`,y=()=>{const{setImg:e}=(0,n.useContext)(r),t=async e=>{try{const t=x().get(e);return await t}catch(e){console.log(e)}};return(0,n.useEffect)((()=>{t(`${b}`).then((t=>{e(t?.data.results[Math.floor(10*Math.random())]?.urls?.regular)}))}),[e]),{searchImgByIWord:s=>{t(`${f}${s}`).then((t=>{e(t?.data.results[Math.floor(10*Math.random())]?.urls?.regular)}))}}};var O;function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},N.apply(this,arguments)}const z=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,O||(O=n.createElement("path",{d:"m1000.6 887.345-239.4-239.4c54.44-80.82 81.3-181.8 66.92-289.4C803.6 175.525 653.6 26.585 470.4 3.391 198.02-31.075-31.02 197.965 3.448 470.345c23.2 183.28 172.16 333.4 355.2 357.8 107.6 14.378 208.6-12.472 289.4-66.92l239.4 239.4c31.24 31.24 81.9 31.24 113.14 0 31.212-31.28 31.212-82.08.012-113.28zm-842.4-471.4c0-141.16 114.84-256 256-256s256 114.84 256 256-114.84 256-256 256-256-114.8-256-256z"})))},E=()=>{const{location:e,setLocation:t}=(0,n.useContext)(r),[s]=v(),{searchImgByIWord:l}=y();return(0,a.jsx)("form",{className:"flex justify-center mb-12 p-8 rounded-xl shadow-md bg-white",onSubmit:n=>{n.preventDefault(),t(""),s(e),l(e)},children:(0,a.jsxs)("div",{className:"group relative flex gap-4 w-full max-w-lg",children:[(0,a.jsx)("input",{className:"peer w-full py-2 pl-9 pr-3 rounded-md border-none bg-slate-100 shadow-inner transition-all focus:bg-slate-200 focus:pl-3",type:"text",placeholder:"Search for a location",onChange:e=>t(e.target.value),value:e}),(0,a.jsx)(z,{className:"absolute inset-3 transition-all pointer-events-none peer-focus:-translate-x-3 peer-focus:scale-0 peer-focus:opacity-0"})]})})},C=e=>new Date(1e3*e).toLocaleTimeString("default",{hour:"numeric",minute:"numeric",hour12:!1}),M=e=>{let{children:t}=e;return(0,a.jsx)("article",{className:"flex justify-center rounded-xl shadow-md p-4 bg-white text-center",children:(0,a.jsx)("div",{className:"flex flex-col justify-center items-center",children:t})})};var $;function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},I.apply(this,arguments)}const H=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,$||($=n.createElement("path",{d:"M320 645.8V608c0-17.4-14.4-32-32-32s-32 14.6-32 32v37.76C218.8 659 192 694.2 192 736c0 53 43 96 96 96s96-43 96-96c0-41.8-26.8-77-64-90.2zM512 224C512 100.24 411.74 0 288 0S64 100.26 64 224v333C24.5 606.5 0 668 0 736c0 159 129 288 288 288s288-129 288-288c0-66.2-24.5-129.76-64-179V224zM288 896c-88.26 0-160-71.76-160-160 0-51 24.5-97.76 64-127.5V223.9c0-53 43-96 96-96s96 43 96 96v384.2c39.5 29.5 64 76.76 64 127.76C448 824.2 376.2 896 288 896zM832 0C726.24 0 640 86.26 640 192s86.26 192 192 192 192-86.26 192-192S937.8 0 832 0zm0 256c-35.5 0-64-28.5-64-64s28.5-64 64-64 64 28.5 64 64-28.4 64-64 64z"})))};var S;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},B.apply(this,arguments)}const P=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,S||(S=n.createElement("path",{d:"M320 645.8V224c0-17.4-14.4-32-32-32s-32 14.6-32 32v421.8c-37.2 13.2-64 48.4-64 90.2 0 53 43 96 96 96s96-43 96-96c0-41.8-26.8-77-64-90.2zM832 0C726.24 0 640 86.26 640 192s86.26 192 192 192 192-86.26 192-192S937.8 0 832 0zm0 256c-35.5 0-64-28.5-64-64s28.5-64 64-64 64 28.5 64 64-28.4 64-64 64zm-320-32C512 100.24 411.74 0 288 0S64 100.26 64 224v333C24.5 606.5 0 668 0 736c0 159 129 288 288 288s288-129 288-288c0-66.2-24.5-129.76-64-179V224zM288 896c-88.26 0-160-71.76-160-160 0-51 24.5-97.76 64-127.5V223.9c0-53 43-96 96-96s96 43.1 96 96.1v384.6c39.5 29.5 64 76.5 64 127.5 0 88.1-71.8 159.9-160 159.9z"})))};var _;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},k.apply(this,arguments)}const V=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1280 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,_||(_=n.createElement("path",{d:"M192.4 400.2c-.26-5.4-.4-10.8-.4-16.2 0-176.8 143.2-320 320-320 118.6 0 222 64.5 277.4 160.4C819.8 202.2 856.6 192 896 192c106 0 192 84.2 192 192 0 24.4-4.6 47.6-12.8 69.2C1192 476.8 1280 580.2 1280 704c0 141.4-114.6 256-256 256H288C128.94 960 0 831 0 672c0-125.6 80.34-232.4 192.4-271.8z"})))};var F;function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},L.apply(this,arguments)}const W=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,F||(F=n.createElement("path",{d:"M489.344 153.373c5.794-5.808 13.805-9.401 22.656-9.401s16.862 3.593 22.655 9.401l96.001 96.001c5.798 5.798 9.384 13.808 9.384 22.656 0 17.695-14.345 32.04-32.04 32.04-8.848 0-16.858-3.586-22.656-9.384L544 253.278V368.03c0 17.673-14.327 32-32 32s-32-14.327-32-32V253.278l-41.344 41.408c-5.798 5.798-13.808 9.384-22.656 9.384-17.695 0-32.04-14.345-32.04-32.04 0-8.848 3.586-16.858 9.384-22.656l96-96zM149.952 357.981c5.791-5.789 13.789-9.369 22.624-9.369s16.833 3.58 22.624 9.369l90.496 90.496a31.887 31.887 0 0 1 8.983 22.231c0 17.673-14.327 32-32 32-8.641 0-16.482-3.425-22.24-8.991l-90.487-90.487c-5.789-5.791-9.369-13.789-9.369-22.624s3.58-16.833 9.369-22.624zm724.096 0c5.789 5.791 9.369 13.789 9.369 22.624s-3.58 16.833-9.369 22.624l-90.496 90.496c-5.827 6.027-13.985 9.769-23.017 9.769-17.673 0-32-14.327-32-32 0-9.032 3.742-17.19 9.76-23.009L828.8 357.98c5.791-5.789 13.789-9.369 22.624-9.369s16.833 3.58 22.624 9.369zM749.376 816.029C761.158 787.663 768 754.717 768 720.172c0-141.385-114.615-256-256-256s-256 114.615-256 256c0 34.545 6.842 67.492 19.246 97.559l-.622-1.702H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h960c17.673 0 32-14.327 32-32s-14.327-32-32-32H749.44zM0 720.029c0-17.673 14.327-32 32-32h128c17.673 0 32 14.327 32 32s-14.327 32-32 32H32c-17.673 0-32-14.327-32-32zm832 0c0-17.673 14.327-32 32-32h128c17.673 0 32 14.327 32 32s-14.327 32-32 32H864c-17.673 0-32-14.327-32-32z"})))};var q;function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},D.apply(this,arguments)}const T=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,q||(q=n.createElement("path",{d:"M489.344 390.657c5.794 5.808 13.805 9.401 22.656 9.401s16.862-3.593 22.655-9.401l96.001-96.001c5.798-5.798 9.384-13.808 9.384-22.656 0-17.695-14.345-32.04-32.04-32.04-8.848 0-16.858 3.586-22.656 9.384L544 290.752V176c0-17.673-14.327-32-32-32s-32 14.327-32 32v114.752l-41.344-41.408c-5.798-5.798-13.808-9.384-22.656-9.384-17.695 0-32.04 14.345-32.04 32.04 0 8.848 3.586 16.858 9.384 22.656l96 96zm-339.392-32.64c5.791-5.789 13.789-9.369 22.624-9.369s16.833 3.58 22.624 9.369l90.496 90.432a31.887 31.887 0 0 1 8.983 22.231c0 17.673-14.327 32-32 32-8.641 0-16.482-3.425-22.24-8.991l-90.487-90.487c-5.789-5.791-9.369-13.789-9.369-22.624s3.58-16.833 9.369-22.624zm724.096 0c5.77 5.787 9.337 13.773 9.337 22.592s-3.567 16.805-9.338 22.593l-90.495 90.495c-5.827 6.027-13.985 9.769-23.017 9.769-17.673 0-32-14.327-32-32 0-9.032 3.742-17.19 9.76-23.009l90.505-90.505c5.791-5.789 13.789-9.369 22.624-9.369s16.833 3.58 22.624 9.369zM749.376 816.001C761.158 787.635 768 754.689 768 720.144c0-141.385-114.615-256-256-256s-256 114.615-256 256c0 34.545 6.842 67.492 19.246 97.559l-.622-1.702H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h960c17.673 0 32-14.327 32-32s-14.327-32-32-32H749.44zM0 720.001c0-17.673 14.327-32 32-32h128c17.673 0 32 14.327 32 32s-14.327 32-32 32H32c-17.673 0-32-14.327-32-32zm832 0c0-17.673 14.327-32 32-32h128c17.673 0 32 14.327 32 32s-14.327 32-32 32H864c-17.673 0-32-14.327-32-32z"})))};var A;function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},G.apply(this,arguments)}const U=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 768 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,A||(A=n.createElement("path",{d:"M32 648.186c0-146.4 204.6-459.34 301.8-599.6 24.6-35.43 75.8-35.43 100.4 0 97.2 140.26 301.8 453.2 301.8 599.6 0 196.2-157.6 353.8-352 353.8s-352-157.6-352-353.8zm192 0c0-15.8-14.4-32-32-32-17.68 0-32 16.2-32 32 0 125.6 100.2 225.8 224 225.8 17.6 0 32-14.4 32-32s-14.4-32-32-32c-88.4 0-160-71.6-160-161.8z"})))};var X;function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},Y.apply(this,arguments)}const Z=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,X||(X=n.createElement("path",{d:"M64 384h640c105.88 0 192-86.12 192-192S809.88 0 704 0h-64c-35.38 0-64 28.62-64 64s28.62 64 64 64h64c35.32 0 64 28.68 64 64s-28.68 64-64 64H64c-35.38 0-64 28.6-64 64s28.62 64 64 64zm256 256H64c-35.38 0-64 28.62-64 64s28.62 64 64 64h256c35.32 0 64 28.68 64 64s-28.68 64-64 64h-64c-35.38 0-64 28.62-64 64s28.62 64 64 64h64c105.88 0 192-86.12 192-192s-86.2-192-192-192zm512-192H64c-35.38 0-64 28.6-64 64s28.62 64 64 64h768c35.32 0 64 28.68 64 64s-28.68 64-64 64h-64c-35.38 0-64 28.62-64 64s28.62 64 64 64h64c105.88 0 192-86.12 192-192s-86.2-192-192-192z"})))};var J;function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},K.apply(this,arguments)}const Q=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,J||(J=n.createElement("path",{d:"M0 512c0 282.8 229.2 512 512 512s512-229.2 512-512S794.8 0 512 0 0 229.2 0 512zm414.6 108.8L261.4 326.2c-12.2-23.6-3-52.6 20.4-64.8 23.6-12.2 52.6-3 64.8 20.4l153.2 294.8c4-.4 8-2.4 14-2.4 68.8 0 128 59.2 128 129.8s-59.2 128-128 128C441.4 832 384 774.6 384 704c0-31.8 11.6-60.8 30.6-83.2z"})))};var R;function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},ee.apply(this,arguments)}const te=e=>{let{title:t,titleId:s,...l}=e;return n.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1152 1024","aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,R||(R=n.createElement("path",{d:"M559.225 320.8c5.6-.6 11.2-.8 16.8-.8 106 0 192 84.2 192 192 0 106-86 192-192 192-107.8 0-192-86-192-192 0-5.6.2-11.2.8-16.8 18.6 9 40.2 16.8 63.2 16.8 70.6 0 128-57.4 128-128 0-23-7.8-44.6-16.8-63.2zm402-95.6c93.6 86.8 156.2 189 185.8 262.2 6.6 15.8 6.6 33.4 0 49.2-29.6 71.4-92.2 173.6-185.8 262.2-94.2 87.6-223.6 161.2-385.2 161.2s-291-73.6-385.16-161.2C97.265 710.2 34.705 608 4.947 536.6c-6.563-15.8-6.563-33.4 0-49.2C34.705 414.2 97.265 312 190.865 225.2 285.025 137.68 414.425 64 576.025 64s291 73.68 385.2 161.2zm-385.2-1.2c-159 0-288 129-288 288s129 288 288 288 288-129 288-288-129-288-288-288z"})))},se=()=>{const{weather:e,img:t}=(0,n.useContext)(r);return(0,a.jsx)("section",{className:"min-h-full py-16 bg-slate-100",children:(0,a.jsxs)(o,{children:[(0,a.jsx)(E,{}),(0,a.jsx)("h2",{className:"mb-4 text-2xl font-medium text-gray-400",children:"Today's Highlights"}),(0,a.jsxs)("div",{className:"flex gap-8 flex-wrap mb-12 md:flex-nowrap",children:[(0,a.jsxs)("article",{className:"flex flex-col w-full lg:w-4/12 rounded-xl shadow-md p-6 bg-center bg-no-repeat bg-cover overlay-30 text-white aspect-square",style:{backgroundImage:`url(${t})`},children:[(0,a.jsx)("div",{className:"mb-2 text-3xl font-medium",children:e?.name}),(0,a.jsxs)("div",{className:"mb-auto",children:[(0,a.jsxs)("div",{className:"flex items-center mb-4 text-5xl font-thin",children:[(0,a.jsx)("img",{className:"w-[1em] h-[1em] object-contain",src:`http://openweathermap.org/img/wn/${e?.weather?.[0]?.icon}.png`,alt:e?.weather?.[0]?.main}),(0,a.jsx)("span",{children:`${e?.main?.temp.toFixed(0)}°C`})]}),(0,a.jsxs)("div",{className:"inline-flex gap-1 capitalize",children:[(0,a.jsx)("span",{className:"text-white/60",children:"Feels Like"}),(0,a.jsx)("span",{className:"",children:` ${e?.main?.feels_like.toFixed(0)}°C, ${e?.weather?.[0]?.description}`})]})]}),(0,a.jsxs)("div",{className:"text-2xl text-white/60",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(P,{}),(0,a.jsx)("span",{children:"Max"}),(0,a.jsx)("span",{className:"text-white",children:`${e?.main?.temp_max.toFixed(0)}°C`})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(H,{}),(0,a.jsx)("span",{children:"Min"}),(0,a.jsx)("span",{className:"text-white",children:`${e?.main?.temp_min.toFixed(0)}°C`})]})]})]}),(0,a.jsxs)("div",{className:"grid gap-8 auto-cols-fr auto-rows-fr w-full sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3",children:[(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"mb-2 text-2xl font-medium text-gray-400",children:"Sunrise & Sunset"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-xl",children:[(0,a.jsx)(W,{}),(0,a.jsx)("span",{children:C(e?.sys?.sunrise)})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-xl",children:[(0,a.jsx)(T,{}),(0,a.jsx)("span",{children:C(e?.sys?.sunset)})]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"mb-2 text-2xl font-medium text-gray-400",children:"Cloudiness"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-2xl",children:[(0,a.jsx)(V,{}),(0,a.jsx)("span",{children:`${e?.clouds?.all}%`})]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"mb-2 text-2xl font-medium text-gray-400",children:"Wind Status"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-2xl",children:[(0,a.jsx)(Z,{}),(0,a.jsx)("span",{children:`${e?.wind?.speed}m/s`})]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"mb-2 text-2xl font-medium text-gray-400",children:"Pressure"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-2xl",children:[(0,a.jsx)(Q,{}),(0,a.jsx)("span",{children:`${e?.main?.pressure}hPa`})]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"mb-2 text-2xl font-medium text-gray-400",children:"Humidity"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-2xl",children:[(0,a.jsx)(U,{}),(0,a.jsx)("span",{children:`${e?.main?.humidity}%`})]})]}),(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"mb-2 text-2xl font-medium text-gray-400",children:"Visibility"}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-2xl",children:[(0,a.jsx)(te,{}),(0,a.jsx)("span",{children:`${(e?.visibility/1e3).toFixed(1)}km `})]})]})]})]})]})})},le=()=>(0,a.jsx)(i,{children:(0,a.jsx)(d,{children:(0,a.jsx)(se,{})})}),ne=()=>(0,a.jsx)(le,{});(0,l.s)(document.getElementById("root")).render((0,a.jsx)(ne,{}))}},e=>{e.O(0,[216],(()=>{return t=516,e(e.s=t);var t}));e.O()}]);