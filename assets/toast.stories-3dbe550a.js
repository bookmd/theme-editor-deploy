var E=Object.defineProperty;var i=(e,C)=>E(e,"name",{value:C,configurable:!0});import{j as t}from"./jsx-runtime-d01ea613.js";import{r as b}from"./index-49b6e5dd.js";import{t as o,S as R,Z as x,T as P}from"./react-toastify.esm-f97f9e5c.js";import{S as j}from"./index-31c7a554.js";import{c as m,T as p}from"./index-8dca2978.js";import{E as B}from"./index-543bbecc.js";import"./_commonjsHelpers-f86d8be3.js";import"./clsx.m-26950cc3.js";import"./index-57cd95bd.js";import"./objectWithoutPropertiesLoose-c22daa29.js";import"./inheritsLoose-54936dc8.js";import"./setPrototypeOf-ec9b6182.js";import"./index-2870a228.js";import"./index-1df6d64a.js";import"./index-5572c131.js";import"./index-18fb8b63.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";import"./v4-24b2c166.js";import"./index-4acc6b6d.js";import"./PopoverState-334c5845.js";const S=i(e=>(b.useEffect(()=>{m(e)},[]),t.jsx("div",{style:{marginTop:"400px"},children:t.jsx("button",{onClick:()=>m(e),children:"create toast"})})),"ToastStory"),K={title:"Molecules/Toast",component:S,argTypes:{type:{control:{type:"select",options:[o.TYPE.ERROR,o.TYPE.INFO,o.TYPE.DEFAULT,o.TYPE.SUCCESS]}}}},n=i(e=>t.jsxs(t.Fragment,{children:[t.jsx(S,{...e}),t.jsx(P,{})]}),"Template"),r=n.bind({});r.args={title:"Oops,",message:`Seems like your request is not working at the moment,
 <b>Please try again.</b>`,html:!0,transition:R,position:"top-right",hideProgressBar:!0,draggable:!1,autoClose:!1,closeButton:!1,type:o.TYPE.ERROR,dismissText:"Dismiss",vimConnectStyle:!1};const s=n.bind({});s.args={title:"Order Assist",message:"John Johnson MD, is high performing, In-Network and 4.7mi away from Rosie’s home.",html:!0,transition:x,position:"top-right",hideProgressBar:!1,draggable:!1,autoClose:1e4,closeButton:!0,dismissText:"",vimConnectStyle:!0,toastIcon:t.jsx(j,{}),actionButtons:[{type:p.SECONDARY,text:"Cancel",id:"cancel",buttonType:"link",className:"text-ultra-dark text-underline"},{type:p.PRIMARY,text:"Accept",id:"accept",buttonType:"tiny"}]};const a=n.bind({});a.args={title:"Error",message:"Failed to save the comment, please try again",html:!0,transition:x,position:"top-right",hideProgressBar:!0,draggable:!1,autoClose:1e4,dismissText:"",vimConnectStyle:!0,toastImage:t.jsx(B,{})};var c,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <>
      <ToastStory {...args} />
      <ToastContainer />
    </>;
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,d,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <>
      <ToastStory {...args} />
      <ToastContainer />
    </>;
}`,...(T=(d=s.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var h,y,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <>
      <ToastStory {...args} />
      <ToastContainer />
    </>;
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Q=["Default","VimConnect","ToastWithImage"];export{r as Default,a as ToastWithImage,s as VimConnect,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=toast.stories-3dbe550a.js.map
