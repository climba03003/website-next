"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[42810],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={},i=void 0,o={unversionedId:"Reference/Lifecycle",id:"version-v3.29.x/Reference/Lifecycle",title:"Lifecycle",description:"Lifecycle",source:"@site/versioned_docs/version-v3.29.x/Reference/Lifecycle.md",sourceDirName:"Reference",slug:"/Reference/Lifecycle",permalink:"/website-next/docs/v3.29.x/Reference/Lifecycle",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Lifecycle.md",tags:[],version:"v3.29.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"LTS",permalink:"/website-next/docs/v3.29.x/Reference/LTS"},next:{title:"Logging",permalink:"/website-next/docs/v3.29.x/Reference/Logging"}},c={},s=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Reply Lifecycle",id:"reply-lifecycle",level:2}],p={toc:s};function f(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,l.kt)("p",null,"Following the schema of the internal lifecycle of Fastify."),(0,l.kt)("p",null,"On the right branch of every section there is the next phase of the lifecycle,\non the left branch there is the corresponding error code that will be generated\nif the parent throws an error ",(0,l.kt)("em",{parentName:"p"},"(note that all the errors are automatically\nhandled by Fastify)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Incoming Request\n  \u2502\n  \u2514\u2500\u25b6 Routing\n        \u2502\n        \u2514\u2500\u25b6 Instance Logger\n             \u2502\n   4**/5** \u25c0\u2500\u2534\u2500\u25b6 onRequest Hook\n                  \u2502\n        4**/5** \u25c0\u2500\u2534\u2500\u25b6 preParsing Hook\n                        \u2502\n              4**/5** \u25c0\u2500\u2534\u2500\u25b6 Parsing\n                             \u2502\n                   4**/5** \u25c0\u2500\u2534\u2500\u25b6 preValidation Hook\n                                  \u2502\n                            400 \u25c0\u2500\u2534\u2500\u25b6 Validation\n                                        \u2502\n                              4**/5** \u25c0\u2500\u2534\u2500\u25b6 preHandler Hook\n                                              \u2502\n                                    4**/5** \u25c0\u2500\u2534\u2500\u25b6 User Handler\n                                                    \u2502\n                                                    \u2514\u2500\u25b6 Reply\n                                                          \u2502\n                                                4**/5** \u25c0\u2500\u2534\u2500\u25b6 preSerialization Hook\n                                                                \u2502\n                                                                \u2514\u2500\u25b6 onSend Hook\n                                                                      \u2502\n                                                            4**/5** \u25c0\u2500\u2534\u2500\u25b6 Outgoing Response\n                                                                            \u2502\n                                                                            \u2514\u2500\u25b6 onResponse Hook\n")),(0,l.kt)("p",null,"At any point before or during the ",(0,l.kt)("inlineCode",{parentName:"p"},"User Handler"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.hijack()")," can be called\nto prevent Fastify from:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Running all the following hooks and user handler"),(0,l.kt)("li",{parentName:"ul"},"Sending the response automatically")),(0,l.kt)("p",null,"NB (*): If ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.raw")," is used to send a response back to the user, ",(0,l.kt)("inlineCode",{parentName:"p"},"onResponse"),"\nhooks will still be executed"),(0,l.kt)("h2",{id:"reply-lifecycle"},"Reply Lifecycle"),(0,l.kt)("p",null,"Whenever the user handles the request, the result may be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in async handler: it returns a payload"),(0,l.kt)("li",{parentName:"ul"},"in async handler: it throws an ",(0,l.kt)("inlineCode",{parentName:"li"},"Error")),(0,l.kt)("li",{parentName:"ul"},"in sync handler: it sends a payload"),(0,l.kt)("li",{parentName:"ul"},"in sync handler: it sends an ",(0,l.kt)("inlineCode",{parentName:"li"},"Error")," instance")),(0,l.kt)("p",null,"If the reply was hijacked, we skip all the below steps. Otherwise, when it is\nbeing submitted, the data flow performed is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"                        \u2605 schema validation Error\n                                    \u2502\n                                    \u2514\u2500\u25b6 schemaErrorFormatter\n                                               \u2502\n                          reply sent \u25c0\u2500\u2500 JSON \u2500\u2534\u2500 Error instance\n                                                      \u2502\n                                                      \u2502         \u2605 throw an Error\n                     \u2605 send or return                 \u2502                 \u2502\n                            \u2502                         \u2502                 \u2502\n                            \u2502                         \u25bc                 \u2502\n       reply sent \u25c0\u2500\u2500 JSON \u2500\u2534\u2500 Error instance \u2500\u2500\u25b6 setErrorHandler \u25c0\u2500\u2500\u2500\u2500\u2500\u2518\n                                                      \u2502\n                                 reply sent \u25c0\u2500\u2500 JSON \u2500\u2534\u2500 Error instance \u2500\u2500\u25b6 onError Hook\n                                                                                \u2502\n                                                                                \u2514\u2500\u25b6 reply sent\n")),(0,l.kt)("p",null,"Note: ",(0,l.kt)("inlineCode",{parentName:"p"},"reply sent")," means that the JSON payload will be serialized by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("a",{parentName:"li",href:"/website-next/docs/v3.29.x/Reference/Server#setreplyserializer"},"reply serialized")," if set"),(0,l.kt)("li",{parentName:"ul"},"or by the ",(0,l.kt)("a",{parentName:"li",href:"/website-next/docs/v3.29.x/Reference/Server#setserializercompiler"},"serializer compiler")," when a JSON\nschema has been set for the returning HTTP status code"),(0,l.kt)("li",{parentName:"ul"},"or by the default ",(0,l.kt)("inlineCode",{parentName:"li"},"JSON.stringify")," function")))}f.isMDXComponent=!0}}]);