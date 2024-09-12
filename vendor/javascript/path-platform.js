import r from"util";import t from"path";import e from"process";var n={};(function(){var i=e;var o="win32"===i.platform;var a=r;var s=t;if(s.posix)n=s;else{var l=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;var u=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;var p={};var normalizeUNCRoot=function(r){return"\\\\"+r.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")};p.resolve=function(){var r="",t="",e=false;for(var n=arguments.length-1;n>=-1;n--){var o;if(n>=0)o=arguments[n];else if(r){o=i.env["="+r];o&&o.substr(0,3).toLowerCase()===r.toLowerCase()+"\\"||(o=r+"\\")}else o=i.cwd();if(!a.isString(o))throw new TypeError("Arguments to path.resolve must be strings");if(o){var s=l.exec(o),u=s[1]||"",h=u&&":"!==u.charAt(1),v=p.isAbsolute(o),c=s[3];if(!u||!r||u.toLowerCase()===r.toLowerCase()){r||(r=u);if(!e){t=c+"\\"+t;e=v}if(r&&e)break}}}h&&(r=normalizeUNCRoot(r));t=normalizeArray(t.split(/[\\\/]+/),!e).join("\\");r&&":"===r.charAt(1)&&(r=r[0].toLowerCase()+r.substr(1));return r+(e?"\\":"")+t||"."};p.normalize=function(r){var t=l.exec(r),e=t[1]||"",n=e&&":"!==e.charAt(1),i=p.isAbsolute(r),o=t[3],a=/[\\\/]$/.test(o);e&&":"===e.charAt(1)&&(e=e[0].toLowerCase()+e.substr(1));o=normalizeArray(o.split(/[\\\/]+/),!i).join("\\");o||i||(o=".");o&&a&&(o+="\\");n&&(e=normalizeUNCRoot(e));return e+(i?"\\":"")+o};p.isAbsolute=function(r){var t=l.exec(r),e=t[1]||"",n=!!e&&":"!==e.charAt(1);return!!t[2]||n};p.join=function(){function f(r){if(!a.isString(r))throw new TypeError("Arguments to path.join must be strings");return r}var r=Array.prototype.filter.call(arguments,f);var t=r.join("\\");/^[\\\/]{2}[^\\\/]/.test(r[0])||(t=t.replace(/^[\\\/]{2,}/,"\\"));return p.normalize(t)};p.relative=function(r,t){r=p.resolve(r);t=p.resolve(t);var e=r.toLowerCase();var n=t.toLowerCase();function trim(r){var t=0;for(;t<r.length;t++)if(""!==r[t])break;var e=r.length-1;for(;e>=0;e--)if(""!==r[e])break;return t>e?[]:r.slice(t,e+1)}var i=trim(t.split("\\"));var o=trim(e.split("\\"));var a=trim(n.split("\\"));var s=Math.min(o.length,a.length);var l=s;for(var u=0;u<s;u++)if(o[u]!==a[u]){l=u;break}if(0==l)return t;var h=[];for(var u=l;u<o.length;u++)h.push("..");h=h.concat(i.slice(l));return h.join("\\")};p._makeLong=function(r){if(!a.isString(r))return r;if(!r)return"";var t=p.resolve(r);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):r};p.dirname=function(r){var t=win32SplitPath(r),e=t[0],n=t[1];if(!e&&!n)return".";n&&(n=n.substr(0,n.length-1));return e+n};p.basename=function(r,t){var e=win32SplitPath(r)[2];t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length));return e};p.extname=function(r){return win32SplitPath(r)[3]};p.format=function(r){if(!a.isObject(r))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof r);var t=r.root||"";if(!a.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof r.root);var e=r.dir;var n=r.base||"";return e.slice(e.length-1,e.length)===p.sep?e+n:e?e+p.sep+n:n};p.parse=function(r){if(!a.isString(r))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof r);var t=win32SplitPath(r);if(!t||4!==t.length)throw new TypeError("Invalid path '"+r+"'");return{root:t[0],dir:t[0]+t[1].slice(0,t[1].length-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}};p.sep="\\";p.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var v={};v.resolve=function(){var r="",t=false;for(var e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:i.cwd();if(!a.isString(n))throw new TypeError("Arguments to path.resolve must be strings");if(n){r=n+"/"+r;t="/"===n.charAt(0)}}r=normalizeArray(r.split("/"),!t).join("/");return(t?"/":"")+r||"."};v.normalize=function(r){var t=v.isAbsolute(r),e="/"===r.substr(-1);r=normalizeArray(r.split("/"),!t).join("/");r||t||(r=".");r&&e&&(r+="/");return(t?"/":"")+r};v.isAbsolute=function(r){return"/"===r.charAt(0)};v.join=function(){var r="";for(var t=0;t<arguments.length;t++){var e=arguments[t];if(!a.isString(e))throw new TypeError("Arguments to path.join must be strings");e&&(r+=r?"/"+e:e)}return v.normalize(r)};v.relative=function(r,t){r=v.resolve(r).substr(1);t=v.resolve(t).substr(1);function trim(r){var t=0;for(;t<r.length;t++)if(""!==r[t])break;var e=r.length-1;for(;e>=0;e--)if(""!==r[e])break;return t>e?[]:r.slice(t,e+1)}var e=trim(r.split("/"));var n=trim(t.split("/"));var i=Math.min(e.length,n.length);var o=i;for(var a=0;a<i;a++)if(e[a]!==n[a]){o=a;break}var s=[];for(var a=o;a<e.length;a++)s.push("..");s=s.concat(n.slice(o));return s.join("/")};v._makeLong=function(r){return r};v.dirname=function(r){var t=posixSplitPath(r),e=t[0],n=t[1];if(!e&&!n)return".";n&&(n=n.substr(0,n.length-1));return e+n};v.basename=function(r,t){var e=posixSplitPath(r)[2];t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length));return e};v.extname=function(r){return posixSplitPath(r)[3]};v.format=function(r){if(!a.isObject(r))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof r);var t=r.root||"";if(!a.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof r.root);var e=r.dir?r.dir+v.sep:"";var n=r.base||"";return e+n};v.parse=function(r){if(!a.isString(r))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof r);var t=posixSplitPath(r);if(!t||4!==t.length)throw new TypeError("Invalid path '"+r+"'");t[1]=t[1]||"";t[2]=t[2]||"";t[3]=t[3]||"";return{root:t[0],dir:t[0]+t[1].slice(0,t[1].length-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}};v.sep="/";v.delimiter=":";n=o?p:v;n.posix=v;n.win32=p}function normalizeArray(r,t){var e=[];for(var n=0;n<r.length;n++){var i=r[n];i&&"."!==i&&(".."===i?e.length&&".."!==e[e.length-1]?e.pop():t&&e.push(".."):e.push(i))}return e}function win32SplitPath(r){var t=l.exec(r),e=(t[1]||"")+(t[2]||""),n=t[3]||"";var i=u.exec(n),o=i[1],a=i[2],s=i[3];return[e,o,a,s]}function posixSplitPath(r){return h.exec(r).slice(1)}})();var i=n;const o=n.posix,a=n.win32;export default i;export{o as posix,a as win32};

