var k=Object.defineProperty;var s=(r,e)=>k(r,"name",{value:e,configurable:!0});import{s as M}from"./index-d475d2ea.js";import{d as h}from"./index-32ac9e7b.js";var u="backgrounds";const{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{document:g,window:S}=M,x=s(()=>S.matchMedia("(prefers-reduced-motion: reduce)").matches,"isReduceMotionEnabled"),O=s((r,e=[],n)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let t=e.find(a=>a.name===n);if(t)return t.value;if(n){let a=e.map(i=>i.name).join(", ");B.warn(h`
        Backgrounds Addon: could not find the default color "${n}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},"getBackgroundColorByName"),E=s(r=>{(Array.isArray(r)?r:[r]).forEach(w)},"clearStyles"),w=s(r=>{let e=g.getElementById(r);e&&e.parentElement.removeChild(e)},"clearStyle"),A=s((r,e)=>{let n=g.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let t=g.createElement("style");t.setAttribute("id",r),t.innerHTML=e,g.head.appendChild(t)}},"addGridStyle"),I=s((r,e,n)=>{let t=g.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let a=g.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let i=`addon-backgrounds-grid${n?`-docs-${n}`:""}`,d=g.getElementById(i);d?d.parentElement.insertBefore(a,d):g.head.appendChild(a)}},"addBackgroundStyle");const{useMemo:$,useEffect:L}=__STORYBOOK_MODULE_PREVIEW_API__;var T=s((r,e)=>{var m;let{globals:n,parameters:t}=e,a=(m=n[u])==null?void 0:m.value,i=t[u],d=$(()=>i.disable?"transparent":O(a,i.values,i.default),[i,a]),o=$(()=>d&&d!=="transparent",[d]),p=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=$(()=>{let l="transition: background-color 0.3s;";return`
      ${p} {
        background: ${d} !important;
        ${x()?"":l}
      }
    `},[d,p]);return L(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){E(l);return}I(l,c,e.viewMode==="docs"?e.id:null)},[o,c,e]),r()},"withBackground");const{useMemo:C,useEffect:R}=__STORYBOOK_MODULE_PREVIEW_API__;var H=s((r,e)=>{var v;let{globals:n,parameters:t}=e,a=t[u].grid,i=((v=n[u])==null?void 0:v.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:o,opacity:p}=a,c=e.viewMode==="docs",m=t.layout===void 0||t.layout==="padded"?16:0,l=a.offsetX??(c?20:m),f=a.offsetY??(c?20:m),y=C(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${o*d}px ${o*d}px`,`${o*d}px ${o*d}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${b} {
        background-size: ${_} !important;
        background-position: ${l}px ${f}px, ${l}px ${f}px, ${l}px ${f}px, ${l}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${p/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return R(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){E(b);return}A(b,y)},[i,y,e]),r()},"withGrid"),z=[H,T],D={[u]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},K={[u]:null};export{z as decorators,K as globals,D as parameters};
//# sourceMappingURL=preview-4d7765b9.js.map
