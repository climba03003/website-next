"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[4240],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return u}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var _=n.createContext({}),s=function(e){var r=n.useContext(_),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(_.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,_=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=i,h=c["".concat(_,".").concat(u)]||c[u]||p[u]||a;return t?n.createElement(h,o(o({ref:r},d),{},{components:t})):n.createElement(h,o({ref:r},d))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var _ in r)hasOwnProperty.call(r,_)&&(l[_]=r[_]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9854:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return _},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Errors"},_=void 0,s={unversionedId:"Reference/Errors",id:"Reference/Errors",isDocsHomePage:!1,title:"Errors",description:"Error Handling In Node.js",source:"@site/docs/Reference/Errors.md",sourceDirName:"Reference",slug:"/Reference/Errors",permalink:"/website-next/docs/v3/Reference/Errors",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Reference/Errors.md",tags:[],version:"current",frontMatter:{title:"Errors"},sidebar:"sidebar",previous:{title:"Encapsulation",permalink:"/website-next/docs/v3/Reference/Encapsulation"},next:{title:"Fluent Schema",permalink:"/website-next/docs/v3/Reference/Fluent-Schema"}},d=[{value:"Error Handling In Node.js",id:"error-handling-in-nodejs",children:[{value:"Uncaught Errors",id:"uncaught-errors",children:[],level:4},{value:"Catching Errors In Promises",id:"catching-errors-in-promises",children:[],level:4}],level:3},{value:"Errors In Fastify",id:"errors-in-fastify",children:[{value:"Errors In Input Data",id:"errors-in-input-data",children:[],level:4},{value:"Catching Uncaught Errors In Fastify",id:"catching-uncaught-errors-in-fastify",children:[],level:4}],level:3},{value:"Errors In Fastify Lifecycle Hooks And A Custom Error Handler",id:"errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler",children:[],level:3},{value:"Fastify Error Codes",id:"fastify-error-codes",children:[{value:"FST_ERR_BAD_URL",id:"fst_err_bad_url",children:[],level:4},{value:"FST_ERR_CTP_ALREADY_PRESENT",id:"fst_err_ctp_already_present",children:[],level:4},{value:"FST_ERR_CTP_BODY_TOO_LARGE",id:"fst_err_ctp_body_too_large",children:[],level:4},{value:"FST_ERR_CTP_EMPTY_TYPE",id:"fst_err_ctp_empty_type",children:[],level:4},{value:"FST_ERR_CTP_INVALID_CONTENT_LENGTH",id:"fst_err_ctp_invalid_content_length",children:[],level:4},{value:"FST_ERR_CTP_INVALID_HANDLER",id:"fst_err_ctp_invalid_handler",children:[],level:4},{value:"FST_ERR_CTP_INVALID_MEDIA_TYPE",id:"fst_err_ctp_invalid_media_type",children:[],level:4},{value:"FST_ERR_CTP_INVALID_PARSE_TYPE",id:"fst_err_ctp_invalid_parse_type",children:[],level:4},{value:"FST_ERR_CTP_INVALID_TYPE",id:"fst_err_ctp_invalid_type",children:[],level:4},{value:"FST_ERR_DEC_ALREADY_PRESENT",id:"fst_err_dec_already_present",children:[],level:4},{value:"FST_ERR_DEC_MISSING_DEPENDENCY",id:"fst_err_dec_missing_dependency",children:[],level:4},{value:"FST_ERR_HOOK_INVALID_HANDLER",id:"fst_err_hook_invalid_handler",children:[],level:4},{value:"FST_ERR_HOOK_INVALID_TYPE",id:"fst_err_hook_invalid_type",children:[],level:4},{value:"FST_ERR_LOG_INVALID_DESTINATION",id:"fst_err_log_invalid_destination",children:[],level:4},{value:"FST_ERR_PROMISE_NOT_FULFILLED",id:"fst_err_promise_not_fulfilled",children:[],level:4},{value:"FST_ERR_REP_ALREADY_SENT",id:"fst_err_rep_already_sent",children:[],level:4},{value:"FST_ERR_REP_INVALID_PAYLOAD_TYPE",id:"fst_err_rep_invalid_payload_type",children:[],level:4},{value:"FST_ERR_SCH_ALREADY_PRESENT",id:"fst_err_sch_already_present",children:[],level:4},{value:"FST_ERR_SCH_MISSING_ID",id:"fst_err_sch_missing_id",children:[],level:4},{value:"FST_ERR_SCH_SERIALIZATION_BUILD",id:"fst_err_sch_serialization_build",children:[],level:4},{value:"FST_ERR_SCH_VALIDATION_BUILD",id:"fst_err_sch_validation_build",children:[],level:4},{value:"FST_ERR_SEND_INSIDE_ONERR",id:"fst_err_send_inside_onerr",children:[],level:4},{value:"FST_ERR_SEND_UNDEFINED_ERR",id:"fst_err_send_undefined_err",children:[],level:4}],level:3}],p={toc:d};function c(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"error-handling-in-nodejs"},"Error Handling In Node.js"),(0,a.kt)("a",{id:"error-handling"}),(0,a.kt)("h4",{id:"uncaught-errors"},"Uncaught Errors"),(0,a.kt)("p",null,"In Node.js, uncaught errors are likely to cause memory leaks, file descriptor leaks, and other major production issues. ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/domain-postmortem/"},"Domains")," were a failed attempt to fix this."),(0,a.kt)("p",null,"Given that it is not possible to process all uncaught errors sensibly, the best way to deal with them is to ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly"},"crash"),"."),(0,a.kt)("h4",{id:"catching-errors-in-promises"},"Catching Errors In Promises"),(0,a.kt)("p",null,"In Node.js, unhandled promise rejections (that is, without a ",(0,a.kt)("inlineCode",{parentName:"p"},".catch()")," handler) can also cause memory and file descriptor leaks. While ",(0,a.kt)("inlineCode",{parentName:"p"},"unhandledRejection")," is deprecated in Node.js, unhandled rejections will not throw, and still potentially leak. You should use a module like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mcollina/make-promises-safe"},(0,a.kt)("inlineCode",{parentName:"a"},"make-promises-safe"))," to ensure unhandled rejections ",(0,a.kt)("em",{parentName:"p"},"always")," throw."),(0,a.kt)("p",null,"If you are using promises, you should attach a ",(0,a.kt)("inlineCode",{parentName:"p"},".catch()")," handler synchronously."),(0,a.kt)("h3",{id:"errors-in-fastify"},"Errors In Fastify"),(0,a.kt)("p",null,"Fastify follows an all-or-nothing approach and aims to be lean and optimal as much as possible. The developer is responsible for making sure that the errors are handled properly."),(0,a.kt)("h4",{id:"errors-in-input-data"},"Errors In Input Data"),(0,a.kt)("p",null,"Most errors are a result of unexpected input data, so we recommend ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Validation-and-Serialization"},"validating your input data against a JSON schema"),"."),(0,a.kt)("h4",{id:"catching-uncaught-errors-in-fastify"},"Catching Uncaught Errors In Fastify"),(0,a.kt)("p",null,"Fastify tries to catch as many uncaught errors as it can without hindering performance. This includes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"synchronous routes, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"app.get('/', () => { throw new Error('kaboom') })")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"async")," routes, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"app.get('/', async () => { throw new Error('kaboom') })"))),(0,a.kt)("p",null,"The error in both cases will be caught safely and routed to Fastify's default error handler for a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")," response."),(0,a.kt)("p",null,"To customize this behavior you should use ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Server#seterrorhandler"},(0,a.kt)("inlineCode",{parentName:"a"},"setErrorHandler")),"."),(0,a.kt)("h3",{id:"errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler"},"Errors In Fastify Lifecycle Hooks And A Custom Error Handler"),(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Hooks#manage-errors-from-a-hook"},"Hooks documentation"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you get an error during the execution of your hook, just pass it to ",(0,a.kt)("inlineCode",{parentName:"p"},"done()")," and Fastify will automatically close the request and send the appropriate error code to the user.")),(0,a.kt)("p",null,"If you have defined a custom error handler for using ",(0,a.kt)("inlineCode",{parentName:"p"},"setErrorHandler")," the error will be routed there. otherwise, it will be routed to Fastify\u2019s generic error handler."),(0,a.kt)("p",null,"Some things to consider in your custom error handler:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"you can ",(0,a.kt)("inlineCode",{parentName:"p"},"reply.send(data)"),", which will behave as it would in ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Reply#senddata"},"regular route handlers")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"objects are serialized, triggering the ",(0,a.kt)("inlineCode",{parentName:"li"},"preSerialization")," lifecycle hook if you have one defined"),(0,a.kt)("li",{parentName:"ul"},"strings, buffers, and streams are sent to the client, with appropriate headers (no serialization)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can throw a new error in your custom error handler"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"errors (new error or the received error parameter re-thrown) - will trigger the ",(0,a.kt)("inlineCode",{parentName:"li"},"onError")," lifecycle hook and send the error to the user"),(0,a.kt)("li",{parentName:"ul"},"an error will not be triggered twice from a lifecycle hook - Fastify internally monitors the error invocation to avoid infinite loops for errors thrown in the reply phases of the lifecycle. (those after the route handler)")))),(0,a.kt)("h3",{id:"fastify-error-codes"},"Fastify Error Codes"),(0,a.kt)("a",{id:"fastify-error-codes"}),(0,a.kt)("h4",{id:"fst_err_bad_url"},"FST_ERR_BAD_URL"),(0,a.kt)("a",{id:"FST_ERR_BAD_URL"}),(0,a.kt)("p",null,"The router received an invalid url."),(0,a.kt)("h4",{id:"fst_err_ctp_already_present"},"FST_ERR_CTP_ALREADY_PRESENT"),(0,a.kt)("a",{id:"FST_ERR_CTP_ALREADY_PRESENT"}),(0,a.kt)("p",null,"The parser for this content type was already registered."),(0,a.kt)("h4",{id:"fst_err_ctp_body_too_large"},"FST_ERR_CTP_BODY_TOO_LARGE"),(0,a.kt)("a",{id:"FST_ERR_CTP_BODY_TOO_LARGE"}),(0,a.kt)("p",null,"The request body is larger than the provided limit."),(0,a.kt)("p",null,"This setting can be defined in the Fastify server instance: ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Server#bodyLimit"},(0,a.kt)("inlineCode",{parentName:"a"},"bodyLimit"))),(0,a.kt)("h4",{id:"fst_err_ctp_empty_type"},"FST_ERR_CTP_EMPTY_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_EMPTY_TYPE"}),(0,a.kt)("p",null,"The content type cannot be an empty string."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_content_length"},"FST_ERR_CTP_INVALID_CONTENT_LENGTH"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_CONTENT_LENGTH"}),(0,a.kt)("p",null,"Request body size did not match Content-Length."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_handler"},"FST_ERR_CTP_INVALID_HANDLER"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_HANDLER"}),(0,a.kt)("p",null,"An invalid handler was passed for the content type."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_media_type"},"FST_ERR_CTP_INVALID_MEDIA_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_MEDIA_TYPE"}),(0,a.kt)("p",null,"The received media type is not supported (i.e. there is no suitable ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," parser for it)."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_parse_type"},"FST_ERR_CTP_INVALID_PARSE_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_PARSE_TYPE"}),(0,a.kt)("p",null,"The provided parse type is not supported. Accepted values are ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer"),"."),(0,a.kt)("h4",{id:"fst_err_ctp_invalid_type"},"FST_ERR_CTP_INVALID_TYPE"),(0,a.kt)("a",{id:"FST_ERR_CTP_INVALID_TYPE"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," should be a string."),(0,a.kt)("h4",{id:"fst_err_dec_already_present"},"FST_ERR_DEC_ALREADY_PRESENT"),(0,a.kt)("a",{id:"FST_ERR_DEC_ALREADY_PRESENT"}),(0,a.kt)("p",null,"A decorator with the same name is already registered."),(0,a.kt)("h4",{id:"fst_err_dec_missing_dependency"},"FST_ERR_DEC_MISSING_DEPENDENCY"),(0,a.kt)("a",{id:"FST_ERR_DEC_MISSING_DEPENDENCY"}),(0,a.kt)("p",null,"The decorator cannot be registered due to a missing dependency."),(0,a.kt)("h4",{id:"fst_err_hook_invalid_handler"},"FST_ERR_HOOK_INVALID_HANDLER"),(0,a.kt)("a",{id:"FST_ERR_HOOK_INVALID_HANDLER"}),(0,a.kt)("p",null,"The hook callback must be a function."),(0,a.kt)("h4",{id:"fst_err_hook_invalid_type"},"FST_ERR_HOOK_INVALID_TYPE"),(0,a.kt)("a",{id:"FST_ERR_HOOK_INVALID_TYPE"}),(0,a.kt)("p",null,"The hook name must be a string."),(0,a.kt)("h4",{id:"fst_err_log_invalid_destination"},"FST_ERR_LOG_INVALID_DESTINATION"),(0,a.kt)("a",{id:"FST_ERR_LOG_INVALID_DESTINATION"}),(0,a.kt)("p",null,"The logger accepts either a ",(0,a.kt)("inlineCode",{parentName:"p"},"'stream'")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"'file'")," as the destination."),(0,a.kt)("h4",{id:"fst_err_promise_not_fulfilled"},"FST_ERR_PROMISE_NOT_FULFILLED"),(0,a.kt)("a",{id:"FST_ERR_PROMISE_NOT_FULFILLED"}),(0,a.kt)("p",null,"A promise may not be fulfilled with 'undefined' when statusCode is not 204."),(0,a.kt)("h4",{id:"fst_err_rep_already_sent"},"FST_ERR_REP_ALREADY_SENT"),(0,a.kt)("a",{id:"FST_ERR_REP_ALREADY_SENT"}),(0,a.kt)("p",null,"A response was already sent."),(0,a.kt)("h4",{id:"fst_err_rep_invalid_payload_type"},"FST_ERR_REP_INVALID_PAYLOAD_TYPE"),(0,a.kt)("a",{id:"FST_ERR_REP_INVALID_PAYLOAD_TYPE"}),(0,a.kt)("p",null,"Reply payload can be either a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,a.kt)("h4",{id:"fst_err_sch_already_present"},"FST_ERR_SCH_ALREADY_PRESENT"),(0,a.kt)("a",{id:"FST_ERR_SCH_ALREADY_PRESENT"}),(0,a.kt)("p",null,"A schema with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"$id")," already exists."),(0,a.kt)("h4",{id:"fst_err_sch_missing_id"},"FST_ERR_SCH_MISSING_ID"),(0,a.kt)("a",{id:"FST_ERR_SCH_MISSING_ID"}),(0,a.kt)("p",null,"The schema provided does not have ",(0,a.kt)("inlineCode",{parentName:"p"},"$id")," property."),(0,a.kt)("h4",{id:"fst_err_sch_serialization_build"},"FST_ERR_SCH_SERIALIZATION_BUILD"),(0,a.kt)("a",{id:"FST_ERR_SCH_SERIALIZATION_BUILD"}),(0,a.kt)("p",null,"The JSON schema provided for serialization of a route response is not valid."),(0,a.kt)("h4",{id:"fst_err_sch_validation_build"},"FST_ERR_SCH_VALIDATION_BUILD"),(0,a.kt)("a",{id:"FST_ERR_SCH_VALIDATION_BUILD"}),(0,a.kt)("p",null,"The JSON schema provided for validation to a route is not valid."),(0,a.kt)("h4",{id:"fst_err_send_inside_onerr"},"FST_ERR_SEND_INSIDE_ONERR"),(0,a.kt)("a",{id:"FST_ERR_SEND_INSIDE_ONERR"}),(0,a.kt)("p",null,"You cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," hook."),(0,a.kt)("h4",{id:"fst_err_send_undefined_err"},"FST_ERR_SEND_UNDEFINED_ERR"),(0,a.kt)("a",{id:"FST_ERR_SEND_UNDEFINED_ERR"}),(0,a.kt)("p",null,"Undefined error has occurred."))}c.isMDXComponent=!0}}]);