var v=Object.defineProperty;var n=(t,e)=>v(t,"name",{value:e,configurable:!0});import{j as s}from"./jsx-runtime-d01ea613.js";import{r as o}from"./index-49b6e5dd.js";import{L as l}from"./index-7c1bcbcb.js";import{I as d}from"./index-7be811f5.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./index-5572c131.js";const j={title:"Atoms/LabeledInput",component:l,argTypes:{label:{control:"text"},active:{control:"boolean"}}},a=n(t=>{const[e,r]=o.useState(t==null?void 0:t.active),[u,m]=o.useState();return s.jsx(d,{className:"margin-top-30",children:s.jsx(l,{...t,active:e,type:"text",id:"text-field",value:u,onFocus:()=>{e||r(!0)},onChange:x=>{m(x.target.value),e||r(!0)}})})},"Default");a.args={label:"label"};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [active, setActive] = useState(args?.active);
  const [text, setText] = useState<string>();
  return <InputStyleWrapper className="margin-top-30">
      <LabeledInput {...args} active={active} type="text" id="text-field" value={text} onFocus={() => {
      if (!active) {
        setActive(true);
      }
    }} onChange={e => {
      setText(e.target.value);
      if (!active) {
        setActive(true);
      }
    }} />
    </InputStyleWrapper>;
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,j as default};
//# sourceMappingURL=LabeledInput.stories-869ceb05.js.map
