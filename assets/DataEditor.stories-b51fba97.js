var Y=Object.defineProperty;var y=(i,s)=>Y(i,"name",{value:s,configurable:!0});import{j as e}from"./jsx-runtime-d01ea613.js";import{r as l}from"./index-49b6e5dd.js";import{C as A,H as q,d as J}from"./hubState.service-6f7c99c8.js";import{T as U}from"./index-bdd6f7c7.js";import{T as Z,t as z}from"./index-87124878.js";import{c as M}from"./index-2015e499.js";import{S as X}from"./index-ad91de9f.js";import{a as K}from"./PopoverState-334c5845.js";import{T}from"./index-4acc6b6d.js";import{P as ee}from"./index-558aa706.js";import{A as L}from"./index-18fb8b63.js";import{b as P}from"./index-09738329.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-57cd95bd.js";import"./hoist-non-react-statics.cjs-c6e191e6.js";import"./index-cc29b0a7.js";import"./react-is.production.min-bda70661.js";import"./objectSpread2-1ca07130.js";import"./defineProperty-860ceec2.js";import"./toPropertyKey-089baa31.js";import"./ApolloClient-2db2474d.js";import"./_baseEach-a6ed7d6f.js";import"./_baseIsEqual-e73bd1c6.js";import"./_getTag-d8b636ac.js";import"./isFunction-883d3e0e.js";import"./isObjectLike-b52999d3.js";import"./isArray-513c67aa.js";import"./isSymbol-db47e2ae.js";import"./toString-ec6962ee.js";import"./_baseSlice-0d4e3eff.js";import"./index-60a5c691.js";import"./tslib.es6-a1ba6d78.js";import"./iframe-3e222de6.js";import"../sb-preview/runtime.mjs";import"./featureFlagClient-9d150d2f.js";import"./team-fa5a652f.js";import"./manifest-84188551.js";import"./hub-position-6e557db6.js";import"./user-cbe9ed89.js";import"./index-edaa83ad.js";import"./dayjs.min-c5fb5fea.js";/* empty css              */import"./index-b8c4b0f8.js";import"./useIsEmbeddedPanelView-4c6a85d3.js";import"./index-9b2e3adf.js";/* empty css              */import"./index-96f0ff92.js";/* empty css              */import"./ErrorPopover-3dfa9d1e.js";import"./index-0896d98b.js";import"./mixpanel.module-3c798c40.js";import"./isEmpty-accbd652.js";import"./_arrayReduce-b962fc90.js";import"./isEqual-8c1284fe.js";import"./NewMenuItemBadge-5612dc67.js";import"./index-15a2afa8.js";import"./index-2870a228.js";import"./index-6d551a42.js";import"./index-74d4fca4.js";import"./_commonjs-dynamic-modules-fefbfc1c.js";import"./index-4ecbed21.js";import"./index-34661aba.js";import"./index-fc2a9edf.js";import"./index-1df6d64a.js";import"./index-5572c131.js";import"./index-392fd7ca.js";import"./index-7be811f5.js";import"./index-7c1bcbcb.js";import"./index-7c9c8064.js";import"./unitless.browser.esm-a7a88d20.js";import"./index-d0a12c16.js";import"./index-dbe0da0c.js";import"./dayjs.min-ce90ff23.js";import"./index-c93670fe.js";import"./index-05490658.js";import"./index-f97992de.js";import"./index-0302fa70.js";import"./styled-34e804a9.js";import"./extends-85901eb6.js";import"./clsx.m-26950cc3.js";import"./SwitchBase-35005098.js";import"./objectWithoutPropertiesLoose-c22daa29.js";import"./assertThisInitialized-9f2acf84.js";import"./inheritsLoose-54936dc8.js";import"./setPrototypeOf-ec9b6182.js";import"./v4-24b2c166.js";import"./DialogDisclosure-6fed7bc5.js";import"./index-9f5ebfed.js";import"./index-4243b293.js";import"./index-fb8076a8.js";import"./index-090660ec.js";const ie=y(({selectOptions:i,value:s,internalValue:c,onChange:n,id:r,isDisabled:C,inputDisabled:g,onBlur:f,required:v,showRequiredError:p})=>i?e.jsxs("select",{className:`input-field field-value ${p?"error":""}`,value:s??c,onChange:n,id:`${r}-input`,disabled:C||g,onBlur:f,children:[!v&&e.jsx("option",{value:"",children:"Select an option"}),i.map(b=>e.jsx("option",{value:b,children:b},b))]}):e.jsx("input",{type:"text",className:`input-field field-value ${p?"error":""}`,value:s??c,onChange:n,id:`${r}-input`,disabled:C||g,onBlur:f,placeholder:p?"Required field":""}),"InputFieldElement"),te=y(({label:i,itemLabel:s,value:c,defaultValue:n="",onChange:r,className:C,id:g,labelDescription:f,valueDescription:v,disabled:p=!1,inputDisabled:b=!1,onDisabledChange:m,onLabelChange:k,isItemLabelEditable:j=!1,required:a=!1,selectOptions:N})=>{const[h,I]=l.useState(n),[D,w]=l.useState(p),[S,t]=l.useState(s??i),[o,d]=l.useState(!1),x=K({placement:"top"});l.useEffect(()=>{w(p)},[p]);const B=l.useCallback(_=>{const E=_.target.value;I(E),d(a&&!E),r(_)},[r,a]),H=l.useCallback(_=>{t(_.target.value),k&&k(_.target.value)},[k]),O=l.useCallback(()=>{if(!p&&!a){const _=!D;w(_),m==null||m(_)}},[p,D,m,a]),W=l.useCallback(()=>{a&&!(c??h)&&d(!0)},[a,c,h]),Q=l.useCallback(()=>{I(n),d(a&&!n),r({target:{value:n}})},[n,r,a]);return e.jsxs("div",{className:M("data-input-field",i.toLowerCase().replace(/_/g,"-"),C,{disabled:D}),id:g,children:[e.jsxs("div",{className:"label-container",children:[e.jsxs("label",{htmlFor:`${g}-input`,children:[i,a&&e.jsx("span",{className:"required-indicator",children:"*"})]}),f&&e.jsx(T,{tooltipContent:f,placement:"top",width:"large",children:e.jsx("i",{className:"icon-help-c-2"})}),j&&e.jsxs("div",{style:{position:"relative"},children:[e.jsx(T,{tooltipContent:"Edit title",placement:"top",children:e.jsx("i",{className:"icon-pencil",onClick:x.toggle,style:{cursor:"pointer"}})}),e.jsx(ee,{popover:x,className:"label-edit-popover","aria-label":"Edit title",withArrow:!0,children:e.jsx("div",{className:"popover-content",children:e.jsx("input",{type:"text",className:"input-field",value:S,onChange:H,placeholder:"Title"})})})]})]}),e.jsxs("div",{className:"input-container",children:[e.jsx(ie,{selectOptions:N,value:c,internalValue:h,onChange:B,id:g,isDisabled:D,inputDisabled:b,onBlur:W,required:a,showRequiredError:o}),e.jsx(L,{buttonType:"link",className:"input-field-reset-button",onClick:Q,children:e.jsx("i",{className:"icon-refresh"})})]}),e.jsxs("div",{className:"switch-container",children:[e.jsx("div",{className:"switch-wrap",children:e.jsx(T,{tooltipContent:"Mandatory field",placement:"top",hideTooltip:!a,children:e.jsx("div",{children:e.jsx(X,{checked:!D,onChange:O,className:`toggle-disabled-switch ${a?"required":""}`,id:`${g}-switch`,disabled:p||a})})})}),v&&e.jsx(T,{tooltipContent:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Expected value:"}),e.jsx("br",{}),v]}),placement:"top",referenceClassName:"requirements-tooltip",width:"large",children:e.jsx("i",{className:"input-tooltip-icon icon-check-circle-2"})})]})]})},"DataInputField"),ae=y(({title:i,fields:s,onInputChange:c,onLabelChange:n,onAddCustomField:r,onAddGapCustomField:C})=>{const[g,f]=l.useState(!1),v=l.useRef(new Set(s.map(a=>a.id)));l.useEffect(()=>{const a=new Set(s.map(h=>h.id)),N=Array.from(a).find(h=>!v.current.has(h));N&&(f(!1),setTimeout(()=>{const h=document.getElementById(`${N}-input`);h instanceof HTMLInputElement&&(h.focus(),h.select())},100)),v.current=a},[s]);const p=l.useCallback(()=>{f(a=>!a)},[]),b=l.useCallback(a=>N=>{c(a,N.target.value)},[c]),m=l.useCallback(a=>N=>{n==null||n(a,N)},[n]),k=l.useCallback(a=>{a.stopPropagation(),r==null||r()},[r]),j=l.useCallback(a=>{a.stopPropagation(),C==null||C()},[C]);return e.jsxs("div",{className:M("inputs-group",{"is-collapsed":g}),children:[e.jsxs("div",{className:"input-group-title",onClick:p,style:{cursor:"pointer"},children:[e.jsx("h2",{children:i}),C&&e.jsxs(L,{buttonType:"tinyRounded",bgColor:"white",onClick:j,className:"add-custom-field-button",children:[e.jsx("i",{className:"icon-plus"}),"Add gap custom field"]}),r&&e.jsxs(L,{buttonType:"tinyRounded",bgColor:"white",onClick:k,className:"add-custom-field-button",children:[e.jsx("i",{className:"icon-plus"}),"Add patient custom field"]}),e.jsx("div",{className:"collapse-icon",children:g?e.jsx("i",{className:"icon-chevron-down"}):e.jsx("i",{className:"icon-chevron-up"})})]}),e.jsx("div",{className:"inputs-group-content",children:e.jsx("div",{className:"inputs-group-inner",children:s.map(a=>e.jsx(te,{label:a.label,value:a.value,defaultValue:a.defaultValue,onChange:b(a.id),onLabelChange:n?m(a.id):void 0,id:a.id,labelDescription:a.labelDescription||"",valueDescription:a.valueDescription||"",disabled:a.disabled,inputDisabled:a.inputDisabled,itemLabel:a.itemLabel,isItemLabelEditable:a.isItemLabelEditable,required:a.required,className:M(a.className,"data-input-field"),selectOptions:a.selectOptions},a.id))})})]})},"InputsGroup"),u={dob:"1/1/1980",patientFirstName:"John Doe",patientLastName:"Robinson",insightDescription:"Assesses adults 18–85 years of age who had a diagnosis of hypertension and whose blood pressure was adequately controlled (<140/90 mm Hg)",insightSource:"2024 claims",insightTitle:"Controlling High Blood Pressure",insightCode:"CBP",insightType:"HEDIS",insightCategory:"Quality",notes:"Additional notes",insightMedicalCode:"3074F",insightMedicalCodeDescription:"Systolic BP < 130 mm Hg",insightProviderNpi:"1479057944",insightProviderName:"Dr. John Smith",custom_field_1_value:"Custom value",custom_field_2_value:"Custom value",itemLabels:{custom_field_1_value:"Custom field",custom_field_2_value:"Custom field"},insightDate:"2025-02-04",lastRecordedNpiNameHcc:"Dr. Jane Smith",lastRecordedDosHcc:"2025-04-07"},se=y(i=>[{label:"patient_first_name",value:i.patientFirstName,defaultValue:u.patientFirstName,id:"patientFirstName",labelDescription:"The patient`s first name",valueDescription:"Letters only, up to 50 characters",required:!0},{label:"patient_last_name",value:i.patientLastName,defaultValue:u.patientLastName,id:"patientLastName",labelDescription:"The patient`s last name",valueDescription:"Letters only, up to 50 characters",required:!0},{label:"patient_dob",value:i.dob,defaultValue:u.dob,id:"dob",labelDescription:"The patient`s date of birth",valueDescription:"YYYY-MM-DD",required:!0}],"getPatientFields"),le=y(i=>[{label:"insight_title",value:i.insightTitle,defaultValue:u.insightTitle,id:"insightTitle",labelDescription:"The name of the insight as it will be displayed in the application",valueDescription:"Up to 250 characters"},{label:"insight_code",value:i.insightCode,defaultValue:u.insightCode,id:"insightCode",labelDescription:"The code of the insight, will be displayed in the application next to the title",valueDescription:"Insight code",required:!0},{label:"insight_category",value:i.insightCategory,defaultValue:u.insightCategory,id:"insightCategory",labelDescription:"The category of the insight",valueDescription:"Diagnosis Gap/Risk/Quality/Rx/Sdoh/Care Management/Utilization/Adt/Clinical Insights",required:!0,inputDisabled:!0,selectOptions:["Diagnosis Gaps","Risk","Quality","Rx","Sdoh","Care Management","Utilization","Adt","Clinical Insights"]},{label:"insight_description",value:i.insightDescription,defaultValue:u.insightDescription,id:"insightDescription",labelDescription:"General information about the insight",valueDescription:"Up to 250 characters",required:!1},{label:"insight_type",value:i.insightType,defaultValue:u.insightType,id:"insightType",labelDescription:"The type/program of the insights (HEDIS, ACO, STAR etc.)",valueDescription:"Insight type"},{label:"insight_medical_code",value:i.insightMedicalCode,defaultValue:u.insightMedicalCode,id:"insightMedicalCode",labelDescription:"The medical code of the insight",valueDescription:`CPT II: xxxxF
ICD-10: Xxx.xx`,required:!0},{label:"insight_medical_code_description",value:i.insightMedicalCodeDescription,defaultValue:u.insightMedicalCodeDescription,id:"insightMedicalCodeDescription",labelDescription:"The medical codes related to the insight (e.g. CPT/ ICD). Each medical code should have system, code, description. Diagnosis Gaps - only relevant for gap_system=HCC, additional information will be presented on the ICD level when shared.",valueDescription:"Up to 250 characters",required:!0}],"getGapFields"),ne=y(i=>[{label:"insight_provider_name",value:i.insightProviderName,defaultValue:u.insightProviderName,id:"insightProviderName",className:"insight-provider-name",labelDescription:"Rendering provider/facility name",valueDescription:"Letters only",required:!1},{label:"insight_provider_npi",value:i.insightProviderNpi,defaultValue:u.insightProviderNpi,id:"insightProviderNpi",className:"insight-provider-npi",labelDescription:"Rendering provider/facility NPI",valueDescription:"10 digits",required:!1},{label:"insight_date",value:i.insightDate,defaultValue:u.insightDate,id:"insightDate",labelDescription:"The date of the insight last rendering",valueDescription:"YYYY-MM-DD",required:!0},{label:"insight_source",value:i.insightSource,defaultValue:u.insightSource,id:"insightSource",labelDescription:"The source of the insight",valueDescription:"2024 claims",required:!1},{label:"notes",value:i.notes,defaultValue:u.notes,id:"notes",labelDescription:"Additional information related to the gap, presented in the application upon expation of gap card to see more details",valueDescription:"Up to 250 characters"},{label:"custom_field_gap_<field_name>",value:i.custom_field_1_value,defaultValue:u.custom_field_1_value,id:"custom_field_1_value",labelDescription:"Additional custom information on the insight. this field should contain the actual value to present. We will configure together the following: title, type, patient/gap level",valueDescription:"As confgured in the file configurations",itemLabel:i.itemLabels.custom_field_1_value,isItemLabelEditable:!0},{label:"custom_field_patient_<field_name>",value:i.custom_field_2_value,defaultValue:u.custom_field_2_value,id:"custom_field_2_value",labelDescription:"Additional custom information on the patient. this field should contain the actual value to present. We will configure together the following: title, type, patient/gap level",valueDescription:"As confgured in the file configurations",itemLabel:i.itemLabels.custom_field_2_value,isItemLabelEditable:!0},...Object.keys(i).filter(s=>{const c=s.match(/^custom_field_(\d+)_value$/);if(!c)return!1;const n=Number.parseInt(c[1],10);return n>=3&&n%2===1}).map(s=>{var r;const c=i[s]||"",n=((r=i.itemLabels)==null?void 0:r[s])||"Custom field";return{label:"custom_field_gap_<field_name>",value:c,defaultValue:"Custom value",id:s,labelDescription:"Additional custom information on the insight. this field should contain the actual value to present. We will configure together the following: title, type, patient/gap level",valueDescription:"As confgured in the file configurations",itemLabel:n,isItemLabelEditable:!0}}),...Object.keys(i).filter(s=>{const c=s.match(/^custom_field_(\d+)_value$/);if(!c)return!1;const n=Number.parseInt(c[1],10);return n>=4&&n%2===0}).map(s=>{var r;const c=i[s]||"",n=((r=i.itemLabels)==null?void 0:r[s])||"Custom field";return{label:"custom_field_patient_<field_name>",value:c,defaultValue:"Custom value",id:s,labelDescription:"Additional custom information on the patient. this field should contain the actual value to present. We will configure together the following: title, type, patient/gap level",valueDescription:"As confgured in the file configurations",itemLabel:n,isItemLabelEditable:!0}})],"getAdditionalFields"),V=y(()=>e.jsxs("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15.3684 11.7342C15.5253 11.6436 15.7206 11.6791 15.8364 11.8096L15.881 11.8712L18.1332 15.772L18.1809 15.8629C18.2852 16.0845 18.3361 16.3686 18.1662 16.6136C17.9962 16.8586 17.7124 16.9101 17.4682 16.8897L17.3664 16.8773H17.3657L15.4313 16.5499L14.7656 18.3912L14.7648 18.3919C14.6734 18.6431 14.4799 18.9273 14.1408 18.9588C13.8021 18.9902 13.5599 18.7471 13.4238 18.5172L11.2675 14.8865L11.2353 14.8177C11.1783 14.653 11.2429 14.4656 11.3986 14.3731C11.5544 14.2807 11.7501 14.3136 11.8674 14.4427L11.9121 14.5042L14.0632 18.126L14.8337 16.0006L14.8615 15.9405C14.9386 15.8072 15.0919 15.7325 15.2482 15.7589L17.4763 16.1346L15.2314 12.2462L15.1999 12.1766C15.145 12.0113 15.2118 11.8248 15.3684 11.7342Z",fill:"#0DB5C9"}),e.jsx("path",{d:"M2.81436 11.8097C2.93008 11.6791 3.12541 11.6436 3.28237 11.7342C3.46154 11.8379 3.52286 12.0669 3.41934 12.2462L1.17373 16.1346L3.40249 15.7589L3.46914 15.7538C3.62272 15.7554 3.76281 15.8513 3.81704 15.9998L4.59121 18.1261L6.73281 14.5042L6.77749 14.4435C6.89448 14.3141 7.09021 14.2803 7.24624 14.3724C7.42452 14.4778 7.48349 14.7083 7.37808 14.8866L4.83291 19.191C4.75911 19.3156 4.6204 19.3866 4.47622 19.3734C4.33182 19.36 4.20797 19.2643 4.15835 19.128L3.21865 16.5499L1.28506 16.8773C1.02242 16.9214 0.678851 16.8938 0.484523 16.6136C0.290457 16.3338 0.384775 16.0026 0.517482 15.7721L2.76968 11.8712L2.81436 11.8097Z",fill:"#0DB5C9"}),e.jsx("path",{d:"M14.9299 7.13477C14.8823 6.50884 14.4823 5.95913 13.8921 5.72485C13.7602 5.67253 13.6549 5.56878 13.6006 5.43774C13.5463 5.30675 13.5474 5.1593 13.6035 5.02905C13.8712 4.40701 13.7323 3.68419 13.2534 3.20532C12.8044 2.75649 12.1412 2.60672 11.5476 2.81055L11.4304 2.85596C11.3002 2.91202 11.1527 2.91313 11.0217 2.85889C10.8908 2.80463 10.787 2.69978 10.7346 2.56812C10.4843 1.93855 9.87548 1.52516 9.198 1.52515C8.5205 1.52515 7.9117 1.93853 7.66138 2.56812C7.60896 2.69979 7.5052 2.80462 7.37427 2.85889C7.27597 2.89961 7.1685 2.90889 7.06592 2.88745L6.96558 2.85596C6.34369 2.58825 5.62145 2.72671 5.14258 3.20532C4.66371 3.6842 4.52473 4.407 4.79248 5.02905C4.84855 5.15929 4.84969 5.30676 4.79541 5.43774C4.74114 5.5687 4.63635 5.67245 4.50464 5.72485C3.87543 5.97509 3.4624 6.58357 3.4624 7.26074C3.46243 7.93788 3.87545 8.5464 4.50464 8.79663C4.63633 8.84904 4.74115 8.95279 4.79541 9.08374C4.84965 9.2147 4.84854 9.36223 4.79248 9.49243C4.52479 10.1145 4.66374 10.8366 5.14258 11.3154C5.62144 11.7943 6.34357 11.9333 6.96558 11.6655L7.06592 11.6333C7.16847 11.6119 7.276 11.6219 7.37427 11.6626C7.50523 11.7169 7.60898 11.8216 7.66138 11.9534C7.9117 12.583 8.5205 12.9963 9.198 12.9963C9.87548 12.9963 10.4843 12.5829 10.7346 11.9534L10.783 11.8604C10.8403 11.7726 10.9234 11.7034 11.0217 11.6626C11.1527 11.6083 11.3002 11.6095 11.4304 11.6655C12.0524 11.9332 12.7746 11.7943 13.2534 11.3154C13.7322 10.8366 13.8712 10.1144 13.6035 9.49243C13.5475 9.36222 13.5463 9.21471 13.6006 9.08374C13.6549 8.95271 13.7602 8.84895 13.8921 8.79663C14.5215 8.54679 14.9351 7.93801 14.9351 7.26074L14.9299 7.13477ZM15.9773 7.46729C15.9117 8.32608 15.4384 9.09447 14.7183 9.54663C14.9222 10.4416 14.661 11.3931 13.9961 12.0581C13.3313 12.7229 12.38 12.9846 11.4854 12.781C10.9968 13.5582 10.1386 14.0466 9.198 14.0466C8.25708 14.0466 7.39839 13.558 6.90991 12.7803C6.01538 12.9836 5.06454 12.7227 4.3999 12.0581C3.73499 11.3932 3.47316 10.4415 3.677 9.54663C2.90034 9.05815 2.41213 8.20082 2.41211 7.26074C2.41211 6.32039 2.89997 5.46181 3.677 4.97339C3.47371 4.07888 3.73532 3.12799 4.3999 2.46338C5.06447 1.7988 6.01545 1.53651 6.90991 1.73975C7.39849 0.962613 8.25747 0.474854 9.198 0.474854C10.1384 0.474869 10.9967 0.962794 11.4854 1.73975C12.38 1.53625 13.3314 1.79865 13.9961 2.46338C14.6607 3.12803 14.9216 4.07886 14.7183 4.97339C15.4961 5.46147 15.9847 6.31986 15.9846 7.26074L15.9773 7.46729Z",fill:"#0DB5C9"}),e.jsx("path",{d:"M9.20642 3.36353C9.46408 3.36392 9.70278 3.48964 9.84948 3.69605L9.90661 3.7898L9.91394 3.80444L10.6178 5.32056H11.9427C12.2573 5.31348 12.5439 5.50167 12.662 5.79443C12.7795 6.08587 12.7041 6.41757 12.4752 6.63086L12.4759 6.63159L11.3004 7.78809L11.9508 9.28149L11.9537 9.28662L11.9918 9.40527C12.0591 9.68522 11.9678 9.98433 11.7465 10.1787C11.4945 10.3998 11.1305 10.4357 10.8397 10.2695V10.2703L9.20422 9.35107L7.56945 10.2703L7.56872 10.2695C7.278 10.4353 6.9145 10.3996 6.66272 10.1787C6.40974 9.95659 6.3261 9.59743 6.45544 9.28662L6.45837 9.28149L7.10803 7.78882L5.93176 6.63306L5.93322 6.63159C5.70322 6.41832 5.62622 6.08586 5.74426 5.7937C5.86276 5.50053 6.1508 5.31275 6.46569 5.32056H7.79138L8.4967 3.80371L8.50402 3.78833L8.56189 3.69531C8.70907 3.48886 8.94844 3.36325 9.20642 3.36353ZM9.20495 4.11353C9.19075 4.11362 9.17778 4.1212 9.17053 4.1333L8.37072 5.85376C8.3092 5.98586 8.17661 6.07048 8.03088 6.07056H6.46569C6.45969 6.07056 6.45338 6.07011 6.44738 6.06982C6.44413 6.06969 6.44128 6.07192 6.44006 6.07495L6.44226 6.08374L6.45764 6.09766L7.81774 7.43433C7.91472 7.52963 7.9513 7.66891 7.91735 7.79761L7.89831 7.85181L7.14831 9.5752L7.14611 9.59644C7.1477 9.60335 7.15157 9.60979 7.1571 9.61475C7.16838 9.62465 7.18511 9.6266 7.19812 9.61914L7.20178 9.61694L9.02111 8.59448L9.06506 8.57324C9.16954 8.53135 9.28839 8.53857 9.38806 8.59448L11.2074 9.61694L11.2111 9.61914L11.2323 9.62354C11.2394 9.62281 11.2465 9.61968 11.2521 9.61475C11.2632 9.60482 11.2666 9.589 11.2609 9.5752V9.57446L10.5109 7.85181C10.4489 7.70953 10.4809 7.54395 10.5914 7.43506L11.9501 6.09766L11.9647 6.08374L11.9669 6.07495L11.9596 6.06982C11.9542 6.07006 11.9482 6.07056 11.9427 6.07056H10.3776C10.2316 6.07046 10.0991 5.98541 10.0377 5.85303L9.23938 4.1333C9.23206 4.12128 9.21915 4.11354 9.20495 4.11353Z",fill:"#0DB5C9"})]}),"QualityIcon");V.displayName="QualityIcon";const oe=y(()=>{const i=new A({autoBindInjectable:!0,defaultScope:"Singleton",skipBaseClassChecks:!0});i.bind(A).toConstantValue(i);const s={isEmbeddedPanelMode:!1};return i.bind(q).toConstantValue(s),i},"createMockContainer"),re=oe(),Ji={title:"Pages/DataEditor",parameters:{viewport:"default"},argTypes:{}},de=y(()=>{const[i,s]=l.useState(u),[c,n]=l.useState("Diagnosis Gap"),r=l.useCallback((t,o)=>{s(d=>({...d,[t]:o}))},[]),C=l.useCallback((t,o)=>{s(d=>({...d,itemLabels:{...d.itemLabels,[t]:o}}))},[]),g=l.useCallback(()=>{s(t=>{let o=4;for(;t[`custom_field_${o}_value`]!==void 0;)o+=2;const d=`custom_field_${o}_value`;return{...t,[d]:"Custom value",itemLabels:{...t.itemLabels,[d]:"Custom field"}}})},[]),f=l.useCallback(()=>{s(t=>{let o=3;for(;t[`custom_field_${o}_value`]!==void 0;)o+=2;const d=`custom_field_${o}_value`;return{...t,[d]:"Custom value",itemLabels:{...t.itemLabels,[d]:"Custom field"}}})},[]),v=l.useCallback(t=>{n(t)},[]),p=l.useCallback(()=>{v("Care Gap")},[v]),b=l.useCallback(()=>{v("Diagnosis Gap")},[v]),m=l.useCallback(t=>{const d=`${t.replace(/-item$/,"")}-input`,x=document.getElementById(d);x&&(x.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{x.focus(),(x instanceof HTMLInputElement||x instanceof HTMLTextAreaElement)&&x.select()},100))},[]),k=l.useCallback(()=>{const t=JSON.parse(JSON.stringify(u));s(t)},[]),j=se(i),a=le(i),N=ne(i),h=Object.keys(i).filter(t=>{const o=t.match(/^custom_field_(\d+)_value$/);if(!o)return!1;const d=Number.parseInt(o[1],10);return d>=3&&d%2===1}).map(t=>({id:t,label:i.itemLabels[t]||"Custom field",value:i[t]||"",className:void 0,wrapperClassName:void 0,style:void 0,hasNestedClicks:void 0})),I=Object.keys(i).filter(t=>{const o=t.match(/^custom_field_(\d+)_value$/);if(!o)return!1;const d=Number.parseInt(o[1],10);return d>=4&&d%2===0}).map(t=>({id:t,label:i.itemLabels[t]||"Custom field",value:i[t]||"",className:void 0,wrapperClassName:void 0,style:void 0,hasNestedClicks:void 0})),D=[{id:"insightDescription",label:"Description",style:{gridColumn:"span 2"},value:i.insightDescription},{id:"insightType",label:"Type",value:i.insightType},{id:"insightDate",label:"Last recorded on",className:"insight-date margin-bottom",wrapperClassName:"margin-bottom",value:e.jsx("div",{id:"insightDate-value",children:i.insightDate})},{id:"insight-recorded-by",label:"Recorded by",className:"recoreded-by margin-bottom",value:e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"insightProviderName-item",className:"insight-provider-name",onClick:()=>m("insightProviderName"),style:{cursor:"pointer"},children:i.insightProviderName}),e.jsx("div",{id:"insightProviderNpi-item",className:"insight-provider-npi",onClick:()=>m("insightProviderNpi"),style:{cursor:"pointer"},children:i.insightProviderNpi})]}),hasNestedClicks:!0},{id:"insightSource",label:"Source",className:"insight-source margin-bottom",value:e.jsx("div",{id:"insightSource-value",children:i.insightSource})},{id:"custom_field_1_value",label:i.itemLabels.custom_field_1_value,value:i.custom_field_1_value},...h,{id:"notes",label:"Notes",value:i.notes,style:{gridColumn:"span 2"}}],w=[{title:"Patient details",fields:j},{title:"Insight details",fields:a},{title:"Additional info",fields:N,onLabelChange:C,onAddGapCustomField:f,onAddCustomField:g}],S=l.useCallback((t,o)=>e.jsx(ae,{title:t.title,fields:t.fields,onInputChange:r,onLabelChange:t.onLabelChange,onAddCustomField:t.onAddCustomField,onAddGapCustomField:t.onAddGapCustomField},o),[r]);return e.jsx(J.Provider,{container:re,children:e.jsx(Z,{theme:z.vimConnect,children:e.jsxs("div",{className:"data-editor-story",children:[e.jsxs("div",{className:"left-col",children:[e.jsx("div",{className:"data-editor-header",children:e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Data Integration Demo"}),e.jsxs("div",{className:"hidden",children:[e.jsx(L,{className:"insight",bgColor:"themedOutline",buttonType:"tinyRounded",onClick:p,children:"Insight"}),e.jsx(L,{className:"hcc-first-gap",bgColor:"themedOutline",buttonType:"tinyRounded",onClick:b,children:"Quality gap"}),e.jsx(L,{className:"icd-first-gap",bgColor:"themedOutline",buttonType:"tinyRounded",onClick:b,children:"Diagnosis gap?"})]}),e.jsxs(L,{buttonType:"small",onClick:k,children:[e.jsx("i",{className:"icon-refresh"}),"  Reset All"]})]})}),e.jsx("div",{className:"data-editor-content",children:w.map((t,o)=>S(t,o))})]}),e.jsxs("div",{className:"right-col",children:[e.jsxs("div",{className:"preview-title",children:[e.jsx("i",{className:"icon-search"}),"Preview"]}),e.jsxs("div",{className:"data-editor-preview-container",children:[e.jsxs("div",{className:"focus-hack-container",children:[e.jsxs("div",{onClick:()=>m("patientFirstName"),className:"patient-name-focus-hack",children:[i.patientFirstName," "]}),e.jsx("div",{onClick:()=>m("patientLastName"),className:"patient-name-focus-hack",children:i.patientLastName}),e.jsx("div",{onClick:()=>m("dob"),className:"patient-dob-focus-hack",children:i.dob})]}),e.jsxs(U,{icon:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:i.insightCategory==="Quality"?e.jsx(V,{}):e.jsx("i",{className:"icon-microscope2"})}),patientFirstName:i.patientFirstName,patientLastName:i.patientLastName,patientDateOfBirth:i.dob,patientCustomField:e.jsxs(e.Fragment,{children:[e.jsx("span",{id:"custom_field_2_value-item-wrapper",onClick:()=>m("custom_field_2_value"),style:{cursor:"pointer"},children:e.jsxs("span",{id:"custom_field_2_value-item",children:[e.jsxs("span",{className:"text-12 text-strong text-ultra-dark",children:[i.itemLabels.custom_field_2_value,": "]}),e.jsx("span",{className:"text-12 text-ultra-dark",children:i.custom_field_2_value})]})}),I.map(t=>e.jsx("span",{id:`${t.id}-item-wrapper`,onClick:()=>m(t.id),style:{cursor:"pointer",display:"block"},children:e.jsxs("span",{id:`${t.id}-item`,children:[e.jsxs("span",{className:"text-12 text-strong text-ultra-dark",children:[t.label,": "]}),e.jsx("span",{className:"text-12 text-ultra-dark",children:t.value})]})},t.id))]}),cardSubtitle:e.jsx("span",{id:"insightCategory-item",onClick:()=>m("insightCategory"),style:{cursor:"pointer"},children:i.insightCategory}),cardType:c,cardTitle:e.jsx("div",{className:"card-title-content",children:e.jsxs("span",{className:"inline-block margin-right-10",children:[e.jsx("span",{id:"insightTitle-item",onClick:()=>m("insightTitle"),style:{cursor:"pointer"},children:i.insightTitle}),e.jsxs("span",{id:"insightCode-item",onClick:()=>m("insightCode"),style:{cursor:"pointer"},children:[" ","(",i.insightCode,")"]})]})}),children:[e.jsx("div",{className:"card-list",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-12 text-strong text-ultra-dark",children:"CPT || Codes"}),i.insightMedicalCode&&e.jsx("ul",{className:"details-card-items-list",children:e.jsx("li",{children:e.jsx(P,{horizontal:!0,id:"insightMedicalCode-item-wrapper",label:e.jsx("span",{id:"insightMedicalCode-item",onClick:()=>m("insightMedicalCode"),style:{cursor:"pointer"},children:i.insightMedicalCode}),value:e.jsx("span",{id:"insightMedicalCodeDescription-item",onClick:()=>m("insightMedicalCodeDescription"),style:{cursor:"pointer"},children:i.insightMedicalCodeDescription})})})})]})}),e.jsx("div",{className:"card-items",children:D.map(t=>t.hasNestedClicks||t.id==="lastRecordedProviderHcc"?e.jsx("div",{className:t.wrapperClassName,style:t.style,id:`${t.id}-item-wrapper`,children:e.jsx(P,{id:t.id==="insight-recorded-by"?t.id:`${t.id}-item`,className:t.className,label:t.label,value:t.value})},t.id):e.jsx("div",{id:`${t.id}-item-wrapper`,className:t.wrapperClassName,onClick:()=>m(`${t.id}-item`),style:{cursor:"pointer",...t.style||{}},children:e.jsx(P,{id:`${t.id}-item`,className:t.className,label:t.label,value:t.value})},t.id))})]})]})]})]})})})},"Template"),F=de.bind({});var $,G,R;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [formData, setFormData] = useState(initialFormData);
  const [cardType, setCardType] = useState<string>('Diagnosis Gap');
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);
  const handleLabelChange = useCallback((field: string, newLabel: string) => {
    setFormData(prev => ({
      ...prev,
      itemLabels: {
        ...prev.itemLabels,
        [field]: newLabel
      }
    }));
  }, []);
  const handleAddCustomField = useCallback(() => {
    setFormData(prev => {
      // Find the next available patient-level custom field number (even numbers: 2, 4, 6, 8...)
      let fieldNumber = 4;
      while (prev[(\`custom_field_\${fieldNumber}_value\` as keyof typeof prev)] !== undefined) {
        fieldNumber += 2;
      }
      const newFieldId = \`custom_field_\${fieldNumber}_value\`;
      return {
        ...prev,
        [newFieldId]: 'Custom value',
        itemLabels: {
          ...prev.itemLabels,
          [newFieldId]: 'Custom field'
        }
      };
    });
  }, []);
  const handleAddGapCustomField = useCallback(() => {
    setFormData(prev => {
      // Find the next available gap-level custom field number (odd numbers: 1, 3, 5, 7...)
      let fieldNumber = 3;
      while (prev[(\`custom_field_\${fieldNumber}_value\` as keyof typeof prev)] !== undefined) {
        fieldNumber += 2;
      }
      const newFieldId = \`custom_field_\${fieldNumber}_value\`;
      return {
        ...prev,
        [newFieldId]: 'Custom value',
        itemLabels: {
          ...prev.itemLabels,
          [newFieldId]: 'Custom field'
        }
      };
    });
  }, []);
  const handleCardTypeChange = useCallback((type: string) => {
    setCardType(type);
  }, []);
  const handleCareGapClick = useCallback(() => {
    handleCardTypeChange('Care Gap');
  }, [handleCardTypeChange]);
  const handleDiagnosisGapClick = useCallback(() => {
    handleCardTypeChange('Diagnosis Gap');
  }, [handleCardTypeChange]);
  const handleCardItemClick = useCallback((fieldId: string) => {
    // Extract field id by removing '-item' suffix
    const actualFieldId = fieldId.replace(/-item$/, '');
    const inputId = \`\${actualFieldId}-input\`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      // Scroll to the input field
      inputElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      setTimeout(() => {
        inputElement.focus();
        if (inputElement instanceof HTMLInputElement || inputElement instanceof HTMLTextAreaElement) {
          inputElement.select();
        }
      }, 100);
    }
  }, []);
  const handleResetAllFields = useCallback(() => {
    const resetData = JSON.parse(JSON.stringify(initialFormData));
    setFormData(resetData);
  }, []);
  const patientFields = getPatientFields(formData);
  const gapFields = getGapFields(formData);
  const additionalFields = getAdditionalFields(formData);

  // Get all gap-level custom fields (odd numbers: 1, 3, 5, 7...)
  const gapCustomFields = Object.keys(formData).filter(key => {
    const match = key.match(/^custom_field_(\\d+)_value$/);
    if (!match) return false;
    const fieldNumber = Number.parseInt(match[1], 10);
    // Gap fields are odd numbers (1, 3, 5, 7...), but exclude 1 as it's already in cardItems
    return fieldNumber >= 3 && fieldNumber % 2 === 1;
  }).map(key => ({
    id: key,
    label: formData.itemLabels[key] || 'Custom field',
    value: (formData[key] as string) || '',
    className: undefined,
    wrapperClassName: undefined,
    style: undefined,
    hasNestedClicks: undefined
  }));

  // Get all patient-level custom fields (even numbers: 2, 4, 6, 8...)
  const patientCustomFields = Object.keys(formData).filter(key => {
    const match = key.match(/^custom_field_(\\d+)_value$/);
    if (!match) return false;
    const fieldNumber = Number.parseInt(match[1], 10);
    // Patient fields are even numbers (2, 4, 6, 8...), but exclude 2 as it's already handled
    return fieldNumber >= 4 && fieldNumber % 2 === 0;
  }).map(key => ({
    id: key,
    label: formData.itemLabels[key] || 'Custom field',
    value: (formData[key] as string) || '',
    className: undefined,
    wrapperClassName: undefined,
    style: undefined,
    hasNestedClicks: undefined
  }));
  const cardItems = [{
    id: 'insightDescription',
    label: 'Description',
    style: {
      gridColumn: 'span 2'
    },
    value: formData.insightDescription
  }, {
    id: 'insightType',
    label: 'Type',
    value: formData.insightType
  }, {
    id: 'insightDate',
    label: 'Last recorded on',
    className: 'insight-date margin-bottom',
    wrapperClassName: 'margin-bottom',
    value: <div id="insightDate-value">{formData.insightDate}</div>
  }, {
    id: 'insight-recorded-by',
    label: 'Recorded by',
    className: 'recoreded-by margin-bottom',
    value: <>
          <div id="insightProviderName-item" className="insight-provider-name" onClick={() => handleCardItemClick('insightProviderName')} style={{
        cursor: 'pointer'
      }}>
            {formData.insightProviderName}
          </div>
          <div id="insightProviderNpi-item" className="insight-provider-npi" onClick={() => handleCardItemClick('insightProviderNpi')} style={{
        cursor: 'pointer'
      }}>
            {formData.insightProviderNpi}
          </div>
        </>,
    hasNestedClicks: true
  }, {
    id: 'insightSource',
    label: 'Source',
    className: 'insight-source margin-bottom',
    value: <div id="insightSource-value">{formData.insightSource}</div>
  }, {
    id: 'custom_field_1_value',
    label: formData.itemLabels.custom_field_1_value,
    value: formData.custom_field_1_value
  },
  // Dynamically include all gap-level custom fields (odd numbers >= 3)
  ...gapCustomFields, {
    id: 'notes',
    label: 'Notes',
    value: formData.notes,
    style: {
      gridColumn: 'span 2'
    }
  }];
  const inputGroups = [{
    title: 'Patient details',
    fields: patientFields
  }, {
    title: 'Insight details',
    fields: gapFields
  }, {
    title: 'Additional info',
    fields: additionalFields,
    onLabelChange: handleLabelChange,
    onAddGapCustomField: handleAddGapCustomField,
    onAddCustomField: handleAddCustomField
  }];
  const renderInputGroup = useCallback((group: any, index: number) => <InputsGroup key={index} title={group.title} fields={group.fields} onInputChange={handleInputChange} onLabelChange={group.onLabelChange} onAddCustomField={group.onAddCustomField} onAddGapCustomField={group.onAddGapCustomField} />, [handleInputChange]);
  return <ContainerProvider container={mockContainer}>
      <ThemeVariablesWrapper theme={themes.vimConnect}>
        <div className="data-editor-story">
          {/* Left column */}
          <div className="left-col">
            <div className="data-editor-header">
              <div className="header-content">
                <h1>Data Integration Demo</h1>
                <div className="hidden">
                  <Button className="insight" bgColor="themedOutline" buttonType="tinyRounded" onClick={handleCareGapClick}>
                    Insight
                  </Button>
                  <Button className="hcc-first-gap" bgColor="themedOutline" buttonType="tinyRounded" onClick={handleDiagnosisGapClick}>
                    Quality gap
                  </Button>
                  <Button className="icd-first-gap" bgColor="themedOutline" buttonType="tinyRounded" onClick={handleDiagnosisGapClick}>
                    Diagnosis gap?
                  </Button>
                </div>
                <Button buttonType="small" onClick={handleResetAllFields}>
                  <i className="icon-refresh" />
                  &nbsp; Reset All
                </Button>
              </div>
            </div>

            <div className="data-editor-content">
              {inputGroups.map((group, index) => renderInputGroup(group, index))}
            </div>
          </div>
          {/* Right column */}
          <div className="right-col">
            <div className="preview-title">
              <i className="icon-search" />
              Preview
            </div>
            <div className="data-editor-preview-container">
              <div className="focus-hack-container">
                <div onClick={() => handleCardItemClick('patientFirstName')} className="patient-name-focus-hack">
                  {formData.patientFirstName}&nbsp;
                </div>
                <div onClick={() => handleCardItemClick('patientLastName')} className="patient-name-focus-hack">
                  {formData.patientLastName}
                </div>
                <div onClick={() => handleCardItemClick('dob')} className="patient-dob-focus-hack">
                  {formData.dob}
                </div>
              </div>
              <ThemeEditor icon={<div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                    {formData.insightCategory === 'Quality' ? <QualityIcon /> : <i className="icon-microscope2" />}
                  </div>} patientFirstName={formData.patientFirstName} patientLastName={formData.patientLastName} patientDateOfBirth={formData.dob} patientCustomField={<>
                    {/* Existing patient custom field */}
                    <span id="custom_field_2_value-item-wrapper" onClick={() => handleCardItemClick('custom_field_2_value')} style={{
                cursor: 'pointer'
              }}>
                      <span id="custom_field_2_value-item">
                        <span className="text-12 text-strong text-ultra-dark">
                          {formData.itemLabels.custom_field_2_value}:&nbsp;
                        </span>
                        <span className="text-12 text-ultra-dark">
                          {formData.custom_field_2_value}
                        </span>
                      </span>
                    </span>
                    {/* Dynamically added patient custom fields */}
                    {patientCustomFields.map(field => <span key={field.id} id={\`\${field.id}-item-wrapper\`} onClick={() => handleCardItemClick(field.id)} style={{
                cursor: 'pointer',
                display: 'block'
              }}>
                        <span id={\`\${field.id}-item\`}>
                          <span className="text-12 text-strong text-ultra-dark">
                            {field.label}:&nbsp;
                          </span>
                          <span className="text-12 text-ultra-dark">{field.value}</span>
                        </span>
                      </span>)}
                  </>} cardSubtitle={<span id="insightCategory-item" onClick={() => handleCardItemClick('insightCategory')} style={{
              cursor: 'pointer'
            }}>
                    {formData.insightCategory}
                  </span>} cardType={cardType} cardTitle={<div className="card-title-content">
                    <span className="inline-block margin-right-10">
                      <span id="insightTitle-item" onClick={() => handleCardItemClick('insightTitle')} style={{
                  cursor: 'pointer'
                }}>
                        {formData.insightTitle}
                      </span>
                      <span id="insightCode-item" onClick={() => handleCardItemClick('insightCode')} style={{
                  cursor: 'pointer'
                }}>
                        {' '}
                        &#40;{formData.insightCode}&#41;
                      </span>
                    </span>
                  </div>}>
                <div className="card-list">
                  <div>
                    <div className="text-12 text-strong text-ultra-dark">CPT || Codes</div>
                    {formData.insightMedicalCode && <ul className="details-card-items-list">
                        <li>
                          <WideDetailsCardItem horizontal id="insightMedicalCode-item-wrapper" label={<span id="insightMedicalCode-item" onClick={() => handleCardItemClick('insightMedicalCode')} style={{
                        cursor: 'pointer'
                      }}>
                                {formData.insightMedicalCode}
                              </span>} value={<span id="insightMedicalCodeDescription-item" onClick={() => handleCardItemClick('insightMedicalCodeDescription')} style={{
                        cursor: 'pointer'
                      }}>
                                {formData.insightMedicalCodeDescription}
                              </span>} />
                        </li>
                      </ul>}
                  </div>
                </div>
                <div className="card-items">
                  {cardItems.map(item => {
                  const hasNestedClicks = (item as any).hasNestedClicks || item.id === 'lastRecordedProviderHcc';
                  return hasNestedClicks ? <div key={item.id} className={(item as any).wrapperClassName} style={(item as any).style} id={\`\${item.id}-item-wrapper\`}>
                        <WideDetailsCardItem id={item.id === 'insight-recorded-by' ? item.id : \`\${item.id}-item\`} className={(item as any).className} label={item.label} value={item.value} />
                      </div> : <div key={item.id} id={\`\${item.id}-item-wrapper\`} className={(item as any).wrapperClassName} onClick={() => handleCardItemClick(\`\${item.id}-item\`)} style={{
                    cursor: 'pointer',
                    ...((item as any).style || {})
                  }}>
                        <WideDetailsCardItem id={\`\${item.id}-item\`} className={(item as any).className} label={item.label} value={item.value} />
                      </div>;
                })}
                </div>
              </ThemeEditor>
            </div>
          </div>
        </div>
      </ThemeVariablesWrapper>
    </ContainerProvider>;
}`,...(R=(G=F.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const Ui=["Default"];export{F as Default,Ui as __namedExportsOrder,Ji as default};
//# sourceMappingURL=DataEditor.stories-b51fba97.js.map
