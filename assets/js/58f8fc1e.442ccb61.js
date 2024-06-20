"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[325],{2381:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(4848),t=a(8453);const s={id:"javascript-freeCodeCamp-functional-programming",slug:"/javascript-freeCodeCamp-functional-programming",title:"\u3010freeCodeCamp\u3011\u51fd\u6570\u5f0f\u7f16\u7a0b",date:new Date("2022-05-10T00:00:00.000Z")},c="\u5b66\u4e60\u51fd\u6570\u5f0f\u7f16\u7a0b",i={id:"javascript/freeCodeCamp/javascript-freeCodeCamp-functional-programming",title:"\u3010freeCodeCamp\u3011\u51fd\u6570\u5f0f\u7f16\u7a0b",description:"\u3010\u6211\u7684\u63d0\u4ea4\u3011",source:"@site/docs/javascript/freeCodeCamp/\u51fd\u6570\u5f0f\u7f16\u7a0b.md",sourceDirName:"javascript/freeCodeCamp",slug:"/javascript-freeCodeCamp-functional-programming",permalink:"/docs/javascript-freeCodeCamp-functional-programming",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"javascript-freeCodeCamp-functional-programming",slug:"/javascript-freeCodeCamp-functional-programming",title:"\u3010freeCodeCamp\u3011\u51fd\u6570\u5f0f\u7f16\u7a0b",date:"2022-05-10T00:00:00.000Z"},sidebar:"javascript",previous:{title:"\u3010freeCodeCamp\u3011\u4e2d\u7ea7\u7b97\u6cd5",permalink:"/docs/javascript-freeCodeCamp-intermediate-algorithms"},next:{title:"\u3010freeCodeCamp\u3011\u57fa\u7840Javascript",permalink:"/docs/javascript-freeCodeCamp-base"}},o={},p=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5b66\u4e60\u51fd\u6570\u5f0f\u7f16\u7a0b",children:(0,r.jsx)(n.a,{href:"https://www.freecodecamp.org/chinese/learn/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming",children:"\u5b66\u4e60\u51fd\u6570\u5f0f\u7f16\u7a0b"})}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u6211\u7684\u63d0\u4ea4\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u51fd\u6570\u8fd4\u56de\u8868\u793a\u201c\u4e00\u676f\u7eff\u8336\uff08green tea\uff09\u201d\u7684\u5b57\u7b26\u4e32\nconst prepareTea = () => 'greenTea';\n\n/*\n\u6709\u4e00\u4e2a\u51fd\u6570\uff08\u4ee3\u8868\u8336\u7684\u79cd\u7c7b\uff09\u548c\u9700\u8981\u51e0\u676f\u8336\uff0c\u4e0b\u9762\u7684\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u5b57\u7b26\u4e32\uff08\u6bcf\u4e2a\u5b57\u7b26\u4e32\u8868\u793a\u4e00\u676f\u7279\u522b\u79cd\u7c7b\u7684\u8336\uff09\u3002\n*/\nconst getTea = (numOfCups) => {\n  const teaCups = [];\n\n  for(let cups = 1; cups <= numOfCups; cups += 1) {\n    const teaCup = prepareTea();\n    teaCups.push(teaCup);\n  }\n  return teaCups;\n};\n\n// \u53ea\u4fee\u6539\u8fd9\u4e00\u884c\u4e0b\u9762\u7684\u4ee3\u7801\nconst tea4TeamFCC = getTea(40);\n// \u53ea\u4fee\u6539\u8fd9\u4e00\u884c\u4e0a\u9762\u7684\u4ee3\u7801\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u6d89\u53ca\u7684\u5185\u5bb9\u3011"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u51fd\u6570\u7f16\u7a0b\u8303\u5f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"INPUT -> PROCESS -> OUTPUT"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u51fd\u6570\u7f16\u7a0b\u597d\u5904"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u529f\u80fd\u72ec\u7acb\u2014\u2014\u4e0d\u4f9d\u8d56\u4e8e\u7a0b\u5e8f\u7684\u72b6\u6001\uff08\u6bd4\u5982\u53ef\u80fd\u53d1\u751f\u53d8\u5316\u7684\u5168\u5c40\u53d8\u91cf\uff09\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u7eaf\u51fd\u6570\u2014\u2014\u540c\u4e00\u4e2a\u8f93\u5165\u6c38\u8fdc\u80fd\u5f97\u5230\u540c\u4e00\u4e2a\u8f93\u51fa\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u6709\u9650\u7684\u526f\u4f5c\u7528\u2014\u2014\u53ef\u4ee5\u4e25\u683c\u5730\u9650\u5236\u51fd\u6570\u5916\u90e8\u5bf9\u72b6\u6001\u7684\u66f4\u6539\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u4e86\u89e3\u51fd\u6570\u5f0f\u7f16\u7a0b\u672f\u8bed",children:(0,r.jsx)(n.a,{href:"https://www.freecodecamp.org/chinese/learn/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology",children:"\u4e86\u89e3\u51fd\u6570\u5f0f\u7f16\u7a0b\u672f\u8bed"})}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u6211\u7684\u63d0\u4ea4\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u51fd\u6570\u8fd4\u56de\u8868\u793a\u201c\u4e00\u676f\u7eff\u8336\uff08green tea\uff09\u201d\u7684\u5b57\u7b26\u4e32\nconst prepareGreenTea = () => 'greenTea';\n\n// \u51fd\u6570\u8fd4\u56de\u8868\u793a\u201c\u4e00\u676f\u7ea2\u8336\uff08black tea\uff09\u201d\u7684\u5b57\u7b26\u4e32\nconst prepareBlackTea = () => 'blackTea';\n\n/*\n\u6709\u4e00\u4e2a\u51fd\u6570\uff08\u4ee3\u8868\u8336\u7684\u79cd\u7c7b\uff09\u548c\u9700\u8981\u51e0\u676f\u8336\uff0c\u4e0b\u9762\u7684\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u5b57\u7b26\u4e32\uff08\u6bcf\u4e2a\u5b57\u7b26\u4e32\u8868\u793a\u4e00\u676f\u7279\u522b\u79cd\u7c7b\u7684\u8336\uff09\u3002\n*/\nconst getTea = (prepareTea, numOfCups) => {\n  const teaCups = [];\n\n  for(let cups = 1; cups <= numOfCups; cups += 1) {\n    const teaCup = prepareTea();\n    teaCups.push(teaCup);\n  }\n  return teaCups;\n};\n\n// \u53ea\u4fee\u6539\u8fd9\u4e00\u884c\u4e0b\u9762\u7684\u4ee3\u7801\nconst tea4GreenTeamFCC = getTea(prepareGreenTea,27);\nconst tea4BlackTeamFCC = getTea(prepareBlackTea,13);\n// \u53ea\u4fee\u6539\u8fd9\u4e00\u884c\u4e0a\u9762\u7684\u4ee3\u7801\n\nconsole.log(\n  tea4GreenTeamFCC,\n  tea4BlackTeamFCC\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3010\u6d89\u53ca\u7684\u77e5\u8bc6\u70b9\u3011"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Callback"}),"\uff1a\u56de\u8c03\u51fd\u6570\u2014\u2014\u88ab\u4f20\u9012\u5230\u53e6\u4e00\u4e2a\u51fd\u6570\u4e2d\u8c03\u7528\u7684\u51fd\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\u5934\u7b49\u51fd\u6570"}),"\uff1a\u51fd\u6570\u5c31\u50cf\u5176\u4ed6\u6b63\u5e38\u503c\u4e00\u6837\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9\u53d8\u91cf\u3001\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u51fd\u6570\uff0c\u6216\u4ece\u5176\u5b83\u51fd\u6570\u8fd4\u56de\u3002\uff08\u5728 JavaScript \u4e2d\uff0c\u6240\u6709\u51fd\u6570\u90fd\u662f\u5934\u7b49\u51fd\u6570\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\u9ad8\u9636\u51fd\u6570"}),"\uff1a\u5c06",(0,r.jsx)(n.strong,{children:"\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570"}),"\u6216\u5c06",(0,r.jsx)(n.strong,{children:"\u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c"}),"\u8fd4\u56de\u7684\u51fd\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lambda"}),"\uff1a\u5f53\u51fd\u6570\u88ab\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u51fd\u6570\u6216\u4ece\u53e6\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u65f6\uff0c\u90a3\u4e9b\u4f20\u5165\u6216\u8fd4\u56de\u7684\u51fd\u6570"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var r=a(6540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);