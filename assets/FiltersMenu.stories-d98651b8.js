var f=Object.defineProperty;var n=(r,i)=>f(r,"name",{value:i,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{r as m}from"./index-49b6e5dd.js";import{T as a,S as u,W as g,C as s}from"./index-1df6d64a.js";import{B as h}from"./index-e9a05652.js";import{a as N}from"./PopoverState-334c5845.js";import{P as b}from"./index-558aa706.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-5572c131.js";import"./index-2870a228.js";import"./index-18fb8b63.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";import"./index-7be811f5.js";import"./index-fd2ed92f.js";import"./index-4acc6b6d.js";import"./index-57cd95bd.js";import"./v4-24b2c166.js";import"./isEqual-8c1284fe.js";import"./_baseIsEqual-e73bd1c6.js";import"./_getTag-d8b636ac.js";import"./isFunction-883d3e0e.js";import"./isObjectLike-b52999d3.js";import"./isArray-513c67aa.js";import"./index-a1822ac9.js";import"./DialogDisclosure-6fed7bc5.js";function d({filters:r}){return e.jsxs("div",{className:"filters-wrapper",children:[e.jsx(a,{size:u["16px"],weight:g.light,colorName:s.ultraDark,className:"icon-filter-sliders filters-icon"}),r]})}n(d,"FiltersMenu");const Z={title:"Molecules/FiltersMenu",component:d},C=n(r=>{const[i,w]=m.useState(l[0].value),[v,P]=m.useState(l[0].text),o=N({placement:"bottom-start",gutter:7});return e.jsx("div",{className:"filter-button-wrapper language-button",onClick:()=>o.show(),children:e.jsx(d,{filters:[e.jsx(b,{popover:o,hide:()=>o.hide(),disclosure:e.jsxs("div",{className:"filter-button",style:{display:"flex",alignItems:"center"},children:[e.jsx(a,{size:u["12px"],colorName:s.ultraDark,text:"Language: "}),e.jsx(a,{size:u["12px"],colorName:s.ultraDark,text:v,weight:g.semibold,className:"filter-value"}),e.jsx(a,{className:"icon-chevron-down filters-arrow",colorName:s.ultraDark,inline:!0})]}),tabIndex:0,className:"language-popover-main",children:e.jsx(h,{searchable:!0,bgColor:"default",buttonType:"dropdownOption",width:"block",direction:"column",color:"extraDarkGray",onChange:S=>{o.hide()},multiLines:!0,value:i,items:l,searchStopPropagation:!0})})]})})},"Template"),t=C.bind({}),l=[{value:"eng",text:"English"},{value:"spa",text:"Spanish"},{value:"zho",text:"Chinese"},{value:"tgl",text:"Tagalog"},{value:"vie",text:"Vietnamese"},{value:"ara",text:"Arabic"}];t.args={filters:[]};var p,c,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [currentValue, setCurrentValue] = useState<string>(languages[0].value);
  const [currentText, setCurrentText] = useState<string>(languages[0].text);
  const firstPopover = usePopoverState({
    placement: 'bottom-start',
    gutter: 7
  });
  return <div className={\`filter-button-wrapper language-button\`} onClick={() => firstPopover.show()}>
      <FiltersMenu filters={[<Popover popover={firstPopover} hide={() => firstPopover.hide()} disclosure={<div className="filter-button" style={{
      display: 'flex',
      alignItems: 'center'
    }}>
                <Text size={SizeEnum['12px']} colorName={ColorNameEnum.ultraDark} text="Language: " />
                <Text size={SizeEnum['12px']} colorName={ColorNameEnum.ultraDark} text={currentText} weight={WeightEnum.semibold} className="filter-value" />
                <Text className="icon-chevron-down filters-arrow" colorName={ColorNameEnum.ultraDark} inline />
              </div>} tabIndex={0} className="language-popover-main">
            <ButtonGroupComponent searchable bgColor="default" buttonType="dropdownOption" width="block" direction="column" color="extraDarkGray" onChange={event => {
        firstPopover.hide();
      }} multiLines value={currentValue} items={languages} searchStopPropagation />
          </Popover>]} />
    </div>;
}`,...(x=(c=t.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=FiltersMenu.stories-d98651b8.js.map
