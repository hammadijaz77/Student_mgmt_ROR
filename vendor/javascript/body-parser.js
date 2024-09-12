import*as e from"depd";import*as r from"bytes";import*as t from"content-type";import*as a from"http-errors";import*as n from"debug";import i from"./lib/read.js";import*as o from"type-is";import*as s from"qs";import*as u from"querystring";import"destroy";import"raw-body";import"iconv-lite";import"on-finished";import"unpipe";import"zlib";var f="default"in r?r.default:r;var p="default"in t?t.default:t;var d="default"in a?a.default:a;var c="default"in n?n.default:n;var l="default"in o?o.default:o;var v={};var y=f;var m=p;var b=d;var h=c("body-parser:json");var g=i;var w=l;v=json;var k=/^[\x20\x09\x0a\x0d]*([^\x20\x09\x0a\x0d])/;var x="#";var j=/#+/g;
/**
 * Create a middleware to parse JSON bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */function json(e){var r=e||{};var t="number"!==typeof r.limit?y.parse(r.limit||"100kb"):r.limit;var a=false!==r.inflate;var n=r.reviver;var i=false!==r.strict;var o=r.type||"application/json";var s=r.verify||false;if(false!==s&&"function"!==typeof s)throw new TypeError("option verify must be function");var u="function"!==typeof o?typeChecker$3(o):o;function parse(e){if(0===e.length)return{};if(i){var r=firstchar(e);if("{"!==r&&"["!==r){h("strict violation");throw createStrictSyntaxError(e,r)}}try{h("parse json");return JSON.parse(e,n)}catch(e){throw normalizeJsonSyntaxError(e,{message:e.message,stack:e.stack})}}return function jsonParser(e,r,n){if(e._body){h("body already parsed");n()}else{e.body=e.body||{};if(w.hasBody(e)){h("content-type %j",e.headers["content-type"]);if(u(e)){var i=getCharset$2(e)||"utf-8";if("utf-"===i.slice(0,4))g(e,r,n,parse,h,{encoding:i,inflate:a,limit:t,verify:s});else{h("invalid charset");n(b(415,'unsupported charset "'+i.toUpperCase()+'"',{charset:i,type:"charset.unsupported"}))}}else{h("skip parsing");n()}}else{h("skip empty body");n()}}}}
/**
 * Create strict violation syntax error matching native error.
 *
 * @param {string} str
 * @param {string} char
 * @return {Error}
 * @private
 */function createStrictSyntaxError(e,r){var t=e.indexOf(r);var a="";if(-1!==t){a=e.substring(0,t)+x;for(var n=t+1;n<e.length;n++)a+=x}try{JSON.parse(a);throw new SyntaxError("strict violation")}catch(r){return normalizeJsonSyntaxError(r,{message:r.message.replace(j,(function(r){return e.substring(t,t+r.length)})),stack:r.stack})}}
/**
 * Get the first non-whitespace character in a string.
 *
 * @param {string} str
 * @return {function}
 * @private
 */function firstchar(e){var r=k.exec(e);return r?r[1]:void 0}
