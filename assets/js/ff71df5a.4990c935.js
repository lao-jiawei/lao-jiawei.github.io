"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[3039],{4670:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var l=s(4848),r=s(8453);const i={},c=void 0,d={id:"react/\u77e5\u8bc6\u5e93/\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6",title:"\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6",description:"React \u51fd\u6570\u7ec4\u4ef6\u548c\u7c7b\u7ec4\u4ef6\u7684\u533a\u522b\u3002",source:"@site/docs/react/\u77e5\u8bc6\u5e93/\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6.md",sourceDirName:"react/\u77e5\u8bc6\u5e93",slug:"/react/\u77e5\u8bc6\u5e93/\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"react",previous:{title:"\u5173\u4e8euseEffect\u548c useLayoutEffect",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u5173\u4e8euseEffect\u548c useLayoutEffect"},next:{title:"\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f",permalink:"/docs/react/\u77e5\u8bc6\u5e93/\u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f"}},t={},o=[{value:"<strong>1. \u57fa\u672c\u5b9a\u4e49</strong>",id:"1-\u57fa\u672c\u5b9a\u4e49",level:3},{value:"<strong>2. \u4ee3\u7801\u7ed3\u6784\u5bf9\u6bd4</strong>",id:"2-\u4ee3\u7801\u7ed3\u6784\u5bf9\u6bd4",level:3},{value:"<strong>\u51fd\u6570\u7ec4\u4ef6</strong>",id:"\u51fd\u6570\u7ec4\u4ef6",level:4},{value:"<strong>\u7c7b\u7ec4\u4ef6</strong>",id:"\u7c7b\u7ec4\u4ef6",level:4},{value:"<strong>3. \u6838\u5fc3\u533a\u522b</strong>",id:"3-\u6838\u5fc3\u533a\u522b",level:3},{value:"<strong>(1) \u72b6\u6001\u7ba1\u7406</strong>",id:"1-\u72b6\u6001\u7ba1\u7406",level:4},{value:"<strong>(2) \u751f\u547d\u5468\u671f</strong>",id:"2-\u751f\u547d\u5468\u671f",level:4},{value:"<strong>(3) <code>this</code> \u7ed1\u5b9a</strong>",id:"3-this-\u7ed1\u5b9a",level:4},{value:"<strong>(4) \u4ee3\u7801\u7b80\u6d01\u6027</strong>",id:"4-\u4ee3\u7801\u7b80\u6d01\u6027",level:4},{value:"<strong>(5) \u6027\u80fd</strong>",id:"5-\u6027\u80fd",level:4},{value:"<strong>4. \u5982\u4f55\u9009\u62e9\uff1f</strong>",id:"4-\u5982\u4f55\u9009\u62e9",level:3},{value:"<strong>5. \u603b\u7ed3</strong>",id:"5-\u603b\u7ed3",level:3},{value:"<strong>6. \u8d8b\u52bf</strong>",id:"6-\u8d8b\u52bf",level:3}];function h(n){const e={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"React \u51fd\u6570\u7ec4\u4ef6\u548c\u7c7b\u7ec4\u4ef6\u7684\u533a\u522b\u3002"}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"1-\u57fa\u672c\u5b9a\u4e49",children:(0,l.jsx)(e.strong,{children:"1. \u57fa\u672c\u5b9a\u4e49"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a\u5c31\u662f\u4e00\u4e2a JavaScript \u51fd\u6570\uff0c\u63a5\u6536 ",(0,l.jsx)(e.code,{children:"props"})," \u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de JSX\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"}),"\uff1a\u662f\u4e00\u4e2a JavaScript \u7c7b\uff0c\u7ee7\u627f\u81ea ",(0,l.jsx)(e.code,{children:"React.Component"}),"\uff0c\u5fc5\u987b\u5b9e\u73b0 ",(0,l.jsx)(e.code,{children:"render"})," \u65b9\u6cd5\uff0c\u8fd4\u56de JSX\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"2-\u4ee3\u7801\u7ed3\u6784\u5bf9\u6bd4",children:(0,l.jsx)(e.strong,{children:"2. \u4ee3\u7801\u7ed3\u6784\u5bf9\u6bd4"})}),"\n",(0,l.jsx)(e.h4,{id:"\u51fd\u6570\u7ec4\u4ef6",children:(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"function MyComponent(props) {\n  return <div>Hello, {props.name}!</div>;\n}\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u7c7b\u7ec4\u4ef6",children:(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"class MyComponent extends React.Component {\n  render() {\n    return <div>Hello, {this.props.name}!</div>;\n  }\n}\n"})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"3-\u6838\u5fc3\u533a\u522b",children:(0,l.jsx)(e.strong,{children:"3. \u6838\u5fc3\u533a\u522b"})}),"\n",(0,l.jsx)(e.h4,{id:"1-\u72b6\u6001\u7ba1\u7406",children:(0,l.jsx)(e.strong,{children:"(1) \u72b6\u6001\u7ba1\u7406"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u4ee5\u524d\u6ca1\u6709\u72b6\u6001\u7ba1\u7406\u80fd\u529b\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"props"})," \u63a5\u6536\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u73b0\u5728\u6709\u4e86 ",(0,l.jsx)(e.strong,{children:"Hooks"}),"\uff08\u5982 ",(0,l.jsx)(e.code,{children:"useState"}),"\uff09\uff0c\u53ef\u4ee5\u7ba1\u7406\u72b6\u6001\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u793a\u4f8b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"function MyComponent() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"this.state"})," \u7ba1\u7406\u72b6\u6001\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"this.setState"})," \u66f4\u65b0\u72b6\u6001\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u793a\u4f8b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"class MyComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"2-\u751f\u547d\u5468\u671f",children:(0,l.jsx)(e.strong,{children:"(2) \u751f\u547d\u5468\u671f"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ee5\u524d\u6ca1\u6709\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u73b0\u5728\u901a\u8fc7 ",(0,l.jsx)(e.strong,{children:"Hooks"}),"\uff08\u5982 ",(0,l.jsx)(e.code,{children:"useEffect"}),"\uff09\u6a21\u62df\u751f\u547d\u5468\u671f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u793a\u4f8b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"function MyComponent() {\n  useEffect(() => {\n    console.log('Component mounted or updated');\n    return () => {\n      console.log('Component will unmount');\n    };\n  }, []); // \u7a7a\u6570\u7ec4\u8868\u793a\u53ea\u5728\u7ec4\u4ef6\u6302\u8f7d\u548c\u5378\u8f7d\u65f6\u6267\u884c\n  return <div>Hello, World!</div>;\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6709\u5b8c\u6574\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u5982 ",(0,l.jsx)(e.code,{children:"componentDidMount"}),"\u3001",(0,l.jsx)(e.code,{children:"componentDidUpdate"}),"\u3001",(0,l.jsx)(e.code,{children:"componentWillUnmount"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u793a\u4f8b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"class MyComponent extends React.Component {\n  componentDidMount() {\n    console.log('Component mounted');\n  }\n\n  componentDidUpdate() {\n    console.log('Component updated');\n  }\n\n  componentWillUnmount() {\n    console.log('Component will unmount');\n  }\n\n  render() {\n    return <div>Hello, World!</div>;\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"3-this-\u7ed1\u5b9a",children:(0,l.jsxs)(e.strong,{children:["(3) ",(0,l.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6ca1\u6709 ",(0,l.jsx)(e.code,{children:"this"}),"\uff0c\u76f4\u63a5\u4f7f\u7528\u53d8\u91cf\u548c\u51fd\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u793a\u4f8b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"function MyComponent() {\n  const handleClick = () => {\n    console.log('Button clicked');\n  };\n  return <button onClick={handleClick}>Click Me</button>;\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u9700\u8981\u5904\u7406 ",(0,l.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a\u95ee\u9898\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u793a\u4f8b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"class MyComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    console.log('Button clicked');\n  }\n\n  render() {\n    return <button onClick={this.handleClick}>Click Me</button>;\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"4-\u4ee3\u7801\u7b80\u6d01\u6027",children:(0,l.jsx)(e.strong,{children:"(4) \u4ee3\u7801\u7b80\u6d01\u6027"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ee3\u7801\u66f4\u7b80\u6d01\uff0c\u903b\u8f91\u66f4\u6e05\u6670\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u9002\u5408\u5c0f\u578b\u7ec4\u4ef6\u6216\u903b\u8f91\u7b80\u5355\u7684\u573a\u666f\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u4ee3\u7801\u76f8\u5bf9\u5197\u957f\uff0c\u5c24\u5176\u662f\u9700\u8981\u5904\u7406 ",(0,l.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a\u548c\u751f\u547d\u5468\u671f\u65b9\u6cd5\u65f6\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u9002\u5408\u590d\u6742\u7ec4\u4ef6\u6216\u9700\u8981\u7cbe\u7ec6\u63a7\u5236\u751f\u547d\u5468\u671f\u7684\u573a\u666f\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h4,{id:"5-\u6027\u80fd",children:(0,l.jsx)(e.strong,{children:"(5) \u6027\u80fd"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u5e38\u6027\u80fd\u66f4\u597d\uff0c\u56e0\u4e3a\u51fd\u6570\u7ec4\u4ef6\u66f4\u8f7b\u91cf\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"React.memo"})," \u53ef\u4ee5\u8fdb\u4e00\u6b65\u4f18\u5316\u6027\u80fd\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6027\u80fd\u7a0d\u5dee\uff0c\u56e0\u4e3a\u7c7b\u7ec4\u4ef6\u9700\u8981\u5b9e\u4f8b\u5316\uff0c\u4e14\u751f\u547d\u5468\u671f\u65b9\u6cd5\u53ef\u80fd\u5f15\u5165\u989d\u5916\u5f00\u9500\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"4-\u5982\u4f55\u9009\u62e9",children:(0,l.jsx)(e.strong,{children:"4. \u5982\u4f55\u9009\u62e9\uff1f"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f18\u5148\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u903b\u8f91\u7b80\u5355\u3001\u72b6\u6001\u5c11\u3001\u4e0d\u9700\u8981\u590d\u6742\u751f\u547d\u5468\u671f\u7684\u573a\u666f\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 Hooks \u53ef\u4ee5\u8986\u76d6\u5927\u90e8\u5206\u9700\u6c42\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u4f7f\u7528\u7c7b\u7ec4\u4ef6"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u9700\u8981\u7cbe\u7ec6\u63a7\u5236\u751f\u547d\u5468\u671f\u7684\u573a\u666f\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u65e7\u9879\u76ee\u7ef4\u62a4\uff0c\u6216\u8005\u56e2\u961f\u4e60\u60ef\u4f7f\u7528\u7c7b\u7ec4\u4ef6\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"5-\u603b\u7ed3",children:(0,l.jsx)(e.strong,{children:"5. \u603b\u7ed3"})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u7279\u6027"}),(0,l.jsx)(e.th,{children:"\u51fd\u6570\u7ec4\u4ef6"}),(0,l.jsx)(e.th,{children:"\u7c7b\u7ec4\u4ef6"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.strong,{children:"\u72b6\u6001\u7ba1\u7406"})}),(0,l.jsxs)(e.td,{children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"useState"})]}),(0,l.jsxs)(e.td,{children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"this.state"})," \u548c ",(0,l.jsx)(e.code,{children:"this.setState"})]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.strong,{children:"\u751f\u547d\u5468\u671f"})}),(0,l.jsxs)(e.td,{children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"useEffect"})]}),(0,l.jsxs)(e.td,{children:["\u4f7f\u7528\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff08\u5982 ",(0,l.jsx)(e.code,{children:"componentDidMount"}),"\uff09"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsxs)(e.strong,{children:[(0,l.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a"]})}),(0,l.jsxs)(e.td,{children:["\u65e0 ",(0,l.jsx)(e.code,{children:"this"}),"\uff0c\u76f4\u63a5\u4f7f\u7528\u53d8\u91cf\u548c\u51fd\u6570"]}),(0,l.jsxs)(e.td,{children:["\u9700\u8981\u5904\u7406 ",(0,l.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.strong,{children:"\u4ee3\u7801\u7b80\u6d01\u6027"})}),(0,l.jsx)(e.td,{children:"\u66f4\u7b80\u6d01"}),(0,l.jsx)(e.td,{children:"\u76f8\u5bf9\u5197\u957f"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.strong,{children:"\u6027\u80fd"})}),(0,l.jsx)(e.td,{children:"\u66f4\u8f7b\u91cf\uff0c\u6027\u80fd\u66f4\u597d"}),(0,l.jsx)(e.td,{children:"\u7a0d\u5dee"})]})]})]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"6-\u8d8b\u52bf",children:(0,l.jsx)(e.strong,{children:"6. \u8d8b\u52bf"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u51fd\u6570\u7ec4\u4ef6 + Hooks"})," \u662f React \u7684\u672a\u6765\uff0c\u5b98\u65b9\u63a8\u8350\u4f18\u5148\u4f7f\u7528\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u7c7b\u7ec4\u4ef6\u4ecd\u7136\u6709\u7528\uff0c\u5c24\u5176\u662f\u5728\u7ef4\u62a4\u65e7\u4ee3\u7801\u65f6\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.hr,{})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var l=s(6540);const r={},i=l.createContext(r);function c(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);