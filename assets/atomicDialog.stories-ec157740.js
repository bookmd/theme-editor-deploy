var h=Object.defineProperty;var l=(o,n)=>h(o,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-d01ea613.js";import{A as r}from"./index-5c25fdcc.js";import{A as e}from"./index-18fb8b63.js";import{B as b}from"./index-e9a05652.js";import{u as g}from"./PopoverState-334c5845.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./index-1df6d64a.js";import"./index-5572c131.js";import"./DialogDisclosure-6fed7bc5.js";import"./index-57cd95bd.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";import"./index-7be811f5.js";import"./index-fd2ed92f.js";import"./index-4acc6b6d.js";import"./v4-24b2c166.js";import"./isEqual-8c1284fe.js";import"./_baseIsEqual-e73bd1c6.js";import"./_getTag-d8b636ac.js";import"./isFunction-883d3e0e.js";import"./isObjectLike-b52999d3.js";import"./isArray-513c67aa.js";import"./index-a1822ac9.js";const x={items:[{value:"1",text:"Option #1"},{value:"2",text:"Option #2"},{value:"3",text:"Option #3"},{value:"4",text:"Option #4"},{value:"5",text:"Option #5"},{value:"6",text:"Option #6"},{value:"7",text:"Option #7"},{value:"8",text:"Option #8"},{value:"9",text:"Option #9"},{value:"10",text:"Option #10"}],onChange:()=>{},width:"block",color:"extraDarkGray",buttonType:"dropdownOption",direction:"column",searchStopPropagation:!0},H={title:"Atoms/AtomicDialog",component:r,parameters:{viewport:{defaultViewport:"default"}},argTypes:{lightBackdrop:{control:"boolean"},showContentPadding:{control:"boolean"},title:{control:"text"},dialogStyle:{control:"radio",options:["default","sidebar-style"]}}},i=l(o=>{const n=g();return t.jsx("div",{className:"text-left padding-box-30",children:t.jsx(r,{...o,dialog:n,disclosure:t.jsx(e,{buttonType:"small",children:"Open Dialog"}),footerContent:t.jsxs(t.Fragment,{children:[t.jsx(e,{buttonType:"tiny",bgColor:"themedOutline",children:"Yes"}),t.jsx(e,{buttonType:"tiny",bgColor:"themedOutline",children:"No"})]}),children:t.jsxs("div",{className:"text-14 text-ultra-dark",children:["Accessible Dialog component that follows the WAI-ARIA Dialog (Modal) Pattern. It's rendered within a Portal by default, but it also has a non-modal state, which doesn't use portals Accessible Dialog component that follows the WAI-ARIA Dialog (Modal) Pattern.",t.jsx("br",{}),t.jsx("br",{})," When opening Dialog, focus is usually set on the first tabbable element within the dialog, including itself. So, if you want to set the initial focus on the dialog element, you can simply pass tabIndex=",0," to it. It'll be also included in the tab order.",t.jsx("br",{}),t.jsx("br",{})]})})})},"Default");i.args={title:"Dialog Title",lightBackdrop:!1,showContentPadding:!0};const a=l(o=>{const n=g();return t.jsx("div",{className:"text-left padding-box-30",children:t.jsx(r,{...o,dialog:n,disclosure:t.jsx(e,{buttonType:"small",children:"Open Dialog"}),footerContent:t.jsxs(t.Fragment,{children:[t.jsx(e,{buttonType:"tiny",bgColor:"themedOutline",children:"Yes"}),t.jsx(e,{buttonType:"tiny",bgColor:"themedOutline",children:"No"})]}),children:t.jsx(b,{...o,...x})})})},"ButtonGroupDropdown");a.args={title:"Dialog Title",lightBackdrop:!1,showContentPadding:!0};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const dialog = useDialogState();
  return <div className="text-left padding-box-30">
      <AtomicDialog {...args} dialog={dialog} disclosure={<Button buttonType="small">Open Dialog</Button>} footerContent={<>
            <Button buttonType="tiny" bgColor="themedOutline">
              Yes
            </Button>
            <Button buttonType="tiny" bgColor="themedOutline">
              No
            </Button>
          </>}>
        <div className="text-14 text-ultra-dark">
          Accessible Dialog component that follows the WAI-ARIA Dialog (Modal) Pattern. It's rendered
          within a Portal by default, but it also has a non-modal state, which doesn't use portals
          Accessible Dialog component that follows the WAI-ARIA Dialog (Modal) Pattern.<br /><br /> When opening
          Dialog, focus is usually set on the first tabbable element within the dialog, including
          itself. So, if you want to set the initial focus on the dialog element, you can simply pass
          tabIndex={0} to it. It'll be also included in the tab order.<br /><br />
          
        </div>
      </AtomicDialog>
    </div>;
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const dialog = useDialogState();
  return <div className="text-left padding-box-30">
      <AtomicDialog {...args} dialog={dialog} disclosure={<Button buttonType="small">Open Dialog</Button>} footerContent={<>
            <Button buttonType="tiny" bgColor="themedOutline">
              Yes
            </Button>
            <Button buttonType="tiny" bgColor="themedOutline">
              No
            </Button>
          </>}>
        <ButtonGroupComponent {...args} {...props} />
      </AtomicDialog>
    </div>;
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const J=["Default","ButtonGroupDropdown"];export{a as ButtonGroupDropdown,i as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=atomicDialog.stories-ec157740.js.map
