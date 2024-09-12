var e={};e.parse=parse;e.serialize=serialize;var i=Object.prototype.toString;var r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */function parse(e,i){if(typeof e!=="string")throw new TypeError("argument str must be a string");var r={};var t=i||{};var a=t.decode||decode;var o=0;while(o<e.length){var n=e.indexOf("=",o);if(n===-1)break;var s=e.indexOf(";",o);if(s===-1)s=e.length;else if(s<n){o=e.lastIndexOf(";",n-1)+1;continue}var p=e.slice(o,n).trim();if(void 0===r[p]){var c=e.slice(n+1,s).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1));r[p]=tryDecode(c,a)}o=s+1}return r}
/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */function serialize(e,i,t){var a=t||{};var o=a.encode||encode;if(typeof o!=="function")throw new TypeError("option encode is invalid");if(!r.test(e))throw new TypeError("argument name is invalid");var n=o(i);if(n&&!r.test(n))throw new TypeError("argument val is invalid");var s=e+"="+n;if(null!=a.maxAge){var p=a.maxAge-0;if(isNaN(p)||!isFinite(p))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(p)}if(a.domain){if(!r.test(a.domain))throw new TypeError("option domain is invalid");s+="; Domain="+a.domain}if(a.path){if(!r.test(a.path))throw new TypeError("option path is invalid");s+="; Path="+a.path}if(a.expires){var c=a.expires;if(!isDate(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+c.toUTCString()}a.httpOnly&&(s+="; HttpOnly");a.secure&&(s+="; Secure");a.partitioned&&(s+="; Partitioned");if(a.priority){var d=typeof a.priority==="string"?a.priority.toLowerCase():a.priority;switch(d){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(a.sameSite){var f=typeof a.sameSite==="string"?a.sameSite.toLowerCase():a.sameSite;switch(f){case true:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */function decode(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}
/**
 * URL-encode value.
 *
 * @param {string} val
 * @returns {string}
 */function encode(e){return encodeURIComponent(e)}
/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */function isDate(e){return i.call(e)==="[object Date]"||e instanceof Date}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */function tryDecode(e,i){try{return i(e)}catch(i){return e}}const t=e.parse,a=e.serialize;export{e as default,t as parse,a as serialize};

