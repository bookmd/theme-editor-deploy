var p=Object.defineProperty;var l=(t,r)=>p(t,"name",{value:r,configurable:!0});import{j as o}from"./jsx-runtime-d01ea613.js";import{T as i}from"./index-4acc6b6d.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./PopoverState-334c5845.js";import"./index-57cd95bd.js";import"./v4-24b2c166.js";const f={title:"Atoms/Tooltip",component:i,parameters:{viewport:{defaultViewport:"default"}},argTypes:{tooltipContent:{control:"text"},bgColor:{control:"select",options:["mainColor","secondaryColor","white","dark","light","darkBlue"]},width:{control:"radio",options:["auto","small","large"]},pillStyle:{control:"boolean"}}},d=l(t=>o.jsxs("div",{className:"margin-top-20 padding-box-30",style:{textAlign:"center"},children:[o.jsx("div",{className:"inline-block padding-h-20",children:o.jsx(i,{placement:"top",...t,children:"Top"})}),o.jsx("div",{className:"inline-block padding-h-20",children:o.jsx(i,{placement:"bottom",visible:!0,...t,children:"Bottom"})}),o.jsx("div",{className:"inline-block padding-h-20",children:o.jsx(i,{placement:"left",...t,children:"Left"})}),o.jsx("div",{className:"inline-block padding-h-20",children:o.jsx(i,{placement:"right",...t,children:"Right"})})]}),"Template"),e=d.bind({});e.args={bgColor:"light",width:"auto",tooltipContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => <div className="margin-top-20 padding-box-30" style={{
  textAlign: 'center'
}}>
    <div className="inline-block padding-h-20">
      <Tooltip placement="top" {...args}>
        Top
      </Tooltip>
    </div>
    <div className="inline-block padding-h-20">
      <Tooltip placement="bottom" visible {...args}>
        Bottom
      </Tooltip>
    </div>
    <div className="inline-block padding-h-20">
      <Tooltip placement="left" {...args}>
        Left
      </Tooltip>
    </div>
    <div className="inline-block padding-h-20">
      <Tooltip placement="right" {...args}>
        Right
      </Tooltip>
    </div>
  </div>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,f as default};
//# sourceMappingURL=Tooltip.stories-b52e5b69.js.map
