"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[2556],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.createContext({}),l=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(f,".").concat(d)]||p[d]||s[d]||c;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var f in t)hasOwnProperty.call(t,f)&&(a[f]=t[f]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={title:"Reference",sidebar_label:"Reference",hide_title:!1},f=void 0,l={unversionedId:"Reference/index",id:"Reference/index",isDocsHomePage:!1,title:"Reference",description:"Reference Documentation Table Of Contents",source:"@site/docs/Reference/index.md",sourceDirName:"Reference",slug:"/Reference/index",permalink:"/website-next/docs/v3/Reference/index",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Reference/index.md",tags:[],version:"current",frontMatter:{title:"Reference",sidebar_label:"Reference",hide_title:!1},sidebar:"sidebar",previous:{title:"Server",permalink:"/website-next/docs/v3/Reference/Server"},next:{title:"Benchmarking",permalink:"/website-next/docs/v3/Benchmarking"}},u=[{value:"Reference Documentation Table Of Contents",id:"reference-documentation-table-of-contents",children:[],level:2}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"reference-documentation-table-of-contents"},"Reference Documentation Table Of Contents"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/website-next/docs/v3/Reference/Server"},"Server"),": Documents the core Fastify API. Includes documentation\nfor the factory function and the object returned by the factory function."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/website-next/docs/v3/Reference/Encapsulation"},"Encapsulation"),": Explains a core concept upon which all\nFastify plugins are built.")))}p.isMDXComponent=!0}}]);