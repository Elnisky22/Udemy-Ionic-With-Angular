"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1086:(y,p,c)=>{c.d(p,{I:()=>l,a:()=>t,b:()=>n,c:()=>o,d:()=>d,h:()=>u});var h=c(8438),l=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(l||{});const a={getEngine(){const r=(0,h.g)();if(null!=r&&r.isPluginAvailable("Haptics"))return r.Plugins.Haptics},available(){if(!this.getEngine())return!1;const s=(0,h.g)();return"web"!==(null==s?void 0:s.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(r){const s=this.getEngine();s&&s.impact({style:r.style})},notification(r){const s=this.getEngine();s&&s.notification({type:r.type})},selection(){this.impact({style:l.Light})},selectionStart(){const r=this.getEngine();r&&r.selectionStart()},selectionChanged(){const r=this.getEngine();r&&r.selectionChanged()},selectionEnd(){const r=this.getEngine();r&&r.selectionEnd()}},e=()=>a.available(),o=()=>{e()&&a.selection()},t=()=>{e()&&a.selectionStart()},n=()=>{e()&&a.selectionChanged()},u=()=>{e()&&a.selectionEnd()},d=r=>{e()&&a.impact(r)}},1622:(y,p,c)=>{c.r(p),c.d(p,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>O,keyboardDidClose:()=>g,keyboardDidOpen:()=>f,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>_,startKeyboardAssist:()=>r,trackViewportChanges:()=>D});var h=c(4379);c(8438),c(8476);const a="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},u=!1;const d=()=>{t={},n={},u=!1},r=v=>{if(h.K.getEngine())s(v);else{if(!v.visualViewport)return;n=O(v.visualViewport),v.visualViewport.onresize=()=>{D(v),f()||M(v)?_(v):g(v)&&E(v)}}},s=v=>{v.addEventListener("keyboardDidShow",C=>_(v,C)),v.addEventListener("keyboardDidHide",()=>E(v))},_=(v,C)=>{m(v,C),u=!0},E=v=>{w(v),u=!1},f=()=>!u&&t.width===n.width&&(t.height-n.height)*n.scale>150,M=v=>u&&!g(v),g=v=>u&&n.height===v.innerHeight,m=(v,C)=>{const P=new CustomEvent(a,{detail:{keyboardHeight:C?C.keyboardHeight:v.innerHeight-n.height}});v.dispatchEvent(P)},w=v=>{const C=new CustomEvent(e);v.dispatchEvent(C)},D=v=>{t=Object.assign({},n),n=O(v.visualViewport)},O=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},2935:(y,p,c)=>{c.d(p,{w:()=>h});const h=(a,e,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{o(l(n,e))});return t.observe(a,{childList:!0,subtree:!0}),t},l=(a,e)=>{let o;return a.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)o=i(t.addedNodes[n],e)||o}),o},i=(a,e)=>{if(1!==a.nodeType)return;const o=a;return(o.tagName===e.toUpperCase()?[o]:Array.from(o.querySelectorAll(e))).find(n=>n.value===o.value)}},3126:(y,p,c)=>{c.r(p),c.d(p,{startFocusVisible:()=>a});const h="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=e=>{let o=[],t=!0;const n=e?e.shadowRoot:document,u=e||document.body,d=M=>{o.forEach(g=>g.classList.remove(h)),M.forEach(g=>g.classList.add(h)),o=M},r=()=>{t=!1,d([])},s=M=>{t=i.includes(M.key),t||d([])},_=M=>{if(t&&void 0!==M.composedPath){const g=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(g)}},E=()=>{n.activeElement===u&&d([])};return n.addEventListener("keydown",s),n.addEventListener("focusin",_),n.addEventListener("focusout",E),n.addEventListener("touchstart",r,{passive:!0}),n.addEventListener("mousedown",r),{destroy:()=>{n.removeEventListener("keydown",s),n.removeEventListener("focusin",_),n.removeEventListener("focusout",E),n.removeEventListener("touchstart",r),n.removeEventListener("mousedown",r)},setFocus:d}}},3351:(y,p,c)=>{c.d(p,{g:()=>h});const h=(o,t,n,u,d)=>i(o[1],t[1],n[1],u[1],d).map(r=>l(o[0],t[0],n[0],u[0],r)),l=(o,t,n,u,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*n*d+3*n+u*d))-o*Math.pow(d-1,3),i=(o,t,n,u,d)=>e((u-=d)-3*(n-=d)+3*(t-=d)-(o-=d),3*n-6*t+3*o,3*t-3*o,o).filter(s=>s>=0&&s<=1),e=(o,t,n,u)=>{if(0===o)return((o,t,n)=>{const u=t*t-4*o*n;return u<0?[]:[(-t+Math.sqrt(u))/(2*o),(-t-Math.sqrt(u))/(2*o)]})(t,n,u);const d=(3*(n/=o)-(t/=o)*t)/3,r=(2*t*t*t-9*t*n+27*(u/=o))/27;if(0===d)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-d),-Math.sqrt(-d)];const s=Math.pow(r/2,2)+Math.pow(d/3,3);if(0===s)return[Math.pow(r/2,.5)-t/3];if(s>0)return[Math.pow(-r/2+Math.sqrt(s),1/3)-Math.pow(r/2+Math.sqrt(s),1/3)-t/3];const _=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-r/(2*Math.sqrt(Math.pow(-d/3,3)))),f=2*Math.pow(_,1/3);return[f*Math.cos(E/3)-t/3,f*Math.cos((E+2*Math.PI)/3)-t/3,f*Math.cos((E+4*Math.PI)/3)-t/3]}},3982:(y,p,c)=>{c.d(p,{I:()=>o,a:()=>d,b:()=>e,c:()=>_,d:()=>f,f:()=>r,g:()=>u,i:()=>n,p:()=>E,r:()=>M,s:()=>s});var h=c(467),l=c(1559),i=c(9144);const e="ion-content",o=".ion-content-scroll-host",t=`${e}, ${o}`,n=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,h.A)(function*(m){return n(m)?(yield new Promise(w=>(0,l.c)(m,w)),m.getScrollElement()):m});return function(w){return g.apply(this,arguments)}}(),d=g=>g.querySelector(o)||g.querySelector(t),r=g=>g.closest(t),s=(g,m)=>n(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),_=(g,m,w,D)=>n(g)?g.scrollByPoint(m,w,D):Promise.resolve(g.scrollBy({top:w,left:m,behavior:D>0?"smooth":"auto"})),E=g=>(0,i.b)(g,e),f=g=>{if(n(g)){const w=g.scrollY;return g.scrollY=!1,w}return g.style.setProperty("overflow","hidden"),!0},M=(g,m)=>{n(g)?g.scrollY=m:g.style.removeProperty("overflow")}},3992:(y,p,c)=>{c.d(p,{a:()=>h,b:()=>_,c:()=>t,d:()=>E,e:()=>P,f:()=>o,g:()=>f,h:()=>i,i:()=>l,j:()=>v,k:()=>C,l:()=>n,m:()=>r,n:()=>M,o:()=>d,p:()=>e,q:()=>a,r:()=>O,s:()=>R,t:()=>s,u:()=>w,v:()=>D,w:()=>u,x:()=>g,y:()=>m});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",R="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4379:(y,p,c)=>{c.d(p,{K:()=>a,a:()=>i});var h=c(8438),l=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(l||{}),i=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(i||{});const a={getEngine(){const e=(0,h.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,p,c)=>{c.d(p,{c:()=>o});var h=c(467),l=c(8476),i=c(4379);const a=t=>{if(void 0===l.d||t===i.a.None||void 0===t)return null;const n=l.d.querySelector("ion-app");return null!=n?n:l.d.body},e=t=>{const n=a(t);return null===n?0:n.clientHeight},o=function(){var t=(0,h.A)(function*(n){let u,d,r,s;const _=function(){var m=(0,h.A)(function*(){const w=yield i.K.getResizeMode(),D=void 0===w?void 0:w.mode;u=()=>{void 0===s&&(s=e(D)),r=!0,E(r,D)},d=()=>{r=!1,E(r,D)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return m.apply(this,arguments)}}(),E=(m,w)=>{n&&n(m,f(w))},f=m=>{if(0===s||s===e(m))return;const w=a(m);return null!==w?new Promise(D=>{const v=new ResizeObserver(()=>{w.clientHeight===s&&(v.disconnect(),D())});v.observe(w)}):void 0};return yield _(),{init:_,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>r}});return function(u){return t.apply(this,arguments)}}()},5083:(y,p,c)=>{c.d(p,{i:()=>h});const h=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5098:(y,p,c)=>{c.d(p,{c:()=>a,g:()=>e});var h=c(8476),l=c(1559),i=c(9144);const a=(t,n,u)=>{let d,r;if(void 0!==h.w&&"MutationObserver"in h.w){const f=Array.isArray(n)?n:[n];d=new MutationObserver(M=>{for(const g of M)for(const m of g.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&f.includes(m.slot))return u(),void(0,l.r)(()=>s(m))}),d.observe(t,{childList:!0,subtree:!0})}const s=f=>{var M;r&&(r.disconnect(),r=void 0),r=new MutationObserver(g=>{u();for(const m of g)for(const w of m.removedNodes)w.nodeType===Node.ELEMENT_NODE&&w.slot===n&&E()}),r.observe(null!==(M=f.parentElement)&&void 0!==M?M:f,{subtree:!0,childList:!0})},E=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},e=(t,n,u)=>{const d=null==t?0:t.toString().length,r=o(d,n);if(void 0===u)return r;try{return u(d,n)}catch(s){return(0,i.a)("Exception in provided `counterFormatter`.",s),r}},o=(t,n)=>`${t} / ${n}`},5572:(y,p,c)=>{c.d(p,{c:()=>h,i:()=>l});const h=(i,a,e)=>"function"==typeof e?e(i,a):"string"==typeof e?i[e]===a[e]:Array.isArray(a)?a.includes(i):i===a,l=(i,a,e)=>void 0!==i&&(Array.isArray(i)?i.some(o=>h(o,a,e)):h(i,a,e))},6652:(y,p,c)=>{c.r(p),c.d(p,{RecipeDetailPageModule:()=>r});var h=c(177),l=c(4341),i=c(7125),a=c(7291),e=c(4020),o=c(8960);function t(s,_){if(1&s&&(e.j41(0,"ion-item")(1,"ion-label"),e.EFF(2),e.k0s()()),2&s){const E=_.$implicit;e.R7$(2),e.JRh(E)}}const u=[{path:"",component:(()=>{var s;class _{constructor(f,M,g,m){this.activatedRoute=f,this.recipesService=M,this.router=g,this.alertCtrl=m}ngOnInit(){this.activatedRoute.paramMap.subscribe(f=>{if(!f.has("recipeId"))return void this.router.navigate(["/recipes"]);const M=f.get("recipeId");this.loadedRecipe=this.recipesService.getRecipe(`${M}`)})}onDeleteRecipe(){this.alertCtrl.create({header:"Are you sure?",message:"Do you really want to delete the recipe?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.recipesService.deleteRecipe(this.loadedRecipe.id),this.router.navigate(["/recipes"])}}]}).then(f=>{f.present()})}}return(s=_).\u0275fac=function(f){return new(f||s)(e.rXU(a.nX),e.rXU(o.F),e.rXU(a.Ix),e.rXU(i.hG))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-recipe-detail"]],standalone:!1,decls:18,vars:4,consts:[[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/recipes"],["slot","end"],[3,"click"],["slot","icon-only","name","trash"],[1,"ion-no-padding"],["size","12","size-md","6","offset-md","3"],[3,"src"],[4,"ngFor","ngForOf"]],template:function(f,M){1&f&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s(),e.j41(6,"ion-buttons",4)(7,"ion-button",5),e.bIt("click",function(){return M.onDeleteRecipe()}),e.nrm(8,"ion-icon",6),e.k0s()()()(),e.j41(9,"ion-content")(10,"ion-grid",7)(11,"ion-row")(12,"ion-col",8),e.nrm(13,"ion-img",9),e.k0s()(),e.j41(14,"ion-row")(15,"ion-col",8)(16,"ion-list"),e.DNE(17,t,3,1,"ion-item",10),e.k0s()()()()()),2&f&&(e.Y8G("translucent",!0),e.R7$(5),e.JRh(M.loadedRecipe.title),e.R7$(8),e.Y8G("src",M.loadedRecipe.imageUrl),e.R7$(4),e.Y8G("ngForOf",M.loadedRecipe.ingredients))},dependencies:[h.Sq,i.Jm,i.QW,i.hU,i.W9,i.lO,i.eU,i.iq,i.KW,i.uz,i.he,i.nf,i.ln,i.BC,i.ai,i.el],encapsulation:2}),_})()}];let d=(()=>{var s;class _{}return(s=_).\u0275fac=function(f){return new(f||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[a.iI.forChild(u),a.iI]}),_})(),r=(()=>{var s;class _{}return(s=_).\u0275fac=function(f){return new(f||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[h.MD,l.YN,i.bv,d]}),_})()},6664:(y,p,c)=>{c.r(p),c.d(p,{createSwipeBackGesture:()=>e});var h=c(1559),l=c(5083),i=c(8607);c(1970);const e=(o,t,n,u,d)=>{const r=o.ownerDocument.defaultView;let s=(0,l.i)(o);const E=w=>s?-w.deltaX:w.deltaX;return(0,i.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w=>(s=(0,l.i)(o),(w=>{const{startX:O}=w;return s?O>=r.innerWidth-50:O<=50})(w)&&t()),onStart:n,onMove:w=>{const O=E(w)/r.innerWidth;u(O)},onEnd:w=>{const D=E(w),O=r.innerWidth,v=D/O,C=(w=>s?-w.velocityX:w.velocityX)(w),P=C>=0&&(C>.2||D>O/2),b=(P?1-v:v)*O;let L=0;if(b>5){const x=b/Math.abs(C);L=Math.min(x,540)}d(P,v<=0?.01:(0,h.j)(0,v,.9999),L)}})}},7383:(y,p,c)=>{c.d(p,{c:()=>i});var h=c(8476),l=c(1559);const i=(a,e,o)=>{let t;const n=()=>!(void 0===e()||void 0!==a.label||null===o()),d=()=>{const s=e();if(void 0===s)return;if(!n())return void s.style.removeProperty("width");const _=o().scrollWidth;if(0===_&&null===s.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const E=t=new IntersectionObserver(f=>{1===f[0].intersectionRatio&&(d(),E.disconnect(),t=void 0)},{threshold:.01,root:a});E.observe(s)}else s.style.setProperty("width",.75*_+"px")};return{calculateNotchWidth:()=>{n()&&(0,l.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7838:(y,p,c)=>{c.d(p,{c:()=>l});var h=c(467);const l=()=>{let i;return{lock:function(){var e=(0,h.A)(function*(){const o=i;let t;return i=new Promise(n=>t=n),void 0!==o&&(yield o),t});return function(){return e.apply(this,arguments)}}()}}},7895:(y,p,c)=>{c.d(p,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(i,a,e)=>{const o=i*a/e-i+"ms",t=2*Math.PI*a/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(i,a,e)=>{const o=a/e,t=i*o-i+"ms",n=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(i,a)=>({r:6,style:{left:32-32*a+"%","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(i,a,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*a+(a<e/2?180:-180)}deg)`,"animation-delay":i*a/e-i+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(i,a,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*a+(a<e/2?180:-180)}deg)`,"animation-delay":i*a/e-i+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(i,a,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":i*a/e-i+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(i,a,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":i*a/e-i+"ms"}})}}},8438:(y,p,c)=>{c.d(p,{g:()=>l});var h=c(8476);const l=()=>{if(void 0!==h.w)return h.w.Capacitor}},8960:(y,p,c)=>{c.d(p,{F:()=>l});var h=c(4020);let l=(()=>{var i;class a{constructor(){this.recipes=[{id:"r1",title:"Schnitzel",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",ingredients:["French Fries","Pork Meat","Salad"]},{id:"r2",title:"Spaghetti",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aglio_e_olio.jpg/250px-Aglio_e_olio.jpg",ingredients:["Spaghetti","Meat","Tomatoes"]}]}getAllRecipes(){return[...this.recipes]}getRecipe(o){const t=this.recipes.find(n=>n.id===o);if(!t)throw new Error("Recipe not found");return t}deleteRecipe(o){this.recipes=this.recipes.filter(t=>t.id!==o)}}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275prov=h.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),a})()},8976:(y,p,c)=>{c.d(p,{c:()=>a});var h=c(6317),l=c(1086),i=c(8607);const a=(e,o)=>{let t,n;const u=(s,_,E)=>{if(typeof document>"u")return;const f=document.elementFromPoint(s,_);f&&o(f)&&!f.disabled?f!==t&&(r(),d(f,E)):r()},d=(s,_)=>{t=s,n||(n=t);const E=t;(0,h.w)(()=>E.classList.add("ion-activated")),_()},r=(s=!1)=>{if(!t)return;const _=t;(0,h.w)(()=>_.classList.remove("ion-activated")),s&&n!==t&&t.click(),t=void 0};return(0,i.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:s=>u(s.currentX,s.currentY,l.a),onMove:s=>u(s.currentX,s.currentY,l.b),onEnd:()=>{r(!0),(0,l.h)(),n=void 0}})}}}]);