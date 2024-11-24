// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,m,"$1e"),i=p.call(i,b,"e"),i=p.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,f,"e+0$1"),i=p.call(i,g,"e-0$1"),e.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,s,l,u,p,f,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if("string"==typeof(i=e[u]))s+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+v(h):v(h)+f)),s+=i.arg||"",l+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=k.exec(e);i;)(r=e.slice(n,k.lastIndex-i[0].length)).length&&t.push(r),t.push(j(i)),n=k.lastIndex,i=k.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var I=Object.prototype,V=I.toString,O=I.__defineGetter__,P=I.__defineSetter__,$=I.__lookupGetter__,C=I.__lookupSetter__,R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&($.call(e,r)||C.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};function N(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,W=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"",U=Z()?function(e){var r,t,i,n,a;if(null==e)return G.call(e);t=e[B],a=B,r=null!=(n=e)&&W.call(n,a);try{e[B]=void 0}catch(r){return G.call(e)}return i=G.call(e),r?e[B]=t:delete e[B],i}:function(e){return G.call(e)},X=Number,z=X.prototype.toString,J=Z();function q(e){return"object"==typeof e&&(e instanceof X||(J?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===U(e)))}function D(e){return L(e)||q(e)}N(D,"isPrimitive",L),N(D,"isObject",q);var H="function"==typeof Math.fround?Math.fround:null,K="function"==typeof Float32Array,Q=Number.POSITIVE_INFINITY,ee="function"==typeof Float32Array?Float32Array:null,re="function"==typeof Float32Array?Float32Array:void 0,te=new(function(){var e,r,t;if("function"!=typeof ee)return!1;try{r=new ee([1,3.14,-3.14,5e40]),t=r,e=(K&&t instanceof Float32Array||"[object Float32Array]"===U(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Q}catch(r){e=!1}return e}()?re:function(){throw new Error("not implemented")})(1),ie="function"==typeof H?H:function(e){return te[0]=e,te[0]};function ne(e,r){if(!(this instanceof ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!L(e))throw new TypeError(A("invalid argument. Real component must be a number. Value: `%s`.",e));if(!L(r))throw new TypeError(A("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ie(e)}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ie(r)}),this}return N(ne,"BYTES_PER_ELEMENT",4),N(ne.prototype,"BYTES_PER_ELEMENT",4),N(ne.prototype,"byteLength",8),N(ne.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),N(ne.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),function(e){return new ne(-function(e){return e.re}(e),-function(e){return e.im}(e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).cnegf=r();
//# sourceMappingURL=index.js.map
