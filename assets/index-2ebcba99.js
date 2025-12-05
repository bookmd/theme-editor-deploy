var m=Object.defineProperty;var p=(n,o)=>m(n,"name",{value:o,configurable:!0});import{j as t}from"./jsx-runtime-d01ea613.js";import{d as u}from"./dayjs.min-ce90ff23.js";import{r as i}from"./index-49b6e5dd.js";import{s as e}from"./styled-components.browser.esm-7c6d6d39.js";import{A as j}from"./index-6d551a42.js";import{S as w}from"./index-fb8076a8.js";const A=p(({iconUrl:n,createdBy:o,createdAt:c,isCoreApp:l,displayName:r,expand:d})=>{const s=i.useRef(null),a=i.useRef(null),[x,h]=i.useState(!0);return i.useEffect(()=>{p(()=>{if(s.current&&a.current){const f=s.current.getBoundingClientRect(),g=a.current.getBoundingClientRect();h(Math.abs(f.top-g.top)<1)}},"checkAlignment")()},[]),t.jsxs(v,{expand:d,children:[t.jsx(C,{children:t.jsx(j,{iconUrl:n,alt:r,className:"application-header-icon"})}),t.jsxs(R,{children:[t.jsx(S,{"data-testid":`app-title-${r}`,children:r}),t.jsxs(y,{children:[t.jsx(I,{ref:s,children:t.jsxs(b,{"data-testid":`app-creator-${r}`,children:["By: ",o||"Unknown"," ",l&&t.jsx(k,{children:t.jsx(w,{})})]})}),t.jsxs(H,{ref:a,children:[x&&t.jsx(M,{children:"|"}),t.jsxs(Y,{children:["Created on:"," ",t.jsx($,{"data-testid":`app-creation-date-${r}`,children:u(c).format("MMM YYYY")})]})]})]})]})]})},"ApplicationHeader"),v=e.div`
  flex: ${({expand:n})=>n?"1":"none"};
  display: flex;
`,C=e.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,R=e.div`
  flex: 1;
`,S=e.div`
  font-weight: 700;
  font-size: 18px;
  color: #001c36;
  line-height: normal;
  margin-bottom: 1px;
`,y=e.div`
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  row-gap: 2px;
  color: #354052;
`,I=e.div`
  display: flex;
  align-items: center;
`,H=e.div`
  display: flex;
  align-items: center;
`,b=e.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`,M=e.span`
  margin: 0 4px 0 0;
`,Y=e.span`
  font-weight: 400;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,$=e.span`
  font-weight: 600;
  margin-left: 4px;
`,k=e.span`
  width: 15px;
  height: 15px;
  svg {
    width: 100%;
    height: auto;
  }
`,q=A;export{q as A};
//# sourceMappingURL=index-2ebcba99.js.map
