"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[83064],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,h=m["".concat(c,".").concat(u)]||m[u]||l[u]||o;return t?r.createElement(h,s(s({ref:n},d),{},{components:t})):r.createElement(h,s({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},s=void 0,i={unversionedId:"Guides/Fluent-Schema",id:"version-v4.0.x/Guides/Fluent-Schema",title:"Fluent-Schema",description:"Fluent Schema",source:"@site/versioned_docs/version-v4.0.x/Guides/Fluent-Schema.md",sourceDirName:"Guides",slug:"/Guides/Fluent-Schema",permalink:"/website-next/docs/v4.0.x/Guides/Fluent-Schema",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Fluent-Schema.md",tags:[],version:"v4.0.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Ecosystem",permalink:"/website-next/docs/v4.0.x/Guides/Ecosystem"},next:{title:"Getting-Started",permalink:"/website-next/docs/v4.0.x/Guides/Getting-Started"}},c={},p=[{value:"Fluent Schema",id:"fluent-schema",level:2},{value:"Basic settings",id:"basic-settings",level:3},{value:"Reuse",id:"reuse",level:3}],d={toc:p};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fluent-schema"},"Fluent Schema"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.0.x/Reference/Validation-and-Serialization"},"Validation and\nSerialization")," documentation\noutlines all parameters accepted by Fastify to set up JSON Schema Validation to\nvalidate the input, and JSON Schema Serialization to optimize the output."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fluent-json-schema"},(0,a.kt)("inlineCode",{parentName:"a"},"fluent-json-schema"))," can be\nused to simplify this task while allowing the reuse of constants."),(0,a.kt)("h3",{id:"basic-settings"},"Basic settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const S = require('fluent-json-schema')\n\n// You can have an object like this, or query a DB to get the values\nconst MY_KEYS = {\n  KEY1: 'ONE',\n  KEY2: 'TWO'\n}\n\nconst bodyJsonSchema = S.object()\n  .prop('someKey', S.string())\n  .prop('someOtherKey', S.number())\n  .prop('requiredKey', S.array().maxItems(3).items(S.integer()).required())\n  .prop('nullableKey', S.mixed([S.TYPES.NUMBER, S.TYPES.NULL]))\n  .prop('multipleTypesKey', S.mixed([S.TYPES.BOOLEAN, S.TYPES.NUMBER]))\n  .prop('multipleRestrictedTypesKey', S.oneOf([S.string().maxLength(5), S.number().minimum(10)]))\n  .prop('enumKey', S.enum(Object.values(MY_KEYS)))\n  .prop('notTypeKey', S.not(S.array()))\n\nconst queryStringJsonSchema = S.object()\n  .prop('name', S.string())\n  .prop('excitement', S.integer())\n\nconst paramsJsonSchema = S.object()\n  .prop('par1', S.string())\n  .prop('par2', S.integer())\n\nconst headersJsonSchema = S.object()\n  .prop('x-foo', S.string().required())\n\n// Note that there is no need to call `.valueOf()`!\nconst schema = {\n  body: bodyJsonSchema,\n  querystring: queryStringJsonSchema, // (or) query: queryStringJsonSchema\n  params: paramsJsonSchema,\n  headers: headersJsonSchema\n}\n\nfastify.post('/the/url', { schema }, handler)\n")),(0,a.kt)("h3",{id:"reuse"},"Reuse"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"fluent-json-schema")," you can manipulate your schemas more easily and\nprogrammatically and then reuse them thanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"addSchema()")," method. You can\nrefer to the schema in two different manners that are detailed in the\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.0.x/Reference/Validation-and-Serialization#adding-a-shared-schema"},"Validation and\nSerialization"),"\ndocumentation."),(0,a.kt)("p",null,"Here are some usage examples:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"$ref-way")),": refer to an external schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const addressSchema = S.object()\n  .id('#address')\n  .prop('line1').required()\n  .prop('line2')\n  .prop('country').required()\n  .prop('city').required()\n  .prop('zipcode').required()\n\nconst commonSchemas = S.object()\n  .id('https://fastify/demo')\n  .definition('addressSchema', addressSchema)\n  .definition('otherSchema', otherSchema) // You can add any schemas you need\n\nfastify.addSchema(commonSchemas)\n\nconst bodyJsonSchema = S.object()\n  .prop('residence', S.ref('https://fastify/demo#address')).required()\n  .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()\n\nconst schema = { body: bodyJsonSchema }\n\nfastify.post('/the/url', { schema }, handler)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"replace-way")),": refer to a shared schema to replace before the validation\nprocess."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const sharedAddressSchema = {\n  $id: 'sharedAddress',\n  type: 'object',\n  required: ['line1', 'country', 'city', 'zipcode'],\n  properties: {\n    line1: { type: 'string' },\n    line2: { type: 'string' },\n    country: { type: 'string' },\n    city: { type: 'string' },\n    zipcode: { type: 'string' }\n  }\n}\nfastify.addSchema(sharedAddressSchema)\n\nconst bodyJsonSchema = {\n  type: 'object',\n  properties: {\n    vacation: 'sharedAddress#'\n  }\n}\n\nconst schema = { body: bodyJsonSchema }\n\nfastify.post('/the/url', { schema }, handler)\n")),(0,a.kt)("p",null,"NB You can mix up the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ref-way")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace-way")," when using\n",(0,a.kt)("inlineCode",{parentName:"p"},"fastify.addSchema"),"."))}l.isMDXComponent=!0}}]);