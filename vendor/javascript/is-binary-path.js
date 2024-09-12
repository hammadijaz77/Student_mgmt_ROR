import r from"path";import e from"binary-extensions";var t={};var a=r;var n=e;var o=Object.create(null);n.forEach((function(r){o[r]=true}));t=function(r){return a.extname(r).slice(1).toLowerCase()in o};var i=t;export default i;

