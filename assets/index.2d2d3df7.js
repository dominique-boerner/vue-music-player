(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function hr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=me(r)?ul(r):hr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(me(e))return e;if(oe(e))return e}}const ll=/;(?![^(]*\))/g,cl=/:([^]+)/,fl=/\/\*.*?\*\//gs;function ul(e){const t={};return e.replace(fl,"").split(ll).forEach(n=>{if(n){const r=n.split(cl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Tn(e){let t="";if(me(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Tn(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=_a(dl);function _o(e){return!!e||e===""}const ar=e=>me(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===Ao||!H(e.toString))?JSON.stringify(e,wo,2):String(e),wo=(e,t)=>t&&t.__v_isRef?wo(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ko(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!B(t)&&!Po(t)?String(t):t,re={},Bt=[],Fe=()=>{},pl=()=>!1,hl=/^on[^a-z]/,gr=e=>hl.test(e),wa=e=>e.startsWith("onUpdate:"),ye=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,q=(e,t)=>gl.call(e,t),B=Array.isArray,Ht=e=>vr(e)==="[object Map]",ko=e=>vr(e)==="[object Set]",H=e=>typeof e=="function",me=e=>typeof e=="string",Ea=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Eo=e=>oe(e)&&H(e.then)&&H(e.catch),Ao=Object.prototype.toString,vr=e=>Ao.call(e),vl=e=>vr(e).slice(8,-1),Po=e=>vr(e)==="[object Object]",Aa=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,qe=br(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Jt=br(e=>e.replace(yl,"-$1").toLowerCase()),yr=br(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=br(e=>e?`on${yr(e)}`:""),xn=(e,t)=>!Object.is(e,t),Mr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Oo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ai;const xl=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class _l{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function wl(e,t=Ue){t&&t.active&&t.effects.push(e)}const Pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Co=e=>(e.w&pt)>0,So=e=>(e.n&pt)>0,kl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},El=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Co(a)&&!So(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},qr=new WeakMap;let cn=0,pt=1;const Vr=30;let Ie;const Ct=Symbol(""),Xr=Symbol("");class Oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wl(this,r)}run(){if(!this.active)return this.fn();let t=Ie,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,dt=!0,pt=1<<++cn,cn<=Vr?kl(this):ii(this),this.fn()}finally{cn<=Vr&&El(this),pt=1<<--cn,Ie=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(ii(this),this.onStop&&this.onStop(),this.active=!1)}}function ii(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const Ro=[];function Zt(){Ro.push(dt),dt=!1}function en(){const e=Ro.pop();dt=e===void 0?!0:e}function Ae(e,t,n){if(dt&&Ie){let r=qr.get(e);r||qr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Pa()),Io(a)}}function Io(e,t){let n=!1;cn<=Vr?So(e)||(e.n|=pt,n=!Co(e)):n=!e.has(Ie),n&&(e.add(Ie),Ie.deps.push(e))}function et(e,t,n,r,a,i){const o=qr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e)){const l=Oo(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?Aa(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),Ht(e)&&s.push(o.get(Xr)));break;case"delete":B(e)||(s.push(o.get(Ct)),Ht(e)&&s.push(o.get(Xr)));break;case"set":Ht(e)&&s.push(o.get(Ct));break}if(s.length===1)s[0]&&Gr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Gr(Pa(l))}}function Gr(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&oi(r);for(const r of n)r.computed||oi(r)}function oi(e,t){(e!==Ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Al=_a("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ea)),Pl=Ca(),Ol=Ca(!1,!0),Cl=Ca(!0),si=Sl();function Sl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Zt();const r=V(this)[t].apply(this,n);return en(),r}}),e}function Ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Wl:jo:t?Fo:Lo).get(r))return r;const o=B(r);if(!e&&o&&q(si,a))return Reflect.get(si,a,i);const s=Reflect.get(r,a,i);return(Ea(a)?To.has(a):Al(a))||(e||Ae(r,"get",a),t)?s:ge(s)?o&&Aa(a)?s:s.value:oe(s)?e?$o(s):tn(s):s}}const Rl=Mo(),Il=Mo(!0);function Mo(e=!1){return function(n,r,a,i){let o=n[r];if(Kt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!or(a)&&!Kt(a)&&(o=V(o),a=V(a)),!B(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=B(n)&&Aa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?xn(a,o)&&et(n,"set",r,a):et(n,"add",r,a)),l}}function Tl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&et(e,"delete",t,void 0),r}function Ml(e,t){const n=Reflect.has(e,t);return(!Ea(t)||!To.has(t))&&Ae(e,"has",t),n}function Nl(e){return Ae(e,"iterate",B(e)?"length":Ct),Reflect.ownKeys(e)}const No={get:Pl,set:Rl,deleteProperty:Tl,has:Ml,ownKeys:Nl},Ll={get:Cl,set(e,t){return!0},deleteProperty(e,t){return!0}},Fl=ye({},No,{get:Ol,set:Il}),Sa=e=>e,xr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=xr(a),s=r?Sa:n?Ta:_n;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function $n(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function zn(e,t=!1){return e=e.__v_raw,!t&&Ae(V(e),"iterate",Ct),Reflect.get(e,"size",e)}function li(e){e=V(e);const t=V(this);return xr(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function ci(e,t){t=V(t);const n=V(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?xn(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function fi(e){const t=V(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function ui(){const e=V(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Sa:e?Ta:_n;return!e&&Ae(s,"iterate",Ct),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Bn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ht(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Sa:t?Ta:_n;return!t&&Ae(i,"iterate",l?Xr:Ct),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function jl(){const e={get(i){return jn(this,i)},get size(){return zn(this)},has:$n,add:li,set:ci,delete:fi,clear:ui,forEach:Dn(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return zn(this)},has:$n,add:li,set:ci,delete:fi,clear:ui,forEach:Dn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return zn(this,!0)},has(i){return $n.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Dn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return $n.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Bn(i,!1,!1),n[i]=Bn(i,!0,!1),t[i]=Bn(i,!1,!0),r[i]=Bn(i,!0,!0)}),[e,n,t,r]}const[$l,zl,Dl,Bl]=jl();function Ra(e,t){const n=t?e?Bl:Dl:e?zl:$l;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Hl={get:Ra(!1,!1)},Ul={get:Ra(!1,!0)},Yl={get:Ra(!0,!1)},Lo=new WeakMap,Fo=new WeakMap,jo=new WeakMap,Wl=new WeakMap;function Kl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Kl(vl(e))}function tn(e){return Kt(e)?e:Ia(e,!1,No,Hl,Lo)}function Vl(e){return Ia(e,!1,Fl,Ul,Fo)}function $o(e){return Ia(e,!0,Ll,Yl,jo)}function Ia(e,t,n,r,a){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ql(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return Kt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function zo(e){return Ut(e)||Kt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Do(e){return ir(e,"__v_skip",!0),e}const _n=e=>oe(e)?tn(e):e,Ta=e=>oe(e)?$o(e):e;function Bo(e){dt&&Ie&&(e=V(e),Io(e.dep||(e.dep=Pa())))}function Ho(e,t){e=V(e),e.dep&&Gr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function fn(e){return Uo(e,!1)}function Xl(e){return Uo(e,!0)}function Uo(e,t){return ge(e)?e:new Gl(e,t)}class Gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:_n(t)}get value(){return Bo(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Kt(t);t=n?t:V(t),xn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_n(t),Ho(this))}}function Je(e){return ge(e)?e.value:e}const Ql={get:(e,t,n)=>Je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Yo(e){return Ut(e)?e:new Proxy(e,Ql)}var Wo;class Jl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Wo]=!1,this._dirty=!0,this.effect=new Oa(t,()=>{this._dirty||(this._dirty=!0,Ho(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Wo="__v_isReadonly";function Zl(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new Jl(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function je(e,t,n,r){if(H(e)){const i=mt(e,t,n,r);return i&&Eo(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}ec(e,n,a,r)}function ec(e,t,n,r=!0){console.error(e)}let wn=!1,Qr=!1;const he=[];let We=0;const Yt=[];let Xe=null,Et=0;const Ko=Promise.resolve();let Ma=null;function qo(e){const t=Ma||Ko;return e?t.then(this?e.bind(this):e):t}function tc(e){let t=We+1,n=he.length;for(;t<n;){const r=t+n>>>1;kn(he[r])<e?t=r+1:n=r}return t}function Na(e){(!he.length||!he.includes(e,wn&&e.allowRecurse?We+1:We))&&(e.id==null?he.push(e):he.splice(tc(e.id),0,e),Vo())}function Vo(){!wn&&!Qr&&(Qr=!0,Ma=Ko.then(Go))}function nc(e){const t=he.indexOf(e);t>We&&he.splice(t,1)}function rc(e){B(e)?Yt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Et+1:Et))&&Yt.push(e),Vo()}function di(e,t=wn?We+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function Xo(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>kn(n)-kn(r)),Et=0;Et<Xe.length;Et++)Xe[Et]();Xe=null,Et=0}}const kn=e=>e.id==null?1/0:e.id,ac=(e,t)=>{const n=kn(e)-kn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Go(e){Qr=!1,wn=!0,he.sort(ac);const t=Fe;try{for(We=0;We<he.length;We++){const n=he[We];n&&n.active!==!1&&mt(n,null,14)}}finally{We=0,he.length=0,Xo(),wn=!1,Ma=null,(he.length||Yt.length)&&Go()}}function ic(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||re;p&&(a=n.map(g=>me(g)?g.trim():g)),d&&(a=n.map(Oo))}let s,l=r[s=Tr(t)]||r[s=Tr(qe(t))];!l&&i&&(l=r[s=Tr(Jt(t))]),l&&je(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(f,e,6,a)}}function Qo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const c=Qo(f,t,!0);c&&(s=!0,ye(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(oe(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):ye(o,i),oe(e)&&r.set(e,o),o)}function wr(e,t){return!e||!gr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Jt(t))||q(e,t))}let Me=null,Jo=null;function sr(e){const t=Me;return Me=e,Jo=e&&e.type.__scopeId||null,t}function oc(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&_i(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&_i(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let L,b;const _=sr(e);try{if(n.shapeFlag&4){const z=a||r;L=Ye(c.call(z,z,d,i,g,p,A)),b=l}else{const z=t;L=Ye(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),b=t.props?l:sc(l)}}catch(z){pn.length=0,_r(z,e,1),L=ue(Rt)}let P=L;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:Y}=P;z.length&&Y&7&&(o&&z.some(wa)&&(b=lc(b,o)),P=qt(P,b))}return n.dirs&&(P=qt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),L=P,sr(_),L}const sc=e=>{let t;for(const n in e)(n==="class"||n==="style"||gr(n))&&((t||(t={}))[n]=e[n]);return t},lc=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!wr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?mi(r,o,f):!0:!!o;return!1}function mi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!wr(n,i))return!0}return!1}function fc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const uc=e=>e.__isSuspense;function dc(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):rc(e)}function Zn(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=pe||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const Hn={};function dn(e,t,n){return Zo(e,t,n)}function Zo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=pe;let l,f=!1,c=!1;if(ge(e)?(l=()=>e.value,f=or(e)):Ut(e)?(l=()=>e,r=!0):B(e)?(c=!0,f=e.some(P=>Ut(P)||or(P)),l=()=>e.map(P=>{if(ge(P))return P.value;if(Ut(P))return $t(P);if(H(P))return mt(P,s,2)})):H(e)?t?l=()=>mt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[p])}:l=Fe,t&&r){const P=l;l=()=>$t(P())}let d,p=P=>{d=b.onStop=()=>{mt(P,s,4)}},g;if(An)if(p=Fe,t?n&&je(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const P=cf();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Fe;let A=c?new Array(e.length).fill(Hn):Hn;const S=()=>{if(!!b.active)if(t){const P=b.run();(r||f||(c?P.some((z,Y)=>xn(z,A[Y])):xn(P,A)))&&(d&&d(),je(t,s,3,[P,A===Hn?void 0:c&&A[0]===Hn?[]:A,p]),A=P)}else b.run()};S.allowRecurse=!!t;let L;a==="sync"?L=S:a==="post"?L=()=>we(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),L=()=>Na(S));const b=new Oa(l,L);t?n?S():A=b.run():a==="post"?we(b.run.bind(b),s&&s.suspense):b.run();const _=()=>{b.stop(),s&&s.scope&&ka(s.scope.effects,b)};return g&&g.push(_),_}function mc(e,t,n){const r=this.proxy,a=me(e)?e.includes(".")?es(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=pe;Vt(this);const s=Zo(a,i.bind(r),n);return o?Vt(o):St(),s}function es(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function $t(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))$t(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(ko(e)||Ht(e))e.forEach(n=>{$t(n,t)});else if(Po(e))for(const n in e)$t(e[n],t);return e}function ze(e){return H(e)?{setup:e,name:e.name}:e}const er=e=>!!e.type.__asyncLoader,ts=e=>e.type.__isKeepAlive;function pc(e,t){ns(e,"a",t)}function hc(e,t){ns(e,"da",t)}function ns(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(kr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ts(a.parent.vnode)&&gc(r,t,n,a),a=a.parent}}function gc(e,t,n,r){const a=kr(t,e,r,!0);rs(()=>{ka(r[t],a)},n)}function kr(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Vt(n);const s=je(t,n,e,o);return St(),en(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=pe)=>(!An||e==="sp")&&kr(e,(...r)=>t(...r),n),vc=at("bm"),bc=at("m"),yc=at("bu"),xc=at("u"),_c=at("bum"),rs=at("um"),wc=at("sp"),kc=at("rtg"),Ec=at("rtc");function Ac(e,t=pe){kr("ec",e,t)}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Zt(),je(l,n,8,[e.el,s,e,t]),en())}}const as="components";function Pc(e,t){return Cc(as,e,!0,t)||e}const Oc=Symbol();function Cc(e,t,n=!0,r=!1){const a=Me||pe;if(a){const i=a.type;if(e===as){const s=of(i,!1);if(s&&(s===t||s===qe(t)||s===yr(qe(t))))return i}const o=pi(a[e]||i[e],t)||pi(a.appContext[e],t);return!o&&r?i:o}}function pi(e,t){return e&&(e[t]||e[qe(t)]||e[yr(qe(t))])}const Jr=e=>e?gs(e)?$a(e)||e.proxy:Jr(e.parent):null,mn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$emit:e=>e.emit,$options:e=>La(e),$forceUpdate:e=>e.f||(e.f=()=>Na(e.update)),$nextTick:e=>e.n||(e.n=qo.bind(e.proxy)),$watch:e=>mc.bind(e)}),Lr=(e,t)=>e!==re&&!e.__isScriptSetup&&q(e,t),Sc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Lr(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];Zr&&(o[t]=0)}}const c=mn[t];let d,p;if(c)return t==="$attrs"&&Ae(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Lr(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||Lr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(mn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Zr=!0;function Rc(e){const t=La(e),n=e.proxy,r=e.ctx;Zr=!1,t.beforeCreate&&hi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:L,beforeDestroy:b,beforeUnmount:_,destroyed:P,unmounted:z,render:Y,renderTracked:ne,renderTriggered:se,errorCaptured:ke,serverPrefetch:ve,expose:Oe,inheritAttrs:ot,components:De,directives:Mt,filters:yt}=t;if(f&&Ic(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];H(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);oe(J)&&(e.data=tn(J))}if(Zr=!0,i)for(const J in i){const G=i[J],Ce=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):Fe,xt=!H(G)&&H(G.set)?G.set.bind(n):Fe,Se=ie({get:Ce,set:xt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:xe=>Se.value=xe})}if(s)for(const J in s)is(s[J],r,n,J);if(l){const J=H(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Zn(G,J[G])})}c&&hi(c,e,"c");function ce(J,G){B(G)?G.forEach(Ce=>J(Ce.bind(n))):G&&J(G.bind(n))}if(ce(vc,d),ce(bc,p),ce(yc,g),ce(xc,A),ce(pc,S),ce(hc,L),ce(Ac,ke),ce(Ec,ne),ce(kc,se),ce(_c,_),ce(rs,z),ce(wc,ve),B(Oe))if(Oe.length){const J=e.exposed||(e.exposed={});Oe.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Ce=>n[G]=Ce})})}else e.exposed||(e.exposed={});Y&&e.render===Fe&&(e.render=Y),ot!=null&&(e.inheritAttrs=ot),De&&(e.components=De),Mt&&(e.directives=Mt)}function Ic(e,t,n=Fe,r=!1){B(e)&&(e=ea(e));for(const a in e){const i=e[a];let o;oe(i)?"default"in i?o=Ze(i.from||a,i.default,!0):o=Ze(i.from||a):o=Ze(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function hi(e,t,n){je(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function is(e,t,n,r){const a=r.includes(".")?es(n,r):()=>n[r];if(me(e)){const i=t[e];H(i)&&dn(a,i)}else if(H(e))dn(a,e.bind(n));else if(oe(e))if(B(e))e.forEach(i=>is(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&dn(a,i,e)}}function La(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>lr(l,f,o,!0)),lr(l,t,o)),oe(t)&&i.set(t,l),l}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Tc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Tc={data:gi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:kt,directives:kt,watch:Nc,provide:gi,inject:Mc};function gi(e,t){return t?e?function(){return ye(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Mc(e,t){return kt(ea(e),ea(t))}function ea(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Nc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Lc(e,t,n,r=!1){const a={},i={};ir(i,Ar,1),e.propsDefaults=Object.create(null),os(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(wr(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const A=qe(p);a[A]=ta(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{os(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!q(t,d)&&((c=Jt(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ta(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],f=!0)}f&&et(e,"set","$attrs")}function os(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Jn(l))continue;const f=t[l];let c;a&&q(a,c=qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:wr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ta(a,l,d,f[d],e,!q(f,d))}}return o}function ta(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Vt(a),r=f[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}function ss(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const c=d=>{l=!0;const[p,g]=ss(d,t,!0);ye(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return oe(e)&&r.set(e,Bt),Bt;if(B(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);vi(d)&&(o[d]=re)}else if(i)for(const c in i){const d=qe(c);if(vi(d)){const p=i[c],g=o[d]=B(p)||H(p)?{type:p}:Object.assign({},p);if(g){const A=xi(Boolean,g.type),S=xi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||q(g,"default"))&&s.push(d)}}}const f=[o,s];return oe(e)&&r.set(e,f),f}function vi(e){return e[0]!=="$"}function bi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yi(e,t){return bi(e)===bi(t)}function xi(e,t){return B(t)?t.findIndex(n=>yi(n,e)):H(t)&&yi(t,e)?0:-1}const ls=e=>e[0]==="_"||e==="$stable",Fa=e=>B(e)?e.map(Ye):[Ye(e)],jc=(e,t,n)=>{if(t._n)return t;const r=oc((...a)=>Fa(t(...a)),n);return r._c=!1,r},cs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ls(a))continue;const i=e[a];if(H(i))t[a]=jc(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},fs=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},$c=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ir(t,"_",n)):cs(t,e.slots={})}else e.slots={},t&&fs(e,t);ir(e.slots,Ar,1)},zc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,cs(t,a)),o=t}else t&&(fs(e,t),o={default:1});if(i)for(const s in a)!ls(s)&&!(s in o)&&delete a[s]};function us(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dc=0;function Bc(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!oe(a)&&(a=null);const i=us(),o=new Set;let s=!1;const l=i.app={_uid:Dc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...c)):H(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=ue(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,$a(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function na(e,t,n,r,a=!1){if(B(e)){e.forEach((p,g)=>na(p,t&&(B(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?$a(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(me(f)?(c[f]=null,q(d,f)&&(d[f]=null)):ge(f)&&(f.value=null)),H(l))mt(l,s,12,[o,c]);else{const p=me(l),g=ge(l);if(p||g){const A=()=>{if(e.f){const S=p?q(d,l)?d[l]:c[l]:l.value;a?B(S)&&ka(S,i):B(S)?S.includes(i)||S.push(i):p?(c[l]=[i],q(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=dc;function Hc(e){return Uc(e)}function Uc(e,t){const n=xl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Fe,insertStaticContent:A}=e,S=(u,m,h,v=null,x=null,E=null,R=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=C(u),xe(u,x,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:M}=m;switch(w){case Er:L(u,m,h,v);break;case Rt:b(u,m,h,v);break;case Fr:u==null&&_(m,h,v,R);break;case Ge:De(u,m,h,v,x,E,R,k,O);break;default:M&1?Y(u,m,h,v,x,E,R,k,O):M&6?Mt(u,m,h,v,x,E,R,k,O):(M&64||M&128)&&w.process(u,m,h,v,x,E,R,k,O,K)}j!=null&&x&&na(j,u&&u.ref,E,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},_=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},P=({el:u,anchor:m},h,v)=>{let x;for(;u&&u!==m;)x=p(u),r(u,h,v),u=x;r(m,h,v)},z=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},Y=(u,m,h,v,x,E,R,k,O)=>{R=R||m.type==="svg",u==null?ne(m,h,v,x,E,R,k,O):ve(u,m,x,E,R,k,O)},ne=(u,m,h,v,x,E,R,k)=>{let O,w;const{type:j,props:M,shapeFlag:$,transition:D,dirs:W}=u;if(O=u.el=o(u.type,E,M&&M.is,M),$&8?c(O,u.children):$&16&&ke(u.children,O,null,v,x,E&&j!=="foreignObject",R,k),W&&_t(u,null,v,"created"),M){for(const Q in M)Q!=="value"&&!Jn(Q)&&i(O,Q,null,M[Q],E,u.children,v,x,I);"value"in M&&i(O,"value",null,M.value),(w=M.onVnodeBeforeMount)&&He(w,v,u)}se(O,u,u.scopeId,R,v),W&&_t(u,null,v,"beforeMount");const Z=(!x||x&&!x.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(O),r(O,m,h),((w=M&&M.onVnodeMounted)||Z||W)&&we(()=>{w&&He(w,v,u),Z&&D.enter(O),W&&_t(u,null,v,"mounted")},x)},se=(u,m,h,v,x)=>{if(h&&g(u,h),v)for(let E=0;E<v.length;E++)g(u,v[E]);if(x){let E=x.subTree;if(m===E){const R=x.vnode;se(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},ke=(u,m,h,v,x,E,R,k,O=0)=>{for(let w=O;w<u.length;w++){const j=u[w]=k?ft(u[w]):Ye(u[w]);S(null,j,m,h,v,x,E,R,k)}},ve=(u,m,h,v,x,E,R)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:w,dirs:j}=m;O|=u.patchFlag&16;const M=u.props||re,$=m.props||re;let D;h&&wt(h,!1),(D=$.onVnodeBeforeUpdate)&&He(D,h,m,u),j&&_t(m,u,h,"beforeUpdate"),h&&wt(h,!0);const W=x&&m.type!=="foreignObject";if(w?Oe(u.dynamicChildren,w,k,h,v,W,E):R||G(u,m,k,null,h,v,W,E,!1),O>0){if(O&16)ot(k,m,M,$,h,v,x);else if(O&2&&M.class!==$.class&&i(k,"class",null,$.class,x),O&4&&i(k,"style",M.style,$.style,x),O&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const fe=Z[Q],Re=M[fe],Lt=$[fe];(Lt!==Re||fe==="value")&&i(k,fe,Re,Lt,x,u.children,h,v,I)}}O&1&&u.children!==m.children&&c(k,m.children)}else!R&&w==null&&ot(k,m,M,$,h,v,x);((D=$.onVnodeUpdated)||j)&&we(()=>{D&&He(D,h,m,u),j&&_t(m,u,h,"updated")},v)},Oe=(u,m,h,v,x,E,R)=>{for(let k=0;k<m.length;k++){const O=u[k],w=m[k],j=O.el&&(O.type===Ge||!sn(O,w)||O.shapeFlag&70)?d(O.el):h;S(O,w,j,null,v,x,E,R,!0)}},ot=(u,m,h,v,x,E,R)=>{if(h!==v){if(h!==re)for(const k in h)!Jn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,x,E,I);for(const k in v){if(Jn(k))continue;const O=v[k],w=h[k];O!==w&&k!=="value"&&i(u,k,w,O,R,m.children,x,E,I)}"value"in v&&i(u,"value",h.value,v.value)}},De=(u,m,h,v,x,E,R,k,O)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(w,h,v),r(j,h,v),ke(m.children,h,j,x,E,R,k,O)):M>0&&M&64&&$&&u.dynamicChildren?(Oe(u.dynamicChildren,$,h,x,E,R,k),(m.key!=null||x&&m===x.subTree)&&ds(u,m,!0)):G(u,m,h,j,x,E,R,k,O)},Mt=(u,m,h,v,x,E,R,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?x.ctx.activate(m,h,v,R,O):yt(m,h,v,x,E,R,O):an(u,m,O)},yt=(u,m,h,v,x,E,R)=>{const k=u.component=ef(u,v,x);if(ts(u)&&(k.ctx.renderer=K),tf(k),k.asyncDep){if(x&&x.registerDep(k,ce),!u.el){const O=k.subTree=ue(Rt);b(null,O,m,h)}return}ce(k,u,m,h,x,E,R)},an=(u,m,h)=>{const v=m.component=u.component;if(cc(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,nc(v.update),v.update();else m.el=u.el,v.vnode=m},ce=(u,m,h,v,x,E,R)=>{const k=()=>{if(u.isMounted){let{next:j,bu:M,u:$,parent:D,vnode:W}=u,Z=j,Q;wt(u,!1),j?(j.el=W.el,J(u,j,R)):j=W,M&&Mr(M),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&He(Q,D,j,W),wt(u,!0);const fe=Nr(u),Re=u.subTree;u.subTree=fe,S(Re,fe,d(Re.el),C(Re),u,x,E),j.el=fe.el,Z===null&&fc(u,fe.el),$&&we($,x),(Q=j.props&&j.props.onVnodeUpdated)&&we(()=>He(Q,D,j,W),x)}else{let j;const{el:M,props:$}=m,{bm:D,m:W,parent:Z}=u,Q=er(m);if(wt(u,!1),D&&Mr(D),!Q&&(j=$&&$.onVnodeBeforeMount)&&He(j,Z,m),wt(u,!0),M&&U){const fe=()=>{u.subTree=Nr(u),U(M,u.subTree,u,x,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=Nr(u);S(null,fe,h,v,u,x,E),m.el=fe.el}if(W&&we(W,x),!Q&&(j=$&&$.onVnodeMounted)){const fe=m;we(()=>He(j,Z,fe),x)}(m.shapeFlag&256||Z&&er(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,x),u.isMounted=!0,m=h=v=null}},O=u.effect=new Oa(k,()=>Na(w),u.scope),w=u.update=()=>O.run();w.id=u.uid,wt(u,!0),w()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Fc(u,m.props,v,h),zc(u,m.children,h),Zt(),di(),en()},G=(u,m,h,v,x,E,R,k,O=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,M=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){xt(w,M,h,v,x,E,R,k,O);return}else if($&256){Ce(w,M,h,v,x,E,R,k,O);return}}D&8?(j&16&&I(w,x,E),M!==w&&c(h,M)):j&16?D&16?xt(w,M,h,v,x,E,R,k,O):I(w,x,E,!0):(j&8&&c(h,""),D&16&&ke(M,h,v,x,E,R,k,O))},Ce=(u,m,h,v,x,E,R,k,O)=>{u=u||Bt,m=m||Bt;const w=u.length,j=m.length,M=Math.min(w,j);let $;for($=0;$<M;$++){const D=m[$]=O?ft(m[$]):Ye(m[$]);S(u[$],D,h,null,x,E,R,k,O)}w>j?I(u,x,E,!0,!1,M):ke(m,h,v,x,E,R,k,O,M)},xt=(u,m,h,v,x,E,R,k,O)=>{let w=0;const j=m.length;let M=u.length-1,$=j-1;for(;w<=M&&w<=$;){const D=u[w],W=m[w]=O?ft(m[w]):Ye(m[w]);if(sn(D,W))S(D,W,h,null,x,E,R,k,O);else break;w++}for(;w<=M&&w<=$;){const D=u[M],W=m[$]=O?ft(m[$]):Ye(m[$]);if(sn(D,W))S(D,W,h,null,x,E,R,k,O);else break;M--,$--}if(w>M){if(w<=$){const D=$+1,W=D<j?m[D].el:v;for(;w<=$;)S(null,m[w]=O?ft(m[w]):Ye(m[w]),h,W,x,E,R,k,O),w++}}else if(w>$)for(;w<=M;)xe(u[w],x,E,!0),w++;else{const D=w,W=w,Z=new Map;for(w=W;w<=$;w++){const Ee=m[w]=O?ft(m[w]):Ye(m[w]);Ee.key!=null&&Z.set(Ee.key,w)}let Q,fe=0;const Re=$-W+1;let Lt=!1,ti=0;const on=new Array(Re);for(w=0;w<Re;w++)on[w]=0;for(w=D;w<=M;w++){const Ee=u[w];if(fe>=Re){xe(Ee,x,E,!0);continue}let Be;if(Ee.key!=null)Be=Z.get(Ee.key);else for(Q=W;Q<=$;Q++)if(on[Q-W]===0&&sn(Ee,m[Q])){Be=Q;break}Be===void 0?xe(Ee,x,E,!0):(on[Be-W]=w+1,Be>=ti?ti=Be:Lt=!0,S(Ee,m[Be],h,null,x,E,R,k,O),fe++)}const ni=Lt?Yc(on):Bt;for(Q=ni.length-1,w=Re-1;w>=0;w--){const Ee=W+w,Be=m[Ee],ri=Ee+1<j?m[Ee+1].el:v;on[w]===0?S(null,Be,h,ri,x,E,R,k,O):Lt&&(Q<0||w!==ni[Q]?Se(Be,h,ri,2):Q--)}}},Se=(u,m,h,v,x=null)=>{const{el:E,type:R,transition:k,children:O,shapeFlag:w}=u;if(w&6){Se(u.component.subTree,m,h,v);return}if(w&128){u.suspense.move(m,h,v);return}if(w&64){R.move(u,m,h,K);return}if(R===Ge){r(E,m,h);for(let M=0;M<O.length;M++)Se(O[M],m,h,v);r(u.anchor,m,h);return}if(R===Fr){P(u,m,h);return}if(v!==2&&w&1&&k)if(v===0)k.beforeEnter(E),r(E,m,h),we(()=>k.enter(E),x);else{const{leave:M,delayLeave:$,afterLeave:D}=k,W=()=>r(E,m,h),Z=()=>{M(E,()=>{W(),D&&D()})};$?$(E,W,Z):Z()}else r(E,m,h)},xe=(u,m,h,v=!1,x=!1)=>{const{type:E,props:R,ref:k,children:O,dynamicChildren:w,shapeFlag:j,patchFlag:M,dirs:$}=u;if(k!=null&&na(k,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,W=!er(u);let Z;if(W&&(Z=R&&R.onVnodeBeforeUnmount)&&He(Z,m,u),j&6)y(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}D&&_t(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,x,K,v):w&&(E!==Ge||M>0&&M&64)?I(w,m,h,!1,!0):(E===Ge&&M&384||!x&&j&16)&&I(O,m,h),v&&Nt(u)}(W&&(Z=R&&R.onVnodeUnmounted)||D)&&we(()=>{Z&&He(Z,m,u),D&&_t(u,null,m,"unmounted")},h)},Nt=u=>{const{type:m,el:h,anchor:v,transition:x}=u;if(m===Ge){Fn(h,v);return}if(m===Fr){z(u);return}const E=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:k}=x,O=()=>R(h,E);k?k(u.el,E,O):O()}else E()},Fn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:x,update:E,subTree:R,um:k}=u;v&&Mr(v),x.stop(),E&&(E.active=!1,xe(R,u,m,h)),k&&we(k,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,x=!1,E=0)=>{for(let R=E;R<u.length;R++)xe(u[R],m,h,v,x)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),F=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),di(),Xo(),m._vnode=u},K={p:S,um:xe,m:Se,r:Nt,mt:yt,mc:ke,pc:G,pbc:Oe,n:C,o:e};let ae,U;return t&&([ae,U]=t(K)),{render:F,hydrate:ae,createApp:Bc(F,ae)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ds(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ft(a[i]),s.el=o.el),n||ds(o,s)),s.type===Er&&(s.el=o.el)}}function Yc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Wc=e=>e.__isTeleport,Ge=Symbol(void 0),Er=Symbol(void 0),Rt=Symbol(void 0),Fr=Symbol(void 0),pn=[];let Ne=null;function ht(e=!1){pn.push(Ne=e?null:[])}function Kc(){pn.pop(),Ne=pn[pn.length-1]||null}let En=1;function _i(e){En+=e}function ms(e){return e.dynamicChildren=En>0?Ne||Bt:null,Kc(),En>0&&Ne&&Ne.push(e),e}function nn(e,t,n,r,a,i){return ms(Qe(e,t,n,r,a,i,!0))}function ps(e,t,n,r,a){return ms(ue(e,t,n,r,a,!0))}function ra(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Ar="__vInternal",hs=({key:e})=>e!=null?e:null,tr=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||ge(e)||H(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Qe(e,t=null,n=null,r=0,a=null,i=e===Ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hs(t),ref:t&&tr(t),scopeId:Jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(ja(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),En>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const ue=qc;function qc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Oc)&&(e=Rt),ra(e)){const s=qt(e,t,!0);return n&&ja(s,n),En>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(sf(e)&&(e=e.__vccOpts),t){t=Vc(t);let{class:s,style:l}=t;s&&!me(s)&&(t.class=Tn(s)),oe(l)&&(zo(l)&&!B(l)&&(l=ye({},l)),t.style=hr(l))}const o=me(e)?1:uc(e)?128:Wc(e)?64:oe(e)?4:H(e)?2:0;return Qe(e,t,n,r,a,o,i,!0)}function Vc(e){return e?zo(e)||Ar in e?ye({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Qc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&hs(s),ref:t&&t.ref?n&&a?B(a)?a.concat(tr(t)):[a,tr(t)]:tr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Xc(e=" ",t=0){return ue(Er,null,e,t)}function Gc(e="",t=!1){return t?(ht(),ps(Rt,null,e)):ue(Rt,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ue(Rt):B(e)?ue(Ge,null,e.slice()):typeof e=="object"?ft(e):ue(Er,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function ja(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ja(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ar in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Xc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Tn([t.class,r.class]));else if(a==="style")t.style=hr([t.style,r.style]);else if(gr(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){je(e,t,7,[n,r])}const Jc=us();let Zc=0;function ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Jc,i={uid:Zc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new _l(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ss(r,a),emitsOptions:Qo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ic.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Vt=e=>{pe=e,e.scope.on()},St=()=>{pe&&pe.scope.off(),pe=null};function gs(e){return e.vnode.shapeFlag&4}let An=!1;function tf(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=gs(e);Lc(e,n,a,t),$c(e,r);const i=a?nf(e,t):void 0;return An=!1,i}function nf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Do(new Proxy(e.ctx,Sc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?af(e):null;Vt(e),Zt();const i=mt(r,e,0,[e.props,a]);if(en(),St(),Eo(i)){if(i.then(St,St),t)return i.then(o=>{wi(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else wi(e,i,t)}else vs(e,t)}function wi(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Yo(t)),vs(e,n)}let ki;function vs(e,t,n){const r=e.type;if(!e.render){if(!t&&ki&&!r.render){const a=r.template||La(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=ki(a,f)}}e.render=r.render||Fe}Vt(e),Zt(),Rc(e),en(),St()}function rf(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function af(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=rf(e))},slots:e.slots,emit:e.emit,expose:t}}function $a(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yo(Do(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}}))}function of(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function sf(e){return H(e)&&"__vccOpts"in e}const ie=(e,t)=>Zl(e,t,An);function Pr(e,t,n){const r=arguments.length;return r===2?oe(t)&&!B(t)?ra(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ra(n)&&(n=[n]),ue(e,t,n))}const lf=Symbol(""),cf=()=>Ze(lf),ff="3.2.45",uf="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,Ei=At&&At.createElement("template"),df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(uf,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ei.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ei.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pf(e,t,n){const r=e.style,a=me(n);if(n&&!a){for(const i in n)aa(r,i,n[i]);if(t&&!me(t))for(const i in t)n[i]==null&&aa(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ai=/\s*!important$/;function aa(e,t,n){if(B(n))n.forEach(r=>aa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hf(e,t);Ai.test(n)?e.setProperty(Jt(r),n.replace(Ai,""),"important"):e[r]=n}}const Pi=["Webkit","Moz","ms"],jr={};function hf(e,t){const n=jr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return jr[t]=r;r=yr(r);for(let a=0;a<Pi.length;a++){const i=Pi[a]+r;if(i in e)return jr[t]=i}return t}const Oi="http://www.w3.org/1999/xlink";function gf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oi,t.slice(6,t.length)):e.setAttributeNS(Oi,t,n);else{const i=ml(t);n==null||i&&!_o(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function vf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=_o(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function bf(e,t,n,r){e.addEventListener(t,n,r)}function yf(e,t,n,r){e.removeEventListener(t,n,r)}function xf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=_f(t);if(r){const f=i[t]=Ef(r,a);bf(e,s,f,l)}else o&&(yf(e,s,o,l),i[t]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function _f(e){let t;if(Ci.test(e)){t={};let r;for(;r=e.match(Ci);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let $r=0;const wf=Promise.resolve(),kf=()=>$r||(wf.then(()=>$r=0),$r=Date.now());function Ef(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=kf(),n}function Af(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Si=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?mf(e,r,a):t==="style"?pf(e,n,r):gr(t)?wa(t)||xf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Of(e,t,r,a))?vf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gf(e,t,r,a))};function Of(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&me(n)?!1:t in e}const Cf=ye({patchProp:Pf},df);let Ri;function Sf(){return Ri||(Ri=Hc(Cf))}const Rf=(...e)=>{const t=Sf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=If(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function If(e){return me(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Tf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function zr(e,t){const n={};for(const r in t){const a=t[r];n[r]=$e(a)?a.map(e):e(a)}return n}const hn=()=>{},$e=Array.isArray,Mf=/\/$/,Nf=e=>e.replace(Mf,"");function Dr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=$f(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Lf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ii(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ff(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Xt(t.matched[r],n.matched[a])&&bs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jf(e[n],t[n]))return!1;return!0}function jf(e,t){return $e(e)?Ti(e,t):$e(t)?Ti(t,e):e===t}function Ti(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $f(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function zf(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Nf(e)}const Df=/^[^#]+#/;function Bf(e,t){return e.replace(Df,"#")+t}function Hf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Hf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Mi(e,t){return(history.state?history.state.position-t:-1)+e}const ia=new Map;function Yf(e,t){ia.set(e,t)}function Wf(e){const t=ia.get(e);return ia.delete(e),t}let Kf=()=>location.protocol+"//"+location.host;function ys(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ii(l,"")}return Ii(n,e)+r+a}function qf(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=ys(e,location),A=n.value,S=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}L=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:L,type:Pn.pop,direction:L?L>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Or()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Ni(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Or():null}}function Vf(e){const{history:t,location:n}=window,r={value:ys(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Kf()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=X({},t.state,Ni(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Or()});i(c.current,c,!0);const d=X({},Ni(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Xf(e){e=zf(e);const t=Vf(e),n=qf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Bf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Gf(e){return typeof e=="string"||e&&typeof e=="object"}function xs(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_s=Symbol("");var Li;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Li||(Li={}));function Gt(e,t){return X(new Error,{type:e,[_s]:!0},t)}function Ve(e,t){return e instanceof Error&&_s in e&&(t==null||!!(e.type&t))}const Fi="[^/]+?",Qf={sensitive:!1,strict:!1,start:!0,end:!0},Jf=/[.+*?^${}()[\]/\\]/g;function Zf(e,t){const n=X({},Qf,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(Jf,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:L,regexp:b}=p;i.push({name:A,repeatable:S,optional:L});const _=b||Fi;if(_!==Fi){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+z.message)}}let P=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(P=L&&f.length<2?`(?:/${P})`:"/"+P),L&&(P+="?"),a+=P,g+=20,L&&(g+=-8),S&&(g+=-20),_===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:L}=g,b=A in f?f[A]:"";if($e(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=$e(b)?b.join("/"):b;if(!_)if(L)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function eu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function tu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=eu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(ji(r))return 1;if(ji(a))return-1}return a.length-r.length}function ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const nu={type:0,value:""},ru=/[a-zA-Z0-9_]/;function au(e){if(!e)return[[]];if(e==="/")return[[nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:ru.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function iu(e,t,n){const r=Zf(au(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function ou(e,t){const n=[],r=new Map;t=Di({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,A=su(c);A.aliasOf=p&&p.record;const S=Di(t,c),L=[A];if("alias"in c){const P=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of P)L.push(X({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let b,_;for(const P of L){const{path:z}=P;if(d&&z[0]!=="/"){const Y=d.record.path,ne=Y[Y.length-1]==="/"?"":"/";P.path=d.record.path+(z&&ne+z)}if(b=iu(P,d,S),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&c.name&&!zi(b)&&o(c.name)),A.children){const Y=A.children;for(let ne=0;ne<Y.length;ne++)i(Y[ne],b,p&&p.children[ne])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return _?()=>{o(_)}:hn}function o(c){if(xs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&tu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!ws(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!zi(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},A,S;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Gt(1,{location:c});S=p.record.name,g=X($i(d.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&$i(c.params,p.keys.map(_=>_.name))),A=p.stringify(g)}else if("path"in c)A=c.path,p=n.find(_=>_.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!p)throw Gt(1,{location:c,currentLocation:d});S=p.record.name,g=X({},d.params,c.params),A=p.stringify(g)}const L=[];let b=p;for(;b;)L.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:L,meta:cu(L)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function $i(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function su(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:lu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function lu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function zi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Di(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ws(e,t){return t.children.some(n=>n===e||ws(e,n))}const ks=/#/g,fu=/&/g,uu=/\//g,du=/=/g,mu=/\?/g,Es=/\+/g,pu=/%5B/g,hu=/%5D/g,As=/%5E/g,gu=/%60/g,Ps=/%7B/g,vu=/%7C/g,Os=/%7D/g,bu=/%20/g;function za(e){return encodeURI(""+e).replace(vu,"|").replace(pu,"[").replace(hu,"]")}function yu(e){return za(e).replace(Ps,"{").replace(Os,"}").replace(As,"^")}function oa(e){return za(e).replace(Es,"%2B").replace(bu,"+").replace(ks,"%23").replace(fu,"%26").replace(gu,"`").replace(Ps,"{").replace(Os,"}").replace(As,"^")}function xu(e){return oa(e).replace(du,"%3D")}function _u(e){return za(e).replace(ks,"%23").replace(mu,"%3F")}function wu(e){return e==null?"":_u(e).replace(uu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ku(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Es," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let f=t[s];$e(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Bi(e){let t="";for(let n in e){const r=e[n];if(n=xu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&oa(i)):[r&&oa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Eu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Au=Symbol(""),Hi=Symbol(""),Da=Symbol(""),Cs=Symbol(""),sa=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Gt(4,{from:n,to:t})):d instanceof Error?s(d):Gf(d)?s(Gt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Pu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ut(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Tf(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&ut(p,n,r,i,o)()}))}}return a}function Pu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ui(e){const t=Ze(Da),n=Ze(Cs),r=ie(()=>t.resolve(Je(e.to))),a=ie(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Xt.bind(null,c));if(p>-1)return p;const g=Yi(l[f-2]);return f>1&&Yi(c)===g&&d[d.length-1].path!==g?d.findIndex(Xt.bind(null,l[f-2])):p}),i=ie(()=>a.value>-1&&Ru(n.params,r.value.params)),o=ie(()=>a.value>-1&&a.value===n.matched.length-1&&bs(n.params,r.value.params));function s(l={}){return Su(l)?t[Je(e.replace)?"replace":"push"](Je(e.to)).catch(hn):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Ou=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ui,setup(e,{slots:t}){const n=tn(Ui(e)),{options:r}=Ze(Da),a=ie(()=>({[Wi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Pr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Cu=Ou;function Su(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ru(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!$e(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Yi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wi=(e,t,n)=>e!=null?e:t!=null?t:n,Iu=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(sa),a=ie(()=>e.route||r.value),i=Ze(Hi,0),o=ie(()=>{let f=Je(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=ie(()=>a.value.matched[o.value]);Zn(Hi,ie(()=>o.value+1)),Zn(Au,s),Zn(sa,a);const l=fn();return dn(()=>[l.value,s.value,e.name],([f,c,d],[p,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Xt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Ki(n.default,{Component:p,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,L=Pr(p,X({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Ki(n.default,{Component:L,route:f})||L}}});function Ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ss=Iu;function Tu(e){const t=ou(e.routes,e),n=e.parseQuery||ku,r=e.stringifyQuery||Bi,a=e.history,i=ln(),o=ln(),s=ln(),l=Xl(lt);let f=lt;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,y=>""+y),d=zr.bind(null,wu),p=zr.bind(null,cr);function g(y,I){let C,F;return xs(y)?(C=t.getRecordMatcher(y),F=I):F=y,t.addRoute(F,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function L(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=X({},I||l.value),typeof y=="string"){const u=Dr(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return X(u,m,{params:p(m.params),hash:cr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=X({},y,{path:Dr(n,y.path,I.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];C=X({},y,{params:d(y.params)}),I.params=d(I.params)}const F=t.resolve(C,I),K=y.hash||"";F.params=c(p(F.params));const ae=Lf(r,X({},y,{hash:yu(K),path:F.path})),U=a.createHref(ae);return X({fullPath:ae,hash:K,query:r===Bi?Eu(y.query):y.query||{}},F,{redirectedFrom:void 0,href:U})}function _(y){return typeof y=="string"?Dr(n,y,l.value.path):X({},y)}function P(y,I){if(f!==y)return Gt(8,{from:I,to:y})}function z(y){return se(y)}function Y(y){return z(X(_(y),{replace:!0}))}function ne(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),X({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function se(y,I){const C=f=b(y),F=l.value,K=y.state,ae=y.force,U=y.replace===!0,u=ne(C);if(u)return se(X(_(u),{state:typeof u=="object"?X({},K,u.state):K,force:ae,replace:U}),I||C);const m=C;m.redirectedFrom=I;let h;return!ae&&Ff(r,F,C)&&(h=Gt(16,{to:m,from:F}),xt(F,F,!0,!1)),(h?Promise.resolve(h):ve(m,F)).catch(v=>Ve(v)?Ve(v,2)?v:Ce(v):J(v,m,F)).then(v=>{if(v){if(Ve(v,2))return se(X({replace:U},_(v.to),{state:typeof v.to=="object"?X({},K,v.to.state):K,force:ae}),I||m)}else v=ot(m,F,!0,U,K);return Oe(m,F,v),v})}function ke(y,I){const C=P(y,I);return C?Promise.reject(C):Promise.resolve()}function ve(y,I){let C;const[F,K,ae]=Mu(y,I);C=Br(F.reverse(),"beforeRouteLeave",y,I);for(const u of F)u.leaveGuards.forEach(m=>{C.push(ut(m,y,I))});const U=ke.bind(null,y,I);return C.push(U),Ft(C).then(()=>{C=[];for(const u of i.list())C.push(ut(u,y,I));return C.push(U),Ft(C)}).then(()=>{C=Br(K,"beforeRouteUpdate",y,I);for(const u of K)u.updateGuards.forEach(m=>{C.push(ut(m,y,I))});return C.push(U),Ft(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if($e(u.beforeEnter))for(const m of u.beforeEnter)C.push(ut(m,y,I));else C.push(ut(u.beforeEnter,y,I));return C.push(U),Ft(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Br(ae,"beforeRouteEnter",y,I),C.push(U),Ft(C))).then(()=>{C=[];for(const u of o.list())C.push(ut(u,y,I));return C.push(U),Ft(C)}).catch(u=>Ve(u,8)?u:Promise.reject(u))}function Oe(y,I,C){for(const F of s.list())F(y,I,C)}function ot(y,I,C,F,K){const ae=P(y,I);if(ae)return ae;const U=I===lt,u=jt?history.state:{};C&&(F||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},K)):a.push(y.fullPath,K)),l.value=y,xt(y,I,C,U),Ce()}let De;function Mt(){De||(De=a.listen((y,I,C)=>{if(!Fn.listening)return;const F=b(y),K=ne(F);if(K){se(X(K,{replace:!0}),F).catch(hn);return}f=F;const ae=l.value;jt&&Yf(Mi(ae.fullPath,C.delta),Or()),ve(F,ae).catch(U=>Ve(U,12)?U:Ve(U,2)?(se(U.to,F).then(u=>{Ve(u,20)&&!C.delta&&C.type===Pn.pop&&a.go(-1,!1)}).catch(hn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),J(U,F,ae))).then(U=>{U=U||ot(F,ae,!1),U&&(C.delta&&!Ve(U,8)?a.go(-C.delta,!1):C.type===Pn.pop&&Ve(U,20)&&a.go(-1,!1)),Oe(F,ae,U)}).catch(hn)}))}let yt=ln(),an=ln(),ce;function J(y,I,C){Ce(y);const F=an.list();return F.length?F.forEach(K=>K(y,I,C)):console.error(y),Promise.reject(y)}function G(){return ce&&l.value!==lt?Promise.resolve():new Promise((y,I)=>{yt.add([y,I])})}function Ce(y){return ce||(ce=!y,Mt(),yt.list().forEach(([I,C])=>y?C(y):I()),yt.reset()),y}function xt(y,I,C,F){const{scrollBehavior:K}=e;if(!jt||!K)return Promise.resolve();const ae=!C&&Wf(Mi(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return qo().then(()=>K(y,I,ae)).then(U=>U&&Uf(U)).catch(U=>J(U,y,I))}const Se=y=>a.go(y);let xe;const Nt=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:L,getRoutes:S,resolve:b,options:e,push:z,replace:Y,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:an.add,isReady:G,install(y){const I=this;y.component("RouterLink",Cu),y.component("RouterView",Ss),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(l)}),jt&&!xe&&l.value===lt&&(xe=!0,z(a.location).catch(K=>{}));const C={};for(const K in lt)C[K]=ie(()=>l.value[K]);y.provide(Da,I),y.provide(Cs,tn(C)),y.provide(sa,l);const F=y.unmount;Nt.add(y),y.unmount=function(){Nt.delete(y),Nt.size<1&&(f=lt,De&&De(),De=null,l.value=lt,xe=!1,ce=!1),F()}}};return Fn}function Ft(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Mu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Xt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Xt(f,l))||a.push(l))}return[n,r,a]}const Nu={class:"bg-gray-900 h-screen w-screen flex flex-col justify-center items-center"},Lu=ze({__name:"App",setup(e){return(t,n)=>(ht(),nn("div",Nu,[ue(Je(Ss))]))}}),Hr=ze({__name:"MusicPlayerButton",props:{icon:null,size:null},setup(e){const t=e,n=tn({"w-16 h-16":t.size==="md","w-20 h-20":t.size==="lg"});return(r,a)=>{const i=Pc("font-awesome-icon");return ht(),nn("div",{class:Tn(["flex justify-center items-center rounded-full border border-2 border-white text-white aspect-square hover:opacity-60 cursor-pointer transition",n])},[t.icon?(ht(),ps(i,{key:0,class:"text-2xl",icon:t.icon},null,8,["icon"])):Gc("",!0)],2)}}}),Fu=["src"],ju=ze({__name:"MusicPlayerCover",props:{imgSrc:null,isMusicPlayed:{type:Boolean}},setup(e){const t=e;return(n,r)=>(ht(),nn("div",{class:Tn(["p-1 rounded-full animation-spin-slow",{"animate-paused":!t.isMusicPlayed}])},[Qe("img",{class:"w-64 aspect-square rounded-full object-cover outline outline-offset-8 outline-white/90",src:e.imgSrc,alt:"Cover"},null,8,Fu)],2))}});const Rs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},$u=Rs(ju,[["__scopeId","data-v-2fdedf0b"]]),zu={class:"text-3xl text-white font-bold"},Du=ze({__name:"MusicPlayerSongTitle",props:{title:null},setup(e){const n=e.title;return(r,a)=>(ht(),nn("h1",zu,ar(Je(n)),1))}}),Bu={class:"text-xl opacity-80 text-white"},Hu=ze({__name:"MusicPlayerBandName",props:{title:null},setup(e){const n=e.title;return(r,a)=>(ht(),nn("h2",Bu,ar(Je(n)),1))}}),Uu="/vue-music-player/assets/Numb_Official_Music_Video_Linkin_Park.60da102d.mp3";function Is(e){return Math.floor(e/60)}function Yu(e){const t=Is(e);return Math.floor(e-t*60)}const Wu={class:"flex flex-col justify-center items-center"},Ku={class:"flex flex-col justify-center items-center my-4"},qu={class:"flex flex-row justify-between items-center w-full my-10"},Vu={class:"flex justify-center items-center"},Xu={class:"text-white text-sm opacity-80 p-2"},Gu=["max","value"],Qu={class:"text-white text-sm opacity-80 p-2"},Ju=ze({__name:"MusicPlayer",setup(e){const t="https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg",n=fn(!1),r=fn(new Audio(Uu)),a=fn(0),i=fn(0);setInterval(()=>{s()},500);function o(){n.value=!n.value,n.value?r.value.play():r.value.pause()}function s(){i.value=r.value.duration,a.value=r.value.currentTime}function l(c){const d=Is(c),p=Yu(c);let g=""+p;return p<10&&(g=`0${p}`),`${d}:${g}`}function f(c){const p=+c.target.value;r.value.currentTime=p,a.value=p}return(c,d)=>(ht(),nn("div",Wu,[ue($u,{"img-src":t,"is-music-played":n.value},null,8,["is-music-played"]),Qe("div",Ku,[ue(Du,{title:"Numb"}),ue(Hu,{title:"Linkin Park"})]),Qe("div",qu,[ue(Hr,{icon:"fas fa-chevron-left",size:"md"}),ue(Hr,{onClick:d[0]||(d[0]=p=>o()),icon:n.value?"fas fa-pause":"fas fa-play",size:"lg"},null,8,["icon"]),ue(Hr,{icon:"fas fa-chevron-right",size:"md"})]),Qe("div",Vu,[Qe("span",Xu,ar(l(a.value)),1),Qe("input",{max:i.value,value:a.value,style:hr({"background-size":`${a.value/i.value*100}% 100%`}),class:"song-duration-slider",type:"range",min:"0",onChange:d[1]||(d[1]=p=>f(p))},null,44,Gu),Qe("span",Qu,ar(l(i.value)),1)])]))}});const Zu=Rs(Ju,[["__scopeId","data-v-5a6e6c46"]]),ed=Tu({history:Xf("/vue-music-player/"),routes:[{path:"/",name:"music-player",component:Zu}]});function qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function td(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nd(e,t,n){return t&&Vi(e.prototype,t),n&&Vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e,t){return ad(e)||od(e,t)||Ts(e,t)||ld()}function Mn(e){return rd(e)||id(e)||Ts(e)||sd()}function rd(e){if(Array.isArray(e))return la(e)}function ad(e){if(Array.isArray(e))return e}function id(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function od(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ts(e,t){if(!!e){if(typeof e=="string")return la(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return la(e,t)}}function la(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ld(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xi=function(){},Ha={},Ms={},Ns=null,Ls={mark:Xi,measure:Xi};try{typeof window<"u"&&(Ha=window),typeof document<"u"&&(Ms=document),typeof MutationObserver<"u"&&(Ns=MutationObserver),typeof performance<"u"&&(Ls=performance)}catch{}var cd=Ha.navigator||{},Gi=cd.userAgent,Qi=Gi===void 0?"":Gi,gt=Ha,te=Ms,Ji=Ns,Un=Ls;gt.document;var it=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Fs=~Qi.indexOf("MSIE")||~Qi.indexOf("Trident/"),Yn,Wn,Kn,qn,Vn,tt="___FONT_AWESOME___",ca=16,js="fa",$s="svg-inline--fa",It="data-fa-i2svg",fa="data-fa-pseudo-element",fd="data-fa-pseudo-element-pending",Ua="data-prefix",Ya="data-icon",Zi="fontawesome-i2svg",ud="async",dd=["HTML","HEAD","STYLE","SCRIPT"],zs=function(){try{return!0}catch{return!1}}(),ee="classic",le="sharp",Wa=[ee,le];function Nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var On=Nn((Yn={},de(Yn,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Yn,le,{fa:"solid",fass:"solid","fa-solid":"solid"}),Yn)),Cn=Nn((Wn={},de(Wn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Wn,le,{solid:"fass"}),Wn)),Sn=Nn((Kn={},de(Kn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Kn,le,{fass:"fa-solid"}),Kn)),md=Nn((qn={},de(qn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(qn,le,{"fa-solid":"fass"}),qn)),pd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ds="fa-layers-text",hd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gd=Nn((Vn={},de(Vn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Vn,le,{900:"fass"}),Vn)),Bs=[1,2,3,4,5,6,7,8,9,10],vd=Bs.concat([11,12,13,14,15,16,17,18,19,20]),bd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=new Set;Object.keys(Cn[ee]).map(Rn.add.bind(Rn));Object.keys(Cn[le]).map(Rn.add.bind(Rn));var yd=[].concat(Wa,Mn(Rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(Bs.map(function(e){return"".concat(e,"x")})).concat(vd.map(function(e){return"w-".concat(e)})),vn=gt.FontAwesomeConfig||{};function xd(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function _d(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var wd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wd.forEach(function(e){var t=Ba(e,2),n=t[0],r=t[1],a=_d(xd(n));a!=null&&(vn[r]=a)})}var Hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:js,replacementClass:$s,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var Qt=T(T({},Hs),vn);Qt.autoReplaceSvg||(Qt.observeMutations=!1);var N={};Object.keys(Hs).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Qt[e]=n,bn.forEach(function(r){return r(N)})},get:function(){return Qt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Qt.cssPrefix=t,bn.forEach(function(n){return n(N)})},get:function(){return Qt.cssPrefix}});gt.FontAwesomeConfig=N;var bn=[];function kd(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var ct=ca,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ed(e){if(!(!e||!it)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var Ad="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function In(){for(var e=12,t="";e-- >0;)t+=Ad[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ka(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Us(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Us(e[n]),'" ')},"").trim()}function Cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qa(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function Od(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Cd(e){var t=e.transform,n=e.width,r=n===void 0?ca:n,a=e.height,i=a===void 0?ca:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Fs?l+="translate(".concat(t.x/ct-r/2,"em, ").concat(t.y/ct-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ct,"em), calc(-50% + ").concat(t.y/ct,"em)) "):l+="translate(".concat(t.x/ct,"em, ").concat(t.y/ct,"em) "),l+="scale(".concat(t.size/ct*(t.flipX?-1:1),", ").concat(t.size/ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ys(){var e=js,t=$s,n=N.cssPrefix,r=N.replacementClass,a=Sd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var eo=!1;function Ur(){N.autoAddCss&&!eo&&(Ed(Ys()),eo=!0)}var Rd={mixout:function(){return{dom:{css:Ys,insertCss:Ur}}},hooks:function(){return{beforeDOMElementCreation:function(){Ur()},beforeI2svg:function(){Ur()}}}},nt=gt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var Le=nt[tt],Ws=[],Id=function e(){te.removeEventListener("DOMContentLoaded",e),ur=1,Ws.map(function(t){return t()})},ur=!1;it&&(ur=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),ur||te.addEventListener("DOMContentLoaded",Id));function Td(e){!it||(ur?setTimeout(e,0):Ws.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Us(e):"<".concat(t," ").concat(Pd(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function to(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Md=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Md(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Nd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ua(e){var t=Nd(e);return t.length===1?t[0].toString(16):null}function Ld(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function no(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function da(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=no(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,no(t)):Le.styles[e]=T(T({},Le.styles[e]||{}),i),e==="fas"&&da("fa",t)}var Xn,Gn,Qn,zt=Le.styles,Fd=Le.shims,jd=(Xn={},de(Xn,ee,Object.values(Sn[ee])),de(Xn,le,Object.values(Sn[le])),Xn),Va=null,Ks={},qs={},Vs={},Xs={},Gs={},$d=(Gn={},de(Gn,ee,Object.keys(On[ee])),de(Gn,le,Object.keys(On[le])),Gn);function zd(e){return~yd.indexOf(e)}function Dd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!zd(a)?a:null}var Qs=function(){var t=function(i){return Yr(zt,function(o,s,l){return o[l]=Yr(s,i,{}),o},{})};Ks=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),qs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Gs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||N.autoFetchSvg,r=Yr(Fd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vs=r.names,Xs=r.unicodes,Va=Sr(N.styleDefault,{family:N.familyDefault})};kd(function(e){Va=Sr(e.styleDefault,{family:N.familyDefault})});Qs();function Xa(e,t){return(Ks[e]||{})[t]}function Bd(e,t){return(qs[e]||{})[t]}function Ot(e,t){return(Gs[e]||{})[t]}function Js(e){return Vs[e]||{prefix:null,iconName:null}}function Hd(e){var t=Xs[e],n=Xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Va}var Ga=function(){return{prefix:null,iconName:null,rest:[]}};function Sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=On[r][e],i=Cn[r][e]||Cn[r][a],o=e in Le.styles?e:null;return i||o||null}var ro=(Qn={},de(Qn,ee,Object.keys(Sn[ee])),de(Qn,le,Object.keys(Sn[le])),Qn);function Rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,ee,"".concat(N.cssPrefix,"-").concat(ee)),de(t,le,"".concat(N.cssPrefix,"-").concat(le)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(f){return ro[ee].includes(f)}))&&(s=ee),(e.includes(i[le])||e.some(function(f){return ro[le].includes(f)}))&&(s=le);var l=e.reduce(function(f,c){var d=Dd(N.cssPrefix,c);if(zt[c]?(c=jd[s].includes(c)?md[s][c]:c,o=c,f.prefix=c):$d[s].indexOf(c)>-1?(o=c,f.prefix=Sr(c,{family:s})):d?f.iconName=d:c!==N.replacementClass&&c!==i[ee]&&c!==i[le]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?Js(f.iconName):{},g=Ot(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},Ga());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===le&&(zt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vt()||"fas"),l}var Ud=function(){function e(){td(this,e),this.definitions={}}return nd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),da(s,o[s]);var l=Sn[ee][s];l&&da(l,o[s]),Qs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),ao=[],Dt={},Wt={},Yd=Object.keys(Wt);function Wd(e,t){var n=t.mixoutsTo;return ao=e,Dt={},Object.keys(Wt).forEach(function(r){Yd.indexOf(r)===-1&&delete Wt[r]}),ao.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Dt[o]||(Dt[o]=[]),Dt[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function ma(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Dt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Dt[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function pa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(!!t)return t=Ot(n,t)||t,to(Zs.definitions,n,t)||to(Le.styles,n,t)}var Zs=new Ud,Kd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Tt("noAuto")},qd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Tt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Td(function(){Xd({autoReplaceSvgRoot:n}),Tt("watch",t)})}},Vd={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Sr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(pd))){var a=Rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ot(i,t)||t}}}},Pe={noAuto:Kd,config:N,dom:qd,parse:Vd,library:Zs,findIconDefinition:pa,toHtml:Ln},Xd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Le.styles).length>0||N.autoFetchSvg)&&it&&N.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!it){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Cr(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Qd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Qa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,L=A.height,b=a==="fak",_=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(ve){return d.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(d.classes).join(" "),P={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(L)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/L*16*.0625,"em")}:{};g&&(P.attributes[It]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(c||In())},children:[l]}),delete P.attributes.title);var Y=T(T({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},z),d.styles)}),ne=r.found&&n.found?rt("generateAbstractMask",Y)||{children:[],attributes:{}}:rt("generateAbstractIcon",Y)||{children:[],attributes:{}},se=ne.children,ke=ne.attributes;return Y.children=se,Y.attributes=ke,s?Qd(Y):Gd(Y)}function io(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[It]="");var c=T({},o.styles);qa(a)&&(c.transform=Cd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Cr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Jd(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=Le.styles;function ha(e){var t=e[0],n=e[1],r=e.slice(4),a=Ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Zd={found:!1,width:512,height:512};function em(e,t){!zs&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ga(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=Js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(ha(o))}em(e,t),r(T(T({},Zd),{},{icon:N.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var oo=function(){},va=N.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:oo,measure:oo},un='FA "6.2.1"',tm=function(t){return va.mark("".concat(un," ").concat(t," begins")),function(){return el(t)}},el=function(t){va.mark("".concat(un," ").concat(t," ends")),va.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},Ja={begin:tm,end:el},nr=function(){};function so(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function nm(e){var t=e.getAttribute?e.getAttribute(Ua):null,n=e.getAttribute?e.getAttribute(Ya):null;return t&&n}function rm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function am(){if(N.autoReplaceSvg===!0)return rr.replace;var e=rr[N.autoReplaceSvg];return e||rr.replace}function im(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function om(e){return te.createElement(e)}function tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?im:om:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(tl(o,{ceFn:r}))}),a}function sm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(tl(a),n)}),n.getAttribute(It)===null&&N.keepOriginalSource){var r=te.createComment(sm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ka(n).indexOf(N.replacementClass))return rr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ln(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function lo(e){e()}function nl(e,t){var n=typeof t=="function"?t:nr;if(e.length===0)n();else{var r=lo;N.mutateApproach===ud&&(r=gt.requestAnimationFrame||lo),r(function(){var a=am(),i=Ja.begin("mutate");e.map(a),i(),n()})}}var Za=!1;function rl(){Za=!0}function ba(){Za=!1}var dr=null;function co(e){if(!!Ji&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?nr:t,r=e.nodeCallback,a=r===void 0?nr:r,i=e.pseudoElementsCallback,o=i===void 0?nr:i,s=e.observeMutationsRoot,l=s===void 0?te:s;dr=new Ji(function(f){if(!Za){var c=vt();rn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!so(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&so(d.target)&&~bd.indexOf(d.attributeName))if(d.attributeName==="class"&&nm(d.target)){var p=Rr(Ka(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Ua,g||c),A&&d.target.setAttribute(Ya,A)}else rm(d.target)&&a(d.target)})}}),it&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lm(){!dr||dr.disconnect()}function cm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function fm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Rr(Ka(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Bd(a.prefix,e.innerText)||Xa(a.prefix,ua(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function um(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||In()):(t["aria-hidden"]="true",t.focusable="false")),t}function dm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fm(e),r=n.iconName,a=n.prefix,i=n.rest,o=um(e),s=ma("parseNodeAttributes",{},e),l=t.styleParser?cm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var mm=Le.styles;function al(e){var t=N.autoReplaceSvg==="nest"?fo(e,{styleParser:!1}):fo(e);return~t.extra.classes.indexOf(Ds)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var bt=new Set;Wa.map(function(e){bt.add("fa-".concat(e))});Object.keys(On[ee]).map(bt.add.bind(bt));Object.keys(On[le]).map(bt.add.bind(bt));bt=Mn(bt);function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(Zi,"-").concat(d))},a=function(d){return n.remove("".concat(Zi,"-").concat(d))},i=N.autoFetchSvg?bt:Wa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(mm));i.includes("fa")||i.push("fa");var o=[".".concat(Ds,":not([").concat(It,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ja.begin("onTree"),f=s.reduce(function(c,d){try{var p=al(d);p&&c.push(p)}catch(g){zs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){nl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;al(e).then(function(n){n&&nl([n],t)})}function hm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:pa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:pa(a||{})),e(r,T(T({},n),{},{mask:a}))}}var gm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,L=S===void 0?[]:S,b=n.attributes,_=b===void 0?{}:b,P=n.styles,z=P===void 0?{}:P;if(!!t){var Y=t.prefix,ne=t.iconName,se=t.icon;return Ir(T({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?_["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(A||In()):(_["aria-hidden"]="true",_.focusable="false")),Qa({icons:{main:ha(se),mask:l?ha(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ne,transform:T(T({},Ke),a),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:_,styles:z,classes:L}})})}},vm={mixout:function(){return{icon:hm(gm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=uo,n.nodeCallback=pm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return uo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ga(a,s),c.iconName?ga(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var L=Ba(S,2),b=L[0],_=L[1];g([n,Qa({icons:{main:b,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Cr(s);l.length>0&&(a.style=l);var f;return qa(o)&&(f=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},bm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ir({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Mn(i)).join(" ")},children:o}]})}}}},ym={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ir({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),Jd({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Mn(s))}})})}}}},xm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Ir({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),io({content:n,transform:T(T({},Ke),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Fs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,io({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},_m=new RegExp('"',"ug"),mo=[1105920,1112319];function wm(e){var t=e.replace(_m,""),n=Ld(t,0),r=n>=mo[0]&&n<=mo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ua(a?t[0]:t),isSecondary:r||a}}function po(e,t){var n="".concat(fd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(se){return se.getAttribute(fa)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(hd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?le:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cn[p][l[2].toLowerCase()]:gd[p][f],A=wm(d),S=A.value,L=A.isSecondary,b=l[0].startsWith("FontAwesome"),_=Xa(g,S),P=_;if(b){var z=Hd(S);z.iconName&&z.prefix&&(_=z.iconName,g=z.prefix)}if(_&&!L&&(!o||o.getAttribute(Ua)!==g||o.getAttribute(Ya)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);var Y=dm(),ne=Y.extra;ne.attributes[fa]=t,ga(_,g).then(function(se){var ke=Qa(T(T({},Y),{},{icons:{main:se,mask:Ga()},prefix:g,iconName:P,extra:ne,watchable:!0})),ve=te.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ke.map(function(Oe){return Ln(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function km(e){return Promise.all([po(e,"::before"),po(e,"::after")])}function Em(e){return e.parentNode!==document.head&&!~dd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ho(e){if(!!it)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(Em).map(km),a=Ja.begin("searchPseudoElements");rl(),Promise.all(r).then(function(){a(),ba(),t()}).catch(function(){a(),ba(),n()})})}var Am={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ho,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;N.searchPseudoElements&&ho(a)}}},go=!1,Pm={mixout:function(){return{dom:{unwatch:function(){rl(),go=!0}}}},hooks:function(){return{bootstrap:function(){co(ma("mutationObserverCallbacks",{}))},noAuto:function(){lm()},watch:function(n){var r=n.observeMutationsRoot;go?ba():co(ma("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Om={mixout:function(){return{parse:{transform:function(n){return vo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Kr={x:0,y:0,width:"100%",height:"100%"};function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Cm(e){return e.tag==="g"?e.children:[e]}var Sm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Rr(a.split(" ").map(function(o){return o.trim()})):Ga();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=Od({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:T(T({},Kr),{},{fill:"white"})},S=c.children?{children:c.children.map(bo)}:{},L={tag:"g",attributes:T({},g.inner),children:[bo(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[L]},_="mask-".concat(s||In()),P="clip-".concat(s||In()),z={tag:"mask",attributes:T(T({},Kr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Cm(p)},z]};return r.push(Y,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(_,")")},Kr)}),{children:r,attributes:a}}}},Rm={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Im={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Tm=[Rd,vm,bm,ym,xm,Am,Pm,Om,Sm,Rm,Im];Wd(Tm,{mixoutsTo:Pe});Pe.noAuto;var il=Pe.config,Mm=Pe.library;Pe.dom;var mr=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Nm=Pe.icon;Pe.layer;var Lm=Pe.text;Pe.counter;var Fm={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},jm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},$m={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},zm={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Bm(e,t){if(e==null)return{};var n=Dm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ya(e){return Hm(e)||Um(e)||Ym(e)||Wm()}function Hm(e){if(Array.isArray(e))return xa(e)}function Um(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ym(e,t){if(!!e){if(typeof e=="string")return xa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xa(e,t)}}function xa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ol={exports:{}};(function(e){(function(t){var n=function(b,_,P){if(!f(_)||d(_)||p(_)||g(_)||l(_))return _;var z,Y=0,ne=0;if(c(_))for(z=[],ne=_.length;Y<ne;Y++)z.push(n(b,_[Y],P));else{z={};for(var se in _)Object.prototype.hasOwnProperty.call(_,se)&&(z[b(se,P)]=n(b,_[se],P))}return z},r=function(b,_){_=_||{};var P=_.separator||"_",z=_.split||/(?=[A-Z])/;return b.split(z).join(P)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,P){return P?P.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var _=a(b);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(b,_){return r(b,_).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,_){var P=_&&"process"in _?_.process:_;return typeof P!="function"?b:function(z,Y){return P(z,b,Y)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,_){return n(S(a,_),b)},decamelizeKeys:function(b,_){return n(S(o,_),b,_)},pascalizeKeys:function(b,_){return n(S(i,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Km)})(ol);var qm=ol.exports,Vm=["class","style"];function Xm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Gm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ei(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Gm(c);break;case"style":l.style=Xm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Bm(n,Vm);return Pr(e.tag,Te(Te(Te({},t),{},{class:a.class,style:Te(Te({},a.style),o)},a.attrs),s),r)}var sl=!1;try{sl=!0}catch{}function Qm(){if(!sl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Jm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xo(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mr.icon)return mr.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Zm=ze({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ie(function(){return xo(t.icon)}),i=ie(function(){return yn("classes",Jm(t))}),o=ie(function(){return yn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=ie(function(){return yn("mask",xo(t.mask))}),l=ie(function(){return Nm(a.value,Te(Te(Te(Te({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});dn(l,function(c){if(!c)return Qm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ie(function(){return l.value?ei(l.value.abstract[0],{},r):null});return function(){return f.value}}});ze({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=il.familyPrefix,i=ie(function(){return["".concat(a,"-layers")].concat(ya(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Pr("div",{class:i.value},r.default?r.default():[])}}});ze({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=il.familyPrefix,i=ie(function(){return yn("classes",[].concat(ya(t.counter?["".concat(a,"-layers-counter")]:[]),ya(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ie(function(){return yn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=ie(function(){var f=Lm(t.value.toString(),Te(Te({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ie(function(){return ei(s.value,{},r)});return function(){return l.value}}});const ep=[$m,zm,jm,Fm];ep.forEach(e=>Mm.add(e));Rf(Lu).use(ed).component("font-awesome-icon",Zm).mount("#app");
