var r={};var e=Object.prototype.hasOwnProperty;var t=Object.prototype.toString;var n=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var a=function isArray(r){return"function"===typeof Array.isArray?Array.isArray(r):"[object Array]"===t.call(r)};var f=function isPlainObject(r){if(!r||"[object Object]"!==t.call(r))return false;var n=e.call(r,"constructor");var o=r.constructor&&r.constructor.prototype&&e.call(r.constructor.prototype,"isPrototypeOf");if(r.constructor&&!n&&!o)return false;var a;for(a in r);return"undefined"===typeof a||e.call(r,a)};var u=function setProperty(r,e){n&&"__proto__"===e.name?n(r,e.name,{enumerable:true,configurable:true,value:e.newValue,writable:true}):r[e.name]=e.newValue};var l=function getProperty(r,t){if("__proto__"===t){if(!e.call(r,t))return;if(o)return o(r,t).value}return r[t]};r=function extend(){var r,e,t,n,o,c;var i=arguments[0];var p=1;var y=arguments.length;var v=false;if("boolean"===typeof i){v=i;i=arguments[1]||{};p=2}(null==i||"object"!==typeof i&&"function"!==typeof i)&&(i={});for(;p<y;++p){r=arguments[p];if(null!=r)for(e in r){t=l(i,e);n=l(r,e);if(i!==n)if(v&&n&&(f(n)||(o=a(n)))){if(o){o=false;c=t&&a(t)?t:[]}else c=t&&f(t)?t:{};u(i,{name:e,newValue:extend(v,c,n)})}else"undefined"!==typeof n&&u(i,{name:e,newValue:n})}}return i};var c=r;export default c;
