var w=Object.defineProperty;var a=(e,G)=>w(e,"name",{value:G,configurable:!0});import{j as o}from"./jsx-runtime-d01ea613.js";import{O as y}from"./OverlayTrigger-ad478f61.js";import{P as T}from"./Popover-7b908382.js";import{B as r}from"./index-e9a05652.js";import{C as h}from"./index-3664cd4f.js";import{T as g,S as x,A as N}from"./index-1df6d64a.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./ownerDocument-33a3adcc.js";import"./index-e8801a80.js";import"./css-730e06a5.js";import"./index-0302fa70.js";import"./index-57cd95bd.js";import"./PopoverState-334c5845.js";import"./warning-7335f345.js";import"./objectWithoutPropertiesLoose-c22daa29.js";import"./inheritsLoose-54936dc8.js";import"./setPrototypeOf-ec9b6182.js";import"./index-5572c131.js";import"./index-2870a228.js";import"./index-18fb8b63.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";import"./index-7be811f5.js";import"./index-fd2ed92f.js";import"./index-4acc6b6d.js";import"./v4-24b2c166.js";import"./isEqual-8c1284fe.js";import"./_baseIsEqual-e73bd1c6.js";import"./_getTag-d8b636ac.js";import"./isFunction-883d3e0e.js";import"./isObjectLike-b52999d3.js";import"./isArray-513c67aa.js";import"./index-a1822ac9.js";const j={items:[{value:"1",text:"Option #1"},{value:"2",text:"Option #2"},{value:"3",text:"Option #3"}],onChange:()=>{}},po={title:"Molecules/ButtonGroup",component:r,parameters:{viewport:{defaultViewport:"default"}},argTypes:{searchable:{control:"boolean"},searchStopPropagation:{control:"boolean"},direction:{control:{type:"select",options:["row","column","default"]}},buttonType:{control:{type:"select",options:["small","dropdownOption","tab"]}},bgColor:{control:{type:"radio",options:["default","themedOutline","groupOptionOutline","none"]}},width:{control:{type:"radio",options:["default","block"]}},showCheckbox:{control:{type:"boolean"}},noGaps:{control:{type:"boolean"}}}},C=a(e=>o.jsxs(o.Fragment,{children:[o.jsx(h,{children:o.jsx("div",{className:"padding-v-30",children:o.jsx(r,{...e,...j})})}),o.jsx("div",{className:"padding-h-30",children:o.jsx("div",{className:"code-block",children:o.jsx(g,{size:x["18px"],align:N.left,children:o.jsxs("div",{className:"import-line",children:["import { ",o.jsx("span",{className:"blue",children:"ButtonGroupComponent"})," } from ",o.jsx("span",{className:"green",children:"'@getvim/atomic-ui';"}),o.jsx("br",{}),o.jsx("br",{}),"<ButtonGroupComponent ",e.searchable&&o.jsx("div",{children:"  searchable"}),o.jsxs("div",{children:['  direction="',o.jsx("span",{className:"blue",children:e.direction}),'"']}),o.jsxs("div",{children:['  buttonType="',o.jsx("span",{className:"blue",children:e.buttonType}),'"']}),o.jsxs("div",{children:['  bgColor="',o.jsx("span",{className:"blue",children:e.bgColor}),'"']}),e.width&&o.jsxs("div",{children:['  width="',o.jsx("span",{className:"blue",children:e.width}),'"']}),e.noGaps&&o.jsx("div",{children:"  noGaps"}),"/>"]})})})})]}),"Template"),s=C.bind({});s.args={direction:"row",buttonType:"small",bgColor:"themedOutline"};const n=C.bind({});n.args={direction:"column",width:"block",buttonType:"small",bgColor:"groupOptionOutline"};const t=a(e=>o.jsxs(o.Fragment,{children:[o.jsxs("h2",{children:["When using ButtonGroup inside a ",o.jsx("a",{href:"/?path=/docs/atoms-popover--default",style:{textDecoration:"underline"},children:"Popover"}),' and adding the option to search, make sure to set "searchStopPropagation" to true.']}),o.jsx(h,{children:o.jsx("div",{className:"text-center",children:o.jsx(y,{trigger:"click",rootClose:!0,placement:"bottom",overlay:o.jsx(T,{className:"btn-group-dropdown-popover margin-top",id:"popover",children:o.jsx("div",{className:"popover-content",children:o.jsx(r,{multiLines:!0,...e,...j})})}),children:o.jsx("button",{className:"margin-top-20",children:"Click Me"})})})}),o.jsx("div",{className:"padding-h-30",children:o.jsx("div",{className:"code-block margin-top-30",children:o.jsx(g,{size:x["18px"],align:N.left,children:o.jsxs("div",{className:"import-line",children:["import { ",o.jsx("span",{className:"blue",children:"ButtonGroupComponent"})," } from ",o.jsx("span",{className:"green",children:"'@getvim/atomic-ui';"}),o.jsx("br",{}),o.jsx("br",{}),"<ButtonGroupComponent ",e.searchable&&o.jsx("div",{children:"  searchable"}),o.jsxs("div",{children:['  direction="',o.jsx("span",{className:"blue",children:e.direction}),'"']}),o.jsxs("div",{children:['  buttonType="',o.jsx("span",{className:"blue",children:e.buttonType}),'"']}),e.bgColor&&o.jsxs("div",{children:['  bgColor="',o.jsx("span",{className:"blue",children:e.bgColor}),'"']}),e.width&&o.jsxs("div",{children:['  width="',o.jsx("span",{className:"blue",children:e.width}),'"']}),o.jsxs("div",{children:['  color="',o.jsx("span",{className:"blue",children:e.color}),'"']}),"/>"]})})})})]}),"ButtonGroupDropdown");t.args={width:"block",color:"extraDarkGray",buttonType:"dropdownOption",direction:"column",searchable:!0,searchStopPropagation:!0};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => <>
    <Container>
      <div className="padding-v-30">
        <ButtonGroupComponent {...args} {...props} />
      </div>
    </Container>
    <div className="padding-h-30">
      <div className="code-block">
        <Text size={SizeEnum['18px']} align={AlignEnum.left}>
          <div className="import-line">
            import &#123;&nbsp;
            <span className="blue">ButtonGroupComponent</span>&nbsp;&#125;&nbsp;from&nbsp;
            <span className="green">'@getvim/atomic-ui';</span>
            <br />
            <br />
            &lt;ButtonGroupComponent&nbsp;
            {args.searchable && <div>&nbsp;&nbsp;searchable</div>}
            <div>
              &nbsp;&nbsp;direction="<span className="blue">{args.direction}</span>"
            </div>
            <div>
              &nbsp;&nbsp;buttonType="<span className="blue">{args.buttonType}</span>"
            </div>
            <div>
              &nbsp;&nbsp;bgColor="<span className="blue">{args.bgColor}</span>"
            </div>
            {args.width && <div>
                &nbsp;&nbsp;width="<span className="blue">{args.width}</span>"
              </div>}
            {args.noGaps && <div>&nbsp;&nbsp;noGaps</div>}
            /&gt;
          </div>
        </Text>
      </div>
    </div>
  </>`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => <>
    <Container>
      <div className="padding-v-30">
        <ButtonGroupComponent {...args} {...props} />
      </div>
    </Container>
    <div className="padding-h-30">
      <div className="code-block">
        <Text size={SizeEnum['18px']} align={AlignEnum.left}>
          <div className="import-line">
            import &#123;&nbsp;
            <span className="blue">ButtonGroupComponent</span>&nbsp;&#125;&nbsp;from&nbsp;
            <span className="green">'@getvim/atomic-ui';</span>
            <br />
            <br />
            &lt;ButtonGroupComponent&nbsp;
            {args.searchable && <div>&nbsp;&nbsp;searchable</div>}
            <div>
              &nbsp;&nbsp;direction="<span className="blue">{args.direction}</span>"
            </div>
            <div>
              &nbsp;&nbsp;buttonType="<span className="blue">{args.buttonType}</span>"
            </div>
            <div>
              &nbsp;&nbsp;bgColor="<span className="blue">{args.bgColor}</span>"
            </div>
            {args.width && <div>
                &nbsp;&nbsp;width="<span className="blue">{args.width}</span>"
              </div>}
            {args.noGaps && <div>&nbsp;&nbsp;noGaps</div>}
            /&gt;
          </div>
        </Text>
      </div>
    </div>
  </>`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,b,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <>
    <h2>
      When using ButtonGroup inside a <a href="/?path=/docs/atoms-popover--default" style={{
      textDecoration: 'underline'
    }}>Popover</a> and
      adding the option to search, make sure to set "searchStopPropagation" to true.
    </h2>
    <Container>
      <div className="text-center">
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover className="btn-group-dropdown-popover margin-top" id="popover">
              <div className="popover-content">
                <ButtonGroupComponent multiLines {...args} {...props} />
              </div>
            </Popover>}>
          <button className="margin-top-20">Click Me</button>
        </OverlayTrigger>
      </div>
    </Container>

    <div className="padding-h-30">
      <div className="code-block margin-top-30">
        <Text size={SizeEnum['18px']} align={AlignEnum.left}>
          <div className="import-line">
            import &#123;&nbsp;
            <span className="blue">ButtonGroupComponent</span>&nbsp;&#125;&nbsp;from&nbsp;
            <span className="green">'@getvim/atomic-ui';</span>
            <br />
            <br />
            &lt;ButtonGroupComponent&nbsp;
            {args.searchable && <div>&nbsp;&nbsp;searchable</div>}
            <div>
              &nbsp;&nbsp;direction="<span className="blue">{args.direction}</span>"
            </div>
            <div>
              &nbsp;&nbsp;buttonType="<span className="blue">{args.buttonType}</span>"
            </div>
            {args.bgColor && <div>
                &nbsp;&nbsp;bgColor="<span className="blue">{args.bgColor}</span>"
              </div>}
            {args.width && <div>
                &nbsp;&nbsp;width="<span className="blue">{args.width}</span>"
              </div>}
            <div>
              &nbsp;&nbsp;color="<span className="blue">{args.color}</span>"
            </div>
            /&gt;
          </div>
        </Text>
      </div>
    </div>
  </>`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const lo=["ButtonGroupRow","ButtonGroupColumn","ButtonGroupDropdown"];export{n as ButtonGroupColumn,t as ButtonGroupDropdown,s as ButtonGroupRow,lo as __namedExportsOrder,po as default};
//# sourceMappingURL=ButtonGroup.stories-7ed887b3.js.map
