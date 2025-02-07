"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[2861],{6192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>i});var c=s(4848),r=s(8453);const o={},l=void 0,t={id:"react/\u77e5\u8bc6\u5e93/\u5173\u4e8eReact.memo",title:"\u5173\u4e8eReact.memo",description:"React.memo \u662f React \u63d0\u4f9b\u7684\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff08HOC\uff09\uff0c\u7528\u4e8e\u4f18\u5316\u51fd\u6570\u7ec4\u4ef6\u7684\u6e32\u67d3\u6027\u80fd\u3002\u5b83\u7684\u4f5c\u7528\u662f\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7684\u6027\u80fd\u3002\u7528\u901a\u4fd7\u7684\u8bdd\u6765\u8bf4\uff0cReact.memo \u5c31\u50cf\u662f\u4e00\u4e2a\u201c\u7f13\u5b58\u201d\uff0c\u5b83\u4f1a\u8bb0\u4f4f\u7ec4\u4ef6\u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u53ea\u6709\u5728 props \u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002",source:"@site/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8eReact.memo.md",sourceDirName:"react/\u77e5\u8bc6\u5e93",slug:"/react/\u77e5\u8bc6\u5e93/\u5173\u4e8eReact.memo",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8eReact.memo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"react",previous:{title:"React\u72b6\u6001\u63d0\u5347",permalink:"/docs/react/\u77e5\u8bc6\u5e93/React\u72b6\u6001\u63d0\u5347"},next:{title:"\u5173\u4e8euseEffect\u548c useLayoutEffect",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseEffect\u548c useLayoutEffect"}},d={},i=[{value:"<strong>1. \u4ec0\u4e48\u662f <code>React.memo</code>\uff1f</strong>",id:"1-\u4ec0\u4e48\u662f-reactmemo",level:3},{value:"<strong>\u57fa\u672c\u7528\u6cd5\uff1a</strong>",id:"\u57fa\u672c\u7528\u6cd5",level:4},{value:"<strong>2. \u4e3a\u4ec0\u4e48\u9700\u8981 <code>React.memo</code>\uff1f</strong>",id:"2-\u4e3a\u4ec0\u4e48\u9700\u8981-reactmemo",level:3},{value:"<strong>3. \u4f7f\u7528 <code>React.memo</code> \u7684\u573a\u666f</strong>",id:"3-\u4f7f\u7528-reactmemo-\u7684\u573a\u666f",level:3},{value:"<strong>3.1 \u7eaf\u5c55\u793a\u7ec4\u4ef6</strong>",id:"31-\u7eaf\u5c55\u793a\u7ec4\u4ef6",level:4},{value:"<strong>3.2 \u9891\u7e41\u6e32\u67d3\u7684\u7ec4\u4ef6</strong>",id:"32-\u9891\u7e41\u6e32\u67d3\u7684\u7ec4\u4ef6",level:4},{value:"<strong>3.3 \u590d\u6742\u8ba1\u7b97\u7684\u7ec4\u4ef6</strong>",id:"33-\u590d\u6742\u8ba1\u7b97\u7684\u7ec4\u4ef6",level:4},{value:"<strong>4. \u4f7f\u7528 <code>React.memo</code> \u7684\u6ce8\u610f\u4e8b\u9879</strong>",id:"4-\u4f7f\u7528-reactmemo-\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"<strong>4.1 <code>props</code> \u7684\u6d45\u6bd4\u8f83</strong>",id:"41-props-\u7684\u6d45\u6bd4\u8f83",level:4},{value:"<strong>4.2 \u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570</strong>",id:"42-\u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570",level:4},{value:"<strong>4.3 \u4e0d\u8981\u6ee5\u7528 <code>React.memo</code></strong>",id:"43-\u4e0d\u8981\u6ee5\u7528-reactmemo",level:4},{value:"<strong>5. <code>React.memo</code> \u4e0e\u7c7b\u7ec4\u4ef6\u7684 <code>PureComponent</code></strong>",id:"5-reactmemo-\u4e0e\u7c7b\u7ec4\u4ef6\u7684-purecomponent",level:3},{value:"<strong>6. \u603b\u7ed3</strong>",id:"6-\u603b\u7ed3",level:3}];function a(e){const n={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"React.memo"})," \u662f React \u63d0\u4f9b\u7684\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff08HOC\uff09\uff0c\u7528\u4e8e\u4f18\u5316\u51fd\u6570\u7ec4\u4ef6\u7684\u6e32\u67d3\u6027\u80fd\u3002\u5b83\u7684\u4f5c\u7528\u662f",(0,c.jsx)(n.strong,{children:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3"}),"\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7684\u6027\u80fd\u3002\u7528\u901a\u4fd7\u7684\u8bdd\u6765\u8bf4\uff0c",(0,c.jsx)(n.code,{children:"React.memo"})," \u5c31\u50cf\u662f\u4e00\u4e2a\u201c\u7f13\u5b58\u201d\uff0c\u5b83\u4f1a\u8bb0\u4f4f\u7ec4\u4ef6\u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u53ea\u6709\u5728 ",(0,c.jsx)(n.code,{children:"props"})," \u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"1-\u4ec0\u4e48\u662f-reactmemo",children:(0,c.jsxs)(n.strong,{children:["1. \u4ec0\u4e48\u662f ",(0,c.jsx)(n.code,{children:"React.memo"}),"\uff1f"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"React.memo"})," \u662f\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u5b83\u5305\u88f9\u4e00\u4e2a\u51fd\u6570\u7ec4\u4ef6\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8fd9\u4e2a\u65b0\u7ec4\u4ef6\u4f1a\u5728 ",(0,c.jsx)(n.code,{children:"props"})," \u6ca1\u6709\u53d8\u5316\u65f6\uff0c\u76f4\u63a5\u590d\u7528\u4e0a\u4e00\u6b21\u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"\u57fa\u672c\u7528\u6cd5",children:(0,c.jsx)(n.strong,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nconst MyComponent = React.memo(function MyComponent(props) {\n  return <div>{props.text}</div>;\n});\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"2-\u4e3a\u4ec0\u4e48\u9700\u8981-reactmemo",children:(0,c.jsxs)(n.strong,{children:["2. \u4e3a\u4ec0\u4e48\u9700\u8981 ",(0,c.jsx)(n.code,{children:"React.memo"}),"\uff1f"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u6027\u80fd\u4f18\u5316"}),"\uff1a\u5728 React \u4e2d\uff0c\u7236\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u4f1a\u5bfc\u81f4\u6240\u6709\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u5373\u4f7f\u5b50\u7ec4\u4ef6\u7684 ",(0,c.jsx)(n.code,{children:"props"})," \u6ca1\u6709\u53d8\u5316\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3"}),"\uff1a\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"React.memo"}),"\uff0c\u53ef\u4ee5\u786e\u4fdd\u5b50\u7ec4\u4ef6\u53ea\u5728 ",(0,c.jsx)(n.code,{children:"props"})," \u53d8\u5316\u65f6\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"3-\u4f7f\u7528-reactmemo-\u7684\u573a\u666f",children:(0,c.jsxs)(n.strong,{children:["3. \u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"})," \u7684\u573a\u666f"]})}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e9b\u9002\u5408\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"})," \u7684\u573a\u666f\uff1a"]}),"\n",(0,c.jsx)(n.h4,{id:"31-\u7eaf\u5c55\u793a\u7ec4\u4ef6",children:(0,c.jsx)(n.strong,{children:"3.1 \u7eaf\u5c55\u793a\u7ec4\u4ef6"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u7ec4\u4ef6\u53ea\u4f9d\u8d56 ",(0,c.jsx)(n.code,{children:"props"})," \u6e32\u67d3 UI\uff0c\u4e14\u6ca1\u6709\u5185\u90e8\u72b6\u6001\u6216\u526f\u4f5c\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const UserInfo = React.memo(function UserInfo({ name, age }) {\n  return (\n    <div>\n      <p>Name: {name}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"32-\u9891\u7e41\u6e32\u67d3\u7684\u7ec4\u4ef6",children:(0,c.jsx)(n.strong,{children:"3.2 \u9891\u7e41\u6e32\u67d3\u7684\u7ec4\u4ef6"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u7ec4\u4ef6\u7684\u7236\u7ec4\u4ef6\u9891\u7e41\u91cd\u65b0\u6e32\u67d3\uff0c\u4f46\u5b50\u7ec4\u4ef6\u7684 ",(0,c.jsx)(n.code,{children:"props"})," \u5f88\u5c11\u53d8\u5316\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const ListItem = React.memo(function ListItem({ item }) {\n  return <li>{item.name}</li>;\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"33-\u590d\u6742\u8ba1\u7b97\u7684\u7ec4\u4ef6",children:(0,c.jsx)(n.strong,{children:"3.3 \u590d\u6742\u8ba1\u7b97\u7684\u7ec4\u4ef6"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u7ec4\u4ef6\u7684\u6e32\u67d3\u9700\u8981\u590d\u6742\u7684\u8ba1\u7b97\uff0c\u4e14\u8ba1\u7b97\u7ed3\u679c\u53ea\u4f9d\u8d56 ",(0,c.jsx)(n.code,{children:"props"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"})," \u907f\u514d\u91cd\u590d\u8ba1\u7b97\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {\n  const result = expensiveCalculation(data);\n  return <div>{result}</div>;\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"4-\u4f7f\u7528-reactmemo-\u7684\u6ce8\u610f\u4e8b\u9879",children:(0,c.jsxs)(n.strong,{children:["4. \u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"})," \u7684\u6ce8\u610f\u4e8b\u9879"]})}),"\n",(0,c.jsx)(n.h4,{id:"41-props-\u7684\u6d45\u6bd4\u8f83",children:(0,c.jsxs)(n.strong,{children:["4.1 ",(0,c.jsx)(n.code,{children:"props"})," \u7684\u6d45\u6bd4\u8f83"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"React.memo"})," \u9ed8\u8ba4\u4f7f\u7528\u6d45\u6bd4\u8f83\uff08shallow comparison\uff09\u6765\u5bf9\u6bd4 ",(0,c.jsx)(n.code,{children:"props"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c ",(0,c.jsx)(n.code,{children:"props"})," \u662f\u5bf9\u8c61\u6216\u6570\u7ec4\uff0c\u6d45\u6bd4\u8f83\u53ef\u80fd\u65e0\u6cd5\u68c0\u6d4b\u5230\u53d8\u5316\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const MyComponent = React.memo(function MyComponent({ config }) {\n  return <div>{config.value}</div>;\n});\n\n// \u5373\u4f7f config.value \u6ca1\u6709\u53d8\u5316\uff0cconfig \u5bf9\u8c61\u7684\u5f15\u7528\u53d8\u5316\u4e5f\u4f1a\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\n<MyComponent config={{ value: 1 }} />\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"42-\u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570",children:(0,c.jsx)(n.strong,{children:"4.2 \u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c ",(0,c.jsx)(n.code,{children:"props"})," \u662f\u590d\u6742\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u81ea\u5b9a\u4e49\u7684\u6bd4\u8f83\u51fd\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6bd4\u5982\uff1a","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const MyComponent = React.memo(\n  function MyComponent({ config }) {\n    return <div>{config.value}</div>;\n  },\n  (prevProps, nextProps) => {\n    // \u53ea\u6709 config.value \u53d8\u5316\u65f6\u624d\u91cd\u65b0\u6e32\u67d3\n    return prevProps.config.value === nextProps.config.value;\n  }\n);\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"43-\u4e0d\u8981\u6ee5\u7528-reactmemo",children:(0,c.jsxs)(n.strong,{children:["4.3 \u4e0d\u8981\u6ee5\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"})]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5bf9\u4e8e\u7b80\u5355\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"})," \u53ef\u80fd\u4e0d\u4f1a\u5e26\u6765\u660e\u663e\u7684\u6027\u80fd\u63d0\u5347\uff0c\u53cd\u800c\u4f1a\u589e\u52a0\u4ee3\u7801\u590d\u6742\u5ea6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u53ea\u6709\u5728\u786e\u5b9e\u9700\u8981\u4f18\u5316\u6027\u80fd\u65f6\u624d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"React.memo"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"5-reactmemo-\u4e0e\u7c7b\u7ec4\u4ef6\u7684-purecomponent",children:(0,c.jsxs)(n.strong,{children:["5. ",(0,c.jsx)(n.code,{children:"React.memo"})," \u4e0e\u7c7b\u7ec4\u4ef6\u7684 ",(0,c.jsx)(n.code,{children:"PureComponent"})]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"React.memo"})," \u662f\u51fd\u6570\u7ec4\u4ef6\u7684\u4f18\u5316\u5de5\u5177\uff0c\u7c7b\u4f3c\u4e8e\u7c7b\u7ec4\u4ef6\u7684 ",(0,c.jsx)(n.code,{children:"PureComponent"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"PureComponent"})," \u4f1a\u81ea\u52a8\u5bf9 ",(0,c.jsx)(n.code,{children:"props"})," \u548c ",(0,c.jsx)(n.code,{children:"state"})," \u8fdb\u884c\u6d45\u6bd4\u8f83\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"6-\u603b\u7ed3",children:(0,c.jsx)(n.strong,{children:"6. \u603b\u7ed3"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"React.memo"})," \u7684\u4f5c\u7528"]}),"\uff1a\u907f\u514d\u51fd\u6570\u7ec4\u4ef6\u5728 ",(0,c.jsx)(n.code,{children:"props"})," \u6ca1\u6709\u53d8\u5316\u65f6\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u9002\u7528\u573a\u666f"}),"\uff1a\u7eaf\u5c55\u793a\u7ec4\u4ef6\u3001\u9891\u7e41\u6e32\u67d3\u7684\u7ec4\u4ef6\u3001\u590d\u6742\u8ba1\u7b97\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879"}),"\uff1a\u9ed8\u8ba4\u4f7f\u7528\u6d45\u6bd4\u8f83\uff0c\u590d\u6742 ",(0,c.jsx)(n.code,{children:"props"})," \u9700\u8981\u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var c=s(6540);const r={},o=c.createContext(r);function l(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);