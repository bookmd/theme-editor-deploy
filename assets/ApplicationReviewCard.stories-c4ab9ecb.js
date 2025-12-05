var fe=Object.defineProperty;var n=(e,t)=>fe(e,"name",{value:t,configurable:!0});import{j as i}from"./jsx-runtime-d01ea613.js";import{s as a}from"./styled-components.browser.esm-7c6d6d39.js";import{r as m,R as b}from"./index-49b6e5dd.js";import{s as ge}from"./styled-34e804a9.js";import{T as he}from"./index-4acc6b6d.js";import{A as ve}from"./index-2ebcba99.js";import{S as be}from"./index-9a947dfa.js";import{C as B,A as ye}from"./index-79c0668a.js";import"./index-5b359ca1.js";import"./unitless.browser.esm-a7a88d20.js";import"./hoist-non-react-statics.cjs-c6e191e6.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-cc29b0a7.js";import"./extends-85901eb6.js";import"./index-2870a228.js";import"./PopoverState-334c5845.js";import"./index-57cd95bd.js";import"./v4-24b2c166.js";import"./dayjs.min-ce90ff23.js";import"./index-6d551a42.js";import"./index-74d4fca4.js";import"./_commonjs-dynamic-modules-fefbfc1c.js";import"./index-fb8076a8.js";const xe=n(({label:e,maxDisplay:t,allOptions:r,selectedOptions:s,onChange:o})=>{const[c,h]=m.useState(!1),[u,l]=m.useState(""),p=m.useRef(null),y=m.useMemo(()=>{const d=new Set(s.map(x=>x.id)),k=r.map(x=>({...x,checked:d.has(x.id)}));return u.trim()?k.filter(x=>String(x.value).toLowerCase().includes(u.toLowerCase())):k},[r,u,s]),v=m.useMemo(()=>s.length-t,[t,s.length]),f=m.useCallback(()=>{h(!c)},[c]),g=m.useCallback(d=>{l(d.target.value)},[]),A=m.useCallback(d=>{const x=s.some(S=>S.id===d.id)?s.filter(S=>S.id!==d.id):[...s,d];o(x)},[s,o]);m.useEffect(()=>{const d=n(k=>{p.current&&!p.current.contains(k.target)&&h(!1)},"handleClickOutside");return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),m.useEffect(()=>{c||l("")},[c]);const w=s.slice(0,t);return r.length===0?null:i.jsxs(we,{children:[i.jsxs(ke,{children:[e,": "]}),i.jsxs(Pe,{children:[r.length>s.length&&i.jsx(Re,{onClick:f,children:"+ Add"}),w.map(d=>i.jsxs(Ae,{children:[d.value,i.jsx(je,{"data-testid":`remove-option-${d.id}`,onClick:()=>A(d),children:"×"})]},d.id)),i.jsx(Ce,{children:v>0&&s.length>0?i.jsx(Ie,{onClick:f,children:`+${v} `}):null}),c&&i.jsx(Ee,{children:i.jsxs(Se,{ref:p,children:[i.jsx(Le,{children:"Select Options"}),i.jsxs(He,{children:[i.jsx(Te,{placeholder:"Search",onChange:g,autoFocus:!0}),i.jsx(Be,{children:"🔍"})]}),i.jsx(Me,{children:y.map(d=>i.jsxs(Ne,{onClick:()=>A(d),children:[i.jsx(De,{checked:d.checked,readOnly:!0}),i.jsx(We,{children:d.value})]},d.id))})]})})]})]})},"MultiSelectDropdown"),we=a.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  position: relative;
`,ke=a.span`
  font-size: 14px;
  margin-right: 8px;
  font-weight: bold;
`,Pe=a.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  position: relative;
`,Ae=a.span`
  border-radius: 12px;
  padding: 0px 10px;
  font-size: 13px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  border: 1.5px solid #001c36;
`,je=a.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  margin-left: 4px;
  cursor: pointer;
  padding: 0 2px;
  &:hover {
    color: #333;
  }
`,Ce=a.div`
  display: inline-block;
`,le=a.button`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  color: ${e=>e.color};
  background: none;
  border: none;
`,Ie=a(le)`
  color: black;
`,Re=a(le)`
  color: #10abe4;
  margin-right: 4px;
  font-weight: normal;
`,Ee=a.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  z-index: 1000;
`,Se=a.div`
  width: 250px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,Le=a.div`
  padding: 10px 15px;
  font-weight: 500;
  border-bottom: 1px solid #eee;
`,He=a.div`
  position: relative;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
`,Te=a.input`
  width: 100%;
  padding: 8px;
  padding-right: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`,Be=a.span`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`,Me=a.div`
  max-height: 200px;
  overflow-y: auto;
`,Ne=a.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`,De=a.input.attrs({type:"checkbox"})`
  margin-right: 10px;
`,We=a.span`
  font-size: 14px;
`,Ve=xe,ze=new Set(["console.dev.devim.io","console.staging.devim.io","console.demo.devim.io","console.vim.com"]),$e=n(e=>{let t=window.location.hostname;return ze.has(t)||(t="console.getvim.com"),`https://${t}/organization-admin/public-page/app-store/${e}`},"useNavigationLink");var H=n((e,t)=>{var r;return((r=e==null?void 0:e[t])==null?void 0:r.read)===!0},"l"),Oe=n(e=>[{key:"identifiers",label:"identifiers"},{key:"demographics",label:"demographics"},{key:"address",label:"address"},{key:"contactInformation",label:"contact information"},{key:"insuranceInfo",label:"insurance information"},{key:"pcp",label:"PCP"},{key:"problemList",label:"problem lists"},{key:"medicationList",label:"medication list"},{key:"allergyList",label:"allergy list"},{key:"vitalList",label:"vital list"},{key:"labResultsList",label:"lab results list"}].filter(({key:t})=>H(e,t)).map(({label:t})=>t),"k"),Ue=n(e=>{var t,r;let s=[{key:"identifiers",label:"identifiers"},{key:"basicInformation",label:"basic information"},{key:"subjective",label:"subjective"},{key:"objective",label:"objective"},{key:"assessment",label:"assessment"},{key:"plan",label:"plan"},{key:"patientInstructions",label:"patient instructions"},{key:"generalNotes",label:"general notes"}].filter(({key:o})=>H(e,o)).map(({label:o})=>o);return(t=e==null?void 0:e.chartRetrievalRequest)!=null&&t.enabled&&s.push("clinical chart"),(r=e==null?void 0:e.televisitPatientAudioFeed)!=null&&r.enabled&&s.push("televisit audio feed"),s},"A"),_e=n(e=>[{key:"identifiers",label:"identifiers"},{key:"basicInformation",label:"basic information"},{key:"conditions",label:"conditions"},{key:"procedureCodes",label:"procedures codes"},{key:"referringProvider",label:"referring provider"},{key:"targetProvider",label:"target provider"}].filter(({key:t})=>H(e,t)).map(({label:t})=>t),"H"),Ge=n(e=>[{key:"identifiers",label:"identifiers"},{key:"basicInformation",label:"basic information"},{key:"assessments",label:"assessments"},{key:"procedureCodes",label:"procedure codes"},{key:"medications",label:"medications"},{key:"targetProvider",label:"target provider"},{key:"orderingProvider",label:"ordering provider"}].filter(({key:t})=>H(e,t)).map(({label:t})=>t),"M"),qe=n(e=>{var t,r,s;let o=[{key:"identifiers",label:"identifiers"},{key:"basicInformation",label:"basic information"}].filter(({key:c})=>H(e,c)).map(({label:c})=>c);return(t=e==null?void 0:e.renderingProvider)!=null&&t.read&&o.push("rendering provider"),(r=e==null?void 0:e.serviceLines)!=null&&r.read&&o.push("service lines"),(s=e==null?void 0:e.additionalDiagnoses)!=null&&s.read&&o.push("additional diagnoses"),o},"w"),Ze="data-extraction-service",Fe=n(e=>{var t,r,s,o,c,h,u;let l=(t=e==null?void 0:e.EHR)==null?void 0:t.resourcePermissions,p=e==null?void 0:e.session,y=(c=(o=(s=(r=p==null?void 0:p.permissions)==null?void 0:r.user)==null?void 0:s.contactInfo)==null?void 0:o.read)!=null?c:!1,v=Oe(l==null?void 0:l.patient).join(", "),f=Ue(l==null?void 0:l.encounter).join(", "),g=_e(l==null?void 0:l.referral).join(", "),A=Ge(l==null?void 0:l.orders).join(", "),w=qe(l==null?void 0:l.claim).join(", "),d=(u=(h=e==null?void 0:e.metadata)==null?void 0:h.services)==null?void 0:u.find(k=>k.id===Ze);return{hasAnyReadPermissions:y||!!v||!!f||!!g||!!A||!!w||!!d,hasContactInfoReadPermission:y,patientPermissionTags:v,encounterPermissionTags:f,referralPermissionTags:g,ordersPermissionTags:A,claimPermissionTags:w,appointmentsPermissions:d}},"W"),Z=n((e,t)=>{var r;return((r=e==null?void 0:e[t])==null?void 0:r.write)===!0},"p"),Ye=n(e=>[{key:"subjective",label:"subjective"},{key:"objective",label:"objective"},{key:"assessment",label:"assessment"},{key:"plan",label:"plan"},{key:"patientInstructions",label:"patient instructions"},{key:"billingInformation",label:"billing information"},{key:"generalNotes",label:"general notes"}].filter(({key:t})=>Z(e,t)).map(({label:t})=>t),"E"),Je=n(e=>[{key:"basicInformation",label:"basic information"},{key:"conditions",label:"conditions"},{key:"procedureCodes",label:"procedures codes"},{key:"targetProvider",label:"target provider"}].filter(({key:t})=>Z(e,t)).map(({label:t})=>t),"L"),Xe=n(e=>[{key:"basicInformation",label:"basic information"},{key:"targetProvider",label:"target provider"}].filter(({key:t})=>Z(e,t)).map(({label:t})=>t),"I"),Ke=n(e=>{var t;let r=(t=e==null?void 0:e.EHR)==null?void 0:t.resourcePermissions,s=Ye(r==null?void 0:r.encounter).join(", "),o=Je(r==null?void 0:r.referral).join(", "),c=Xe(r==null?void 0:r.orders).join(", ");return{encounterWritePermissionTags:s,referralWritePermissionTags:o,ordersWritePermissionTags:c,hasAnyWritePermissions:!!s||!!o||!!c}},"S"),Qe=n(e=>{let t=e==null?void 0:e.UI;return[{key:"counterNotificationLabel",text:"Show a counter notification badge on the Vim Hub"},{key:"popupNotification",text:"Trigger momentary push notifications"},{key:"autoPopup",text:"Auto expand as pop-up"},{key:"appAlwaysAvailable",text:"Be accessed anytime from the Vim Hub"},{key:"showPatientHeader",text:"Show the patient details on the Vim Hub"}].filter(({key:r})=>{var s;return(s=t==null?void 0:t.capabilities)==null?void 0:s[r]}).map(({text:r})=>r).join(" | ")},"z"),ei=n(e=>m.useMemo(()=>{var t;if(!e)return{hasPermissions:!1};let r=(t=e==null?void 0:e.metadata)==null?void 0:t.name,s=Fe(e),o=Ke(e),c=Qe(e);return{hasPermissions:!!c||s.hasAnyReadPermissions||o.hasAnyWritePermissions,readPermissions:s,readPermissionsLabel:`${r} can read from your EHR`,writePermissions:o,writePermissionsLabel:`${r} can add to your EHR`,hubPermissions:c,hubPermissionsLabel:`${r} can request the below Vim Hub features`}},[e]),"O");function ce(){return b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b.createElement("path",{fill:"#001C36",d:"M2.95 5.065h.819a.45.45 0 0 0 0-.9h-.846a.873.873 0 0 0-.873.873v5.923a.873.873 0 0 0 .873.873h10.154a.873.873 0 0 0 .873-.873V5.038a.873.873 0 0 0-.873-.873h-.846a.45.45 0 1 0 0 .9h.819v5.87H2.95v-5.87z"}),b.createElement("path",{fill:"#001C36",d:"M8 10.935a.45.45 0 0 1 .45.45V13.5a.45.45 0 0 1-.9 0v-2.115a.45.45 0 0 1 .45-.45z"}),b.createElement("path",{fill:"#001C36",d:"M5.857 13.5a.45.45 0 0 1 .45-.45h3.385a.45.45 0 0 1 0 .9H6.307a.45.45 0 0 1-.45-.45zM8 2.05a.45.45 0 0 1 .45.45v5.077a.45.45 0 0 1-.9 0V2.5A.45.45 0 0 1 8 2.05z"}),b.createElement("path",{fill:"#001C36",d:"M7.681 2.182a.45.45 0 0 1 .637 0l1.692 1.692a.45.45 0 1 1-.636.636L8 3.136 6.626 4.51a.45.45 0 1 1-.637-.636l1.693-1.692z"}))}n(ce,"B");function de(){return b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b.createElement("path",{fill:"#001C36",d:"M2.95 5.066h.819a.45.45 0 0 0 0-.9h-.846a.873.873 0 0 0-.873.873v5.923a.873.873 0 0 0 .873.873h10.154a.873.873 0 0 0 .873-.873V5.039a.873.873 0 0 0-.873-.873h-.846a.45.45 0 1 0 0 .9h.819v5.869H2.95v-5.87z"}),b.createElement("path",{fill:"#001C36",d:"M8 10.935a.45.45 0 0 1 .45.45V13.5a.45.45 0 0 1-.9 0v-2.115a.45.45 0 0 1 .45-.45z"}),b.createElement("path",{fill:"#001C36",d:"M5.857 13.5a.45.45 0 0 1 .45-.45h3.385a.45.45 0 0 1 0 .9H6.307a.45.45 0 0 1-.45-.45zM8 8.027a.45.45 0 0 1-.45-.45V2.5a.45.45 0 1 1 .9 0v5.077a.45.45 0 0 1-.45.45z"}),b.createElement("path",{fill:"#001C36",d:"M8.319 7.895a.45.45 0 0 1-.637 0L5.99 6.203a.45.45 0 0 1 .636-.637L8 6.94l1.374-1.374a.45.45 0 0 1 .637.637L8.319 7.895z"}))}n(de,"D");function pe(){return b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},b.createElement("path",{fill:"#001C36",d:"M9.27 4a2 2 0 1 1 .512 1.337l-1.672.912-1.871 1.07a1.99 1.99 0 0 1 .19 1.516l3.353 1.828a2 2 0 1 1-.442.81L5.986 9.645a2 2 0 1 1-.401-3.017L7.66 5.443l1.68-.916A2.002 2.002 0 0 1 9.27 4zm2-1.077a1.077 1.077 0 1 0 0 2.154 1.077 1.077 0 0 0 0-2.154zM4.5 7.231a1.077 1.077 0 1 0 0 2.154 1.077 1.077 0 0 0 0-2.154zM10.192 12a1.077 1.077 0 1 1 2.154 0 1.077 1.077 0 0 1-2.154 0z"}))}n(pe,"_");ce.__docgenInfo={description:"",methods:[],displayName:"B"};de.__docgenInfo={description:"",methods:[],displayName:"D"};pe.__docgenInfo={description:"",methods:[],displayName:"_"};const P=n(({label:e,value:t,labelClassName:r="text-sm font-semibold leading-[1.5]",valueClassName:s="text-sm text-gray-600 leading-[1.5]"})=>i.jsxs("div",{children:[i.jsxs("span",{className:r,children:[e,": "]}),i.jsx("span",{className:s,children:t})]}),"PermissionItem$1"),ii=n(({writePermissions:e,labelClassName:t,valueClassName:r})=>{if(!e)return null;const{encounterWritePermissionTags:s,referralWritePermissionTags:o,ordersWritePermissionTags:c}=e;return i.jsxs(i.Fragment,{children:[s&&i.jsx(P,{label:"Encounter",value:s,labelClassName:t,valueClassName:r}),o&&i.jsx(P,{label:"Referral",value:o,labelClassName:t,valueClassName:r}),c&&i.jsx(P,{label:"Orders",value:c,labelClassName:t,valueClassName:r})]})},"EhrWritePermissions"),ti=n(({readPermissions:e,labelClassName:t,valueClassName:r})=>{if(!e)return null;const{hasContactInfoReadPermission:s,patientPermissionTags:o,encounterPermissionTags:c,referralPermissionTags:h,ordersPermissionTags:u,claimPermissionTags:l,appointmentsPermissions:p}=e;return i.jsxs(i.Fragment,{children:[s&&i.jsx("span",{className:t||"text-sm font-semibold leading-[1.5]",children:"Vim Connect user profile data"}),o&&i.jsx(P,{label:"EHR patient information",value:o,labelClassName:t,valueClassName:r}),c&&i.jsx(P,{label:"EHR encounter information",value:c,labelClassName:t,valueClassName:r}),h&&i.jsx(P,{label:"EHR referral information",value:h,labelClassName:t,valueClassName:r}),u&&i.jsx(P,{label:"EHR orders information",value:u,labelClassName:t,valueClassName:r}),l&&i.jsx(P,{label:"EHR claim information",value:l,labelClassName:t,valueClassName:r}),p&&i.jsx(P,{label:"EHR appointments information",value:"Ongoing bulk access to future appointments. For this permission, you authorize Vim to use any live EHR user session to retrieve appointment data for your EHR on an ongoing basis.",labelClassName:t,valueClassName:r})]})},"EhrReadPermissions"),ri=n(({id:e,manifest:t,showPermissions:r})=>{const{readPermissions:s,writePermissions:o,hubPermissions:c,hubPermissionsLabel:h,readPermissionsLabel:u,writePermissionsLabel:l,hasPermissions:p}=ei(t),{hasAnyReadPermissions:y}=s||{},{hasAnyWritePermissions:v}=o||{};return t?p?i.jsxs(Y,{isVisible:r,"data-testid":`application-permissions-section-${e}`,children:[v&&i.jsx(U,{children:i.jsxs(M,{children:[i.jsxs(q,{children:[i.jsx(_,{children:i.jsx(de,{})}),i.jsx(G,{children:l})]}),i.jsx(ii,{writePermissions:o})]})}),y&&i.jsx(U,{children:i.jsxs(M,{children:[i.jsxs(q,{children:[i.jsx(_,{children:i.jsx(ce,{})}),i.jsx(G,{children:u})]}),i.jsx(ti,{readPermissions:s})]})}),c&&i.jsx(U,{children:i.jsxs(M,{children:[i.jsxs(q,{children:[i.jsx(_,{children:i.jsx(pe,{})}),i.jsx(G,{children:h})]}),i.jsx(si,{children:c})]})})]}):i.jsx(Y,{children:i.jsx(M,{children:"No content yet."})}):null},"ReviewCardPermissionsSection"),Y=a.div`
  max-height: ${e=>e.isVisible?"1000px":"0"};
  opacity: ${e=>e.isVisible?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease-out;
  padding: ${e=>e.isVisible?"16px":"0 16px"};
  border-top: ${e=>e.isVisible?"1px solid #eee":"none"};
`,U=a.div`
  display: flex;
  margin-bottom: 16px;
`,_=a.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;

  align-self: flex-start;

  svg {
    width: 100%;
    height: auto;
  }
