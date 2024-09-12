import r from"sha.js";import f from"buffer";import t from"json-stable-stringify";var e={};var a=r;var s=f.Buffer;var i=t;e=function hash(r,f,t){r="string"===typeof r||s.isBuffer(r)?r:i(r);return a(f||"sha1").update(r,s.isBuffer(r)?null:"utf8").digest(t||"hex")};var o=e;export default o;

