"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[71332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},s=void 0,o={unversionedId:"Documentation/Middleware",id:"version-v2.15.x/Documentation/Middleware",title:"Middleware",description:"Middleware",source:"@site/versioned_docs/version-v2.15.x/Documentation/Middleware.md",sourceDirName:"Documentation",slug:"/Documentation/Middleware",permalink:"/website-next/docs/v2.15.x/Documentation/Middleware",draft:!1,tags:[],version:"v2.15.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Logging",permalink:"/website-next/docs/v2.15.x/Documentation/Logging"},next:{title:"The hitchhiker's guide to plugins",permalink:"/website-next/docs/v2.15.x/Documentation/Plugins-Guide"}},p={},l=[{value:"Middleware",id:"middleware",level:2},{value:"Restrict middleware execution to a certain path(s)",id:"restrict-middleware-execution-to-a-certain-paths",level:4},{value:"Express middleware compatibility",id:"express-middleware-compatibility",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"middleware"},"Middleware"),(0,r.kt)("p",null,"Fastify provides an asynchronous ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},"middleware engine")," out-of-the-box, which is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," and ",(0,r.kt)("a",{parentName:"p",href:"http://restify.com/"},"Restify")," middleware."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For help with understanding when middleware is executed, take a look at the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/fastify/fastify/blob/master/docs/Lifecycle.md"},"lifecycle")," page.")),(0,r.kt)("p",null,"Fastify middleware don't support the full syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware(err, req, res, next)"),", because error handling is done inside Fastify.\nFurthermore, methods added by Express and Restify to the enhanced versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," are not supported in Fastify middlewares."),(0,r.kt)("p",null,"Also, if you are using middleware that bundles different, smaller middleware, such as ",(0,r.kt)("a",{parentName:"p",href:"https://helmetjs.github.io/"},(0,r.kt)("em",{parentName:"a"},"helmet")),", we recommend using the single modules for better performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.use(require('cors')())\nfastify.use(require('dns-prefetch-control')())\nfastify.use(require('frameguard')())\nfastify.use(require('hide-powered-by')())\nfastify.use(require('hsts')())\nfastify.use(require('ienoopen')())\nfastify.use(require('x-xss-protection')())\n\n")),(0,r.kt)("p",null,"or, in the specific case of ",(0,r.kt)("em",{parentName:"p"},"helmet"),", you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-helmet"},(0,r.kt)("em",{parentName:"a"},"fastify-helmet"))," ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Plugins"},"plugin"),", which is an optimized helmet integration for fastify:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')()\nconst helmet = require('fastify-helmet')\n\nfastify.register(helmet)\n\n")),(0,r.kt)("p",null,"Remember that middleware can be encapsulated, this means that you can decide where your middleware should run by using ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," as explained in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Plugins-Guide.md"},"plugins guide"),"."),(0,r.kt)("p",null,"Fastify middleware also do not expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," method or other methods specific to the Fastify ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Reply#reply"},"Reply")," instance. This is because Fastify wraps the incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," Node instances using the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Request#request"},"Request")," and ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Reply#reply"},"Reply")," objects internally, but this is done after the middleware phase. If you need to create middleware, you have to use the Node ",(0,r.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," instances. Otherwise, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"preHandler")," hook which already has the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Request#request"},"Request")," and ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Reply#reply"},"Reply")," Fastify instances. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2.15.x/Documentation/Hooks#hooks"},"Hooks"),"."),(0,r.kt)("a",{name:"restrict-usage"}),(0,r.kt)("h4",{id:"restrict-middleware-execution-to-a-certain-paths"},"Restrict middleware execution to a certain path(s)"),(0,r.kt)("p",null,"If you need to run a middleware only under certain path(s), just pass the path as first parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," and you are done!"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that this does not support routes with parameters, (eg: ",(0,r.kt)("inlineCode",{parentName:"em"},"/user/:id/comments"),") and wildcards are not supported in multiple paths.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nconst serveStatic = require('serve-static')\n\n// Single path\nfastify.use('/css', serveStatic(path.join(__dirname, '/assets')))\n\n// Wildcard path\nfastify.use('/css/*', serveStatic(path.join(__dirname, '/assets')))\n\n// Multiple paths\nfastify.use(['/css', '/js'], serveStatic(path.join(__dirname, '/assets')))\n\n")),(0,r.kt)("a",{name:"express-middleware"}),(0,r.kt)("h4",{id:"express-middleware-compatibility"},"Express middleware compatibility"),(0,r.kt)("p",null,"Express modifies the prototype of the node core Request and Response objects heavily so Fastify cannot guarantee full middleware compatibility. Express specific functionality such as ",(0,r.kt)("inlineCode",{parentName:"p"},"res.sendFile()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"res.send()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"express.Router()")," instances will not work with Fastify. For example, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors"},"cors")," is compatible while ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jaredhanson/passport"},"passport")," is not."))}c.isMDXComponent=!0}}]);