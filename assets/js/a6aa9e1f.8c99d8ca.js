"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[7643],{7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>n});var l=s(6540),a=s(9532),r=s(4848);const i=l.createContext(null);function n(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const n=function(e){let{content:t,isBlogPostPage:s}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,r.jsx)(i.Provider,{value:n,children:t})}function o(){const e=(0,l.useContext)(i);if(null===e)throw new a.dV("BlogPostProvider");return e}},6266:(e,t,s)=>{s.d(t,{i:()=>a});var l=s(4586);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,l.A)(),s=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,l.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:s,...e})}},5846:(e,t,s)=>{s.d(t,{W:()=>c});var l=s(6540),a=s(4586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const n={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),n}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const l=e.split("|");if(1===l.length)return l[0];l.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const a=s.select(t),r=s.pluralForms.indexOf(a);return l[Math.min(r,l.length-1)]}(s,t,e)}}},9829:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var l=s(1213),a=s(7559),r=s(5066),i=s(6540);var n=s(2886),o=s(1463),c=s(4164),d=s(8774),m=s(5797),g=s(8402);const h="blogGrid_xwTo",u="postGridItem_fn9U",p="itemTitle_KROK",x="itemTags_jaPw",j="itemDate_sfdN";var v=s(4848);const b={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},f={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},P=e=>{let{items:t}=e;return(0,v.jsx)(g.P.div,{className:h,variants:b,initial:"hidden",animate:"visible",children:t.map(((e,t)=>{let{content:s}=e;const{metadata:l,frontMatter:a}=s,{title:r}=a,{permalink:i,date:n,tags:o}=l,c=new Date(n),h=`${c.getFullYear()}-${("0"+(c.getMonth()+1)).slice(-2)}-${("0"+c.getDate()).slice(-2)}`;return(0,v.jsxs)(g.P.div,{className:u,variants:f,onMouseMove:e=>{e.currentTarget.style.setProperty("--mouse-x",`${e.clientX}px`),e.currentTarget.style.setProperty("--mouse-y",`${e.clientY}px`)},children:[(0,v.jsx)(d.A,{to:i,className:p,children:r}),(0,v.jsx)("div",{className:x,children:o.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,v.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"})}),o.slice(0,2).map(((e,t)=>{let{label:s,permalink:l}=e;return(0,v.jsxs)(v.Fragment,{children:[0!==t&&"/",(0,v.jsx)(m.A,{label:s,permalink:l,className:"tag"},l)]})}))]})}),(0,v.jsx)("div",{className:j,children:h})]},l.permalink)}))})};var y=s(4618);const T="blogTitle_hAYS",N="blogDescription_t6S0",w="blogList_IsD8",A="blogSwitchView_QVHE",_=e=>{const{metadata:t}=e,{blogDescription:s}=t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.be,{title:"Blog",description:s}),(0,v.jsx)(o.A,{tag:"blog_posts_list"})]})},k=e=>{let{viewType:t,toggleViewType:s}=e;return(0,v.jsxs)("div",{className:A,children:[(0,v.jsx)(r.In,{icon:"ph:list",width:"24",height:"24",onClick:()=>s("list"),color:"list"===t?"var(--ifm-color-primary)":"#ccc"}),(0,v.jsx)(r.In,{icon:"ph:grid-four",width:"24",height:"24",onClick:()=>s("grid"),color:"grid"===t?"var(--ifm-color-primary)":"#ccc"})]})},I=e=>{const{metadata:t,items:s}=e,{viewType:l,toggleViewType:a}=function(){const[e,t]=(0,i.useState)("list");return(0,i.useEffect)((()=>{t(localStorage.getItem("viewType")||"list")}),[]),{viewType:e,toggleViewType:(0,i.useCallback)((e=>{t(e),localStorage.setItem("viewType",e)}),[])}}(),r="list"===l,o="grid"===l;return(0,v.jsxs)(y.A,{children:[(0,v.jsx)("h2",{className:T,children:"\u535a\u5ba2"}),(0,v.jsx)("p",{className:N,children:"\u4ee3\u7801\u4eba\u751f\uff1a\u7f16\u7ec7\u6280\u672f\u4e0e\u751f\u6d3b\u7684\u535a\u5ba2\u4e4b\u65c5"}),(0,v.jsx)(k,{viewType:l,toggleViewType:a}),(0,v.jsx)("div",{className:"row",children:(0,v.jsx)("div",{className:"col col--12",children:(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)("div",{className:w,children:(0,v.jsx)(n.A,{items:s})}),o&&(0,v.jsx)(P,{items:s})]})})})]})},F=e=>(0,v.jsxs)(l.e3,{className:(0,c.A)(a.G.wrapper.blogPages,a.G.page.blogListPage),children:[(0,v.jsx)(_,{...e}),(0,v.jsx)(I,{...e})]})},2889:(e,t,s)=>{s.d(t,{A:()=>C});var l=s(7131),a=s(4164),r=s(6025);const i="article_y69D",n="cover_ksob",o="coverMask_km0g";var c=s(4848);const d=e=>{let{children:t,className:s}=e;const{frontMatter:d,assets:m}=(0,l.e)(),{withBaseUrl:g}=(0,r.hH)(),h=m.image??d.image;return(0,c.jsx)("article",{className:(0,a.A)(s,i),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:h&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("meta",{itemProp:"image",content:g(h,{absolute:!0})}),(0,c.jsx)("div",{className:n,children:(0,c.jsx)("div",{className:o,style:{backgroundImage:`url${h}`}})}),(0,c.jsx)("div",{style:{height:"120px"}})]})})};var m=s(440),g=s(5533);const h=e=>{let{children:t,className:s}=e;const{isBlogPostPage:r}=(0,l.e)();return(0,c.jsx)("div",{id:r?m.blogPostContainerID:void 0,className:(0,a.A)("markdown",s),itemProp:"articleBody",style:{position:"relative"},children:(0,c.jsx)(g.A,{children:t})})};var u=s(6266),p=s(5066),x=s(8774),j=s(1312);const v=()=>(0,c.jsx)("b",{children:(0,c.jsx)(j.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})}),b=e=>{const{blogPostTitle:t,...s}=e;return(0,c.jsxs)(x.A,{"aria-label":(0,j.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),style:{display:"flex",alignItems:"center",gap:"0.25rem"},...s,children:[(0,c.jsx)(v,{}),(0,c.jsx)(p.In,{icon:"ri:arrow-right-line"})]})};var f=s(5797),P=s(5846);const y="container_iJTo",T="date_ZxYJ",N="tagInfo_Ym7h",w="tagList_aAIV";function A(e){let{readingTime:t}=e;const s=(()=>{const{selectMessage:e}=(0,P.W)();return t=>{const s=Math.ceil(t);return e(s,(0,j.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}})();return(0,c.jsx)("span",{className:"truncate",children:s(t)})}const _=e=>{let{className:t}=e;const{metadata:s}=(0,l.e)(),{date:r,tags:i,readingTime:n}=s,o=i?.length>0,d=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,c.jsxs)("div",{className:(0,a.A)(y,"margin-bottom-md",t),children:[(0,c.jsxs)("div",{className:T,children:[(0,c.jsx)(p.In,{icon:"ri:calendar-line"}),(0,c.jsx)(DateTime,{data:r,formattedDate:(m=r,d.format(new Date(m)))})]}),o&&(0,c.jsxs)("div",{className:N,children:[(0,c.jsx)(p.In,{icon:"ri:price-tag-3-line"}),(0,c.jsx)("div",{className:(0,a.A)("truncate",w),children:i.slice(0,3).map(((e,t)=>{let{label:s,permalink:l}=e;return(0,c.jsxs)("div",{children:[0!==t&&"/",(0,c.jsx)(f.A,{label:s,permalink:l,className:"tag"})]},l)}))})]}),void 0!==n&&(0,c.jsxs)("div",{className:T,children:[(0,c.jsx)(p.In,{icon:"ri:time-line"}),(0,c.jsx)(A,{readingTime:n})]})]});var m},k={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_CYj5",blogPostInfo:"blogPostInfo_HuGF",blogPostInfoTags:"blogPostInfoTags_rGHT",blogPostAuthor:"blogPostAuthor_vaiQ",blogPostDetailsFull:"blogPostDetailsFull_DS_f",divider:"divider_DMLD"},I=()=>{const{metadata:e,isBlogPostPage:t}=(0,l.e)(),{hasTruncateMarker:s,tags:r,title:i,date:n,readingTime:o}=e,d=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),m=!t&&s,g=r?.length>0;return t?(0,c.jsx)("footer",{className:(0,a.A)("row docusaurus-mt-lg",t&&k.blogPostFooterDetailsFull),children:m&&(0,c.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":g}),children:(0,c.jsx)(b,{blogPostTitle:i,to:e.permalink})})}):(0,c.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,c.jsxs)("div",{className:k.blogPostInfo,children:[n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.In,{icon:"ri:calendar-line"}),(0,c.jsx)("time",{dateTime:n,className:k.blogPostDate,itemProp:"datePublished",children:(h=n,d.format(new Date(h)))})]}),g&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.In,{icon:"ri:price-tag-3-line"}),(0,c.jsx)("span",{className:k.blogPostInfoTags,children:r.map((e=>{let{label:t,permalink:s}=e;return(0,c.jsx)(f.A,{label:t,permalink:s},s)}))})]}),o&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.In,{icon:"ri:time-line"}),(0,c.jsx)("span",{className:(0,a.A)(k.blogPostReadTime,"blog__readingTime"),children:(0,c.jsx)(A,{readingTime:o})})]}),m&&(0,c.jsx)("div",{className:(0,a.A)("readMore",{"col--3":g}),children:(0,c.jsx)(b,{blogPostTitle:i,to:e.permalink})})]})});var h},F={titleLink:"titleLink_BX2g"},D=e=>{let{className:t}=e;const{metadata:s,isBlogPostPage:r}=(0,l.e)(),{permalink:i,title:n}=s,o=r?"h1":"h2";return(0,c.jsx)(o,{className:(0,a.A)(F.title,t),itemProp:"headline",children:r?n:(0,c.jsx)(x.A,{itemProp:"url",to:i,className:F.titleLink,children:n})})},M=()=>{const{isBlogPostPage:e}=(0,l.e)();return(0,c.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,c.jsx)(D,{}),e&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(_,{})})]})},C=e=>{let{children:t,className:s}=e;const r=(()=>{const{isBlogPostPage:e}=(0,l.e)();return e?"":"blog-card margin-bottom-lg"})();return(0,c.jsxs)(d,{className:(0,a.A)(r,s),children:[(0,c.jsx)(M,{}),(0,c.jsx)(h,{children:t}),(0,c.jsx)(I,{})]})}},2886:(e,t,s)=>{s.d(t,{A:()=>o});var l=s(7131),a=s(2889),r=s(8402),i=s(4848);const n={from:{opacity:.01,y:100},to:e=>({opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}})},o=e=>{let{items:t,component:s=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map(((e,t)=>{let{content:a}=e;return(0,i.jsx)(l.i,{content:a,children:(0,i.jsx)(r.P.div,{initial:"from",animate:"to",custom:t,viewport:{once:!0,amount:.8},variants:n,children:(0,i.jsx)(s,{children:(0,i.jsx)(a,{})})})},a.metadata.permalink)}))})}},4618:(e,t,s)=>{s.d(t,{A:()=>o});var l=s(781),a=s(4164);const r="containerWrapper_I0cV",i="myContainer_pGZb";var n=s(4848);const o=e=>{let{children:t,maxWidth:s,...o}=e;return(0,n.jsx)(l.A,{...o,children:(0,n.jsx)("div",{className:r,children:(0,n.jsx)("div",{className:(0,a.A)(i,"margin-vert--lg"),style:s?{maxWidth:`${s}px`}:{},children:(0,n.jsx)("main",{children:t})})})})}},5797:(e,t,s)=>{s.d(t,{A:()=>c});var l=s(8774),a=s(4164);const r="tag_b1dr",i="tagRegular_t85v",n="tagWithCount_ZJSN";var o=s(4848);const c=e=>{let{permalink:t,label:s,count:c,className:d}=e;return(0,o.jsxs)(l.A,{href:t,className:(0,a.A)(r,c?n:i,d),children:[s,c&&(0,o.jsx)("span",{children:c})]})}}}]);