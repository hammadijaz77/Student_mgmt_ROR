import*as e from"safe-buffer";import*as s from"cookie";import*as o from"crypto";import*as r from"debug";import*as i from"depd";import*as t from"on-headers";import*as n from"parseurl";import*as a from"cookie-signature";import*as u from"uid-safe";import{_ as c,a as f,b as l}from"./_/UNMFkrfs.js";import*as d from"util";import"events";var v=d;try{"default"in d&&(v=d.default)}catch(e){}var h=c;var p=v;var y=typeof setImmediate==="function"?setImmediate:function(e){process.nextTick(e.bind.apply(e,arguments))};module.exports=MemoryStore$1;function MemoryStore$1(){h.call(this);this.sessions=Object.create(null)}p.inherits(MemoryStore$1,h);
/**
 * Get all active sessions.
 *
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.all=function all(e){var s=Object.keys(this.sessions);var o=Object.create(null);for(var r=0;r<s.length;r++){var i=s[r];var t=getSession.call(this,i);t&&(o[i]=t)}e&&y(e,null,o)};
/**
 * Clear all sessions.
 *
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.clear=function clear(e){this.sessions=Object.create(null);e&&y(e)};
/**
 * Destroy the session associated with the given session ID.
 *
 * @param {string} sessionId
 * @public
 */MemoryStore$1.prototype.destroy=function destroy(e,s){delete this.sessions[e];s&&y(s)};
