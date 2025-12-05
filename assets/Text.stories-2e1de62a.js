var N=Object.defineProperty;var l=(o,d)=>N(o,"name",{value:d,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{T as i,S as a,C as m,A as n,W as p}from"./index-1df6d64a.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-5572c131.js";import"./index-2870a228.js";const w={title:"Atoms/Text",component:i,parameters:{viewport:{defaultViewport:"default"}},argTypes:{text:{control:"text"},size:{control:"select",options:a},colorName:{control:"select",options:m},align:{control:"radio",options:n},weight:{control:"radio",options:p},inline:{control:"boolean"},underline:{control:"boolean"},ellipsis:{control:"boolean"}}},x=l(o=>e.jsxs("div",{className:"padding-box-30",children:[e.jsx(i,{className:"story-text",html:!0,...o}),e.jsx("div",{className:"code-block margin-top-30",children:e.jsxs(i,{size:a["18px"],align:n.left,children:[e.jsxs("div",{className:"import-line",children:["import { ",e.jsxs("span",{className:"blue",children:["Text",e.jsx("option",{className:"AlignEnum",children:", AlignEnum"}),e.jsx("option",{className:"WeightEnum",children:", WeightEnum"}),e.jsx("span",{className:"ColorNameEnum",children:", ColorNameEnum"}),e.jsx("option",{className:"SizeEnum",children:", SizeEnum"})]})," } from ",e.jsx("span",{className:"green",children:"'@getvim/atomic-ui';"})]}),e.jsx("br",{}),"<Text ",e.jsx("br",{}),'  text="Some text"',e.jsx("br",{}),e.jsxs("div",{className:"align-wrap",children:["  align={",e.jsx("span",{className:"green",children:"AlignEnum."}),e.jsx("option",{className:"align-center",children:"center"}),e.jsx("option",{className:"align-left",children:"left"}),e.jsx("option",{className:"align-right",children:"right"}),"}"]}),e.jsxs("div",{className:"color-name-wrap",children:["  colorName={",e.jsx("span",{className:"green",children:"ColorNameEnum."}),e.jsx("option",{className:"color-ultra-dark",children:"ultraDark"}),e.jsx("option",{className:"color-dark",children:"dark"}),e.jsx("option",{className:"color-danger",children:"danger"}),e.jsx("option",{className:"color-extra-dark",children:"extraDark"}),e.jsx("option",{className:"color-light",children:"light"}),e.jsx("option",{className:"color-theme",children:"theme"}),e.jsx("option",{className:"color-theme-link",children:"themeLink"}),e.jsx("option",{className:"color-theme-secondary",children:"themeSecondary"}),"}"]}),e.jsxs("div",{className:"weight-wrap",children:["  weight={",e.jsx("span",{className:"green",children:"WeightEnum."}),e.jsx("option",{className:"weight-light",children:"light"}),e.jsx("option",{className:"weight-medium",children:"medium"}),e.jsx("option",{className:"weight-semibold",children:"semibold"}),e.jsx("option",{className:"weight-bold",children:"bold"}),e.jsx("option",{className:"weight-black",children:"black"}),"}"]}),e.jsxs("div",{className:"size-wrap",children:["  size={",e.jsxs("span",{className:"green",children:["SizeEnum[",e.jsx("option",{className:"size-12",children:"'12px'"}),e.jsx("option",{className:"size-13",children:"'13px'"}),e.jsx("option",{className:"size-14",children:"'14px'"}),e.jsx("option",{className:"size-16",children:"'16px'"}),e.jsx("option",{className:"size-18",children:"'18px'"}),e.jsx("option",{className:"size-22",children:"'22px'"}),"]"]}),"}"]}),e.jsx("option",{className:"text-inline bool",children:"  inline"}),e.jsx("option",{className:"underline bool",children:"  underline"}),e.jsx("option",{className:"ellipsis bool",children:"  ellipsis"}),"/>"]})})]}),"Template"),s=x.bind({});s.args={text:"Some text",align:n.center,colorName:m.ultraDark,size:a.default,weight:p.normal};var t,r,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`args => <div className="padding-box-30">
    <Text className="story-text" html {...args} />

    <div className="code-block margin-top-30">
      <Text size={SizeEnum['18px']} align={AlignEnum.left}>
        <div className="import-line">
          import &#123;&nbsp;
          <span className="blue">
            Text
            <option className="AlignEnum">, AlignEnum</option>
            <option className="WeightEnum">, WeightEnum</option>
            <span className="ColorNameEnum">, ColorNameEnum</span>
            <option className="SizeEnum">, SizeEnum</option>
          </span>
          &nbsp;&#125;&nbsp;from&nbsp;
          <span className="green">'@getvim/atomic-ui';</span>
        </div>
        <br />
        &lt;Text <br />
        &nbsp;&nbsp;text="Some text"
        <br />
        <div className="align-wrap">
          &nbsp;&nbsp;align=&#123;<span className="green">AlignEnum.</span>
          <option className="align-center">center</option>
          <option className="align-left">left</option>
          <option className="align-right">right</option>&#125;
        </div>
        <div className="color-name-wrap">
          &nbsp;&nbsp;colorName=&#123;
          <span className="green">ColorNameEnum.</span>
          <option className="color-ultra-dark">ultraDark</option>
          <option className="color-dark">dark</option>
          <option className="color-danger">danger</option>
          <option className="color-extra-dark">extraDark</option>
          <option className="color-light">light</option>
          <option className="color-theme">theme</option>
          <option className="color-theme-link">themeLink</option>
          <option className="color-theme-secondary">themeSecondary</option>&#125;
        </div>
        <div className="weight-wrap">
          &nbsp;&nbsp;weight=&#123;
          <span className="green">WeightEnum.</span>
          <option className="weight-light">light</option>
          <option className="weight-medium">medium</option>
          <option className="weight-semibold">semibold</option>
          <option className="weight-bold">bold</option>
          <option className="weight-black">black</option>
          &#125;
        </div>
        <div className="size-wrap">
          &nbsp;&nbsp;size=&#123;
          <span className="green">
            SizeEnum[
            <option className="size-12">'12px'</option>
            <option className="size-13">'13px'</option>
            <option className="size-14">'14px'</option>
            <option className="size-16">'16px'</option>
            <option className="size-18">'18px'</option>
            <option className="size-22">'22px'</option>]
          </span>
          &#125;
        </div>
        <option className="text-inline bool">&nbsp;&nbsp;inline</option>
        <option className="underline bool">&nbsp;&nbsp;underline</option>
        <option className="ellipsis bool">&nbsp;&nbsp;ellipsis</option>
        /&gt;
      </Text>
    </div>
  </div>`,...(c=(r=s.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const v=["Default"];export{s as Default,v as __namedExportsOrder,w as default};
//# sourceMappingURL=Text.stories-2e1de62a.js.map
