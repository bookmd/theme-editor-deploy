var Sr=Object.defineProperty;var h=(p,c)=>Sr(p,"name",{value:c,configurable:!0});var _r={},Y={};Y.byteLength=Mr;Y.toByteArray=br;Y.fromByteArray=Pr;var _=[],T=[],Lr=typeof Uint8Array<"u"?Uint8Array:Array,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var D=0,Nr=V.length;D<Nr;++D)_[D]=V[D],T[V.charCodeAt(D)]=D;T["-".charCodeAt(0)]=62;T["_".charCodeAt(0)]=63;function hr(p){var c=p.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=p.indexOf("=");a===-1&&(a=c);var B=a===c?0:4-a%4;return[a,B]}h(hr,"getLens");function Mr(p){var c=hr(p),a=c[0],B=c[1];return(a+B)*3/4-B}h(Mr,"byteLength");function kr(p,c,a){return(c+a)*3/4-a}h(kr,"_byteLength");function br(p){var c,a=hr(p),B=a[0],w=a[1],y=new Lr(kr(p,B,w)),s=0,o=w>0?B-4:B,E;for(E=0;E<o;E+=4)c=T[p.charCodeAt(E)]<<18|T[p.charCodeAt(E+1)]<<12|T[p.charCodeAt(E+2)]<<6|T[p.charCodeAt(E+3)],y[s++]=c>>16&255,y[s++]=c>>8&255,y[s++]=c&255;return w===2&&(c=T[p.charCodeAt(E)]<<2|T[p.charCodeAt(E+1)]>>4,y[s++]=c&255),w===1&&(c=T[p.charCodeAt(E)]<<10|T[p.charCodeAt(E+1)]<<4|T[p.charCodeAt(E+2)]>>2,y[s++]=c>>8&255,y[s++]=c&255),y}h(br,"toByteArray");function Dr(p){return _[p>>18&63]+_[p>>12&63]+_[p>>6&63]+_[p&63]}h(Dr,"tripletToBase64");function $r(p,c,a){for(var B,w=[],y=c;y<a;y+=3)B=(p[y]<<16&16711680)+(p[y+1]<<8&65280)+(p[y+2]&255),w.push(Dr(B));return w.join("")}h($r,"encodeChunk");function Pr(p){for(var c,a=p.length,B=a%3,w=[],y=16383,s=0,o=a-B;s<o;s+=y)w.push($r(p,s,s+y>o?o:s+y));return B===1?(c=p[a-1],w.push(_[c>>2]+_[c<<4&63]+"==")):B===2&&(c=(p[a-2]<<8)+p[a-1],w.push(_[c>>10]+_[c>>4&63]+_[c<<2&63]+"=")),w.join("")}h(Pr,"fromByteArray");var X={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */X.read=function(p,c,a,B,w){var y,s,o=w*8-B-1,E=(1<<o)-1,C=E>>1,F=-7,A=a?w-1:0,L=a?-1:1,U=p[c+A];for(A+=L,y=U&(1<<-F)-1,U>>=-F,F+=o;F>0;y=y*256+p[c+A],A+=L,F-=8);for(s=y&(1<<-F)-1,y>>=-F,F+=B;F>0;s=s*256+p[c+A],A+=L,F-=8);if(y===0)y=1-C;else{if(y===E)return s?NaN:(U?-1:1)*(1/0);s=s+Math.pow(2,B),y=y-C}return(U?-1:1)*s*Math.pow(2,y-B)};X.write=function(p,c,a,B,w,y){var s,o,E,C=y*8-w-1,F=(1<<C)-1,A=F>>1,L=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,U=B?0:y-1,$=B?1:-1,P=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(o=isNaN(c)?1:0,s=F):(s=Math.floor(Math.log(c)/Math.LN2),c*(E=Math.pow(2,-s))<1&&(s--,E*=2),s+A>=1?c+=L/E:c+=L*Math.pow(2,1-A),c*E>=2&&(s++,E/=2),s+A>=F?(o=0,s=F):s+A>=1?(o=(c*E-1)*Math.pow(2,w),s=s+A):(o=c*Math.pow(2,A-1)*Math.pow(2,w),s=0));w>=8;p[a+U]=o&255,U+=$,o/=256,w-=8);for(s=s<<w|o,C+=w;C>0;p[a+U]=s&255,U+=$,s/=256,C-=8);p[a+U-$]|=P*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(p){const c=Y,a=X,B=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=o,p.SlowBuffer=cr,p.INSPECT_MAX_BYTES=50;const w=2147483647;p.kMaxLength=w,o.TYPED_ARRAY_SUPPORT=y(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const i=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(i,r),i.foo()===42}catch{return!1}}h(y,"typedArraySupport"),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function s(i){if(i>w)throw new RangeError('The value "'+i+'" is invalid for option "size"');const r=new Uint8Array(i);return Object.setPrototypeOf(r,o.prototype),r}h(s,"createBuffer");function o(i,r,t){if(typeof i=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return A(i)}return E(i,r,t)}h(o,"Buffer"),o.poolSize=8192;function E(i,r,t){if(typeof i=="string")return L(i,r);if(ArrayBuffer.isView(i))return $(i);if(i==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i);if(S(i,ArrayBuffer)||i&&S(i.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(S(i,SharedArrayBuffer)||i&&S(i.buffer,SharedArrayBuffer)))return P(i,r,t);if(typeof i=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=i.valueOf&&i.valueOf();if(n!=null&&n!==i)return o.from(n,r,t);const e=fr(i);if(e)return e;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof i[Symbol.toPrimitive]=="function")return o.from(i[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i)}h(E,"from"),o.from=function(i,r,t){return E(i,r,t)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function C(i){if(typeof i!="number")throw new TypeError('"size" argument must be of type number');if(i<0)throw new RangeError('The value "'+i+'" is invalid for option "size"')}h(C,"assertSize");function F(i,r,t){return C(i),i<=0?s(i):r!==void 0?typeof t=="string"?s(i).fill(r,t):s(i).fill(r):s(i)}h(F,"alloc"),o.alloc=function(i,r,t){return F(i,r,t)};function A(i){return C(i),s(i<0?0:W(i)|0)}h(A,"allocUnsafe"),o.allocUnsafe=function(i){return A(i)},o.allocUnsafeSlow=function(i){return A(i)};function L(i,r){if((typeof r!="string"||r==="")&&(r="utf8"),!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const t=J(i,r)|0;let n=s(t);const e=n.write(i,r);return e!==t&&(n=n.slice(0,e)),n}h(L,"fromString");function U(i){const r=i.length<0?0:W(i.length)|0,t=s(r);for(let n=0;n<r;n+=1)t[n]=i[n]&255;return t}h(U,"fromArrayLike");function $(i){if(S(i,Uint8Array)){const r=new Uint8Array(i);return P(r.buffer,r.byteOffset,r.byteLength)}return U(i)}h($,"fromArrayView");function P(i,r,t){if(r<0||i.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(i.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return r===void 0&&t===void 0?n=new Uint8Array(i):t===void 0?n=new Uint8Array(i,r):n=new Uint8Array(i,r,t),Object.setPrototypeOf(n,o.prototype),n}h(P,"fromArrayBuffer");function fr(i){if(o.isBuffer(i)){const r=W(i.length)|0,t=s(r);return t.length===0||i.copy(t,0,0,r),t}if(i.length!==void 0)return typeof i.length!="number"||H(i.length)?s(0):U(i);if(i.type==="Buffer"&&Array.isArray(i.data))return U(i.data)}h(fr,"fromObject");function W(i){if(i>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return i|0}h(W,"checked");function cr(i){return+i!=i&&(i=0),o.alloc(+i)}h(cr,"SlowBuffer"),o.isBuffer=h(function(r){return r!=null&&r._isBuffer===!0&&r!==o.prototype},"isBuffer"),o.compare=h(function(r,t){if(S(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),S(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(r)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;let n=r.length,e=t.length;for(let u=0,f=Math.min(n,e);u<f;++u)if(r[u]!==t[u]){n=r[u],e=t[u];break}return n<e?-1:e<n?1:0},"compare"),o.isEncoding=h(function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEncoding"),o.concat=h(function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return o.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<r.length;++n)t+=r[n].length;const e=o.allocUnsafe(t);let u=0;for(n=0;n<r.length;++n){let f=r[n];if(S(f,Uint8Array))u+f.length>e.length?(o.isBuffer(f)||(f=o.from(f)),f.copy(e,u)):Uint8Array.prototype.set.call(e,f,u);else if(o.isBuffer(f))f.copy(e,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=f.length}return e},"concat");function J(i,r){if(o.isBuffer(i))return i.length;if(ArrayBuffer.isView(i)||S(i,ArrayBuffer))return i.byteLength;if(typeof i!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof i);const t=i.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let e=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return q(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ur(i).length;default:if(e)return n?-1:q(i).length;r=(""+r).toLowerCase(),e=!0}}h(J,"byteLength"),o.byteLength=J;function pr(i,r,t){let n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(i||(i="utf8");;)switch(i){case"hex":return gr(this,r,t);case"utf8":case"utf-8":return Z(this,r,t);case"ascii":return Er(this,r,t);case"latin1":case"binary":return dr(this,r,t);case"base64":return xr(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mr(this,r,t);default:if(n)throw new TypeError("Unknown encoding: "+i);i=(i+"").toLowerCase(),n=!0}}h(pr,"slowToString"),o.prototype._isBuffer=!0;function M(i,r,t){const n=i[r];i[r]=i[t],i[t]=n}h(M,"swap"),o.prototype.swap16=h(function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<r;t+=2)M(this,t,t+1);return this},"swap16"),o.prototype.swap32=h(function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<r;t+=4)M(this,t,t+3),M(this,t+1,t+2);return this},"swap32"),o.prototype.swap64=h(function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<r;t+=8)M(this,t,t+7),M(this,t+1,t+6),M(this,t+2,t+5),M(this,t+3,t+4);return this},"swap64"),o.prototype.toString=h(function(){const r=this.length;return r===0?"":arguments.length===0?Z(this,0,r):pr.apply(this,arguments)},"toString"),o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=h(function(r){if(!o.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:o.compare(this,r)===0},"equals"),o.prototype.inspect=h(function(){let r="";const t=p.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},"inspect"),B&&(o.prototype[B]=o.prototype.inspect),o.prototype.compare=h(function(r,t,n,e,u){if(S(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),!o.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),n===void 0&&(n=r?r.length:0),e===void 0&&(e=0),u===void 0&&(u=this.length),t<0||n>r.length||e<0||u>this.length)throw new RangeError("out of range index");if(e>=u&&t>=n)return 0;if(e>=u)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,e>>>=0,u>>>=0,this===r)return 0;let f=u-e,l=n-t;const g=Math.min(f,l),d=this.slice(e,u),m=r.slice(t,n);for(let x=0;x<g;++x)if(d[x]!==m[x]){f=d[x],l=m[x];break}return f<l?-1:l<f?1:0},"compare");function z(i,r,t,n,e){if(i.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,H(t)&&(t=e?0:i.length-1),t<0&&(t=i.length+t),t>=i.length){if(e)return-1;t=i.length-1}else if(t<0)if(e)t=0;else return-1;if(typeof r=="string"&&(r=o.from(r,n)),o.isBuffer(r))return r.length===0?-1:K(i,r,t,n,e);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(i,r,t):Uint8Array.prototype.lastIndexOf.call(i,r,t):K(i,[r],t,n,e);throw new TypeError("val must be string, number or Buffer")}h(z,"bidirectionalIndexOf");function K(i,r,t,n,e){let u=1,f=i.length,l=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(i.length<2||r.length<2)return-1;u=2,f/=2,l/=2,t/=2}function g(m,x){return u===1?m[x]:m.readUInt16BE(x*u)}h(g,"read");let d;if(e){let m=-1;for(d=t;d<f;d++)if(g(i,d)===g(r,m===-1?0:d-m)){if(m===-1&&(m=d),d-m+1===l)return m*u}else m!==-1&&(d-=d-m),m=-1}else for(t+l>f&&(t=f-l),d=t;d>=0;d--){let m=!0;for(let x=0;x<l;x++)if(g(i,d+x)!==g(r,x)){m=!1;break}if(m)return d}return-1}h(K,"arrayIndexOf"),o.prototype.includes=h(function(r,t,n){return this.indexOf(r,t,n)!==-1},"includes"),o.prototype.indexOf=h(function(r,t,n){return z(this,r,t,n,!0)},"indexOf"),o.prototype.lastIndexOf=h(function(r,t,n){return z(this,r,t,n,!1)},"lastIndexOf");function sr(i,r,t,n){t=Number(t)||0;const e=i.length-t;n?(n=Number(n),n>e&&(n=e)):n=e;const u=r.length;n>u/2&&(n=u/2);let f;for(f=0;f<n;++f){const l=parseInt(r.substr(f*2,2),16);if(H(l))return f;i[t+f]=l}return f}h(sr,"hexWrite");function lr(i,r,t,n){return G(q(r,i.length-t),i,t,n)}h(lr,"utf8Write");function ar(i,r,t,n){return G(Ur(r),i,t,n)}h(ar,"asciiWrite");function yr(i,r,t,n){return G(ur(r),i,t,n)}h(yr,"base64Write");function wr(i,r,t,n){return G(Rr(r,i.length-t),i,t,n)}h(wr,"ucs2Write"),o.prototype.write=h(function(r,t,n,e){if(t===void 0)e="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")e=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,e===void 0&&(e="utf8")):(e=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-t;if((n===void 0||n>u)&&(n=u),r.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");let f=!1;for(;;)switch(e){case"hex":return sr(this,r,t,n);case"utf8":case"utf-8":return lr(this,r,t,n);case"ascii":case"latin1":case"binary":return ar(this,r,t,n);case"base64":return yr(this,r,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wr(this,r,t,n);default:if(f)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),f=!0}},"write"),o.prototype.toJSON=h(function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},"toJSON");function xr(i,r,t){return r===0&&t===i.length?c.fromByteArray(i):c.fromByteArray(i.slice(r,t))}h(xr,"base64Slice");function Z(i,r,t){t=Math.min(i.length,t);const n=[];let e=r;for(;e<t;){const u=i[e];let f=null,l=u>239?4:u>223?3:u>191?2:1;if(e+l<=t){let g,d,m,x;switch(l){case 1:u<128&&(f=u);break;case 2:g=i[e+1],(g&192)===128&&(x=(u&31)<<6|g&63,x>127&&(f=x));break;case 3:g=i[e+1],d=i[e+2],(g&192)===128&&(d&192)===128&&(x=(u&15)<<12|(g&63)<<6|d&63,x>2047&&(x<55296||x>57343)&&(f=x));break;case 4:g=i[e+1],d=i[e+2],m=i[e+3],(g&192)===128&&(d&192)===128&&(m&192)===128&&(x=(u&15)<<18|(g&63)<<12|(d&63)<<6|m&63,x>65535&&x<1114112&&(f=x))}}f===null?(f=65533,l=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|f&1023),n.push(f),e+=l}return Br(n)}h(Z,"utf8Slice");const Q=4096;function Br(i){const r=i.length;if(r<=Q)return String.fromCharCode.apply(String,i);let t="",n=0;for(;n<r;)t+=String.fromCharCode.apply(String,i.slice(n,n+=Q));return t}h(Br,"decodeCodePointsArray");function Er(i,r,t){let n="";t=Math.min(i.length,t);for(let e=r;e<t;++e)n+=String.fromCharCode(i[e]&127);return n}h(Er,"asciiSlice");function dr(i,r,t){let n="";t=Math.min(i.length,t);for(let e=r;e<t;++e)n+=String.fromCharCode(i[e]);return n}h(dr,"latin1Slice");function gr(i,r,t){const n=i.length;(!r||r<0)&&(r=0),(!t||t<0||t>n)&&(t=n);let e="";for(let u=r;u<t;++u)e+=Tr[i[u]];return e}h(gr,"hexSlice");function mr(i,r,t){const n=i.slice(r,t);let e="";for(let u=0;u<n.length-1;u+=2)e+=String.fromCharCode(n[u]+n[u+1]*256);return e}h(mr,"utf16leSlice"),o.prototype.slice=h(function(r,t){const n=this.length;r=~~r,t=t===void 0?n:~~t,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<r&&(t=r);const e=this.subarray(r,t);return Object.setPrototypeOf(e,o.prototype),e},"slice");function I(i,r,t){if(i%1!==0||i<0)throw new RangeError("offset is not uint");if(i+r>t)throw new RangeError("Trying to access beyond buffer length")}h(I,"checkOffset"),o.prototype.readUintLE=o.prototype.readUIntLE=h(function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);let e=this[r],u=1,f=0;for(;++f<t&&(u*=256);)e+=this[r+f]*u;return e},"readUIntLE"),o.prototype.readUintBE=o.prototype.readUIntBE=h(function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);let e=this[r+--t],u=1;for(;t>0&&(u*=256);)e+=this[r+--t]*u;return e},"readUIntBE"),o.prototype.readUint8=o.prototype.readUInt8=h(function(r,t){return r=r>>>0,t||I(r,1,this.length),this[r]},"readUInt8"),o.prototype.readUint16LE=o.prototype.readUInt16LE=h(function(r,t){return r=r>>>0,t||I(r,2,this.length),this[r]|this[r+1]<<8},"readUInt16LE"),o.prototype.readUint16BE=o.prototype.readUInt16BE=h(function(r,t){return r=r>>>0,t||I(r,2,this.length),this[r]<<8|this[r+1]},"readUInt16BE"),o.prototype.readUint32LE=o.prototype.readUInt32LE=h(function(r,t){return r=r>>>0,t||I(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},"readUInt32LE"),o.prototype.readUint32BE=o.prototype.readUInt32BE=h(function(r,t){return r=r>>>0,t||I(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},"readUInt32BE"),o.prototype.readBigUInt64LE=N(h(function(r){r=r>>>0,b(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&O(r,this.length-8);const e=t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,u=this[++r]+this[++r]*2**8+this[++r]*2**16+n*2**24;return BigInt(e)+(BigInt(u)<<BigInt(32))},"readBigUInt64LE")),o.prototype.readBigUInt64BE=N(h(function(r){r=r>>>0,b(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&O(r,this.length-8);const e=t*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],u=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n;return(BigInt(e)<<BigInt(32))+BigInt(u)},"readBigUInt64BE")),o.prototype.readIntLE=h(function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);let e=this[r],u=1,f=0;for(;++f<t&&(u*=256);)e+=this[r+f]*u;return u*=128,e>=u&&(e-=Math.pow(2,8*t)),e},"readIntLE"),o.prototype.readIntBE=h(function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);let e=t,u=1,f=this[r+--e];for(;e>0&&(u*=256);)f+=this[r+--e]*u;return u*=128,f>=u&&(f-=Math.pow(2,8*t)),f},"readIntBE"),o.prototype.readInt8=h(function(r,t){return r=r>>>0,t||I(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},"readInt8"),o.prototype.readInt16LE=h(function(r,t){r=r>>>0,t||I(r,2,this.length);const n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n},"readInt16LE"),o.prototype.readInt16BE=h(function(r,t){r=r>>>0,t||I(r,2,this.length);const n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n},"readInt16BE"),o.prototype.readInt32LE=h(function(r,t){return r=r>>>0,t||I(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},"readInt32LE"),o.prototype.readInt32BE=h(function(r,t){return r=r>>>0,t||I(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},"readInt32BE"),o.prototype.readBigInt64LE=N(h(function(r){r=r>>>0,b(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&O(r,this.length-8);const e=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(n<<24);return(BigInt(e)<<BigInt(32))+BigInt(t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)},"readBigInt64LE")),o.prototype.readBigInt64BE=N(h(function(r){r=r>>>0,b(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&O(r,this.length-8);const e=(t<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(e)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n)},"readBigInt64BE")),o.prototype.readFloatLE=h(function(r,t){return r=r>>>0,t||I(r,4,this.length),a.read(this,r,!0,23,4)},"readFloatLE"),o.prototype.readFloatBE=h(function(r,t){return r=r>>>0,t||I(r,4,this.length),a.read(this,r,!1,23,4)},"readFloatBE"),o.prototype.readDoubleLE=h(function(r,t){return r=r>>>0,t||I(r,8,this.length),a.read(this,r,!0,52,8)},"readDoubleLE"),o.prototype.readDoubleBE=h(function(r,t){return r=r>>>0,t||I(r,8,this.length),a.read(this,r,!1,52,8)},"readDoubleBE");function R(i,r,t,n,e,u){if(!o.isBuffer(i))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<u)throw new RangeError('"value" argument is out of bounds');if(t+n>i.length)throw new RangeError("Index out of range")}h(R,"checkInt"),o.prototype.writeUintLE=o.prototype.writeUIntLE=h(function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){const l=Math.pow(2,8*n)-1;R(this,r,t,n,l,0)}let u=1,f=0;for(this[t]=r&255;++f<n&&(u*=256);)this[t+f]=r/u&255;return t+n},"writeUIntLE"),o.prototype.writeUintBE=o.prototype.writeUIntBE=h(function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){const l=Math.pow(2,8*n)-1;R(this,r,t,n,l,0)}let u=n-1,f=1;for(this[t+u]=r&255;--u>=0&&(f*=256);)this[t+u]=r/f&255;return t+n},"writeUIntBE"),o.prototype.writeUint8=o.prototype.writeUInt8=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,1,255,0),this[t]=r&255,t+1},"writeUInt8"),o.prototype.writeUint16LE=o.prototype.writeUInt16LE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},"writeUInt16LE"),o.prototype.writeUint16BE=o.prototype.writeUInt16BE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},"writeUInt16BE"),o.prototype.writeUint32LE=o.prototype.writeUInt32LE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},"writeUInt32LE"),o.prototype.writeUint32BE=o.prototype.writeUInt32BE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},"writeUInt32BE");function v(i,r,t,n,e){or(r,n,e,i,t,7);let u=Number(r&BigInt(4294967295));i[t++]=u,u=u>>8,i[t++]=u,u=u>>8,i[t++]=u,u=u>>8,i[t++]=u;let f=Number(r>>BigInt(32)&BigInt(4294967295));return i[t++]=f,f=f>>8,i[t++]=f,f=f>>8,i[t++]=f,f=f>>8,i[t++]=f,t}h(v,"wrtBigUInt64LE");function rr(i,r,t,n,e){or(r,n,e,i,t,7);let u=Number(r&BigInt(4294967295));i[t+7]=u,u=u>>8,i[t+6]=u,u=u>>8,i[t+5]=u,u=u>>8,i[t+4]=u;let f=Number(r>>BigInt(32)&BigInt(4294967295));return i[t+3]=f,f=f>>8,i[t+2]=f,f=f>>8,i[t+1]=f,f=f>>8,i[t]=f,t+8}h(rr,"wrtBigUInt64BE"),o.prototype.writeBigUInt64LE=N(h(function(r,t=0){return v(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64LE")),o.prototype.writeBigUInt64BE=N(h(function(r,t=0){return rr(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE")),o.prototype.writeIntLE=h(function(r,t,n,e){if(r=+r,t=t>>>0,!e){const g=Math.pow(2,8*n-1);R(this,r,t,n,g-1,-g)}let u=0,f=1,l=0;for(this[t]=r&255;++u<n&&(f*=256);)r<0&&l===0&&this[t+u-1]!==0&&(l=1),this[t+u]=(r/f>>0)-l&255;return t+n},"writeIntLE"),o.prototype.writeIntBE=h(function(r,t,n,e){if(r=+r,t=t>>>0,!e){const g=Math.pow(2,8*n-1);R(this,r,t,n,g-1,-g)}let u=n-1,f=1,l=0;for(this[t+u]=r&255;--u>=0&&(f*=256);)r<0&&l===0&&this[t+u+1]!==0&&(l=1),this[t+u]=(r/f>>0)-l&255;return t+n},"writeIntBE"),o.prototype.writeInt8=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},"writeInt8"),o.prototype.writeInt16LE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},"writeInt16LE"),o.prototype.writeInt16BE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},"writeInt16BE"),o.prototype.writeInt32LE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},"writeInt32LE"),o.prototype.writeInt32BE=h(function(r,t,n){return r=+r,t=t>>>0,n||R(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},"writeInt32BE"),o.prototype.writeBigInt64LE=N(h(function(r,t=0){return v(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE")),o.prototype.writeBigInt64BE=N(h(function(r,t=0){return rr(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function tr(i,r,t,n,e,u){if(t+n>i.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}h(tr,"checkIEEE754");function ir(i,r,t,n,e){return r=+r,t=t>>>0,e||tr(i,r,t,4),a.write(i,r,t,n,23,4),t+4}h(ir,"writeFloat"),o.prototype.writeFloatLE=h(function(r,t,n){return ir(this,r,t,!0,n)},"writeFloatLE"),o.prototype.writeFloatBE=h(function(r,t,n){return ir(this,r,t,!1,n)},"writeFloatBE");function nr(i,r,t,n,e){return r=+r,t=t>>>0,e||tr(i,r,t,8),a.write(i,r,t,n,52,8),t+8}h(nr,"writeDouble"),o.prototype.writeDoubleLE=h(function(r,t,n){return nr(this,r,t,!0,n)},"writeDoubleLE"),o.prototype.writeDoubleBE=h(function(r,t,n){return nr(this,r,t,!1,n)},"writeDoubleBE"),o.prototype.copy=h(function(r,t,n,e){if(!o.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!e&&e!==0&&(e=this.length),t>=r.length&&(t=r.length),t||(t=0),e>0&&e<n&&(e=n),e===n||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-t<e-n&&(e=r.length-t+n);const u=e-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,e):Uint8Array.prototype.set.call(r,this.subarray(n,e),t),u},"copy"),o.prototype.fill=h(function(r,t,n,e){if(typeof r=="string"){if(typeof t=="string"?(e=t,t=0,n=this.length):typeof n=="string"&&(e=n,n=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(r.length===1){const f=r.charCodeAt(0);(e==="utf8"&&f<128||e==="latin1")&&(r=f)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);let u;if(typeof r=="number")for(u=t;u<n;++u)this[u]=r;else{const f=o.isBuffer(r)?r:o.from(r,e),l=f.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(u=0;u<n-t;++u)this[u+t]=f[u%l]}return this},"fill");const k={};function j(i,r,t){k[i]=h(class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${i}]`,this.stack,delete this.name}get code(){return i}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${i}]: ${this.message}`}},"NodeError")}h(j,"E"),j("ERR_BUFFER_OUT_OF_BOUNDS",function(i){return i?`${i} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),j("ERR_INVALID_ARG_TYPE",function(i,r){return`The "${i}" argument must be of type number. Received type ${typeof r}`},TypeError),j("ERR_OUT_OF_RANGE",function(i,r,t){let n=`The value of "${i}" is out of range.`,e=t;return Number.isInteger(t)&&Math.abs(t)>2**32?e=er(String(t)):typeof t=="bigint"&&(e=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(e=er(e)),e+="n"),n+=` It must be ${r}. Received ${e}`,n},RangeError);function er(i){let r="",t=i.length;const n=i[0]==="-"?1:0;for(;t>=n+4;t-=3)r=`_${i.slice(t-3,t)}${r}`;return`${i.slice(0,t)}${r}`}h(er,"addNumericalSeparator");function Ir(i,r,t){b(r,"offset"),(i[r]===void 0||i[r+t]===void 0)&&O(r,i.length-(t+1))}h(Ir,"checkBounds");function or(i,r,t,n,e,u){if(i>t||i<r){const f=typeof r=="bigint"?"n":"";let l;throw u>3?r===0||r===BigInt(0)?l=`>= 0${f} and < 2${f} ** ${(u+1)*8}${f}`:l=`>= -(2${f} ** ${(u+1)*8-1}${f}) and < 2 ** ${(u+1)*8-1}${f}`:l=`>= ${r}${f} and <= ${t}${f}`,new k.ERR_OUT_OF_RANGE("value",l,i)}Ir(n,e,u)}h(or,"checkIntBI");function b(i,r){if(typeof i!="number")throw new k.ERR_INVALID_ARG_TYPE(r,"number",i)}h(b,"validateNumber");function O(i,r,t){throw Math.floor(i)!==i?(b(i,t),new k.ERR_OUT_OF_RANGE(t||"offset","an integer",i)):r<0?new k.ERR_BUFFER_OUT_OF_BOUNDS:new k.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${r}`,i)}h(O,"boundsError");const Fr=/[^+/0-9A-Za-z-_]/g;function Ar(i){if(i=i.split("=")[0],i=i.trim().replace(Fr,""),i.length<2)return"";for(;i.length%4!==0;)i=i+"=";return i}h(Ar,"base64clean");function q(i,r){r=r||1/0;let t;const n=i.length;let e=null;const u=[];for(let f=0;f<n;++f){if(t=i.charCodeAt(f),t>55295&&t<57344){if(!e){if(t>56319){(r-=3)>-1&&u.push(239,191,189);continue}else if(f+1===n){(r-=3)>-1&&u.push(239,191,189);continue}e=t;continue}if(t<56320){(r-=3)>-1&&u.push(239,191,189),e=t;continue}t=(e-55296<<10|t-56320)+65536}else e&&(r-=3)>-1&&u.push(239,191,189);if(e=null,t<128){if((r-=1)<0)break;u.push(t)}else if(t<2048){if((r-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}h(q,"utf8ToBytes");function Ur(i){const r=[];for(let t=0;t<i.length;++t)r.push(i.charCodeAt(t)&255);return r}h(Ur,"asciiToBytes");function Rr(i,r){let t,n,e;const u=[];for(let f=0;f<i.length&&!((r-=2)<0);++f)t=i.charCodeAt(f),n=t>>8,e=t%256,u.push(e),u.push(n);return u}h(Rr,"utf16leToBytes");function ur(i){return c.toByteArray(Ar(i))}h(ur,"base64ToBytes");function G(i,r,t,n){let e;for(e=0;e<n&&!(e+t>=r.length||e>=i.length);++e)r[e+t]=i[e];return e}h(G,"blitBuffer");function S(i,r){return i instanceof r||i!=null&&i.constructor!=null&&i.constructor.name!=null&&i.constructor.name===r.name}h(S,"isInstance");function H(i){return i!==i}h(H,"numberIsNaN");const Tr=function(){const i="0123456789abcdef",r=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let e=0;e<16;++e)r[n+e]=i[t]+i[e]}return r}();function N(i){return typeof BigInt>"u"?Cr:i}h(N,"defineBigIntMethod");function Cr(){throw new Error("BigInt not supported")}h(Cr,"BufferBigIntNotDefined")})(_r);export{_r as b};
//# sourceMappingURL=index-ba58a5fe.js.map