/**
 * Fetch session by the given session ID.
 *
 * @param {string} sessionId
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.get=function get(e,s){y(s,null,getSession.call(this,e))};
/**
 * Commit the given session associated with the given sessionId to the store.
 *
 * @param {string} sessionId
 * @param {object} session
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.set=function set(e,s,o){this.sessions[e]=JSON.stringify(s);o&&y(o)};
/**
 * Get number of active sessions.
 *
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.length=function length(e){this.all((function(s,o){if(s)return e(s);e(null,Object.keys(o).length)}))};
/**
 * Touch the given session object associated with the given session ID.
 *
 * @param {string} sessionId
 * @param {object} session
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.touch=function touch(e,s,o){var r=getSession.call(this,e);if(r){r.cookie=s.cookie;this.sessions[e]=JSON.stringify(r)}o&&y(o)};function getSession(e){var s=this.sessions[e];if(s){s=JSON.parse(s);if(s.cookie){var o=typeof s.cookie.expires==="string"?new Date(s.cookie.expires):s.cookie.expires;if(o&&o<=Date.now()){delete this.sessions[e];return}}return s}}var g={};var m=e;try{"default"in e&&(m=e.default)}catch(e){}var k=s;try{"default"in s&&(k=s.default)}catch(e){}var S=o;try{"default"in o&&(S=o.default)}catch(e){}var w=r;try{"default"in r&&(w=r.default)}catch(e){}var b=i;try{"default"in i&&(b=i.default)}catch(e){}var I=t;try{"default"in t&&(I=t.default)}catch(e){}var D=n;try{"default"in n&&(D=n.default)}catch(e){}var M=a;try{"default"in a&&(M=a.default)}catch(e){}var x=u;try{"default"in u&&(x=u.default)}catch(e){}var O={};var C=m.Buffer;var $=k;var j=S;var N=w("express-session");var T=b("express-session");var q=I;var A=D;var E=M;var H=x.sync;var z=f;var J=g;var _=l;var B=c;var L="production";O=O=session;O.Store=B;O.Cookie=z;O.Session=_;O.MemoryStore=J;var U="Warning: connect.session() MemoryStore is not\ndesigned for a production environment, as it will leak\nmemory, and will not scale past a single process.";var P=typeof setImmediate==="function"?setImmediate:function(e){process.nextTick(e.bind.apply(e,arguments))};
/**
 * Setup session store with the given `options`.
 *
 * @param {Object} [options]
 * @param {Object} [options.cookie] Options for cookie
 * @param {Function} [options.genid]
 * @param {String} [options.name=connect.sid] Session ID cookie name
 * @param {Boolean} [options.proxy]
 * @param {Boolean} [options.resave] Resave unmodified sessions back to the store
 * @param {Boolean} [options.rolling] Enable/disable rolling session expiration
 * @param {Boolean} [options.saveUninitialized] Save uninitialized sessions to the store
 * @param {String|Array} [options.secret] Secret for signing session ID
 * @param {Object} [options.store=MemoryStore] Session store
 * @param {String} [options.unset]
 * @return {Function} middleware
 * @public
 */function session(e){var s=e||{};var o=s.cookie||{};var r=s.genid||generateSessionId;var i=s.name||s.key||"connect.sid";var t=s.store||new J;var n=s.proxy;var a=s.resave;var u=Boolean(s.rolling);var c=s.saveUninitialized;var f=s.secret;if(typeof r!=="function")throw new TypeError("genid option must be a function");if(a===void 0){T("undefined resave option; provide resave option");a=true}if(c===void 0){T("undefined saveUninitialized option; provide saveUninitialized option");c=true}if(s.unset&&s.unset!=="destroy"&&s.unset!=="keep")throw new TypeError('unset option must be "destroy" or "keep"');var l=s.unset==="destroy";if(Array.isArray(f)&&f.length===0)throw new TypeError("secret option array must contain one or more strings");f&&!Array.isArray(f)&&(f=[f]);f||T("req.secret; provide secret option");L==="production"&&t instanceof J&&console.warn(U);t.generate=function(e){e.sessionID=r(e);e.session=new _(e);e.session.cookie=new z(o);o.secure==="auto"&&(e.session.cookie.secure=issecure(e,n))};var d=typeof t.touch==="function";var v=true;t.on("disconnect",(function ondisconnect(){v=false}));t.on("connect",(function onconnect(){v=true}));return function session(e,s,r){if(e.session)r();else if(v){var h=A.original(e).pathname||"/";if(h.indexOf(o.path||"/")===0)if(f||e.secret){var p=f||[e.secret];var y;var g;var m;var k=false;e.sessionStore=t;var S=e.sessionID=getcookie(e,i,p);q(s,(function(){if(e.session){if(shouldSetCookie(e))if(!e.session.cookie.secure||issecure(e,n)){if(!k){e.session.touch();k=true}try{setcookie(s,i,e.sessionID,p[0],e.session.cookie.data)}catch(e){P(r,e)}}else N("not secured")}else N("no session")}));var w=s.end;var b=s.write;var I=false;s.end=function end(o,i){if(I)return false;I=true;var n;var a=true;function writeend(){if(a){n=w.call(s,o,i);a=false}else w.call(s)}function writetop(){if(!a)return n;s._header||s._implicitHeader();if(o==null){n=true;return n}var e=Number(s.getHeader("Content-Length"));if(!isNaN(e)&&e>0){o=C.isBuffer(o)?o:C.from(o,i);i=void 0;if(o.length!==0){N("split response");n=b.call(s,o.slice(0,o.length-1));o=o.slice(o.length-1,o.length);return n}}n=b.call(s,o,i);a=false;return n}if(shouldDestroy(e)){N("destroying");t.destroy(e.sessionID,(function ondestroy(e){e&&P(r,e);N("destroyed");writeend()}));return writetop()}if(!e.session){N("no session");return w.call(s,o,i)}if(!k){e.session.touch();k=true}if(shouldSave(e)){e.session.save((function onsave(e){e&&P(r,e);writeend()}));return writetop()}if(d&&shouldTouch(e)){N("touching");t.touch(e.sessionID,e.session,(function ontouch(e){e&&P(r,e);N("touched");writeend()}));return writetop()}return w.call(s,o,i)};if(e.sessionID){N("fetching %s",e.sessionID);t.get(e.sessionID,(function(s,o){if(s&&s.code!=="ENOENT"){N("error %j",s);r(s)}else{try{if(s||!o){N("no session found");generate()}else{N("session found");inflate(e,o)}}catch(e){r(e);return}r()}}))}else{N("no SID sent, generating session");generate();r()}}else r(new Error("secret option required for sessions"));else{N("pathname mismatch");r()}}else{N("store is disconnected");r()}function generate(){t.generate(e);g=e.sessionID;y=hash(e.session);wrapmethods(e.session)}function inflate(e,s){t.createSession(e,s);g=e.sessionID;y=hash(s);a||(m=y);wrapmethods(e.session)}function rewrapmethods(s,o){return function(){e.session!==s&&wrapmethods(e.session);o.apply(this,arguments)}}function wrapmethods(e){var s=e.reload;var o=e.save;function reload(e){N("reloading %s",this.id);s.call(this,rewrapmethods(this,e))}function save(){N("saving %s",this.id);m=hash(this);o.apply(this,arguments)}Object.defineProperty(e,"reload",{configurable:true,enumerable:false,value:reload,writable:true});Object.defineProperty(e,"save",{configurable:true,enumerable:false,value:save,writable:true})}function isModified(e){return g!==e.id||y!==hash(e)}function isSaved(e){return g===e.id&&m===hash(e)}function shouldDestroy(e){return e.sessionID&&l&&e.session==null}function shouldSave(e){if(typeof e.sessionID!=="string"){N("session ignored because of bogus req.sessionID %o",e.sessionID);return false}return c||m||S===e.sessionID?!isSaved(e.session):isModified(e.session)}function shouldTouch(e){if(typeof e.sessionID!=="string"){N("session ignored because of bogus req.sessionID %o",e.sessionID);return false}return S===e.sessionID&&!shouldSave(e)}function shouldSetCookie(e){return typeof e.sessionID==="string"&&(S!==e.sessionID?c||isModified(e.session):u||e.session.cookie.expires!=null&&isModified(e.session))}}}function generateSessionId(e){return H(24)}function getcookie(e,s,o){var r=e.headers.cookie;var i;var t;if(r){var n=$.parse(r);i=n[s];if(i)if(i.substr(0,2)==="s:"){t=unsigncookie(i.slice(2),o);if(t===false){N("cookie signature invalid");t=void 0}}else N("cookie unsigned")}if(!t&&e.signedCookies){t=e.signedCookies[s];t&&T("cookie should be available in req.headers.cookie")}if(!t&&e.cookies){i=e.cookies[s];if(i)if(i.substr(0,2)==="s:"){t=unsigncookie(i.slice(2),o);t&&T("cookie should be available in req.headers.cookie");if(t===false){N("cookie signature invalid");t=void 0}}else N("cookie unsigned")}return t}
