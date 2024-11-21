var _=Object.defineProperty;var o=(e,t)=>_(e,"name",{value:t,configurable:!0});import{s as g}from"./index-d475d2ea.js";var d="storybook/highlight",r="storybookHighlight",E=`${d}/add`,H=`${d}/reset`;const{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:p}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:l}=g,m=o((e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,"highlightStyle"),b=o(e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),"highlightObject"),i=O.getChannel(),I=o(e=>{let t=r;n();let s=Array.from(new Set(e.elements)),h=l.createElement("style");h.setAttribute("id",t),h.innerHTML=s.map(a=>`${a}{
          ${m(e.color,e.style)}
         }`).join(" "),l.head.appendChild(h)},"highlight"),n=o(()=>{let e=r,t=l.getElementById(e);t&&t.parentNode.removeChild(t)},"resetHighlight");i.on(p,n);i.on(H,n);i.on(E,I);export{b as highlightObject,m as highlightStyle};
//# sourceMappingURL=preview-6aedb9ce.js.map
