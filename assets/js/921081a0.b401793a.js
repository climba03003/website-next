"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[76675],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(m,i(i({ref:t},f),{},{components:a})):n.createElement(m,i({ref:t},f))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"Reference/Index",id:"version-latest/Reference/Index",title:"Index",description:"Core Documents",source:"@site/versioned_docs/version-latest/Reference/Index.md",sourceDirName:"Reference",slug:"/Reference/",permalink:"/website-next/docs/latest/Reference/",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Index.md",tags:[],version:"latest",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Write-Type-Provider",permalink:"/website-next/docs/latest/Guides/Write-Type-Provider"},next:{title:"ContentTypeParser",permalink:"/website-next/docs/latest/Reference/ContentTypeParser"}},l={},c=[{value:"Core Documents",id:"core-documents",level:2},{value:"Reference Documentation Table Of Contents",id:"reference-documentation-table-of-contents",level:2}],f={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"core-documents"},"Core Documents"),(0,r.kt)("a",{id:"reference-core-docs"}),(0,r.kt)("p",null,"For the full table of contents (TOC), see ",(0,r.kt)("a",{parentName:"p",href:"#reference-toc"},"below"),". The following\nlist is a subset of the full TOC that detail core Fastify APIs and concepts in\norder of most likely importance to the reader:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Server"},"Server"),": Documents the core Fastify API. Includes documentation\nfor the factory function and the object returned by the factory function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Lifecycle"},"Lifecycle"),": Explains the Fastify request lifecycle and\nillustrates where ",(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Hooks"},"Hooks")," are available for integrating with it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Routes"},"Routes"),": Details how to register routes with Fastify and how\nFastify builds and evaluates the routing trie."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Request"},"Request"),": Details Fastify's request object that is passed into\neach request handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Reply"},"Reply"),": Details Fastify's response object available to each\nrequest handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Validation-and-Serialization"},"Validation and Serialization"),": Details\nFastify's support for validating incoming data and how Fastify serializes data\nfor responses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Plugins"},"Plugins"),": Explains Fastify's plugin architecture and API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Encapsulation"},"Encapsulation"),": Explains a core concept upon which all\nFastify plugins are built."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Decorators"},"Decorators"),": Explains the server, request, and response\ndecorator APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Hooks"},"Hooks"),": Details the API by which Fastify plugins can inject\nthemselves into Fastify's handling of the request lifecycle.")),(0,r.kt)("h2",{id:"reference-documentation-table-of-contents"},"Reference Documentation Table Of Contents"),(0,r.kt)("a",{id:"reference-toc"}),(0,r.kt)("p",null,"This table of contents is in alphabetical order."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/ContentTypeParser"},"Content Type Parser"),": Documents Fastify's default\ncontent type parser and how to add support for new content types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Decorators"},"Decorators"),": Explains the server, request, and response\ndecorator APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Encapsulation"},"Encapsulation"),": Explains a core concept upon which all\nFastify plugins are built."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Errors"},"Errors"),": Details how Fastify handles errors and lists the\nstandard set of errors Fastify generates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Hooks"},"Hooks"),": Details the API by which Fastify plugins can inject\nthemselves into Fastify's handling of the request lifecycle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/HTTP2"},"HTTP2"),": Details Fastify's HTTP2 support."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Lifecycle"},"Lifecycle"),": Explains the Fastify request lifecycle and\nillustrates where ",(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Hooks"},"Hooks")," are available for integrating with it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Logging"},"Logging"),": Details Fastify's included logging and how to\ncustomize it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/LTS"},"Long Term Support"),": Explains Fastify's long term support (LTS)\nguarantee and the exceptions possible to the ",(0,r.kt)("a",{parentName:"li",href:"https://semver.org"},"semver"),"\ncontract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Middleware"},"Middleware"),": Details Fastify's support for Express.js style\nmiddleware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Plugins"},"Plugins"),": Explains Fastify's plugin architecture and API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Reply"},"Reply"),": Details Fastify's response object available to each\nrequest handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Request"},"Request"),": Details Fastify's request object that is passed into\neach request handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Routes"},"Routes"),": Details how to register routes with Fastify and how\nFastify builds and evaluates the routing trie."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Server"},"Server"),": Documents the core Fastify API. Includes documentation\nfor the factory function and the object returned by the factory function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/TypeScript"},"TypeScript"),": Documents Fastify's TypeScript support and\nprovides recommendations for writing applications in TypeScript that utilize\nFastify."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Validation-and-Serialization"},"Validation and Serialization"),": Details\nFastify's support for validating incoming data and how Fastify serializes data\nfor responses.")))}p.isMDXComponent=!0}}]);