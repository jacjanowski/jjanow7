(window.webpackJsonp_spotim_registration=window.webpackJsonp_spotim_registration||[]).push([[0],{20:function(t,e,r){t.exports=r(68)},204:function(t,e,r){"use strict";var n=r(42);var o=function(){this.__data__=new n.a,this.size=0};var i=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var a=function(t){return this.__data__.get(t)};var c=function(t){return this.__data__.has(t)},u=r(55),s=r(65);var f=function(t,e){var r=this.__data__;if(r instanceof n.a){var o=r.__data__;if(!u.a||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new s.a(o)}return r.set(t,e),this.size=r.size,this};function l(t){var e=this.__data__=new n.a(t);this.size=e.size}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=a,l.prototype.has=c,l.prototype.set=f;var p=l,h=r(53),v=function(){try{var t=Object(h.a)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var y=function(t,e,r){"__proto__"==e&&v?v(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},d=r(40);var b=function(t,e,r){(void 0!==r&&!Object(d.a)(t[e],r)||void 0===r&&!(e in t))&&y(t,e,r)};var g=function(t){return function(e,r,n){for(var o=-1,i=Object(e),a=n(e),c=a.length;c--;){var u=a[t?c:++o];if(!1===r(i[u],u,i))break}return e}}(),_=r(77),m=r(34).a.Uint8Array;var j=function(t){var e=new t.constructor(t.byteLength);return new m(e).set(new m(t)),e};var w=function(t,e){var r=e?j(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var O=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e},x=r(32),T=Object.create,S=function(){function t(){}return function(e){if(!Object(x.a)(e))return{};if(T)return T(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var E=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object),k=Object.prototype;var P=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||k)};var A=function(t){return"function"!=typeof t.constructor||P(t)?{}:S(E(t))},L=r(39),I=r(35);var N=function(t){return Object(I.a)(t)&&"[object Arguments]"==Object(L.a)(t)},F=Object.prototype,z=F.hasOwnProperty,M=F.propertyIsEnumerable,C=N(function(){return arguments}())?N:function(t){return Object(I.a)(t)&&z.call(t,"callee")&&!M.call(t,"callee")},G=r(36),U=r(44);var R=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var V=function(t){return null!=t&&R(t.length)&&!Object(U.a)(t)};var q=function(t){return Object(I.a)(t)&&V(t)},B=r(56),W=Function.prototype,D=Object.prototype,$=W.toString,K=D.hasOwnProperty,J=$.call(Object);var Y=function(t){if(!Object(I.a)(t)||"[object Object]"!=Object(L.a)(t))return!1;var e=E(t);if(null===e)return!0;var r=K.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&$.call(r)==J},H={};H["[object Float32Array]"]=H["[object Float64Array]"]=H["[object Int8Array]"]=H["[object Int16Array]"]=H["[object Int32Array]"]=H["[object Uint8Array]"]=H["[object Uint8ClampedArray]"]=H["[object Uint16Array]"]=H["[object Uint32Array]"]=!0,H["[object Arguments]"]=H["[object Array]"]=H["[object ArrayBuffer]"]=H["[object Boolean]"]=H["[object DataView]"]=H["[object Date]"]=H["[object Error]"]=H["[object Function]"]=H["[object Map]"]=H["[object Number]"]=H["[object Object]"]=H["[object RegExp]"]=H["[object Set]"]=H["[object String]"]=H["[object WeakMap]"]=!1;var Q=function(t){return Object(I.a)(t)&&R(t.length)&&!!H[Object(L.a)(t)]};var X=function(t){return function(e){return t(e)}},Z=r(76),tt=Z.a&&Z.a.isTypedArray,et=tt?X(tt):Q;var rt=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]},nt=Object.prototype.hasOwnProperty;var ot=function(t,e,r){var n=t[e];nt.call(t,e)&&Object(d.a)(n,r)&&(void 0!==r||e in t)||y(t,e,r)};var it=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var c=e[i],u=n?n(r[c],t[c],c,r,t):void 0;void 0===u&&(u=t[c]),o?y(r,c,u):ot(r,c,u)}return r};var at=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},ct=/^(?:0|[1-9]\d*)$/;var ut=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ct.test(t))&&t>-1&&t%1==0&&t<e},st=Object.prototype.hasOwnProperty;var ft=function(t,e){var r=Object(G.a)(t),n=!r&&C(t),o=!r&&!n&&Object(B.a)(t),i=!r&&!n&&!o&&et(t),a=r||n||o||i,c=a?at(t.length,String):[],u=c.length;for(var s in t)!e&&!st.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||ut(s,u))||c.push(s);return c};var lt=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},pt=Object.prototype.hasOwnProperty;var ht=function(t){if(!Object(x.a)(t))return lt(t);var e=P(t),r=[];for(var n in t)("constructor"!=n||!e&&pt.call(t,n))&&r.push(n);return r};var vt=function(t){return V(t)?ft(t,!0):ht(t)};var yt=function(t){return it(t,vt(t))};var dt=function(t,e,r,n,o,i,a){var c=rt(t,r),u=rt(e,r),s=a.get(u);if(s)b(t,r,s);else{var f=i?i(c,u,r+"",t,e,a):void 0,l=void 0===f;if(l){var p=Object(G.a)(u),h=!p&&Object(B.a)(u),v=!p&&!h&&et(u);f=u,p||h||v?Object(G.a)(c)?f=c:q(c)?f=O(c):h?(l=!1,f=Object(_.a)(u,!0)):v?(l=!1,f=w(u,!0)):f=[]:Y(u)||C(u)?(f=c,C(c)?f=yt(c):Object(x.a)(c)&&!Object(U.a)(c)||(f=A(u))):l=!1}l&&(a.set(u,f),o(f,u,n,i,a),a.delete(u)),b(t,r,f)}};var bt=function t(e,r,n,o,i){e!==r&&g(r,(function(a,c){if(i||(i=new p),Object(x.a)(a))dt(e,r,c,n,t,o,i);else{var u=o?o(rt(e,c),a,c+"",e,r,i):void 0;void 0===u&&(u=a),b(e,c,u)}}),vt)};var gt=function(t){return t};var _t=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},mt=Math.max;var jt=function(t,e,r){return e=mt(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=mt(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=n[o];return c[e]=r(a),_t(t,this,c)}};var wt=function(t){return function(){return t}},Ot=v?function(t,e){return v(t,"toString",{configurable:!0,enumerable:!1,value:wt(e),writable:!0})}:gt,xt=Date.now;var Tt=function(t){var e=0,r=0;return function(){var n=xt(),o=16-(n-r);if(r=n,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Ot);var St=function(t,e){return Tt(jt(t,e,gt),t+"")};var Et=function(t,e,r){if(!Object(x.a)(r))return!1;var n=typeof e;return!!("number"==n?V(r)&&ut(e,r.length):"string"==n&&e in r)&&Object(d.a)(r[e],t)};var kt=function(t){return St((function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Et(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var c=r[n];c&&t(e,c,n,i)}return e}))}((function(t,e,r){bt(t,e,r)}));e.a=kt},21:function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},22:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"authenticationVersion",(function(){return m})),r.d(e,"getBaseUrl",(function(){return y})),r.d(e,"requestV1",(function(){return g}));var n=r(204),o=r(6),i=r.n(o),a=r(78),c=r(12),u=r.n(c),s=r(0),f=r.n(s);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}!function(){const e={PACKAGE_VERSION:"1.1.5"};try{if(t)return t.env=Object.assign({},t.env),void Object.assign(t.env,e)}catch(t){}globalThis.process={env:e}}();"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function p(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}var h=i()("null","@spotim/request-v1");var v={development:"https://v2.staging-spot.im/api/",staging:"https://v2.staging-spot.im/api/",production:"https://www.spot.im/api/"}[function(){return window.__SPOTIMENV__||"production"}()];function y(t){return void 0===t&&(t={}),t.baseURL||f.a.get("tenant_config.request.use_v1_base_url",!1)&&f.a.get("tenant_config.request.v1_base_url","")||v}var d,b=function(t,e){try{var r=m===_;return Promise.resolve(function(){try{return Promise.resolve(u.a.getAsyncToken()).then((function(t){var e=t.token;try{return{spotimToken:e,accessToken:localStorage.getItem("SPOTIM_ACCESS_TOKEN"),openWebAccessToken:localStorage.getItem("OPENWEB_ACCESS_TOKEN")}}catch(t){return h.error("getAuthTokens",t),{}}}))}catch(t){return Promise.reject(t)}}()).then((function(n){var o,i,a,c,u,s=n.spotimToken,p=n.openWebAccessToken,v=function(){try{var t=localStorage.getItem("SPOTIM_DEVICE_UUID_V2");if(t){var e=JSON.parse(t);if(e)return e.uuid}}catch(t){return h.error("getDeviceUuid",t),null}}(),y=window.__SPOTIM_PAGE_VIEW_ID__;t.headers=l(((o={})["x-spotim-spotid"]=f.a.get("spotId"),o),r&&p?((i={})["x-openweb-token"]=p,i):{},s?((a={})["x-spotim-token"]=s,a):{},v?((c={})["x-spotim-device-uuid"]=v,c):{},y?((u={})["x-spotim-page-view-id"]=y,u):{},t.headers),"b28a-393fbf2f8526"===s&&h.error("requestV1","request sent with fake user token",{url:e})}))}catch(t){return Promise.reject(t)}},g=function t(e,r){void 0===r&&(r={});try{var o=Object(n.a)({},j,r,w);return Promise.resolve(b(o,e)).then((function(){var r=y(o);return p((function(){return Promise.resolve(fetch(""+r+e,o)).then((function(e){if(function(t){!function(t){var e=t.openWebAccessToken,r=t.spotimAccessToken;try{e&&localStorage.setItem("OPENWEB_ACCESS_TOKEN",e),r&&localStorage.setItem("SPOTIM_ACCESS_TOKEN",r)}catch(t){h.error("setAuthTokens",t)}}({openWebAccessToken:t.headers.get("x-openweb-token"),spotimAccessToken:t.headers.get("x-access-token")})}(e),204!==e.status)return Promise.resolve(e.json()).then((function(r){if(e.ok){var n=function(){if(!1===r.success&&Object.values(d).includes(r.type))return Promise.resolve(function(t){try{var e,r,n,o,i,a,c={headers:((e={})["x-spotim-spotid"]=f.a.get("spotId"),e),method:"POST"};return r=u.a.getToken(),n=r.networkId,Promise.resolve(p((function(){return Promise.resolve(t("me/network-token/"+n,c)).then((function(t){i=(o=t).network_id,a=o.token,u.a.setToken(a,i)}))}),(function(t){return h.error("fetchNetworkToken",t),t})))}catch(t){return Promise.reject(t)}}(t)).then((function(){throw e.type}))}();return n&&n.then?n.then((function(t){return r})):r}throw{status:e.status,data:r}}))}))}),(function(t){var n=e&&e.split("sp_"),o=n&&r+n[0];throw h.error("requestV1",t,{url:o}),t}))}))}catch(t){return Promise.reject(t)}},_=2;!function(t){t.SpotTokenInvalidFormatError="SpotTokenInvalidFormatError",t.SpotTokenRevokedError="SpotTokenRevokedError",t.SpotTokenMissingError="SpotTokenMissingError",t.SpotTokenNotFoundError="SpotTokenNotFoundError"}(d||(d={}));var m=f.a.get("tenant_config.authentication.version",1),j={method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"},baseURL:""},w={};Object(a.a)("Request",t.env.PACKAGE_VERSION),e.default=g}.call(this,r(74))},32:function(t,e,r){"use strict";e.a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},34:function(t,e,r){"use strict";var n=r(54),o="object"==typeof self&&self&&self.Object===Object&&self,i=n.a||o||Function("return this")();e.a=i},35:function(t,e,r){"use strict";e.a=function(t){return null!=t&&"object"==typeof t}},36:function(t,e,r){"use strict";var n=Array.isArray;e.a=n},37:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},39:function(t,e,r){"use strict";var n=r(45),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=n.a?n.a.toStringTag:void 0;var u=function(t){var e=i.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[c]=r:delete t[c]),o},s=Object.prototype.toString;var f=function(t){return s.call(t)},l=n.a?n.a.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?u(t):f(t)}},40:function(t,e,r){"use strict";e.a=function(t,e){return t===e||t!=t&&e!=e}},42:function(t,e,r){"use strict";var n=function(){this.__data__=[],this.size=0},o=r(40);var i=function(t,e){for(var r=t.length;r--;)if(Object(o.a)(t[r][0],e))return r;return-1},a=Array.prototype.splice;var c=function(t){var e=this.__data__,r=i(e,t);return!(r<0)&&(r==e.length-1?e.pop():a.call(e,r,1),--this.size,!0)};var u=function(t){var e=this.__data__,r=i(e,t);return r<0?void 0:e[r][1]};var s=function(t){return i(this.__data__,t)>-1};var f=function(t,e){var r=this.__data__,n=i(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=c,l.prototype.get=u,l.prototype.has=s,l.prototype.set=f;e.a=l},43:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},44:function(t,e,r){"use strict";var n=r(39),o=r(32);e.a=function(t){if(!Object(o.a)(t))return!1;var e=Object(n.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},45:function(t,e,r){"use strict";var n=r(34).a.Symbol;e.a=n},46:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},53:function(t,e,r){"use strict";var n,o=r(44),i=r(34).a["__core-js_shared__"],a=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";var c=function(t){return!!a&&a in t},u=r(32),s=Function.prototype.toString;var f=function(t){if(null!=t){try{return s.call(t)}catch(t){}try{return t+""}catch(t){}}return""},l=/^\[object .+?Constructor\]$/,p=Function.prototype,h=Object.prototype,v=p.toString,y=h.hasOwnProperty,d=RegExp("^"+v.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var b=function(t){return!(!Object(u.a)(t)||c(t))&&(Object(o.a)(t)?d:l).test(f(t))};var g=function(t,e){return null==t?void 0:t[e]};e.a=function(t,e){var r=g(t,e);return b(r)?r:void 0}},54:function(t,e,r){"use strict";(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.a=r}).call(this,r(43))},55:function(t,e,r){"use strict";var n=r(53),o=r(34),i=Object(n.a)(o.a,"Map");e.a=i},56:function(t,e,r){"use strict";(function(t){var n=r(34),o=r(75),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=a&&a.exports===i?n.a.Buffer:void 0,u=(c?c.isBuffer:void 0)||o.a;e.a=u}).call(this,r(46)(t))},65:function(t,e,r){"use strict";var n=r(53),o=Object(n.a)(Object,"create");var i=function(){this.__data__=o?o(null):{},this.size=0};var a=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},c=Object.prototype.hasOwnProperty;var u=function(t){var e=this.__data__;if(o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return c.call(e,t)?e[t]:void 0},s=Object.prototype.hasOwnProperty;var f=function(t){var e=this.__data__;return o?void 0!==e[t]:s.call(e,t)};var l=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this};function p(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}p.prototype.clear=i,p.prototype.delete=a,p.prototype.get=u,p.prototype.has=f,p.prototype.set=l;var h=p,v=r(42),y=r(55);var d=function(){this.size=0,this.__data__={hash:new h,map:new(y.a||v.a),string:new h}};var b=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var g=function(t,e){var r=t.__data__;return b(e)?r["string"==typeof e?"string":"hash"]:r.map};var _=function(t){var e=g(this,t).delete(t);return this.size-=e?1:0,e};var m=function(t){return g(this,t).get(t)};var j=function(t){return g(this,t).has(t)};var w=function(t,e){var r=g(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function O(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}O.prototype.clear=d,O.prototype.delete=_,O.prototype.get=m,O.prototype.has=j,O.prototype.set=w;e.a=O},68:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=m(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function l(){}function p(){}function h(){}var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,d=y&&y(y(x([])));d&&d!==e&&r.call(d,o)&&(v=d);var b=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function m(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=b.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,a,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},74:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u,s=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?s=u.concat(s):l=-1,s.length&&h())}function h(){if(!f){var t=c(p);f=!0;for(var e=s.length;e;){for(u=s,s=[];++l<e;)u&&u[l].run();l=-1,e=s.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new v(t,e)),1!==s.length||f||c(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},75:function(t,e,r){"use strict";e.a=function(){return!1}},76:function(t,e,r){"use strict";(function(t){var n=r(54),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.a.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();e.a=c}).call(this,r(46)(t))},77:function(t,e,r){"use strict";(function(t){var n=r(34),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.a.Buffer:void 0,c=a?a.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var r=t.length,n=c?c(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(46)(t))},78:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(204);function n(t){if("*"===localStorage.getItem("SPOTIM_DEBUG_API")){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(e=console).log.apply(e,["%cOpenWeb "+t+"%c","background: #823fb5; color: white","background: transparent; color: unset"].concat(n))}}}}]);
//# sourceMappingURL=vendors~main-bootstrap~registration-disqus-login~registration-logout~registration-start-sso~registra~c6d8f078-bundle.js.map