"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[2333],{2268:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>t});var r=s(4848),c=s(8453);const i={id:"javascript-program-design-function",slug:"/javascript-program-design-function",title:"\u51fd\u6570",date:new Date("2022-05-10T00:00:00.000Z")},l="\u51fd\u6570\u58f0\u660e",a={id:"notes/javascript/JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1/javascript-program-design-function",title:"\u51fd\u6570",description:"\u3010\u683c\u5f0f\u3011",source:"@site/docs/notes/javascript/JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1/\u51fd\u6570.md",sourceDirName:"notes/javascript/JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1",slug:"/javascript-program-design-function",permalink:"/docs/javascript-program-design-function",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"javascript-program-design-function",slug:"/javascript-program-design-function",title:"\u51fd\u6570",date:"2022-05-10T00:00:00.000Z"},sidebar:"notes",previous:{title:"\u4ee3\u7406\u4e0e\u53cd\u5c04",permalink:"/docs/javascript-program-design-proxy"},next:{title:"\u53d8\u91cf\u3001\u4f5c\u7528\u57df\u6216\u4e0e\u5185\u5b58",permalink:"/docs/javascript-program-design-var"}},o={},t=[{value:"Q\uff1a\u51fd\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u53c2\u6570\u503c\u65f6\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",id:"q\u51fd\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u53c2\u6570\u503c\u65f6\u53d1\u751f\u4e86\u4ec0\u4e48",level:2},{value:"Q\uff1a\u5982\u4f55\u5728\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e2a\u79c1\u6709\u53d8\u91cf\uff1f",id:"q\u5982\u4f55\u5728\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e2a\u79c1\u6709\u53d8\u91cf",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u51fd\u6570\u58f0\u660e",children:"\u51fd\u6570\u58f0\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u3010\u683c\u5f0f\u3011"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function fucName(arg1,arg2,...args){\n  /* \u51fd\u6570\u5185\u5bb9 */\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6bcf\u4e2a\u51fd\u6570\u90fd\u662fFunction\u7c7b\u578b\u7684\u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u51fd\u6570\u662f\u5bf9\u8c61\uff0c\u4e5f\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u51fd\u6570\u540d\u5c31\u662f\u6307\u5411\u51fd\u6570\u5bf9\u8c61\u7684\u6307\u9488\u3002"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u51fd\u6570\u540d\uff1a\u6307\u5411\u51fd\u6570\u5bf9\u8c61\u7684\u6307\u9488"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e00\u4e2a\u51fd\u6570\u53ef\u4ee5\u6709\u591a\u4e2a\u540d\u79f0"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function sum(a+b){\n  return a+b;\n}\nconsole.log(sum(1,1))//2\n\n//\u4e0d\u5e26\u62ec\u53f7\u7684\u51fd\u6570\u540d\u4f1a\u8bbf\u95ee\u51fd\u6570\u6307\u9488\uff0c\u800c\u4e0d\u4f1a\u6267\u884c\u51fd\u6570\n//\u4e24\u4e2a\u51fd\u6570\u540d\u6307\u5411\u540c\u4e00\u4e2a\u51fd\u6570\u5730\u5740\nconst anotherSum=sum;\n//\u5207\u65ad\u5176\u4e2d\u4e00\u4e2a\u6307\u9488\u6307\u5411\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u53e6\u4e00\u4e2a\u6307\u9488\u6307\u5411\nsum=null\nconsole.log(anotherSum(1,2))//3\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ES6\u4e2d\u83b7\u53d6\u51fd\u6570\u540d"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"//\u5df2\u4e0a\u8ff0\u4e3a\u4f8b\nconsole.log(sum.name)//'sum'\n//\u82e5\u51fd\u6570\u6ca1\u6709\u540d\u79f0\uff0c\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\nconsole.log((()=>{}).name)//''\n//\u82e5\u662fFunction\u51fd\u6570\u6784\u5efa\uff0c\u5219\u4f1a\u8fd4\u56de\u2018anonymous\u2019\nconsole.log((new Function()).name)//'anonymous'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u3010\u89c4\u8303\u3011\u51fd\u6570\u58f0\u660e\u7ed3\u5c3e\u53ef\u4ee5\u4e0d\u52a0",(0,r.jsx)(e.code,{children:";"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"arguments"}),"\u2014\u2014\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff08\u5305\u542b\u8c03\u7528\u51fd\u6570\u65f6\u4f20\u5165\u7684\u53c2\u6570\uff09"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u53ea\u6709\u4ee5",(0,r.jsx)(e.code,{children:"function"}),"\u5173\u952e\u5b57\u5b9a\u4e49\u7684\u51fd\u6570\uff08\u8fd8\u6709\u7bad\u5934\u51fd\u6570\uff09\u65f6\u624d\u4f1a\u6709"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5185\u5305\u542b",(0,r.jsx)(e.code,{children:"cellee"}),"\u5c5e\u6027\u2014\u2014\u6307\u5411arguments\u5bf9\u8c61\u6240\u5728\u51fd\u6570\u7684\u6307\u9488\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function factorial(num){\n  if(num<=1){\n    return 1;\n  }else{\n    //\u5f85\u4f18\u5316\u70b9\uff1a\u82e5\u4fee\u6539\u51fd\u6570\u540d\uff0c\u6b64\u5904\u8fd8\u9700\u8981\u4fee\u6539\u3002\n    return num*factorial(num-1);\n  }\n}\n\nfunction factorial(num){\n  if(num<=1){\n    return 1;\n  }else{\n    //\u4f7f\u7528arguments.callee\u53ef\u4ee5\u8ba9\u51fd\u6570\u903b\u8f91\u4e0e\u51fd\u6570\u540d\u7ed3\u5076\n    //\uff08\u5373\uff1a\u65e0\u8bba\u51fd\u6570\u540d\u4fee\u6539\u4ec0\u4e48\uff0c\u90fd\u53ef\u4ee5\u5f15\u7528\u6b63\u786e\u7684\u51fd\u6570\uff09\n    return num*arguments.callee(num-1);\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"this"}),"\u6307\u5411\uff1a\u65b9\u6cd5\u8c03\u7528\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"window.color='red';\nlet o={\n  color:'blue'\n};\n\nfunction sayColor(){\n  console.log(this.color);\n}\nsayColor();//'red'\u2014\u2014\u8fd9\u91cc\u8c03\u7528\u65b9\u6cd5\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e3awindow\n\no.sayColor=sayColor;//\u628asayColor\u8d4b\u503c\u7ed9o\u540e\no.sayColor();//'blue'\u2014\u2014sayColor\u4e2d\u7684this.color\u76f8\u5f53\u4e8eo.color;\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"caller"}),"\u2014\u2014\u3010ES5\u3011\u7528\u4e8e\u8c03\u7528\u5f53\u524d\u51fd\u6570\u7684\u51fd\u6570\u3002\uff08\u5373\u8fd4\u56de\u5f15\u7528\u8be5\u51fd\u6570\u7684\u51fd\u6570\uff09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function outer(){\n  inner();\n}\n\nfunction inner(){\n  console.log(inner.caller);//\u663e\u793aouter()\u51fd\u6570\u7684\u4ee3\u7801\n  //\u82e5\u8981\u964d\u4f4e\u8026\u5408\u5ea6\u53ef\u5199\u6210\n  console.log(arguments.callee.caller);\n  //\u4e25\u683c\u6a21\u5f0f\u4e0barguments.callee\u4f1a\u62a5\u9519\uff0c\u4e14\u4e0d\u80fd\u7ed9caller\u8d4b\u503c\u3002\n}\nouter();\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"\u51fd\u6570\u8868\u8fbe\u5f0f",children:"\u51fd\u6570\u8868\u8fbe\u5f0f"}),"\n",(0,r.jsx)(e.p,{children:"\u3010\u683c\u5f0f\u3011"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const funcName=function (arg1,arg2,...args){\n  /* \u51fd\u6570\u5185\u5bb9 */\n};\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0e\u51fd\u6570\u58f0\u660e\u7b49\u4ef7"}),"\n",(0,r.jsx)(e.li,{children:"function\u5173\u952e\u5b57\u540e\u6ca1\u6709\u540d\u79f0\uff0c\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7\u53d8\u91cffuncName\u6765\u5f15\u7528\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u3010\u89c4\u8303\u3011\u672b\u5c3e\u662f\u6709",(0,r.jsx)(e.code,{children:";"})]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"\u7bad\u5934\u51fd\u6570",children:"\u7bad\u5934\u51fd\u6570"}),"\n",(0,r.jsx)(e.p,{children:"\u3010\u683c\u5f0f\u3011"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const arrFunc=(arg1,arg2,...args)=>{\n  /* \u51fd\u6570\u5185\u5bb9*/\n};\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4efb\u4f55\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u5730\u65b9\u90fd\u53ef\u4ee5\u4f7f\u7528\u7bad\u5934\u51fd\u6570"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u573a\u666f\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5d4c\u5165\u51fd\u6570\u7684\u573a\u666f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"let ints=[1,2,3];\nints.map((i)=>{return i+1});\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u4e0d\u7528\u62ec\u53f7\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u6ca1\u6709\u53c2\u6570\u6216\u6709\u591a\u4e2a\u53c2\u6570\u624d\u9700\u8981\u62ec\u53f7\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4e0d\u80fd\u4f7f\u7528",(0,r.jsx)(e.code,{children:"arguments"}),"\u3001",(0,r.jsx)(e.code,{children:"super"}),"\u548c",(0,r.jsx)(e.code,{children:"new.target"}),"\u5c5e\u6027\uff0c\u4e0d\u80fd\u7528\u505a\u6784\u9020\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"this\u6307\u5411\uff1a\u7bad\u5934\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u3002(\u7bad\u5934\u51fd\u6570\u4e2d\u7684this\u4f1a\u4fdd\u7559\u5b9a\u4e49\u8be5\u51fd\u6570\u65f6\u7684\u4e0a\u4e0b\u6587)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function King(){\n  this.royaltyName='Henry';\n  //this \u5f15\u7528King\u7684\u5b9e\u4f8b\n  setTimeout(()=>console.log(this.royaltyName),1000);\n}\n\nfunction Queen(){\n  this.royaltyName='Elizabeth';\n  //this \u5f15\u7528window\u5bf9\u8c61\n  setTimeout(function(){console.log(this.royaltyName)},1000);\n}\n\nnew King();//'Henry'\nnew Queen();//undefined\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"\u9ed8\u8ba4\u53c2\u6570\u503c",children:"\u9ed8\u8ba4\u53c2\u6570\u503c"}),"\n",(0,r.jsx)(e.h2,{id:"q\u51fd\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u53c2\u6570\u503c\u65f6\u53d1\u751f\u4e86\u4ec0\u4e48",children:"Q\uff1a\u51fd\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u53c2\u6570\u503c\u65f6\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"A\uff1a\u82e5\u53c2\u6570\u6307\u5b9a\u5bf9\u8c61\u4f5c\u4e3a\u9ed8\u8ba4\u53c2\u6570\u503c\u65f6\u3002\u4f1a\u4ee5\u9ed8\u8ba4\u53c2\u6570\u503c\u4e3a\u6a21\u7248\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'const person = {\n  name: "Lydia",\n  age: 21\n}\n\nconst changeAge = (x = { ...person }) => x.age += 1\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1\n  x.name = "Sarah"\n}\n\nchangeAge(person)\nchangeAgeAndName()//\u8be5\u8c03\u7528\u4e2d\u7684\u53c2\u6570x\u5c31\u4ee5person\u4e3a\u6a21\u7248new\u4e00\u4e2a\u65b0\u5bf9\u8c61\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"\u79c1\u6709\u53d8\u91cf",children:"\u79c1\u6709\u53d8\u91cf"}),"\n",(0,r.jsx)(e.h2,{id:"q\u5982\u4f55\u5728\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e2a\u79c1\u6709\u53d8\u91cf",children:"Q\uff1a\u5982\u4f55\u5728\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e2a\u79c1\u6709\u53d8\u91cf\uff1f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["A\uff1a\u4f7f\u7528",(0,r.jsx)(e.code,{children:"#"}),"\u4e3a\u524d\u7f00\u58f0\u660e\u79c1\u6709\u53d8\u91cf\uff08ES2020\uff09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"class Counter {\n  #number = 10\n\n  increment() {\n    this.#number++\n  }\n\n  getNum() {\n    return this.#number\n  }\n}\n\nconst counter = new Counter()\ncounter.increment()\n//\u5916\u90e8\u65e0\u6cd5\u8bbf\u95ee\u79c1\u6709\u53d8\u91cf\nconsole.log(counter.#number)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>a});var r=s(6540);const c={},i=r.createContext(c);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);