import{e as r}from"../../_/9e083af2.js";export{e as default}from"../../_/9e083af2.js";import{promisify as t}from"./util.js";import"./events.js";import"../../_/8ddf35de.js";import"../../_/8dc3f476.js";import"../../_/a421dfba.js";import"../../_/57403c48.js";import"../../_/633ae550.js";import"../../_/e0803811.js";import"../../_/cb95b980.js";var a=r.Readable;a.wrap=function(e,r){r=Object.assign({objectMode:null!=e.readableObjectMode||null!=e.objectMode||true},r);r.destroy=function(r,t){e.destroy(r);t(r)};return new a(r).wrap(e)};var i=r.Writable;var o=r.Duplex;var s=r.Transform;var p=r.PassThrough;var n=r.finished;var d=r.pipeline;var f=r.Stream;const j={finished:t(r.finished),pipeline:t(r.pipeline)};export{o as Duplex,p as PassThrough,a as Readable,f as Stream,s as Transform,i as Writable,n as finished,d as pipeline,j as promises};

