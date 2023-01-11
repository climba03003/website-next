"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[3431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="V4 Migration Guide",s={unversionedId:"Guides/Migration-Guide-V4",id:"version-v4.11.x/Guides/Migration-Guide-V4",title:"V4 Migration Guide",description:"This guide is intended to help with migration from Fastify v3 to v4.",source:"@site/versioned_docs/version-v4.11.x/Guides/Migration-Guide-V4.md",sourceDirName:"Guides",slug:"/Guides/Migration-Guide-V4",permalink:"/website-next/docs/v4.11.x/Guides/Migration-Guide-V4",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Migration-Guide-V4.md",tags:[],version:"v4.11.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"V3 Migration Guide",permalink:"/website-next/docs/v4.11.x/Guides/Migration-Guide-V3"},next:{title:"The hitchhiker's guide to plugins",permalink:"/website-next/docs/v4.11.x/Guides/Plugins-Guide"}},l={},p=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Error handling composition (#3261)",id:"error-handling-composition-3261",level:3},{value:"Removed <code>app.use()</code> (#3506)",id:"removed-appuse-3506",level:3},{value:"<code>reply.res</code> moved to <code>reply.raw</code>",id:"replyres-moved-to-replyraw",level:3},{value:"Need to <code>return reply</code> to signal a &quot;fork&quot; of the promise chain",id:"need-to-return-reply-to-signal-a-fork-of-the-promise-chain",level:3},{value:"<code>exposeHeadRoutes</code> true by default",id:"exposeheadroutes-true-by-default",level:3},{value:"Synchronous route definitions (#2954)",id:"synchronous-route-definitions-2954",level:3},{value:"Non-Breaking Changes",id:"non-breaking-changes",level:2},{value:"Deprecation of variadic <code>.listen()</code> signature",id:"deprecation-of-variadic-listen-signature",level:3},{value:"Change of schema for multiple types",id:"change-of-schema-for-multiple-types",level:3},{value:"Add <code>reply.trailers</code> methods (#3794)",id:"add-replytrailers-methods-3794",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v4-migration-guide"},"V4 Migration Guide"),(0,i.kt)("p",null,"This guide is intended to help with migration from Fastify v3 to v4."),(0,i.kt)("p",null,"Before migrating to v4, please ensure that you have fixed all deprecation\nwarnings from v3. All v3 deprecations have been removed and they will no longer\nwork after upgrading."),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("h3",{id:"error-handling-composition-3261"},"Error handling composition (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/3261"},"#3261"),")"),(0,i.kt)("p",null,"When an error is thrown in an async error handler function, the upper-level\nerror handler is executed if set. If there is no upper-level error handler,\nthe default will be executed as it was previously:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Fastify from 'fastify'\n\nconst fastify = Fastify()\n\nfastify.register(async fastify => {\n  fastify.setErrorHandler(async err => {\n    console.log(err.message) // 'kaboom'\n    throw new Error('caught')\n  })\n  \n  fastify.get('/encapsulated', async () => {\n    throw new Error('kaboom')\n  })\n})\n\nfastify.setErrorHandler(async err => {\n  console.log(err.message) // 'caught' \n  throw new Error('wrapped')\n})\n\nconst res = await fastify.inject('/encapsulated')\nconsole.log(res.json().message) // 'wrapped'\n")),(0,i.kt)("h3",{id:"removed-appuse-3506"},"Removed ",(0,i.kt)("inlineCode",{parentName:"h3"},"app.use()")," (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/3506"},"#3506"),")"),(0,i.kt)("p",null,"With v4 of Fastify, ",(0,i.kt)("inlineCode",{parentName:"p"},"app.use()")," has been removed and the use of middleware is\nno longer supported."),(0,i.kt)("p",null,"If you need to use middleware, use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/middie"))," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/express")),", which will\ncontinue to be maintained.\nHowever, it is strongly recommended that you migrate to Fastify's ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v4.11.x/Reference/Hooks"},"hooks"),"."),(0,i.kt)("h3",{id:"replyres-moved-to-replyraw"},(0,i.kt)("inlineCode",{parentName:"h3"},"reply.res")," moved to ",(0,i.kt)("inlineCode",{parentName:"h3"},"reply.raw")),(0,i.kt)("p",null,"If you previously used the ",(0,i.kt)("inlineCode",{parentName:"p"},"reply.res")," attribute to access the underlying Request\nobject you will now need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"reply.raw"),"."),(0,i.kt)("h3",{id:"need-to-return-reply-to-signal-a-fork-of-the-promise-chain"},"Need to ",(0,i.kt)("inlineCode",{parentName:"h3"},"return reply"),' to signal a "fork" of the promise chain'),(0,i.kt)("p",null,"In some situations, like when a response is sent asynchronously or when you are\nnot explicitly returning a response, you will now need to return the ",(0,i.kt)("inlineCode",{parentName:"p"},"reply"),"\nargument from your router handler."),(0,i.kt)("h3",{id:"exposeheadroutes-true-by-default"},(0,i.kt)("inlineCode",{parentName:"h3"},"exposeHeadRoutes")," true by default"),(0,i.kt)("p",null,"Starting with v4, every ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," route will create a sibling ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," route.\nYou can revert this behavior by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"exposeHeadRoutes: false")," in the server options."),(0,i.kt)("h3",{id:"synchronous-route-definitions-2954"},"Synchronous route definitions (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2954"},"#2954"),")"),(0,i.kt)("p",null,"To improve error reporting in route definitions, route registration is now synchronous.\nAs a result, if you specify an ",(0,i.kt)("inlineCode",{parentName:"p"},"onRoute")," hook in a plugin you should now either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"wrap your routes in a plugin (recommended)"),(0,i.kt)("p",{parentName:"li"},"For example, refactor this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register((instance, opts, done) => {\n  instance.addHook('onRoute', (routeOptions) => {\n    const { path, method } = routeOptions;\n    console.log({ path, method });\n    done();\n  });\n});\n\nfastify.get('/', (request, reply) => { reply.send('hello') });\n")),(0,i.kt)("p",{parentName:"li"},"Into this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register((instance, opts, done) => {\n  instance.addHook('onRoute', (routeOptions) => {\n    const { path, method } = routeOptions;\n    console.log({ path, method });\n    done();\n  });\n});\n\nfastify.register((instance, opts, done) => {\n  instance.get('/', (request, reply) => { reply.send('hello') });\n  done();\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use ",(0,i.kt)("inlineCode",{parentName:"p"},"await register(...)")),(0,i.kt)("p",{parentName:"li"},"For example, refactor this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register((instance, opts, done) => {\n  instance.addHook('onRoute', (routeOptions) => {\n    const { path, method } = routeOptions;\n    console.log({ path, method });\n  });\n  done();\n});\n")),(0,i.kt)("p",{parentName:"li"},"Into this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await fastify.register((instance, opts) => {\n  instance.addHook('onRoute', (routeOptions) => {\n    const { path, method } = routeOptions;\n    console.log({ path, method });\n  });\n  done();\n});\n")))),(0,i.kt)("h2",{id:"non-breaking-changes"},"Non-Breaking Changes"),(0,i.kt)("h3",{id:"deprecation-of-variadic-listen-signature"},"Deprecation of variadic ",(0,i.kt)("inlineCode",{parentName:"h3"},".listen()")," signature"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Variadic_function"},"variadic signature")," of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.listen()")," method is now deprecated."),(0,i.kt)("p",null,"Prior to this release, the following invocations of this method were valid:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen(8000)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen(8000, \u2018127.0.0.1\u2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen(8000, \u2018127.0.0.1\u2019, 511)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen(8000, (err) => { if (err) throw err })")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen({ port: 8000 }, (err) => { if (err) throw err })"))),(0,i.kt)("p",null,"With Fastify v4, only the following invocations are valid:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen({ port: 8000 })")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastify.listen({ port: 8000 }, (err) => { if (err) throw err })"))),(0,i.kt)("h3",{id:"change-of-schema-for-multiple-types"},"Change of schema for multiple types"),(0,i.kt)("p",null,'Ajv has been upgraded to v8 in Fastify v4, meaning "type" keywords with multiple\ntypes other than "null"\n',(0,i.kt)("a",{parentName:"p",href:"https://ajv.js.org/strict-mode.html#strict-types"},"are now prohibited"),"."),(0,i.kt)("p",null,"You may encounter a console warning such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'strict mode: use allowUnionTypes to allow union type keyword at "#/properties/image" (strictTypes)\n')),(0,i.kt)("p",null,"As such, schemas like below will need to be changed from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type: 'object',\nproperties: {\n  api_key: { type: 'string' },\n  image: { type: ['object', 'array'] }\n  }\n}\n")),(0,i.kt)("p",null,"Into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type: 'object',\nproperties: {\n  api_key: { type: 'string' },\n  image: {\n    anyOf: [\n      { type: 'array' },\n      { type: 'object' }\n    ]\n  }\n}\n")),(0,i.kt)("h3",{id:"add-replytrailers-methods-3794"},"Add ",(0,i.kt)("inlineCode",{parentName:"h3"},"reply.trailers")," methods (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/3794"},"#3794"),")"),(0,i.kt)("p",null,"Fastify now supports the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer"},"HTTP Trailer")," response headers."))}u.isMDXComponent=!0}}]);