var T=Object.defineProperty;var i=(t,n)=>T(t,"name",{value:n,configurable:!0});import{c as p}from"./_commonjsHelpers-c38d1a10.js";var w="storybook/actions",j=`${w}/action-event`,l,y=typeof p<"u"&&(p.crypto||p.msCrypto);if(y&&y.getRandomValues){var d=new Uint8Array(16);l=i(function(){return y.getRandomValues(d),d},"whatwgRNG")}if(!l){var u=new Array(16);l=i(function(){for(var t=0,n;t<16;t++)t&3||(n=Math.random()*4294967296),u[t]=n>>>((t&3)<<3)&255;return u},"rng$1")}var R=l,f=[];for(var c=0;c<256;++c)f[c]=(c+256).toString(16).substr(1);function _(t,n){var e=n||0,r=f;return r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]}i(_,"bytesToUuid$1");var E=_,D=R,P=E;function I(t,n,e){var r=n&&e||0;typeof t=="string"&&(n=t=="binary"?new Array(16):null,t=null),t=t||{};var a=t.random||(t.rng||D)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,n)for(var o=0;o<16;++o)n[r+o]=a[o];return n||P(a)}i(I,"v4");var S=I,U={depth:10,clearOnStoryChange:!0,limit:50};const{addons:B}=__STORYBOOK_MODULE_PREVIEW_API__;var m=i((t,n)=>{let e=Object.getPrototypeOf(t);return!e||n(e)?e:m(e,n)},"findProto"),F=i(t=>!!(typeof t=="object"&&t&&m(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),"isReactSyntheticEvent"),V=i(t=>{if(F(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let e=Object.getOwnPropertyDescriptor(n,"view"),r=e==null?void 0:e.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...e,value:Object.create(r.constructor.prototype)}),n}return t},"serializeArg");function O(t,n={}){let e={...U,...n},r=i(function(...a){let o=B.getChannel(),s=S(),g=5,v=a.map(V),h=a.length>1?v:v[0],A={id:s,count:0,data:{name:t,args:h},options:{...e,maxDepth:g+(e.depth||3),allowFunction:e.allowFunction||!1}};o.emit(j,A)},"handler");return r.isAction=!0,r}i(O,"action");var x=i((t,n)=>typeof n[t]>"u"&&!(t in n),"isInInitialArgs"),$=i(t=>{let{initialArgs:n,argTypes:e,parameters:{actions:r}}=t;if(!r||r.disable||!r.argTypesRegex||!e)return{};let a=new RegExp(r.argTypesRegex);return Object.entries(e).filter(([o])=>!!a.test(o)).reduce((o,[s,g])=>(x(s,n)&&(o[s]=O(s)),o),{})},"inferActionsFromArgTypesRegex"),z=i(t=>{let{initialArgs:n,argTypes:e,parameters:{actions:r}}=t;return r!=null&&r.disable||!e?{}:Object.entries(e).filter(([a,o])=>!!o.action).reduce((a,[o,s])=>(x(o,n)&&(a[o]=O(typeof s.action=="string"?s.action:o)),a),{})},"addActionsFromArgTypes"),G=[z,$];export{G as argsEnhancers};
//# sourceMappingURL=preview-802cad6e.js.map
