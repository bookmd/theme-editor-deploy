var p=Object.defineProperty;var i=(e,n)=>p(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-d01ea613.js";import{S as s}from"./index-7c9c8064.js";import{I as m}from"./index-7be811f5.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./defineProperty-860ceec2.js";import"./toPropertyKey-089baa31.js";import"./unitless.browser.esm-a7a88d20.js";import"./index-57cd95bd.js";import"./index-5572c131.js";const j={title:"Atoms/SelectInput",component:s,argTypes:{inputStyle:{control:"select",options:["clean","medium","pill-medium"]}}},c=i(e=>t.jsx("div",{className:"margin-top-30 padding-box-30",style:{background:"#EEE"},children:t.jsx(m,{inputStyle:e.inputStyle,leftIcon:t.jsx("i",{className:"icon-search"}),children:t.jsx("div",{className:"input",children:t.jsx(s,{...e})})})}),"Template"),a=c.bind({});a.args={options:[{id:"one",name:"Chair"},{id:"two",name:"Table"},{id:"three",name:"Lamp"},{id:"four",name:"Couch"}],inputStyle:"pill-medium",labelField:"name",valueField:"id",placeholder:"",label:"Select an option",keepSelectedInList:!1,values:[],onChange:e=>console.log(e)};var o,r,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => <div className="margin-top-30 padding-box-30" style={{
  background: '#EEE'
}}>
    <InputStyleWrapper inputStyle={args.inputStyle} leftIcon={<i className="icon-search" />}>
      <div className="input">
        <SelectInput {...args} />
      </div>
    </InputStyleWrapper>
  </div>`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const N=["Default"];export{a as Default,N as __namedExportsOrder,j as default};
//# sourceMappingURL=Select.stories-6c48c136.js.map