/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */function getCharset$2(e){try{return(m.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}
/**
 * Normalize a SyntaxError for JSON.parse.
 *
 * @param {SyntaxError} error
 * @param {object} obj
 * @return {SyntaxError}
 */function normalizeJsonSyntaxError(e,r){var t=Object.getOwnPropertyNames(e);for(var a=0;a<t.length;a++){var n=t[a];"stack"!==n&&"message"!==n&&delete e[n]}e.stack=r.stack.replace(e.message,r.message);e.message=r.message;return e}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker$3(e){return function checkType(r){return Boolean(w(r,e))}}var C=v;var P="default"in r?r.default:r;var O="default"in n?n.default:n;var E="default"in o?o.default:o;var L={};var S=P;var T=O("body-parser:raw");var $=i;var q=E;L=raw;
/**
 * Create a middleware to parse raw bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */function raw(e){var r=e||{};var t=false!==r.inflate;var a="number"!==typeof r.limit?S.parse(r.limit||"100kb"):r.limit;var n=r.type||"application/octet-stream";var i=r.verify||false;if(false!==i&&"function"!==typeof i)throw new TypeError("option verify must be function");var o="function"!==typeof n?typeChecker$2(n):n;function parse(e){return e}return function rawParser(e,r,n){if(e._body){T("body already parsed");n()}else{e.body=e.body||{};if(q.hasBody(e)){T("content-type %j",e.headers["content-type"]);if(o(e))$(e,r,n,parse,T,{encoding:null,inflate:t,limit:a,verify:i});else{T("skip parsing");n()}}else{T("skip empty body");n()}}}}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker$2(e){return function checkType(r){return Boolean(q(r,e))}}var B=L;var N="default"in r?r.default:r;var G="default"in t?t.default:t;var J="default"in n?n.default:n;var z="default"in o?o.default:o;var _={};var F=N;var U=G;var I=J("body-parser:text");var K=i;var M=z;_=text;
/**
 * Create a middleware to parse text bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */function text(e){var r=e||{};var t=r.defaultCharset||"utf-8";var a=false!==r.inflate;var n="number"!==typeof r.limit?F.parse(r.limit||"100kb"):r.limit;var i=r.type||"text/plain";var o=r.verify||false;if(false!==o&&"function"!==typeof o)throw new TypeError("option verify must be function");var s="function"!==typeof i?typeChecker$1(i):i;function parse(e){return e}return function textParser(e,r,i){if(e._body){I("body already parsed");i()}else{e.body=e.body||{};if(M.hasBody(e)){I("content-type %j",e.headers["content-type"]);if(s(e)){var u=getCharset$1(e)||t;K(e,r,i,parse,I,{encoding:u,inflate:a,limit:n,verify:o})}else{I("skip parsing");i()}}else{I("skip empty body");i()}}}}
/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */function getCharset$1(e){try{return(U.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker$1(e){return function checkType(r){return Boolean(M(r,e))}}var A=_;var D="default"in r?r.default:r;var H="default"in t?t.default:t;var Q="default"in a?a.default:a;var R="default"in n?n.default:n;var V="default"in e?e.default:e;var W="default"in o?o.default:o;var X="default"in s?s.default:s;var Y="default"in u?u.default:u;var Z={};var ee=D;var re=H;var te=Q;var ae=R("body-parser:urlencoded");var ne=V("body-parser");var ie=i;var oe=W;Z=urlencoded;var se=Object.create(null);
/**
 * Create a middleware to parse urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */function urlencoded(e){var r=e||{};void 0===r.extended&&ne("undefined extended: provide extended option");var t=false!==r.extended;var a=false!==r.inflate;var n="number"!==typeof r.limit?ee.parse(r.limit||"100kb"):r.limit;var i=r.type||"application/x-www-form-urlencoded";var o=r.verify||false;if(false!==o&&"function"!==typeof o)throw new TypeError("option verify must be function");var s=t?extendedparser(r):simpleparser(r);var u="function"!==typeof i?typeChecker(i):i;function parse(e){return e.length?s(e):{}}return function urlencodedParser(e,r,t){if(e._body){ae("body already parsed");t()}else{e.body=e.body||{};if(oe.hasBody(e)){ae("content-type %j",e.headers["content-type"]);if(u(e)){var i=getCharset(e)||"utf-8";if("utf-8"===i)ie(e,r,t,parse,ae,{debug:ae,encoding:i,inflate:a,limit:n,verify:o});else{ae("invalid charset");t(te(415,'unsupported charset "'+i.toUpperCase()+'"',{charset:i,type:"charset.unsupported"}))}}else{ae("skip parsing");t()}}else{ae("skip empty body");t()}}}}
/**
 * Get the extended query parser.
 *
 * @param {object} options
 */function extendedparser(e){var r=void 0!==e.parameterLimit?e.parameterLimit:1e3;var t=parser("qs");if(isNaN(r)||r<1)throw new TypeError("option parameterLimit must be a positive number");isFinite(r)&&(r|=0);return function queryparse(e){var a=parameterCount(e,r);if(void 0===a){ae("too many parameters");throw te(413,"too many parameters",{type:"parameters.too.many"})}var n=Math.max(100,a);ae("parse extended urlencoding");return t(e,{allowPrototypes:true,arrayLimit:n,depth:Infinity,parameterLimit:r})}}
/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */function getCharset(e){try{return(re.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}
/**
 * Count the number of parameters, stopping once limit reached
 *
 * @param {string} body
 * @param {number} limit
 * @api private
 */function parameterCount(e,r){var t=0;var a=0;while(-1!==(a=e.indexOf("&",a))){t++;a++;if(t===r)return}return t}
/**
 * Get parser for module name dynamically.
 *
 * @param {string} name
 * @return {function}
 * @api private
 */function parser(e){var r=se[e];if(void 0!==r)return r.parse;switch(e){case"qs":r=X;break;case"querystring":r=Y;break}se[e]=r;return r.parse}
/**
 * Get the simple query parser.
 *
 * @param {object} options
 */function simpleparser(e){var r=void 0!==e.parameterLimit?e.parameterLimit:1e3;var t=parser("querystring");if(isNaN(r)||r<1)throw new TypeError("option parameterLimit must be a positive number");isFinite(r)&&(r|=0);return function queryparse(e){var a=parameterCount(e,r);if(void 0===a){ae("too many parameters");throw te(413,"too many parameters",{type:"parameters.too.many"})}ae("parse urlencoding");return t(e,void 0,void 0,{maxKeys:r})}}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker(e){return function checkType(r){return Boolean(oe(r,e))}}var ue=Z;var fe="default"in e?e.default:e;var pe={};var de=fe("body-parser");var ce=Object.create(null);
/**
 * @typedef Parsers
 * @type {function}
 * @property {function} json
 * @property {function} raw
 * @property {function} text
 * @property {function} urlencoded
 */
/**
 * Module exports.
 * @type {Parsers}
 */pe=pe=de.function(bodyParser,"bodyParser: use individual json/urlencoded middlewares");Object.defineProperty(pe,"json",{configurable:true,enumerable:true,get:createParserGetter("json")});Object.defineProperty(pe,"raw",{configurable:true,enumerable:true,get:createParserGetter("raw")});Object.defineProperty(pe,"text",{configurable:true,enumerable:true,get:createParserGetter("text")});Object.defineProperty(pe,"urlencoded",{configurable:true,enumerable:true,get:createParserGetter("urlencoded")});
/**
 * Create a middleware to parse json and urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @deprecated
 * @public
 */function bodyParser(e){var r=Object.create(e||null,{type:{configurable:true,enumerable:true,value:void 0,writable:true}});var t=pe.urlencoded(r);var a=pe.json(r);return function bodyParser(e,r,n){a(e,r,(function(a){if(a)return n(a);t(e,r,n)}))}}function createParserGetter(e){return function get(){return loadParser(e)}}function loadParser(e){var r=ce[e];if(void 0!==r)return r;switch(e){case"json":r=C;break;case"raw":r=B;break;case"text":r=A;break;case"urlencoded":r=ue;break}return ce[e]=r}var le=pe;export{le as default};

