var N=Object.defineProperty;var r=(a,c)=>N(a,"name",{value:c,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{D as d,a as t}from"./index-d6f9581f.js";import{P as S}from"./index-d60a95f8.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-2870a228.js";import"./index-1df6d64a.js";import"./index-5572c131.js";import"./index-15a2afa8.js";import"./index-4acc6b6d.js";import"./PopoverState-334c5845.js";import"./index-57cd95bd.js";import"./v4-24b2c166.js";import"./index-090660ec.js";const q={title:"Organisms/DetailsCard",component:d,argTypes:{iconClass:{control:"text"},title:{control:"text"},collapsible:{control:"boolean"},fontSize:{control:"radio",options:["default","small"]},cardStatus:{control:"radio",options:["default","added","dismissed"]},subHeader:{control:"object"}}},j=r(a=>e.jsx("div",{className:"padding-box-30",style:{background:"#f2f2f2",height:"100vh"},children:e.jsxs(d,{...a,children:[e.jsx(t,{horizontal:!0,description:"Monthly total cost of care decrease",label:"Cost impact",value:e.jsx(S,{type:"decrease",costSavingNumber:15,className:"margin-left-10"})}),e.jsx(t,{label:"Group Number",value:"TNDSNP"})]})}),"Template"),s=j.bind({});s.args={iconClass:"icon-map-pin-e",title:"Card Title",description:"Lorem ipsum dolot sit amet",collapsible:!0,fontSize:"default",cardStatus:"default",subHeader:e.jsx(t,{horizontal:!0,label:"Admin Date:",value:"10/10/22"})};const y=r(a=>e.jsx("div",{className:"text-center padding-box-30",style:{background:"#f2f2f2",height:"100vh"},children:e.jsx(d,{...a})}),"EmptyDetailsCardTemplate"),i=y.bind({});i.args={iconClass:"icon-map-pin-e",title:"Card Title",description:"Lorem ipsum dolot sit amet",collapsible:!0,fontSize:"default",cardStatus:"default",subHeader:e.jsx(t,{horizontal:!0,label:"Admin Date:",value:"10/10/22"})};const T=r(a=>e.jsx("div",{className:"text-center padding-box-30",style:{background:"#f2f2f2",height:"100vh"},children:e.jsxs(d,{...a,children:[!1,null]})}),"InvalidChildrenDetailsCardTemplate"),l=T.bind({});l.args={iconClass:"icon-map-pin-e",title:"Card Title",description:"Lorem ipsum dolot sit amet",collapsible:!0,fontSize:"default",cardStatus:"default",subHeader:e.jsx(t,{horizontal:!0,label:"Admin Date:",value:"10/10/22"})};const z=r(a=>e.jsx("div",{className:"text-center padding-box-30",style:{background:"#f2f2f2",height:"100vh"},children:e.jsxs(d,{...a,children:[e.jsx(t,{label:"Member Name",value:"Elicia Pollard"}),e.jsx(t,{label:"Group Number",value:"TNDSNP"})]})}),"TooltipWrapperTemplate"),o=z.bind({});o.args={iconClass:"icon-map-pin-e",title:"Card Title",description:"Lorem ipsum dolot sit amet",collapsible:!0,fontSize:"default",cardStatus:"default",TooltipWrapper:({children:a,className:c})=>e.jsx("div",{style:{backgroundColor:"red"},className:c,children:a}),subHeader:void 0};var n,p,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => <div className="padding-box-30" style={{
  background: '#f2f2f2',
  height: '100vh'
}}>
    <DetailsCard {...args}>
      <DetailsCardItem horizontal description="Monthly total cost of care decrease" label="Cost impact" value={<PotentialCostSaving type="decrease" costSavingNumber={15} className="margin-left-10" />} />
      <DetailsCardItem label="Group Number" value="TNDSNP" />
    </DetailsCard>
  </div>`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="text-center padding-box-30" style={{
  background: '#f2f2f2',
  height: '100vh'
}}>
    <DetailsCard {...args}></DetailsCard>
  </div>`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,C,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div className="text-center padding-box-30" style={{
  background: '#f2f2f2',
  height: '100vh'
}}>
    <DetailsCard {...args}>
      {false}
      {null}
    </DetailsCard>
  </div>`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var h,x,D;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div className="text-center padding-box-30" style={{
  background: '#f2f2f2',
  height: '100vh'
}}>
    <DetailsCard {...args}>
      <DetailsCardItem label="Member Name" value="Elicia Pollard" />
      <DetailsCardItem label="Group Number" value="TNDSNP" />
    </DetailsCard>
  </div>`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const B=["DetailsCardView","EmptyDetailsCardView","InvalidDetailsCardView","TooltipWrapperDetailsCardView"];export{s as DetailsCardView,i as EmptyDetailsCardView,l as InvalidDetailsCardView,o as TooltipWrapperDetailsCardView,B as __namedExportsOrder,q as default};
//# sourceMappingURL=detailsCard.stories-52736202.js.map
