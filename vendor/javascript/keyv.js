import*as e from"events";import*as t from"json-buffer";var s="default"in e?e.default:e;var r="default"in t?t.default:t;var o={};function _nullRequire(e){var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}const i=s;const n=r;const loadStore=e=>{const t={redis:"@keyv/redis",rediss:"@keyv/redis",mongodb:"@keyv/mongo",mongo:"@keyv/mongo",sqlite:"@keyv/sqlite",postgresql:"@keyv/postgres",postgres:"@keyv/postgres",mysql:"@keyv/mysql",etcd:"@keyv/etcd",offline:"@keyv/offline",tiered:"@keyv/tiered"};if(e.adapter||e.uri){const s=e.adapter||/^[^:+]*/.exec(e.uri)[0];return new(_nullRequire(t[s]))(e)}return new Map};const a=["sqlite","postgres","mysql","mongo","redis","tiered"];class Keyv extends i{constructor(e,{emitErrors:t=true,...s}={}){super();this.opts={namespace:"keyv",serialize:n.stringify,deserialize:n.parse,..."string"===typeof e?{uri:e}:e,...s};if(!this.opts.store){const e={...this.opts};this.opts.store=loadStore(e)}if(this.opts.compression){const e=this.opts.compression;this.opts.serialize=e.serialize.bind(e);this.opts.deserialize=e.deserialize.bind(e)}"function"===typeof this.opts.store.on&&t&&this.opts.store.on("error",(e=>this.emit("error",e)));this.opts.store.namespace=this.opts.namespace;const generateIterator=e=>async function*(){for await(const[t,s]of"function"===typeof e?e(this.opts.store.namespace):e){const e=await this.opts.deserialize(s);this.opts.store.namespace&&!t.includes(this.opts.store.namespace)||("number"===typeof e.expires&&Date.now()>e.expires?this.delete(t):yield[this._getKeyUnprefix(t),e.value])}};"function"===typeof this.opts.store[Symbol.iterator]&&this.opts.store instanceof Map?this.iterator=generateIterator(this.opts.store):"function"===typeof this.opts.store.iterator&&this.opts.store.opts&&this._checkIterableAdaptar()&&(this.iterator=generateIterator(this.opts.store.iterator.bind(this.opts.store)))}_checkIterableAdaptar(){return a.includes(this.opts.store.opts.dialect)||a.findIndex((e=>this.opts.store.opts.url.includes(e)))>=0}_getKeyPrefix(e){return`${this.opts.namespace}:${e}`}_getKeyPrefixArray(e){return e.map((e=>`${this.opts.namespace}:${e}`))}_getKeyUnprefix(e){return e.split(":").splice(1).join(":")}get(e,t){const{store:s}=this.opts;const r=Array.isArray(e);const o=r?this._getKeyPrefixArray(e):this._getKeyPrefix(e);if(r&&void 0===s.getMany){const e=[];for(const r of o)e.push(Promise.resolve().then((()=>s.get(r))).then((e=>"string"===typeof e||this.opts.compression?this.opts.deserialize(e):e)).then((e=>{if(void 0!==e&&null!==e)return"number"===typeof e.expires&&Date.now()>e.expires?this.delete(r).then((()=>{})):t&&t.raw?e:e.value})));return Promise.allSettled(e).then((e=>{const t=[];for(const s of e)t.push(s.value);return t}))}return Promise.resolve().then((()=>r?s.getMany(o):s.get(o))).then((e=>"string"===typeof e||this.opts.compression?this.opts.deserialize(e):e)).then((s=>{if(void 0!==s&&null!==s)return r?s.map(((s,r)=>{"string"===typeof s&&(s=this.opts.deserialize(s));if(void 0!==s&&null!==s){if(!("number"===typeof s.expires&&Date.now()>s.expires))return t&&t.raw?s:s.value;this.delete(e[r]).then((()=>{}))}})):"number"===typeof s.expires&&Date.now()>s.expires?this.delete(e).then((()=>{})):t&&t.raw?s:s.value}))}set(e,t,s){const r=this._getKeyPrefix(e);"undefined"===typeof s&&(s=this.opts.ttl);0===s&&(s=void 0);const{store:o}=this.opts;return Promise.resolve().then((()=>{const e="number"===typeof s?Date.now()+s:null;"symbol"===typeof t&&this.emit("error","symbol cannot be serialized");t={value:t,expires:e};return this.opts.serialize(t)})).then((e=>o.set(r,e,s))).then((()=>true))}delete(e){const{store:t}=this.opts;if(Array.isArray(e)){const s=this._getKeyPrefixArray(e);if(void 0===t.deleteMany){const e=[];for(const r of s)e.push(t.delete(r));return Promise.allSettled(e).then((e=>e.every((e=>true===e.value))))}return Promise.resolve().then((()=>t.deleteMany(s)))}const s=this._getKeyPrefix(e);return Promise.resolve().then((()=>t.delete(s)))}clear(){const{store:e}=this.opts;return Promise.resolve().then((()=>e.clear()))}has(e){const t=this._getKeyPrefix(e);const{store:s}=this.opts;return Promise.resolve().then((async()=>{if("function"===typeof s.has)return s.has(t);const e=await s.get(t);return void 0!==e}))}disconnect(){const{store:e}=this.opts;if("function"===typeof e.disconnect)return e.disconnect()}}o=Keyv;var p=o;export{p as default};
