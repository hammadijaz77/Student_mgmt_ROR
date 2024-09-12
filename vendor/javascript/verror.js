import r from"assert-plus";import t from"util";import o from"extsprintf";import e from"core-util-is";var s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var n={};var i=r;var a=t;var u=o;var c=e.isError;var l=u.sprintf;n=VError;VError.VError=VError;VError.SError=SError;VError.WError=WError;VError.MultiError=MultiError;function parseConstructorArguments(r){var t,o,e,s,n;i.object(r,"args");i.bool(r.strict,"args.strict");i.array(r.argv,"args.argv");t=r.argv;if(0===t.length){o={};e=[]}else if(c(t[0])){o={cause:t[0]};e=t.slice(1)}else if("object"===typeof t[0]){o={};for(n in t[0])o[n]=t[0][n];e=t.slice(1)}else{i.string(t[0],"first argument to VError, SError, or WError "+"constructor must be a string, object, or Error");o={};e=t}i.object(o);o.strict||r.strict||(e=e.map((function(r){return null===r?"null":void 0===r?"undefined":r})));s=0===e.length?"":l.apply(null,e);return{options:o,shortmessage:s}}function VError(){var r,t,o,e,n,a,u;r=Array.prototype.slice.call(arguments,0);if(!((this||s)instanceof VError)){t=Object.create(VError.prototype);VError.apply(t,arguments);return t}o=parseConstructorArguments({argv:r,strict:false});if(o.options.name){i.string(o.options.name,'error\'s "name" must be a string');(this||s).name=o.options.name}(this||s).jse_shortmsg=o.shortmessage;a=o.shortmessage;e=o.options.cause;if(e){i.ok(c(e),"cause is not an Error");(this||s).jse_cause=e;o.options.skipCauseMessage||(a+=": "+e.message)}(this||s).jse_info={};if(o.options.info)for(u in o.options.info)(this||s).jse_info[u]=o.options.info[u];(this||s).message=a;Error.call(this||s,a);if(Error.captureStackTrace){n=o.options.constructorOpt||(this||s).constructor;Error.captureStackTrace(this||s,n)}return this||s}a.inherits(VError,Error);VError.prototype.name="VError";VError.prototype.toString=function ve_toString(){var r=this.hasOwnProperty("name")&&(this||s).name||(this||s).constructor.name||(this||s).constructor.prototype.name;(this||s).message&&(r+=": "+(this||s).message);return r};VError.prototype.cause=function ve_cause(){var r=VError.cause(this||s);return null===r?void 0:r};VError.cause=function(r){i.ok(c(r),"err must be an Error");return c(r.jse_cause)?r.jse_cause:null};VError.info=function(r){var t,o,e;i.ok(c(r),"err must be an Error");o=VError.cause(r);t=null!==o?VError.info(o):{};if("object"==typeof r.jse_info&&null!==r.jse_info)for(e in r.jse_info)t[e]=r.jse_info[e];return t};VError.findCauseByName=function(r,t){var o;i.ok(c(r),"err must be an Error");i.string(t,"name");i.ok(t.length>0,"name cannot be empty");for(o=r;null!==o;o=VError.cause(o)){i.ok(c(o));if(o.name==t)return o}return null};VError.hasCauseWithName=function(r,t){return null!==VError.findCauseByName(r,t)};VError.fullStack=function(r){i.ok(c(r),"err must be an Error");var t=VError.cause(r);return t?r.stack+"\ncaused by: "+VError.fullStack(t):r.stack};VError.errorFromList=function(r){i.arrayOfObject(r,"errors");if(0===r.length)return null;r.forEach((function(r){i.ok(c(r))}));return 1==r.length?r[0]:new MultiError(r)};VError.errorForEach=function(r,t){i.ok(c(r),"err must be an Error");i.func(t,"func");r instanceof MultiError?r.errors().forEach((function iterError(r){t(r)})):t(r)};function SError(){var r,t,o,e;r=Array.prototype.slice.call(arguments,0);if(!((this||s)instanceof SError)){t=Object.create(SError.prototype);SError.apply(t,arguments);return t}o=parseConstructorArguments({argv:r,strict:true});e=o.options;VError.call(this||s,e,"%s",o.shortmessage);return this||s}a.inherits(SError,VError);function MultiError(r){i.array(r,"list of errors");i.ok(r.length>0,"must be at least one error");(this||s).ase_errors=r;VError.call(this||s,{cause:r[0]},"first of %d error%s",r.length,1==r.length?"":"s")}a.inherits(MultiError,VError);MultiError.prototype.name="MultiError";MultiError.prototype.errors=function me_errors(){return(this||s).ase_errors.slice(0)};function WError(){var r,t,o,e;r=Array.prototype.slice.call(arguments,0);if(!((this||s)instanceof WError)){t=Object.create(WError.prototype);WError.apply(t,r);return t}o=parseConstructorArguments({argv:r,strict:false});e=o.options;e["skipCauseMessage"]=true;VError.call(this||s,e,"%s",o.shortmessage);return this||s}a.inherits(WError,VError);WError.prototype.name="WError";WError.prototype.toString=function we_toString(){var r=this.hasOwnProperty("name")&&(this||s).name||(this||s).constructor.name||(this||s).constructor.prototype.name;(this||s).message&&(r+=": "+(this||s).message);(this||s).jse_cause&&(this||s).jse_cause.message&&(r+="; caused by "+(this||s).jse_cause.toString());return r};WError.prototype.cause=function we_cause(r){c(r)&&((this||s).jse_cause=r);return(this||s).jse_cause};var f=n;export default f;

