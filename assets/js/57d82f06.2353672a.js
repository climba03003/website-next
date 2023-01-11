"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[29024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=l(n),u=r,f=y["".concat(p,".").concat(u)]||y[u]||c[u]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"Reference/ContentTypeParser",id:"version-v4.2.x/Reference/ContentTypeParser",title:"ContentTypeParser",description:"Content-Type Parser",source:"@site/versioned_docs/version-v4.2.x/Reference/ContentTypeParser.md",sourceDirName:"Reference",slug:"/Reference/ContentTypeParser",permalink:"/website-next/docs/v4.2.x/Reference/ContentTypeParser",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/ContentTypeParser.md",tags:[],version:"v4.2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Index",permalink:"/website-next/docs/v4.2.x/Reference/"},next:{title:"Decorators",permalink:"/website-next/docs/v4.2.x/Reference/Decorators"}},p={},l=[{value:"<code>Content-Type</code> Parser",id:"content-type-parser",level:2},{value:"Usage",id:"usage",level:3},{value:"hasContentTypeParser",id:"hascontenttypeparser",level:4},{value:"removeContentTypeParser",id:"removecontenttypeparser",level:4},{value:"removeAllContentTypeParsers",id:"removeallcontenttypeparsers",level:4},{value:"Body Parser",id:"body-parser",level:4},{value:"Custom Parser Options",id:"custom-parser-options",level:5},{value:"Catch-All",id:"catch-all",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"content-type-parser"},(0,r.kt)("inlineCode",{parentName:"h2"},"Content-Type")," Parser"),(0,r.kt)("p",null,"Natively, Fastify only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"'application/json'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'text/plain'")," content\ntypes. If the content type is not one of these, an\n",(0,r.kt)("inlineCode",{parentName:"p"},"FST_ERR_CTP_INVALID_MEDIA_TYPE")," error will be thrown."),(0,r.kt)("p",null,"The default charset is ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8"),". If you need to support different content types,\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addContentTypeParser")," API. ",(0,r.kt)("em",{parentName:"p"},"The default JSON and/or plain text\nparser can be changed or removed.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If you decide to specify your own content type with the ",(0,r.kt)("inlineCode",{parentName:"em"},"Content-Type"),"\nheader, UTF-8 will not be the default. Be sure to include UTF-8 like this\n",(0,r.kt)("inlineCode",{parentName:"em"},"text/html; charset=utf-8"),".")),(0,r.kt)("p",null,"As with the other APIs, ",(0,r.kt)("inlineCode",{parentName:"p"},"addContentTypeParser")," is encapsulated in the scope in\nwhich it is declared. This means that if you declare it in the root scope it\nwill be available everywhere, while if you declare it inside a plugin it will be\navailable only in that scope and its children."),(0,r.kt)("p",null,"Fastify automatically adds the parsed request payload to the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.2.x/Reference/Request"},"Fastify\nrequest")," object which you can access with ",(0,r.kt)("inlineCode",{parentName:"p"},"request.body"),"."),(0,r.kt)("p",null,"Note that for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," requests the payload is never parsed. For\n",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," requests the payload is only parsed if the content type\nis given in the content-type header. If it is not given, the\n",(0,r.kt)("a",{parentName:"p",href:"#catch-all"},"catch-all")," parser is not executed as with ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH"),", but the payload is simply not parsed."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('application/jsoff', function (request, payload, done) {\n  jsoffParser(payload, function (err, body) {\n    done(err, body)\n  })\n})\n\n// Handle multiple content types with the same function\nfastify.addContentTypeParser(['text/xml', 'application/xml'], function (request, payload, done) {\n  xmlParser(payload, function (err, body) {\n    done(err, body)\n  })\n})\n\n// Async is also supported in Node versions >= 8.0.0\nfastify.addContentTypeParser('application/jsoff', async function (request, payload) {\n  var res = await jsoffParserAsync(payload)\n\n  return res\n})\n\n// Handle all content types that matches RegExp\nfastify.addContentTypeParser(/^image\\/.*/, function (request, payload, done) {\n  imageParser(payload, function (err, body) {\n    done(err, body)\n  })\n})\n\n// Can use default JSON/Text parser for different content Types\nfastify.addContentTypeParser('text/json', { parseAs: 'string' }, fastify.getDefaultJsonParser('ignore', 'ignore'))\n")),(0,r.kt)("p",null,"Fastify first tries to match a content-type parser with a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value before\ntrying to find a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp"),". If you provide overlapping content types,\nFastify tries to find a matching content type by starting with the last one\npassed and ending with the first one. So if you want to specify a general\ncontent type more precisely, first specify the general content type and then the\nmore specific one, like in the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Here only the second content type parser is called because its value also matches the first one\nfastify.addContentTypeParser('application/vnd.custom+xml', (request, body, done) => {} )\nfastify.addContentTypeParser('application/vnd.custom', (request, body, done) => {} )\n\n// Here the desired behavior is achieved because fastify first tries to match the\n// `application/vnd.custom+xml` content type parser\nfastify.addContentTypeParser('application/vnd.custom', (request, body, done) => {} )\nfastify.addContentTypeParser('application/vnd.custom+xml', (request, body, done) => {} )\n")),(0,r.kt)("p",null,"Besides the ",(0,r.kt)("inlineCode",{parentName:"p"},"addContentTypeParser")," API there are further APIs that can be used.\nThese are ",(0,r.kt)("inlineCode",{parentName:"p"},"hasContentTypeParser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"removeContentTypeParser")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"removeAllContentTypeParsers"),"."),(0,r.kt)("h4",{id:"hascontenttypeparser"},"hasContentTypeParser"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hasContentTypeParser")," API to find if a specific content type\nparser already exists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (!fastify.hasContentTypeParser('application/jsoff')){\n  fastify.addContentTypeParser('application/jsoff', function (request, payload, done) {\n    jsoffParser(payload, function (err, body) {\n      done(err, body)\n    })\n  })\n}\n")),(0,r.kt)("p",null,"======="),(0,r.kt)("h4",{id:"removecontenttypeparser"},"removeContentTypeParser"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"removeContentTypeParser")," a single or an array of content types can be\nremoved. The method supports ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," content types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('text/xml', function (request, payload, done) {\n  xmlParser(payload, function (err, body) {\n    done(err, body)\n  })\n})\n\n// Removes the both built-in content type parsers so that only the content type parser for text/html is available\nfastify.removeContentTypeParser(['application/json', 'text/plain'])\n")),(0,r.kt)("h4",{id:"removeallcontenttypeparsers"},"removeAllContentTypeParsers"),(0,r.kt)("p",null,"In the example from just above, it is noticeable that we need to specify each\ncontent type that we want to remove. To solve this problem Fastify provides the\n",(0,r.kt)("inlineCode",{parentName:"p"},"removeAllContentTypeParsers")," API. This can be used to remove all currently\nexisting content type parsers. In the example below we achieve the same as in\nthe example above except that we do not need to specify each content type to\ndelete. Just like ",(0,r.kt)("inlineCode",{parentName:"p"},"removeContentTypeParser"),", this API supports encapsulation.\nThe API is especially useful if you want to register a ",(0,r.kt)("a",{parentName:"p",href:"#catch-all"},"catch-all content type\nparser")," that should be executed for every content type and the\nbuilt-in parsers should be ignored as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.removeAllContentTypeParsers()\n\nfastify.addContentTypeParser('text/xml', function (request, payload, done) {\n  xmlParser(payload, function (err, body) {\n    done(err, body)\n  })\n})\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice"),": The old syntaxes ",(0,r.kt)("inlineCode",{parentName:"p"},"function(req, done)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"async function(req)")," for\nthe parser are still supported but they are deprecated."),(0,r.kt)("h4",{id:"body-parser"},"Body Parser"),(0,r.kt)("p",null,"You can parse the body of a request in two ways. The first one is shown above:\nyou add a custom content type parser and handle the request stream. In the\nsecond one, you should pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"parseAs")," option to the ",(0,r.kt)("inlineCode",{parentName:"p"},"addContentTypeParser"),"\nAPI, where you declare how you want to get the body. It could be of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"'string'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'buffer'"),". If you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseAs")," option, Fastify will\ninternally handle the stream and perform some checks, such as the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.2.x/Reference/Server#factory-body-limit"},"maximum\nsize")," of the body and the content length. If the\nlimit is exceeded the custom parser will not be invoked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {\n  try {\n    var json = JSON.parse(body)\n    done(null, json)\n  } catch (err) {\n    err.statusCode = 400\n    done(err, undefined)\n  }\n})\n")),(0,r.kt)("p",null,"See\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/main/examples/parser.js"},(0,r.kt)("inlineCode",{parentName:"a"},"example/parser.js")),"\nfor an example."),(0,r.kt)("h5",{id:"custom-parser-options"},"Custom Parser Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseAs")," (string): Either ",(0,r.kt)("inlineCode",{parentName:"li"},"'string'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'buffer'")," to designate how the\nincoming data should be collected. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'buffer'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bodyLimit")," (number): The maximum payload size, in bytes, that the custom\nparser will accept. Defaults to the global body limit passed to the ",(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v4.2.x/Reference/Server#bodylimit"},(0,r.kt)("inlineCode",{parentName:"a"},"Fastify\nfactory function")),".")),(0,r.kt)("h4",{id:"catch-all"},"Catch-All"),(0,r.kt)("p",null,"There are some cases where you need to catch all requests regardless of their\ncontent type. With Fastify, you can just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"'*'")," content type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('*', function (request, payload, done) {\n  var data = ''\n  payload.on('data', chunk => { data += chunk })\n  payload.on('end', () => {\n    done(null, data)\n  })\n})\n")),(0,r.kt)("p",null,"Using this, all requests that do not have a corresponding content type parser\nwill be handled by the specified function."),(0,r.kt)("p",null,"This is also useful for piping the request stream. You can define a content\nparser like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('*', function (request, payload, done) {\n  done()\n})\n")),(0,r.kt)("p",null,"and then access the core HTTP request directly for piping it where you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/hello', (request, reply) => {\n  reply.send(request.raw)\n})\n")),(0,r.kt)("p",null,"Here is a complete example that logs incoming ",(0,r.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"json\nline")," objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const split2 = require('split2')\nconst pump = require('pump')\n\nfastify.addContentTypeParser('*', (request, payload, done) => {\n  done(null, pump(payload, split2(JSON.parse)))\n})\n\nfastify.route({\n  method: 'POST',\n  url: '/api/log/jsons',\n  handler: (req, res) => {\n    req.body.on('data', d => console.log(d)) // log every incoming object\n  }\n})\n")),(0,r.kt)("p",null,"For piping file uploads you may want to check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-multipart"},"this\nplugin"),"."),(0,r.kt)("p",null,"If you want the content type parser to be executed on all content types and not\nonly on those that don't have a specific one, you should call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"removeAllContentTypeParsers")," method first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Without this call, the request body with the content type application/json would be processed by the built-in JSON parser\nfastify.removeAllContentTypeParsers()\n\nfastify.addContentTypeParser('*', function (request, payload, done) {\n  var data = ''\n  payload.on('data', chunk => { data += chunk })\n  payload.on('end', () => {\n    done(null, data)\n  })\n})\n")))}c.isMDXComponent=!0}}]);