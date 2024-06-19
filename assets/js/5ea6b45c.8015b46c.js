"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[6790],{8663:(e,s,r)=>{r.d(s,{A:()=>d});var a=r(6540),c=r(961),o=r(991);const t="tooltip_vwsi",i="tooltipArrow_JUcJ";var l=r(4848);const d=e=>{let{children:s,id:r,anchorEl:d,text:n,delay:m}=e;const[g,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)(null),[p,j]=(0,a.useState)(null),[f,b]=(0,a.useState)(null),[x,N]=(0,a.useState)(null),{styles:y,attributes:_}=(0,o.E)(v,p,{modifiers:[{name:"arrow",options:{element:f}},{name:"offset",options:{offset:[0,8]}}]}),C=(0,a.useRef)(null),k=`${r}_tooltip`;return(0,a.useEffect)((()=>{N(d?"string"==typeof d?document.querySelector(d):d:document.body)}),[x,d]),(0,a.useEffect)((()=>{const e=["mouseenter","focus"],s=["mouseleave","blur"],r=()=>{""!==n&&(v?.removeAttribute("title"),C.current=window.setTimeout((()=>{u(!0)}),m||300))},a=()=>{clearInterval(C.current),u(!1)};return v&&(e.forEach((e=>{v.addEventListener(e,r)})),s.forEach((e=>{v.addEventListener(e,a)}))),()=>{v&&(e.forEach((e=>{v.removeEventListener(e,r)})),s.forEach((e=>{v.removeEventListener(e,a)})))}}),[v,n,m]),(0,l.jsxs)(l.Fragment,{children:[a.cloneElement(s,{ref:h,"aria-describedby":g?k:void 0}),x?c.createPortal(g&&(0,l.jsxs)("div",{id:k,role:"tooltip",ref:j,className:t,style:y.popper,..._.popper,children:[n,(0,l.jsx)("span",{ref:b,className:i,style:y.arrow})]}),x):x]})}},3642:(e,s,r)=>{r.r(s),r.d(s,{default:()=>f});var a=r(8774),c=r(1213),o=r(7559);const t=[{name:"\u524d\u7aef",resources:[{name:"JavaScript",desc:"",logo:"/img/resource/javascript.svg",href:"docs/category/javascript"},{name:"TypeScript",desc:"",logo:"/img/resource/typescript.png",href:"docs/category/typescript"},{name:"React",desc:"",logo:"https://react.dev/favicon.ico",href:"docs/category/react"},{name:"Vue",desc:"",logo:"https://vuejs.org/logo.svg",href:"docs/category/vue"},{name:"Html&Css",desc:"",logo:"https://vuejs.org/logo.svg",href:""},{name:"Webpack",desc:"",logo:"/img/resource/webpack.png",href:""},{name:"Vite",desc:"",logo:"/img/resource/vite.svg",href:""},{name:"\u524d\u7aef\u5de5\u7a0b\u5316",desc:"",logo:"/img/resource/vite.svg",href:""}]},{name:"\u540e\u7aef",resources:[{name:"Java",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"C",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"SpringBoot",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"node.js",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"mySQL",desc:"",logo:"/img/resource/javascript.svg",href:""}]},{name:"\u5f00\u53d1\u901a\u7528\u6280\u80fd",resources:[{name:"\u8ba1\u7b97\u673a\u7ec4\u6210\u539f\u7406",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"\u8ba1\u7b97\u673a\u7f51\u7edc",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"\u64cd\u4f5c\u7cfb\u7edf",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"Git",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"Vim",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"\u7f16\u8bd1\u5668",desc:"",logo:"/img/resource/javascript.svg",href:""},{name:"\u6b63\u5219\u8868\u8fbe\u5f0f",desc:"",logo:"/img/resource/javascript.svg",href:""}]}];var i=r(781),l=r(4164),d=r(8663),n=r(6540);const m={resourceCard:"resourceCard_ZuYt",resourceCardImage:"resourceCardImage_XiJz",resourceCardHeader:"resourceCardHeader_YrMG",resourceCardTitle:"resourceCardTitle_Hopv",resourceCardBody:"resourceCardBody_XYuv",resourceCardDesc:"resourceCardDesc_b2xw"};var g=r(4848);const u=e=>{let{resource:s}=e;return(0,g.jsxs)("li",{className:(0,l.A)(m.resourceCard,"padding-vert--sm padding-horiz--md"),children:[(0,g.jsx)("img",{src:"string"==typeof s.logo?s.logo:s.logo?.src?.src,alt:s.name,className:(0,l.A)(m.resourceCardImage)}),(0,g.jsxs)("div",{className:m.resourceCardBody,children:[(0,g.jsx)("div",{className:(0,l.A)(m.resourceCardHeader),children:(0,g.jsx)("h4",{className:m.resourceCardTitle,children:(0,g.jsx)(a.A,{href:s.href,className:m.resourceCardLink,children:s.name})})}),(0,g.jsx)(d.A,{text:s.desc,anchorEl:"#__docusaurus",id:`tooltip-${s.name}`,children:(0,g.jsx)("p",{className:m.resourceCardDesc,children:s.desc})},s.name)]})]},s.name)},v=(0,n.memo)(u),h={sidebar:"sidebar_Z7ck",sidebarItemTitle:"sidebarItemTitle_AS2n",sidebarItemList:"sidebarItemList_yfkM",sidebarItem:"sidebarItem_cNsk",sidebarItemLink:"sidebarItemLink_VzJ8",sidebarItemLinkActive:"sidebarItemLinkActive_hZAV",hero:"hero_Tt0i",heroTitle:"heroTitle_Do0a",heroDesc:"heroDesc_fNjb",cateHeader:"cateHeader_UPsd",cateBody:"cateBody_syaU",resourceList:"resourceList_mzQ2"},p=()=>{const e={title:"",items:t.map((e=>({title:e.name,permalink:`#${e.name}`})))};return(0,g.jsxs)("nav",{className:(0,l.A)(h.sidebar,"thin-scrollbar"),children:[(0,g.jsx)("div",{className:(0,l.A)(h.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,g.jsx)("ul",{className:(0,l.A)(h.sidebarItemList,"clean-list"),children:e.items.map((e=>(0,g.jsx)("li",{className:h.sidebarItem,children:(0,g.jsx)(a.A,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})},j=()=>(0,g.jsx)("div",{className:h.category,children:t.map((e=>(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:h.cateHeader,children:(0,g.jsxs)("h2",{id:e.name,className:"anchor",children:[e.name,(0,g.jsx)("a",{className:"hash-link",href:`#${e.name}`,title:e.name})]})}),(0,g.jsx)("section",{children:(0,g.jsx)("ul",{className:h.resourceList,children:e.resources.map((e=>(0,g.jsx)(v,{resource:e},e.name)))})})]},e.name)))}),f=e=>(0,g.jsxs)(c.e3,{className:(0,l.A)(o.G.wrapper.blogPages,o.G.page.blogTagsListPage),children:[(0,g.jsx)(c.be,{title:"\u7b14\u8bb0\u5bfc\u822a",description:""}),(0,g.jsx)(i.A,{children:(0,g.jsx)("div",{className:"container margin-top--md",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("aside",{className:(0,l.A)("col col--2"),children:(0,g.jsx)(p,{})}),(0,g.jsx)("main",{className:"col col--10",children:(0,g.jsx)(j,{})})]})})})]})}}]);