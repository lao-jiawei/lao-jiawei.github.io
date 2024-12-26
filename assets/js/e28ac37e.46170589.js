"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[5173],{3466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var c=t(4848),s=t(8453);const r={},i=void 0,a={id:"react/\u6e90\u7801\u9605\u8bfb/v17/onActionSuccess",title:"onActionSuccess",description:"\u7248\u672c\uff1av17",source:"@site/docs/react/\u6e90\u7801\u9605\u8bfb/v17/onActionSuccess.md",sourceDirName:"react/\u6e90\u7801\u9605\u8bfb/v17",slug:"/react/\u6e90\u7801\u9605\u8bfb/v17/onActionSuccess",permalink:"/docs/react/\u6e90\u7801\u9605\u8bfb/v17/onActionSuccess",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"react",previous:{title:"onActionError",permalink:"/docs/react/\u6e90\u7801\u9605\u8bfb/v17/onActionError"},next:{title:"updateActionState",permalink:"/docs/react/\u6e90\u7801\u9605\u8bfb/v17/updateActionState"}},o={},d=[{value:"1\u3001\u66f4\u65b0\u52a8\u4f5c\u8282\u70b9\u72b6\u6001",id:"1\u66f4\u65b0\u52a8\u4f5c\u8282\u70b9\u72b6\u6001",level:2},{value:"2\u3001\u901a\u77e5\u76d1\u542c\u5668",id:"2\u901a\u77e5\u76d1\u542c\u5668",level:2},{value:"3\u3001\u66f4\u65b0\u52a8\u4f5c\u961f\u5217\u7684\u72b6\u6001",id:"3\u66f4\u65b0\u52a8\u4f5c\u961f\u5217\u7684\u72b6\u6001",level:2},{value:"4\u3001\u5904\u7406\u52a8\u4f5c\u961f\u5217",id:"4\u5904\u7406\u52a8\u4f5c\u961f\u5217",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u7248\u672c\uff1av17"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f4d\u7f6e\uff1a",(0,c.jsx)(n.code,{children:"packages/react-reconciler/src/ReactFiberHooks.js"})]}),"\n",(0,c.jsx)(n.p,{children:"\u76ee\u7684\uff1a\u5f53\u4e00\u4e2a\u52a8\u4f5c\uff08action\uff09\u6210\u529f\u6267\u884c\u5b8c\u6bd5\u65f6\uff0c\u8be5\u65b9\u6cd5\u88ab\u8c03\u7528\u3002\u66f4\u65b0\u76f8\u5173\u7684\u72b6\u6001\uff0c\u5e76\u7ee7\u7eed\u5904\u7406\u961f\u5217\u4e2d\u7684\u5176\u4ed6\u52a8\u4f5c\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0cReact \u53ef\u4ee5\u5728\u52a8\u4f5c\u5b8c\u6210\u540e\u7acb\u5373\u66f4\u65b0\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u5e76\u89e6\u53d1\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u952e\u540d"}),(0,c.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"actionQueue"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"\u52a8\u4f5c\u961f\u5217"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"actionNode"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"\u5f53\u524d\u52a8\u4f5c\u8282\u70b9"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"nextState"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsx)(n.p,{children:"\u903b\u8f91\uff1a"}),"\n",(0,c.jsx)(n.h2,{id:"1\u66f4\u65b0\u52a8\u4f5c\u8282\u70b9\u72b6\u6001",children:"1\u3001\u66f4\u65b0\u52a8\u4f5c\u8282\u70b9\u72b6\u6001"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \u66f4\u65b0\u52a8\u4f5c\u8282\u70b9\u72b6\u6001,\u8868\u793a\u52a8\u4f5c\u6210\u529f\u5b8c\u6210\nactionNode.status = 'fulfilled';\nactionNode.value = nextState;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"2\u901a\u77e5\u76d1\u542c\u5668",children:"2\u3001\u901a\u77e5\u76d1\u542c\u5668"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \u901a\u77e5\u52a8\u4f5c\u76d1\u542c\u5668,\u89e6\u53d1\u540e\u7eed\u7684\u6e32\u67d3\u548c\u5176\u4ed6\u526f\u4f5c\u7528\nnotifyActionListeners(actionNode);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"3\u66f4\u65b0\u52a8\u4f5c\u961f\u5217\u7684\u72b6\u6001",children:"3\u3001\u66f4\u65b0\u52a8\u4f5c\u961f\u5217\u7684\u72b6\u6001"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \u66f4\u65b0\u961f\u5217\u7684\u72b6\u6001\n// \u5c06\u52a8\u4f5c\u961f\u5217\u7684\u72b6\u6001\u66f4\u65b0\u4e3anextState\u2014\u2014\u52a8\u4f5c\u961f\u5217\u73b0\u5728\u6301\u6709\u6700\u65b0\u7684\u72b6\u6001\nactionQueue.state = nextState;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"4\u5904\u7406\u52a8\u4f5c\u961f\u5217",children:"4\u3001\u5904\u7406\u52a8\u4f5c\u961f\u5217"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \u5904\u7406\u52a8\u4f5c\u961f\u5217\nconst last = actionQueue.pending;\n// \u68c0\u67e5\u52a8\u4f5c\u961f\u5217\u4e2d\u662f\u5426\u8fd8\u6709\u5176\u4ed6\u5f85\u5904\u7406\u7684\u52a8\u4f5c\nif (last !== null) {\n  const first = last.next;\n  if (first === last) {\n    // \u5982\u679c\u5f53\u524d\u52a8\u4f5c\u662f\u961f\u5217\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u52a8\u4f5c\n    // \u5c06pending \u8bbe\u7f6e\u4e3anull\uff0c\u8868\u793a\u6ca1\u6709\u5f85\u5904\u7406\u7684\u52a8\u4f5c\n    actionQueue.pending = null;\n  } else {\n    // \u961f\u5217\u4e2d\u8fd8\u6709\u5176\u4ed6\u52a8\u4f5c\n\n    // \u4ece\u961f\u5217\u4e2d\u79fb\u9664\u5f53\u524d\u52a8\u4f5c\n    const next = first.next;\n    last.next = next;\n\n    // \u6267\u884c\u4e0b\u4e00\u4e2a\u52a8\u4f5c\n    runActionStateAction(actionQueue, next);\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var c=t(6540);const s={},r=c.createContext(s);function i(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);