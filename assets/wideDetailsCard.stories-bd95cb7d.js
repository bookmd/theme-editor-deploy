var c=Object.defineProperty;var s=(i,m)=>c(i,"name",{value:m,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{W as o,a as u,b as l}from"./index-09738329.js";import{T as p}from"./index-4acc6b6d.js";import{A as a}from"./index-18fb8b63.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./index-1df6d64a.js";import"./index-5572c131.js";import"./index-15a2afa8.js";import"./v4-24b2c166.js";import"./index-090660ec.js";import"./PopoverState-334c5845.js";import"./index-57cd95bd.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";const L={title:"Organisms/WideDetailsCard",component:o,parameters:{viewport:{defaultViewport:"default"}},argTypes:{icon:{control:"text"},iconBgColor:{control:"color"},title:{control:"text"},subtitle:{control:"text"},description:{control:"text"},collapsible:{control:"boolean"},fontSize:{control:"radio",options:["default","small"]}}},x=[{label:"1030F",value:"Influenza immunization status assessed"},{label:"4274F",value:"Influenza immunization administered or previously received"},{label:"4037F",value:"Influenza immunization ordered or administered"}],f=s(i=>e.jsxs("div",{className:"padding-box-30",style:{background:"#f2f2f2",height:"100vh"},children:[e.jsx(o,{...i,children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx("div",{style:{flex:"1 1 auto"},children:e.jsx(u,{items:x,title:"CPT ||"})}),e.jsxs("div",{style:{flex:"1 1 auto"},children:[e.jsx(l,{id:"c",label:"Date",value:"10/24/2021"}),e.jsx(l,{id:"d",label:"source",value:"Medical Coder"})]}),e.jsxs("div",{style:{flex:"1 1 auto"},children:[e.jsx(l,{id:"e",label:"Random Number",value:"79204782"}),e.jsx(l,{id:"f",label:"Something",value:"Very good"})]})]})}),e.jsx(o,{...i})]}),"Template"),t=f.bind({});t.args={icon:"icon-microscope2",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-block margin-right-10",children:"Controling High Blood Pressure (CPB)"}),e.jsx(p,{tooltipContent:"Something",children:e.jsx("i",{className:"icon-view-document text-16"})})]}),subtitle:"HEDIS",collapsible:!0,fontSize:"small",cardStatus:"default",iconBgColor:"#10ABE4",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{bgColor:"themedOutline",buttonType:"tinyRounded",width:"smallMedium",children:"Add to chart"}),e.jsx(a,{bgColor:"themedOutline",buttonType:"tinyRounded",className:"margin-right-10 no-padding",style:{aspectRatio:"1",fontSize:"14px",marginLeft:"-1px"},children:"+"}),e.jsx(a,{bgColor:"themedOutline",buttonType:"tinyRounded",width:"small",children:"Dismiss"})]})};var r,d,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => <div className="padding-box-30" style={{
  background: '#f2f2f2',
  height: '100vh'
}}>
    <WideDetailsCard {...args}>
      <div style={{
      display: 'flex'
    }}>
        <div style={{
        flex: '1 1 auto'
      }}>
          <WideDetailsCardItemsList items={cptList} title="CPT ||" />
        </div>
        <div style={{
        flex: '1 1 auto'
      }}>
          <WideDetailsCardItem id="c" label="Date" value="10/24/2021" />
          <WideDetailsCardItem id="d" label="source" value="Medical Coder" />
        </div>
        <div style={{
        flex: '1 1 auto'
      }}>
          <WideDetailsCardItem id="e" label="Random Number" value="79204782" />
          <WideDetailsCardItem id="f" label="Something" value="Very good" />
        </div>
      </div>
    </WideDetailsCard>
    <WideDetailsCard {...args} />
  </div>`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,L as default};
//# sourceMappingURL=wideDetailsCard.stories-bd95cb7d.js.map
