import r from"micromatch";import t from"normalize-path";import e from"path";var a={};var n=r;var i=t;var l=e;var arrify=function(r){return null==r?[]:Array.isArray(r)?r:[r]};var anymatch=function(r,t,e,a,o){r=arrify(r);t=arrify(t);if(1===arguments.length)return anymatch.bind(null,r.map((function(r){return"string"===typeof r&&"!"!==r[0]?n.matcher(r):r})));a=a||0;var c=t[0];var u,s;var f=false;var p=-1;function testCriteria(r,e){var i;switch(Object.prototype.toString.call(r)){case"[object String]":i=c===r||u&&u===r;i=i||n.isMatch(c,r);break;case"[object RegExp]":i=r.test(c)||u&&r.test(u);break;case"[object Function]":i=r.apply(null,t);i=i||s&&r.apply(null,s);break;default:i=false}i&&(p=e+a);return i}var v=r;var m=v.reduce((function(t,e,a){if("string"===typeof e&&"!"===e[0]){v===r&&(v=v.slice());v[a]=null;t.push(e.substr(1))}return t}),[]);if(!m.length||!n.any(c,m)){if("\\"===l.sep&&"string"===typeof c){u=i(c);u=u===c?null:u;u&&(s=[u].concat(t.slice(1)))}f=v.slice(a,o).some(testCriteria)}return true===e?p:f};a=anymatch;var o=a;export default o;
