import r from"JSONStream";import e from"defined";import o from"through2";import n from"umd";import t from"safe-buffer";import a from"fs";import i from"path";import u from"combine-source-map";import s from"process";var f={};var m=s;var p=r;var l=e;var d=o;var c=n;var v=t.Buffer;var h=a;var g=i;var w=u;var x=g.join(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname,"_prelude.js");var y=h.readFileSync(x,"utf8");function newlinesIn(r){if(!r)return 0;var e=r.match(/\n/g);return e?e.length:0}f=function(r){r||(r={});var e=r.raw?d.obj():p.parse([true]);var o=d.obj((function(r,o,n){e.write(r);n()}),(function(){e.end()}));e.pipe(d.obj(write,end));o.standaloneModule=r.standaloneModule;o.hasExports=r.hasExports;var n=true;var t=[];var a=l(r.basedir,m.cwd());var i=r.prelude||y;var u=r.preludePath||g.relative(a,x).replace(/\\/g,"/");var s=1+newlinesIn(i);var f;return o;function write(e,a,m){if(n&&r.standalone){var p=c.prelude(r.standalone).trim();o.push(v.from(p+"return ","utf8"))}else if(n&&o.hasExports){var p=r.externalRequireName||"require";o.push(v.from(p+"=","utf8"))}n&&o.push(v.from(i+"({","utf8"));if(e.sourceFile&&!e.nomap){if(!f){f=w.create(null,r.sourceRoot);f.addFile({sourceFile:u,source:i},{line:0})}f.addFile({sourceFile:e.sourceFile,source:e.source},{line:s})}var l=[n?"":",",JSON.stringify(e.id),":[","function(require,module,exports){\n",w.removeComments(e.source),"\n},","{"+Object.keys(e.deps||{}).sort().map((function(r){return JSON.stringify(r)+":"+JSON.stringify(e.deps[r])})).join(",")+"}","]"].join("");o.push(v.from(l,"utf8"));s+=newlinesIn(l);n=false;e.entry&&void 0!==e.order?t[e.order]=e.id:e.entry&&t.push(e.id);m()}function end(){n&&o.push(v.from(i+"({","utf8"));t=t.filter((function(r){return void 0!==r}));o.push(v.from("},{},"+JSON.stringify(t)+")","utf8"));r.standalone&&!n&&o.push(v.from("("+JSON.stringify(o.standaloneModule)+")"+c.postlude(r.standalone),"utf8"));if(f){var e=f.comment();r.sourceMapPrefix&&(e=e.replace(/^\/\/#/,(function(){return r.sourceMapPrefix})));o.push(v.from("\n"+e+"\n","utf8"))}f||r.standalone||o.push(v.from(";\n","utf8"));o.push(null)}};var j=f;export default j;
