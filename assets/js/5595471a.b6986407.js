"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[8230],{6528:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var r=s(4848),l=s(8453);const o={},c=void 0,i={id:"react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseMemo",title:"\u5173\u4e8euseMemo",description:"useMemo \u662f React \u63d0\u4f9b\u7684\u4e00\u4e2a Hook\uff0c\u7528\u4e8e\u4f18\u5316\u6027\u80fd\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u548c\u6e32\u67d3\u3002\u7528\u901a\u4fd7\u7684\u8bdd\u6765\u8bf4\uff0cuseMemo \u5c31\u50cf\u662f\u4e00\u4e2a\u201c\u7f13\u5b58\u201d\uff0c\u5b83\u4f1a\u8bb0\u4f4f\u67d0\u4e2a\u8ba1\u7b97\u7ed3\u679c\uff0c\u53ea\u6709\u5728\u4f9d\u8d56\u9879\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002",source:"@site/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseMemo.md",sourceDirName:"react/\u77e5\u8bc6\u5e93",slug:"/react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseMemo",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseMemo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"react",previous:{title:"\u5173\u4e8euseEffect\u548c useLayoutEffect",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseEffect\u548c useLayoutEffect"},next:{title:"\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6"}},d={},t=[{value:"<strong>1. \u4ec0\u4e48\u662f <code>useMemo</code>\uff1f</strong>",id:"1-\u4ec0\u4e48\u662f-usememo",level:3},{value:"<strong>\u57fa\u672c\u7528\u6cd5\uff1a</strong>",id:"\u57fa\u672c\u7528\u6cd5",level:4},{value:"<strong>2. \u4e3a\u4ec0\u4e48\u9700\u8981 <code>useMemo</code>\uff1f</strong>",id:"2-\u4e3a\u4ec0\u4e48\u9700\u8981-usememo",level:3},{value:"<strong>3. \u4f7f\u7528 <code>useMemo</code> \u7684\u573a\u666f</strong>",id:"3-\u4f7f\u7528-usememo-\u7684\u573a\u666f",level:3},{value:"<strong>3.1 \u590d\u6742\u8ba1\u7b97</strong>",id:"31-\u590d\u6742\u8ba1\u7b97",level:4},{value:"<strong>3.2 \u907f\u514d\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3</strong>",id:"32-\u907f\u514d\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3",level:4},{value:"<strong>3.3 \u4f18\u5316\u6e32\u67d3\u6027\u80fd</strong>",id:"33-\u4f18\u5316\u6e32\u67d3\u6027\u80fd",level:4},{value:"<strong>4. \u4f7f\u7528 <code>useMemo</code> \u7684\u6ce8\u610f\u4e8b\u9879</strong>",id:"4-\u4f7f\u7528-usememo-\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"<strong>4.1 \u4e0d\u8981\u6ee5\u7528 <code>useMemo</code></strong>",id:"41-\u4e0d\u8981\u6ee5\u7528-usememo",level:4},{value:"<strong>4.2 \u4f9d\u8d56\u9879\u6570\u7ec4</strong>",id:"42-\u4f9d\u8d56\u9879\u6570\u7ec4",level:4},{value:"<strong>4.3 \u4e0e <code>useEffect</code> \u7684\u533a\u522b</strong>",id:"43-\u4e0e-useeffect-\u7684\u533a\u522b",level:4},{value:"<strong>5. <code>useMemo</code> \u4e0e <code>React.memo</code> \u7684\u533a\u522b</strong>",id:"5-usememo-\u4e0e-reactmemo-\u7684\u533a\u522b",level:3},{value:"<strong>6. \u4ee3\u7801\u793a\u4f8b</strong>",id:"6-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"<strong>7. \u603b\u7ed3</strong>",id:"7-\u603b\u7ed3",level:3}];function u(e){const n={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useMemo"})," \u662f React \u63d0\u4f9b\u7684\u4e00\u4e2a Hook\uff0c\u7528\u4e8e\u4f18\u5316\u6027\u80fd\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u548c\u6e32\u67d3\u3002\u7528\u901a\u4fd7\u7684\u8bdd\u6765\u8bf4\uff0c",(0,r.jsx)(n.code,{children:"useMemo"})," \u5c31\u50cf\u662f\u4e00\u4e2a\u201c\u7f13\u5b58\u201d\uff0c\u5b83\u4f1a\u8bb0\u4f4f\u67d0\u4e2a\u8ba1\u7b97\u7ed3\u679c\uff0c\u53ea\u6709\u5728\u4f9d\u8d56\u9879\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"1-\u4ec0\u4e48\u662f-usememo",children:(0,r.jsxs)(n.strong,{children:["1. \u4ec0\u4e48\u662f ",(0,r.jsx)(n.code,{children:"useMemo"}),"\uff1f"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useMemo"})," \u662f\u4e00\u4e2a Hook\uff0c\u7528\u4e8e\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b83\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e00\u4e2a\u8ba1\u7b97\u51fd\u6570\uff08\u8fd4\u56de\u9700\u8981\u7f13\u5b58\u7684\u503c\uff09\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e00\u4e2a\u4f9d\u8d56\u9879\u6570\u7ec4\uff08\u53ea\u6709\u4f9d\u8d56\u9879\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\uff09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u57fa\u672c\u7528\u6cd5",children:(0,r.jsx)(n.strong,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"2-\u4e3a\u4ec0\u4e48\u9700\u8981-usememo",children:(0,r.jsxs)(n.strong,{children:["2. \u4e3a\u4ec0\u4e48\u9700\u8981 ",(0,r.jsx)(n.code,{children:"useMemo"}),"\uff1f"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6027\u80fd\u4f18\u5316"}),"\uff1a\u5728 React \u4e2d\uff0c\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u4f1a\u5bfc\u81f4\u6240\u6709\u903b\u8f91\u91cd\u65b0\u6267\u884c\uff0c\u5373\u4f7f\u67d0\u4e9b\u8ba1\u7b97\u7ed3\u679c\u6ca1\u6709\u53d8\u5316\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97"}),"\uff1a\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"useMemo"}),"\uff0c\u53ef\u4ee5\u786e\u4fdd\u53ea\u6709\u5728\u4f9d\u8d56\u9879\u53d8\u5316\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6027\u80fd\u5f00\u9500\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"3-\u4f7f\u7528-usememo-\u7684\u573a\u666f",children:(0,r.jsxs)(n.strong,{children:["3. \u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u7684\u573a\u666f"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e9b\u9002\u5408\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u7684\u573a\u666f\uff1a"]}),"\n",(0,r.jsx)(n.h4,{id:"31-\u590d\u6742\u8ba1\u7b97",children:(0,r.jsx)(n.strong,{children:"3.1 \u590d\u6742\u8ba1\u7b97"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u67d0\u4e2a\u8ba1\u7b97\u7ed3\u679c\u9700\u8981\u590d\u6742\u7684\u8ba1\u7b97\uff08\u5982\u6392\u5e8f\u3001\u8fc7\u6ee4\u3001\u6570\u5b66\u8fd0\u7b97\uff09\uff0c\u4e14\u8ba1\u7b97\u7ed3\u679c\u53ea\u4f9d\u8d56\u67d0\u4e9b\u53d8\u91cf\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const sortedList = useMemo(() => {\n  return largeList.sort((a, b) => a.value - b.value);\n}, [largeList]);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"32-\u907f\u514d\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3",children:(0,r.jsx)(n.strong,{children:"3.2 \u907f\u514d\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u7236\u7ec4\u4ef6\u4f20\u9012\u7684 ",(0,r.jsx)(n.code,{children:"props"})," \u662f\u8ba1\u7b97\u540e\u7684\u503c\uff0c\u4e14\u8fd9\u4e2a\u503c\u53ea\u5728\u67d0\u4e9b\u4f9d\u8d56\u9879\u53d8\u5316\u65f6\u624d\u53d8\u5316\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u907f\u514d\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const childProps = useMemo(() => {\n  return { value: computeValue(a, b) };\n}, [a, b]);\n\nreturn <ChildComponent {...childProps} />;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"33-\u4f18\u5316\u6e32\u67d3\u6027\u80fd",children:(0,r.jsx)(n.strong,{children:"3.3 \u4f18\u5316\u6e32\u67d3\u6027\u80fd"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u67d0\u4e2a\u503c\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u88ab\u591a\u6b21\u4f7f\u7528\uff0c\u4e14\u8ba1\u7b97\u6210\u672c\u8f83\u9ad8\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u7f13\u5b58\u8fd9\u4e2a\u503c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const formattedDate = useMemo(() => {\n  return formatDate(date);\n}, [date]);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"4-\u4f7f\u7528-usememo-\u7684\u6ce8\u610f\u4e8b\u9879",children:(0,r.jsxs)(n.strong,{children:["4. \u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u7684\u6ce8\u610f\u4e8b\u9879"]})}),"\n",(0,r.jsx)(n.h4,{id:"41-\u4e0d\u8981\u6ee5\u7528-usememo",children:(0,r.jsxs)(n.strong,{children:["4.1 \u4e0d\u8981\u6ee5\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useMemo"})," \u672c\u8eab\u4e5f\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f00\u9500\uff0c\u5982\u679c\u8ba1\u7b97\u975e\u5e38\u7b80\u5355\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u53ef\u80fd\u53cd\u800c\u4f1a\u964d\u4f4e\u6027\u80fd\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53ea\u6709\u5728\u786e\u5b9e\u9700\u8981\u4f18\u5316\u6027\u80fd\u65f6\u624d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"42-\u4f9d\u8d56\u9879\u6570\u7ec4",children:(0,r.jsx)(n.strong,{children:"4.2 \u4f9d\u8d56\u9879\u6570\u7ec4"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f9d\u8d56\u9879\u6570\u7ec4\u4e2d\u7684\u53d8\u91cf\u53d8\u5316\u65f6\uff0c",(0,r.jsx)(n.code,{children:"useMemo"})," \u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f9d\u8d56\u9879\u6570\u7ec4\u4e3a\u7a7a\uff0c",(0,r.jsx)(n.code,{children:"useMemo"})," \u53ea\u4f1a\u5728\u7ec4\u4ef6\u6302\u8f7d\u65f6\u8ba1\u7b97\u4e00\u6b21\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u7701\u7565\u4f9d\u8d56\u9879\u6570\u7ec4\uff0c",(0,r.jsx)(n.code,{children:"useMemo"})," \u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u91cd\u65b0\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"43-\u4e0e-useeffect-\u7684\u533a\u522b",children:(0,r.jsxs)(n.strong,{children:["4.3 \u4e0e ",(0,r.jsx)(n.code,{children:"useEffect"})," \u7684\u533a\u522b"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useMemo"})," \u7528\u4e8e\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u8fd4\u56de\u503c\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u6e32\u67d3\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useEffect"})," \u7528\u4e8e\u6267\u884c\u526f\u4f5c\u7528\uff08\u5982\u6570\u636e\u83b7\u53d6\u3001DOM \u64cd\u4f5c\uff09\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"5-usememo-\u4e0e-reactmemo-\u7684\u533a\u522b",children:(0,r.jsxs)(n.strong,{children:["5. ",(0,r.jsx)(n.code,{children:"useMemo"})," \u4e0e ",(0,r.jsx)(n.code,{children:"React.memo"})," \u7684\u533a\u522b"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useMemo"})}),"\uff1a\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"React.memo"})}),"\uff1a\u7f13\u5b58\u7ec4\u4ef6\u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"6-\u4ee3\u7801\u793a\u4f8b",children:(0,r.jsx)(n.strong,{children:"6. \u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\uff0c\u5c55\u793a\u5982\u4f55\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"useMemo"})," \u4f18\u5316\u6027\u80fd\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import React, { useMemo, useState } from 'react';\n\nfunction ExpensiveComponent({ list, filter }) {\n  // \u4f7f\u7528 useMemo \u7f13\u5b58\u8fc7\u6ee4\u540e\u7684\u5217\u8868\n  const filteredList = useMemo(() => {\n    return list.filter(item => item.value > filter);\n  }, [list, filter]);\n\n  return (\n    <ul>\n      {filteredList.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n\nfunction App() {\n  const [list, setList] = useState([\n    { id: 1, name: 'Apple', value: 10 },\n    { id: 2, name: 'Banana', value: 5 },\n    { id: 3, name: 'Orange', value: 8 },\n  ]);\n  const [filter, setFilter] = useState(0);\n\n  return (\n    <div>\n      <button onClick={() => setFilter(5)}>Filter > 5</button>\n      <ExpensiveComponent list={list} filter={filter} />\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"7-\u603b\u7ed3",children:(0,r.jsx)(n.strong,{children:"7. \u603b\u7ed3"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"useMemo"})," \u7684\u4f5c\u7528"]}),"\uff1a\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u548c\u6e32\u67d3\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9002\u7528\u573a\u666f"}),"\uff1a\u590d\u6742\u8ba1\u7b97\u3001\u907f\u514d\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3001\u4f18\u5316\u6e32\u67d3\u6027\u80fd\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879"}),"\uff1a\u4e0d\u8981\u6ee5\u7528\uff0c\u786e\u4fdd\u4f9d\u8d56\u9879\u6570\u7ec4\u6b63\u786e\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const l={},o=r.createContext(l);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);