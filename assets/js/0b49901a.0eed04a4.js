"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[9544],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=f(n),d=o,b=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var f=2;f<i;f++)c[f]=n[f];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"Reference",sidebar_label:"Reference",hide_title:!1},l=void 0,f={unversionedId:"Reference/index",id:"Reference/index",isDocsHomePage:!1,title:"Reference",description:"Table Of Contents",source:"@site/docs/02-Reference/index.md",sourceDirName:"02-Reference",slug:"/Reference/index",permalink:"/website-next/docs/v3/Reference/index",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/02-Reference/index.md",tags:[],version:"current",frontMatter:{title:"Reference",sidebar_label:"Reference",hide_title:!1},sidebar:"sidebar",previous:{title:"Server",permalink:"/website-next/docs/v3/Reference/Server"},next:{title:"Benchmarking",permalink:"/website-next/docs/v3/Benchmarking"}},u=[{value:"Table Of Contents",id:"table-of-contents",children:[],level:2}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"table-of-contents"},"Table Of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/website-next/docs/v3/Reference/Server"},"Server"),": Documents the core Fastify API. Includes documentation\nfor the factory function and the object returned by the factory function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/website-next/docs/v3/Reference/Encapsulation"},"Encapsulation"),": Explains a core concept upon which all\nFastify plugins are built.")))}p.isMDXComponent=!0}}]);