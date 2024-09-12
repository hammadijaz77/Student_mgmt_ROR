var e={};e=toIdentifier;
/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */function toIdentifier(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}var t=e;export{t as default};

