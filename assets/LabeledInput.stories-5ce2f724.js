var v=Object.defineProperty;var s=(e,t)=>v(e,"name",{value:t,configurable:!0});import{j as o}from"./jsx-runtime-d01ea613.js";import{r as n}from"./index-49b6e5dd.js";import{I as d}from"./index-7be811f5.js";import{L as p}from"./index-d0a12c16.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-5572c131.js";import"./index-2870a228.js";const j={title:"Atoms/LabeledTextArea",component:p,argTypes:{label:{control:"text"},active:{control:"boolean"}}},a=s(e=>{const[t,r]=n.useState(e==null?void 0:e.active),[u,m]=n.useState();return o.jsx(d,{className:"margin-top-30",children:o.jsx(p,{...e,active:t,id:"text-field",value:u,onFocus:()=>{t||r(!0)},onChange:x=>{m(x.target.value),t||r(!0)}})})},"Default");a.args={label:"label"};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [active, setActive] = useState(args?.active);
  const [text, setText] = useState<string>();
  return <InputStyleWrapper className="margin-top-30">
      <LabeledTextArea {...args} active={active} id="text-field" value={text} onFocus={() => {
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const y=["Default"];export{a as Default,y as __namedExportsOrder,j as default};
//# sourceMappingURL=LabeledInput.stories-5ce2f724.js.map
