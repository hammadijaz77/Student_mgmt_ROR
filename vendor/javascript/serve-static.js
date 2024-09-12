import*as e from"encodeurl";import*as t from"escape-html";import*as r from"parseurl";import*as a from"path";import*as n from"send";import*as o from"url";import i from"buffer";var s="default"in e?e.default:e;var f="default"in t?t.default:t;var u="default"in r?r.default:r;var l="default"in a?a.default:a;var d="default"in n?n.default:n;var c="default"in o?o.default:o;var m={};var h=i.Buffer;var p=s;var v=f;var g=u;var y=l.resolve;var H=d;var b=c;m=serveStatic;m.mime=H.mime;
/**
 * @param {string} root
 * @param {object} [options]
 * @return {function}
 * @public
 */function serveStatic(e,t){if(!e)throw new TypeError("root path required");if("string"!==typeof e)throw new TypeError("root path must be a string");var r=Object.create(t||null);var a=false!==r.fallthrough;var n=false!==r.redirect;var o=r.setHeaders;if(o&&"function"!==typeof o)throw new TypeError("option setHeaders must be function");r.maxage=r.maxage||r.maxAge||0;r.root=y(e);var i=n?createRedirectDirectoryListener():createNotFoundDirectoryListener();return function serveStatic(e,t,n){if("GET"===e.method||"HEAD"===e.method){var s=!a;var f=g.original(e);var u=g(e).pathname;"/"===u&&"/"!==f.pathname.substr(-1)&&(u="");var l=H(e,u,r);l.on("directory",i);o&&l.on("headers",o);a&&l.on("file",(function onFile(){s=true}));l.on("error",(function error(e){!s&&e.statusCode<500?n():n(e)}));l.pipe(t)}else{if(a)return n();t.statusCode=405;t.setHeader("Allow","GET, HEAD");t.setHeader("Content-Length","0");t.end()}}}function collapseLeadingSlashes(e){for(var t=0;t<e.length;t++)if(47!==e.charCodeAt(t))break;return t>1?"/"+e.substr(t):e}
/**
 * Create a minimal HTML document.
 *
 * @param {string} title
 * @param {string} body
 * @private
 */function createHtmlDocument(e,t){return'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>'+e+"</title>\n</head>\n<body>\n<pre>"+t+"</pre>\n</body>\n</html>\n"}function createNotFoundDirectoryListener(){return function notFound(){this.error(404)}}function createRedirectDirectoryListener(){return function redirect(e){if(this.hasTrailingSlash())this.error(404);else{var t=g.original(this.req);t.path=null;t.pathname=collapseLeadingSlashes(t.pathname+"/");var r=p(b.format(t));var a=createHtmlDocument("Redirecting",'Redirecting to <a href="'+v(r)+'">'+v(r)+"</a>");e.statusCode=301;e.setHeader("Content-Type","text/html; charset=UTF-8");e.setHeader("Content-Length",h.byteLength(a));e.setHeader("Content-Security-Policy","default-src 'none'");e.setHeader("X-Content-Type-Options","nosniff");e.setHeader("Location",r);e.end(a)}}}var C=m;const L=m.mime;export{C as default,L as mime};

