"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[9365],{4945:(e,s,r)=>{r.d(s,{G0:()=>a,LY:()=>c,V3:()=>l,YD:()=>o,dt:()=>t});const t=[{title:"jvtools",description:"js\u5e38\u7528\u5de5\u5177\u5305",website:"docs/docs/jvtools/\u7b80\u4ecb",tags:["opensource","personal"],type:"tool"},{title:"mock-tool",description:"mock\u6570\u636e\u5de5\u5177",website:"https://lao-jiawei.github.io/mock-tool/",tags:["opensource","personal"],type:"tool"}],a={tool:"\u5de5\u5177",web:"\u7f51\u7ad9",app:"\u5e94\u7528",commerce:"\u5546\u4e1a\u9879\u76ee",personal:"\u4e2a\u4eba",other:"\u5176\u4ed6"},o={favorite:{label:"\u559c\u7231",description:"\u6211\u6700\u559c\u6b22\u7684\u7f51\u7ad9\uff0c\u4e00\u5b9a\u8981\u53bb\u770b\u770b!",color:"#e9669e"},opensource:{label:"\u5f00\u6e90",description:"\u5f00\u6e90\u9879\u76ee\u53ef\u4ee5\u63d0\u4f9b\u7075\u611f!",color:"#39ca30"},product:{label:"\u4ea7\u54c1",description:"\u4e0e\u4ea7\u54c1\u76f8\u5173\u7684\u9879\u76ee!",color:"#dfd545"},design:{label:"\u8bbe\u8ba1",description:"\u8bbe\u8ba1\u6f02\u4eae\u7684\u7f51\u7ad9!",color:"#a44fb7"},large:{label:"\u5927\u578b",description:"\u5927\u578b\u9879\u76ee\uff0c\u539f\u591a\u4e8e\u5e73\u5747\u6570\u7684\u9875\u9762",color:"#8c2f00"},personal:{label:"\u4e2a\u4eba",description:"\u4e2a\u4eba\u9879\u76ee",color:"#12affa"}},c=Object.keys(o),l=t.reduce(((e,s)=>{const{type:r}=s;return e[r]=e[r]??[],e[r].push(s),e}),{})},8663:(e,s,r)=>{r.d(s,{A:()=>i});var t=r(6540),a=r(961),o=r(991);const c="tooltip_vwsi",l="tooltipArrow_JUcJ";var n=r(4848);const i=e=>{let{children:s,id:r,anchorEl:i,text:d,delay:m}=e;const[h,p]=(0,t.useState)(!1),[u,x]=(0,t.useState)(null),[j,g]=(0,t.useState)(null),[v,w]=(0,t.useState)(null),[b,_]=(0,t.useState)(null),{styles:f,attributes:C}=(0,o.E)(u,j,{modifiers:[{name:"arrow",options:{element:v}},{name:"offset",options:{offset:[0,8]}}]}),N=(0,t.useRef)(null),y=`${r}_tooltip`;return(0,t.useEffect)((()=>{_(i?"string"==typeof i?document.querySelector(i):i:document.body)}),[b,i]),(0,t.useEffect)((()=>{const e=["mouseenter","focus"],s=["mouseleave","blur"],r=()=>{""!==d&&(u?.removeAttribute("title"),N.current=window.setTimeout((()=>{p(!0)}),m||300))},t=()=>{clearInterval(N.current),p(!1)};return u&&(e.forEach((e=>{u.addEventListener(e,r)})),s.forEach((e=>{u.addEventListener(e,t)}))),()=>{u&&(e.forEach((e=>{u.removeEventListener(e,r)})),s.forEach((e=>{u.removeEventListener(e,t)})))}}),[u,d,m]),(0,n.jsxs)(n.Fragment,{children:[t.cloneElement(s,{ref:x,"aria-describedby":h?y:void 0}),b?a.createPortal(h&&(0,n.jsxs)("div",{id:y,role:"tooltip",ref:g,className:c,style:f.popper,...C.popper,children:[d,(0,n.jsx)("span",{ref:w,className:l,style:f.arrow})]}),b):b]})}},5361:(e,s,r)=>{r.r(s),r.d(s,{default:()=>y,prepareUserState:()=>f});var t=r(8193),a=r(4945),o=r(4618),c=r(4164),l=r(8774),n=r(8663);const i={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};var d=r(4848);const m=e=>{const{svgClass:s,colorAttr:r,children:t,color:a="inherit",size:o="medium",viewBox:l="0 0 24 24",...n}=e;return(0,d.jsx)("svg",{viewBox:l,color:r,"aria-hidden":!0,className:(0,c.A)(i.svgIcon,i[a],i[o],s),...n,children:t})},h=e=>(0,d.jsx)(m,{...e,children:(0,d.jsx)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})});var p=r(6540);const u={showcaseCard:"showcaseCard_MkqL",showcaseCardImage:"showcaseCardImage_WoVb",showcaseCardHeader:"showcaseCardHeader_Mceh",showcaseCardTitle:"showcaseCardTitle_J7aP",svgIconFavorite:"svgIconFavorite_Xc7Y",showcaseCardSrcBtn:"showcaseCardSrcBtn_nptx",showcaseCardBody:"showcaseCardBody_R1Nj",cardFooter:"cardFooter_ODAT",tag:"tag_P8ik",textLabel:"textLabel_MjoO",colorLabel:"colorLabel_gM4S"},x=p.forwardRef(((e,s)=>{let{label:r,color:t,description:a}=e;return(0,d.jsxs)("li",{ref:s,className:u.tag,title:a,children:[(0,d.jsx)("span",{className:u.textLabel,children:r.toLowerCase()}),(0,d.jsx)("span",{className:u.colorLabel,style:{backgroundColor:t}})]})})),j=e=>{let{tags:s}=e;const r=function(e,s){const r=[...e];return r.sort(((e,r)=>s(e)>s(r)?1:s(r)>s(e)?-1:0)),r}(s.map((e=>({tag:e,...a.YD[e]}))),(e=>a.LY.includes(e.tag)));return(0,d.jsx)(d.Fragment,{children:r.map(((e,s)=>{const r=`showcase_card_tag_${e.tag}`;return(0,d.jsx)(n.A,{text:e.description,anchorEl:"#__docusaurus",id:r,children:(0,d.jsx)(x,{...e},s)},s)}))})},g=(0,p.memo)((e=>{let{project:s}=e;return(0,d.jsxs)("div",{className:(0,c.A)("card",u.showcaseCard),children:[s.preview&&(0,d.jsx)("div",{className:(0,c.A)("card__image",u.showcaseCardImage),children:(0,d.jsx)(Image,{src:s.preview,alt:s.title,img:s.preview})}),(0,d.jsxs)("div",{className:"card__body",children:[(0,d.jsxs)("div",{className:(0,c.A)(u.showcaseCardHeader),children:[(0,d.jsx)("h4",{className:u.showcaseCardTitle,children:(0,d.jsx)(l.A,{href:s.website,className:u.showcaseCardLink,children:s.title})}),s.tags.includes("favorite")&&(0,d.jsx)(h,{svgClass:u.svgIconFavorite,size:"small"}),s.source&&(0,d.jsx)(l.A,{href:s.source,className:(0,c.A)("button button--secondary button--sm",u.showcaseCardSrcBtn),children:"\u6e90\u7801"})]}),(0,d.jsx)("p",{className:u.showcaseCardBody,children:s.description})]}),(0,d.jsx)("ul",{className:(0,c.A)("card__footer",u.cardFooter),children:(0,d.jsx)(j,{tags:s.tags})})]},s.title)})),v=g,w="showcaseList_mWrw",b="showcaseFavoriteHeader_A4FS",_="\u5b66\u800c\u65e0\u7528\uff0c\u4e0d\u5982\u5b66\u800c\u7528\u4e4b\u3002\u8fd9\u91cc\u662f\u6211\u5728\u6280\u672f\u9886\u57df\u4e2d\u52aa\u529b\u5b9e\u8df5\u548c\u5e94\u7528\u7684\u6700\u4f73\u8bc1\u660e\u3002";function f(){if(t.A.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}const C=()=>(0,d.jsxs)("section",{className:"text--center",children:[(0,d.jsx)("h2",{children:"\u9879\u76ee"}),(0,d.jsx)("p",{children:_})]}),N=()=>0===a.dt.length?(0,d.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,d.jsx)("div",{className:"container padding-vert--md text--center",children:(0,d.jsx)("h2",{children:"No result"})})}):(0,d.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"container margin-top--lg",children:[(0,d.jsx)("div",{className:(0,c.A)("margin-bottom--md",b)}),Object.entries(a.V3).map((e=>{let[s,r]=e;return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:(0,c.A)("margin-bottom--md",b),children:(0,d.jsx)("h3",{children:a.G0[s]})}),(0,d.jsx)("ul",{className:w,children:r.map((e=>(0,d.jsx)(v,{project:e},e.title)))})]},s)}))]})})}),y=()=>(0,d.jsx)(o.A,{title:"\u9879\u76ee",description:_,maxWidth:1280,children:(0,d.jsxs)("main",{className:"margin-vert--lg",children:[(0,d.jsx)(C,{}),(0,d.jsx)(N,{})]})})},4618:(e,s,r)=>{r.d(s,{A:()=>n});var t=r(781),a=r(4164);const o="containerWrapper_I0cV",c="myContainer_pGZb";var l=r(4848);const n=e=>{let{children:s,maxWidth:r,...n}=e;return(0,l.jsx)(t.A,{...n,children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{className:(0,a.A)(c,"margin-vert--lg"),style:r?{maxWidth:`${r}px`}:{},children:(0,l.jsx)("main",{children:s})})})})}}}]);