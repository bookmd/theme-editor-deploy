var j=Object.defineProperty;var f=(e,t)=>j(e,"name",{value:t,configurable:!0});import{s as d}from"./index-d475d2ea.js";var K="measureEnabled";const{useEffect:T}=__STORYBOOK_MODULE_PREVIEW_API__;function X(){let e=d.document.documentElement,t=Math.max(e.scrollHeight,e.offsetHeight);return{width:Math.max(e.scrollWidth,e.offsetWidth),height:t}}f(X,"getDocumentWidthAndHeight");function V(){let e=d.document.createElement("canvas");e.id="storybook-addon-measure";let t=e.getContext("2d"),{width:o,height:l}=X();return v(e,t,{width:o,height:l}),e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.zIndex="2147483647",e.style.pointerEvents="none",d.document.body.appendChild(e),{canvas:e,context:t,width:o,height:l}}f(V,"createCanvas");function v(e,t,{width:o,height:l}){e.style.width=`${o}px`,e.style.height=`${l}px`;let i=d.window.devicePixelRatio;e.width=Math.floor(o*i),e.height=Math.floor(l*i),t.scale(i,i)}f(v,"setCanvasWidthAndHeight");var u={};function Z(){u.canvas||(u=V())}f(Z,"init");function _(){u.context&&u.context.clearRect(0,0,u.width,u.height)}f(_,"clear");function U(e){_(),e(u.context)}f(U,"draw");function G(){v(u.canvas,u.context,{width:0,height:0});let{width:e,height:t}=X();v(u.canvas,u.context,{width:e,height:t}),u.width=e,u.height=t}f(G,"rescale");function J(){u.canvas&&(_(),u.canvas.parentNode.removeChild(u.canvas),u={})}f(J,"destroy");var b={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},w=6;function R(e,{x:t,y:o,w:l,h:i,r:n}){t=t-l/2,o=o-i/2,l<2*n&&(n=l/2),i<2*n&&(n=i/2),e.beginPath(),e.moveTo(t+n,o),e.arcTo(t+l,o,t+l,o+i,n),e.arcTo(t+l,o+i,t,o+i,n),e.arcTo(t,o+i,t,o,n),e.arcTo(t,o,t+l,o,n),e.closePath()}f(R,"roundedRect");function Q(e,{padding:t,border:o,width:l,height:i,top:n,left:a}){let r=l-o.left-o.right-t.left-t.right,s=i-t.top-t.bottom-o.top-o.bottom,h=a+o.left+t.left,m=n+o.top+t.top;return e==="top"?h+=r/2:e==="right"?(h+=r,m+=s/2):e==="bottom"?(h+=r/2,m+=s):e==="left"?m+=s/2:e==="center"&&(h+=r/2,m+=s/2),{x:h,y:m}}f(Q,"positionCoordinate");function x(e,t,{margin:o,border:l,padding:i},n,a){let r=f(g=>0,"shift"),s=0,h=0,m=a?1:.5,p=a?n*2:0;return e==="padding"?r=f(g=>i[g]*m+p,"shift"):e==="border"?r=f(g=>i[g]+l[g]*m+p,"shift"):e==="margin"&&(r=f(g=>i[g]+l[g]+o[g]*m+p,"shift")),t==="top"?h=-r("top"):t==="right"?s=r("right"):t==="bottom"?h=r("bottom"):t==="left"&&(s=-r("left")),{offsetX:s,offsetY:h}}f(x,"offset");function tt(e,t){return Math.abs(e.x-t.x)<Math.abs(e.w+t.w)/2&&Math.abs(e.y-t.y)<Math.abs(e.h+t.h)/2}f(tt,"collide");function et(e,t,o){return e==="top"?t.y=o.y-o.h-w:e==="right"?t.x=o.x+o.w/2+w+t.w/2:e==="bottom"?t.y=o.y+o.h+w:e==="left"&&(t.x=o.x-o.w/2-w-t.w/2),{x:t.x,y:t.y}}f(et,"overlapAdjustment");function C(e,t,{x:o,y:l,w:i,h:n},a){return R(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${b[t]}dd`,e.fill(),e.strokeStyle=b[t],e.stroke(),e.fillStyle=b.text,e.fillText(a,o,l),R(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${b[t]}dd`,e.fill(),e.strokeStyle=b[t],e.stroke(),e.fillStyle=b.text,e.fillText(a,o,l),{x:o,y:l,w:i,h:n}}f(C,"textWithRect");function O(e,t){e.font="600 12px monospace",e.textBaseline="middle",e.textAlign="center";let o=e.measureText(t),l=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,i=o.width+w*2,n=l+w*2;return{w:i,h:n}}f(O,"configureText");function ot(e,t,{type:o,position:l="center",text:i},n,a=!1){let{x:r,y:s}=Q(l,t),{offsetX:h,offsetY:m}=x(o,l,t,w+1,a);r+=h,s+=m;let{w:p,h:g}=O(e,i);if(n&&tt({x:r,y:s,w:p,h:g},n)){let S=et(l,{x:r,y:s,w:p,h:g},n);r=S.x,s=S.y}return C(e,o,{x:r,y:s,w:p,h:g},i)}f(ot,"drawLabel");function it(e,{w:t,h:o}){let l=t*.5+w,i=o*.5+w;return{offsetX:(e.x==="left"?-1:1)*l,offsetY:(e.y==="top"?-1:1)*i}}f(it,"floatingOffset");function lt(e,t,{type:o,text:l}){let{floatingAlignment:i,extremities:n}=t,a=n[i.x],r=n[i.y],{w:s,h}=O(e,l),{offsetX:m,offsetY:p}=it(i,{w:s,h});return a+=m,r+=p,C(e,o,{x:a,y:r,w:s,h},l)}f(lt,"drawFloatingLabel");function M(e,t,o,l){let i=[];o.forEach((n,a)=>{let r=l&&n.position==="center"?lt(e,t,n):ot(e,t,n,i[a-1],l);i[a]=r})}f(M,"drawStack");function nt(e,t,o,l){let i=o.reduce((n,a)=>(Object.prototype.hasOwnProperty.call(n,a.position)||(n[a.position]=[]),n[a.position].push(a),n),{});i.top&&M(e,t,i.top,l),i.right&&M(e,t,i.right,l),i.bottom&&M(e,t,i.bottom,l),i.left&&M(e,t,i.left,l),i.center&&M(e,t,i.center,l)}f(nt,"labelStacks");var P={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},B=30;function c(e){return parseInt(e.replace("px",""),10)}f(c,"pxToNumber");function y(e){return Number.isInteger(e)?e:e.toFixed(2)}f(y,"round");function L(e){return e.filter(t=>t.text!==0&&t.text!=="0")}f(L,"filterZeroValues");function ft(e){let t={top:d.window.scrollY,bottom:d.window.scrollY+d.window.innerHeight,left:d.window.scrollX,right:d.window.scrollX+d.window.innerWidth},o={top:Math.abs(t.top-e.top),bottom:Math.abs(t.bottom-e.bottom),left:Math.abs(t.left-e.left),right:Math.abs(t.right-e.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}f(ft,"floatingAlignment");function rt(e){let t=d.getComputedStyle(e),{top:o,left:l,right:i,bottom:n,width:a,height:r}=e.getBoundingClientRect(),{marginTop:s,marginBottom:h,marginLeft:m,marginRight:p,paddingTop:g,paddingBottom:S,paddingLeft:k,paddingRight:F,borderBottomWidth:I,borderTopWidth:$,borderLeftWidth:D,borderRightWidth:N}=t;o=o+d.window.scrollY,l=l+d.window.scrollX,n=n+d.window.scrollY,i=i+d.window.scrollX;let E={top:c(s),bottom:c(h),left:c(m),right:c(p)},q={top:c(g),bottom:c(S),left:c(k),right:c(F)},z={top:c($),bottom:c(I),left:c(D),right:c(N)},W={top:o-E.top,bottom:n+E.bottom,left:l-E.left,right:i+E.right};return{margin:E,padding:q,border:z,top:o,left:l,bottom:n,right:i,width:a,height:r,extremities:W,floatingAlignment:ft(W)}}f(rt,"measureElement");function at(e,{margin:t,width:o,height:l,top:i,left:n,bottom:a,right:r}){let s=l+t.bottom+t.top;e.fillStyle=P.margin,e.fillRect(n,i-t.top,o,t.top),e.fillRect(r,i-t.top,t.right,s),e.fillRect(n,a,o,t.bottom),e.fillRect(n-t.left,i-t.top,t.left,s);let h=[{type:"margin",text:y(t.top),position:"top"},{type:"margin",text:y(t.right),position:"right"},{type:"margin",text:y(t.bottom),position:"bottom"},{type:"margin",text:y(t.left),position:"left"}];return L(h)}f(at,"drawMargin");function st(e,{padding:t,border:o,width:l,height:i,top:n,left:a,bottom:r,right:s}){let h=l-o.left-o.right,m=i-t.top-t.bottom-o.top-o.bottom;e.fillStyle=P.padding,e.fillRect(a+o.left,n+o.top,h,t.top),e.fillRect(s-t.right-o.right,n+t.top+o.top,t.right,m),e.fillRect(a+o.left,r-t.bottom-o.bottom,h,t.bottom),e.fillRect(a+o.left,n+t.top+o.top,t.left,m);let p=[{type:"padding",text:t.top,position:"top"},{type:"padding",text:t.right,position:"right"},{type:"padding",text:t.bottom,position:"bottom"},{type:"padding",text:t.left,position:"left"}];return L(p)}f(st,"drawPadding");function ht(e,{border:t,width:o,height:l,top:i,left:n,bottom:a,right:r}){let s=l-t.top-t.bottom;e.fillStyle=P.border,e.fillRect(n,i,o,t.top),e.fillRect(n,a-t.bottom,o,t.bottom),e.fillRect(n,i+t.top,t.left,s),e.fillRect(r-t.right,i+t.top,t.right,s);let h=[{type:"border",text:t.top,position:"top"},{type:"border",text:t.right,position:"right"},{type:"border",text:t.bottom,position:"bottom"},{type:"border",text:t.left,position:"left"}];return L(h)}f(ht,"drawBorder");function mt(e,{padding:t,border:o,width:l,height:i,top:n,left:a}){let r=l-o.left-o.right-t.left-t.right,s=i-t.top-t.bottom-o.top-o.bottom;return e.fillStyle=P.content,e.fillRect(a+o.left+t.left,n+o.top+t.top,r,s),[{type:"content",position:"center",text:`${y(r)} x ${y(s)}`}]}f(mt,"drawContent");function ut(e){return t=>{if(e&&t){let o=rt(e),l=at(t,o),i=st(t,o),n=ht(t,o),a=mt(t,o),r=o.width<=B*3||o.height<=B;nt(t,o,[...a,...i,...n,...l],r)}}}f(ut,"drawBoxModel");function dt(e){U(ut(e))}f(dt,"drawSelectedElement");var gt=f((e,t)=>{let o=d.document.elementFromPoint(e,t),l=f(i=>{if(i&&i.shadowRoot){let n=i.shadowRoot.elementFromPoint(e,t);return i.isEqualNode(n)?i:n.shadowRoot?l(n):n}return i},"crawlShadows");return l(o)||o},"deepElementFromPoint"),H,A={x:0,y:0};function Y(e,t){H=gt(e,t),dt(H)}f(Y,"findAndDrawElement");var pt=f((e,t)=>{let{measureEnabled:o}=t.globals;return T(()=>{let l=f(i=>{window.requestAnimationFrame(()=>{i.stopPropagation(),A.x=i.clientX,A.y=i.clientY})},"onPointerMove");return document.addEventListener("pointermove",l),()=>{document.removeEventListener("pointermove",l)}},[]),T(()=>{let l=f(n=>{window.requestAnimationFrame(()=>{n.stopPropagation(),Y(n.clientX,n.clientY)})},"onPointerOver"),i=f(()=>{window.requestAnimationFrame(()=>{G()})},"onResize");return o&&(document.addEventListener("pointerover",l),Z(),window.addEventListener("resize",i),Y(A.x,A.y)),()=>{window.removeEventListener("resize",i),J()}},[o]),e()},"withMeasure"),bt=[pt],yt={[K]:!1};export{bt as decorators,yt as globals};
//# sourceMappingURL=preview-d16bead0.js.map