"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[28288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,i={unversionedId:"Reference/HTTP2",id:"version-v4.0.x/Reference/HTTP2",title:"HTTP2",description:"HTTP2",source:"@site/versioned_docs/version-v4.0.x/Reference/HTTP2.md",sourceDirName:"Reference",slug:"/Reference/HTTP2",permalink:"/website-next/docs/v4.0.x/Reference/HTTP2",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/HTTP2.md",tags:[],version:"v4.0.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Errors",permalink:"/website-next/docs/v4.0.x/Reference/Errors"},next:{title:"Hooks",permalink:"/website-next/docs/v4.0.x/Reference/Hooks"}},p={},l=[{value:"HTTP2",id:"http2",level:2},{value:"Secure (HTTPS)",id:"secure-https",level:3},{value:"Plain or insecure",id:"plain-or-insecure",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"http2"},"HTTP2"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fastify")," offers ",(0,o.kt)("strong",{parentName:"p"},"experimental support")," for HTTP2 starting from Node 8 LTS,\nwhich includes HTTP2 without a flag; HTTP2 is supported over either HTTPS or\nplaintext."),(0,o.kt)("p",null,"Currently, none of the HTTP2-specific APIs are available through ",(0,o.kt)("em",{parentName:"p"},"Fastify"),", but\nNode's ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," can be accessed through our ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply"),"\ninterface. PRs are welcome."),(0,o.kt)("h3",{id:"secure-https"},"Secure (HTTPS)"),(0,o.kt)("p",null,"HTTP2 is supported in all modern browsers ",(0,o.kt)("strong",{parentName:"p"},"only over a secure connection"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst fs = require('fs')\nconst path = require('path')\nconst fastify = require('fastify')({\n  http2: true,\n  https: {\n    key: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.key')),\n    cert: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.cert'))\n  }\n})\n\nfastify.get('/', function (request, reply) {\n  reply.code(200).send({ hello: 'world' })\n})\n\nfastify.listen({ port: 3000 })\n")),(0,o.kt)("p",null,"ALPN negotiation allows support for both HTTPS and HTTP/2 over the same socket.\nNode core ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," objects can be either\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html"},"HTTP/1")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http2.html"},"HTTP/2"),". ",(0,o.kt)("em",{parentName:"p"},"Fastify")," supports this out of the\nbox:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst fs = require('fs')\nconst path = require('path')\nconst fastify = require('fastify')({\n  http2: true,\n  https: {\n    allowHTTP1: true, // fallback support for HTTP1\n    key: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.key')),\n    cert: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.cert'))\n  }\n})\n\n// this route can be accessed through both protocols\nfastify.get('/', function (request, reply) {\n  reply.code(200).send({ hello: 'world' })\n})\n\nfastify.listen({ port: 3000 })\n")),(0,o.kt)("p",null,"You can test your new server with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npx h2url https://localhost:3000\n")),(0,o.kt)("h3",{id:"plain-or-insecure"},"Plain or insecure"),(0,o.kt)("p",null,"If you are building microservices, you can connect to HTTP2 in plain text,\nhowever, this is not supported by browsers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst fastify = require('fastify')({\n  http2: true\n})\n\nfastify.get('/', function (request, reply) {\n  reply.code(200).send({ hello: 'world' })\n})\n\nfastify.listen({ port: 3000 })\n")),(0,o.kt)("p",null,"You can test your new server with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npx h2url http://localhost:3000\n")))}u.isMDXComponent=!0}}]);