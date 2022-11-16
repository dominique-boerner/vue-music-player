(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ya(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function xa(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=me(r)?ll(r):xa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(me(e))return e;if(oe(e))return e}}const il=/;(?![^(]*\))/g,ol=/:([^]+)/,sl=/\/\*.*?\*\//gs;function ll(e){const t={};return e.replace(sl,"").split(il).forEach(n=>{if(n){const r=n.split(ol);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function In(e){let t="";if(me(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=In(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cl=ya(fl);function xo(e){return!!e||e===""}const rr=e=>me(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===Eo||!H(e.toString))?JSON.stringify(e,wo,2):String(e),wo=(e,t)=>t&&t.__v_isRef?wo(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:_o(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!B(t)&&!Ao(t)?String(t):t,re={},Ht=[],Le=()=>{},ul=()=>!1,dl=/^on[^a-z]/,pr=e=>dl.test(e),wa=e=>e.startsWith("onUpdate:"),ye=Object.assign,_a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ml=Object.prototype.hasOwnProperty,q=(e,t)=>ml.call(e,t),B=Array.isArray,Ut=e=>hr(e)==="[object Map]",_o=e=>hr(e)==="[object Set]",H=e=>typeof e=="function",me=e=>typeof e=="string",ka=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",ko=e=>oe(e)&&H(e.then)&&H(e.catch),Eo=Object.prototype.toString,hr=e=>Eo.call(e),pl=e=>hr(e).slice(8,-1),Ao=e=>hr(e)==="[object Object]",Ea=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hl=/-(\w)/g,qe=gr(e=>e.replace(hl,(t,n)=>n?n.toUpperCase():"")),gl=/\B([A-Z])/g,Zt=gr(e=>e.replace(gl,"-$1").toLowerCase()),vr=gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rr=gr(e=>e?`on${vr(e)}`:""),yn=(e,t)=>!Object.is(e,t),Ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ar=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ri;const vl=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class bl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function yl(e,t=Ue){t&&t.active&&t.effects.push(e)}const Aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Oo=e=>(e.w&pt)>0,Co=e=>(e.n&pt)>0,xl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},wl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Oo(a)&&!Co(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},Wr=new WeakMap;let fn=0,pt=1;const Kr=30;let Ie;const Ct=Symbol(""),qr=Symbol("");class Pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yl(this,r)}run(){if(!this.active)return this.fn();let t=Ie,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,dt=!0,pt=1<<++fn,fn<=Kr?xl(this):ai(this),this.fn()}finally{fn<=Kr&&wl(this),pt=1<<--fn,Ie=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(ai(this),this.onStop&&this.onStop(),this.active=!1)}}function ai(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const So=[];function en(){So.push(dt),dt=!1}function tn(){const e=So.pop();dt=e===void 0?!0:e}function Ae(e,t,n){if(dt&&Ie){let r=Wr.get(e);r||Wr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Aa()),Ro(a)}}function Ro(e,t){let n=!1;fn<=Kr?Co(e)||(e.n|=pt,n=!Oo(e)):n=!e.has(Ie),n&&(e.add(Ie),Ie.deps.push(e))}function et(e,t,n,r,a,i){const o=Wr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e)){const l=Po(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?Ea(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),Ut(e)&&s.push(o.get(qr)));break;case"delete":B(e)||(s.push(o.get(Ct)),Ut(e)&&s.push(o.get(qr)));break;case"set":Ut(e)&&s.push(o.get(Ct));break}if(s.length===1)s[0]&&Vr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Vr(Aa(l))}}function Vr(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&ii(r);for(const r of n)r.computed||ii(r)}function ii(e,t){(e!==Ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _l=ya("__proto__,__v_isRef,__isVue"),Io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ka)),kl=Oa(),El=Oa(!1,!0),Al=Oa(!0),oi=Pl();function Pl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){en();const r=V(this)[t].apply(this,n);return tn(),r}}),e}function Oa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Hl:Lo:t?Fo:No).get(r))return r;const o=B(r);if(!e&&o&&q(oi,a))return Reflect.get(oi,a,i);const s=Reflect.get(r,a,i);return(ka(a)?Io.has(a):_l(a))||(e||Ae(r,"get",a),t)?s:ge(s)?o&&Ea(a)?s:s.value:oe(s)?e?jo(s):Mt(s):s}}const Ol=To(),Cl=To(!0);function To(e=!1){return function(n,r,a,i){let o=n[r];if(qt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!ir(a)&&!qt(a)&&(o=V(o),a=V(a)),!B(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=B(n)&&Ea(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?yn(a,o)&&et(n,"set",r,a):et(n,"add",r,a)),l}}function Sl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&et(e,"delete",t,void 0),r}function Rl(e,t){const n=Reflect.has(e,t);return(!ka(t)||!Io.has(t))&&Ae(e,"has",t),n}function Il(e){return Ae(e,"iterate",B(e)?"length":Ct),Reflect.ownKeys(e)}const Mo={get:kl,set:Ol,deleteProperty:Sl,has:Rl,ownKeys:Il},Tl={get:Al,set(e,t){return!0},deleteProperty(e,t){return!0}},Ml=ye({},Mo,{get:El,set:Cl}),Ca=e=>e,br=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=br(a),s=r?Ca:n?Ia:xn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function $n(e,t=!1){return e=e.__v_raw,!t&&Ae(V(e),"iterate",Ct),Reflect.get(e,"size",e)}function si(e){e=V(e);const t=V(this);return br(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function li(e,t){t=V(t);const n=V(this),{has:r,get:a}=br(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yn(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function fi(e){const t=V(this),{has:n,get:r}=br(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function ci(){const e=V(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function zn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ca:e?Ia:xn;return!e&&Ae(s,"iterate",Ct),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Dn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ut(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ca:t?Ia:xn;return!t&&Ae(i,"iterate",l?qr:Ct),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function Nl(){const e={get(i){return Ln(this,i)},get size(){return $n(this)},has:jn,add:si,set:li,delete:fi,clear:ci,forEach:zn(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return $n(this)},has:jn,add:si,set:li,delete:fi,clear:ci,forEach:zn(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return $n(this,!0)},has(i){return jn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:zn(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return $n(this,!0)},has(i){return jn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Dn(i,!1,!1),n[i]=Dn(i,!0,!1),t[i]=Dn(i,!1,!0),r[i]=Dn(i,!0,!0)}),[e,n,t,r]}const[Fl,Ll,jl,$l]=Nl();function Sa(e,t){const n=t?e?$l:jl:e?Ll:Fl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const zl={get:Sa(!1,!1)},Dl={get:Sa(!1,!0)},Bl={get:Sa(!0,!1)},No=new WeakMap,Fo=new WeakMap,Lo=new WeakMap,Hl=new WeakMap;function Ul(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ul(pl(e))}function Mt(e){return qt(e)?e:Ra(e,!1,Mo,zl,No)}function Wl(e){return Ra(e,!1,Ml,Dl,Fo)}function jo(e){return Ra(e,!0,Tl,Bl,Lo)}function Ra(e,t,n,r,a){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Yl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Yt(e){return qt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function $o(e){return Yt(e)||qt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function zo(e){return ar(e,"__v_skip",!0),e}const xn=e=>oe(e)?Mt(e):e,Ia=e=>oe(e)?jo(e):e;function Do(e){dt&&Ie&&(e=V(e),Ro(e.dep||(e.dep=Aa())))}function Bo(e,t){e=V(e),e.dep&&Vr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Kl(e){return Ho(e,!1)}function ql(e){return Ho(e,!0)}function Ho(e,t){return ge(e)?e:new Vl(e,t)}class Vl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:xn(t)}get value(){return Do(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||qt(t);t=n?t:V(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),Bo(this))}}function Je(e){return ge(e)?e.value:e}const Xl={get:(e,t,n)=>Je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Uo(e){return Yt(e)?e:new Proxy(e,Xl)}var Yo;class Gl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yo]=!1,this._dirty=!0,this.effect=new Pa(t,()=>{this._dirty||(this._dirty=!0,Bo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Do(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yo="__v_isReadonly";function Ql(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new Gl(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){yr(i,t,n)}return a}function je(e,t,n,r){if(H(e)){const i=mt(e,t,n,r);return i&&ko(i)&&i.catch(o=>{yr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function yr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}Jl(e,n,a,r)}function Jl(e,t,n,r=!0){console.error(e)}let wn=!1,Xr=!1;const he=[];let We=0;const Wt=[];let Xe=null,Et=0;const Wo=Promise.resolve();let Ta=null;function Ko(e){const t=Ta||Wo;return e?t.then(this?e.bind(this):e):t}function Zl(e){let t=We+1,n=he.length;for(;t<n;){const r=t+n>>>1;_n(he[r])<e?t=r+1:n=r}return t}function Ma(e){(!he.length||!he.includes(e,wn&&e.allowRecurse?We+1:We))&&(e.id==null?he.push(e):he.splice(Zl(e.id),0,e),qo())}function qo(){!wn&&!Xr&&(Xr=!0,Ta=Wo.then(Xo))}function ef(e){const t=he.indexOf(e);t>We&&he.splice(t,1)}function tf(e){B(e)?Wt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Et+1:Et))&&Wt.push(e),qo()}function ui(e,t=wn?We+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function Vo(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>_n(n)-_n(r)),Et=0;Et<Xe.length;Et++)Xe[Et]();Xe=null,Et=0}}const _n=e=>e.id==null?1/0:e.id,nf=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Xo(e){Xr=!1,wn=!0,he.sort(nf);const t=Le;try{for(We=0;We<he.length;We++){const n=he[We];n&&n.active!==!1&&mt(n,null,14)}}finally{We=0,he.length=0,Vo(),wn=!1,Ta=null,(he.length||Wt.length)&&Xo()}}function rf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||re;p&&(a=n.map(g=>me(g)?g.trim():g)),d&&(a=n.map(Po))}let s,l=r[s=Rr(t)]||r[s=Rr(qe(t))];!l&&i&&(l=r[s=Rr(Zt(t))]),l&&je(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(c,e,6,a)}}function Go(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=c=>{const f=Go(c,t,!0);f&&(s=!0,ye(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(oe(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):ye(o,i),oe(e)&&r.set(e,o),o)}function xr(e,t){return!e||!pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Zt(t))||q(e,t))}let Me=null,Qo=null;function or(e){const t=Me;return Me=e,Qo=e&&e.type.__scopeId||null,t}function af(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&xi(-1);const i=or(t);let o;try{o=e(...a)}finally{or(i),r._d&&xi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let F,b;const w=or(e);try{if(n.shapeFlag&4){const z=a||r;F=Ye(f.call(z,z,d,i,g,p,A)),b=l}else{const z=t;F=Ye(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),b=t.props?l:of(l)}}catch(z){mn.length=0,yr(z,e,1),F=ue(Rt)}let P=F;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:Y}=P;z.length&&Y&7&&(o&&z.some(wa)&&(b=sf(b,o)),P=Vt(P,b))}return n.dirs&&(P=Vt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,or(w),F}const of=e=>{let t;for(const n in e)(n==="class"||n==="style"||pr(n))&&((t||(t={}))[n]=e[n]);return t},sf=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function lf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?di(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!xr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?di(r,o,c):!0:!!o;return!1}function di(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function ff({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cf=e=>e.__isSuspense;function uf(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):tf(e)}function Jn(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=pe||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const Bn={};function un(e,t,n){return Jo(e,t,n)}function Jo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=pe;let l,c=!1,f=!1;if(ge(e)?(l=()=>e.value,c=ir(e)):Yt(e)?(l=()=>e,r=!0):B(e)?(f=!0,c=e.some(P=>Yt(P)||ir(P)),l=()=>e.map(P=>{if(ge(P))return P.value;if(Yt(P))return zt(P);if(H(P))return mt(P,s,2)})):H(e)?t?l=()=>mt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[p])}:l=Le,t&&r){const P=l;l=()=>zt(P())}let d,p=P=>{d=b.onStop=()=>{mt(P,s,4)}},g;if(En)if(p=Le,t?n&&je(t,s,3,[l(),f?[]:void 0,p]):l(),a==="sync"){const P=sc();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Le;let A=f?new Array(e.length).fill(Bn):Bn;const S=()=>{if(!!b.active)if(t){const P=b.run();(r||c||(f?P.some((z,Y)=>yn(z,A[Y])):yn(P,A)))&&(d&&d(),je(t,s,3,[P,A===Bn?void 0:f&&A[0]===Bn?[]:A,p]),A=P)}else b.run()};S.allowRecurse=!!t;let F;a==="sync"?F=S:a==="post"?F=()=>_e(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),F=()=>Ma(S));const b=new Pa(l,F);t?n?S():A=b.run():a==="post"?_e(b.run.bind(b),s&&s.suspense):b.run();const w=()=>{b.stop(),s&&s.scope&&_a(s.scope.effects,b)};return g&&g.push(w),w}function df(e,t,n){const r=this.proxy,a=me(e)?e.includes(".")?Zo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=pe;Xt(this);const s=Jo(a,i.bind(r),n);return o?Xt(o):St(),s}function Zo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function zt(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))zt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)zt(e[n],t);else if(_o(e)||Ut(e))e.forEach(n=>{zt(n,t)});else if(Ao(e))for(const n in e)zt(e[n],t);return e}function ze(e){return H(e)?{setup:e,name:e.name}:e}const Zn=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function mf(e,t){ts(e,"a",t)}function pf(e,t){ts(e,"da",t)}function ts(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(wr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)es(a.parent.vnode)&&hf(r,t,n,a),a=a.parent}}function hf(e,t,n,r){const a=wr(t,e,r,!0);ns(()=>{_a(r[t],a)},n)}function wr(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),Xt(n);const s=je(t,n,e,o);return St(),tn(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=pe)=>(!En||e==="sp")&&wr(e,(...r)=>t(...r),n),gf=at("bm"),vf=at("m"),bf=at("bu"),yf=at("u"),xf=at("bum"),ns=at("um"),wf=at("sp"),_f=at("rtg"),kf=at("rtc");function Ef(e,t=pe){wr("ec",e,t)}function wt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(en(),je(l,n,8,[e.el,s,e,t]),tn())}}const rs="components";function Af(e,t){return Of(rs,e,!0,t)||e}const Pf=Symbol();function Of(e,t,n=!0,r=!1){const a=Me||pe;if(a){const i=a.type;if(e===rs){const s=ac(i,!1);if(s&&(s===t||s===qe(t)||s===vr(qe(t))))return i}const o=mi(a[e]||i[e],t)||mi(a.appContext[e],t);return!o&&r?i:o}}function mi(e,t){return e&&(e[t]||e[qe(t)]||e[vr(qe(t))])}const Gr=e=>e?hs(e)?ja(e)||e.proxy:Gr(e.parent):null,dn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>Na(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=Ko.bind(e.proxy)),$watch:e=>df.bind(e)}),Mr=(e,t)=>e!==re&&!e.__isScriptSetup&&q(e,t),Cf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Mr(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const f=dn[t];let d,p;if(f)return t==="$attrs"&&Ae(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Mr(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||Mr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(dn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Qr=!0;function Sf(e){const t=Na(e),n=e.proxy,r=e.ctx;Qr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:F,beforeDestroy:b,beforeUnmount:w,destroyed:P,unmounted:z,render:Y,renderTracked:ne,renderTriggered:se,errorCaptured:ke,serverPrefetch:ve,expose:Oe,inheritAttrs:ot,components:De,directives:Nt,filters:yt}=t;if(c&&Rf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];H(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);oe(J)&&(e.data=Mt(J))}if(Qr=!0,i)for(const J in i){const G=i[J],Ce=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):Le,xt=!H(G)&&H(G.set)?G.set.bind(n):Le,Se=ie({get:Ce,set:xt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:xe=>Se.value=xe})}if(s)for(const J in s)as(s[J],r,n,J);if(l){const J=H(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Jn(G,J[G])})}f&&pi(f,e,"c");function fe(J,G){B(G)?G.forEach(Ce=>J(Ce.bind(n))):G&&J(G.bind(n))}if(fe(gf,d),fe(vf,p),fe(bf,g),fe(yf,A),fe(mf,S),fe(pf,F),fe(Ef,ke),fe(kf,ne),fe(_f,se),fe(xf,w),fe(ns,z),fe(wf,ve),B(Oe))if(Oe.length){const J=e.exposed||(e.exposed={});Oe.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Ce=>n[G]=Ce})})}else e.exposed||(e.exposed={});Y&&e.render===Le&&(e.render=Y),ot!=null&&(e.inheritAttrs=ot),De&&(e.components=De),Nt&&(e.directives=Nt)}function Rf(e,t,n=Le,r=!1){B(e)&&(e=Jr(e));for(const a in e){const i=e[a];let o;oe(i)?"default"in i?o=Ze(i.from||a,i.default,!0):o=Ze(i.from||a):o=Ze(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function pi(e,t,n){je(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function as(e,t,n,r){const a=r.includes(".")?Zo(n,r):()=>n[r];if(me(e)){const i=t[e];H(i)&&un(a,i)}else if(H(e))un(a,e.bind(n));else if(oe(e))if(B(e))e.forEach(i=>as(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&un(a,i,e)}}function Na(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>sr(l,c,o,!0)),sr(l,t,o)),oe(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=If[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const If={data:hi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:kt,directives:kt,watch:Mf,provide:hi,inject:Tf};function hi(e,t){return t?e?function(){return ye(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Tf(e,t){return kt(Jr(e),Jr(t))}function Jr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Mf(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Nf(e,t,n,r=!1){const a={},i={};ar(i,kr,1),e.propsDefaults=Object.create(null),is(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Wl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(xr(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=qe(p);a[A]=Zr(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{is(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=Zt(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],c=!0)}c&&et(e,"set","$attrs")}function is(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Qn(l))continue;const c=t[l];let f;a&&q(a,f=qe(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:xr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||re;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Zr(a,l,d,c[d],e,!q(c,d))}}return o}function Zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Xt(a),r=c[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function os(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const f=d=>{l=!0;const[p,g]=os(d,t,!0);ye(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return oe(e)&&r.set(e,Ht),Ht;if(B(i))for(let f=0;f<i.length;f++){const d=qe(i[f]);gi(d)&&(o[d]=re)}else if(i)for(const f in i){const d=qe(f);if(gi(d)){const p=i[f],g=o[d]=B(p)||H(p)?{type:p}:Object.assign({},p);if(g){const A=yi(Boolean,g.type),S=yi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||q(g,"default"))&&s.push(d)}}}const c=[o,s];return oe(e)&&r.set(e,c),c}function gi(e){return e[0]!=="$"}function vi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function bi(e,t){return vi(e)===vi(t)}function yi(e,t){return B(t)?t.findIndex(n=>bi(n,e)):H(t)&&bi(t,e)?0:-1}const ss=e=>e[0]==="_"||e==="$stable",Fa=e=>B(e)?e.map(Ye):[Ye(e)],Lf=(e,t,n)=>{if(t._n)return t;const r=af((...a)=>Fa(t(...a)),n);return r._c=!1,r},ls=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ss(a))continue;const i=e[a];if(H(i))t[a]=Lf(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},fs=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},jf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ar(t,"_",n)):ls(t,e.slots={})}else e.slots={},t&&fs(e,t);ar(e.slots,kr,1)},$f=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ls(t,a)),o=t}else t&&(fs(e,t),o={default:1});if(i)for(const s in a)!ss(s)&&!(s in o)&&delete a[s]};function cs(){return{app:null,config:{isNativeTag:ul,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function Df(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!oe(a)&&(a=null);const i=cs(),o=new Set;let s=!1;const l=i.app={_uid:zf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:lc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...f)):H(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=ue(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,ja(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function ea(e,t,n,r,a=!1){if(B(e)){e.forEach((p,g)=>ea(p,t&&(B(t)?t[g]:t),n,r,a));return}if(Zn(r)&&!a)return;const i=r.shapeFlag&4?ja(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(me(c)?(f[c]=null,q(d,c)&&(d[c]=null)):ge(c)&&(c.value=null)),H(l))mt(l,s,12,[o,f]);else{const p=me(l),g=ge(l);if(p||g){const A=()=>{if(e.f){const S=p?q(d,l)?d[l]:f[l]:l.value;a?B(S)&&_a(S,i):B(S)?S.includes(i)||S.push(i):p?(f[l]=[i],q(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,_e(A,n)):A()}}}const _e=uf;function Bf(e){return Hf(e)}function Hf(e,t){const n=vl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Le,insertStaticContent:A}=e,S=(u,m,h,v=null,x=null,E=null,R=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=C(u),xe(u,x,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:_,ref:j,shapeFlag:M}=m;switch(_){case _r:F(u,m,h,v);break;case Rt:b(u,m,h,v);break;case Nr:u==null&&w(m,h,v,R);break;case Ge:De(u,m,h,v,x,E,R,k,O);break;default:M&1?Y(u,m,h,v,x,E,R,k,O):M&6?Nt(u,m,h,v,x,E,R,k,O):(M&64||M&128)&&_.process(u,m,h,v,x,E,R,k,O,K)}j!=null&&x&&ea(j,u&&u.ref,E,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const x=m.el=u.el;m.children!==u.children&&c(x,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},P=({el:u,anchor:m},h,v)=>{let x;for(;u&&u!==m;)x=p(u),r(u,h,v),u=x;r(m,h,v)},z=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},Y=(u,m,h,v,x,E,R,k,O)=>{R=R||m.type==="svg",u==null?ne(m,h,v,x,E,R,k,O):ve(u,m,x,E,R,k,O)},ne=(u,m,h,v,x,E,R,k)=>{let O,_;const{type:j,props:M,shapeFlag:$,transition:D,dirs:W}=u;if(O=u.el=o(u.type,E,M&&M.is,M),$&8?f(O,u.children):$&16&&ke(u.children,O,null,v,x,E&&j!=="foreignObject",R,k),W&&wt(u,null,v,"created"),M){for(const Q in M)Q!=="value"&&!Qn(Q)&&i(O,Q,null,M[Q],E,u.children,v,x,I);"value"in M&&i(O,"value",null,M.value),(_=M.onVnodeBeforeMount)&&He(_,v,u)}se(O,u,u.scopeId,R,v),W&&wt(u,null,v,"beforeMount");const Z=(!x||x&&!x.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(O),r(O,m,h),((_=M&&M.onVnodeMounted)||Z||W)&&_e(()=>{_&&He(_,v,u),Z&&D.enter(O),W&&wt(u,null,v,"mounted")},x)},se=(u,m,h,v,x)=>{if(h&&g(u,h),v)for(let E=0;E<v.length;E++)g(u,v[E]);if(x){let E=x.subTree;if(m===E){const R=x.vnode;se(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},ke=(u,m,h,v,x,E,R,k,O=0)=>{for(let _=O;_<u.length;_++){const j=u[_]=k?ct(u[_]):Ye(u[_]);S(null,j,m,h,v,x,E,R,k)}},ve=(u,m,h,v,x,E,R)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:_,dirs:j}=m;O|=u.patchFlag&16;const M=u.props||re,$=m.props||re;let D;h&&_t(h,!1),(D=$.onVnodeBeforeUpdate)&&He(D,h,m,u),j&&wt(m,u,h,"beforeUpdate"),h&&_t(h,!0);const W=x&&m.type!=="foreignObject";if(_?Oe(u.dynamicChildren,_,k,h,v,W,E):R||G(u,m,k,null,h,v,W,E,!1),O>0){if(O&16)ot(k,m,M,$,h,v,x);else if(O&2&&M.class!==$.class&&i(k,"class",null,$.class,x),O&4&&i(k,"style",M.style,$.style,x),O&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ce=Z[Q],Re=M[ce],Lt=$[ce];(Lt!==Re||ce==="value")&&i(k,ce,Re,Lt,x,u.children,h,v,I)}}O&1&&u.children!==m.children&&f(k,m.children)}else!R&&_==null&&ot(k,m,M,$,h,v,x);((D=$.onVnodeUpdated)||j)&&_e(()=>{D&&He(D,h,m,u),j&&wt(m,u,h,"updated")},v)},Oe=(u,m,h,v,x,E,R)=>{for(let k=0;k<m.length;k++){const O=u[k],_=m[k],j=O.el&&(O.type===Ge||!sn(O,_)||O.shapeFlag&70)?d(O.el):h;S(O,_,j,null,v,x,E,R,!0)}},ot=(u,m,h,v,x,E,R)=>{if(h!==v){if(h!==re)for(const k in h)!Qn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,x,E,I);for(const k in v){if(Qn(k))continue;const O=v[k],_=h[k];O!==_&&k!=="value"&&i(u,k,_,O,R,m.children,x,E,I)}"value"in v&&i(u,"value",h.value,v.value)}},De=(u,m,h,v,x,E,R,k,O)=>{const _=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(_,h,v),r(j,h,v),ke(m.children,h,j,x,E,R,k,O)):M>0&&M&64&&$&&u.dynamicChildren?(Oe(u.dynamicChildren,$,h,x,E,R,k),(m.key!=null||x&&m===x.subTree)&&us(u,m,!0)):G(u,m,h,j,x,E,R,k,O)},Nt=(u,m,h,v,x,E,R,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?x.ctx.activate(m,h,v,R,O):yt(m,h,v,x,E,R,O):an(u,m,O)},yt=(u,m,h,v,x,E,R)=>{const k=u.component=Zf(u,v,x);if(es(u)&&(k.ctx.renderer=K),ec(k),k.asyncDep){if(x&&x.registerDep(k,fe),!u.el){const O=k.subTree=ue(Rt);b(null,O,m,h)}return}fe(k,u,m,h,x,E,R)},an=(u,m,h)=>{const v=m.component=u.component;if(lf(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,ef(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,x,E,R)=>{const k=()=>{if(u.isMounted){let{next:j,bu:M,u:$,parent:D,vnode:W}=u,Z=j,Q;_t(u,!1),j?(j.el=W.el,J(u,j,R)):j=W,M&&Ir(M),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&He(Q,D,j,W),_t(u,!0);const ce=Tr(u),Re=u.subTree;u.subTree=ce,S(Re,ce,d(Re.el),C(Re),u,x,E),j.el=ce.el,Z===null&&ff(u,ce.el),$&&_e($,x),(Q=j.props&&j.props.onVnodeUpdated)&&_e(()=>He(Q,D,j,W),x)}else{let j;const{el:M,props:$}=m,{bm:D,m:W,parent:Z}=u,Q=Zn(m);if(_t(u,!1),D&&Ir(D),!Q&&(j=$&&$.onVnodeBeforeMount)&&He(j,Z,m),_t(u,!0),M&&U){const ce=()=>{u.subTree=Tr(u),U(M,u.subTree,u,x,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ce()):ce()}else{const ce=u.subTree=Tr(u);S(null,ce,h,v,u,x,E),m.el=ce.el}if(W&&_e(W,x),!Q&&(j=$&&$.onVnodeMounted)){const ce=m;_e(()=>He(j,Z,ce),x)}(m.shapeFlag&256||Z&&Zn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&_e(u.a,x),u.isMounted=!0,m=h=v=null}},O=u.effect=new Pa(k,()=>Ma(_),u.scope),_=u.update=()=>O.run();_.id=u.uid,_t(u,!0),_()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Ff(u,m.props,v,h),$f(u,m.children,h),en(),ui(),tn()},G=(u,m,h,v,x,E,R,k,O=!1)=>{const _=u&&u.children,j=u?u.shapeFlag:0,M=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){xt(_,M,h,v,x,E,R,k,O);return}else if($&256){Ce(_,M,h,v,x,E,R,k,O);return}}D&8?(j&16&&I(_,x,E),M!==_&&f(h,M)):j&16?D&16?xt(_,M,h,v,x,E,R,k,O):I(_,x,E,!0):(j&8&&f(h,""),D&16&&ke(M,h,v,x,E,R,k,O))},Ce=(u,m,h,v,x,E,R,k,O)=>{u=u||Ht,m=m||Ht;const _=u.length,j=m.length,M=Math.min(_,j);let $;for($=0;$<M;$++){const D=m[$]=O?ct(m[$]):Ye(m[$]);S(u[$],D,h,null,x,E,R,k,O)}_>j?I(u,x,E,!0,!1,M):ke(m,h,v,x,E,R,k,O,M)},xt=(u,m,h,v,x,E,R,k,O)=>{let _=0;const j=m.length;let M=u.length-1,$=j-1;for(;_<=M&&_<=$;){const D=u[_],W=m[_]=O?ct(m[_]):Ye(m[_]);if(sn(D,W))S(D,W,h,null,x,E,R,k,O);else break;_++}for(;_<=M&&_<=$;){const D=u[M],W=m[$]=O?ct(m[$]):Ye(m[$]);if(sn(D,W))S(D,W,h,null,x,E,R,k,O);else break;M--,$--}if(_>M){if(_<=$){const D=$+1,W=D<j?m[D].el:v;for(;_<=$;)S(null,m[_]=O?ct(m[_]):Ye(m[_]),h,W,x,E,R,k,O),_++}}else if(_>$)for(;_<=M;)xe(u[_],x,E,!0),_++;else{const D=_,W=_,Z=new Map;for(_=W;_<=$;_++){const Ee=m[_]=O?ct(m[_]):Ye(m[_]);Ee.key!=null&&Z.set(Ee.key,_)}let Q,ce=0;const Re=$-W+1;let Lt=!1,ei=0;const on=new Array(Re);for(_=0;_<Re;_++)on[_]=0;for(_=D;_<=M;_++){const Ee=u[_];if(ce>=Re){xe(Ee,x,E,!0);continue}let Be;if(Ee.key!=null)Be=Z.get(Ee.key);else for(Q=W;Q<=$;Q++)if(on[Q-W]===0&&sn(Ee,m[Q])){Be=Q;break}Be===void 0?xe(Ee,x,E,!0):(on[Be-W]=_+1,Be>=ei?ei=Be:Lt=!0,S(Ee,m[Be],h,null,x,E,R,k,O),ce++)}const ti=Lt?Uf(on):Ht;for(Q=ti.length-1,_=Re-1;_>=0;_--){const Ee=W+_,Be=m[Ee],ni=Ee+1<j?m[Ee+1].el:v;on[_]===0?S(null,Be,h,ni,x,E,R,k,O):Lt&&(Q<0||_!==ti[Q]?Se(Be,h,ni,2):Q--)}}},Se=(u,m,h,v,x=null)=>{const{el:E,type:R,transition:k,children:O,shapeFlag:_}=u;if(_&6){Se(u.component.subTree,m,h,v);return}if(_&128){u.suspense.move(m,h,v);return}if(_&64){R.move(u,m,h,K);return}if(R===Ge){r(E,m,h);for(let M=0;M<O.length;M++)Se(O[M],m,h,v);r(u.anchor,m,h);return}if(R===Nr){P(u,m,h);return}if(v!==2&&_&1&&k)if(v===0)k.beforeEnter(E),r(E,m,h),_e(()=>k.enter(E),x);else{const{leave:M,delayLeave:$,afterLeave:D}=k,W=()=>r(E,m,h),Z=()=>{M(E,()=>{W(),D&&D()})};$?$(E,W,Z):Z()}else r(E,m,h)},xe=(u,m,h,v=!1,x=!1)=>{const{type:E,props:R,ref:k,children:O,dynamicChildren:_,shapeFlag:j,patchFlag:M,dirs:$}=u;if(k!=null&&ea(k,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,W=!Zn(u);let Z;if(W&&(Z=R&&R.onVnodeBeforeUnmount)&&He(Z,m,u),j&6)y(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}D&&wt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,x,K,v):_&&(E!==Ge||M>0&&M&64)?I(_,m,h,!1,!0):(E===Ge&&M&384||!x&&j&16)&&I(O,m,h),v&&Ft(u)}(W&&(Z=R&&R.onVnodeUnmounted)||D)&&_e(()=>{Z&&He(Z,m,u),D&&wt(u,null,m,"unmounted")},h)},Ft=u=>{const{type:m,el:h,anchor:v,transition:x}=u;if(m===Ge){Fn(h,v);return}if(m===Nr){z(u);return}const E=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:k}=x,O=()=>R(h,E);k?k(u.el,E,O):O()}else E()},Fn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:x,update:E,subTree:R,um:k}=u;v&&Ir(v),x.stop(),E&&(E.active=!1,xe(R,u,m,h)),k&&_e(k,m),_e(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,x=!1,E=0)=>{for(let R=E;R<u.length;R++)xe(u[R],m,h,v,x)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),L=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),ui(),Vo(),m._vnode=u},K={p:S,um:xe,m:Se,r:Ft,mt:yt,mc:ke,pc:G,pbc:Oe,n:C,o:e};let ae,U;return t&&([ae,U]=t(K)),{render:L,hydrate:ae,createApp:Df(L,ae)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function us(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||us(o,s)),s.type===_r&&(s.el=o.el)}}function Uf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Yf=e=>e.__isTeleport,Ge=Symbol(void 0),_r=Symbol(void 0),Rt=Symbol(void 0),Nr=Symbol(void 0),mn=[];let Ne=null;function ht(e=!1){mn.push(Ne=e?null:[])}function Wf(){mn.pop(),Ne=mn[mn.length-1]||null}let kn=1;function xi(e){kn+=e}function ds(e){return e.dynamicChildren=kn>0?Ne||Ht:null,Wf(),kn>0&&Ne&&Ne.push(e),e}function nn(e,t,n,r,a,i){return ds(Qe(e,t,n,r,a,i,!0))}function ms(e,t,n,r,a){return ds(ue(e,t,n,r,a,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const kr="__vInternal",ps=({key:e})=>e!=null?e:null,er=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||ge(e)||H(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Qe(e,t=null,n=null,r=0,a=null,i=e===Ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ps(t),ref:t&&er(t),scopeId:Qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(La(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),kn>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const ue=Kf;function Kf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Pf)&&(e=Rt),ta(e)){const s=Vt(e,t,!0);return n&&La(s,n),kn>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(ic(e)&&(e=e.__vccOpts),t){t=qf(t);let{class:s,style:l}=t;s&&!me(s)&&(t.class=In(s)),oe(l)&&($o(l)&&!B(l)&&(l=ye({},l)),t.style=xa(l))}const o=me(e)?1:cf(e)?128:Yf(e)?64:oe(e)?4:H(e)?2:0;return Qe(e,t,n,r,a,o,i,!0)}function qf(e){return e?$o(e)||kr in e?ye({},e):e:null}function Vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Gf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ps(s),ref:t&&t.ref?n&&a?B(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Vf(e=" ",t=0){return ue(_r,null,e,t)}function Xf(e="",t=!1){return t?(ht(),ms(Rt,null,e)):ue(Rt,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ue(Rt):B(e)?ue(Ge,null,e.slice()):typeof e=="object"?ct(e):ue(_r,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function La(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),La(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(kr in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Vf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=In([t.class,r.class]));else if(a==="style")t.style=xa([t.style,r.style]);else if(pr(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){je(e,t,7,[n,r])}const Qf=cs();let Jf=0;function Zf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Qf,i={uid:Jf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:os(r,a),emitsOptions:Go(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rf.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Xt=e=>{pe=e,e.scope.on()},St=()=>{pe&&pe.scope.off(),pe=null};function hs(e){return e.vnode.shapeFlag&4}let En=!1;function ec(e,t=!1){En=t;const{props:n,children:r}=e.vnode,a=hs(e);Nf(e,n,a,t),jf(e,r);const i=a?tc(e,t):void 0;return En=!1,i}function tc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=zo(new Proxy(e.ctx,Cf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?rc(e):null;Xt(e),en();const i=mt(r,e,0,[e.props,a]);if(tn(),St(),ko(i)){if(i.then(St,St),t)return i.then(o=>{wi(e,o,t)}).catch(o=>{yr(o,e,0)});e.asyncDep=i}else wi(e,i,t)}else gs(e,t)}function wi(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Uo(t)),gs(e,n)}let _i;function gs(e,t,n){const r=e.type;if(!e.render){if(!t&&_i&&!r.render){const a=r.template||Na(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=_i(a,c)}}e.render=r.render||Le}Xt(e),en(),Sf(e),tn(),St()}function nc(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function rc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=nc(e))},slots:e.slots,emit:e.emit,expose:t}}function ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Uo(zo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function ac(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function ic(e){return H(e)&&"__vccOpts"in e}const ie=(e,t)=>Ql(e,t,En);function Er(e,t,n){const r=arguments.length;return r===2?oe(t)&&!B(t)?ta(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),ue(e,t,n))}const oc=Symbol(""),sc=()=>Ze(oc),lc="3.2.45",fc="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,ki=At&&At.createElement("template"),cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(fc,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ki.innerHTML=r?`<svg>${e}</svg>`:e;const s=ki.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function uc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function dc(e,t,n){const r=e.style,a=me(n);if(n&&!a){for(const i in n)na(r,i,n[i]);if(t&&!me(t))for(const i in t)n[i]==null&&na(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ei=/\s*!important$/;function na(e,t,n){if(B(n))n.forEach(r=>na(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=mc(e,t);Ei.test(n)?e.setProperty(Zt(r),n.replace(Ei,""),"important"):e[r]=n}}const Ai=["Webkit","Moz","ms"],Fr={};function mc(e,t){const n=Fr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Fr[t]=r;r=vr(r);for(let a=0;a<Ai.length;a++){const i=Ai[a]+r;if(i in e)return Fr[t]=i}return t}const Pi="http://www.w3.org/1999/xlink";function pc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pi,t.slice(6,t.length)):e.setAttributeNS(Pi,t,n);else{const i=cl(t);n==null||i&&!xo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=xo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function gc(e,t,n,r){e.addEventListener(t,n,r)}function vc(e,t,n,r){e.removeEventListener(t,n,r)}function bc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=yc(t);if(r){const c=i[t]=_c(r,a);gc(e,s,c,l)}else o&&(vc(e,s,o,l),i[t]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function yc(e){let t;if(Oi.test(e)){t={};let r;for(;r=e.match(Oi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let Lr=0;const xc=Promise.resolve(),wc=()=>Lr||(xc.then(()=>Lr=0),Lr=Date.now());function _c(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(kc(r,n.value),t,5,[r])};return n.value=e,n.attached=wc(),n}function kc(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ci=/^on[a-z]/,Ec=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?uc(e,r,a):t==="style"?dc(e,n,r):pr(t)?wa(t)||bc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ac(e,t,r,a))?hc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pc(e,t,r,a))};function Ac(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ci.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ci.test(t)&&me(n)?!1:t in e}const Pc=ye({patchProp:Ec},cc);let Si;function Oc(){return Si||(Si=Bf(Pc))}const Cc=(...e)=>{const t=Oc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Sc(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Sc(e){return me(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $t=typeof window<"u";function Rc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function jr(e,t){const n={};for(const r in t){const a=t[r];n[r]=$e(a)?a.map(e):e(a)}return n}const pn=()=>{},$e=Array.isArray,Ic=/\/$/,Tc=e=>e.replace(Ic,"");function $r(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Lc(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Mc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Nc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Gt(t.matched[r],n.matched[a])&&vs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Fc(e[n],t[n]))return!1;return!0}function Fc(e,t){return $e(e)?Ii(e,t):$e(t)?Ii(t,e):e===t}function Ii(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Lc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function jc(e){if(!e)if($t){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tc(e)}const $c=/^[^#]+#/;function zc(e,t){return e.replace($c,"#")+t}function Dc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Dc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ti(e,t){return(history.state?history.state.position-t:-1)+e}const ra=new Map;function Hc(e,t){ra.set(e,t)}function Uc(e){const t=ra.get(e);return ra.delete(e),t}let Yc=()=>location.protocol+"//"+location.host;function bs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ri(l,"")}return Ri(n,e)+r+a}function Wc(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=bs(e,location),A=n.value,S=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}F=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:F,type:An.pop,direction:F?F>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Ar()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Mi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Ar():null}}function Kc(e){const{history:t,location:n}=window,r={value:bs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Yc()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=X({},t.state,Mi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=X({},a.value,t.state,{forward:l,scroll:Ar()});i(f.current,f,!0);const d=X({},Mi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function qc(e){e=jc(e);const t=Kc(e),n=Wc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:zc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Vc(e){return typeof e=="string"||e&&typeof e=="object"}function ys(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xs=Symbol("");var Ni;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ni||(Ni={}));function Qt(e,t){return X(new Error,{type:e,[xs]:!0},t)}function Ve(e,t){return e instanceof Error&&xs in e&&(t==null||!!(e.type&t))}const Fi="[^/]+?",Xc={sensitive:!1,strict:!1,start:!0,end:!0},Gc=/[.+*?^${}()[\]/\\]/g;function Qc(e,t){const n=X({},Xc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(Gc,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:F,regexp:b}=p;i.push({name:A,repeatable:S,optional:F});const w=b||Fi;if(w!==Fi){g+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+z.message)}}let P=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(P=F&&c.length<2?`(?:/${P})`:"/"+P),F&&(P+="?"),a+=P,g+=20,F&&(g+=-8),S&&(g+=-20),w===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:F}=g,b=A in c?c[A]:"";if($e(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=$e(b)?b.join("/"):b;if(!w)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=w}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Jc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Zc(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Jc(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Li(r))return 1;if(Li(a))return-1}return a.length-r.length}function Li(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const eu={type:0,value:""},tu=/[a-zA-Z0-9_]/;function nu(e){if(!e)return[[]];if(e==="/")return[[eu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:tu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function ru(e,t,n){const r=Qc(nu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function au(e,t){const n=[],r=new Map;t=zi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=iu(f);A.aliasOf=p&&p.record;const S=zi(t,f),F=[A];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of P)F.push(X({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let b,w;for(const P of F){const{path:z}=P;if(d&&z[0]!=="/"){const Y=d.record.path,ne=Y[Y.length-1]==="/"?"":"/";P.path=d.record.path+(z&&ne+z)}if(b=ru(P,d,S),p?p.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),g&&f.name&&!$i(b)&&o(f.name)),A.children){const Y=A.children;for(let ne=0;ne<Y.length;ne++)i(Y[ne],b,p&&p.children[ne])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return w?()=>{o(w)}:pn}function o(f){if(ys(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Zc(f,n[d])>=0&&(f.record.path!==n[d].record.path||!ws(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!$i(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Qt(1,{location:f});S=p.record.name,g=X(ji(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),f.params&&ji(f.params,p.keys.map(w=>w.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(w=>w.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Qt(1,{location:f,currentLocation:d});S=p.record.name,g=X({},d.params,f.params),A=p.stringify(g)}const F=[];let b=p;for(;b;)F.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:F,meta:su(F)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function ji(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function iu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ou(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ou(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function $i(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function su(e){return e.reduce((t,n)=>X(t,n.meta),{})}function zi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ws(e,t){return t.children.some(n=>n===e||ws(e,n))}const _s=/#/g,lu=/&/g,fu=/\//g,cu=/=/g,uu=/\?/g,ks=/\+/g,du=/%5B/g,mu=/%5D/g,Es=/%5E/g,pu=/%60/g,As=/%7B/g,hu=/%7C/g,Ps=/%7D/g,gu=/%20/g;function $a(e){return encodeURI(""+e).replace(hu,"|").replace(du,"[").replace(mu,"]")}function vu(e){return $a(e).replace(As,"{").replace(Ps,"}").replace(Es,"^")}function aa(e){return $a(e).replace(ks,"%2B").replace(gu,"+").replace(_s,"%23").replace(lu,"%26").replace(pu,"`").replace(As,"{").replace(Ps,"}").replace(Es,"^")}function bu(e){return aa(e).replace(cu,"%3D")}function yu(e){return $a(e).replace(_s,"%23").replace(uu,"%3F")}function xu(e){return e==null?"":yu(e).replace(fu,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function wu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(ks," "),o=i.indexOf("="),s=lr(o<0?i:i.slice(0,o)),l=o<0?null:lr(i.slice(o+1));if(s in t){let c=t[s];$e(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Di(e){let t="";for(let n in e){const r=e[n];if(n=bu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&aa(i)):[r&&aa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function _u(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const ku=Symbol(""),Bi=Symbol(""),za=Symbol(""),Os=Symbol(""),ia=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Qt(4,{from:n,to:t})):d instanceof Error?s(d):Vc(d)?s(Qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function zr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Eu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ut(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Rc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&ut(p,n,r,i,o)()}))}}return a}function Eu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hi(e){const t=Ze(za),n=Ze(Os),r=ie(()=>t.resolve(Je(e.to))),a=ie(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Gt.bind(null,f));if(p>-1)return p;const g=Ui(l[c-2]);return c>1&&Ui(f)===g&&d[d.length-1].path!==g?d.findIndex(Gt.bind(null,l[c-2])):p}),i=ie(()=>a.value>-1&&Cu(n.params,r.value.params)),o=ie(()=>a.value>-1&&a.value===n.matched.length-1&&vs(n.params,r.value.params));function s(l={}){return Ou(l)?t[Je(e.replace)?"replace":"push"](Je(e.to)).catch(pn):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Au=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hi,setup(e,{slots:t}){const n=Mt(Hi(e)),{options:r}=Ze(za),a=ie(()=>({[Yi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Er("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Pu=Au;function Ou(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!$e(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Ui(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Yi=(e,t,n)=>e!=null?e:t!=null?t:n,Su=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(ia),a=ie(()=>e.route||r.value),i=Ze(Bi,0),o=ie(()=>{let c=Je(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=ie(()=>a.value.matched[o.value]);Jn(Bi,ie(()=>o.value+1)),Jn(ku,s),Jn(ia,a);const l=Kl();return un(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Gt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return Wi(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Er(p,X({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Wi(n.default,{Component:F,route:c})||F}}});function Wi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Cs=Su;function Ru(e){const t=au(e.routes,e),n=e.parseQuery||wu,r=e.stringifyQuery||Di,a=e.history,i=ln(),o=ln(),s=ln(),l=ql(lt);let c=lt;$t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=jr.bind(null,y=>""+y),d=jr.bind(null,xu),p=jr.bind(null,lr);function g(y,I){let C,L;return ys(y)?(C=t.getRecordMatcher(y),L=I):L=y,t.addRoute(L,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=X({},I||l.value),typeof y=="string"){const u=$r(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return X(u,m,{params:p(m.params),hash:lr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=X({},y,{path:$r(n,y.path,I.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];C=X({},y,{params:d(y.params)}),I.params=d(I.params)}const L=t.resolve(C,I),K=y.hash||"";L.params=f(p(L.params));const ae=Mc(r,X({},y,{hash:vu(K),path:L.path})),U=a.createHref(ae);return X({fullPath:ae,hash:K,query:r===Di?_u(y.query):y.query||{}},L,{redirectedFrom:void 0,href:U})}function w(y){return typeof y=="string"?$r(n,y,l.value.path):X({},y)}function P(y,I){if(c!==y)return Qt(8,{from:I,to:y})}function z(y){return se(y)}function Y(y){return z(X(w(y),{replace:!0}))}function ne(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),X({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function se(y,I){const C=c=b(y),L=l.value,K=y.state,ae=y.force,U=y.replace===!0,u=ne(C);if(u)return se(X(w(u),{state:typeof u=="object"?X({},K,u.state):K,force:ae,replace:U}),I||C);const m=C;m.redirectedFrom=I;let h;return!ae&&Nc(r,L,C)&&(h=Qt(16,{to:m,from:L}),xt(L,L,!0,!1)),(h?Promise.resolve(h):ve(m,L)).catch(v=>Ve(v)?Ve(v,2)?v:Ce(v):J(v,m,L)).then(v=>{if(v){if(Ve(v,2))return se(X({replace:U},w(v.to),{state:typeof v.to=="object"?X({},K,v.to.state):K,force:ae}),I||m)}else v=ot(m,L,!0,U,K);return Oe(m,L,v),v})}function ke(y,I){const C=P(y,I);return C?Promise.reject(C):Promise.resolve()}function ve(y,I){let C;const[L,K,ae]=Iu(y,I);C=zr(L.reverse(),"beforeRouteLeave",y,I);for(const u of L)u.leaveGuards.forEach(m=>{C.push(ut(m,y,I))});const U=ke.bind(null,y,I);return C.push(U),jt(C).then(()=>{C=[];for(const u of i.list())C.push(ut(u,y,I));return C.push(U),jt(C)}).then(()=>{C=zr(K,"beforeRouteUpdate",y,I);for(const u of K)u.updateGuards.forEach(m=>{C.push(ut(m,y,I))});return C.push(U),jt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if($e(u.beforeEnter))for(const m of u.beforeEnter)C.push(ut(m,y,I));else C.push(ut(u.beforeEnter,y,I));return C.push(U),jt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=zr(ae,"beforeRouteEnter",y,I),C.push(U),jt(C))).then(()=>{C=[];for(const u of o.list())C.push(ut(u,y,I));return C.push(U),jt(C)}).catch(u=>Ve(u,8)?u:Promise.reject(u))}function Oe(y,I,C){for(const L of s.list())L(y,I,C)}function ot(y,I,C,L,K){const ae=P(y,I);if(ae)return ae;const U=I===lt,u=$t?history.state:{};C&&(L||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},K)):a.push(y.fullPath,K)),l.value=y,xt(y,I,C,U),Ce()}let De;function Nt(){De||(De=a.listen((y,I,C)=>{if(!Fn.listening)return;const L=b(y),K=ne(L);if(K){se(X(K,{replace:!0}),L).catch(pn);return}c=L;const ae=l.value;$t&&Hc(Ti(ae.fullPath,C.delta),Ar()),ve(L,ae).catch(U=>Ve(U,12)?U:Ve(U,2)?(se(U.to,L).then(u=>{Ve(u,20)&&!C.delta&&C.type===An.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),J(U,L,ae))).then(U=>{U=U||ot(L,ae,!1),U&&(C.delta&&!Ve(U,8)?a.go(-C.delta,!1):C.type===An.pop&&Ve(U,20)&&a.go(-1,!1)),Oe(L,ae,U)}).catch(pn)}))}let yt=ln(),an=ln(),fe;function J(y,I,C){Ce(y);const L=an.list();return L.length?L.forEach(K=>K(y,I,C)):console.error(y),Promise.reject(y)}function G(){return fe&&l.value!==lt?Promise.resolve():new Promise((y,I)=>{yt.add([y,I])})}function Ce(y){return fe||(fe=!y,Nt(),yt.list().forEach(([I,C])=>y?C(y):I()),yt.reset()),y}function xt(y,I,C,L){const{scrollBehavior:K}=e;if(!$t||!K)return Promise.resolve();const ae=!C&&Uc(Ti(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Ko().then(()=>K(y,I,ae)).then(U=>U&&Bc(U)).catch(U=>J(U,y,I))}const Se=y=>a.go(y);let xe;const Ft=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:F,getRoutes:S,resolve:b,options:e,push:z,replace:Y,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:an.add,isReady:G,install(y){const I=this;y.component("RouterLink",Pu),y.component("RouterView",Cs),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(l)}),$t&&!xe&&l.value===lt&&(xe=!0,z(a.location).catch(K=>{}));const C={};for(const K in lt)C[K]=ie(()=>l.value[K]);y.provide(za,I),y.provide(Os,Mt(C)),y.provide(ia,l);const L=y.unmount;Ft.add(y),y.unmount=function(){Ft.delete(y),Ft.size<1&&(c=lt,De&&De(),De=null,l.value=lt,xe=!1,fe=!1),L()}}};return Fn}function jt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Iu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Gt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Gt(c,l))||a.push(l))}return[n,r,a]}const Tu={class:"bg-gray-900 h-screen w-screen flex flex-col justify-center items-center"},Mu=ze({__name:"App",setup(e){return(t,n)=>(ht(),nn("div",Tu,[ue(Je(Cs))]))}}),Dr=ze({__name:"MusicPlayerButton",props:{icon:null,size:null},setup(e){const t=e,n=Mt({"w-16 h-16":t.size==="md","w-20 h-20":t.size==="lg"});return(r,a)=>{const i=Af("font-awesome-icon");return ht(),nn("div",{class:In(["flex justify-center items-center rounded-full border border-2 border-white text-white aspect-square hover:opacity-60 cursor-pointer transition",n])},[t.icon?(ht(),ms(i,{key:0,class:"text-2xl",icon:t.icon},null,8,["icon"])):Xf("",!0)],2)}}}),Nu=["src"],Fu=ze({__name:"MusicPlayerCover",props:{imgSrc:null,isMusicPlayed:{type:Boolean}},setup(e){const t=e;return(n,r)=>(ht(),nn("div",{class:In(["p-1 rounded-full",{"animation-spin-slow":t.isMusicPlayed}])},[Qe("img",{class:"w-64 aspect-square rounded-full object-cover outline outline-offset-8 outline-white/90",src:e.imgSrc,alt:"Cover"},null,8,Nu)],2))}});const Lu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},ju=Lu(Fu,[["__scopeId","data-v-34ad6715"]]),$u={class:"text-3xl text-white font-bold"},zu=ze({__name:"MusicPlayerSongTitle",props:{title:null},setup(e){const n=e.title;return(r,a)=>(ht(),nn("h1",$u,rr(Je(n)),1))}}),Du={class:"text-xl opacity-80 text-white"},Bu=ze({__name:"MusicPlayerBandName",props:{title:null},setup(e){const n=e.title;return(r,a)=>(ht(),nn("h2",Du,rr(Je(n)),1))}}),Hu="/assets/test.60da102d.mp3",Uu={class:"flex flex-col justify-center items-center"},Yu={class:"flex flex-col justify-center items-center my-4"},Wu={class:"flex flex-row justify-between items-center w-full my-10"},Ku={class:"text-white text-xl"},qu=Qe("span",null,":",-1),Vu=ze({__name:"MusicPlayer",setup(e){const t="https://www.soundandrecording.de/app/uploads/2017/07/Linkin-Park-Mix-Praxis.jpg",n=Mt({isMusicPlayed:!1,audio:new Audio(Hu),timePlayed:0,songDuration:0});setInterval(()=>{a()},300);function r(){n.isMusicPlayed=!n.isMusicPlayed,n.isMusicPlayed?n.audio.play():n.audio.pause()}function a(){n.songDuration=n.audio.duration,n.timePlayed=n.audio.currentTime}return(i,o)=>(ht(),nn("div",Uu,[ue(ju,{"img-src":t,"is-music-played":n.isMusicPlayed},null,8,["is-music-played"]),Qe("div",Yu,[ue(zu,{title:"Burn it down"}),ue(Bu,{title:"Linkin Park"})]),Qe("div",Wu,[ue(Dr,{icon:"fas fa-chevron-left",size:"md"}),ue(Dr,{onClick:o[0]||(o[0]=s=>r()),icon:n.isMusicPlayed?"fas fa-pause":"fas fa-play",size:"lg"},null,8,["icon"]),ue(Dr,{icon:"fas fa-chevron-right",size:"md"})]),Qe("div",Ku,[Qe("span",null,rr((n.timePlayed/100).toFixed(2)),1),qu,Qe("span",null,rr((n.songDuration/60).toFixed(2)),1)])]))}}),Xu=Ru({history:qc("/"),routes:[{path:"/",name:"music-player",component:Vu}]});function Ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ki(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function Gu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qu(e,t,n){return t&&qi(e.prototype,t),n&&qi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e,t){return Zu(e)||td(e,t)||Ss(e,t)||rd()}function Tn(e){return Ju(e)||ed(e)||Ss(e)||nd()}function Ju(e){if(Array.isArray(e))return oa(e)}function Zu(e){if(Array.isArray(e))return e}function ed(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function td(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ss(e,t){if(!!e){if(typeof e=="string")return oa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oa(e,t)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vi=function(){},Ba={},Rs={},Is=null,Ts={mark:Vi,measure:Vi};try{typeof window<"u"&&(Ba=window),typeof document<"u"&&(Rs=document),typeof MutationObserver<"u"&&(Is=MutationObserver),typeof performance<"u"&&(Ts=performance)}catch{}var ad=Ba.navigator||{},Xi=ad.userAgent,Gi=Xi===void 0?"":Xi,gt=Ba,te=Rs,Qi=Is,Hn=Ts;gt.document;var it=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Ms=~Gi.indexOf("MSIE")||~Gi.indexOf("Trident/"),Un,Yn,Wn,Kn,qn,tt="___FONT_AWESOME___",sa=16,Ns="fa",Fs="svg-inline--fa",It="data-fa-i2svg",la="data-fa-pseudo-element",id="data-fa-pseudo-element-pending",Ha="data-prefix",Ua="data-icon",Ji="fontawesome-i2svg",od="async",sd=["HTML","HEAD","STYLE","SCRIPT"],Ls=function(){try{return!0}catch{return!1}}(),ee="classic",le="sharp",Ya=[ee,le];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var Pn=Mn((Un={},de(Un,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Un,le,{fa:"solid",fass:"solid","fa-solid":"solid"}),Un)),On=Mn((Yn={},de(Yn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Yn,le,{solid:"fass"}),Yn)),Cn=Mn((Wn={},de(Wn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Wn,le,{fass:"fa-solid"}),Wn)),ld=Mn((Kn={},de(Kn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Kn,le,{"fa-solid":"fass"}),Kn)),fd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,js="fa-layers-text",cd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ud=Mn((qn={},de(qn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(qn,le,{900:"fass"}),qn)),$s=[1,2,3,4,5,6,7,8,9,10],dd=$s.concat([11,12,13,14,15,16,17,18,19,20]),md=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(On[ee]).map(Sn.add.bind(Sn));Object.keys(On[le]).map(Sn.add.bind(Sn));var pd=[].concat(Ya,Tn(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat($s.map(function(e){return"".concat(e,"x")})).concat(dd.map(function(e){return"w-".concat(e)})),gn=gt.FontAwesomeConfig||{};function hd(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var vd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vd.forEach(function(e){var t=Da(e,2),n=t[0],r=t[1],a=gd(hd(n));a!=null&&(gn[r]=a)})}var zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ns,replacementClass:Fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Jt=T(T({},zs),gn);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var N={};Object.keys(zs).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Jt[e]=n,vn.forEach(function(r){return r(N)})},get:function(){return Jt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,vn.forEach(function(n){return n(N)})},get:function(){return Jt.cssPrefix}});gt.FontAwesomeConfig=N;var vn=[];function bd(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ft=sa,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yd(e){if(!(!e||!it)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var xd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=xd[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Wa(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ds(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ds(e[n]),'" ')},"").trim()}function Pr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ka(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function _d(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function kd(e){var t=e.transform,n=e.width,r=n===void 0?sa:n,a=e.height,i=a===void 0?sa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ms?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ed=`:root, :host {
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
}`;function Bs(){var e=Ns,t=Fs,n=N.cssPrefix,r=N.replacementClass,a=Ed;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Zi=!1;function Br(){N.autoAddCss&&!Zi&&(yd(Bs()),Zi=!0)}var Ad={mixout:function(){return{dom:{css:Bs,insertCss:Br}}},hooks:function(){return{beforeDOMElementCreation:function(){Br()},beforeI2svg:function(){Br()}}}},nt=gt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var Fe=nt[tt],Hs=[],Pd=function e(){te.removeEventListener("DOMContentLoaded",e),cr=1,Hs.map(function(t){return t()})},cr=!1;it&&(cr=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),cr||te.addEventListener("DOMContentLoaded",Pd));function Od(e){!it||(cr?setTimeout(e,0):Hs.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ds(e):"<".concat(t," ").concat(wd(r),">").concat(i.map(Nn).join(""),"</").concat(t,">")}function eo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Cd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Sd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function fa(e){var t=Sd(e);return t.length===1?t[0].toString(16):null}function Rd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function to(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ca(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=to(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,to(t)):Fe.styles[e]=T(T({},Fe.styles[e]||{}),i),e==="fas"&&ca("fa",t)}var Vn,Xn,Gn,Dt=Fe.styles,Id=Fe.shims,Td=(Vn={},de(Vn,ee,Object.values(Cn[ee])),de(Vn,le,Object.values(Cn[le])),Vn),qa=null,Us={},Ys={},Ws={},Ks={},qs={},Md=(Xn={},de(Xn,ee,Object.keys(Pn[ee])),de(Xn,le,Object.keys(Pn[le])),Xn);function Nd(e){return~pd.indexOf(e)}function Fd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Nd(a)?a:null}var Vs=function(){var t=function(i){return Hr(Dt,function(o,s,l){return o[l]=Hr(s,i,{}),o},{})};Us=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ys=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||N.autoFetchSvg,r=Hr(Id,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ws=r.names,Ks=r.unicodes,qa=Or(N.styleDefault,{family:N.familyDefault})};bd(function(e){qa=Or(e.styleDefault,{family:N.familyDefault})});Vs();function Va(e,t){return(Us[e]||{})[t]}function Ld(e,t){return(Ys[e]||{})[t]}function Ot(e,t){return(qs[e]||{})[t]}function Xs(e){return Ws[e]||{prefix:null,iconName:null}}function jd(e){var t=Ks[e],n=Va("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return qa}var Xa=function(){return{prefix:null,iconName:null,rest:[]}};function Or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=Pn[r][e],i=On[r][e]||On[r][a],o=e in Fe.styles?e:null;return i||o||null}var no=(Gn={},de(Gn,ee,Object.keys(Cn[ee])),de(Gn,le,Object.keys(Cn[le])),Gn);function Cr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,ee,"".concat(N.cssPrefix,"-").concat(ee)),de(t,le,"".concat(N.cssPrefix,"-").concat(le)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(c){return no[ee].includes(c)}))&&(s=ee),(e.includes(i[le])||e.some(function(c){return no[le].includes(c)}))&&(s=le);var l=e.reduce(function(c,f){var d=Fd(N.cssPrefix,f);if(Dt[f]?(f=Td[s].includes(f)?ld[s][f]:f,o=f,c.prefix=f):Md[s].indexOf(f)>-1?(o=f,c.prefix=Or(f,{family:s})):d?c.iconName=d:f!==N.replacementClass&&f!==i[ee]&&f!==i[le]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Xs(c.iconName):{},g=Ot(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Dt.far&&Dt.fas&&!N.autoFetchSvg&&(c.prefix="fas")}return c},Xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===le&&(Dt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vt()||"fas"),l}var $d=function(){function e(){Gu(this,e),this.definitions={}}return Qu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ca(s,o[s]);var l=Cn[ee][s];l&&ca(l,o[s]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),ro=[],Bt={},Kt={},zd=Object.keys(Kt);function Dd(e,t){var n=t.mixoutsTo;return ro=e,Bt={},Object.keys(Kt).forEach(function(r){zd.indexOf(r)===-1&&delete Kt[r]}),ro.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function ua(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function da(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(!!t)return t=Ot(n,t)||t,eo(Gs.definitions,n,t)||eo(Fe.styles,n,t)}var Gs=new $d,Bd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Tt("noAuto")},Hd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Tt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Od(function(){Yd({autoReplaceSvgRoot:n}),Tt("watch",t)})}},Ud={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Or(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(fd))){var a=Cr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ot(i,t)||t}}}},Pe={noAuto:Bd,config:N,dom:Hd,parse:Ud,library:Gs,findIconDefinition:da,toHtml:Nn},Yd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Fe.styles).length>0||N.autoFetchSvg)&&it&&N.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!it){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Pr(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Kd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Ga(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,F=A.height,b=a==="fak",w=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(ve){return d.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(d.classes).join(" "),P={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(F)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/F*16*.0625,"em")}:{};g&&(P.attributes[It]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||Rn())},children:[l]}),delete P.attributes.title);var Y=T(T({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},z),d.styles)}),ne=r.found&&n.found?rt("generateAbstractMask",Y)||{children:[],attributes:{}}:rt("generateAbstractIcon",Y)||{children:[],attributes:{}},se=ne.children,ke=ne.attributes;return Y.children=se,Y.attributes=ke,s?Kd(Y):Wd(Y)}function ao(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[It]="");var f=T({},o.styles);Ka(a)&&(f.transform=kd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Pr(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function qd(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Pr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ur=Fe.styles;function ma(e){var t=e[0],n=e[1],r=e.slice(4),a=Da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Vd={found:!1,width:512,height:512};function Xd(e,t){!Ls&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pa(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=Xs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ur[t]&&Ur[t][e]){var o=Ur[t][e];return r(ma(o))}Xd(e,t),r(T(T({},Vd),{},{icon:N.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var io=function(){},ha=N.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:io,measure:io},cn='FA "6.2.1"',Gd=function(t){return ha.mark("".concat(cn," ").concat(t," begins")),function(){return Qs(t)}},Qs=function(t){ha.mark("".concat(cn," ").concat(t," ends")),ha.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},Qa={begin:Gd,end:Qs},tr=function(){};function oo(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function Qd(e){var t=e.getAttribute?e.getAttribute(Ha):null,n=e.getAttribute?e.getAttribute(Ua):null;return t&&n}function Jd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Zd(){if(N.autoReplaceSvg===!0)return nr.replace;var e=nr[N.autoReplaceSvg];return e||nr.replace}function em(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function tm(e){return te.createElement(e)}function Js(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?em:tm:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Js(o,{ceFn:r}))}),a}function nm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Js(a),n)}),n.getAttribute(It)===null&&N.keepOriginalSource){var r=te.createComment(nm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Wa(n).indexOf(N.replacementClass))return nr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function so(e){e()}function Zs(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=so;N.mutateApproach===od&&(r=gt.requestAnimationFrame||so),r(function(){var a=Zd(),i=Qa.begin("mutate");e.map(a),i(),n()})}}var Ja=!1;function el(){Ja=!0}function ga(){Ja=!1}var ur=null;function lo(e){if(!!Qi&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,o=i===void 0?tr:i,s=e.observeMutationsRoot,l=s===void 0?te:s;ur=new Qi(function(c){if(!Ja){var f=vt();rn(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!oo(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&oo(d.target)&&~md.indexOf(d.attributeName))if(d.attributeName==="class"&&Qd(d.target)){var p=Cr(Wa(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Ha,g||f),A&&d.target.setAttribute(Ua,A)}else Jd(d.target)&&a(d.target)})}}),it&&ur.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rm(){!ur||ur.disconnect()}function am(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function im(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Cr(Wa(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ld(a.prefix,e.innerText)||Va(a.prefix,fa(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function om(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function sm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=im(e),r=n.iconName,a=n.prefix,i=n.rest,o=om(e),s=ua("parseNodeAttributes",{},e),l=t.styleParser?am(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var lm=Fe.styles;function tl(e){var t=N.autoReplaceSvg==="nest"?fo(e,{styleParser:!1}):fo(e);return~t.extra.classes.indexOf(js)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var bt=new Set;Ya.map(function(e){bt.add("fa-".concat(e))});Object.keys(Pn[ee]).map(bt.add.bind(bt));Object.keys(Pn[le]).map(bt.add.bind(bt));bt=Tn(bt);function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(Ji,"-").concat(d))},a=function(d){return n.remove("".concat(Ji,"-").concat(d))},i=N.autoFetchSvg?bt:Ya.map(function(f){return"fa-".concat(f)}).concat(Object.keys(lm));i.includes("fa")||i.push("fa");var o=[".".concat(js,":not([").concat(It,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Qa.begin("onTree"),c=s.reduce(function(f,d){try{var p=tl(d);p&&f.push(p)}catch(g){Ls||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){Zs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function fm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tl(e).then(function(n){n&&Zs([n],t)})}function cm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:da(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:da(a||{})),e(r,T(T({},n),{},{mask:a}))}}var um=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,F=S===void 0?[]:S,b=n.attributes,w=b===void 0?{}:b,P=n.styles,z=P===void 0?{}:P;if(!!t){var Y=t.prefix,ne=t.iconName,se=t.icon;return Sr(T({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?w["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(A||Rn()):(w["aria-hidden"]="true",w.focusable="false")),Ga({icons:{main:ma(se),mask:l?ma(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ne,transform:T(T({},Ke),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:w,styles:z,classes:F}})})}},dm={mixout:function(){return{icon:cm(um)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=co,n.nodeCallback=fm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return co(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([pa(a,s),f.iconName?pa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var F=Da(S,2),b=F[0],w=F[1];g([n,Ga({icons:{main:b,mask:w},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Pr(s);l.length>0&&(a.style=l);var c;return Ka(o)&&(c=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},mm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Sr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Tn(i)).join(" ")},children:o}]})}}}},pm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Sr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),qd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},hm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Sr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),ao({content:n,transform:T(T({},Ke),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ms){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ao({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},gm=new RegExp('"',"ug"),uo=[1105920,1112319];function vm(e){var t=e.replace(gm,""),n=Rd(t,0),r=n>=uo[0]&&n<=uo[1],a=t.length===2?t[0]===t[1]:!1;return{value:fa(a?t[0]:t),isSecondary:r||a}}function mo(e,t){var n="".concat(id).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(se){return se.getAttribute(la)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(cd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?le:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?On[p][l[2].toLowerCase()]:ud[p][c],A=vm(d),S=A.value,F=A.isSecondary,b=l[0].startsWith("FontAwesome"),w=Va(g,S),P=w;if(b){var z=jd(S);z.iconName&&z.prefix&&(w=z.iconName,g=z.prefix)}if(w&&!F&&(!o||o.getAttribute(Ha)!==g||o.getAttribute(Ua)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);var Y=sm(),ne=Y.extra;ne.attributes[la]=t,pa(w,g).then(function(se){var ke=Ga(T(T({},Y),{},{icons:{main:se,mask:Xa()},prefix:g,iconName:P,extra:ne,watchable:!0})),ve=te.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ke.map(function(Oe){return Nn(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function bm(e){return Promise.all([mo(e,"::before"),mo(e,"::after")])}function ym(e){return e.parentNode!==document.head&&!~sd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(la)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function po(e){if(!!it)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(ym).map(bm),a=Qa.begin("searchPseudoElements");el(),Promise.all(r).then(function(){a(),ga(),t()}).catch(function(){a(),ga(),n()})})}var xm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;N.searchPseudoElements&&po(a)}}},ho=!1,wm={mixout:function(){return{dom:{unwatch:function(){el(),ho=!0}}}},hooks:function(){return{bootstrap:function(){lo(ua("mutationObserverCallbacks",{}))},noAuto:function(){rm()},watch:function(n){var r=n.observeMutationsRoot;ho?ga():lo(ua("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},go=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_m={mixout:function(){return{parse:{transform:function(n){return go(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=go(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function km(e){return e.tag==="g"?e.children:[e]}var Em={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Cr(a.split(" ").map(function(o){return o.trim()})):Xa();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=_d({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:T(T({},Yr),{},{fill:"white"})},S=f.children?{children:f.children.map(vo)}:{},F={tag:"g",attributes:T({},g.inner),children:[vo(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[F]},w="mask-".concat(s||Rn()),P="clip-".concat(s||Rn()),z={tag:"mask",attributes:T(T({},Yr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:km(p)},z]};return r.push(Y,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(w,")")},Yr)}),{children:r,attributes:a}}}},Am={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Pm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Om=[Ad,dm,mm,pm,hm,xm,wm,_m,Em,Am,Pm];Dd(Om,{mixoutsTo:Pe});Pe.noAuto;var nl=Pe.config,Cm=Pe.library;Pe.dom;var dr=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Sm=Pe.icon;Pe.layer;var Rm=Pe.text;Pe.counter;var Im={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},Tm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Mm={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Nm={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function bo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lm(e,t){if(e==null)return{};var n=Fm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function va(e){return jm(e)||$m(e)||zm(e)||Dm()}function jm(e){if(Array.isArray(e))return ba(e)}function $m(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zm(e,t){if(!!e){if(typeof e=="string")return ba(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ba(e,t)}}function ba(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Dm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rl={exports:{}};(function(e){(function(t){var n=function(b,w,P){if(!c(w)||d(w)||p(w)||g(w)||l(w))return w;var z,Y=0,ne=0;if(f(w))for(z=[],ne=w.length;Y<ne;Y++)z.push(n(b,w[Y],P));else{z={};for(var se in w)Object.prototype.hasOwnProperty.call(w,se)&&(z[b(se,P)]=n(b,w[se],P))}return z},r=function(b,w){w=w||{};var P=w.separator||"_",z=w.split||/(?=[A-Z])/;return b.split(z).join(P)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(w,P){return P?P.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var w=a(b);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(b,w){return r(b,w).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},f=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,w){var P=w&&"process"in w?w.process:w;return typeof P!="function"?b:function(z,Y){return P(z,b,Y)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,w){return n(S(a,w),b)},decamelizeKeys:function(b,w){return n(S(o,w),b,w)},pascalizeKeys:function(b,w){return n(S(i,w),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Bm)})(rl);var Hm=rl.exports,Um=["class","style"];function Ym(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Hm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Wm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Za(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Wm(f);break;case"style":l.style=Ym(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Lm(n,Um);return Er(e.tag,Te(Te(Te({},t),{},{class:a.class,style:Te(Te({},a.style),o)},a.attrs),s),r)}var al=!1;try{al=!0}catch{}function Km(){if(!al&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function qm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function yo(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(dr.icon)return dr.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Vm=ze({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ie(function(){return yo(t.icon)}),i=ie(function(){return bn("classes",qm(t))}),o=ie(function(){return bn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=ie(function(){return bn("mask",yo(t.mask))}),l=ie(function(){return Sm(a.value,Te(Te(Te(Te({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});un(l,function(f){if(!f)return Km("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ie(function(){return l.value?Za(l.value.abstract[0],{},r):null});return function(){return c.value}}});ze({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=nl.familyPrefix,i=ie(function(){return["".concat(a,"-layers")].concat(va(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Er("div",{class:i.value},r.default?r.default():[])}}});ze({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=nl.familyPrefix,i=ie(function(){return bn("classes",[].concat(va(t.counter?["".concat(a,"-layers-counter")]:[]),va(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ie(function(){return bn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=ie(function(){var c=Rm(t.value.toString(),Te(Te({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=ie(function(){return Za(s.value,{},r)});return function(){return l.value}}});const Xm=[Mm,Nm,Tm,Im];Xm.forEach(e=>Cm.add(e));Cc(Mu).use(Xu).component("font-awesome-icon",Vm).mount("#app");
