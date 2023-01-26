"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[82544],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={},s=void 0,o={unversionedId:"Guides/Benchmarking",id:"version-v4.12.x/Guides/Benchmarking",title:"Benchmarking",description:"Benchmarking",source:"@site/versioned_docs/version-v4.12.x/Guides/Benchmarking.md",sourceDirName:"Guides",slug:"/Guides/Benchmarking",permalink:"/website-next/docs/v4.12.x/Guides/Benchmarking",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Benchmarking.md",tags:[],version:"v4.12.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Index",permalink:"/website-next/docs/v4.12.x/Guides/"},next:{title:"Contributing To Fastify",permalink:"/website-next/docs/v4.12.x/Guides/Contributing"}},c={},l=[{value:"Benchmarking",id:"benchmarking",level:2},{value:"Simple",id:"simple",level:2},{value:"Run the test in the current branch",id:"run-the-test-in-the-current-branch",level:3},{value:"Run the test against different Node.js versions \u2728",id:"run-the-test-against-different-nodejs-versions-",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Run the test in different branches",id:"run-the-test-in-different-branches",level:3},{value:"Run the test in different branches against different Node.js versions \u2728",id:"run-the-test-in-different-branches-against-different-nodejs-versions-",level:3},{value:"Compare current branch with main (Gitflow)",id:"compare-current-branch-with-main-gitflow",level:3},{value:"Run different examples",id:"run-different-examples",level:3}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"Benchmarking is important if you want to measure how a change can affect the\nperformance of your application. We provide a simple way to benchmark your\napplication from the point of view of a user and contributor. The setup allows\nyou to automate benchmarks in different branches and on different Node.js\nversions."),(0,a.kt)("p",null,"The modules we will use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mcollina/autocannon"},"Autocannon"),": A HTTP/1.1 benchmarking\ntool written in node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/StarpTech/branch-comparer"},"Branch-comparer"),": Checkout\nmultiple git branches, execute scripts and log the results."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kimmobrunfeldt/concurrently"},"Concurrently"),": Run commands\nconcurrently."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/npm/npx"},"Npx"),": NPM package runner used to run scripts\nagainst different Node.js Versions and execute local binaries. Shipped with\n",(0,a.kt)("a",{parentName:"li",href:"mailto:npm@5.2.0"},"npm@5.2.0"),".")),(0,a.kt)("h2",{id:"simple"},"Simple"),(0,a.kt)("h3",{id:"run-the-test-in-the-current-branch"},"Run the test in the current branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run benchmark\n")),(0,a.kt)("h3",{id:"run-the-test-against-different-nodejs-versions-"},"Run the test against different Node.js versions \u2728"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx -p node@10 -- npm run benchmark\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"run-the-test-in-different-branches"},"Run the test in different branches"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 --script "npm run benchmark"\n')),(0,a.kt)("h3",{id:"run-the-test-in-different-branches-against-different-nodejs-versions-"},"Run the test in different branches against different Node.js versions \u2728"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 --script "npm run benchmark"\n')),(0,a.kt)("h3",{id:"compare-current-branch-with-main-gitflow"},"Compare current branch with main (Gitflow)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 --gitflow --script "npm run benchmark"\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run bench\n")),(0,a.kt)("h3",{id:"run-different-examples"},"Run different examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 -s "node ./node_modules/concurrently -k -s first \\"node ./examples/asyncawait.js\\" \\"node ./node_modules/autocannon -c 100 -d 5 -p 10 localhost:3000/\\""\n')))}p.isMDXComponent=!0}}]);