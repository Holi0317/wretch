!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("url")):"function"==typeof define&&define.amd?define(["url"],r):"object"==typeof exports?exports.wretch=r(require("url")):t.wretch=r(t.url)}(this,function(t){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=0)}([function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(t){n.d(r,"Wretcher",function(){return c});var e=n(2),o=this&&this.__assign||Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};"undefined"==typeof self&&(t.URLSearchParams=n(3).URLSearchParams),r.default=function(t,r){return void 0===t&&(t=""),void 0===r&&(r={}),new c(t,r)};var u={},i=null,c=function(){function t(t,r){void 0===r&&(r={}),this._url=t,this._options=r}return t.prototype.defaults=function(t){return u=t,this},t.prototype.mixdefaults=function(t){return u=Object(e.a)(u,t),this},t.prototype.errorType=function(t){return i=t,this},t.prototype.url=function(r){return new t(r,this._options)},t.prototype.options=function(r){return new t(this._url,r)},t.prototype.query=function(r){return new t(f(this._url,r),this._options)},t.prototype.accept=function(r){return new t(this._url,Object(e.a)(this._options,{headers:{Accept:r}}))},t.prototype.get=function(t){return void 0===t&&(t={}),s(this._url)(Object(e.a)(t,this._options))},t.prototype.delete=function(t){return void 0===t&&(t={}),s(this._url)(o({},Object(e.a)(t,this._options),{method:"DELETE"}))},t.prototype.put=function(t){return void 0===t&&(t={}),s(this._url)(o({},Object(e.a)(t,this._options),{method:"PUT"}))},t.prototype.post=function(t){return void 0===t&&(t={}),s(this._url)(o({},Object(e.a)(t,this._options),{method:"POST"}))},t.prototype.patch=function(t){return void 0===t&&(t={}),s(this._url)(o({},Object(e.a)(t,this._options),{method:"PATCH"}))},t.prototype.json=function(r){return new t(this._url,o({},this._options,{headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}))},t.prototype.formData=function(r){var n=new FormData;for(var e in r)if(r[e]instanceof Array)for(var u=0,i=r[e];u<i.length;u++){var c=i[u];n.append(e+"[]",c)}else n.append(e,r[e]);return new t(this._url,o({},this._options,{body:n}))},t}(),f=function(t,r){var n=new URLSearchParams,e=t.indexOf("?");for(var o in r)n.append(o,r[o]);return~e?t.substring(0,e)+"?"+n.toString():t+"?"+n.toString()},s=function(t){return function(r){void 0===r&&(r={});var n=fetch(t,Object(e.a)(u,r)),o=n.then(function(t){return t.ok?t:t[i||"text"]().then(function(r){var n=new Error(r);throw n[i]=r,n.status=t.status,n.response=t,n})}),c=[],f=function(t){return c.reduce(function(t,r){return t.catch(r)},t)},s={res:function(){return f(o)},json:function(){return f(o.then(function(t){return t&&t.json()}))},blob:function(){return f(o.then(function(t){return t&&t.blob()}))},formData:function(){return f(o.then(function(t){return t&&t.formData()}))},arrayBuffer:function(){return f(o.then(function(t){return t&&t.arrayBuffer()}))},text:function(){return f(o.then(function(t){return t&&t.text()}))},error:function(t,r){return c.push(function(n){if(n.status!==t)throw n;r(n)}),s},badRequest:function(t){return s.error(400,t)},unauthorized:function(t){return s.error(401,t)},forbidden:function(t){return s.error(403,t)},notFound:function(t){return s.error(404,t)},timeout:function(t){return s.error(408,t)},internalError:function(t){return s.error(500,t)}};return s}}}.call(r,n(1))},function(t,r){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){"use strict";n.d(r,"a",function(){return o});var e=this&&this.__assign||Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},o=function(t,r,n){if(void 0===n&&(n=!1),!t||!r||"object"!=typeof t||"object"!=typeof r)return t;var u=e({},t,r);for(var i in r)r.hasOwnProperty(i)&&(r[i]instanceof Array&&t[i]instanceof Array?u[i]=n?t[i].concat(r[i]):u[i]=r[i]:"object"==typeof r[i]&&"object"==typeof t[i]&&(u[i]=o(t[i],r[i],n)));return u}},function(r,n){r.exports=t}]).default});
//# sourceMappingURL=wretch.js.map