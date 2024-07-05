"use strict";(self.webpackChunkjv_blog=self.webpackChunkjv_blog||[]).push([[4813],{6535:(e,t,s)=>{s.d(t,{A:()=>v});var n=s(6540),a=s(4164),i=s(781),l=s(4581),r=s(8774),o=s(1312),c=s(6347),d=s(9169);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=s(4848);function h(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,a.A)(g.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,a.A)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,a.A)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:g.sidebarItem,children:(0,u.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(5600);function x(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function b(e){return(0,u.jsx)(p.GX,{component:x,props:e})}function j(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,u.jsx)(b,{sidebar:t}):(0,u.jsx)(h,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:n,...l}=e,r=t&&t.items.length>0;return(0,u.jsx)(i.A,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(j,{sidebar:t}),(0,u.jsx)("main",{className:(0,a.A)("col",{"col--7":r,"col--9 col--offset-1":!r}),children:n}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}},7108:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(6540);var n=s(4164),a=s(1312),i=s(5846),l=s(1213),r=s(7559),o=s(8774),c=s(6535),d=s(9022),m=s(4848);function g(e){const{metadata:t}=e,{previousPage:s,nextPage:n}=t;return(0,m.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,m.jsx)(d.A,{permalink:s,title:(0,m.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),n&&(0,m.jsx)(d.A,{permalink:n,title:(0,m.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}var u=s(1463),h=s(2886),p=s(996),x=s(1107);function b(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const s=b(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.be,{title:s,description:t.description}),(0,m.jsx)(u.A,{tag:"blog_tags_posts"})]})}function v(e){let{tag:t,items:s,sidebar:n,listMetadata:i}=e;const l=b(t);return(0,m.jsxs)(c.A,{sidebar:n,children:[t.unlisted&&(0,m.jsx)(p.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(x.A,{as:"h1",children:l}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(h.A,{items:s}),(0,m.jsx)(g,{metadata:i})]})}function f(e){return(0,m.jsxs)(l.e3,{className:(0,n.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(v,{...e})]})}},9022:(e,t,s)=>{s.d(t,{A:()=>l});s(6540);var n=s(4164),a=s(8774),i=s(4848);function l(e){const{permalink:t,title:s,subLabel:l,isNext:r}=e;return(0,i.jsxs)(a.A,{className:(0,n.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:s})]})}},996:(e,t,s)=>{s.d(t,{A:()=>u});s(6540);var n=s(4164),a=s(1312),i=s(5260),l=s(4848);function r(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(7559),m=s(7293);function g(e){let{className:t}=e;return(0,l.jsx)(m.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,n.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function u(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(g,{...e})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>r});var n=s(6540),a=s(9532),i=s(4848);const l=n.createContext(null);function r(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const r=function(e){let{content:t,isBlogPostPage:s}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,i.jsx)(l.Provider,{value:r,children:t})}function o(){const e=(0,n.useContext)(l);if(null===e)throw new a.dV("BlogPostProvider");return e}},6266:(e,t,s)=>{s.d(t,{i:()=>a});var n=s(4586);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,n.A)(),s=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,n.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:s,...e})}},5846:(e,t,s)=>{s.d(t,{W:()=>c});var n=s(6540),a=s(4586);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),r}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=s.select(t),i=s.pluralForms.indexOf(a);return n[Math.min(i,n.length-1)]}(s,t,e)}}},2889:(e,t,s)=>{s.d(t,{A:()=>B});var n=s(7131),a=s(4164),i=s(6025);const l="article_y69D",r="cover_ksob",o="coverMask_km0g";var c=s(4848);const d=e=>{let{children:t,className:s}=e;const{frontMatter:d,assets:m}=(0,n.e)(),{withBaseUrl:g}=(0,i.hH)(),u=m.image??d.image;return(0,c.jsx)("article",{className:(0,a.A)(s,l),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:u&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("meta",{itemProp:"image",content:g(u,{absolute:!0})}),(0,c.jsx)("div",{className:r,children:(0,c.jsx)("div",{className:o,style:{backgroundImage:`url${u}`}})}),(0,c.jsx)("div",{style:{height:"120px"}})]})})};var m=s(440),g=s(5533);const u=e=>{let{children:t,className:s}=e;const{isBlogPostPage:i}=(0,n.e)();return(0,c.jsx)("div",{id:i?m.blogPostContainerID:void 0,className:(0,a.A)("markdown",s),itemProp:"articleBody",style:{position:"relative"},children:(0,c.jsx)(g.A,{children:t})})};var h=s(6266),p=s(5066),x=s(8774),b=s(1312);const j=()=>(0,c.jsx)("b",{children:(0,c.jsx)(b.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})}),v=e=>{const{blogPostTitle:t,...s}=e;return(0,c.jsxs)(x.A,{"aria-label":(0,b.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),style:{display:"flex",alignItems:"center",gap:"0.25rem"},...s,children:[(0,c.jsx)(j,{}),(0,c.jsx)(p.In,{icon:"ri:arrow-right-line"})]})};var f=s(5797),A=s(5846);const P="container_iJTo",N="date_ZxYJ",_="tagInfo_Ym7h",T="tagList_aAIV";function k(e){let{readingTime:t}=e;const s=(()=>{const{selectMessage:e}=(0,A.W)();return t=>{const s=Math.ceil(t);return e(s,(0,b.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}})();return(0,c.jsx)("span",{className:"truncate",children:s(t)})}const I=e=>{let{className:t}=e;const{metadata:s}=(0,n.e)(),{date:i,tags:l,readingTime:r}=s,o=l?.length>0,d=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,c.jsxs)("div",{className:(0,a.A)(P,"margin-bottom-md",t),children:[(0,c.jsxs)("div",{className:N,children:[(0,c.jsx)(p.In,{icon:"ri:calendar-line"}),(0,c.jsx)(DateTime,{data:i,formattedDate:(m=i,d.format(new Date(m)))})]}),o&&(0,c.jsxs)("div",{className:_,children:[(0,c.jsx)(p.In,{icon:"ri:price-tag-3-line"}),(0,c.jsx)("div",{className:(0,a.A)("truncate",T),children:l.slice(0,3).map(((e,t)=>{let{label:s,permalink:n}=e;return(0,c.jsxs)("div",{children:[0!==t&&"/",(0,c.jsx)(f.A,{label:s,permalink:n,className:"tag"})]},n)}))})]}),void 0!==r&&(0,c.jsxs)("div",{className:N,children:[(0,c.jsx)(p.In,{icon:"ri:time-line"}),(0,c.jsx)(k,{readingTime:r})]})]});var m},w={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_CYj5",blogPostInfo:"blogPostInfo_HuGF",blogPostInfoTags:"blogPostInfoTags_rGHT",blogPostAuthor:"blogPostAuthor_vaiQ",blogPostDetailsFull:"blogPostDetailsFull_DS_f",divider:"divider_DMLD"},y=()=>{const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{hasTruncateMarker:s,tags:i,title:l,date:r,readingTime:o}=e,d=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),m=!t&&s,g=i?.length>0;return t?(0,c.jsx)("footer",{className:(0,a.A)("row docusaurus-mt-lg",t&&w.blogPostFooterDetailsFull),children:m&&(0,c.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":g}),children:(0,c.jsx)(v,{blogPostTitle:l,to:e.permalink})})}):(0,c.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,c.jsxs)("div",{className:w.blogPostInfo,children:[r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.In,{icon:"ri:calendar-line"}),(0,c.jsx)("time",{dateTime:r,className:w.blogPostDate,itemProp:"datePublished",children:(u=r,d.format(new Date(u)))})]}),g&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.In,{icon:"ri:price-tag-3-line"}),(0,c.jsx)("span",{className:w.blogPostInfoTags,children:i.map((e=>{let{label:t,permalink:s}=e;return(0,c.jsx)(f.A,{label:t,permalink:s},s)}))})]}),o&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.In,{icon:"ri:time-line"}),(0,c.jsx)("span",{className:(0,a.A)(w.blogPostReadTime,"blog__readingTime"),children:(0,c.jsx)(k,{readingTime:o})})]}),m&&(0,c.jsx)("div",{className:(0,a.A)("readMore",{"col--3":g}),children:(0,c.jsx)(v,{blogPostTitle:l,to:e.permalink})})]})});var u},F={titleLink:"titleLink_BX2g"},L=e=>{let{className:t}=e;const{metadata:s,isBlogPostPage:i}=(0,n.e)(),{permalink:l,title:r}=s,o=i?"h1":"h2";return(0,c.jsx)(o,{className:(0,a.A)(F.title,t),itemProp:"headline",children:i?r:(0,c.jsx)(x.A,{itemProp:"url",to:l,className:F.titleLink,children:r})})},M=()=>{const{isBlogPostPage:e}=(0,n.e)();return(0,c.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,c.jsx)(L,{}),e&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(I,{})})]})},B=e=>{let{children:t,className:s}=e;const i=(()=>{const{isBlogPostPage:e}=(0,n.e)();return e?"":"blog-card margin-bottom-lg"})();return(0,c.jsxs)(d,{className:(0,a.A)(i,s),children:[(0,c.jsx)(M,{}),(0,c.jsx)(u,{children:t}),(0,c.jsx)(y,{})]})}},2886:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(7131),a=s(2889),i=s(8402),l=s(4848);const r={from:{opacity:.01,y:100},to:e=>({opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}})},o=e=>{let{items:t,component:s=a.A}=e;return(0,l.jsx)(l.Fragment,{children:t.map(((e,t)=>{let{content:a}=e;return(0,l.jsx)(n.i,{content:a,children:(0,l.jsx)(i.P.div,{initial:"from",animate:"to",custom:t,viewport:{once:!0,amount:.8},variants:r,children:(0,l.jsx)(s,{children:(0,l.jsx)(a,{})})})},a.metadata.permalink)}))})}},5797:(e,t,s)=>{s.d(t,{A:()=>c});var n=s(8774),a=s(4164);const i="tag_b1dr",l="tagRegular_t85v",r="tagWithCount_ZJSN";var o=s(4848);const c=e=>{let{permalink:t,label:s,count:c,className:d}=e;return(0,o.jsxs)(n.A,{href:t,className:(0,a.A)(i,c?r:l,d),children:[s,c&&(0,o.jsx)("span",{children:c})]})}}}]);