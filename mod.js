// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,m,"$1e"),n=f.call(n,w,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,h,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):u.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,a,o,l,u,p,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,p=0;p<e.length;p++)if(s(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",u+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function O(e){var r,t;if(!V(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,R=N.__lookupGetter__,L=N.__lookupSetter__;var M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function Z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return W&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";var J=Y()?function(e){var r,t,n,i,a;if(null==e)return B.call(e);t=e[z],a=z,r=null!=(i=e)&&U.call(i,a);try{e[z]=void 0}catch(r){return B.call(e)}return n=B.call(e),r?e[z]=t:delete e[z],n}:function(e){return B.call(e)},q=Number,D=q.prototype.toString;var H=Y();function K(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Q(e){return G(e)||K(e)}Z(Q,"isPrimitive",G),Z(Q,"isObject",K);var ee="function"==typeof Math.fround?Math.fround:null,re="function"==typeof Float32Array;var te=Number.POSITIVE_INFINITY,ne="function"==typeof Float32Array?Float32Array:null;var ie="function"==typeof Float32Array?Float32Array:void 0;var ae=new(function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,5e40]),t=r,e=(re&&t instanceof Float32Array||"[object Float32Array]"===J(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")})(1);var oe="function"==typeof ee?ee:function(e){return ae[0]=e,ae[0]};function ce(e,r){if(!(this instanceof ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!G(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!G(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return M(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:oe(e)}),M(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:oe(r)}),this}function se(e){return new ce(-function(e){return e.re}(e),-function(e){return e.im}(e))}Z(ce,"BYTES_PER_ELEMENT",4),Z(ce.prototype,"BYTES_PER_ELEMENT",4),Z(ce.prototype,"byteLength",8),Z(ce.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Z(ce.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));export{se as default};
//# sourceMappingURL=mod.js.map
