"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[2751],{7074:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>t});var s=l(4848),r=l(8453);const i={id:"javascript-program-design-base-language",slug:"/javascript-program-design-base-language",title:"\u8bed\u8a00\u57fa\u7840",date:new Date("2022-05-10T00:00:00.000Z")},c="\u6570\u636e\u7c7b\u578b",a={id:"notes/javascript/JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1/javascript-program-design-base-language",title:"\u8bed\u8a00\u57fa\u7840",description:"Number\u7c7b\u578b",source:"@site/docs/notes/javascript/JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1/\u8bed\u8a00\u57fa\u7840.md",sourceDirName:"notes/javascript/JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1",slug:"/javascript-program-design-base-language",permalink:"/docs/javascript-program-design-base-language",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"javascript-program-design-base-language",slug:"/javascript-program-design-base-language",title:"\u8bed\u8a00\u57fa\u7840",date:"2022-05-10T00:00:00.000Z"},sidebar:"notes",previous:{title:"\u6a21\u5757",permalink:"/docs/javascript-program-design-module"},next:{title:"\u8fed\u4ee3\u5668\u4e0e\u751f\u6210\u5668",permalink:"/docs/javascript-program-design-generator"}},d={},t=[{value:"Number\u7c7b\u578b",id:"number\u7c7b\u578b",level:2},{value:"Q\uff1a\u6570\u503c\u8f6c\u6362\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b\uff1f",id:"q\u6570\u503c\u8f6c\u6362\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b",level:3},{value:"Q\uff1aparseInt\u5982\u4f55\u4f7f\u7528\uff1f",id:"qparseint\u5982\u4f55\u4f7f\u7528",level:3},{value:"Q\uff1aparseInt\u5339\u914d\u6d41\u7a0b\u662f\u4ec0\u4e48\uff1f",id:"qparseint\u5339\u914d\u6d41\u7a0b\u662f\u4ec0\u4e48",level:3},{value:"Q\uff1astring.raw\u662f\u4ec0\u4e48\uff1f\u600e\u4e48\u7528\uff1f",id:"qstringraw\u662f\u4ec0\u4e48\u600e\u4e48\u7528",level:3},{value:"Q\uff1aNumber.isNaN\u548cisNaN\u6709\u4f55\u533a\u522b\uff1f",id:"qnumberisnan\u548cisnan\u6709\u4f55\u533a\u522b",level:3},{value:"Symbol\u7c7b\u578b",id:"symbol\u7c7b\u578b",level:2},{value:"Q\uff1a\u662f\u4ec0\u4e48\uff1f",id:"q\u662f\u4ec0\u4e48",level:3},{value:"Q\uff1a\u80fd\u5e72\u5565\uff1f",id:"q\u80fd\u5e72\u5565",level:3},{value:"Q\uff1a\u5982\u4f55\u4f7f\u7528\uff1f",id:"q\u5982\u4f55\u4f7f\u7528",level:3},{value:"Q\uff1a\u80fd\u4e0d\u80fd\u7528object.keys()\u5c06\u5176\u904d\u5386\u51fa\u6765\uff1f",id:"q\u80fd\u4e0d\u80fd\u7528objectkeys\u5c06\u5176\u904d\u5386\u51fa\u6765",level:3},{value:"\u4e00\u5143\u64cd\u4f5c\u7b26",id:"\u4e00\u5143\u64cd\u4f5c\u7b26",level:2},{value:"Q\uff1a\u5982\u4f55\u533a\u5206\u5148\u589e\uff08\u51cf\uff09\u8fd8\u662f\u540e\u589e\uff08\u51cf\uff09\uff1f",id:"q\u5982\u4f55\u533a\u5206\u5148\u589e\u51cf\u8fd8\u662f\u540e\u589e\u51cf",level:3},{value:"Q\uff1a\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\u662f\u4ec0\u4e48\uff1f",id:"q\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\u662f\u4ec0\u4e48",level:2},{value:"return",id:"return",level:2},{value:"Q\uff1areturn\u81ea\u52a8\u6dfb\u52a0\u5206\u53f7\u89c4\u5219\u662f\u5565\uff1f",id:"qreturn\u81ea\u52a8\u6dfb\u52a0\u5206\u53f7\u89c4\u5219\u662f\u5565",level:3},{value:"for-in\u8bed\u53e5",id:"for-in\u8bed\u53e5",level:2},{value:"Q\uff1a\u80fd\u5e72\u561b\uff1f",id:"q\u80fd\u5e72\u561b",level:3},{value:"for-of\u8bed\u53e5",id:"for-of\u8bed\u53e5",level:2},{value:"Q\uff1a\u80fd\u5e72\u561b\uff1f",id:"q\u80fd\u5e72\u561b-1",level:3}];function o(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h2,{id:"number\u7c7b\u578b",children:"Number\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h3,{id:"q\u6570\u503c\u8f6c\u6362\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b",children:"Q\uff1a\u6570\u503c\u8f6c\u6362\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["A\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7528\u4e8e\u6240\u6709\u7c7b\u578b\u8f6c\u6362\uff1aNumber()"}),"\n",(0,s.jsx)(e.li,{children:"\u7528\u4e8e\u5b57\u7b26\u4e32\u8f6c\u6570\u503c\uff1aparseInt()\u3001parseFloat()\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"qparseint\u5982\u4f55\u4f7f\u7528",children:"Q\uff1aparseInt\u5982\u4f55\u4f7f\u7528\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"parseInt(string,format)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"string"}),"\uff1a\u5b57\u7b26\u4e32\uff08\u6700\u524d\u9762\u7684\u7a7a\u683c\u4f1a\u88ab\u5ffd\u7565\uff0c\u5373\u4ece\u7b2c\u4e00\u4e2a\u975e\u7a7a\u683c\u5b57\u7b26\u5f00\u59cb\u8f6c\u6362\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u51fa\u9519\u573a\u666f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8fd4\u56deNaN\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u539f\u56e0\u4e00\uff1a",(0,s.jsx)(e.code,{children:"string"}),"\u53c2\u6570\u4e0d\u662f\u6570\u503c\u5b57\u7b26\u3001\u52a0\u53f7\u6216\u51cf\u53f7\u3002\uff08",(0,s.jsx)(e.code,{children:"string"}),"\u4e3a\u7a7a\u5b57\u7b26\uff09"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"qparseint\u5339\u914d\u6d41\u7a0b\u662f\u4ec0\u4e48",children:"Q\uff1aparseInt\u5339\u914d\u6d41\u7a0b\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a\u4ece\u7b2c\u4e00\u4e2a\u5b57\u7b26\u662f\u6570\u503c\u5b57\u7b26\u3001\u52a0\u53f7\u6216\u51cf\u53f7\uff0c\u4f9d\u6b21\u68c0\u6d4b\u6bcf\u4e2a\u5b57\u7b26\uff0c\u76f4\u5230\u5b57\u7b26\u4e32\u672b\u5c3e\uff0c\u6216\u78b0\u5230\u975e\u6570\u503c\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"parseInt('1234blue')//1234\n\n//\u5c0f\u6570\u70b9\u4e0d\u662f\u6709\u6548\u7684\u6574\u6570\u5b57\u7b26\nparseInt('22.5')//22\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"qstringraw\u662f\u4ec0\u4e48\u600e\u4e48\u7528",children:"Q\uff1astring.raw\u662f\u4ec0\u4e48\uff1f\u600e\u4e48\u7528\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a\u76f4\u63a5\u83b7\u53d6\u539f\u59cb\u7684\u6a21\u677f\u5b57\u9762\u91cf\u5185\u5bb9(\u5982\u6362\u884c\u7b26\u6216 Unicode \u5b57\u7b26)\uff0c\u800c\u4e0d\u662f\u88ab\u8f6c \u6362\u540e\u7684\u5b57\u7b26\u8868\u793a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"console.log(`\\u00A9`); // \xa9\nconsole.log(String.raw`\\u00A9`); // \\u00A9\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u6362\u884c\u7b26\uff08",(0,s.jsx)(e.code,{children:"\\n"}),"\uff09\u5728\u8be5\u65b9\u6cd5\u4e2d\u4e0d\u4f1a\u8d77\u4f5c\u7528"]}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u573a\u666f\uff1a\u5904\u7406url\u65f6\uff0c\u9632\u6b62\u88ab\u8f6c\u6362\u6210\u7279\u6b8a\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const path = `C:\\Documents\\Projects\\table.html`\nString.raw`${path}`\n//"C:DocumentsProjects able.html"\nString.raw`C:\\Documents\\Projects\\table.html`\n//C:\\Documents\\Projects\\table.html\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"qnumberisnan\u548cisnan\u6709\u4f55\u533a\u522b",children:"Q\uff1aNumber.isNaN\u548cisNaN\u6709\u4f55\u533a\u522b\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["A\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Number.isNaN"}),"\uff1a\u68c0\u6d4b\u4f20\u9012\u7684\u503c\u662f\u5426\u4e3a\u6570\u5b57\u503c\u5e76\u4e14\u662f\u5426\u7b49\u4ef7\u4e8e ",(0,s.jsx)(e.code,{children:"NaN"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"isNaN"}),"\uff1a\u68c0\u6d4b\u4f60\u4f20\u9012\u7684\u503c\u662f\u5426\u4e00\u4e2a",(0,s.jsx)(e.code,{children:" number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"symbol\u7c7b\u578b",children:"Symbol\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h3,{id:"q\u662f\u4ec0\u4e48",children:"Q\uff1a\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A\uff1a\u662f\u539f\u59cb\u503c\uff0c\u4e14\u7b26\u53f7\u5b9e\u4f8b\u662f\u552f\u4e00\u3001\u4e0d\u53ef\u53d8\u7684\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"q\u80fd\u5e72\u5565",children:"Q\uff1a\u80fd\u5e72\u5565\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A\uff1a\u786e\u4fdd\u5bf9\u8c61\u5c5e\u6027\u4f7f\u7528\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u4e0d\u4f1a\u53d1\u751f\u5c5e\u6027\u51b2\u7a81\u7684\u5371\u9669\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"q\u5982\u4f55\u4f7f\u7528",children:"Q\uff1a\u5982\u4f55\u4f7f\u7528\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u5373\u4fbf\u4e24\u4e2a\u76f8\u540c\u7684Symbol\uff0c\u5f7c\u6b64\u5374\u4e0d\u76f8\u7b49"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"Symbol('test')!==Symbol('test')\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"q\u80fd\u4e0d\u80fd\u7528objectkeys\u5c06\u5176\u904d\u5386\u51fa\u6765",children:"Q\uff1a\u80fd\u4e0d\u80fd\u7528object.keys()\u5c06\u5176\u904d\u5386\u51fa\u6765\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["A\uff1a\u4e0d\u80fd\uff0c",(0,s.jsx)(e.code,{children:"Symbol"}),"\u7c7b\u578b\u662f\u4e0d\u53ef\u679a\u4e3e\u7684\u3002\u800c",(0,s.jsx)(e.code,{children:"Object.keys"}),"\u65b9\u6cd5\u8fd4\u56de\u5bf9\u8c61\u4e0a\u7684\u6240\u6709\u53ef\u679a\u4e3e\u7684\u952e\u5c5e\u6027\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const info = {\n  [Symbol('a')]: 'b'\n}\n\nconsole.log(info)//{Symbol('a'): 'b'}\nconsole.log(Object.keys(info))//[]\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u64cd\u4f5c\u7b26",children:"\u64cd\u4f5c\u7b26"}),"\n",(0,s.jsx)(e.h2,{id:"\u4e00\u5143\u64cd\u4f5c\u7b26",children:"\u4e00\u5143\u64cd\u4f5c\u7b26"}),"\n",(0,s.jsx)(e.h3,{id:"q\u5982\u4f55\u533a\u5206\u5148\u589e\u51cf\u8fd8\u662f\u540e\u589e\u51cf",children:"Q\uff1a\u5982\u4f55\u533a\u5206\u5148\u589e\uff08\u51cf\uff09\u8fd8\u662f\u540e\u589e\uff08\u51cf\uff09\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a\u770b\u7b26\u53f7\u4f4d\u7f6e\uff0c\u5728\u524d\u5219\u5148\uff0c\u5728\u540e\u5219\u8fc7\u540e\u518d\u5904\u7406"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"let number = 0\t\t\t // \u8f93\u51fa\t\tnumber\nconsole.log(number++)//\t 0\t\t\t\t1\nconsole.log(++number)//\t 2\t\t\t\t2\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u8fd0\u7b97\u7b26",children:"\u8fd0\u7b97\u7b26"}),"\n",(0,s.jsx)(e.h2,{id:"q\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\u662f\u4ec0\u4e48",children:"Q\uff1a\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A\uff1a\u4ece\u53f3\u5230\u5de6\u8fd8\u662f\u4ece\u5de6\u5f80\u53f3\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u8bed\u53e5",children:"\u8bed\u53e5"}),"\n",(0,s.jsx)(e.h2,{id:"return",children:"return"}),"\n",(0,s.jsx)(e.h3,{id:"qreturn\u81ea\u52a8\u6dfb\u52a0\u5206\u53f7\u89c4\u5219\u662f\u5565",children:"Q\uff1areturn\u81ea\u52a8\u6dfb\u52a0\u5206\u53f7\u89c4\u5219\u662f\u5565\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a\u5bf9\u4e8e\u6362\u884creturn\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5206\u53f7"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function nums(a, b) {\n  if\n  (a > b)\n  console.log('a is bigger')\n  else \n  console.log('b is bigger')\n  return \n  a + b\n}\n//\u76f8\u5f53\u4e8e\n//return;\n//a + b\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"for-in\u8bed\u53e5",children:"for-in\u8bed\u53e5"}),"\n",(0,s.jsx)(e.h3,{id:"q\u80fd\u5e72\u561b",children:"Q\uff1a\u80fd\u5e72\u561b\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a\u7528\u4e8e\u679a\u4e3e\u5bf9\u8c61\u4e2d\u7684\u975e\u7b26\u53f7\uff08Symbol\uff09\u952e\u7684\u5c5e\u6027\uff08\u5373\uff1a\u904d\u5386key\uff09"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u679a\u4e3e\u7684\u5bf9\u8c61\u662fnull\u6216undefined\uff0c\u5219\u4e0d\u6267\u884c\u5faa\u73af\u4f53\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4f1a\u904d\u5386\u6574\u4e2a\u5bf9\u8c61\u751a\u81f3\u539f\u578b\u4e2d\u7684\u5c5e\u6027"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u80fd\u4fdd\u8bc1\u8fd4\u56de\u5bf9\u8c61\u7684\u5c5e\u6027\u7684\u987a\u5e8f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"for-of\u8bed\u53e5",children:"for-of\u8bed\u53e5"}),"\n",(0,s.jsx)(e.h3,{id:"q\u80fd\u5e72\u561b-1",children:"Q\uff1a\u80fd\u5e72\u561b\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"A\uff1a\u7528\u4e8e\u904d\u5386\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u5143\u7d20\uff08\u5373\uff1a\u904d\u5386value\uff09"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u652f\u6301for-awit-of"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"async fun(){\n    for(let ele of arr){\n      await request(ele);\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>a});var s=l(6540);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);