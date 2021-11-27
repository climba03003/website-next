"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[5494],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7695:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Reply",sidebar_label:"Reply",hide_title:!1},s=void 0,p={unversionedId:"Reply",id:"version-v2/Reply",isDocsHomePage:!1,title:"Reply",description:"- Introduction",source:"@site/versioned_docs/version-v2/Reply.md",sourceDirName:".",slug:"/Reply",permalink:"/website-next/docs/v2/Reply",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Reply.md",tags:[],version:"v2",frontMatter:{title:"Reply",sidebar_label:"Reply",hide_title:!1},sidebar:"version-v2/tutorialSidebar",previous:{title:"Recommendations",permalink:"/website-next/docs/v2/Recommendations"},next:{title:"Request",permalink:"/website-next/docs/v2/Request"}},d=[{value:"Introduction",id:"introduction",children:[],level:3},{value:".code(statusCode)",id:"codestatuscode",children:[],level:3},{value:".statusCode",id:"statuscode",children:[],level:3},{value:".header(key, value)",id:"headerkey-value",children:[],level:3},{value:".headers(object)",id:"headersobject",children:[],level:3},{value:".getHeader(key)",id:"getheaderkey",children:[],level:3},{value:".removeHeader(key)",id:"removeheaderkey",children:[],level:3},{value:".hasHeader(key)",id:"hasheaderkey",children:[],level:3},{value:".redirect(code , dest)",id:"redirectcode--dest",children:[],level:3},{value:".callNotFound()",id:"callnotfound",children:[],level:3},{value:".getResponseTime()",id:"getresponsetime",children:[],level:3},{value:".type(contentType)",id:"typecontenttype",children:[],level:3},{value:".serializer(func)",id:"serializerfunc",children:[],level:3},{value:".sent",id:"sent",children:[],level:3},{value:".send(data)",id:"senddata",children:[{value:"Objects",id:"objects",children:[],level:4},{value:"Strings",id:"strings",children:[],level:4},{value:"Streams",id:"streams",children:[],level:4},{value:"Buffers",id:"buffers",children:[],level:4},{value:"Errors",id:"errors",children:[],level:4},{value:"Type of the final payload",id:"type-of-the-final-payload",children:[],level:4},{value:"Async-Await and Promises",id:"async-await-and-promises",children:[],level:4}],level:3},{value:".then(fullfilled, rejected)",id:"thenfullfilled-rejected",children:[],level:3}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#codestatuscode"},".code(statusCode)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#statuscode"},".statusCode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#headerkey-value"},".header(key, value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#headersobject"},".headers(object)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getheaderkey"},".getHeader(key)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#removeheaderkey"},".removeHeader(key)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hasheaderkey"},".hasHeader(key)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#redirectcode--dest"},".redirect([code ,] dest)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#callnotfound"},".callNotFound()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getresponsetime"},".getResponseTime()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#typecontenttype"},".type(contentType)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#serializerfunc"},".serializer(func)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sent"},".sent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#senddata"},".send(data)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#objects"},"Objects")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#strings"},"Strings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#streams"},"Streams")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buffers"},"Buffers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#errors"},"Errors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type-of-the-final-payload"},"Type of the final payload")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#async-await-and-promises"},"Async-Await and Promises")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thenfullfilled-rejected"},".then(fullfilled, rejected)"))),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("a",{name:"introduction"}),(0,l.kt)("p",null,"The second parameter of the handler function is ",(0,l.kt)("inlineCode",{parentName:"p"},"Reply"),".\nReply is a core Fastify object that exposes the following functions\nand properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".code(statusCode)")," - Sets the status code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".status(statusCode)")," - An alias for ",(0,l.kt)("inlineCode",{parentName:"li"},".code(statusCode)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".statusCode")," - Read and set the HTTP status code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".header(name, value)")," - Sets a response header."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".headers(object)")," - Sets all the keys of the object as a response headers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".getHeader(name)")," - Retrieve value of already set header."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".removeHeader(key)")," - Remove the value of a previously set header."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".hasHeader(name)")," - Determine if a header has been set."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".type(value)")," - Sets the header ",(0,l.kt)("inlineCode",{parentName:"li"},"Content-Type"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".redirect([code,] url)")," - Redirect to the specified url, the status code is optional (default to ",(0,l.kt)("inlineCode",{parentName:"li"},"302"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".callNotFound()")," - Invokes the custom not found handler."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".serialize(payload)")," - Serializes the specified payload using the default json serializer or using the custom serializer (if one is set) and returns the serialized payload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".serializer(function)")," - Sets a custom serializer for the payload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".send(payload)")," - Sends the payload to the user, could be a plain text, a buffer, JSON, stream, or an Error object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".sent")," - A boolean value that you can use if you need to know if ",(0,l.kt)("inlineCode",{parentName:"li"},"send")," has already been called."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".res")," - The ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_serverresponse"},(0,l.kt)("inlineCode",{parentName:"a"},"http.ServerResponse"))," from Node core."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".log")," - The logger instance of the incoming request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".request")," - The incoming request.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', options, function (request, reply) {\n  // Your code\n  reply\n    .code(200)\n    .header('Content-Type', 'application/json; charset=utf-8')\n    .send({ hello: 'world' })\n})\n")),(0,l.kt)("p",null,"Additionally, ",(0,l.kt)("inlineCode",{parentName:"p"},"Reply")," provides access to the context of the request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', {config: {foo: 'bar'}}, function (request, reply) {\n  reply.send('handler config.foo = ' + reply.context.config.foo)\n})\n")),(0,l.kt)("h3",{id:"codestatuscode"},".code(statusCode)"),(0,l.kt)("a",{name:"code"}),(0,l.kt)("p",null,"If not set via ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.code"),", the resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"statusCode")," will be ",(0,l.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,l.kt)("h3",{id:"statuscode"},".statusCode"),(0,l.kt)("a",{name:"statusCode"}),(0,l.kt)("p",null,"This property reads and sets the HTTP status code. It is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.code()")," when used as a setter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (reply.statusCode >= 299) {\n  reply.statusCode = 500\n}\n")),(0,l.kt)("h3",{id:"headerkey-value"},".header(key, value)"),(0,l.kt)("a",{name:"header"}),(0,l.kt)("p",null,"Sets a response header. If the value is omitted or undefined it is coerced\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"''"),"."),(0,l.kt)("p",null,"For more information, see ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest/docs/api/http.html#http_response_setheader_name_value"},(0,l.kt)("inlineCode",{parentName:"a"},"http.ServerResponse#setHeader")),"."),(0,l.kt)("h3",{id:"headersobject"},".headers(object)"),(0,l.kt)("a",{name:"headers"}),(0,l.kt)("p",null,"Sets all the keys of the object as response headers. ",(0,l.kt)("a",{parentName:"p",href:"#headerkey-value"},(0,l.kt)("inlineCode",{parentName:"a"},".header"))," will be called under the hood."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.headers({\n  'x-foo': 'foo',\n  'x-bar': 'bar'\n})\n")),(0,l.kt)("h3",{id:"getheaderkey"},".getHeader(key)"),(0,l.kt)("a",{name:"getHeader"}),(0,l.kt)("p",null,"Retrieves the value of a previously set header."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.header('x-foo', 'foo') // setHeader: key, value\nreply.getHeader('x-foo') // 'foo'\n")),(0,l.kt)("h3",{id:"removeheaderkey"},".removeHeader(key)"),(0,l.kt)("a",{name:"getHeader"}),(0,l.kt)("p",null,"Remove the value of a previously set header."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.header('x-foo', 'foo')\nreply.removeHeader('x-foo')\nreply.getHeader('x-foo') // undefined\n")),(0,l.kt)("h3",{id:"hasheaderkey"},".hasHeader(key)"),(0,l.kt)("a",{name:"hasHeader"}),(0,l.kt)("p",null,"Returns a boolean indicating if the specified header has been set."),(0,l.kt)("h3",{id:"redirectcode--dest"},".redirect(","[code ,]"," dest)"),(0,l.kt)("a",{name:"redirect"}),(0,l.kt)("p",null,"Redirects a request to the specified url, the status code is optional, default to ",(0,l.kt)("inlineCode",{parentName:"p"},"302")," (if status code is not already set by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"code"),")."),(0,l.kt)("p",null,"Example (no ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.code()")," call) sets status code to ",(0,l.kt)("inlineCode",{parentName:"p"},"302")," and redirects to ",(0,l.kt)("inlineCode",{parentName:"p"},"/home")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.redirect('/home')\n")),(0,l.kt)("p",null,"Example (no ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.code()")," call) sets status code to ",(0,l.kt)("inlineCode",{parentName:"p"},"303")," and redirects to ",(0,l.kt)("inlineCode",{parentName:"p"},"/home")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.redirect(303, '/home')\n")),(0,l.kt)("p",null,"Example (",(0,l.kt)("inlineCode",{parentName:"p"},"reply.code()")," call) sets status code to ",(0,l.kt)("inlineCode",{parentName:"p"},"303")," and redirects to ",(0,l.kt)("inlineCode",{parentName:"p"},"/home")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.code(303).redirect('/home')\n")),(0,l.kt)("p",null,"Example (",(0,l.kt)("inlineCode",{parentName:"p"},"reply.code()")," call) sets status code to ",(0,l.kt)("inlineCode",{parentName:"p"},"302")," and redirects to ",(0,l.kt)("inlineCode",{parentName:"p"},"/home")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.code(303).redirect(302, '/home')\n")),(0,l.kt)("h3",{id:"callnotfound"},".callNotFound()"),(0,l.kt)("a",{name:"call-not-found"}),(0,l.kt)("p",null,"Invokes the custom not found handler. Note that it will only call ",(0,l.kt)("inlineCode",{parentName:"p"},"preHandler")," hook specified in ",(0,l.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Server#set-not-found-handler"},(0,l.kt)("inlineCode",{parentName:"a"},"setNotFoundHandler")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.callNotFound()\n")),(0,l.kt)("h3",{id:"getresponsetime"},".getResponseTime()"),(0,l.kt)("a",{name:"getResponseTime"}),(0,l.kt)("p",null,"Invokes the custom response time getter to calculate the amount of time passed since the request was started."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const milliseconds = reply.getResponseTime()\n")),(0,l.kt)("h3",{id:"typecontenttype"},".type(contentType)"),(0,l.kt)("a",{name:"type"}),(0,l.kt)("p",null,"Sets the content type for the response.\nThis is a shortcut for ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.header('Content-Type', 'the/type')"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply.type('text/html')\n")),(0,l.kt)("h3",{id:"serializerfunc"},".serializer(func)"),(0,l.kt)("a",{name:"serializer"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".send()")," will by default JSON-serialize any value that is not one of: ",(0,l.kt)("inlineCode",{parentName:"p"},"Buffer"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Error"),". If you need to replace the default serializer with a custom serializer for a particular request, you can do so with the ",(0,l.kt)("inlineCode",{parentName:"p"},".serializer()")," utility. Be aware that if you are using a custom serializer, you must set a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"'Content-Type'")," header."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply\n  .header('Content-Type', 'application/x-protobuf')\n  .serializer(protoBuf.serialize)\n")),(0,l.kt)("p",null,"Note that you don't need to use this utility inside a ",(0,l.kt)("inlineCode",{parentName:"p"},"handler")," because Buffers, streams, and strings (unless a serializer is set) are considered to already be serialized."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reply\n  .header('Content-Type', 'application/x-protobuf')\n  .send(protoBuf.serialize(data))\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#send"},(0,l.kt)("inlineCode",{parentName:"a"},".send()"))," for more information on sending different types of values."),(0,l.kt)("h3",{id:"sent"},".sent"),(0,l.kt)("a",{name:"sent"}),(0,l.kt)("p",null,"As the name suggests, ",(0,l.kt)("inlineCode",{parentName:"p"},".sent")," is a property to indicate if\na response has been sent via ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.send()"),"."),(0,l.kt)("p",null,"In case a route handler is defined as an async function or it\nreturns a promise, it is possible to set ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.sent = true"),"\nto indicate that the automatic invocation of ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.send()")," once the\nhandler promise resolve should be skipped. By setting ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.sent =\ntrue"),", an application claims full responsibility of the low-level\nrequest and response. Moreover, hooks will not be invoked."),(0,l.kt)("p",null,"As an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/', (req, reply) => {\n  reply.sent = true\n  reply.res.end('hello world')\n\n  return Promise.resolve('this will be skipped')\n})\n")),(0,l.kt)("p",null,"If the handler rejects, the error will be logged."),(0,l.kt)("h3",{id:"senddata"},".send(data)"),(0,l.kt)("a",{name:"send"}),(0,l.kt)("p",null,"As the name suggests, ",(0,l.kt)("inlineCode",{parentName:"p"},".send()")," is the function that sends the payload to the end user."),(0,l.kt)("h4",{id:"objects"},"Objects"),(0,l.kt)("a",{name:"send-object"}),(0,l.kt)("p",null,"As noted above, if you are sending JSON objects, ",(0,l.kt)("inlineCode",{parentName:"p"},"send")," will serialize the object with ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/fast-json-stringify"},"fast-json-stringify")," if you set an output schema, otherwise ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," will be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/json', options, function (request, reply) {\n  reply.send({ hello: 'world' })\n})\n")),(0,l.kt)("h4",{id:"strings"},"Strings"),(0,l.kt)("a",{name:"send-string"}),(0,l.kt)("p",null,"If you pass a string to ",(0,l.kt)("inlineCode",{parentName:"p"},"send")," without a ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type"),", it will be sent as ",(0,l.kt)("inlineCode",{parentName:"p"},"text/plain; charset=utf-8"),". If you set the ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type")," header and pass a string to ",(0,l.kt)("inlineCode",{parentName:"p"},"send"),", it will be serialized with the custom serializer if one is set, otherwise it will be sent unmodified (unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type")," header is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json; charset=utf-8"),", in which case it will be JSON-serialized like an object \u2014 see the section above)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/json', options, function (request, reply) {\n  reply.send('plain string')\n})\n")),(0,l.kt)("h4",{id:"streams"},"Streams"),(0,l.kt)("a",{name:"send-streams"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"send")," can also handle streams out of the box, internally uses ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pump"},"pump")," to avoid leaks of file descriptors. If you are sending a stream and you have not set a ",(0,l.kt)("inlineCode",{parentName:"p"},"'Content-Type'")," header, ",(0,l.kt)("em",{parentName:"p"},"send")," will set it at ",(0,l.kt)("inlineCode",{parentName:"p"},"'application/octet-stream'"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/streams', function (request, reply) {\n  const fs = require('fs')\n  const stream = fs.createReadStream('some-file', 'utf8')\n  reply.send(stream)\n})\n")),(0,l.kt)("h4",{id:"buffers"},"Buffers"),(0,l.kt)("a",{name:"send-buffers"}),(0,l.kt)("p",null,"If you are sending a buffer and you have not set a ",(0,l.kt)("inlineCode",{parentName:"p"},"'Content-Type'")," header, ",(0,l.kt)("em",{parentName:"p"},"send")," will set it to ",(0,l.kt)("inlineCode",{parentName:"p"},"'application/octet-stream'"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs')\nfastify.get('/streams', function (request, reply) {\n  fs.readFile('some-file', (err, fileBuffer) => {\n    reply.send(err || fileBuffer)\n  })\n})\n")),(0,l.kt)("h4",{id:"errors"},"Errors"),(0,l.kt)("a",{name:"errors"}),(0,l.kt)("p",null,"If you pass to ",(0,l.kt)("em",{parentName:"p"},"send")," an object that is an instance of ",(0,l.kt)("em",{parentName:"p"},"Error"),", Fastify will automatically create an error structured as the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  error: String        // the http error message\n  code: String         // the Fastify error code\n  message: String      // the user error message\n  statusCode: Number   // the http status code\n}\n")),(0,l.kt)("p",null,"You can add some custom property to the Error object, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"headers"),", that will be used to enhance the http response.",(0,l.kt)("br",null),"\n",(0,l.kt)("em",{parentName:"p"},"Note: If you are passing an error to ",(0,l.kt)("inlineCode",{parentName:"em"},"send")," and the statusCode is less than 400, Fastify will automatically set it at 500.")),(0,l.kt)("p",null,"Tip: you can simplify errors by using the ",(0,l.kt)("a",{parentName:"p",href:"https://npm.im/http-errors"},(0,l.kt)("inlineCode",{parentName:"a"},"http-errors"))," module or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-sensible"},(0,l.kt)("inlineCode",{parentName:"a"},"fastify-sensible"))," plugin to generate errors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', function (request, reply) {\n  reply.send(httpErrors.Gone())\n})\n")),(0,l.kt)("p",null,"If you want to completely customize the error handling, checkout ",(0,l.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Server#seterrorhandler"},(0,l.kt)("inlineCode",{parentName:"a"},"setErrorHandler"))," API.",(0,l.kt)("br",null),"\n",(0,l.kt)("em",{parentName:"p"},"Note: you are responsibile for logging when customizing the error handler")),(0,l.kt)("p",null,"API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.setErrorHandler(function (error, request, reply) {\n  request.log.warn(error)\n  var statusCode = error.statusCode >= 400 ? error.statusCode : 500\n  reply\n    .code(statusCode)\n    .type('text/plain')\n    .send(statusCode >= 500 ? 'Internal server error' : error.message)\n})\n")),(0,l.kt)("p",null,"The not found errors generated by the router will use the  ",(0,l.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Server#setnotfoundhandler"},(0,l.kt)("inlineCode",{parentName:"a"},"setNotFoundHandler"))),(0,l.kt)("p",null,"API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.setNotFoundHandler(function (request, reply) {\n  reply\n    .code(404)\n    .type('text/plain')\n    .send('a custom not found')\n})\n")),(0,l.kt)("h4",{id:"type-of-the-final-payload"},"Type of the final payload"),(0,l.kt)("a",{name:"payload-type"}),(0,l.kt)("p",null,"The type of the sent payload (after serialization and going through any ",(0,l.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Hooks#the-onsend-hook"},(0,l.kt)("inlineCode",{parentName:"a"},"onSend")," hooks"),") must be one of the following types, otherwise an error will be thrown:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Buffer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stream")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("h4",{id:"async-await-and-promises"},"Async-Await and Promises"),(0,l.kt)("a",{name:"async-await-promise"}),(0,l.kt)("p",null,"Fastify natively handles promises and supports async-await.",(0,l.kt)("br",null),"\n",(0,l.kt)("em",{parentName:"p"},"Note that in the following examples we are not using reply.send.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const delay = promisify(setTimeout)\n\nfastify.get('/promises', options, function (request, reply) {\n return delay(200).then(() => { return { hello: 'world' }})\n})\n\nfastify.get('/async-await', options, async function (request, reply) {\n  await delay(200)\n  return { hello: 'world' }\n})\n")),(0,l.kt)("p",null,"Rejected promises default to a ",(0,l.kt)("inlineCode",{parentName:"p"},"500")," HTTP status code. Reject the promise, or ",(0,l.kt)("inlineCode",{parentName:"p"},"throw")," in an ",(0,l.kt)("inlineCode",{parentName:"p"},"async function"),", with an ",(0,l.kt)("em",{parentName:"p"},"Error")," object that has ",(0,l.kt)("inlineCode",{parentName:"p"},"statusCode")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"status"),") and ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," properties to modify the reply. Throwing plain objects is not supported, it must be an instance of ",(0,l.kt)("em",{parentName:"p"},"Error"),", see:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/teapot', async function (request, reply) => {\n  const err = new Error()\n  err.statusCode = 418\n  err.message = 'short and stout'\n  throw err\n})\n")),(0,l.kt)("p",null,"If you want to know more please review ",(0,l.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Routes#async-await"},"Routes#async-await"),"."),(0,l.kt)("h3",{id:"thenfullfilled-rejected"},".then(fullfilled, rejected)"),(0,l.kt)("a",{name:"then"}),(0,l.kt)("p",null,"As the name suggests, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Reply")," object can be awaited upon, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"await reply")," will wait until the reply is sent.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," syntax calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"reply.then()"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reply.then(fullfilled, rejected)")," accepts two parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fullfilled")," will be called when a response has been fully sent,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rejected")," will be called if the underlying stream had an error, e.g.\nthe socket has been destroyed.")),(0,l.kt)("p",null,"For more details, see:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/issues/1864"},"https://github.com/fastify/fastify/issues/1864")," for the discussion about this feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://promisesaplus.com/"},"https://promisesaplus.com/")," for the definition of thenables"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then")," for the signature")))}m.isMDXComponent=!0}}]);