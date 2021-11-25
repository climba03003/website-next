"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[123],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"V3 Migration Guide",sidebar_label:"V3 Migration Guide",hide_title:!1},l=void 0,p={unversionedId:"Migration-Guide-V3",id:"Migration-Guide-V3",isDocsHomePage:!1,title:"V3 Migration Guide",description:"This guide is intended to help with migration from Fastify v2 to v3.",source:"@site/docs/Migration-Guide-V3.md",sourceDirName:".",slug:"/Migration-Guide-V3",permalink:"/docs/v3/Migration-Guide-V3",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Migration-Guide-V3.md",tags:[],version:"current",frontMatter:{title:"V3 Migration Guide",sidebar_label:"V3 Migration Guide",hide_title:!1},sidebar:"sidebar",previous:{title:"Middleware",permalink:"/docs/v3/Middleware"},next:{title:"Plugins-Guide",permalink:"/docs/v3/Plugins-Guide"}},d=[{value:"Breaking changes",id:"breaking-changes",children:[{value:"Changed middleware support (#2014)",id:"changed-middleware-support-2014",children:[],level:3},{value:"Changed logging serialization (#2017)",id:"changed-logging-serialization-2017",children:[],level:3},{value:"Changed schema substitution (#2023)",id:"changed-schema-substitution-2023",children:[],level:3},{value:"Changed schema validation options (#2023)",id:"changed-schema-validation-options-2023",children:[],level:3},{value:"Changed preParsing hook behavior (#2286)",id:"changed-preparsing-hook-behavior-2286",children:[],level:3},{value:"Changed hooks behavior (#2004)",id:"changed-hooks-behavior-2004",children:[],level:3},{value:"Changed Content Type Parser syntax (#2286)",id:"changed-content-type-parser-syntax-2286",children:[],level:3},{value:"Changed TypeScript support",id:"changed-typescript-support",children:[],level:3},{value:"Manage uncaught exception (#2073)",id:"manage-uncaught-exception-2073",children:[],level:3}],level:2},{value:"Further additions and improvements",id:"further-additions-and-improvements",children:[],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide is intended to help with migration from Fastify v2 to v3."),(0,i.kt)("p",null,"Before beginning please ensure that any deprecation warnings from v2 are fixed.\nAll v2 deprecations have been removed and they will no longer work after\nupgrading. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/pull/1750"},"#1750"),")"),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,i.kt)("h3",{id:"changed-middleware-support-2014"},"Changed middleware support (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2014"},"#2014"),")"),(0,i.kt)("p",null,"From Fastify v3, middleware support does not come out-of-the-box with the\nframework itself."),(0,i.kt)("p",null,"If you use Express middleware in your application, please install and register\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-express"))," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,i.kt)("inlineCode",{parentName:"a"},"middie"))," plugin before doing so."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Using the Express `cors` middleware in Fastify v2.\nfastify.use(require('cors')());\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Using the Express `cors` middleware in Fastify v3.\nawait fastify.register(require('fastify-express'));\nfastify.use(require('cors')());\n")),(0,i.kt)("h3",{id:"changed-logging-serialization-2017"},"Changed logging serialization (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2017"},"#2017"),")"),(0,i.kt)("p",null,"The logging ",(0,i.kt)("a",{parentName:"p",href:"/docs/v3/Logging"},"Serializers")," have been updated to now Fastify\n",(0,i.kt)("a",{parentName:"p",href:"/docs/v3/Request"},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/v3/Reply"},(0,i.kt)("inlineCode",{parentName:"a"},"Reply"))," objects instead of\nnative ones."),(0,i.kt)("p",null,"Any custom serializers must be updated if they rely upon ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"reply"),"\nproperties that are present on the native objects but not the Fastify objects."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n    serializers: {\n      res(res) {\n        return {\n          statusCode: res.statusCode,\n          customProp: res.customProp\n        };\n      }\n    }\n  }\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n    serializers: {\n      res(reply) {\n        return {\n          statusCode: reply.statusCode, // No change required\n          customProp: reply.raw.customProp // Log custom property from res object\n        };\n      }\n    }\n  }\n});\n")),(0,i.kt)("h3",{id:"changed-schema-substitution-2023"},"Changed schema substitution (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2023"},"#2023"),")"),(0,i.kt)("p",null,"The non-standard ",(0,i.kt)("inlineCode",{parentName:"p"},"replace-way")," shared schema support has been removed. This\nfeature has been replaced with JSON Schema specification compliant ",(0,i.kt)("inlineCode",{parentName:"p"},"$ref")," based\nsubstitution. To help understand this change read\n",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/eomm/validation-and-serialization-in-fastify-v3-2e8l"},"Validation and Serialization in Fastify v3"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const schema = {\n  body: 'schemaId#'\n};\nfastify.route({ method, url, schema, handler });\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const schema = {\n  body: {\n    $ref: 'schemaId#'\n  }\n};\nfastify.route({ method, url, schema, handler });\n")),(0,i.kt)("h3",{id:"changed-schema-validation-options-2023"},"Changed schema validation options (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2023"},"#2023"),")"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setSchemaCompiler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setSchemaResolver")," options have been replaced\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"setValidatorCompiler")," to enable future tooling improvements.\nTo help understand this change read\n",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/eomm/validation-and-serialization-in-fastify-v3-2e8l"},"Validation and Serialization in Fastify v3"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = Fastify();\nconst ajv = new AJV();\najv.addSchema(schemaA);\najv.addSchema(schemaB);\n\nfastify.setSchemaCompiler(schema => ajv.compile(schema));\nfastify.setSchemaResolver(ref => ajv.getSchema(ref).schema);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = Fastify();\nconst ajv = new AJV();\najv.addSchema(schemaA);\najv.addSchema(schemaB);\n\nfastify.setValidatorCompiler(({ schema, method, url, httpPart }) =>\n  ajv.compile(schema)\n);\n")),(0,i.kt)("h3",{id:"changed-preparsing-hook-behavior-2286"},"Changed preParsing hook behavior (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2286"},"#2286"),")"),(0,i.kt)("p",null,"From Fastify v3, the behavior of the ",(0,i.kt)("inlineCode",{parentName:"p"},"preParsing")," hook will change slightly\nin order to support request payload manipulation."),(0,i.kt)("p",null,"The hook now takes an additional argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", and therefore the new hook\nsignature is ",(0,i.kt)("inlineCode",{parentName:"p"},"fn(request, reply, payload, done)")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"async fn(request, reply, payload)"),"."),(0,i.kt)("p",null,"The hook can optionally return a new stream via ",(0,i.kt)("inlineCode",{parentName:"p"},"done(null, stream)")," or\nreturning the stream in case of async functions."),(0,i.kt)("p",null,"If the hook returns a new stream, it will be used instead of the original one in subsequent hooks. A sample use case for this is handling compressed requests."),(0,i.kt)("p",null,"The new stream should add the ",(0,i.kt)("inlineCode",{parentName:"p"},"receivedEncodedLength")," property to the stream\nthat should reflect the actual data size received from the client. For instance,\nin a compressed request it should be the size of the compressed payload.\nThis property can (and should) be dynamically updated during ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," events."),(0,i.kt)("p",null,"The old syntax of Fastify v2 without payload is supported but it is deprecated."),(0,i.kt)("h3",{id:"changed-hooks-behavior-2004"},"Changed hooks behavior (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2004"},"#2004"),")"),(0,i.kt)("p",null,"From Fastify v3, the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"onRoute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onRegister")," hooks will change\nslightly in order to support hook encapsulation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onRoute")," - The hook will be called asynchronously. The hook is now inherited\nwhen registering a new plugin within the same encapsulation scope. Thus, this\nhook should be registered ",(0,i.kt)("em",{parentName:"li"},"before")," registering any plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onRegister")," - Same as the onRoute hook. The only difference is that now the\nvery first call will no longer be the framework itself, but the first registered\nplugin.")),(0,i.kt)("h3",{id:"changed-content-type-parser-syntax-2286"},"Changed Content Type Parser syntax (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2286"},"#2286"),")"),(0,i.kt)("p",null,"In Fastify v3 the content type parsers now have a single signature for parsers."),(0,i.kt)("p",null,"The new signatures are ",(0,i.kt)("inlineCode",{parentName:"p"},"fn(request, payload, done)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"async fn(request, payload)"),".\nNote that ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," is now a Fastify request, not an ",(0,i.kt)("inlineCode",{parentName:"p"},"IncomingMessage"),".\nThe payload is by default a stream. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"parseAs"),"\xa0option is used in\n",(0,i.kt)("inlineCode",{parentName:"p"},"addContentTypeParser"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," reflects the option value (string or buffer)."),(0,i.kt)("p",null,"The old signatures ",(0,i.kt)("inlineCode",{parentName:"p"},"fn(req, [done])")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fn(req, payload, [done])"),"\n(where ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"IncomingMessage"),") are still supported but are deprecated."),(0,i.kt)("h3",{id:"changed-typescript-support"},"Changed TypeScript support"),(0,i.kt)("p",null,"The type system was changed in Fastify version 3. The new type system introduces\ngeneric constraining and defaulting, plus a new way to define schema types such\nas a request body, querystring, and more!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface PingQuerystring {\n  foo?: number;\n}\n\ninterface PingParams {\n  bar?: string;\n}\n\ninterface PingHeaders {\n  a?: string;\n}\n\ninterface PingBody {\n  baz?: string;\n}\n\nserver.get<PingQuerystring, PingParams, PingHeaders, PingBody>(\n  '/ping/:bar',\n  opts,\n  (request, reply) => {\n    console.log(request.query); // This is of type `PingQuerystring`\n    console.log(request.params); // This is of type `PingParams`\n    console.log(request.headers); // This is of type `PingHeaders`\n    console.log(request.body); // This is of type `PingBody`\n  }\n);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"server.get<{\n  Querystring: PingQuerystring;\n  Params: PingParams;\n  Headers: PingHeaders;\n  Body: PingBody;\n}>('/ping/:bar', opts, async (request, reply) => {\n  console.log(request.query); // This is of type `PingQuerystring`\n  console.log(request.params); // This is of type `PingParams`\n  console.log(request.headers); // This is of type `PingHeaders`\n  console.log(request.body); // This is of type `PingBody`\n});\n")),(0,i.kt)("h3",{id:"manage-uncaught-exception-2073"},"Manage uncaught exception (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/2073"},"#2073"),")"),(0,i.kt)("p",null,"In sync route handlers, if an error was thrown the server crashed by design\nwithout calling the configured ",(0,i.kt)("inlineCode",{parentName:"p"},".setErrorHandler()"),". This has changed and now\nall unexpected errors in sync and async routes are managed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.setErrorHandler((error, request, reply) => {\n  // this is NOT called\n  reply.send(error)\n})\nfastify.get('/', (request, reply) => {\n  const maybeAnArray = request.body.something ? [] : 'I am a string'\n  maybeAnArray.substr() // Thrown: [].substr is not a function and crash the server\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.setErrorHandler((error, request, reply) => {\n  // this IS called\n  reply.send(error)\n})\nfastify.get('/', (request, reply) => {\n  const maybeAnArray = request.body.something ? [] : 'I am a string'\n  maybeAnArray.substr() // Thrown: [].substr is not a function, but it is handled\n})\n")),(0,i.kt)("h2",{id:"further-additions-and-improvements"},"Further additions and improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hooks now have consistent context regardless of how they are registered\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2005"},"#2005"),")"),(0,i.kt)("li",{parentName:"ul"},"Deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"request.req")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reply.res")," for ",(0,i.kt)("a",{parentName:"li",href:"/docs/v3/Request"},(0,i.kt)("inlineCode",{parentName:"a"},"request.raw"))," and\n",(0,i.kt)("a",{parentName:"li",href:"/docs/v3/Reply"},(0,i.kt)("inlineCode",{parentName:"a"},"reply.raw"))," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2008"},"#2008"),")"),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"modifyCoreObjects")," option (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2015"},"#2015"),")"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"/docs/v3/Reference/Server#factory-connection-timeout"},(0,i.kt)("inlineCode",{parentName:"a"},"connectionTimeout")),"\noption (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2086"},"#2086"),")"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"/docs/v3/Reference/Server#factory-keep-alive-timeout"},(0,i.kt)("inlineCode",{parentName:"a"},"keepAliveTimeout")),"\noption (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2086"},"#2086"),")"),(0,i.kt)("li",{parentName:"ul"},"Added async-await support for ",(0,i.kt)("a",{parentName:"li",href:"/docs/v3/Plugins#async-await"},"plugins"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2093"},"#2093"),")"),(0,i.kt)("li",{parentName:"ul"},"Added the feature to throw object as error\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/pull/2134"},"#2134"),")")))}h.isMDXComponent=!0}}]);