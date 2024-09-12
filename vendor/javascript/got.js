import*as e from"url";import*as r from"@sindresorhus/is";import*as t from"events";import*as o from"p-cancelable";import{e as n,a as s,b as a,c as i}from"../../_/d533f1c4.js";import"util";import"stream";import"fs";import"http";import"https";import"@szmarczak/http-timer";import"cacheable-lookup";import"cacheable-request";import"decompress-response";import"http2-wrapper";import"lowercase-keys";import"buffer";import"net";import"./core/utils/url-to-options.js";import"process";var c={};var l=c&&c.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);Object.defineProperty(e,o,{enumerable:true,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t);e[o]=r[t]});var u=c&&c.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||l(r,e,t)};Object.defineProperty(c,"__esModule",{value:true});c.CancelError=c.ParseError=void 0;const d=n;class ParseError$1 extends d.RequestError{constructor(e,r){const{options:t}=r.request;super(`${e.message} in "${t.url.toString()}"`,e,r.request);this.name="ParseError";this.code="ERR_GOT_REQUEST_ERROR"===this.code?"ERR_BODY_PARSE_FAILURE":this.code}}c.ParseError=ParseError$1;class CancelError$1 extends d.RequestError{constructor(e){super("Promise was canceled",{},e);this.name="CancelError";this.code="ERR_CANCELED"}get isCanceled(){return true}}c.CancelError=CancelError$1;u(n,c);var f={};Object.defineProperty(f,"__esModule",{value:true});const p=c;const parseBody=(e,r,t,o)=>{const{rawBody:n}=e;try{if("text"===r)return n.toString(o);if("json"===r)return 0===n.length?"":t(n.toString());if("buffer"===r)return n;throw new p.ParseError({message:`Unknown body type '${r}'`,name:"Error"},e)}catch(r){throw new p.ParseError(r,e)}};f.default=parseBody;var m="default"in t?t.default:t;var E="default"in r?r.default:r;var h="default"in o?o.default:o;var y={};var b=y&&y.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);Object.defineProperty(e,o,{enumerable:true,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t);e[o]=r[t]});var v=y&&y.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||b(r,e,t)};Object.defineProperty(y,"__esModule",{value:true});const O=m;const w=E;const P=h;const _=c;const g=f;const R=n;const j=s;const T=a;const C=i;const k=["request","response","redirect","uploadProgress","downloadProgress"];function asPromise(e){let r;let t;const o=new O.EventEmitter;const n=new P(((s,a,i)=>{const makeRequest=c=>{const l=new R.default(void 0,e);l.retryCount=c;l._noPipe=true;i((()=>l.destroy()));i.shouldReject=false;i((()=>a(new _.CancelError(l))));r=l;l.once("response",(async e=>{var r;e.retryCount=c;if(e.request.aborted)return;let o;try{o=await T.default(l);e.rawBody=o}catch(e){return}if(l._isAboutToError)return;const n=(null!==(r=e.headers["content-encoding"])&&void 0!==r?r:"").toLowerCase();const a=["gzip","deflate","br"].includes(n);const{options:u}=l;if(a&&!u.decompress)e.body=o;else try{e.body=g.default(e,u.responseType,u.parseJson,u.encoding)}catch(r){e.body=o.toString();if(C.isResponseOk(e)){l._beforeError(r);return}}try{for(const[r,t]of u.hooks.afterResponse.entries())e=await t(e,(async e=>{const t=R.default.normalizeArguments(void 0,{...e,retry:{calculateDelay:()=>0},throwHttpErrors:false,resolveBodyOnly:false},u);t.hooks.afterResponse=t.hooks.afterResponse.slice(0,r);for(const e of t.hooks.beforeRetry)await e(t);const o=asPromise(t);i((()=>{o.catch((()=>{}));o.cancel()}));return o}))}catch(e){l._beforeError(new _.RequestError(e.message,e,l));return}t=e;if(C.isResponseOk(e)){l.destroy();s(l.options.resolveBodyOnly?e.body:e)}else l._beforeError(new _.HTTPError(e))}));const onError=e=>{if(n.isCanceled)return;const{options:r}=l;if(e instanceof _.HTTPError&&!r.throwHttpErrors){const{response:r}=e;s(l.options.resolveBodyOnly?r.body:r)}else a(e)};l.once("error",onError);const u=l.options.body;l.once("retry",((e,r)=>{var t,o;u===(null===(t=r.request)||void 0===t?void 0:t.options.body)&&w.default.nodeStream(null===(o=r.request)||void 0===o?void 0:o.options.body)?onError(r):makeRequest(e)}));j.default(l,o,k)};makeRequest(0)}));n.on=(e,r)=>{o.on(e,r);return n};const shortcut=e=>{const r=(async()=>{await n;const{options:r}=t.request;return g.default(t,e,r.parseJson,r.encoding)})();Object.defineProperties(r,Object.getOwnPropertyDescriptors(n));return r};n.json=()=>{const{headers:e}=r.options;r.writableFinished||void 0!==e.accept||(e.accept="application/json");return shortcut("json")};n.buffer=()=>shortcut("buffer");n.text=()=>shortcut("text");return n}y.default=asPromise;v(c,y);var S={};Object.defineProperty(S,"__esModule",{value:true});const q=c;function createRejection(e,...r){const t=(async()=>{if(e instanceof q.RequestError)try{for(const t of r)if(t)for(const r of t)e=await r(e)}catch(r){e=r}throw e})();const returnPromise=()=>t;t.json=returnPromise;t.text=returnPromise;t.buffer=returnPromise;t.on=returnPromise;return t}S.default=createRejection;var x="default"in r?r.default:r;var D={};Object.defineProperty(D,"__esModule",{value:true});const H=x;function deepFreeze(e){for(const r of Object.values(e))(H.default.plainObject(r)||H.default.array(r))&&deepFreeze(r);return Object.freeze(e)}D.default=deepFreeze;var N={};Object.defineProperty(N,"__esModule",{value:true});var A="default"in r?r.default:r;var U={};var B=U&&U.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);Object.defineProperty(e,o,{enumerable:true,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t);e[o]=r[t]});var M=U&&U.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||B(r,e,t)};Object.defineProperty(U,"__esModule",{value:true});U.defaultHandler=void 0;const I=A;const z=y;const L=S;const F=n;const J=D;const $={RequestError:z.RequestError,CacheError:z.CacheError,ReadError:z.ReadError,HTTPError:z.HTTPError,MaxRedirectsError:z.MaxRedirectsError,TimeoutError:z.TimeoutError,ParseError:z.ParseError,CancelError:z.CancelError,UnsupportedProtocolError:z.UnsupportedProtocolError,UploadError:z.UploadError};const delay=async e=>new Promise((r=>{setTimeout(r,e)}));const{normalizeArguments:G}=F.default;const mergeOptions=(...e)=>{let r;for(const t of e)r=G(void 0,t,r);return r};const getPromiseOrStream=e=>e.isStream?new F.default(void 0,e):z.default(e);const isGotInstance=e=>"defaults"in e&&"options"in e.defaults;const Q=["get","post","put","patch","head","delete"];U.defaultHandler=(e,r)=>r(e);const callInitHooks=(e,r)=>{if(e)for(const t of e)t(r)};const create=e=>{e._rawHandlers=e.handlers;e.handlers=e.handlers.map((e=>(r,t)=>{let o;const n=e(r,(e=>{o=t(e);return o}));if(n!==o&&!r.isStream&&o){const e=n;const{then:r,catch:t,finally:s}=e;Object.setPrototypeOf(e,Object.getPrototypeOf(o));Object.defineProperties(e,Object.getOwnPropertyDescriptors(o));e.then=r;e.catch=t;e.finally=s}return n}));const got=(r,t={},o)=>{var n,s;let a=0;const iterateHandlers=r=>e.handlers[a++](r,a===e.handlers.length?getPromiseOrStream:iterateHandlers);if(I.default.plainObject(r)){const e={...r,...t};F.setNonEnumerableProperties([r,t],e);t=e;r=void 0}try{let s;try{callInitHooks(e.options.hooks.init,t);callInitHooks(null===(n=t.hooks)||void 0===n?void 0:n.init,t)}catch(e){s=e}const a=G(r,t,null!==o&&void 0!==o?o:e.options);a[F.kIsNormalizedAlready]=true;if(s)throw new z.RequestError(s.message,s,a);return iterateHandlers(a)}catch(r){if(t.isStream)throw r;return L.default(r,e.options.hooks.beforeError,null===(s=t.hooks)||void 0===s?void 0:s.beforeError)}};got.extend=(...r)=>{const t=[e.options];let o=[...e._rawHandlers];let n;for(const e of r)if(isGotInstance(e)){t.push(e.defaults.options);o.push(...e.defaults._rawHandlers);n=e.defaults.mutableDefaults}else{t.push(e);"handlers"in e&&o.push(...e.handlers);n=e.mutableDefaults}o=o.filter((e=>e!==U.defaultHandler));0===o.length&&o.push(U.defaultHandler);return create({options:mergeOptions(...t),handlers:o,mutableDefaults:Boolean(n)})};const paginateEach=async function*(r,t){let o=G(r,t,e.options);o.resolveBodyOnly=false;const n=o.pagination;if(!I.default.object(n))throw new TypeError("`options.pagination` must be implemented");const s=[];let{countLimit:a}=n;let i=0;while(i<n.requestLimit){0!==i&&await delay(n.backoff);const e=await got(void 0,void 0,o);const r=await n.transform(e);const t=[];for(const e of r)if(n.filter(e,s,t)){if(!n.shouldContinue(e,s,t))return;yield e;n.stackAllItems&&s.push(e);t.push(e);if(--a<=0)return}const c=n.paginate(e,s,t);if(false===c)return;c===e.request.options?o=e.request.options:void 0!==c&&(o=G(void 0,c,o));i++}};got.paginate=paginateEach;got.paginate.all=async(e,r)=>{const t=[];for await(const o of paginateEach(e,r))t.push(o);return t};got.paginate.each=paginateEach;got.stream=(e,r)=>got(e,{...r,isStream:true});for(const e of Q){got[e]=(r,t)=>got(r,{...t,method:e});got.stream[e]=(r,t)=>got(r,{...t,method:e,isStream:true})}Object.assign(got,$);Object.defineProperty(got,"defaults",{value:e.mutableDefaults?e:J.default(e),writable:e.mutableDefaults,configurable:e.mutableDefaults,enumerable:true});got.mergeOptions=mergeOptions;return got};U.default=create;M(N,U);var V="default"in e?e.default:e;var Y={};var K=Y&&Y.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);Object.defineProperty(e,o,{enumerable:true,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t);e[o]=r[t]});var W=Y&&Y.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||K(r,e,t)};Object.defineProperty(Y,"__esModule",{value:true});const X=V;const Z=U;const ee={options:{method:"GET",retry:{limit:2,methods:["GET","PUT","HEAD","DELETE","OPTIONS","TRACE"],statusCodes:[408,413,429,500,502,503,504,521,522,524],errorCodes:["ETIMEDOUT","ECONNRESET","EADDRINUSE","ECONNREFUSED","EPIPE","ENOTFOUND","ENETUNREACH","EAI_AGAIN"],maxRetryAfter:void 0,calculateDelay:({computedValue:e})=>e},timeout:{},headers:{"user-agent":"got (https://github.com/sindresorhus/got)"},hooks:{init:[],beforeRequest:[],beforeRedirect:[],beforeRetry:[],beforeError:[],afterResponse:[]},cache:void 0,dnsCache:void 0,decompress:true,throwHttpErrors:true,followRedirect:true,isStream:false,responseType:"text",resolveBodyOnly:false,maxRedirects:10,prefixUrl:"",methodRewriting:true,ignoreInvalidCookies:false,context:{},http2:false,allowGetBody:false,https:void 0,pagination:{transform:e=>"json"===e.request.options.responseType?e.body:JSON.parse(e.body),paginate:e=>{if(!Reflect.has(e.headers,"link"))return false;const r=e.headers.link.split(",");let t;for(const e of r){const r=e.split(";");if(r[1].includes("next")){t=r[0].trimStart().trim();t=t.slice(1,-1);break}}if(t){const e={url:new X.URL(t)};return e}return false},filter:()=>true,shouldContinue:()=>true,countLimit:Infinity,backoff:0,requestLimit:1e4,stackAllItems:true},parseJson:e=>JSON.parse(e),stringifyJson:e=>JSON.stringify(e),cacheOptions:{}},handlers:[Z.defaultHandler],mutableDefaults:false};const re=Z.default(ee);Y.default=re;Y=re;Y.default=re;Y.__esModule=true;W(U,Y);W(y,Y);var te=Y;const oe=Y.__esModule,ne=Y.defaultHandler,se=Y.CancelError,ae=Y.ParseError,ie=Y.UnsupportedProtocolError,ce=Y.ReadError,le=Y.TimeoutError,ue=Y.UploadError,de=Y.CacheError,fe=Y.HTTPError,pe=Y.MaxRedirectsError,me=Y.RequestError,Ee=Y.setNonEnumerableProperties,he=Y.knownHookEvents,ye=Y.withoutBody,be=Y.kIsNormalizedAlready;export{de as CacheError,se as CancelError,fe as HTTPError,pe as MaxRedirectsError,ae as ParseError,ce as ReadError,me as RequestError,le as TimeoutError,ie as UnsupportedProtocolError,ue as UploadError,oe as __esModule,te as default,ne as defaultHandler,be as kIsNormalizedAlready,he as knownHookEvents,Ee as setNonEnumerableProperties,ye as withoutBody};

