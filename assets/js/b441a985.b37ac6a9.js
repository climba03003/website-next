"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[35732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||s;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34063:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){let{title:t}=e;return n.createElement("header",{className:"hero-banner"},n.createElement("h1",{className:"hero-title"},t))}},81626:(e,t,r)=>{r.r(t),r.d(t,{BenchmarkSection:()=>v,contentTitle:()=>d,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>g});var n=r(87462),a=r(67294),s=r(3905),o=r(34063);const i="box_k4fk",c="level_nzFC",p="progress_yUP3",l="progressFastify_Blld",m="progressOthers_XEpx";var u=r(39960);function f(e){return"Fastify"===e?l:m}const h=function(e){let{name:t,test:r,repository:n,req:s,progressValue:o}=e;return a.createElement("div",{className:`${i} shadow--md`},a.createElement("div",{className:c},a.createElement("div",null,a.createElement(u.Z,{to:r},a.createElement("h2",null,t))),a.createElement("div",null,a.createElement(u.Z,{className:"header-github-link",to:n}))),a.createElement("p",null,Math.round(s)+" req/sec"),a.createElement("progress",{className:`${p} ${f(t)}`,value:o,max:"1"},100*o+"%"))},b=JSON.parse('{"Y":43048,"E":[{"name":"Fastify","tag":"fastify","test":"https://github.com/fastify/benchmarks/blob/master/benchmarks/fastify.cjs","repository":"https://github.com/fastify/fastify","requests":"37717.0"},{"name":"Koa","tag":"koa","test":"https://github.com/fastify/benchmarks/blob/master/benchmarks/koa.cjs","repository":"https://github.com/koajs/koa","requests":"31104.8"},{"name":"Express","tag":"express","test":"https://github.com/fastify/benchmarks/blob/master/benchmarks/express.cjs","repository":"https://github.com/expressjs/express","requests":"8684.0"},{"name":"Restify","tag":"restify","test":"https://github.com/fastify/benchmarks/blob/master/benchmarks/restify.cjs","repository":"https://github.com/restify/node-restify","requests":"28660.0"},{"name":"Hapi","tag":"hapi","test":"https://github.com/fastify/benchmarks/blob/master/benchmarks/hapi.cjs","repository":"https://github.com/hapijs/hapi","requests":"25754.8"}]}'),y={},d=void 0,k={type:"mdx",permalink:"/website-next/benchmarks",source:"@site/src/pages/benchmarks.mdx",description:"Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be as fast as possible.",frontMatter:{}},g=[];function v(){return b.E.map((e=>(0,s.kt)(h,{key:e.name,name:e.name,req:e.requests,progressValue:e.requests/b.Y,test:e.test,repository:e.repository,mdxType:"BenchmarkInfo"})))}const w={toc:g,BenchmarkSection:v};function O(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{title:"Benchmarks",mdxType:"HeroBanner"}),(0,s.kt)("p",null,"Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be ",(0,s.kt)("strong",{parentName:"p"},"as fast as possible"),"."),(0,s.kt)("p",null,"All the code used for our benchmarks is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fastify/benchmarks/"},"available on GitHub"),"."),(0,s.kt)("p",null,"Here's a brief summary on how fastify overhead performed against the some other well known Node.js web frameworks:"),(0,s.kt)(v,{mdxType:"BenchmarkSection"}),(0,s.kt)("p",null,'Please note that this is a synthetic, "hello world" benchmark that aims to evaluate the framework overhead. The overhead that each framework has on your application depends on your application, ',(0,s.kt)("strong",{parentName:"p"},"you should always benchmark if performance matters to you"),"."),(0,s.kt)("p",null,"Do you want to provide feedback on our benchmarks? ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fastify/benchmarks/issues"},"Open an issue on GitHub")," and we will get back to you!"))}O.isMDXComponent=!0}}]);