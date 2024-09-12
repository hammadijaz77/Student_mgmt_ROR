import r from"remove-trailing-separator";var e={};var t=r;e=function normalizePath(r,e){if("string"!==typeof r)throw new TypeError("expected a string");r=r.replace(/[\\\/]+/g,"/");false!==e&&(r=t(r));return r};var a=e;export default a;

