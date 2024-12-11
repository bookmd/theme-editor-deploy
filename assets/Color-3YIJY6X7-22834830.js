var Ee=Object.defineProperty;var i=(e,t)=>Ee(e,"name",{value:t,configurable:!0});import{e as C,W as ie,T as Me,F as Ce,I as $e,g as Oe}from"./DocsRenderer-7FRJXR4N-cbf27a31.js";import{R as d,r as b}from"./index-5e0a97bb.js";import{M as Ne,v as Z,Z as Se}from"./_getPrototype-0ca3a8da.js";import"./iframe-a8bcc5e9.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-19cb0178.js";import"./index-32ac9e7b.js";import"./preview-4475f18b.js";import"./_commonjsHelpers-c38d1a10.js";function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}i($,"u");function J(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}i(J,"c");function D(e){var t=b.useRef(e),n=b.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}i(D,"s");var I=i(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},"i"),T=i(function(e){return"touches"in e},"f"),ne=i(function(e,t){var n=e.getBoundingClientRect(),r=T(t)?t.touches[0]:t;return{left:I((r.pageX-(n.left+window.pageXOffset))/n.width),top:I((r.pageY-(n.top+window.pageYOffset))/n.height)}},"v"),re=i(function(e){!T(e)&&e.preventDefault()},"d"),Q=d.memo(function(e){var t=e.onMove,n=e.onKey,r=J(e,["onMove","onKey"]),o=b.useRef(null),a=D(t),s=D(n),l=b.useRef(!1),c=b.useMemo(function(){var g=i(function(x){re(x),(T(x)?x.touches.length>0:x.buttons>0)&&o.current?a(ne(o.current,x)):E(!1)},"e"),_=i(function(){return E(!1)},"r");function E(x){var p=l.current,v=x?self.addEventListener:self.removeEventListener;v(p?"touchmove":"mousemove",g),v(p?"touchend":"mouseup",_)}return i(E,"t"),[function(x){var p=x.nativeEvent,v=o.current;v&&(re(p),!function(O,W){return W&&!T(O)}(p,l.current)&&v&&(l.current=T(p),v.focus(),a(ne(v,p)),E(!0)))},function(x){var p=x.which||x.keyCode;p<37||p>40||(x.preventDefault(),s({left:p===39?.05:p===37?-.05:0,top:p===40?.05:p===38?-.05:0}))},E]},[s,a]),u=c[0],m=c[1],h=c[2];return b.useEffect(function(){return h},[h]),d.createElement("div",$({},r,{onTouchStart:u,onMouseDown:u,className:"react-colorful__interactive",ref:o,onKeyDown:m,tabIndex:0,role:"slider"}))}),z=i(function(e){return e.filter(Boolean).join(" ")},"m"),ee=i(function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=z(["react-colorful__pointer",e.className]);return d.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},d.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},"g"),w=i(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},"p"),Ie={grad:.9,turn:360,rad:360/(2*Math.PI)},K=i(function(e){return e[0]==="#"&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},"_"),Re=i(function(e,t){return t===void 0&&(t="deg"),Number(e)*(Ie[t]||1)},"x"),Te=i(function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?je({h:Re(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},"C"),je=i(function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},"H"),ue=i(function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:w(e.h),s:w(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:w(o/2),a:w(r,2)}},"M"),V=i(function(e){var t=ue(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},"N"),L=i(function(e){var t=ue(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},"w"),fe=i(function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),s=r*(1-n),l=r*(1-(t-a)*n),c=r*(1-(1-t+a)*n),u=a%6;return{r:w(255*[r,l,s,s,c,r][u]),g:w(255*[c,r,r,l,s,s][u]),b:w(255*[s,s,c,r,r,l][u]),a:w(o,2)}},"y"),ze=i(function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?he({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},"O"),A=i(function(e){var t=e.toString(16);return t.length<2?"0"+t:t},"j"),he=i(function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),s=a-Math.min(t,n,r),l=s?a===t?(n-r)/s:a===n?2+(r-t)/s:4+(t-n)/s:0;return{h:w(60*(l<0?l+6:l)),s:w(a?s/a*100:0),v:w(a/255*100),a:o}},"z"),de=d.memo(function(e){var t=e.hue,n=e.onChange,r=z(["react-colorful__hue",e.className]);return d.createElement("div",{className:r},d.createElement(Q,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:I(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":w(t)},d.createElement(ee,{className:"react-colorful__hue-pointer",left:t/360,color:V({h:t,s:100,v:100,a:1})})))}),ge=d.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:V({h:t.h,s:100,v:100,a:1})};return d.createElement("div",{className:"react-colorful__saturation",style:r},d.createElement(Q,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:I(t.s+100*o.left,0,100),v:I(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+w(t.s)+"%, Brightness "+w(t.v)+"%"},d.createElement(ee,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:V(t)})))}),me=i(function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},"A"),be=i(function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},"D");function ve(e,t,n){var r=D(n),o=b.useState(function(){return e.toHsva(t)}),a=o[0],s=o[1],l=b.useRef({color:t,hsva:a});b.useEffect(function(){if(!e.equal(t,l.current.color)){var u=e.toHsva(t);l.current={hsva:u,color:t},s(u)}},[t,e]),b.useEffect(function(){var u;me(a,l.current.hsva)||e.equal(u=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:u},r(u))},[a,e,r]);var c=b.useCallback(function(u){s(function(m){return Object.assign({},m,u)})},[]);return[a,c]}i(ve,"S");var F,Fe=typeof window<"u"?b.useLayoutEffect:b.useEffect,He=i(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"X"),pe=i(function(){Fe(function(){if(typeof document<"u"&&!F){(F=document.createElement("style")).innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`;var e=He();e&&F.setAttribute("nonce",e),document.head.appendChild(F)}},[])},"R"),Pe=i(function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=J(e,["className","colorModel","color","onChange"]);pe();var l=ve(n,o,a),c=l[0],u=l[1],m=z(["react-colorful",t]);return d.createElement("div",$({},s,{className:m}),d.createElement(ge,{hsva:c,onChange:u}),d.createElement(de,{hue:c.h,onChange:u,className:"react-colorful__last-control"}))},"$"),Le={defaultColor:"000",toHsva:function(e){return he(K(e))},fromHsva:function(e){return n=(t=fe(e)).g,r=t.b,"#"+A(t.r)+A(n)+A(r);var t,n,r},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||me(K(e),K(t))}},qe=i(function(e){return d.createElement(Pe,$({},e,{colorModel:Le}))},"J"),Be=i(function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+L(Object.assign({},n,{a:0}))+", "+L(Object.assign({},n,{a:1}))+")"},a=z(["react-colorful__alpha",t]);return d.createElement("div",{className:a},d.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),d.createElement(Q,{onMove:function(s){r({a:s.left})},onKey:function(s){r({a:I(n.a+s.left)})},"aria-label":"Alpha","aria-valuetext":w(100*n.a)+"%"},d.createElement(ee,{className:"react-colorful__alpha-pointer",left:n.a,color:L(n)})))},"Q"),ye=i(function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=J(e,["className","colorModel","color","onChange"]);pe();var l=ve(n,o,a),c=l[0],u=l[1],m=z(["react-colorful",t]);return d.createElement("div",$({},s,{className:m}),d.createElement(ge,{hsva:c,onChange:u}),d.createElement(de,{hue:c.h,onChange:u}),d.createElement(Be,{hsva:c,onChange:u,className:"react-colorful__last-control"}))},"U"),We={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Te,fromHsva:L,equal:be},Xe=i(function(e){return d.createElement(ye,$({},e,{colorModel:We}))},"ee"),Ke={defaultColor:"rgba(0, 0, 0, 1)",toHsva:ze,fromHsva:function(e){var t=fe(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:be},Ae=i(function(e){return d.createElement(ye,$({},e,{colorModel:Ke}))},"ge"),Ge={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const j=Ge,xe={};for(const e of Object.keys(j))xe[j[e]]=e;const f={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var we=f;for(const e of Object.keys(f)){if(!("channels"in f[e]))throw new Error("missing channels property: "+e);if(!("labels"in f[e]))throw new Error("missing channel labels property: "+e);if(f[e].labels.length!==f[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=f[e];delete f[e].channels,delete f[e].labels,Object.defineProperty(f[e],"channels",{value:t}),Object.defineProperty(f[e],"labels",{value:n})}f.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),s=a-o;let l,c;a===o?l=0:t===a?l=(n-r)/s:n===a?l=2+(r-t)/s:r===a&&(l=4+(t-n)/s),l=Math.min(l*60,360),l<0&&(l+=360);const u=(o+a)/2;return a===o?c=0:u<=.5?c=s/(a+o):c=s/(2-a-o),[l,c*100,u*100]};f.rgb.hsv=function(e){let t,n,r,o,a;const s=e[0]/255,l=e[1]/255,c=e[2]/255,u=Math.max(s,l,c),m=u-Math.min(s,l,c),h=i(function(g){return(u-g)/6/m+1/2},"diffc");return m===0?(o=0,a=0):(a=m/u,t=h(s),n=h(l),r=h(c),s===u?o=r-n:l===u?o=1/3+t-r:c===u&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,u*100]};f.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=f.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};f.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,l=(1-r-o)/(1-o)||0;return[a*100,s*100,l*100,o*100]};function De(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}i(De,"comparativeDistance");f.rgb.keyword=function(e){const t=xe[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(j)){const a=j[o],s=De(e,a);s<n&&(n=s,r=o)}return r};f.keyword.rgb=function(e){return j[e]};f.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,s=t*.0193+n*.1192+r*.9505;return[o*100,a*100,s*100]};f.rgb.lab=function(e){const t=f.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,s=500*(n-r),l=200*(r-o);return[a,s,l]};f.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const l=2*r-o,c=[0,0,0];for(let u=0;u<3;u++)a=t+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?s=l+(o-l)*6*a:2*a<1?s=o:3*a<2?s=l+(o-l)*(2/3-a)*6:s=l,c[u]=s*255;return c};f.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const s=(r+n)/2,l=r===0?2*o/(a+o):2*n/(r+n);return[t,l*100,s*100]};f.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),s=255*r*(1-n),l=255*r*(1-n*a),c=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,c,s];case 1:return[l,r,s];case 2:return[s,r,c];case 3:return[s,l,r];case 4:return[c,s,r];case 5:return[r,s,l]}};f.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,s;s=(2-n)*r;const l=(2-n)*o;return a=n*o,a/=l<=1?l:2-l,a=a||0,s/=2,[t,a*100,s*100]};f.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),l=1-r;a=6*t-s,s&1&&(a=1-a);const c=n+a*(l-n);let u,m,h;switch(s){default:case 6:case 0:u=l,m=c,h=n;break;case 1:u=c,m=l,h=n;break;case 2:u=n,m=l,h=c;break;case 3:u=n,m=c,h=l;break;case 4:u=c,m=n,h=l;break;case 5:u=l,m=n,h=c;break}return[u*255,m*255,h*255]};f.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),l=1-Math.min(1,r*(1-o)+o);return[a*255,s*255,l*255]};f.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,s;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,s=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};f.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),s=200*(n-r);return[o,a,s]};f.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,s;a=(t+16)/116,o=n/500+a,s=a-r/200;const l=a**3,c=o**3,u=s**3;return a=l>.008856?l:(a-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,s=u>.008856?u:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};f.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[t,s,o]};f.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),s=n*Math.sin(o);return[t,a,s]};f.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?f.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(s+=60),s};f.hsv.ansi16=function(e){return f.rgb.ansi16(f.hsv.rgb(e),e[2])};f.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};f.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};f.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};f.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};f.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(l=>l+l).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,s=r&255;return[o,a,s]};f.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),s=o-a;let l,c;return s<1?l=a/(1-s):l=0,s<=0?c=0:o===t?c=(n-r)/s%6:o===n?c=2+(r-t)/s:c=4+(t-n)/s,c/=6,c%=1,[c*360,s*100,l*100]};f.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};f.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};f.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,s=a%1,l=1-s;let c=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return c=(1-n)*r,[(n*o[0]+c)*255,(n*o[1]+c)*255,(n*o[2]+c)*255]};f.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};f.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};f.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};f.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};f.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};f.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};f.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};f.gray.hsl=function(e){return[0,0,e[0]]};f.gray.hsv=f.gray.hsl;f.gray.hwb=function(e){return[0,100,e[0]]};f.gray.cmyk=function(e){return[0,0,0,e[0]]};f.gray.lab=function(e){return[e[0],0,0]};f.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};f.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const q=we;function Ve(){const e={},t=Object.keys(q);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}i(Ve,"buildGraph");function Ue(e){const t=Ve(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(q[r]);for(let a=o.length,s=0;s<a;s++){const l=o[s],c=t[l];c.distance===-1&&(c.distance=t[r].distance+1,c.parent=r,n.unshift(l))}}return t}i(Ue,"deriveBFS");function Ye(e,t){return function(n){return t(e(n))}}i(Ye,"link");function Ze(e,t){const n=[t[e].parent,e];let r=q[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=Ye(q[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}i(Ze,"wrapConversion");var Je=i(function(e){const t=Ue(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const s=r[a];t[s].parent!==null&&(n[s]=Ze(s,t))}return n},"route$1");const U=we,Qe=Je,N={},et=Object.keys(U);function tt(e){const t=i(function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))},"wrappedFn");return"conversion"in e&&(t.conversion=e.conversion),t}i(tt,"wrapRaw");function nt(e){const t=i(function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o},"wrappedFn");return"conversion"in e&&(t.conversion=e.conversion),t}i(nt,"wrapRounded");et.forEach(e=>{N[e]={},Object.defineProperty(N[e],"channels",{value:U[e].channels}),Object.defineProperty(N[e],"labels",{value:U[e].labels});const t=Qe(e);Object.keys(t).forEach(r=>{const o=t[r];N[e][r]=nt(o),N[e][r].raw=tt(o)})});var k=N,rt=Ne,ot=i(function(){return rt.Date.now()},"now$1"),at=ot,st=/\s/;function lt(e){for(var t=e.length;t--&&st.test(e.charAt(t)););return t}i(lt,"trimmedEndIndex$1");var ct=lt,it=ct,ut=/^\s+/;function ft(e){return e&&e.slice(0,it(e)+1).replace(ut,"")}i(ft,"baseTrim$1");var ht=ft,dt=ht,oe=Z,gt=Se,ae=0/0,mt=/^[-+]0x[0-9a-f]+$/i,bt=/^0b[01]+$/i,vt=/^0o[0-7]+$/i,pt=parseInt;function yt(e){if(typeof e=="number")return e;if(gt(e))return ae;if(oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=dt(e);var n=bt.test(e);return n||vt.test(e)?pt(e.slice(2),n?2:8):mt.test(e)?ae:+e}i(yt,"toNumber$1");var xt=yt,wt=Z,G=at,se=xt,kt="Expected a function",_t=Math.max,Et=Math.min;function Mt(e,t,n){var r,o,a,s,l,c,u=0,m=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(kt);t=se(t)||0,wt(n)&&(m=!!n.leading,h="maxWait"in n,a=h?_t(se(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function _(y){var M=r,R=o;return r=o=void 0,u=y,s=e.apply(R,M),s}i(_,"invokeFunc");function E(y){return u=y,l=setTimeout(v,t),m?_(y):s}i(E,"leadingEdge");function x(y){var M=y-c,R=y-u,te=t-M;return h?Et(te,a-R):te}i(x,"remainingWait");function p(y){var M=y-c,R=y-u;return c===void 0||M>=t||M<0||h&&R>=a}i(p,"shouldInvoke");function v(){var y=G();if(p(y))return O(y);l=setTimeout(v,x(y))}i(v,"timerExpired");function O(y){return l=void 0,g&&r?_(y):(r=o=void 0,s)}i(O,"trailingEdge");function W(){l!==void 0&&clearTimeout(l),u=0,r=c=o=l=void 0}i(W,"cancel");function _e(){return l===void 0?s:O(G())}i(_e,"flush");function X(){var y=G(),M=p(y);if(r=arguments,o=this,c=y,M){if(l===void 0)return E(c);if(h)return clearTimeout(l),l=setTimeout(v,t),_(c)}return l===void 0&&(l=setTimeout(v,t)),s}return i(X,"debounced"),X.cancel=W,X.flush=_e,X}i(Mt,"debounce$1");var Ct=Mt,$t=Ct,Ot=Z,Nt="Expected a function";function St(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Nt);return Ot(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),$t(e,t,{leading:r,maxWait:t,trailing:o})}i(St,"throttle");var It=St,Rt=C.div({position:"relative",maxWidth:250}),Tt=C(ie)({position:"absolute",zIndex:1,top:4,left:4}),jt=C.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),zt=C(Me)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Ft=C.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ht=C.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Pt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,le=i(({value:e,active:t,onClick:n,style:r,...o})=>{let a=`linear-gradient(${e}, ${e}), ${Pt}, linear-gradient(#fff, #fff)`;return d.createElement(Ht,{...o,active:t,onClick:n,style:{...r,backgroundImage:a}})},"Swatch"),Lt=C(Ce.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),qt=C($e)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ke=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ke||{}),H=Object.values(ke),Bt=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Wt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Xt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Y=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Kt=/^\s*#?([0-9a-f]{3})\s*$/i,At={hex:qe,rgb:Ae,hsl:Xe},P={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ce=i(e=>{let t=e==null?void 0:e.match(Bt);if(!t)return[0,0,0,1];let[,n,r,o,a=1]=t;return[n,r,o,a].map(Number)},"stringToArgs"),S=i(e=>{if(!e)return;let t=!0;if(Wt.test(e)){let[s,l,c,u]=ce(e),[m,h,g]=k.rgb.hsl([s,l,c])||[0,0,0];return{valid:t,value:e,keyword:k.rgb.keyword([s,l,c]),colorSpace:"rgb",rgb:e,hsl:`hsla(${m}, ${h}%, ${g}%, ${u})`,hex:`#${k.rgb.hex([s,l,c]).toLowerCase()}`}}if(Xt.test(e)){let[s,l,c,u]=ce(e),[m,h,g]=k.hsl.rgb([s,l,c])||[0,0,0];return{valid:t,value:e,keyword:k.hsl.keyword([s,l,c]),colorSpace:"hsl",rgb:`rgba(${m}, ${h}, ${g}, ${u})`,hsl:e,hex:`#${k.hsl.hex([s,l,c]).toLowerCase()}`}}let n=e.replace("#",""),r=k.keyword.rgb(n)||k.hex.rgb(n),o=k.rgb.hsl(r),a=e;if(/[^#a-f0-9]/i.test(e)?a=n:Y.test(e)&&(a=`#${n}`),a.startsWith("#"))t=Y.test(a);else try{k.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:k.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},"parseValue"),Gt=i((e,t,n)=>{if(!e||!(t!=null&&t.valid))return P[n];if(n!=="hex")return(t==null?void 0:t[n])||P[n];if(!t.hex.startsWith("#"))try{return`#${k.keyword.hex(t.hex)}`}catch{return P.hex}let r=t.hex.match(Kt);if(!r)return Y.test(t.hex)?t.hex:P.hex;let[o,a,s]=r[1].split("");return`#${o}${o}${a}${a}${s}${s}`},"getRealValue"),Dt=i((e,t)=>{let[n,r]=b.useState(e||""),[o,a]=b.useState(()=>S(n)),[s,l]=b.useState((o==null?void 0:o.colorSpace)||"hex");b.useEffect(()=>{let h=e||"",g=S(h);r(h),a(g),l((g==null?void 0:g.colorSpace)||"hex")},[e]);let c=b.useMemo(()=>Gt(n,o,s).toLowerCase(),[n,o,s]),u=b.useCallback(h=>{let g=S(h),_=(g==null?void 0:g.value)||h||"";r(_),_===""&&(a(void 0),t(void 0)),g&&(a(g),l(g.colorSpace),t(g.value))},[t]),m=b.useCallback(()=>{let h=H.indexOf(s)+1;h>=H.length&&(h=0),l(H[h]);let g=(o==null?void 0:o[H[h]])||"";r(g),t(g)},[o,s,t]);return{value:n,realValue:c,updateValue:u,color:o,colorSpace:s,cycleColorSpace:m}},"useColorInput"),B=i(e=>e.replace(/\s*/,"").toLowerCase(),"id"),Vt=i((e,t,n)=>{let[r,o]=b.useState(t!=null&&t.valid?[t]:[]);b.useEffect(()=>{t===void 0&&o([])},[t]);let a=b.useMemo(()=>(e||[]).map(l=>typeof l=="string"?S(l):l.title?{...S(l.color),keyword:l.title}:S(l.color)).concat(r).filter(Boolean).slice(-27),[e,r]),s=b.useCallback(l=>{l!=null&&l.valid&&(a.some(c=>B(c[n])===B(l[n]))||o(c=>c.concat(l)))},[n,a]);return{presets:a,addPreset:s}},"usePresets"),Ut=i(({name:e,value:t,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:s=!1})=>{let l=b.useCallback(It(n,200),[n]),{value:c,realValue:u,updateValue:m,color:h,colorSpace:g,cycleColorSpace:_}=Dt(t,l),{presets:E,addPreset:x}=Vt(a,h,g),p=At[g];return d.createElement(Rt,null,d.createElement(Tt,{startOpen:s,closeOnOutsideClick:!0,onVisibleChange:()=>x(h),tooltip:d.createElement(jt,null,d.createElement(p,{color:u==="transparent"?"#000000":u,onChange:m,onFocus:r,onBlur:o}),E.length>0&&d.createElement(Ft,null,E.map((v,O)=>d.createElement(ie,{key:`${v.value}-${O}`,hasChrome:!1,tooltip:d.createElement(zt,{note:v.keyword||v.value})},d.createElement(le,{value:v[g],active:h&&B(v[g])===B(h[g]),onClick:()=>m(v.value)})))))},d.createElement(le,{value:u,style:{margin:4}})),d.createElement(Lt,{id:Oe(e),value:c,onChange:v=>m(v.target.value),onFocus:v=>v.target.select(),placeholder:"Choose color..."}),c?d.createElement(qt,{icon:"markup",onClick:_}):null)},"ColorControl"),ln=Ut;export{Ut as ColorControl,ln as default};
//# sourceMappingURL=Color-3YIJY6X7-22834830.js.map
