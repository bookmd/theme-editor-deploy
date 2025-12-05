var k=Object.defineProperty;var n=(r,o)=>k(r,"name",{value:o,configurable:!0});import{U as j,a as g}from"./index-bdd59fc7.js";import{j as m}from"./jsx-runtime-d01ea613.js";import{r as t}from"./index-49b6e5dd.js";import{R as E}from"./index-34661aba.js";import{M}from"./index-3c6e8000.js";import{U as v}from"./index-362ac79e.js";import{i as C}from"./isEmpty-accbd652.js";import"./v4-23e3f80c.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2015e499.js";import"./index-1df6d64a.js";import"./index-5572c131.js";import"./index-2870a228.js";import"./index-18fb8b63.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";import"./MultiSelectWithOther-5bcbaa56.js";import"./styled-34e804a9.js";import"./extends-85901eb6.js";import"./clsx.m-26950cc3.js";import"./Popover-e9263e17.js";import"./SwitchBase-35005098.js";import"./hoist-non-react-statics.cjs-c6e191e6.js";import"./index-cc29b0a7.js";import"./objectWithoutPropertiesLoose-c22daa29.js";import"./assertThisInitialized-9f2acf84.js";import"./inheritsLoose-54936dc8.js";import"./setPrototypeOf-ec9b6182.js";import"./index-57cd95bd.js";import"./react-is.production.min-bda70661.js";import"./styled-components.browser.esm-7c6d6d39.js";import"./index-5b359ca1.js";import"./unitless.browser.esm-a7a88d20.js";import"./_getTag-d8b636ac.js";import"./isFunction-883d3e0e.js";import"./isObjectLike-b52999d3.js";import"./isArray-513c67aa.js";const F=n(({onUpdateUserRoles:r})=>{const[o,U]=t.useState(!1),[a,R]=t.useState([]),S=t.useCallback(async()=>{if(C(a))return;const i=await r(a);U(i)},[r,a]),x=t.useCallback(i=>R(i),[]);return m.jsx(M,{noInformationRequired:o,children:o?m.jsx(v,{}):m.jsx(j,{options:E,onChange:x,defaultValues:[],onSubmit:S})})},"ManagementAction"),ur={title:"UserManagement/Organisms/ManagementAction",component:F},e={args:{onUpdateUserRoles:(...r)=>(g("clicked")(r),Promise.resolve(!0))}},s={args:{onUpdateUserRoles:(...r)=>(g("clicked")(r),Promise.resolve(!1))}};var p,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onUpdateUserRoles: (...args) => {
      action('clicked')(args);
      return Promise.resolve(true);
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onUpdateUserRoles: (...args) => {
      action('clicked')(args);
      return Promise.resolve(false);
    }
  }
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const dr=["Default","UpdateFails"];export{e as Default,s as UpdateFails,dr as __namedExportsOrder,ur as default};
//# sourceMappingURL=ManagementAction.stories-7c2ea05c.js.map
