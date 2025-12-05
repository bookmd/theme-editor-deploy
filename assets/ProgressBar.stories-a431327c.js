var p=Object.defineProperty;var r=(s,n)=>p(s,"name",{value:n,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{P as i}from"./index-392fd7ca.js";import{T as d,S as m,A as c}from"./index-1df6d64a.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./index-5572c131.js";const y={title:"Atoms/ProgressBar",component:i,parameters:{viewport:{defaultViewport:"default"}},argTypes:{progressBarStyle:{control:"radio",options:["default","thin","tiny"]},width:{control:"radio",options:["default","small"]},label:{control:"text"},showLabel:{control:"boolean"},value:{control:"range"},maxValueLabel:{control:"text"},valueLabel:{control:"text"}}},b=r(s=>e.jsxs("div",{className:"padding-box-30",style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx(i,{...s,valueLabel:s.value}),e.jsx("div",{className:"code-block margin-top-30",children:e.jsxs(d,{size:m["18px"],align:c.left,children:[e.jsxs("div",{className:"import-line",children:["import { ",e.jsx("span",{className:"blue",children:"ProgressBar"})," } from ",e.jsx("span",{className:"green",children:"'@getvim/atomic-ui';"})]}),e.jsx("br",{}),"<ProgressBar ",s.progressBarStyle==="default"?e.jsx(e.Fragment,{}):e.jsxs("div",{children:['  progressBarStyle="',e.jsx("option",{children:s.progressBarStyle}),'"']}),s.width==="small"&&e.jsxs("div",{children:['  width="',e.jsx("option",{children:s.width}),'"']}),s.label==="Loading"?e.jsx(e.Fragment,{}):e.jsxs("div",{children:['  label="',e.jsx("option",{children:s.label}),'"']}),e.jsxs("div",{children:["  value={",s.value,"}"]}),s.showLabel&&e.jsx("div",{children:"  showLabel"}),"/>"]})})]}),"Template"),a=b.bind({});a.args={value:20,showLabel:!1,label:"Loading",width:"default",progressBarStyle:"default",maxValueLabel:"100"};var l,o,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div className="padding-box-30" style={{
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}}>
    <ProgressBar {...args} valueLabel={args.value} />

    <div className="code-block margin-top-30">
      <Text size={SizeEnum['18px']} align={AlignEnum.left}>
        <div className="import-line">
          import &#123;&nbsp;
          <span className="blue">ProgressBar</span>&nbsp;&#125;&nbsp;from&nbsp;
          <span className="green">'@getvim/atomic-ui';</span>
        </div>
        <br />
        &lt;ProgressBar&nbsp;
        {args.progressBarStyle === 'default' ? <></> : <div>
            &nbsp;&nbsp;progressBarStyle="
            <option>{args.progressBarStyle}</option>"
          </div>}
        {args.width === 'small' && <div>
            &nbsp;&nbsp;width="
            <option>{args.width}</option>"
          </div>}
        {args.label === 'Loading' ? <></> : <div>
            &nbsp;&nbsp;label="
            <option>{args.label}</option>"
          </div>}
        <div>&nbsp;&nbsp;value=&#123;{args.value}&#125;</div>
        {args.showLabel && <div>&nbsp;&nbsp;showLabel</div>}
        /&gt;
      </Text>
    </div>
  </div>`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,y as default};
//# sourceMappingURL=ProgressBar.stories-a431327c.js.map
