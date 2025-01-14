"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[7749],{4873:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var c=t(4848),s=t(8453);const l={},o="\u524d\u8a00",i={permalink:"/blog/develop/\u5df2\u53d1\u5e03/\u3010\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3011\u5982\u4f55\u4e0d\u70b9\u51fb\uff0c\u4f7f\u7528\u65b9\u6cd5\u89e6\u53d1\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\uff1f",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/develop/\u5df2\u53d1\u5e03/\u3010\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3011\u5982\u4f55\u4e0d\u70b9\u51fb\uff0c\u4f7f\u7528\u65b9\u6cd5\u89e6\u53d1\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\uff1f.md",source:"@site/blog/develop/\u5df2\u53d1\u5e03/\u3010\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3011\u5982\u4f55\u4e0d\u70b9\u51fb\uff0c\u4f7f\u7528\u65b9\u6cd5\u89e6\u53d1\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\uff1f.md",title:"\u524d\u8a00",description:"* \u9700\u6c42\uff1a\u60f3\u8981\u4f7f\u7528\u65b9\u6cd5\u6765\u89e6\u53d1Button\u5143\u7d20\u4e2d\u7684onClick\u4e8b\u4ef6\uff0c\u800c\u4e0d\u662f\u4eba\u4e3a\u70b9\u51fb\u89e6\u53d1\u3002",date:"2025-01-14T01:48:04.000Z",tags:[],readingTime:1.465,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u5c01\u88c5\u539f\u56e0",permalink:"/blog/develop/\u3010Taro\u3011\u5c01\u88c5\u76d1\u542c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u662f\u5426\u4e3a\u5f53\u524d\u9875\u9762hook"},nextItem:{title:"\u524d\u8a00",permalink:"/blog/develop/\u5df2\u53d1\u5e03/\u3010\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3011\u5982\u4f55\u5b9e\u73b0\u6587\u5b57\u8f6c\u8bed\u97f3\uff1f"}},r={authorsImageUrls:[]},d=[];function a(n){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u9700\u6c42\uff1a\u60f3\u8981\u4f7f\u7528\u65b9\u6cd5\u6765\u89e6\u53d1Button\u5143\u7d20\u4e2d\u7684onClick\u4e8b\u4ef6\uff0c\u800c\u4e0d\u662f\u4eba\u4e3a\u70b9\u51fb\u89e6\u53d1\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u73af\u5883\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'"@tarojs/react": "3.5.12",\n"react": "^18.0.0"\n'})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h1,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'function autoClick(clickId) {\n  const e = document.createEvent("MouseEvents");\n  //\u5c06\u5143\u7d20\u7684\u4e8b\u4ef6\u7c7b\u578b\u6539\u4e3atap\n  e.type = "tap";\n\tdocument.getElementById(clickId).dispatchEvent(e);\n}\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u53c2\u6570\uff1a",(0,c.jsx)(e.code,{children:"clickId<string>"})," \uff1a\u70b9\u51fb\u6309\u94aeid\u6807\u8bb0"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-jsx",children:"const component=()=>{\n  useEffect(()=>{\n    autoClick('test-autoClick');\n    //=>test\n  },[])\n  \n  function autoClick(clickId) {\n    const e = document.createEvent(\"MouseEvents\");\n    e.type = \"tap\";\n    document.getElementById(clickId).dispatchEvent(e);\n  }  \n  \n  return (\n    <Button \n      id='test-autoClick'\n      onClick={()=>console.log('test')}\n    >\n      \u6309\u94ae\n    </Button>\n   )\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h1,{id:"\u601d\u8003\u8fc7\u7a0b",children:"\u601d\u8003\u8fc7\u7a0b"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u901a\u8fc7\u5bf9\u6bd4\u70b9\u51fb\u4e8b\u4ef6\u5c5e\u6027\u503c\u6765\u627e\u5230\u5b9e\u73b0\u65b9\u6cd5"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/blog/20240829231124.png",alt:""})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u5de6\uff1a\u65b9\u6cd5\u4e2d",(0,c.jsx)(e.code,{children:"createEvent"}),"\u51fa\u6765\u7684\u4e8b\u4ef6\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(e.li,{children:"\u53f3\uff1a\u70b9\u51fb\u6309\u94ae\u8f93\u51fa\u7684\u70b9\u51fb\u4e8b\u4ef6\u5bf9\u8c61\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h1,{id:"\u7591\u95ee",children:"\u7591\u95ee"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u672c\u4eba\u5bf9\u6539\u5185\u5bb9\u7684\u4e00\u4e9b\u7591\u95ee\uff1f\u6073\u8bf7\u8bfb\u8005\u80fd\u4e3a\u6211\u6307\u70b9\u8ff7\u6d25\uff0c\u5341\u5206\u611f\u8c22\ud83d\ude4f"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"Q\uff1a\u82e5\u60f3\u81ea\u52a8\u89e6\u53d1\u5fae\u4fe1\u70b9\u51fb\u4e8b\u4ef6\uff08\u5982\u83b7\u53d6\u624b\u673a\u53f7\u3001\u8054\u7cfb\u5ba2\u670d\u7b49\uff09\uff0c\u4f1a\u51fa\u73b0\u5982\u4e0b\u62a5\u9519\uff08\u5373\u5fc5\u987b\u7528\u6237\u70b9\u51fb\u624d\u53ef\u89e6\u53d1\uff09\uff0c\u8be5\u573a\u666f\u5982\u4f55\u5b9e\u73b0\u81ea\u52a8\u89e6\u53d1\uff1f"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u590d\u73b0\uff1a\u5c06\u4e0a\u8ff0\u793a\u4f8b\u6309\u94ae\u4e2d\u7684",(0,c.jsx)(e.code,{children:"onClick"}),"\u4e8b\u4ef6\u66ff\u6362\u6210\u8054\u7cfb\u5ba2\u670d"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-jsx",children:"<Button\n  id='test'\n  onClick={() => {\n    Taro.openCustomerServiceChat({\n      extInfo: { url: globalThis.config.serviceUrl },\n      corpId: globalThis.config.corpId,\n    })\n  }}\n>\n  \u6309\u94ae\n</Button>\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u62a5\u9519"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/blog/20240829230456.png",alt:""})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var c=t(6540);const s={},l=c.createContext(s);function o(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);