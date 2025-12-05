var p=Object.defineProperty;var c=(e,r)=>p(e,"name",{value:r,configurable:!0});import{j as o}from"./jsx-runtime-d01ea613.js";import{A as a}from"./index-090660ec.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";const j={title:"Atoms/AnalyticHover",component:a,argTypes:{}},h=c(e=>o.jsx(a,{...e,children:o.jsx("div",{children:"hover me!"})}),"Template"),A=c(e=>o.jsx(a,{onHoverAction:()=>console.log("** App hover action"),onLeaveAction:r=>{console.log("** App was hover "+r)},children:o.jsxs("div",{style:{backgroundColor:"yellow"},children:["app layout",o.jsx("div",{children:"no hover me!"}),o.jsx(a,{onHoverAction:()=>console.log("** div hover action"),onLeaveAction:r=>{console.log("** div was hover "+r)},children:o.jsx("div",{style:{backgroundColor:"orange"},children:"hover me!"})}),o.jsx("div",{children:"no hover me!"})]})}),"HoverHierarchyTemplate"),i=A.bind({}),n=h.bind({});n.args={onHoverAction:()=>console.log("** hover action"),onLeaveAction:e=>{console.log("** action hover time "+e)}};var t,s,l;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`args => <AnalyticHover onHoverAction={() => console.log('** App hover action')} onLeaveAction={time => {
  console.log('** App was hover ' + time);
}}>
    <div style={{
    backgroundColor: 'yellow'
  }}>
      app layout
      <div>no hover me!</div>
      <AnalyticHover onHoverAction={() => console.log('** div hover action')} onLeaveAction={time => {
      console.log('** div was hover ' + time);
    }}>
        <div style={{
        backgroundColor: 'orange'
      }}>hover me!</div>
      </AnalyticHover>
      <div>no hover me!</div>
    </div>
  </AnalyticHover>`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var v,d,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => <AnalyticHover {...args}>
    <div>hover me!</div>
  </AnalyticHover>`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["HoverHierarchy","Default"];export{n as Default,i as HoverHierarchy,b as __namedExportsOrder,j as default};
//# sourceMappingURL=AnalyticHover.stories-fee09407.js.map
