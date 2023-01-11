"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[50883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"Guides/Index",id:"version-v4.11.x/Guides/Index",title:"Index",description:"Guides Table Of Contents",source:"@site/versioned_docs/version-v4.11.x/Guides/Index.md",sourceDirName:"Guides",slug:"/Guides/",permalink:"/website-next/docs/v4.11.x/Guides/",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Index.md",tags:[],version:"v4.11.x",frontMatter:{},sidebar:"docsSidebar",next:{title:"Benchmarking",permalink:"/website-next/docs/v4.11.x/Guides/Benchmarking"}},l={},u=[{value:"Guides Table Of Contents",id:"guides-table-of-contents",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"guides-table-of-contents"},"Guides Table Of Contents"),(0,r.kt)("a",{id:"guides-toc"}),(0,r.kt)("p",null,"This table of contents is in alphabetical order."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Benchmarking"},"Benchmarking"),": This guide introduces how to benchmark\napplications based on Fastify."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Contributing"},"Contributing"),": Details how to participate in the\ndevelopment of Fastify, and shows how to setup an environment compatible with\nthe project's code style."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Delay-Accepting-Requests"},"Delay Accepting Requests"),": A practical guide\non how to delay serving requests to specific routes until some condition is\nmet in your application. This guide focuses on solving the problem using\n",(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Hooks"},(0,r.kt)("inlineCode",{parentName:"a"},"Hooks")),", ",(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"Decorators")),",\nand ",(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Plugins"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugins")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Ecosystem"},"Ecosystem"),": Lists all core plugins and many known community\nplugins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Fluent-Schema"},"Fluent Schema"),": Shows how writing JSON Schema can be\nwritten with a fluent API and used in Fastify."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Getting-Started"},"Getting Started"),": Introduction tutorial for Fastify.\nThis is where beginners should start."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Migration-Guide-V4"},"Migration Guide (v4)"),": Details how to migrate to\nFastify v4 from earlier versions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Migration-Guide-V3"},"Migration Guide (v3)"),": Details how to migrate to\nFastify v3 from earlier versions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Plugins-Guide"},"Plugins Guide"),": An informal introduction to writing\nFastify plugins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Prototype-Poisoning"},"Prototype Poisoning"),": A description of how the\nprototype poisoning attack works and is mitigated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Recommendations"},"Recommendations"),": Recommendations for how to deploy\nFastify into production environments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Serverless"},"Serverless"),": Details on how to deploy Fastify applications\nin various Function as a Service (FaaS) environments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Style-Guide"},"Style Guide"),": Explains the writing style we use for the\nFastify documentation for those who want to contribute documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Testing"},"Testing"),": Explains how to write unit tests for Fastify\napplications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Guides/Write-Plugin"},"Write Plugin"),": A set of guidelines for what the Fastify\nteam considers good practices for writing a Fastify plugin.")))}d.isMDXComponent=!0}}]);