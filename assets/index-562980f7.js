var f=Object.defineProperty;var o=(t,e)=>f(t,"name",{value:e,configurable:!0});import{R as r}from"./index-036a94f7.js";import"./_commonjsHelpers-c38d1a10.js";const i=r.createContext({});function s(t){return e;function e(u){const n=c(u.components);return r.createElement(t,{...u,allComponents:n})}}o(s,"withMDXComponents");function c(t){const e=r.useContext(i);return r.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}o(c,"useMDXComponents");const l={};function M({components:t,children:e,disableParentContext:u}){let n;return u?n=typeof t=="function"?t({}):t||l:n=c(t),r.createElement(i.Provider,{value:n},e)}o(M,"MDXProvider");export{i as MDXContext,M as MDXProvider,c as useMDXComponents,s as withMDXComponents};
//# sourceMappingURL=index-562980f7.js.map
