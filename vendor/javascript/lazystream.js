import*as e from"util";import*as a from"readable-stream/passthrough";var t="default"in e?e.default:e;var i="default"in a?a.default:a;var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var l={};var s=t;var n=i;l={Readable:Readable,Writable:Writable};s.inherits(Readable,n);s.inherits(Writable,n);function beforeFirstCall(e,a,t){e[a]=function(){delete e[a];t.apply(this||r,arguments);return(this||r)[a].apply(this||r,arguments)}}function Readable(e,a){if(!((this||r)instanceof Readable))return new Readable(e,a);n.call(this||r,a);beforeFirstCall(this||r,"_read",(function(){var t=e.call(this||r,a);var i=(this||r).emit.bind(this||r,"error");t.on("error",i);t.pipe(this||r)}));this.emit("readable")}function Writable(e,a){if(!((this||r)instanceof Writable))return new Writable(e,a);n.call(this||r,a);beforeFirstCall(this||r,"_write",(function(){var t=e.call(this||r,a);var i=(this||r).emit.bind(this||r,"error");t.on("error",i);this.pipe(t)}));this.emit("writable")}var o=l;const b=l.Readable,f=l.Writable;export{b as Readable,f as Writable,o as default};

