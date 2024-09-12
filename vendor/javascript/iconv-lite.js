import e from"safer-buffer";import n from"./bom-handling.js";import"string_decoder";import"../encodings/internal.js";import"../encodings/utf16.js";import"../encodings/utf7.js";import"../encodings/sbcs-codec.js";import"../encodings/sbcs-data.js";import"../encodings/sbcs-data-generated.js";import"../encodings/dbcs-codec.js";import"../encodings/dbcs-data.js";import r from"../encodings/index.js";import"buffer";import"stream";import o from"./streams.js";import i from"./extend-node.js";import t from"process";var c={};var d=t;var a=e.Buffer;var s=n,g=c;g.encodings=null;g.defaultCharUnicode="�";g.defaultCharSingleByte="?";g.encode=function encode(e,n,r){e=""+(e||"");var o=g.getEncoder(n,r);var i=o.write(e);var t=o.end();return t&&t.length>0?a.concat([i,t]):i};g.decode=function decode(e,n,r){if("string"===typeof e){if(!g.skipDecodeWarning){console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding");g.skipDecodeWarning=true}e=a.from(""+(e||""),"binary")}var o=g.getDecoder(n,r);var i=o.write(e);var t=o.end();return t?i+t:i};g.encodingExists=function encodingExists(e){try{g.getCodec(e);return true}catch(e){return false}};g.toEncoding=g.encode;g.fromEncoding=g.decode;g._codecDataCache={};g.getCodec=function getCodec(e){g.encodings||(g.encodings=r);var n=g._canonicalizeEncoding(e);var o={};while(true){var i=g._codecDataCache[n];if(i)return i;var t=g.encodings[n];switch(typeof t){case"string":n=t;break;case"object":for(var c in t)o[c]=t[c];o.encodingName||(o.encodingName=n);n=t.type;break;case"function":o.encodingName||(o.encodingName=n);i=new t(o,g);g._codecDataCache[o.encodingName]=i;return i;default:throw new Error("Encoding not recognized: '"+e+"' (searched as: '"+n+"')")}}};g._canonicalizeEncoding=function(e){return(""+e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g,"")};g.getEncoder=function getEncoder(e,n){var r=g.getCodec(e),o=new r.encoder(n,r);r.bomAware&&n&&n.addBOM&&(o=new s.PrependBOM(o,n));return o};g.getDecoder=function getDecoder(e,n){var r=g.getCodec(e),o=new r.decoder(n,r);!r.bomAware||n&&false===n.stripBOM||(o=new s.StripBOM(o,n));return o};var f="undefined"!==typeof d&&d.versions&&d.versions.node;if(f){var m=f.split(".").map(Number);(m[0]>0||m[1]>=10)&&o(g);i(g)}"Ā"!="Ā"&&console.error("iconv-lite warning: javascript files use encoding different from utf-8. See https://github.com/ashtuchkin/iconv-lite/wiki/Javascript-source-file-encodings for more info.");export default c;

