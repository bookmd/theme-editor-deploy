var T=Object.defineProperty;var f=(e,n)=>T(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-d01ea613.js";import{r as l}from"./index-49b6e5dd.js";import{s as u}from"./styled-components.browser.esm-7c6d6d39.js";var c=(e=>(e.APP_PERMISSIONS="App Permissions",e.MORE_DETAILS="More details",e.TERMS_OF_SERVICE="terms of service",e.PRIVACY_POLICY="privacy policy",e.BAA="BAA",e))(c||{});const L=new Set(["8bfd8ae3-e933-4685-b09e-d6deffdf3b5a","800f69b1-a5dc-49a6-9e65-ee7a4981c648"]),O=f(({appId:e,appName:n,appAccountName:P,isCoreApp:d,legalDocs:o,onClick:s})=>{var x;const b=L.has(e),m=l.useCallback(()=>{s(c.PRIVACY_POLICY)},[s]),v=l.useCallback(()=>{s(c.TERMS_OF_SERVICE)},[s]),j=l.useCallback(()=>{s(c.BAA)},[s]);if(!o)return null;const y=((x=o.baaMetadata)==null?void 0:x.baaLinkType)!=="private"&&!!o.baaLink,r=t.jsx(p,{onClick:v,href:o.termsOfServiceLink,children:"Terms"}),h=t.jsx(p,{onClick:m,href:o.privacyLink,children:"Privacy Policy"}),g=t.jsx(p,{onClick:j,href:o.baaLink,children:"BAA"}),a=t.jsx(A,{children:n}),i=t.jsx(A,{children:P}),I=d&&t.jsxs(t.Fragment,{children:["The use of ",a," is subject to the application ",r]}),k=!d&&y&&t.jsxs(t.Fragment,{children:[a," is provided by ",i," and is subject to the ",n," ",r," ","and ",h,". By using this app, you instruct Vim to disclose EHR data (including PHI) to ",i,". Such disclosure and use of data are solely governed by the"," ",n," ",g,"."]}),E=!d&&!y&&t.jsxs(t.Fragment,{children:[a," is provided by ",i," and is subject to the ",n," ",r," ","and ",h,". You instruct Vim to disclose your EHR data to ",i,". To the extent such disclosure includes PHI, you represent that it is necessary for treatment, payment, or healthcare operations, and, if applicable, you will enter into a Business Associate Agreement (BAA) with ",i,"."]}),S=b&&t.jsxs(t.Fragment,{children:[a," is provided by ",i," and is subject to the ",i," ",r," and ",h,". This application does not subscribe to PHI through Vim today, and therefore is not covered under your BAA with Vim. In the event that you share PHI with the application or vendor, such disclosure shall be subject to the vendor's Terms and Privacy Policy."]});return t.jsx(B,{"data-testid":`application-policy-${e}`,children:S||I||k||E})},"ApplicationPolicy"),B=u.div`
  background-color: #10abe433;
  padding: 7px 40px;
  border-radius: 14px;
  font-size: 11px;
  text-align: center;
  line-height: 16px;
  font-weight: 400;

  @media (max-width: 900px) {
    padding: 7px 10px;
  }
`,p=u.a.attrs(e=>({href:e.href||void 0,target:"_blank",rel:"noopener noreferrer",onclick:e.onClick}))`
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
`,A=u.strong`
  font-weight: 700;
`,H=O;export{H as A,c as C};
//# sourceMappingURL=index-79c0668a.js.map
