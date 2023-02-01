"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[89486],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),k=o,h=c["".concat(s,".").concat(k)]||c[k]||u[k]||r;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},l=void 0,i={unversionedId:"Documentation/Hooks",id:"version-v2.15.x/Documentation/Hooks",title:"Hooks",description:"Hooks",source:"@site/versioned_docs/version-v2.15.x/Documentation/Hooks.md",sourceDirName:"Documentation",slug:"/Documentation/Hooks",permalink:"/website-next/docs/v2.15.x/Documentation/Hooks",draft:!1,tags:[],version:"v2.15.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"HTTP2",permalink:"/website-next/docs/v2.15.x/Documentation/HTTP2"},next:{title:"LTS",permalink:"/website-next/docs/v2.15.x/Documentation/LTS"}},s={},p=[{value:"Hooks",id:"hooks",level:2},{value:"Request/Reply Hooks",id:"requestreply-hooks",level:2},{value:"onRequest",id:"onrequest",level:3},{value:"preParsing",id:"preparsing",level:3},{value:"preValidation",id:"prevalidation",level:3},{value:"preHandler",id:"prehandler",level:3},{value:"preSerialization",id:"preserialization",level:3},{value:"onError",id:"onerror",level:3},{value:"onSend",id:"onsend",level:3},{value:"onResponse",id:"onresponse",level:3},{value:"Manage Errors from a hook",id:"manage-errors-from-a-hook",level:3},{value:"Respond to a request from a hook",id:"respond-to-a-request-from-a-hook",level:3},{value:"Application Hooks",id:"application-hooks",level:2},{value:"onReady",id:"onready",level:3},{value:"onClose",id:"onclose",level:3},{value:"onRoute",id:"onroute",level:3},{value:"onRegister",id:"onregister",level:3},{value:"Scope",id:"scope",level:3},{value:"Route level hooks",id:"route-level-hooks",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"Hooks are registered with the ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify.addHook")," method and allow you to listen to specific events in the application or request/response lifecycle. You have to register a hook before the event is triggered, otherwise the event is lost."),(0,o.kt)("p",null,"By using hooks you can interact directly with the lifecycle of Fastify. There are Request/Reply hooks and application hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#requestreply-hooks"},"Request/Reply Hooks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onrequest"},"onRequest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#preparsing"},"preParsing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prevalidation"},"preValidation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prehandler"},"preHandler")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#preserialization"},"preSerialization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onerror"},"onError")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onsend"},"onSend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onresponse"},"onResponse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#manage-errors-from-a-hook"},"Manage Errors from a hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#respond-to-a-request-from-a-hook"},"Respond to a request from a hook")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#application-hooks"},"Application Hooks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onready"},"onReady")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onclose"},"onClose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onroute"},"onRoute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onregister"},"onRegister"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice:")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," callback is not available when using ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await")," or returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),". If you do invoke a ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," callback in this situation unexpected behaviour may occur, e.g. duplicate invocation of handlers."),(0,o.kt)("h2",{id:"requestreply-hooks"},"Request/Reply Hooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Request.md"},"Request")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Reply.md"},"Reply")," are the core Fastify objects.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"done")," is the function to continue with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Lifecycle.md"},"lifecycle"),"."),(0,o.kt)("p",null,"It is pretty easy to understand where each hook is executed by looking at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Lifecycle.md"},"lifecycle page"),".",(0,o.kt)("br",null),"\nHooks are affected by Fastify's encapsulation, and can thus be applied to selected routes. See the ",(0,o.kt)("a",{parentName:"p",href:"#scope"},"Scopes")," section for more information."),(0,o.kt)("p",null,"There are eight different hooks that you can use in Request/Reply ",(0,o.kt)("em",{parentName:"p"},"(in order of execution)"),":"),(0,o.kt)("h3",{id:"onrequest"},"onRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (request, reply, done) => {\n  // Some code\n  done()\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', async (request, reply) => {\n  // Some code\n  await asyncMethod()\n  return\n})\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice:")," in the ",(0,o.kt)("a",{parentName:"p",href:"#onRequest"},"onRequest")," hook, ",(0,o.kt)("inlineCode",{parentName:"p"},"request.body")," will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", because the body parsing happens before the ",(0,o.kt)("a",{parentName:"p",href:"#preValidation"},"preValidation")," hook."),(0,o.kt)("h3",{id:"preparsing"},"preParsing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preParsing', (request, reply, done) => {\n  // Some code\n  done()\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preParsing', async (request, reply) => {\n  // Some code\n  await asyncMethod()\n  return\n})\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice:")," in the ",(0,o.kt)("a",{parentName:"p",href:"#preParsing"},"preParsing")," hook, ",(0,o.kt)("inlineCode",{parentName:"p"},"request.body")," will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", because the body parsing happens before the ",(0,o.kt)("a",{parentName:"p",href:"#preValidation"},"preValidation")," hook."),(0,o.kt)("h3",{id:"prevalidation"},"preValidation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preValidation', (request, reply, done) => {\n  // Some code\n  done()\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preValidation', async (request, reply) => {\n  // Some code\n  await asyncMethod()\n  return\n})\n\n")),(0,o.kt)("h3",{id:"prehandler"},"preHandler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preHandler', (request, reply, done) => {\n  // some code\n  done()\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preHandler', async (request, reply) => {\n  // Some code\n  await asyncMethod()\n  return\n})\n\n")),(0,o.kt)("h3",{id:"preserialization"},"preSerialization"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"preSerialization")," hook, you can change (or replace) the payload before it is serialized. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preSerialization', (request, reply, payload, done) => {\n  const err = null\n  const newPayload = { wrapped: payload }\n  done(err, newPayload)\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preSerialization', async (request, reply, payload) => {\n  return { wrapped: payload }\n})\n\n")),(0,o.kt)("p",null,"Note: the hook is NOT called if the payload is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h3",{id:"onerror"},"onError"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onError', (request, reply, error, done) => {\n  // Some code\n  done()\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onError', async (request, reply, error) => {\n  // Useful for custom error logging\n  // You should not use this hook to update the error\n})\n\n")),(0,o.kt)("p",null,"This hook is useful if you need to do some custom error logging or add some specific header in case of error.",(0,o.kt)("br",null),"\nIt is not intended for changing the error, and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.send")," will throw an exception.",(0,o.kt)("br",null),"\nThis hook will be executed only after the ",(0,o.kt)("inlineCode",{parentName:"p"},"customErrorHandler")," has been executed, and only if the ",(0,o.kt)("inlineCode",{parentName:"p"},"customErrorHandler")," sends an error back to the user ",(0,o.kt)("em",{parentName:"p"},"(Note that the default ",(0,o.kt)("inlineCode",{parentName:"em"},"customErrorHandler")," always sends the error back to the user)"),".",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Notice:")," unlike the other hooks, pass an error to the ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," function is not supported."),(0,o.kt)("h3",{id:"onsend"},"onSend"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSend")," hook, you can change the payload. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onSend', (request, reply, payload, done) => {\n  const err = null;\n  const newPayload = payload.replace('some-text', 'some-new-text')\n  done(err, newPayload)\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onSend', async (request, reply, payload) => {\n  const newPayload = payload.replace('some-text', 'some-new-text')\n  return newPayload\n})\n\n")),(0,o.kt)("p",null,"You can also clear the payload to send a response with an empty body by replacing the payload with ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onSend', (request, reply, payload, done) => {\n  reply.code(304)\n  const newPayload = null\n  done(null, newPayload)\n})\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also send an empty body by replacing the payload with the empty string ",(0,o.kt)("inlineCode",{parentName:"p"},"''"),", but be aware that this will cause the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Length")," header to be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", whereas the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Length")," header will not be set if the payload is ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,o.kt)("p",null,"Note: If you change the payload, you may only change it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"stream"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h3",{id:"onresponse"},"onResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nfastify.addHook('onResponse', (request, reply, done) => {\n  // Some code\n  done()\n})\n\n")),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onResponse', async (request, reply) => {\n  // Some code\n  await asyncMethod()\n  return\n})\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onResponse")," hook is executed when a response has been sent, so you will not be able to send more data to the client. It can however be useful for sending data to external services, for example to gather statistics."),(0,o.kt)("h3",{id:"manage-errors-from-a-hook"},"Manage Errors from a hook"),(0,o.kt)("p",null,"If you get an error during the execution of your hook, just pass it to ",(0,o.kt)("inlineCode",{parentName:"p"},"done()")," and Fastify will automatically close the request and send the appropriate error code to the user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (request, reply, done) => {\n  done(new Error('Some error'))\n})\n\n")),(0,o.kt)("p",null,"If you want to pass a custom error code to the user, just use ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.code()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preHandler', (request, reply, done) => {\n  reply.code(400)\n  done(new Error('Some error'))\n})\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The error will be handled by ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/fastify/fastify/blob/master/docs/Reply.md#errors"},(0,o.kt)("inlineCode",{parentName:"a"},"Reply")),".")),(0,o.kt)("p",null,"Or if you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")," you can just throw an error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onResponse', async (request, reply) => {\n  throw new Error('Some error')\n})\n\n")),(0,o.kt)("h3",{id:"respond-to-a-request-from-a-hook"},"Respond to a request from a hook"),(0,o.kt)("p",null,"If needed, you can respond to a request before you reach the route handler,\nfor example when implementing an authentication hook.\nReplying from an hook implies that the hook chain is ",(0,o.kt)("strong",{parentName:"p"},"stopped")," and\nthe rest of hooks and the handlers are not executed. If the hook is\nusing the callback approach, i.e. it is not an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function or it\nreturns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", it is as simple as calling ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.send()")," and avoiding\ncalling the callback. If the hook is ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.send()")," ",(0,o.kt)("strong",{parentName:"p"},"must")," be\ncalled ",(0,o.kt)("em",{parentName:"p"},"before")," the function returns or the promise resolves, otherwise the\nrequest will proceed. When ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.send()")," is called outside of the\npromise chain, it is important to ",(0,o.kt)("inlineCode",{parentName:"p"},"return reply")," otherwise the request\nwill be executed twice."),(0,o.kt)("p",null,"It is important to ",(0,o.kt)("strong",{parentName:"p"},"not mix callbacks and ",(0,o.kt)("inlineCode",{parentName:"strong"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"strong"},"Promise")),", otherwise\nthe hook chain will be executed twice."),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"onRequest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"preHandler")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.send"),"; if you are using a middleware, use ",(0,o.kt)("inlineCode",{parentName:"p"},"res.end"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (request, reply, done) => {\n  reply.send('Early response')\n})\n\n// Works with async functions too\nfastify.addHook('preHandler', async (request, reply) => {\n  await something()\n  reply.send({ hello: 'world' })\n  return reply // optional in this case, but it is a good practice\n})\n\n")),(0,o.kt)("p",null,"If you want to respond with a stream, you should avoid using an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function for the hook. If you must use an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function, your code will need to follow the pattern in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/94ea67ef2d8dce8a955d510cd9081aabd036fa85/test/hooks-async.js#L269-L275"},"test/hooks-async.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (request, reply, done) => {\n  const stream = fs.createReadStream('some-file', 'utf8')\n  reply.send(stream)\n})\n\n")),(0,o.kt)("p",null,"If you are sending a response without ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," on it, make sure to always\n",(0,o.kt)("inlineCode",{parentName:"p"},"return reply"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preHandler', async (request, reply) => {\n  setImmediate(() => { reply.send('hello') })\n\n  // This is needed to signal the handler to wait for a response\n  // to be sent outside of the promise chain\n  return reply\n})\n\nfastify.addHook('preHandler', async (request, reply) => {\n  // the fastify-static plugin will send a file asynchronously,\n  // so we should return reply\n  reply.sendFile('myfile')\n  return reply\n})\n\n")),(0,o.kt)("h2",{id:"application-hooks"},"Application Hooks"),(0,o.kt)("p",null,"You can hook into the application-lifecycle as well. It's important to note that these hooks aren't fully encapsulated. The ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," inside the hooks are encapsulated but the handlers can respond to an event outside the encapsulation boundaries."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onready"},"onReady")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onclose"},"onClose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onroute"},"onRoute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onregister"},"onRegister"))),(0,o.kt)("h3",{id:"onready"},"onReady"),(0,o.kt)("p",null,"Triggered before the server starts listening for requests. It cannot change the routes or add new hooks.\nRegistered hook functions are executed serially.\nOnly after all ",(0,o.kt)("inlineCode",{parentName:"p"},"onReady")," hook functions have completed will the server start listening for requests.\nHook functions accept one argument: a callback, ",(0,o.kt)("inlineCode",{parentName:"p"},"done"),", to be invoked after the hook function is complete.\nHook functions are invoked with ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," bound to the associated Fastify instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// callback style\nfastify.addHook('onReady', function (done) {\n  // Some code\n  const err = null;\n  done(err)\n})\n\n// or async/await style\nfastify.addHook('onReady', async function () {\n  // Some async code\n  await loadCacheFromDatabase()\n})\n\n")),(0,o.kt)("a",{name:"on-close"}),(0,o.kt)("h3",{id:"onclose"},"onClose"),(0,o.kt)("p",null,"Triggered when ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify.close()")," is invoked to stop the server. It is useful when ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Plugins.md"},"plugins"),' need a "shutdown" event, for example to close an open connection to a database.',(0,o.kt)("br",null),"\nThe first argument is the Fastify instance, the second one the ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," callback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onClose', (instance, done) => {\n  // Some code\n  done()\n})\n\n")),(0,o.kt)("a",{name:"on-route"}),(0,o.kt)("h3",{id:"onroute"},"onRoute"),(0,o.kt)("p",null,"Triggered when a new route is registered. Listeners are passed a ",(0,o.kt)("inlineCode",{parentName:"p"},"routeOptions")," object as the sole parameter. The interface is synchronous, and, as such, the listeners do not get passed a callback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRoute', (routeOptions) => {\n  //Some code\n  routeOptions.method\n  routeOptions.schema\n  routeOptions.url\n  routeOptions.bodyLimit\n  routeOptions.logLevel\n  routeOptions.logSerializers\n  routeOptions.prefix\n})\n\n")),(0,o.kt)("p",null,"If you are authoring a plugin and you need to customize application routes, like modifying the options or adding new route hooks, this is the right place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRoute', (routeOptions) => {\n  function onPreSerialization(request, reply, payload, done) {\n    // Your code\n    done(null, payload)\n  }\n  // preSerialization can be an array or undefined\n  routeOptions.preSerialization = [...(routeOptions.preSerialization || []), onPreSerialization]\n})\n\n")),(0,o.kt)("a",{name:"on-register"}),(0,o.kt)("h3",{id:"onregister"},"onRegister"),(0,o.kt)("p",null,"Triggered when a new plugin is registered and a new encapsulation context is created. The hook will be executed ",(0,o.kt)("strong",{parentName:"p"},"before")," the registered code.",(0,o.kt)("br",null),"\nThis hook can be useful if you are developing a plugin that needs to know when a plugin context is formed, and you want to operate in that specific context.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," This hook will not be called if a plugin is wrapped inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"fastify-plugin")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('data', [])\n\nfastify.register(async (instance, opts) => {\n  instance.data.push('hello')\n  console.log(instance.data) // ['hello']\n\n  instance.register(async (instance, opts) => {\n    instance.data.push('world')\n    console.log(instance.data) // ['hello', 'world']\n  }, { prefix: '/hola' })\n}, { prefix: '/ciao' })\n\nfastify.register(async (instance, opts) => {\n  console.log(instance.data) // []\n}, { prefix: '/hello' })\n\nfastify.addHook('onRegister', (instance, opts) => {\n  // Create a new array from the old one\n  // but without keeping the reference\n  // allowing the user to have encapsulated\n  // instances of the `data` property\n  instance.data = instance.data.slice()\n\n  // the options of the new registered instance\n  console.log(opts.prefix)\n})\n\n")),(0,o.kt)("a",{name:"scope"}),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"Except for ",(0,o.kt)("a",{parentName:"p",href:"#application-hooks"},"Application Hooks"),", all hooks are encapsulated. This means that you can decide where your hooks should run by using ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," as explained in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Plugins-Guide.md"},"plugins guide"),". If you pass a function, that function is bound to the right Fastify context and from there you have full access to the Fastify API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', function (request, reply, done) {\n  const self = this // Fastify context\n  done()\n})\n\n")),(0,o.kt)("p",null,"Note: using an arrow function will break the binding of this to the Fastify instance."),(0,o.kt)("a",{name:"route-hooks"}),(0,o.kt)("h2",{id:"route-level-hooks"},"Route level hooks"),(0,o.kt)("p",null,"You can declare one or more custom ",(0,o.kt)("a",{parentName:"p",href:"#onRequest"},"onRequest"),", ",(0,o.kt)("a",{parentName:"p",href:"#onResponse"},"onReponse"),", ",(0,o.kt)("a",{parentName:"p",href:"#preParsing"},"preParsing"),", ",(0,o.kt)("a",{parentName:"p",href:"#preValidation"},"preValidation"),", ",(0,o.kt)("a",{parentName:"p",href:"#preHandler"},"preHandler")," and ",(0,o.kt)("a",{parentName:"p",href:"#preSerialization"},"preSerialization")," hook(s) that will be ",(0,o.kt)("strong",{parentName:"p"},"unique")," for the route.\nIf you do so, those hooks are always executed as the last hook in their category. ",(0,o.kt)("br",null),"\nThis can be useful if you need to implement authentication, where the ",(0,o.kt)("a",{parentName:"p",href:"#preParsing"},"preParsing")," or ",(0,o.kt)("a",{parentName:"p",href:"#preValidation"},"preValidation")," hooks are exactly what you need.\nMultiple route-level hooks can also be specified as an array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (request, reply, done) => {\n  // Your code\n  done()\n})\n\nfastify.addHook('onResponse', (request, reply, done) => {\n  // your code\n  done()\n})\n\nfastify.addHook('preParsing', (request, reply, done) => {\n  // Your code\n  done()\n})\n\nfastify.addHook('preValidation', (request, reply, done) => {\n  // Your code\n  done()\n})\n\nfastify.addHook('preHandler', (request, reply, done) => {\n  // Your code\n  done()\n})\n\nfastify.addHook('preSerialization', (request, reply, payload, done) => {\n  // Your code\n  done(null, payload)\n})\n\nfastify.route({\n  method: 'GET',\n  url: '/',\n  schema: { ... },\n  onRequest: function (request, reply, done) {\n    // This hook will always be executed after the shared `onRequest` hooks\n    done()\n  },\n  onResponse: function (request, reply, done) {\n    // this hook will always be executed after the shared `onResponse` hooks\n    done()\n  },\n  preParsing: function (request, reply, done) {\n    // This hook will always be executed after the shared `preParsing` hooks\n    done()\n  },\n  preValidation: function (request, reply, done) {\n    // This hook will always be executed after the shared `preValidation` hooks\n    done()\n  },\n  preHandler: function (request, reply, done) {\n    // This hook will always be executed after the shared `preHandler` hooks\n    done()\n  },\n  // // Example with an array. All hooks support this syntax.\n  //\n  // preHandler: [function (request, reply, done) {\n  //   // This hook will always be executed after the shared `preHandler` hooks\n  //   done()\n  // }],\n  preSerialization: (request, reply, payload, done) => {\n    // This hook will always be executed after the shared `preSerialization` hooks\n    done(null, payload)\n  },\n  handler: function (request, reply) {\n    reply.send({ hello: 'world' })\n  }\n})\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": both options also accept an array of functions."))}u.isMDXComponent=!0}}]);