`,M=a.div`
  flex: 1;
  border-bottom: 1px solid #eee;
`,G=a.div`
  font-weight: 700;
  color: #000;
  font-size: 12px;
`,si=a.span`
  font-size: 12px;
  line-height: 1.5;
  color: #666;
`,q=a.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`,ai="No PHI Shared by Vim",E=140,oi="This app does not receive PHI from the EHR via Vim. However, users may enter PHI directly into the app.",ni=ge(he)`
  width: 340px;
`,li=n(({className:e})=>i.jsx(ni,{tooltipContent:oi,placement:"auto",bgColor:"dark",width:"auto",children:i.jsxs("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:E,height:"24",fill:"none",viewBox:`0 0 ${E} 24`,children:[i.jsx("path",{fill:"url(#badge-gradient-left)",d:`M0 0h${E}l-6.51 12L${E} 24H0V0Z`}),i.jsx("text",{x:E/2-3,y:"13",dominantBaseline:"middle",textAnchor:"middle",fill:"#fff",fontSize:"11",fontWeight:"600",fontFamily:"system-ui, -apple-system, sans-serif",children:ai}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"badge-gradient-left",x1:"0",x2:E,y1:"12",y2:"12",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#A474CC"}),i.jsx("stop",{offset:"1",stopColor:"#567EDB"})]})})]})}),"NoPhiLeftSideBadge"),ci=n(({id:e,iconUrl:t,createdAt:r,createdBy:s,displayName:o,editable:c,openPermissionsByDefault:h,liveVersion:u,appStoreListing:l,approved:p,selectedDataSources:y,availableDataSources:v,onAppUpdated:f,onButtonClicked:g,showNoPhiBadge:A=!1})=>{const[w,d]=m.useState(h),k=$e(e),x=m.useCallback(()=>{g==null||g({appId:e,buttonName:B.APP_PERMISSIONS}),d(!w)},[w,g,e]),S=m.useCallback(()=>{const L={approved:!p,selectedDataSources:y||[]};f==null||f(e,L)},[p,y,f,e]),me=m.useCallback(L=>{const ue={approved:p||!1,selectedDataSources:L};f==null||f(e,ue)},[p,f,e]),F=m.useCallback(L=>{g==null||g({appId:e,buttonName:L})},[e,g]);return i.jsxs(pi,{"data-testid":`application-review-card-${e}`,children:[i.jsxs(mi,{"data-testid":`application-review-card-header-${e}`,children:[i.jsx(ve,{iconUrl:t,displayName:o,createdBy:s,createdAt:r,isCoreApp:(l==null?void 0:l.isCoreApp)||!1,expand:!0}),c&&i.jsx(fi,{onClick:S,isApproved:p||!1,"data-testid":`application-${p?"remove":"add"}-button-${e}`,children:p?"Remove":"Add App"})]}),i.jsxs(ui,{children:[i.jsx(gi,{children:l==null?void 0:l.description}),A&&i.jsx(di,{children:i.jsx(li,{})}),i.jsxs(hi,{"data-testid":`application-review-card-footer-${e}`,children:[i.jsxs(vi,{href:k,target:"_blank",rel:"noopener,noreferrer",children:[i.jsx("span",{onClick:()=>F(B.MORE_DETAILS),style:{textDecoration:"underline"},children:B.MORE_DETAILS}),i.jsx(ki,{children:i.jsx(be,{})})]}),i.jsxs(bi,{onClick:x,"data-testid":`application-permissions-button-${e}`,children:[i.jsx(yi,{children:B.APP_PERMISSIONS}),i.jsx(xi,{isOpen:w,children:"▼"})]})]}),!!(v!=null&&v.length)&&i.jsx(wi,{"data-testid":`application-review-card-content-${e}`,children:i.jsx(Ve,{label:"Data Connections",allOptions:v||[],selectedOptions:y||[],onChange:me,maxDisplay:3},e)}),i.jsx(ri,{id:e,manifest:u==null?void 0:u.manifest,showPermissions:w})]}),i.jsx(ye,{appId:e,appName:o,appAccountName:s,isCoreApp:l==null?void 0:l.isCoreApp,legalDocs:l==null?void 0:l.legal,onClick:F})]})},"ApplicationReviewCard"),di=a.div`
  margin-left: 16px;
`,pi=a.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 0 0 15px 15px;
`,mi=a.div`
  display: flex;
  align-items: center;
  padding: 16px;
`,ui=a.div`
  padding-left: 14px;
`,fi=a.button`
  padding: 2px 16px;
  border-radius: 5px;
  border: 1px solid ${e=>e.isApproved?"#00142A":"white"};
  background-color: ${e=>e.isApproved?"white":"#0DC99E"};
  color: ${e=>e.isApproved?"black":"white"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${e=>e.isApproved?"#f5f5f5":"#0DC99E"};
  }
`,gi=a.div`
  padding: 0 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #354052;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
  max-height: 42px;
`,hi=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 10px;
`,vi=a.a`
  color: #0088cc;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:visited {
    color: #0088cc;
  }
  display: flex;
  align-items: flex-start;
`,bi=a.button`
  background: none;
  border: none;
  color: #333;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #0088cc;
  }
`,yi=a.span`
  font-weight: 500;
  text-decoration: underline;
`,xi=a.span`
  margin-left: 8px;
  font-size: 10px;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s ease;
`,wi=a.div`
  padding: 0 16px 12px;
`,ki=a.div`
  width: 18px;
  height: 18px;
`,T=ci,j={id:"800f69b1-a5dc-49a6-9e65-ee7a4981c648",displayName:"GoodRx",iconUrl:"https://static.getvim.com/prod/vim-os-appstore/apps/icons/4f187c86-e9f2-457c-9501-69671c16702b.svg",status:"released",createdAt:"2025-05-23T04:37:38.432Z",createdBy:"GoodRx",createdByAccountId:2589,address:"2701 Olympic Blvd., West Building Suite 200, Santa Monica, United States,",phoneNumber:null,listingInfo:{liveVersion:{createdAt:"2025-06-15T21:40:53.000Z",status:"released",manifest:{metadata:{name:"GoodRx",url:""},UI:{iconUrl:"https://static.getvim.com/prod/vim-os-appstore/apps/icons/4f187c86-e9f2-457c-9501-69671c16702b.svg",capabilities:{showPatientHeader:!1,counterNotificationLabel:!0,popupNotification:!0,autoPopup:!1,overridePopupLimit:!1,appAlwaysAvailable:!0}},EHR:{resourcePermissions:{encounter:{billingInformation:{read:!1,write:!1}},orders:{identifiers:{read:!0},basicInformation:{read:!0},assessments:{read:!1},procedureCodes:{read:!1},medications:{read:!0}}}},session:{permissions:{user:{identifiers:{read:!0},contactInfo:{read:!0}},ehr:{identifiers:{read:!0}}}}}},submission:{appStoreListing:{legal:{baaMetadata:{baaLinkType:"private",baaLinkExplanation:"We agreed with Vim that there would be no utilization of a BAA for our app since there is no ingestion or usage of PHI, therefore there is no BAA to share."},privacyLink:"https://www.goodrx.com/about/privacy-policy",termsOfServiceLink:"https://support.goodrx.com/hc/en-us/articles/4410982193051-HCP-Provider-Terms-of-Service"},images:["https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/a555121d-7571-4aaa-9f0e-cfece512b245.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/b2796416-1cd5-4847-b3d2-bfcc1395261b.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/b7cdd910-e215-4e16-8386-a5280f57a7a3.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/b5bd6bcf-0b10-407e-83e8-cfc7ffc30908.png"],resources:{developerWebsite:"https://www.goodrx.com",contactEmailSupport:"support@getvim.com",networkRequestEmail:"sseidenfeld@goodrx.com"},categories:["Clinical Decision Support","Medication","Patient Engagement"],description:`Make it easier for patients to afford their medications right from your EHR. The GoodRx plugin brings prescription savings into your workflow, so you can quickly compare brand and generic drug prices, get access to exclusive brand savings, and send coupons to patients in just a few clicks.

To date, GoodRx has helped millions save over $85 billion on prescriptions at over 70,000 pharmacies nationwide. It’s helpful for patients who are uninsured, underinsured, or facing high out-of-pocket costs. 

By giving you visibility at the point of prescribing, the GoodRx plugin supports more informed decisions and helps reduce cost-related non-adherence. It’s a simple, low-effort way to make affordability part of everyday care.

Key features:

💊 Seamless integration - View prescription coupons and special offers directly in your EHR, with no need to visit the GoodRx website.
📲 Smart alerts - Receive notifications for top coupons so you can discover savings with minimal effort.
💵 Automatic price comparisons - Easily compare prescription prices across pharmacies in your area to find the lowest price.
💬 Secure sharing - Send coupons directly to patients via text or email without sharing your contact information.

Ideal for:
Any healthcare professional who is advising patients on their prescriptions and wants to help them find the best savings at the pharmacy.

🚀 Get started by clicking “Add now” above!`,shortDescription:"Bring prescription savings into your EHR, making it easy to find and share GoodRx coupons with patients."},securityAndCompliance:{privacy:{enforcesLeastPrivilegeAccess:!0},security:{auditsUserActivity:!0,enforcesAccessControls:!0,testsVulnerabilitiesInCICD:!0,followsSecureCodingPractices:!0,conductsRegularPenetrationTests:!0,prioritizesAndRemediatesVulnerabilities:!0},compliance:{holdsSecurityStandardCertifications:!0},dataProtection:{hasBCPAndDisasterRecovery:!0,encryptsDataInTransitAndAtRest:!0}}}}},C={id:"524cfff1-7a7d-41f4-96a4-61209dda17d3",displayName:"Clinical Notes",iconUrl:"https://static.getvim.com/prod/vim-os-appstore/apps/icons/3af5392d-585c-49e2-a85f-c557b8bf6a72.svg",status:"released",createdAt:"2025-03-31T13:58:55.742Z",createdBy:"Playback",createdByAccountId:2500,address:"28-07 Jackson Avenue Studio at The JACX, 5th floor Long Island City, NY 11101",phoneNumber:null,listingInfo:{liveVersion:{createdAt:"2025-04-15T07:13:31.839Z",status:"released",manifest:{metadata:{name:"Clinical Notes",url:""},UI:{iconUrl:"https://static.getvim.com/prod/vim-os-appstore/apps/icons/3af5392d-585c-49e2-a85f-c557b8bf6a72.svg",capabilities:{showPatientHeader:!0,counterNotificationLabel:!0,popupNotification:!1,autoPopup:!1,overridePopupLimit:!1,appAlwaysAvailable:!0}},EHR:{resourcePermissions:{patient:{identifiers:{read:!0},demographics:{read:!0},address:{read:!1},contactInformation:{read:!1},insuranceInfo:{read:!1},problemList:{read:!1},pcp:{read:!1}},encounter:{identifiers:{read:!0},basicInformation:{read:!0},subjective:{read:!0,write:!0},objective:{read:!0,write:!0},assessment:{read:!0,write:!0},plan:{read:!0,write:!0},patientInstructions:{write:!0},provider:{read:!0},billingInformation:{read:!1,write:!1}}}},session:{permissions:{user:{identifiers:{read:!0},demographics:{read:!0},contactInfo:{read:!0}},organization:{identifiers:{read:!0}},ehr:{identifiers:{read:!0}}}}}},submission:{appStoreListing:{legal:{baaLink:"https://app-user-data-pbh-prod.s3.us-east-1.amazonaws.com/Playback_Health_BAA.2025.pdf",privacyLink:"https://www.playbackhealth.com/privacy-policy",termsOfServiceLink:"https://app-user-data-pbh-dev.s3.amazonaws.com/Terms+%26+Conditions+playback.pdf"},images:["https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/6f5bde00-d56b-4496-a344-0de6b8e07bcd.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/66e0de5e-123f-4bf5-b89f-a76f37386a1d.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/9dbe758f-e36f-48c4-aed2-497cb95a6a45.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/435ffad0-6ae0-4801-8507-120420f14121.png"],buttons:{primary:{url:"https://www.playbackhealth.com",text:"Learn more"}},resources:{developerWebsite:"https://www.playbackhealth.com",contactEmailSupport:"support@playbackhealth.com",networkRequestEmail:"sales@playbackhealth.com"},categories:["AI","Scribe & transcription"],description:`Clinical Notes by Playback Health is the top-rated AI-powered ambient scribe built specifically for clinicians. Designed to simplify documentation and reclaim valuable time, Clinical Notes listens passively during patient encounters, generates high-accuracy notes, and integrates seamlessly with your EMR.
Our platform is HIPAA and SOC 2 compliant, ensuring the highest level of data security while enabling lightning-fast editing, real-time collaboration, and automated patient journey workflows. Try it free and experience the future of clinical documentation.`,shortDescription:"AI scribe for clinicians — chart faster, reduce burnout, and boost patient care."},securityAndCompliance:{privacy:{enforcesLeastPrivilegeAccess:!0,followsHIPAADataRetentionPolicies:!0},security:{auditsUserActivity:!0,enforcesAccessControls:!0,testsVulnerabilitiesInCICD:!0,followsSecureCodingPractices:!0,conductsRegularPenetrationTests:!0,prioritizesAndRemediatesVulnerabilities:!0},compliance:{compliesWithHIPAA:!0,compliesWithHITECH:!0,holdsSecurityStandardCertifications:!1},dataProtection:{hasBCPAndDisasterRecovery:!0,appliesHIPAADeidentification:!0,encryptsDataInTransitAndAtRest:!0}}}}},I={id:"eligibility",displayName:"Eligibility",iconUrl:"https://static.getvim.com/prod/vim-os-appstore/apps/icons/eligibility-icon.svg",status:"released",createdAt:"2020-09-01T00:00:00.000Z",createdBy:"Vim, Inc.",createdByAccountId:1771,address:"575 5th Avenue, New York",phoneNumber:"18438435491",listingInfo:{liveVersion:{createdAt:"2025-05-15T06:24:28.729Z",status:"released",manifest:{metadata:{name:"Eligibility",url:"https://eligibility.getvim.com?vim-os=true"},UI:{iconUrl:"https://static.getvim.com/prod/vim-os-appstore/apps/icons/eligibility-icon.svg",capabilities:{showPatientHeader:!0,counterNotificationLabel:!1,popupNotification:!1,autoPopup:!1,overridePopupLimit:!1,appAlwaysAvailable:!1}},EHR:{resourcePermissions:{patient:{identifiers:{read:!0},demographics:{read:!0},address:{read:!0},contactInformation:{read:!0},insuranceInfo:{read:!0},problemList:{read:!0},pcp:{read:!0}},encounter:{billingInformation:{read:!1,write:!1}},referral:{},orders:{}}},session:{permissions:{user:{identifiers:{read:!0},demographics:{read:!0},contactInfo:{read:!0}},organization:{identifiers:{read:!0}},ehr:{identifiers:{read:!0}}}}}},submission:{appStoreListing:{legal:{baaLink:"https://getvim.com/legal/provider-business-associate-agreement/",privacyLink:"https://getvim.com/documents/privacy/",termsOfServiceLink:"https://getvim.com/documents/vim-applications-description/#eligibility-application"},images:["https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/734c32e7-f329-4ba2-a687-1c584c9ab74b.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/56459e0e-0238-4d00-a490-de179b12d01e.png","https://static.getvim.com/prod/vim-os-appstore/apps/app-store-images/782fd6db-a25b-4e26-9acd-6c30dab36881.png"],buttons:{primary:{url:"https://getvim.com/solution/enhanced-eligibility/",text:"Learn more"},secondary:{url:"https://9056483.fs1.hubspotusercontent-na1.net/hubfs/9056483/Enablement/Generic%20%7C%20Eligibility%20Technical%20Walkthrough.pdf",text:"Walktrough"}},isCoreApp:!0,resources:{developerWebsite:"https://getvim.com",contactEmailSupport:"support@getvim.com",networkRequestEmail:"Network-Success@getvim.com"},categories:["Clinical Decision Support","Health Benefits","Interoperability"],description:`Take the mystery and the hassle out of coverage.
Save time and skip the tedious manual processes of checking portals or making calls to confirm benefits. Patient-specific plan details are at the team’s fingertips when most relevant - at the point of care.

Provide a better patient experience by ensuring patient care plans are aligned with resources available to them. Patients and care teams feel confident in the next steps.

The Eligibility solution puts important patient-specific benefits information – from plan coverage dates to out-of-pocket costs – at a provider’s fingertips within existing EHR workflows.

With Eligibility, provider care teams can treat the patient with confidence knowing what care options and resources are available for their patients from a single view.`,shortDescription:"Gain enhanced visibility into cost sharing, formularies, centers of excellence, and more without leaving the EHR"},securityAndCompliance:{privacy:{enforcesLeastPrivilegeAccess:!0,followsHIPAADataRetentionPolicies:!0},security:{auditsUserActivity:!0,enforcesAccessControls:!0,testsVulnerabilitiesInCICD:!0,followsSecureCodingPractices:!0,conductsRegularPenetrationTests:!0,prioritizesAndRemediatesVulnerabilities:!0},compliance:{compliesWithHIPAA:!0,compliesWithHITECH:!0,holdsSecurityStandardCertifications:!0},dataProtection:{hasBCPAndDisasterRecovery:!0,appliesHIPAADeidentification:!0,encryptsDataInTransitAndAtRest:!0}}}}},Zi={title:"Organisms/ApplicationReviewCard",component:T,parameters:{layout:"fullscreen",docs:{story:{inline:!1}}}},z=a.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`,$=a.div`
  width: 630px;
  height: 430px;
  margin: 0 auto;
`,R={id:"order-assist",displayName:"Order Assist",iconUrl:"https://static.dev.getvim.com/dev/vim-os-appstore/apps/icons/real-sant-icon-new.svg",approved:!0,selectedDataSources:[],createdBy:"Vim, Inc Dev",createdAt:"2024-06-23T11:47:49.420Z",liveVersion:{createdAt:"2025-02-27T08:42:00.168Z",status:"released",manifest:{metadata:{name:"Order Assist",url:"https://order-assist.dev.devim.io/order-assist-app?vim-os=true"},UI:{iconUrl:"https://static.dev.getvim.com/dev/vim-os-appstore/apps/icons/real-sant-icon-new.svg",capabilities:{showPatientHeader:!0,counterNotificationLabel:!1,popupNotification:!0,autoPopup:!0,overridePopupLimit:!0,appAlwaysAvailable:!1}},EHR:{resourcePermissions:{patient:{identifiers:{read:!0},demographics:{read:!0},address:{read:!0},contactInformation:{read:!0},insuranceInfo:{read:!0},problemList:{read:!1},pcp:{read:!0}},encounter:{billingInformation:{read:!1,write:!1}},referral:{identifiers:{read:!0},basicInformation:{read:!0,write:!0},conditions:{read:!0,write:!1},procedureCodes:{read:!0,write:!1},referringProvider:{read:!0},targetProvider:{read:!0,write:!0}},orders:{identifiers:{read:!0},basicInformation:{read:!0},assessments:{read:!0},procedureCodes:{read:!0}}}},session:{permissions:{user:{identifiers:{read:!0},demographics:{read:!0},contactInfo:{read:!0}},organization:{identifiers:{read:!0}},ehr:{identifiers:{read:!0}}}}}},appStoreListing:{legal:{baaLink:"https://getvim.com/legal/provider-business-associate-agreement/",privacyLink:"https://getvim.com/legal/privacy/",termsOfServiceLink:"https://getvim.com/legal/provider-master-terms-of-service/"},images:["https://static.dev.getvim.com/dev/vim-os-appstore/apps/app-store-images/af38ffec-a663-46d1-933c-402706149483.png","https://static.dev.getvim.com/dev/vim-os-appstore/apps/app-store-images/0db76ed3-c3e6-470e-9c27-69ea8de1bc0f.png","https://static.dev.getvim.com/dev/vim-os-appstore/apps/app-store-images/6f70dc84-b6ea-4b58-aad8-33fe826880a5.png"],buttons:{primary:{url:"https://getvim.com/solution/order-assist/",text:"Learn more"},secondary:{url:"https://vimeo.com/916857369/3ebf2e3e59",text:"Overview video"}},isCoreApp:!0,resources:{developerWebsite:"https://getvim.com",contactEmailSupport:"support@getvim.com"},categories:["Interoperability"],description:`Referral destinations, from specialists and radiology to laboratory and ambulatory surgical centers, are a critical part of efforts to improve the quality and efficiency of care. Many existing referral selection processes are multi-step (portals, phone calls, websites, etc.) or based on static preferred provider lists. These processes are slow, inefficient, and can lead to poor patient experience.

Vim Order Assist connects payer-preferred specialist recommendations to care team workflows at the point of referral, matching patient and referral details to referral destination quality and cost performance data, and seamlessly writing selections back into EHR workflows.

Vim Order Assist is fast to connect to, easy to use and offers immediate impact:
1. Unlock powerful insights at the point of care and within existing EHR order workflows ensuring in-network, high-quality referral destinations are selected for exceptional patient experience and less burden on the care team.

2. Encourage continued care adherence with powerful search filters including referral destination performance levels (badges and indicators), proximity to the patient’s home address and patient’s spoken language.

3. Drive standardized behavior to support a consistent clinic experience and results while maintaining physician or care team choice in selecting the best referral for a patient’s specific needs.

4. Save time and effort with a streamlined and in-EHR workflow referral process that gives care teams access to the most up-to-date referral information and includes EHR write back (when available) upon referral destination selection.`,shortDescription:"Empower care teams to select high-performing, in-network referral destinations during an EHR - in real time"}},O=n(e=>{console.log("clicked - ",e)},"onButtonClicked"),N=n(()=>i.jsx(z,{children:i.jsx($,{children:i.jsx(T,{id:R.id,iconUrl:R.iconUrl,createdAt:R.createdAt,createdBy:R.createdBy,displayName:R.displayName,editable:!1,openPermissionsByDefault:!0,liveVersion:R.liveVersion,appStoreListing:R.appStoreListing,onButtonClicked:O})})}),"Default"),D=n(()=>i.jsx(z,{children:i.jsx($,{children:i.jsx(T,{id:j.id,iconUrl:j.iconUrl,createdAt:j.createdAt,createdBy:j.createdBy,displayName:j.displayName,editable:!1,openPermissionsByDefault:!0,liveVersion:j.listingInfo.liveVersion,appStoreListing:j.listingInfo.submission.appStoreListing,onButtonClicked:O})})}),"GoodRx"),W=n(()=>i.jsx(z,{children:i.jsx($,{children:i.jsx(T,{id:C.id,iconUrl:C.iconUrl,createdAt:C.createdAt,createdBy:C.createdBy,displayName:C.displayName,editable:!1,openPermissionsByDefault:!0,liveVersion:C.listingInfo.liveVersion,appStoreListing:C.listingInfo.submission.appStoreListing,onButtonClicked:O})})}),"ClinicalNotes"),V=n(()=>i.jsx(z,{children:i.jsx($,{children:i.jsx(T,{id:I.id,iconUrl:I.iconUrl,createdAt:I.createdAt,createdBy:I.createdBy,displayName:I.displayName,editable:!1,openPermissionsByDefault:!0,liveVersion:I.listingInfo.liveVersion,appStoreListing:I.listingInfo.submission.appStoreListing,onButtonClicked:O})})}),"Eligibility");var J,X,K;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`() => <PageWrapper>
    <CardWrapper>
      <ApplicationReviewCard id={mockAppResponse.id} iconUrl={mockAppResponse.iconUrl} createdAt={mockAppResponse.createdAt} createdBy={mockAppResponse.createdBy} displayName={mockAppResponse.displayName} editable={false} openPermissionsByDefault={true} liveVersion={mockAppResponse.liveVersion} appStoreListing={mockAppResponse.appStoreListing} onButtonClicked={onButtonClicked} />
    </CardWrapper>
  </PageWrapper>`,...(K=(X=N.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,ee,ie;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <PageWrapper>
    <CardWrapper>
      <ApplicationReviewCard id={goodRxMock.id} iconUrl={goodRxMock.iconUrl} createdAt={goodRxMock.createdAt} createdBy={goodRxMock.createdBy} displayName={goodRxMock.displayName} editable={false} openPermissionsByDefault={true} liveVersion={goodRxMock.listingInfo.liveVersion} appStoreListing={goodRxMock.listingInfo.submission.appStoreListing} onButtonClicked={onButtonClicked} />
    </CardWrapper>
  </PageWrapper>`,...(ie=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};var te,re,se;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`() => <PageWrapper>
    <CardWrapper>
      <ApplicationReviewCard id={clinicalNotesMock.id} iconUrl={clinicalNotesMock.iconUrl} createdAt={clinicalNotesMock.createdAt} createdBy={clinicalNotesMock.createdBy} displayName={clinicalNotesMock.displayName} editable={false} openPermissionsByDefault={true} liveVersion={clinicalNotesMock.listingInfo.liveVersion} appStoreListing={clinicalNotesMock.listingInfo.submission.appStoreListing} onButtonClicked={onButtonClicked} />
    </CardWrapper>
  </PageWrapper>`,...(se=(re=W.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,ne;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`() => <PageWrapper>
    <CardWrapper>
      <ApplicationReviewCard id={eligibilityMock.id} iconUrl={eligibilityMock.iconUrl} createdAt={eligibilityMock.createdAt} createdBy={eligibilityMock.createdBy} displayName={eligibilityMock.displayName} editable={false} openPermissionsByDefault={true} liveVersion={eligibilityMock.listingInfo.liveVersion} appStoreListing={eligibilityMock.listingInfo.submission.appStoreListing} onButtonClicked={onButtonClicked} />
    </CardWrapper>
  </PageWrapper>`,...(ne=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Fi=["Default","GoodRx","ClinicalNotes","Eligibility"];export{W as ClinicalNotes,N as Default,V as Eligibility,D as GoodRx,Fi as __namedExportsOrder,Zi as default};
//# sourceMappingURL=ApplicationReviewCard.stories-c4ab9ecb.js.map
