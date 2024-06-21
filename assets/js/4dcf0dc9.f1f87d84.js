"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[3584],{9844:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var s=r(4848),a=r(8453);const c={id:"javascript-dev-createArrayFunction",slug:"/javascript-dev-createArrayFunction",title:"\u521b\u5efa\u6570\u7ec4array\u7684\u65b9\u6cd5",date:new Date("2022-05-10T00:00:00.000Z")},i=void 0,t={id:"javascript/\u3010\u9762\u5411\u5f00\u53d1\u3011/javascript-dev-createArrayFunction",title:"\u521b\u5efa\u6570\u7ec4array\u7684\u65b9\u6cd5",description:"\u521b\u5efa\u6570\u7ec4",source:"@site/docs/javascript/\u3010\u9762\u5411\u5f00\u53d1\u3011/\u521b\u5efa\u6570\u7ec4array\u7684\u65b9\u6cd5.md",sourceDirName:"javascript/\u3010\u9762\u5411\u5f00\u53d1\u3011",slug:"/javascript-dev-createArrayFunction",permalink:"/docs/javascript-dev-createArrayFunction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"javascript-dev-createArrayFunction",slug:"/javascript-dev-createArrayFunction",title:"\u521b\u5efa\u6570\u7ec4array\u7684\u65b9\u6cd5",date:"2022-05-10T00:00:00.000Z"},sidebar:"javascript",previous:{title:"\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",permalink:"/docs/javascript-dev-declarationsAndCallsToFunctions"},next:{title:"\u533f\u540d\u51fd\u6570\u7684\u5b9a\u4e49\u548c\u8c03\u7528",permalink:"/docs/javascript-dev-definitionAndInvocationOfAnonymousFunctions"}},l={},d=[];function o(n){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u521b\u5efa\u6570\u7ec4"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u65b9\u6cd5\u4e00\uff1a\u6784\u9020\u51fd\u6570\u521b\u5efa\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'let array =new Array();\n//\u521b\u5efa\u6307\u5b9a\u957f\u5ea6\u6570\u7ec4\nlet array2 = new Array(20)//\u521b\u5efa\u521d\u59cb\u957f\u5ea6\u4e3a20\u7684\u6570\u7ec4\n//\u521b\u5efa\u6307\u5b9a\u5143\u7d20\u6570\u7ec4\nlet array3 = new Array(["one","two","three"])\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"PS\uff1a\u6784\u9020\u51fd\u6570\u4e2d\u4e24\u4e2a\u7528\u4e8e\u521b\u5efa\u6570\u7ec4\u7684\u9759\u6001\u65b9\u6cd5\u3010ES6\u3011"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Array.from();"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5c06",(0,s.jsx)(e.strong,{children:"\u7c7b\u6570\u7ec4\u7ed3\u6784"}),"\u8f6c\u6362\u4e3a\u6570\u7ec4\u5b9e\u4f8b"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b57\u7b26\u4e32\uff0c\u62c6\u6210\u5355\u4e2a\u5b57\u7b26\u6784\u6210\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'Array.from("Lao")//["L","a","o"];\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Map\uff0c\u6bcfset\u4e00\u6b21\uff0c\u6784\u6210\u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const m=new Map().set(1,2).set(3,4);\nArray.from(m);//[[1,2],[3,4]];\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Set\uff0c\u6bcfadd\u4e00\u6b21\uff0c\u6784\u6210\u4e00\u4e2a\u6570\u7ec4\u5143\u7d20"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const s=new Set().add(1).add(2).add(3).add(4);\nArray.from(s);//[1,2,3,4];\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8f6c\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const iter={\n  *[Symbol.iterator](){\n    yield 1;\n    yield 2;\n    yield 3;\n    yield 4;\n  }\n}\nArray.from(iter);//[1,2,3,4]\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"arguments\u5bf9\u8c61\u8f6c\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function getArgsArray(){\n  return Array.form(arguments);\n}\ngetArgsArray(1,2,3,4)//[1,2,3,4];\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5e26\u6709\u5fc5\u8981\u5c5e\u6027\u7684\u81ea\u5b9a\u5bf9\u8c61\u8f6c\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const object(={\n  0:1,\n  1:2,\n  2:3,\n  3:4,\n}\nArray.from(object)//[1,2,3,4]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Array.from()\u5e26\u53c2\u6570\u7528\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"Array.from(arrary,function(){},object);\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"array"}),"\uff1a\u9700\u8981\u6620\u5c04\u7684\u6570\u7ec4"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"funciton"}),"\uff1a\u6620\u5c04\u51fd\u6570"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"object"}),"\uff1a\u6620\u5c04\u51fd\u6570\u4e2dthis\u7684\u503c"]}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u793a\u4f8b\u3011"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const a1=[1,2,3,4];\n//\u53ea\u7528\u4e24\u4e2a\u53c2\u6570\nconst a2=Arrray.from(a1,x=> x**2);//[1,4,9,16];\n//\u4f7f\u7528\u4e09\u4e2a\u53c2\u6570\nconst a4=Array.from(a1,function(){\n  return x** this.exponent;\n},{exponent:2})//[1,4,9,16]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Array.to();"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5c06\u4e00\u7ec4",(0,s.jsx)(e.strong,{children:"\u53c2\u6570"}),"\u8f6c\u6362\u4e3a\u6570\u7ec4\u5b9e\u4f8b"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"Array.of(1,2,3,4,undefined)//[1,2,3,4,undefined]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u65b9\u6cd5\u4e8c\uff1a\u6570\u7ec4\u5b57\u9762\u91cf\u8868\u793a\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'let array=["one","two","three"];\nlet array2=["1","2",]//\u521b\u5efa\u5305\u542b\u4e24\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"PS\uff1a\u6570\u5b57\u5b57\u9762\u91cf\u8868\u793a\u6cd5\u521b\u5efa\u6570\u7ec4\u4e0d\u4f1a\u8c03\u7528Array\u6784\u9020\u51fd\u6570\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>t});var s=r(6540);const a={},c=s.createContext(a);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);