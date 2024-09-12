import e from"readable-stream";import t from"crc";import r from"buffer";import s from"zlib";var i={};var a=r.Buffer;const{Transform:c}=e;const{crc32:h}=t;class CRC32Stream extends c{constructor(e){super(e);this.checksum=a.allocUnsafe(4);this.checksum.writeInt32BE(0,0);this.rawSize=0}_transform(e,t,r){if(e){this.checksum=h(e,this.checksum);this.rawSize+=e.length}r(null,e)}digest(e){const t=a.allocUnsafe(4);t.writeUInt32BE(this.checksum>>>0,0);return e?t.toString(e):t}hex(){return this.digest("hex").toUpperCase()}size(){return this.rawSize}}i=CRC32Stream;var n=i;var o={};var m=r.Buffer;const{DeflateRaw:u}=s;const{crc32:f}=t;class DeflateCRC32Stream extends u{constructor(e){super(e);this.checksum=m.allocUnsafe(4);this.checksum.writeInt32BE(0,0);this.rawSize=0;this.compressedSize=0}push(e,t){e&&(this.compressedSize+=e.length);return super.push(e,t)}write(e,t,r){if(e){this.checksum=f(e,this.checksum);this.rawSize+=e.length}return super.write(e,t,r)}digest(e){const t=m.allocUnsafe(4);t.writeUInt32BE(this.checksum>>>0,0);return e?t.toString(e):t}hex(){return this.digest("hex").toUpperCase()}size(e=false){return e?this.compressedSize:this.rawSize}}o=DeflateCRC32Stream;var l=o;var p={};p={CRC32Stream:n,DeflateCRC32Stream:l};var S=p;const C=p.CRC32Stream;export default S;export{C as CRC32Stream};
