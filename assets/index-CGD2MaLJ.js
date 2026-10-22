var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function O(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,O(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),O(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=O(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=O(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return O(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var O=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===O?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function j(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function M(e,t){le++,ce[le]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function he(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function ge(){j(de),j(fe),j(pe)}function _e(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ve(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),Qf._currentValue=se)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,N=null,P=null;function Be(e){if(typeof Re==`function`&&ze(e),P&&typeof P.setStrictMode==`function`)try{P.setStrictMode(N,e)}catch{}}var Ve=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var Ge=256,Ke=262144,qe=4194304;function Je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Je(n))):i=Je(o):i=Je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Je(n))):i=Je(o)):i=Je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=qe;return qe<<=1,!(qe&62914560)&&(qe=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ve(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ve(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var lt=Math.random().toString(36).slice(2),ut=`__reactFiber$`+lt,dt=`__reactProps$`+lt,ft=`__reactContainer$`+lt,pt=`__reactEvents$`+lt,mt=`__reactListeners$`+lt,ht=`__reactHandles$`+lt,gt=`__reactResources$`+lt,_t=`__reactMarker$`+lt;function vt(e){delete e[ut],delete e[dt],delete e[pt],delete e[mt],delete e[ht]}function yt(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ut])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function bt(e){if(e=e[ut]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function St(e){var t=e[gt];return t||=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ct(e){e[_t]=!0}var wt=new Set,Tt={};function Et(e,t){Dt(e,t),Dt(e+`Capture`,t)}function Dt(e,t){for(Tt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Ot=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),kt={},At={};function jt(e){return Ee.call(At,e)?!0:Ee.call(kt,e)?!1:Ot.test(e)?At[e]=!0:(kt[e]=!0,!1)}function Mt(e,t,n){if(jt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Nt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Pt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ft(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function It(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Lt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rt(e){if(!e._valueTracker){var t=It(e)?`checked`:`value`;e._valueTracker=Lt(e,t,``+e[t])}}function zt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=It(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Bt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Vt=/[\n"\\]/g;function Ht(e){return e.replace(Vt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ut(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ft(t)):e.value!==``+Ft(t)&&(e.value=``+Ft(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Gt(e,o,Ft(n)):Gt(e,o,Ft(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ft(s):e.removeAttribute(`name`)}function Wt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Rt(e);return}n=n==null?``:``+Ft(n),t=t==null?n:``+Ft(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Rt(e)}function Gt(e,t,n){t===`number`&&Bt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qt(e,t,n){if(t!=null&&(t=``+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ft(n)}function Jt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ft(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Rt(e)}function Yt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Zt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Xt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Zt(e,o,t[o])}function $t(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var en=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),tn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nn(e){return tn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function rn(){}var an=null;function on(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sn=null,cn=null;function ln(e){var t=bt(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ut(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ht(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[dt]||null;if(!a)throw Error(i(90));Ut(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&zt(r)}break a;case`textarea`:qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}}}var un=!1;function dn(e,t,n){if(un)return e(t,n);un=!0;try{return e(t)}finally{if(un=!1,(sn!==null||cn!==null)&&(xu(),sn&&(t=sn,e=cn,cn=sn=null,ln(t),e)))for(t=0;t<e.length;t++)ln(e[t])}}function fn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var pn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),mn=!1;if(pn)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){mn=!0}}),window.addEventListener(`test`,hn,hn),window.removeEventListener(`test`,hn,hn)}catch{mn=!1}var gn=null,_n=null,vn=null;function yn(){if(vn)return vn;var e,t=_n,n=t.length,r,i=`value`in gn?gn.value:gn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return vn=i.slice(e,1<r?1-r:void 0)}function bn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xn(){return!0}function Sn(){return!1}function Cn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?xn:Sn,this.isPropagationStopped=Sn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=xn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=xn)},persist:function(){},isPersistent:xn}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tn=Cn(wn),En=m({},wn,{view:0,detail:0}),Dn=Cn(En),On,kn,An,jn=m({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==An&&(An&&e.type===`mousemove`?(On=e.screenX-An.screenX,kn=e.screenY-An.screenY):kn=On=0,An=e),On)},movementY:function(e){return`movementY`in e?e.movementY:kn}}),Mn=Cn(jn),Nn=Cn(m({},jn,{dataTransfer:0})),Pn=Cn(m({},En,{relatedTarget:0})),Fn=Cn(m({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),In=Cn(m({},wn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Ln=Cn(m({},wn,{data:0})),Rn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Bn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Vn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bn[e])?!!t[e]:!1}function Hn(){return Vn}var Un=Cn(m({},En,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=bn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(e){return e.type===`keypress`?bn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?bn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Wn=Cn(m({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Gn=Cn(m({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn})),Kn=Cn(m({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=Cn(m({},jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Jn=Cn(m({},wn,{newState:0,oldState:0})),Yn=[9,13,27,32],Xn=pn&&`CompositionEvent`in window,Zn=null;pn&&`documentMode`in document&&(Zn=document.documentMode);var Qn=pn&&`TextEvent`in window&&!Zn,$n=pn&&(!Xn||Zn&&8<Zn&&11>=Zn),er=` `,tr=!1;function nr(e,t){switch(e){case`keyup`:return Yn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function rr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ir=!1;function ar(e,t){switch(e){case`compositionend`:return rr(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function or(e,t){if(ir)return e===`compositionend`||!Xn&&nr(e,t)?(e=yn(),vn=_n=gn=null,ir=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){sn?cn?cn.push(r):cn=[r]:sn=r,t=Td(t,`onChange`),0<t.length&&(n=new Tn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){vd(e,0)}function pr(e){if(zt(xt(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(pn){var gr;if(pn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,on(e)),dn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bt(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=pn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Bt(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Td(Fr,`onSelect`),0<r.length&&(t=new Tn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};pn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Et(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ve(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=fi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=fi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=fi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Ve(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,F=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ut]=e,t[dt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Jt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=rn),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Li=Li.return}}function Wi(e){if(e!==Li)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Li?cf(e.stateNode.nextSibling):null;return!0}function Gi(){F=Li=null,I=!1}function Ki(){var e=Ri;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=ue(null),Yi=null,Xi=null;function Zi(e,t,n){M(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,j(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function L(e){return aa(Yi,e)}function ia(e,t){return Yi===null&&ra(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=ud(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){tu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?Rl.pooledCache:e}function Sa(e,t){t===null?M(ba,ba.current):M(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rn,rn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(rn,rn);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case D:return t=Aa(t),f(e,t,n)}if(oe(t)||ie(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Aa(n),p(e,t,n,r)}if(oe(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),to=ue(0);function no(e,t){e=Wl,M(to,e),M(eo,t),Wl=e|t.baseLanes}function ro(){M(to,Wl),M(eo,eo.current)}function io(){Wl=to.current,j(eo),j(to)}var ao=ue(null),oo=null;function so(e){var t=e.alternate;M(po,po.current&1),M(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){M(po,po.current),M(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(M(po,po.current),M(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){M(po,po.current),M(ao,ao.current)}function fo(e){j(ao),oo===e&&(oo=null),j(po)}var po=ue(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,go=null,z=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function wo(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Us:Ws,yo=!1,a=n(r,i),yo=!1,vo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){k.H=Hs;var t=go!==null&&go.next!==null;if(ho=0,z=go=R=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&na(e)&&(ac=!0))}function Oo(e,t,n,r){R=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,z=go=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Gs,o=t(n,r)}while(vo);return o}function ko(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(go===null?null:go.memoizedState)!==e&&(R.flags|=1024),t}function Ao(){var e=bo!==0;return bo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}ho=0,z=go=R=null,vo=!1,xo=bo=0,So=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z===null?R.memoizedState=z=e:z=z.next=e,z}function Po(){if(go===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=go.next;var t=z===null?R.memoizedState:z.next;if(t!==null)z=t,go=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));go=e,e={memoizedState:go.memoizedState,baseState:go.baseState,baseQueue:go.baseQueue,queue:go.queue,next:null},z===null?R.memoizedState=z=e:z=z.next=e}return z}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ka(So,e,t),t=R,(z===null?t.memoizedState:z.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return L(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(Po(),go,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((ho&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Kl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(ac=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=R,a=Po(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((go||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||z!==null&&z.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||ho&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Fo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Jo(e){var t=si(e,2);t!==null&&gu(t,e,2)}function Yo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),yo){Be(!0);try{n()}finally{Be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,go,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(I){var n=Rl.formState;if(n!==null){a:{var r=R;if(I){if(F){b:{for(var i=F,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,R,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,R,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(Po(),go,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===wa?Ea:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=Po(),n=go;if(n!==null)return os(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Fo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return Po().memoizedState}function ds(e,t,n,r){var i=No();R.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;go!==null&&r!==null&&To(r,go.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(R.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Fo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=Po().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),yo){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),R.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Er(n,t)?n:eo.current===null?!(ho&42)||ho&1073741824&&!(Y&261930)?(ac=!0,e.memoizedState=n):(e=hu(),R.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Er(e,t)||(ac=!0),e)}function Es(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Rs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,va(c,r),mu(e)):Ls(e,t,r,mu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,se,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},mu())}function js(){return L(Qf)}function Ms(){return Po().memoizedState}function Ns(){return Po().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(gu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=oi(e,t,n,r),n!==null&&(gu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,mu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ai(e,t,i,0),Rl===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return gu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&gu(t,e,2)}function zs(e){var t=e.alternate;return e===R||t!==null&&t===R}function Bs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var Hs={readContext:L,use:Lo,useCallback:wo,useContext:wo,useEffect:wo,useImperativeHandle:wo,useLayoutEffect:wo,useInsertionEffect:wo,useMemo:wo,useReducer:wo,useRef:wo,useState:wo,useDebugValue:wo,useDeferredValue:wo,useTransition:wo,useSyncExternalStore:wo,useId:wo,useHostTransitionStatus:wo,useFormState:wo,useActionState:wo,useOptimistic:wo,useMemoCache:wo,useCacheRefresh:wo};Hs.useEffectEvent=wo;var Us={readContext:L,use:Lo,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:L,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(yo){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(yo){Be(!0);try{n(t)}finally{Be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(No(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,R,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=No();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=Rl.identifierPrefix;if(I){var n=ji,r=Ai;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return No().memoizedState=Ps.bind(null,R)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:L,use:Lo,useCallback:Ss,useContext:L,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(Po(),go.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(Po(),go,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:L,use:Lo,useCallback:Ss,useContext:L,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=Po();return go===null?ws(n,e,t):Ts(n,go.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=Po();return go===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,go,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var B={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(gu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(gu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(gu(t,e,n),qa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&B.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ei(e)}function Zs(e){console.error(e)}function Qs(e){ei(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ga(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function V(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(I)return t=ao.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=tc(e.stateNode,r,a),Ja(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!ac?(jo(e,t,i),Ac(e,t,i)):(I&&s&&Pi(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(ac=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function H(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,H(null,e);if(co(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ac||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=Rl,r!==null&&(s=it(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),gu(r,e,s),ic;Ou(),t=pc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ra(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!ac?(jo(e,t,i),Ac(e,t,i)):(I&&r&&Pi(t),t.flags|=1,oc(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!ac?(jo(e,t,a),Ac(e,t,a)):(I&&r&&Pi(t),t.flags|=1,oc(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=L(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=B,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?L(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&B.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=L(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ha||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=L(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ha||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Gi(),t.flags|=256,oc(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(po.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(I){if(a?so(t):uo(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,H(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=H(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ac||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=Rl,s!==null&&(r=it(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),gu(s,e,r),ic;af(c)||Ou(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,H(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,H(e.child,r)):(so(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=po.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,M(po,o),oc(e,t,r,n),r=I?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function Mc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Zi(t,la,e.memoizedState.cache),Gi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(po,po.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:Zi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!jc(e,n)&&!(t.flags&128))return ac=!1,Mc(e,t,n);ac=!!(e.flags&131072)}else ac=!1,I&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=Ys(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,la,r),r!==o.cache&&ea(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Si(Error(i(424)),t),qi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Li=t,I=!0,Ri=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ac(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[ut]=t,r[dt]=e,Pd(r,n,e),Ct(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),Li=t,zi=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),oc(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Li=t,F=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),hc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Li=t,F=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=L(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ra(t),r=L(la),e===null?(a=xa(),a===null&&(a=Rl,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Zi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,la,r),r!==a.cache&&ea(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,la,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Tu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,Xl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zc(t),null;case 1:return zc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(la),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),zc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(zc(t),Fc(t,a,null,r,n)):(zc(t),Ic(t,o))):o?o===e.memoizedState?(zc(t),t.flags&=-16777217):(Pc(t),zc(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),zc(t),Fc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}e=de.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return zc(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}if(o=de.current,Wi(t))Hi(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ut]=t,o[dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return zc(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[ut]=t,t.stateNode=e}return zc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ut]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return zc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ut]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),zc(t),null);case 4:return ge(),e===null&&xd(t.stateNode.containerInfo),zc(t),null;case 10:return Qi(t.type),zc(t),null;case 19:if(j(po),r=t.memoizedState,r===null)return zc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return M(po,po.current&1|2),I&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>nu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return zc(t),null}else 2*je()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(zc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=po.current,M(po,a?n&1|2:n&1),I&&Mi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(zc(t),t.subtreeFlags&6&&(t.flags|=8192)):zc(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(la),zc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(la),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(po),null;case 4:return ge(),null;case 10:return Qi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&j(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(la),null;case 25:return null;default:return null}}function Hc(e,t){switch(Fi(t),t.tag){case 3:Qi(la),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:j(po);break;case 10:Qi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&j(ba);break;case 24:Qi(la)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){X(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[dt]=t}catch(t){X(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ut]=e,t[dt]=n}catch(t){X(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&Uc(5,n);break;case 1:if(yl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:yl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ml(e,n);break;case 13:yl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Z.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?xl(e,n,!!(n.subtreeFlags&8772)):yl(e,n),nl=i,rl=a}break;case 30:break;default:yl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(P&&typeof P.onCommitFiberUnmount==`function`)try{P.onCommitFiberUnmount(N,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=ul,i=dl;Zd(n.type)&&(ul=n.stateNode,dl=!1),fl(e,t,n),pf(n.stateNode),ul=r,dl=i;break;case 5:rl||Jc(n,t);case 6:if(r=ul,i=dl,ul=null,fl(e,t,n),ul=r,dl=i,ul!==null)if(dl)try{(ul.nodeType===9?ul.body:ul.nodeName===`HTML`?ul.ownerDocument.body:ul).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{ul.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:ul!==null&&(dl?(e=ul,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),fl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,fl(e,t,n),rl=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){X(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){X(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function U(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function W(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ul=c.stateNode,dl=!1;break a}break;case 5:ul=c.stateNode,dl=!1;break a;case 3:case 4:ul=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(ul===null)throw Error(i(160));pl(o,s,a),ul=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)G(t,e),t=t.sibling}var _l=null;function G(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:W(t,e),K(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:W(t,e),K(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(W(t,e),K(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[_t]||o[ut]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ut]=e,Ct(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ut]=e,Ct(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:W(t,e),K(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(W(t,e),K(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Yt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(W(t,e),K(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),W(t,e),_l=a,K(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){X(e,e.return,t)}il&&(il=!1,vl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),W(t,e),K(e),_l=r;break;case 12:W(t,e),K(e);break;case 31:W(t,e),K(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,U(e,r)));break;case 13:W(t,e),K(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,U(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,W(t,e),rl=d,nl=u,K(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,U(e,n))));break;case 19:W(t,e),K(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,U(e,r)));break;case 30:break;case 21:break;default:W(t,e),K(e)}}function K(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Yt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),bl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),bl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),Uc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ml(i,a);break;case 13:xl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),qc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&Uc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),kl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Il={getCacheForType:function(e){var t=L(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return L(la).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,zl=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return q&2&&Y!==0?Y&-Y:k.T===null?st():ud()}function hu(){if(Yl===0)if(!(Y&536870912)||I){var e=Ke;Ke<<=1,!(Ke&3932160)&&(Ke=262144),Yl=e}else Yl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===Rl&&(zl===2||zl===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,Y,Yl,!1)),et(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(ql|=n),Gl===4&&bu(e,Y,Yl,!1)),nd(e))}function _u(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Xe(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-je(),10<a)){if(bu(r,t,Yl,!Vl),Ye(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=Kd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}break}while(1);nd(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},Al(t,a,d);var m=(a&62914560)===a?eu-je():(a&4194048)===a?tu-je():0;if(m=qf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ve(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function xu(){return q&6?!0:(rd(0,!1),!1)}function Su(){if(J!==null){if(zl===0)var e=J.return;else e=J,Xi=Yi=null,Mo(e),Pa=null,Fa=0,e=J;for(;e!==null;)Hc(e.alternate,e),e=e.return;J=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),Rl=e,J=n=mi(e.current,null),Y=t,zl=0,Bl=null,Vl=!1,Hl=Xe(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ve(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ii(),n}function wu(e,t){R=null,k.H=Hs,t===wa||t===Ea?(t=Ma(),zl=3):t===Ta?(t=Ma(),zl=4):zl=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,J===null&&(Gl=1,$s(e,Si(t,e.current)))}function Tu(){var e=ao.current;return e===null?!0:(Y&4194048)===Y?oo===null:(Y&62914560)===Y||Y&536870912?e===oo:!1}function Eu(){var e=k.H;return k.H=Hs,e===null?Hs:e}function Du(){var e=k.A;return k.A=Il,e}function Ou(){Gl=4,Vl||(Y&4194048)!==Y&&ao.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||Rl===null||bu(Rl,Y,Yl,!1)}function ku(e,t,n){var r=q;q|=2;var i=Eu(),a=Du();(Rl!==e||Y!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(zl!==0&&J!==null){var s=J,c=Bl;switch(zl){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=zl;if(zl=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=zl,zl=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,q=r,k.H=i,k.A=a,J===null&&(Rl=null,Y=0,ii()),o}function Au(){for(;J!==null;)Nu(J)}function ju(e,t){var n=q;q|=2;var r=Eu(),a=Du();Rl!==e||Y!==t?(ru=null,nu=je()+500,Cu(e,t)):Hl=Xe(e,t);a:do try{if(zl!==0&&J!==null){t=J;var o=Bl;b:switch(zl){case 1:zl=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Oa(o)){zl=0,Bl=null,Pu(t);break}t=function(){zl!==2&&zl!==9||Rl!==e||(zl=7),nd(e)},o.then(t,t);break a;case 3:zl=7;break a;case 4:zl=5;break a;case 7:Oa(o)?(zl=0,Bl=null,Pu(t)):(zl=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){zl=0,Bl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Iu(u))}break b}}zl=0,Bl=null,Fu(e,t,o,5);break;case 6:zl=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Xi=Yi=null,k.H=r,k.A=a,q=n,J===null?(Rl=null,Y=0,ii(),Gl):0}function Mu(){for(;J!==null&&!ke();)Nu(J)}function Nu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):J=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Mo(t);default:Hc(n,t),t=J=hi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):J=t}function Fu(e,t,n,r){Xi=Yi=null,Mo(t),Pa=null,Fa=0;var i=t.return;try{if(V(e,i,t,n,Y)){Gl=1,$s(e,Si(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Gl=1,$s(e,Si(n,e.current)),J=null;return}t.flags&32768?(I||r===1?e=!0:Hl||Y&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Gl=6,J=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,tt(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Q(Fe,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=q,q|=4;try{sl(e,t,n)}finally{q=s,A.p=a,k.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=q;q|=4;try{G(t,e);var a=zd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{q=i,A.p=r,k.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=q;q|=4;try{cl(e,t.alternate,t)}finally{q=i,A.p=r,k.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Ae();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ot(n),t=t.stateNode,P&&typeof P.onCommitFiberRoot==`function`)try{P.onCommitFiberRoot(N,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}cu&3&&Uu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,rd(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=ot(cu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,rd(0,!1),P&&typeof P.onPostCommitFiberRoot==`function`)try{P.onPostCommitFiberRoot(N,o)}catch{}return!0}finally{A.p=a,k.T=r,Hu(e,t)}}function Gu(e,t,n){t=Si(n,t),t=tc(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(et(e,2),nd(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Si(n,e),n=nc(2),r=Ka(t,n,2),r!==null&&(rc(n,r,t,e),et(r,2),nd(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Gl===4||Gl===3&&(Y&62914560)===Y&&300>je()-eu?!(q&2)&&Cu(e,0):Jl|=n,Xl===Y&&(Xl=0)),nd(e)}function Ju(e,t){t===0&&(t=Qe()),e=si(e,t),e!==null&&(et(e,t),nd(e))}function Z(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Q(e,t){return De(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ve(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Y,a=Ye(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Xe(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=je(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}au!==0&&au!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ve(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ze(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=Ye(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(zl===2||zl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ot(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=sd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=Y;return r=Ye(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),od(e,je()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Uu())return null;_u(e,t,!0)}function ld(){Yd(function(){q&6?De(Ne,id):ad()})}function ud(){if(td===0){var e=ma;e===0&&(e=Ge,Ge<<=1,!(Ge&261888)&&(Ge=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:nn(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[dt]||null).action),o=r.submitter;o&&(t=(t=o[dt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Tn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Qr.length;md++){var hd=Qr[md];$r(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),Dt(`onMouseEnter`,[`mouseout`,`mouseover`]),Dt(`onMouseLeave`,[`mouseout`,`mouseover`]),Dt(`onPointerEnter`,[`pointerout`,`pointerover`]),Dt(`onPointerLeave`,[`pointerout`,`pointerover`]),Et(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Et(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Et(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Et(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[pt];n===void 0&&(n=t[pt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,wt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!mn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=yt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}dn(function(){var r=a,i=on(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=Tn,u=e;switch(e){case`keypress`:if(bn(n)===0)break a;case`keydown`:case`keyup`:l=Un;break;case`focusin`:u=`focus`,l=Pn;break;case`focusout`:u=`blur`,l=Pn;break;case`beforeblur`:case`afterblur`:l=Pn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Mn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Nn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Gn;break;case Wr:case Gr:case Kr:l=Fn;break;case Xr:l=Kn;break;case`scroll`:case`scrollend`:l=Dn;break;case`wheel`:l=qn;break;case`copy`:case`cut`:case`paste`:l=In;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Wn;break;case`toggle`:case`beforetoggle`:l=Jn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=fn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==an&&(u=n.relatedTarget||n.fromElement)&&(yt(u)||u[ft]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?yt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Mn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Wn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:xt(l),h=u==null?c:xt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,yt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?xt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(cr(c))if(hr)v=wr;else{v=Sr;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&$t(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){lr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Gt(c,`number`,c.value)}switch(y=r?xt(r):window,e){case`focusin`:(cr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Xn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ir?nr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&($n&&n.locale!==`ko`&&(ir||x!==`onCompositionStart`?x===`onCompositionEnd`&&ir&&(b=yn()):(gn=i,_n=`value`in gn?gn.value:gn.textContent,ir=!0)),y=Td(r,x),0<y.length&&(x=new Ln(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=rr(n),b!==null&&(x.data=b)))),(b=Qn?ar(e,n):or(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new Ln(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=fn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=fn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=fn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=fn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Yt(e,``+r);break;case`className`:Nt(e,`class`,r);break;case`tabIndex`:Nt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Nt(e,n,r);break;case`style`:Qt(e,r,o);break;case`data`:if(t!==`object`){Nt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=nn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Mt(e,`popover`,r);break;case`xlinkActuate`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Mt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=en.get(n)||n,Mt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Yt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Tt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[dt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Mt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Wt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Kt(e,!!r,n,!0):Kt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Jt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if($t(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Ut(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Kt(e,!!n,n?[]:``,!1):Kt(e,!!n,t,!0)):Kt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if($t(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[_t]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),vt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[_t])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=xu();return e||t}function yf(e){var t=bt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ht(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ht(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ht(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ht(n.imageSizes)+`"]`)):i+=`[href="`+Ht(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ht(r)+`"][href="`+Ht(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ct(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=St(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ct(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=St(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=St(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=St(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ht(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ct(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ht(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ht(n.href)+`"]`);if(r)return t.instance=r,Ct(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ct(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ct(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ct(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ct(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ct(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[_t]||a[ut]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ct(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ct(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(gu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&gu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=mu();t=at(t);var n=si(e,t);n!==null&&gu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=bt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ve(o);s.entanglements[1]|=c,o&=~c}nd(a),!(q&6)&&(nu=je()+500,rd(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&gu(s,a,2),xu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=on(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=yt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=yt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);an=r,n.target.dispatchEvent(r),an=null}else return t=bt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=bt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[dt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[dt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,mu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),xu(),t[ft]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{N=zp.inject(Rp),P=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ft]=t.current,xd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},y=new class extends v{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e();return window.addEventListener(`visibilitychange`,t,!1),()=>{window.removeEventListener(`visibilitychange`,t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{typeof e==`boolean`?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e==`boolean`?this.#e:globalThis.document?.visibilityState!==`hidden`}},b={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},x=new class{#e=b;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}};function S(e){setTimeout(e,0)}var C=typeof window>`u`||`Deno`in globalThis;function w(){}function T(e,t){return typeof e==`function`?e(t):e}function E(e){return typeof e==`number`&&e>=0&&e!==1/0}function ee(e,t){return Math.max(e+(t||0)-Date.now(),0)}function D(e,t){return typeof e==`function`?e(t):e}function te(e,t){return typeof e==`function`?e(t):e}function ne(e,t){let{type:n=`all`,exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==ie(o,t.options))return!1}else if(!ae(t.queryKey,o))return!1}if(n!==`all`){let e=t.isActive();if(n===`active`&&!e||n===`inactive`&&e)return!1}return!(typeof s==`boolean`&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function re(e,t){let{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(O(t.options.mutationKey)!==O(a))return!1}else if(!ae(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function ie(e,t){return(t?.queryKeyHashFn||O)(e)}function O(e){return JSON.stringify(e,(e,t)=>se(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function ae(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(Array.isArray(e)&&Array.isArray(t)){for(let n=0;n<t.length;n++)if(!ae(e[n],t[n]))return!1;return!0}let n=Object.keys(t);for(let r of n)if(!ae(e[r],t[r]))return!1;return!0}return!1}var oe=Object.prototype.hasOwnProperty;function k(e,t,n=0){if(e===t)return e;if(n>500)return t;let r=A(e)&&A(t);if(!r&&!(se(e)&&se(t)))return t;let i=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),o=a.length,s=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:a[l],u=e[o],d=t[o];if(u===d){s[o]=u,(r?l<i:oe.call(e,o))&&c++;continue}if(u===null||d===null||typeof u!=`object`||typeof d!=`object`){s[o]=d;continue}let f=k(u,d,n+1);s[o]=f,f===u&&c++}return i===o&&c===i?e:s}function A(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function se(e){if(!ce(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!ce(n)||!n.hasOwnProperty(`isPrototypeOf`)||Object.getPrototypeOf(e)!==Object.prototype)}function ce(e){return Object.prototype.toString.call(e)===`[object Object]`}function le(e){return new Promise(t=>{x.setTimeout(t,e)})}function ue(e,t,n){return typeof n.structuralSharing==`function`?n.structuralSharing(e,t):n.structuralSharing===!1?t:k(e,t)}function j(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function M(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var de=Symbol();function fe(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===de?()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function pe(e,t,n){let r=!1,i;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(i??=t(),r?i:(r=!0,i.aborted?n():i.addEventListener(`abort`,n,{once:!0}),i))}),e}var me=(()=>{let e=()=>C;return{isServer(){return e()},setIsServer(t){e=t}}})();function he(){let e,t,n=new Promise((n,r)=>{e=n,t=r});n.status=`pending`,n.catch(()=>{});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.resolve=t=>{r({status:`fulfilled`,value:t}),e(t)},n.reject=e=>{r({status:`rejected`,reason:e}),t(e)},n}var ge=S;function _e(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=ge,a=r=>{t?e.push(r):i(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{t--,t||o()}return n},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}var ve=_e(),ye=new class extends v{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener(`online`,t,!1),window.addEventListener(`offline`,n,!1),()=>{window.removeEventListener(`online`,t),window.removeEventListener(`offline`,n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#e}};function be(e){return Math.min(1e3*2**e,3e4)}function xe(e){return(e??`online`)!==`online`||ye.isOnline()}var Se=class extends Error{constructor(e){super(`CancelledError`),this.revert=e?.revert,this.silent=e?.silent}};function Ce(e){let t=!1,n=0,r,i=he(),a=()=>i.status!==`pending`,o=t=>{if(!a()){let n=new Se(t);f(n),e.onCancel?.(n)}},s=()=>{t=!0},c=()=>{t=!1},l=()=>y.isFocused()&&(e.networkMode===`always`||ye.isOnline())&&e.canRun(),u=()=>xe(e.networkMode)&&e.canRun(),d=e=>{a()||(r?.(),i.resolve(e))},f=e=>{a()||(r?.(),i.reject(e))},p=()=>new Promise(t=>{r=e=>{(a()||l())&&t(e)},e.onPause?.()}).then(()=>{r=void 0,a()||e.onContinue?.()}),m=()=>{if(a())return;let r,i=n===0?e.initialPromise:void 0;try{r=i??e.fn()}catch(e){r=Promise.reject(e)}Promise.resolve(r).then(d).catch(r=>{if(a())return;let i=e.retry??(me.isServer()?0:3),o=e.retryDelay??be,s=typeof o==`function`?o(n,r):o,c=i===!0||typeof i==`number`&&n<i||typeof i==`function`&&i(n,r);if(t||!c){f(r);return}n++,e.onFail?.(n,r),le(s).then(()=>l()?void 0:p()).then(()=>{t?f(r):m()})})};return{promise:i,status:()=>i.status,cancel:o,continue:()=>(r?.(),i),cancelRetry:s,continueRetry:c,canStart:u,start:()=>(u()?m():p().then(m),i)}}var we=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),E(this.gcTime)&&(this.#e=x.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(me.isServer()?1/0:3e5))}clearGcTimeout(){this.#e!==void 0&&(x.clearTimeout(this.#e),this.#e=void 0)}};function Te(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{pe(e,()=>t.signal,()=>n=!0)},u=fe(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject(t.signal.reason);if(r==null&&e.pages.length)return Promise.resolve(e);let a=(()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})(),o=await u(a),{maxPages:s}=t.options,c=i?M:j;return{pages:c(e.pages,o,s),pageParams:c(e.pageParams,r,s)}};if(i&&a.length){let e=i===`backward`,t=e?De:Ee,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:Ee(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.fetchFn=t.options.persister?()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):l}}}function Ee(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function De(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var Oe=class extends we{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e){super(),this.#s=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#i=e.client,this.#r=this.#i.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=je(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(e){if(this.options={...this.#o,...e},e?._type&&(this.#e=e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let e=je(this.options);e.data!==void 0&&(this.setState(Ae(e.data,e.dataUpdatedAt)),this.#t=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus===`idle`&&this.#r.remove(this)}setData(e,t){let n=ue(this.state.data,e,this.options);return this.#l({data:n,type:`success`,dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#l({type:`setState`,state:e})}cancel(e){let t=this.#a?.promise;return this.#a?.cancel(e),t?t.then(w).catch(w):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>te(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===de||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>D(e.options.staleTime,this)===`static`)}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e===`static`?!1:this.state.isInvalidated?!0:!ee(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:`observerAdded`,query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#a&&(this.#s||this.#c()?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:`observerRemoved`,query:this,observer:e}))}getObserversCount(){return this.observers.length}#c(){return this.state.fetchStatus===`paused`&&this.state.status===`pending`}invalidate(){this.state.isInvalidated||this.#l({type:`invalidate`})}async fetch(e,t){if(this.state.fetchStatus!==`idle`&&this.#a?.status()!==`rejected`){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,r=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#s=!0,n.signal)})},i=()=>{let e=fe(this.options,t),n=(()=>{let e={client:this.#i,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#s=!1,this.options.persister?this.options.persister(e,n,this):e(n)},a=(()=>{let e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:i};return r(e),e})();(this.#e===`infinite`?Te(this.options.pages):this.options.behavior)?.onFetch(a,this),this.#n=this.state,(this.state.fetchStatus===`idle`||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:`fetch`,meta:a.fetchOptions?.meta}),this.#a=Ce({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:e=>{e instanceof Se&&e.revert&&this.setState({...this.#n,fetchStatus:`idle`}),n.abort()},onFail:(e,t)=>{this.#l({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#l({type:`pause`})},onContinue:()=>{this.#l({type:`continue`})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0});try{let e=await this.#a.start();if(e===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof Se){if(e.silent)return this.#a.promise;if(e.revert){if(this.state.data===void 0)throw e;return this.state.data}}throw this.#l({type:`error`,error:e}),this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this),e}finally{this.scheduleGc()}}#l(e){let t=t=>{switch(e.type){case`failed`:return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case`pause`:return{...t,fetchStatus:`paused`};case`continue`:return{...t,fetchStatus:`fetching`};case`fetch`:return{...t,...ke(t.data,this.options),fetchMeta:e.meta??null};case`success`:let n={...t,...Ae(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:`idle`,fetchFailureCount:0,fetchFailureReason:null}};return this.#n=e.manual?n:void 0,n;case`error`:let r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:`idle`,status:`error`,isInvalidated:!0};case`invalidate`:return{...t,isInvalidated:!0};case`setState`:return{...t,...e.state}}};this.state=t(this.state),ve.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:`updated`,action:e})})}};function ke(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:xe(t.networkMode)?`fetching`:`paused`,...e===void 0&&{error:null,status:`pending`}}}function Ae(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:`success`}}function je(e){let t=typeof e.initialData==`function`?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt==`function`?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?`success`:`pending`,fetchStatus:`idle`}}var Me=class extends we{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||Ne(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status===`pending`?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#i({type:`continue`})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=Ce({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{this.#i({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#i({type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let r=this.state.status===`pending`,i=!this.#r.canStart();try{if(r)t();else{this.#i({type:`pending`,variables:e,isPaused:i}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);let t=await this.options.onMutate?.(e,n);t!==this.state.context&&this.#i({type:`pending`,context:t,variables:e,isPaused:i})}let a=await this.#r.start();return await this.#n.config.onSuccess?.(a,e,this.state.context,this,n),await this.options.onSuccess?.(a,e,this.state.context,n),await this.#n.config.onSettled?.(a,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(a,null,e,this.state.context,n),this.#i({type:`success`,data:a}),a}catch(t){try{await this.#n.config.onError?.(t,e,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,n)}catch(e){Promise.reject(e)}try{await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,n)}catch(e){Promise.reject(e)}throw this.#i({type:`error`,error:t}),t}finally{this.#n.runNext(this)}}#i(e){let t=t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}};this.state=t(this.state),ve.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:`updated`,action:e})})}};function Ne(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}var Pe=class extends v{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new Me({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=Fe(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=Fe(e);if(typeof t==`string`){let n=this.#t.get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=Fe(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}return!0}runNext(e){let t=Fe(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){ve.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>re(t,e))}findAll(e={}){return this.getAll().filter(t=>re(e,t))}notify(e){ve.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return ve.batch(()=>Promise.all(e.map(e=>e.continue().catch(w))))}};function Fe(e){return e.options.scope?.id}var Ie=class extends v{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??ie(r,t),a=this.get(i);return a||(a=new Oe({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){ve.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>ne(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>ne(e,t)):t}notify(e){ve.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){ve.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){ve.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Le=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new Ie,this.#t=e.mutationCache||new Pe,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=y.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=ye.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(D(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=T(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return ve.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;ve.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return ve.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=ve.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(w).catch(w)}invalidateQueries(e,t={}){return ve.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=ve.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(w)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(w)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(D(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(w).catch(w)}fetchInfiniteQuery(e){return e._type=`infinite`,this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(w).catch(w)}ensureInfiniteQueryData(e){return e._type=`infinite`,this.ensureQueryData(e)}resumePausedMutations(){return ye.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(O(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{ae(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(O(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{ae(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=ie(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===de&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Re=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ze=o(((e,t)=>{t.exports=Re()})),N=l(d(),1),P=ze(),Be=N.createContext(void 0),Ve=({client:e,children:t})=>(N.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,P.jsx)(Be.Provider,{value:e,children:t})),He=N.useLayoutEffect;function Ue(e){return e[e.length-1]}function We(e,t){return typeof e==`function`?e(t):e}var Ge=Object.prototype.hasOwnProperty;function Ke(e){for(let t in e)if(Ge.call(e,t))return!0;return!1}var qe=()=>Object.create(null),Je=(e,t)=>Ye(e,t,!0);function Ye(e,t,n,r=0){if(e===t)return e;if(r++>500)return t;let i=Array.isArray(e)&&Array.isArray(t);if(!i&&!(Xe(e)&&Xe(t)))return t;let a=Object.keys(e),o=a.length,s=Object.keys(t),c=s.length;if(i?o!==e.length||c!==t.length||o&&Ue(a)!==`${o-1}`||c&&Ue(s)!==`${c-1}`:o!==Object.getOwnPropertyNames(e).length||c!==Object.getOwnPropertyNames(t).length||Object.getOwnPropertySymbols(t).length)return t;let l=0,u,d,f;if(i){for(;l<c&&(f=l,d=e[f],u=t[f],u=d===u?d:typeof d==`object`?Ye(d,u,n,r):u,u===d);l++);if(l===c&&o===c)return e}else{let i=o===c,p=!0;for(;l<c;l++){f=s[l],d=e[f];let o=t[f];u=d===o?d:typeof d==`object`?Ye(d,o,n,r):o,i&&=u===d&&(a[l]===f||Ge.call(e,f)),p&&=Object.is(u,o),a[l]=u}if(i)return Object.getOwnPropertySymbols(e).length?t:e;if(p)return t}let p=i?s.fill(0):n?qe():{};for(let o=0;o<c;o++)f=i?o:s[o],i?(d=e[f],o>l&&(u=t[f],u=d===u?d:typeof d==`object`?Ye(d,u,n,r):u),p[f]=o<l?d:u):p[f]=a[o];return p}function Xe(e){return!e||typeof e!=`object`?!1:(Object.getPrototypeOf(e)?.constructor??Object)===Object}function Ze(e,t,n,r){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=t[i];if(a!==o&&!Ze(a,o,n,r))return!1}return!0}if(Xe(e)&&Xe(t)){if(n){for(let i in t)if((r||t[i]!==void 0)&&!Ze(e[i],t[i],n,r))return!1;return!0}let i=0;if(r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;for(let a in t)if((r||t[a]!==void 0)&&(i--===0||!Ze(e[a],t[a],n,r)))return!1;return i===0}return!1}var Qe=/[\x00-\x1f\x7f"<>`{}]/g;function $e(e){return e.replace(Qe,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function et(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return $e(t)}var tt=[`http:`,`https:`,`mailto:`,`tel:`];function nt(e){if(e[0]!==`/`&&e.includes(`:`))return/^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e)?.[1]?.replace(/[\t\n\r]/g,``).toLowerCase()}var rt=/^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;function it(e,t){if(!e)return!1;if(rt.test(e))return!0;let n=nt(e);return n?!t.has(n):!1}var at={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},ot=/[&><\u2028\u2029]/g;function st(e){return e.replace(ot,e=>at[e])}function ct(e){if(!e)return e;let t=e;if(/[%\\\x00-\x1f\x7f]/.test(e)){let n=/%25|%5C/gi,r=0,i;for(t=``;(i=n.exec(e))!==null;)t+=et(e.slice(r,i.index))+i[0],r=n.lastIndex;t+=et(r?e.slice(r):e)}return t}function lt(e){return/[\s\u0080-\uFFFF]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function ut(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function dt(){throw Error(`Invariant failed`)}function ft(e){return e.replace(/\/{2,}/g,`/`)}function pt(e){return e===`/`?e:e.replace(/^\/+/,``)}function mt(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/+$/,``):e}function ht(e){return mt(pt(e))}function gt(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function _t(e,t,n=`never`,r){if(t.includes(`//`)&&(t=ft(t)),t.startsWith(`/`))return t.length===1||n===`preserve`?t:n===`always`?t.endsWith(`/`)?t:`${t}/`:t.endsWith(`/`)?t.slice(0,-1):t;let i=t===`.`,a;if(r){a=i?e:e+`\0`+t;let n=r.get(a);if(n)return n}let o;if(i)o=e.split(`/`);else{for(e.includes(`//`)&&(e=ft(e)),o=e.split(`/`);o.length>1&&Ue(o)===``;)o.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&o.push(r):o=[r]:r===`..`?o.length>1?o.pop():o=[``]:r===`.`||o.push(r)}}o.length>1&&(Ue(o)===``?n===`never`&&o.pop():n===`always`&&o.push(``));let s=o.join(`/`),c=(i?ft(s):s)||`/`;return a&&r&&r.set(a,c),c}function vt(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g,`\\$&`),`g`);return e=>e.replace(n,e=>t.get(e)??e)}function yt(e){return e==null||e===``}function bt(e,t,n){if(typeof t!=`string`)return``+(t??void 0);let r=e===`_splat`;if(r&&(!t||/^[a-zA-Z0-9\-._~!/]*$/.test(t)))return t;let i=encodeURIComponent(t);return r&&(i=i.replaceAll(`%2F`,`/`)),n?n(i):i}function xt(e,t,n,r,i){let a=e.endsWith(`/`)?`/`:``,o=``;for(let e of t){if(typeof e==`string`){o+=e;continue}let[t,s,c,l]=e,u=t===2,d=u&&l!==void 0?l+a:l,f=n[s];if(t!==3||f!=null){if(i&&(i[s]=f,u&&(i[`*`]=f)),u&&yt(f)){if(c===`/`&&!d)continue;f=``}o+=c+bt(s,f,r)+(d||``)}}return o+a||`/`}function St(e={}){if(e.isNotFound=!0,e.throw)throw e;return e}function Ct(e){return e?.isNotFound===!0}function wt(){try{return sessionStorage}catch{return}}var Tt=`tsr-scroll-restoration-v1_3`,Et=wt();function Dt(){try{return JSON.parse(Et?.getItem(`tsr-scroll-restoration-v1_3`)||`{}`)}catch{return{}}}var Ot=Dt(),kt=`data-scroll-restoration-id`,At=e=>e.state.__TSR_key||e.href;function jt(e){let t=e.getAttribute(kt);if(t)return`[${kt}="${t}"]`;let n=``,r=e,i;for(;i=r.parentNode;){let e=1,t=r;for(;t=t.previousElementSibling;)e++;let a=`${r.localName}:nth-child(${e})`;n=n?`${a} > ${n}`:a,r=i}return n}var Mt=!1,Nt=`window`;function Pt(e){try{return typeof e==`function`?e():document.querySelector(e)}catch{}}function Ft(e){let t=new Set;for(let n of e){if(n===Nt)continue;let e=Pt(n);e&&t.add(e)}return t}function It(e,t){let n=t??e.options.scrollRestoration,r=e._scroll;n&&(r.e=!0);let i=e.options.getScrollRestorationKey||At,a=new Set,o=e=>{let t=Ot[e]||={};for(let e of a)e===document?t[Nt]={scrollX,scrollY}:e.isConnected&&(t[jt(e)]={scrollX:e.scrollLeft,scrollY:e.scrollTop})};n&&!r.s&&(r.s=!0,Mt=!1,history.scrollRestoration=`manual`,document.addEventListener(`scroll`,e=>{Mt||a.add(e.target)},!0),e.subscribe(`onBeforeLoad`,e=>{e.fromLocation&&o(i(e.fromLocation)),a.clear()}),addEventListener(`pagehide`,()=>{history.scrollRestoration=`auto`,o(i(e.stores.resolvedLocation.get()??e.stores.location.get()));try{Et?.setItem(Tt,JSON.stringify(Ot))}catch{}}),addEventListener(`pageshow`,e=>{e.persisted&&(history.scrollRestoration=`manual`)})),!r.r&&(r.r=!0,e.subscribe(`onRendered`,t=>{let n=e.options.scrollRestorationBehavior,o=e.options.scrollToTopSelectors,s=r.n,c=r.h,l;if(a.clear(),r.n=!0,r.h=!1,typeof e.options.scrollRestoration==`function`&&!e.options.scrollRestoration({location:e.latestLocation}))return;let u=i(t.toLocation),d=t.fromLocation&&i(t.fromLocation);if(r.e&&d&&d!==u){let e=Ot[d];if(e){let t=Ot[u];for(let n in e){if(n===Nt){if(s)continue}else{let e=Pt(n);if(!e||s&&o&&(l??=Ft(o),l.has(e)))continue}t||=Ot[u]={},t[n]??=e[n]}}}Mt=!0;try{let e=t.toLocation.hash,i=t.toLocation.state.__hashScrollIntoViewOptions??!0,a=!1;if(s){!e&&o&&(l??=Ft(o));let t=e&&i&&c,s=r.e?Ot[u]:void 0;if(s)for(let e in s){let{scrollX:r,scrollY:i}=s[e];if(e===Nt){if(t)continue;scrollTo({top:i,left:r,behavior:n}),a=!0}else{let t=Pt(e);t&&(t.scrollLeft=r,t.scrollTop=i,l?.delete(t))}}if(!e){let e={top:0,left:0,behavior:n};if(a||scrollTo(e),l)for(let t of l)t.scrollTo(e)}}!a&&e&&i&&document.getElementById(e)?.scrollIntoView(i)}finally{Mt=!1}}))}function Lt(e,t=String){let n;for(let r in e){let i=e[r];i!==void 0&&(n||=new URLSearchParams).set(r,t(i))}return n?n.toString():``}function Rt(e){return e?e===`false`?!1:e===`true`?!0:e*0==0&&+e+``===e?+e:e:``}function zt(e){let t=new URLSearchParams(e),n=Object.create(null);for(let[e,r]of t.entries()){let t=n[e];t==null?n[e]=Rt(r):Array.isArray(t)?t.push(Rt(r)):n[e]=[t,Rt(r)]}return n}var Bt=/^(?:\s|["[{\d-]|fa|nu|tr)/,Vt=Ut(JSON.parse),Ht=Wt(JSON.stringify,JSON.parse);function Ut(e){let t=e===JSON.parse;return n=>{n[0]===`?`&&(n=n.substring(1));let r=zt(n);for(let n in r){let i=r[n];if(typeof i==`string`){if(t&&!Bt.test(i))continue;try{r[n]=e(i)}catch{}}}return r}}function Wt(e,t){let n=t===JSON.parse;function r(r){if(r&&typeof r==`object`)try{return e(r)}catch{}else if(t&&typeof r==`string`){if(n&&!Bt.test(r))return r;try{return t(r),e(r)}catch{}}return r}return e=>{let t=Lt(e,r);return t?`?${t}`:``}}var Gt=`__root__`;function Kt(e){e.statusCode=e.statusCode||e.code||307;let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function qt(e){return e instanceof Response&&!!e.options}function Jt(e){let t=new Map,n,r;return{get(e){let n=t.get(e);if(n)return n.visited=!0,n.value},set(i,a){let o=t.get(i);if(o){o.value=a;return}if(t.size>=e){let e=n?.next().value;for(;!e||e.visited;)e?e.visited=!1:n=t.values(),e=n.next().value;e===r&&(n=void 0),t.delete(e.key)}let s={key:i,value:a,visited:!1};r=s,t.set(i,s)},clear(){t.clear(),n=void 0,r=void 0}}}var Yt=4,Xt=5;function Zt(e){let t=e.names;if(t)return t;let n=[];for(let t of e)typeof t!=`string`&&n.push(t[1]);return e.names=n}function Qt(e,t,n){let r=e.substring(t,n);if(r.charCodeAt(0)===36)return r.length===1?[2,`_splat`,``,void 0]:[1,r.substring(1),``,``];let i=r.indexOf(`{`);if(i>=0){let a=r.indexOf(`}`,i),o=r.charCodeAt(i+1)===45,s=i+(o?3:2);if(a>=0&&r.charCodeAt(s-1)===36&&(!o||s<a)){let c=r.substring(s,a);return[o?3:c?1:2,c||`_splat`,r.substring(0,i),e.substring(t+a+1,c?n:e.length)]}}return r}function $t(e,t,n,r,i,a){let o=n,s=t.fullPath??t.from,c=t.options,l=s.length,u=s.endsWith(`/`)?l-1:l,d=c?.caseSensitive??e,f=c?.params?.parse??c?.parseParams,p,m=a?n-1:0;if(!r||s.includes(`$`)){p=a?.slice()??[];let e=Ue(p);e&&typeof e!=`string`&&e[0]===2&&(p[p.length-1]=[e[0],e[1],e[2],e[3]===void 0?void 0:e[3]+s.substring(n-(s[n-2]===`/`?2:1),u)],m=l)}for(;o<l;){let e=o,t=s.indexOf(`/`,e),n=t===-1?l:t,a=Qt(s,e,n);o=n+1;let c;if(typeof a==`string`){if(!r)continue;let e=a,t;d?t=r.static??=new Map:(e=a.toLowerCase(),t=r.staticInsensitive??=new Map);let n=t.get(e);if(n)c=n;else{let n=tn(r);c=n,t.set(e,n)}}else{let t=a[0],h=a[2],g=a[3]??``;if(t===2&&(n=l,o=n+1),p&&m<n&&(m<e-1&&p.push(s.substring(m,e-1)),a[2]=`/`+h,t===2&&a[3]!==void 0&&u<l&&(a[3]=g.slice(0,-1)),p.push(a),m=n),!r)continue;let _=d&&!!(h||g);d||(h=h.toLowerCase(),g=g.toLowerCase());let v=t===1?r.dynamic??=[]:t===3?r.optional??=[]:r.wildcard??=[],y=t!==2&&!f&&v.find(e=>!e.parse&&e.caseSensitive===_&&e.prefix===h&&e.suffix===g);if(y)c=y;else{let e=tn(r,t,_,h,g);c=e,v.push(e),v.length===2&&i?.push(v)}}r=c}p&&m<u&&p.push(s.substring(m,u));let h=p?.slice();if(!r)return h;if(f&&t.children&&!t.isRoot&&t.id&&t.id.charCodeAt(t.id.lastIndexOf(`/`)+1)===95){let e=tn(r,Xt);(r.pathless??=[]).push(e),r=e}let g=(t.path||!t.children)&&!t.isRoot;if(g&&u<l){let e=tn(r,Yt);r.index=e,r=e}return r.parse=f??null,r.priority=c?.params?.priority??0,r.route||(r.data=h,g&&(r.route=t)),[r,o,h]}function en(e,t){if(e.parse&&!t.parse)return-1;if(!e.parse&&t.parse)return 1;if(e.parse&&t.parse&&(e.priority||t.priority))return t.priority-e.priority;if(e.prefix&&t.prefix&&e.prefix!==t.prefix){if(e.prefix.startsWith(t.prefix))return-1;if(t.prefix.startsWith(e.prefix))return 1}if(e.suffix&&t.suffix&&e.suffix!==t.suffix){if(e.suffix.endsWith(t.suffix))return-1;if(t.suffix.endsWith(e.suffix))return 1}return e.prefix&&!t.prefix?-1:!e.prefix&&t.prefix?1:e.suffix&&!t.suffix?-1:!e.suffix&&t.suffix?1:e.caseSensitive&&!t.caseSensitive?-1:!e.caseSensitive&&t.caseSensitive?1:0}function tn(e,t=0,n,r,i){return{kind:t,depth:e?e.depth+1:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,data:void 0,parent:e,parse:null,priority:0,caseSensitive:n,prefix:r,suffix:i}}function nn(e,t){let n=tn(),r=[];function i(e,t,n,a){let[o,s,c]=$t(!1,e,t,n,r,a);if(e.children)for(let t of e.children)i(t,s,o,c)}for(let t of e)i(t,1,n);for(let e of r)e.sort(en);t.masksTree=n,t.flatCache=Jt(1e3)}function rn(e,t){e||=`/`;let n=t.flatCache.get(e);if(n!==void 0)return n;let r=cn(e,t.masksTree);return t.flatCache.set(e,r),r}function an(e,t,n,r,i){e||=`/`,r||=`/`;let a=t?`case\0${e}`:e,o=i.singleCache.get(a);return o||(o=tn(),$t(t,{from:e},1,o),i.singleCache.set(a,o)),cn(r,o,n)}function on(e,t,n=!1){let r=n?e:`nofuzz\0${e}`,i=t.matchCache.get(r);if(i!==void 0)return i;e||=`/`;let a;try{a=cn(e,t.segmentTree,n)}catch(e){if(e instanceof URIError)a=null;else throw e}return a&&(a.branch=un(a.route)),t.matchCache.set(r,a),a}function sn(e,t=!1){let n=tn(),r=[],i={},a={},o=0;function s(e,n,c,l){if(e.init(o),e.id in i&&dt(),i[e.id]=e,o!==0&&e.path){let t=mt(e.fullPath);(!a[t]||e.fullPath.endsWith(`/`))&&(a[t]=e)}o++;let[u,d,f]=$t(t,e,n,c,r,l);if(e._interpolation=f,e.children)for(let t of e.children)s(t,d,u,f)}s(e,1,n);for(let e of r)e.sort(en);return{processedTree:{segmentTree:n,singleCache:Jt(1e3),matchCache:Jt(1e3),flatCache:null,masksTree:null},routesById:i,routesByPath:a}}function cn(e,t,n=!1){let r=e.split(`/`),i=fn(e,r,t,n);if(!i)return null;let[a]=ln(e,r,i);return{route:i.node.route,rawParams:a}}function ln(e,t,n){let r=dn(n.node),i=n.node.data&&Zt(n.node.data),a=Object.create(null),o=n.extract?.part??0,s=n.extract?.node??0,c=n.extract?.path??0,l=n.extract?.param??0;for(;s<r.length;o++,s++,c++){let u=r[s];if(u.kind===Yt)break;if(u.kind===Xt){o--,c--;continue}let d=t[o],f=c;if(d&&(c+=d.length),u.kind===1||u.kind===3){let e=i[l++];if(u.kind===3&&n.skipped&1<<s){o--,c=f-1;continue}let t=u.suffix||u.prefix?d.substring(u.prefix.length,d.length-u.suffix.length):d;(t||u.kind===1)&&(a[e]=decodeURIComponent(t))}else if(u.kind===2){let t=u,n=e.substring(f+t.prefix.length,e.length-t.suffix.length),r=decodeURIComponent(n);a[`*`]=r,a._splat=r;break}}return n.rawParams&&Object.assign(a,n.rawParams),[a,{part:o,node:s,path:c,param:l}]}function un(e){let t=[e];for(;e.parentRoute;)e=e.parentRoute,t.push(e);return t.reverse(),t}function dn(e){let t=Array(e.depth+1);do t[e.depth]=e,e=e.parent;while(e);return t}function fn(e,t,n,r){if(e===`/`&&n.index)return{node:n.index,skipped:0};let i=!Ue(t),a=i&&e!==`/`,o=t.length-+!!i,s=[{node:n,index:1,skipped:0,statics:0,dynamics:0,optionals:0}],c=null,l=null;for(;s.length;){let n=s.pop(),{node:i,index:u,skipped:d,statics:f,dynamics:p,optionals:m}=n,{extract:h,rawParams:g}=n;if(i.kind===2&&i.route&&!gn(l,n))continue;if(i.parse){if(!hn(e,t,n))continue;g=n.rawParams,h=n.extract}r&&i.route&&i.kind!==Yt&&gn(c,n)&&(c=n);let _=u===o;if(_&&(i.route&&(!a||i.kind===Yt||i.kind===2)&&gn(l,n)&&(l=n),!i.optional&&!i.wildcard&&!i.index&&!i.pathless))continue;let v=_?void 0:t[u],y;if(_&&i.index){let n={node:i.index,index:u,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g},r=!0;if(i.index.parse&&(hn(e,t,n)||(r=!1)),r){if(!p&&!m&&!d&&mn(f,o))return n;gn(l,n)&&(l=n)}}if(i.wildcard)for(let e=i.wildcard.length-1;e>=0;e--){let n=i.wildcard[e],{prefix:r,suffix:a}=n;if(!(r&&(_||!(n.caseSensitive?v:y??=v.toLowerCase()).startsWith(r)))){if(a){if(_)continue;let e=t.slice(u).join(`/`),i=e.slice(-a.length);if((n.caseSensitive?i:i.toLowerCase())!==a||e.length-a.length<r.length)continue}s.push({node:n,index:o,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}}if(i.optional){let e=d|1<<i.depth+1;for(let t=i.optional.length-1;t>=0;t--){let n=i.optional[t];s.push({node:n,index:u,skipped:e,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}if(!_)for(let e=i.optional.length-1;e>=0;e--){let t=i.optional[e],{prefix:n,suffix:r}=t;if(n||r){let e=t.caseSensitive?v:y??=v.toLowerCase();if(n&&!e.startsWith(n)||r&&e.indexOf(r,e.length-r.length)<n.length)continue}s.push({node:t,index:u+1,skipped:d,statics:f,dynamics:p,optionals:m+pn(o,u),extract:h,rawParams:g})}}if(!_&&i.dynamic&&v)for(let e=i.dynamic.length-1;e>=0;e--){let t=i.dynamic[e],{prefix:n,suffix:r}=t;if(n||r){let e=t.caseSensitive?v:y??=v.toLowerCase();if(n&&!e.startsWith(n)||r&&e.indexOf(r,e.length-r.length)<n.length)continue}s.push({node:t,index:u+1,skipped:d,statics:f,dynamics:p+pn(o,u),optionals:m,extract:h,rawParams:g})}if(!_&&i.staticInsensitive){let e=i.staticInsensitive.get(y??=v.toLowerCase());e&&s.push({node:e,index:u+1,skipped:d,statics:f+pn(o,u),dynamics:p,optionals:m,extract:h,rawParams:g})}if(!_&&i.static){let e=i.static.get(v);e&&s.push({node:e,index:u+1,skipped:d,statics:f+pn(o,u),dynamics:p,optionals:m,extract:h,rawParams:g})}if(i.pathless)for(let e=i.pathless.length-1;e>=0;e--){let t=i.pathless[e];s.push({node:t,index:u,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}}if(l)return l;if(r&&c){let n=c.index;for(let e=0;e<c.index;e++)n+=t[e].length;let r=n===e.length?`/`:e.slice(n);return c.rawParams??=Object.create(null),c.rawParams[`**`]=decodeURIComponent(r),c}return null}function pn(e,t){return 2**(e-t-1)}function mn(e,t){return e===2**(t-1)-1}function hn(e,t,n){let r,i;try{[r,i]=ln(e,t,n)}catch{return null}if(n.rawParams=r,n.extract=i,!n.node.parse)return!0;try{if(n.node.parse(r)===!1)return null}catch{}return!0}function gn(e,t){return!e||t.statics>e.statics||t.statics===e.statics&&(t.dynamics>e.dynamics||t.dynamics===e.dynamics&&(t.optionals>e.optionals||t.optionals===e.optionals&&((t.node.kind===Yt)>(e.node.kind===Yt)||t.node.kind===Yt==(e.node.kind===Yt)&&t.node.depth>e.node.depth)))}function _n(e,t,n){let r=ht(e),i=`/${r}`,a=t?i:i.toLowerCase(),o=`${a}/`,s={input:({url:e})=>{let n=t?e.pathname:e.pathname.toLowerCase();return n===a?e.pathname=`/`:n.startsWith(o)&&(e.pathname=e.pathname.slice(i.length)),e},output:({url:e})=>(e.pathname=ft(`/${r}${e.pathname}`),e)};return n?{input:({url:e})=>vn(n,s.input({url:e})),output:({url:e})=>s.output({url:yn(n,e)})}:s}function vn(e,t){let n=e?.input?.({url:t});if(n){if(typeof n==`string`)return new URL(n);if(n instanceof URL)return n}return t}function yn(e,t){let n=e?.output?.({url:t});if(n){if(typeof n==`string`)return new URL(n);if(n instanceof URL)return n}return t}function bn(e,t){let{createMutableStore:n,createReadonlyStore:r,batch:i}=t,a=new Map,o=n(`idle`),s=n(e),c=n(void 0),l=n([]),u=r(()=>l.get().map(e=>a.get(e).get())),d=r(()=>({status:o.get(),isLoading:o.get()===`pending`,matches:u.get(),location:s.get(),resolvedLocation:c.get()}));function f(e){let t=a.get(e);return t||(t=n(void 0),a.set(e,t)),t}let p={status:o,location:s,resolvedLocation:c,ids:l,matches:u,byRoute:a,__store:d,getMatchStore:f,setMatches:m};function m(e){let t=l.get(),n=e.map(e=>e.routeId);i(()=>{ut(t,n)||l.set(n);for(let e of t)n.includes(e)||a.get(e).set(()=>void 0);for(let t of e){let e=f(t.routeId);e.get()!==t&&e.set(t)}})}return p}var xn=`__TSR_index`,Sn=`popstate`,Cn=`beforeunload`,wn=/^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/;function Tn(e){let t=wn.exec(e);return t?`/`+e.slice(t[0].length):e}function En(e){return/[\x00-\x1f\x7f]/.test(e)&&(e=e.replace(/[\x00-\x1f\x7f]/g,e=>`	
\r`.includes(e)?``:encodeURIComponent(e))),Tn(e)}function Dn(e){let t=e.getLocation(),n=new Set,r=r=>{t=e.getLocation(),n.forEach(e=>e({location:t,action:r}))},i=n=>{e.notifyOnIndexChange??!0?r(n):t=e.getLocation()},a=async({task:n,navigateOpts:r,...i})=>{if(r?.ignoreBlocker??!1){n();return}let a=e.getBlockers?.()??[],o=i.type===`PUSH`||i.type===`REPLACE`;if(typeof document<`u`&&a.length&&o)for(let n of a){let r=jn(i.path,i.state);if(await n.blockerFn({currentLocation:t,nextLocation:r,action:i.type})){e.onBlocked?.();return}}n()};return{get location(){return t},get length(){return e.getLength()},subscribers:n,subscribe:e=>(n.add(e),()=>{n.delete(e)}),push:(n,i,o)=>{let s=t.state[xn];i=On(s+1,i),a({task:()=>{e.pushState(n,i),r({type:`PUSH`})},navigateOpts:o,type:`PUSH`,path:n,state:i})},replace:(n,i,o)=>{let s=t.state[xn];i=On(s,i),a({task:()=>{e.replaceState(n,i),r({type:`REPLACE`})},navigateOpts:o,type:`REPLACE`,path:n,state:i})},go:(t,n)=>{a({task:()=>{e.go(t,n?.ignoreBlocker??!1),i({type:`GO`,index:t})},navigateOpts:n,type:`GO`})},back:t=>{a({task:()=>{e.back(t?.ignoreBlocker??!1),i({type:`BACK`})},navigateOpts:t,type:`BACK`})},forward:t=>{a({task:()=>{e.forward(t?.ignoreBlocker??!1),i({type:`FORWARD`})},navigateOpts:t,type:`FORWARD`})},canGoBack:()=>t.state[xn]!==0,createHref:t=>e.createHref(t),block:t=>{if(!e.setBlockers)return()=>{};let n=e.getBlockers?.()??[];return e.setBlockers([...n,t]),()=>{let n=e.getBlockers?.()??[];e.setBlockers?.(n.filter(e=>e!==t))}},flush:()=>e.flush?.(),destroy:()=>e.destroy?.(),notify:r,_getBlockers:()=>e.getBlockers?.()??[]}}function On(e,t){let n=Mn();return{...t,key:n,__TSR_key:n,[xn]:e}}function kn(e){let t=e?.window??(typeof document<`u`?window:void 0),n=t.history.pushState,r=t.history.replaceState,i=[],a=()=>i,o=e=>i=e,s=t=>En(e?.createHref?e.createHref(t):t),c=e?.parseLocation??(()=>jn(`${t.location.pathname}${t.location.search}${t.location.hash}`,t.history.state));if(!t.history.state?.__TSR_key&&!t.history.state?.key){let e=Mn();t.history.replaceState({[xn]:0,key:e,__TSR_key:e},``)}let l=c(),u,d=!1,f=!1,p=!1,m=!1,h=()=>l,g,_=()=>{g&&(S._ignoreSubscribers=!0,(g[2]?t.history.pushState:t.history.replaceState)(g[1],``,g[0]),S._ignoreSubscribers=!1,g=void 0,u=void 0)},v=(t,n,r)=>{let i=e?.createHref?s(n):void 0,a=!!g;a||(u=l),l=jn(n,r),g=[i??l.href,r,g?.[2]||t],a||queueMicrotask(()=>_())},y=e=>{l=c(),S.notify({type:e})},b=async()=>{if(m=!1,f){f=!1;return}let e=c(),n=e.state[xn]-l.state[xn],r=n===1,i=n===-1,o=!r&&!i||d;d=!1;let s=o?`GO`:i?`BACK`:`FORWARD`,u=o?{type:`GO`,index:n}:{type:i?`BACK`:`FORWARD`};if(p)p=!1;else{let r=a();if(typeof document<`u`&&r.length){for(let i of r)if(await i.blockerFn({currentLocation:l,nextLocation:e,action:s})){f=!0,t.history.go(-n),S.notify(u);return}}}l=c(),S.notify(u)},x=e=>{if(m){m=!1;return}let t=!1,n=a();if(typeof document<`u`&&n.length)for(let e of n){let n=e.enableBeforeUnload??!0;if(n===!0){t=!0;break}if(typeof n==`function`&&n()===!0){t=!0;break}}if(t)return e.preventDefault(),e.returnValue=``},S=Dn({getLocation:h,getLength:()=>t.history.length,pushState:(e,t)=>v(!0,e,t),replaceState:(e,t)=>v(!1,e,t),back:e=>(e&&(p=!0,m=!0),t.history.back()),forward:e=>{e&&(p=!0,m=!0),t.history.forward()},go:(e,n)=>{d=!0,n&&(p=!0,m=!0),t.history.go(e)},createHref:e=>s(e),flush:_,destroy:()=>{t.history.pushState=n,t.history.replaceState=r,t.removeEventListener(Cn,x,{capture:!0}),t.removeEventListener(Sn,b)},onBlocked:()=>{u&&l!==u&&(l=u)},getBlockers:a,setBlockers:o,notifyOnIndexChange:!1});return S._ignoreNextBeforeUnload=e=>{m=!1;try{e=new URL(e,t.document.baseURI).href,m=/^https?:/.test(e)&&(!e.includes(`#`)||e.split(`#`)[0]!==t.location.href.split(`#`)[0])}catch{}},t.addEventListener(Cn,x,{capture:!0}),t.addEventListener(Sn,b),t.history.pushState=function(...e){let r=n.apply(t.history,e);return S._ignoreSubscribers||y(`PUSH`),r},t.history.replaceState=function(...e){let n=r.apply(t.history,e);return S._ignoreSubscribers||y(`REPLACE`),n},S}function An(e){let t=e?.window??(typeof document<`u`?window:void 0);return kn({window:t,parseLocation:()=>{let e=t.location.hash.split(`#`).slice(1),n=e[0]??`/`,r=t.location.search,i=e.slice(1);return jn(`${n}${r}${i.length===0?``:`#${i.join(`#`)}`}`,t.history.state)},createHref:e=>`${t.location.pathname}${t.location.search}#${e}`})}function jn(e,t){let n=En(e),r=n.indexOf(`#`),i=n.indexOf(`?`);if(!t){let e=Mn();t={[xn]:0,key:e,__TSR_key:e}}return{href:n,pathname:n.substring(0,r>0?i>0?Math.min(r,i):r:i>0?i:n.length),hash:r>-1?n.substring(r):``,search:i>-1?n.slice(i,r===-1?void 0:r):``,state:t}}function Mn(){return(Math.random()+1).toString(36).substring(7)}function Nn(e,t){return e.protocol!==`http:`&&e.protocol!==`https:`||e.origin!==t||!!e.username||!!e.password}function Pn(e){return e.pathname+e.search+e.hash}function Fn(e){return e.options.loader||e.options.beforeLoad||e.lazyFn||e.options.component?.preload||e.options.pendingComponent?.preload}function In(e,t){return{fromLocation:t,toLocation:e,pathChanged:t?.pathname!==e.pathname,hrefChanged:t?.href!==e.href,hashChanged:t?.hash!==e.hash}}function Ln({key:e,__TSR_key:t,__TSR_index:n,__hashScrollIntoViewOptions:r,...i}){return i}function Rn(e){return e.findIndex(e=>e.status===`error`||e.status===`notFound`||e._notFound)+1}function zn(e,t,n,r,i,a){r&&(t=t.slice(0,r)),i&&(n=n.slice(0,i));for(let r of t){if(a&&e._tx!==a)return;n.some(e=>e.routeId===r.routeId)||e.routesById[r.routeId].options.onLeave?.(r)}for(let r of n){if(a&&e._tx!==a)return;e.routesById[r.routeId].options[t.some(e=>e.routeId===r.routeId)?`onStay`:`onEnter`]?.(r)}}var Bn=class{constructor(e,t){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this._scroll={n:!0},this.subscribers=new Set,this._cache=new Map,this._committed=[],this.startTransition=async e=>(e(),!1),this.update=e=>{let t=this.options;this.options={...t,...e},this.isServer=this.options.isServer??!1??typeof document>`u`,this.staticLocations=new WeakMap,this.protocolAllowlist=new Set(this.options.protocolAllowlist),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history?this.options.history:kn()),this.origin=this.options.origin,this.origin||=window?.origin&&window.origin!==`null`?window.origin:`http://localhost`;let n=this.options.basepath??`/`,r=this.options.rewrite,i=this.basepath!==n||t?.rewrite!==r||t?.caseSensitive!==this.options.caseSensitive;if(i&&(this.basepath=n,this.rewrite=n!==`/`&&ht(n)?_n(n,this.options.caseSensitive,r):r),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree){this.routeTree=this.options.routeTree;let e;e=this.buildRouteTree(),this.setRoutes(e)}if(this.stores)i&&this.stores.location.set(this.latestLocation);else if(this.latestLocation){let e=this.getStoreConfig(this);this.batch=e.batch,this.stores=bn(this.latestLocation,e),It(this)}},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{let e=sn(this.routeTree,this.options.caseSensitive);return this.options.routeMasks&&nn(this.options.routeMasks,e.processedTree),{...e,resolvePathCache:Jt(1e3)}},this.subscribe=(e,t)=>{let n={eventType:e,fn:t};return this.subscribers.add(n),()=>{this.subscribers.delete(n)}},this.emit=e=>{for(let t of this.subscribers)if(t.eventType===e.type)try{t.fn(e)}catch(e){console.error(e)}},this.parseLocation=(e,t)=>{let n=({pathname:e,search:n,hash:r,href:i},a)=>{if(!this.rewrite&&!/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)){let i=this.options.parseSearch(n),o=this.options.stringifySearch(i);return{href:e+o+r,publicHref:e+o+r,pathname:ct(e),external:!1,searchStr:o,search:Je(t?.search,i),hash:ct(r.slice(1)),state:Ye(t?.state,a)}}let o=vn(this.rewrite,new URL(i,this.origin)),s=this.options.parseSearch(o.search),c=this.options.stringifySearch(s);return o.search=c,{href:o.href.replace(o.origin,``),publicHref:i,pathname:ct(Tn(o.pathname)),external:!!this.rewrite&&Nn(o,this.origin),searchStr:c,search:Je(t?.search,s),hash:ct(o.hash.slice(1)),state:Ye(t?.state,a)}},r=n(e,e.state),{__tempLocation:i,__tempKey:a}=r.state;if(i&&(!a||a===this.tempLocationKey)){let e=n(i,{...i.state,__tempLocation:void 0,key:r.state.key,__TSR_key:r.state.__TSR_key});return e.maskedLocation=r,e}return r},this.matchRoutes=(e,t,n)=>typeof e==`string`?this.matchRoutesInternal({pathname:e,search:t},n):this.matchRoutesInternal(e,t),this.getMatchedRoutes=e=>{let t=Object.create(null),n=on(mt(e),this.processedTree,!0);return n&&Object.assign(t,n.rawParams),[n?.branch||[this.routesById.__root__],t,n?.route]},this.buildLocation=e=>{{let t=this.staticLocations.get(e);if(t)return t}let t=!1,n=(n={})=>{if(n.href){let e=jn(n.href,{});n={...n,to:vn(this.rewrite,new URL(e.pathname,this.origin)).pathname,search:this.options.parseSearch(e.search),hash:e.hash.slice(1)}}let r=n._fromLocation||this._pendingLocation||this.latestLocation,i,a=()=>(t=!0,r),o=()=>(t=!0,i??=this.matchRoutesLightweight(r)),s=n.to?`${n.to}`:`.`,c=_t(s[0]===`/`?``:n.unsafeRelative===`path`?a().pathname:n.from??o()[1],s,this.options.trailingSlash,this.resolvePathCache),l=this.routesByPath[mt(c)],u=c.includes(`$`),d;if(l)d=l._branch??=un(l);else if(u)d=[];else{let[e,t,n]=this.getMatchedRoutes(c);d=e,this.options.notFoundRoute&&(!n||n.path!==`/`&&t[`**`])&&(d=[...d,this.options.notFoundRoute])}let f=u?l?._interpolation??$t(!1,{fullPath:c},0):void 0,p;for(let e of d){let t=e.options.params?.stringify??e.options.stringifyParams;if(t){let e=o()[3];if(p??=Gn(n.params,e),!Ke(p))break;p===e&&(p=Object.assign(qe(),p));try{Object.assign(p,t(p))}catch{}}}p??=Gn(n.params,Kn(n.params,f)?o()[3]:qn);let m=e.leaveParams?c:Tn(ct(f?xt(c,f,p,this.pathParamsDecoder):c)),h=Jn(d,e._includeValidateSearch),g=()=>{let t=o()[2];if(e._includeValidateSearch&&this.options.search?.strict){let e={};d.forEach(n=>{if(n.options.validateSearch)try{Object.assign(e,Wn(n.options.validateSearch,{...e,...t}))}catch{}}),t=e}return t},_=h.length?Yn(h,g(),n):n.search===!0?g():typeof n.search==`function`?n.search(g()):n.search||qn,v=this.options.stringifySearch(_),y=n.hash===!0?a().hash:typeof n.hash==`function`?n.hash(a().hash):n.hash||void 0,b=y?`#${y}`:``,x=n.state?n.state===!0?a().state:typeof n.state==`function`?n.state(a().state):n.state:qn,S=`${m}${v}${b}`,C,w,T=!1;if(this.rewrite){let e=new URL(S,this.origin),t=e.origin,n=yn(this.rewrite,e);C=Pn(e),Nn(n,t)?(w=n.href,T=!0):w=Tn(Pn(n))}else C=lt(S),w=C;return{publicHref:w,href:C,pathname:m,search:_,searchStr:v,state:x,hash:y??``,external:T,unmaskOnReload:n.unmaskOnReload}},r=n(e);if(e.mask)r.maskedLocation=n({from:e.from,...e.mask});else if(this.options.routeMasks){let t=rn(r.pathname,this.processedTree);if(t){let i=Object.assign(qe(),t.rawParams),{from:a,params:o,...s}=t.route,c=Gn(o,i);r.maskedLocation=n({from:e.from,...s,params:c})}}return!t&&e._fromLocation&&!r.maskedLocation&&this.staticLocations.set(e,r),r},this.commitLocation=async({viewTransition:e,ignoreBlocker:t,...n})=>{let r=n.maskedLocation??n;if(r.external)return Vn(this,r.publicHref,{replace:n.replace,ignoreBlocker:t});let i,a=mt(this.latestLocation.href)===mt(n.href)&&Ze(Ln(n.state),Ln(this.latestLocation.state)),o=this._commitPromise,s,c=new Promise(e=>{s=e});if(c.resolve=()=>{s(),o?.resolve()},this._commitPromise=c,a)this.load();else{let{maskedLocation:r,hashScrollIntoView:a,...o}=n;r&&(o={...r,state:{...r.state,__tempKey:void 0,__tempLocation:{...o,search:o.searchStr,state:{...o.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(o.unmaskOnReload??this.options.unmaskOnReload??!1)&&(o.state.__tempKey=this.tempLocationKey)),o.state={...o.state,__hashScrollIntoViewOptions:a??this.options.defaultHashScrollIntoView??!0},this.shouldViewTransition=e,i=n.replace?`REPLACE`:`PUSH`,this.history[i===`REPLACE`?`replace`:`push`](o.publicHref,o.state,{ignoreBlocker:t}),this.history.subscribers.size||this.load({action:{type:i}})}return this._scroll.n=n.resetScroll??!0,this._commitPromise},this.buildAndCommitLocation=({replace:e,resetScroll:t,hashScrollIntoView:n,viewTransition:r,ignoreBlocker:i,...a}={})=>{let o=this.buildLocation({...a,_includeValidateSearch:!0});this._pendingLocation=o;let s=this.commitLocation({...o,viewTransition:r,replace:e,resetScroll:t,hashScrollIntoView:n,ignoreBlocker:i});return queueMicrotask(()=>{this._pendingLocation===o&&(this._pendingLocation=void 0)}),s},this.navigate=async({to:e,reloadDocument:t,href:n,publicHref:r,...i})=>{let a=n?nt(n):void 0;if(a||t){if(e!==void 0||!n){let t=this.buildLocation({to:e,...i}),a=t.maskedLocation??t;n??=a.publicHref,r??=a.publicHref}let t=!a&&r?r:n;return Vn(this,t,i)}return this.buildAndCommitLocation({...i,href:n,to:e,_isNavigate:!0})},this.load=async e=>{this.updateLatestLocation(),e?.action&&(this._scroll.h=e.action.type===`PUSH`||e.action.type===`REPLACE`),await Hr(this,e)},this.startViewTransition=e=>{let t=this.shouldViewTransition??this.options.defaultViewTransition;if(this.shouldViewTransition=void 0,t&&typeof document.startViewTransition==`function`){let n;if(typeof t==`object`&&window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)){let r=this.latestLocation,i=this.stores.resolvedLocation.get(),a=typeof t.types==`function`?t.types(In(r,i)):t.types;if(a===!1)return e();n={update:e,types:a}}else n=e;return document.startViewTransition(n).updateCallbackDone}return e()},this.invalidate=e=>{let t=this._committed,n=e?.filter,r=this._preloads,i=new Set,a=e=>{(!n||n(e))&&i.add(e.id)};t.forEach(a),this._cache.forEach(a),r?.forEach(e=>e.forEach(a)),this._tx?.[3].forEach(a);let o=[];for(let[e,t]of r??[])t.some(e=>i.has(e.id))&&(r.delete(e),o.push(e));let s=t=>{if(i.has(t.id)){let n=this.routesById[t.routeId],r={...t,invalid:!0,...(e?.forcePending||t.status===`error`||t.status===`notFound`)&&Fn(n)?{status:`pending`,error:void 0}:void 0};return t._flight=void 0,r}return t};this._committed=t.map(s);for(let[t,n]of this._cache)i.has(t)&&(n.invalid=!0,e?.forcePending&&(n.status=`pending`));for(let e of i){let t=this._flights?.get(e);this._flights?.delete(e),t&&!t[2]&&o.push(t[1])}for(let e of o)e.abort();return this.shouldViewTransition=!1,this.load({sync:e?.sync})},this.resolveRedirect=e=>{let t=e.options,n=e.headers.get(`Location`)||t.href;if(!n){let e=this.buildLocation(t);n=(e.maskedLocation??e).publicHref||`/`}let r;if(rt.test(n)||(r=nt(n))&&!this.protocolAllowlist.has(r))throw Error(`Redirect blocked: unsafe protocol`);if(r===`http:`||r===`https:`){let e=new URL(n);e.pathname.startsWith(`//`)?n=e.href:Nn(e,this.origin)||(n=Pn(e),r=void 0)}return r&&(t.reloadDocument=!0),t.href=n,e.headers.set(`Location`,n),e},this.clearCache=e=>{let t=this._cache,n=this._preloads,r=e?.filter,i=[],a=[];for(let[e,n]of t)(!r||r(n))&&(a.push(e),i.push(n));let o=[];for(let[e,t]of n??[])(!r||t.some(r))&&(o.push(e),i.push(...t));for(let e of a)t.delete(e);for(let e of o)n.delete(e);for(let e of i){let t=e._flight;e._flight=void 0,t&&!--t[2]&&(this._flights?.get(e.id)===t&&this._flights.delete(e.id),o.push(t[1]))}for(let e of o)e.abort()},this.loadRouteChunk=er,this.preloadRoute=e=>Ur(this,e),this.matchRoute=(e,t)=>{let n={...e,to:e.to?_t(e.from||``,e.to,this.options.trailingSlash,this.resolvePathCache):void 0,params:e.params||{},leaveParams:!0},r=this.buildLocation(n),i=this.stores.status.get()===`pending`;if(t?.pending&&!i)return!1;let a=t?.pending??!i?this.latestLocation:this.stores.resolvedLocation.get()||this.stores.location.get(),o=an(r.pathname,t?.caseSensitive??!1,t?.fuzzy??!1,a.pathname,this.processedTree);return!o||e.params&&!Ze(o.rawParams,e.params,!0)?!1:t?.includeSearch??!0?Ze(a.search,r.search,!0)?o.rawParams:!1:o.rawParams},this.getStoreConfig=t,e.pathParamsAllowedCharacters?.length&&(this.pathParamsDecoder=vt(e.pathParamsAllowedCharacters)),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...e,caseSensitive:e.caseSensitive??!1,notFoundMode:e.notFoundMode??`fuzzy`,stringifySearch:e.stringifySearch??Ht,parseSearch:e.parseSearch??Vt,protocolAllowlist:e.protocolAllowlist??tt}),self.__TSR_ROUTER__=this}isShell(){return!!this.options.isShell}get state(){return this.stores.__store.get()}setRoutes(e){Object.assign(this,e),this.lightweightCache=new WeakMap,this.staticLocations=new WeakMap;let t=this.options.notFoundRoute;t&&(t.init(99999999999),this.routesById[t.id]!==t&&(t._interpolation=$t(!1,t,0)),this.routesById[t.id]=t)}matchRoutesInternal(e,t){let[n,r,i]=this.getMatchedRoutes(e.pathname),a=n,o=!1;(i?i.path!==`/`&&r[`**`]:mt(e.pathname))&&(this.options.notFoundRoute?a=[...a,this.options.notFoundRoute]:o=!0);let s=o?Xn(this.options.notFoundMode,a):void 0,c=Array(a.length),l=this._committed,u=(e,t)=>{let n=l[t];return n?.routeId===e.id?n:e===this.options.notFoundRoute?l.find(t=>t.routeId===e.id):void 0},d;for(let n=0;n<a.length;n++){let i=a[n],o=c[n-1],l,f,p;{let n=o?.search??e.search,r=o?._strictSearch??void 0;try{let e=Wn(i.options.validateSearch,{...n})??void 0;l={...n,...e},f={...r,...e}}catch(e){let r=e;if(e instanceof Hn||(r=new Hn(e.message,{cause:e})),t?.throwOnError)throw r;l=n,f={},p=r}}let m=``,h=``;try{m=i.options.loaderDeps?.({search:l})??``,h=m&&JSON.stringify(m)||``}catch(e){if(t?.throwOnError)throw e;p??=e}let g=qe(),_=i._interpolation?xt(i.fullPath,i._interpolation,r,this.pathParamsDecoder,g):i.fullPath,v=i.id+_+h,y=u(i,n),b=this._cache.get(v)??(y?.id===v?y:void 0);d=b?._strictParams??Object.assign(g,d);let x;if(!b)try{Zn(i,d)}catch(e){if(x=Ct(e)||qt(e)?e:new Un(e.message,{cause:e}),t?.throwOnError)throw x}let S=y?`stay`:`enter`,C;if(b)C={...b,cause:S,search:Je(y?y.search:b.search,l),_strictSearch:f,searchError:p};else{let e=Fn(i)?`pending`:`success`;C={id:v,ssr:i.options.ssr,index:n,routeId:i.id,params:y?.params??d,_strictParams:d,pathname:_,updatedAt:Date.now(),search:y?Je(y.search,l):l,_strictSearch:f,searchError:p,status:e,isFetching:!1,error:void 0,paramsError:x,context:{},abortController:t?._controller??new AbortController,cause:S,loaderDeps:y?Ye(y.loaderDeps,m):m,invalid:!1,preload:!1,staticData:i.options.staticData||{},fullPath:i.fullPath}}let w=s===i.id;C._notFound&&!w&&(C.error=void 0),C._notFound=w,c[n]=C}for(let e=0;e<c.length;e++){let n=c[e];n.params=n.cause===`stay`?Je(n.params,d):d,t?._controller&&(n.context={})}return c}matchRoutesLightweight(e){let t=Ue(this.stores.ids.get()),n=t?this.stores.byRoute.get(t).get():void 0,r=n?.id,i=this.lightweightCache.get(e);if(i&&i[0]===r)return i[1];let[a,o]=this.getMatchedRoutes(e.pathname),s=Ue(a),c={...e.search};for(let e of a)try{Object.assign(c,Wn(e.options.validateSearch,c))}catch{}let l=n&&n.routeId===s.id&&n.pathname===e.pathname,u;if(l)u=n.params;else{let e=o;for(let t of a)try{Zn(t,e)}catch{}u=e}let d=[a,s.fullPath,c,u];return this.lightweightCache.set(e,[r,d]),d}};async function Vn(e,t,{replace:n,ignoreBlocker:r}){if(!it(t,e.protocolAllowlist)){if(!r){let t=e.history._getBlockers();for(let r of t)if(r?.blockerFn&&await r.blockerFn({currentLocation:e.history.location,nextLocation:e.history.location,action:n?`REPLACE`:`PUSH`}))return}e.history._ignoreNextBeforeUnload?.(t),n?window.location.replace(t):window.location.href=t}}var Hn=class extends Error{},Un=class extends Error{};function Wn(e,t){if(e==null)return{};if(`~standard`in e){let n=e[`~standard`].validate(t);if(n instanceof Promise)throw new Hn(`Async validation not supported`);if(n.issues)throw new Hn(JSON.stringify(n.issues,void 0,2),{cause:n});return n.value}return`parse`in e?e.parse(t):typeof e==`function`?e(t):{}}function Gn(e,t){if(e===void 0||e===!0)return t;let n=Object.create(null);return e===!1||e===null?n:typeof e==`function`?(Object.assign(n,t),Object.assign(n,e(n))):Object.assign(n,t,e)}function Kn(e,t){return typeof e==`function`?!0:!t||e===!1||e===null?!1:e===void 0||e===!0||t.some(t=>typeof t!=`string`&&!Ge.call(e,t[1]))}var qn=Object.freeze({});function Jn(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r].options;`search`in i?i.search?.middlewares&&n.push(...i.search.middlewares):(i.preSearchFilters||i.postSearchFilters)&&n.push(({search:e,next:t})=>{let n=t(i.preSearchFilters?i.preSearchFilters.reduce((e,t)=>t(e),e):e);return i.postSearchFilters?i.postSearchFilters.reduce((e,t)=>t(e),n):n});let a=i.validateSearch;t&&a&&n.push(({search:e,next:t,meta:n})=>{let r=t(e);try{let e=Wn(a,r);if(n&&e)for(let t in e)t in r||(n.defaulted||=new Map).set(t,e[t]);return{...r,...e}}catch{}return r})}return n}function Yn(e,t,n){let r=(t,i,a)=>{if(t>=e.length){if(!n.search)return{};if(n.search===!0)return i;let e=We(n.search,i);return a&&(a.explicit=e),e}return e[t]({search:i,next:(e,n)=>{if(n){let n=a||{};return{search:r(t+1,e,n),meta:n}}return r(t+1,e,a)},meta:a})};return r(0,t)}function Xn(e,t){if(e!==`root`){let e;for(let n=t.length-1;n>=0;n--){let r=t[n];if(r.options.notFoundComponent)return r.id;e||=r.children&&r.id}if(e)return e}return Gt}function Zn(e,t){let n=e.options.params?.parse??e.options.parseParams;n&&Object.assign(t,n(t))}function Qn(e,t){return e.options[t]?.preload?.()}function $n(e,t){let n=Qn(e,`component`),r=Qn(e,`pendingComponent`);return t&&(r?r=r.then(t):t()),n&&r?Promise.all([n,r]).then(()=>{}):n??r}function er(e,t,n){let r=()=>t===!1?void 0:t?Qn(e,t):$n(e,n),i=e._lazy;if(i)return i===!0?r():i.then(r);if(!e.lazyFn)return r();let a=e.lazyFn().then(t=>{{let{id:n,...r}=t.options;Object.assign(e.options,r),e._lazy=!0}},t=>{throw e._lazy=void 0,t});return e._lazy=a,a.then(r)}function tr(e){let t=e.findIndex(e=>e.status!==`success`||e._notFound)+1;return t&&t<e.length?e.slice(0,t):e}function nr(e){let t=e.length;for(let n=0;n<t;n++){let r=e[n];if(r._assetEnd!==void 0){t=Math.min(t,Math.max(n+1,r._assetEnd));continue}if(r.status!==`success`||r._notFound){t=n+1;break}}return t<e.length?e.slice(0,t):e}var rr=0,ir=1,ar=2,or=3,sr=[4];function cr(e){return typeof e[0]==`number`}function lr(e,t){return t.aborted?Promise.race([Promise.reject(t),e]):new Promise((n,r)=>{let i=()=>r(t);t.addEventListener(`abort`,i,{once:!0}),Promise.resolve(e).then(n,r).then(()=>t.removeEventListener(`abort`,i))})}function ur(e,t){return e.routesById[t.routeId]}function dr(e,t,n){return qt(e)?[or,e]:Ct(e)?(e.routeId||=n,[ar,e]):t?(typeof e?.then==`function`&&(e=Error(`A Promise was thrown`,{cause:e})),[ir,e]):[rr,e]}function fr(e,t){let n=dr(t,!0,e.id);if(n[0]!==ir)return n;try{e.options.onError?.(n[1])}catch(t){n=dr(t,!0,e.id)}return n}function pr(e,t,n,r,i){return i[0].signal.aborted?sr:kr(e,t,n,fr(n,r),i)}async function mr(e,t,n,r,i,a){let[o,s]=t,c=n[0].signal,l=!!n[3];for(let i=n[6]??0;i<r;i++){let r=s[i],u=ur(e,r);r.abortController=n[0];let d=s[i-1]?.context??e.options.context??{},f={params:r.params,location:o,navigate:t=>e.navigate({...t,_fromLocation:o}),buildLocation:e.buildLocation,cause:l?`preload`:r.cause,abortController:n[0],preload:l,matches:s,routeId:u.id};try{let e=r._ctx||=u.options.context?u.options.context({...f,deps:r.loaderDeps,context:d})||{}:void 0;r.context={...d,...e}}catch(a){return gr(e,r),[i,pr(e,t,u,a,n)]}if(c.aborted)return[i,sr];let p=r.paramsError??r.searchError;if(p!==void 0)return gr(e,r),[i,pr(e,t,u,p,n)];let m=u.options.beforeLoad;if(!m)continue;let h=r.status;i>=a&&(r.status=`pending`,n[7]?.());try{yr(e,r,`beforeLoad`,n[0]);let a=m({...f,search:r.search,context:r.context,...e.options.additionalContext}),o=await(typeof a?.then==`function`?lr(a,c):a);if(c.aborted)return[i,sr];let s=kr(e,t,u,dr(o,!1,u.id),n);if(s[0]!==rr)return gr(e,r),[i,s];r.context={...r.context,...o}}catch(a){return gr(e,r),[i,pr(e,t,u,a,n)]}finally{r.status=h,yr(e,r,!1,n[0])}}i()}function hr(e,t,n){if(!(!n||--n[2])){if(e._flights?.get(t.id)===n){let n=e._tx;if(n&&!n[0].signal.aborted&&!n[3].includes(t)&&n[3].some(e=>e.id===t.id)&&n[3].some(e=>e.isFetching===`beforeLoad`))return;e._flights.delete(t.id)}return n[1]}}function gr(e,t){let n=t._flight;t._flight=void 0,hr(e,t,n)?.abort()}function _r(e,t,n,r){let i=[];for(let a of t)if(!n?.includes(a)){let t=a._flight;if(a._flight=void 0,r&&t?.[2]===1&&e._flights?.get(a.id)===t&&n?.some(e=>e.id===a.id))t[2]=0;else{let n=hr(e,a,t);n&&i.push(n)}}for(let e of i)e.abort()}function vr(e){for(let t of e){let e=t._flight;e&&e[2]++}}function yr(e,t,n,r){if(t.isFetching=n,r&&e._tx?.[0]!==r)return;let i=e.stores.byRoute.get(t.routeId),a=i?.get();a?.id===t.id&&i.set({...a,isFetching:n})}function br(e,t,n,r,i,a,o){let s=t[0];return{params:n.params,location:s,navigate:t=>e.navigate({...t,_fromLocation:s}),cause:o?`preload`:n.cause,abortController:i,preload:o,deps:n.loaderDeps,parentMatchPromise:a,context:n.context,route:r,...e.options.additionalContext}}async function xr(e,t,n,r,i,a,o){let s=o[0],c=s.signal;if(c.aborted)return sr;if(!i)return[rr,void 0];let l=n._flight;yr(e,n,`loader`,s);try{if(!l){let s=new AbortController;l=[Promise.resolve().then(()=>i(br(e,t,n,r,s,a,!!o[3]))).then(e=>dr(e,!1,r.id),e=>dr(e,!0,r.id)).then(t=>(t[0]!==rr&&e._flights?.get(n.id)===l&&(e._flights.delete(n.id),l[2]||s.abort()),t[0]===ir&&l[2]?fr(r,t[1]):t)),s,1],(e._flights??=new Map).set(n.id,l)}return n._flight=l,n.abortController=l[1],kr(e,t,r,await lr(l[0],c),o)}catch(t){if(t!==c||!c.aborted)throw t;return gr(e,n),sr}finally{yr(e,n,!1,s)}}function Sr(e,t,n){t[0]!==or&&(e.status=`success`,e.error=void 0,t[0]===rr?(e.loaderData=t[1],e.invalid=!1,e.updatedAt=Date.now(),e.preload=n):e.invalid=!0)}function Cr(e,t,n){let r=e._cache.get(t.id);if(r!==n||e._committed.some(e=>e.id===t.id&&e._flight===t._flight))return;let i={...t,_notFound:void 0,context:{}};i._flight&&i._flight[2]++,e._cache.set(t.id,i),r&&gr(e,r)}function wr(e,t){return t[0]===ir||t[0]===ar?{...e,status:t[0]===ir?`error`:`notFound`,error:t[1],_flight:void 0}:e}function Tr(e,t,n,r,i,a,o){let s=t[1][n],c=ur(e,s),l=!!a[3],u=e._cache.get(s.id),d,f=!1,p;try{if(s.status===`success`&&(d=c.options.shouldReload,typeof d==`function`&&(d=d(br(e,t,s,c,a[0],i,l))),a[0].signal.aborted&&(p=sr)),!p)if(s.status!==`success`)f=!0;else{let t=l||s.preload?c.options.preloadStaleTime??e.options.defaultPreloadStaleTime??3e4:c.options.staleTime??e.options.defaultStaleTime??0;f=!!(s.invalid||d||d===void 0&&Date.now()-s.updatedAt>=t&&(a[5]||s.cause===`enter`||a[2].some(e=>e.routeId===s.routeId&&e.id!==s.id)))}}catch(n){s.invalid=!0,gr(e,s),p=pr(e,t,c,n,a)}let m=c.options.loader,h=typeof m==`function`,g=h?m:m?.handler,_=!l||c.options.preload!==!1,v=_&&m?e._flights?.get(s.id):void 0;v===s._flight||p?v=void 0:v&&!f&&!l&&d===void 0?f=!0:f||(v=void 0);let y=!!(m&&f&&s.status===`success`&&!l&&!a[4]&&((h?void 0:m.staleReloadMode)??e.options.defaultStaleReloadMode)!==`blocking`),b=f&&_,x=b&&!y&&(s.status!==`success`||!!m),S=n>=o?a[7]:void 0,C=c.lazyFn&&c._lazy!==!0?S:void 0;if(b&&!m&&(s.invalid=!1,s.updatedAt=Date.now()),v&&v[2]++,x){let t=s._flight;s._flight=v,hr(e,s,t)?.abort(),n>=o&&(s.status=`pending`),S?.()}b||(s.isFetching=!1);let w=!p&&x?xr(e,t,s,c,g,i,a).then(t=>(Sr(s,t,l),t[0]===rr&&(m&&!a[0].signal.aborted&&Cr(e,s,u),n>=o&&(s.status=`pending`)),t)):Promise.resolve(p??[rr,s.loaderData]),T=(async()=>{try{let e=er(c,void 0,C);e&&await lr(e,a[0].signal)}catch(r){if(!t[1].some((e,t)=>t<=n&&(e.status===`error`||e.status===`notFound`||e._notFound)))return[n,pr(e,t,c,r,a)]}let r=await w;x&&r[0]===rr&&s.status===`pending`&&!a[0].signal.aborted&&(s.status=`success`,S?.())})();if(r.push([n,w,T]),!y)return w.then(e=>wr(s,e));let E={...s,status:`pending`,preload:!1,_flight:v};s.invalid=!1,s.isFetching=`loader`;let ee=xr(e,t,E,c,g,i,a).then(e=>(s.isFetching=!1,Sr(E,e,!1),e));return(t[2]??=[]).push([n,ee,T,E]),ee.then(e=>wr(E,e))}async function Er(e,t,n,r,i=0){let a=n?.[1][1],o=a?.routeId?t.findIndex(e=>e.routeId===a.routeId):n?.[0]??t.length-1;o<0&&(o=0);for(let n=o;n>=0;n--){let i=ur(e,t[n]);try{let e=er(i,!1);e&&await lr(e,r)}catch(e){if(e===r&&r.aborted)throw e}if(i.options.notFoundComponent)return n}return a?.routeId?o:i}function Dr(e,t){t[2]&&=(_r(e,t[2].map(e=>e[3])),void 0)}async function Or(e,t,n,r){let i;try{await Promise.all(e.map(e=>e[1].then(async t=>{let a=e[0];if(!(r&&a>=await r)){if(t[0]>=or)throw[a,t];!i&&t[0]!==rr&&(i=[a,t],await Promise.all((n??[]).map(e=>{if(!(e[0]<=a))return e[1].then(t=>{if(t[0]===or)throw[e[0],t]})})))}})))}catch(e){return e}return t??i}function kr(e,t,n,r,i,a){for(;r[0]===or;){let o=r[1],s=o.options;try{if((s.href||o.headers.has(`Location`))&&(e.resolveRedirect(o),s.reloadDocument)||(s.reloadDocument?i[3]:i[1]>=20))return r;let n=e.buildLocation({...s,_fromLocation:t[0],_includeValidateSearch:!0}),a=n.maskedLocation??n;if(a.external){let t=o.clone();return t.options={...s},t.headers.set(`Location`,a.publicHref),e.resolveRedirect(t),i[3]?[or,t]:[or,t,a]}return[or,o,n]}catch(e){r=a?[ir,e]:fr(n,e),a=!0}}return r}async function Ar(e,t,n,r,i,a){let o=t[1],s=await i,c=!1,l=o.findIndex(e=>e._notFound),u=t=>t[1][0]===ar?Er(e,o,t,r.signal):t[0],d=l<0?o.length:l;if((s?.[1][0]??0)>=or)d=0;else if(s){d=s[2]??=await u(s);for(let e of n){if(e[0]>=d)break;let t=await e[1];if(t[0]!==rr&&t[0]<or&&!(`loaderData`in o[e[0]])){s=[e[0],t],d=s[2]=await u(s);break}}}for(let e of n){if(e[0]>=d)break;let t=await e[2];if(t){s=t;break}}if((s?.[1][0]??0)>=or){let n=s[1];if(n[0]!==or||n[1].options.reloadDocument||n[2])return Dr(e,t),n;c=!0,s=[0,[ir,Error(`Too many redirects`)]]}let f=s?s[2]??await u(s):l;if(f>=0){let i=s?.[1],l=i?.[0],u=o[f],d=i?.[1],p=()=>{i&&(u._notFound=void 0,l===ir?u.status=`error`:(d.routeId=u.routeId,u.routeId===e.routeTree.id?(u.status=`success`,u._notFound=!0):u.status=`notFound`),u.error=d,u.isFetching=!1)};p(),i||a?.();let m=ur(e,u);try{await lr(i?Promise.resolve().then(()=>er(m,l===ir?`errorComponent`:`notFoundComponent`)):Promise.all([er(m),er(m,`notFoundComponent`)]),r.signal)}catch(n){if(n===r.signal&&r.signal.aborted)return Dr(e,t),sr}i?c&&(r.abort(),await Promise.all([...n.map(e=>e[1]),...n.map(e=>e[2]),...(t[2]??[]).map(e=>e[1])]),Dr(e,t),_r(e,o),p()):u.status=`success`}return t}async function jr(e,t,n,r=0,i=t[1].length){let a=t[1];for(let t=r;t<i;t++){let r=a[t],i=ur(e,r).options;if(i.head||i.scripts)try{let t={ssr:e.options.ssr,matches:a,match:r,params:r.params,loaderData:r.loaderData},[o,s]=await lr(Promise.all([i.head?.(t),i.scripts?.(t)]),n);r.meta=o?.meta,r.links=o?.links,r.headScripts=o?.scripts,r.styles=o?.styles,r.scripts=s}catch(e){if(e===n&&n.aborted)break;console.error(e)}if(r.status!==`success`||r._notFound)break}return t}async function Mr(e,t,n,r){let i=[t,n],a=r[0].signal,o;try{let t=e.stores.matches.get(),s=n.findIndex(e=>e._notFound);if(e.options.notFoundMode!==`root`&&s>=0){let t=await Er(e,n,void 0,a,s);n[s]._notFound=void 0,n[t]._notFound=!0,s=t}let c=s<0?n.length:s+1,l=0;for(;l<c&&l!==s;){let e=n[l],i=r[2][l],a=t[l];if(i?.id!==e.id||i.status!==`success`||e.preload||a?.id!==e.id||a.status!==`success`||(l++,i._notFound||a._notFound))break}let u=[],d=r[6]??0,f=d?Promise.resolve(n[d-1]):void 0,p=()=>{for(let t=d;t<c&&!a.aborted;t++)f=Tr(e,i,t,u,f,r,l)},m=await mr(e,i,r,c,p,l);if(m){if(r[4]=!0,c=m[0],m[1][0]===ar){let t=await Er(e,n,m,a);m[2]=t,c=Math.min(c,t+1)}else m[1][0]>=or&&(c=0);p()}if(!a.aborted&&!r[3]){let t=[];for(let[n,r]of e._flights??[])r[2]||(e._flights.delete(n),t.push(r[1]));for(let e of t)e.abort()}let h=Ar(e,i,u,r[0],Or(u,m,i[2]),r[7]);i[2]?.length&&(i[3]=Or(i[2],void 0,void 0,h.then(e=>cr(e)?0:tr(n).length,()=>0))),o=await h}catch(t){if(Dr(e,i),t===a&&a.aborted)return sr;throw t}return cr(o)?o:jr(e,o,a,r[6]===n.length?r[6]:0)}function Nr(e,t){if(e._tx!==t)return;let n=t[3],r=e.stores.matches.get(),i=e._pending;for(let a=0;a<n.length;a++){let o=n[a],s=o.status===`success`&&!o._notFound,c=r[a]?.id===o.id&&r[a]?.status===`pending`;if(s&&!c)continue;let l=ur(e,o),u=s||o.invalid?0:l.options.pendingMs??e.options.defaultPendingMs,d=l.options.pendingComponent??e.options.defaultPendingComponent;if(!d||typeof u!=`number`||u===1/0){i&&(i[0]=t,i[2]=0,i[4]=!0);return}let f=l.options.pendingMinMs??e.options.defaultPendingMinMs??0,p=!1;if(i?.[1]===o.id?(p=i[0]!==t,i[0]=t):(clearTimeout(i?.[3]),e._pending=i=void 0),i||(e._pending=i=[t,o.id,c?Date.now()+f:t[4]+u,void 0,c||void 0,d]),i[4]&&!p&&i[5]===d)return;if(i[5]=d,!i[4]){clearTimeout(i[3]);let n=i[2]-Date.now();if(n>0){i[3]=setTimeout(()=>Nr(e,t),n);return}i[2]=0}let m=n.map(e=>({...e,_flight:void 0}));m[a].status=`pending`;let h=i[4]=e.startTransition(()=>e.stores.setMatches(m),m).then(t=>(t&&e._pending===i&&i[4]===h&&!i[2]&&(i[2]=Date.now()+f),t));return}}function Pr(e,t){let n=e._pending;(e._tx===t||!e._tx?.[3].some(e=>e.id===n?.[1]))&&(clearTimeout(n?.[3]),e._pending=void 0)}async function Fr(e,t){let n=e._pending;if(!n)return;clearTimeout(n[3]);let r=n[2]-Date.now();if(!n[4]||r<=0||!tr(t[3]).some(e=>e.id===n[1]))return;let i;try{await lr(new Promise(e=>{i=setTimeout(e,r)}),t[0].signal)}catch{}clearTimeout(i)}function Ir(e,t){e._committed=t,e.stores.setMatches(t)}function Lr(e,t,n,r){let i=e._committed,a=e._lifecycleEnd,o=e._cache;for(let e of n)e.preload=!1,r&&(e._assetEnd=void 0);let s=tr(n).length,c=new Map;{let t=Date.now(),r=new Set;for(let e=0;e<n.length;e++){let t=n[e];(e<s||t.status===`success`)&&r.add(t.id)}for(let n of[...i,...o.values()]){if(n.status!==`success`||r.has(n.id))continue;let i=ur(e,n);!i.options.loader||t-n.updatedAt>=(n.preload?i.options.preloadGcTime??e.options.defaultPreloadGcTime??3e5:i.options.gcTime??e.options.defaultGcTime??3e5)||c.set(n.id,o.get(n.id)===n?n:{...n,_flight:void 0,isFetching:!1,context:{}})}}t[3]=[],e._cache=c;let l=e._lifecycleEnd=Rn(n);Ir(e,n),_r(e,[...o.values(),...i].filter(e=>e._flight&&c.get(e.id)!==e),n),zn(e,i,n,a,l,t)}async function Rr(e,t){let n=e._tx;for(;n&&n!==t;)t=n,await n[5],n=e._tx}function zr(e,t,n){let r=n[1].options,i=n[2];if(!i)return e.navigate({...r,replace:!0,ignoreBlocker:!0});if(r.reloadDocument)return e.navigate({href:(i.maskedLocation??i).publicHref,reloadDocument:!0,replace:!0,ignoreBlocker:!0});i._redirects=t[1]+1,e._pendingLocation=i;let a=e.commitLocation({...i,viewTransition:r.viewTransition,replace:!0,resetScroll:r.resetScroll,hashScrollIntoView:r.hashScrollIntoView,ignoreBlocker:!0});return queueMicrotask(()=>{e._pendingLocation===i&&(e._pendingLocation=void 0)}),a}async function Br(e,t,n,r,i){let a=n.map(e=>({...e}));vr(a);for(let t of r)gr(e,a[t[0]]),a[t[0]]=t[3];let o=[t[2],a],s;try{s=await Ar(e,o,r,t[0],i)}catch(t){throw _r(e,a),t}if(cr(s)){_r(e,a),s[0]===or&&e._tx===t&&e._committed===n&&await zr(e,t,s);return}if(await jr(e,s,t[0].signal),e._tx!==t||e._committed!==n){_r(e,a);return}for(let t of a){let n=e._cache.get(t.id);n?._flight&&n._flight===t._flight&&(e._cache.delete(t.id),gr(e,n))}Ir(e,a),_r(e,n,a)}async function Vr(e,t,n,r,i,a){let o=await Mr(e,t[2],t[3],[t[0],t[1],e._committed,void 0,i,n,a,r]);if(cr(o)){let n=o[0]===or&&e._tx===t;if((!n||o[1].options.reloadDocument)&&Pr(e,t),_r(e,t[3]),t[3]=[],!n)return;if(e._tx!==t){Pr(e,t);return}await zr(e,t,o);return}let s=o[1];if(e._tx===t&&await Fr(e,t),e._tx!==t){Pr(e,t),_r(e,s),Dr(e,o);return}let c=t[2],l=In(c,e.stores.resolvedLocation.get()),u=o[2];await e.startViewTransition(async()=>{if(e._tx===t&&await Fr(e,t),e._tx!==t){Pr(e,t),_r(e,s),Dr(e,o);return}let n=await e.startTransition(()=>{Pr(e,t),Lr(e,t,s,a),e._tx===t&&(e.emit({type:`onLoad`,...l}),e._tx===t&&e.emit({type:`onBeforeRouteMount`,...l}))},s);if(e._tx!==t){Dr(e,o);return}u?.length&&Br(e,t,s,u,o[3]).catch(console.error),e.batch(()=>{e.stores.resolvedLocation.set(c),e.stores.status.set(`idle`),e._tx===t&&e.emit({type:`onResolved`,...l}),n&&e._tx===t&&e.emit({type:`onRendered`,...l})}),e._tx===t&&(e._commitPromise?.resolve(),e._commitPromise=void 0)})}async function Hr(e,t){let n=e._tx,r=e.stores.resolvedLocation.get(),i=r??e.stores.location.get(),a=e.latestLocation,o=e._pendingLocation,s=o?.href===a.href?o._redirects??0:0,c=e._handoff,l=c?.[0](),u=new AbortController,d=e._preflight;if(e._preflight=u,l||c?.[1](),d?.abort(),!u.signal.aborted){let t=In(a,r);e.emit({type:`onBeforeNavigate`,...t}),u.signal.aborted||e.emit({type:`onBeforeLoad`,...t})}if(u.signal.aborted){await Rr(e,n);return}let f=i.href===a.href,p=u,m=e.matchRoutes(a,{_controller:u});vr(m);let h=l?c[1](m):void 0;if(h?p=l:l?.abort(),u.signal.aborted){_r(e,m),await Rr(e,n);return}e._preflight=void 0;let g,_=()=>Vr(e,y,f,()=>Nr(e,y),t?.sync,h),v=t?.sync?new Promise(e=>g=e):Promise.resolve().then(_),y=[p,s,a,m,Date.now(),v.then(()=>Rr(e,y))];if(e._tx=y,n){for(let t of e.stores.matches.get()){if(e._tx!==y)break;t.isFetching&&yr(e,t,!1)}n[0].abort(),_r(e,n[3],y[3],!0)}if(e._tx!==y){_r(e,y[3]),y[3]=[],g?.(),await Rr(e,y);return}e.batch(()=>{e.stores.status.set(`pending`),e.stores.location.set(a)}),(h||!e._committed.length&&m[0]?.status!==`success`&&!m.some(e=>e._notFound))&&Nr(e,y),g?.(_()),await y[5]}async function Ur(e,t){let n=e.buildLocation(t);for(let t=0;;t++){let r=e._committed,i=new AbortController,a,o,s;try{try{a=e.matchRoutes(n,{_controller:i}),vr(a),o=(e._preloads??=new Map).set(i,a),s=await Mr(e,n,a,[i,t,r,!0])}finally{o&&(o=o.delete(i),_r(e,a)),i.abort()}if(!cr(s))return s[1];if(!o||s.length<3)return;n=s[2]}catch(e){Ct(e)||console.error(e);return}}}var Wr=`Error preloading route! ☝️`;function Gr(e,t){if(e)return typeof e==`string`?e:e[t]}function Kr(e){return e?.scriptFormat??`module`}function qr(e,t,n){let r=Jr(t),i=Gr(n,`script`)??r.crossOrigin;return{...Kr(e)===`iife`?{rel:`preload`,as:`script`}:{rel:`modulepreload`},href:r.href,...i?{crossOrigin:i}:{}}}function Jr(e){return typeof e==`string`?{href:e,crossOrigin:void 0}:e}function Yr(e,t){if(t.length===0)return;if(t.length===1){e.push(t[0]);return}let n=new Set;for(let r of t){let t=JSON.stringify(r);n.has(t)||(n.add(t),e.push(r))}}function Xr(e){return typeof e==`string`?{href:e,crossOrigin:void 0}:e}function Zr(e,t,n,r){let i=nr(e),a=[],o=[];for(let e of i)for(let t of Array.isArray(e.scripts)?e.scripts:[]){if(!t)continue;let{children:e,...i}=t;a.push({tag:`script`,attrs:{...i,...r,nonce:n},children:e})}if(t)for(let e of i)for(let r of t.routes[e.routeId]?.scripts??[])o.push({tag:`script`,attrs:{...r.attrs,nonce:n},children:r.children});return[a,o]}function Qr([e,t],n){return n?[...n.before,...e,...t,n.boundary]:[...e,...t]}var $r=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e,this._branch=void 0;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=Gt:this.parentRoute||dt();let r=n?Gt:t?.path;r&&r!==`/`&&(r=pt(r));let i=t?.id||r,a=n?Gt:ft((this.parentRoute.id===`__root__`?``:this.parentRoute.id)+`/`+(i??``));r===`__root__`&&(r=`/`);let o=a===`__root__`?`/`:r===void 0?this.parentRoute.fullPath:ft(this.parentRoute.fullPath+`/`+r);this._path=r,this._id=a,this._fullPath=o,this._to=mt(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>Kt({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},ei=class extends $r{constructor(e){super(e)}},ti=class extends N.Component{constructor(...e){super(...e),this.state={error:0},this.reset=()=>{this.setState({error:0})}}static getDerivedStateFromProps(e,t){let n=e.getResetKey();return t.error&&t.resetKey!==n?{resetKey:n,error:0}:{resetKey:n}}static getDerivedStateFromError(e){return{error:[e]}}componentDidCatch(e,t){this.props.onCatch?.(e,t)}render(){let e=this.state.error;return e?N.createElement(this.props.errorComponent??ni,{error:e[0],reset:this.reset}):this.props.children}};function ni({error:e}){let[t,n]=N.useState(!1);return(0,P.jsxs)(`div`,{style:{padding:`.5rem`,maxWidth:`100%`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`.5rem`},children:[(0,P.jsx)(`strong`,{style:{fontSize:`1rem`},children:`Something went wrong!`}),(0,P.jsx)(`button`,{style:{appearance:`none`,fontSize:`.6em`,border:`1px solid currentColor`,padding:`.1rem .2rem`,fontWeight:`bold`,borderRadius:`.25rem`},onClick:()=>n(e=>!e),children:t?`Hide Error`:`Show Error`})]}),(0,P.jsx)(`div`,{style:{height:`.25rem`}}),t?(0,P.jsx)(`div`,{children:(0,P.jsx)(`pre`,{style:{fontSize:`.7em`,border:`1px solid red`,borderRadius:`.25rem`,padding:`.3rem`,color:`red`,overflow:`auto`},children:e?.message?(0,P.jsx)(`code`,{children:e.message}):null})}):null]})}var ri=()=>!0,ii=()=>!1;function ai({children:e,fallback:t=null}){return(0,P.jsx)(N.Fragment,{children:oi()?e:t})}function oi(e=!0){return N.useSyncExternalStore(si,ri,e?ii:ri)}function si(){return()=>{}}var ci=N.createContext(null);function li(e){return N.useContext(ci)}var ui=N.createContext(void 0),di=N.createContext(void 0);function fi({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0){n=e.nextSub;continue}for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}while(!0)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(!0)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function pi(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}var mi=[],hi=0,{link:gi,unlink:_i,propagate:vi,checkDirty:yi,shallowPropagate:bi}=fi({update(e){return e._update()},notify(e){mi[Si++]=e,e.flags&=-3},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=17,Ei(e))}}),xi=0,Si=0,Ci,wi=0;function Ti(e){try{++wi,e()}finally{--wi||Di()}}function Ei(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=_i(n,e)}function Di(){if(!(wi>0)){for(;xi<Si;){let e=mi[xi];mi[xi++]=void 0,e.notify()}xi=0,Si=0}}function Oi(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:+!n,get(){return Ci!==void 0&&gi(i,Ci,hi),i._snapshot},subscribe(e){let t=pi(e),n={current:!1},r=ki(()=>{i.get(),n.current?(Ci=void 0,t.next?.(i._snapshot)):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=Ci,o=t?.compare??Object.is;if(n)Ci=i,++hi,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=5);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{Ci=a,n&&(i.flags&=-5),Ei(i)}}};return n?(i.flags=17,i.get=function(){let e=i.flags;if(e&16||e&32&&yi(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&bi(e)}}else e&32&&(i.flags=e&-33);return Ci!==void 0&&gi(i,Ci,hi),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(vi(e),bi(e),Di())}},i}function ki(e){let t=()=>{let t=Ci;Ci=n,++hi,n.depsTail=void 0,n.flags=6;try{return e()}finally{Ci=t,n.flags&=-5,Ei(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:6,notify(){let e=this.flags;e&16||e&32&&yi(this.deps,this)?t():this.flags=2},stop(){this.flags=0,this.depsTail=void 0,Ei(this)}};return t(),n}var Ai=o((e=>{var t=d();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function u(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?u:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),ji=o(((e,t)=>{t.exports=Ai()})),Mi=o((e=>{var t=d(),n=ji();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,s=t.useEffect,c=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return u!==void 0&&u(t,n)?(o=e,t):(o=e,s=n)}var a=!1,o,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,r,u]);var p=a(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}})),Ni=o(((e,t)=>{t.exports=Mi()}))();function Pi(e,t){return e===t}function Fi(e,t=e=>e,n){let r=n?.compare??Pi,i=(0,N.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,N.useCallback)(()=>e.get(),[e]);return(0,Ni.useSyncExternalStoreWithSelector)(i,a,a,t,r)}var Ii={};function Li(e,t){let n=N.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=Ye(n.current,i):i}}function F(e){let t=li(),n=N.useContext(e.from?di:ui),r=e.from??n,i=t.stores.getMatchStore(r),a=Li(e,t),o=Fi(i,e=>e?a(e):Ii);if(o!==Ii)return o;(e.shouldThrow??!0)&&dt()}function I(e){return F({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function Ri(e){let{select:t,...n}=e;return F({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function zi(e){return F({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function Bi(e){return F({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function Vi(e){let t=li();return N.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function Hi(e){return F({...e,select:t=>e.select?e.select(t.context):t.context})}function Ui(...e){let t=N.useRef(e),n=t.current;return e.forEach((e,t)=>{Ze(n[t],e,!1,!0)||(n[t]=e)}),t.current}function Wi(e,t){e.preloadRoute(t).catch(e=>{console.warn(e),console.warn(Wr)})}var Gi={compare:(e,t)=>e[0]===t[0]&&e[1]===t[1]};function Ki(e,t){let n=typeof e==`string`&&nt(e);if(n)return t.has(n)?e:null}function qi(e,t,n,r,i){let a=gt(e.pathname,r),o=gt(t.pathname,r);return(n?.exact?a!==o:!(a.startsWith(o)&&(a.length===o.length||a[o.length]===`/`)))||(n?.includeSearch??!0)&&!Ze(e.search,t.search,!n?.exact,n?.explicitUndefined)?!1:!n?.includeHash||i&&e.hash===t.hash}function Ji(e,t,n){let r=li(),i=N.useRef(null),a=N.useCallback(e=>{if(i.current=e,typeof t==`function`)return t(e);t&&(t.current=e)},[t]),{activeOptions:o,to:s,preload:c,preloadDelay:l,hashScrollIntoView:u,replace:d,startTransition:f,resetScroll:p,viewTransition:m,ignoreBlocker:h,disabled:g,target:_,onClick:v,onBlur:y,onFocus:b,onMouseEnter:x,onMouseLeave:S,onTouchStart:C}=e,w=oi(!!o?.includeHash),[T,E,ee]=Ui(e.search,e.params,o),[D,te]=N.useMemo(()=>[e,{...e}],[r,e.from,e._fromLocation,e.hash,e.to,T,E,e.state,e.mask,e.unsafeRelative]),ne=N.useMemo(()=>{let e=Ki(s,r.protocolAllowlist);if(e!==void 0){let t=[e??void 0];return()=>t}let t,n;return e=>{D._fromLocation||(te._fromLocation=e);let i=r.buildLocation(te),a=ra(i,r,g);return(!t||t[0]!==a)&&(t=[a,!(g||a&&!nt(a))&&void 0],n=[a,!0]),t[1]!==void 0&&qi(e,i,ee,r.basepath,w)?n:t}},[ee,g,w,D,te,r,s]),[re,ie]=Fi(r.stores.location,ne,Gi),O=ie===void 0&&re,ae=g||re===void 0,oe=N.useRef(!1),k=e.reloadDocument||O||ae?!1:c??r.options.defaultPreload,A=l??r.options.defaultPreloadDelay??0,se=N.useCallback(e=>{let t=e?.isIntersecting;if(!(t??k===`intent`)){t===!1&&ta(i);return}if(!A){Wi(r,D);return}ea.has(i)||ea.set(i,setTimeout(()=>{ea.delete(i),Wi(r,D)},A))},[r,D,i,k,A]);N.useEffect(()=>{if(!k)return;k===`render`&&!oe.current&&(oe.current=!0,Wi(r,D));let e=!0,t;return k===`viewport`&&i.current&&typeof IntersectionObserver==`function`&&(t=new IntersectionObserver(t=>{e&&se(t.pop())},{rootMargin:`100px`}),t.observe(i.current)),()=>{e=!1,t?.disconnect(),ta(i)}},[r,D,k,se,i]);let ce=Qi(e,n);if(ce.ref=t?a:i,O)return ce.href=O,ce;let le=e=>{let t=_??e.currentTarget.getAttribute(`target`);!ae&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!t||t===`_self`)&&e.button===0&&(e.preventDefault(),r.navigate({...D,replace:d,resetScroll:p,hashScrollIntoView:u,startTransition:f,viewTransition:m,ignoreBlocker:h}))},ue=()=>{k===`intent`&&Wi(r,D)},j=()=>{k===`intent`&&ta(i)};return ce.onClick=na(v,le),ce.onBlur=na(y,j),ce.onFocus=na(b,se),ce.onMouseEnter=na(x,se),ce.onMouseLeave=na(S,j),ce.onTouchStart=na(C,ue),$i(ce,e,ie,re,ae,n)}var Yi={},Xi={className:`active`},Zi=new Set([`to`,`params`,`search`,`hash`,`state`,`mask`,`from`,`unsafeRelative`,`_fromLocation`,`reloadDocument`,`preload`,`preloadDelay`,`preloadIntentProximity`,`hashScrollIntoView`,`replace`,`startTransition`,`resetScroll`,`viewTransition`,`ignoreBlocker`,`activeProps`,`inactiveProps`,`activeOptions`,`_asChild`]);function Qi(e,t){let n={};for(let r in e)Zi.has(r)||r===`type`&&t!==void 0||r===`disabled`&&t===`a`||(n[r]=e[r]);return n}function $i(e,t,n,r,i,a){let{activeProps:o,inactiveProps:s,className:c,style:l,target:u}=t,d=We(n?o:s,{})??(n?Xi:Yi);Object.assign(e,d),e.href=r,a!==`a`&&(e.disabled=i),e.target=u;let f=d.style;(l||f)&&(e.style=l&&f?{...l,...f}:l||f);let p=d.className;return(c||p)&&(e.className=c?p?`${c} ${p}`:c:p),i&&(e.role=`link`,e[`aria-disabled`]=!0),n&&(e[`data-status`]=`active`,e[`aria-current`]=`page`),e}var ea=new WeakMap,ta=e=>{clearTimeout(ea.get(e)),ea.delete(e)},na=(e,t)=>e?n=>n.defaultPrevented||(e(n),n.defaultPrevented||t(n)):t;function ra(e,t,n){if(n)return;let r=e.maskedLocation??e,i=r.external?r.publicHref:t.history.createHref(r.publicHref)||`/`;if(!((r.external||i!==r.publicHref)&&it(i,t.protocolAllowlist)))return i}var L=N.memo(N.forwardRef((e,t)=>{let n=e._asChild||`a`,r=Ji(e,t,n),i=typeof e.children==`function`?e.children({isActive:r[`data-status`]===`active`}):e.children;return N.createElement(n,r,i)}),ia);function ia(e,t){let n=0;for(let r in t)if(n++,e[r]!==t[r]&&(!Zi.has(r)||!Ze(e[r],t[r],!1,!0)))return!1;for(let t in e)n--;return n===0}var aa=class extends $r{constructor(e){super(e),this.useMatch=e=>F({...e,from:this.id}),this.useRouteContext=e=>Hi({...e,from:this.id}),this.useSearch=e=>Bi({...e,from:this.id}),this.useParams=e=>zi({...e,from:this.id}),this.useLoaderDeps=e=>Ri({...e,from:this.id}),this.useLoaderData=e=>I({...e,from:this.id}),this.useNavigate=()=>Vi({from:this.fullPath}),this.Link=N.forwardRef((e,t)=>(0,P.jsx)(L,{ref:t,from:this.fullPath,...e}))}};function oa(e){return new aa(e)}function sa(){return e=>la(e)}var ca=class extends ei{constructor(e){super(e),this.useMatch=e=>F({...e,from:this.id}),this.useRouteContext=e=>Hi({...e,from:this.id}),this.useSearch=e=>Bi({...e,from:this.id}),this.useParams=e=>zi({...e,from:this.id}),this.useLoaderDeps=e=>Ri({...e,from:this.id}),this.useLoaderData=e=>I({...e,from:this.id}),this.useNavigate=()=>Vi({from:this.fullPath}),this.Link=N.forwardRef((e,t)=>(0,P.jsx)(L,{ref:t,from:this.fullPath,...e}))}};function la(e){return new ca(e)}function ua(e){return e=>{let t=oa(e);return t.isRoot=!1,t}}function da(e){let t=li(),n=`not-found-${Fi(t.stores.location,e=>e.pathname)}-${Fi(t.stores.status)}`;return(0,P.jsx)(ti,{getResetKey:()=>n,onCatch:(t,n)=>{if(Ct(t))e.onCatch?.(t,n);else throw t},errorComponent:({error:t})=>{if(Ct(t))return e.fallback?.(t);throw t},children:e.children})}function fa(){return(0,P.jsx)(`p`,{children:`Not Found`})}function pa(e,t,n){return t.options.notFoundComponent?(0,P.jsx)(t.options.notFoundComponent,{...n}):e.options.defaultNotFoundComponent?(0,P.jsx)(e.options.defaultNotFoundComponent,{...n}):(0,P.jsx)(fa,{})}function ma(e,t){let n=t?.options.pendingComponent??e.options.defaultPendingComponent;return n?(0,P.jsx)(n,{}):null}var ha=(e,t)=>e[0]===t[0]&&e[1]===t[1],ga=(e,t,n)=>!t.isRoot||t.options.shellComponent||t.options.wrapInSuspense||n===!1||n===`data-only`||!e.ssr,_a=N.memo(function({routeId:e}){let t=li();return(0,P.jsx)(va,{router:t,match:Fi(t.stores.getMatchStore(e))})});function va({router:e,match:t}){let n=e.routesById[t.routeId],r=ma(e,n),i=n.options.errorComponent??e.options.defaultErrorComponent,a=n.options.onCatch??e.options.defaultOnCatch,o=n.isRoot?n.options.notFoundComponent??e.options.notFoundRoute?.options.component:n.options.notFoundComponent,s=t.ssr===!1||t.ssr===`data-only`,c=ga(e,n,t.ssr)&&(n.options.wrapInSuspense??r??(n.options.errorComponent?.preload||s)),l=(0,P.jsx)(ya,{match:t});s&&(l=(0,P.jsx)(ai,{fallback:r,children:l})),o&&(l=(0,P.jsx)(da,{fallback:e=>{if(e.routeId??=t.routeId,e.routeId!==t.routeId)throw e;return N.createElement(o,e)},children:l})),i&&(l=(0,P.jsx)(ti,{getResetKey:()=>t,errorComponent:i,onCatch:(e,n)=>{if(Ct(e))throw e.routeId??=t.routeId,e;a?.(e,n)},children:l})),c&&(l=(0,P.jsx)(N.Suspense,{fallback:r,children:l}));let u=n.isRoot?n.options.shellComponent:void 0;return(0,P.jsx)(ui.Provider,{value:t.routeId,children:u?(0,P.jsxs)(u,{children:[l,null]}):(0,P.jsxs)(P.Fragment,{children:[l,null]})})}var ya=N.memo(function({match:e}){let t=li(),n=e.routeId,r=t.routesById[n],i=N.useMemo(()=>{let i=(r.options.remountDeps??t.options.defaultRemountDeps)?.({routeId:n,loaderDeps:e.loaderDeps,params:e._strictParams,search:e._strictSearch});return i?JSON.stringify(i):void 0},[n,e.loaderDeps,e._strictParams,e._strictSearch,r.options.remountDeps,t.options.defaultRemountDeps]),a=N.useMemo(()=>{let e=r.options.component??t.options.defaultComponent;return e?(0,P.jsx)(e,{},i):(0,P.jsx)(ba,{})},[i,r.options.component,t.options.defaultComponent]);if(e.status===`pending`){if(t.ssr&&!ga(t,r,e.ssr))return a;if(t._tx)throw t._tx[5];return ma(t,r)}if(e.status===`notFound`)return pa(t,r,e.error);if(e.status===`error`)throw e.error;return a}),ba=N.memo(function(){let e=li(),t=N.useContext(ui),n,r,i;{let a=e.stores.getMatchStore(t);[n,r]=Fi(a,e=>[!!e._notFound,e.error],{compare:ha}),i=Fi(e.stores.ids,e=>e[e.indexOf(t)+1])}if(n)return pa(e,e.routesById[t],r);if(!i)return null;let a=(0,P.jsx)(_a,{routeId:i});return t===`__root__`?(0,P.jsx)(N.Suspense,{fallback:ma(e),children:a}):a});function xa(e,t){let n=e[1];e.length=0,n?.(t)}function Sa({t:e}){let t=li(),n=t._rendered??=[];return t.startTransition=(r,i)=>new Promise(a=>{xa(n,!1),n.push(i,a),e(t),N.startTransition(r)}),He(()=>{let e=t.history.subscribe(t.load);t.updateLatestLocation();let r=t.latestLocation,i=t.buildLocation({to:r.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});if(mt(r.publicHref)!==mt(i.publicHref))return t.commitLocation({...i,replace:!0,ignoreBlocker:!0}),e;let a=t.stores.resolvedLocation.get();return a?.href===r.href&&a.state.__TSR_key===r.state.__TSR_key?n.push(t.stores.matches.get(),e=>{e&&t.emit({type:`onRendered`,...In(a,a)})}):t._tx||t.load({sync:!0}).catch(console.error),e},[t,t.history]),null}function Ca(){let e=li(),t=e.routesById[Gt],n=ma(e,t),r=(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Sa,{t:N.useState()[1]}),e.ssr?(0,P.jsx)(wa,{}):(0,P.jsx)(N.Suspense,{fallback:n,children:(0,P.jsx)(wa,{})})]});return e.options.InnerWrap?(0,P.jsx)(e.options.InnerWrap,{children:r}):r}function wa(){let e=li(),t=e._rendered,n=Fi(e.stores.matches,e=>t[0]??e),r=n[0],i=r?.routeId;He(()=>{t[0]===n&&xa(t,!0)},[t,n]);let a=i?(0,P.jsx)(_a,{routeId:i}):null;return e.options.disableGlobalCatchBoundary?a:(0,P.jsx)(ti,{getResetKey:()=>r,onCatch:void 0,children:a})}var Ta=e=>({createMutableStore:Oi,createReadonlyStore:Oi,batch:Ti}),Ea=e=>new Da(e),Da=class extends Bn{constructor(e){super(e,Ta)}};function Oa({router:e,children:t,...n}){Ke(n)&&e.update({...e.options,...n,context:{...e.options.context,...n.context}});let r=(0,P.jsx)(ci.Provider,{value:e,children:t});return e.options.Wrap?(0,P.jsx)(e.options.Wrap,{children:r}):r}function ka({router:e,...t}){return(0,P.jsx)(Oa,{router:e,...t,children:(0,P.jsx)(Ca,{})})}function Aa(e){let t=li({warn:e?.router===void 0}),n=e?.router||t;return Fi(n.stores.__store,Li(e,n))}var ja=`data-tsr-inline-css`;function Ma(e,t){if(t)for(let[n,r]of Object.entries(t))n!==`suppressHydrationWarning`&&r!==void 0&&r!==!1&&e.setAttribute(n,typeof r==`boolean`?``:String(r))}function Na(e){let{attrs:t,children:n,nonce:r,preventScriptHoist:i}=e,a=N.useMemo(()=>n===void 0?void 0:{__html:n},[n]);switch(e.tag){case`title`:return(0,P.jsx)(`title`,{...t,suppressHydrationWarning:!0,children:n});case`meta`:return(0,P.jsx)(`meta`,{...t,suppressHydrationWarning:!0});case`link`:return(0,P.jsx)(`link`,{...t,precedence:t?.precedence??(t?.rel===`stylesheet`?`default`:void 0),nonce:r,suppressHydrationWarning:!0});case`style`:return e.inlineCss&&({}.TSS_INLINE_CSS_ENABLED===`true`||{}.TSS_INLINE_CSS_ENABLED===void 0&&!1)?(0,P.jsx)(Pa,{attrs:t,nonce:r,children:n}):(0,P.jsx)(`style`,{...t,dangerouslySetInnerHTML:a,nonce:r});case`script`:return(0,P.jsx)(Fa,{attrs:t,preventScriptHoist:i,children:n});default:return null}}function Pa({attrs:e,children:t,nonce:n}){let r=t===void 0,[i]=N.useState(()=>{if(!(!r||typeof document>`u`))return document.querySelector(`style[${ja}]`)?.textContent??void 0}),a=r?i??``:t??``,o=N.useMemo(()=>({__html:a}),[a]);return(0,P.jsx)(`style`,{...e,[ja]:``,dangerouslySetInnerHTML:o,nonce:n,suppressHydrationWarning:!0})}function Fa({attrs:e,children:t,preventScriptHoist:n}){li();let r=oi(),i=N.useMemo(()=>t===void 0?void 0:{__html:t},[t]),a=typeof e?.type==`string`&&e.type!==``&&e.type!==`text/javascript`&&e.type!==`module`;if(N.useEffect(()=>{if(!a){if(e?.src){let t=document.createElement(`a`);t.href=e.src;let n=t.href;for(let e of document.scripts)if(e.src===n)return;let r=document.createElement(`script`);return Ma(r,e),document.head.appendChild(r),()=>r.remove()}if(typeof t==`string`){let n=typeof e?.type==`string`?e.type:`text/javascript`,r=typeof e?.nonce==`string`?e.nonce:void 0;for(let e of document.scripts){if(e.hasAttribute(`src`))continue;let i=e.getAttribute(`type`)??`text/javascript`,a=e.getAttribute(`nonce`)??void 0;if(e.textContent===t&&i===n&&a===r)return}let i=document.createElement(`script`);return i.textContent=t,Ma(i,e),document.head.appendChild(i),()=>i.remove()}}},[e,t,a]),a&&typeof t==`string`)return(0,P.jsx)(`script`,{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:i});if(!r){if(e?.src)return(0,P.jsx)(`script`,{...e,suppressHydrationWarning:!0});if(typeof t==`string`)return(0,P.jsx)(`script`,{...e,dangerouslySetInnerHTML:i,suppressHydrationWarning:!0})}return null}function Ia(e,t,n,r){n=nr(n);let i=n.map(e=>e.meta).filter(e=>e!==void 0),a=[],o={},s;for(let e=i.length-1;e>=0;e--){let n=i[e];for(let e=n.length-1;e>=0;e--){let r=n[e];if(r)if(r.title)s||={tag:`title`,children:r.title};else if(`script:ld+json`in r)try{let e=JSON.stringify(r[`script:ld+json`]);a.push({tag:`script`,attrs:{type:`application/ld+json`},children:st(e)})}catch{}else{let e=r.name??r.property;if(e){if(o[e])continue;o[e]=!0}a.push({tag:`meta`,attrs:{...r,nonce:t}})}}}s&&a.push(s),t&&a.push({tag:`meta`,attrs:{property:`csp-nonce`,content:t}}),a.reverse();let c=n.flatMap(e=>e.links??[]).filter(e=>e!==void 0).map(e=>({tag:`link`,attrs:{...e,nonce:t}})),l=e.ssr?.manifest,u=[];l&&(n.forEach(e=>{(l.routes[e.routeId]?.css)?.forEach(e=>{let n=Xr(e);u.push({tag:`link`,attrs:{rel:`stylesheet`,...n,crossOrigin:Gr(r,`stylesheet`)??n.crossOrigin,suppressHydrationWarning:!0,nonce:t}})})}),l.inlineStyle&&u.push({tag:`style`,attrs:{...l.inlineStyle.attrs,nonce:t},children:l.inlineStyle.children,inlineCss:!0}));let d=[];l&&n.forEach(e=>{l.routes[e.routeId]?.preloads?.forEach(e=>{d.push({tag:`link`,attrs:{...qr(l,e,r),nonce:t}})})});let f=n.flatMap(e=>e.styles??[]).filter(e=>e!==void 0).map(({children:e,...n})=>({tag:`style`,attrs:{...n,nonce:t},children:e})),p=n.flatMap(e=>e.headScripts??[]).filter(e=>e!==void 0).map(({children:e,...n})=>({tag:`script`,attrs:{...n,nonce:t},children:e})),m=[];return Yr(m,a),m.push(...d),Yr(m,c),m.push(...u),Yr(m,f),Yr(m,p),m}var La=e=>{let t=li(),n=t.options.ssr?.nonce,r=N.useCallback(r=>Ia(t,n,r,e),[e,n,t]);return Fi(t.stores.matches,r,{compare:Ze})};function Ra(e){let t=La(e.assetCrossOrigin),n=li().options.ssr?.nonce;return(0,P.jsx)(P.Fragment,{children:t.map(e=>(0,N.createElement)(Na,{...e,key:`tsr-meta-${JSON.stringify(e)}`,nonce:n}))})}var za={suppressHydrationWarning:!0},Ba=()=>{let e=li(),t=e.options.ssr?.nonce,n=n=>{let r=Zr(n,e.ssr?.manifest,t,za);for(let e of r[1])if(typeof e.attrs?.src==`string`){let t=e;t.preventScriptHoist=!0}return r};return Va(Fi(e.stores.matches,e=>Qr(n(e)),{compare:Ze}))};function Va(e){return(0,P.jsx)(P.Fragment,{children:e.map((e,t)=>(0,N.createElement)(Na,{...e,key:`tsr-scripts-${e.tag}-${t}`}))})}var Ha=_(),Ua=`https://www.paypal.com/paypalme/AnesSkenderovic/`;function Wa(e){return e.reduce((e,t)=>e+Math.round(t.priceValue*100)*t.quantity,0)}function Ga(e){let t=Wa(e);return t>0?`${Ua}${(t/100).toFixed(2)}EUR`:null}function Ka(e,t){return e.find(e=>e.id===t.id)?e.map(e=>e.id===t.id?{...e,quantity:Math.min(e.maxQuantity,e.quantity+t.quantity)}:e):[...e,{...t,quantity:Math.min(t.maxQuantity,Math.max(1,t.quantity))}]}var qa=(0,N.createContext)(null);function Ja({children:e}){let[t,n]=(0,N.useState)([]);return(0,P.jsx)(qa.Provider,{value:{items:t,addItem:e=>n(t=>Ka(t,e)),changeQuantity:(e,t)=>n(n=>n.map(n=>n.id===e?{...n,quantity:Math.min(n.maxQuantity,Math.max(1,t))}:n)),removeItem:e=>n(t=>t.filter(t=>t.id!==e)),clearCart:()=>n([])},children:e})}function Ya(){let e=(0,N.useContext)(qa);if(!e)throw Error(`CartProvider is required`);return e}var Xa=``+new URL(`styles-MNhN9BS-.css`,import.meta.url).href;function Za(e,t={}){if(typeof window>`u`)return;window.__lovableEvents?.captureException?.(e,{source:`react_error_boundary`,route:window.location.pathname,...t},{mechanism:`react_error_boundary`,handled:!1,severity:`error`});let n=e instanceof Error?e.stack:void 0;window.__lovableReportRuntimeError?.({message:$a(e),...n!==void 0&&{stack:n},filename:window.location.pathname})}var Qa=2e3;function $a(e){if(e instanceof Response)return`Response ${e.status}${e.url?` at ${e.url}`:``}`;if(e instanceof Error)return e.message;if(typeof e==`string`)return e;let{message:t}=e??{};if(typeof t==`string`&&t.length>0)return t;try{return JSON.stringify(e)?.slice(0,Qa)??String(e)}catch{return String(e)}}var eo=`modulepreload`,to=function(e,t){return new URL(e,t).href},no={},ro=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=to(t,n),t=s(t),t in no)return;no[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:eo,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function io(){return(0,P.jsx)(`div`,{className:`flex min-h-screen items-center justify-center bg-background px-4`,children:(0,P.jsxs)(`div`,{className:`max-w-md text-center`,children:[(0,P.jsx)(`h1`,{className:`text-7xl font-bold text-foreground`,children:`404`}),(0,P.jsx)(`h2`,{className:`mt-4 text-xl font-semibold text-foreground`,children:`Page introuvable`}),(0,P.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:`La page que vous cherchez n'existe pas ou a été déplacée.`}),(0,P.jsx)(`div`,{className:`mt-6`,children:(0,P.jsx)(L,{to:`/`,className:`inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,children:`Retour à l'accueil`})})]})})}function ao({error:e,reset:t}){console.error(e);let n=li();return(0,N.useEffect)(()=>{Za(e,{boundary:`tanstack_root_error_component`})},[e]),(0,P.jsx)(`div`,{className:`flex min-h-screen items-center justify-center bg-background px-4`,children:(0,P.jsxs)(`div`,{className:`max-w-md text-center`,children:[(0,P.jsx)(`h1`,{className:`text-xl font-semibold tracking-tight text-foreground`,children:`Cette page n'a pas pu se charger`}),(0,P.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:`Un problème est survenu de notre côté. Essayez de rafraîchir la page ou revenez à l'accueil.`}),(0,P.jsxs)(`div`,{className:`mt-6 flex flex-wrap justify-center gap-2`,children:[(0,P.jsx)(`button`,{onClick:()=>{n.invalidate(),t()},className:`inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,children:`Réessayer`}),(0,P.jsx)(`a`,{href:`/`,className:`inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,children:`Retour à l'accueil`})]})]})})}var oo=sa()({head:()=>({meta:[{charSet:`utf-8`},{name:`viewport`,content:`width=device-width, initial-scale=1`},{title:`Anes Shop`},{name:`description`,content:`Boutique Anes Shop`},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary_large_image`}],links:[{rel:`stylesheet`,href:Xa},{rel:`icon`,href:`/favicon.svg`,type:`image/svg+xml`},{rel:`preconnect`,href:`https://fonts.googleapis.com`},{rel:`stylesheet`,href:`https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Orbitron:wght@800;900&display=swap`}]}),shellComponent:so,component:lo,notFoundComponent:io,errorComponent:ao});function so({children:e}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ra,{}),e,(0,P.jsx)(Ba,{})]})}function co(){return(0,N.useEffect)(()=>{let e=null,t=0;return ro(async()=>{let{default:e}=await import(`./lenis-Urn-SVCX.js`);return{default:e}},[],import.meta.url).then(({default:n})=>{e=new n({lerp:.12,wheelMultiplier:1,smoothWheel:!0});let r=n=>{e?.raf(n),t=requestAnimationFrame(r)};t=requestAnimationFrame(r)}),()=>{cancelAnimationFrame(t),e?.destroy()}},[]),null}function lo(){let{queryClient:e}=oo.useRouteContext();return(0,P.jsx)(Ve,{client:e,children:(0,P.jsxs)(Ja,{children:[(0,P.jsx)(co,{}),(0,P.jsx)(ba,{})]})})}var uo=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),fo=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),po=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),mo=e=>{let t=po(e);return t.charAt(0).toUpperCase()+t.slice(1)},ho={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},R=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},go=(0,N.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,N.createElement)(`svg`,{ref:c,...ho,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:uo(`lucide`,i),...!a&&!R(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,N.createElement)(e,t)),...Array.isArray(a)?a:[a]])),z=(e,t)=>{let n=(0,N.forwardRef)(({className:n,...r},i)=>(0,N.createElement)(go,{ref:i,iconNode:t,className:uo(`lucide-${fo(mo(e))}`,`lucide-${e}`,n),...r}));return n.displayName=mo(e),n},_o=z(`arrow-down`,[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]),vo=z(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),yo=z(`chevrons-down`,[[`path`,{d:`m7 6 5 5 5-5`,key:`1lc07p`}],[`path`,{d:`m7 13 5 5 5-5`,key:`1d48rs`}]]),bo=z(`chevrons-right`,[[`path`,{d:`m6 17 5-5-5-5`,key:`xnjwq`}],[`path`,{d:`m13 17 5-5-5-5`,key:`17xmmf`}]]),xo=z(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),So=z(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Co=z(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),wo=z(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),To=z(`rocket`,[[`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,key:`qeys4`}],[`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,key:`u4xsad`}],[`path`,{d:`M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,key:`676m9`}],[`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,key:`92ym6u`}]]),Eo=z(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Do=z(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Oo=z(`shopping-cart`,[[`circle`,{cx:`8`,cy:`21`,r:`1`,key:`jimo8o`}],[`circle`,{cx:`19`,cy:`21`,r:`1`,key:`13723u`}],[`path`,{d:`M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,key:`9zh506`}]]),ko=z(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ao=z(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),jo={accounts:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="2"></circle><path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"></path><path stroke-linecap="round" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.47.47.751 1.054.92 1.828M19 12h-4m4-3h-5m5 6h-3"></path></g></svg>`,social:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="9.001" cy="6" r="4" fill="currentColor"></circle><ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></ellipse><path fill="currentColor" d="M21 17c0 1.657-2.036 3-4.521 3c.732-.8 1.236-1.805 1.236-2.998c0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6a3 3 0 0 1-4.029 2.82A5.7 5.7 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001"></path></svg>`,games:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></path></svg>`,generators:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path stroke-linecap="round" d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"></path></g></svg>`,methods:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.007 3.447a.75.75 0 0 1 .046 1.06L5.705 9.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.553-1.257l5.5-6a.75.75 0 0 1 1.06-.046m10.68 10.251A.75.75 0 0 0 20 13.25H4a.75.75 0 0 0 0 1.5h14.295l-4.348 4.743a.75.75 0 0 0 1.106 1.014l5.5-6a.75.75 0 0 0 .133-.809" clip-rule="evenodd"></path></svg>`,spoofers:`<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path fill="currentColor" d="M378.625,209.465c-6.531-38.344-13.672-80-15.844-91.844c-5.313-28.906-43.375-45.063-71.656-24.234 c-14.828,10.938-28.094,11.719-35.125,11.719s-14.828,1.563-35.125-11.719c-29.391-19.219-66.344-4.672-71.656,24.234 c-2.172,11.844-9.313,53.5-15.844,91.844C53.906,219.418,0,238.778,0,261.012c0,32.438,114.625,58.719,256,58.719 c141.391,0,256-26.281,256-58.719C512,238.778,458.094,219.418,378.625,209.465z"></path> <path fill="currentColor" d="M109.125,330.45l7.547,86.515c39.563,6.719,79.734,10.219,119.703,11.078L256,401.278l19.625,26.765 c39.969-0.859,80.141-4.359,119.703-11.078l7.547-86.515c-48.375,9.359-97.906,13.5-146.875,13.5 C207.016,343.95,157.516,339.809,109.125,330.45z M186.688,401.997c-33.469-1.578-35.563-41.766-35.563-41.766l75.125,14.672 C226.25,374.903,220.156,403.59,186.688,401.997z M360.875,360.231c0,0-2.094,40.188-35.563,41.766 c-33.469,1.594-39.563-27.094-39.563-27.094L360.875,360.231z"></path></g></svg>`,vpn:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path><path fill="currentColor" fill-rule="evenodd" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v1.303q-.34.023-.642.064c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h8.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117h-8.11q-.634 0-1.195.003zm-1.942 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.755-.103 1.756-.103 3.191s.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103" clip-rule="evenodd"></path></svg>`,boosting:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="level-discord-boost"><path fill="currentColor" d="M12.4801 1.42383C12.202 1.19206 11.798 1.19206 11.5199 1.42383L5.51986 6.42383C5.34887 6.56633 5.25 6.77742 5.25 7V17C5.25 17.2226 5.34887 17.4337 5.51986 17.5762L11.5199 22.5762C11.798 22.8079 12.202 22.8079 12.4801 22.5762L18.4801 17.5762C18.6511 17.4337 18.75 17.2226 18.75 17V7C18.75 6.77742 18.6511 6.56633 18.4801 6.42383L12.4801 1.42383Z"></path><path fill="#ECEFF1" fill-rule="evenodd" d="M11.4932 5.44713C11.7799 5.18429 12.2201 5.18429 12.5068 5.44713L15.5068 8.19713C15.6618 8.33919 15.75 8.53977 15.75 8.75V15.25C15.75 15.4602 15.6618 15.6608 15.5068 15.8029L12.5068 18.5529C12.2201 18.8157 11.7799 18.8157 11.4932 18.5529L8.49321 15.8029C8.33823 15.6608 8.25 15.4602 8.25 15.25V8.75C8.25 8.53977 8.33823 8.33919 8.49321 8.19713L11.4932 5.44713ZM9.75 9.07993V14.9201L12 16.9826L14.25 14.9201V9.07993L12 7.01743L9.75 9.07993Z" clip-rule="evenodd"></path></svg>`,fivem:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 38 42"><defs><clipPath id="_clipPath_BAzcIs4sNYKBPKsfFQGip2yw4Z6wuiCY"><rect width="38" height="42"></rect></clipPath></defs><g clip-path="url(#_clipPath_BAzcIs4sNYKBPKsfFQGip2yw4Z6wuiCY)"><path d=" M 0 42 L 4 31 L 16 19 L 10 42 L 0 42 Z " fill="currentColor"></path><path d=" M 20 15 L 28 42 L 38 42 L 27 9 L 20 15 Z " fill="currentColor"></path><path d=" M 11.059 11.164 L 15 0 L 23 0 L 11.059 11.164 Z " fill="currentColor"></path><path d=" M 5.731 26.002 L 18 14 L 18 12 L 6.58 23.667 L 5.731 26.002 Z " fill="currentColor"></path><path d=" M 10.142 13.429 L 8 19 L 24.724 2.725 L 23.818 0.178 L 10.142 13.429 Z " fill="currentColor"></path><path d=" M 18.932 11.055 L 19.377 12.626 L 25.941 6.178 L 25.385 4.702 L 18.932 11.055 Z " fill="currentColor"></path></g></svg>`,"counter-strike-2":`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 466 198"><defs><clipPath id="_clipPath_uQbl1D2NzSbJgKjIF5NsNIst79bLumAV"><rect width="466" height="198"></rect></clipPath></defs><g clip-path="url(#_clipPath_uQbl1D2NzSbJgKjIF5NsNIst79bLumAV)"><path d=" M 61.416 88.336 L 47.504 81.764 L 152.958 81.764 C 157.279 81.764 161.183 79.189 162.88 75.219 L 171.767 54.423 L 69.347 54.411 C 52.112 54.411 36.531 64.651 29.712 80.463 L 1.747 146.085 C -4.31 160.302 6.13 176.083 21.599 176.083 L 112.65 176.083 C 116.972 176.083 120.876 173.507 122.573 169.538 L 131.625 148.359 L 35.792 148.359 L 61.416 88.34 L 61.416 88.336 L 61.416 88.336 Z " fill="currentColor"></path><path d=" M 355.15 54.415 C 337.826 54.415 322.183 64.763 315.423 80.699 L 310.908 91.344 L 307.684 98.931 C 301.643 113.145 312.087 128.906 327.544 128.906 L 335.476 128.906 L 400.22 128.906 L 391.906 148.363 L 293.738 148.363 C 289.424 148.363 285.528 150.927 283.827 154.885 L 274.705 176.087 L 385.559 176.087 C 402.845 176.087 418.46 165.785 425.244 149.904 L 433.369 130.887 C 439.445 116.67 429.001 100.874 413.528 100.874 L 340.922 100.874 L 346.252 88.348 L 332.685 81.772 L 447.222 81.772 C 451.551 81.772 455.459 79.189 457.152 75.212 L 466 54.419 L 355.154 54.419 L 355.15 54.415 L 355.15 54.415 Z " fill="currentColor"></path><path d=" M 322.953 26.687 C 322.856 26.687 322.775 26.606 322.775 26.51 C 322.783 25.838 322.802 23.459 322.806 23.011 C 322.806 22.394 322.373 21.895 321.832 21.895 C 321.519 21.895 321.24 22.065 321.059 22.328 C 320.966 22.459 319.857 24.077 319.173 25.069 C 319.134 25.123 319.076 25.154 319.01 25.154 L 264.965 25.154 C 264.753 25.154 264.579 24.984 264.575 24.772 L 264.467 23.313 C 264.463 23.065 264.687 22.872 264.93 22.919 L 267.694 23.181 C 267.934 23.201 268.15 23.046 268.208 22.814 L 270.222 14.656 C 270.265 14.466 270.16 14.273 269.979 14.208 L 268.108 13.509 C 268 13.466 267.918 13.378 267.891 13.266 C 267.551 11.845 264.784 2.346 251.444 0.222 C 244.954 -0.809 240.703 1.96 238.434 4.168 C 237.425 5.149 236.594 6.296 235.944 7.547 L 235.148 9.3 C 235.079 9.435 234.769 11.08 234.769 11.231 L 235.191 19.328 C 235.191 19.606 235.322 19.864 235.539 20.034 L 238.465 21.297 L 236.849 23.973 C 236.795 24.17 236.617 24.305 236.412 24.305 C 236.412 24.305 232.972 24.394 231.275 24.463 C 228.094 24.591 221.009 28.471 215.787 39.63 C 210.657 50.588 209.815 52.415 209.815 52.415 C 209.707 52.623 209.486 52.755 209.25 52.743 L 204.485 52.758 C 204.191 52.758 203.878 52.994 203.754 53.26 L 196.344 74.239 C 196.221 74.505 196.294 74.907 196.487 75.131 L 201.659 78.362 C 201.802 78.482 201.864 78.671 201.821 78.849 L 199.12 86.822 C 199.085 87 199.019 87.174 198.926 87.332 L 195.343 90.487 C 195.25 90.568 195.165 90.668 195.115 90.78 C 195.088 90.842 195.065 90.908 195.045 90.973 L 190.113 103.603 C 190.048 103.827 189.843 103.978 189.611 103.978 L 186.843 103.993 C 186.147 103.993 185.568 104.53 185.506 105.221 L 183.851 124.099 C 183.821 124.431 183.778 124.763 183.72 125.095 L 182.414 132.586 C 182.363 132.76 182.267 132.914 182.139 133.042 L 177.532 136.559 C 175.421 138.575 172.592 142.254 171.208 144.822 L 155.863 177.191 C 155.492 177.878 155.194 179.064 155.213 179.848 L 156.303 181.79 C 156.319 182.485 156.04 185.551 155.72 186.168 L 150.579 195.15 C 150.463 195.37 150.455 195.629 150.556 195.856 L 150.811 196.439 L 151.58 197.972 L 167.184 197.996 C 168.151 198.084 169.221 196.845 169.252 195.517 L 170.099 184.821 L 169.878 183.211 L 199.63 148.297 C 200.407 147.351 201.462 145.683 201.991 144.579 L 216.169 113.318 C 216.336 112.975 216.633 112.712 216.997 112.592 L 217.893 112.303 C 218.438 112.125 219.034 112.299 219.401 112.739 C 220.642 114.23 223.56 119.183 224.982 121.249 C 226.157 122.964 231.99 131.4 234.537 134.181 C 235.241 134.945 237.409 135.814 238.38 136.405 C 238.697 136.598 238.801 137.007 238.619 137.328 L 230.123 152.247 L 226.37 169.866 C 226.239 170.276 226.138 170.7 226.076 171.125 L 222.679 183.361 C 222.702 184.906 221.515 185.717 221.419 187.539 L 220.182 196.482 C 220.166 196.756 220.386 196.988 220.661 196.988 L 241.653 197.104 L 241.669 197.104 C 241.696 197.104 243.149 197.084 244.007 197.049 C 244.17 197.042 244.448 197.015 244.63 196.992 C 247.428 196.636 249.342 196.254 250.644 195.814 C 250.702 195.795 250.76 195.775 250.818 195.752 C 251.723 195.432 252.31 195.076 252.689 194.683 C 253.404 193.937 254.231 193.022 254.355 191.845 C 254.359 191.798 254.363 191.756 254.367 191.709 C 254.367 191.682 254.367 191.651 254.37 191.624 C 254.37 191.559 254.37 191.497 254.37 191.431 C 254.37 191.424 254.37 191.412 254.37 191.404 C 254.37 191.346 254.363 191.288 254.355 191.234 C 254.328 190.999 254.274 190.821 254.212 190.678 C 254.212 190.678 254.212 190.678 254.212 190.675 C 254.212 190.671 254.208 190.667 254.204 190.663 C 254.185 190.617 254.162 190.578 254.138 190.539 C 254.123 190.516 254.111 190.493 254.092 190.47 C 253.972 190.304 253.856 190.242 253.841 190.234 C 253.783 190.2 253.721 190.169 253.655 190.146 L 243.907 187.207 C 243.281 187.014 242.736 186.628 242.349 186.103 L 239.732 182.234 C 239.605 181.964 239.663 181.639 239.875 181.431 L 244.974 176.407 C 245.148 176.241 245.283 176.037 245.372 175.813 L 261.077 138.787 C 261.811 136.436 261.568 133.791 261.077 130.995 C 260.713 128.929 255.422 120.052 254.038 117.6 C 252.82 115.438 245.229 102.167 243.428 99.024 C 243.223 98.669 242.956 98.352 242.62 98.12 C 242.38 97.954 242.144 97.742 241.951 97.518 C 241.758 97.294 241.619 97.032 241.541 96.746 L 240.942 87.529 C 240.888 87.328 241.027 87.127 241.236 87.112 L 243.969 86.884 C 244.228 86.861 244.46 86.71 244.58 86.483 L 254.042 68.709 C 254.173 68.466 254.166 68.169 254.023 67.933 L 252.086 65.535 C 251.955 65.315 251.951 65.037 252.078 64.813 L 254.977 61.682 C 255.097 61.466 255.368 61.392 255.584 61.512 L 263.292 65.856 C 263.759 66.118 264.289 66.273 264.826 66.273 C 266.964 66.257 270.485 64.995 272.317 63.875 C 272.8 63.578 273.198 63.157 273.461 62.655 L 277.242 53.824 C 277.292 53.712 277.458 53.728 277.481 53.847 L 278.536 58.759 C 278.606 59.068 278.877 59.241 279.186 59.172 L 290.318 56.697 C 290.612 56.631 290.793 56.342 290.731 56.048 L 288.107 44.963 C 288.072 44.812 288.099 44.654 288.184 44.522 L 289.267 42.843 C 289.402 42.634 289.502 42.406 289.564 42.171 L 290.875 36.19 C 290.909 36.035 291.045 35.923 291.203 35.923 L 321.998 35.962 C 322.431 35.962 322.767 35.63 322.767 35.194 L 322.767 29.965 C 322.767 29.869 322.848 29.788 322.945 29.788 L 334.819 29.788 C 335.028 29.788 335.202 29.618 335.202 29.406 L 335.202 27.05 C 335.202 26.842 335.032 26.668 334.819 26.668 L 322.941 26.668 L 322.953 26.687 L 322.953 26.687 Z " fill="currentColor"></path></g></svg>`,valorant:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 216.4 177.8"><defs><clipPath id="_clipPath_snd6zlr1jsC99PkQyUrRoFfmpglvlnWF"><rect width="216.4" height="177.8"></rect></clipPath></defs><g clip-path="url(#_clipPath_snd6zlr1jsC99PkQyUrRoFfmpglvlnWF)"><path d=" M 0.685 0.216 C 2.017 -0.578 2.866 1.027 3.585 1.872 C 49.83 59.725 96.129 117.536 142.369 175.389 C 143.319 176.212 142.6 177.973 141.318 177.784 C 119.177 177.809 97.032 177.793 74.891 177.793 C 73.118 177.814 71.42 176.931 70.331 175.548 C 47.358 146.847 24.398 118.133 1.425 89.427 C 0.45 88.267 -0.055 86.766 0.008 85.257 C 0.008 57.527 0.017 29.792 0 2.061 C 0.013 1.405 -0.013 0.556 0.685 0.216 Z " fill="currentColor"></path><path d=" M 214.562 0.082 C 215.508 -0.276 216.55 0.598 216.411 1.59 C 216.445 29.334 216.407 57.077 216.428 84.82 C 216.491 86.392 216.147 88.019 215.125 89.254 C 208.144 97.988 201.155 106.717 194.174 115.447 C 193.01 116.96 191.106 117.796 189.202 117.7 C 167.208 117.679 145.21 117.712 123.216 117.683 C 121.918 117.885 121.178 116.132 122.136 115.287 C 152.637 77.129 183.162 38.984 213.68 0.834 C 213.911 0.506 214.205 0.254 214.562 0.082 Z " fill="currentColor"></path></g></svg>`,"rainbow-six-siege":`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 1228 2500"><defs><clipPath id="_clipPath_TvKS4F8PbLq0u5J923fOvqHgWJqkZMr9"><rect width="1228" height="2500"></rect></clipPath></defs><g clip-path="url(#_clipPath_TvKS4F8PbLq0u5J923fOvqHgWJqkZMr9)"><path d=" M 0.175 405.367 L 0.175 2093.609 C 0.175 2093.609 -27.027 2497.447 596.452 2483.719 C 596.452 2483.719 1157.288 2551.358 1227.924 2107.084 L 1227.924 1034.091 C 1227.924 1034.091 1184.494 814.698 802.365 814.698 C 802.365 814.698 539.547 809.209 526.068 893.32 L 523.324 470.51 C 523.324 470.51 607.439 375.665 715.758 473.255 L 713.014 725.343 L 1227.924 725.343 L 1227.924 405.367 C 1227.924 405.367 1226.672 -22.683 621.664 1.525 C 621.407 1.525 46.35 -47.145 0.175 405.367 Z  M 582.471 1630.616 L 582.471 1749.172 L 703.524 1749.172 L 703.524 1584.939 L 686.554 1555.237 L 658.601 1555.237 L 659.351 1583.189 C 659.351 1583.189 688.054 1588.181 691.55 1606.15 L 680.82 1616.387 C 681.06 1616.138 650.11 1569.715 582.471 1630.616 L 582.471 1630.616 L 582.471 1630.616 L 582.471 1630.616 Z  M 404.017 1399.992 L 404.017 2174.976 L 388.291 2174.976 L 388.291 2216.656 L 429.474 2216.656 L 429.474 2231.88 L 553.022 2231.88 L 553.022 2214.91 L 569.494 2214.91 L 569.494 1811.815 C 569.494 1811.815 614.172 1753.161 717.504 1766.142 L 717.504 1555.489 C 717.504 1555.489 807.357 1509.315 973.838 1509.315 L 973.838 1316.627 C 973.838 1316.627 911.937 1228.524 768.173 1326.864 C 768.173 1326.864 603.939 1416.717 569.245 1315.881 L 433.719 1315.881 L 433.719 1329.36 L 403.271 1329.36 L 403.271 1357.818 L 388.544 1357.818 L 388.544 1389.266 L 403.519 1389.266 L 404.017 1399.992 L 404.017 1399.992 L 404.017 1399.992 L 404.017 1399.992 Z " fill-rule="evenodd" fill="currentColor"></path></g></svg>`,fortnite:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 180.1 441"><defs><clipPath id="_clipPath_DZ4wRoNZT2aZ3ZpuUSKBj8qGWz78CkS8"><rect width="180.1" height="441"></rect></clipPath></defs><g clip-path="url(#_clipPath_DZ4wRoNZT2aZ3ZpuUSKBj8qGWz78CkS8)"><path d=" M 0 220.5 C 0 341.8 0.3 441 0.7 441 C 1.3 441 82.8 425.9 92.8 423.9 L 98 422.9 L 98 341.9 L 98 261 L 129 261 L 160 261 L 160 246.2 C 160 238.1 160.3 217 160.7 199.2 L 161.3 167 L 129.7 167 L 98 167 L 98 131.5 L 98 96 L 134.5 96 C 154.6 96 171 95.8 171 95.5 C 171 94.4 179 9 179.5 4.7 L 180.1 0 L 90 0 L 0 0 L 0 220.5 Z " fill="currentColor"></path></g></svg>`,minecraft:`<svg viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" points="40.9004 14.2733 40.8452 33.7266 24.0274 43.5 24.0826 24.0467 40.9004 14.2733"></polygon><polygon fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" points="24.0826 24.0467 24.0274 43.5 7.0996 33.7267 7.1548 14.2734 24.0826 24.0467"></polygon><polygon fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" points="40.9004 14.2733 24.0826 24.0467 7.1548 14.2734 23.9726 4.5 40.9004 14.2733"></polygon></svg>`,"roblox-robuxs":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.35 1333.35" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M272.91 0L0 1060.43l1060.43 272.91L1333.34 272.9 272.91-.01zm316.86 536.5l207 53.25-53.28 207.02-207-53.28 53.28-207z" fill="currentColor" fill-rule="nonzero"></path></svg>`,rust:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800"><defs><clipPath id="_clipPath_CBvz10PB8OI6noJ5aGjSkZYNHIDcdWAV"><rect width="800" height="800"></rect></clipPath></defs><g clip-path="url(#_clipPath_CBvz10PB8OI6noJ5aGjSkZYNHIDcdWAV)"><rect x="385.229" y="385.23" width="80.644" height="80.644" transform="matrix(0.707,-0.707,0.707,0.707,-176.27,425.552)" fill="currentColor"></rect><rect x="445.926" y="486.45" width="145.911" height="64.865" transform="matrix(0.707,-0.707,0.707,0.707,-214.928,518.882)" fill="currentColor"></rect><path d=" M 628.324 525.146 L 525.146 628.324 L 652.93 800 L 800 652.93 L 628.324 525.146 L 628.324 525.146 Z " fill="currentColor"></path><rect x="352.599" y="261.131" width="145.911" height="64.865" transform="matrix(-1,0,0,-1,851.109,587.126)" fill="currentColor"></rect><path d=" M 352.605 211.762 L 498.508 211.762 L 529.557 0 L 321.557 0 L 352.605 211.762 L 352.605 211.762 Z " fill="currentColor"></path><rect x="220.61" y="393.122" width="145.911" height="64.865" transform="matrix(0,1,-1,0,719.12,131.989)" fill="currentColor"></rect><path d=" M 211.762 498.508 L 211.762 352.605 L 0 321.557 L 0 529.557 L 211.762 498.508 L 211.762 498.508 Z " fill="currentColor"></path></g></svg>`,supercell:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 655.3 533.3"><defs><clipPath id="_clipPath_WJCDFHcAl1F4rdCx9CdYCnuY4TcTiMHp"><rect width="655.3" height="533.3"></rect></clipPath></defs><g clip-path="url(#_clipPath_WJCDFHcAl1F4rdCx9CdYCnuY4TcTiMHp)"><path d=" M 346.46 224.91 L 308.01 224.91 L 308.01 253.023 L 346.46 253.023 L 346.46 224.91 Z  M 365.065 350.388 L 346.46 331.783 L 346.46 279.07 L 308.01 279.07 L 308.01 307.183 L 321.654 307.183 L 321.654 350.594 L 222.429 350.594 L 222.429 307.183 L 241.034 307.183 L 241.034 224.91 L 222.429 224.91 L 222.429 181.499 L 388.63 181.499 L 416.331 209.612 L 416.331 244.755 L 391.525 262.946 L 416.331 281.55 L 416.331 313.178 L 432.041 313.178 L 432.041 350.388 L 365.065 350.388 Z  M 416.744 43.411 L 416.744 131.68 L 379.535 168.889 L 278.243 168.889 L 241.034 131.68 L 241.034 43.411 L 222.429 43.411 L 222.429 0 L 324.548 0 L 324.548 43.411 L 308.424 43.411 L 308.424 125.685 L 365.271 125.685 L 365.271 43.411 L 351.421 43.411 L 351.421 0 L 432.455 0 L 432.455 43.411 L 416.537 43.411 M 588.114 43.411 L 531.266 43.411 L 531.266 72.351 L 588.32 72.351 L 588.32 43.411 L 588.114 43.411 Z  M 628.424 101.912 L 531.266 101.912 L 531.266 125.271 L 549.251 125.271 L 549.251 168.682 L 445.478 168.682 L 445.478 125.271 L 464.083 125.271 L 464.083 43.411 L 445.478 43.411 L 445.478 0 L 625.323 0 L 655.297 28.941 L 655.297 75.245 L 628.424 101.705 M 617.261 350.388 L 489.509 350.388 L 445.478 306.977 L 445.478 224.703 L 489.509 181.292 L 590.181 181.292 L 602.584 197.209 L 614.987 181.499 L 655.297 181.499 L 655.297 252.61 L 602.584 252.61 L 602.584 224.703 L 514.109 224.703 L 514.109 307.39 L 602.584 307.39 L 602.584 279.07 L 655.297 279.07 L 655.297 313.178 L 617.261 350.388 Z  M 413.85 532.713 L 222.429 532.713 L 222.429 489.302 L 241.034 489.302 L 241.034 407.235 L 222.429 407.235 L 222.429 363.824 L 326.615 363.824 L 326.615 407.235 L 308.01 407.235 L 308.01 489.509 L 379.948 489.509 L 379.948 434.935 L 432.455 434.935 L 432.455 512.661 L 413.85 532.713 Z  M 636.693 532.713 L 445.271 532.713 L 445.271 489.302 L 463.463 489.302 L 463.463 407.235 L 445.271 407.235 L 445.271 363.824 L 549.044 363.824 L 549.044 407.235 L 530.439 407.235 L 530.439 489.509 L 602.791 489.509 L 602.791 434.935 L 655.297 434.935 L 655.297 512.661 L 636.693 532.713 Z  M 176.951 168.889 L 59.948 168.889 L 46.098 154.005 L 33.695 168.889 L 0 168.889 L 0 117.209 L 47.132 117.209 L 47.132 131.68 L 135.401 131.68 L 135.401 107.494 L 30.388 107.494 L 0 79.173 L 0 37.829 L 35.142 0 L 140.155 0 L 154.005 14.884 L 166.408 0 L 200.103 0 L 200.103 51.68 L 152.558 51.68 L 152.558 37.209 L 73.178 37.209 L 73.178 61.602 L 175.711 61.602 L 210.026 94.057 L 210.026 133.333 L 176.951 168.889 Z  M 191.008 350.388 L 0 350.388 L 0 306.977 L 18.605 306.977 L 18.605 225.323 L 0 225.323 L 0 181.912 L 191.008 181.912 L 209.612 202.584 L 209.612 260.465 L 157.106 260.879 L 157.106 225.323 L 85.581 225.323 L 85.581 250.129 L 116.589 250.129 L 116.589 281.55 L 85.581 281.55 L 85.581 307.183 L 157.106 307.183 L 157.106 272.041 L 209.612 272.041 L 209.612 329.922 L 191.008 350.594 M 191.008 532.506 L 0 532.506 L 0 489.096 L 18.605 489.096 L 18.605 407.235 L 0 407.235 L 0 363.824 L 191.008 363.824 L 209.612 384.496 L 209.612 442.377 L 157.106 442.377 L 157.106 407.235 L 85.581 407.235 L 85.581 432.661 L 116.589 432.661 L 116.589 463.669 L 85.581 463.669 L 85.581 489.922 L 157.106 489.922 L 157.106 454.78 L 209.612 454.78 L 209.612 512.661 L 191.008 533.333" fill="currentColor"></path></g></svg>`,emails:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"></path></svg>`,ai:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 105.21" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M63.91,18.75v12.16h33.51c5.43,0,9.87,4.44,9.87,9.87v12.47h13.42c1.19,0,2.17,0.97,2.17,2.17v25.28 c0,1.19-0.97,2.17-2.17,2.17h-13.42v12.47c0,5.43-4.44,9.87-9.87,9.87h-73c-5.43,0-9.87-4.44-9.87-9.87V82.87H2.17 C0.97,82.87,0,81.9,0,80.71V55.42c0-1.19,0.97-2.17,2.17-2.17h12.38V40.79c0-5.43,4.44-9.87,9.87-9.87h33.51V18.75 c-3.85-1.26-6.62-4.87-6.62-9.14c0-5.31,4.3-9.61,9.61-9.61c5.31,0,9.61,4.3,9.61,9.61C70.53,13.88,67.75,17.49,63.91,18.75 L63.91,18.75z M41.03,79.74h40.81c1.99,0,3.62,1.63,3.62,3.62v1.7c0,1.99-1.63,3.62-3.62,3.62H41.03c-1.99,0-3.62-1.63-3.62-3.62 v-1.7C37.41,81.36,39.04,79.74,41.03,79.74L41.03,79.74z M78.7,47.59c5.37,0,9.73,4.35,9.73,9.73c0,5.37-4.35,9.72-9.73,9.72 s-9.72-4.35-9.72-9.72C68.97,51.94,73.33,47.59,78.7,47.59L78.7,47.59z M44.18,47.59c5.37,0,9.72,4.35,9.72,9.73 c0,5.37-4.35,9.72-9.72,9.72c-5.37,0-9.72-4.35-9.72-9.72C34.46,51.94,38.81,47.59,44.18,47.59L44.18,47.59z"></path></svg>`},Mo=Object.defineProperty,No=(e,t)=>Mo(e,`name`,{value:t,configurable:!0});function Po(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}No(Po,`setRef`);function Fo(...e){return t=>{let n=!1,r=e.map(e=>{let r=Po(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Po(e[t],null)}}}}No(Fo,`composeRefs`);function Io(...e){return N.useCallback(Fo(...e),e)}No(Io,`useComposedRefs`);var Lo=Object.defineProperty,Ro=(e,t)=>Lo(e,`name`,{value:t,configurable:!0});function zo(e){let t=N.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Jo(r)&&typeof Qo==`function`&&(r=Qo(r._payload)),N.Children.forEach(r,e=>{if(Ko(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Jo(n)&&typeof Qo==`function`&&(n=Qo(n._payload)),a=Uo(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=N.cloneElement(a,void 0,s):!o&&N.Children.count(r)===1&&N.isValidElement(r)&&(a=r);let c=a?Go(a):void 0,l=Io(n,c);if(!a){if(r||r===0)throw Error(o?Zo(e):Xo(e));return r}let u=Wo(i,a.props??{});return a.type!==N.Fragment&&(u.ref=n?l:c),N.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}Ro(zo,`createSlot`);var Bo=zo(`Slot`),Vo=Symbol.for(`radix.slottable`);function Ho(e){let t=Ro(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=Vo,t}Ro(Ho,`createSlottable`);var Uo=Ro((e,t)=>{if(`child`in e.props){let t=e.props.child;return N.isValidElement(t)?N.cloneElement(t,void 0,e.props.children(t.props.children)):null}return N.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function Wo(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}Ro(Wo,`mergeProps`);function Go(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Ro(Go,`getElementRef`);function Ko(e){return N.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Vo}Ro(Ko,`isSlottable`);var qo=Symbol.for(`react.lazy`);function Jo(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===qo&&`_payload`in e&&Yo(e._payload)}Ro(Jo,`isLazyComponent`);function Yo(e){return typeof e==`object`&&!!e&&`then`in e}Ro(Yo,`isPromiseLike`);var Xo=Ro(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Zo=Ro(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Qo=N.use;function $o(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=$o(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function es(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=$o(e))&&(r&&(r+=` `),r+=t);return r}var ts=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,ns=es,rs=(e,t)=>n=>{if(t?.variants==null)return ns(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=ts(t)||ts(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return ns(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},is=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},as=(e,t)=>({classGroupId:e,validator:t}),os=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),ss=`-`,cs=[],ls=`arbitrary..`,us=e=>{let t=ps(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return fs(e);let n=e.split(ss);return ds(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?is(i,t):t:i||cs}return n[e]||cs}}},ds=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=ds(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(ss):e.slice(t).join(ss),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},fs=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?ls+r:void 0})(),ps=e=>{let{theme:t,classGroups:n}=e;return ms(n,t)},ms=(e,t)=>{let n=os();for(let r in e){let i=e[r];hs(i,n,r,t)}return n},hs=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];gs(i,t,n,r)}},gs=(e,t,n,r)=>{if(typeof e==`string`){_s(e,t,n);return}if(typeof e==`function`){vs(e,t,n,r);return}ys(e,t,n,r)},_s=(e,t,n)=>{let r=e===``?t:bs(t,e);r.classGroupId=n},vs=(e,t,n,r)=>{if(xs(e)){hs(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(as(n,e))},ys=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];hs(o,bs(t,a),n,r)}},bs=(e,t)=>{let n=e,r=t.split(ss),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=os(),n.nextPart.set(t,i)),n=i}return n},xs=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Ss=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Cs=`!`,ws=`:`,Ts=[],Es=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Ds=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===ws){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Cs)?(c=s.slice(0,-1),l=!0):s.startsWith(Cs)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Es(t,l,c,u)};if(t){let e=t+ws,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Es(Ts,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Os=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},ks=e=>({cache:Ss(e.cacheSize),parseClassName:Ds(e),sortModifiers:Os(e),postfixLookupClassGroupIds:As(e),...us(e)}),As=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},js=/\s+/,Ms=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(js),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Cs:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},Ns=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Ps(n))&&(i&&(i+=` `),i+=r);return i},Ps=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Ps(e[r]))&&(n&&(n+=` `),n+=t);return n},Fs=(e,...t)=>{let n,r,i,a,o=o=>(n=ks(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Ms(e,n);return i(e,a),a};return a=o,(...e)=>a(Ns(...e))},Is=[],Ls=e=>{let t=t=>t[e]||Is;return t.isThemeGetter=!0,t},Rs=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,zs=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Bs=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Vs=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Hs=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Us=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ws=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Gs=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ks=e=>Bs.test(e),B=e=>!!e&&!Number.isNaN(Number(e)),qs=e=>!!e&&Number.isInteger(Number(e)),Js=e=>e.endsWith(`%`)&&B(e.slice(0,-1)),Ys=e=>Vs.test(e),Xs=()=>!0,Zs=e=>Hs.test(e)&&!Us.test(e),Qs=()=>!1,$s=e=>Ws.test(e),ec=e=>Gs.test(e),tc=e=>!V(e)&&!H(e),nc=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),rc=e=>vc(e,Sc,Qs),V=e=>Rs.test(e),ic=e=>vc(e,Cc,Zs),ac=e=>vc(e,wc,B),oc=e=>vc(e,Ec,Xs),sc=e=>vc(e,Tc,Qs),cc=e=>vc(e,bc,Qs),lc=e=>vc(e,xc,ec),uc=e=>vc(e,Dc,$s),H=e=>zs.test(e),dc=e=>yc(e,Cc),fc=e=>yc(e,Tc),pc=e=>yc(e,bc),mc=e=>yc(e,Sc),hc=e=>yc(e,xc),gc=e=>yc(e,Dc,!0),_c=e=>yc(e,Ec,!0),vc=(e,t,n)=>{let r=Rs.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},yc=(e,t,n=!1)=>{let r=zs.exec(e);return r?r[1]?t(r[1]):n:!1},bc=e=>e===`position`||e===`percentage`,xc=e=>e===`image`||e===`url`,Sc=e=>e===`length`||e===`size`||e===`bg-size`,Cc=e=>e===`length`,wc=e=>e===`number`,Tc=e=>e===`family-name`,Ec=e=>e===`number`||e===`weight`,Dc=e=>e===`shadow`,Oc=Fs(()=>{let e=Ls(`color`),t=Ls(`font`),n=Ls(`text`),r=Ls(`font-weight`),i=Ls(`tracking`),a=Ls(`leading`),o=Ls(`breakpoint`),s=Ls(`container`),c=Ls(`spacing`),l=Ls(`radius`),u=Ls(`shadow`),d=Ls(`inset-shadow`),f=Ls(`text-shadow`),p=Ls(`drop-shadow`),m=Ls(`blur`),h=Ls(`perspective`),g=Ls(`aspect`),_=Ls(`ease`),v=Ls(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),H,V],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[H,V,c],T=()=>[Ks,`full`,`auto`,...w()],E=()=>[qs,`none`,`subgrid`,H,V],ee=()=>[`auto`,{span:[`full`,qs,H,V]},qs,H,V],D=()=>[qs,`auto`,H,V],te=()=>[`auto`,`min`,`max`,`fr`,H,V],ne=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],re=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],ie=()=>[`auto`,...w()],O=()=>[Ks,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],ae=()=>[Ks,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],oe=()=>[Ks,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],k=()=>[e,H,V],A=()=>[...b(),pc,cc,{position:[H,V]}],se=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],ce=()=>[`auto`,`cover`,`contain`,mc,rc,{size:[H,V]}],le=()=>[Js,dc,ic],ue=()=>[``,`none`,`full`,l,H,V],j=()=>[``,B,dc,ic],M=()=>[`solid`,`dashed`,`dotted`,`double`],de=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],fe=()=>[B,Js,pc,cc],pe=()=>[``,`none`,m,H,V],me=()=>[`none`,B,H,V],he=()=>[`none`,B,H,V],ge=()=>[B,H,V],_e=()=>[Ks,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Ys],breakpoint:[Ys],color:[Xs],container:[Ys],"drop-shadow":[Ys],ease:[`in`,`out`,`in-out`],font:[tc],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Ys],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Ys],shadow:[Ys],spacing:[`px`,B],text:[Ys],"text-shadow":[Ys],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Ks,V,H,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,H,V]}],"container-named":[nc],columns:[{columns:[B,V,H,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[qs,`auto`,H,V]}],basis:[{basis:[Ks,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[B,Ks,`auto`,`initial`,`none`,V]}],grow:[{grow:[``,B,H,V]}],shrink:[{shrink:[``,B,H,V]}],order:[{order:[qs,`first`,`last`,`none`,H,V]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:ee()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:ee()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":te()}],"auto-rows":[{"auto-rows":te()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...ne(),`normal`]}],"justify-items":[{"justify-items":[...re(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...re()]}],"align-content":[{content:[`normal`,...ne()]}],"align-items":[{items:[...re(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...re(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...re(),`baseline`]}],"place-self":[{"place-self":[`auto`,...re()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:ie()}],mx:[{mx:ie()}],my:[{my:ie()}],ms:[{ms:ie()}],me:[{me:ie()}],mbs:[{mbs:ie()}],mbe:[{mbe:ie()}],mt:[{mt:ie()}],mr:[{mr:ie()}],mb:[{mb:ie()}],ml:[{ml:ie()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:O()}],"inline-size":[{inline:[`auto`,...ae()]}],"min-inline-size":[{"min-inline":[`auto`,...ae()]}],"max-inline-size":[{"max-inline":[`none`,...ae()]}],"block-size":[{block:[`auto`,...oe()]}],"min-block-size":[{"min-block":[`auto`,...oe()]}],"max-block-size":[{"max-block":[`none`,...oe()]}],w:[{w:[s,`screen`,...O()]}],"min-w":[{"min-w":[s,`screen`,`none`,...O()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...O()]}],h:[{h:[`screen`,`lh`,...O()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...O()]}],"max-h":[{"max-h":[`screen`,`lh`,...O()]}],"font-size":[{text:[`base`,n,dc,ic]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,_c,oc]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Js,V]}],"font-family":[{font:[fc,sc,t]}],"font-features":[{"font-features":[V]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,H,V]}],"line-clamp":[{"line-clamp":[B,`none`,H,ac]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,H,V]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,H,V]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...M(),`wavy`]}],"text-decoration-thickness":[{decoration:[B,`from-font`,`auto`,H,ic]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[B,`auto`,H,V]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[qs,H,V]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,H,V]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,H,V]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:A()}],"bg-repeat":[{bg:se()}],"bg-size":[{bg:ce()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},qs,H,V],radial:[``,H,V],conic:[qs,H,V]},hc,lc]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:le()}],"gradient-via-pos":[{via:le()}],"gradient-to-pos":[{to:le()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:ue()}],"rounded-s":[{"rounded-s":ue()}],"rounded-e":[{"rounded-e":ue()}],"rounded-t":[{"rounded-t":ue()}],"rounded-r":[{"rounded-r":ue()}],"rounded-b":[{"rounded-b":ue()}],"rounded-l":[{"rounded-l":ue()}],"rounded-ss":[{"rounded-ss":ue()}],"rounded-se":[{"rounded-se":ue()}],"rounded-ee":[{"rounded-ee":ue()}],"rounded-es":[{"rounded-es":ue()}],"rounded-tl":[{"rounded-tl":ue()}],"rounded-tr":[{"rounded-tr":ue()}],"rounded-br":[{"rounded-br":ue()}],"rounded-bl":[{"rounded-bl":ue()}],"border-w":[{border:j()}],"border-w-x":[{"border-x":j()}],"border-w-y":[{"border-y":j()}],"border-w-s":[{"border-s":j()}],"border-w-e":[{"border-e":j()}],"border-w-bs":[{"border-bs":j()}],"border-w-be":[{"border-be":j()}],"border-w-t":[{"border-t":j()}],"border-w-r":[{"border-r":j()}],"border-w-b":[{"border-b":j()}],"border-w-l":[{"border-l":j()}],"divide-x":[{"divide-x":j()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":j()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...M(),`hidden`,`none`]}],"divide-style":[{divide:[...M(),`hidden`,`none`]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...M(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[B,H,V]}],"outline-w":[{outline:[``,B,dc,ic]}],"outline-color":[{outline:k()}],shadow:[{shadow:[``,`none`,u,gc,uc]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":[`none`,d,gc,uc]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:j()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[B,ic]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":j()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":[`none`,f,gc,uc]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[B,H,V]}],"mix-blend":[{"mix-blend":[...de(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":de()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[B]}],"mask-image-linear-from-pos":[{"mask-linear-from":fe()}],"mask-image-linear-to-pos":[{"mask-linear-to":fe()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":fe()}],"mask-image-t-to-pos":[{"mask-t-to":fe()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":fe()}],"mask-image-r-to-pos":[{"mask-r-to":fe()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":fe()}],"mask-image-b-to-pos":[{"mask-b-to":fe()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":fe()}],"mask-image-l-to-pos":[{"mask-l-to":fe()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":fe()}],"mask-image-x-to-pos":[{"mask-x-to":fe()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":fe()}],"mask-image-y-to-pos":[{"mask-y-to":fe()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[H,V]}],"mask-image-radial-from-pos":[{"mask-radial-from":fe()}],"mask-image-radial-to-pos":[{"mask-radial-to":fe()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[B]}],"mask-image-conic-from-pos":[{"mask-conic-from":fe()}],"mask-image-conic-to-pos":[{"mask-conic-to":fe()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:A()}],"mask-repeat":[{mask:se()}],"mask-size":[{mask:ce()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,H,V]}],filter:[{filter:[``,`none`,H,V]}],blur:[{blur:pe()}],brightness:[{brightness:[B,H,V]}],contrast:[{contrast:[B,H,V]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,gc,uc]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:[``,B,H,V]}],"hue-rotate":[{"hue-rotate":[B,H,V]}],invert:[{invert:[``,B,H,V]}],saturate:[{saturate:[B,H,V]}],sepia:[{sepia:[``,B,H,V]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,H,V]}],"backdrop-blur":[{"backdrop-blur":pe()}],"backdrop-brightness":[{"backdrop-brightness":[B,H,V]}],"backdrop-contrast":[{"backdrop-contrast":[B,H,V]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,B,H,V]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[B,H,V]}],"backdrop-invert":[{"backdrop-invert":[``,B,H,V]}],"backdrop-opacity":[{"backdrop-opacity":[B,H,V]}],"backdrop-saturate":[{"backdrop-saturate":[B,H,V]}],"backdrop-sepia":[{"backdrop-sepia":[``,B,H,V]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,H,V]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[B,`initial`,H,V]}],ease:[{ease:[`linear`,`initial`,_,H,V]}],delay:[{delay:[B,H,V]}],animate:[{animate:[`none`,v,H,V]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,H,V]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:me()}],"rotate-x":[{"rotate-x":me()}],"rotate-y":[{"rotate-y":me()}],"rotate-z":[{"rotate-z":me()}],scale:[{scale:he()}],"scale-x":[{"scale-x":he()}],"scale-y":[{"scale-y":he()}],"scale-z":[{"scale-z":he()}],"scale-3d":[`scale-3d`],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[H,V,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:_e()}],"translate-x":[{"translate-x":_e()}],"translate-y":[{"translate-y":_e()}],"translate-z":[{"translate-z":_e()}],"translate-none":[`translate-none`],zoom:[{zoom:[qs,H,V]}],accent:[{accent:k()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,H,V]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":k()}],"scrollbar-track-color":[{"scrollbar-track":k()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,H,V]}],fill:[{fill:[`none`,...k()]}],"stroke-w":[{stroke:[B,dc,ic,ac]}],stroke:[{stroke:[`none`,...k()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function kc(...e){return Oc(es(e))}var Ac=rs(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,{variants:{variant:{default:`bg-primary text-primary-foreground shadow hover:bg-primary/90`,destructive:`bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,outline:`border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,secondary:`bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,ghost:`hover:bg-accent hover:text-accent-foreground`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-9 px-4 py-2`,sm:`h-8 rounded-md px-3 text-xs`,lg:`h-10 rounded-md px-8`,icon:`h-9 w-9`}},defaultVariants:{variant:`default`,size:`default`}}),jc=N.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},a)=>(0,P.jsx)(r?Bo:`button`,{className:kc(Ac({variant:t,size:n,className:e})),ref:a,...i}));jc.displayName=`Button`;var Mc=``+new URL(`promo-clean-EdYZPxw_.png`,import.meta.url).href,Nc=[{name:`Comptes`,slug:`accounts`},{name:`Réseaux sociaux`,slug:`social`},{name:`Jeux`,slug:`games`},{name:`Méthodes`,slug:`methods`},{name:`Spoofers`,slug:`spoofers`},{name:`VPN`,slug:`vpn`},{name:`Boosting`,slug:`boosting`},{name:`FiveM`,slug:`fivem`},{name:`Counter Strike 2`,slug:`counter-strike-2`},{name:`Valorant`,slug:`valorant`},{name:`Rainbow Six Siege`,slug:`rainbow-six-siege`},{name:`Fortnite`,slug:`fortnite`},{name:`Minecraft`,slug:`minecraft`},{name:`Roblox (Robux's)`,slug:`roblox-robuxs`},{name:`Rust`,slug:`rust`},{name:`Supercell`,slug:`supercell`},{name:`E-mails`,slug:`emails`},{name:`IA`,slug:`ai`}],Pc=[{q:`❓ Que se passe-t-il après mon achat ?`,a:(0,P.jsx)(`p`,{children:`Dès que votre paiement est validé, votre commande est livrée instantanément. Toutes les informations de connexion vous sont envoyées directement par e-mail.`})},{q:`💳 Quels moyens de paiement acceptez-vous ?`,a:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`p`,{children:`Nous acceptons :`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:`Cartes de crédit/débit`}),(0,P.jsx)(`li`,{children:`PayPal`})]})]})},{q:`⚡ La livraison est-elle rapide ?`,a:(0,P.jsx)(`p`,{children:`Notre système est entièrement automatisé. Votre produit est envoyé immédiatement après le paiement.`})}];function Fc({onCart:e}){let[t,n]=(0,N.useState)(!1),r=Aa({select:e=>e.location.pathname}),i=Vi();return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(`header`,{className:`header`,children:(0,P.jsxs)(`div`,{className:`wrap header-inner`,children:[(0,P.jsx)(L,{className:`brand`,to:`/`,"aria-label":`Accueil Anes Shop`,"data-testid":`link-home`,children:(0,P.jsx)(`span`,{children:`Anes Shop`})}),(0,P.jsxs)(`nav`,{className:`nav-links ${t?`mobile-open`:``}`,"aria-label":`Navigation principale`,children:[(0,P.jsx)(L,{to:`/`,onClick:()=>n(!1),children:`Accueil`}),(0,P.jsx)(L,{to:`/products`,onClick:()=>n(!1),"data-testid":`link-products`,children:`Produits`}),(0,P.jsx)(L,{to:`/products`,onClick:()=>n(!1),children:`Tarifs`}),(0,P.jsx)(L,{to:`/`,hash:`reviews`,onClick:(e=>t=>{if(t.preventDefault(),n(!1),r!==`/`){i({to:`/`,hash:e}),window.setTimeout(()=>document.getElementById(e)?.scrollIntoView({behavior:`smooth`}),100);return}document.getElementById(e)?.scrollIntoView({behavior:`smooth`})})(`reviews`),"data-testid":`link-reviews`,children:`Avis`})]}),(0,P.jsxs)(`div`,{className:`header-tools`,children:[(0,P.jsx)(`button`,{className:`cart-pill`,type:`button`,"aria-label":`Ouvrir le panier`,onClick:e,"data-testid":`button-open-cart`,children:`Panier`}),(0,P.jsx)(L,{to:`/products`,className:`dash-pill`,children:`Tableau de bord`}),(0,P.jsx)(jc,{variant:`ghost`,size:`icon`,className:`menu-trigger`,type:`button`,"aria-label":`Ouvrir le menu`,"aria-expanded":t,onClick:()=>n(!t),"data-testid":`button-toggle-menu`,children:(0,P.jsx)(So,{size:18})})]})]})})})}function Ic(){return(0,P.jsx)(`section`,{className:`hero`,children:(0,P.jsxs)(`div`,{className:`wrap hero-inner`,children:[(0,P.jsxs)(`div`,{className:`hero-copy`,children:[(0,P.jsxs)(`h1`,{children:[`Tu cherches des`,(0,P.jsx)(`br`,{}),(0,P.jsx)(`span`,{className:`hero-accent`,children:`Cheats de jeux`}),(0,P.jsx)(`br`,{}),`On a ce qu'il te faut.`]}),(0,P.jsx)(`p`,{children:`Anes Shop est la référence numéro un pour des comptes, spoofers, cheats & bien plus, de qualité.`}),(0,P.jsx)(`div`,{className:`hero-actions`,children:(0,P.jsxs)(L,{className:`button button-primary`,to:`/products`,children:[(0,P.jsx)(yo,{size:16}),`Voir nos produits`]})})]}),(0,P.jsx)(`div`,{className:`hero-art`,children:(0,P.jsx)(`img`,{src:`images/characters-hero.webp`,alt:``})})]})})}function Lc(){return(0,P.jsx)(`div`,{className:`wrap benefits`,children:[[(0,P.jsx)(Do,{size:19}),`Qualité garantie`,`Chaque produit est contrôlé et vérifié à la main avant la livraison. Vous recevez toujours exactement ce que vous avez payé.`],[(0,P.jsx)(Ao,{size:19}),`Livraison instantanée`,`Notre système automatisé vous livre votre compte ou logiciel en quelques secondes après l'achat.`],[(0,P.jsx)(xo,{size:19}),`Support en direct`,`Notre équipe support est disponible jour et nuit pour vous aider, quel que soit le problème.`]].map(([e,t,n])=>(0,P.jsxs)(`article`,{className:`benefit`,children:[(0,P.jsx)(`span`,{className:`benefit-icon`,children:e}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:t}),(0,P.jsx)(`p`,{children:n})]})]},String(t)))})}function Rc(){return(0,P.jsx)(`section`,{className:`categories-section`,id:`categories`,children:(0,P.jsxs)(`div`,{className:`wrap`,children:[(0,P.jsxs)(`div`,{className:`section-head`,children:[(0,P.jsx)(`h2`,{children:`Catégories populaires`}),(0,P.jsx)(`h3`,{children:`Découvrez nos produits`}),(0,P.jsx)(`p`,{children:`Choisissez une catégorie pour affiner votre recherche et trouver l'article parfait.`})]}),(0,P.jsx)(`div`,{className:`categories-grid`,children:Nc.map(({name:e,slug:t})=>(0,P.jsxs)(L,{className:`category-card`,to:`/products`,search:{category:e},"data-testid":`link-category-${t}`,children:[(0,P.jsx)(`span`,{className:`category-glyph`,"aria-hidden":`true`,dangerouslySetInnerHTML:{__html:jo[t]??``}}),(0,P.jsx)(`span`,{children:e})]},t))})]})})}function zc(){return(0,P.jsx)(`section`,{className:`stats`,children:(0,P.jsxs)(`div`,{className:`wrap stats-inner`,children:[(0,P.jsxs)(`div`,{className:`stat`,children:[(0,P.jsx)(`strong`,{children:`3,5K+`}),(0,P.jsx)(`span`,{children:`Produits vendus`})]}),(0,P.jsxs)(`div`,{className:`stat`,children:[(0,P.jsx)(`strong`,{children:`200+`}),(0,P.jsx)(`span`,{children:`Clients satisfaits`})]}),(0,P.jsxs)(`div`,{className:`stat`,children:[(0,P.jsx)(`strong`,{children:`4,99`}),(0,P.jsx)(`span`,{children:`Note moyenne`})]})]})})}function Bc(){return(0,P.jsx)(`section`,{className:`reviews`,id:`reviews`,children:(0,P.jsxs)(`div`,{className:`wrap`,children:[(0,P.jsxs)(`div`,{className:`reviews-title`,children:[(0,P.jsx)(`h2`,{children:`Avis clients`}),(0,P.jsx)(`h3`,{children:`Ce que disent nos acheteurs`}),(0,P.jsx)(`p`,{children:`Pas besoin de nous croire sur parole. Voici ce que pensent nos clients.`})]}),(0,P.jsx)(`div`,{className:`review-list`,children:Array.from({length:6},(e,t)=>(0,P.jsxs)(`article`,{className:`review`,children:[(0,P.jsx)(`p`,{children:`Avis laissé automatiquement 3 jours après l'achat`}),(0,P.jsxs)(`div`,{className:`review-foot`,children:[(0,P.jsxs)(`span`,{className:`review-person`,children:[(0,P.jsx)(`span`,{className:`review-avatar`,children:`A`}),`Anonyme`]}),(0,P.jsx)(`span`,{children:`il y a 13 heures`})]})]},t))})]})})}function Vc(){let[e,t]=(0,N.useState)(0);return(0,P.jsx)(`section`,{className:`faq`,id:`faq`,children:(0,P.jsxs)(`div`,{className:`wrap faq-layout`,children:[(0,P.jsxs)(`div`,{className:`faq-title`,children:[(0,P.jsx)(`h2`,{children:`Questions fréquentes`}),(0,P.jsxs)(`p`,{children:[`Une question ?`,(0,P.jsx)(`br`,{}),`On a les réponses.`]}),(0,P.jsx)(`div`,{className:`support-visual`,children:(0,P.jsx)(`img`,{src:`images/characters-support.png`,alt:``})}),(0,P.jsxs)(`div`,{className:`support-hours`,children:[`Notre support client est disponible 24h/24, 7j/7`,(0,P.jsx)(`br`,{}),`Temps de réponse moyen : 10 minutes`]})]}),(0,P.jsx)(`div`,{className:`faq-list`,children:Pc.map((n,r)=>(0,P.jsxs)(`div`,{className:`faq-item`,children:[(0,P.jsxs)(`button`,{className:`faq-question`,type:`button`,"aria-expanded":e===r,onClick:()=>t(e===r?null:r),"data-testid":`button-faq-${r}`,children:[(0,P.jsx)(`span`,{children:n.q}),(0,P.jsx)(wo,{size:17})]}),e===r&&(0,P.jsx)(`div`,{className:`faq-answer`,children:n.a})]},n.q))})]})})}function Hc(){return(0,P.jsx)(`footer`,{className:`footer`,children:(0,P.jsx)(`div`,{className:`wrap`,children:(0,P.jsx)(`div`,{className:`footer-main`,children:(0,P.jsx)(L,{className:`brand`,to:`/`,children:(0,P.jsx)(`span`,{children:`Anes Shop`})})})})})}function Uc({open:e,onClose:t}){let{items:n,changeQuantity:r,removeItem:i,clearCart:a}=Ya(),[o,s]=(0,N.useState)(null),c=Wa(n)/100,l=n.reduce((e,t)=>e+t.quantity,0);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`button`,{"aria-label":`Fermer le panier`,className:`drawer-backdrop ${e?`open`:``}`,onClick:t,"data-testid":`button-close-cart-backdrop`}),(0,P.jsxs)(`aside`,{"data-lenis-prevent":!0,className:`cart-drawer ${e?`open`:``}`,"aria-hidden":!e,"aria-label":`Panier`,children:[(0,P.jsxs)(`div`,{className:`drawer-head`,children:[(0,P.jsx)(`h2`,{children:`Panier`}),(0,P.jsx)(`button`,{className:`icon-button`,onClick:t,"aria-label":`Fermer le panier`,"data-testid":`button-close-cart`,children:(0,P.jsx)(ko,{size:19})})]}),n.length===0?(0,P.jsx)(`div`,{className:`empty-cart`,children:`Votre panier est vide.`}):(0,P.jsx)(`div`,{className:`cart-items`,children:n.map(e=>(0,P.jsxs)(`div`,{className:`cart-line`,children:[(0,P.jsxs)(`span`,{children:[e.name,(0,P.jsx)(`br`,{}),(0,P.jsxs)(`small`,{children:[(0,P.jsx)(`button`,{type:`button`,className:`clear-cart`,style:{width:`auto`,padding:`0 6px`},onClick:()=>r(e.id,e.quantity-1),children:`−`}),e.quantity,(0,P.jsx)(`button`,{type:`button`,className:`clear-cart`,style:{width:`auto`,padding:`0 6px`},onClick:()=>r(e.id,e.quantity+1),children:`+`}),(0,P.jsx)(`button`,{type:`button`,className:`clear-cart`,style:{width:`auto`},onClick:()=>i(e.id),children:`Retirer`})]})]}),(0,P.jsxs)(`span`,{children:[(e.priceValue*e.quantity).toFixed(2).replace(`.`,`,`),` €`]})]},e.id))}),(0,P.jsxs)(`div`,{className:`cart-summary`,children:[n.length>0&&(0,P.jsx)(`p`,{className:`terms`,children:`⚠️ Si vous payez avec PayPal, indiquez le nom de vos produits dans la note.`}),(0,P.jsxs)(`div`,{className:`cart-row`,children:[(0,P.jsx)(`span`,{children:`Articles`}),(0,P.jsx)(`span`,{children:l})]}),(0,P.jsxs)(`div`,{className:`cart-row total`,children:[(0,P.jsx)(`span`,{children:`Total`}),(0,P.jsxs)(`span`,{children:[c.toFixed(2).replace(`.`,`,`),` €`]})]}),(0,P.jsx)(`button`,{className:`checkout`,type:`button`,disabled:!n.length,onClick:()=>{let e=Ga(n);e&&(window.open(e,`_blank`),s(`proof`))},"data-testid":`button-pay-paypal`,children:`Payer avec PayPal 💳`}),(0,P.jsx)(`button`,{type:`button`,className:`clear-cart`,onClick:a,"data-testid":`button-clear-cart`,children:`Vider le panier`})]})]}),o&&(0,P.jsx)(`div`,{className:`overlay pay-popup`,role:`dialog`,"aria-modal":`true`,onClick:()=>s(null),children:(0,P.jsxs)(`div`,{className:`pay-card`,onClick:e=>e.stopPropagation(),children:[(0,P.jsx)(`div`,{className:`pay-icon`,children:`📨`}),(0,P.jsx)(`h3`,{children:`Paiement PayPal`}),(0,P.jsx)(`p`,{children:`Conservez votre preuve de paiement PayPal.`}),(0,P.jsx)(`div`,{className:`pay-actions`,children:(0,P.jsx)(jc,{type:`button`,className:`pay-close`,onClick:()=>s(null),children:`Fermer`})})]})})]})}function Wc(){let[e,t]=(0,N.useState)(!1);(0,N.useEffect)(()=>{t(!sessionStorage.getItem(`anes-shop-promo-dismissed`))},[]);let n=()=>{sessionStorage.setItem(`anes-shop-promo-dismissed`,`true`),t(!1)};return e?(0,P.jsx)(`div`,{className:`overlay`,role:`dialog`,"aria-modal":`true`,"aria-label":`Promotion EA FC27`,children:(0,P.jsxs)(`div`,{className:`promo-dialog`,children:[(0,P.jsx)(`img`,{src:Mc,alt:`Promotion EA FC27`}),(0,P.jsxs)(`div`,{className:`promo-actions`,children:[(0,P.jsx)(jc,{className:`dismiss`,type:`button`,onClick:n,"data-testid":`button-dismiss-promo`,children:`Fermer`}),(0,P.jsxs)(L,{className:`purchase`,to:`/product/$id`,params:{id:`44eee42a-0454-4d42-a88e-020c84e3dff2`},onClick:n,children:[(0,P.jsx)(Oo,{size:11}),` Acheter`]})]})]})}):null}var Gc={version:1,asset_id:`92280c54-6560-44cb-8da9-3a4d691d9155`,project_id:`506bfc8e-cbfa-48ec-a5d5-b0867e12652b`,url:`images/92280c54-6560-44cb-8da9-3a4d691d9155/hero-characters.webp`,r2_key:`a/v1/506bfc8e-cbfa-48ec-a5d5-b0867e12652b/92280c54-6560-44cb-8da9-3a4d691d9155/hero-characters.webp`,original_filename:`hero-characters.webp`,size:187008,content_type:`image/webp`,created_at:`2026-10-21T18:16:11Z`},Kc=ua(`/`)({head:()=>({meta:[{title:`Anes Shop — Comptes, spoofers et plus encore`},{name:`description`,content:`Anes Shop : comptes, spoofers et produits gaming de qualité avec livraison instantanée.`},{property:`og:title`,content:`Anes Shop — Comptes, spoofers et plus encore`},{property:`og:description`,content:`Comptes, spoofers et produits gaming de qualité avec livraison instantanée.`},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary_large_image`}]}),component:qc});function qc(){let[e,t]=(0,N.useState)(!1);return(0,P.jsxs)(`main`,{className:`site-shell`,children:[(0,P.jsxs)(`div`,{className:`hero-stage`,children:[(0,P.jsxs)(`div`,{className:`hero-stage-media`,"aria-hidden":`true`,children:[(0,P.jsx)(`img`,{className:`hero-stage-video`,src:Gc.url,alt:``,"aria-hidden":`true`}),(0,P.jsx)(`div`,{className:`hero-stage-shade`})]}),(0,P.jsx)(Fc,{onCart:()=>t(!0)}),(0,P.jsx)(Ic,{}),(0,P.jsx)(Lc,{})]}),(0,P.jsx)(Rc,{}),(0,P.jsx)(zc,{}),(0,P.jsx)(Bc,{}),(0,P.jsx)(Vc,{}),(0,P.jsx)(Hc,{}),(0,P.jsx)(Uc,{open:e,onClose:()=>t(!1)}),(0,P.jsx)(Wc,{})]})}var Jc={sourceUrl:`/products`,categories:[`All`,`Comptes`,`Réseaux sociaux`,`Jeux`,`Méthodes`,`Spoofers`,`VPN`,`Boosting`,`FiveM`,`Counter Strike 2`,`Valorant`,`Rainbow Six Siege`,`Fortnite`,`Minecraft`,`Roblox (Robux's)`,`Rust`,`Supercell`,`E-mails`,`IA`],families:[{name:`Comptes Discord Full Access`,image:`images/38643618-69d9-4068-88d5-673a714c3907/discord_fixed.jpg`,price:`1,50 € - 11,85 €`,originalPrice:``,stock:`1543 en stock`,onSale:!1,groupKey:`fa-discord-accounts`},{name:`Spoofer FiveM`,image:`images/e31a346c-5157-47bf-83b5-ab10cf00c461/image-042.webp`,price:`2,65 € - 25,90 €`,originalPrice:``,stock:`75 en stock`,onSale:!1,groupKey:`fivem-spoofer`},{name:`Comptes CS2 Prime`,image:`images/1a8365d4-226b-4dc3-8e6e-1b21d56d0bf4/fix-bw3-2adddc95-2277-46cc-8ae8-8fcfb3fedc89.webp`,price:`13,75 € - 25,50 €`,originalPrice:``,stock:`51 en stock`,onSale:!1,groupKey:`cs2-prime-accounts`},{name:`Comptes CS2 avec heures de jeu`,image:`images/1f709701-0ddd-4593-8233-ac150dcadf5b/fix-bw3-e8508413-4a2c-48c1-bcbb-97c995119801.webp`,price:`7,50 € - 9,50 €`,originalPrice:``,stock:`2 en stock`,onSale:!1,groupKey:`cs2-hours-accounts`},{name:`Comptes CS2 Prime NFA`,image:`images/e9a8683c-6723-466a-839f-d2de0a6625a7/fix-bw3-3f341745-41ff-4d2d-8204-0fda79bac383.webp`,price:`4,00 €`,originalPrice:``,stock:`26 en stock`,onSale:!1,groupKey:`cs2-prime-nfa-accounts`},{name:`Comptes Valorant`,image:`images/f09b1c88-5068-4467-bf2b-b19a8191ab82/fix-bw3-a01c93a6-4e8c-4408-b567-3245fc673418.webp`,price:`7,75 € - 55,00 €`,originalPrice:``,stock:`34 en stock`,onSale:!1,groupKey:`valorant-accounts`},{name:`Comptes Rainbow Six Siege`,image:`images/5eeac4a0-6b6f-40c2-983c-d4832fb8150e/fix-bw3-8a1333e3-b1c7-47bd-8a3c-5d42137e0f1f.webp`,price:`8,05 € - 36,50 €`,originalPrice:``,stock:`27 en stock`,onSale:!1,groupKey:`rainbow-six-siege-accounts`},{name:`Comptes Fortnite Full Access`,image:`images/3f03ced6-75a6-44ca-9af5-b53b6d245e3e/fix-bw3-00b3adb2-1a13-4bb0-88e3-3c07fc4b102d.webp`,price:`3,00 € - 100,00 €`,originalPrice:``,stock:`94 en stock`,onSale:!1,groupKey:`fa-fortnite-accounts`},{name:`Comptes Fortnite avec V-Bucks`,image:`images/7ee00fce-4226-4bcb-a224-c1c83d26dae2/fix-bw3-41b55f51-8b7a-4518-bbf2-63d0b1f7ee16.webp`,price:`5,00 € - 22,50 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,groupKey:`fortnite-v-bucks-accounts`},{name:`Spoofer permanent [TOUS LES JEUX]`,image:`images/7078140b-36c0-49f0-a0d2-a1afe903392b/fix-bw3-3eac9911-f207-479b-8b14-a19cea8deb79.webp`,price:`8,50 € - 11,90 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,groupKey:`permament-spoofer-all-games`},{name:`Logiciel Anes Shop Ultimate`,image:`images/8365bf9b-fb82-4039-90ee-85947166215c/fix-bw3-6d318d0e-680f-4307-948d-153363dc6aaa.webp`,price:`2,50 € - 17,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,groupKey:`anes-shop-ultimate-software`},{name:`Comptes Disney+`,image:`images/eed85cd4-7840-42c7-a419-6a5176d5edce/fix-bw3-e84aee2c-068f-449a-82c2-1be65504e32c.webp`,price:`5,00 €`,originalPrice:``,stock:`1036 en stock`,onSale:!1,groupKey:`disney-accounts`},{name:`Paramount+`,image:`images/11641e90-ad25-4653-87fc-da7e47184031/fix-bw3-f5aeae5e-ef53-4286-890c-821e453c171f.webp`,price:`5,00 €`,originalPrice:``,stock:`260 en stock`,onSale:!1,groupKey:`paramount`},{name:`Comptes Twitch avec abonnés`,image:`images/354b3418-2c46-414e-8598-3a71b92f420f/fix-bw3-d863e64e-b383-4961-ac10-94b870df0a35.webp`,price:`4,90 € - 20,50 €`,originalPrice:``,stock:`28 en stock`,onSale:!1,groupKey:`twitch-follower-accounts`},{name:`Roblox (Robux)`,image:`images/f7ff1b0f-6f2f-49e1-9242-4157bc94ea7b/fix-bw3-6655a19a-4d86-4178-80b1-9afe0d23897b.webp`,price:`5,95 € - 21,50 €`,originalPrice:``,stock:`36 en stock`,onSale:!1,groupKey:`roblox-robux-s`},{name:`Comptes Clash Royale`,image:`images/698a7c41-68b1-4968-a3d1-f39c81a6bff4/fix-bw3-327b8795-aa51-4adc-8ee4-0ba6b47d9193.webp`,price:`2,85 € - 15,25 €`,originalPrice:``,stock:`208 en stock`,onSale:!1,groupKey:`clash-royale-accounts`},{name:`Spoofer temporaire [TOUS LES JEUX]`,image:`images/aab109cb-1a0d-44e8-81ad-3a1e6783abe9/fix-bw3-1cfcdaeb-11bf-4f07-b89d-e77e16d8e0e8.webp`,price:`2,50 € - 15,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,groupKey:`temporary-spoofer-all-games`},{name:`Comptes ChatGPT`,image:`images/58452415-7429-4ac2-bf12-e7b8f8ccd8bf/fix-bw3-4cf94aa2-dc0d-49f5-83db-759c200f47fc.webp`,price:`11,50 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,groupKey:`chatgpt-accounts`},{name:`Comptes Gemini Pro`,image:`images/72b37102-69b4-4893-97cd-81e335c5d3f6/fix-bw3-4cfb7252-3660-4289-9112-d9a48382346e.webp`,price:`7,35 € - 8,55 €`,originalPrice:``,stock:`244 en stock`,onSale:!1,groupKey:`gemini-pro-accounts`},{name:`Comptes Netflix`,image:`images/5584f4a5-8e7b-4d5c-a2c6-39bff72b282d/fix-bw3-7816daf4-91bc-4520-8967-68f16cd09f00.webp`,price:`5,00 €`,originalPrice:``,stock:`462 en stock`,onSale:!1,groupKey:`netflix-accounts`},{name:`Comptes TikTok`,image:`images/686e7c2a-951e-4915-a113-345b27fe88c0/fix-bw3-3af85a4e-0a7c-41cb-a67e-6d821d82291f.webp`,price:`10,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,groupKey:`tiktok-accounts`},{name:`Comptes DAZN`,image:`images/19b08a58-904b-4c63-b7a9-7a8abf409a76/fix-bw3-e04226e1-cbda-4d9e-9288-a4946554e6da.webp`,price:`5,00 €`,originalPrice:``,stock:`675 en stock`,onSale:!1,groupKey:`dazn-accounts`},{name:`Uber Eats REPAS GRATUITS`,image:`images/731be3ce-dede-4a0a-809f-17b7b6fd548f/image-422.webp`,price:`8,00 €`,originalPrice:``,stock:`225 en stock`,onSale:!1,groupKey:`uber-eats-free-food`},{name:`Comptes Claude AI`,image:`images/a6cad584-83b7-4525-ab48-0d090687195e/fix-bw3-b3729f62-dd24-4b9c-8d5c-cea955e75e50.webp`,price:`5,15 € - 35,75 €`,originalPrice:``,stock:`56 en stock`,onSale:!1,groupKey:`claude-ai-accounts`}],products:[{id:`2c6ea485-9434-4f22-8763-01088cd73260`,name:`FiveM prêt [neuf]`,image:`images/b7acfddc-b054-45b4-a883-b56612df4de6/fix-bw3-8a738a3f-2b43-4f8d-9c3d-92d77906a1da.webp`,price:`0,50 €`,originalPrice:``,stock:`8730 en stock`,onSale:!1,link:`/product/2c6ea485-9434-4f22-8763-01088cd73260`,group:`Featured`,featured:!0,categories:[`Jeux`,`FiveM`],priceValue:.5},{id:`6127582a-a580-4dc7-98ee-507d69ff8a65`,name:`Comptes YouTube à vie`,image:`images/08f734a6-2d77-4403-aece-1b091cde6371/fix-bw3-a8ed2072-6b4a-41c4-bc28-af0658bfa9ea.webp`,price:`6,00 €`,originalPrice:``,stock:`133 en stock`,onSale:!1,link:`/product/6127582a-a580-4dc7-98ee-507d69ff8a65`,group:`Featured`,featured:!0,categories:[`Comptes`,`Réseaux sociaux`],priceValue:6},{id:`c8ec944f-03ad-48ad-b5c8-4a900c922ed5`,name:`NordVPN à vie`,image:`images/d58401e7-25c9-4849-a2b6-ea4fdfe673ca/fix-bw3-afacad40-3eae-464d-949f-b7e8c40a7fc3.webp`,price:`4,00 €`,originalPrice:``,stock:`397 en stock`,onSale:!1,link:`/product/c8ec944f-03ad-48ad-b5c8-4a900c922ed5`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`653388d0-e155-45ab-815d-0dc26adfc0fd`,name:`CyberGhost VPN 1 an`,image:`images/3ae6b56a-52a3-4c28-b36f-6b41409d34c9/fix-bw3-578a83f1-1472-4788-bf4a-007887ee2ef2.webp`,price:`4,00 €`,originalPrice:``,stock:`728 en stock`,onSale:!1,link:`/product/653388d0-e155-45ab-815d-0dc26adfc0fd`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`4bb0cf64-e80b-4729-bc44-04d1c315d89f`,name:`Pack FiveM`,image:`images/300e1520-4308-440a-8672-2ca96a2edd9a/fix-bw3-5e0046cd-b52f-4b2a-9f06-7f0463c3cf9e.webp`,price:`1,50 €`,originalPrice:``,stock:`1674 en stock`,onSale:!1,link:`/product/4bb0cf64-e80b-4729-bc44-04d1c315d89f`,group:`Featured`,featured:!0,categories:[`Jeux`,`FiveM`],priceValue:1.5},{id:`89c6189e-0078-4d57-a1b8-82169a480e4a`,name:`TunnelBear VPN`,image:`images/876da72e-271f-46db-89dc-747a9335e766/fix-bw3-ff111087-ac39-49ae-a29b-6de36a4f3fa6.webp`,price:`4,00 €`,originalPrice:``,stock:`129 en stock`,onSale:!1,link:`/product/89c6189e-0078-4d57-a1b8-82169a480e4a`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`87a923e6-ba62-4dd8-98a5-0d606b3eb068`,name:`IPVanish VPN 1 an`,image:`images/f85b5f2c-f57a-4885-9bd0-acd4b36f42e8/fix-bw3-154fabcf-39e3-46df-beb2-224fe01df0ff.webp`,price:`4,00 €`,originalPrice:``,stock:`625 en stock`,onSale:!1,link:`/product/87a923e6-ba62-4dd8-98a5-0d606b3eb068`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`2cce1b6b-b194-4a95-bdfc-2745ffe5ea9a`,name:`PureVPN`,image:`images/96d05cd5-8383-474b-a37e-1ecc9fda8733/fix-bw3-d91aad54-f913-4ce8-8587-71c1a6c3bc5c.webp`,price:`4,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/2cce1b6b-b194-4a95-bdfc-2745ffe5ea9a`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`e65e36af-2c96-4b40-bfbe-07267ecb541b`,name:`Mullvad VPN à vie`,image:`images/f6408b04-a583-4dcf-8b2e-dad828716bbb/fix-bw3-7f760887-36fa-4abc-907a-f1f73502165c.webp`,price:`8,25 €`,originalPrice:``,stock:`19 en stock`,onSale:!1,link:`/product/e65e36af-2c96-4b40-bfbe-07267ecb541b`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:8.25},{id:`0c227b91-f360-4a06-b3ee-fb1f8736cd58`,name:`HotSpot Shield VPN 1 an`,image:`images/61dfd499-6d2d-4c5e-ac28-326c9d0ecf23/fix-bw3-ea72907c-dedc-4738-8c6d-3085fddaba86.webp`,price:`4,00 €`,originalPrice:``,stock:`3 en stock`,onSale:!1,link:`/product/0c227b91-f360-4a06-b3ee-fb1f8736cd58`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`626ceea1-b14e-4ad8-a54f-4bef48939998`,name:`Comptes Rockstar Social Club RDR2`,image:`images/1f2bdbff-f5df-44b7-9e33-9fe1d80e188e/fix-bw3-0fe3681d-3d6c-47e9-9b55-a25cd3c32a82.webp`,price:`8,00 €`,originalPrice:``,stock:`29 en stock`,onSale:!1,link:`/product/626ceea1-b14e-4ad8-a54f-4bef48939998`,group:`Featured`,featured:!0,categories:[`Comptes`,`Réseaux sociaux`,`Jeux`],priceValue:8},{id:`338be3fd-4f17-4c7d-b417-cf4af9e5128a`,name:`Comptes GTA 5`,image:`images/51180ec4-ed6a-49c3-a471-c255d81d05a8/fix-bw3-4ccab6e3-8bff-41a2-a026-21b561ac3643.webp`,price:`8,85 €`,originalPrice:``,stock:`12 en stock`,onSale:!1,link:`/product/338be3fd-4f17-4c7d-b417-cf4af9e5128a`,group:`Featured`,featured:!0,categories:[`Comptes`,`Jeux`],priceValue:8.85},{id:`dcf80246-9820-40c0-962e-60cdc45ab7ce`,name:`Comptes e-mail Rambler.ru`,image:`images/c9a99f57-7497-496c-8e0f-7f739d8f5dd8/fix-bw3-0a11a3d8-204b-4485-9d38-7cbe09ac60d2.webp`,price:`2,00 €`,originalPrice:``,stock:`673 en stock`,onSale:!1,link:`/product/dcf80246-9820-40c0-962e-60cdc45ab7ce`,group:`Featured`,featured:!0,categories:[`Comptes`,`E-mails`],priceValue:2},{id:`0695af19-8ab3-439a-a817-070e62a75153`,name:`Niveau 50 à 100 [ Ranked Ready ]`,image:`images/d8ed3388-e3f8-4c3b-abd8-b591d84ae397/fix-bw3-dd192445-6d8f-4fc8-8974-7bc34c2bd5e4.webp`,price:`19,50 €`,originalPrice:``,stock:`19 en stock`,onSale:!1,link:`/product/0695af19-8ab3-439a-a817-070e62a75153`,group:`Comptes Rainbow Six Siege`,featured:!0,categories:[`Comptes`,`Jeux`,`Rainbow Six Siege`],priceValue:19.5},{id:`07384672-aca6-4296-80fe-78b896d77211`,name:`Comptes Escape From Tarkov`,image:`images/8e0c7552-ba26-401c-a607-a9049342dd69/fix-bw3-e05f0b1e-5ace-4c6c-ad55-f9cf23f0569c.webp`,price:`13,50 €`,originalPrice:``,stock:`7 en stock`,onSale:!1,link:`/product/07384672-aca6-4296-80fe-78b896d77211`,group:`Featured`,featured:!0,categories:[`Comptes`,`Jeux`],priceValue:13.5},{id:`e1d59662-0183-41b8-8847-ad0a7d0d12ed`,name:`CapCut Pro à vie`,image:`images/af8fed4f-d533-49ae-b719-1e65d1082b76/fix-bw3-862d40ee-7d3b-42f2-b43b-d78442699c07.webp`,price:`5,00 €`,originalPrice:``,stock:`1 en stock`,onSale:!1,link:`/product/e1d59662-0183-41b8-8847-ad0a7d0d12ed`,group:`Featured`,featured:!0,categories:[],priceValue:5},{id:`ab3179ef-79f2-4f61-ab87-0f3d6ca88706`,name:`Compte Minecraft (Full Access)`,image:`images/53634fbf-e5bc-42b6-aeb5-8fda8e9a591a/fix-bw3-87c5a37a-f6f7-4848-9e2c-9385e3208c17.webp`,price:`8,45 €`,originalPrice:``,stock:`77 en stock`,onSale:!1,link:`/product/ab3179ef-79f2-4f61-ab87-0f3d6ca88706`,group:`Featured`,featured:!0,categories:[`Comptes`,`Jeux`,`Minecraft`],priceValue:8.45},{id:`8963b3c7-922a-4f20-afed-5bd3f938102d`,name:`14 Boosts de serveur de 1 mois`,image:`images/0ef18fcc-3dc2-496e-bd73-6b9103a4b0a8/fix-bw3-e7ca7462-d9ea-45f7-886c-3e74da5bd2c7.webp`,price:`6,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/8963b3c7-922a-4f20-afed-5bd3f938102d`,group:`Featured`,featured:!0,categories:[`Boosting`],priceValue:6},{id:`9505dae8-23e5-4fc7-bf79-59cc06ddca97`,name:`Comptes Rust`,image:`images/c0657585-ce86-44ae-b6fb-29fa42d3edea/fix-bw3-71b2e838-d374-40cb-b39f-02b63e65e272.webp`,price:`10,45 €`,originalPrice:``,stock:`20 en stock`,onSale:!1,link:`/product/9505dae8-23e5-4fc7-bf79-59cc06ddca97`,group:`Featured`,featured:!0,categories:[`Comptes`,`Jeux`,`Rust`],priceValue:10.45},{id:`23879b6a-03b4-4191-9596-7b6dd25a5535`,name:`Comptes Rust NFA`,image:`images/eff29f7a-f1b3-4b6d-ac81-096360d1bc6b/fix-bw3-9110a9c6-a757-4003-8287-a6842e5e5fdb.webp`,price:`4,80 €`,originalPrice:``,stock:`28 en stock`,onSale:!1,link:`/product/23879b6a-03b4-4191-9596-7b6dd25a5535`,group:`Featured`,featured:!0,categories:[`Comptes`,`Jeux`,`Rust`],priceValue:4.8},{id:`9adcbe7a-dc4a-4f17-ae4a-943dbea0ad91`,name:`Comptes UFC à vie`,image:`images/4d0d9657-e587-46cb-b4db-58dc714b31c8/fix-bw3-cbfdf2f0-83da-4224-88e4-1d1e2308e095.webp`,price:`5,00 €`,originalPrice:``,stock:`58 en stock`,onSale:!1,link:`/product/9adcbe7a-dc4a-4f17-ae4a-943dbea0ad91`,group:`Featured`,featured:!0,categories:[`Comptes`],priceValue:5},{id:`850aca4d-3619-4783-abea-9f8e1c931e12`,name:`Compte Spotify à vie`,image:`images/91a7f417-02e5-4e5a-bc31-a3272faf5ea5/fix-bw3-a446f2d9-879f-4fb8-9970-dc05d11b2c25.webp`,price:`5,25 €`,originalPrice:``,stock:`14 en stock`,onSale:!1,link:`/product/850aca4d-3619-4783-abea-9f8e1c931e12`,group:`Featured`,featured:!0,categories:[`Comptes`],priceValue:5.25},{id:`b19b530f-5c3c-422f-a0a9-5d56525d318d`,name:`Comptes HBO Max à vie`,image:`images/11450e29-6100-462c-820b-638d7e83ed50/fix-bw3-cbe0e160-fc24-4802-adce-52c3cb36c147.webp`,price:`5,00 €`,originalPrice:``,stock:`933 en stock`,onSale:!1,link:`/product/b19b530f-5c3c-422f-a0a9-5d56525d318d`,group:`Featured`,featured:!0,categories:[`Comptes`],priceValue:5},{id:`868ffca3-c32f-45cc-bf3a-fce53cb7c932`,name:`Comptes NFA à 0,50$`,image:`images/7282d7da-ca9d-4309-83b1-742e426624b8/fix-bw3-a3b929dc-cd33-46bb-8751-1838809f9558.webp`,price:`30,00 €`,originalPrice:``,stock:`79 en stock`,onSale:!1,link:`/product/868ffca3-c32f-45cc-bf3a-fce53cb7c932`,group:`Featured`,featured:!0,categories:[`Comptes`],priceValue:30},{id:`041d5379-5e8c-4ac3-9d10-396aab6f91f2`,name:`Instagram avec 1k+ abonnés`,image:`images/d7421b44-ebe1-4076-9dfa-02553e611c1c/fix-bw3-17a099a6-cc6c-428a-9826-a91e49498cde.webp`,price:`7,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/041d5379-5e8c-4ac3-9d10-396aab6f91f2`,group:`Featured`,featured:!0,categories:[`Réseaux sociaux`],priceValue:7.5},{id:`e76a5942-825d-40ec-90be-cee44a414f81`,name:`Crunchyroll [membre MEGA FAN] à vie`,image:`images/4ba4bbee-82da-41e5-b262-2830b1c203c8/fix-bw3-e0365594-5e33-41d8-bb3a-3431fabfaf36.webp`,price:`4,00 €`,originalPrice:``,stock:`1 en stock`,onSale:!1,link:`/product/e76a5942-825d-40ec-90be-cee44a414f81`,group:`Featured`,featured:!0,categories:[],priceValue:4},{id:`08d3b2c5-9fed-49e8-85f2-aeda9ce5d58a`,name:`Instagram avec 5k+ abonnés`,image:`images/878a1875-8a1b-4756-9e51-968a27c6f81b/fix-bw3-46296022-52ce-44fc-8136-a4e848373020.webp`,price:`17,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/08d3b2c5-9fed-49e8-85f2-aeda9ce5d58a`,group:`Featured`,featured:!0,categories:[`Réseaux sociaux`],priceValue:17.5},{id:`130fe505-8f3e-4132-b63e-1e6c36c1b9d4`,name:`Duolingo à vie`,image:`images/ba850ba2-fb1e-45ea-9081-85e3e00d3f9a/fix-bw3-7581944c-b982-4fc7-ba10-44e875b333e3.webp`,price:`3,00 €`,originalPrice:``,stock:`275 en stock`,onSale:!1,link:`/product/130fe505-8f3e-4132-b63e-1e6c36c1b9d4`,group:`Featured`,featured:!0,categories:[],priceValue:3},{id:`5bde03b6-bb00-43b1-a91e-3f5e7f4b759a`,name:`NBA à vie`,image:`images/7e67fd14-77df-45c7-a737-2faa30101fff/fix-bw3-b33e9204-36fc-47aa-8cf9-aa1f40542d75.webp`,price:`5,00 €`,originalPrice:``,stock:`74 en stock`,onSale:!1,link:`/product/5bde03b6-bb00-43b1-a91e-3f5e7f4b759a`,group:`Featured`,featured:!0,categories:[],priceValue:5},{id:`ab8ea7a1-20da-4d2e-bc04-634e76cfea2b`,name:`Jeux Steam GRATUITS`,image:`images/4210f5bf-0836-4aae-ae9d-b9bdf020d202/fix-bw3-b72df386-d05b-4967-a15d-604a0eb1d753.webp`,price:`35,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/ab8ea7a1-20da-4d2e-bc04-634e76cfea2b`,group:`Featured`,featured:!0,categories:[`Jeux`],priceValue:35},{id:`e3901ff5-b641-4f19-b0f4-06d93b80a946`,name:`Prime Video 6 mois`,image:`images/c6988056-9170-4937-b970-3ec40d4c3106/fix-bw3-385a71fa-f510-4228-a882-6bfddc91d225.webp`,price:`8,50 €`,originalPrice:``,stock:`139 en stock`,onSale:!1,link:`/product/e3901ff5-b641-4f19-b0f4-06d93b80a946`,group:`Featured`,featured:!0,categories:[],priceValue:8.5},{id:`2d630a23-5f9b-4091-9b57-b327e5a24155`,name:`Clé Spotify à vie`,image:`images/2c861522-73dd-4595-aece-f2e9109fd9a0/fix-bw3-34af1fc5-1d1e-4dcf-8f32-fe730e7521c8.webp`,price:`8,05 €`,originalPrice:``,stock:`105 en stock`,onSale:!1,link:`/product/2d630a23-5f9b-4091-9b57-b327e5a24155`,group:`Featured`,featured:!0,categories:[],priceValue:8.05},{id:`0d6edf75-d785-430a-b9a2-eed3b76096bd`,name:`Movistar.es+ à vie`,image:`images/21bcb4ab-822d-4446-94c2-0c392cea4695/fix-bw3-dbb396e0-2411-4f21-8ac6-d08a12bc6de1.webp`,price:`5,00 €`,originalPrice:``,stock:`179 en stock`,onSale:!1,link:`/product/0d6edf75-d785-430a-b9a2-eed3b76096bd`,group:`Featured`,featured:!0,categories:[],priceValue:5},{id:`ce5785b8-2fb6-48aa-9304-906062f468f5`,name:`Oneplay à vie [MAXIMUM]`,image:`images/bd968973-1c52-4c1d-b8d3-c0ce87cebac8/fix-bw3-6402f37d-b525-43fb-a63b-c12ce85b8800.webp`,price:`5,75 €`,originalPrice:``,stock:`265 en stock`,onSale:!1,link:`/product/ce5785b8-2fb6-48aa-9304-906062f468f5`,group:`Featured`,featured:!0,categories:[],priceValue:5.75},{id:`19df5f59-0e50-4fbf-af7d-1e4e28be8801`,name:`Lien cadeau Nitro Boost`,image:`images/bd3fcb09-b4c0-4c8d-b439-992a89eab438/fix-bw3-9991c30c-4bc7-4b2f-915d-884978fdbd3c.webp`,price:`5,50 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,link:`/product/19df5f59-0e50-4fbf-af7d-1e4e28be8801`,group:`Featured`,featured:!0,categories:[`Boosting`],priceValue:5.5},{id:`97c023d1-e7bb-423d-9ddd-0d8303e764fc`,name:`AMC+ à vie`,image:`images/b802dc8e-f058-4f53-a491-949c3160dd88/fix-bw3-bb74a4a4-aa20-43f0-91c3-3d7321d68dff.webp`,price:`4,00 €`,originalPrice:``,stock:`108 en stock`,onSale:!1,link:`/product/97c023d1-e7bb-423d-9ddd-0d8303e764fc`,group:`Featured`,featured:!0,categories:[],priceValue:4},{id:`3a71d738-cdc1-4a31-9e6b-40958f0ac810`,name:`Wondershare à vie`,image:`images/9d091783-1e13-41d0-a522-64fc9a09d57d/fix-bw3-29f7d306-ed74-4a87-962e-db2a2a4c9102.webp`,price:`4,00 €`,originalPrice:``,stock:`25 en stock`,onSale:!1,link:`/product/3a71d738-cdc1-4a31-9e6b-40958f0ac810`,group:`Featured`,featured:!0,categories:[],priceValue:4},{id:`4590efa7-5844-4531-b177-5381da0325bc`,name:`N’importe quel jeu solo`,image:`images/e8765060-3eb7-4e74-be55-5c6626360a3f/fix-bw3-4fc58e8b-a939-4a0c-b041-633888eb5810.webp`,price:`7,00 €`,originalPrice:``,stock:`985 en stock`,onSale:!1,link:`/product/4590efa7-5844-4531-b177-5381da0325bc`,group:`Featured`,featured:!0,categories:[`Jeux`],priceValue:7},{id:`d79f277b-f260-4c29-b213-1d84147cd1c8`,name:`Canva Premium à vie`,image:`images/e1363f6c-1a9c-465b-ae7f-00e05343f0bc/canva_fixed.jpg`,price:`5,00 €`,originalPrice:``,stock:`83 en stock`,onSale:!1,link:`/product/d79f277b-f260-4c29-b213-1d84147cd1c8`,group:`Featured`,featured:!0,categories:[],priceValue:5},{id:`84a8d150-6bf3-4de8-a8af-523559433a23`,name:`Compte Deezer à vie`,image:`images/2af8fb6b-4bd7-43c2-862f-1e2eac5ed02d/fix-bw3-1d5c7746-249c-4515-b6e0-8cf1093d48d2.webp`,price:`5,00 €`,originalPrice:``,stock:`335 en stock`,onSale:!1,link:`/product/84a8d150-6bf3-4de8-a8af-523559433a23`,group:`Featured`,featured:!0,categories:[`Comptes`],priceValue:5},{id:`fd847385-0597-40a4-a0cf-41ea4ed25bb2`,name:`Clé ExpressVPN à vie`,image:`images/cd562646-78af-43cc-b551-8a42cf076df4/fix-bw3-5388c3cc-20c6-439f-bd83-b1d472cd1f2f.webp`,price:`4,00 €`,originalPrice:``,stock:`259 en stock`,onSale:!1,link:`/product/fd847385-0597-40a4-a0cf-41ea4ed25bb2`,group:`Featured`,featured:!0,categories:[`VPN`],priceValue:4},{id:`ffc3ada8-92dc-4d0f-82e3-38479fc2d5fa`,name:`Comptes e-mail Outlook`,image:`images/76d8a604-cfc0-44d0-b504-0cb039d9c697/outlook_fixed.jpg`,price:`2,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/ffc3ada8-92dc-4d0f-82e3-38479fc2d5fa`,group:`Featured`,featured:!0,categories:[`Comptes`,`E-mails`],priceValue:2},{id:`3b2386c2-5d03-41f8-9f2b-1093a58428d2`,name:`NFL+ Premium à vie`,image:`images/e55dbb9f-9761-4f6c-9b1e-5486ec1581d6/fix-bw3-773f92cd-9a90-42e3-bd2e-cb813a88bc73.webp`,price:`5,00 €`,originalPrice:``,stock:`31 en stock`,onSale:!1,link:`/product/3b2386c2-5d03-41f8-9f2b-1093a58428d2`,group:`Featured`,featured:!0,categories:[],priceValue:5},{id:`d216af7c-1de1-45b8-b30f-058295a6a367`,name:`QuillBot Premium à vie`,image:`images/68198010-b065-4a36-87b4-d7599de567f4/fix-bw3-d04a0521-38fa-4e39-990e-878963c0b446.webp`,price:`5,50 €`,originalPrice:``,stock:`78 en stock`,onSale:!1,link:`/product/d216af7c-1de1-45b8-b30f-058295a6a367`,group:`Featured`,featured:!0,categories:[],priceValue:5.5},{id:`44eee42a-0454-4d42-a88e-020c84e3dff2`,name:`EA FC 27 PS4/PS5 — Standard`,image:`images/bb91657b-1732-4b44-9a0e-2e8532ed462b/image-318.webp`,price:`36,50 €`,originalPrice:``,stock:`47 en stock`,onSale:!1,link:`/product/44eee42a-0454-4d42-a88e-020c84e3dff2`,group:`Featured`,featured:!0,categories:[`Jeux`],priceValue:36.5},{id:`2768f690-a788-4300-942c-0ca3459e923d`,name:`EA FC 27 PS4/PS5 — Ultimate Plus`,image:`images/bb91657b-1732-4b44-9a0e-2e8532ed462b/image-318.webp`,price:`57,50 €`,originalPrice:``,stock:`47 en stock`,onSale:!1,link:`/product/2768f690-a788-4300-942c-0ca3459e923d`,group:`Featured`,featured:!0,categories:[`Jeux`],priceValue:57.5},{id:`ff3a5142-d8ea-47a7-8457-f50a0e90770d`,name:`EA FC 27 PS4/PS5 — Ultimate`,image:`images/bb91657b-1732-4b44-9a0e-2e8532ed462b/image-318.webp`,price:`47,50 €`,originalPrice:``,stock:`47 en stock`,onSale:!1,link:`/product/ff3a5142-d8ea-47a7-8457-f50a0e90770d`,group:`Featured`,featured:!0,categories:[`Jeux`],priceValue:47.5},{id:`933b42af-0e05-4144-9ac6-86765b2647e5`,name:`NBA 2K27`,image:`images/941e17f2-28be-48e6-9eb3-2f26ef63adcf/nba-players-color.png`,price:`35,00 €`,originalPrice:``,stock:`36 en stock`,onSale:!1,link:`/product/933b42af-0e05-4144-9ac6-86765b2647e5`,group:`Featured`,featured:!0,categories:[],priceValue:35},{id:`c1d5f84d-1081-4949-8552-70134eaa5700`,name:`NBA 2K27 — Ultimate`,image:`images/941e17f2-28be-48e6-9eb3-2f26ef63adcf/nba-players-color.png`,price:`45,00 €`,originalPrice:``,stock:`36 en stock`,onSale:!1,link:`/product/c1d5f84d-1081-4949-8552-70134eaa5700`,group:`Featured`,featured:!0,categories:[],priceValue:45},{id:`5f5f5ee3-ad36-44d9-baec-10c5c4720537`,name:`EA FC 27 PC — Ultimate Plus`,image:`images/5d52962d-1d99-47c8-a1ed-baf8a338b198/image-376.webp`,price:`36,00 €`,originalPrice:``,stock:`61 en stock`,onSale:!1,link:`/product/5f5f5ee3-ad36-44d9-baec-10c5c4720537`,group:`Featured`,featured:!0,categories:[`Jeux`],priceValue:36},{id:`033013bf-b0af-464b-bcc4-f885b0fdb630`,name:`Perplexity Enterprise Pro à vie`,image:`images/93aec202-f08e-4c14-abaf-f52ad08bd506/fix-bw3-7faa5062-141d-4f1f-af4a-6cd4d95514d6.webp`,price:`16,50 €`,originalPrice:``,stock:`48 en stock`,onSale:!1,link:`/product/033013bf-b0af-464b-bcc4-f885b0fdb630`,group:`Featured`,featured:!0,categories:[`IA`],priceValue:16.5},{id:`aef623b8-c002-462a-9685-b0a3b8d7e6e1`,name:`14 Boosts de serveur de 3 mois`,image:`images/90b050e6-2642-469c-8311-02d0a2f61ea2/fix-bw3-97caf67b-2783-4ef7-be28-be211358e6cd.webp`,price:`13,00 €`,originalPrice:``,stock:`12 en stock`,onSale:!1,link:`/product/aef623b8-c002-462a-9685-b0a3b8d7e6e1`,group:`Featured`,featured:!0,categories:[`Boosting`],priceValue:13},{id:`51cb7f1e-650e-4c85-b927-cae9db097de2`,name:`E-mail vérifié`,image:`images/38643618-69d9-4068-88d5-673a714c3907/discord_fixed.jpg`,price:`2,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/51cb7f1e-650e-4c85-b927-cae9db097de2`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`,`E-mails`],priceValue:2},{id:`c64002e3-ae93-4aab-be49-e337b581140f`,name:`E-mail vérifié + téléphone vérifié`,image:`images/0f36c92a-2b51-4f83-ab9f-168ba97e0bcd/fix-bw3-9299c1c3-e1f3-4de2-a784-a6282d412b3e.webp`,price:`2,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/c64002e3-ae93-4aab-be49-e337b581140f`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`,`E-mails`],priceValue:2},{id:`76e0f82c-a468-4fdd-aacb-0117a3f7b67c`,name:`E-mail ancien de 3 mois ou plus + téléphone vérifié`,image:`images/cf579210-fac3-4865-bbc1-fdf732a0654c/fix-bw3-f5a1f579-acbd-4e05-8f44-a044e60e6ccb.webp`,price:`2,00 €`,originalPrice:``,stock:`805 en stock`,onSale:!1,link:`/product/76e0f82c-a468-4fdd-aacb-0117a3f7b67c`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`,`E-mails`],priceValue:2},{id:`ce47f46c-8297-4af6-b322-9dd0108fc47a`,name:`Comptes 2023`,image:`images/8d8bcfde-a4b8-4761-a923-956e4b5e7a36/fix-bw3-40cc10d9-e025-4447-95d0-b56a8a274bc0.webp`,price:`1,50 €`,originalPrice:``,stock:`433 en stock`,onSale:!1,link:`/product/ce47f46c-8297-4af6-b322-9dd0108fc47a`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:1.5},{id:`c8db5d48-0c82-458e-a5bc-ece618597107`,name:`Comptes 2021`,image:`images/0e03e257-39a5-44b1-8e6e-0333ee445192/fix-bw3-39c158f6-c29f-48d6-addc-5caf8d849182.webp`,price:`2,00 €`,originalPrice:``,stock:`46 en stock`,onSale:!1,link:`/product/c8db5d48-0c82-458e-a5bc-ece618597107`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:2},{id:`f7df1393-5e20-4872-ab9d-e8e63aa07d9b`,name:`Comptes 2020`,image:`images/becba0df-c13a-4c21-ab88-2fe5412f18f6/fix-bw3-ec8c1d3a-e54e-4f75-be86-76358e867aac.webp`,price:`2,90 €`,originalPrice:``,stock:`91 en stock`,onSale:!1,link:`/product/f7df1393-5e20-4872-ab9d-e8e63aa07d9b`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:2.9},{id:`ae6ac3ec-3b3a-4d61-8962-451b6c66f019`,name:`Nitro 1 mois + 2 Boosts + téléphone vérifié`,image:`images/17e0e63c-c51c-4bb6-8ab1-fe7010e86a72/fix-bw3-20b54f5c-a461-49df-af6a-93044c9920e1.webp`,price:`4,25 €`,originalPrice:``,stock:`10 en stock`,onSale:!1,link:`/product/ae6ac3ec-3b3a-4d61-8962-451b6c66f019`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`,`Boosting`],priceValue:4.25},{id:`4b5f17f9-6065-4350-9c6e-e10da83debea`,name:`Comptes 2019`,image:`images/aeec9ecc-a2d8-44c4-88cc-4ca65edb0659/fix-bw3-8f9adcb5-84b1-44db-925b-0b73e0c00ffa.webp`,price:`4,90 €`,originalPrice:``,stock:`66 en stock`,onSale:!1,link:`/product/4b5f17f9-6065-4350-9c6e-e10da83debea`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:4.9},{id:`108d4874-124a-4dfa-8169-217166685850`,name:`E-mail avec pseudo de 4 lettres + SMS`,image:`images/e945b3e0-7167-4605-bcbf-c58b14389080/fix-bw3-5a461b5c-b0da-4e63-b161-73e4a003a8a0.webp`,price:`2,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/108d4874-124a-4dfa-8169-217166685850`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`,`E-mails`],priceValue:2},{id:`e14f9686-e6f9-4433-85c7-ca162209f368`,name:`Comptes 2018`,image:`images/686a6e1f-d9be-4039-937b-e3faa708fb9f/fix-bw3-4fb09cee-8cae-41c1-bb2c-67d63bb1b94f.webp`,price:`6,45 €`,originalPrice:``,stock:`30 en stock`,onSale:!1,link:`/product/e14f9686-e6f9-4433-85c7-ca162209f368`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:6.45},{id:`6c8e7b0b-46bb-4559-b746-8dffd675bbf5`,name:`Comptes 2017`,image:`images/e334441f-f395-4ca8-b967-96e66d8d8d22/fix-bw3-4dfef591-4ede-447f-9719-d1573fe208be.webp`,price:`7,65 €`,originalPrice:``,stock:`42 en stock`,onSale:!1,link:`/product/6c8e7b0b-46bb-4559-b746-8dffd675bbf5`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:7.65},{id:`a9e596f4-55fa-4e75-b1a2-4c2e0f40eedd`,name:`Nitro 3 mois + 2 Boosts + téléphone vérifié`,image:`images/4fdf6259-23a2-4d2d-81c8-bc317bca54cf/fix-bw3-3e242138-2192-4521-a403-8207e0adb008.webp`,price:`8,80 €`,originalPrice:``,stock:`5 en stock`,onSale:!1,link:`/product/a9e596f4-55fa-4e75-b1a2-4c2e0f40eedd`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`,`Boosting`],priceValue:8.8},{id:`d21d3c23-3041-4b3f-8e44-b6b3f6d65b92`,name:`Comptes 2016`,image:`images/c0935c32-6ff7-4e2b-9487-37fb8e564cb0/fix-bw3-4cdc2679-b450-432b-9da4-d389d4b02690.webp`,price:`11,85 €`,originalPrice:``,stock:`15 en stock`,onSale:!1,link:`/product/d21d3c23-3041-4b3f-8e44-b6b3f6d65b92`,group:`Comptes Discord Full Access`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:11.85},{id:`eaa2928d-fc2e-456f-bba6-a72d6931816c`,name:`Spoofer FiveM [1 jour]`,image:`images/e31a346c-5157-47bf-83b5-ab10cf00c461/image-042.webp`,price:`2,65 €`,originalPrice:``,stock:`14 en stock`,onSale:!1,link:`/product/eaa2928d-fc2e-456f-bba6-a72d6931816c`,group:`Spoofer FiveM`,featured:!1,categories:[`Jeux`,`Spoofers`,`FiveM`],priceValue:2.65},{id:`7240ffd9-717d-43ed-8e2a-d40155babc08`,name:`Spoofer FiveM [7 jours]`,image:`images/e0987d49-b6e0-43b4-93fd-e134255642ee/image-099.webp`,price:`8,25 €`,originalPrice:``,stock:`22 en stock`,onSale:!1,link:`/product/7240ffd9-717d-43ed-8e2a-d40155babc08`,group:`Spoofer FiveM`,featured:!1,categories:[`Jeux`,`Spoofers`,`FiveM`],priceValue:8.25},{id:`c64b7d40-95c7-428f-a323-26ee8719d986`,name:`Spoofer FiveM [30 jours]`,image:`images/a0770c0f-49c9-4437-b0ac-4640cd74636c/image-094.webp`,price:`12,45 €`,originalPrice:``,stock:`15 en stock`,onSale:!1,link:`/product/c64b7d40-95c7-428f-a323-26ee8719d986`,group:`Spoofer FiveM`,featured:!1,categories:[`Jeux`,`Spoofers`,`FiveM`],priceValue:12.45},{id:`85d45340-2735-4d66-9511-6a6f1e2588ca`,name:`Spoofer FiveM [à vie]`,image:`images/87cd88f0-0db5-4faa-862c-79ab9eef936a/image-175.webp`,price:`25,90 €`,originalPrice:``,stock:`24 en stock`,onSale:!1,link:`/product/85d45340-2735-4d66-9511-6a6f1e2588ca`,group:`Spoofer FiveM`,featured:!1,categories:[`Jeux`,`Spoofers`,`FiveM`],priceValue:25.9},{id:`14871bbe-1476-4713-bdc5-722216e55f92`,name:`Compte CS2 Prime (0-300 h), médailles incluses 0-2`,image:`images/1a8365d4-226b-4dc3-8e6e-1b21d56d0bf4/fix-bw3-2adddc95-2277-46cc-8ae8-8fcfb3fedc89.webp`,price:`13,75 €`,originalPrice:``,stock:`37 en stock`,onSale:!1,link:`/product/14871bbe-1476-4713-bdc5-722216e55f92`,group:`Comptes CS2 Prime`,featured:!1,categories:[`Comptes`,`Jeux`,`Counter Strike 2`],priceValue:13.75},{id:`db305c0e-4ee8-40c8-8801-3e6f418c3ccf`,name:`Compte CS2 Prime (1100-4000 h), médailles incluses 6-8`,image:`images/f2e54157-adf1-40dd-b3ff-a44cc801216a/fix-bw3-1f019067-035c-4988-a45f-842b0a09d52b.webp`,price:`25,50 €`,originalPrice:``,stock:`14 en stock`,onSale:!1,link:`/product/db305c0e-4ee8-40c8-8801-3e6f418c3ccf`,group:`Comptes CS2 Prime`,featured:!1,categories:[`Comptes`,`Jeux`,`Counter Strike 2`],priceValue:25.5},{id:`cdd93374-8b5c-42ce-87f9-edcdc1842c4b`,name:`Compte CS2 avec 5000+ heures`,image:`images/1f709701-0ddd-4593-8233-ac150dcadf5b/fix-bw3-e8508413-4a2c-48c1-bcbb-97c995119801.webp`,price:`7,50 €`,originalPrice:``,stock:`2 en stock`,onSale:!1,link:`/product/cdd93374-8b5c-42ce-87f9-edcdc1842c4b`,group:`Comptes CS2 avec heures de jeu`,featured:!1,categories:[`Comptes`,`Jeux`,`Counter Strike 2`],priceValue:7.5},{id:`5100220a-7ffa-41a1-974e-112f850b087b`,name:`Compte CS2 avec 10000+ heures`,image:`images/306d50b8-6968-491e-bfa4-83fa356157dd/fix-bw3-e60a1a3d-25a1-4f5c-9659-586424822877.webp`,price:`9,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/5100220a-7ffa-41a1-974e-112f850b087b`,group:`Comptes CS2 avec heures de jeu`,featured:!1,categories:[`Comptes`,`Jeux`,`Counter Strike 2`],priceValue:9.5},{id:`83df5c60-d591-4d3c-90d8-6c6ae6f04bc8`,name:`Comptes CS2 Prime NFA`,image:`images/e9a8683c-6723-466a-839f-d2de0a6625a7/fix-bw3-3f341745-41ff-4d2d-8204-0fda79bac383.webp`,price:`4,00 €`,originalPrice:``,stock:`26 en stock`,onSale:!1,link:`/product/83df5c60-d591-4d3c-90d8-6c6ae6f04bc8`,group:`Comptes CS2 Prime NFA`,featured:!1,categories:[`Comptes`,`Jeux`,`Counter Strike 2`],priceValue:4},{id:`54e40bd8-2769-4d6c-8da5-2ddbe5b475e3`,name:`Niveau 20-100 [ Ranked Ready ]`,image:`images/1b7e21ee-f8f5-4a48-9aa2-39310421a2e9/fix-bw3-badf0fe3-4798-4a5c-9752-b74d1b4dc45e.webp`,price:`8,05 €`,originalPrice:``,stock:`10 en stock`,onSale:!1,link:`/product/54e40bd8-2769-4d6c-8da5-2ddbe5b475e3`,group:`Comptes Rainbow Six Siege`,featured:!1,categories:[`Comptes`,`Jeux`,`Rainbow Six Siege`],priceValue:8.05},{id:`26a187e0-c9f6-44b4-9e6b-f6551d852c43`,name:`Niveau 100-300 [ Ranked Ready ]`,image:`images/61c8917c-853c-4311-ad33-bcd38e09a486/fix-bw3-f1ed4752-ad16-4c2a-81ca-ba0db562e544.webp`,price:`22,00 €`,originalPrice:``,stock:`11 en stock`,onSale:!1,link:`/product/26a187e0-c9f6-44b4-9e6b-f6551d852c43`,group:`Comptes Rainbow Six Siege`,featured:!1,categories:[`Comptes`,`Jeux`,`Rainbow Six Siege`],priceValue:22},{id:`7c0ecad2-c7c6-4ab4-89a0-959999abff7e`,name:`Niveau 300-500 [ Ranked Ready ]`,image:`images/6bcab892-62b3-455e-9b72-097e01cdc189/fix-bw3-d78310c6-ebe9-4f4f-8209-fb208df4a3d4.webp`,price:`36,50 €`,originalPrice:``,stock:`4 en stock`,onSale:!1,link:`/product/7c0ecad2-c7c6-4ab4-89a0-959999abff7e`,group:`Comptes Rainbow Six Siege`,featured:!1,categories:[`Comptes`,`Jeux`,`Rainbow Six Siege`],priceValue:36.5},{id:`b8587591-b2c6-48f3-a40b-66388c3dbcf4`,name:`UE – Niveau 1-20 [ Ranked Ready ]`,image:`images/f09b1c88-5068-4467-bf2b-b19a8191ab82/fix-bw3-a01c93a6-4e8c-4408-b567-3245fc673418.webp`,price:`7,75 €`,originalPrice:``,stock:`19 en stock`,onSale:!1,link:`/product/b8587591-b2c6-48f3-a40b-66388c3dbcf4`,group:`Comptes Valorant`,featured:!1,categories:[`Comptes`,`Jeux`,`Valorant`],priceValue:7.75},{id:`44432ad5-d4bc-49f4-893c-ab6d486eb87a`,name:`UE - Niveau 1-20 [couteau + Skins] Inventaire : 1000VP - 3000VP`,image:`images/7b884dfd-b4e3-4ca8-b839-43a9d0ad7a9a/fix-bw3-3c2ab287-7371-4447-b14d-064992ce8201.webp`,price:`13,50 €`,originalPrice:``,stock:`6 en stock`,onSale:!1,link:`/product/44432ad5-d4bc-49f4-893c-ab6d486eb87a`,group:`Comptes Valorant`,featured:!1,categories:[`Comptes`,`Jeux`,`Valorant`],priceValue:13.5},{id:`2cd676ef-a0f8-4233-b1ab-1bad9ce0d306`,name:`UE - Niveau 20+ [couteau + Skins] Inventaire : 2500VP - 5000VP`,image:`images/9183862b-bff1-40ef-839f-1064e301e3cf/fix-bw3-65636e46-9f13-4e3a-b8e5-26802bd6d3b5.webp`,price:`15,75 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/2cd676ef-a0f8-4233-b1ab-1bad9ce0d306`,group:`Comptes Valorant`,featured:!1,categories:[`Comptes`,`Jeux`,`Valorant`],priceValue:15.75},{id:`27db8d74-dd49-437f-8767-83df2d7d87cf`,name:`UE - Niveau 40+ [couteau + Skins] Inventaire : 5000VP - 10000VP`,image:`images/1543f64d-2810-4a58-b209-fbcf4d69755d/fix-bw3-695cc259-edfa-48f5-82bf-d4a77f5047f1.webp`,price:`25,50 €`,originalPrice:``,stock:`4 en stock`,onSale:!1,link:`/product/27db8d74-dd49-437f-8767-83df2d7d87cf`,group:`Comptes Valorant`,featured:!1,categories:[`Comptes`,`Jeux`,`Valorant`],priceValue:25.5},{id:`44d1a143-9ff8-4105-a53c-41e1fe429253`,name:`UE - Niveau 50+ [couteau + Skins] Inventaire : 10000VP - 20000VP`,image:`images/b6319922-c921-489e-9bf3-cee26b3d3bbc/fix-bw3-6cee04a4-7c32-4f97-8cfe-5ca9b83df9e6.webp`,price:`45,00 €`,originalPrice:``,stock:`5 en stock`,onSale:!1,link:`/product/44d1a143-9ff8-4105-a53c-41e1fe429253`,group:`Comptes Valorant`,featured:!1,categories:[`Comptes`,`Jeux`,`Valorant`],priceValue:45},{id:`cfe677cf-3be5-4598-961d-96fe4879520e`,name:`UE - Niveau 100+ [couteau + Skins] Inventaire : 30000 - 55000VP`,image:`images/35519a46-0d80-41eb-b514-ddfd3fbdca4d/fix-bw3-dd4833fe-b95e-4e8e-a280-7112ce8fb4d5.webp`,price:`55,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/cfe677cf-3be5-4598-961d-96fe4879520e`,group:`Comptes Valorant`,featured:!1,categories:[`Comptes`,`Jeux`,`Valorant`],priceValue:55},{id:`09c5b688-513c-40dc-a6c9-fb2f2c7a9eec`,name:`Niveau 10 à 50`,image:`images/5eeac4a0-6b6f-40c2-983c-d4832fb8150e/fix-bw3-8a1333e3-b1c7-47bd-8a3c-5d42137e0f1f.webp`,price:`8,80 €`,originalPrice:``,stock:`17 en stock`,onSale:!1,link:`/product/09c5b688-513c-40dc-a6c9-fb2f2c7a9eec`,group:`Comptes Rainbow Six Siege`,featured:!1,categories:[`Comptes`,`Jeux`,`Rainbow Six Siege`],priceValue:8.8},{id:`dc684ebe-b67a-4501-81a8-41c1cc86b9a7`,name:`Niveau 100 à 300 [100+ SKINS]`,image:`images/8da6b0bf-124a-43f9-a4a9-1972e3879fa5/fix-bw3-2043ab4c-d0f6-4125-a47f-14ab4466675c.webp`,price:`35,50 €`,originalPrice:``,stock:`10 en stock`,onSale:!1,link:`/product/dc684ebe-b67a-4501-81a8-41c1cc86b9a7`,group:`Comptes Rainbow Six Siege`,featured:!1,categories:[`Comptes`,`Jeux`,`Rainbow Six Siege`],priceValue:35.5},{id:`aa267c63-47da-4132-9324-0494dbfb5078`,name:`Comptes Fortnite avec 3-10 Skins [ Ranked Ready ]`,image:`images/3f03ced6-75a6-44ca-9af5-b53b6d245e3e/fix-bw3-00b3adb2-1a13-4bb0-88e3-3c07fc4b102d.webp`,price:`3,00 €`,originalPrice:``,stock:`14 en stock`,onSale:!1,link:`/product/aa267c63-47da-4132-9324-0494dbfb5078`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:3},{id:`85d89e70-6650-4ca9-8cc8-d94949cbf28a`,name:`Comptes Fortnite avec 10-20 Skins [ Ranked Ready ]`,image:`images/f1118813-d0b2-4c62-acf5-f3ed606af169/fix-bw3-6517b099-e58c-46d7-bf48-1c87d094f777.webp`,price:`4,75 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/85d89e70-6650-4ca9-8cc8-d94949cbf28a`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:4.75},{id:`5a8ba577-a42c-4352-8453-d4bd0fabda6e`,name:`Comptes Fortnite avec 20-50 Skins [ Ranked Ready ]`,image:`images/d08db21b-e009-43d9-9b60-6ce35850b15d/fix-bw3-ea56b54b-1627-4de5-b1f1-adc0c6a47266.webp`,price:`7,95 €`,originalPrice:``,stock:`12 en stock`,onSale:!1,link:`/product/5a8ba577-a42c-4352-8453-d4bd0fabda6e`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:7.95},{id:`d37517af-813c-42cd-b881-ff405265a1c0`,name:`Comptes Fortnite avec 50-100 Skins [tenues OG incluses]`,image:`images/8066287c-eb3c-4d07-a93e-16a342b08cb6/fix-bw3-a3e8e48e-2d70-4b43-a27c-cb48af886732.webp`,price:`10,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/d37517af-813c-42cd-b881-ff405265a1c0`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:10.5},{id:`ed9abac3-7b06-48ef-8eff-4f899cca2678`,name:`Comptes Fortnite avec 100-150 Skins [tenues OG incluses]`,image:`images/2b9d0264-1e54-4ba5-8707-90b19b375311/fix-bw3-34297cf4-b59b-46f0-8634-ce16d52addaa.webp`,price:`14,75 €`,originalPrice:``,stock:`1 en stock`,onSale:!1,link:`/product/ed9abac3-7b06-48ef-8eff-4f899cca2678`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:14.75},{id:`d93b7147-f09a-42a8-b364-b6c65d98db08`,name:`100-250 [Skins Tryhard uniquement]`,image:`images/5e4a35bd-be07-492f-84da-d6826b3b8d84/fix-bw3-7c54d01d-7b34-47d6-b8c7-6038293a32e6.webp`,price:`20,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/d93b7147-f09a-42a8-b364-b6c65d98db08`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:20},{id:`b0ddd615-cfc2-44e4-87c8-d68fbb90b9da`,name:`Comptes Fortnite avec 150-250 Skins [tenues OG incluses]`,image:`images/8dd94718-e47e-4e42-912f-d4cde55aabae/fix-bw3-d665d27b-77de-4806-861b-dfc0058ac7cf.webp`,price:`22,50 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,link:`/product/b0ddd615-cfc2-44e4-87c8-d68fbb90b9da`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:22.5},{id:`8a1cdf65-c2f8-466b-aeb0-192aa3bf151c`,name:`OG STW + 100-200 Skins [20 % OG Skull Trooper]`,image:`images/c83d04b2-f7e9-4d8e-a57c-860deb527f1a/fix-bw3-cb9a5cac-d3ee-4bcf-acdd-1f620b17239d.webp`,price:`25,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/8a1cdf65-c2f8-466b-aeb0-192aa3bf151c`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:25.5},{id:`a807c187-9da2-445b-9c42-cceeb15f5e77`,name:`Comptes Fortnite avec 250-400 Skins [tenues OG incluses]`,image:`images/2f62a705-0130-4966-ad01-74a9ec82c539/fix-bw3-c465c1e0-118c-4e8e-b20d-08f084e72f79.webp`,price:`35,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/a807c187-9da2-445b-9c42-cceeb15f5e77`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:35.5},{id:`5ba58637-3ee9-4a7a-9c96-7f4f88d31e7a`,name:`Hache du Léviathan + 100-200 Skins`,image:`images/3b7cdfd3-d315-4c63-8613-c52ebf72bd3e/fix-bw3-d85f55e1-8b12-4f2a-8362-e785a21d2e72.webp`,price:`45,50 €`,originalPrice:``,stock:`5 en stock`,onSale:!1,link:`/product/5ba58637-3ee9-4a7a-9c96-7f4f88d31e7a`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:45.5},{id:`336183d3-c717-4e19-a5f0-942af9286144`,name:`Hache Minty + 100-250 [tenues OG incluses]`,image:`images/c90c317c-58c4-4c3b-b978-3ab61b88fdde/fix-bw3-05dd6b87-7413-48b6-a7e4-2bca142e5234.webp`,price:`50,50 €`,originalPrice:``,stock:`7 en stock`,onSale:!1,link:`/product/336183d3-c717-4e19-a5f0-942af9286144`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:50.5},{id:`10927651-d4c4-41dc-b76e-79e8951c91af`,name:`Travis Scott + 100-250 [tenues OG incluses]`,image:`images/2c8fe3ed-c8f4-4088-ae49-2c33bdb4fc3f/fix-bw3-6306af01-0ffe-469b-a0df-b285545c88b6.webp`,price:`70,00 €`,originalPrice:``,stock:`4 en stock`,onSale:!1,link:`/product/10927651-d4c4-41dc-b76e-79e8951c91af`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:70},{id:`406f6f30-4ffc-412a-ab7a-d1d16b40858d`,name:`Comptes Fortnite avec 400-600 Skins [tenues OG incluses]`,image:`images/4038948b-6bdf-4b79-b8cd-82696112a905/fix-bw3-21c00c66-608e-4b00-8117-4917e2bf032a.webp`,price:`60,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/406f6f30-4ffc-412a-ab7a-d1d16b40858d`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:60.5},{id:`b2d8d9c8-c067-45e3-aaca-434c5a2cc01b`,name:`Black Knight + 50-250 [majorité de tenues OG incluses]`,image:`images/49fb6241-00f7-45cc-8aeb-6e694d13cd82/fix-bw3-c0070ead-24f8-4f1a-9901-3367d7be80f0.webp`,price:`100,00 €`,originalPrice:``,stock:`6 en stock`,onSale:!1,link:`/product/b2d8d9c8-c067-45e3-aaca-434c5a2cc01b`,group:`Comptes Fortnite Full Access`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:100},{id:`0176125e-3e62-4492-a025-653cffd6cbab`,name:`800-1200 V-Bucks Fortnite`,image:`images/7ee00fce-4226-4bcb-a224-c1c83d26dae2/fix-bw3-41b55f51-8b7a-4518-bbf2-63d0b1f7ee16.webp`,price:`5,00 €`,originalPrice:``,stock:`3 en stock`,onSale:!1,link:`/product/0176125e-3e62-4492-a025-653cffd6cbab`,group:`Comptes Fortnite avec V-Bucks`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:5},{id:`38136187-53e5-4e5d-826f-38416ba27525`,name:`1 500–2 800 V-Bucks`,image:`images/afa8291f-8a66-4eea-b68b-de4cae4680a6/fix-bw3-461fb3e7-4600-49c5-a0af-9dde8c2e051b.webp`,price:`9,00 €`,originalPrice:``,stock:`6 en stock`,onSale:!1,link:`/product/38136187-53e5-4e5d-826f-38416ba27525`,group:`Comptes Fortnite avec V-Bucks`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:9},{id:`38cf830d-7856-43c8-a61c-55784d7c16ab`,name:`5 000–7 000 V-Bucks`,image:`images/7d6bea4c-c3d3-4105-91ea-4bae6ef8bc61/fix-bw3-9b337231-9fbd-4fac-9b5c-7dcdd4d3c3d0.webp`,price:`22,50 €`,originalPrice:``,stock:`4 en stock`,onSale:!1,link:`/product/38cf830d-7856-43c8-a61c-55784d7c16ab`,group:`Comptes Fortnite avec V-Bucks`,featured:!1,categories:[`Comptes`,`Jeux`,`Fortnite`],priceValue:22.5},{id:`d02006b6-15ac-402d-8d86-99f9e8e9bb97`,name:`Spoofer permanent à usage unique`,image:`images/7078140b-36c0-49f0-a0d2-a1afe903392b/fix-bw3-3eac9911-f207-479b-8b14-a19cea8deb79.webp`,price:`8,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/d02006b6-15ac-402d-8d86-99f9e8e9bb97`,group:`Spoofer permanent [TOUS LES JEUX]`,featured:!1,categories:[`Jeux`,`Spoofers`],priceValue:8.5},{id:`20d57061-3097-455a-b4c3-ae7e5fbb1a91`,name:`Spoofer permanent à vie`,image:`images/ead481ac-8d43-4acf-8630-a536df032b74/fix-bw3-1714b581-7b34-432d-9d87-8152f8030608.webp`,price:`11,90 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/20d57061-3097-455a-b4c3-ae7e5fbb1a91`,group:`Spoofer permanent [TOUS LES JEUX]`,featured:!1,categories:[`Jeux`,`Spoofers`],priceValue:11.9},{id:`40c5c6ed-9ca2-4dad-8210-22a943dd173c`,name:`Clé 1 jour`,image:`images/8365bf9b-fb82-4039-90ee-85947166215c/fix-bw3-6d318d0e-680f-4307-948d-153363dc6aaa.webp`,price:`2,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/40c5c6ed-9ca2-4dad-8210-22a943dd173c`,group:`Logiciel Anes Shop Ultimate`,featured:!1,categories:[],priceValue:2.5},{id:`8627248d-423c-4b61-a3db-ca38af0dab54`,name:`Clé 1 semaine`,image:`images/72cc7abb-5143-410c-8154-b5d7c019aa43/fix-bw3-8344399e-c930-422f-a6a1-1780e1a86bda.webp`,price:`5,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/8627248d-423c-4b61-a3db-ca38af0dab54`,group:`Logiciel Anes Shop Ultimate`,featured:!1,categories:[],priceValue:5},{id:`fcadfed8-b569-4ce2-a284-af0a338a62f2`,name:`Clé 1 mois`,image:`images/1a5a70bf-7bf7-4eae-b10e-21665322c6c7/fix-bw3-50c0d94d-f6bf-4088-ae2d-c357a6aa8aa3.webp`,price:`11,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/fcadfed8-b569-4ce2-a284-af0a338a62f2`,group:`Logiciel Anes Shop Ultimate`,featured:!1,categories:[],priceValue:11.5},{id:`ac1ade11-719c-4626-bfcb-32784435a484`,name:`Clé à vie`,image:`images/76ef7dfa-661d-406f-a51e-0df1167ef6b5/fix-bw3-25123b76-f9e4-4353-bf09-8b401293a44b.webp`,price:`17,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/ac1ade11-719c-4626-bfcb-32784435a484`,group:`Logiciel Anes Shop Ultimate`,featured:!1,categories:[],priceValue:17.5},{id:`2211acee-0b01-4c2d-8537-50fb03f3fa6c`,name:`Disney+ NFA à vie`,image:`images/eed85cd4-7840-42c7-a419-6a5176d5edce/fix-bw3-e84aee2c-068f-449a-82c2-1be65504e32c.webp`,price:`5,00 €`,originalPrice:``,stock:`1036 en stock`,onSale:!1,link:`/product/2211acee-0b01-4c2d-8537-50fb03f3fa6c`,group:`Comptes Disney+`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`9b53e120-5e83-4144-a212-17fd7ed975ea`,name:`Paramount+ région : États-Unis`,image:`images/54c0c029-ee21-402a-a76f-72a3de3e5f1c/fix-bw3-994d7351-07db-4725-887c-f225ab6ee4c2.webp`,price:`5,00 €`,originalPrice:``,stock:`144 en stock`,onSale:!1,link:`/product/9b53e120-5e83-4144-a212-17fd7ed975ea`,group:`Paramount+`,featured:!1,categories:[],priceValue:5},{id:`342f6bb9-3119-42ed-bc86-9d590a44a19f`,name:`Paramount+ région : UE`,image:`images/11641e90-ad25-4653-87fc-da7e47184031/fix-bw3-f5aeae5e-ef53-4286-890c-821e453c171f.webp`,price:`5,00 €`,originalPrice:``,stock:`116 en stock`,onSale:!1,link:`/product/342f6bb9-3119-42ed-bc86-9d590a44a19f`,group:`Paramount+`,featured:!1,categories:[],priceValue:5},{id:`21c9b57f-85a2-4ba4-bc9d-2c79a317b39f`,name:`Twitch Full Access avec 500+ abonnés`,image:`images/354b3418-2c46-414e-8598-3a71b92f420f/fix-bw3-d863e64e-b383-4961-ac10-94b870df0a35.webp`,price:`4,90 €`,originalPrice:``,stock:`16 en stock`,onSale:!1,link:`/product/21c9b57f-85a2-4ba4-bc9d-2c79a317b39f`,group:`Comptes Twitch avec abonnés`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:4.9},{id:`7eee1de5-e872-402d-a495-f6391ed76372`,name:`Twitch Full Access avec 2000+ abonnés`,image:`images/afc3cbd3-0e26-4b54-90d0-8c889c84ab9d/fix-bw3-fc27f998-0561-4118-9e54-a432e4353fb8.webp`,price:`6,50 €`,originalPrice:``,stock:`6 en stock`,onSale:!1,link:`/product/7eee1de5-e872-402d-a495-f6391ed76372`,group:`Comptes Twitch avec abonnés`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:6.5},{id:`ce87e09a-59fe-49a5-8213-4612671b76a7`,name:`Twitch Full Access avec 5000+ abonnés`,image:`images/1a5b52b6-f9ef-4c65-be2d-d9041fd8f2e3/fix-bw3-af8c09a3-502f-412e-a2ed-3c61685ae096.webp`,price:`11,90 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/ce87e09a-59fe-49a5-8213-4612671b76a7`,group:`Comptes Twitch avec abonnés`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:11.9},{id:`530c6ad3-a590-44af-a359-84a0f3e47cf2`,name:`Twitch Full Access avec 10 000+ abonnés`,image:`images/c74533af-d3e3-4c56-96bd-992b81bd7b1f/fix-bw3-6319f197-0bbf-4ecb-b9e4-7d7ab974fe3e.webp`,price:`20,50 €`,originalPrice:``,stock:`6 en stock`,onSale:!1,link:`/product/530c6ad3-a590-44af-a359-84a0f3e47cf2`,group:`Comptes Twitch avec abonnés`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:20.5},{id:`7b348157-7048-4212-9a5e-6de374f30dd2`,name:`1 000 – 2 500 Robux`,image:`images/f7ff1b0f-6f2f-49e1-9242-4157bc94ea7b/fix-bw3-6655a19a-4d86-4178-80b1-9afe0d23897b.webp`,price:`5,95 €`,originalPrice:``,stock:`4 en stock`,onSale:!1,link:`/product/7b348157-7048-4212-9a5e-6de374f30dd2`,group:`Roblox (Robux)`,featured:!1,categories:[`Jeux`,`Roblox (Robux's)`],priceValue:5.95},{id:`af1c85b1-3c89-4809-b44e-af97bded49d0`,name:`2 500-5 000 Robux`,image:`images/24c55b4e-26b5-40bb-93e0-f5b3ec4ee2ce/fix-bw3-91f1f011-5d29-48ac-974b-e127187e4084.webp`,price:`7,50 €`,originalPrice:``,stock:`5 en stock`,onSale:!1,link:`/product/af1c85b1-3c89-4809-b44e-af97bded49d0`,group:`Roblox (Robux)`,featured:!1,categories:[`Jeux`,`Roblox (Robux's)`],priceValue:7.5},{id:`b4136050-be9a-4220-9b36-414c63f20d20`,name:`5 000-10 000 Robux`,image:`images/e6c7b049-5026-492a-8155-64cabfaca8e7/fix-bw3-ef9b1601-7e00-4310-b71f-fb06abf5eb86.webp`,price:`10,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/b4136050-be9a-4220-9b36-414c63f20d20`,group:`Roblox (Robux)`,featured:!1,categories:[`Jeux`,`Roblox (Robux's)`],priceValue:10.5},{id:`aaaa6774-e689-4732-b876-33bd37a5d183`,name:`10 000-15 000 Robux`,image:`images/4ef14035-7c55-43bd-96c5-b05cc29a6907/fix-bw3-d67cd147-075e-4405-b807-6e3acd59f831.webp`,price:`13,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/aaaa6774-e689-4732-b876-33bd37a5d183`,group:`Roblox (Robux)`,featured:!1,categories:[`Jeux`,`Roblox (Robux's)`],priceValue:13.5},{id:`ebd0acd2-82c5-4173-a509-65ed2160c15c`,name:`15 000-25 000 Robux`,image:`images/10942c60-7709-423f-8ea7-5d23ecddc396/fix-bw3-6da611d6-47af-4cd8-b778-0e568511efcd.webp`,price:`16,25 €`,originalPrice:``,stock:`11 en stock`,onSale:!1,link:`/product/ebd0acd2-82c5-4173-a509-65ed2160c15c`,group:`Roblox (Robux)`,featured:!1,categories:[`Jeux`,`Roblox (Robux's)`],priceValue:16.25},{id:`8ec01782-12e4-496b-b437-76ed5a3daed0`,name:`25 000-50 000 Robux`,image:`images/b462afaf-97cc-4585-88e3-c43b5603c04f/fix-bw3-c5e0e147-2c6e-498d-b847-20e3fd2fe2fb.webp`,price:`21,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/8ec01782-12e4-496b-b437-76ed5a3daed0`,group:`Roblox (Robux)`,featured:!1,categories:[`Jeux`,`Roblox (Robux's)`],priceValue:21.5},{id:`b6fbf415-217e-4707-9837-8ce369670855`,name:`1000-2500 trophées`,image:`images/698a7c41-68b1-4968-a3d1-f39c81a6bff4/fix-bw3-327b8795-aa51-4adc-8ee4-0ba6b47d9193.webp`,price:`2,85 €`,originalPrice:``,stock:`104 en stock`,onSale:!1,link:`/product/b6fbf415-217e-4707-9837-8ce369670855`,group:`Comptes Clash Royale`,featured:!1,categories:[`Comptes`,`Jeux`,`Supercell`],priceValue:2.85},{id:`50ee8b0f-a718-4e4a-84b1-87455dfb9fdd`,name:`2500-5000 trophées`,image:`images/92221ab9-8762-43ba-84b8-f28afe1c5d02/fix-bw3-9857438d-abcc-4b7c-b16b-8d17b89e42e9.webp`,price:`5,85 €`,originalPrice:``,stock:`17 en stock`,onSale:!1,link:`/product/50ee8b0f-a718-4e4a-84b1-87455dfb9fdd`,group:`Comptes Clash Royale`,featured:!1,categories:[`Comptes`,`Jeux`,`Supercell`],priceValue:5.85},{id:`1c69f58c-ddee-4afe-bf65-4272b2b6a24d`,name:`5000-7000 trophées`,image:`images/6b383c52-4e0f-4f26-b95c-158e92c069cf/fix-bw3-e6e4494d-5c99-4f78-8324-1aea9bebfaa4.webp`,price:`8,25 €`,originalPrice:``,stock:`9 en stock`,onSale:!1,link:`/product/1c69f58c-ddee-4afe-bf65-4272b2b6a24d`,group:`Comptes Clash Royale`,featured:!1,categories:[`Comptes`,`Jeux`,`Supercell`],priceValue:8.25},{id:`31aed68a-45d1-42f8-a122-c1126a7428d2`,name:`7000-10000 trophées`,image:`images/f31a4170-cbfa-450f-baeb-0d908f2085e0/fix-bw3-557ac80a-6f43-4283-a019-79d5096e6631.webp`,price:`12,80 €`,originalPrice:``,stock:`34 en stock`,onSale:!1,link:`/product/31aed68a-45d1-42f8-a122-c1126a7428d2`,group:`Comptes Clash Royale`,featured:!1,categories:[`Comptes`,`Jeux`,`Supercell`],priceValue:12.8},{id:`437d1119-798a-4e8d-9429-abf8ada34bb9`,name:`10000-12000 trophées`,image:`images/3fcb8dcb-753c-44d9-b82e-e03ba4bb1c6c/fix-bw3-a81f0da8-70e0-4f0e-baef-6ee292c1694b.webp`,price:`15,25 €`,originalPrice:``,stock:`44 en stock`,onSale:!1,link:`/product/437d1119-798a-4e8d-9429-abf8ada34bb9`,group:`Comptes Clash Royale`,featured:!1,categories:[`Comptes`,`Jeux`,`Supercell`],priceValue:15.25},{id:`8f07e42a-e66a-4dc6-9691-ad6719a4ff3d`,name:`1 jour`,image:`images/aab109cb-1a0d-44e8-81ad-3a1e6783abe9/fix-bw3-1cfcdaeb-11bf-4f07-b89d-e77e16d8e0e8.webp`,price:`2,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/8f07e42a-e66a-4dc6-9691-ad6719a4ff3d`,group:`Spoofer temporaire [TOUS LES JEUX]`,featured:!1,categories:[`Jeux`,`Spoofers`],priceValue:2.5},{id:`32cf4499-598c-4e2c-a95f-7de5cf579220`,name:`7 jours`,image:`images/e5c1bf14-b84c-43db-93bb-0adaf8ffbd6e/fix-bw3-b6c1d1cc-ba28-4107-a48c-29ac5a576fb5.webp`,price:`8,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/32cf4499-598c-4e2c-a95f-7de5cf579220`,group:`Spoofer temporaire [TOUS LES JEUX]`,featured:!1,categories:[`Jeux`,`Spoofers`],priceValue:8},{id:`37740dee-a72a-487b-90ff-075184d942a8`,name:`31 jours`,image:`images/f990af2d-cd92-449e-bad8-ea479d1c16af/fix-bw3-575e5bee-5260-4fed-b437-924f28b420c2.webp`,price:`11,00 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/37740dee-a72a-487b-90ff-075184d942a8`,group:`Spoofer temporaire [TOUS LES JEUX]`,featured:!1,categories:[`Jeux`,`Spoofers`],priceValue:11},{id:`302a525c-04f4-466c-942b-b1e287961c2b`,name:`À vie`,image:`images/e8bd664b-6d32-43ef-8fde-e8476a10adc9/fix-bw3-35387d4a-d58b-4948-8d57-52b751c91a45.webp`,price:`15,50 €`,originalPrice:``,stock:`Réapprovisionnement`,onSale:!1,link:`/product/302a525c-04f4-466c-942b-b1e287961c2b`,group:`Spoofer temporaire [TOUS LES JEUX]`,featured:!1,categories:[`Jeux`,`Spoofers`],priceValue:15.5},{id:`cbe800a3-e164-4744-ba54-656e9c051d82`,name:`Compte ChatGPT Plus`,image:`images/58452415-7429-4ac2-bf12-e7b8f8ccd8bf/fix-bw3-4cf94aa2-dc0d-49f5-83db-759c200f47fc.webp`,price:`11,50 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,link:`/product/cbe800a3-e164-4744-ba54-656e9c051d82`,group:`Comptes ChatGPT`,featured:!1,categories:[`Comptes`,`IA`],priceValue:11.5},{id:`6a7116f3-a3a7-430a-a09f-75437c1cc05a`,name:`Gemini Pro 2 ans — lien d’activation`,image:`images/c7343215-86ad-4129-af85-8f0b5c451c98/fix-bw3-5f18062c-f929-428a-8b1f-8383ae1f8f5f.webp`,price:`7,35 €`,originalPrice:``,stock:`90 en stock`,onSale:!1,link:`/product/6a7116f3-a3a7-430a-a09f-75437c1cc05a`,group:`Comptes Gemini Pro`,featured:!1,categories:[`Comptes`,`IA`],priceValue:7.35},{id:`5cb8396b-089f-43e5-a187-b0268f16cfbd`,name:`Gemini Pro 2 ans — compte Full Access`,image:`images/72b37102-69b4-4893-97cd-81e335c5d3f6/fix-bw3-4cfb7252-3660-4289-9112-d9a48382346e.webp`,price:`8,55 €`,originalPrice:``,stock:`154 en stock`,onSale:!1,link:`/product/5cb8396b-089f-43e5-a187-b0268f16cfbd`,group:`Comptes Gemini Pro`,featured:!1,categories:[`Comptes`,`IA`],priceValue:8.55},{id:`c4d5dada-040f-4bc8-b005-593fe3778012`,name:`Compte Netflix à vie`,image:`images/5584f4a5-8e7b-4d5c-a2c6-39bff72b282d/fix-bw3-7816daf4-91bc-4520-8967-68f16cd09f00.webp`,price:`5,00 €`,originalPrice:``,stock:`423 en stock`,onSale:!1,link:`/product/c4d5dada-040f-4bc8-b005-593fe3778012`,group:`Comptes Netflix`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`1bbd0c79-3d3f-4cf1-a05d-8f42075d3fee`,name:`Comptes TikTok avec 1k+ abonnés [HAUTE QUALITÉ]`,image:`images/686e7c2a-951e-4915-a113-345b27fe88c0/fix-bw3-3af85a4e-0a7c-41cb-a67e-6d821d82291f.webp`,price:`10,50 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/1bbd0c79-3d3f-4cf1-a05d-8f42075d3fee`,group:`Comptes TikTok`,featured:!1,categories:[`Comptes`,`Réseaux sociaux`],priceValue:10.5},{id:`53b4e567-68d1-430b-9f43-f35656e2bdbd`,name:`DAZN Espagne à vie`,image:`images/19b08a58-904b-4c63-b7a9-7a8abf409a76/fix-bw3-e04226e1-cbda-4d9e-9288-a4946554e6da.webp`,price:`5,00 €`,originalPrice:``,stock:`239 en stock`,onSale:!1,link:`/product/53b4e567-68d1-430b-9f43-f35656e2bdbd`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`c8c427a9-ca91-42d7-a9b9-6af94e178ed7`,name:`DAZN Italie à vie`,image:`images/02094072-191d-4a1e-b543-c0a49a9c2cdb/fix-bw3-0fc5a877-30a1-438f-b40f-e34f73ea502b.webp`,price:`5,00 €`,originalPrice:``,stock:`91 en stock`,onSale:!1,link:`/product/c8c427a9-ca91-42d7-a9b9-6af94e178ed7`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`e60d2d17-c8f1-42ee-b75a-d244fd0e3f6b`,name:`DAZN Royaume-Uni à vie`,image:`images/ec249147-f448-4f4a-b885-96eacbab6d0e/fix-bw3-d098fc6e-054d-44ee-86b8-222b4f1f4fc6.webp`,price:`5,00 €`,originalPrice:``,stock:`77 en stock`,onSale:!1,link:`/product/e60d2d17-c8f1-42ee-b75a-d244fd0e3f6b`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`a4e63567-a3dc-4ba8-b1cc-70c36b60477d`,name:`DAZN États-Unis à vie`,image:`images/cd1a0a3e-0a30-4256-8519-af69ccdde558/fix-bw3-edf36cc1-a273-4b70-b3a0-4fc1824d28a8.webp`,price:`5,00 €`,originalPrice:``,stock:`91 en stock`,onSale:!1,link:`/product/a4e63567-a3dc-4ba8-b1cc-70c36b60477d`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`9dd7e7a2-51ef-4e9c-85f4-4b02d70806c6`,name:`DAZN France à vie`,image:`images/1f3e267f-5853-4e6c-bdec-1625b2bad608/fix-bw3-7ab95286-bcd5-4782-aef1-d61b20fb78ff.webp`,price:`5,00 €`,originalPrice:``,stock:`33 en stock`,onSale:!1,link:`/product/9dd7e7a2-51ef-4e9c-85f4-4b02d70806c6`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`265fbedf-d889-4b0b-8562-57048aebc680`,name:`DAZN Canada à vie`,image:`images/772dc723-e40c-4745-b83d-7bdf8088d6dc/fix-bw3-0c6b3057-6a4d-4700-8dcd-0e0fbb03f762.webp`,price:`5,00 €`,originalPrice:``,stock:`40 en stock`,onSale:!1,link:`/product/265fbedf-d889-4b0b-8562-57048aebc680`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`09850a68-f8b8-459b-b1e2-c989fc77617a`,name:`DAZN Pologne à vie`,image:`images/1dab86b8-9e3d-4973-9b28-5f4598d5be30/fix-bw3-9bb7e9cd-3360-4924-b696-4bdc75d1a9af.webp`,price:`5,00 €`,originalPrice:``,stock:`49 en stock`,onSale:!1,link:`/product/09850a68-f8b8-459b-b1e2-c989fc77617a`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`c7d3afcb-da99-4385-84af-07f05fa83d38`,name:`DAZN Japon à vie`,image:`images/1cd9d23c-5fce-4aef-baa1-173d05d34c4d/fix-bw3-6ea120fd-961a-4403-a41f-198acd0c537f.webp`,price:`5,00 €`,originalPrice:``,stock:`49 en stock`,onSale:!1,link:`/product/c7d3afcb-da99-4385-84af-07f05fa83d38`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`74208bb2-0fb2-40df-8e4b-27944d0db347`,name:`DAZN Allemagne à vie`,image:`images/d5256052-72f8-4bd4-9a23-ab44eddaf0a7/fix-bw3-4d3a5ae5-3ba4-4551-82ac-744112f3c838.webp`,price:`5,00 €`,originalPrice:``,stock:`6 en stock`,onSale:!1,link:`/product/74208bb2-0fb2-40df-8e4b-27944d0db347`,group:`Comptes DAZN`,featured:!1,categories:[`Comptes`],priceValue:5},{id:`76f8e9cd-2a11-4ed0-8931-e9ad6394ad0c`,name:`Uber Eats France REPAS GRATUITS`,image:`images/cd6c375e-f739-436f-af39-beb58626dc4a/image-041.webp`,price:`8,00 €`,originalPrice:``,stock:`98 en stock`,onSale:!1,link:`/product/76f8e9cd-2a11-4ed0-8931-e9ad6394ad0c`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`6e57ee7b-d1c9-403d-af92-b43d9425d949`,name:`Uber Eats Espagne REPAS GRATUITS`,image:`images/318aacb9-b29b-43af-829d-8f49a2664172/image-276.webp`,price:`8,00 €`,originalPrice:``,stock:`16 en stock`,onSale:!1,link:`/product/6e57ee7b-d1c9-403d-af92-b43d9425d949`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`38fac5da-2a57-4731-878e-049f7d4ef5b9`,name:`Uber Eats Pologne REPAS GRATUITS`,image:`images/9b691757-604e-4c68-8b4d-1c193e889824/image-169.webp`,price:`8,00 €`,originalPrice:``,stock:`17 en stock`,onSale:!1,link:`/product/38fac5da-2a57-4731-878e-049f7d4ef5b9`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`4251b35d-b5ce-4256-acc8-99469826e87b`,name:`Uber Eats Allemagne REPAS GRATUITS`,image:`images/9c53c7f1-4cee-403d-8873-a59262cf2eba/image-343.webp`,price:`8,00 €`,originalPrice:``,stock:`5 en stock`,onSale:!1,link:`/product/4251b35d-b5ce-4256-acc8-99469826e87b`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`3dc32af4-ac2c-4774-8f64-6c183e19d31f`,name:`Uber Eats Royaume-Uni REPAS GRATUITS`,image:`images/07c30a35-94df-4e71-9ed4-37341e3ac883/image-012.webp`,price:`8,00 €`,originalPrice:``,stock:`11 en stock`,onSale:!1,link:`/product/3dc32af4-ac2c-4774-8f64-6c183e19d31f`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`f5753be4-e449-44db-b959-a61635fa2d91`,name:`Uber Eats Irlande REPAS GRATUITS`,image:`images/86cb1e60-64ad-411a-b0d5-80d6a2b7d075/image-397.webp`,price:`8,00 €`,originalPrice:``,stock:`10 en stock`,onSale:!1,link:`/product/f5753be4-e449-44db-b959-a61635fa2d91`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`3a5`,name:`Uber Eats Belgique REPAS GRATUITS`,image:`images/b8b0c09b-a2c9-4bcb-8bbd-7fbe55ed7d8b/image-148.webp`,price:`8,00 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,link:`/product/3a5`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`9f53fc9e-07a7-438a-b2da-2158a868b44b`,name:`Uber Eats Pays-Bas REPAS GRATUITS`,image:`images/45b2c0ad-622f-4f8e-9e82-50e8c5e1f662/image-140.webp`,price:`8,00 €`,originalPrice:``,stock:`16 en stock`,onSale:!1,link:`/product/9f53fc9e-07a7-438a-b2da-2158a868b44b`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`e1fed483-7875-4513-829f-52ada4ee6c44`,name:`Uber Eats Suisse REPAS GRATUITS`,image:`images/d5ca9076-ec44-4437-87f8-e86dacd94d9e/image-000.webp`,price:`8,00 €`,originalPrice:``,stock:`2 en stock`,onSale:!1,link:`/product/e1fed483-7875-4513-829f-52ada4ee6c44`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`a85fe397-dc20-4726-b9fc-d3103b2bfe2b`,name:`Uber Eats Canada REPAS GRATUITS`,image:`images/e91867fd-4c73-4202-86a2-2b5c25afa253/image-033.webp`,price:`8,00 €`,originalPrice:``,stock:`18 en stock`,onSale:!1,link:`/product/a85fe397-dc20-4726-b9fc-d3103b2bfe2b`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`ef769d65-5f3c-44f3-b33d-659670aacfc4`,name:`Uber Eats États-Unis REPAS GRATUITS`,image:`images/731be3ce-dede-4a0a-809f-17b7b6fd548f/image-422.webp`,price:`8,00 €`,originalPrice:``,stock:`19 en stock`,onSale:!1,link:`/product/ef769d65-5f3c-44f3-b33d-659670aacfc4`,group:`Uber Eats REPAS GRATUITS`,featured:!1,categories:[`Méthodes`],priceValue:8},{id:`849d47f1-bc1e-434e-95da-c74f1c6d667f`,name:`Claude FA illimité – 1 jour`,image:`images/a6cad584-83b7-4525-ab48-0d090687195e/fix-bw3-b3729f62-dd24-4b9c-8d5c-cea955e75e50.webp`,price:`5,15 €`,originalPrice:``,stock:`13 en stock`,onSale:!1,link:`/product/849d47f1-bc1e-434e-95da-c74f1c6d667f`,group:`Comptes Claude AI`,featured:!1,categories:[`Comptes`,`IA`],priceValue:5.15},{id:`9fe84dd0-b2f8-4e3f-a15f-1f10cc754d5c`,name:`Claude FA illimité – 7 jours`,image:`images/0e3a111c-1ea9-47c4-b2c7-0eb03fe6ad28/fix-bw3-fb7e38cf-b578-4512-b1ce-dc353d39b9cb.webp`,price:`13,50 €`,originalPrice:``,stock:`23 en stock`,onSale:!1,link:`/product/9fe84dd0-b2f8-4e3f-a15f-1f10cc754d5c`,group:`Comptes Claude AI`,featured:!1,categories:[`Comptes`,`IA`],priceValue:13.5},{id:`b4c72039-e34a-4e75-8c11-42691f3fffa4`,name:`Claude FA illimité – 30 jours`,image:`images/21fe045e-4e4f-4eb8-ba14-58d4cba79f4c/fix-bw3-37662ba2-4d4e-4b59-bf1e-f373a9e7b21b.webp`,price:`21,50 €`,originalPrice:``,stock:`12 en stock`,onSale:!1,link:`/product/b4c72039-e34a-4e75-8c11-42691f3fffa4`,group:`Comptes Claude AI`,featured:!1,categories:[`Comptes`,`IA`],priceValue:21.5},{id:`1c43ccdc-8bc3-48eb-8705-7f378d7f9bfc`,name:`Claude FA illimité – à vie`,image:`images/5089408b-4cc7-4dfe-9983-5cc4d9831189/fix-bw3-b809ff0b-6416-48a2-8b14-30506a0d4bfa.webp`,price:`35,75 €`,originalPrice:``,stock:`8 en stock`,onSale:!1,link:`/product/1c43ccdc-8bc3-48eb-8705-7f378d7f9bfc`,group:`Comptes Claude AI`,featured:!1,categories:[`Comptes`,`IA`],priceValue:35.75}]};function Yc(e){let t=e.toLowerCase();return t.includes(`restock`)||t.includes(`réappro`)?1:0}function Xc(e){let t=e.match(/[\d.,]+/);return t?parseFloat(t[0].replace(`,`,`.`)):2**53-1}function Zc({category:e}){let t=Vi(),n=e||`All`,r=Jc.categories.includes(n)?n:`All`,[i,a]=(0,N.useState)(``),[o,s]=(0,N.useState)(``),[c,l]=(0,N.useState)(!1),{addItem:u}=Ya(),[d,f]=(0,N.useState)(null),p=i.trim().toLocaleLowerCase(),m=(0,N.useMemo)(()=>Jc.products.filter(e=>{let t=r===`All`||e.categories.includes(r),n=!p||[e.name,e.group,e.stock,...e.categories].join(` `).toLocaleLowerCase().includes(p);return t&&n}).sort((e,t)=>Yc(e.stock)-Yc(t.stock)||e.priceValue-t.priceValue||e.name.localeCompare(t.name)),[r,p]),h=(0,N.useMemo)(()=>Jc.families.filter(e=>{let t=Jc.products.filter(t=>t.group===e.name||t.image===e.image),n=r===`All`||t.some(e=>e.categories.includes(r)),i=!p||e.name.toLowerCase().includes(p)||e.stock.toLowerCase().includes(p);return n&&i}).sort((e,t)=>Yc(e.stock)-Yc(t.stock)||Xc(e.price)-Xc(t.price)||e.name.localeCompare(t.name)),[r,p]),g=e=>{s(``),t({to:`/products`,search:e===`All`?{}:{category:e}})},_=e=>{s(e.groupKey)},v=()=>{a(``),s(``),g(`All`)},y=Jc.families.find(e=>e.groupKey===o),b=y?Jc.products.filter(e=>e.group===y.name):[],x=[`ff3a5142-d8ea-47a7-8457-f50a0e90770d`,`2768f690-a788-4300-942c-0ca3459e923d`,`c1d5f84d-1081-4949-8552-70134eaa5700`],S=m.filter(e=>e.group===`Featured`&&!x.includes(e.id)),C=h.length+S.length;return(0,P.jsxs)(`div`,{className:`products-page`,children:[(0,P.jsx)(Fc,{onCart:()=>l(!0)}),(0,P.jsxs)(`main`,{className:`wrap products-main`,children:[(0,P.jsxs)(`section`,{className:`products-hero`,children:[(0,P.jsx)(`p`,{className:`products-title-kicker`,children:`Notre meilleure sélection`}),(0,P.jsx)(`h1`,{className:`products-title`,children:`Parcourir les produits`}),(0,P.jsx)(`p`,{className:`products-lead`,children:`Explorez notre vaste collection de produits dans de nombreuses catégories.`})]}),(0,P.jsxs)(`div`,{className:`catalog-panel`,"aria-label":`Filtres du catalogue`,children:[(0,P.jsx)(`span`,{className:`catalog-field-label`,children:`Mot-clé`}),(0,P.jsxs)(`label`,{className:`catalog-search`,children:[(0,P.jsx)(Eo,{size:17,"aria-hidden":`true`}),(0,P.jsx)(`input`,{value:i,onChange:e=>a(e.currentTarget.value),placeholder:`Rechercher des produits...`,"aria-label":`Mot-clé`,"data-testid":`input-product-search`}),i&&(0,P.jsx)(jc,{variant:`ghost`,size:`icon`,type:`button`,className:`icon-button`,"aria-label":`Effacer la recherche`,onClick:()=>a(``),"data-testid":`button-clear-search`,children:(0,P.jsx)(ko,{size:15})})]}),(0,P.jsx)(`span`,{className:`catalog-field-label`,children:`Catégorie`}),(0,P.jsxs)(`div`,{className:`catalog-pills`,children:[(0,P.jsx)(jc,{variant:`ghost`,type:`button`,className:`catalog-pill${r===`All`?` active`:``}`,onClick:()=>g(`All`),"data-testid":`pill-category-all`,children:`Tout`}),Jc.categories.filter(e=>e!==`All`).map(e=>(0,P.jsx)(jc,{variant:`ghost`,type:`button`,className:`catalog-pill${r===e?` active`:``}`,onClick:()=>g(e),"data-testid":`pill-category-${e}`,children:e},e))]})]}),(0,P.jsx)(`section`,{className:`catalog-section`,"aria-label":`Notre meilleure sélection`,children:C?(0,P.jsxs)(`div`,{className:`product-grid`,children:[h.map(e=>(0,P.jsx)(`article`,{className:`family-card${o===e.groupKey?` selected`:``}`,"data-testid":`card-family-${e.groupKey}`,children:(0,P.jsxs)(jc,{variant:`ghost`,type:`button`,className:`catalog-card-action`,onClick:()=>_(e),"aria-label":`Voir les produits ${e.name}`,"data-testid":`button-family-${e.groupKey}`,children:[(0,P.jsx)(`img`,{className:`family-image`,src:e.image,alt:``,loading:`lazy`}),(0,P.jsxs)(`div`,{className:`family-copy`,children:[(0,P.jsx)(`h3`,{className:`family-name`,children:e.name}),(0,P.jsxs)(`div`,{className:`family-price`,children:[e.price,e.onSale&&e.originalPrice&&(0,P.jsxs)(`span`,{className:`product-original`,children:[` `,e.originalPrice]})]})]})]})},e.groupKey)),S.map(e=>(0,P.jsx)(Qc,{product:e,onOpen:()=>t({to:`/product/$id`,params:{id:e.id}})},e.id))]}):(0,P.jsx)($c,{onReset:v,label:`Aucun produit trouvé. Essayez une autre recherche ou catégorie.`})})]}),(0,P.jsx)(Hc,{}),y&&(0,P.jsx)(`div`,{className:`overlay family-overlay`,role:`dialog`,"aria-modal":`true`,"aria-label":y.name,onClick:()=>s(``),children:(0,P.jsxs)(`div`,{className:`family-modal`,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(`div`,{className:`family-modal-head`,children:[(0,P.jsx)(`img`,{src:y.image,alt:``}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h2`,{children:y.name}),(0,P.jsxs)(`p`,{children:[b.length,` options · `,y.price]})]}),(0,P.jsx)(`button`,{type:`button`,className:`icon-button`,"aria-label":`Fermer`,onClick:()=>s(``),children:(0,P.jsx)(ko,{size:20})})]}),(0,P.jsx)(`div`,{className:`family-modal-list`,children:b.map(e=>(0,P.jsxs)(L,{className:`variant-card${e.onSale?` on-sale`:``}`,to:`/product/$id`,params:{id:e.id},children:[(0,P.jsx)(`div`,{className:`variant-media`,children:(0,P.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})}),(0,P.jsxs)(`div`,{className:`variant-info`,children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsx)(`div`,{className:`variant-meta`,children:(0,P.jsxs)(`span`,{className:`variant-price`,children:[e.price,e.onSale&&e.originalPrice&&(0,P.jsx)(`s`,{children:e.originalPrice})]})})]})]},e.id))})]})}),d&&(0,P.jsx)(`div`,{className:`overlay family-overlay`,role:`dialog`,"aria-modal":`true`,"aria-label":d.name,onClick:()=>f(null),children:(0,P.jsxs)(`div`,{className:`family-modal product-modal`,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(`div`,{className:`product-modal-hero`,children:[(0,P.jsx)(`img`,{src:d.image,alt:d.name}),(0,P.jsx)(`button`,{type:`button`,className:`icon-button`,"aria-label":`Fermer`,onClick:()=>f(null),children:(0,P.jsx)(ko,{size:20})})]}),(0,P.jsxs)(`div`,{className:`product-modal-body`,children:[(0,P.jsx)(`h2`,{children:d.name}),(0,P.jsx)(`div`,{className:`product-modal-meta`,children:(0,P.jsxs)(`div`,{className:`product-prices`,children:[(0,P.jsx)(`span`,{className:`product-price`,children:d.price}),d.onSale&&d.originalPrice&&(0,P.jsx)(`span`,{className:`product-original`,children:d.originalPrice})]})}),(0,P.jsx)(`div`,{className:`product-modal-tags`,children:d.categories.map(e=>(0,P.jsx)(`span`,{children:e},e))}),(0,P.jsxs)(`button`,{type:`button`,className:`product-modal-buy`,onClick:()=>{u({id:d.id,name:d.name,image:d.image,priceValue:d.priceValue,quantity:1,maxQuantity:Math.max(1,parseInt(d.stock.match(/\d+/)?.[0]??`1`,10))}),f(null),l(!0)},"data-testid":`link-buy-${d.id}`,children:[(0,P.jsx)(Oo,{size:14}),` Ajouter au panier `,(0,P.jsx)(vo,{size:13})]})]})]})}),(0,P.jsx)(Uc,{open:c,onClose:()=>l(!1)}),(0,P.jsx)(Wc,{})]})}function Qc({product:e,onOpen:t,className:n}){return(0,P.jsx)(`article`,{className:`product-card${n||``}`,"data-testid":`card-product-${e.id}`,children:(0,P.jsxs)(jc,{variant:`ghost`,type:`button`,className:`catalog-card-action`,onClick:t,"aria-label":`Voir ${e.name}`,"data-testid":`link-product-${e.id}`,children:[(0,P.jsx)(`div`,{className:`product-image-wrap`,children:(0,P.jsx)(`img`,{className:`product-image`,src:e.image,alt:e.name,loading:`lazy`})}),(0,P.jsxs)(`div`,{className:`product-info`,children:[(0,P.jsx)(`h3`,{className:`product-name`,children:e.name}),(0,P.jsx)(`div`,{className:`product-bottom`,children:(0,P.jsxs)(`div`,{className:`product-prices`,children:[(0,P.jsx)(`span`,{className:`product-price`,children:e.price}),e.onSale&&e.originalPrice&&(0,P.jsx)(`span`,{className:`product-original`,children:e.originalPrice})]})}),(0,P.jsxs)(`span`,{className:`external-hint`,children:[`Voir le produit `,(0,P.jsx)(vo,{size:12,"aria-hidden":`true`})]})]})]})})}function $c({label:e,onReset:t}){return(0,P.jsxs)(`div`,{className:`catalog-empty`,role:`status`,"data-testid":`status-no-results`,children:[(0,P.jsx)(_o,{size:20,"aria-hidden":`true`}),(0,P.jsx)(`h3`,{children:`Aucun résultat`}),(0,P.jsx)(`p`,{children:e}),(0,P.jsx)(`button`,{className:`catalog-reset`,type:`button`,onClick:t,"data-testid":`button-reset-filters`,children:`Réinitialiser les filtres`})]})}var el=ua(`/products`)({validateSearch:e=>typeof e.category==`string`?{category:e.category}:{},head:()=>({meta:[{title:`Produits — Anes Shop`},{name:`description`,content:`Parcourez tout le catalogue Anes Shop par catégorie ou mot-clé.`},{property:`og:title`,content:`Produits — Anes Shop`},{property:`og:description`,content:`Parcourez tout le catalogue Anes Shop par catégorie ou mot-clé.`},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary_large_image`}]}),component:tl});function tl(){let{category:e}=el.useSearch();return(0,P.jsx)(Zc,{category:e})}var nl={"2c6ea485-9434-4f22-8763-01088cd73260":{description:`### 🛡️ **FiveM Ready \\[Récent\\] – Comptes avec accès complet**

Obtenez instantanément des **comptes FiveM Ready récents**. Idéals pour les **débannissements** et les **Spoofers**, entièrement compatibles avec les serveurs FiveM. Livraison rapide, comptes sécurisés et accès complet garanti.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Caractéristiques principales**

- 🧾 **Format E-mail : Mot de passe** — facile à utiliser, prêt à la connexion

- 🔐 **Accès complet** — possibilité de modifier l’e-mail et le mot de passe

- 🧠 **Prêt pour Spoofer et débannissement** — optimisé uniquement pour FiveM

- ⚡ **Livraison instantanée** — système automatisé pour un accès immédiat

- 📨 **Accès webmail** — inclus pour un contrôle complet

- 🔁 **Remplacement gratuit** — disponible si nécessaire pendant la période de garantie

- 🛡️ **Garantie de 48 h** — assistance rapide et protection après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 **Pourquoi FiveM Ready se démarque**

- 💡 Parfait pour contourner les bannissements ou repartir de zéro

- 🚀 Accès immédiat après le paiement

- 🔁 Contrôle complet du compte inclus

- 🥇 Premier fournisseur du marché à proposer des comptes FiveM stables

━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 **Webmail :** [https://outlook.live.com/mail/0/](https://outlook.live.com/mail/0/)

✨ _Nous avons été les premiers du marché à proposer des comptes FiveM utilisant des codes d’activation Rockstar — en fixant de nouveaux prix équitables et en relevant les standards de toute la scène._`,specs:[[`Format`,`Identifiants Rockstar + Outlook`],[`Accès`,`Full Access`],[`Livraison`,`Instantané`],[`Garantie`,`120 heures`]],images:[`images/eb6bd189-4c44-4b39-9750-c0ffd56914a7/bw3-8a738a3f-2b43-4f8d-9c3d-92d77906a1da.webp`,`images/613620f4-1ea0-492a-807b-86b54c36dc6f/9f1d2b9d-b354-49d2-970d-a244dbda4f6d.webp`]},"6127582a-a580-4dc7-98ee-507d69ff8a65":{description:`### 🎬 YouTube Premium — Full Access (votre propre compte)

· Profitez pleinement de YouTube Premium : sans publicité, lecture en arrière-plan, téléchargements hors ligne et YouTube Music.

Vous recevez un **compte Full Access** — identifiants complets, sécurisé, privé et qui vous appartient définitivement.

### 🔐 Fonctionnement :


· 🔑 Nous vous enverrons un **compte YouTube Premium Full Access** (e-mail + mot de passe).

· 👤 Vous pouvez modifier le mot de passe et les informations de récupération, et le sécuriser entièrement comme votre propre compte.

### ✅ Inclus :

· 🎥 Compte YouTube Premium — Full Access

· 🔑 Identifiants de connexion complets (e-mail + mot de passe)

· 🔄 Mot de passe modifiable · Informations de récupération modifiables · Sécurité complète

· 📱 Sans publicité · Lecture en arrière-plan · Téléchargements hors ligne · YouTube Music

· 🌍 Fonctionne partout dans le monde, sur tous les appareils (PC, iOS, Android, TV)

· ⚡ Livraison et activation instantanées

· 🛠️ Assistance dédiée

Profitez de YouTube sans publicité, d’une meilleure expérience musicale et de toutes les fonctionnalités Premium — avec **la pleine propriété et le contrôle total** de votre compte.`,specs:[],images:[`images/f800bf47-73db-4f3a-bde9-74cfbebe34e0/bw3-a8ed2072-6b4a-41c4-bc28-af0658bfa9ea.webp`]},"c8ec944f-03ad-48ad-b5c8-4a900c922ed5":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais d’abonnement mensuels ou annuels

· 🚀 **Débits ultra-rapides** – Plus de 6 000 serveurs dans le monde, optimisés pour le jeu sans interruption, le torrenting et le streaming 4K

· 🔒 **Chiffrement de niveau militaire** – Protocole NordLynx avancé pour masquer vos données personnelles et votre adresse IP

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements premium actifs vérifiés à 100 %

· 📱 **Prise en charge multi-appareils** – Utilisez-le sur PC, mobile, macOS, Linux ou Android TV

· 🛠️ **Garantie de remplacement** – Assistance prioritaire complète et remplacements automatisés si nécessaire

### 📺 Ce que NordVPN vous permet de débloquer :

· 🌍 **Déblocage du streaming mondial** – Accédez aux catalogues régionaux de Netflix, Prime Video, Hulu et Disney+ où que vous soyez

· 🎮 **Jeu avec faible ping** – Connectez-vous à des serveurs dédiés au jeu pour réduire votre ping et prévenir les attaques DDoS

· 🚫 **Protection intégrée contre les menaces** – Bloque automatiquement les publicités gênantes, les trackers et les sites malveillants`,specs:[[`Type de produit`,`Compte NordVPN Premium`],[`Protocole de chiffrement`,`NordLynx / OpenVPN`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/0947c50c-3fcb-4fa2-b993-6cf634280650/bw3-afacad40-3eae-464d-949f-b7e8c40a7fc3.webp`,`images/afbc9d80-7b26-4e15-8b16-b5adcf31adde/4a2a896f-1352-4430-b0bb-c58d2d3464c8.webp`,`images/fecdb236-6b67-40d5-960f-e34506928638/9190d513-c31b-4ff1-8d6e-6e1b78e08c3c.webp`]},"653388d0-e155-45ab-815d-0dc26adfc0fd":{description:`### 👻 CyberGhost VPN – 1 an

🏷️ \`🛡️ AES 256 bits\` · \`🌐 Plus de 9 000 serveurs\` · \`🚫 Aucun journal\`

🔹 Chiffrement 256 bits

🔹 Aucun journal – anonymat total

🔹 🌐 Plus de 9 000 serveurs dans plus de 90 pays

🔹 Connexions rapides pour le streaming et le gaming

🔹 Prise en charge de 7 appareils maximum

🔹 🛑 Bloqueur intégré de publicités et de logiciels malveillants`,specs:[],images:[`images/720000ad-ebc3-4462-a3c9-c276c94b70c5/bw3-578a83f1-1472-4788-bf4a-007887ee2ef2.webp`]},"4bb0cf64-e80b-4729-bc44-04d1c315d89f":{description:`### ✅ Inclus

· 🎮 **Compte Rockstar prêt pour FiveM** – Full access avec identifiants de connexion officiels au Rockstar Launcher.

· 💨 **Compte Steam** – Compte neuf en full access à associer à votre nouvelle configuration.

· 💬 **Compte Discord** – Entièrement vérifié (e-mail + téléphone) pour contourner les protections anti-bot des serveurs.`,specs:[[`Type de produit`,`Pack de 3 comptes neufs en 1`],[`Comptes inclus`,`Steam + Discord + Rockstar`],[`Garantie / sécurité`,`24 heures (Full Access modifiable)`],[`Livraison`,`Automatisation instantanée`]],images:[`images/77ddf8c7-a4c0-4810-83f4-3bb60c0435de/bw3-5e0046cd-b52f-4b2a-9f06-7f0463c3cf9e.webp`]},"89c6189e-0078-4d57-a1b8-82169a480e4a":{description:`### 🍯 Pourquoi TunnelBear ?

· 🐾 **Chiffrement de niveau militaire** – Vos données restent toujours les vôtres

· 🌎 **Données illimitées et serveurs illimités** – Naviguez dans plus de 40 pays sans plafond

· 🚀 **Vitesses fulgurantes** – Regardez en streaming, naviguez et téléchargez sans ralentissement

· 🕵️ **Politique sans journaux** – Audit indépendant, aucun suivi de l’activité

· 🖥️ **Tous vos appareils couverts** – Windows, Mac, iOS, Android et extensions de navigateur

### 🎁 Ce que vous obtenez

· 🔑 **Compte Premium prêt à l’emploi** – Connectez-vous et c’est parti, activation instantanée

· ♾️ **Accès à vie** – Paiement unique, plus rien à payer`,specs:[[`Type de produit`,`Compte TunnelBear VPN Premium`],[`Type de compte`,`Compte précréé`],[`Durée de l’abonnement`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/190e669b-687b-4f33-90d5-0a16012ff825/bw3-ff111087-ac39-49ae-a29b-6de36a4f3fa6.webp`]},"87a923e6-ba62-4dd8-98a5-0d606b3eb068":{description:`### 🛡️ IP Vanish VPN – 1 an

🏷️ \`🕐 Protection pendant 1 an\` · \`🚫 Aucune conservation des logs\` · \`🌍 Accès mondial rapide\`

🔹 Compte VPN premium pendant 1 an

🔹 Masque votre IP, chiffre vos données et vous protège du suivi

🔹 Identifiants : e-mail + mot de passe

🔹 🔁 Garantie de 24 h

🔹 📈 Anonymat et vitesse élevés`,specs:[],images:[`images/6a0753e3-4d34-444d-a2b1-6b246b229aff/bw3-154fabcf-39e3-46df-beb2-224fe01df0ff.webp`]},"2cce1b6b-b194-4a95-bdfc-2745ffe5ea9a":{description:`**PureVPN – Accès premium (🛡️ Rapide. Sécurisé. Illimité 🌍)**

**💰 Seulement 1,50 € – Accès à l’offre premium**

Protégez votre vie privée et naviguez librement sur Internet avec **PureVPN.** Profitez de serveurs haut débit, d’une bande passante illimitée et d’un accès complet au streaming et aux contenus soumis à des restrictions géographiques.

🔒 Connectez-vous. Chiffrez. Explorez.

### Informations clés :

🛜 Compte VPN premium – prêt à l’emploi

🌎 Plus de 6 500 serveurs dans plus de 78 pays

🚀 Débits rapides – parfaits pour le streaming et le jeu

🔓 Contournez les blocages géographiques – accédez à Netflix, Hulu et bien plus

⚠️ Pour Windows, macOS, Android, iOS et plus`,specs:[],images:[`images/7adafa27-5784-400c-b488-1be71a293cfa/bw3-d91aad54-f913-4ce8-8587-71c1a6c3bc5c.webp`]},"e65e36af-2c96-4b40-bfbe-07267ecb541b":{description:`### 🛡️ Mullvad VPN — Confidentialité ultime, zéro suivi

🔒 Conçu pour les utilisateurs qui exigent un véritable anonymat en ligne

\\-\\-\\-

### 💠 Pourquoi choisir Mullvad VPN :

• 🆔 **Aucun compte requis** — uniquement un identifiant généré aléatoirement

• 🚫 **Politique stricte sans logs** — vérifiée par des audits indépendants

• 🧩 **Applications open source** — transparence et fiabilité totales

• 🔐 **Prise en charge de WireGuard et OpenVPN** — chiffrement de niveau militaire

• 📥 **Compatible avec le P2P et les torrents**

\\-\\-\\-

### 🌍 Détails du réseau :

• Serveurs dans **plus de 40 pays**

• ⚡ Aucune limite de bande passante ni de vitesse

• 🖥️ Fonctionne sur PC, macOS et Linux

• 📱 Prise en charge des appareils mobiles

\\-\\-\\-

### 🎯 Idéal pour :

• Une confidentialité et un anonymat maximum

• Une navigation et des téléchargements sécurisés

• Les utilisateurs VPN qui veulent **zéro suivi**

• Les professionnels soucieux de leur confidentialité

\\-\\-\\-

### ⚠️ Remarques :

• Aucune donnée personnelle requise

• L’un des services les plus respectueux de la vie privée`,specs:[],images:[`images/d6fa8b44-3860-4fdb-ba23-322c45567745/bw3-7f760887-36fa-4abc-907a-f1f73502165c.webp`,`images/3631f74f-085b-4ad6-b88c-515496c54130/00c29a05-d2f2-43f5-8e88-44d663e6389f.webp`,`images/7af8854e-17f5-46ff-b678-46d8f1f75189/8d19d25a-ce93-4a28-b039-dfbd43e555df.webp`]},"0c227b91-f360-4a06-b3ee-fb1f8736cd58":{description:`### 🔐 Hotspot Shield VPN – 1 an

🏷️ \`⚡ Ultra-rapide\` · \`📱 Appareils illimités\` · \`🔒 Privé et sécurisé\`

🔹 Forfait Premium d’un an

🔹 Des vitesses ultra-rapides pour le streaming, le gaming et la navigation

🔹 Accédez aux contenus géobloqués

🔹 Chiffrement de niveau militaire

🔹 Fonctionne sur Windows, macOS, Android, iOS, Chrome

🔹 📦 Livraison instantanée après l’achat`,specs:[],images:[`images/79c4f45b-ba64-4357-a21e-be47979901d1/bw3-ea72907c-dedc-4738-8c6d-3085fddaba86.webp`,`images/45e0945a-a9e6-4539-8fa3-66cd7cde2a90/6a2a1494-e1a2-4caa-89cf-67387c7e9811.webp`]},"626ceea1-b14e-4ad8-a54f-4bef48939998":{description:`### ✅ Inclus

· 🐎 **L’expérience western ultime** – Accédez à la campagne solo acclamée par la critique et à l’univers multijoueur en ligne complet

· 🎮 **Accès officiel au Rockstar Launcher** – Téléchargez et jouez directement via l’application PC officielle de Rockstar Games

· 🔐 **Full Access (FA)** – Compte hautement sécurisé dont tous les identifiants principaux sont modifiables

· 🌍 **Fonctionne partout dans le monde** sur PC, sans restriction régionale ni blocage géographique

· ⚡ **Livraison instantanée** directement sur votre tableau de bord

· 🛡 **Garantie de remplacement complète** en cas de problème initial de connexion ou d’identifiants`,specs:[],images:[`images/1b79a4f7-8000-4ada-a722-15f56b330091/bw3-0fe3681d-3d6c-47e9-9b55-a25cd3c32a82.webp`]},"338be3fd-4f17-4c7d-b417-cf4af9e5128a":{description:`### ✅ Inclus

· 💰 **Compte GTA Online avec banque bien garnie** – Montant de départ aléatoire de $500,000 à plus de $100,000,000+

· 🎮 **Mode Histoire complet + mode Online débloqué** – Jeu de base complet prêt à être téléchargé via le Rockstar Launcher

· 🔐 **Full Access (FA)** – Compte hautement sécurisé dont les identifiants sont entièrement modifiables

· 🌍 **Fonctionne partout dans le monde** sur PC, sans restriction régionale ni blocage géographique

· ⚡ **Livraison instantanée** directement sur votre tableau de bord

· 🛡 **Garantie de remplacement complète** en cas de problème initial de connexion ou d’identifiants`,specs:[[`Type de produit`,`Compte Full Access (FA)`],[`Plateforme / lanceur`,`Rockstar Social Club (PC)`],[`Bonus d’argent en jeu : 500 000 $ à 100 M$+ aléatoire`,``],[`Livraison`,`Livraison instantanée`]],images:[`images/953844e7-45b5-452f-ba98-835342030af1/bw3-4ccab6e3-8bff-41a2-a026-21b561ac3643.webp`]},"dcf80246-9820-40c0-962e-60cdc45ab7ce":{description:`**Comptes Rambler.ru – Full Access**

Obtenez vos **comptes e-mail Rambler.ru** avec un accès complet !

- **📧 Format :**\`E-Mail:Password\`

- **🔑 Full Access : vous contrôlez entièrement le compte.**

- **✅ Utilisation polyvalente : peut servir à toutes fins, sans restriction.**

- Livraison instantanée après l’achat ! Parfait pour un usage personnel ou professionnel.`,specs:[],images:[`images/9033caa7-42c7-4f94-8d48-7a27356866ff/bw3-0a11a3d8-204b-4485-9d38-7cbe09ac60d2.webp`]},"0695af19-8ab3-439a-a817-070e62a75153":{description:`### 🛡️ **Comptes Rainbow Six Siege – Full Access**

Plongez dans **Rainbow Six Siege** avec un contrôle total, des comptes prêts pour le Ranked et du contenu exclusif, notamment des Skins et opérateurs rares. Parfaits pour les joueurs occasionnels comme pour les fans de compétition.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔐 **Full Access** — contrôle complet du compte (e-mail et mot de passe)

- 🧠 **Connexion sécurisée** — livraison sûre et fiable

- 🎁 **Contenu exclusif** — Skins rares, opérateurs et profils prêts pour le Ranked

- ⚡ **Assistance rapide** — disponible dès que vous en avez besoin

- 🕒 **Garantie de 24 heures** — garantie complète après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🏆 **Paliers de comptes**

#### 🥉 **Niveau 10–50**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 10–50 garanti

- 🕹️ Expérience de jeu fluide et légitime

#### 🥈 **Niveau 50–100**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 50–100 garanti

- 🎁 Comprend des Skins/objets exclusifs

#### 🥇 **Niveau 100–300+**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 100–300+ garanti

- 🎯 Plus de 100 Skins inclus

- 🧨 Plus de 70 opérateurs disponibles

━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 **Choisissez votre palier et dominez le champ de bataille avec style !**`,specs:[],images:[`images/c85cad1e-0e2f-4523-a167-b98ad3a5890a/bw3-dd192445-6d8f-4fc8-8974-7bc34c2bd5e4.webp`]},"07384672-aca6-4296-80fe-78b896d77211":{description:`### 🪖 **Comptes Escape From Tarkov — Full Access (région UE/États-Unis, etc.)**

Comptes **Escape From Tarkov** premium avec **Full Access**, prêts à jouer immédiatement.

Tous les comptes sont enregistrés dans la **région UE/États-Unis, etc.** et conviennent aux joueurs débutants comme expérimentés.

✨ Certains comptes peuvent également inclure une progression bonus ou des objets rares.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 🌍 Comptes de la région UE/États-Unis, etc.

- 🧼 Compte propre — aucun bannissement ni restriction

- ✨ Certains comptes peuvent inclure une progression bonus ou du butin

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Escape From Tarkov (UE/États-Unis, etc.)_

🔥 Équipez-vous et lancez votre raid immédiatement avec des comptes Tarkov en Full Access !`,specs:[],images:[`images/fb98cbd8-fdad-41b6-87b8-56612e5e79e1/bw3-e05f0b1e-5ace-4c6c-ad55-f9cf23f0569c.webp`]},"e1d59662-0183-41b8-8847-ad0a7d0d12ed":{description:`### ✂️ **Compte CapCut Pro à vie — Non Full Access**

Profitez de toute la puissance de **CapCut Pro** avec un **compte à vie** — aucun abonnement mensuel nécessaire.

Parfait pour les créateurs, les monteurs et tous ceux qui souhaitent accéder à toutes les fonctionnalités premium pour toujours.

✨ Certains comptes peuvent inclure un accès anticipé aux nouvelles fonctionnalités ou aux modèles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- ♾️ Accès à CapCut Pro à vie

- 🪄 Tous les outils et effets de montage premium débloqués

- 📸 Aucun filigrane sur les exports

- 🧼 Compte propre — sécurisé et prêt à l’emploi

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : CapCut Pro (PC / Mobile)_

🔥 Profitez d’un montage sans limites — pour toujours.`,specs:[],images:[`images/7cdc7af3-5ec3-428b-aa0e-823dc893a862/bw3-862d40ee-7d3b-42f2-b43b-d78442699c07.webp`,`images/1ace8f7d-1b05-4af8-8b41-21b303d37244/d01af635-a772-4527-a8f5-cb32f8a81c26.webp`]},"ab3179ef-79f2-4f61-ab87-0f3d6ca88706":{description:`### ⛏️ **Comptes Minecraft – Full Access**

Obtenez **votre propre compte Minecraft** avec contrôle total, un statut propre garanti et une livraison instantanée.

Parfait pour les nouveaux joueurs, les bâtisseurs ou les revendeurs à la recherche de comptes sûrs et neufs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous recevez**

- ✅ **Jamais utilisé** — tout neuf, aucune connexion effectuée

- 🔐 **Full Access** — e-mail + mot de passe + skin entièrement modifiables

- 🚫 **Non banni** — compte propre sur tous les serveurs

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques du compte**

- 100 % **Full Access** — modifiez l’e-mail, le mot de passe et le skin à tout moment

- ✨ **Tout neuf** — jamais utilisé, aucun historique

- 🧼 **Propre sur tous les serveurs** — aucun bannissement garanti

- ⚡ **Livraison instantanée** après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Tous nos comptes Minecraft sont créés par nos soins et vérifiés comme étant propres.`,specs:[[`Produit`,`Compte Minecraft`],[`Identifiant`,`Même e-mail et mot de passe`],[`Accès`,`Full Access`],[`Livraison`,`Instantané`]],images:[`images/7d514feb-42ae-4c5b-8e3e-20c73ad3e490/bw3-87c5a37a-f6f7-4848-9e2c-9385e3208c17.webp`,`images/67a0820c-c35b-4bcd-8e5f-98ef75d62b93/921f8a68-6663-4654-9dce-b750a7219d82.webp`]},"8963b3c7-922a-4f20-afed-5bd3f938102d":{description:`### 🛡️ **14× boosts de serveur d’un mois – Niveau 3 instantané**

Faites passer votre serveur Discord au niveau supérieur en quelques secondes — profitez immédiatement de **tous les avantages du niveau 3** avec 14× boosts d’un mois. Parfait pour les communautés, les événements, les configurations premium ou toute personne souhaitant faire briller son serveur.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Caractéristiques principales**

- 🚀 **14× boosts de serveur (1 mois)** — faites passer instantanément n’importe quel serveur au niveau 3

- ⚡ **Livraison instantanée** — boosts livrés juste après le paiement

- 🖥️ **Fonctionne sur n’importe quel serveur** — sans restriction

- 💬 **Assistance incluse** — aide rapide dès que nécessaire

- 🌟 **Achat unique** — puissance maximale, sans abonnement

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 **Pourquoi 14× boosts de serveur se démarquent**

- 💡 Débloque instantanément les avantages du **niveau 3** sur votre serveur

- 🛡️ Livraison rapide et sécurisée

- 🔁 Compatible avec tous les serveurs Discord

- 🖥️ Configuration simple — aucune étape supplémentaire`,specs:[],images:[`images/8a51256c-8ac2-44c7-a5a7-56c62450d3ab/bw3-e7ca7462-d9ea-45f7-886c-3e74da5bd2c7.webp`,`images/f2a907e1-0f33-4cd4-ba1a-e36c17d4c671/91986d9a-1b2f-4093-a838-e20ee649f4d0.webp`,`images/5b873e48-41df-4e00-b249-487b16ec2ba5/ebe6d750-bd37-4836-bddf-408b96bf83fa.webp`]},"9505dae8-23e5-4fc7-bf79-59cc06ddca97":{description:`### 🧱 **Compte Rust — Full Access (e-mail d’origine \\| 0 propriétaire \\| 0 heure)**

Comptes **Rust** premium avec **Full Access** — fournis avec l’e-mail d’origine et sans propriétaire précédent.

Ces comptes sont neufs en termes de temps de jeu (**0 heure**) et de propriétaires (**0 propriétaire précédent**), parfaits pour repartir de zéro ou utiliser comme comptes secondaires.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔐 Full Access — e-mail et mot de passe d’origine inclus (modifiables)

- 🆕 0 propriétaire précédent — transfert sans historique

- ⏱️ 0 heure de jeu — compte neuf, prêt à l’emploi

- 🧼 Aucun bannissement ni restriction signalé

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Steam_

💡 Idéal pour repartir de zéro, faire du smurf, tester ou utiliser temporairement — sûr, propre et prêt à jouer.`,specs:[],images:[`images/876ca068-0191-44ea-8bde-152a6fe9cdba/bw3-71b2e838-d374-40cb-b39f-02b63e65e272.webp`]},"23879b6a-03b4-4191-9596-7b6dd25a5535":{description:`### 🧱 **Compte Rust NFA — Accès instantané par token**

Comptes **Rust NFA** premium — fournis sous forme de **token + lien de connexion (GUIDE)** pour un accès ultra-rapide.

La plupart des comptes comprennent **Rust** et d’autres jeux Steam.

Parfait pour jouer temporairement, utiliser un compte secondaire ou des cheats sans risquer votre compte principal.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 📦 **Fonctionnement de la livraison**

- Après l’achat, vous recevez un **token** et un **lien de connexion (GUIDE)**.

- Utilisez le token avec l’outil de connexion pour vous connecter instantanément.

- Token = compte. Aucun mot de passe ni e-mail requis.

- La procédure ne prend que quelques secondes.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔐 Livraison du token avec GUIDE de connexion (connexion automatisée facile)

- 🎮 Accès au jeu Rust inclus

- 🧼 Compte propre — aucun bannissement ni restriction

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ _Remarque : vous avez besoin d’un outil de connexion prenant en charge la connexion par token + GUIDE._

💡 Parfait pour jouer temporairement, tester ou utiliser des cheats.`,specs:[],images:[`images/f9d76169-4da6-4d6a-8a30-3f40e8980325/bw3-9110a9c6-a757-4003-8287-a6842e5e5fdb.webp`,`images/dde9b381-079c-449d-a249-060ba7f4675c/8838edef-d078-42fd-b047-969367578fe5.webp`,`images/70b90f4c-bdc9-4681-ac35-65570558e192/c5853da1-d593-4856-9e9a-b5950eae5350.webp`]},"9adcbe7a-dc4a-4f17-ae4a-943dbea0ad91":{description:`### 🥊 Compte UFC Fight Pass à vie

· Regardez tous les combats. À tout moment. Pour toujours.

Accédez à l’ensemble du contenu UFC Fight Pass sans frais mensuels.

### ✅ Inclus :

· 💥 UFC Fight Pass – Accès à vie

· 🥇 Combats en direct et à la demande, séries originales, événements et archives

· 📺 Regardez sur PC, mobile, tablette ou Smart TV

· 🌍 Accès mondial – aucune restriction régionale

· ⚡ Livraison instantanée et guide de configuration

· 🛠️ Assistance clientèle complète incluse

**Idéal pour les vrais fans de MMA. Un paiement unique pour une action de combat illimitée.**`,specs:[],images:[`images/d2634a22-e7db-4ddd-9ac9-ee1e6c866d2b/bw3-cbfdf2f0-83da-4224-88e4-1d1e2308e095.webp`]},"850aca4d-3619-4783-abea-9f8e1c931e12":{description:`### 🎵 Compte Spotify à vie – Forfait Family et Student

· Musique illimitée, sans publicité et en qualité Premium — pour toujours.

Profitez de Spotify Premium avec le forfait Family, grâce à un achat unique.

### ✅ Inclus :

· 🏷️ Spotify Premium (forfait Family et Student) – Accès à vie

· 🚫 Sans publicité, sauts illimités, écoute hors ligne

· 🔊 Streaming audio haute qualité

· 🌍 Fonctionne dans le monde entier sur tous les appareils

· ⚡ Livraison instantanée + guide de configuration complet

· 🛠️ Assistance incluse

**Un seul paiement, Premium à vie. Idéal pour les mélomanes qui ne veulent pas de frais mensuels.**`,specs:[],images:[`images/166e7166-4270-476b-a5f6-91d815f5bca9/bw3-a446f2d9-879f-4fb8-9970-dc05d11b2c25.webp`,`images/bae5aba3-a2d3-4b09-855e-2e0d2529ea6e/f3980e55-e7da-4722-a690-55fa851ddbcb.webp`,`images/441f4b71-3337-47ca-9ad0-4d5310f20ab0/738eae52-f742-49c2-afb2-1566904b08c6.webp`]},"b19b530f-5c3c-422f-a0a9-5d56525d318d":{description:`### 🎥 Compte HBO Max à vie

· Regardez des films à succès et des séries populaires — à vie.

Profitez de tout ce que HBO Max propose, sans frais mensuels.

### ✅ Inclus :

· 🟣 HBO Max Premium – Accès à vie

· 🎬 Accès complet aux HBO Originals, aux exclusivités Max et aux sorties Warner Bros.

· 📺 Regardez sur Smart TV, mobile, tablette et ordinateur

· 🌍 Accès mondial (avec VPN si nécessaire)

· ⚡ Livraison instantanée après l’achat

· 🛠️ Assistance incluse

**Paiement unique. Streaming illimité. Divertissement à vie.**`,specs:[],images:[`images/6149f56a-b784-4c16-a832-6ae1f022fb95/bw3-cbe0e160-fc24-4802-adce-52c3cb36c147.webp`,`images/4c2ef13f-aed8-4404-971f-330c43635e12/ce500855-fdbc-42f7-8c7e-9e008c0a0d36.webp`,`images/ae315554-b302-490d-a14d-51a72c0e7d82/08fbeba7-52b9-4b3e-902d-f30b4453b1bc.webp`]},"868ffca3-c32f-45cc-bf3a-fce53cb7c932":{description:`### 💸 **Comptes NFA à 0,50 $ — Contacts de fournisseurs (méthode)**

Accédez à des **fournisseurs triés sur le volet** qui produisent des comptes NFA bon marché. Après l’achat, vous recevrez les **coordonnées directes** de fournisseurs exclusifs (non publics) qui créent des comptes NFA en grande quantité pour des jeux comme **CS2, Rust, DayZ, PUBG** et d’autres.

Ces fournisseurs sont rares — seules quelques personnes dans le monde y ont directement accès — d’où les prix très bas et les stocks limités.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔍 **Description du produit**

- ✅ **Aucun compte individuel n’est livré** — vous obtenez les **contacts** de fournisseurs qui créent des comptes NFA.

- 💰 **Prix :** 0,50 $ (accès aux contacts des fournisseurs)

- 🌐 Jeux concernés : **CS2, Rust, DayZ, PUBG** (et parfois d’autres)

- ✨ De nombreux comptes fournis peuvent inclure des **objets/Skins rares** — parfaits pour la revente ou une utilisation temporaire rapide.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧾 **Ce que vous recevez après l’achat**

- 📬 Coordonnée(s) directe(s) du/des fournisseur(s) (Telegram / autre)

- 💬 Bref guide pour passer commande et communiquer avec les fournisseurs (conseils linguistiques + prix indicatifs)

- ⚠️ Conseils pour acheter en toute sécurité et vérifier rapidement la qualité des comptes

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🔧 **Pourquoi les clients achètent ce produit**

- 🔥 Prix fournisseurs extrêmement bas — idéal pour les **revendeurs** ou les utilisateurs qui ont besoin de nombreux comptes secondaires bon marché.

- ⚡ Mise en relation rapide avec des producteurs actifs — l’accès limité permet de meilleures offres.

- 🕹️ Les comptes conviennent au **jeu temporaire, aux tests ou à l’utilisation avec des cheats/comme comptes secondaires** (à la discrétion de l’acheteur).

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ⚠️ **Remarques importantes et risques**

- 🛑 Ces fournisseurs opèrent en dehors des grandes places de marché — ne vous attendez à **aucune garantie officielle** au-delà de celles proposées par le fournisseur.

- 🔒 Utilisez les comptes fournis à vos risques et périls — ne les utilisez **pas** pour des services sensibles/personnels (banque, e-mails de récupération).

- 🌍 La juridiction et la légalité varient — vérifiez la législation locale et les CGU des plateformes. Nous vendons **uniquement** l’accès aux contacts et n’encourageons aucun usage abusif.

- 🔁 Aucun remboursement après la transmission du contact du fournisseur — les remboursements sont traités au cas par cas (voir la politique de la boutique).

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 _Conseil : après l’achat, contactez le fournisseur poliment, suivez le guide fourni et demandez une preuve (capture d’écran/jeton) avant d’envoyer des sommes importantes._`,specs:[],images:[`images/6efcee87-74a3-4230-9856-2d56b6fcacad/bw3-a3b929dc-cd33-46bb-8751-1838809f9558.webp`]},"041d5379-5e8c-4ac3-9d10-396aab6f91f2":{description:`### 📸 Compte Instagram avec accès complet — 1 000+ abonnés

🚀 Compte Instagram prêt à l’emploi pour gagner instantanément en crédibilité et en visibilité

\\-\\-\\-

### ✅ Caractéristiques principales :

• 👥 **1 000+ vrais abonnés**

• 🔐 **Accès complet** — e-mail et mot de passe inclus

• ♻️ Possibilité de modifier **tous les identifiants**

• 🧼 **Compte propre et sûr**

• ⚡ **Livraison instantanée**

\\-\\-\\-

### 💠 Informations sur le compte :

• 📱 Prêt à être utilisé sur mobile

• 🚫 Aucun problème de vérification

• ♻️ **Remplacement disponible**

• ⏱️ **Garantie de 24 heures**

\\-\\-\\-

### 📈 Idéal pour :

• Image de marque personnelle

• Lancement d’entreprise et de boutique

• Marketing et promotions

• Jeux-concours

• Débuts d’influenceur

\\-\\-\\-

### ⚠️ Remarques :

• Base d’abonnés de haute qualité

• Prêt à l’emploi juste après l’achat`,specs:[],images:[`images/944c8cb0-1993-40a0-952b-2a98ad5e6eb5/bw3-17a099a6-cc6c-428a-9826-a91e49498cde.webp`,`images/7f95385e-249f-4b0a-9a8f-c1bf3eb788fe/7bda8010-f0a1-45f3-af5e-1e4ecb15a22c.webp`]},"e76a5942-825d-40ec-90be-cee44a414f81":{description:`### 🍜 **Crunchyroll \\[MEGA FAN MEMBER\\] — Compte à vie**

**Comptes Crunchyroll** premium avec abonnement **MEGA FAN** — profitez du streaming d’anime illimité, sans publicité, et de fonctionnalités exclusives à vie.

✨ Idéal pour les fans d’anime qui souhaitent un accès premium permanent sans paiement mensuel.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🍿 Abonnement MEGA FAN inclus (à vie)

- 🧼 Compte propre — aucun bannissement ni restriction

- 📺 Streaming d’anime illimité, sans publicité

- 🌍 Fonctionne dans le monde entier avec prise en charge du VPN

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Crunchyroll_

🔥 Profitez éternellement de vos animes préférés avec un accès premium à vie !`,specs:[],images:[`images/a62b4132-abec-4630-a12b-ef0ee79ec717/bw3-e0365594-5e33-41d8-bb3a-3431fabfaf36.webp`,`images/bccaed65-58af-4c03-9850-424ab29eb673/9aed0cf5-a085-46b4-a6d6-7b9cc40e5e67.webp`,`images/963e5472-54e6-4651-a11a-83cd089193fc/dbb7a644-984f-49d4-879b-c9fef147aba4.webp`]},"08d3b2c5-9fed-49e8-85f2-aeda9ce5d58a":{description:`### 📸 Compte Instagram avec accès complet — 5 000+ abonnés

🚀 Compte Instagram premium pour une croissance rapide et une meilleure visibilité

\\-\\-\\-

### ✅ Caractéristiques principales :

• 👥 **5 000+ abonnés réels / organiques**

• 🔐 **Accès complet** — e-mail et mot de passe inclus

• ♻️ Possibilité de modifier **tous les identifiants**

• ⭐ **Grande crédibilité et forte visibilité**

• ⚡ **Livraison instantanée**

\\-\\-\\-

### 💠 Informations sur le compte :

• 🧼 **Compte propre et sûr**

• 📱 Prêt à être utilisé sur mobile

• 🚫 Aucun problème de vérification

• ♻️ **Remplacement disponible**

• ⏱️ **Garantie de 24 heures**

\\-\\-\\-

### 📈 Idéal pour :

• Développer une audience d’influenceur

• Partenariats de marque et collaborations

• Campagnes marketing

• Pages d’entreprise et de boutique

• Augmenter l’engagement

\\-\\-\\-

### ⚠️ Remarques :

• Base d’abonnés solide et bien établie

• Le choix parfait pour développer rapidement son compte Instagram`,specs:[],images:[`images/fd7f88bd-60f5-4d48-a97e-1307c740879e/bw3-46296022-52ce-44fc-8136-a4e848373020.webp`,`images/e77bd56f-cdb3-4f00-9469-a09ce3bf9537/ffee7028-9c0f-4a55-88b3-c583961c6c45.webp`]},"130fe505-8f3e-4132-b63e-1e6c36c1b9d4":{description:`### 🧠 Compte Duolingo à vie

· Maîtrisez de nouvelles langues pour la vie — sans abonnement.

Profitez des fonctionnalités d’apprentissage premium avec un achat unique.

### ✅ Inclus :

· 🌟 Duolingo Plus – Accès à vie

· 🚫 Sans publicité – Apprentissage sans aucune distraction

· 📊 Suivez vos progrès et débloquez toutes les fonctionnalités

· 🌍 Fonctionne partout dans le monde et sur tous les appareils

· ⚡ Livraison instantanée après l’achat

· 💬 Assistance incluse

**Commencez à apprendre quand et où vous voulez — et poursuivez pour la vie. 🌎💡**`,specs:[],images:[`images/507fca0b-eea4-44b6-b9d6-5f1c9f8f6b3e/bw3-7581944c-b982-4fc7-ba10-44e875b333e3.webp`]},"5bde03b6-bb00-43b1-a91e-3f5e7f4b759a":{description:`### 🏀 **Compte NBA à vie — Full Access (streaming)**

Comptes de streaming **NBA** premium et entièrement vérifiés avec **accès à vie** — regardez tous les matchs, temps forts et contenus exclusifs sans limite.

Idéal pour les fans de basket qui souhaitent un accès illimité aux matchs NBA, comme avec HBO ou Netflix.

✨ Certains comptes peuvent également inclure des fonctionnalités bonus, comme des matchs archivés ou des événements exclusifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 📺 Accès au streaming à vie — aucun abonnement mensuel nécessaire

- 🏆 Regardez des matchs en direct, des temps forts, des rediffusions et du contenu NBA exclusif

- ✨ Certains comptes incluent des fonctionnalités bonus ou des options Premium

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : service de streaming NBA officiel (NBA League Pass)_

🔥 Profitez d’un **accès NBA illimité** — après l’achat, il vous appartient pour toujours !`,specs:[],images:[`images/b0adc497-1a9e-4079-b6b5-28d8b69dd889/bw3-b33e9204-36fc-47aa-8cf9-aa1f40542d75.webp`,`images/c5211899-04f0-45f6-9422-1f523c225081/c1cad1dc-2452-42c6-ad08-437cae456852.webp`]},"ab8ea7a1-20da-4d2e-bc04-634e76cfea2b":{description:`### 🎮 **Méthode pour obtenir des jeux Steam gratuits – Accès à un fournisseur privé**

Profitez d’une **occasion rare et exclusive** d’obtenir des clés de jeux Steam directement auprès d’un fournisseur privé. Suivez un tutoriel simple et accédez à une page secrète utilisée par seulement quelques personnes dans le monde.

\\-\\-\\-

### 🛠️ **Caractéristiques principales**

- 🔑 **Accès privé** — réservé aux membres sélectionnés

- 🧭 **Tutoriel étape par étape** — facile à suivre

- 🕹️ **Jeux illimités** — obtenez des clés pour n’importe quels jeux

- 🪄 **Utilisation flexible** — jouez ou revendez

- 💼 **Fort potentiel de revenus** — gagnez des centaines, voire des milliers par mois

\\-\\-\\-


### 💥 **Pourquoi la méthode des jeux Steam gratuits se démarque**

- Occasion exclusive introuvable ailleurs

- Configuration facile — même les débutants peuvent s’en servir

- Réel potentiel de bénéfices

- Accès sécurisé et privé`,specs:[],images:[`images/2edbb072-f689-440a-b33e-2884c55d0a78/bw3-b72df386-d05b-4967-a15d-604a0eb1d753.webp`]},"e3901ff5-b641-4f19-b0f4-06d93b80a946":{description:`### Compte Prime Video à vie 🎬

🔑 Full Access – Regardez quand et où vous voulez avec un compte entièrement privé

♾️ Garantie à vie – Aucun frais récurrent, aucun souci — achat unique

📺 Streaming en HD/4K – Profitez d’un accès illimité à des milliers de films et séries

🌍 Accès mondial – Utilisable depuis n’importe quel pays, avec une compatibilité complète

💼 Idéal pour un usage personnel ou la revente – Compte fiable, idéal pour regarder sur le long terme

\\- \\- 📦 Livraison instantanée (format identifiant:mot de passe)

\\- \\- 🛡️ Garantie incluse avec assistance de base

\\### Profitez d’un divertissement sans fin avec votre propre compte Prime Video à vie ! 🎉`,specs:[],images:[`images/3873b889-47e2-4ea0-806f-7780e7ab3d3e/bw3-385a71fa-f510-4228-a882-6bfddc91d225.webp`,`images/df6da3d3-1a7b-46a3-b7bc-1ee0cfe97cf1/b612171b-8add-4835-95d2-631458f5a10c.webp`,`images/6ebef3b5-c4b5-4cb3-a260-8b274b923654/a0079390-3975-4289-88db-d911d61d5e3a.webp`]},"2d630a23-5f9b-4091-9b57-b327e5a24155":{description:`### ✅ Inclus

· 🔑 **Clé d’activation Spotify Premium – Accès à vie**

· 👤 **Fonctionne sur votre propre compte Spotify** (pas de compte partagé)

· 🚫 **Sans publicité, passages illimités, écoute hors ligne**

· 🔊 **Streaming audio haute qualité**

· 🌍 **Fonctionne partout dans le monde sur tous les appareils**

· ⚡ **Livraison instantanée + guide d’activation**

· 🛠 **Assistance incluse en cas de besoin**

### 💡Important :

· Pour une activation optimale, votre compte Spotify ne doit pas déjà avoir Premium.`,specs:[[`Type de produit`,`Clé de mise à niveau Premium`],[`Type de compte`,`Votre compte`],[`Garantie`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/6bd96a89-2a57-41e2-8a83-f3c1e53463c7/bw3-34af1fc5-1d1e-4dcf-8f32-fe730e7521c8.webp`,`images/6c47eb97-3158-4373-96e7-4d481f6509e5/ff85b426-7e88-4ac3-ac2a-8dc1217d934c.webp`,`images/415eed60-b91a-43d7-a9e3-fd4ab1f77f0f/26f1e18b-ed52-4566-bbf0-6b2a43804ce3.webp`]},"0d6edf75-d785-430a-b9a2-eed3b76096bd":{description:`### 📺 **Movistar+ à vie – Abonnement premium**

Obtenez votre **compte Movistar+ à vie** et accédez à des contenus espagnols premium en streaming, notamment des films, des séries, du sport et des nouveautés exclusives.

Parfait pour profiter de divertissements sur le long terme sans paiements mensuels.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

- ♾️ **Accès à vie** — aucun paiement mensuel requis

- 🔑 **Accès au compte** — identifiants prêts à l’emploi

- 🎬 **Contenus premium** — films, séries, sport et contenus HBO

- 🌍 **Plateforme espagnole** — des contenus uniques introuvables ailleurs

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques du compte**

- ⚡ **Livraison instantanée** après l’achat

- 🧼 **Comptes entièrement vérifiés** — propres et fonctionnels

- 🔁 **Renouvellement automatique activé** — accès continu

- 🛠️ **Assistance et remplacement** en cas de problème

━━━━━━━━━━━━━━━━━━━━━━━━━━

📺 **À regarder :**

- Les derniers **films et sorties cinéma**

- Les **séries télévisées et créations originales** populaires

- Le **sport et les événements** en direct

- Des **contenus et documentaires espagnols** exclusifs

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Movistar+ est l’une des plus grandes plateformes de streaming d’Espagne et propose des contenus exclusifs introuvables sur Netflix ou d’autres services.`,specs:[],images:[`images/05cf0133-01fd-4209-9ad3-358d34adf2ce/bw3-dbb396e0-2411-4f21-8ac6-d08a12bc6de1.webp`,`images/bb3a4038-952b-4c38-a37e-aa724c63514a/b7f3efa3-10e3-4793-b6a6-4aad8d44140e.webp`]},"ce5785b8-2fb6-48aa-9304-906062f468f5":{description:`### 📺 **Comptes OnePlay – Accès premium**

Obtenez votre **compte OnePlay** et accédez à des contenus européens populaires en streaming, notamment des émissions télévisées, des chaînes en direct et des séries de téléréalité exclusives.

Parfait pour les utilisateurs à la recherche de contenus uniques absents des plateformes mondiales.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

- 📺 **Accès premium** — films, émissions télévisées et chaînes en direct

- 🌍 **Contenus de l’UE** — populaires en Tchéquie, en Slovaquie et en Europe

- 🎬 **Émissions exclusives** — notamment Love Island et des succès locaux

- 🔑 **Connexion prête à l’emploi** — accès simple et immédiat

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques du compte**

- ⚡ **Livraison instantanée**

- 🧼 **Comptes vérifiés et fonctionnels**

- 🎯 **Accès stable** — expérience de streaming fluide

- 🛠️ **Assistance et remplacement si nécessaire**

━━━━━━━━━━━━━━━━━━━━━━━━━━

📺 **À regarder :**

- **Chaînes et programmes télévisés** en direct

- **Émissions de téléréalité** tendance (Love Island et autres)

- **Films et séries** européens

- **Contenus exclusifs** régionaux

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** OnePlay propose des contenus européens uniques qui ne sont pas disponibles sur des plateformes comme Netflix ou Disney+.`,specs:[[`Produit`,`Compte OnePlay`],[`Identifiant`,`E-mail et mot de passe`],[`Accès`,`Accès au compte`],[`Livraison`,`Instantané`]],images:[`images/1cbc9751-1fbb-4638-9cd2-90d3ea8d7fe0/bw3-6402f37d-b525-43fb-a63b-c12ce85b8800.webp`,`images/778f75bd-69f8-4900-97e8-0d25844113c7/6966a45b-fea0-4def-81e6-6c72437c01b0.webp`,`images/e3566e61-4025-4257-baa2-117819bd93cf/5f97627f-b45e-4537-a633-e936ba7e1f6f.webp`]},"19df5f59-0e50-4fbf-af7d-1e4e28be8801":{description:`### 🚀 **Boost Nitro Discord – 1 mois (lien cadeau)**

Obtenez votre **Boost Nitro Discord (1 mois)** via un lien cadeau et améliorez instantanément votre expérience Discord avec des fonctionnalités premium.

Parfait pour booster votre profil, vos serveurs et votre présence générale.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

- 🎁 **Livraison par lien cadeau** — activation simple en un clic

- 📅 **Nitro 1 mois** — accès premium complet pendant 30 jours

- 💎 **Fonctionnalités premium** — emojis, envois et avantages de profil

- 🔥 **Boost de serveur** — améliorez le niveau de votre serveur

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Fonctionnalités incluses**

- 🚀 **Limites d’envoi plus élevées**

- 🎨 **Emojis et stickers personnalisés**

- 🖼️ **Avatar animé et bannière de profil**

- 🎧 **Meilleure qualité de streaming**

━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ **Fonctionnement :**


1. Recevez instantanément votre **lien cadeau**

2. Ouvrez le lien

3. Activez Nitro sur votre compte Discord

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Nitro Boost améliore votre compte et débloque aussi de puissants avantages pour vos serveurs Discord préférés.`,specs:[[`Produit`,`Nitro Boost (1 mois)`],[`Identifiant`,`Lien cadeau`],[`Accès`,`Activable`],[`Livraison`,`Instantané`]],images:[`images/2b9e15dc-11b8-4b68-88dd-33397cb16437/bw3-9991c30c-4bc7-4b2f-915d-884978fdbd3c.webp`]},"97c023d1-e7bb-423d-9ddd-0d8303e764fc":{description:`### 🎬 **AMC+ à vie – Accès au streaming Premium**

Obtenez votre **compte AMC+ à vie** avec accès à des séries de premier plan, des films et des créations originales exclusives.

Idéal pour les amateurs de récits de qualité et de séries cultes.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

- ♾️ **Accès à vie** — aucun paiement mensuel

- 🎥 **Séries Premium** — créations originales exclusives d’AMC

- 🔪 **Séries populaires** — notamment The Walking Dead et bien d’autres

- 🔑 **Identifiants prêts à l’emploi** — accès instantané

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques du compte**

- ⚡ **Livraison instantanée**

- 🧼 **Comptes vérifiés et fonctionnels**

- 📺 **Qualité de streaming HD**

- 🛠️ **Assistance et remplacement si nécessaire**

━━━━━━━━━━━━━━━━━━━━━━━━━━

📺 **À regarder :**

- 🔪 **L’univers The Walking Dead**

- 🎬 **Créations originales AMC** exclusives

- 👻 Séries à suspense, d’horreur et dramatiques

- 🎥 Films et collections Premium

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** AMC+ est réputé pour certaines des séries les plus emblématiques de l’histoire de la télévision, notamment dans les genres du suspense et de l’horreur.`,specs:[[`Produit`,`AMC+ à vie`],[`Identifiant`,`E-mail et mot de passe`],[`Accès`,`Accès au compte`],[`Livraison`,`Instantané`]],images:[`images/a60c99e1-5a7d-436f-a677-f5615077a504/bw3-bb74a4a4-aa20-43f0-91c3-3d7321d68dff.webp`,`images/f0fb7e07-e9c0-4a64-bbc8-18e4b0c18e23/85848c4c-2edc-4284-95bd-48cb630c680a.webp`,`images/943c7f5a-04a7-4484-99bb-865131f61e64/a16e28e9-957c-4e2b-8e9f-9a119d97d3d0.webp`]},"3a71d738-cdc1-4a31-9e6b-40958f0ac810":{description:`### 🎬 **Wondershare Filmora – Licence à vie**

Obtenez votre **licence à vie Wondershare Filmora** et créez facilement des vidéos professionnelles.

Idéal pour les créateurs de contenu, les monteurs et toute personne souhaitant produire des vidéos de haute qualité.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

- ♾️ **Accès à vie** — aucun abonnement

- 🎥 **Outils de montage avancés** — effets, transitions et plus encore

- ⚡ **Facile pour les débutants** — flux de travail simple et rapide

- 💻 **Prêt pour les créateurs** — idéal pour YouTube, TikTok et le travail

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Fonctionnalités du logiciel**

- 🎞️ **Montage vidéo** par glisser-déposer

- ✨ **Effets et modèles** intégrés

- 🎧 Montage et amélioration audio

- 📤 Exportation en **haute qualité (HD/4K)**

━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ **Pourquoi Filmora :**

- Facile à utiliser tout en restant puissant

- Fait gagner du temps grâce aux modèles prêts à l’emploi

- Équilibre parfait entre montage pour débutants et professionnels

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Filmora est l’un des éditeurs vidéo les plus populaires auprès des créateurs débutants et intermédiaires du monde entier.`,specs:[[`Produit`,`Wondershare Filmora à vie`],[`Identifiant`,`Clé de licence`],[`Accès`,`Accès NFA`],[`Livraison`,`Instantané`]],images:[`images/29c0d1a2-71be-4e94-bddd-36ad68df85f6/bw3-29f7d306-ed74-4a87-962e-db2a2a4c9102.webp`,`images/6a520019-abc2-4be3-9326-8ea0e650650e/82510625-208b-4231-b7c0-aaa9e229a1e6.webp`]},"4590efa7-5844-4531-b177-5381da0325bc":{description:`### 🎮 **Jeux Steam – N’importe quel jeu solo (3 €)**

Obtenez **N’IMPORTE QUEL jeu solo Steam** pour seulement **3 €**, avec livraison instantanée par clé d’activation.

Idéal pour les joueurs qui souhaitent accéder à petit prix aux jeux Premium.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Fonctionnement**

1. 🛒 Achetez ce produit


3. 🎮 Choisissez N’IMPORTE QUEL jeu solo

4. 🔑 Recevez votre clé d’activation

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧠 **Ce que vous obtenez**

- 🎮 **N’importe quel jeu solo** de votre choix

- 🔑 **Clé d’activation Steam** — à utiliser sur votre propre compte

- 💰 **Seulement 3 € par jeu** — prix imbattable

- ⚡ **Livraison rapide par ticket**

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques du service**

- 🧼 **Uniquement des clés fonctionnelles et valides**

- 🎯 **Vaste sélection de jeux**

- ⚡ **Réponse rapide de l’assistance**

- 🛠️ **Remplacement en cas de problème**

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Vous pouvez demander presque n’importe quel jeu solo populaire et le recevoir directement sur votre compte Steam via une clé.`,specs:[[`Produit`,`Jeux Steam (3 € chacun)`],[`Identifiant`,`Compte Steam`],[`Accès`,`Clé d’activation`],[`Livraison`,`Livraison du ticket`]],images:[`images/50d7f6fe-0d8e-4b0d-b158-5f30252836d7/bw3-4fc58e8b-a939-4a0c-b041-633888eb5810.webp`,`images/9fa95272-1915-4d97-b124-f5d467533f82/32a0e185-be9a-429a-ab90-36555e923f37.webp`,`images/a6577dcc-1306-4358-babb-59466c00cca1/86ef2267-8fe5-4d90-99f2-1bf100159e87.webp`,`images/96646ddb-acec-4533-a98d-d0d1a4cde0fc/f8115811-c0e6-4b7d-8d9f-616b8ade1f18.webp`]},"d79f277b-f260-4c29-b213-1d84147cd1c8":{description:`### ✅ Inclus

· 🎓 **Compte Canva Pro – Accès premium à vie**

· 🔐 **Full Access** – Vous recevez \`email:password\` avec accès à la boîte mail

· 🖼 **Tous les modèles premium, photos, vidéos et polices débloqués**

· 🌍 **Fonctionne partout dans le monde sur tous les appareils**

· ⚡ **Livraison instantanée + guide d’activation clair**

· 🛠 **Assistance incluse en cas de besoin**

\\-\\-\\-

\`Paiement unique. Canva Pro à vie. Idéal pour les créateurs, les étudiants et les entreprises.\``,specs:[[`Type de produit`,`Compte Full Access`],[`Type de compte`,`Canva Pro (EDU)`],[`Garantie`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/e1363f6c-1a9c-465b-ae7f-00e05343f0bc/canva_fixed.jpg`]},"84a8d150-6bf3-4de8-a8af-523559433a23":{description:`### ✅ Inclus

· 🔑 **Compte Deezer Premium – Valide jusqu’en 2099** (presque le siècle prochain !)

· 🔊 **Audio haute fidélité (Hi-Fi)** – Streaming audio cristallin et sans perte, supérieur à Spotify

· 🚫 **Sans publicité, passages illimités et téléchargement hors ligne complet** débloqués

· 🌍 **Fonctionne partout dans le monde** sur iOS, Android, ordinateur et Smart TV`,specs:[[`Type de produit`,`Compte Premium`],[`Type de compte`,`Compte précréé`],[`Durée de l’abonnement`,`Jusqu’en 2099 (à vie)`],[`Livraison`,`Livraison instantanée`]],images:[`images/1a76807f-d5f5-4537-9852-cecbafa2a52f/bw3-1d5c7746-249c-4515-b6e0-8cf1093d48d2.webp`]},"fd847385-0597-40a4-a0cf-41ea4ed25bb2":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans facturation mensuelle ni renouvellement d’abonnement

· 📱 **Connexion mobile prête à l’emploi** – Accès direct \`email:password\` pour vous connecter sur iOS et Android

· 🖥️ **Clé d’activation PC** – Comprend le \`Activation Code\` premium officiel pour une connexion fluide sur ordinateur

· 🚀 **Protocole NextGen** – Propulsé par le protocole Lightway personnalisé d’ExpressVPN pour des connexions instantanées

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Vos identifiants complets et votre code sont envoyés directement sur votre tableau de bord après l’achat

· 🧼 **Vérifié et fonctionnel** – Statut premium actif vérifié à 100 %

· 🌍 **Réseau mondial de serveurs** – Des serveurs ultra-sécurisés dans 105 pays

· 🛠️ **Garantie de remplacement** – Assistance complète et remplacements automatisés si nécessaire`,specs:[[`Type de produit`,`Clé ExpressVPN Premium`],[`Accès mobile`,`Connexion par e-mail et mot de passe`],[`Accès PC`,`Clé d’activation Premium`],[`Garantie / accès`,`À vie`]],images:[`images/6b99b5d9-3e2e-4462-b14a-544e715b39a9/bw3-5388c3cc-20c6-439f-bd83-b1d472cd1f2f.webp`,`images/c49e64c5-5733-4988-b403-eb215e0fc43a/f3b6d277-61d9-465d-9b96-039f21db768c.webp`,`images/aa3a5a04-105d-4fdc-b005-99481d84c23f/08b08a94-e859-4029-96a2-2345906d3304.webp`]},"ffc3ada8-92dc-4d0f-82e3-38479fc2d5fa":{description:`### 🧠 Ce que vous obtenez

· 🆕 **Nouveaux comptes Outlook** – Boîtes mail fraîchement créées, prêtes à l’emploi

· 🔓 **Accès sans restriction** – Contrôle complet du compte e-mail avec identifiants principaux modifiables

· 🛠️ **Fonction d’attente de 7 jours ignorée** – Idéal pour les configurations automatisées ; connectez-vous immédiatement sans devoir associer un numéro de téléphone

· 🤖 **Adapté à l’automatisation** – Optimisé pour les bots, les générateurs de comptes et les outils d’inscription en masse

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés sur votre tableau de bord juste après le paiement

· 🧼 **Vérifié et contrôlé** – 100 % actifs et prêts à la connexion (aucun bannissement initial ni écran de verrouillage)

· 🌍 **Compatibilité mondiale** – Utilisables depuis n’importe quel pays ou pool de proxies dans le monde

· 🛠️ **Garantie de remplacement** – Assistance dédiée et remplacement immédiat si un compte est inutilisable dès le départ`,specs:[[`Type de produit`,`E-mail Outlook neuf`],[`État de la vérification`,`Saut de 7 jours activé`],[`Type d’accès`,`Full Access (FA)`],[`Livraison`,`Automatisation instantanée`]],images:[`images/76d8a604-cfc0-44d0-b504-0cb039d9c697/outlook_fixed.jpg`]},"3b2386c2-5d03-41f8-9f2b-1093a58428d2":{description:`### ✅ Inclus

· 🏈 **Compte NFL+ Premium – Accès à vie** (achat unique, aucun frais récurrent)

· 👤 **Compte prêt à l’emploi, entièrement activé** – Identifiants de connexion livrés instantanément

· 📺 **Rediffusions complètes et condensées des matchs** – Tous les matchs de saison régulière et des playoffs, à la demande

· 🎥 **NFL Films et émissions originales** – Accès aux documentaires exclusifs et aux programmes originaux

· 📡 **Streaming NFL Network + RedZone** – Ne manquez aucune action décisive de la ligue

· 🚫 **Sans publicité sur certains contenus** et streaming mobile complet débloqué

· 🌍 **Compatible avec tous vos appareils** – Téléphone, tablette et applications TV connectée

· ⚡ **Livraison instantanée** – Recevez vos identifiants juste après l’achat

· 🛠 **Assistance incluse** si vous avez besoin d’aide pour vous connecter`,specs:[[`Type de produit`,`Compte NFL+ Premium`],[`Niveau d’accès`,`Premium (RedZone + NFL Network)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/bb3f17de-de44-40aa-8dfc-ab8930cac35d/bw3-773f92cd-9a90-42e3-bd2e-cb813a88bc73.webp`,`images/d90cb6d2-4f8e-4207-ae46-479ca14a0b8e/df37c5c4-99a5-4a15-968f-59d78bf52518.webp`,`images/f746588e-3867-4e5c-85f4-a4fb620f1bb8/4a6dbf15-7bef-4307-bf37-78f857365be8.webp`,`images/dee81b57-1ec3-4c15-a5bc-3e0ff9f04d5a/84073e7d-52d3-4910-8866-892c3c525ba9.webp`]},"d216af7c-1de1-45b8-b30f-058295a6a367":{description:`### ✅ Inclus

· ✍️ **Compte QuillBot Premium – Accès à vie** (achat unique, aucun frais récurrent)

· 🔄 **Paraphrase illimitée** – Tous les modes débloqués (Standard, Fluency, Formal, Creative, Academic et plus)

· 📝 **Correcteur grammatical avancé** – Repérez et corrigez instantanément les erreurs grâce aux suggestions premium

· 📚 **Résumés sans limite de longueur** – Résumez de longs articles et travaux sans limite de longueur

· 🔍 **Accès au détecteur de plagiat** – Vérifiez l’originalité avant de soumettre votre travail

· 🌍 **Fonctionne partout** sur le Web, l’extension Chrome, Word et mobile`,specs:[[`Type de produit`,`Compte QuillBot Premium`],[`Type de compte`,`Compte précréé`],[`Durée de l’abonnement`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/30a1c4fe-a706-42b4-a135-f5f4749d018a/bw3-d04a0521-38fa-4e39-990e-878963c0b446.webp`,`images/3a4a5e06-e185-4e91-9aec-fa6f279589bf/fdf5ff17-211d-4988-8152-f1818805dfe5.webp`,`images/119c10b6-cf06-4307-b216-971b9d680ced/d0d0aeae-de98-425c-9dbb-b96c3cfb539f.webp`]},"44eee42a-0454-4d42-a88e-020c84e3dff2":{description:`### ⚽ **EA Sports FC 27 – PS5 Digital \\[ Standard / Ultimate / Ultimate Plus \\]**

Accédez immédiatement à **EA Sports FC 27** sur PS5 via un **profil PSN secondaire** qui possède déjà le jeu — pas d’attente ni de préchargement, il suffit de changer de profil et de jouer.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`EA FC 27 (Standard/Ultimate/Ultimate Plus)`],[`Plateforme`,`PS5 (numérique)`],[`Méthode d’accès`,`Basculement vers un profil PSN secondaire`],[`Livraison`,`Livraison instantanée`]],images:[`images/2e5d66d8-c612-406a-a7b0-2df4dc69b7c0/image-236.webp`]},"933b42af-0e05-4144-9ac6-86765b2647e5":{description:`### 🏀 **NBA 2K27 – PS5/PS4 numérique \\[ Édition Standard / Ultimate \\]**

Accédez immédiatement à **NBA 2K27** sur PS5 via un **profil PSN secondaire** qui possède déjà le jeu — pas d’attente, pas de préchargement, changez simplement de profil et jouez.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎮 **Fonctionnement**

- 📥 Vous recevez les identifiants d’un **profil PS5 sur lequel NBA 2K27 est déjà acheté**

- 🔄 Ajoutez-le comme **compte secondaire** sur votre propre console PS5

- ⚠️ Vous ne jouerez **pas sur votre propre profil** — vous **passerez sur le profil reçu** pour lancer et jouer à NBA 2K27

- 📲 Il s’agit d’une **méthode numérique par changement de compte**, et non d’un CD/DVD ou d’une clé

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🏆 **Éditions disponibles**

#### 🔹 Édition Standard

- 🏀 Jeu de base NBA 2K27 complet

- 🪙 **10 000 VC** inclus sur le compte


#### 🔹 Édition Ultimate

- 🪙 **245 000 VC au total** (10 000 + 100 000 + 135 000 VC) crédités sur le compte

- 🌟 Cartes de joueur MyTEAM – 98 OVR garanti (déc. 2026) et Invincible garanti (mai 2027)

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ **Ce que vous obtenez**

- 🔐 Identifiants PSN sécurisés (e-mail : mot de passe)

- ⚡ Livraison instantanée après l’achat

- 🧼 Profil propre et inutilisé

- 🛠️ Assistance incluse et service après-vente à vie

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ⚠️ **Remarques**

- Assurez-vous que votre console dispose de suffisamment d’espace libre avant le téléchargement

- Il s’agit d’un service numérique — une fois le profil livré et utilisé, la commande est considérée comme exécutée et ne peut pas être remboursée

- Fonctionne uniquement sur PS5/PS4`,specs:[[`Type de produit`,`NBA 2K27 (Standard/Ultimate)`],[`Plateforme`,`PS5 (numérique)`],[`Méthode d’accès`,`Basculement vers un profil PSN secondaire`],[`Livraison`,`Livraison instantanée`]],images:[`images/ed4fd4e3-484f-4748-866e-9f2140e93620/nba-detail-neutral.png`]},"5f5f5ee3-ad36-44d9-baec-10c5c4720537":{description:`### ⚽ **EA Sports FC 27 – PC \\[ Ultimate Plus Edition \\]**

Obtenez **un accès complet à un véritable compte EA** qui possède déjà **EA Sports FC 27 – Ultimate Plus Edition**, avec un **abonnement EA Play Pro actif (renouvellement automatique activé)**. Achetez, installez le jeu et jouez — aucune étape supplémentaire, aucun partage à gérer.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`EA FC 27 – édition Ultimate Plus`],[`Plateforme`,`PC (EA App)`],[`Monnaie incluse`,`6 000 FC Points + EA Play Pro`],[`Livraison`,`Livraison instantanée`]],images:[`images/daef83a8-e5b8-4878-b6a9-b3e1b04e4bc8/image-083.webp`]},"033013bf-b0af-464b-bcc4-f885b0fdb630":{description:`### 🔎 **Siège Perplexity Enterprise Pro – À vie \\[ Accès avec e-mail personnel \\]**

Obtenez un **siège privé Perplexity Enterprise Pro** activé **sur votre propre adresse e-mail personnelle**, **à vie**. La recherche par IA conçue pour la recherche, le travail et les études — avec des **réponses accompagnées de sources**, Deep Research, des modèles d’IA premium et l’analyse de fichiers, le tout au même endroit.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`Licence Perplexity Enterprise Pro`],[`Durée`,`1 mois`],[`Méthode d’accès`,`Activation par e-mail personnel`],[`Livraison`,`Activé après commande`]],images:[`images/331bbf4e-a5d8-4256-ad83-88b18ce9cff9/bw3-7faa5062-141d-4f1f-af4a-6cd4d95514d6.webp`]},"aef623b8-c002-462a-9685-b0a3b8d7e6e1":{description:`### 🚀 **Boosts de serveur Discord 14× – 3 mois \\[ Niveau 3 instantané \\]**

Faites passer directement votre serveur Discord au **niveau 3** grâce à **14× boosts de serveur pendant 3 mois**. Débloquez tous les avantages haut de gamme pour votre communauté, vos événements ou votre configuration premium — et profitez-en pendant **3 mois** complets sans avoir à renouveler les boosts.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`Boosts de serveur Discord`],[`Quantité`,`14× Boosts (niveau 3)`],[`Durée`,`3 mois`],[`Livraison`,`Livraison rapide`]],images:[`images/e89c354b-a489-4652-b9f0-7ad0f458a82e/bw3-97caf67b-2783-4ef7-be28-be211358e6cd.webp`,`images/ea060a49-6498-461f-92d2-d0f771476fb1/84487e55-3808-4114-8204-30404c57fb88.webp`]},"51cb7f1e-650e-4c85-b927-cae9db097de2":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/38643618-69d9-4068-88d5-673a714c3907/discord_fixed.jpg`]},"c64002e3-ae93-4aab-be49-e337b581140f":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/d2a74484-a285-44b3-9a14-0ba3c9559d69/bw3-9299c1c3-e1f3-4de2-a784-a6282d412b3e.webp`,`images/2416a8ec-0736-47a7-9971-ef369c047ed2/9ee611a7-3429-4489-86f6-6fd4f4d11d9c.webp`]},"76e0f82c-a468-4fdd-aacb-0117a3f7b67c":{description:`### Comptes Discord FA 💬

◇ Comptes Discord privés et entièrement sécurisés

◇ Vérifiés par e-mail et/ou téléphone – utilisables en toute sécurité à tout moment

◇ Full access – modifiez librement tous les identifiants

◇ Adaptés aux bots, aux fonctionnalités Nitro, au Boost et à une utilisation réelle

\\-\\-\\-

### 🧾 Types de comptes :

· **Vérifiés par e-mail** – Vérifiés par e-mail (2025)

· **Vérifiés par e-mail + téléphone** – Double vérification (2025)

· **Âgés de 3+ mois** – Vérifiés par téléphone + e-mail

· **Comptes par année** – 2023, 2020, 2019, 2017, 2016

· **Nitro 1 mois + 2 Boosts** – Vérifiés par téléphone

· **Nitro 3 mois + 2 Boosts** – Vérifiés par téléphone

\\-\\-\\-

### ✅ Inclus :

◇ Full access et identifiants de connexion

◇ Vérification par e-mail et téléphone selon la variante

◇ Privés, inutilisés et sûrs pour une utilisation réelle

◇ Livraison instantanée après l’achat

⏱️ **Garantie de remplacement de 24 heures**

\\-\\-\\-

### 🔗 Liens Webmail (si nécessaire) :

1. https://notletters.com/email/login

2. https://firstmail.ltd/en-US/webmail/login

3. https://id.rambler.ru/login-20/login`,specs:[],images:[`images/3a01a4bc-23e2-4a1e-b68b-0d2d552e6c69/bw3-f5a1f579-acbd-4e05-8f44-a044e60e6ccb.webp`]},"ce47f46c-8297-4af6-b322-9dd0108fc47a":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/832fcf41-dae0-40cc-95f9-872bb726c3c1/bw3-40cc10d9-e025-4447-95d0-b56a8a274bc0.webp`]},"c8db5d48-0c82-458e-a5bc-ece618597107":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/035f36da-7382-4896-983d-20108a2062ee/bw3-39c158f6-c29f-48d6-addc-5caf8d849182.webp`]},"f7df1393-5e20-4872-ab9d-e8e63aa07d9b":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/4a388564-3161-430c-bffd-ff1f3aff4531/bw3-ec8c1d3a-e54e-4f75-be86-76358e867aac.webp`]},"ae6ac3ec-3b3a-4d61-8962-451b6c66f019":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/43d21e58-42fa-474c-97c6-30063f357971/bw3-20b54f5c-a461-49df-af6a-93044c9920e1.webp`]},"4b5f17f9-6065-4350-9c6e-e10da83debea":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/23d3b05f-7875-4171-91ee-d20db2627843/bw3-8f9adcb5-84b1-44db-925b-0b73e0c00ffa.webp`]},"108d4874-124a-4dfa-8169-217166685850":{description:`### 💬 **Comptes Discord avec pseudo de 4 lettres – E-mail + SMS vérifiés**

Comptes Discord rares avec **nom d’utilisateur propre de 4 lettres** — entièrement vérifiés et prêts à être revendus ou utilisés à titre personnel. Les noms d’utilisateur courts sont de plus en plus difficiles à trouver, ce qui en fait une excellente acquisition pour les collectionneurs et revendeurs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔤 **Pourquoi des pseudos de 4 lettres ?**

- 💎 **Rares et précieux** – Les noms d’utilisateur courts sont rares et très recherchés

- 🧼 **100 % propres** – Inutilisés, jamais signalés, sans avertissement ni bannissement

- 🔁 **Parfaits pour la revente** – Forte demande à la revente, faciles à revendre

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧾 **Détails du compte**

- 📧 **E-mail vérifié** – Adresse e-mail associée et entièrement vérifiée

- 📱 **SMS vérifié** – Numéro de téléphone vérifié pour plus de confiance et de sécurité

- 🔤 **Nom d’utilisateur de 4 lettres** – Pseudo propre, court et original

- 🧼 **Inutilisé et privé** – Jamais utilisé, sûr pour une utilisation immédiate

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et téléphone (SMS) incluse

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures`,specs:[[`Type de produit`,`Compte Discord`],[`Nom d’utilisateur`,`4 lettres (propre)`],[`Vérification`,`E-mail + SMS`],[`Livraison`,`Livraison instantanée`]],images:[`images/63a98a84-9e1e-4941-9472-2481a80f84ff/bw3-5a461b5c-b0da-4e63-b161-73e4a003a8a0.webp`,`images/0e0668c8-b5f8-4200-951e-1ef91922c95d/7bc81633-57ff-49cf-8b47-5c3e1b34a416.webp`]},"e14f9686-e6f9-4433-85c7-ca162209f368":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/2a9a3977-d854-42aa-b16b-f111d84000db/bw3-4fb09cee-8cae-41c1-bb2c-67d63bb1b94f.webp`]},"6c8e7b0b-46bb-4559-b746-8dffd675bbf5":{description:`Description :

### 💬 **Comptes Discord FA – Full Access et vérifiés**

Des **comptes Discord** sécurisés, privés et entièrement vérifiés, prêts pour une utilisation réelle ou l’automatisation.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les activités professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de plus de 3 mois** – Vérifiés et anciens pour une confiance renforcée

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérification par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérification par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privés, jamais utilisés et 100 % sûrs

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[],images:[`images/c800aadc-310d-48cf-a3ab-a5f8d594c239/bw3-4dfef591-4ede-447f-9719-d1573fe208be.webp`]},"a9e596f4-55fa-4e75-b1a2-4c2e0f40eedd":{description:`### 💬 **Comptes Discord FA – Accès complet et vérifiés**

Comptes **Discord** sécurisés, privés et entièrement vérifiés, prêts à être utilisés ou automatisés.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les configurations professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de 3 mois ou plus** – Vérifiés et anciens pour une confiance accrue

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérifié par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérifié par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privé, inutilisé et 100 % sûr

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🌐 **Accès au webmail (si nécessaire)**

1. [https://notletters.com/email/login](https://notletters.com/email/login)

2. [https://firstmail.ltd/en-US/webmail/login](https://firstmail.ltd/en-US/webmail/login)

3. [https://id.rambler.ru/login-20/login](https://id.rambler.ru/login-20/login)

✨ Commencez à utiliser des comptes Discord fiables en quelques secondes !`,specs:[],images:[`images/bd5811be-5e07-40bc-8c68-b7edac2c7257/bw3-3e242138-2192-4521-a403-8207e0adb008.webp`]},"d21d3c23-3041-4b3f-8e44-b6b3f6d65b92":{description:`Description :

### 💬 **Comptes Discord FA – Full Access et vérifiés**

Des **comptes Discord** sécurisés, privés et entièrement vérifiés, prêts pour une utilisation réelle ou l’automatisation.

Parfaits pour un usage personnel, les bots, le Boost Nitro ou les activités professionnelles.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧾 **Types de comptes**

- 📧 **E-mail vérifié** – Vérification de base (2025)

- 📱 **E-mail + téléphone vérifiés** – Double vérification (2025)

- 🕒 **Âgés de plus de 3 mois** – Vérifiés et anciens pour une confiance renforcée

- 📅 **Comptes par année** – 2023, 2020, 2019, 2017, 2016

- 💎 **Nitro 1 mois + 2 Boosts** – Vérification par téléphone

- 🚀 **Nitro 3 mois + 2 Boosts** – Vérification par téléphone

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔐 Accès complet et identifiants modifiables

- 📧 Vérification par e-mail et/ou téléphone selon la variante

- 🧼 Privés, jamais utilisés et 100 % sûrs

- ⚡ Livraison instantanée juste après l’achat

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[],images:[`images/6a2a617b-ae36-4cdd-8281-618a4f1a1392/bw3-4cdc2679-b450-432b-9da4-d389d4b02690.webp`]},"eaa2928d-fc2e-456f-bba6-a72d6931816c":{description:`### 🛡️ **Anes Shop Temp Spoofer – Outil de débannissement rapide pour FiveM**

Obtenez un **débanissement instantané** grâce à notre **outil de spoof temporaire** — conçu pour débannir rapidement, proprement et efficacement de tout serveur FiveM ou CFX. Qu’il s’agisse d’un **anti-cheat**, d’un **serveur** ou d’un **ban global CFX**, Anes Shop Temp Spoofer est là pour vous.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- ⚡ **Débannissement temporaire instantané** — fonctionne contre Reaper, FiveGuard, Phoenix, Fini-AC et plus encore

- 🌍 **Contourne les bans CFX et serveur** dans le monde entier

- 🖥️ **Interface simple en un clic** — épurée, intuitive et facile à prendre en main

- ⏱️ **Protection temporaire** — le spoof est automatiquement réinitialisé après le redémarrage

- 🕐 **Assistance 24 h/24, 7 j/7** — une aide rapide quand vous en avez besoin

- 🎁 **Comptes FiveM gratuits inclus** — prêts à l’emploi et compatibles avec le spoof

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi Anes Shop Temp Spoofer se démarque**

- 💡 Inspiré d’outils comme **redENGINE** et **Macho Spoofer**

- 🔁 Conçu pour le **spoof temporaire** — idéal pour les courtes sessions ou un débanissement rapide

- 🧠 Prend en charge le **débanissement global**, les numéros de série statiques/dynamiques

- 🖥️ Entièrement compatible avec **Windows 10 et 11**`,specs:[[`Type de produit`,`Spoofer FiveM temporaire`],[`Compatibilité`,`Windows 10 et 11`],[`Utilisation`,`Outil en un clic`],[`Livraison`,`Instantané`]],images:[`images/76f7898a-a6a1-4ec9-a20a-fb9d04dce2c8/image-349.webp`,`images/512a7256-e647-4ae7-afd1-f98caba32d9f/a1cbc64b-44dd-4a0b-a332-05f27c0000ac.webp`,`images/3ae462f7-22f1-49c9-932f-303c867bb472/7aa2bc9f-ed9e-4a8d-a59b-579fcfa81acb.webp`]},"7240ffd9-717d-43ed-8e2a-d40155babc08":{description:`### 🛡️ **Anes Shop Temp Spoofer – Outil de débannissement rapide pour FiveM**

Obtenez un **débanissement instantané** grâce à notre **outil de spoof temporaire** — conçu pour débannir rapidement, proprement et efficacement de tout serveur FiveM ou CFX. Qu’il s’agisse d’un **anti-cheat**, d’un **serveur** ou d’un **ban global CFX**, Anes Shop Temp Spoofer est là pour vous.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- ⚡ **Débannissement temporaire instantané** — fonctionne contre Reaper, FiveGuard, Phoenix, Fini-AC et plus encore

- 🌍 **Contourne les bans CFX et serveur** dans le monde entier

- 🖥️ **Interface simple en un clic** — épurée, intuitive et facile à prendre en main

- ⏱️ **Protection temporaire** — le spoof est automatiquement réinitialisé après le redémarrage

- 🕐 **Assistance 24 h/24, 7 j/7** — une aide rapide quand vous en avez besoin

- 🎁 **Comptes FiveM gratuits inclus** — prêts à l’emploi et compatibles avec le spoof

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi Anes Shop Temp Spoofer se démarque**

- 💡 Inspiré d’outils comme **redENGINE** et **Macho Spoofer**

- 🔁 Conçu pour le **spoof temporaire** — idéal pour les courtes sessions ou un débanissement rapide

- 🧠 Prend en charge le **débanissement global**, les numéros de série statiques/dynamiques

- 🖥️ Entièrement compatible avec **Windows 10 et 11**`,specs:[[`Type de produit`,`Spoofer FiveM temporaire`],[`Compatibilité`,`Windows 10 et 11`],[`Utilisation`,`Outil en un clic`],[`Livraison`,`Instantané`]],images:[`images/86db2968-f763-4174-829d-b32f2e911775/image-110.webp`,`images/9424b5e8-8a51-4f17-9ea1-55726ed5706e/fa6d9ca5-9e66-4f90-8fb5-7c5c8ed6b4f1.webp`,`images/dc626058-d23f-423f-b4d2-60eff3883977/55846700-6577-4c5f-ac30-5c034a26e7fa.webp`]},"c64b7d40-95c7-428f-a323-26ee8719d986":{description:`### 🛡️ **Anes Shop Temp Spoofer – Outil de débannissement rapide pour FiveM**

Obtenez un **débanissement instantané** grâce à notre **outil de spoof temporaire** — conçu pour débannir rapidement, proprement et efficacement de tout serveur FiveM ou CFX. Qu’il s’agisse d’un **anti-cheat**, d’un **serveur** ou d’un **ban global CFX**, Anes Shop Temp Spoofer est là pour vous.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- ⚡ **Débannissement temporaire instantané** — fonctionne contre Reaper, FiveGuard, Phoenix, Fini-AC et plus encore

- 🌍 **Contourne les bans CFX et serveur** dans le monde entier

- 🖥️ **Interface simple en un clic** — épurée, intuitive et facile à prendre en main

- ⏱️ **Protection temporaire** — le spoof est automatiquement réinitialisé après le redémarrage

- 🕐 **Assistance 24 h/24, 7 j/7** — une aide rapide quand vous en avez besoin

- 🎁 **Comptes FiveM gratuits inclus** — prêts à l’emploi et compatibles avec le spoof

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi Anes Shop Temp Spoofer se démarque**

- 💡 Inspiré d’outils comme **redENGINE** et **Macho Spoofer**

- 🔁 Conçu pour le **spoof temporaire** — idéal pour les courtes sessions ou un débanissement rapide

- 🧠 Prend en charge le **débanissement global**, les numéros de série statiques/dynamiques

- 🖥️ Entièrement compatible avec **Windows 10 et 11**`,specs:[[`Type de produit`,`Spoofer FiveM temporaire`],[`Compatibilité`,`Windows 10 et 11`],[`Utilisation`,`Outil en un clic`],[`Livraison`,`Instantané`]],images:[`images/ae077f2c-14a2-441e-a5a9-e395d3e612b7/image-370.webp`,`images/e23baa1f-844c-445a-aa74-073c32c570d7/13ad63ab-834c-4383-9c98-f7a84d1cb1cb.webp`,`images/d26cd4a4-2a01-452d-a11b-305f887a690c/615259f5-2d23-449f-8d5f-c30e125f47cb.webp`]},"85d45340-2735-4d66-9511-6a6f1e2588ca":{description:`### 🛡️ **Anes Shop Temp Spoofer – Outil de débannissement rapide pour FiveM**

Obtenez un **débanissement instantané** grâce à notre **outil de spoof temporaire** — conçu pour débannir rapidement, proprement et efficacement de tout serveur FiveM ou CFX. Qu’il s’agisse d’un **anti-cheat**, d’un **serveur** ou d’un **ban global CFX**, Anes Shop Temp Spoofer est là pour vous.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- ⚡ **Débannissement temporaire instantané** — fonctionne contre Reaper, FiveGuard, Phoenix, Fini-AC et plus encore

- 🌍 **Contourne les bans CFX et serveur** dans le monde entier

- 🖥️ **Interface simple en un clic** — épurée, intuitive et facile à prendre en main

- ⏱️ **Protection temporaire** — le spoof est automatiquement réinitialisé après le redémarrage

- 🕐 **Assistance 24 h/24, 7 j/7** — une aide rapide quand vous en avez besoin

- 🎁 **Comptes FiveM gratuits inclus** — prêts à l’emploi et compatibles avec le spoof

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi Anes Shop Temp Spoofer se démarque**

- 💡 Inspiré d’outils comme **redENGINE** et **Macho Spoofer**

- 🔁 Conçu pour le **spoof temporaire** — idéal pour les courtes sessions ou un débanissement rapide

- 🧠 Prend en charge le **débanissement global**, les numéros de série statiques/dynamiques

- 🖥️ Entièrement compatible avec **Windows 10 et 11**`,specs:[[`Type de produit`,`Spoofer FiveM temporaire`],[`Compatibilité`,`Windows 10 et 11`],[`Utilisation`,`Outil en un clic`],[`Livraison`,`Instantané`]],images:[`images/ac79857e-d6fb-49cf-a1d5-7e97ee3290ea/image-250.webp`,`images/5242673b-55ad-4414-b997-37a8427110bf/49f47861-bf35-4409-9f41-4d64c9bf1758.webp`,`images/1fb4f57d-f2c2-4988-8eed-6272b13b62ab/78b26d7f-10a7-4ec8-a9d4-7e1b4c6d28d7.webp`]},"14871bbe-1476-4713-bdc5-722216e55f92":{description:`### 💥 Comptes CS2 Prime — FULL ACCESS

Comptes **CS2 Prime** Premium prêts à l’emploi immédiatement. Tous les comptes ci-dessous sont en **Full Access** (adresse e-mail et mot de passe modifiables, accès à l’adresse e-mail d’origine inclus lorsqu’il est disponible). Parfaits pour jouer à titre personnel, revendre ou utiliser comme comptes smurf propres.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ Caractéristiques principales

- 🔐 **Full Access uniquement** — comptes dont vous êtes pleinement propriétaire, avec identifiants modifiables (e-mail, mot de passe et plus encore)

- 🛡️ **Sécurisés et permanents** — une fois acheté, le compte vous appartient entièrement

- 📨 **Format de livraison :** Nom d’utilisateur Steam : Mot de passe : E-mail : Mot de passe e-mail : Webmail

- ⚡ **Accès instantané** — prêt à jouer immédiatement après l’achat

- 🟢 **Facteur de confiance élevé** — comptes vérifiés et testés avant livraison

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ⭐ Paliers de comptes (Full Access)

- 🔸 **0–300 heures \\| Médailles : 0–2** — Comptes Full Access économiques (plutôt récents, prêts à l’emploi)

- 🔹 **1 100–4 000 heures \\| Médailles : 6–8** — Comptes Full Access avec beaucoup d’heures et un facteur de confiance élevé

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ Inclus

- 🏅 Insigne Global Offensive (obtenu au lancement du jeu), le cas échéant

- 🔐 Contrôle total et accès à la messagerie (modification de l’e-mail et du mot de passe)

- 🆓 Aucune limite de 5 $ — vous pouvez ajouter des amis et utiliser toutes les fonctionnalités

- 🎲 Niveau Steam aléatoire selon l’historique du compte

- 🧪 Comptes testés pour vérifier l’accès et l’intégrité de base avant la vente

- 🕒 Garantie de remplacement de 24 heures en cas de problème d’accès

- ⚡ Livraison instantanée, manuelle ou automatisée (selon l’annonce)

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 Pourquoi choisir ces comptes CS2 Full Access

- ✅ Toutes les options sont en Full Access — pas de confusion NFA/NFA, une offre plus simple.

- 🚀 Prêts pour la revente, le smurf, les cheats/tests (à la discrétion de l’acheteur) ou le jeu à long terme.

- 🔒 Vérifiés pour leur facteur de confiance et leur stabilité avant livraison.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[],images:[`images/524c65a7-aa85-441a-bc88-c2fed7df0d17/bw3-2adddc95-2277-46cc-8ae8-8fcfb3fedc89.webp`]},"db305c0e-4ee8-40c8-8801-3e6f418c3ccf":{description:`### 💥 Comptes CS2 Prime — FULL ACCESS

Comptes **CS2 Prime** Premium prêts à l’emploi immédiatement. Tous les comptes ci-dessous sont en **Full Access** (adresse e-mail et mot de passe modifiables, accès à l’adresse e-mail d’origine inclus lorsqu’il est disponible). Parfaits pour jouer à titre personnel, revendre ou utiliser comme comptes smurf propres.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ Caractéristiques principales

- 🔐 **Full Access uniquement** — comptes dont vous êtes pleinement propriétaire, avec identifiants modifiables (e-mail, mot de passe et plus encore)

- 🛡️ **Sécurisés et permanents** — une fois acheté, le compte vous appartient entièrement

- 📨 **Format de livraison :** Nom d’utilisateur Steam : Mot de passe : E-mail : Mot de passe e-mail : Webmail

- ⚡ **Accès instantané** — prêt à jouer immédiatement après l’achat

- 🟢 **Facteur de confiance élevé** — comptes vérifiés et testés avant livraison

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ⭐ Paliers de comptes (Full Access)

- 🔸 **0–300 heures \\| Médailles : 0–2** — Comptes Full Access économiques (plutôt récents, prêts à l’emploi)

- 🔹 **1 100–4 000 heures \\| Médailles : 6–8** — Comptes Full Access avec beaucoup d’heures et un facteur de confiance élevé

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ Inclus

- 🏅 Insigne Global Offensive (obtenu au lancement du jeu), le cas échéant

- 🔐 Contrôle total et accès à la messagerie (modification de l’e-mail et du mot de passe)

- 🆓 Aucune limite de 5 $ — vous pouvez ajouter des amis et utiliser toutes les fonctionnalités

- 🎲 Niveau Steam aléatoire selon l’historique du compte

- 🧪 Comptes testés pour vérifier l’accès et l’intégrité de base avant la vente

- 🕒 Garantie de remplacement de 24 heures en cas de problème d’accès

- ⚡ Livraison instantanée, manuelle ou automatisée (selon l’annonce)

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 Pourquoi choisir ces comptes CS2 Full Access

- ✅ Toutes les options sont en Full Access — pas de confusion NFA/NFA, une offre plus simple.

- 🚀 Prêts pour la revente, le smurf, les cheats/tests (à la discrétion de l’acheteur) ou le jeu à long terme.

- 🔒 Vérifiés pour leur facteur de confiance et leur stabilité avant livraison.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[],images:[`images/f384a0e3-094a-4b2d-90ed-ff2eef6c10a4/bw3-1f019067-035c-4988-a45f-842b0a09d52b.webp`]},"cdd93374-8b5c-42ce-87f9-edcdc1842c4b":{description:`### 💥 **Compte CS2 — 5 000+ et 10 000+ heures (Full Access)**

Comptes **CS2** Premium avec **5 000+ ou 10 000+ heures de jeu**, parfaits pour jouer légitimement ou avec des cheats, faire du smurf ou jouer à titre personnel.

Ces comptes n’ont **pas le statut Prime**, sont en **Full Access** et comprennent l’**adresse e-mail d’origine**.

✨ Un grand nombre d’heures améliore le facteur de confiance et réduit le risque de détection.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔑 Full Access — e-mail et mot de passe modifiables

- 📧 Accès à l’adresse e-mail d’origine inclus (messagerie Gazeta.pl)

- 🕒 Plus de 5 000 ou 10 000 heures de jeu enregistrées

- 🧼 Aucun bannissement, aucun match joué, compte neuf

- 🪪 Faceit non inscrit — vous pouvez créer votre compte vous-même

- 📸 Un avatar peut être installé ou non

- ⏳ Horloge remontée dans le lobby du jeu

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Steam_

🔥 Parfait pour jouer légitimement ou avec des cheats, avec un facteur de confiance élevé.`,specs:[],images:[`images/e93247f7-449e-4aa6-afc2-c4af5b1f412b/bw3-e8508413-4a2c-48c1-bcbb-97c995119801.webp`]},"5100220a-7ffa-41a1-974e-112f850b087b":{description:`### 💥 **Compte CS2 — 5 000+ et 10 000+ heures (Full Access)**

Comptes **CS2** Premium avec **5 000+ ou 10 000+ heures de jeu**, parfaits pour jouer légitimement ou avec des cheats, faire du smurf ou jouer à titre personnel.

Ces comptes n’ont **pas le statut Prime**, sont en **Full Access** et comprennent l’**adresse e-mail d’origine**.

✨ Un grand nombre d’heures améliore le facteur de confiance et réduit le risque de détection.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Inclus**

- 🔑 Full Access — e-mail et mot de passe modifiables

- 📧 Accès à l’adresse e-mail d’origine inclus (messagerie Gazeta.pl)

- 🕒 Plus de 5 000 ou 10 000 heures de jeu enregistrées

- 🧼 Aucun bannissement, aucun match joué, compte neuf

- 🪪 Faceit non inscrit — vous pouvez créer votre compte vous-même

- 📸 Un avatar peut être installé ou non

- ⏳ Horloge remontée dans le lobby du jeu

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Steam_

🔥 Parfait pour jouer légitimement ou avec des cheats, avec un facteur de confiance élevé.`,specs:[],images:[`images/ad90e774-394e-45b0-a8b0-45863deb6aa6/bw3-e60a1a3d-25a1-4f5c-9659-586424822877.webp`]},"83df5c60-d591-4d3c-90d8-6c6ae6f04bc8":{description:`### 🔥 **Compte CS2 Prime NFA (livraison par token)**

Comptes CS2 Prime NFA premium — accès rapide et instantané livré sous forme de **token + lien de connexion (GUID)**.

La plupart des comptes incluent **CS2 Prime** et une grande bibliothèque Steam — **~90 %** des livraisons comprennent de nombreux jeux Steam et le statut Prime.

Certains comptes peuvent être **rares** et inclure des Skins de valeur, tandis que d’autres sont de simples comptes Prime — il s’agit d’un mélange (objets rares ~10 %).

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 📦 **Fonctionnement de la livraison**

- Après l’achat, vous recevez un **token** et un **lien de connexion (GUID)**.

- Le token contient les identifiants du compte — utilisez-le avec l’outil de connexion fourni pour vous connecter.

- Token + GUID = accès complet au compte — le processus prend quelques secondes et est entièrement automatisé.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Livraison du token avec GUIDE de connexion (connexion automatisée facile)

- ✅ Des exclusivités rares sont incluses dans la plupart des comptes (~90 %)

- 🎮 De nombreux comptes comprennent une grande bibliothèque de jeux Steam

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat — prêt en quelques secondes

━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ _Remarque : l’utilisation nécessite l’outil de connexion qui accepte le token + le GUIDE._

💡 Parfait pour jouer temporairement, tester un compte ou utiliser des cheats/un compte secondaire — accès rapide et jetable.`,specs:[],images:[`images/8b9478f6-a17b-4cd4-b3fd-a40b18a965b0/bw3-3f341745-41ff-4d2d-8204-0fda79bac383.webp`,`images/b5806ece-67bd-4537-bc3d-b5939e06f555/4c757258-aebe-4f88-b5b6-f6c58a8135e3.webp`,`images/a7cccd49-5461-4a8f-a335-f09545bf6bd0/ab97fc49-dc1a-456a-9486-b6289990d460.webp`]},"54e40bd8-2769-4d6c-8da5-2ddbe5b475e3":{description:`### 🛡️ **Comptes Apex Legends – Ranked et accès complet**

Obtenez des **comptes Apex Legends prêts pour le Ranked**, avec contrôle total et cosmétiques exclusifs. Idéal pour les joueurs qui veulent accéder immédiatement au Ranked, les collectionneurs à la recherche d’objets anciens ou les revendeurs en quête de profils de qualité.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Caractéristiques principales**

- 🏆 **Comptes entièrement prêts pour le Ranked** — prêts pour les parties classées (aucun grind nécessaire)

- 🔐 **Connexion sécurisée et privée** — vous recevez le contrôle total ; identifiants modifiables

- 🎨 **Cosmétiques exclusifs** — possibilité d’obtenir des Skins et objets anciens

- ⚡ **Livraison instantanée** — comptes livrés immédiatement après l’achat

- 🔁 **Garantie de remplacement de 24 heures** — remplacement disponible si nécessaire

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🎯 **Niveaux de compte disponibles**

- · **Niveau 20–100 \\[Prêt pour le Ranked\\]**

- · **Niveau 100–300 \\[Prêt pour le Ranked\\]**

- · **Niveau 300–500 \\[Prêt pour le Ranked\\]**

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ **Inclus**

- 🔑 Accès complet et possibilité de modifier toutes les informations (e-mail, mot de passe, etc.)

- 🔒 Identifiants de connexion sécurisés (livrés au format \`E-mail : Mot de passe\`)

- 🎲 Inventaire et cosmétiques de compte aléatoires (peuvent inclure des objets anciens)

- 🛠️ Garantie de remplacement de 24 heures et assistance de base

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 **Pourquoi choisir les comptes Apex Legends de Anes Shop ?**

- 💡 Accès immédiat au Ranked — évitez le grind et passez directement au jeu compétitif

- 🚀 Comptes de haute qualité testés avant la livraison

- 🔁 Parfaits pour les revendeurs, collectionneurs ou joueurs qui ont besoin immédiatement de profils Ranked

- 🖥️ Livraison automatisée — rapide, fiable et sécurisée`,specs:[],images:[`images/08f84bbf-3214-410c-8e76-163ef0ccafc7/bw3-badf0fe3-4798-4a5c-9752-b74d1b4dc45e.webp`]},"26a187e0-c9f6-44b4-9e6b-f6551d852c43":{description:`### 🛡️ **Comptes Apex Legends – Ranked et accès complet**

Obtenez des **comptes Apex Legends prêts pour le Ranked**, avec contrôle total et cosmétiques exclusifs. Idéal pour les joueurs qui veulent accéder immédiatement au Ranked, les collectionneurs à la recherche d’objets anciens ou les revendeurs en quête de profils de qualité.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Caractéristiques principales**

- 🏆 **Comptes entièrement prêts pour le Ranked** — prêts pour les parties classées (aucun grind nécessaire)

- 🔐 **Connexion sécurisée et privée** — vous recevez le contrôle total ; identifiants modifiables

- 🎨 **Cosmétiques exclusifs** — possibilité d’obtenir des Skins et objets anciens

- ⚡ **Livraison instantanée** — comptes livrés immédiatement après l’achat

- 🔁 **Garantie de remplacement de 24 heures** — remplacement disponible si nécessaire

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🎯 **Niveaux de compte disponibles**

- · **Niveau 20–100 \\[Prêt pour le Ranked\\]**

- · **Niveau 100–300 \\[Prêt pour le Ranked\\]**

- · **Niveau 300–500 \\[Prêt pour le Ranked\\]**

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ **Inclus**

- 🔑 Accès complet et possibilité de modifier toutes les informations (e-mail, mot de passe, etc.)

- 🔒 Identifiants de connexion sécurisés (livrés au format \`E-mail : Mot de passe\`)

- 🎲 Inventaire et cosmétiques de compte aléatoires (peuvent inclure des objets anciens)

- 🛠️ Garantie de remplacement de 24 heures et assistance de base

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 **Pourquoi choisir les comptes Apex Legends de Anes Shop ?**

- 💡 Accès immédiat au Ranked — évitez le grind et passez directement au jeu compétitif

- 🚀 Comptes de haute qualité testés avant la livraison

- 🔁 Parfaits pour les revendeurs, collectionneurs ou joueurs qui ont besoin immédiatement de profils Ranked

- 🖥️ Livraison automatisée — rapide, fiable et sécurisée`,specs:[],images:[`images/19f08db4-d0fc-488a-807e-0bbf8d24357f/bw3-f1ed4752-ad16-4c2a-81ca-ba0db562e544.webp`]},"7c0ecad2-c7c6-4ab4-89a0-959999abff7e":{description:`### 🛡️ **Comptes Apex Legends – Ranked et accès complet**

Obtenez des **comptes Apex Legends prêts pour le Ranked**, avec contrôle total et cosmétiques exclusifs. Idéal pour les joueurs qui veulent accéder immédiatement au Ranked, les collectionneurs à la recherche d’objets anciens ou les revendeurs en quête de profils de qualité.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Caractéristiques principales**

- 🏆 **Comptes entièrement prêts pour le Ranked** — prêts pour les parties classées (aucun grind nécessaire)

- 🔐 **Connexion sécurisée et privée** — vous recevez le contrôle total ; identifiants modifiables

- 🎨 **Cosmétiques exclusifs** — possibilité d’obtenir des Skins et objets anciens

- ⚡ **Livraison instantanée** — comptes livrés immédiatement après l’achat

- 🔁 **Garantie de remplacement de 24 heures** — remplacement disponible si nécessaire

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🎯 **Niveaux de compte disponibles**

- · **Niveau 20–100 \\[Prêt pour le Ranked\\]**

- · **Niveau 100–300 \\[Prêt pour le Ranked\\]**

- · **Niveau 300–500 \\[Prêt pour le Ranked\\]**

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ **Inclus**

- 🔑 Accès complet et possibilité de modifier toutes les informations (e-mail, mot de passe, etc.)

- 🔒 Identifiants de connexion sécurisés (livrés au format \`E-mail : Mot de passe\`)

- 🎲 Inventaire et cosmétiques de compte aléatoires (peuvent inclure des objets anciens)

- 🛠️ Garantie de remplacement de 24 heures et assistance de base

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 💥 **Pourquoi choisir les comptes Apex Legends de Anes Shop ?**

- 💡 Accès immédiat au Ranked — évitez le grind et passez directement au jeu compétitif

- 🚀 Comptes de haute qualité testés avant la livraison

- 🔁 Parfaits pour les revendeurs, collectionneurs ou joueurs qui ont besoin immédiatement de profils Ranked

- 🖥️ Livraison automatisée — rapide, fiable et sécurisée`,specs:[],images:[`images/de44be8e-e653-4af9-991f-0cd54febdd40/bw3-d78310c6-ebe9-4f4f-8209-fb208df4a3d4.webp`]},"b8587591-b2c6-48f3-a40b-66388c3dbcf4":{description:`### 🛡️ **Compte Valorant – UE niveau 1–20 \\[ Prêt pour le Ranked \\]**

Débloquez un **compte Valorant propre, prêt pour le Ranked** en provenance d’Europe — pas de temps perdu avec les placements non classés, connectez-vous et lancez-vous directement en compétitif.

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🛠️ \\*\\*Fonctionnalités principales\\*\\*

\\- 🧠 Compte sûr et sécurisé — accès complet et connexion privée

\\- 🌍 Région UE (Europe)

\\- 🛡️ Identifiants de connexion sécurisés (E-mail : mot de passe)

\\- 🕒 Garantie de remplacement de 24 heures

\\- ✨ Sélectionné avec soin — comptes propres, prêts à grimper les rangs

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🏆 \\*\\*Palier du compte : niveau 1–20\\*\\*

\\- ✅ Prêt pour le Ranked

\\- 🎨 Aucune Skin garantie

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### ✅ \\*\\*Contenu inclus\\*\\*

\\- 🔐 Accès complet et identifiants modifiables

\\- 🪪 Identifiants de connexion sécurisés

\\- ✅ Statut prêt pour le Ranked

\\- 💬 Garantie de 24 heures (remplacement)`,specs:[[`Type de produit`,`Compte Valorant (UE)`],[`Niveau`,`1-20`],[`État du compte`,`Ranked Ready`],[`Livraison`,`Livraison instantanée`]],images:[`images/70f54fa1-66fd-45e5-a335-fa30216806bc/bw3-a01c93a6-4e8c-4408-b567-3245fc673418.webp`]},"44432ad5-d4bc-49f4-893c-ab6d486eb87a":{description:`### 🛡️ **Compte Valorant – UE niveau 1–20 \\[ Couteau + Skins \\]**

Débloquez un **compte Valorant abordable** en provenance d’Europe, qui comprend tout de même une Skin et un couteau garantis — le moyen le moins cher de commencer avec un inventaire fourni plutôt que vide.

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🛠️ \\*\\*Fonctionnalités principales\\*\\*

\\- 🧠 Compte sûr et sécurisé — accès complet et connexion privée

\\- 🌍 Région UE (Europe)

\\- 🛡️ Identifiants de connexion sécurisés (E-mail : mot de passe)

\\- 🕒 Garantie de remplacement de 24 heures

\\- ✨ Sélectionné avec soin — pas de butin sans intérêt, uniquement de la valeur premium

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🏆 \\*\\*Palier du compte : niveau 1–20\\*\\*

\\- 🔪 Au moins 1 couteau garanti

\\- 🎨 Au moins 1 Skin garantie

\\- 💰 Inventaire : \\*\\*1000VP – 3000VP\\*\\*

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### ✅ \\*\\*Contenu inclus\\*\\*

\\- 🔐 Accès complet et identifiants modifiables

\\- 🪪 Identifiants de connexion sécurisés

\\- 🎨 Couteau et Skin garantis

\\- 💬 Garantie de 24 heures (remplacement)`,specs:[[`Type de produit`,`Compte Valorant (UE)`],[`Niveau`,`1-20`],[`Inventaire`,`Couteau + Skins (1000-3000VP)`],[`Livraison`,`Livraison instantanée`]],images:[`images/96669d45-e5f3-482c-aa3d-427b39c05507/bw3-3c2ab287-7371-4447-b14d-064992ce8201.webp`]},"2cd676ef-a0f8-4233-b1ab-1bad9ce0d306":{description:`### 🛡️ **Compte Valorant – UE niveau 20+ \\[ Couteau + Skins \\]**

Débloquez un **compte Valorant abordable** en provenance d’Europe avec un couteau garanti et des Skins inclus — un excellent moyen de commencer avec un compte bien fourni sans repartir de zéro.

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🛠️ \\*\\*Fonctionnalités principales\\*\\*

\\- 🧠 Compte sûr et sécurisé — accès complet et connexion privée

\\- 🌍 Région UE (Europe)

\\- 🛡️ Identifiants de connexion sécurisés (E-mail : mot de passe)

\\- 🕒 Garantie de remplacement de 24 heures

\\- ✨ Sélectionné avec soin — pas de butin sans intérêt, uniquement de la valeur premium

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🏆 \\*\\*Palier du compte : niveau 20+\\*\\*

\\- 🔪 Couteau garanti

\\- 🎨 Skins incluses

\\- 💰 Inventaire : \\*\\*2500VP – 5000VP\\*\\*

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### ✅ \\*\\*Contenu inclus\\*\\*

\\- 🔐 Accès complet et identifiants modifiables

\\- 🪪 Identifiants de connexion sécurisés

\\- 🎨 Couteau et Skins garantis

\\- 💬 Garantie de 24 heures (remplacement)`,specs:[[`Type de produit`,`Compte Valorant (UE)`],[`Niveau`,`20+`],[`Inventaire`,`Couteau + Skins (2500-5000VP)`],[`Livraison`,`Livraison instantanée`]],images:[`images/9cb7c996-9446-4754-a540-ee3a6a1ae583/bw3-65636e46-9f13-4e3a-b8e5-26802bd6d3b5.webp`]},"27db8d74-dd49-437f-8767-83df2d7d87cf":{description:`### 🛡️ **Compte Valorant – UE niveau 40+ \\[ Couteau + Skins \\]**

Débloquez un **compte Valorant de milieu de gamme solide** en provenance d’Europe, avec un couteau garanti et plusieurs Skins incluses. Un excellent choix pour les joueurs qui veulent un véritable équipement sans payer le prix du haut de gamme.

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🛠️ \\*\\*Fonctionnalités principales\\*\\*

\\- 🧠 Compte sûr et sécurisé — accès complet et connexion privée

\\- 🌍 Région UE (Europe)

\\- 🛡️ Identifiants de connexion sécurisés (E-mail : mot de passe)

\\- 🕒 Garantie de remplacement de 24 heures

\\- ✨ Sélectionné avec soin — pas de butin sans intérêt, uniquement de la valeur premium

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🏆 \\*\\*Palier du compte : niveau 30+\\*\\*

\\- 🔪 Couteau garanti

\\- 🎨 Plusieurs Skins incluses

\\- 💰 Inventaire : \\*\\*5000VP – 10000VP\\*\\*

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### ✅ \\*\\*Contenu inclus\\*\\*

\\- 🔐 Accès complet et identifiants modifiables

\\- 🪪 Identifiants de connexion sécurisés

\\- 🎨 Couteau et Skins garantis

\\- 💬 Garantie de 24 heures (remplacement)`,specs:[],images:[`images/6cb97188-b5fa-4eec-86fe-dde0bdbbb0f3/bw3-695cc259-edfa-48f5-82bf-d4a77f5047f1.webp`]},"44d1a143-9ff8-4105-a53c-41e1fe429253":{description:`### 🛡️ **Compte Valorant – UE niveau 50+ \\[ Couteau + Skins \\]**

Débloquez un **compte Valorant de grande valeur** en provenance d’Europe, avec un couteau garanti, plusieurs Skins premium et un inventaire conséquent. Un excellent équilibre entre progression du rang et valeur de collection.

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🛠️ \\*\\*Fonctionnalités principales\\*\\*

\\- 🧠 Compte sûr et sécurisé — accès complet et connexion privée

\\- 🌍 Région UE (Europe)

\\- 🛡️ Identifiants de connexion sécurisés (E-mail : mot de passe)

\\- 🕒 Garantie de remplacement de 24 heures

\\- ✨ Sélectionné avec soin — pas de butin sans intérêt, uniquement de la valeur premium

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🏆 \\*\\*Palier du compte : niveau 50+\\*\\*

\\- 🔪 Couteau garanti

\\- 🎨 Skins de grande valeur

\\- 💰 Inventaire : \\*\\*10000VP – 20000VP\\*\\*

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### ✅ \\*\\*Contenu inclus\\*\\*

\\- 🔐 Accès complet et identifiants modifiables

\\- 🪪 Identifiants de connexion sécurisés

\\- 🎨 Couteau garanti et Skins premium

\\- 💬 Garantie de 24 heures (remplacement)`,specs:[[`Type de produit`,`Compte Valorant (UE)`],[`Niveau`,`50+`],[`Inventaire`,`Couteau + Skins (10000-20000VP)`],[`Livraison`,`Livraison instantanée`]],images:[`images/dde6a5ee-b501-4fda-9988-a3b712eb070b/bw3-6cee04a4-7c32-4f97-8cfe-5ca9b83df9e6.webp`]},"cfe677cf-3be5-4598-961d-96fe4879520e":{description:`### 🛡️ **Compte Valorant – UE niveau 100+ \\[ Couteau + Skins \\]**

Débloquez un **compte Valorant haut de gamme et de grande valeur** en provenance d’Europe, avec des couteaux garantis, des Skins premium et un vaste inventaire. Parfait pour les collectionneurs et les joueurs compétitifs qui veulent l’équipement ultime dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🛠️ \\*\\*Fonctionnalités principales\\*\\*

\\- 🧠 Compte sûr et sécurisé — accès complet et connexion privée

\\- 🌍 Région UE (Europe)

\\- 🛡️ Identifiants de connexion sécurisés (E-mail : mot de passe)

\\- 🕒 Garantie de remplacement de 24 heures

\\- ✨ Sélectionné avec soin — pas de butin sans intérêt, uniquement de la valeur premium

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### 🏆 \\*\\*Palier du compte : niveau 100+\\*\\*

\\- 🔪 Couteaux garantis

\\- 🎨 Skins premium et valeur maximale

\\- 💰 Inventaire : \\*\\*30000VP – 55000VP\\*\\*

━━━━━━━━━━━━━━━━━━━━━━━━━━

\\### ✅ \\*\\*Contenu inclus\\*\\*

\\- 🔐 Accès complet et identifiants modifiables

\\- 🪪 Identifiants de connexion sécurisés

\\- 🎨 Couteaux garantis et Skins premium

\\- 💬 Garantie de 24 heures (remplacement)`,specs:[[`Type de produit`,`Compte Valorant (UE)`],[`Niveau`,`100+`],[`Inventaire`,`Couteau + Skins (30000-55000VP)`],[`Livraison`,`Livraison instantanée`]],images:[`images/65348bf9-5a16-459f-97a4-ac076a8d9a86/bw3-dd4833fe-b95e-4e8e-a280-7112ce8fb4d5.webp`]},"09c5b688-513c-40dc-a6c9-fb2f2c7a9eec":{description:`### 🛡️ **Comptes Rainbow Six Siege – Full Access**

Plongez dans **Rainbow Six Siege** avec un contrôle total, des comptes prêts pour le Ranked et du contenu exclusif, notamment des Skins et opérateurs rares. Parfaits pour les joueurs occasionnels comme pour les fans de compétition.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔐 **Full Access** — contrôle complet du compte (e-mail et mot de passe)

- 🧠 **Connexion sécurisée** — livraison sûre et fiable

- 🎁 **Contenu exclusif** — Skins rares, opérateurs et profils prêts pour le Ranked

- ⚡ **Assistance rapide** — disponible dès que vous en avez besoin

- 🕒 **Garantie de 24 heures** — garantie complète après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🏆 **Paliers de comptes**

#### 🥉 **Niveau 10–50**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 10–50 garanti

- 🕹️ Expérience de jeu fluide et légitime

#### 🥈 **Niveau 50–100**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 50–100 garanti

- 🎁 Comprend des Skins/objets exclusifs

#### 🥇 **Niveau 100–300+**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 100–300+ garanti

- 🎯 Plus de 100 Skins inclus

- 🧨 Plus de 70 opérateurs disponibles

━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 **Choisissez votre palier et dominez le champ de bataille avec style !**`,specs:[],images:[`images/9744736b-ac3b-497e-86a5-8f16d121fb40/bw3-8a1333e3-b1c7-47bd-8a3c-5d42137e0f1f.webp`]},"dc684ebe-b67a-4501-81a8-41c1cc86b9a7":{description:`### 🛡️ **Comptes Rainbow Six Siege – Full Access**

Plongez dans **Rainbow Six Siege** avec un contrôle total, des comptes prêts pour le Ranked et du contenu exclusif, notamment des Skins et opérateurs rares. Parfaits pour les joueurs occasionnels comme pour les fans de compétition.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔐 **Full Access** — contrôle complet du compte (e-mail et mot de passe)

- 🧠 **Connexion sécurisée** — livraison sûre et fiable

- 🎁 **Contenu exclusif** — Skins rares, opérateurs et profils prêts pour le Ranked

- ⚡ **Assistance rapide** — disponible dès que vous en avez besoin

- 🕒 **Garantie de 24 heures** — garantie complète après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🏆 **Paliers de comptes**

#### 🥉 **Niveau 10–50**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 10–50 garanti

- 🕹️ Expérience de jeu fluide et légitime

#### 🥈 **Niveau 50–100**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 50–100 garanti

- 🎁 Comprend des Skins/objets exclusifs

#### 🥇 **Niveau 100–300+**

- ✅ Full Access

- 🏆 Prêt pour le Ranked

- 🛡️ Niveau 100–300+ garanti

- 🎯 Plus de 100 Skins inclus

- 🧨 Plus de 70 opérateurs disponibles

━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 **Choisissez votre palier et dominez le champ de bataille avec style !**`,specs:[],images:[`images/e74e9d2d-975c-44ae-8cfb-6dcc5e9cc3b7/bw3-2043ab4c-d0f6-4125-a47f-14ab4466675c.webp`]},"aa267c63-47da-4132-9324-0494dbfb5078":{description:`### ✅ Inclus

· 🏆 **Prêt pour le Ranked, garanti** – Le niveau du compte répond à toutes les exigences pour jouer immédiatement en mode Ranked

· 👕 **3–10 Skins aléatoires** – Comprend différentes tenues, accessoires de dos et pioches aléatoires

· 🔐 **Full Access (FA)** – Vous recevez \`email:password\` pour les connexions Epic Games et e-mail

· 🌍 **Fonctionne partout dans le monde** sur toutes les régions de serveur, sans restriction

· ⚡ **Livraison instantanée** directement sur votre tableau de bord/par e-mail

· 🛡 **Garantie de remplacement complète** en cas de problème lors de la première connexion

\\-\\-\\-

\`Paiement unique. Accès instantané au Ranked. Idéal pour le smurfing, les comptes de secours ou repartir à zéro avec style.\``,specs:[[`Type de produit`,`Compte Full Access (FA)`],[`Type de compte`,`Fortnite (Ranked Ready)`],[`Nombre de Skins`,`3 à 10 Skins aléatoires`],[`Livraison`,`Livraison instantanée`]],images:[`images/f825005a-862b-4f14-87fb-a2235804f6bd/bw3-00b3adb2-1a13-4bb0-88e3-3c07fc4b102d.webp`]},"85d89e70-6650-4ca9-8cc8-d94949cbf28a":{description:`### 🌟 Points forts du compte

· 🏆 **Prêt pour le Ranked, garanti** – Le niveau du compte répond à toutes les exigences pour accéder immédiatement au matchmaking compétitif.

· 👕 **10–20 Skins aléatoires** – Un grand choix de tenues, accessoires de dos et pioches aléatoires pour personnaliser votre look.

· 🔐 **Full Access (FA)** – Vous recevez \`email:password\` pour la connexion Epic Games et l’adresse e-mail principale.

· 🌍 **Fonctionne partout dans le monde** sur toutes les régions de serveur, sans blocage géographique.

· 🛡 **Garantie de remplacement complète** – Protection totale en cas de problème lors de la première connexion.`,specs:[[`Type de produit`,`Compte Full Access (FA)`],[`Type de compte`,`Fortnite (Ranked Ready)`],[`Nombre de Skins`,`10 à 20 Skins aléatoires`],[`Livraison`,`Livraison instantanée`]],images:[`images/226e35cc-9138-4d3f-8f9f-d5979e55c9a5/bw3-6517b099-e58c-46d7-bf48-1c87d094f777.webp`]},"5a8ba577-a42c-4352-8453-d4bd0fabda6e":{description:`### ✅ Inclus

· 🏆 **Prêt pour le Ranked, garanti** – Le niveau du compte répond à toutes les exigences pour accéder immédiatement au mode Ranked

· 👕 **20–50 Skins aléatoires** – Forte chance d’obtenir des tenues rares, des cosmétiques de la boutique, des accessoires de dos et des pioches

· 🔐 **Full Access (FA)** – Vous recevez \`email:password\` pour les connexions Epic Games et e-mail

· 🌍 **Fonctionne partout dans le monde** sur toutes les régions de serveur, sans restriction

· ⚡ **Livraison instantanée** directement sur votre tableau de bord/par e-mail

· 🛡 **Garantie de remplacement complète** en cas de problème lors de la première connexion

### 💡 Remarques importantes :

· Pour une sécurité maximale, associez votre propre numéro de téléphone et activez la 2FA dès votre connexion afin de sécuriser votre nouvelle collection.`,specs:[[`Type de produit`,`Compte Full Access (FA)`],[`Type de compte`,`Fortnite (Ranked Ready)`],[`Nombre de Skins`,`20 à 50 Skins aléatoires`],[`Livraison`,`Livraison instantanée`]],images:[`images/a96a202b-ab17-40c6-9f49-3335e0a23a3f/bw3-ea56b54b-1627-4de5-b1f1-adc0c6a47266.webp`]},"d37517af-813c-42cd-b881-ff405265a1c0":{description:`### 🌟 Points forts exclusifs du compte

· 🦖 **Statut OG garanti** – Comprend des skins anciens rares et très recherchés des grandes époques classiques de Fortnite.

· 👕 **Casier premium bien fourni** – 50–100 skins aléatoires, Passes de combat haut de gamme terminés, cosmétiques rares de la boutique, emotes et pioches.

· 🏆 **Prêt pour le Ranked et la compétition** – Niveau de compte élevé, entièrement optimisé et prêt à dominer le classement immédiatement.

· 🔐 **Contrôle Full Access (FA)** – Vous recevez \`email:password\` pour la plateforme Epic Games et la messagerie principale.

· 🛡 **Garantie de remplacement premium** – Protection infaillible et assistance complète en cas de problème de connexion initial.`,specs:[[`Type de produit`,`Compte Full Access (FA)`],[`Type de compte`,`Fortnite (Ranked Ready)`],[`Nombre de Skins`,`50 à 100 Skins aléatoires`],[`Livraison`,`Livraison instantanée`]],images:[`images/b0165ce4-580c-4c27-b48c-d9cb6b900c27/bw3-a3e8e48e-2d70-4b43-a27c-cb48af886732.webp`]},"ed9abac3-7b06-48ef-8eff-4f899cca2678":{description:`### 🌟 Points forts du compte élite

· 🦖 **Statut OG garanti** – Contient des Skins et objets héritage ultra-rares très recherchés des premières saisons légendaires de Fortnite.

· 👕 **Casier très fourni** – 100–150 Skins impeccables, Passes de combat complets de haut niveau, des centaines de cosmétiques de la boutique, des emotes rares, des wraps et des pioches.

· 🏆 **Le flex ultime, prêt pour le Ranked** – Niveau de compte élevé, entièrement optimisé pour le jeu compétitif afin de rejoindre directement les rangs supérieurs.

· 🔐 **Full Access (FA) total** – Vous recevez \`email:password\`, qui vous donne le contrôle absolu du compte Epic Games et de la boîte mail principale.

· 🛡 **Garantie premium pour un achat en toute sécurité** – Protection haut de gamme et assistance prioritaire pour une transaction parfaitement fluide.`,specs:[[`Type de produit`,`Compte Full Access (FA)`],[`Type de compte`,`Fortnite (compte OG ultra fourni)`],[`Nombre de Skins`,`100 à 150 Skins d’élite`],[`Livraison`,`Livraison prioritaire instantanée VIP`]],images:[`images/db47b03f-aa8a-44c0-b3d1-5a7313772663/bw3-34297cf4-b59b-46f0-8634-ce16d52addaa.webp`]},"d93b7147-f09a-42a8-b364-b6c65d98db08":{description:`### 🌟 Points forts exclusifs du compte

· 🎯 **Cosmétiques 100 % tryhard** – Équipé des tenues compétitives les plus populaires, de skins sweat et de pioches sobres (par ex. Star Wand, potentiellement Leviathan Axe).

· 👕 **Casier de pro bien fourni** – 100–250 skins optimisés pour un style épuré, sans encombrement ni animations distrayantes, pour vous offrir l’avantage ultime en matière de latence.

· 🏆 **Optimisé pour le Ranked et l’Arena** – Niveau de compte élevé, entièrement débloqué et prêt à vous lancer directement en Division Champion ou dans les tournois.

· 🔐 **Contrôle Full Access (FA)** – Vous recevez \`email:password\`, valable à la fois sur la plateforme Epic Games et sur la messagerie principale.

· 🛡 **Garantie de remplacement premium** – Protection complète et assistance prioritaire pour un transfert parfaitement sûr et fluide.`,specs:[[`Type de produit`,`Compte Full Access Premium (FA)`],[`Type de compte`,`Fortnite (Tryhard / compétitif)`],[`Nombre de Skins`,`100 à 250 Skins Tryhard`],[`Livraison`,`Livraison prioritaire instantanée`]],images:[`images/d52f2515-2fdd-4d07-85cc-31e8cf756eef/bw3-7c54d01d-7b34-47d6-b8c7-6038293a32e6.webp`]},"b0ddd615-cfc2-44e4-87c8-d68fbb90b9da":{description:`### 🌟 Points forts exclusifs du compte

· 🦖 **Statut OG garanti** – Comprend des skins anciens ultra-rares et très recherchés des premières saisons classiques de Fortnite.

· 👕 **Casier bien rempli** – 150–250 skins aléatoires, plusieurs Passes de combat terminés, cosmétiques rares de la boutique, emotes emblématiques et pioches.

· 🏆 **Prêt pour le Ranked et la compétition** – Niveau de compte élevé, entièrement débloqué et optimisé pour le matchmaking de haut niveau.

· 🔐 **Contrôle Full Access (FA)** – Vous recevez \`email:password\`, valable à la fois sur la plateforme Epic Games et sur la messagerie principale.

· 🛡 **Garantie de remplacement premium** – Protection infaillible et assistance prioritaire complète pour un transfert fluide.`,specs:[[`Type de produit`,`Compte Full Access Premium (FA)`],[`Type de compte`,`Fortnite (compte Ultra OG fourni)`],[`Nombre de Skins`,`150 à 250 Skins premium`],[`Livraison`,`Livraison prioritaire instantanée`]],images:[`images/f3b4b6ce-0dfd-4b9b-8588-f7f6a44a86eb/bw3-d665d27b-77de-4806-861b-dfc0058ac7cf.webp`]},"8a1cdf65-c2f8-466b-aeb0-192aa3bf151c":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[`images/e9136638-b507-4ff3-b866-e35cadb6771b/bw3-cb9a5cac-d3ee-4bcf-acdd-1f620b17239d.webp`]},"a807c187-9da2-445b-9c42-cceeb15f5e77":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[]},"5ba58637-3ee9-4a7a-9c96-7f4f88d31e7a":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[`images/d05a5e29-76ca-4114-8d7c-525747d0a2c5/bw3-d85f55e1-8b12-4f2a-8362-e785a21d2e72.webp`]},"336183d3-c717-4e19-a5f0-942af9286144":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[`images/4326ce8a-b989-45f6-ae5b-52d2535f1e0e/bw3-05dd6b87-7413-48b6-a7e4-2bca142e5234.webp`]},"10927651-d4c4-41dc-b76e-79e8951c91af":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[`images/3916d52c-2b2f-49cb-b69b-cb8a3cb5b92e/bw3-6306af01-0ffe-469b-a0df-b285545c88b6.webp`]},"406f6f30-4ffc-412a-ab7a-d1d16b40858d":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[`images/ee7e72c0-f33f-4fde-aa44-1b4d67d34b63/bw3-21c00c66-608e-4b00-8117-4917e2bf032a.webp`]},"b2d8d9c8-c067-45e3-aaca-434c5a2cc01b":{description:`### 🎮 **Comptes Fortnite**

⭐ **Tous les comptes sont :**

• 🔐 Sûrs et sécurisés à utiliser

• ✅ Full Access garanti

• 💎 Connexions de qualité et propres

• 🌍 Issus de sources fiables

• ♻️ Couverts par une **garantie de remplacement de 24 heures**

### 🔽 **Guide des paliers et fonctionnalités :**

-

✨ **100–150 skins**

• Mélange de skins OG et rares

• Peut inclure : Black Knight, Minty Axe

• 🕺 Comprend des emotes exclusives (par ex. Take the L)

• Forte probabilité de cosmétiques rares ou de valeur

-

✨ **150–250 skins**

• Collection plus importante de skins OG et rares

• Comprend souvent : Minty Axe, Black Knight

• Emotes et objets rares probables

-

🔥 **100–250 \\[ Skins tryhard uniquement \\]**

• Rempli de skins sweat et populaires

• Plus de 50 skins de la boutique d’objets

• Possibilité d’y trouver des cosmétiques OG tryhard

-

✨ **250–400 skins**

• Immense collection de skins avec de nombreuses exclusivités

• 🎁 Comprend un assortiment aléatoire d’objets légendaires

• Possibilité de trouver des skins ultra-rares

-

💡 _D’autres variantes personnalisées sont disponibles dans l’onglet du produit._`,specs:[],images:[`images/764f4754-e0fb-41fc-bc2c-518a549a31c7/bw3-c0070ead-24f8-4f1a-9901-3367d7be80f0.webp`]},"0176125e-3e62-4492-a025-653cffd6cbab":{description:`### 💰 **Comptes Fortnite avec V-Bucks – Accès complet**

Débloquez des comptes Fortnite premium préchargés en **V-Bucks**, pour acheter immédiatement des Passe de combat, des Skins, des emotes et des packs.

Profitez d’une **propriété complète** et d’une connexion sécurisée — prêts à l’emploi immédiatement.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💎 **Catégories**

- 🪙 **800–1 200 V-Bucks :** Idéal pour un Passe de combat ou de petits achats dans la boutique.

- 💼 **1 500–2 800 V-Bucks :** Parfaits pour les packs de démarrage et les Skins premium.

- 🧤 **5 000–7 000 V-Bucks :** Idéaux pour les packs, les emotes et les collections plus importantes.

- 👑 **13 500+ V-Bucks :** Comptes haut de gamme avec un maximum de V-Bucks.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques principales**

- 🔐 **Accès complet :** Modifiez l’e-mail, le mot de passe et tous les détails du compte.

- 🌍 **Sans restriction régionale :** Fonctionne partout dans le monde.

- ⚡ **Livraison instantanée :** E-mail et mot de passe envoyés juste après l’achat.

- 🧰 **Aucune plateforme liée :** 100 % sûr à utiliser.

- 🕒 **Garantie de 24 heures :** Remplacement complet en cas de problème.

━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ **Procurez-vous votre compte avec V-Bucks dès maintenant et faites vos achats avec style !**`,specs:[],images:[`images/aa045345-ba80-4cf0-bf80-f5b21ca46621/bw3-41b55f51-8b7a-4518-bbf2-63d0b1f7ee16.webp`]},"38136187-53e5-4e5d-826f-38416ba27525":{description:`### 💰 **Comptes Fortnite avec V-Bucks – Accès complet**

Débloquez des comptes Fortnite premium préchargés en **V-Bucks**, pour acheter immédiatement des Passe de combat, des Skins, des emotes et des packs.

Profitez d’une **propriété complète** et d’une connexion sécurisée — prêts à l’emploi immédiatement.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💎 **Catégories**

- 🪙 **800–1 200 V-Bucks :** Idéal pour un Passe de combat ou de petits achats dans la boutique.

- 💼 **1 500–2 800 V-Bucks :** Parfaits pour les packs de démarrage et les Skins premium.

- 🧤 **5 000–7 000 V-Bucks :** Idéaux pour les packs, les emotes et les collections plus importantes.

- 👑 **13 500+ V-Bucks :** Comptes haut de gamme avec un maximum de V-Bucks.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques principales**

- 🔐 **Accès complet :** Modifiez l’e-mail, le mot de passe et tous les détails du compte.

- 🌍 **Sans restriction régionale :** Fonctionne partout dans le monde.

- ⚡ **Livraison instantanée :** E-mail et mot de passe envoyés juste après l’achat.

- 🧰 **Aucune plateforme liée :** 100 % sûr à utiliser.

- 🕒 **Garantie de 24 heures :** Remplacement complet en cas de problème.

━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ **Procurez-vous votre compte avec V-Bucks dès maintenant et faites vos achats avec style !**`,specs:[],images:[`images/9f633a35-e919-4dbc-8fec-90e36e59528f/bw3-461fb3e7-4600-49c5-a0af-9dde8c2e051b.webp`]},"38cf830d-7856-43c8-a61c-55784d7c16ab":{description:`### 💰 **Comptes Fortnite avec V-Bucks – Accès complet**

Débloquez des comptes Fortnite premium préchargés en **V-Bucks**, pour acheter immédiatement des Passe de combat, des Skins, des emotes et des packs.

Profitez d’une **propriété complète** et d’une connexion sécurisée — prêts à l’emploi immédiatement.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💎 **Catégories**

- 🪙 **800–1 200 V-Bucks :** Idéal pour un Passe de combat ou de petits achats dans la boutique.

- 💼 **1 500–2 800 V-Bucks :** Parfaits pour les packs de démarrage et les Skins premium.

- 🧤 **5 000–7 000 V-Bucks :** Idéaux pour les packs, les emotes et les collections plus importantes.

- 👑 **13 500+ V-Bucks :** Comptes haut de gamme avec un maximum de V-Bucks.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques principales**

- 🔐 **Accès complet :** Modifiez l’e-mail, le mot de passe et tous les détails du compte.

- 🌍 **Sans restriction régionale :** Fonctionne partout dans le monde.

- ⚡ **Livraison instantanée :** E-mail et mot de passe envoyés juste après l’achat.

- 🧰 **Aucune plateforme liée :** 100 % sûr à utiliser.

- 🕒 **Garantie de 24 heures :** Remplacement complet en cas de problème.

━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ **Procurez-vous votre compte avec V-Bucks dès maintenant et faites vos achats avec style !**`,specs:[],images:[`images/72bc6091-8e95-4fc4-ad4b-e299e46b3cdd/bw3-9b337231-9fbd-4fac-9b5c-7dcdd4d3c3d0.webp`]},"d02006b6-15ac-402d-8d86-99f9e8e9bb97":{description:`### 🛡️ Permanent Spoofer — Protection universelle à long terme

**Permanent Spoofer** est une solution stable et durable, conçue pour les joueurs qui souhaitent conserver une identité matérielle cohérente dans tous les jeux.

Conçu pour offrir performances et simplicité, il garantit une expérience fluide avec une configuration minimale, afin de jouer sans interruption ni réinitialisations répétées.

### ⚙️ Fonctionnalités de Permanent Spoofer

• 🔹 Applique une modification persistante de l’identité matérielle

• 🔹 Maintient des identifiants système stables

• 🔹 Réduit le besoin de réinitialisations répétées

• 🔹 Optimisé pour des performances fluides et efficaces

• 🔹 Configuration rapide et utilisation simple

### 🎮 Compatibilité avec les jeux

• ✔️ Prend en charge tous les jeux

• ✔️ Fonctionne avec les jeux multijoueurs, compétitifs et en ligne

• ✔️ Compatible avec les mises à jour récentes des jeux

• ✔️ Non limité à un launcher ou moteur spécifique

### 💻 Compatibilité système

• 🖥️ Compatible avec les environnements PC Windows

• ⚡ Fonctionne avec la plupart des configurations matérielles standard

• 🔧 Conçu pour être facile et intuitif à utiliser

(les images du produit peuvent afficher un aperçu de l’interface)

### ⭐ Pourquoi choisir Permanent Spoofer

• 🛡️ Solution à long terme par rapport aux outils temporaires

• 🚀 Performances stables et résultats cohérents

• 🧩 Interface simple, adaptée à tous les niveaux d’expérience

• 💸 Solution ponctuelle économique

👉 Conçu pour les utilisateurs qui préfèrent une configuration persistante et sans tracas.

### 📦 Résumé

Permanent Spoofer est une solution fiable à long terme pour conserver un environnement matériel cohérent dans tous les jeux, réunissant stabilité, simplicité et performances dans un seul outil.`,specs:[[`Édition`,`Spoofer permanent universel`],[`Couverture`,`Tous les jeux pris en charge`],[`Mode`,`Protection permanente`],[`Livraison`,`Instantané`]],images:[`images/3a2e1cd8-725c-4d9b-80c6-09a6190801b8/bw3-3eac9911-f207-479b-8b14-a19cea8deb79.webp`,`images/8d55bfc9-d377-48cd-b542-c78106f08f24/bw3-3a20efda-fbb4-455d-95f1-adcf8a1c7676.webp`,`images/7ff707c2-97e1-4b23-810b-fb3b3c8091d5/4ceb6714-71a8-4352-a9cc-739dfc732747.webp`]},"20d57061-3097-455a-b4c3-ae7e5fbb1a91":{description:`### 🛡️ Permanent Spoofer — Protection universelle à long terme

**Permanent Spoofer** est une solution stable et durable, conçue pour les joueurs qui souhaitent conserver une identité matérielle cohérente dans tous les jeux.

Conçu pour offrir performances et simplicité, il garantit une expérience fluide avec une configuration minimale, afin de jouer sans interruption ni réinitialisations répétées.

### ⚙️ Fonctionnalités de Permanent Spoofer

• 🔹 Applique une modification persistante de l’identité matérielle

• 🔹 Maintient des identifiants système stables

• 🔹 Réduit le besoin de réinitialisations répétées

• 🔹 Optimisé pour des performances fluides et efficaces

• 🔹 Configuration rapide et utilisation simple

### 🎮 Compatibilité avec les jeux

• ✔️ Prend en charge tous les jeux

• ✔️ Fonctionne avec les jeux multijoueurs, compétitifs et en ligne

• ✔️ Compatible avec les mises à jour récentes des jeux

• ✔️ Non limité à un launcher ou moteur spécifique

### 💻 Compatibilité système

• 🖥️ Compatible avec les environnements PC Windows

• ⚡ Fonctionne avec la plupart des configurations matérielles standard

• 🔧 Conçu pour être facile et intuitif à utiliser

(les images du produit peuvent afficher un aperçu de l’interface)

### ⭐ Pourquoi choisir Permanent Spoofer

• 🛡️ Solution à long terme par rapport aux outils temporaires

• 🚀 Performances stables et résultats cohérents

• 🧩 Interface simple, adaptée à tous les niveaux d’expérience

• 💸 Solution ponctuelle économique

👉 Conçu pour les utilisateurs qui préfèrent une configuration persistante et sans tracas.

### 📦 Résumé

Permanent Spoofer est une solution fiable à long terme pour conserver un environnement matériel cohérent dans tous les jeux, réunissant stabilité, simplicité et performances dans un seul outil.`,specs:[[`Édition`,`Spoofer permanent universel`],[`Couverture`,`Tous les jeux pris en charge`],[`Mode`,`Protection permanente`],[`Livraison`,`Instantané`]],images:[`images/25aecf28-5ed2-4aed-bfd0-91c1676e12ad/bw3-1714b581-7b34-432d-9d87-8152f8030608.webp`,`images/ee45b0a2-ae6f-427f-affb-fff73000a564/bw3-0602bc05-6989-4f83-9787-4b00ec1430ab.webp`,`images/7696f220-95f8-4468-a994-c8d6cbc2a428/04c226d9-8a25-4daa-969a-30968614abd5.webp`]},"40c5c6ed-9ca2-4dad-8210-22a943dd173c":{description:`### ⭐ **Logiciel Anes Shop Ultimate — Cheat Fortnite indétectable**

Passez au niveau supérieur avec notre cheat Fortnite exclusif et entièrement **indétectable**.

Optimisé pour la stabilité et les performances — **prend en charge jusqu’à 25H2**.

\\-\\-\\-

### ⚙️ **Informations système**

• **Windows 10 / 11 (21H2–23H2)**

• **Processeurs Intel et AMD**

• **Toutes les cartes graphiques prises en charge**

• **Manette prise en charge**

• **Prêt pour les tournois**

• **Indétectable en stream**

\\-\\-\\-

### 🎯 **Fonctionnalités de l’Aimbot**

• **Silent Aim**

• **Memory Aim**

• **No Spread**

• **Prédiction de visée**

• **FOV et fluidité réglables**

• **Vérification de visibilité**

• **Touche de visée / os de visée personnalisés**

\\-\\-\\-

### 👀 **Visuels (ESP)**

• **ESP des joueurs**

• **ESP des armes et du butin**

• **ESP de rareté**

• **Contour / icônes de plateforme**

• **ESP des niveaux, rangs et éliminations**

• **ESP du monde** (coffres, munitions, véhicules, butin)

\\-\\-\\-

### 🛡️ **Radar**

• **Mini-radar**

• **Taille et position réglables**

• **Indicateurs de distance**

\\-\\-\\-

### 🔧 **Divers**

• **V-Sync**

• **Butin rapide**

• **Enregistrer et charger la configuration**

• **Entièrement indétectable en stream**

\\-\\-\\-

### ✅ **Entièrement indétectable — prend en charge jusqu’à 25H2.**`,specs:[[`Logiciel`,`Outil Anes Shop Ultimate`],[`Jeu`,`Fortnite`],[`Système`,`Windows 10 / 11`],[`Livraison`,`Instantané`]],images:[`images/6f21c34e-25ac-4092-b40b-2aafa40e8deb/bw3-6d318d0e-680f-4307-948d-153363dc6aaa.webp`]},"8627248d-423c-4b61-a3db-ca38af0dab54":{description:`### ⭐ **Logiciel Anes Shop Ultimate — Cheat Fortnite indétectable**

Passez au niveau supérieur avec notre cheat Fortnite exclusif et entièrement **indétectable**.

Optimisé pour la stabilité et les performances — **prend en charge jusqu’à 25H2**.

\\-\\-\\-

### ⚙️ **Informations système**

• **Windows 10 / 11 (21H2–23H2)**

• **Processeurs Intel et AMD**

• **Toutes les cartes graphiques prises en charge**

• **Manette prise en charge**

• **Prêt pour les tournois**

• **Indétectable en stream**

\\-\\-\\-

### 🎯 **Fonctionnalités de l’Aimbot**

• **Silent Aim**

• **Memory Aim**

• **No Spread**

• **Prédiction de visée**

• **FOV et fluidité réglables**

• **Vérification de visibilité**

• **Touche de visée / os de visée personnalisés**

\\-\\-\\-

### 👀 **Visuels (ESP)**

• **ESP des joueurs**

• **ESP des armes et du butin**

• **ESP de rareté**

• **Contour / icônes de plateforme**

• **ESP des niveaux, rangs et éliminations**

• **ESP du monde** (coffres, munitions, véhicules, butin)

\\-\\-\\-

### 🛡️ **Radar**

• **Mini-radar**

• **Taille et position réglables**

• **Indicateurs de distance**

\\-\\-\\-

### 🔧 **Divers**

• **V-Sync**

• **Butin rapide**

• **Enregistrer et charger la configuration**

• **Entièrement indétectable en stream**

\\-\\-\\-

### ✅ **Entièrement indétectable — prend en charge jusqu’à 25H2.**`,specs:[[`Logiciel`,`Outil Anes Shop Ultimate`],[`Jeu`,`Fortnite`],[`Système`,`Windows 10 / 11`],[`Livraison`,`Instantané`]],images:[`images/b84a86d8-f5d2-4135-85d0-7ba735e81e04/bw3-8344399e-c930-422f-a6a1-1780e1a86bda.webp`]},"fcadfed8-b569-4ce2-a284-af0a338a62f2":{description:`### ⭐ **Logiciel Anes Shop Ultimate — Cheat Fortnite indétectable**

Passez au niveau supérieur avec notre cheat Fortnite exclusif et entièrement **indétectable**.

Optimisé pour la stabilité et les performances — **prend en charge jusqu’à 25H2**.

\\-\\-\\-

### ⚙️ **Informations système**

• **Windows 10 / 11 (21H2–23H2)**

• **Processeurs Intel et AMD**

• **Toutes les cartes graphiques prises en charge**

• **Manette prise en charge**

• **Prêt pour les tournois**

• **Indétectable en stream**

\\-\\-\\-

### 🎯 **Fonctionnalités de l’Aimbot**

• **Silent Aim**

• **Memory Aim**

• **No Spread**

• **Prédiction de visée**

• **FOV et fluidité réglables**

• **Vérification de visibilité**

• **Touche de visée / os de visée personnalisés**

\\-\\-\\-

### 👀 **Visuels (ESP)**

• **ESP des joueurs**

• **ESP des armes et du butin**

• **ESP de rareté**

• **Contour / icônes de plateforme**

• **ESP des niveaux, rangs et éliminations**

• **ESP du monde** (coffres, munitions, véhicules, butin)

\\-\\-\\-

### 🛡️ **Radar**

• **Mini-radar**

• **Taille et position réglables**

• **Indicateurs de distance**

\\-\\-\\-

### 🔧 **Divers**

• **V-Sync**

• **Butin rapide**

• **Enregistrer et charger la configuration**

• **Entièrement indétectable en stream**

\\-\\-\\-

### ✅ **Entièrement indétectable — prend en charge jusqu’à 25H2.**`,specs:[[`Logiciel`,`Outil Anes Shop Ultimate`],[`Jeu`,`Fortnite`],[`Système`,`Windows 10 / 11`],[`Livraison`,`Instantané`]],images:[`images/315ea7ea-d694-44b6-bd05-0a14fe3c1c4f/bw3-50c0d94d-f6bf-4088-ae2d-c357a6aa8aa3.webp`]},"ac1ade11-719c-4626-bfcb-32784435a484":{description:`### ⭐ **Logiciel Anes Shop Ultimate — Cheat Fortnite indétectable**

Passez au niveau supérieur avec notre cheat Fortnite exclusif et entièrement **indétectable**.

Optimisé pour la stabilité et les performances — **prend en charge jusqu’à 25H2**.

\\-\\-\\-

### ⚙️ **Informations système**

• **Windows 10 / 11 (21H2–23H2)**

• **Processeurs Intel et AMD**

• **Toutes les cartes graphiques prises en charge**

• **Manette prise en charge**

• **Prêt pour les tournois**

• **Indétectable en stream**

\\-\\-\\-

### 🎯 **Fonctionnalités de l’Aimbot**

• **Silent Aim**

• **Memory Aim**

• **No Spread**

• **Prédiction de visée**

• **FOV et fluidité réglables**

• **Vérification de visibilité**

• **Touche de visée / os de visée personnalisés**

\\-\\-\\-

### 👀 **Visuels (ESP)**

• **ESP des joueurs**

• **ESP des armes et du butin**

• **ESP de rareté**

• **Contour / icônes de plateforme**

• **ESP des niveaux, rangs et éliminations**

• **ESP du monde** (coffres, munitions, véhicules, butin)

\\-\\-\\-

### 🛡️ **Radar**

• **Mini-radar**

• **Taille et position réglables**

• **Indicateurs de distance**

\\-\\-\\-

### 🔧 **Divers**

• **V-Sync**

• **Butin rapide**

• **Enregistrer et charger la configuration**

• **Entièrement indétectable en stream**

\\-\\-\\-

### ✅ **Entièrement indétectable — prend en charge jusqu’à 25H2.**`,specs:[[`Logiciel`,`Outil Anes Shop Ultimate`],[`Jeu`,`Fortnite`],[`Système`,`Windows 10 / 11`],[`Livraison`,`Instantané`]],images:[`images/1c45d36e-ffbf-439b-87d1-8001da7d51dc/bw3-25123b76-f9e4-4353-bf09-8b401293a44b.webp`]},"2211acee-0b01-4c2d-8537-50fb03f3fa6c":{description:`### 🎬 Compte Disney+ à vie NFA/FA

· Regardez en streaming vos films et séries préférés sans limite — pour toujours.

Profitez des classiques Disney, Marvel, Star Wars, Pixar et National Geographic avec un accès à vie.

### ✅ Inclus :

· 🏷️ Compte Disney+ Premium – Accès à vie

· 📺 Regardez en illimité séries, films et créations originales

· 🌍 Fonctionne dans le monde entier – Regardez où que vous soyez

· ⚡ Livraison instantanée après l’achat

· 📩 Assistance incluse

**Plongez dans un divertissement sans fin — un paiement, un accès à vie.**`,specs:[],images:[`images/78ddf4f4-aa24-420c-b2f4-aaccc2362644/bw3-e84aee2c-068f-449a-82c2-1be65504e32c.webp`,`images/d7850171-d359-4111-8252-dcccb8acf6ba/67f4f7a2-b0d2-4d85-9c69-e878ed615780.webp`,`images/c42cca28-6d46-4842-bee1-253fd96ace19/f8c014d5-1f66-469c-9775-ecd2c9936c12.webp`,`images/d21d171b-8488-4096-91c3-9d5a09d6173d/fe73e234-d00f-4dcf-a071-1a9d03c20bff.webp`]},"9b53e120-5e83-4144-a212-17fd7ed975ea":{description:`### 🎬 **Compte Paramount+ — Full Access (LATAM + UE et USA)**

Comptes de streaming **Paramount+** premium et entièrement vérifiés pour un accès illimité aux films, séries et créations originales exclusives.

Vous pouvez choisir la région **LATAM + UE** ou **USA** lors du paiement.

✨ Certains comptes peuvent inclure des offres groupées premium ou des options supplémentaires actives — cela est aléatoire et non garanti.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🌍 **Régions disponibles**

- 🇪🇺 **Région LATAM + UE** — Fonctionne en Amérique latine et en Europe.

- 🇺🇸 **Région USA** — Fonctionne uniquement aux États-Unis.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 📺 Streaming illimité de films, séries et créations originales

- ✨ Certains comptes peuvent inclure des options Premium actives

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Paramount+_

🔥 Choisissez votre région (LATAM + UE ou USA) et profitez dès aujourd’hui d’un accès instantané à Paramount+ !`,specs:[],images:[`images/aa6bc018-02e9-4308-a38b-4017d33c0f00/bw3-994d7351-07db-4725-887c-f225ab6ee4c2.webp`]},"342f6bb9-3119-42ed-bc86-9d590a44a19f":{description:`### 🎬 **Compte Paramount+ — Full Access (LATAM + UE et USA)**

Comptes de streaming **Paramount+** premium et entièrement vérifiés pour un accès illimité aux films, séries et créations originales exclusives.

Vous pouvez choisir la région **LATAM + UE** ou **USA** lors du paiement.

✨ Certains comptes peuvent inclure des offres groupées premium ou des options supplémentaires actives — cela est aléatoire et non garanti.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🌍 **Régions disponibles**

- 🇪🇺 **Région LATAM + UE** — Fonctionne en Amérique latine et en Europe.

- 🇺🇸 **Région USA** — Fonctionne uniquement aux États-Unis.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🧰 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 📺 Streaming illimité de films, séries et créations originales

- ✨ Certains comptes peuvent inclure des options Premium actives

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Paramount+_

🔥 Choisissez votre région (LATAM + UE ou USA) et profitez dès aujourd’hui d’un accès instantané à Paramount+ !`,specs:[],images:[`images/50d7201e-733e-41fc-8810-bfcbe39f3c7c/bw3-f5aeae5e-ef53-4286-890c-821e453c171f.webp`]},"21c9b57f-85a2-4ba4-bc9d-2c79a317b39f":{description:`### 🟣 **Comptes Twitch avec Followers FA — Full Access**

**Comptes Twitch premium avec des Followers**, parfaits pour développer instantanément votre présence sur Twitch.

✨ Les Followers sont ajoutés à l’aide d’un logiciel personnel — les désabonnements sont très peu probables.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Contenu inclus**

- 📩 E-mail non confirmé — vous pouvez associer le vôtre

- 🔑 Format : LOGIN:PASSWORD:TOKEN ou LOGIN:PASSWORD

- 🧮 Followers réels ajoutés, stables avec un faible taux de perte

- 🪄 La modification du pseudo peut ne pas être disponible immédiatement

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Twitch_

🔥 Parfait pour développer votre chaîne avec des comptes ayant beaucoup de Followers !`,specs:[],images:[`images/92dad818-f8b1-4aa0-8acd-447bdd87a64f/bw3-d863e64e-b383-4961-ac10-94b870df0a35.webp`]},"7eee1de5-e872-402d-a495-f6391ed76372":{description:`### 🟣 **Comptes Twitch avec Followers FA — Full Access**

**Comptes Twitch premium avec des Followers**, parfaits pour développer instantanément votre présence sur Twitch.

✨ Les Followers sont ajoutés à l’aide d’un logiciel personnel — les désabonnements sont très peu probables.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Contenu inclus**

- 📩 E-mail non confirmé — vous pouvez associer le vôtre

- 🔑 Format : LOGIN:PASSWORD:TOKEN ou LOGIN:PASSWORD

- 🧮 Followers réels ajoutés, stables avec un faible taux de perte

- 🪄 La modification du pseudo peut ne pas être disponible immédiatement

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Twitch_

🔥 Parfait pour développer votre chaîne avec des comptes ayant beaucoup de Followers !`,specs:[],images:[`images/e48a32b6-5eb3-4e1f-9a49-4ebda1ba97f0/bw3-fc27f998-0561-4118-9e54-a432e4353fb8.webp`]},"ce87e09a-59fe-49a5-8213-4612671b76a7":{description:`### 🟣 **Comptes Twitch avec Followers FA — Full Access**

**Comptes Twitch premium avec des Followers**, parfaits pour développer instantanément votre présence sur Twitch.

✨ Les Followers sont ajoutés à l’aide d’un logiciel personnel — les désabonnements sont très peu probables.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Contenu inclus**

- 📩 E-mail non confirmé — vous pouvez associer le vôtre

- 🔑 Format : LOGIN:PASSWORD:TOKEN ou LOGIN:PASSWORD

- 🧮 Followers réels ajoutés, stables avec un faible taux de perte

- 🪄 La modification du pseudo peut ne pas être disponible immédiatement

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Twitch_

🔥 Parfait pour développer votre chaîne avec des comptes ayant beaucoup de Followers !`,specs:[],images:[`images/90f7ded0-421a-4549-bc6f-3f4acef45d26/bw3-af8c09a3-502f-412e-a2ed-3c61685ae096.webp`]},"530c6ad3-a590-44af-a359-84a0f3e47cf2":{description:`### 🟣 **Comptes Twitch avec Followers FA — Full Access**

**Comptes Twitch premium avec des Followers**, parfaits pour développer instantanément votre présence sur Twitch.

✨ Les Followers sont ajoutés à l’aide d’un logiciel personnel — les désabonnements sont très peu probables.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Contenu inclus**

- 📩 E-mail non confirmé — vous pouvez associer le vôtre

- 🔑 Format : LOGIN:PASSWORD:TOKEN ou LOGIN:PASSWORD

- 🧮 Followers réels ajoutés, stables avec un faible taux de perte

- 🪄 La modification du pseudo peut ne pas être disponible immédiatement

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Twitch_

🔥 Parfait pour développer votre chaîne avec des comptes ayant beaucoup de Followers !`,specs:[],images:[`images/4c87bb28-586d-4640-9938-67bf12d713f8/bw3-6319f197-0bbf-4ecb-b9e4-7d7ab974fe3e.webp`]},"7b348157-7048-4212-9a5e-6de374f30dd2":{description:`### 🛡️ **Roblox (Robux) – Comptes évalués selon la valeur de l’inventaire**

Comptes Roblox premium classés selon la **valeur de l’inventaire** (estimation de la valeur totale des objets du compte). Parfaits pour les collectionneurs, les traders ou toute personne qui souhaite disposer d’un profil Roblox de valeur dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔷 **Paliers basés sur l’inventaire** — comptes classés selon la valeur estimée de l’inventaire (et non le solde)

- 🧾 **Évaluation précise** — valeur estimée d’après le marché Roblox / RAP

- 🚀 **Prêts pour le trading et la collection** — idéaux pour les traders, collectionneurs ou revendeurs

- ⚡ **Livraison instantanée** — identifiants au format login:password dès l’achat

- 🛡️ **Garantie et assistance** — garantie de base sur la validité du compte et assistance incluses

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⭐ **Paliers d’inventaire**

- · **1 000 – 2 500 Robux**

- · **2 500 – 5 000 Robux**

- · **5 000 – 15 000 Robux**

- · **10 000 – 15 000 Robux**

- · **20 000 – 40 000 Robux**

- · **50 000 – 250 000 Robux**

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Ce qui est inclus**

- 🔑 **Accès à un compte Roblox** avec la valeur d’inventaire choisie (login:password)

- 🛡️ **Garantie de validité du compte** et assistance de base

- ⚠️ **Livraison instantanée** — identifiants de connexion après le paiement

- 🔁 **Estimation vérifiée de l’inventaire** — comptes vérifiés pour estimer leur valeur sur le marché

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi les comptes Roblox avec inventaire se démarquent**

- 💡 Commencez avec un profil de valeur — aucun farm nécessaire

- 🚀 Parfaits pour revendre, échanger ou exposer des objets rares

- 🔎 Système de paliers clair — choisissez la fourchette de valeur souhaitée

- 🖥️ Livraison instantanée et automatisée — recevez votre compte et utilisez-le immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **Remarque :** la valeur de l’inventaire est une estimation basée sur des indicateurs du marché. Nous garantissons l’accès au compte à la livraison et fournissons une assistance de base concernant sa validité. Nous ne cautionnons ni ne soutenons aucune activité frauduleuse ou nuisible.`,specs:[],images:[`images/b5ae4dce-859f-423f-9d3e-be92535d0881/bw3-6655a19a-4d86-4178-80b1-9afe0d23897b.webp`]},"af1c85b1-3c89-4809-b44e-af97bded49d0":{description:`### 🛡️ **Roblox (Robux) – Comptes évalués selon la valeur de l’inventaire**

Comptes Roblox premium classés selon la **valeur de l’inventaire** (estimation de la valeur totale des objets du compte). Parfaits pour les collectionneurs, les traders ou toute personne qui souhaite disposer d’un profil Roblox de valeur dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔷 **Paliers basés sur l’inventaire** — comptes classés selon la valeur estimée de l’inventaire (et non le solde)

- 🧾 **Évaluation précise** — valeur estimée d’après le marché Roblox / RAP

- 🚀 **Prêts pour le trading et la collection** — idéaux pour les traders, collectionneurs ou revendeurs

- ⚡ **Livraison instantanée** — identifiants au format login:password dès l’achat

- 🛡️ **Garantie et assistance** — garantie de base sur la validité du compte et assistance incluses

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⭐ **Paliers d’inventaire**

- · **1 000 – 2 500 Robux**

- · **2 500 – 5 000 Robux**

- · **5 000 – 15 000 Robux**

- · **10 000 – 15 000 Robux**

- · **20 000 – 40 000 Robux**

- · **50 000 – 250 000 Robux**

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Ce qui est inclus**

- 🔑 **Accès à un compte Roblox** avec la valeur d’inventaire choisie (login:password)

- 🛡️ **Garantie de validité du compte** et assistance de base

- ⚠️ **Livraison instantanée** — identifiants de connexion après le paiement

- 🔁 **Estimation vérifiée de l’inventaire** — comptes vérifiés pour estimer leur valeur sur le marché

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi les comptes Roblox avec inventaire se démarquent**

- 💡 Commencez avec un profil de valeur — aucun farm nécessaire

- 🚀 Parfaits pour revendre, échanger ou exposer des objets rares

- 🔎 Système de paliers clair — choisissez la fourchette de valeur souhaitée

- 🖥️ Livraison instantanée et automatisée — recevez votre compte et utilisez-le immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **Remarque :** la valeur de l’inventaire est une estimation basée sur des indicateurs du marché. Nous garantissons l’accès au compte à la livraison et fournissons une assistance de base concernant sa validité. Nous ne cautionnons ni ne soutenons aucune activité frauduleuse ou nuisible.`,specs:[],images:[`images/4e2f7131-f20a-4fd8-8fd7-d6f8cc8154af/bw3-91f1f011-5d29-48ac-974b-e127187e4084.webp`]},"b4136050-be9a-4220-9b36-414c63f20d20":{description:`### 🛡️ **Roblox (Robux) – Comptes évalués selon la valeur de l’inventaire**

Comptes Roblox premium classés selon la **valeur de l’inventaire** (estimation de la valeur totale des objets du compte). Parfaits pour les collectionneurs, les traders ou toute personne qui souhaite disposer d’un profil Roblox de valeur dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔷 **Paliers basés sur l’inventaire** — comptes classés selon la valeur estimée de l’inventaire (et non le solde)

- 🧾 **Évaluation précise** — valeur estimée d’après le marché Roblox / RAP

- 🚀 **Prêts pour le trading et la collection** — idéaux pour les traders, collectionneurs ou revendeurs

- ⚡ **Livraison instantanée** — identifiants au format login:password dès l’achat

- 🛡️ **Garantie et assistance** — garantie de base sur la validité du compte et assistance incluses

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⭐ **Paliers d’inventaire**

- · **1 000 – 2 500 Robux**

- · **2 500 – 5 000 Robux**

- · **5 000 – 15 000 Robux**

- · **10 000 – 15 000 Robux**

- · **20 000 – 40 000 Robux**

- · **50 000 – 250 000 Robux**

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Ce qui est inclus**

- 🔑 **Accès à un compte Roblox** avec la valeur d’inventaire choisie (login:password)

- 🛡️ **Garantie de validité du compte** et assistance de base

- ⚠️ **Livraison instantanée** — identifiants de connexion après le paiement

- 🔁 **Estimation vérifiée de l’inventaire** — comptes vérifiés pour estimer leur valeur sur le marché

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi les comptes Roblox avec inventaire se démarquent**

- 💡 Commencez avec un profil de valeur — aucun farm nécessaire

- 🚀 Parfaits pour revendre, échanger ou exposer des objets rares

- 🔎 Système de paliers clair — choisissez la fourchette de valeur souhaitée

- 🖥️ Livraison instantanée et automatisée — recevez votre compte et utilisez-le immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **Remarque :** la valeur de l’inventaire est une estimation basée sur des indicateurs du marché. Nous garantissons l’accès au compte à la livraison et fournissons une assistance de base concernant sa validité. Nous ne cautionnons ni ne soutenons aucune activité frauduleuse ou nuisible.`,specs:[],images:[`images/63326379-1f62-43cb-80bf-b843959707c2/bw3-ef9b1601-7e00-4310-b71f-fb06abf5eb86.webp`]},"aaaa6774-e689-4732-b876-33bd37a5d183":{description:`### 🛡️ **Roblox (Robux) – Comptes évalués selon la valeur de l’inventaire**

Comptes Roblox premium classés selon la **valeur de l’inventaire** (estimation de la valeur totale des objets du compte). Parfaits pour les collectionneurs, les traders ou toute personne qui souhaite disposer d’un profil Roblox de valeur dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔷 **Paliers basés sur l’inventaire** — comptes classés selon la valeur estimée de l’inventaire (et non le solde)

- 🧾 **Évaluation précise** — valeur estimée d’après le marché Roblox / RAP

- 🚀 **Prêts pour le trading et la collection** — idéaux pour les traders, collectionneurs ou revendeurs

- ⚡ **Livraison instantanée** — identifiants au format login:password dès l’achat

- 🛡️ **Garantie et assistance** — garantie de base sur la validité du compte et assistance incluses

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⭐ **Paliers d’inventaire**

- · **1 000 – 2 500 Robux**

- · **2 500 – 5 000 Robux**

- · **5 000 – 15 000 Robux**

- · **10 000 – 15 000 Robux**

- · **20 000 – 40 000 Robux**

- · **50 000 – 250 000 Robux**

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Ce qui est inclus**

- 🔑 **Accès à un compte Roblox** avec la valeur d’inventaire choisie (login:password)

- 🛡️ **Garantie de validité du compte** et assistance de base

- ⚠️ **Livraison instantanée** — identifiants de connexion après le paiement

- 🔁 **Estimation vérifiée de l’inventaire** — comptes vérifiés pour estimer leur valeur sur le marché

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi les comptes Roblox avec inventaire se démarquent**

- 💡 Commencez avec un profil de valeur — aucun farm nécessaire

- 🚀 Parfaits pour revendre, échanger ou exposer des objets rares

- 🔎 Système de paliers clair — choisissez la fourchette de valeur souhaitée

- 🖥️ Livraison instantanée et automatisée — recevez votre compte et utilisez-le immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **Remarque :** la valeur de l’inventaire est une estimation basée sur des indicateurs du marché. Nous garantissons l’accès au compte à la livraison et fournissons une assistance de base concernant sa validité. Nous ne cautionnons ni ne soutenons aucune activité frauduleuse ou nuisible.`,specs:[],images:[`images/bab9cf8c-370a-4dd6-af81-87dcb64b48a5/bw3-d67cd147-075e-4405-b807-6e3acd59f831.webp`]},"ebd0acd2-82c5-4173-a509-65ed2160c15c":{description:`### 🛡️ **Roblox (Robux) – Comptes évalués selon la valeur de l’inventaire**

Comptes Roblox premium classés selon la **valeur de l’inventaire** (estimation de la valeur totale des objets du compte). Parfaits pour les collectionneurs, les traders ou toute personne qui souhaite disposer d’un profil Roblox de valeur dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔷 **Paliers basés sur l’inventaire** — comptes classés selon la valeur estimée de l’inventaire (et non le solde)

- 🧾 **Évaluation précise** — valeur estimée d’après le marché Roblox / RAP

- 🚀 **Prêts pour le trading et la collection** — idéaux pour les traders, collectionneurs ou revendeurs

- ⚡ **Livraison instantanée** — identifiants au format login:password dès l’achat

- 🛡️ **Garantie et assistance** — garantie de base sur la validité du compte et assistance incluses

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⭐ **Paliers d’inventaire**

- · **1 000 – 2 500 Robux**

- · **2 500 – 5 000 Robux**

- · **5 000 – 15 000 Robux**

- · **10 000 – 15 000 Robux**

- · **20 000 – 40 000 Robux**

- · **50 000 – 250 000 Robux**

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Ce qui est inclus**

- 🔑 **Accès à un compte Roblox** avec la valeur d’inventaire choisie (login:password)

- 🛡️ **Garantie de validité du compte** et assistance de base

- ⚠️ **Livraison instantanée** — identifiants de connexion après le paiement

- 🔁 **Estimation vérifiée de l’inventaire** — comptes vérifiés pour estimer leur valeur sur le marché

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi les comptes Roblox avec inventaire se démarquent**

- 💡 Commencez avec un profil de valeur — aucun farm nécessaire

- 🚀 Parfaits pour revendre, échanger ou exposer des objets rares

- 🔎 Système de paliers clair — choisissez la fourchette de valeur souhaitée

- 🖥️ Livraison instantanée et automatisée — recevez votre compte et utilisez-le immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **Remarque :** la valeur de l’inventaire est une estimation basée sur des indicateurs du marché. Nous garantissons l’accès au compte à la livraison et fournissons une assistance de base concernant sa validité. Nous ne cautionnons ni ne soutenons aucune activité frauduleuse ou nuisible.`,specs:[],images:[`images/8d43603c-4e18-4cbc-b3b0-a1ee662881d9/bw3-6da611d6-47af-4cd8-b778-0e568511efcd.webp`]},"8ec01782-12e4-496b-b437-76ed5a3daed0":{description:`### 🛡️ **Roblox (Robux) – Comptes évalués selon la valeur de l’inventaire**

Comptes Roblox premium classés selon la **valeur de l’inventaire** (estimation de la valeur totale des objets du compte). Parfaits pour les collectionneurs, les traders ou toute personne qui souhaite disposer d’un profil Roblox de valeur dès le premier jour.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛠️ **Fonctionnalités principales**

- 🔷 **Paliers basés sur l’inventaire** — comptes classés selon la valeur estimée de l’inventaire (et non le solde)

- 🧾 **Évaluation précise** — valeur estimée d’après le marché Roblox / RAP

- 🚀 **Prêts pour le trading et la collection** — idéaux pour les traders, collectionneurs ou revendeurs

- ⚡ **Livraison instantanée** — identifiants au format login:password dès l’achat

- 🛡️ **Garantie et assistance** — garantie de base sur la validité du compte et assistance incluses

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⭐ **Paliers d’inventaire**

- · **1 000 – 2 500 Robux**

- · **2 500 – 5 000 Robux**

- · **5 000 – 15 000 Robux**

- · **10 000 – 15 000 Robux**

- · **20 000 – 40 000 Robux**

- · **50 000 – 250 000 Robux**

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Ce qui est inclus**

- 🔑 **Accès à un compte Roblox** avec la valeur d’inventaire choisie (login:password)

- 🛡️ **Garantie de validité du compte** et assistance de base

- ⚠️ **Livraison instantanée** — identifiants de connexion après le paiement

- 🔁 **Estimation vérifiée de l’inventaire** — comptes vérifiés pour estimer leur valeur sur le marché

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💥 **Pourquoi les comptes Roblox avec inventaire se démarquent**

- 💡 Commencez avec un profil de valeur — aucun farm nécessaire

- 🚀 Parfaits pour revendre, échanger ou exposer des objets rares

- 🔎 Système de paliers clair — choisissez la fourchette de valeur souhaitée

- 🖥️ Livraison instantanée et automatisée — recevez votre compte et utilisez-le immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **Remarque :** la valeur de l’inventaire est une estimation basée sur des indicateurs du marché. Nous garantissons l’accès au compte à la livraison et fournissons une assistance de base concernant sa validité. Nous ne cautionnons ni ne soutenons aucune activité frauduleuse ou nuisible.`,specs:[],images:[`images/c0933fb0-797b-4846-9019-9f0b84cb6b73/bw3-c5e0e147-2c6e-498d-b847-20e3fd2fe2fb.webp`]},"b6fbf415-217e-4707-9837-8ce369670855":{description:`### 🏆 **Comptes Clash Royale — Nombre élevé de trophées \\| Accès instantané**

Comptes **Clash Royale** Premium avec un grand nombre de trophées, prêts à dominer le ladder dès le premier combat.

Parfait pour les joueurs qui veulent éviter le grind et passer directement au jeu compétitif.

✨ Certains comptes peuvent inclure des cartes rares, des decks améliorés et des cosmétiques exclusifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Variantes disponibles**

- 👑 **10 000–12 000 trophées** — Comptes de haut niveau prêts pour les trophées légendaires.

- 🥇 **7 000–10 000 trophées** — Comptes compétitifs de haut niveau.

- 🥈 **5 000–7 000 trophées** — Parfaits pour les combats classés de niveau intermédiaire à élevé.

- 🥉 **2 500–5 000 trophées** — Idéaux pour bien jouer et progresser.

- 💎 **1 000–2 500 trophées** — Comptes de départ idéaux pour les petits budgets.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 📦 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 🏅 Nombre de trophées selon la variante choisie

- 🧼 Comptes propres — aucun bannissement ni restriction

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Clash Royale_

🔥 Choisissez la plage de trophées qui vous convient — du compte de départ au compte compétitif de haut niveau !`,specs:[],images:[`images/d9d195a3-b089-40bc-8b31-1170a61350b5/bw3-327b8795-aa51-4adc-8ee4-0ba6b47d9193.webp`]},"50ee8b0f-a718-4e4a-84b1-87455dfb9fdd":{description:`### 🏆 **Comptes Clash Royale — Nombre élevé de trophées \\| Accès instantané**

Comptes **Clash Royale** Premium avec un grand nombre de trophées, prêts à dominer le ladder dès le premier combat.

Parfait pour les joueurs qui veulent éviter le grind et passer directement au jeu compétitif.

✨ Certains comptes peuvent inclure des cartes rares, des decks améliorés et des cosmétiques exclusifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Variantes disponibles**

- 👑 **10 000–12 000 trophées** — Comptes de haut niveau prêts pour les trophées légendaires.

- 🥇 **7 000–10 000 trophées** — Comptes compétitifs de haut niveau.

- 🥈 **5 000–7 000 trophées** — Parfaits pour les combats classés de niveau intermédiaire à élevé.

- 🥉 **2 500–5 000 trophées** — Idéaux pour bien jouer et progresser.

- 💎 **1 000–2 500 trophées** — Comptes de départ idéaux pour les petits budgets.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 📦 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 🏅 Nombre de trophées selon la variante choisie

- 🧼 Comptes propres — aucun bannissement ni restriction

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Clash Royale_

🔥 Choisissez la plage de trophées qui vous convient — du compte de départ au compte compétitif de haut niveau !`,specs:[],images:[`images/7d89ad37-097f-4278-a426-ea9ad94a9b6d/bw3-9857438d-abcc-4b7c-b16b-8d17b89e42e9.webp`]},"1c69f58c-ddee-4afe-bf65-4272b2b6a24d":{description:`### 🏆 **Comptes Clash Royale — Nombre élevé de trophées \\| Accès instantané**

Comptes **Clash Royale** Premium avec un grand nombre de trophées, prêts à dominer le ladder dès le premier combat.

Parfait pour les joueurs qui veulent éviter le grind et passer directement au jeu compétitif.

✨ Certains comptes peuvent inclure des cartes rares, des decks améliorés et des cosmétiques exclusifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Variantes disponibles**

- 👑 **10 000–12 000 trophées** — Comptes de haut niveau prêts pour les trophées légendaires.

- 🥇 **7 000–10 000 trophées** — Comptes compétitifs de haut niveau.

- 🥈 **5 000–7 000 trophées** — Parfaits pour les combats classés de niveau intermédiaire à élevé.

- 🥉 **2 500–5 000 trophées** — Idéaux pour bien jouer et progresser.

- 💎 **1 000–2 500 trophées** — Comptes de départ idéaux pour les petits budgets.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 📦 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 🏅 Nombre de trophées selon la variante choisie

- 🧼 Comptes propres — aucun bannissement ni restriction

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Clash Royale_

🔥 Choisissez la plage de trophées qui vous convient — du compte de départ au compte compétitif de haut niveau !`,specs:[],images:[`images/7adb0b81-b084-420f-b129-0ceedb1a7fea/bw3-e6e4494d-5c99-4f78-8324-1aea9bebfaa4.webp`]},"31aed68a-45d1-42f8-a122-c1126a7428d2":{description:`### 🏆 **Comptes Clash Royale — Nombre élevé de trophées \\| Accès instantané**

Comptes **Clash Royale** Premium avec un grand nombre de trophées, prêts à dominer le ladder dès le premier combat.

Parfait pour les joueurs qui veulent éviter le grind et passer directement au jeu compétitif.

✨ Certains comptes peuvent inclure des cartes rares, des decks améliorés et des cosmétiques exclusifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Variantes disponibles**

- 👑 **10 000–12 000 trophées** — Comptes de haut niveau prêts pour les trophées légendaires.

- 🥇 **7 000–10 000 trophées** — Comptes compétitifs de haut niveau.

- 🥈 **5 000–7 000 trophées** — Parfaits pour les combats classés de niveau intermédiaire à élevé.

- 🥉 **2 500–5 000 trophées** — Idéaux pour bien jouer et progresser.

- 💎 **1 000–2 500 trophées** — Comptes de départ idéaux pour les petits budgets.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 📦 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 🏅 Nombre de trophées selon la variante choisie

- 🧼 Comptes propres — aucun bannissement ni restriction

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Clash Royale_

🔥 Choisissez la plage de trophées qui vous convient — du compte de départ au compte compétitif de haut niveau !`,specs:[],images:[`images/c1d9cb79-c130-4797-815f-59e94a4de3dc/bw3-557ac80a-6f43-4283-a019-79d5096e6631.webp`]},"437d1119-798a-4e8d-9429-abf8ada34bb9":{description:`### 🏆 **Comptes Clash Royale — Nombre élevé de trophées \\| Accès instantané**

Comptes **Clash Royale** Premium avec un grand nombre de trophées, prêts à dominer le ladder dès le premier combat.

Parfait pour les joueurs qui veulent éviter le grind et passer directement au jeu compétitif.

✨ Certains comptes peuvent inclure des cartes rares, des decks améliorés et des cosmétiques exclusifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧰 **Variantes disponibles**

- 👑 **10 000–12 000 trophées** — Comptes de haut niveau prêts pour les trophées légendaires.

- 🥇 **7 000–10 000 trophées** — Comptes compétitifs de haut niveau.

- 🥈 **5 000–7 000 trophées** — Parfaits pour les combats classés de niveau intermédiaire à élevé.

- 🥉 **2 500–5 000 trophées** — Idéaux pour bien jouer et progresser.

- 💎 **1 000–2 500 trophées** — Comptes de départ idéaux pour les petits budgets.

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 📦 **Inclus**

- 🔐 Full Access — e-mail et mot de passe modifiables

- 🏅 Nombre de trophées selon la variante choisie

- 🧼 Comptes propres — aucun bannissement ni restriction

- 🕒 Garantie de remplacement de 24 heures

- ⚡ Livraison automatique instantanée après l’achat

━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ _Plateforme : Clash Royale_

🔥 Choisissez la plage de trophées qui vous convient — du compte de départ au compte compétitif de haut niveau !`,specs:[],images:[`images/12f95a4b-47f9-4387-8328-2f065b2d80e0/bw3-a81f0da8-70e0-4f0e-baef-6ee292c1694b.webp`]},"8f07e42a-e66a-4dc6-9691-ad6719a4ff3d":{description:`### ⚙️ Fonctionnement du Spoofer temporaire

• 🔹 Modifie temporairement votre HWID (identité matérielle)

• 🔹 Aide à contourner les restrictions matérielles

• 🔹 Réinitialise les identifiants système en toute sécurité

• 🔹 Exécution rapide avec un impact minimal sur le système

• 🔹 Configuration rapide — prêt à l’emploi en quelques secondes

### 🎮 Compatibilité avec les jeux

• ✔️ Fonctionne avec tous les jeux

• ✔️ Compatible avec les FPS, Battle Royale, MMO et jeux compétitifs

• ✔️ Compatible avec les versions à jour des jeux

(non limité à un moteur ou launcher spécifique)

### 💻 Compatibilité système

• 🖥️ Toutes les configurations PC standard

• ⚡ Compatible avec la plupart des configurations système

• 🔧 Utilisation simple, plug & play

(l’image du produit peut montrer l’interface ou un aperçu du processus)

### ⭐ Pourquoi choisir ce Spoofer

• 💸 L’une des options les plus abordables du marché

• 🚀 Stable et performant

• 🧩 Interface adaptée aux débutants

• 🛡️ Solution fiable et efficace

👉 Pas de promesses exagérées. Un outil qui fait exactement ce pour quoi il a été conçu.

### 📦 Résumé

Le Spoofer temporaire est une solution simple, efficace et économique pour réinitialiser l’identité matérielle dans tous les jeux et vous permettre de retourner jouer rapidement et sans difficulté.`,specs:[[`Type de produit`,`Spoofer HWID temporaire`],[`Compatibilité`,`Tous les jeux et appareils Windows`],[`Durée d’accès`,`Licence à durée limitée`],[`Livraison`,`Livraison instantanée`]],images:[`images/41acbab6-759e-4183-82c1-5c8d322e04ae/bw3-1cfcdaeb-11bf-4f07-b89d-e77e16d8e0e8.webp`,`images/c86f7688-c9d5-4c98-864d-7197b258d7be/48fe34f9-1cfd-484e-a2ba-d001cd2f7637.webp`,`images/bd404f62-3c1c-4ffd-8bf5-3ea7df0cfbfa/310192dc-397e-4c0b-9f53-85d72e204e1d.webp`]},"32cf4499-598c-4e2c-a95f-7de5cf579220":{description:`### ⚙️ Fonctionnement du Spoofer temporaire

• 🔹 Modifie temporairement votre HWID (identité matérielle)

• 🔹 Aide à contourner les restrictions matérielles

• 🔹 Réinitialise les identifiants système en toute sécurité

• 🔹 Exécution rapide avec un impact minimal sur le système

• 🔹 Configuration rapide — prêt à l’emploi en quelques secondes

### 🎮 Compatibilité avec les jeux

• ✔️ Fonctionne avec tous les jeux

• ✔️ Compatible avec les FPS, Battle Royale, MMO et jeux compétitifs

• ✔️ Compatible avec les versions à jour des jeux

(non limité à un moteur ou launcher spécifique)

### 💻 Compatibilité système

• 🖥️ Toutes les configurations PC standard

• ⚡ Compatible avec la plupart des configurations système

• 🔧 Utilisation simple, plug & play

(l’image du produit peut montrer l’interface ou un aperçu du processus)

### ⭐ Pourquoi choisir ce Spoofer

• 💸 L’une des options les plus abordables du marché

• 🚀 Stable et performant

• 🧩 Interface adaptée aux débutants

• 🛡️ Solution fiable et efficace

👉 Pas de promesses exagérées. Un outil qui fait exactement ce pour quoi il a été conçu.

### 📦 Résumé

Le Spoofer temporaire est une solution simple, efficace et économique pour réinitialiser l’identité matérielle dans tous les jeux et vous permettre de retourner jouer rapidement et sans difficulté.`,specs:[[`Type de produit`,`Spoofer HWID temporaire`],[`Compatibilité`,`Tous les jeux et appareils Windows`],[`Durée d’accès`,`Licence à durée limitée`],[`Livraison`,`Livraison instantanée`]],images:[`images/eb658ad3-df7e-4e01-8a3f-b8e129af3b63/bw3-b6c1d1cc-ba28-4107-a48c-29ac5a576fb5.webp`,`images/a76789b1-003c-4f09-b792-23405dbd7972/03b24fab-9948-4fd5-88c8-8b12780a1f9a.webp`,`images/8f8b24a7-d40c-4e00-acaa-ec9846f84917/11094520-ed88-4fe4-81e0-12cfe7ca0dcb.webp`]},"37740dee-a72a-487b-90ff-075184d942a8":{description:`### ⚙️ Fonctionnement du Spoofer temporaire

• 🔹 Modifie temporairement votre HWID (identité matérielle)

• 🔹 Aide à contourner les restrictions matérielles

• 🔹 Réinitialise les identifiants système en toute sécurité

• 🔹 Exécution rapide avec un impact minimal sur le système

• 🔹 Configuration rapide — prêt à l’emploi en quelques secondes

### 🎮 Compatibilité avec les jeux

• ✔️ Fonctionne avec tous les jeux

• ✔️ Compatible avec les FPS, Battle Royale, MMO et jeux compétitifs

• ✔️ Compatible avec les versions à jour des jeux

(non limité à un moteur ou launcher spécifique)

### 💻 Compatibilité système

• 🖥️ Toutes les configurations PC standard

• ⚡ Compatible avec la plupart des configurations système

• 🔧 Utilisation simple, plug & play

(l’image du produit peut montrer l’interface ou un aperçu du processus)

### ⭐ Pourquoi choisir ce Spoofer

• 💸 L’une des options les plus abordables du marché

• 🚀 Stable et performant

• 🧩 Interface adaptée aux débutants

• 🛡️ Solution fiable et efficace

👉 Pas de promesses exagérées. Un outil qui fait exactement ce pour quoi il a été conçu.

### 📦 Résumé

Le Spoofer temporaire est une solution simple, efficace et économique pour réinitialiser l’identité matérielle dans tous les jeux et vous permettre de retourner jouer rapidement et sans difficulté.`,specs:[[`Type de produit`,`Spoofer HWID temporaire`],[`Compatibilité`,`Tous les jeux et appareils Windows`],[`Durée d’accès`,`Licence à durée limitée`],[`Livraison`,`Livraison instantanée`]],images:[`images/1f836502-923c-48de-b7b3-4bd7b742db65/bw3-575e5bee-5260-4fed-b437-924f28b420c2.webp`,`images/9befc247-5251-48b5-bca7-b4f40ca8e5a6/8af2703d-3357-43c7-96bf-e9f9a5225d0b.webp`,`images/9922f19e-4848-4e97-a213-c7bab3debd5e/c498736d-82a3-4fcd-a0d3-77e32cdda807.webp`]},"302a525c-04f4-466c-942b-b1e287961c2b":{description:`### ⚙️ Fonctionnement du Spoofer temporaire

• 🔹 Modifie temporairement votre HWID (identité matérielle)

• 🔹 Aide à contourner les restrictions matérielles

• 🔹 Réinitialise les identifiants système en toute sécurité

• 🔹 Exécution rapide avec un impact minimal sur le système

• 🔹 Configuration rapide — prêt à l’emploi en quelques secondes

### 🎮 Compatibilité avec les jeux

• ✔️ Fonctionne avec tous les jeux

• ✔️ Compatible avec les FPS, Battle Royale, MMO et jeux compétitifs

• ✔️ Compatible avec les versions à jour des jeux

(non limité à un moteur ou launcher spécifique)

### 💻 Compatibilité système

• 🖥️ Toutes les configurations PC standard

• ⚡ Compatible avec la plupart des configurations système

• 🔧 Utilisation simple, plug & play

(l’image du produit peut montrer l’interface ou un aperçu du processus)

### ⭐ Pourquoi choisir ce Spoofer

• 💸 L’une des options les plus abordables du marché

• 🚀 Stable et performant

• 🧩 Interface adaptée aux débutants

• 🛡️ Solution fiable et efficace

👉 Pas de promesses exagérées. Un outil qui fait exactement ce pour quoi il a été conçu.

### 📦 Résumé

Le Spoofer temporaire est une solution simple, efficace et économique pour réinitialiser l’identité matérielle dans tous les jeux et vous permettre de retourner jouer rapidement et sans difficulté.`,specs:[[`Type de produit`,`Spoofer HWID temporaire`],[`Compatibilité`,`Tous les jeux et appareils Windows`],[`Durée d’accès`,`Licence à durée limitée`],[`Livraison`,`Livraison instantanée`]],images:[`images/496159ed-69ef-44ed-9ff5-b96c9e62adf1/bw3-35387d4a-d58b-4948-8d57-52b751c91a45.webp`,`images/9fa0b6c3-c61d-4f73-8e0b-0b63251dc6c6/a8195932-cdef-46ad-a805-97070e391688.webp`,`images/f8097912-cb54-407b-ae3b-5df8176c4722/2bd3ce0a-b316-4e9e-b810-de861b290779.webp`]},"cbe800a3-e164-4744-ba54-656e9c051d82":{description:`### 🤖 **Compte ChatGPT Plus — Compte Full Access**

Obtenez un **ChatGPT Plus** prêt à l’emploi, conçu pour les équipes, le partage et l’amélioration de la productivité.

Parfait pour les groupes, les revendeurs ou pour travailler entre amis.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔐 **Fonctionnement :**

· 📥 Recevez vos identifiants de connexion immédiatement après l’achat

· 🚀 Connectez-vous et commencez à utiliser ChatGPT immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

· 👥 **Accès multi-utilisateur** — ajoutez plusieurs utilisateurs

· 🤖 **Accès à GPT-5** — des outils d’IA puissants

· 💼 **Prêt pour les équipes** — parfait pour collaborer

· ⚡ **Performances élevées** — réponses rapides et prioritaires

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Caractéristiques du compte :**

· ♾️ **Accès à vie**

· 🌐 **Fonctionne partout dans le monde et sur tous les appareils**

· 🛠️ **Assistance incluse en cas de besoin**

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Les comptes Business permettent à plusieurs utilisateurs de se connecter, ce qui les rend parfaits pour le partage ou l’optimisation des flux de travail.`,specs:[[`Produit`,`ChatGPT Plus`],[`Identifiant`,`Compte Full Access`],[`Garantie`,`2 jours`],[`Livraison`,`Instantané`]],images:[`images/7d7e3fe6-b1f0-4fbe-8f06-c7d30681dc93/bw3-4cf94aa2-dc0d-49f5-83db-759c200f47fc.webp`,`images/0ca2fe88-f348-4e16-a460-9c07e5b8e7b5/93f04712-8be9-473c-b701-a84f45b19dde.webp`]},"6a7116f3-a3a7-430a-a09f-75437c1cc05a":{description:`### 🤖 **Gemini Pro — 2 ans (lien d’échange)**

Obtenez **Gemini Pro (2 ans)** via un lien d’échange et débloquez des outils d’IA avancés directement sur votre propre compte Google.

Parfait pour la productivité, la création de contenu, la programmation et l’utilisation quotidienne de l’IA.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔐 **Fonctionnement :**

· 🎁 Recevez votre **lien d’échange instantanément**

· ⚡ Activez-le sur **votre propre compte Gmail en un clic**

· 🚀 Commencez à utiliser Gemini Pro en quelques secondes

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

· 📅 **Accès à Gemini Pro pendant 2 ans**

· 🤖 **Outils d’IA avancés** — rédaction, programmation et automatisation

· 🌍 **Activation mondiale** — fonctionne partout dans le monde

· ⚡ Activation rapide en un clic

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🛡️ **Informations importantes**

· 📧 Vous devez posséder et utiliser **votre propre compte Gmail**

· ⚠️ Le code doit être **échangé immédiatement après l’achat**

· 🌍 Fonctionne **partout dans le monde et avec tous les comptes Gmail**

· 🚫 **Aucune garantie ni aucun remplacement ne sont prévus pour ce produit**

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Vous pouvez activer les deux années complètes d’accès à Gemini Pro directement sur votre propre compte Google en un seul clic.`,specs:[[`Produit`,`Gemini Pro (2 ans)`],[`Identifiant`,`Lien d’activation`],[`Accès`,`Activable`],[`Livraison`,`Instantané`]],images:[`images/8e999b43-7f5f-4e78-80fa-0be443475de3/bw3-5f18062c-f929-428a-8b1f-8383ae1f8f5f.webp`,`images/0d19d141-722b-42c2-a6b2-da4f304e7528/8dca6129-d929-41b4-abf3-17447868bf95.webp`]},"5cb8396b-089f-43e5-a187-b0268f16cfbd":{description:`### 🤖 **Gemini Pro 5TB + Antigravity Pro — Accès pendant 2 ans**

Obtenez un **compte Gemini Pro** prêt à l’emploi, conçu pour les équipes, le partage et l’amélioration de la productivité.

Parfait pour les groupes, les revendeurs et les flux de travail collaboratifs.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔐 **Fonctionnement :**

· 📥 Recevez vos identifiants de connexion immédiatement après l’achat

· 🚀 Connectez-vous et commencez à utiliser Gemini immédiatement

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

· 👥 **Accès multi-utilisateur** — ajoutez jusqu’à **14 utilisateurs**

· 🤖 **Outils d’IA avancés** — rédaction, programmation et automatisation

· 💼 **Prêt pour les équipes** — parfait pour collaborer

· ⚡ **Performances élevées** — résultats rapides et efficaces

━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ **Caractéristiques du compte :**

· ♾️ **Accès pendant 2 ans**

· 🔑 **Compte Full Access** (e-mail + mot de passe)

· 🌐 **Fonctionne partout dans le monde et sur tous les appareils**

· 🛠️ **Assistance incluse en cas de besoin**

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** Gemini Business permet à plusieurs utilisateurs de partager un compte, ce qui en fait une solution idéale pour les équipes et les flux de travail partagés.`,specs:[[`Produit`,`Gemini Pro Business`],[`Identifiant`,`E-mail et mot de passe`],[`Accès`,`Full Access`],[`Livraison`,`Instantané`]],images:[`images/6f4b3a65-d5d8-416b-9f75-bc3641aa5ee0/bw3-4cfb7252-3660-4289-9112-d9a48382346e.webp`,`images/bd7f78c0-92e5-4e5f-ac14-bbf1cc322594/ff2f84f2-db1c-4662-b0fc-3a8bbdfca695.webp`]},"c4d5dada-040f-4bc8-b005-593fe3778012":{description:`### ✅ Inclus

· 🔑 **Clé Netflix CDK Premium – Licence d’accès à vie**

· 💎 **Qualité Ultra HD / 4K** – Regardez les films et séries les plus récents en haute résolution

· 🔄 **Comptes à renouvellement automatique** – Abonnements conçus pour durer indéfiniment

· 📱 **Compatibilité universelle** – Fonctionne parfaitement sur mobile, PC, Smart TV et consoles

· ⚡ **Livraison et réclamation instantanées** – Pas d’attente, récupérez immédiatement votre lien de connexion

· 🛠 **Garantie à vie automatisée** – Remplacements instantanés illimités générés directement par votre clé

· ⚠️ **Info revendeurs :** Ces clés ne laissent aucun filigrane sur les profils finaux, ce qui les rend particulièrement adaptées à la revente en gros.

\\-\\-\\-

\`Une clé. Une automatisation à vie. La façon la plus simple, propre et fiable de regarder Netflix pour toujours.\``,specs:[[`Type de produit`,`Clé CDK automatisée`],[`Qualité de diffusion`,`Forfait Premium 4K UHD`],[`Garantie / remplacement`,`À vie (remplacement automatique instantané)`],[`Livraison`,`Automatisation instantanée`]],images:[`images/07038692-8f51-4b15-b256-42c4f9677dff/bw3-7816daf4-91bc-4520-8967-68f16cd09f00.webp`,`images/a77a2ac5-350d-4ce0-b3a6-dc6254826d68/8aa052be-b19a-4362-96b8-17402ca54e79.webp`,`images/de06d33d-eded-42bf-8905-3bcb74a7910e/8d9b2042-c194-42f5-9512-5695d9937816.webp`,`images/3a9d1e53-111c-4c21-8e46-c7d247952666/a1e032be-0f1c-4993-b5e5-d91564ff55f1.webp`,`images/0d2f6b0d-235b-4420-9675-b700edbc0895/a36619bc-974c-41ef-afd9-85342db88ceb.webp`]},"1bbd0c79-3d3f-4cf1-a05d-8f42075d3fee":{description:`### 🔹 Compte TikTok — 1 000+ abonnés \\[ HAUTE QUALITÉ \\]

🚀 Parfait pour gagner rapidement en visibilité et faire des lives sur TikTok

\\-\\-\\-

### 💎 Pourquoi une haute qualité ?

• 🛡️ **Garantie anti-perte** — Les abonnés sont réels, anciens et stables ; ils ne disparaissent pas avec le temps

• 🚫 **Pas rempli de bots** — Contrairement aux comptes bon marché, cette base d’abonnés ne sera pas supprimée lors d’un grand nettoyage

• 💰 **Vous en avez pour votre argent** — Prix plus élevé, mais une audience qui reste vraiment

\\-\\-\\-

### ✅ Avantages principaux :

• 🎥 **Prêt pour les lives** — Lancez un LIVE instantanément

• ⚡ **Démarrage rapide** — Pas besoin de gagner des abonnés manuellement

• 📈 **Crédibilité renforcée** — Audience établie et stable incluse

\\-\\-\\-

### 💠 Informations sur le compte :

• 🔐 **E-mail et mot de passe** modifiables

• 📱 Prêt à être utilisé sur mobile

• ♻️ **Remplacement disponible**

• ⏱️ **Garantie de 24 heures**

\\-\\-\\-

### ⚠️ Remarques :

• Idéal pour les créateurs, streamers et promotions

• Livraison instantanée après l’achat`,specs:[[`Type de produit`,`Compte TikTok`],[`Abonnés`,`1 000+ (haute qualité, sans perte)`],[`Garantie`,`Remplacement sous 24 heures`],[`Livraison`,`Livraison instantanée`]],images:[`images/d48db149-360e-4ad5-8ecf-b62302fcf21f/bw3-3af85a4e-0a7c-41cb-a67e-6d821d82291f.webp`,`images/22fc2cbc-9d87-4745-8aea-21d7d50e6280/4a24cd0e-c69c-4637-baf8-bc176d78f652.webp`,`images/e4475de3-05f4-427c-9e58-00b770861086/0c75ea2f-6068-4d44-a997-b1b27c236e49.webp`]},"53b4e567-68d1-430b-9f43-f35656e2bdbd":{description:`### 🏆 **Comptes DAZN Espagne – Accès à vie**

Obtenez votre **compte DAZN à vie** et accédez au streaming sportif Premium : boxe, football, MMA et événements en direct.

Idéal pour les passionnés de sport qui veulent un accès longue durée sans paiements mensuels.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🧠 **Ce que vous obtenez**

- ♾️ **Accès à vie** — aucun paiement mensuel

- 🥊 **Sports en direct** — boxe, MMA, football et plus encore

- 🌍 **Événements internationaux** — regardez des matchs partout dans le monde

- 🔑 **Identifiants prêts à l’emploi** — accès instantané à votre compte

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🛡️ **Caractéristiques du compte**

- ⚡ **Livraison instantanée**

- 🧼 **Comptes vérifiés et fonctionnels**

- 📺 **Qualité de streaming HD**

- 🛠️ **Assistance et remplacement si nécessaire**

━━━━━━━━━━━━━━━━━━━━━━━━━━

📺 **À regarder :**

- 🥊 Grands **combats et événements de boxe**

- ⚽ **Matchs de football en direct**

- 🥋 **MMA et sports de combat**

- 🎥 Documentaires sportifs et rediffusions

━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 **Le saviez-vous ?** DAZN est l’une des principales plateformes mondiales de streaming sportif, particulièrement réputée pour la boxe et ses soirées de combat exclusives.`,specs:[[`Produit`,`DAZN à vie`],[`Identifiant`,`E-mail et mot de passe`],[`Accès`,`Accès au compte`],[`Livraison`,`Instantané`]],images:[`images/364d7bf2-542f-449c-b996-246d6c15d8be/bw3-e04226e1-cbda-4d9e-9288-a4946554e6da.webp`,`images/57245412-e6c7-45df-b6da-2e9d5c9bba04/855a44bb-a0ea-4983-a92d-5116d253ea8f.webp`,`images/b5a80a03-5e72-4ba9-9817-e1ccecd72ed1/831e322a-04d6-48a1-93e2-75eb10711c06.webp`]},"c8c427a9-ca91-42d7-a9b9-6af94e178ed7":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· ⚽ **Football d’élite** – Regardez en direct la Serie A italienne, la Serie B et les meilleurs matchs européens

· 🥊 **Espace sports de combat** – Accédez aux grands galas de boxe, de MMA et d’UFC

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· ⚽ Matchs exclusifs de **Serie A et Serie B**

· 🥊 Grands **événements de boxe et combats pour les titres mondiaux**

· 🥋 **MMA, UFC et sports de combat**

· 🎥 **Documentaires sportifs premium, analyses et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`Italie (IT)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/79203fb3-d295-4b6f-98f5-b29155df31a4/bw3-0fc5a877-30a1-438f-b40f-e34f73ea502b.webp`,`images/f524bf53-5b4b-4ea6-b52a-041a11a6b187/12592f40-102e-4e7d-a6f1-251671446d11.webp`,`images/a0ebd167-fcaf-4fcb-9ffe-299aa4953e07/124fcfd0-275e-4bb0-b7e6-c30a64b6a8bd.webp`]},"e60d2d17-c8f1-42ee-b75a-d244fd0e3f6b":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· 🥊 **Le rendez-vous incontournable de la boxe** – Regardez en streaming les combats exclusifs Matchroom Boxing, Golden Boy et de qualité PPV

· 🥋 **Sports de combat internationaux** – MMA en direct, boxe crossover et cartes de combat underground

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· 🥊 **Combats de boxe exclusifs Matchroom et Golden Boy**

· 💥 **Boxe crossover et soirées de combat d’influenceurs**

· 🥋 **Événements internationaux de MMA et de kickboxing**

· 🎥 **Coulisses premium, documentaires et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`Royaume-Uni (UK)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/5d2c8880-99b5-4ebb-8a5c-8c76048cbd38/bw3-d098fc6e-054d-44ee-86b8-222b4f1f4fc6.webp`,`images/27293ff8-06dd-4d9e-86be-d433ebd86599/38d6f5a2-a2f5-456c-ba22-f038b41bd07d.webp`,`images/5442ff6e-dd0f-45ce-b5fa-b95c2727ebd3/67a47a99-6d4c-4654-98df-2c476e110be0.webp`]},"a4e63567-a3dc-4ba8-b1cc-70c36b60477d":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· 🥊 **Boxe de championnat** – Accès exclusif aux grands combats en direct aux États-Unis et à l’international

· 🏎️ **Autres sports premium** – Regardez le sport automobile mondial, le MMA et des ligues multisports

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· 🥊 Grands **combats pour les titres de boxe américains et internationaux**

· 🥋 Promotions d’élite de **MMA, Muay Thai et kickboxing**

· 🏁 **Courses de sport automobile premium et ligues mondiales**

· 🎥 **Contenus quotidiens de la fight week, documentaires et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`États-Unis (USA)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/6c967374-083d-42b8-940c-18c8ed2e9380/bw3-edf36cc1-a273-4b70-b3a0-4fc1824d28a8.webp`,`images/7fdf937f-6966-4321-8f5c-31da6ef0a998/4a137e99-3003-494a-8f94-5ef88eecb5b4.webp`,`images/0cf75284-ef83-4c0b-98d3-57b20106ddf3/04f243df-efe4-473b-a1f5-bca419558834.webp`]},"9dd7e7a2-51ef-4e9c-85f4-4b02d70806c6":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· ⚽ **Espace football français** – Diffusion en direct des matchs de Ligue 1 et du meilleur du football européen

· 🥋 **Sports de combat et MMA** – Regardez les grands galas de combat, la boxe et les arts martiaux internationaux

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· ⚽ Matchs de **Ligue 1 française et football**

· 🥊 **Boxe de championnat et soirées de combat en direct**

· 🥋 **Événements professionnels de MMA et de kickboxing**

· 🎥 **Documentaires exclusifs sur les athlètes, temps forts et rediffusions**

\\-\\-\\-

\`Un investissement unique. Le meilleur du streaming français. Regardez la Ligue 1 et des soirées de combat de classe mondiale en direct, où que vous soyez.\``,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`France (FR)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/64b5c561-d0df-413d-af24-80782f3b85f0/bw3-7ab95286-bcd5-4782-aef1-d61b20fb78ff.webp`,`images/9ab1401e-a190-4412-9309-da87a30d84e1/e8a6fe40-1141-4130-b92f-af433d6e9d4d.webp`,`images/a86d3607-c142-4584-ba14-f0a937b32866/8f098e48-993f-4a23-ae06-79ee90384464.webp`]},"265fbedf-d889-4b0b-8562-57048aebc680":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· 🏈 **Espace NFL** – Diffusion en direct des matchs NFL Game Pass et du meilleur du football américain

· 🥋 **Sports de combat et MMA** – Regardez les grands galas de combat, la boxe et les arts martiaux internationaux

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements premium actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· 🏈 **NFL Game Pass et football américain**

· 🥊 **Boxe de championnat et soirées de combat en direct**

· 🥋 **Événements professionnels de MMA et de kickboxing**

· 🎥 **Documentaires exclusifs sur les athlètes, temps forts et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`Canada (CA)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/296e816c-eac5-42d7-bba6-8896b8ac5e4d/bw3-0c6b3057-6a4d-4700-8dcd-0e0fbb03f762.webp`]},"09850a68-f8b8-459b-b1e2-c989fc77617a":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· ⚽ **Espace football européen** – Diffusion en direct de l’Ekstraklasa et du meilleur du football européen

· 🥊 **Boxe et sports de combat** – Regardez les grands galas de combat, la boxe et les arts martiaux internationaux

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· ⚽ **Matchs de l’Ekstraklasa et football**

· 🥊 **Boxe de championnat et soirées de combat en direct**

· 🥋 **Événements professionnels de MMA et de kickboxing**

· 🎥 **Documentaires exclusifs sur les athlètes, temps forts et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`Pologne (PL)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/e148afbd-8298-443e-81e9-2c394ffc702c/bw3-9bb7e9cd-3360-4924-b696-4bdc75d1a9af.webp`]},"c7d3afcb-da99-4385-84af-07f05fa83d38":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· ⚽ **Espace J.League** – Diffusion en direct de la J1, de la J2 et du meilleur du football japonais

· ⚾ **Baseball professionnel** – Regardez le meilleur du baseball japonais et ses temps forts

· 🥋 **Sports de combat et MMA** – Regardez les grands galas de combat, la boxe et les arts martiaux internationaux

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· ⚽ **Matchs de J.League et football**

· ⚾ **Matchs de baseball professionnel**

· 🥊 **Boxe de championnat et soirées de combat en direct**

· 🥋 **Événements professionnels de MMA et de kickboxing**

· 🎥 **Documentaires exclusifs sur les athlètes, temps forts et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`Japon (JP)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/9aff5771-6d1e-406e-8823-fa11fa91c250/bw3-6ea120fd-961a-4403-a41f-198acd0c537f.webp`]},"74208bb2-0fb2-40df-8e4b-27944d0db347":{description:`### 🧠 Ce que vous obtenez

· ♾️ **Accès à vie** – Paiement unique, sans frais mensuels

· ⚽ **Espace Bundesliga** – Diffusion en direct des matchs de Bundesliga et de 2. Bundesliga

· 🥊 **Boxe et sports de combat** – Regardez les grands galas de combat, la boxe et les arts martiaux internationaux

· 🔑 **Connexion prête à l’emploi** – Accès direct \`email:password\` à votre profil premium

### 🛡️ Fonctionnalités du compte

· ⚡ **Livraison instantanée** – Identifiants envoyés directement sur votre tableau de bord juste après l’achat

· 🧼 **Vérifié et fonctionnel** – Abonnements actifs vérifiés à 100 %

· 📺 **Qualité de streaming HD/4K** – Image d’une netteté exceptionnelle sur tous les appareils compatibles

· 🛠️ **Garantie de remplacement** – Assistance prioritaire et remplacements automatisés si nécessaire

### 📺 Ce que vous pouvez regarder en direct

· ⚽ **Matchs de Bundesliga et football**

· 🥊 **Boxe de championnat et soirées de combat en direct**

· 🥋 **Événements professionnels de MMA et de kickboxing**

· 🎥 **Documentaires exclusifs sur les athlètes, temps forts et rediffusions**`,specs:[[`Type de produit`,`Compte DAZN Premium`],[`Région / pays`,`Allemagne (DE)`],[`Garantie / accès`,`À vie`],[`Livraison`,`Livraison instantanée`]],images:[`images/9c56aa2e-c427-426d-b0ed-97bb10d50296/bw3-4d3a5ae5-3ba4-4551-82ac-744112f3c838.webp`]},"76f8e9cd-2a11-4ed0-8931-e9ad6394ad0c":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats France** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres promotionnelles disponibles

· 🇫🇷 **Région France** – Éligibilité aux promotions françaises

· 🔐 **Full Access (FA)** – Identifiants d’accès requis inclus

· ⚡ **Livraison instantanée** – Livraison après l’achat

· 🛠 **Assistance remplacement** – Selon les conditions de garantie de la boutique

· ⚠️ **Info promotions :** La disponibilité et la valeur des promotions peuvent varier et être modifiées par Uber Eats.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`France`],[`Livraison`,`Livraison instantanée`]],images:[`images/ed220e47-fd3f-4774-a7b9-839133cdf90d/image-144.webp`,`images/13e0a6d9-8915-44ef-af61-2ea11f7d44dc/26c0348e-e314-494d-bb69-6a9ee1cb1869.webp`]},"6e57ee7b-d1c9-403d-af92-b43d9425d949":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Espagne** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres promotionnelles actives disponibles

· 🇪🇸 **Région Espagne** – Éligibilité aux promotions espagnoles

· 🔐 **Full Access (FA)** – Identifiants d’accès requis inclus

· ⚡ **Livraison instantanée** – Aucune attente inutile

· 🛠 **Assistance remplacement** – Selon les conditions de garantie de la boutique

· ⚠️ **Info promotions :** Les promotions peuvent évoluer, expirer ou changer de valeur ; les offres disponibles peuvent donc varier d’un compte à l’autre.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Espagne`],[`Livraison`,`Livraison instantanée`]],images:[`images/e328150c-5838-483d-92ce-95232c382047/image-311.webp`]},"38fac5da-2a57-4731-878e-049f7d4ef5b9":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Pologne** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres actives disponibles

· 🇵🇱 **Région Pologne** – Éligibilité aux promotions polonaises

· 🔐 **Full Access (FA)** – Accès requis fourni

· ⚡ **Livraison instantanée** – Recevez vos identifiants immédiatement

· 🛠 **Assistance remplacement** – Selon les conditions de garantie de la boutique

· ⚠️ **Info promotions :** Les promotions exactes et leur valeur peuvent varier à mesure que les offres Uber Eats évoluent.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Pologne`],[`Livraison`,`Livraison instantanée`]],images:[`images/b01d6178-5484-40e4-8f99-fc82679c2c63/image-234.webp`]},"4251b35d-b5ce-4256-acc8-99469826e87b":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Allemagne** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres actives disponibles

· 🇩🇪 **Région Allemagne** – Éligibilité aux promotions allemandes

· 🔐 **Full Access (FA)** – Accès au compte fourni

· ⚡ **Livraison instantanée** – Prêt immédiatement après l’achat

· 🛠 **Assistance remplacement** – Selon les conditions de garantie de la boutique

· ⚠️ **Info promotions :** Les promotions exactes varient selon les comptes et peuvent changer ou expirer.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Allemagne`],[`Livraison`,`Livraison instantanée`]],images:[`images/6216d862-491c-4575-90b6-7a4790e1bbda/image-359.webp`]},"3dc32af4-ac2c-4774-8f64-6c183e19d31f":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Royaume-Uni** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres promotionnelles actives disponibles sur le compte

· 🇬🇧 **Région Royaume-Uni** – Éligibilité aux promotions britanniques

· 🔐 **Full Access (FA)** – Identifiants et accès requis au compte fournis

· ⚡ **Livraison instantanée** – Identifiants du compte transmis juste après l’achat

· 🛠 **Assistance remplacement** – Couverture selon les conditions de garantie de notre boutique

· ⚠️ **Info promotions :** Les promotions Uber Eats peuvent changer, évoluer ou expirer. Leur valeur exacte peut varier d’un compte à l’autre.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Royaume-Uni`],[`Livraison`,`Livraison instantanée`]],images:[`images/995a43bf-1fef-4a70-80fa-9da6a089aa84/image-207.webp`]},"f5753be4-e449-44db-b959-a61635fa2d91":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Irlande** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres promotionnelles actives

· 🇮🇪 **Région Irlande** – Éligibilité aux promotions irlandaises

· 🔐 **Full Access (FA)** – Accès requis fourni

· ⚡ **Livraison instantanée** – Livraison immédiate

· 🛠 **Assistance remplacement** – Selon les conditions de garantie

· ⚠️ **Info promotions :** Les promotions évoluent ; leur valeur exacte et leur disponibilité peuvent changer.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Irlande`],[`Livraison`,`Livraison instantanée`]],images:[`images/0d5337d6-c17f-44d4-b564-f676b04486f6/image-208.webp`]},"3a5":{description:``,specs:[],images:[]},"9f53fc9e-07a7-438a-b2da-2158a868b44b":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Pays-Bas** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres actives disponibles

· 🇳🇱 **Région Pays-Bas** – Éligibilité aux promotions néerlandaises

· 🔐 **Full Access (FA)** – Identifiants d’accès requis fournis

· ⚡ **Livraison instantanée** – Prêt immédiatement

· 🛠 **Assistance remplacement** – Selon les conditions de garantie de la boutique

· ⚠️ **Info promotions :** La disponibilité des promotions et le montant des réductions peuvent varier selon les comptes et évoluer avec le temps.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Pays-Bas`],[`Livraison`,`Livraison instantanée`]],images:[`images/10a51328-934e-4d4a-9215-43a2d1e7ee79/image-394.webp`]},"e1fed483-7875-4513-829f-52ada4ee6c44":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Suisse** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres promotionnelles actives disponibles

· 🇨🇭 **Région Suisse** – Éligibilité aux promotions suisses

· 🔐 **Full Access (FA)** – Identifiants d’accès au compte requis inclus

· ⚡ **Livraison instantanée** – Compte livré immédiatement

· 🛠 **Assistance remplacement** – Selon les conditions de garantie de notre boutique

· ⚠️ **Info promotions :** Les promotions peuvent évoluer, expirer ou changer de valeur. Les offres exactes peuvent varier d’un compte à l’autre.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Suisse`],[`Livraison`,`Livraison instantanée`]],images:[`images/9f354838-3ba3-4a66-a358-777636e933a1/image-158.webp`]},"a85fe397-dc20-4726-b9fc-d3103b2bfe2b":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats Canada** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres actives disponibles sur le compte

· 🇨🇦 **Région Canada** – Éligibilité aux promotions canadiennes

· 🔐 **Full Access (FA)** – Accès requis au compte fourni

· ⚡ **Livraison instantanée** – Livraison rapide et simple

· 🛠 **Assistance remplacement** – Selon les conditions de garantie

· ⚠️ **Info promotions :** Les réductions exactes ne sont pas fixes et peuvent varier au gré des promotions proposées par Uber Eats.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`Canada`],[`Livraison`,`Livraison instantanée`]],images:[`images/afaa6a19-f529-4e75-93dc-0944ac7e9bdf/image-155.webp`]},"ef769d65-5f3c-44f3-b33d-659670aacfc4":{description:`### ✅ Inclus

· 🍔 **Compte Uber Eats États-Unis** – Full Access inclus

· 🎁 **Promotions REPAS GRATUITS** – Offres promotionnelles actives disponibles

· 🇺🇸 **Région États-Unis** – Éligibilité aux promotions américaines

· 🔐 **Full Access (FA)** – Accès requis au compte inclus

· ⚡ **Livraison instantanée** – Aucune attente inutile

· 🛠 **Assistance remplacement** – Couverture selon les conditions de garantie de notre boutique

· ⚠️ **Info promotions :** Les promotions évoluent et les réductions exactes peuvent varier d’un compte à l’autre.`,specs:[[`Type de produit`,`Compte promotions Uber Eats`],[`Type de compte`,`Full Access (FA)`],[`Région`,`États-Unis`],[`Livraison`,`Livraison instantanée`]],images:[`images/96ff163e-c895-46bf-8de5-e9ff0a691217/image-038.webp`]},"849d47f1-bc1e-434e-95da-c74f1c6d667f":{description:`### 🤖 **Compte Claude AI – Accès 1 jour \\[ Échange instantané \\]**

Essayez **Claude** pendant une journée complète sans payer d’abonnement mensuel. Vous recevez un **lien d’échange + un code d’accès** ; ouvrez-le, activez-le et commencez à discuter avec les derniers modèles Claude — parfait pour un projet, un examen, une session de programmation ou simplement pour tester avant de vous engager.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`Compte Claude AI`],[`Durée`,`1 jour (24 heures)`],[`Méthode d’accès`,`Lien d’activation + code`],[`Livraison`,`Livraison instantanée`]],images:[`images/e46cc6cf-91aa-4e10-bcb9-1481acf74c5b/bw3-b3729f62-dd24-4b9c-8d5c-cea955e75e50.webp`,`images/5878b8c3-5134-41dc-b0ab-91d1395dd76f/2cf7b7b9-844f-4cc2-a3e9-9e96e9a19934.webp`]},"9fe84dd0-b2f8-4e3f-a15f-1f10cc754d5c":{description:`### 🤖 **Compte Claude AI – Accès 1 semaine \\[ Échange instantané \\]**

Profitez de sept jours complets de **Claude** — suffisamment pour terminer un projet, respecter une échéance ou le tester correctement dans votre flux de travail quotidien. Vous recevez un **lien d’échange + un code d’accès** ; activez-le et vous pouvez commencer.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`Compte Claude AI`],[`Durée`,`1 semaine (7 jours)`],[`Méthode d’accès`,`Lien d’activation + code`],[`Livraison`,`Livraison instantanée`]],images:[`images/78d269fd-c57f-4037-a676-0b885bf559d3/bw3-fb7e38cf-b578-4512-b1ce-dc353d39b9cb.webp`,`images/0e2f875d-e78c-42fa-bbbc-d1b1e2a626ac/db7be195-000d-49d0-afd9-f6c1ff39ac58.webp`]},"b4c72039-e34a-4e75-8c11-42691f3fffa4":{description:`### 🤖 **Compte Claude AI – Accès 1 mois \\[ Échange instantané \\]**

Profitez d’un mois complet de **Claude** pour vos activités quotidiennes — rédaction, programmation, recherche, études et bien plus. Vous recevez un **lien d’échange + un code d’accès**, activez-le et utilisez les derniers modèles Claude pendant **30 jours**.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`Compte Claude AI`],[`Durée`,`1 mois (30 jours)`],[`Méthode d’accès`,`Lien d’activation + code`],[`Livraison`,`Livraison instantanée`]],images:[`images/c98dcba5-f50a-443e-8014-e021cdfcc151/bw3-37662ba2-4d4e-4b59-bf1e-f373a9e7b21b.webp`,`images/b124a0cc-7c4c-4daf-a6b9-a543bf753979/9f0a4041-5a9f-4ac2-95a3-01a3da2c64fa.webp`]},"1c43ccdc-8bc3-48eb-8705-7f378d7f9bfc":{description:`### 🤖 **Compte Claude AI – Accès à vie \\[ Échange instantané \\]**

Payez une seule fois et oubliez les renouvellements mensuels. Vous recevez un **lien d’échange + un code d’accès** pour **Claude, sans date d’expiration définie de notre côté** — conçu pour les personnes qui utilisent Claude chaque jour et ne veulent pas payer mois après mois.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`Compte Claude AI`],[`Durée`,`À vie`],[`Méthode d’accès`,`Lien d’activation + code`],[`Livraison`,`Livraison instantanée`]],images:[`images/91b17e01-d286-4e66-9737-9b39da93bc9b/bw3-b809ff0b-6416-48a2-8b14-30506a0d4bfa.webp`,`images/ed4f9850-b4ca-42b0-bab9-fcf1a5279c8f/64dc8e0f-3756-434c-b785-0d3c515d2634.webp`]},"c1d5f84d-1081-4949-8552-70134eaa5700":{description:`### 🏀 **NBA 2K27 – PS5/PS4 numérique \\[ Édition Standard / Ultimate \\]**

Accédez immédiatement à **NBA 2K27** sur PS5 via un **profil PSN secondaire** qui possède déjà le jeu — pas d’attente, pas de préchargement, changez simplement de profil et jouez.

━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎮 **Fonctionnement**

- 📥 Vous recevez les identifiants d’un **profil PS5 sur lequel NBA 2K27 est déjà acheté**

- 🔄 Ajoutez-le comme **compte secondaire** sur votre propre console PS5

- ⚠️ Vous ne jouerez **pas sur votre propre profil** — vous **passerez sur le profil reçu** pour lancer et jouer à NBA 2K27

- 📲 Il s’agit d’une **méthode numérique par changement de compte**, et non d’un CD/DVD ou d’une clé

━━━━━━━━━━━━━━━━━━━━━━━━━━


### 🏆 **Éditions disponibles**

#### 🔹 Édition Standard

- 🏀 Jeu de base NBA 2K27 complet

- 🪙 **10 000 VC** inclus sur le compte


#### 🔹 Édition Ultimate

- 🪙 **245 000 VC au total** (10 000 + 100 000 + 135 000 VC) crédités sur le compte

- 🌟 Cartes de joueur MyTEAM – 98 OVR garanti (déc. 2026) et Invincible garanti (mai 2027)

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ✅ **Ce que vous obtenez**

- 🔐 Identifiants PSN sécurisés (e-mail : mot de passe)

- ⚡ Livraison instantanée après l’achat

- 🧼 Profil propre et inutilisé

- 🛠️ Assistance incluse et service après-vente à vie

- 🕒 Garantie de remplacement de 24 heures

━━━━━━━━━━━━━━━━━━━━━━━━━━


### ⚠️ **Remarques**

- Assurez-vous que votre console dispose de suffisamment d’espace libre avant le téléchargement

- Il s’agit d’un service numérique — une fois le profil livré et utilisé, la commande est considérée comme exécutée et ne peut pas être remboursée

- Fonctionne uniquement sur PS5/PS4`,specs:[[`Type de produit`,`NBA 2K27 (Standard/Ultimate)`],[`Plateforme`,`PS5 (numérique)`],[`Méthode d’accès`,`Basculement vers un profil PSN secondaire`],[`Livraison`,`Livraison instantanée`]],images:[`images/ed4fd4e3-484f-4748-866e-9f2140e93620/nba-detail-neutral.png`]},"ff3a5142-d8ea-47a7-8457-f50a0e90770d":{description:`### ⚽ **EA Sports FC 27 – PS5 Digital \\[ Standard / Ultimate / Ultimate Plus \\]**

Accédez immédiatement à **EA Sports FC 27** sur PS5 via un **profil PSN secondaire** qui possède déjà le jeu — pas d’attente ni de préchargement, il suffit de changer de profil et de jouer.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`EA FC 27 (Standard/Ultimate/Ultimate Plus)`],[`Plateforme`,`PS5 (numérique)`],[`Méthode d’accès`,`Basculement vers un profil PSN secondaire`],[`Livraison`,`Livraison instantanée`]],images:[`images/2e5d66d8-c612-406a-a7b0-2df4dc69b7c0/image-236.webp`]},"2768f690-a788-4300-942c-0ca3459e923d":{description:`### ⚽ **EA Sports FC 27 – PS5 Digital \\[ Standard / Ultimate / Ultimate Plus \\]**

Accédez immédiatement à **EA Sports FC 27** sur PS5 via un **profil PSN secondaire** qui possède déjà le jeu — pas d’attente ni de préchargement, il suffit de changer de profil et de jouer.

━━━━━━━━━━━━━━━━━━━━━━━━━━`,specs:[[`Type de produit`,`EA FC 27 (Standard/Ultimate/Ultimate Plus)`],[`Plateforme`,`PS5 (numérique)`],[`Méthode d’accès`,`Basculement vers un profil PSN secondaire`],[`Livraison`,`Livraison instantanée`]],images:[`images/2e5d66d8-c612-406a-a7b0-2df4dc69b7c0/image-236.webp`]}};function rl(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var il=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,al=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ol={};function sl(e,t){return((t||ol).jsx?al:il).test(e)}var cl=/[ \t\n\f\r]/g;function ll(e){return typeof e==`object`?e.type===`text`&&ul(e.value):ul(e)}function ul(e){return e.replace(cl,``)===``}var dl=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};dl.prototype.normal={},dl.prototype.property={},dl.prototype.space=void 0;function fl(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new dl(n,r,t)}function pl(e){return e.toLowerCase()}var ml=class{constructor(e,t){this.attribute=t,this.property=e}};ml.prototype.attribute=``,ml.prototype.booleanish=!1,ml.prototype.boolean=!1,ml.prototype.commaOrSpaceSeparated=!1,ml.prototype.commaSeparated=!1,ml.prototype.defined=!1,ml.prototype.mustUseProperty=!1,ml.prototype.number=!1,ml.prototype.overloadedBoolean=!1,ml.prototype.property=``,ml.prototype.spaceSeparated=!1,ml.prototype.space=void 0;var hl=s({boolean:()=>U,booleanish:()=>W,commaOrSpaceSeparated:()=>yl,commaSeparated:()=>vl,number:()=>G,overloadedBoolean:()=>_l,spaceSeparated:()=>K}),gl=0,U=bl(),W=bl(),_l=bl(),G=bl(),K=bl(),vl=bl(),yl=bl();function bl(){return 2**++gl}var xl=Object.keys(hl),Sl=class extends ml{constructor(e,t,n,r){let i=-1;if(super(e,t),Cl(this,`space`,r),typeof n==`number`)for(;++i<xl.length;){let e=xl[i];Cl(this,xl[i],(n&hl[e])===hl[e])}}};Sl.prototype.defined=!0;function Cl(e,t,n){n&&(e[t]=n)}function wl(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new Sl(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[pl(r)]=r,n[pl(a.attribute)]=r}return new dl(t,n,e.space)}var Tl=wl({properties:{ariaActiveDescendant:null,ariaAtomic:W,ariaAutoComplete:null,ariaBusy:W,ariaChecked:W,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:W,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:W,ariaFlowTo:K,ariaGrabbed:W,ariaHasPopup:null,ariaHidden:W,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:G,ariaLive:null,ariaModal:W,ariaMultiLine:W,ariaMultiSelectable:W,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:W,ariaReadOnly:W,ariaRelevant:null,ariaRequired:W,ariaRoleDescription:K,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:W,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function El(e,t){return t in e?e[t]:t}function Dl(e,t){return El(e,t.toLowerCase())}var Ol=wl({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:vl,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alpha:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:K,autoFocus:U,autoPlay:U,blocking:K,capture:null,charSet:null,checked:U,cite:null,className:K,closedBy:null,colorSpace:null,cols:G,colSpan:G,command:null,commandFor:null,content:null,contentEditable:W,controls:U,controlsList:K,coords:G|vl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:_l,draggable:W,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:K,height:G,hidden:_l,high:G,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:K,itemRef:K,itemScope:U,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:G,pattern:null,ping:K,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:K,required:U,reversed:U,rows:G,rowSpan:G,sandbox:K,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootCustomElementRegistry:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shadowRootSerializable:U,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:W,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:W,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:W,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:U,disablePictureInPicture:U,disableRemotePlayback:U,exportParts:vl,part:K,prefix:null,property:null,results:G,security:null,unselectable:null},space:`html`,transform:Dl}),kl=wl({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:yl,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:vl,g2:vl,glyphName:vl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:yl,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:yl,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:yl,rev:yl,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:yl,requiredFeatures:yl,requiredFonts:yl,requiredFormats:yl,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:yl,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:yl,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:yl,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:El}),Al=wl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),jl=wl({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:Dl}),Ml=wl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),Nl={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},Pl=/[A-Z]/g,Fl=/-[a-z]/g,Il=/^data[-\w.:]+$/i;function Ll(e,t){let n=pl(t),r=t,i=ml;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&Il.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(Fl,Rl);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!Fl.test(e)){let n=e.replace(Pl,q);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Sl}return new i(r,t)}function q(e){return`-`+e.toLowerCase()}function Rl(e){return e.charAt(1).toUpperCase()}var J=fl([Tl,Ol,Al,jl,Ml],`html`),Y=fl([Tl,kl,Al,jl,Ml],`svg`);function zl(e){return e.join(` `).trim()}var Bl=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),Vl=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(Bl());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Hl=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Ul=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Vl()),r=Hl();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Wl=Kl(`end`),Gl=Kl(`start`);function Kl(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function ql(e){let t=Gl(e),n=Wl(e);if(t&&n)return{start:t,end:n}}function Jl(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Xl(e.position):`start`in e||`end`in e?Xl(e):`line`in e||`column`in e?Yl(e):``}function Yl(e){return Zl(e&&e.line)+`:`+Zl(e&&e.column)}function Xl(e){return Yl(e&&e.start)+`-`+Yl(e&&e.end)}function Zl(e){return e&&typeof e==`number`?e:1}var Ql=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Jl(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Ql.prototype.file=``,Ql.prototype.name=``,Ql.prototype.reason=``,Ql.prototype.message=``,Ql.prototype.stack=``,Ql.prototype.column=void 0,Ql.prototype.line=void 0,Ql.prototype.ancestors=void 0,Ql.prototype.cause=void 0,Ql.prototype.fatal=void 0,Ql.prototype.place=void 0,Ql.prototype.ruleId=void 0,Ql.prototype.source=void 0;var $l=l(Ul(),1),eu={}.hasOwnProperty,tu=new Map,nu=/[A-Z]/g,ru=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),iu=new Set([`td`,`th`]);function au(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=gu(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=hu(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?Y:J,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=ou(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function ou(e,t,n){if(t.type===`element`)return su(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return cu(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return uu(e,t,n);if(t.type===`mdxjsEsm`)return lu(e,t);if(t.type===`root`)return du(e,t,n);if(t.type===`text`)return fu(e,t)}function su(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=Y,e.schema=i),e.ancestors.push(t);let a=Su(e,t.tagName,!1),o=_u(e,t),s=yu(e,t);return ru.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!ll(e)})),pu(e,o,a,t),mu(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function cu(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}Cu(e,t.position)}function lu(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Cu(e,t.position)}function uu(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=Y,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Su(e,t.name,!0),o=vu(e,t),s=yu(e,t);return pu(e,o,a,t),mu(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function du(e,t,n){let r={};return mu(r,yu(e,t)),e.create(t,e.Fragment,r,n)}function fu(e,t){return t.value}function pu(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function mu(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function hu(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function gu(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Gl(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function _u(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&eu.call(t.properties,i)){let a=bu(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&iu.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function vu(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Cu(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else Cu(e,t.position);else a=r.value===null||r.value;n[i]=a}return n}function yu(e,t){let n=[],r=-1,i=e.passKeys?new Map:tu;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=ou(e,a,o);s!==void 0&&n.push(s)}return n}function bu(e,t,n){let r=Ll(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?rl(n):zl(n)),r.property===`style`){let t=typeof n==`object`?n:xu(e,String(n));return e.stylePropertyNameCase===`css`&&(t=wu(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?Nl[r.property]||r.property:r.attribute,n]}}function xu(e,t){try{return(0,$l.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Ql("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`,r}}function Su(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=sl(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=sl(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return eu.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);Cu(e)}function Cu(e,t){let n=new Ql("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`,n}function wu(e){let t={},n;for(n in e)eu.call(e,n)&&(t[Tu(n)]=e[n]);return t}function Tu(e){let t=e.replace(nu,Eu);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function Eu(e){return`-`+e.toLowerCase()}var Du={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},Ou={};function ku(e,t){let n=t||Ou;return Au(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function Au(e,t,n){if(Mu(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return ju(e.children,t,n)}return Array.isArray(e)?ju(e,t,n):``}function ju(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Au(e[i],t,n);return r.join(``)}function Mu(e){return!!(e&&typeof e==`object`)}var Nu=document.createElement(`i`);function Pu(e){let t=`&`+e+`;`;Nu.innerHTML=t;let n=Nu.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function Fu(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Iu(e,t){return e.length>0?(Fu(e,e.length,0,t),e):t}var Lu={}.hasOwnProperty;function Ru(e){let t={},n=-1;for(;++n<e.length;)zu(t,e[n]);return t}function zu(e,t){let n;for(n in t){let r=(Lu.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Lu.call(r,a)||(r[a]=[]);let e=i[a];Bu(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Bu(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);Fu(e,0,0,r)}function Vu(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function Hu(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var Uu=Qu(/[A-Za-z]/),Wu=Qu(/[\dA-Za-z]/),Gu=Qu(/[#-'*+\--9=?A-Z^-~]/);function X(e){return e!==null&&(e<32||e===127)}var Ku=Qu(/\d/),qu=Qu(/[\dA-Fa-f]/),Ju=Qu(/[!-/:-@[-`{-~]/);function Z(e){return e!==null&&e<-2}function Yu(e){return e!==null&&(e<0||e===32)}function Q(e){return e===-2||e===-1||e===32}var Xu=Qu(/\p{P}|\p{S}/u),Zu=Qu(/\s/);function Qu(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function $u(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Wu(e.charCodeAt(n+1))&&Wu(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function ed(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Q(r)?(e.enter(n),s(r)):t(r)}function s(r){return Q(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}function td(e,t,n,r,i,a){let o=0;return s;function s(t){return a>0&&Q(t)?(e.enter(r),c(t)):l(t)}function c(t){return Q(t)&&o<a?(e.consume(t),o++,c):(e.exit(r),l(t))}function l(e){return o>=i?t(e):n(e)}}var nd={tokenize:rd};function rd(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),ed(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return Z(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var id=class{constructor(){this.index=new Map,this.map=[]}add(e,t,n){ad(this,e,t,n,!1)}addBefore(e,t,n){ad(this,e,t,n,!0)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function ad(e,t,n,r,i){if(n===0&&r.length===0)return;let a=e.index.get(t);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[t,n,r];e.map.push(o),e.index.set(t,o)}var od={tokenize:cd},sd={tokenize:ld};function cd(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;let c=new id;return c.add(a+1,0,t.events.slice(n)),c.add(n,s-n,[]),c.consume(t.events),l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(sd,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(sd,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return Z(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;let l=new id;l.add(a+1,0,t.events.slice(n)),l.add(n,e-n,[]),l.consume(t.events)}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ld(e,t,n){return ed(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function ud(e){if(e===null||Yu(e)||Zu(e))return 1;if(Xu(e))return 2}function dd(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var fd={name:`attention`,resolveAll:pd,tokenize:md};function pd(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]===`exit`&&e[i][1].type===`attentionSequence`&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;let a=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,o={...e[i][1].end},s={...e[n][1].start};hd(o,-a),hd(s,a);let c={type:a>1?`strongSequence`:`emphasisSequence`,start:o,end:{...e[i][1].end}},l={type:a>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:s},u={type:a>1?`strongText`:`emphasisText`,start:{...e[i][1].end},end:{...e[n][1].start}},d={type:a>1?`strong`:`emphasis`,start:{...c.start},end:{...l.end}};e[i][1].end={...c.start},e[n][1].start={...l.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=Iu(r,[[`enter`,e[i][1],t],[`exit`,e[i][1],t]])),r=Iu(r,[[`enter`,d,t],[`enter`,c,t],[`exit`,c,t],[`enter`,u,t]]),r=Iu(r,dd(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=Iu(r,[[`exit`,u,t],[`enter`,l,t],[`exit`,l,t],[`exit`,d,t]]);let f=0;e[n][1].end.offset-e[n][1].start.offset&&(f=2,r=Iu(r,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])),Fu(e,i-1,n-i+3,r),n=i+r.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function md(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ud(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=ud(o),u=!l||l===2&&i||n.includes(o)&&o!==42&&o!==95,d=!i||i===2&&l||n.includes(r)&&r!==42&&r!==95;return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function hd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var gd={name:`autolink`,tokenize:_d};function _d(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return Uu(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Wu(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Wu(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||X(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Gu(t)?(e.consume(t),l):n(t)}function u(e){return Wu(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Wu(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var vd={partial:!0,tokenize:$};function $(e,t,n){return r;function r(t){return Q(t)?ed(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||Z(e)?t(e):n(e)}}var yd={continuation:{tokenize:xd},exit:Sd,name:`blockQuote`,tokenize:bd};function bd(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Q(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function xd(e,t,n){let r=this;return i;function i(t){return Q(t)?ed(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(yd,t,n)(r)}}function Sd(e){e.exit(`blockQuote`)}var Cd={name:`characterEscape`,tokenize:wd};function wd(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Ju(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var Td={name:`characterReference`,tokenize:Ed};function Ed(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Wu,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=qu,u):(e.enter(`characterReferenceValue`),a=7,o=Ku,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Wu&&!Pu(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var Dd={partial:!0,tokenize:Od};function Od(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var kd={concrete:!0,name:`codeFenced`,tokenize:Ad};function Ad(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Q(t)?ed(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||Z(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(Dd,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||Z(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Q(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),ed(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||Z(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||Z(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Q(t)?ed(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||Z(t)?e.check(Dd,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||Z(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Q(t)?ed(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Q(t)?ed(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||Z(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}var jd={name:`codeIndented`,tokenize:Nd},Md={partial:!0,tokenize:Pd};function Nd(e,t,n){return r;function r(t){return e.enter(`codeIndented`),td(e,i,n,`linePrefix`,4,4)(t)}function i(t){return t===null?o(t):Z(t)?e.attempt(Md,i,o)(t):(e.enter(`codeFlowValue`),a(t))}function a(t){return t===null||Z(t)?(e.exit(`codeFlowValue`),i(t)):(e.consume(t),a)}function o(n){return e.exit(`codeIndented`),t(n)}}function Pd(e,t,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):Z(o)?(e.enter(`lineEnding`),e.consume(o),e.exit(`lineEnding`),i):td(e,t,a,`linePrefix`,4,4)(o)}function a(e){return Z(e)?i(e):n(e)}}var Fd={name:`codeText`,previous:Ld,resolve:Id,tokenize:Rd};function Id(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Ld(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function Rd(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):Z(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||Z(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var zd=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&Bd(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),Bd(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Bd(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);Bd(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);Bd(this.left,t.reverse())}}};function Bd(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Vd(e){let t={},n=-1,r,i,a,o,s,c,l,u=new zd(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Hd(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return Fu(e,0,1/0,u.slice(0)),!l}function Hd(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var Ud={resolve:Gd,tokenize:Kd},Wd={partial:!0,tokenize:qd};function Gd(e){return Vd(e),e}function Kd(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):Z(t)?e.check(Wd,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function qd(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ed(e,a,`linePrefix`)}function a(i){if(i===null||Z(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function Jd(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||X(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||Z(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||Yu(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||X(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Yd(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):Z(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||Z(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Q(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Xd(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):Z(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ed(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||Z(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Zd(e,t){let n;return r;function r(i){return Z(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Q(i)?ed(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var Qd={name:`definition`,tokenize:ef},$d={partial:!0,tokenize:tf};function ef(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Yd.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=Hu(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return Yu(t)?Zd(e,l)(t):l(t)}function l(t){return Jd(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt($d,d,d)(t)}function d(t){return Q(t)?ed(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||Z(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function tf(e,t,n){return r;function r(t){return Yu(t)?Zd(e,i)(t):n(t)}function i(t){return Xd(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Q(t)?ed(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||Z(e)?t(e):n(e)}}var nf={name:`hardBreakEscape`,tokenize:rf};function rf(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return Z(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var af={name:`headingAtx`,resolve:of,tokenize:sf};function of(e,t){let n=e.length-2,r=3;if(e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r){let i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`};Fu(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])}return e}function sf(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||Yu(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||Z(n)?(e.exit(`atxHeading`),t(n)):Q(n)?ed(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||Yu(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var cf=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),lf=[`pre`,`script`,`style`,`textarea`],uf={concrete:!0,name:`htmlFlow`,resolveTo:ff,tokenize:pf},df={partial:!0,tokenize:mf};function ff(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function pf(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:k):Uu(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):Uu(a)?(e.consume(a),i=4,r.interrupt?t:k):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:k):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return Uu(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||Yu(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&lf.includes(l)?(i=1,r.interrupt?t(s):D(s)):cf.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Wu(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return Q(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||Uu(t)?(e.consume(t),b):Q(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Wu(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Q(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Q(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||Z(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||Yu(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Q(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||Z(t)?D(t):Q(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),ie):t===60&&i===1?(e.consume(t),O):t===62&&i===4?(e.consume(t),A):t===63&&i===3?(e.consume(t),k):t===93&&i===5?(e.consume(t),oe):Z(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(df,se,te)(t)):t===null||Z(t)?(e.exit(`htmlFlowData`),te(t)):(e.consume(t),D)}function te(t){return e.check(Dd,ne,se)(t)}function ne(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),re}function re(t){return t===null||Z(t)?te(t):(e.enter(`htmlFlowData`),D(t))}function ie(t){return t===45?(e.consume(t),k):D(t)}function O(t){return t===47?(e.consume(t),o=``,ae):D(t)}function ae(t){if(t===62){let n=o.toLowerCase();return lf.includes(n)?(e.consume(t),A):D(t)}return Uu(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),ae):D(t)}function oe(t){return t===93?(e.consume(t),k):D(t)}function k(t){return t===62?(e.consume(t),A):t===45&&i===2?(e.consume(t),k):D(t)}function A(t){return t===null||Z(t)?(e.exit(`htmlFlowData`),se(t)):(e.consume(t),A)}function se(n){return e.exit(`htmlFlow`),t(n)}}function mf(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(vd,t,n)}}var hf={name:`htmlText`,tokenize:gf};function gf(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):Uu(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):Uu(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):Z(t)?(o=d,O(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?ie(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):Z(t)?(o=h,O(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?ie(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?ie(t):Z(t)?(o=v,O(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):Z(t)?(o=y,O(t)):(e.consume(t),y)}function b(e){return e===62?ie(e):y(e)}function x(t){return Uu(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Wu(t)?(e.consume(t),S):C(t)}function C(t){return Z(t)?(o=C,O(t)):Q(t)?(e.consume(t),C):ie(t)}function w(t){return t===45||Wu(t)?(e.consume(t),w):t===47||t===62||Yu(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),ie):t===58||t===95||Uu(t)?(e.consume(t),E):Z(t)?(o=T,O(t)):Q(t)?(e.consume(t),T):ie(t)}function E(t){return t===45||t===46||t===58||t===95||Wu(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):Z(t)?(o=ee,O(t)):Q(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,te):Z(t)?(o=D,O(t)):Q(t)?(e.consume(t),D):(e.consume(t),ne)}function te(t){return t===i?(e.consume(t),i=void 0,re):t===null?n(t):Z(t)?(o=te,O(t)):(e.consume(t),te)}function ne(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||Yu(t)?T(t):(e.consume(t),ne)}function re(e){return e===47||e===62||Yu(e)?T(e):n(e)}function ie(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function O(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ae}function ae(t){return Q(t)?ed(e,oe,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):oe(t)}function oe(t){return e.enter(`htmlTextData`),o(t)}}var _f={name:`labelEnd`,resolveAll:xf,resolveTo:Sf,tokenize:Cf},vf={tokenize:wf},yf={tokenize:Tf},bf={tokenize:Ef};function xf(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&Fu(e,0,e.length,n),e}function Sf(e,t){let n=e.length,r=0,i,a,o;for(;n--;){let t=e[n][1];if(i){if(t.type===`link`||t.type===`labelLink`&&t._inactive)break;e[n][0]===`enter`&&t.type===`labelLink`&&(t._inactive=!0)}else if(a){if(e[n][0]===`enter`&&(t.type===`labelImage`||t.type===`labelLink`)&&!t._balanced&&(i=n,t.type!==`labelLink`)){r=2;break}}else t.type===`labelEnd`&&(a=n)}let s={type:e[i][1].type===`labelLink`?`link`:`image`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}},c={type:`label`,start:{...e[i][1].start},end:{...e[a][1].end}},l={type:`labelText`,start:{...e[i+r+2][1].end},end:{...e[a-2][1].start}};return o=[[`enter`,s,t],[`enter`,c,t]],o=Iu(o,e.slice(i+1,i+r+3)),o=Iu(o,[[`enter`,l,t]]),o=Iu(o,dd(t.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),t)),o=Iu(o,[[`exit`,l,t],e[a-2],e[a-1],[`exit`,c,t]]),o=Iu(o,e.slice(a+1)),o=Iu(o,[[`exit`,s,t]]),Fu(e,i,e.length,o),e}function Cf(e,t,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(Hu(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(vf,u,o?u:d)(t):t===91?e.attempt(yf,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(bf,u,d)(t)}function u(e){return i.pop(),t(e)}function d(e){return a._balanced=!0,n(e)}}function wf(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return Yu(t)?Zd(e,a)(t):a(t)}function a(t){return t===41?u(t):Jd(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return Yu(t)?Zd(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Xd(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return Yu(t)?Zd(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function Tf(e,t,n){let r=this;return i;function i(t){return Yd.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(Hu(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function Ef(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var Df={name:`labelStartImage`,resolveAll:_f.resolveAll,tokenize:Of};function Of(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),o}function o(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelImage`),s):n(t)}function s(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var kf={name:`labelStartLink`,resolveAll:_f.resolveAll,tokenize:Af};function Af(e,t,n){let r=this,i;return a;function a(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),i=e.exit(`labelLink`),o}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(e))}}var jf={name:`lineEnding`,tokenize:Mf};function Mf(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),ed(e,t,`linePrefix`)}}var Nf={name:`thematicBreak`,tokenize:Pf};function Pf(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||Z(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Q(t)?ed(e,s,`whitespace`)(t):s(t))}}var Ff={continuation:{tokenize:zf},exit:Vf,name:`list`,tokenize:Rf},If={partial:!0,tokenize:Hf},Lf={partial:!0,tokenize:Bf};function Rf(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Ku(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(Nf,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Ku(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(vd,r.interrupt?n:u,e.attempt(If,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Q(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function zf(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(vd,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ed(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Q(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Lf,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,ed(e,e.attempt(Ff,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Bf(e,t,n){let r=this;return ed(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Vf(e){e.exit(this.containerState.type)}function Hf(e,t,n){let r=this;return ed(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Q(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Uf={name:`setextUnderline`,resolveTo:Wf,tokenize:Gf};function Wf(e,t){let n=new id,r=e.length,i,a,o;for(;r--;)if(e[r][0]===`enter`){if(e[r][1].type===`content`){i=r;break}e[r][1].type===`paragraph`&&(a=r)}else e[r][1].type===`content`&&n.add(r,1,[]),!o&&e[r][1].type===`definition`&&(o=r);let s={type:`setextHeading`,start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type=`setextHeadingText`,o?(n.add(a,0,[[`enter`,s,t]]),n.add(o+1,0,[[`exit`,e[i][1],t]]),e[i][1].end={...e[o][1].end}):e[i][1]=s,n.add(e.length,0,[[`exit`,s,t]]),n.consume(e),e}function Gf(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Q(t)?ed(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||Z(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Kf={tokenize:qf};function qf(e){let t=this,n=e.attempt(vd,r,e.attempt(this.parser.constructs.flowInitial,i,ed(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Ud,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Jf={resolveAll:Qf()},Yf=Zf(`string`),Xf=Zf(`text`);function Zf(e){return{resolveAll:Qf(e===`text`?$f:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Qf(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function $f(e,t){let n=new id,r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type===`lineEnding`)&&e[r-1][1].type===`data`){let i=e[r-1][1],a=t.sliceStream(i),o=a.length,s=-1,c=0,l;for(;o--;){let e=a[o];if(typeof e==`string`){for(s=e.length;e.charCodeAt(s-1)===32;)c++,s--;if(s)break;s=-1}else if(e===-2)l=!0,c++;else if(e!==-1){o++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(c=0),c){let a={type:r===e.length||l||c<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...a.start},i.start.offset===i.end.offset?Object.assign(i,a):n.add(r,0,[[`enter`,a,t],[`exit`,a,t]])}r++}return n.consume(e),e}var ep=s({attentionMarkers:()=>cp,contentInitial:()=>np,disable:()=>lp,document:()=>tp,flow:()=>ip,flowInitial:()=>rp,insideSpan:()=>sp,string:()=>ap,text:()=>op}),tp={42:Ff,43:Ff,45:Ff,48:Ff,49:Ff,50:Ff,51:Ff,52:Ff,53:Ff,54:Ff,55:Ff,56:Ff,57:Ff,62:yd},np={91:Qd},rp={[-2]:jd,[-1]:jd,32:jd},ip={35:af,42:Nf,45:[Uf,Nf],60:uf,61:Uf,95:Nf,96:kd,126:kd},ap={38:Td,92:Cd},op={[-5]:jf,[-4]:jf,[-3]:jf,33:Df,38:Td,42:fd,60:[gd,hf],91:kf,92:[nf,Cd],93:_f,95:fd,96:Fd},sp={null:[fd,Jf]},cp={null:[42,95]},lp={null:[]};function up(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=Iu(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=dd(a,l.events,l),l.events):[]}function f(e,t){return fp(p(e),t)}function p(e){return dp(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){for(;r._index<o.length;){let e=o[r._index];if(typeof e==`string`){let t=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===t&&r._bufferIndex<e.length;)_(e.charCodeAt(r._bufferIndex))}else _(e)}}function _(e){u=u(e)}function v(e){Z(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&Fu(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function dp(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function fp(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function pp(e){let t={constructs:Ru([ep,...(e||{}).extensions||[]]),content:n(nd),defined:[],document:n(od),flow:n(Kf),lazy:{},string:n(Yf),text:n(Xf)};return t;function n(e){return n;function n(n){return up(t,e,n)}}}function mp(e){for(;!Vd(e););return e}var hp=/[\0\t\n\r]/g;function gp(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i));let s=[],c=0;for(t=``,n&&=(i.charCodeAt(0)===65279&&c++,void 0);c<i.length;){hp.lastIndex=c;let n=hp.exec(i),a=n&&n.index!==void 0?n.index:i.length,o=i.charCodeAt(a);if(!n){t=i.slice(c);break}if(o===10&&c===a&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),c<a&&(s.push(i.slice(c,a)),e+=a-c),o){case 0:s.push(65533),e++;break;case 9:{let t=Math.ceil(e/4)*4;for(s.push(-2);e++<t;)s.push(-1);break}case 10:s.push(-4),e=1;break;default:r=!0,e=1}c=a+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var _p=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function vp(e){return e.replace(_p,yp)}function yp(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Vu(n.slice(t?2:1),t?16:10)}return Pu(n)||e}var bp={}.hasOwnProperty;function xp(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Sp(n)(mp(pp(n).document().write(gp()(e,t,!0))))}function Sp(e){let t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:o(Ce),autolinkProtocol:E,autolinkEmail:E,atxHeading:o(ye),blockQuote:o(me),characterEscape:E,characterReference:E,codeFenced:o(he),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(he,s),codeText:o(ge,s),codeTextData:E,data:E,codeFlowValue:E,definition:o(_e),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(ve),hardBreakEscape:o(be),hardBreakTrailing:o(be),htmlFlow:o(xe,s),htmlFlowData:E,htmlText:o(xe,s),htmlTextData:E,image:o(Se),label:s,link:o(Ce),listItem:o(Te),listItemValue:p,listOrdered:o(we,f),listUnordered:o(we),paragraph:o(Ee),reference:le,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(ye),strong:o(De),thematicBreak:o(ke)},exit:{atxHeading:l(),atxHeadingSequence:S,autolink:l(),autolinkEmail:pe,autolinkProtocol:fe,blockQuote:l(),characterEscapeValue:ee,characterReferenceMarkerHexadecimal:j,characterReferenceMarkerNumeric:j,characterReferenceValue:M,characterReference:de,codeFenced:l(_),codeFencedFence:g,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:ee,codeIndented:l(v),codeText:l(ie),codeTextData:ee,data:ee,definition:l(),definitionDestinationString:x,definitionLabelString:y,definitionTitleString:b,emphasis:l(),hardBreakEscape:l(te),hardBreakTrailing:l(te),htmlFlow:l(ne),htmlFlowData:ee,htmlText:l(re),htmlTextData:ee,image:l(ae),label:k,labelText:oe,lineEnding:D,link:l(O),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ue,resourceDestinationString:A,resourceTitleString:se,resource:ce,setextHeading:l(T),setextHeadingLineSequence:w,setextHeadingText:C,strong:l(),thematicBreak:l()}};wp(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[],position:void 0},o={stack:[r],tokenStack:[],config:t,enter:c,exit:u,buffer:s,resume:d,data:n},l=[],f=[],p=-1;for(;++p<e.length;)f.push(e[p]),(e[p][1].type===`listOrdered`||e[p][1].type===`listUnordered`)&&(e[p][0]===`enter`?l.push(f.length-1):a(f,l.pop()));for(e=f,p=-1;++p<e.length;){let n=t[e[p][0]];e[p][0]===`enter`&&t.beforeEnter.length>0&&i(t.beforeEnter,{...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1]),bp.call(n,e[p][1].type)&&n[e[p][1].type].call({...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1]),e[p][0]===`exit`&&t.afterExit.length>0&&i(t.afterExit,{...o,sliceSerialize:e[p][2].sliceSerialize},e[p][1])}if(o.tokenStack.length>0){let e=o.tokenStack[o.tokenStack.length-1];(e[1]||Ep).call(o,void 0,e[0])}for(r.position={start:Cp(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Cp(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},p=-1;++p<t.transforms.length;)r=t.transforms[p](r)||r;return r}function i(e,t,n){let r=-1;for(;++r<e.length;)e[r].call(t,n)}function a(e,t){let n=e.length-1,r=t-1,i=-1,a=!1,o,s,c,l,u=[];for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let n=r;for(s=void 0;n--;){let t=e[n];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=n}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),u.push({at:s||r,event:[`exit`,o,t[2]]})}if(t[1].type===`listItemPrefix`){let e={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=e,u.push({at:r,event:[`enter`,e,t[2]]}),c=void 0,l=!0}}}let d=e.splice(t),f=0;for(r=-1;++r<d.length;){for(;f<u.length&&u[f].at===t+r;)e.push(u[f++].event);e.push(d[r])}e[t][1]._spread=a}function o(e,t){return n;function n(n){c.call(this,e(n),n),t&&t.call(this,n)}}function s(){this.stack.push({type:`fragment`,children:[]})}function c(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Cp(t.start),end:void 0}}function l(e){return t;function t(t){e&&e.call(this,t),u.call(this,t)}}function u(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw Error("Cannot close `"+e.type+"` ("+Jl({start:e.start,end:e.end})+`): it’s not open`);r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Ep).call(this,e,r[0])),n.position.end=Cp(e.end)}function d(){return ku(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function h(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function v(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function y(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Hu(this.sliceSerialize(e)).toLowerCase()}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function x(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function S(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function C(){this.data.setextHeadingSlurpLineEnding=!0}function w(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function T(){this.data.setextHeadingSlurpLineEnding=void 0}function E(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Oe(),n.position={start:Cp(e.start),end:void 0},t.push(n)),this.stack.push(n)}function ee(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Cp(e.end)}function D(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Cp(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(E.call(this,e),ee.call(this,e))}function te(){this.data.atHardBreak=!0}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ie(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function O(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ae(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function oe(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=vp(t),n.identifier=Hu(t).toLowerCase()}function k(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function se(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function ce(){this.data.inReference=void 0}function le(){this.data.referenceType=`collapsed`}function ue(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Hu(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function j(e){this.data.characterReferenceType=e.type}function M(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Vu(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=Pu(t);let i=this.stack[this.stack.length-1];i.value+=r}function de(e){let t=this.stack.pop();t.position.end=Cp(e.end)}function fe(e){ee.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function pe(e){ee.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function me(){return{type:`blockquote`,children:[],position:void 0}}function he(){return{type:`code`,lang:null,meta:null,value:``,position:void 0}}function ge(){return{type:`inlineCode`,value:``,position:void 0}}function _e(){return{type:`definition`,identifier:``,label:null,title:null,url:``,position:void 0}}function ve(){return{type:`emphasis`,children:[],position:void 0}}function ye(){return{type:`heading`,depth:0,children:[],position:void 0}}function be(){return{type:`break`,position:void 0}}function xe(){return{type:`html`,value:``,position:void 0}}function Se(){return{type:`image`,title:null,url:``,alt:null,position:void 0}}function Ce(){return{type:`link`,title:null,url:``,children:[],position:void 0}}function we(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[],position:void 0}}function Te(e){return{type:`listItem`,spread:e._spread,checked:null,children:[],position:void 0}}function Ee(){return{type:`paragraph`,children:[],position:void 0}}function De(){return{type:`strong`,children:[],position:void 0}}function Oe(){return{type:`text`,value:``,position:void 0}}function ke(){return{type:`thematicBreak`,position:void 0}}}function Cp(e){return{line:e.line,column:e.column,offset:e.offset}}function wp(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?wp(e,r):Tp(e,r)}}function Tp(e,t){let n;for(n in t)if(bp.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`afterExit`:case`beforeEnter`:{let r=t[n];r&&e[n].push(r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Ep(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Jl({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Jl({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Jl({start:t.start,end:t.end})+`) is still open`)}function Dp(e){let t=this;t.parser=n;function n(n){return xp(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function Op(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function kp(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function Ap(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function jp(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mp(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Np(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=$u(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Pp(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fp(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ip(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function Lp(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ip(e,t);let i={src:$u(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Rp(e,t){let n={src:$u(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function zp(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Bp(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ip(e,t);let i={href:$u(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Vp(e,t){let n={href:$u(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Hp(e,t,n){let r=e.all(t),i=n?Up(n):Wp(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Up(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Wp(n[r])}return t}function Wp(e){return e.spread??e.children.length>1}function Gp(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Kp(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qp(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Jp(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Yp(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Gl(t.children[1]),o=Wl(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Xp(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Zp(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Qp=9,$p=32;function em(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(tm(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(tm(t.slice(i),i>0,!1)),a.join(``)}function tm(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Qp||t===$p;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Qp||t===$p;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function nm(e,t){let n={type:`text`,value:em(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function rm(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var im={blockquote:Op,break:kp,code:Ap,delete:jp,emphasis:Mp,footnoteReference:Np,heading:Pp,html:Fp,imageReference:Lp,image:Rp,inlineCode:zp,linkReference:Bp,link:Vp,listItem:Hp,list:Gp,paragraph:Kp,root:qp,strong:Jp,table:Yp,tableCell:Zp,tableRow:Xp,text:nm,thematicBreak:rm,toml:am,yaml:am,definition:am,footnoteDefinition:am};function am(){}var{defineProperty:om}=Object,sm=typeof self==`object`?self:globalThis,cm=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new sm[e](t)},lm=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?om(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof sm[e]==`function`?cm(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}case`-0`:return-0}return n(cm(a,o),i)};return r},um=e=>lm(new Map,e)(0),dm=``,{toString:fm}={},{keys:pm,is:mm}=Object,hm=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=fm.call(e).slice(8,-1);switch(n){case`Array`:return[1,dm];case`Object`:return[2,dm];case`Date`:return[3,dm];case`RegExp`:return[4,dm];case`Map`:return[5,dm];case`Set`:return[6,dm];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},gm=([e,t])=>e===0&&(t===`function`||t===`symbol`),_m=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=o=>{if(n.has(o))return n.get(o);let[s,c]=hm(o);switch(s){case 0:{let t=o;switch(c){case`bigint`:s=8,t=o.toString();break;case`number`:if(!o&&mm(o,-0))return r.push([`-0`])-1;break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+c);t=null;break;case`undefined`:return i([-1],o)}return i([s,t],o)}case 1:{if(c){let e=o;return c===`DataView`?e=new Uint8Array(o.buffer):c===`ArrayBuffer`&&(e=new Uint8Array(o)),i([c,[...e]],o)}let e=[],t=i([s,e],o);for(let t of o)e.push(a(t));return t}case 2:{if(c)switch(c){case`BigInt`:return i([c,o.toString()],o);case`Boolean`:case`Number`:case`String`:return i([c,o.valueOf()],o)}if(t&&`toJSON`in o)return a(o.toJSON());let n=[],r=i([s,n],o);for(let t of pm(o))(e||!gm(hm(o[t])))&&n.push([a(t),a(o[t])]);return r}case 3:return i([s,isNaN(o.getTime())?dm:o.toISOString()],o);case 4:{let{source:e,flags:t}=o;return i([s,{source:e,flags:t}],o)}case 5:{let t=[],n=i([s,t],o);for(let[n,r]of o)(e||!(gm(hm(n))||gm(hm(r))))&&t.push([a(n),a(r)]);return n}case 6:{let t=[],n=i([s,t],o);for(let n of o)(e||!gm(hm(n)))&&t.push(a(n));return n}}let{message:l}=o;return i([s,{name:c,message:l}],o)};return a},vm=(e,{json:t,lossy:n}={})=>{let r=[];return _m(!(t||n),!!t,new Map,r)(e),r},ym=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?um(vm(e,t)):structuredClone(e):(e,t)=>um(vm(e,t));function bm(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function xm(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Sm(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||bm,r=e.options.footnoteBackLabel||xm,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=$u(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...ym(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Cm=(function(e){if(e==null)return Om;if(typeof e==`function`)return Dm(e);if(typeof e==`object`)return Array.isArray(e)?wm(e):Tm(e);if(typeof e==`string`)return Em(e);throw Error(`Expected function, string, or object as test`)});function wm(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Cm(e[n]);return Dm(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Tm(e){let t=e;return Dm(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Em(e){return Dm(t);function t(t){return t&&t.type===e}}function Dm(e){return t;function t(t,n,r){return!!(km(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Om(){return!0}function km(e){return typeof e==`object`&&!!e&&`type`in e}function Am(e){return e}var jm=[];function Mm(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Cm(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+Am(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=jm,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=Nm(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function Nm(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?jm:[e]}function Pm(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Mm(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var Fm={}.hasOwnProperty,Im={};function Lm(e,t){let n=t||Im,r=new Map,i=new Map,a={all:s,applyData:zm,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...im,...n.handlers},one:o,options:n,patch:Rm,wrap:Vm};return Pm(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(Fm.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=ym(n);return r.children=a.all(e),r}return ym(e)}return(a.options.unknownHandler||Bm)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Hm(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Hm(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Rm(e,t){e.position&&(t.position=ql(e))}function zm(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,ym(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Bm(e,t){let n=t.data||{},r=`value`in t&&!(Fm.call(n,`hProperties`)||Fm.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Vm(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Hm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Um(e,t){let n=Lm(e,t),r=n.one(e,void 0),i=Sm(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function Wm(e,t){return e&&`run`in e?async function(n,r){let i=Um(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Um(n,{file:r,...e||t})}}function Gm(e){if(e)throw e}var Km=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function qm(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Jm(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Ym(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Ym(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Xm={basename:Zm,dirname:Qm,extname:$m,join:eh,sep:`/`};function Zm(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);rh(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Qm(e){if(rh(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function $m(e){rh(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function eh(...e){let t=-1,n;for(;++t<e.length;)rh(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:th(n)}function th(e){rh(e);let t=e.codePointAt(0)===47,n=nh(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function nh(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1)if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function rh(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var ih={cwd:ah};function ah(){return`/`}function oh(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function sh(e){if(typeof e==`string`)e=new URL(e);else if(!oh(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return ch(e)}function ch(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var lh=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],uh=class{constructor(e){let t;t=e?oh(e)?{path:e}:typeof e==`string`||mh(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:ih.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<lh.length;){let e=lh[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)lh.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Xm.basename(this.path):void 0}set basename(e){fh(e,`basename`),dh(e,`basename`),this.path=Xm.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Xm.dirname(this.path):void 0}set dirname(e){ph(this.basename,`dirname`),this.path=Xm.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Xm.extname(this.path):void 0}set extname(e){if(dh(e,`extname`),ph(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Xm.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){oh(e)&&(e=sh(e)),fh(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Xm.basename(this.path,this.extname):void 0}set stem(e){fh(e,`stem`),dh(e,`stem`),this.path=Xm.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Ql(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function dh(e,t){if(e&&e.includes(Xm.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Xm.sep+"`")}function fh(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function ph(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function mh(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var hh=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),gh=l(Km(),1),_h={}.hasOwnProperty,vh=new class e extends hh{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Jm()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,gh.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(xh(`data`,this.frozen),this.namespace[e]=t,this):_h.call(this.namespace,e)&&this.namespace[e]||void 0:e?(xh(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=wh(e),n=this.parser||this.Parser;return yh(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),yh(`process`,this.parser||this.Parser),bh(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=wh(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);Eh(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),yh(`processSync`,this.parser||this.Parser),bh(`processSync`,this.compiler||this.Compiler),this.process(e,r),Ch(`processSync`,`process`,t),n;function r(e,r){t=!0,Gm(e),n=r}}run(e,t,n){Sh(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=wh(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Ch(`runSync`,`run`,n),r;function i(e,t){Gm(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=wh(t),r=this.compiler||this.Compiler;return bh(`stringify`,r),Sh(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(xh(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,gh.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];qm(o)&&qm(r)&&(r=(0,gh.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function yh(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function bh(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function xh(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Sh(e){if(!qm(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Ch(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function wh(e){return Th(e)?e:new uh(e)}function Th(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function Eh(e){return typeof e==`string`||Dh(e)}function Dh(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Oh=[],kh={allowDangerousHtml:!0},Ah=/^(https?|ircs?|mailto|xmpp)$/i,jh=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Mh(e){let t=Nh(e),n=Ph(e);return Fh(t.runSync(t.parse(n),n),e)}function Nh(e){let t=e.rehypePlugins||Oh,n=e.remarkPlugins||Oh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...kh}:kh;return vh().use(Dp).use(n).use(Wm,r).use(t)}function Ph(e){let t=e.children||``,n=new uh;return typeof t==`string`?n.value=t:``+t,n}function Fh(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||Ih;for(let e of jh)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return Pm(e,l),au(e,{Fragment:P.Fragment,components:i,ignoreInvalidStyle:!0,jsx:P.jsx,jsxs:P.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in Du)if(Object.hasOwn(Du,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=Du[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function Ih(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Ah.test(e.slice(0,t))?e:``}function Lh(e){let t=e.match(/\d+/);return t?parseInt(t[0],10):0}var Rh=[[`44eee42a-0454-4d42-a88e-020c84e3dff2`,`ff3a5142-d8ea-47a7-8457-f50a0e90770d`,`2768f690-a788-4300-942c-0ca3459e923d`],[`5f5f5ee3-ad36-44d9-baec-10c5c4720537`],[`933b42af-0e05-4144-9ac6-86765b2647e5`,`c1d5f84d-1081-4949-8552-70134eaa5700`]];function zh({productId:e}){let t=Jc.products.find(t=>t.id===e),n=nl[t.id],r=Rh.find(e=>e.includes(t.id)),i=r?r.map(e=>Jc.products.find(t=>t.id===e)).filter(e=>!!e):[t],a=t.name,o=n?.images?.length?n.images:[t.image],[s,c]=(0,N.useState)(0),[l,u]=(0,N.useState)(t.id),[d,f]=(0,N.useState)(1),[p,m]=(0,N.useState)(!1),{addItem:h}=Ya(),g=i.find(e=>e.id===l)??t,_=Math.max(1,Lh(g.stock)),v=(g.priceValue*d).toFixed(2),y=n?.specs??[];return(0,P.jsxs)(`div`,{className:`products-page product-detail-page`,children:[(0,P.jsx)(Fc,{onCart:()=>m(!0)}),(0,P.jsxs)(`main`,{className:`wrap pd-main`,children:[(0,P.jsx)(L,{to:`/products`,className:`pd-back`,children:`← Retour aux produits`}),(0,P.jsxs)(`div`,{className:`pd-shell`,children:[(0,P.jsxs)(`div`,{className:`pd-left`,children:[(0,P.jsx)(`img`,{className:`pd-image`,src:o[s]??t.image,alt:a}),o.length>1&&(0,P.jsx)(`div`,{className:`pd-thumbs`,children:o.map((e,t)=>(0,P.jsx)(`button`,{type:`button`,className:t===s?`active`:``,onClick:()=>c(t),children:(0,P.jsx)(`img`,{src:e,alt:``})},e))}),(0,P.jsx)(`article`,{className:`pd-card pd-desc`,children:(0,P.jsx)(Mh,{components:{a:e=>(0,P.jsx)(`a`,{...e,target:`_blank`,rel:`noreferrer`})},children:n?.description??``})})]}),(0,P.jsxs)(`div`,{className:`pd-right`,children:[(0,P.jsxs)(`span`,{className:`pd-badge`,children:[(0,P.jsx)(To,{size:12}),` Livraison instantanée`]}),(0,P.jsx)(`h1`,{className:`pd-title`,children:a}),y.length>0&&(0,P.jsxs)(`section`,{className:`pd-card`,children:[(0,P.jsx)(`h2`,{className:`pd-card-title`,children:`Caractéristiques`}),(0,P.jsx)(`div`,{className:`pd-specs`,children:y.map(([e,t])=>(0,P.jsxs)(`div`,{className:`pd-spec`,children:[(0,P.jsx)(`span`,{children:e}),(0,P.jsx)(`strong`,{children:t})]},e))})]}),(0,P.jsxs)(`section`,{className:`pd-card`,children:[(0,P.jsx)(`h2`,{className:`pd-card-title`,children:`Achat`}),i.length>1&&(0,P.jsx)(`span`,{className:`pd-label`,children:`Choisir le type de compte`}),(0,P.jsx)(`div`,{className:`pd-options`,children:i.map(e=>(0,P.jsxs)(`button`,{type:`button`,className:`pd-option${e.id===g.id?` active`:``}`,onClick:()=>{u(e.id),f(1)},children:[(0,P.jsx)(`div`,{className:`pd-option-top`,children:(0,P.jsx)(`span`,{children:e.name})}),(0,P.jsxs)(`strong`,{children:[e.priceValue.toFixed(2).replace(`.`,`,`),` €`,e.onSale&&e.originalPrice&&(0,P.jsxs)(`s`,{children:[` `,e.originalPrice]})]})]},e.id))}),(0,P.jsx)(`span`,{className:`pd-label`,children:`Choisir la quantité`}),(0,P.jsxs)(`div`,{className:`pd-qty`,children:[(0,P.jsx)(`button`,{type:`button`,"aria-label":`Diminuer`,onClick:()=>f(e=>Math.max(1,e-1)),children:(0,P.jsx)(Co,{size:13})}),(0,P.jsx)(`input`,{value:d,onChange:e=>{let t=parseInt(e.currentTarget.value,10);f(Number.isNaN(t)?1:Math.min(_,Math.max(1,t)))},"aria-label":`Quantité`}),(0,P.jsx)(`button`,{type:`button`,"aria-label":`Augmenter`,onClick:()=>f(e=>Math.min(_,e+1)),children:(0,P.jsx)(wo,{size:13})})]}),(0,P.jsx)(`span`,{className:`pd-label`,children:`Total`}),(0,P.jsxs)(`div`,{className:`pd-total`,children:[v.replace(`.`,`,`),` €`]}),(0,P.jsxs)(`div`,{className:`pd-actions`,children:[(0,P.jsxs)(`button`,{type:`button`,className:`pd-cart`,onClick:()=>{h({id:g.id,name:g.name,image:g.image,priceValue:g.priceValue,quantity:d,maxQuantity:_}),m(!0)},children:[`Ajouter au panier `,(0,P.jsx)(Oo,{size:14})]}),(0,P.jsxs)(`button`,{type:`button`,className:`pd-buy`,onClick:()=>{h({id:g.id,name:g.name,image:g.image,priceValue:g.priceValue,quantity:d,maxQuantity:_}),m(!0)},children:[`Acheter `,(0,P.jsx)(bo,{size:14})]})]})]})]})]})]}),(0,P.jsx)(Hc,{}),(0,P.jsx)(Uc,{open:p,onClose:()=>m(!1)})]})}var Bh=ua(`/product/$id`)({loader:({params:e})=>{let t=Jc.products.find(t=>t.id===e.id);if(!t)throw St();return{product:t}},head:({loaderData:e})=>{let t=e?.product.name??`Produit`,n=`Achetez ${t} sur Anes Shop — livraison instantanée et support à vie.`;return{meta:[{title:`${t} — Anes Shop`},{name:`description`,content:n},{property:`og:title`,content:`${t} — Anes Shop`},{property:`og:description`,content:n},{property:`og:type`,content:`product`},{name:`twitter:card`,content:`summary_large_image`},...e&&/^https:\/\//.test(e.product.image)?[{property:`og:image`,content:e.product.image},{name:`twitter:image`,content:e.product.image}]:[]]}},component:()=>{let{product:e}=Bh.useLoaderData();return(0,P.jsx)(zh,{productId:e.id})}}),Vh={IndexRoute:Kc.update({id:`/`,path:`/`,getParentRoute:()=>oo}),ProductsRoute:el.update({id:`/products`,path:`/products`,getParentRoute:()=>oo}),ProductIdRoute:Bh.update({id:`/product/$id`,path:`/product/$id`,getParentRoute:()=>oo})},Hh=oo._addFileChildren(Vh)._addFileTypes(),Uh=new Le,Wh=Ea({routeTree:Hh,history:An(),context:{queryClient:Uh},scrollRestoration:!0});(0,Ha.createRoot)(document.getElementById(`root`)).render((0,P.jsx)(N.StrictMode,{children:(0,P.jsx)(ka,{router:Wh})}));