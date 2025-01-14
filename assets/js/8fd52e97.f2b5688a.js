"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[9135],{3347:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var l=r(4848),s=r(8453);const i={id:"javascript-should-know-closure",slug:"/javascript-should-know-closure",title:"\u95ed\u5305",date:new Date("2022-05-10T00:00:00.000Z")},c="\u95ed\u5305",t={id:"javascript/JavaScript\u5de5\u7a0b\u5e08\u90fd\u5e94\u61c2\u768433\u4e2a\u6982\u5ff5/javascript-should-know-closure",title:"\u95ed\u5305",description:"Q\uff1a\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/javascript/JavaScript\u5de5\u7a0b\u5e08\u90fd\u5e94\u61c2\u768433\u4e2a\u6982\u5ff5/\u95ed\u5305.md",sourceDirName:"javascript/JavaScript\u5de5\u7a0b\u5e08\u90fd\u5e94\u61c2\u768433\u4e2a\u6982\u5ff5",slug:"/javascript-should-know-closure",permalink:"/docs/javascript-should-know-closure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"javascript-should-know-closure",slug:"/javascript-should-know-closure",title:"\u95ed\u5305",date:"2022-05-10T00:00:00.000Z"},sidebar:"javascript",previous:{title:"\u8c03\u7528\u5806\u6808",permalink:"/docs/javascript-shouldKnow-callStack"},next:{title:"\u9690\u5f0f, \u663e\u5f0f, \u540d\u4e49\u548c\u9e2d\u5b50\u7c7b\u578b",permalink:"/docs/javascript-shouldKnow-type"}},o={},a=[{value:"Q\uff1a\u662f\u4ec0\u4e48\uff1f",id:"q\u662f\u4ec0\u4e48",level:2},{value:"Q\uff1a\u80fd\u5e72\u4ec0\u4e48\uff1f",id:"q\u80fd\u5e72\u4ec0\u4e48",level:2},{value:"Q\uff1a\u4ec0\u4e48\u65f6\u5019\u88ab\u521b\u5efa\uff1f",id:"q\u4ec0\u4e48\u65f6\u5019\u88ab\u521b\u5efa",level:2},{value:"Q\uff1a\u95ed\u5305\u7684\u7f3a\u70b9\u662f\u4ec0\u4e48\uff1f",id:"q\u95ed\u5305\u7684\u7f3a\u70b9\u662f\u4ec0\u4e48",level:2},{value:"Q\uff1a\u5982\u4f55\u907f\u514d\u95ed\u5305\uff1f",id:"q\u5982\u4f55\u907f\u514d\u95ed\u5305",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u95ed\u5305",children:"\u95ed\u5305"}),"\n",(0,l.jsx)(e.h2,{id:"q\u662f\u4ec0\u4e48",children:"Q\uff1a\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["A\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u591f\u8bfb\u53d6\u5176\u4ed6\u51fd\u6570\u5185\u90e8\u53d8\u91cf\u7684\u51fd\u6570\uff0c\u662f\u5c06\u51fd\u6570\u5185\u90e8\u548c\u51fd\u6570\u5916\u90e8\u8fde\u63a5\u8d77\u6765\u7684\u4e00\u5ea7\u6865\u6881\u3002\u2014\u2014by\uff1a\u962e\u4e00\u5cf0"}),"\n",(0,l.jsx)(e.li,{children:"\u8bcd\u6cd5\u8868\u793a\u5305\u62ec\u4e0d\u88ab\u8ba1\u7b97\u7684\u53d8\u91cf\u7684\u51fd\u6570\u3002\u2014\u2014by\uff1aW3school"}),"\n",(0,l.jsxs)(e.li,{children:["\u51fd\u6570\u4ee5\u53ca\u5176\u6346\u7ed1\u7684\u5468\u8fb9\u73af\u5883\u72b6\u6001",(0,l.jsxs)(e.a,{href:"https://github.com/lao-jiawei/code-way/blob/main/1_awesome/awesome-javascript/%E3%80%90%E9%9D%A2%E5%90%91%E5%AD%A6%E4%B9%A0%E3%80%91/%E3%80%90N%E3%80%91%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.md",children:["\uff08",(0,l.jsx)(e.strong,{children:"lexical environment"}),"\uff0c",(0,l.jsx)(e.strong,{children:"\u8bcd\u6cd5\u73af\u5883"}),"\uff09"]}),"\u7684\u5f15\u7528\u7684\u7ec4\u5408\u3002\u2014\u2014by\uff1aMDN"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"q\u80fd\u5e72\u4ec0\u4e48",children:"Q\uff1a\u80fd\u5e72\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"A\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u4ece\u5185\u90e8\u51fd\u6570\u8bbf\u95ee\u5916\u90e8\u51fd\u6570\u7684\u4f5c\u7528\u57df\uff0c\u5141\u8bb8\u5c06\u51fd\u6570\u4e0e\u5176\u6240\u64cd\u4f5c\u7684\u67d0\u4e9b\u6570\u636e\uff08\u73af\u5883\uff09\u5173\u8054\u8d77\u6765\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:" //\u793a\u4f8b\nfunction makeAdder(x) {\n  return function (y) {\n    return x + y;\n  };\n}\n\n//\u6b64\u65f6\u4f20\u5165makeAdder\u4e2d\u7684x\nvar add5 = makeAdder(5);\nvar add10 = makeAdder(10);\n\n//\u6b64\u65f6\u4f20\u5165makeAdder\u4e2d\u7684y\uff0c\u4f46\u662f\u51fd\u6570\u4f1a\u8bb0\u4f4f\u4e4b\u524d\u4f20\u7684x\nconsole.log(add5(2)); // 7\nconsole.log(add10(2)); // 12\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5\uff0c\u95ed\u5305\u53ef\u4ee5\u8bbf\u95ee\u79c1\u6709\u51fd\u6570\u548c\u53d8\u91cf\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"var Counter = (function () {\n  var privateCounter = 0;\n  function changeBy(val) {\n    privateCounter += val;\n  }\n  return {\n    increment: function () {\n      changeBy(1);\n    },\n    decrement: function () {\n      changeBy(-1);\n    },\n    value: function () {\n      return privateCounter;\n    },\n  };\n})();\n\nconsole.log(Counter.value()); /* logs 0 */\nCounter.increment();\nCounter.increment();\nconsole.log(Counter.value()); /* logs 2 */\nCounter.decrement();\nconsole.log(Counter.value()); /* logs 1 */\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8ba9\u53d8\u91cf\u7684\u503c\u59cb\u7ec8\u4fdd\u6301\u5728\u5185\u5b58\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"q\u4ec0\u4e48\u65f6\u5019\u88ab\u521b\u5efa",children:"Q\uff1a\u4ec0\u4e48\u65f6\u5019\u88ab\u521b\u5efa\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A\uff1a\u968f\u7740\u51fd\u6570\u7684\u521b\u5efa\u800c\u88ab\u540c\u65f6\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"q\u95ed\u5305\u7684\u7f3a\u70b9\u662f\u4ec0\u4e48",children:"Q\uff1a\u95ed\u5305\u7684\u7f3a\u70b9\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A\uff1a\u5728\u5904\u7406\u901f\u5ea6\u548c\u5185\u5b58\u6d88\u8017\u65b9\u9762\u5bf9\u811a\u672c\u6027\u80fd\u5177\u6709\u8d1f\u9762\u5f71\u54cd"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"q\u5982\u4f55\u907f\u514d\u95ed\u5305",children:"Q\uff1a\u5982\u4f55\u907f\u514d\u95ed\u5305\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"A\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c06\u5f02\u6b65\u83b7\u53d6\u503c\u4fdd\u7559\u5230\u65b0\u589e\u7684\u95ed\u5305\u4e2d"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'//\u5b58\u5728\u95ed\u5305\nfor(var i = 0;i < 10;i++){\n   setTimeout(()=>{console.log(i),1000})\n}\n\n//\u4f18\u5316\nfunction init3() {     \n  var pAry = document.getElementsByTagName("p");  \n  for( var i=0; i<pAry.length; i++ ) { \n    //\u5d4c\u5957\u591a\u4e00\u5c42\u95ed\u5305\n    (function(arg){         \n      pAry[i].onclick = function() {         \n        alert(arg);     \n      };     \n    })(i);//\u8c03\u7528\u65f6\u53c2\u6570     \n  }     \n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c06\u53d8\u91cf\u503c\u4fdd\u7559\u5230\u4f5c\u7528\u57df\u4e4b\u5916"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>t});var l=r(6540);const s={},i=l.createContext(s);function c(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);