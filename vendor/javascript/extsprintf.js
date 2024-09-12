import r from"assert";import t from"util";import e from"process";var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var o={};var a=e;var i=r;var s=t;o.sprintf=jsSprintf;o.printf=jsPrintf;o.fprintf=jsFprintf;function jsSprintf(r){var t=["([^%]*)","%","(['\\-+ #0]*?)","([1-9]\\d*)?","(\\.([1-9]\\d*))?","[lhjztL]*?","([diouxXfFeEgGaAcCsSp%jr])"].join("");var e=new RegExp(t);var n=Array.prototype.slice.call(arguments,1);var o,a,f,p;var l,u,c,d,h;var v="";var g=1;i.equal("string",typeof r);while(null!==(h=e.exec(r))){v+=h[1];r=r.substring(h[0].length);o=h[2]||"";a=h[3]||0;f=h[4]||"";p=h[6];l=false;c=false;u=" ";if("%"!=p){if(0===n.length)throw new Error("too few args to sprintf");d=n.shift();g++;if(o.match(/[\' #]/))throw new Error("unsupported flags: "+o);if(f.length>0)throw new Error("non-zero precision not supported");o.match(/-/)&&(l=true);o.match(/0/)&&(u="0");o.match(/\+/)&&(c=true);switch(p){case"s":if(void 0===d||null===d)throw new Error("argument "+g+": attempted to print undefined or null "+"as a string");v+=doPad(u,a,l,d.toString());break;case"d":d=Math.floor(d);case"f":c=c&&d>0?"+":"";v+=c+doPad(u,a,l,d.toString());break;case"x":v+=doPad(u,a,l,d.toString(16));break;case"j":0===a&&(a=10);v+=s.inspect(d,false,a);break;case"r":v+=dumpException(d);break;default:throw new Error("unsupported conversion: "+p)}}else v+="%"}v+=r;return v}function jsPrintf(){var r=Array.prototype.slice.call(arguments);r.unshift(a.stdout);jsFprintf.apply(null,r)}function jsFprintf(r){var t=Array.prototype.slice.call(arguments,1);return r.write(jsSprintf.apply(this||n,t))}function doPad(r,t,e,n){var o=n;while(o.length<t)e?o+=r:o=r+o;return o}function dumpException(r){var t;if(!(r instanceof Error))throw new Error(jsSprintf("invalid type for %%r: %j",r));t="EXCEPTION: "+r.constructor.name+": "+r.stack;if(r.cause&&"function"===typeof r.cause){var e=r.cause();e&&(t+="\nCaused by: "+dumpException(e))}return t}const f=o.sprintf,p=o.printf,l=o.fprintf;export default o;export{l as fprintf,p as printf,f as sprintf};

