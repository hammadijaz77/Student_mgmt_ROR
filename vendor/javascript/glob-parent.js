import r from"path";import a from"is-glob";var o={};var t=r;var e=a;o=function globParent(r){r+="a";do{r=t.dirname(r)}while(e(r));return r};var i=o;export default i;

