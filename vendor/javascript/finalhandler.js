import*as e from"debug";import*as t from"encodeurl";import*as r from"escape-html";import*as a from"on-finished";import*as n from"parseurl";import*as o from"statuses";import*as s from"unpipe";import u from"process";import d from"buffer";var f="default"in e?e.default:e;var i="default"in t?t.default:t;var l="default"in r?r.default:r;var c="default"in a?a.default:a;var v="default"in n?n.default:n;var m="default"in o?o.default:o;var p="default"in s?s.default:s;var h={};var g=d.Buffer;var y=u;var C=f("finalhandler");var b=i;var H=l;var S=c;var E=v;var k=m;var x=p;var T=/\x20{2}/g;var O=/\n/g;var R="function"===typeof y.nextTick?y.nextTick:function(e){y.nextTick(e.bind.apply(e,arguments))};var j=S.isFinished;
/**
 * Create a minimal HTML document.
 *
 * @param {string} message
 * @private
 */function createHtmlDocument(e){var t=H(e).replace(O,"<br>").replace(T," &nbsp;");return'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>'+t+"</pre>\n</body>\n</html>\n"}h=finalhandler;
/**
 * Create a function to handle the final response.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} [options]
 * @return {Function}
 * @public
 */function finalhandler(e,t,r){var a=r||{};var n=a.env||"production";var o=a.onerror;return function(r){var a;var s;var u;if(r||!headersSent(t)){if(r){u=getErrorStatusCode(r);void 0===u?u=getResponseStatusCode(t):a=getErrorHeaders(r);s=getErrorMessage(r,u,n)}else{u=404;s="Cannot "+e.method+" "+b(getResourceName(e))}C("default %s",u);r&&o&&R(o,r,e,t);if(headersSent(t)){C("cannot %d after headers sent",u);e.socket.destroy()}else send(e,t,u,a,s)}else C("cannot 404 after headers sent")}}
/**
 * Get headers from Error object.
 *
 * @param {Error} err
 * @return {object}
 * @private
 */function getErrorHeaders(e){if(e.headers&&"object"===typeof e.headers){var t=Object.create(null);var r=Object.keys(e.headers);for(var a=0;a<r.length;a++){var n=r[a];t[n]=e.headers[n]}return t}}
/**
 * Get message from Error object, fallback to status message.
 *
 * @param {Error} err
 * @param {number} status
 * @param {string} env
 * @return {string}
 * @private
 */function getErrorMessage(e,t,r){var a;if("production"!==r){a=e.stack;a||"function"!==typeof e.toString||(a=e.toString())}return a||k.message[t]}
/**
 * Get status code from Error object.
 *
 * @param {Error} err
 * @return {number}
 * @private
 */function getErrorStatusCode(e){return"number"===typeof e.status&&e.status>=400&&e.status<600?e.status:"number"===typeof e.statusCode&&e.statusCode>=400&&e.statusCode<600?e.statusCode:void 0}
/**
 * Get resource name for the request.
 *
 * This is typically just the original pathname of the request
 * but will fallback to "resource" is that cannot be determined.
 *
 * @param {IncomingMessage} req
 * @return {string}
 * @private
 */function getResourceName(e){try{return E.original(e).pathname}catch(e){return"resource"}}
/**
 * Get status code from response.
 *
 * @param {OutgoingMessage} res
 * @return {number}
 * @private
 */function getResponseStatusCode(e){var t=e.statusCode;("number"!==typeof t||t<400||t>599)&&(t=500);return t}
/**
 * Determine if the response headers have been sent.
 *
 * @param {object} res
 * @returns {boolean}
 * @private
 */function headersSent(e){return"boolean"!==typeof e.headersSent?Boolean(e._header):e.headersSent}
/**
 * Send response.
 *
 * @param {IncomingMessage} req
 * @param {OutgoingMessage} res
 * @param {number} status
 * @param {object} headers
 * @param {string} message
 * @private
 */function send(e,t,r,a,n){function write(){var o=createHtmlDocument(n);t.statusCode=r;t.statusMessage=k.message[r];t.removeHeader("Content-Encoding");t.removeHeader("Content-Language");t.removeHeader("Content-Range");setHeaders(t,a);t.setHeader("Content-Security-Policy","default-src 'none'");t.setHeader("X-Content-Type-Options","nosniff");t.setHeader("Content-Type","text/html; charset=utf-8");t.setHeader("Content-Length",g.byteLength(o,"utf8"));"HEAD"!==e.method?t.end(o,"utf8"):t.end()}if(j(e))write();else{x(e);S(e,write);e.resume()}}
/**
 * Set response headers from an object.
 *
 * @param {OutgoingMessage} res
 * @param {object} headers
 * @private
 */function setHeaders(e,t){if(t){var r=Object.keys(t);for(var a=0;a<r.length;a++){var n=r[a];e.setHeader(n,t[n])}}}var D=h;export{D as default};

