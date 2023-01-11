"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[16395],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>c});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _=n.createContext({}),s=function(e){var r=n.useContext(_),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(_.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,_=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,E=u["".concat(_,".").concat(c)]||u[c]||p[c]||i;return t?n.createElement(E,o(o({ref:r},d),{},{components:t})):n.createElement(E,o({ref:r},d))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var _ in r)hasOwnProperty.call(r,_)&&(l[_]=r[_]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65143:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>_,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const i={},o=void 0,l={unversionedId:"Reference/Errors",id:"version-v4.4.x/Reference/Errors",title:"Errors",description:"Errors",source:"@site/versioned_docs/version-v4.4.x/Reference/Errors.md",sourceDirName:"Reference",slug:"/Reference/Errors",permalink:"/website-next/docs/v4.4.x/Reference/Errors",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Errors.md",tags:[],version:"v4.4.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Encapsulation",permalink:"/website-next/docs/v4.4.x/Reference/Encapsulation"},next:{title:"HTTP2",permalink:"/website-next/docs/v4.4.x/Reference/HTTP2"}},_={},s=[{value:"Errors",id:"errors",level:2},{value:"Error Handling In Node.js",id:"error-handling-in-nodejs",level:3},{value:"Uncaught Errors",id:"uncaught-errors",level:4},{value:"Catching Errors In Promises",id:"catching-errors-in-promises",level:4},{value:"Errors In Fastify",id:"errors-in-fastify",level:3},{value:"Errors In Input Data",id:"errors-in-input-data",level:4},{value:"Catching Uncaught Errors In Fastify",id:"catching-uncaught-errors-in-fastify",level:4},{value:"Errors In Fastify Lifecycle Hooks And A Custom Error Handler",id:"errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler",level:3},{value:"Fastify Error Codes",id:"fastify-error-codes",level:3},{value:"FST_ERR_BAD_URL",id:"fst_err_bad_url",level:4},{value:"FST_ERR_CTP_BODY_TOO_LARGE",id:"fst_err_ctp_body_too_large",level:4},{value:"FST_ERR_CTP_EMPTY_TYPE",id:"fst_err_ctp_empty_type",level:4},{value:"FST_ERR_CTP_INVALID_CONTENT_LENGTH",id:"fst_err_ctp_invalid_content_length",level:4},{value:"FST_ERR_CTP_INVALID_HANDLER",id:"fst_err_ctp_invalid_handler",level:4},{value:"FST_ERR_CTP_INVALID_MEDIA_TYPE",id:"fst_err_ctp_invalid_media_type",level:4},{value:"FST_ERR_CTP_INVALID_PARSE_TYPE",id:"fst_err_ctp_invalid_parse_type",level:4},{value:"FST_ERR_CTP_INVALID_TYPE",id:"fst_err_ctp_invalid_type",level:4},{value:"FST_ERR_DEC_ALREADY_PRESENT",id:"fst_err_dec_already_present",level:4},{value:"FST_ERR_DEC_MISSING_DEPENDENCY",id:"fst_err_dec_missing_dependency",level:4},{value:"FST_ERR_HOOK_INVALID_HANDLER",id:"fst_err_hook_invalid_handler",level:4},{value:"FST_ERR_HOOK_INVALID_TYPE",id:"fst_err_hook_invalid_type",level:4},{value:"FST_ERR_LOG_INVALID_DESTINATION",id:"fst_err_log_invalid_destination",level:4},{value:"FST_ERR_PROMISE_NOT_FULFILLED",id:"fst_err_promise_not_fulfilled",level:4},{value:"FST_ERR_REP_ALREADY_SENT",id:"fst_err_rep_already_sent",level:4},{value:"FST_ERR_REP_INVALID_PAYLOAD_TYPE",id:"fst_err_rep_invalid_payload_type",level:4},{value:"FST_ERR_SCH_ALREADY_PRESENT",id:"fst_err_sch_already_present",level:4},{value:"FST_ERR_SCH_MISSING_ID",id:"fst_err_sch_missing_id",level:4},{value:"FST_ERR_SCH_SERIALIZATION_BUILD",id:"fst_err_sch_serialization_build",level:4},{value:"FST_ERR_SCH_VALIDATION_BUILD",id:"fst_err_sch_validation_build",level:4},{value:"FST_ERR_SEND_INSIDE_ONERR",id:"fst_err_send_inside_onerr",level:4},{value:"FST_ERR_SEND_UNDEFINED_ERR",id:"fst_err_send_undefined_err",level:4}],d={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("a",{id:"errors"}),(0,a.kt)("h3",{id:"error-handling-in-nodejs"},"Error Handling In Node.js"),(0,a.kt)("a",{id:"error-handling"}),(0,a.kt)("h4",{id:"uncaught-errors"},"Uncaught Errors"),(0,a.kt)("p",null,"In Node.js, uncaught errors are likely to cause memory leaks, file descriptor\nleaks, and other major production issues.\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/domain-postmortem/"},"Domains")," were a failed\nattempt to fix this."),(0,a.kt)("p",null,"Given that it is not possible to process all uncaught errors sensibly, the best\nway to deal with them is to\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly"},"crash"),"."),(0,a.kt)("h4",{id:"catching-errors-in-promises"},"Catching Errors In Promises"),(0,a.kt)("p",null,"If you are using promises, you should attach a ",(0,a.kt)("inlineCode",{parentName:"p"},".catch()")," handler synchronously."),(0,a.kt)("h3",{id:"errors-in-fastify"},"Errors In Fastify"),(0,a.kt)("p",null,"Fastify follows an all-or-nothing approach and aims to be lean and optimal as\nmuch as possible. The developer is responsible for making sure that the errors\nare handled properly."),(0,a.kt)("h4",{id:"errors-in-input-data"},"Errors In Input Data"),(0,a.kt)("p",null,"Most errors are a result of unexpected input data, so we recommend ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Validation-and-Serialization"},"validating\nyour input data against a JSON schema"),"."),(0,a.kt)("h4",{id:"catching-uncaught-errors-in-fastify"},"Catching Uncaught Errors In Fastify"),(0,a.kt)("p",null,"Fastify tries to catch as many uncaught errors as it can without hindering\nperformance. This includes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"synchronous routes, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"app.get('/', () => { throw new Error('kaboom') })")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"async")," routes, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"app.get('/', async () => { throw new Error('kaboom')\n})"))),(0,a.kt)("p",null,"The error in both cases will be caught safely and routed to Fastify's default\nerror handler for a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")," response."),(0,a.kt)("p",null,"To customize this behavior you should use\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Server#seterrorhandler"},(0,a.kt)("inlineCode",{parentName:"a"},"setErrorHandler")),"."),(0,a.kt)("h3",{id:"errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler"},"Errors In Fastify Lifecycle Hooks And A Custom Error Handler"),(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Hooks#manage-errors-from-a-hook"},"Hooks documentation"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you get an error during the execution of your hook, just pass it to\n",(0,a.kt)("inlineCode",{parentName:"p"},"done()")," and Fastify will automatically close the request and send the\nappropriate error code to the user.")),(0,a.kt)("p",null,"When a custom error handler has been defined through\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Server#seterrorhandler"},(0,a.kt)("inlineCode",{parentName:"a"},"setErrorHandler")),", the custom error handler will\nreceive the error passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"done()")," callback (or through other supported\nautomatic error handling mechanisms). If ",(0,a.kt)("inlineCode",{parentName:"p"},"setErrorHandler")," has been used\nmultiple times to define multiple handlers, the error will be routed to the most\nprecedent handler defined within the error ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Encapsulation"},"encapsulation\ncontext"),". Error handlers are fully encapsulated, so a\n",(0,a.kt)("inlineCode",{parentName:"p"},"setErrorHandler")," call within a plugin will limit the error handler to that\nplugin's context."),(0,a.kt)("p",null,"The root error handler is Fastify's generic error handler. This error handler\nwill use the headers and status code in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," object, if they exist. The\nheaders and status code will not be automatically set if a custom error handler\nis provided."),(0,a.kt)("p",null,"Some things to consider in your custom error handler:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"you can ",(0,a.kt)("inlineCode",{parentName:"p"},"reply.send(data)"),", which will behave as it would in ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Reply#senddata"},"regular route\nhandlers")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"objects are serialized, triggering the ",(0,a.kt)("inlineCode",{parentName:"li"},"preSerialization")," lifecycle hook if\nyou have one defined"),(0,a.kt)("li",{parentName:"ul"},"strings, buffers, and streams are sent to the client, with appropriate\nheaders (no serialization)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can throw a new error in your custom error handler - errors (new error or\nthe received error parameter re-thrown) - will call the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"errorHandler"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onError")," hook will be triggered once only for the first error being thrown."),(0,a.kt)("li",{parentName:"ul"},"an error will not be triggered twice from a lifecycle hook - Fastify\ninternally monitors the error invocation to avoid infinite loops for errors\nthrown in the reply phases of the lifecycle. (those after the route handler)")))),(0,a.kt)("h3",{id:"fastify-error-codes"},"Fastify Error Codes"),(0,a.kt)("a",{id:"fastify-error-codes"}),(0,a.kt)("h4",{id:"fst_err_bad_url"},"FST_ERR_BAD_URL"),(0,a.kt)("a",{id:"FST_ERR_BAD_URL"}),(0,a.kt)("p",null,"The router received an invalid url."),(0,a.kt)("a",{name:"FST_ERR_DUPLICATED_ROUTE"}),"#### FST_ERR_DUPLICATED_ROUTE",(0,a.kt)("p",null,"The HTTP method already has a registered controller for that URL"),(0,a.kt)("a",{name:"FST_ERR_CTP_ALREADY_PRESENT"}),"#### FST_ERR_CTP_ALREADY_PRESENT",(0,a.kt)("a",{id:"FST_ERR_CTP_ALREADY_PRESENT"}),(0,a.kt)("p",null,"The parser for this content type was already registered."),(0,a.kt)("h4",{id:"fst_err_ctp_body_too_large"},"FST_ERR_CTP_BODY_TOO_LARGE"),(0,a.kt)("a",{id:"FST_ERR_CTP_BODY_TOO_LARGE"}),(0,a.kt)("p",null,"The request body is larger than the provided limit."),(0,a.kt)("p",null,"This setting can be defined in the Fastify server instance:\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.4.x/Reference/Server#bodylimit"},(0,a.kt)("inlineCode",{parentName:"a"},"bodyLimit"))),(0,a.kt)("h4",{id:"fst_err_ctp_empty_type"},"FST_ERR_CTP_EMPTY_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_EMPTY_TYPE"}),(0,a.kt)("p",null,"The content type cannot be an empty string."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_content_length"},"FST_ERR_CTP_INVALID_CONTENT_LENGTH"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_CONTENT_LENGTH"}),(0,a.kt)("p",null,"Request body size did not match Content-Length."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_handler"},"FST_ERR_CTP_INVALID_HANDLER"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_HANDLER"}),(0,a.kt)("p",null,"An invalid handler was passed for the content type."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_media_type"},"FST_ERR_CTP_INVALID_MEDIA_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_MEDIA_TYPE"}),(0,a.kt)("p",null,"The received media type is not supported (i.e. there is no suitable\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," parser for it)."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_parse_type"},"FST_ERR_CTP_INVALID_PARSE_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_PARSE_TYPE"}),(0,a.kt)("p",null,"The provided parse type is not supported. Accepted values are ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"buffer"),"."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_type"},"FST_ERR_CTP_INVALID_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_TYPE"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," should be a string."),(0,a.kt)("h4",{id:"fst_err_dec_already_present"},"FST_ERR_DEC_ALREADY_PRESENT"),(0,a.kt)("a",{id:"FST_ERR_DEC_ALREADY_PRESENT"}),(0,a.kt)("p",null,"A decorator with the same name is already registered."),(0,a.kt)("h4",{id:"fst_err_dec_missing_dependency"},"FST_ERR_DEC_MISSING_DEPENDENCY"),(0,a.kt)("a",{id:"FST_ERR_DEC_MISSING_DEPENDENCY"}),(0,a.kt)("p",null,"The decorator cannot be registered due to a missing dependency."),(0,a.kt)("h4",{id:"fst_err_hook_invalid_handler"},"FST_ERR_HOOK_INVALID_HANDLER"),(0,a.kt)("a",{id:"FST_ERR_HOOK_INVALID_HANDLER"}),(0,a.kt)("p",null,"The hook callback must be a function."),(0,a.kt)("h4",{id:"fst_err_hook_invalid_type"},"FST_ERR_HOOK_INVALID_TYPE"),(0,a.kt)("a",{id:"FST_ERR_HOOK_INVALID_TYPE"}),(0,a.kt)("p",null,"The hook name must be a string."),(0,a.kt)("h4",{id:"fst_err_log_invalid_destination"},"FST_ERR_LOG_INVALID_DESTINATION"),(0,a.kt)("a",{id:"FST_ERR_LOG_INVALID_DESTINATION"}),(0,a.kt)("p",null,"The logger accepts either a ",(0,a.kt)("inlineCode",{parentName:"p"},"'stream'")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"'file'")," as the destination."),(0,a.kt)("h4",{id:"fst_err_promise_not_fulfilled"},"FST_ERR_PROMISE_NOT_FULFILLED"),(0,a.kt)("a",{id:"FST_ERR_PROMISE_NOT_FULFILLED"}),(0,a.kt)("p",null,"A promise may not be fulfilled with 'undefined' when statusCode is not 204."),(0,a.kt)("h4",{id:"fst_err_rep_already_sent"},"FST_ERR_REP_ALREADY_SENT"),(0,a.kt)("a",{id:"FST_ERR_REP_ALREADY_SENT"}),(0,a.kt)("p",null,"A response was already sent."),(0,a.kt)("h4",{id:"fst_err_rep_invalid_payload_type"},"FST_ERR_REP_INVALID_PAYLOAD_TYPE"),(0,a.kt)("a",{id:"FST_ERR_REP_INVALID_PAYLOAD_TYPE"}),(0,a.kt)("p",null,"Reply payload can be either a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,a.kt)("h4",{id:"fst_err_sch_already_present"},"FST_ERR_SCH_ALREADY_PRESENT"),(0,a.kt)("a",{id:"FST_ERR_SCH_ALREADY_PRESENT"}),(0,a.kt)("p",null,"A schema with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"$id")," already exists."),(0,a.kt)("h4",{id:"fst_err_sch_missing_id"},"FST_ERR_SCH_MISSING_ID"),(0,a.kt)("a",{id:"FST_ERR_SCH_MISSING_ID"}),(0,a.kt)("p",null,"The schema provided does not have ",(0,a.kt)("inlineCode",{parentName:"p"},"$id")," property."),(0,a.kt)("h4",{id:"fst_err_sch_serialization_build"},"FST_ERR_SCH_SERIALIZATION_BUILD"),(0,a.kt)("a",{id:"FST_ERR_SCH_SERIALIZATION_BUILD"}),(0,a.kt)("p",null,"The JSON schema provided for serialization of a route response is not valid."),(0,a.kt)("h4",{id:"fst_err_sch_validation_build"},"FST_ERR_SCH_VALIDATION_BUILD"),(0,a.kt)("a",{id:"FST_ERR_SCH_VALIDATION_BUILD"}),(0,a.kt)("p",null,"The JSON schema provided for validation to a route is not valid."),(0,a.kt)("h4",{id:"fst_err_send_inside_onerr"},"FST_ERR_SEND_INSIDE_ONERR"),(0,a.kt)("a",{id:"FST_ERR_SEND_INSIDE_ONERR"}),(0,a.kt)("p",null,"You cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," hook."),(0,a.kt)("h4",{id:"fst_err_send_undefined_err"},"FST_ERR_SEND_UNDEFINED_ERR"),(0,a.kt)("a",{id:"FST_ERR_SEND_UNDEFINED_ERR"}),(0,a.kt)("p",null,"Undefined error has occurred."),(0,a.kt)("a",{name:"FST_ERR_PLUGIN_NOT_VALID"}),"#### FST_ERR_PLUGIN_NOT_VALID",(0,a.kt)("p",null,"Plugin must be a function or a promise."),(0,a.kt)("a",{name:"FST_ERR_PLUGIN_TIMEOUT"}),"#### FST_ERR_PLUGIN_TIMEOUT",(0,a.kt)("p",null,"Plugin did not start in time. Default timeout (in millis): ",(0,a.kt)("inlineCode",{parentName:"p"},"10000")),(0,a.kt)("a",{name:"FST_ERR_HOOK_TIMEOUT"}),"#### FST_ERR_HOOK_TIMEOUT",(0,a.kt)("p",null,"A callback for a hook timed out"),(0,a.kt)("a",{name:"FST_ERR_ROOT_PLG_BOOTED"}),"#### FST_ERR_ROOT_PLG_BOOTED",(0,a.kt)("p",null,"Root plugin has already booted (mapped directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"avvio"),")"),(0,a.kt)("a",{name:"FST_ERR_PARENT_PLUGIN_BOOTED"}),"#### FST_ERR_PARENT_PLUGIN_BOOTED",(0,a.kt)("p",null,"Impossible to load plugin because the parent (mapped directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"avvio"),")"),(0,a.kt)("a",{name:"FST_ERR_PLUGIN_CALLBACK_NOT_FN"}),"#### FST_ERR_PLUGIN_CALLBACK_NOT_FN",(0,a.kt)("p",null,"Callback for a hook is not a function (mapped directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"avvio"),")"))}p.isMDXComponent=!0}}]);