var c=Object.defineProperty;var n=(e,t)=>c(e,"name",{value:t,configurable:!0});import{s as m}from"./index-d475d2ea.js";import"./index-19cb0178.js";var l="links";const{addons:i,makeDecorator:O}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:L,SELECT_STORY:d}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:o,HTMLElement:v}=m,k=n(e=>i.getChannel().emit(d,e),"navigate"),_=n(e=>{let{target:t}=e;if(!(t instanceof v))return;let E=t,{sbKind:a,sbStory:s}=E.dataset;(a||s)&&(e.preventDefault(),k({kind:a,story:s}))},"linksListener"),r=!1,p=n(()=>{r||(r=!0,o.addEventListener("click",_))},"on"),R=n(()=>{r&&(r=!1,o.removeEventListener("click",_))},"off"),S=O({name:"withLinks",parameterName:l,wrapper:(e,t)=>(p(),i.getChannel().once(L,R),e(t))}),C=[S];export{C as decorators};
//# sourceMappingURL=preview-806cf1cd.js.map