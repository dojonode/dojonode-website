import{s as O,n as D,r as B,c as A}from"./scheduler.eNMpi6sU.js";import{S as K,i as N,e as d,s as P,c as f,a as k,k as y,f as U,d as h,l as c,z as b,g as V,h as u,A as L}from"./index.nOqLF7IG.js";import{w as q}from"./index.23A6xEWI.js";const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,X=""+new URL("../assets/Header.h_51lCDP.avif",import.meta.url).href,Y=""+new URL("../assets/KarateRed.LFAArGOB.avif",import.meta.url).href,ee=""+new URL("../assets/TatamiScroll.F2d35fcf.svg",import.meta.url).href,te=""+new URL("../assets/Map.qHu-kyJE.avif",import.meta.url).href;function E(e,t){try{localStorage.setItem(e,t)}catch(s){console.error(`Error setting "${e}" in localStorage:`,s)}}function C(e){try{return localStorage.getItem(e)}catch(t){return console.error(`Error getting "${e}" from localStorage:`,t),null}}const z=""+new URL("../assets/DarkMode.kvoG1kbZ.avif",import.meta.url).href,F=""+new URL("../assets/CremeMode.8OTIgWfz.avif",import.meta.url).href;function G(e){let t,s,a,p=`<img src="${F}" alt="creme/paper mode icon"/>`,v,l,g=`<img src="${z}" alt="dark mode icon"/>`,w,i,m,_,I,S;return{c(){t=d("div"),s=d("div"),a=d("button"),a.innerHTML=p,v=P(),l=d("button"),l.innerHTML=g,w=P(),i=d("button"),m=d("div"),this.h()},l(o){t=f(o,"DIV",{class:!0});var n=k(t);s=f(n,"DIV",{class:!0});var T=k(s);a=f(T,"BUTTON",{class:!0,"data-svelte-h":!0}),y(a)!=="svelte-1asekna"&&(a.innerHTML=p),v=U(T),l=f(T,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-1d715wd"&&(l.innerHTML=g),T.forEach(h),w=U(n),i=f(n,"BUTTON",{class:!0});var $=k(i);m=f($,"DIV",{class:!0,style:!0}),k(m).forEach(h),$.forEach(h),n.forEach(h),this.h()},h(){c(a,"class","theme svelte-17atlnp"),b(a,"active",e[0]===r.Paper),c(l,"class","theme svelte-17atlnp"),b(l,"active",e[0]===r.Dark),c(s,"class","mt-2 inline-flex"),c(m,"class","pill-fill svelte-17atlnp"),c(m,"style",_=`left: ${e[0]===r.Paper?"0%":"50%"}`),c(i,"class","pill-indicator svelte-17atlnp"),c(t,"class","flex flex-col justify-between items-center")},m(o,n){V(o,t,n),u(t,s),u(s,a),u(s,v),u(s,l),u(t,w),u(t,i),u(i,m),I||(S=[L(a,"click",e[1]),L(l,"click",e[2]),L(i,"click",j)],I=!0)},p(o,[n]){n&1&&b(a,"active",o[0]===r.Paper),n&1&&b(l,"active",o[0]===r.Dark),n&1&&_!==(_=`left: ${o[0]===r.Paper?"0%":"50%"}`)&&c(m,"style",_)},i:D,o:D,d(o){o&&h(t),I=!1,B(S)}}}const r={Dark:"dark",Paper:"paper"};let H=C("theme");const M=q(H||r.Paper);function R(e){M.set(e),E("theme",e)}function j(){let e=C("theme")===r.Paper?r.Dark:r.Paper;M.set(e),E("theme",e)}function x(e,t,s){let a,p=D;return A(e,M,g=>s(0,a=g)),e.$$.on_destroy.push(()=>p()),[a,()=>R(r.Paper),()=>R(r.Dark)]}class ae extends K{constructor(t){super(),N(this,t,x,G,O,{})}}export{X as H,Y as K,te as M,ae as T,ee as a,M as c,Q as g};