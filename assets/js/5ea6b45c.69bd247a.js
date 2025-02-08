"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[6790],{8663:(e,r,s)=>{s.d(r,{A:()=>d});var a=s(6540),c=s(961),o=s(991);const t="tooltip_vwsi",i="tooltipArrow_JUcJ";var n=s(4848);const d=e=>{let{children:r,id:s,anchorEl:d,text:l,delay:m}=e;const[g,u]=(0,a.useState)(!1),[h,p]=(0,a.useState)(null),[v,f]=(0,a.useState)(null),[j,b]=(0,a.useState)(null),[y,x]=(0,a.useState)(null),{styles:N,attributes:C}=(0,o.E)(h,v,{modifiers:[{name:"arrow",options:{element:j}},{name:"offset",options:{offset:[0,8]}}]}),_=(0,a.useRef)(null),k=`${s}_tooltip`;return(0,a.useEffect)((()=>{x(d?"string"==typeof d?document.querySelector(d):d:document.body)}),[y,d]),(0,a.useEffect)((()=>{const e=["mouseenter","focus"],r=["mouseleave","blur"],s=()=>{""!==l&&(h?.removeAttribute("title"),_.current=window.setTimeout((()=>{u(!0)}),m||300))},a=()=>{clearInterval(_.current),u(!1)};return h&&(e.forEach((e=>{h.addEventListener(e,s)})),r.forEach((e=>{h.addEventListener(e,a)}))),()=>{h&&(e.forEach((e=>{h.removeEventListener(e,s)})),r.forEach((e=>{h.removeEventListener(e,a)})))}}),[h,l,m]),(0,n.jsxs)(n.Fragment,{children:[a.cloneElement(r,{ref:p,"aria-describedby":g?k:void 0}),y?c.createPortal(g&&(0,n.jsxs)("div",{id:k,role:"tooltip",ref:f,className:t,style:N.popper,...C.popper,children:[l,(0,n.jsx)("span",{ref:b,className:i,style:N.arrow})]}),y):y]})}},3642:(e,r,s)=>{s.r(r),s.d(r,{default:()=>j});var a=s(8774),c=s(1213),o=s(7559);const t=[{name:"\u524d\u7aef",resources:[{name:"JavaScript",desc:"",logo:"/img/resource/javascript.svg",href:"docs/category/javascript"},{name:"TypeScript",desc:"",logo:"/img/resource/typescript.png",href:"docs/category/typescript"},{name:"React",desc:"",logo:"https://react.dev/favicon.ico",href:"docs/category/react"},{name:"Vue",desc:"",logo:"https://vuejs.org/logo.svg",href:"docs/category/vue"},{name:"Html&Css",desc:"",logo:"/img/resource/htmlCss.png",href:"docs/category/htmlandcss"},{name:"Webpack",desc:"",logo:"/img/resource/webpack.png",href:"docs/category/webpack"},{name:"Vite",desc:"",logo:"/img/resource/vite.svg",href:"docs/category/vite"},{name:"\u524d\u7aef\u5de5\u7a0b\u5316",desc:"",logo:"/img/resource/frontend.png",href:"docs/category/\u524d\u7aef\u5de5\u7a0b\u5316"}]},{name:"\u540e\u7aef",resources:[{name:"Java",desc:"",logo:"/img/resource/java.png",href:"docs/category/java"},{name:"C",desc:"",logo:"/img/resource/c.png",href:""},{name:"SpringBoot",desc:"",logo:"/img/resource/springboot.png",href:""},{name:"node.js",desc:"",logo:"/img/resource/nodejs.svg",href:"docs/category/nodejs"},{name:"\u6570\u636e\u5e93",desc:"",logo:"/img/resource/mySQL.png",href:"docs/category/\u6570\u636e\u5e93"}]},{name:"\u5f00\u53d1\u901a\u7528\u6280\u80fd",resources:[{name:"\u8ba1\u7b97\u673a\u7ec4\u6210\u539f\u7406",desc:"",logo:"/img/resource/cs.png",href:"docs/cs/\u8ba1\u7b97\u673a\u7ec4\u6210\u539f\u7406"},{name:"\u8ba1\u7b97\u673a\u7f51\u7edc",desc:"",logo:"/img/resource/net.jpeg",href:"docs/category/\u8ba1\u7b97\u673a\u7f51\u7edc"},{name:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",desc:"",logo:"/img/resource/algorithm.png",href:"docs/category/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5\u7b14\u8bb0"},{name:"\u64cd\u4f5c\u7cfb\u7edf",desc:"",logo:"/img/resource/os.png",href:"docs/category/\u64cd\u4f5c\u7cfb\u7edf"},{name:"Git",desc:"",logo:"/img/resource/git.png",href:"docs/category/git"},{name:"Vim",desc:"",logo:"/img/resource/vim.png",href:""},{name:"\u5de5\u5177\u4f7f\u7528\u6280\u5de7",desc:"",logo:"/img/resource/javascript.svg",href:"docs/category/\u5de5\u5177\u4f7f\u7528\u6280\u5de7"},{name:"\u6b63\u5219\u8868\u8fbe\u5f0f",desc:"",logo:"/img/resource/regExp.png",href:"docs/category/\u6b63\u5219\u8868\u8fbe\u5f0f"},{name:"npm",desc:"",logo:"/img/resource/npm.png",href:"docs/category/npm"}]}];var i=s(781),n=s(4164),d=s(8663),l=s(6540);const m={resourceCard:"resourceCard_ZuYt",resourceCardImage:"resourceCardImage_XiJz",resourceCardHeader:"resourceCardHeader_YrMG",resourceCardTitle:"resourceCardTitle_Hopv",resourceCardBody:"resourceCardBody_XYuv",resourceCardDesc:"resourceCardDesc_b2xw"};var g=s(4848);const u=e=>{let{resource:r}=e;return(0,g.jsxs)("li",{className:(0,n.A)(m.resourceCard,"padding-vert--sm padding-horiz--md"),children:[(0,g.jsx)("img",{src:"string"==typeof r.logo?r.logo:r.logo?.src?.src,alt:r.name,className:(0,n.A)(m.resourceCardImage)}),(0,g.jsxs)("div",{className:m.resourceCardBody,children:[(0,g.jsx)("div",{className:(0,n.A)(m.resourceCardHeader),children:(0,g.jsx)("h4",{className:m.resourceCardTitle,children:(0,g.jsx)(a.A,{href:r.href,className:m.resourceCardLink,children:r.name})})}),(0,g.jsx)(d.A,{text:r.desc,anchorEl:"#__docusaurus",id:`tooltip-${r.name}`,children:(0,g.jsx)("p",{className:m.resourceCardDesc,children:r.desc})},r.name)]})]},r.name)},h=(0,l.memo)(u),p={sidebar:"sidebar_Z7ck",sidebarItemTitle:"sidebarItemTitle_AS2n",sidebarItemList:"sidebarItemList_yfkM",sidebarItem:"sidebarItem_cNsk",sidebarItemLink:"sidebarItemLink_VzJ8",sidebarItemLinkActive:"sidebarItemLinkActive_hZAV",hero:"hero_Tt0i",heroTitle:"heroTitle_Do0a",heroDesc:"heroDesc_fNjb",cateHeader:"cateHeader_UPsd",cateBody:"cateBody_syaU",resourceList:"resourceList_mzQ2"},v=()=>{const e={title:"",items:t.map((e=>({title:e.name,permalink:`#${e.name}`})))};return(0,g.jsxs)("nav",{className:(0,n.A)(p.sidebar,"thin-scrollbar"),children:[(0,g.jsx)("div",{className:(0,n.A)(p.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,g.jsx)("ul",{className:(0,n.A)(p.sidebarItemList,"clean-list"),children:e.items.map((e=>(0,g.jsx)("li",{className:p.sidebarItem,children:(0,g.jsx)(a.A,{isNavLink:!0,to:e.permalink,className:p.sidebarItemLink,activeClassName:p.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})},f=()=>(0,g.jsx)("div",{className:p.category,children:t.map((e=>(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:p.cateHeader,children:(0,g.jsxs)("h2",{id:e.name,className:"anchor",children:[e.name,(0,g.jsx)("a",{className:"hash-link",href:`#${e.name}`,title:e.name})]})}),(0,g.jsx)("section",{children:(0,g.jsx)("ul",{className:p.resourceList,children:e.resources.map((e=>(0,g.jsx)(h,{resource:e},e.name)))})})]},e.name)))}),j=e=>(0,g.jsxs)(c.e3,{className:(0,n.A)(o.G.wrapper.blogPages,o.G.page.blogTagsListPage),children:[(0,g.jsx)(c.be,{title:"\u7b14\u8bb0\u5bfc\u822a",description:""}),(0,g.jsx)(i.A,{children:(0,g.jsx)("div",{className:"container margin-top--md",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("aside",{className:(0,n.A)("col col--2"),children:(0,g.jsx)(v,{})}),(0,g.jsx)("main",{className:"col col--10",children:(0,g.jsx)(f,{})})]})})})]})}}]);