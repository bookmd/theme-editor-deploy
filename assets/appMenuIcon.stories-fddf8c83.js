var u=Object.defineProperty;var a=(o,t)=>u(o,"name",{value:t,configurable:!0});import{j as r}from"./jsx-runtime-d01ea613.js";import{M as d}from"./index-9b2e3adf.js";import{A as s}from"./index-fbb69678.js";import"./index-49b6e5dd.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-0fdbdf85.js";import"./index-e2f2717f.js";import"./featureFlagClient-9d150d2f.js";import"./isFunction-883d3e0e.js";import"./isObjectLike-b52999d3.js";import"./isSymbol-db47e2ae.js";import"./index-0ae58999.js";import"./index-69cfc333.js";import"./tslib.es6-a1ba6d78.js";import"./dayjs.min-c5fb5fea.js";import"./index-0896d98b.js";import"./v4-24b2c166.js";import"./index-81a70967.js";import"./index-4acc6b6d.js";import"./index-2870a228.js";import"./PopoverState-334c5845.js";import"./index-57cd95bd.js";import"./index-15a2afa8.js";const W={title:"vim-connect-ui/Molecules/ApplicationMenuIcon",component:s,argTypes:{"application.disabled":{control:"boolean"},"application.loading":{control:"boolean"},"application.tooltip":{control:"text"},"application.ignoreNotificationsValue":{control:"boolean"},"application.notifications":{control:"number"},onClick:{action:"clicked"},selected:{control:"boolean"},"hubPosition.horizontal":{control:{type:"select",options:["Right","Left"]}},"application.whiteBackground":{control:"boolean"}}},h=a(o=>{const t=Object.entries(o).reduce((n,[e,m])=>e.startsWith("application.")?{...n,[e.substring(12)]:m}:n,{});return r.jsx("div",{style:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center"},children:r.jsx(s,{...t,hubPosition:{horizontal:o["hubPosition.horizontal"]},...o})})},"Template"),i=h.bind({});i.args={"application.disabled":!1,"application.loading":!1,"application.tooltip":"Application Name","application.ignoreNotificationsValue":!1,"application.notifications":3,"application.whiteBackground":!1,"application.iconSource":d,"hubPosition.horizontal":"Right",selected:!1};var p,l,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const application = Object.entries(args).reduce((prev, [key, val]) => {
    if (key.startsWith('application.')) {
      return {
        ...prev,
        [key.substring('application.'.length)]: val
      };
    } else {
      return prev;
    }
  }, {});
  return <div style={{
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
      <ApplicationMenuIcon {...application} hubPosition={{
      horizontal: args['hubPosition.horizontal']
    }} {...args} />
    </div>;
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,W as default};
//# sourceMappingURL=appMenuIcon.stories-fddf8c83.js.map
