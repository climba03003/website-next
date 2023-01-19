"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[40258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,d=f["".concat(l,".").concat(g)]||f[g]||c[g]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"Documentation/Logging",id:"version-v1.14.x/Documentation/Logging",title:"Logging",description:"Logging",source:"@site/versioned_docs/version-v1.14.x/Documentation/Logging.md",sourceDirName:"Documentation",slug:"/Documentation/Logging",permalink:"/website-next/docs/v1.14.x/Documentation/Logging",draft:!1,tags:[],version:"v1.14.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Lifecycle",permalink:"/website-next/docs/v1.14.x/Documentation/Lifecycle"},next:{title:"Middlewares",permalink:"/website-next/docs/v1.14.x/Documentation/Middlewares"}},l={},p=[{value:"Logging",id:"logging",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging is disabled by default, and you can enable it by passing\n",(0,o.kt)("inlineCode",{parentName:"p"},"{ logger: true }")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"{ logger: { level: 'info' } }")," when you create\nthe fastify instance. Note that if the logger is disabled, it is impossible to\nenable it at runtime. We use\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/abstract-logging"},"abstract-logging")," for\nthis purpose."),(0,o.kt)("p",null,"Since Fastify is really focused on performances, it uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"pino")," as its logger, with the default log level, when enabled, set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'info'"),"."),(0,o.kt)("p",null,"Enabling the logger is extremely easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: true\n})\n\nfastify.get('/', options, function (request, reply) {\n  request.log.info('Some info about the current request')\n  reply.send({ hello: 'world' })\n})\n\n")),(0,o.kt)("p",null,"If you want to pass some options to the logger, just pass the logger option to Fastify.\nYou can find all the options in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino/blob/master/docs/api.md#pinooptions-stream"},"Pino documentation"),". If you want to pass a custom stream to the Pino instance, just add the stream field to the logger object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const split = require('split2')\nconst stream = split(JSON.parse)\n\nconst fastify = require('fastify')({\n  logger: {\n    level: 'info',\n    stream: stream\n  }\n})\n\nfastify.get('/', options, function (request, reply) {\n  request.log.info('Some info about the current request')\n  reply.send({ hello: 'world' })\n})\n\n")),(0,o.kt)("a",{name:"logging-request-id"}),(0,o.kt)("p",null,'By default fastify adds an id to every request for easier tracking. If the "request-id" header is present its value is used, otherwise a new incremental id is generated. See Fastify Factory ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Server.md#factory-request-id-header"},(0,o.kt)("inlineCode",{parentName:"a"},"requestIdHeader"))," options for customizing that header name.\nAdditionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"genReqId")," option can be used for generating the request id by yourself. It will received the incoming request as a parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0\nconst fastify = require('fastify')({\n  logger: {\n    genReqId: function (req) { return i++ }\n  }\n})\n\n")),(0,o.kt)("p",null,"The default logger is configured with a set of standard serializers that serialize objects with ",(0,o.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"res"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," properties. This behavior can be customized by specifying custom serializers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n    serializers: {\n      req: function (req) {\n        return { url: req.url }\n      }\n    }\n  }\n})\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This option will be ignored by any logger other than Pino.")),(0,o.kt)("p",null,"You can also supply your own logger instance. Instead of passing configuration options, simply pass the instance.\nThe logger you supply must conform to the Pino interface; that is, it must have the following methods:\n",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"child"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const log = require('pino')({ level: 'info' })\nconst fastify = require('fastify')({ logger: log })\n\nlog.info('does not have request information')\n\nfastify.get('/', function (request, reply) {\n  request.log.info('includes request information, but is the same logger instance as `log`')\n  reply.send({ hello: 'world' })\n})\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The logger instance for the current request is available in every part of the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/fastify/fastify/blob/master/docs/Lifecycle.md"},"lifecycle"),".")))}c.isMDXComponent=!0}}]);