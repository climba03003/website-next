"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[92821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={},s=void 0,o={unversionedId:"Guides/Index",id:"version-latest/Guides/Index",title:"Index",description:"Guides Table Of Contents",source:"@site/versioned_docs/version-latest/Guides/Index.md",sourceDirName:"Guides",slug:"/Guides/",permalink:"/website-next/docs/latest/Guides/",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Index.md",tags:[],version:"latest",frontMatter:{},sidebar:"docsSidebar",next:{title:"Benchmarking",permalink:"/website-next/docs/latest/Guides/Benchmarking"}},l={},u=[{value:"Guides Table Of Contents",id:"guides-table-of-contents",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"guides-table-of-contents"},"Guides Table Of Contents"),(0,a.kt)("a",{id:"guides-toc"}),(0,a.kt)("p",null,"This table of contents is in alphabetical order."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Benchmarking"},"Benchmarking"),": This guide introduces how to benchmark\napplications based on Fastify."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Contributing"},"Contributing"),": Details how to participate in the\ndevelopment of Fastify, and shows how to setup an environment compatible with\nthe project's code style."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Delay-Accepting-Requests"},"Delay Accepting Requests"),": A practical guide\non how to delay serving requests to specific routes until some condition is\nmet in your application. This guide focuses on solving the problem using\n",(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Hooks"},(0,a.kt)("inlineCode",{parentName:"a"},"Hooks")),", ",(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Decorators"},(0,a.kt)("inlineCode",{parentName:"a"},"Decorators")),",\nand ",(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Plugins"},(0,a.kt)("inlineCode",{parentName:"a"},"Plugins")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Ecosystem"},"Ecosystem"),": Lists all core plugins and many known community\nplugins."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Fluent-Schema"},"Fluent Schema"),": Shows how writing JSON Schema can be\nwritten with a fluent API and used in Fastify."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Getting-Started"},"Getting Started"),": Introduction tutorial for Fastify.\nThis is where beginners should start."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Migration-Guide-V4"},"Migration Guide (v4)"),": Details how to migrate to\nFastify v4 from earlier versions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Migration-Guide-V3"},"Migration Guide (v3)"),": Details how to migrate to\nFastify v3 from earlier versions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Plugins-Guide"},"Plugins Guide"),": An informal introduction to writing\nFastify plugins."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Prototype-Poisoning"},"Prototype Poisoning"),": A description of how the\nprototype poisoning attack works and is mitigated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Recommendations"},"Recommendations"),": Recommendations for how to deploy\nFastify into production environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Serverless"},"Serverless"),": Details on how to deploy Fastify applications\nin various Function as a Service (FaaS) environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Style-Guide"},"Style Guide"),": Explains the writing style we use for the\nFastify documentation for those who want to contribute documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Testing"},"Testing"),": Explains how to write unit tests for Fastify\napplications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Guides/Write-Plugin"},"Write Plugin"),": A set of guidelines for what the Fastify\nteam considers good practices for writing a Fastify plugin.")))}d.isMDXComponent=!0}}]);