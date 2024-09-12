import e from"fs";import r from"path";import a from"resolve";import n from"process";var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var s=n;var o=e;var l=r;var f=a;function nodeModulesPaths(e,r){var a="win32"===s.platform?/[\/\\]/:/\/+/;var n=e.split(a);var i=[];for(var t=n.length-1;t>=0;t--)if("node_modules"!==n[t]){var o=l.join.apply(l,n.slice(0,t+1).concat(["node_modules"]));n[0].match(/([A-Za-z]:)/)||(o="/"+o);i.push(o)}return i}function find_shims_in_package(e,r,a,n){try{var i=JSON.parse(e)}catch(r){r.message=e+" : "+r.message;throw r}var t=getReplacements(i,n);if(t)if("string"!==typeof t){Object.keys(t).forEach((function(e){var n;if(false===t[e])n=l.normalize(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname+"/empty.js");else{n=t[e];"."===n[0]&&(n=l.resolve(r,n))}"/"!==e[0]&&"."!==e[0]||(e=l.resolve(r,e));a[e]=n}));[".js",".json"].forEach((function(e){Object.keys(a).forEach((function(r){a[r+e]||(a[r+e]=a[r])}))}))}else{var s=l.resolve(r,i.main||"index.js");a[s]=l.resolve(r,t)}}function load_shims(e,r,a){var n=Object.create(null);(function next(){var i=e.shift();if(!i)return a(null,n);var t=l.join(i,"package.json");o.readFile(t,"utf8",(function(e,t){if(e)return"ENOENT"===e.code?next():a(e);try{find_shims_in_package(t,i,n,r);return a(null,n)}catch(e){return a(e)}}))})()}function load_shims_sync(e,r){var a=Object.create(null);var n;while(n=e.shift()){var i=l.join(n,"package.json");try{var t=o.readFileSync(i,"utf8");find_shims_in_package(t,n,a,r);return a}catch(e){if("ENOENT"===e.code)continue;throw e}}return a}function build_resolve_opts(e,r){var a=e.packageFilter;var n=normalizeBrowserFieldName(e.browser);e.basedir=r;e.packageFilter=function(e,r){a&&(e=a(e,r));var i=getReplacements(e,n);if(!i)return e;e[n]=i;if("string"===typeof i){e.main=i;return e}var t=i[e.main||"./index.js"]||i["./"+e.main||"./index.js"];e.main=t||e.main;return e};var t=e.pathFilter;e.pathFilter=function(e,r,a){"."!=a[0]&&(a="./"+a);var s;t&&(s=t.apply(this||i,arguments));if(s)return s;var o=e[n];if(o){s=o[a];if(!s&&""===l.extname(a)){s=o[a+".js"];s||(s=o[a+".json"])}return s}};return e}function resolve(e,r,a){r=r||{};r.filename=r.filename||"";var n=l.dirname(r.filename);r.basedir&&(n=r.basedir);var i=nodeModulesPaths(n);r.paths&&i.push.apply(i,r.paths);i=i.map((function(e){return l.dirname(e)}));load_shims(i,r.browser,(function(i,t){if(i)return a(i);var s=l.resolve(r.basedir||l.dirname(r.filename),e);if(t[e]||t[s]){var o=t[e]?e:s;if("/"===t[o][0])return f(t[o],build_resolve_opts(r,n),(function(e,r,n){a(null,r,n)}));e=t[o]}var u=r.modules||Object.create(null);var c=u[e];if(c)return a(null,c);var m=f(e,build_resolve_opts(r,n),(function(e,r,n){if(e)return a(e);var i=t&&t[r]||r;a(null,i,n)}))}))}resolve.sync=function(e,r){r=r||{};r.filename=r.filename||"";var a=l.dirname(r.filename);r.basedir&&(a=r.basedir);var n=nodeModulesPaths(a);r.paths&&n.push.apply(n,r.paths);n=n.map((function(e){return l.dirname(e)}));var i=load_shims_sync(n,r.browser);var t=l.resolve(r.basedir||l.dirname(r.filename),e);if(i[e]||i[t]){var s=i[e]?e:t;if("/"===i[s][0])return f.sync(i[s],build_resolve_opts(r,a));e=i[s]}var o=r.modules||Object.create(null);var u=o[e];if(u)return u;var c=f.sync(e,build_resolve_opts(r,a));return i&&i[c]||c};function normalizeBrowserFieldName(e){return e||"browser"}function getReplacements(e,r){r=normalizeBrowserFieldName(r);var a=e[r]||e.browser;"string"!==typeof e.browserify||a||(a=e.browserify);return a}t=resolve;var u=t;export default u;