/**
 * Hash the given `sess` object omitting changes to `.cookie`.
 *
 * @param {Object} sess
 * @return {String}
 * @private
 */function hash(e){var s=JSON.stringify(e,(function(s,o){if(this!==e||s!=="cookie")return o}));return j.createHash("sha1").update(s,"utf8").digest("hex")}
/**
 * Determine if request is secure.
 *
 * @param {Object} req
 * @param {Boolean} [trustProxy]
 * @return {Boolean}
 * @private
 */function issecure(e,s){if(e.connection&&e.connection.encrypted)return true;if(s===false)return false;if(s!==true)return e.secure===true;var o=e.headers["x-forwarded-proto"]||"";var r=o.indexOf(",");var i=r!==-1?o.substr(0,r).toLowerCase().trim():o.toLowerCase().trim();return i==="https"}function setcookie(e,s,o,r,i){var t="s:"+E.sign(o,r);var n=$.serialize(s,t,i);N("set-cookie %s",n);var a=e.getHeader("Set-Cookie")||[];var u=Array.isArray(a)?a.concat(n):[a,n];e.setHeader("Set-Cookie",u)}
/**
 * Verify and decode the given `val` with `secrets`.
 *
 * @param {String} val
 * @param {Array} secrets
 * @returns {String|Boolean}
 * @private
 */function unsigncookie(e,s){for(var o=0;o<s.length;o++){var r=E.unsign(e,s[o]);if(r!==false)return r}return false}var W=O;const F=O.Store,G=O.Cookie,K=O.Session,Q=O.MemoryStore;export{G as Cookie,Q as MemoryStore,K as Session,F as Store,W as default};

