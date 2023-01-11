"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[54634],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>R});var n=t(67294);function _(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){_(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,_=function(e,r){if(null==e)return{};var t,n,_={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(_[t]=e[t]);return _}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(_[t]=e[t])}return _}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},E={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,_=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),R=_,T=p["".concat(o,".").concat(R)]||p[R]||E[R]||a;return t?n.createElement(T,i(i({ref:r},d),{},{components:t})):n.createElement(T,i({ref:r},d))}));function R(e,r){var t=arguments,_=r&&r.mdxType;if("string"==typeof e||_){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:_,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34578:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),_=(t(67294),t(3905));const a={},i=void 0,l={unversionedId:"Reference/Errors",id:"version-v4.9.x/Reference/Errors",title:"Errors",description:"Errors",source:"@site/versioned_docs/version-v4.9.x/Reference/Errors.md",sourceDirName:"Reference",slug:"/Reference/Errors",permalink:"/website-next/docs/v4.9.x/Reference/Errors",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Errors.md",tags:[],version:"v4.9.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Encapsulation",permalink:"/website-next/docs/v4.9.x/Reference/Encapsulation"},next:{title:"HTTP2",permalink:"/website-next/docs/v4.9.x/Reference/HTTP2"}},o={},s=[{value:"Errors",id:"errors",level:2},{value:"Error Handling In Node.js",id:"error-handling-in-nodejs",level:3},{value:"Uncaught Errors",id:"uncaught-errors",level:4},{value:"Catching Errors In Promises",id:"catching-errors-in-promises",level:4},{value:"Errors In Fastify",id:"errors-in-fastify",level:3},{value:"Errors In Input Data",id:"errors-in-input-data",level:4},{value:"Catching Uncaught Errors In Fastify",id:"catching-uncaught-errors-in-fastify",level:4},{value:"Errors In Fastify Lifecycle Hooks And A Custom Error Handler",id:"errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler",level:3},{value:"Fastify Error Codes",id:"fastify-error-codes",level:3},{value:"FST_ERR_NOT_FOUND",id:"fst_err_not_found",level:4},{value:"FST_ERR_CTP_INVALID_TYPE",id:"fst_err_ctp_invalid_type",level:4},{value:"FST_ERR_CTP_EMPTY_TYPE",id:"fst_err_ctp_empty_type",level:4},{value:"FST_ERR_CTP_INVALID_HANDLER",id:"fst_err_ctp_invalid_handler",level:4},{value:"FST_ERR_CTP_INVALID_PARSE_TYPE",id:"fst_err_ctp_invalid_parse_type",level:4},{value:"FST_ERR_CTP_BODY_TOO_LARGE",id:"fst_err_ctp_body_too_large",level:4},{value:"FST_ERR_CTP_INVALID_MEDIA_TYPE",id:"fst_err_ctp_invalid_media_type",level:4},{value:"FST_ERR_CTP_INVALID_CONTENT_LENGTH",id:"fst_err_ctp_invalid_content_length",level:4},{value:"FST_ERR_CTP_EMPTY_JSON_BODY",id:"fst_err_ctp_empty_json_body",level:4},{value:"FST_ERR_DEC_ALREADY_PRESENT",id:"fst_err_dec_already_present",level:4},{value:"FST_ERR_DEC_DEPENDENCY_INVALID_TYPE",id:"fst_err_dec_dependency_invalid_type",level:4},{value:"FST_ERR_DEC_MISSING_DEPENDENCY",id:"fst_err_dec_missing_dependency",level:4},{value:"FST_ERR_DEC_AFTER_START",id:"fst_err_dec_after_start",level:4},{value:"FST_ERR_HOOK_INVALID_TYPE",id:"fst_err_hook_invalid_type",level:4},{value:"FST_ERR_HOOK_INVALID_HANDLER",id:"fst_err_hook_invalid_handler",level:4},{value:"FST_ERR_MISSING_MIDDLEWARE",id:"fst_err_missing_middleware",level:4},{value:"FST_ERR_LOG_INVALID_DESTINATION",id:"fst_err_log_invalid_destination",level:4},{value:"FST_ERR_REP_INVALID_PAYLOAD_TYPE",id:"fst_err_rep_invalid_payload_type",level:4},{value:"FST_ERR_REP_ALREADY_SENT",id:"fst_err_rep_already_sent",level:4},{value:"FST_ERR_REP_SENT_VALUE",id:"fst_err_rep_sent_value",level:4},{value:"FST_ERR_SEND_INSIDE_ONERR",id:"fst_err_send_inside_onerr",level:4},{value:"FST_ERR_SEND_UNDEFINED_ERR",id:"fst_err_send_undefined_err",level:4},{value:"FST_ERR_BAD_STATUS_CODE",id:"fst_err_bad_status_code",level:4},{value:"FST_ERR_BAD_TRAILER_NAME",id:"fst_err_bad_trailer_name",level:4},{value:"FST_ERR_BAD_TRAILER_VALUE",id:"fst_err_bad_trailer_value",level:4},{value:"FST_ERR_MISSING_SERIALIZATION_FN",id:"fst_err_missing_serialization_fn",level:4},{value:"FST_ERR_REQ_INVALID_VALIDATION_INVOCATION",id:"fst_err_req_invalid_validation_invocation",level:4},{value:"FST_ERR_SCH_MISSING_ID",id:"fst_err_sch_missing_id",level:4},{value:"FST_ERR_SCH_ALREADY_PRESENT",id:"fst_err_sch_already_present",level:4},{value:"FST_ERR_SCH_DUPLICATE",id:"fst_err_sch_duplicate",level:4},{value:"FST_ERR_SCH_VALIDATION_BUILD",id:"fst_err_sch_validation_build",level:4},{value:"FST_ERR_SCH_SERIALIZATION_BUILD",id:"fst_err_sch_serialization_build",level:4},{value:"FST_ERR_HTTP2_INVALID_VERSION",id:"fst_err_http2_invalid_version",level:4},{value:"FST_ERR_INIT_OPTS_INVALID",id:"fst_err_init_opts_invalid",level:4},{value:"FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE",id:"fst_err_force_close_connections_idle_not_available",level:4},{value:"FST_ERR_BAD_URL",id:"fst_err_bad_url",level:4},{value:"FST_ERR_ASYNC_CONSTRAINT",id:"fst_err_async_constraint",level:3},{value:"FST_ERR_DEFAULT_ROUTE_INVALID_TYPE",id:"fst_err_default_route_invalid_type",level:4},{value:"FST_ERR_INVALID_URL",id:"fst_err_invalid_url",level:4},{value:"FST_ERR_REOPENED_CLOSE_SERVER",id:"fst_err_reopened_close_server",level:4},{value:"FST_ERR_REOPENED_SERVER",id:"fst_err_reopened_server",level:4},{value:"FST_ERR_PLUGIN_VERSION_MISMATCH",id:"fst_err_plugin_version_mismatch",level:4}],d={toc:s};function E(e){let{components:r,...t}=e;return(0,_.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,_.kt)("h2",{id:"errors"},"Errors"),(0,_.kt)("a",{id:"errors"}),(0,_.kt)("h3",{id:"error-handling-in-nodejs"},"Error Handling In Node.js"),(0,_.kt)("a",{id:"error-handling"}),(0,_.kt)("h4",{id:"uncaught-errors"},"Uncaught Errors"),(0,_.kt)("p",null,"In Node.js, uncaught errors are likely to cause memory leaks, file descriptor\nleaks, and other major production issues.\n",(0,_.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/domain-postmortem/"},"Domains")," were a failed\nattempt to fix this."),(0,_.kt)("p",null,"Given that it is not possible to process all uncaught errors sensibly, the best\nway to deal with them is to\n",(0,_.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly"},"crash"),"."),(0,_.kt)("h4",{id:"catching-errors-in-promises"},"Catching Errors In Promises"),(0,_.kt)("p",null,"If you are using promises, you should attach a ",(0,_.kt)("inlineCode",{parentName:"p"},".catch()")," handler synchronously."),(0,_.kt)("h3",{id:"errors-in-fastify"},"Errors In Fastify"),(0,_.kt)("p",null,"Fastify follows an all-or-nothing approach and aims to be lean and optimal as\nmuch as possible. The developer is responsible for making sure that the errors\nare handled properly."),(0,_.kt)("h4",{id:"errors-in-input-data"},"Errors In Input Data"),(0,_.kt)("p",null,"Most errors are a result of unexpected input data, so we recommend ",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Validation-and-Serialization"},"validating\nyour input data against a JSON schema"),"."),(0,_.kt)("h4",{id:"catching-uncaught-errors-in-fastify"},"Catching Uncaught Errors In Fastify"),(0,_.kt)("p",null,"Fastify tries to catch as many uncaught errors as it can without hindering\nperformance. This includes:"),(0,_.kt)("ol",null,(0,_.kt)("li",{parentName:"ol"},"synchronous routes, e.g. ",(0,_.kt)("inlineCode",{parentName:"li"},"app.get('/', () => { throw new Error('kaboom') })")),(0,_.kt)("li",{parentName:"ol"},(0,_.kt)("inlineCode",{parentName:"li"},"async")," routes, e.g. ",(0,_.kt)("inlineCode",{parentName:"li"},"app.get('/', async () => { throw new Error('kaboom')\n})"))),(0,_.kt)("p",null,"The error in both cases will be caught safely and routed to Fastify's default\nerror handler for a generic ",(0,_.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")," response."),(0,_.kt)("p",null,"To customize this behavior you should use\n",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Server#seterrorhandler"},(0,_.kt)("inlineCode",{parentName:"a"},"setErrorHandler")),"."),(0,_.kt)("h3",{id:"errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler"},"Errors In Fastify Lifecycle Hooks And A Custom Error Handler"),(0,_.kt)("p",null,"From the ",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Hooks#manage-errors-from-a-hook"},"Hooks documentation"),":"),(0,_.kt)("blockquote",null,(0,_.kt)("p",{parentName:"blockquote"},"If you get an error during the execution of your hook, just pass it to\n",(0,_.kt)("inlineCode",{parentName:"p"},"done()")," and Fastify will automatically close the request and send the\nappropriate error code to the user.")),(0,_.kt)("p",null,"When a custom error handler has been defined through\n",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Server#seterrorhandler"},(0,_.kt)("inlineCode",{parentName:"a"},"setErrorHandler")),", the custom error handler will\nreceive the error passed to the ",(0,_.kt)("inlineCode",{parentName:"p"},"done()")," callback (or through other supported\nautomatic error handling mechanisms). If ",(0,_.kt)("inlineCode",{parentName:"p"},"setErrorHandler")," has been used\nmultiple times to define multiple handlers, the error will be routed to the most\nprecedent handler defined within the error ",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Encapsulation"},"encapsulation\ncontext"),". Error handlers are fully encapsulated, so a\n",(0,_.kt)("inlineCode",{parentName:"p"},"setErrorHandler")," call within a plugin will limit the error handler to that\nplugin's context."),(0,_.kt)("p",null,"The root error handler is Fastify's generic error handler. This error handler\nwill use the headers and status code in the ",(0,_.kt)("inlineCode",{parentName:"p"},"Error")," object, if they exist. The\nheaders and status code will not be automatically set if a custom error handler\nis provided."),(0,_.kt)("p",null,"Some things to consider in your custom error handler:"),(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},(0,_.kt)("p",{parentName:"li"},"you can ",(0,_.kt)("inlineCode",{parentName:"p"},"reply.send(data)"),", which will behave as it would in ",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Reply#senddata"},"regular route\nhandlers")),(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},"objects are serialized, triggering the ",(0,_.kt)("inlineCode",{parentName:"li"},"preSerialization")," lifecycle hook if\nyou have one defined"),(0,_.kt)("li",{parentName:"ul"},"strings, buffers, and streams are sent to the client, with appropriate\nheaders (no serialization)"))),(0,_.kt)("li",{parentName:"ul"},(0,_.kt)("p",{parentName:"li"},"You can throw a new error in your custom error handler - errors (new error or\nthe received error parameter re-thrown) - will call the parent ",(0,_.kt)("inlineCode",{parentName:"p"},"errorHandler"),"."),(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},(0,_.kt)("inlineCode",{parentName:"li"},"onError")," hook will be triggered once only for the first error being thrown."),(0,_.kt)("li",{parentName:"ul"},"an error will not be triggered twice from a lifecycle hook - Fastify\ninternally monitors the error invocation to avoid infinite loops for errors\nthrown in the reply phases of the lifecycle. (those after the route handler)")))),(0,_.kt)("h3",{id:"fastify-error-codes"},"Fastify Error Codes"),(0,_.kt)("a",{id:"fastify-error-codes"}),(0,_.kt)("p",null,"You can access ",(0,_.kt)("inlineCode",{parentName:"p"},"errorCodes")," for mapping:"),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-js"},"// ESM\nimport { errorCodes } from 'fastify'\n\n// CommonJs\nconst errorCodes = require('fastify').errorCodes\n")),(0,_.kt)("p",null,"For example:"),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-js"},"const Fastify = require('./fastify')\n\n// Instantiate the framework\nconst fastify = Fastify({\n  logger: true\n})\n\n// Declare a route\nfastify.get('/', function (request, reply) {\n  reply.code('bad status code').send({ hello: 'world' })\n})\n\nfastify.setErrorHandler(function (error, request, reply) {\n  if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {\n    // Log error\n    this.log.error(error)\n    // Send error response\n    reply.status(500).send({ ok: false })\n  }\n})\n\n// Run the server!\nfastify.listen({ port: 3000 }, function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  // Server is now listening on ${address}\n})\n")),(0,_.kt)("h4",{id:"fst_err_not_found"},"FST_ERR_NOT_FOUND"),(0,_.kt)("a",{id:"FST_ERR_NOT_FOUND"}),(0,_.kt)("p",null,"404 Not Found."),(0,_.kt)("a",{name:"FST_ERR_CTP_ALREADY_PRESENT"}),"#### FST_ERR_CTP_ALREADY_PRESENT",(0,_.kt)("a",{id:"FST_ERR_CTP_ALREADY_PRESENT"}),(0,_.kt)("p",null,"The parser for this content type was already registered."),(0,_.kt)("h4",{id:"fst_err_ctp_invalid_type"},"FST_ERR_CTP_INVALID_TYPE"),(0,_.kt)("a",{id:"FST_ERR_CTP_INVALID_TYPE"}),(0,_.kt)("p",null,"The ",(0,_.kt)("inlineCode",{parentName:"p"},"Content-Type")," should be a string."),(0,_.kt)("h4",{id:"fst_err_ctp_empty_type"},"FST_ERR_CTP_EMPTY_TYPE"),(0,_.kt)("a",{id:"FST_ERR_CTP_EMPTY_TYPE"}),(0,_.kt)("p",null,"The content type cannot be an empty string."),(0,_.kt)("h4",{id:"fst_err_ctp_invalid_handler"},"FST_ERR_CTP_INVALID_HANDLER"),(0,_.kt)("a",{id:"FST_ERR_CTP_INVALID_HANDLER"}),(0,_.kt)("p",null,"An invalid handler was passed for the content type."),(0,_.kt)("h4",{id:"fst_err_ctp_invalid_parse_type"},"FST_ERR_CTP_INVALID_PARSE_TYPE"),(0,_.kt)("a",{id:"FST_ERR_CTP_INVALID_PARSE_TYPE"}),(0,_.kt)("p",null,"The provided parse type is not supported. Accepted values are ",(0,_.kt)("inlineCode",{parentName:"p"},"string")," or\n",(0,_.kt)("inlineCode",{parentName:"p"},"buffer"),"."),(0,_.kt)("h4",{id:"fst_err_ctp_body_too_large"},"FST_ERR_CTP_BODY_TOO_LARGE"),(0,_.kt)("a",{id:"FST_ERR_CTP_BODY_TOO_LARGE"}),(0,_.kt)("p",null,"The request body is larger than the provided limit."),(0,_.kt)("p",null,"This setting can be defined in the Fastify server instance:\n",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Server#bodylimit"},(0,_.kt)("inlineCode",{parentName:"a"},"bodyLimit"))),(0,_.kt)("h4",{id:"fst_err_ctp_invalid_media_type"},"FST_ERR_CTP_INVALID_MEDIA_TYPE"),(0,_.kt)("a",{id:"FST_ERR_CTP_INVALID_MEDIA_TYPE"}),(0,_.kt)("p",null,"The received media type is not supported (i.e. there is no suitable\n",(0,_.kt)("inlineCode",{parentName:"p"},"Content-Type")," parser for it)."),(0,_.kt)("h4",{id:"fst_err_ctp_invalid_content_length"},"FST_ERR_CTP_INVALID_CONTENT_LENGTH"),(0,_.kt)("a",{id:"FST_ERR_CTP_INVALID_CONTENT_LENGTH"}),(0,_.kt)("p",null,"Request body size did not match ",(0,_.kt)("inlineCode",{parentName:"p"},"Content-Length"),"."),(0,_.kt)("h4",{id:"fst_err_ctp_empty_json_body"},"FST_ERR_CTP_EMPTY_JSON_BODY"),(0,_.kt)("a",{id:"FST_ERR_CTP_EMPTY_JSON_BODY"}),(0,_.kt)("p",null,"Body cannot be empty when content-type is set to ",(0,_.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,_.kt)("h4",{id:"fst_err_dec_already_present"},"FST_ERR_DEC_ALREADY_PRESENT"),(0,_.kt)("a",{id:"FST_ERR_DEC_ALREADY_PRESENT"}),(0,_.kt)("p",null,"A decorator with the same name is already registered."),(0,_.kt)("h4",{id:"fst_err_dec_dependency_invalid_type"},"FST_ERR_DEC_DEPENDENCY_INVALID_TYPE"),(0,_.kt)("a",{id:"FST_ERR_DEC_DEPENDENCY_INVALID_TYPE"}),(0,_.kt)("p",null,"The dependencies of decorator must be of type ",(0,_.kt)("inlineCode",{parentName:"p"},"Array"),"."),(0,_.kt)("h4",{id:"fst_err_dec_missing_dependency"},"FST_ERR_DEC_MISSING_DEPENDENCY"),(0,_.kt)("a",{id:"FST_ERR_DEC_MISSING_DEPENDENCY"}),(0,_.kt)("p",null,"The decorator cannot be registered due to a missing dependency."),(0,_.kt)("h4",{id:"fst_err_dec_after_start"},"FST_ERR_DEC_AFTER_START"),(0,_.kt)("a",{id:"FST_ERR_DEC_AFTER_START"}),(0,_.kt)("p",null,"The decorator cannot be added after start."),(0,_.kt)("h4",{id:"fst_err_hook_invalid_type"},"FST_ERR_HOOK_INVALID_TYPE"),(0,_.kt)("a",{id:"FST_ERR_HOOK_INVALID_TYPE"}),(0,_.kt)("p",null,"The hook name must be a string."),(0,_.kt)("h4",{id:"fst_err_hook_invalid_handler"},"FST_ERR_HOOK_INVALID_HANDLER"),(0,_.kt)("a",{id:"FST_ERR_HOOK_INVALID_HANDLER"}),(0,_.kt)("p",null,"The hook callback must be a function."),(0,_.kt)("h4",{id:"fst_err_missing_middleware"},"FST_ERR_MISSING_MIDDLEWARE"),(0,_.kt)("a",{id:"FST_ERR_MISSING_MIDDLEWARE"}),(0,_.kt)("p",null,"You must register a plugin for handling middlewares,\nvisit ",(0,_.kt)("a",{parentName:"p",href:"/website-next/docs/v4.9.x/Reference/Middleware"},(0,_.kt)("inlineCode",{parentName:"a"},"Middleware"))," for more info."),(0,_.kt)("a",{name:"FST_ERR_HOOK_TIMEOUT"}),"#### FST_ERR_HOOK_TIMEOUT",(0,_.kt)("p",null,"A callback for a hook timed out"),(0,_.kt)("h4",{id:"fst_err_log_invalid_destination"},"FST_ERR_LOG_INVALID_DESTINATION"),(0,_.kt)("a",{id:"FST_ERR_LOG_INVALID_DESTINATION"}),(0,_.kt)("p",null,"The logger accepts either a ",(0,_.kt)("inlineCode",{parentName:"p"},"'stream'")," or a ",(0,_.kt)("inlineCode",{parentName:"p"},"'file'")," as the destination."),(0,_.kt)("h4",{id:"fst_err_rep_invalid_payload_type"},"FST_ERR_REP_INVALID_PAYLOAD_TYPE"),(0,_.kt)("a",{id:"FST_ERR_REP_INVALID_PAYLOAD_TYPE"}),(0,_.kt)("p",null,"Reply payload can be either a ",(0,_.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,_.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,_.kt)("h4",{id:"fst_err_rep_already_sent"},"FST_ERR_REP_ALREADY_SENT"),(0,_.kt)("a",{id:"FST_ERR_REP_ALREADY_SENT"}),(0,_.kt)("p",null,"A response was already sent."),(0,_.kt)("h4",{id:"fst_err_rep_sent_value"},"FST_ERR_REP_SENT_VALUE"),(0,_.kt)("a",{id:"FST_ERR_REP_SENT_VALUE"}),(0,_.kt)("p",null,"The only possible value for ",(0,_.kt)("inlineCode",{parentName:"p"},"reply.sent")," is ",(0,_.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,_.kt)("h4",{id:"fst_err_send_inside_onerr"},"FST_ERR_SEND_INSIDE_ONERR"),(0,_.kt)("a",{id:"FST_ERR_SEND_INSIDE_ONERR"}),(0,_.kt)("p",null,"You cannot use ",(0,_.kt)("inlineCode",{parentName:"p"},"send")," inside the ",(0,_.kt)("inlineCode",{parentName:"p"},"onError")," hook."),(0,_.kt)("h4",{id:"fst_err_send_undefined_err"},"FST_ERR_SEND_UNDEFINED_ERR"),(0,_.kt)("a",{id:"FST_ERR_SEND_UNDEFINED_ERR"}),(0,_.kt)("p",null,"Undefined error has occurred."),(0,_.kt)("h4",{id:"fst_err_bad_status_code"},"FST_ERR_BAD_STATUS_CODE"),(0,_.kt)("a",{id:"FST_ERR_BAD_STATUS_CODE"}),(0,_.kt)("p",null,"Called ",(0,_.kt)("inlineCode",{parentName:"p"},"reply")," with an invalid status code."),(0,_.kt)("h4",{id:"fst_err_bad_trailer_name"},"FST_ERR_BAD_TRAILER_NAME"),(0,_.kt)("a",{id:"FST_ERR_BAD_TRAILER_NAME"}),(0,_.kt)("p",null,"Called ",(0,_.kt)("inlineCode",{parentName:"p"},"reply.trailer")," with an invalid header name."),(0,_.kt)("h4",{id:"fst_err_bad_trailer_value"},"FST_ERR_BAD_TRAILER_VALUE"),(0,_.kt)("a",{id:"FST_ERR_BAD_TRAILER_VALUE"}),(0,_.kt)("p",null,"Called ",(0,_.kt)("inlineCode",{parentName:"p"},"reply.trailer")," with an invalid type. Expected a function."),(0,_.kt)("h4",{id:"fst_err_missing_serialization_fn"},"FST_ERR_MISSING_SERIALIZATION_FN"),(0,_.kt)("a",{id:"FST_ERR_MISSING_SERIALIZATION_FN"}),(0,_.kt)("p",null,"Missing serialization function."),(0,_.kt)("h4",{id:"fst_err_req_invalid_validation_invocation"},"FST_ERR_REQ_INVALID_VALIDATION_INVOCATION"),(0,_.kt)("a",{id:"FST_ERR_REQ_INVALID_VALIDATION_INVOCATION"}),(0,_.kt)("p",null,"Invalid validation invocation. Missing validation function for\nHTTP part nor schema provided."),(0,_.kt)("h4",{id:"fst_err_sch_missing_id"},"FST_ERR_SCH_MISSING_ID"),(0,_.kt)("a",{id:"FST_ERR_SCH_MISSING_ID"}),(0,_.kt)("p",null,"The schema provided does not have ",(0,_.kt)("inlineCode",{parentName:"p"},"$id")," property."),(0,_.kt)("h4",{id:"fst_err_sch_already_present"},"FST_ERR_SCH_ALREADY_PRESENT"),(0,_.kt)("a",{id:"FST_ERR_SCH_ALREADY_PRESENT"}),(0,_.kt)("p",null,"A schema with the same ",(0,_.kt)("inlineCode",{parentName:"p"},"$id")," already exists."),(0,_.kt)("h4",{id:"fst_err_sch_duplicate"},"FST_ERR_SCH_DUPLICATE"),(0,_.kt)("a",{id:"FST_ERR_SCH_DUPLICATE"}),(0,_.kt)("p",null,"Schema with the same ",(0,_.kt)("inlineCode",{parentName:"p"},"$id")," already present!"),(0,_.kt)("h4",{id:"fst_err_sch_validation_build"},"FST_ERR_SCH_VALIDATION_BUILD"),(0,_.kt)("a",{id:"FST_ERR_SCH_VALIDATION_BUILD"}),(0,_.kt)("p",null,"The JSON schema provided for validation to a route is not valid."),(0,_.kt)("h4",{id:"fst_err_sch_serialization_build"},"FST_ERR_SCH_SERIALIZATION_BUILD"),(0,_.kt)("a",{id:"FST_ERR_SCH_SERIALIZATION_BUILD"}),(0,_.kt)("p",null,"The JSON schema provided for serialization of a route response is not valid."),(0,_.kt)("h4",{id:"fst_err_http2_invalid_version"},"FST_ERR_HTTP2_INVALID_VERSION"),(0,_.kt)("a",{id:"FST_ERR_HTTP2_INVALID_VERSION"}),(0,_.kt)("p",null,"HTTP2 is available only from node >= 8.8.1."),(0,_.kt)("h4",{id:"fst_err_init_opts_invalid"},"FST_ERR_INIT_OPTS_INVALID"),(0,_.kt)("a",{id:"FST_ERR_INIT_OPTS_INVALID"}),(0,_.kt)("p",null,"Invalid initialization options."),(0,_.kt)("h4",{id:"fst_err_force_close_connections_idle_not_available"},"FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE"),(0,_.kt)("a",{id:"FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE"}),(0,_.kt)("p",null,"Cannot set forceCloseConnections to ",(0,_.kt)("inlineCode",{parentName:"p"},"idle")," as your HTTP server\ndoes not support ",(0,_.kt)("inlineCode",{parentName:"p"},"closeIdleConnections")," method."),(0,_.kt)("a",{name:"FST_ERR_DUPLICATED_ROUTE"}),"#### FST_ERR_DUPLICATED_ROUTE",(0,_.kt)("p",null,"The HTTP method already has a registered controller for that URL"),(0,_.kt)("h4",{id:"fst_err_bad_url"},"FST_ERR_BAD_URL"),(0,_.kt)("a",{id:"FST_ERR_BAD_URL"}),(0,_.kt)("p",null,"The router received an invalid url."),(0,_.kt)("h3",{id:"fst_err_async_constraint"},"FST_ERR_ASYNC_CONSTRAINT"),(0,_.kt)("a",{id:"FST_ERR_ASYNC_CONSTRAINT"}),(0,_.kt)("p",null,"The router received an error when using asynchronous constraints."),(0,_.kt)("h4",{id:"fst_err_default_route_invalid_type"},"FST_ERR_DEFAULT_ROUTE_INVALID_TYPE"),(0,_.kt)("a",{id:"FST_ERR_DEFAULT_ROUTE_INVALID_TYPE"}),(0,_.kt)("p",null,"The ",(0,_.kt)("inlineCode",{parentName:"p"},"defaultRoute")," type should be a function."),(0,_.kt)("h4",{id:"fst_err_invalid_url"},"FST_ERR_INVALID_URL"),(0,_.kt)("a",{id:"FST_ERR_INVALID_URL"}),(0,_.kt)("p",null,"URL must be a string."),(0,_.kt)("h4",{id:"fst_err_reopened_close_server"},"FST_ERR_REOPENED_CLOSE_SERVER"),(0,_.kt)("a",{id:"FST_ERR_REOPENED_CLOSE_SERVER"}),(0,_.kt)("p",null,"Fastify has already been closed and cannot be reopened."),(0,_.kt)("h4",{id:"fst_err_reopened_server"},"FST_ERR_REOPENED_SERVER"),(0,_.kt)("a",{id:"FST_ERR_REOPENED_SERVER"}),(0,_.kt)("p",null,"Fastify is already listening."),(0,_.kt)("h4",{id:"fst_err_plugin_version_mismatch"},"FST_ERR_PLUGIN_VERSION_MISMATCH"),(0,_.kt)("a",{id:"FST_ERR_PLUGIN_VERSION_MISMATCH"}),(0,_.kt)("p",null,"Installed Fastify plugin mismatched expected version."),(0,_.kt)("a",{name:"FST_ERR_PLUGIN_CALLBACK_NOT_FN"}),"#### FST_ERR_PLUGIN_CALLBACK_NOT_FN",(0,_.kt)("p",null,"Callback for a hook is not a function (mapped directly from ",(0,_.kt)("inlineCode",{parentName:"p"},"avvio"),")"),(0,_.kt)("a",{name:"FST_ERR_PLUGIN_NOT_VALID"}),"#### FST_ERR_PLUGIN_NOT_VALID",(0,_.kt)("p",null,"Plugin must be a function or a promise."),(0,_.kt)("a",{name:"FST_ERR_ROOT_PLG_BOOTED"}),"#### FST_ERR_ROOT_PLG_BOOTED",(0,_.kt)("p",null,"Root plugin has already booted (mapped directly from ",(0,_.kt)("inlineCode",{parentName:"p"},"avvio"),")"),(0,_.kt)("a",{name:"FST_ERR_PARENT_PLUGIN_BOOTED"}),"#### FST_ERR_PARENT_PLUGIN_BOOTED",(0,_.kt)("p",null,"Impossible to load plugin because the parent (mapped directly from ",(0,_.kt)("inlineCode",{parentName:"p"},"avvio"),")"),(0,_.kt)("a",{name:"FST_ERR_PLUGIN_TIMEOUT"}),"#### FST_ERR_PLUGIN_TIMEOUT",(0,_.kt)("p",null,"Plugin did not start in time. Default timeout (in millis): ",(0,_.kt)("inlineCode",{parentName:"p"},"10000")))}E.isMDXComponent=!0}}]);