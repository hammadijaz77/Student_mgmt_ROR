import r from"url";var a={};var e=r;var n=e.parse;var s=e.Url;a=parseurl;a.original=originalurl;function parseurl(r){var a=r.url;if(void 0!==a){var e=r._parsedUrl;if(fresh(a,e))return e;e=fastparse(a);e._raw=a;return r._parsedUrl=e}}function originalurl(r){var a=r.originalUrl;if("string"!==typeof a)return parseurl(r);var e=r._parsedOriginalUrl;if(fresh(a,e))return e;e=fastparse(a);e._raw=a;return r._parsedOriginalUrl=e}function fastparse(r){if("string"!==typeof r||47!==r.charCodeAt(0))return n(r);var a=r;var e=null;var t=null;for(var i=1;i<r.length;i++)switch(r.charCodeAt(i)){case 63:if(null===t){a=r.substring(0,i);e=r.substring(i+1);t=r.substring(i)}break;case 9:case 10:case 12:case 13:case 32:case 35:case 160:case 65279:return n(r)}var l=void 0!==s?new s:{};l.path=r;l.href=r;l.pathname=a;if(null!==t){l.query=e;l.search=t}return l}function fresh(r,a){return"object"===typeof a&&null!==a&&(void 0===s||a instanceof s)&&a._raw===r}var t=a;const i=a.original;export default t;export{i as original};
