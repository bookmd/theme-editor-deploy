var W=Object.defineProperty;var b=(e,a)=>W(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-d01ea613.js";import{r as n}from"./index-49b6e5dd.js";import{L as C}from"./index-7c1bcbcb.js";import{I as d}from"./index-7be811f5.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./index-5572c131.js";const R={title:"Atoms/InputStyleWrapper",component:d,argTypes:{inputStyle:{control:"select",options:["clean","large","medium","pill","pill sm","small-medium","pill-medium"]},disabled:{control:"boolean"},hasError:{control:"boolean"},leftIcon:{control:"boolean"},rightIcon:{control:"boolean"}}},p=b(e=>a=>{const r=a.leftIcon?t.jsx("i",{className:"icon-clipboard"}):void 0,s=a.rightIcon?t.jsx("i",{className:"icon-clipboard"}):void 0;return t.jsx(e,{...a,leftIcon:r,rightIcon:s})},"withIcons"),c=p(e=>{const[a,r]=n.useState(),[s,i]=n.useState(e==null?void 0:e.active);return t.jsx("div",{className:"padding-box-30",style:{background:"#f5f5f5"},children:t.jsx(d,{...e,children:t.jsx("div",{className:"input",children:t.jsx(C,{label:"Label",type:"text",id:"text-field",value:a,active:s,disabled:e==null?void 0:e.disabled,onFocus:()=>{s||i(!0)},onChange:m=>{r(m.target.value),s||i(!0)}})})})})});c.args={inputStyle:"pill-medium",leftIcon:!0,rightIcon:!1};const l=p(e=>{const[a,r]=n.useState();return t.jsx(d,{...e,children:t.jsx("div",{className:"input",children:t.jsx("input",{type:"password",id:"password-field",placeholder:"placeholder",value:a,disabled:e==null?void 0:e.disabled,onChange:s=>r(s.target.value)})})})});l.args={};const o=p(e=>{const[a,r]=n.useState();return t.jsx(d,{...e,children:t.jsx("div",{className:"input",children:t.jsx("input",{type:"checkbox",id:"checkbox-field",placeholder:"placeholder",value:a,disabled:e==null?void 0:e.disabled,onChange:s=>r(s.target.value)})})})});o.args={};const u=p(e=>{const[a,r]=n.useState(),[s,i]=n.useState(e==null?void 0:e.active);return t.jsx("div",{className:"padding-box-30",style:{background:"#f5f5f5"},children:t.jsx(d,{numberInput:!0,...e,children:t.jsx("div",{className:"input",children:t.jsx(C,{label:"Label",type:"number",id:"number-field",value:a,active:s,disabled:e==null?void 0:e.disabled,onFocus:()=>{s||i(!0)},onChange:m=>{r(m.target.value),s||i(!0)}})})})})});o.args={};var v,x,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`withIcons(args => {
  const [text, setText] = useState<string>();
  const [active, setActive] = useState(args?.active);
  return <div className="padding-box-30" style={{
    background: '#f5f5f5'
  }}>
      <InputStyleWrapper {...args}>
        <div className="input">
          <LabeledInput label="Label" type="text" id="text-field" value={text} active={active} disabled={args?.disabled} onFocus={() => {
          if (!active) {
            setActive(true);
          }
        }} onChange={e => {
          setText(e.target.value);
          if (!active) {
            setActive(true);
          }
        }} />
        </div>
      </InputStyleWrapper>
    </div>;
})`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,I,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`withIcons(args => {
  const [password, setPassword] = useState<string>();
  return <InputStyleWrapper {...args}>
      <div className="input">
        <input type="password" id="password-field" placeholder="placeholder" value={password} disabled={args?.disabled} onChange={e => setPassword(e.target.value)} />
      </div>
    </InputStyleWrapper>;
})`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var g,y,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`withIcons(args => {
  const [checkbox, setCheckbox] = useState<string>();
  return <InputStyleWrapper {...args}>
      <div className="input">
        <input type="checkbox" id="checkbox-field" placeholder="placeholder" value={checkbox} disabled={args?.disabled} onChange={e => setCheckbox(e.target.value)} />
      </div>
    </InputStyleWrapper>;
})`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var N,w,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`withIcons(args => {
  const [number, setNumber] = useState<string>();
  const [active, setActive] = useState(args?.active);
  return <div className="padding-box-30" style={{
    background: '#f5f5f5'
  }}>
      <InputStyleWrapper numberInput {...args}>
        <div className="input">
          <LabeledInput label="Label" type="number" id="number-field" value={number} active={active} disabled={args?.disabled} onFocus={() => {
          if (!active) {
            setActive(true);
          }
        }} onChange={e => {
          setNumber(e.target.value);
          if (!active) {
            setActive(true);
          }
        }} />
        </div>
      </InputStyleWrapper>
    </div>;
})`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const q=["Text","Password","Checkbox","Number"];export{o as Checkbox,u as Number,l as Password,c as Text,q as __namedExportsOrder,R as default};
//# sourceMappingURL=InputStyleWrapper.stories-1e28e550.js.map
