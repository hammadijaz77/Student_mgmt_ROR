import e from"jsonparse";import t from"through";import r from"buffer";var n={};var i=r.Buffer;var u=e,s=t;var o=i.from&&i.from!==Uint8Array.from;n.parse=function(e,t){var r,n;var f=new u;var a=s((function(e){"string"===typeof e&&(e=o?i.from(e):new i(e));f.write(e)}),(function(e){e&&a.write(e);r&&a.emit("header",r);n&&a.emit("footer",n);a.queue(null)}));"string"===typeof e&&(e=e.split(".").map((function(e){return"$*"===e?{emitKey:true}:"*"===e||(""===e?{recurse:true}:e)})));var l=0,c;e&&e.length||(e=null);f.onValue=function(n){this.root||(a.root=n);if(e){var i=0;var u=0;var s=false;var o=false;while(i<e.length){var f=e[i];var c;u++;if(f&&!f.recurse){c=u===this.stack.length?this:this.stack[u];if(!c)return;if(!check(f,c.key)){setHeaderFooter(c.key,n);return}s=!!f.emitKey;o=!!f.emitPath;i++}else{i++;var h=e[i];if(!h)return;while(true){c=u===this.stack.length?this:this.stack[u];if(!c)return;if(check(h,c.key)){i++;Object.isFrozen(this.stack[u])||(this.stack[u].value=null);break}setHeaderFooter(c.key,n);u++}}}if(r){a.emit("header",r);r=false}if(u===this.stack.length){l++;var v=this.stack.slice(1).map((function(e){return e.key})).concat([this.key]);var k=n;if(null!=k&&null!=(k=t?t(k,v):k)){if(s||o){k={value:k};s&&(k["key"]=this.key);o&&(k["path"]=v)}a.queue(k)}this.value&&delete this.value[this.key];for(var y in this.stack)Object.isFrozen(this.stack[y])||(this.stack[y].value=null)}}};f._onToken=f.onToken;f.onToken=function(t,r){f._onToken(t,r);if(0===this.stack.length&&a.root){e||a.queue(a.root);l=0;a.root=null}};f.onError=function(e){e.message.indexOf("at position")>-1&&(e.message="Invalid JSON ("+e.message+")");a.emit("error",e)};return a;function setHeaderFooter(e,t){if(false!==r){r=r||{};r[e]=t}if(false!==n&&false===r){n=n||{};n[e]=t}}};function check(e,t){return"string"===typeof e?t==e:e&&"function"===typeof e.exec?e.exec(t):"boolean"===typeof e||"object"===typeof e?e:"function"===typeof e&&e(t)}n.stringify=function(e,t,r,n){n=n||0;if(false===e){e="";t="\n";r=""}else if(null==e){e="[\n";t="\n,\n";r="\n]\n"}var i,u=true,o=false;i=s((function(r){o=true;try{var s=JSON.stringify(r,null,n)}catch(e){return i.emit("error",e)}if(u){u=false;i.queue(e+s)}else i.queue(t+s)}),(function(t){o||i.queue(e);i.queue(r);i.queue(null)}));return i};n.stringifyObject=function(e,t,r,n){n=n||0;if(false===e){e="";t="\n";r=""}else if(null==e){e="{\n";t="\n,\n";r="\n}\n"}var i=true;var u=false;var o=s((function(r){u=true;var s=JSON.stringify(r[0])+":"+JSON.stringify(r[1],null,n);if(i){i=false;this.queue(e+s)}else this.queue(t+s)}),(function(t){u||this.queue(e);this.queue(r);this.queue(null)}));return o};const f=n.parse,a=n.stringify,l=n.stringifyObject;export default n;export{f as parse,a as stringify,l as stringifyObject};
