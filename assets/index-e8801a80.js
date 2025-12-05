var a=Object.defineProperty;var o=(s,i)=>a(s,"name",{value:i,configurable:!0});import{g as u}from"./_commonjsHelpers-f86d8be3.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var i={}.hasOwnProperty;function e(){for(var t="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(t=f(t,p(n)))}return t}o(e,"classNames");function p(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return e.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var n in t)i.call(t,n)&&t[n]&&(r=f(r,n));return r}o(p,"parseValue");function f(t,r){return r?t?t+" "+r:t+r:t}o(f,"appendClass"),s.exports?(e.default=e,s.exports=e):window.classNames=e})()})(c);var l=c.exports;const v=u(l);export{v as c};
//# sourceMappingURL=index-e8801a80.js.map
