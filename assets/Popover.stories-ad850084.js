var l=Object.defineProperty;var p=(o,r)=>l(o,"name",{value:r,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{P as n}from"./index-558aa706.js";import{a as c}from"./PopoverState-334c5845.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./DialogDisclosure-6fed7bc5.js";import"./index-57cd95bd.js";const f={title:"Atoms/Popover",component:n,parameters:{viewport:{defaultViewport:"default"}},argTypes:{withArrow:{control:"boolean"},placement:{control:"radio",options:["top","bottom","left","right"]}}},t=p(o=>{const r=c({placement:o.placement});return e.jsxs("div",{className:"text-center",children:[e.jsx(n,{...o,popover:r,disclosure:e.jsx("span",{className:"inline-block",style:{maxWidth:"300px",marginTop:"100px"},children:e.jsx("span",{children:"Popover disclosure"})}),placement:o.placement,children:e.jsx("div",{className:"popover-content padding-box-20",style:{border:"1px solid #e2e2e2",borderRadius:"5px",margin:"-2px"},children:"Popover body"})}),e.jsxs("div",{style:{marginTop:"100px"},children:[e.jsx("button",{onClick:r.show,children:"Show popover"}),e.jsx("button",{onClick:r.hide,children:"Hide popover"})]}),e.jsx("div",{className:"margin-top-20",children:"Refresh the page to update the popover placement"})]})},"Default");t.args={withArrow:!0,placement:"bottom"};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const popover = usePopoverState({
    placement: args.placement
  });
  return <div className="text-center">
      <Popover {...args} popover={popover} disclosure={<span className="inline-block" style={{
      maxWidth: '300px',
      marginTop: '100px'
    }}>
            <span>Popover disclosure</span>
          </span>} placement={args.placement}>
        <div className="popover-content padding-box-20" style={{
        border: '1px solid #e2e2e2',
        borderRadius: '5px',
        margin: '-2px'
      }}>
          Popover body
        </div>
      </Popover>
      <div style={{
      marginTop: '100px'
    }}>
        <button onClick={popover.show}>Show popover</button>
        <button onClick={popover.hide}>Hide popover</button>
      </div>
      <div className="margin-top-20">
        Refresh the page to update the popover placement 
      </div>
    </div>;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,f as default};
//# sourceMappingURL=Popover.stories-ad850084.js.map
