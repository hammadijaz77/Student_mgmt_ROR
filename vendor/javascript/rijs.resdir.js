import r from"minimist";import o from"browser-resolve";import e from"path";import t from"fs";import i from"glob";import s from"chokidar";import a from"utilise/append";import n from"utilise/values";import m from"utilise/keys";import c from"utilise/def";import l from"utilise/key";import p from"utilise/is";import u from"utilise/lo";import d from"utilise/by";import f from"utilise/za";import h from"utilise/log";import w from"utilise/err";import y from"minimatch";import g from"process";var v={};var k=g;v=function loader(o,{dir:e=".",watch:t=isNonProd(),pattern:i="/**/!(*test).{css,js}",autoload:s="resources",autolink:a="/resources/components/**/!(*test).{css,js}",aliases:n={}}={}){F("creating",{watch:t});E(a,{root:e}).map(r=>o.link(rel(e,r),rtype(o,r).shortname(r)));const{r:m="",resdirs:c=m}=r(k.argv.slice(2)),l=register(o,e),p=c.split(",").concat(b(e,s)).filter(Boolean).map(r=>b(r)).map($(i));o.watcher=N.watch(p,{ignored:/\b_/}).on("error",G).on("add",l).on("change",l).on("ready",async()=>{t||o.watcher.close();await Promise.all(z(o.resources).map(r=>r.headers.loading)).catch(G);S(o,"ready",true);o.emit("ready")});o.load=(r,t)=>{if(o.resources[r])return o.resources[r];const i=bresolve(o.aliases.dst[r]||r,b(e,"foo")),s=rel(e,i);t?o.link(s,t):o.aliases.dst[r]||r==s||o.link(r,s);return l(i)};o.resource=(r,e,t)=>{o(r,e,t);return o};return o};const register=(r,o)=>e=>{const t=rtype(r,e);if(!P(e))throw new Error(`no such resource at ${e}`);if(!t)throw new Error(`could not understand how to load resource at ${e}`);delete{}[e];return t.load({name:rel(o,e),headers:{path:e}})};const rtype=(r,o)=>z(r.types).filter(r=>r.ext).sort(D("ext.length")).find(({ext:r})=>H(j(o),r));const rel=(r,o)=>"./"+x(r,o).replace(/\\/g,"/");const bresolve=(r,e)=>o.sync(r,{filename:e});function isNonProd(){return"prod"!=A("production")&&"production"!=A("production")}const{resolve:b,relative:x,basename:j}=e,P=t.existsSync,E=i.sync,N=s,$=a,z=n,B=m,S=c,_=l,q=p,A=u,C=d,D=f,F=h("[ri/resdir]"),G=w("[ri/resdir]"),H=y,extname=r=>[""].concat(r.split(".").slice(1)).join(".");var I=v;export default I;

