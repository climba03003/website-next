"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[5410],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Long Term Support",sidebar_label:"Long Term Support",hide_title:!1},s=void 0,p={unversionedId:"LTS",id:"LTS",isDocsHomePage:!1,title:"Long Term Support",description:"Fastify's Long Term Support (LTS) is provided according to the schedule laid",source:"@site/docs/LTS.md",sourceDirName:".",slug:"/LTS",permalink:"/docs/v3/LTS",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/LTS.md",tags:[],version:"current",frontMatter:{title:"Long Term Support",sidebar_label:"Long Term Support",hide_title:!1},sidebar:"sidebar",previous:{title:"Hooks",permalink:"/docs/v3/Hooks"},next:{title:"Lifecycle",permalink:"/docs/v3/Lifecycle"}},u=[{value:"Schedule",id:"schedule",children:[],level:3},{value:"CI tested operating systems",id:"ci-tested-operating-systems",children:[],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fastify's Long Term Support (LTS) is provided according to the schedule laid\nout in this document:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Major releases, "X" release of ',(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," X.Y.Z release\nversions, are supported for a minimum period of six months from their release\ndate. The release date of any specific version can be found at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/releases"},"https://github.com/fastify/fastify/releases"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Major releases will receive security updates for an additional six months\nfrom the release of the next major release. After this period\nwe will still review and release security fixes as long as they are\nprovided by the community and they do not violate other constraints,\ne.g. minimum supported Node.js version.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Major releases will be tested and verified against all Node.js\nrelease lines that are supported by the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"Node.js LTS policy")," within the\nLTS period of that given Fastify release line. This implies that only\nthe latest Node.js release of a given line is supported."))),(0,i.kt)("p",null,'A "month" is defined as 30 consecutive days.'),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"security-releases-and-semver"},"Security Releases and Semver"),(0,i.kt)("p",{parentName:"blockquote"},"As a consequence of providing long-term support for major releases, there\nare occasions where we need to release breaking changes as a ",(0,i.kt)("em",{parentName:"p"},"minor"),"\nversion release. Such changes will ",(0,i.kt)("em",{parentName:"p"},"always")," be noted in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/releases"},"release notes"),"."),(0,i.kt)("p",{parentName:"blockquote"},"To avoid automatically receiving breaking security updates it is possible to use\nthe tilde (",(0,i.kt)("inlineCode",{parentName:"p"},"~"),") range qualifier. For example, to get patches for the 3.15\nrelease, and avoid automatically updating to the 3.16 release, specify\nthe dependency as ",(0,i.kt)("inlineCode",{parentName:"p"},'"fastify": "~3.15.x"'),". This will leave your application vulnerable,\nso please use with caution.")),(0,i.kt)("a",{name:"lts-schedule"}),(0,i.kt)("h3",{id:"schedule"},"Schedule"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"End Of LTS Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Node.js"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2018-03-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2019-09-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6, 8, 9, 10, 11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2.0.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2019-02-25"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-01-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6, 8, 10, 12, 14")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3.0.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2020-07-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10, 12, 14, 16")))),(0,i.kt)("a",{name:"supported-os"}),(0,i.kt)("h3",{id:"ci-tested-operating-systems"},"CI tested operating systems"),(0,i.kt)("p",null,"Fastify uses GitHub Actions for CI testing, please refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources"},"GitHub's documentation regarding workflow runners"),"\nfor further details on what the latest virtual environment is in relation to\nthe YAML workflow labels below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"OS"),(0,i.kt)("th",{parentName:"tr",align:null},"YAML Workflow Label"),(0,i.kt)("th",{parentName:"tr",align:null},"Package Manager"),(0,i.kt)("th",{parentName:"tr",align:null},"Node.js"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linux"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ubuntu-latest")),(0,i.kt)("td",{parentName:"tr",align:null},"npm"),(0,i.kt)("td",{parentName:"tr",align:null},"10,12,14,16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linux"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ubuntu-18.04")),(0,i.kt)("td",{parentName:"tr",align:null},"yarn,pnpm"),(0,i.kt)("td",{parentName:"tr",align:null},"10,12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Windows"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"windows-latest")),(0,i.kt)("td",{parentName:"tr",align:null},"npm"),(0,i.kt)("td",{parentName:"tr",align:null},"10,12,14,16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"macos-latest")),(0,i.kt)("td",{parentName:"tr",align:null},"npm"),(0,i.kt)("td",{parentName:"tr",align:null},"10,12,14,16")))),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," might require passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-engines")," flag."))}m.isMDXComponent=!0}}]);