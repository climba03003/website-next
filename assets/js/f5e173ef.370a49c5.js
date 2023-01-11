"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[81950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"Reference/LTS",id:"version-v4.2.x/Reference/LTS",title:"LTS",description:"Long Term Support",source:"@site/versioned_docs/version-v4.2.x/Reference/LTS.md",sourceDirName:"Reference",slug:"/Reference/LTS",permalink:"/website-next/docs/v4.2.x/Reference/LTS",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/LTS.md",tags:[],version:"v4.2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Hooks",permalink:"/website-next/docs/v4.2.x/Reference/Hooks"},next:{title:"Lifecycle",permalink:"/website-next/docs/v4.2.x/Reference/Lifecycle"}},s={},p=[{value:"Long Term Support",id:"long-term-support",level:2},{value:"Schedule",id:"schedule",level:3},{value:"CI tested operating systems",id:"ci-tested-operating-systems",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"long-term-support"},"Long Term Support"),(0,r.kt)("a",{id:"lts"}),(0,r.kt)("p",null,"Fastify's Long Term Support (LTS) is provided according to the schedule laid out\nin this document:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Major releases, "X" release of ',(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," X.Y.Z release\nversions, are supported for a minimum period of six months from their release\ndate. The release date of any specific version can be found at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/releases"},"https://github.com/fastify/fastify/releases"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Major releases will receive security updates for an additional six months\nfrom the release of the next major release. After this period we will still\nreview and release security fixes as long as they are provided by the\ncommunity and they do not violate other constraints, e.g. minimum supported\nNode.js version.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Major releases will be tested and verified against all Node.js release lines\nthat are supported by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"Node.js LTS\npolicy")," within the LTS period of that\ngiven Fastify release line. This implies that only the latest Node.js release\nof a given line is supported."))),(0,r.kt)("p",null,'A "month" is defined as 30 consecutive days.'),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"security-releases-and-semver"},"Security Releases and Semver"),(0,r.kt)("p",{parentName:"blockquote"},"As a consequence of providing long-term support for major releases, there are\noccasions where we need to release breaking changes as a ",(0,r.kt)("em",{parentName:"p"},"minor")," version\nrelease. Such changes will ",(0,r.kt)("em",{parentName:"p"},"always")," be noted in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/releases"},"release\nnotes"),"."),(0,r.kt)("p",{parentName:"blockquote"},"To avoid automatically receiving breaking security updates it is possible to\nuse the tilde (",(0,r.kt)("inlineCode",{parentName:"p"},"~"),") range qualifier. For example, to get patches for the 3.15\nrelease, and avoid automatically updating to the 3.16 release, specify the\ndependency as ",(0,r.kt)("inlineCode",{parentName:"p"},'"fastify": "~3.15.x"'),". This will leave your application\nvulnerable, so please use with caution.")),(0,r.kt)("h3",{id:"schedule"},"Schedule"),(0,r.kt)("a",{id:"lts-schedule"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"End Of LTS Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Node.js"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2018-03-06"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2019-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6, 8, 9, 10, 11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.0.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2019-02-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-01-31"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6, 8, 10, 12, 14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3.0.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2020-07-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-06-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10, 12, 14, 16, 18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4.0.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"14, 16, 18")))),(0,r.kt)("h3",{id:"ci-tested-operating-systems"},"CI tested operating systems"),(0,r.kt)("a",{id:"supported-os"}),(0,r.kt)("p",null,"Fastify uses GitHub Actions for CI testing, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources"},"GitHub's\ndocumentation regarding workflow\nrunners"),"\nfor further details on what the latest virtual environment is in relation to the\nYAML workflow labels below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OS"),(0,r.kt)("th",{parentName:"tr",align:null},"YAML Workflow Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Package Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu-latest")),(0,r.kt)("td",{parentName:"tr",align:null},"npm"),(0,r.kt)("td",{parentName:"tr",align:null},"14,16,18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu-18.04")),(0,r.kt)("td",{parentName:"tr",align:null},"yarn,pnpm"),(0,r.kt)("td",{parentName:"tr",align:null},"14,16,18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"windows-latest")),(0,r.kt)("td",{parentName:"tr",align:null},"npm"),(0,r.kt)("td",{parentName:"tr",align:null},"14,16,18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"macos-latest")),(0,r.kt)("td",{parentName:"tr",align:null},"npm"),(0,r.kt)("td",{parentName:"tr",align:null},"14,16,18")))),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," might require passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-engines"),"\nflag."))}m.isMDXComponent=!0}}]);