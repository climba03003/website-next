"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[93649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={},i=void 0,o={unversionedId:"Guides/Testing",id:"version-v4.3.x/Guides/Testing",title:"Testing",description:"Testing",source:"@site/versioned_docs/version-v4.3.x/Guides/Testing.md",sourceDirName:"Guides",slug:"/Guides/Testing",permalink:"/website-next/docs/v4.3.x/Guides/Testing",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Testing.md",tags:[],version:"v4.3.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Fastify Style Guide",permalink:"/website-next/docs/v4.3.x/Guides/Style-Guide"},next:{title:"How to write a good plugin",permalink:"/website-next/docs/v4.3.x/Guides/Write-Plugin"}},l={},p=[{value:"Testing",id:"testing",level:2},{value:"Separating concerns makes testing easy",id:"separating-concerns-makes-testing-easy",level:3},{value:"Benefits of using fastify.inject()",id:"benefits-of-using-fastifyinject",level:3},{value:"Testing with HTTP injection",id:"testing-with-http-injection",level:3},{value:"Another Example:",id:"another-example",level:4},{value:"Testing with a running server",id:"testing-with-a-running-server",level:3},{value:"Example:",id:"example",level:4},{value:"How to inspect tap tests",id:"how-to-inspect-tap-tests",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Testing is one of the most important parts of developing an application. Fastify\nis very flexible when it comes to testing and is compatible with most testing\nframeworks (such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tap"},"Tap"),", which is used in\nthe examples below)."),(0,r.kt)("p",null,"Let's ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into a fresh directory called 'testing-example' and type ",(0,r.kt)("inlineCode",{parentName:"p"},"npm init\n-y")," in our terminal."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i fastify && npm i tap pino-pretty -D")),(0,r.kt)("h3",{id:"separating-concerns-makes-testing-easy"},"Separating concerns makes testing easy"),(0,r.kt)("p",null,"First, we are going to separate our application code from our server code:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst fastify = require('fastify')\n\nfunction build(opts={}) {\n  const app = fastify(opts)\n  app.get('/', async function (request, reply) {\n    return { hello: 'world' }\n  })\n\n  return app\n}\n\nmodule.exports = build\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"server.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst server = require('./app')({\n  logger: {\n    level: 'info',\n    transport: {\n      target: 'pino-pretty'\n    }\n  }\n})\n\nserver.listen({ port: 3000 }, (err, address) => {\n  if (err) {\n    server.log.error(err)\n    process.exit(1)\n  }\n})\n")),(0,r.kt)("h3",{id:"benefits-of-using-fastifyinject"},"Benefits of using fastify.inject()"),(0,r.kt)("p",null,"Fastify comes with built-in support for fake HTTP injection thanks to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/light-my-request"},(0,r.kt)("inlineCode",{parentName:"a"},"light-my-request")),"."),(0,r.kt)("p",null,"Before introducing any tests, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},".inject")," method to make a fake\nrequest to our route:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app.test.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst build = require('./app')\n\nconst test = async () => {\n  const app = build()\n\n  const response = await app.inject({\n    method: 'GET',\n    url: '/'\n  })\n\n  console.log('status code: ', response.statusCode)\n  console.log('body: ', response.body)\n}\ntest()\n")),(0,r.kt)("p",null,"First, our code will run inside an asynchronous function, giving us access to\nasync/await."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".inject")," ensures all registered plugins have booted up and our application is\nready to test. Finally, we pass the request method we want to use and a route.\nUsing await we can store the response without a callback."),(0,r.kt)("p",null,"Run the test file in your terminal ",(0,r.kt)("inlineCode",{parentName:"p"},"node app.test.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'status code:  200\nbody:  {"hello":"world"}\n')),(0,r.kt)("h3",{id:"testing-with-http-injection"},"Testing with HTTP injection"),(0,r.kt)("p",null,"Now we can replace our ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," calls with actual tests!"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),' change the "test" script to:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"test": "tap --reporter=list --watch"')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app.test.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst { test } = require('tap')\nconst build = require('./app')\n\ntest('requests the \"/\" route', async t => {\n  const app = build()\n\n  const response = await app.inject({\n    method: 'GET',\n    url: '/'\n  })\n  t.equal(response.statusCode, 200, 'returns a status code of 200')\n})\n")),(0,r.kt)("p",null,"Finally, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," in the terminal and see your test results!"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inject")," method can do much more than a simple GET request to a URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.inject({\n  method: String,\n  url: String,\n  query: Object,\n  payload: Object,\n  headers: Object,\n  cookies: Object\n}, (error, response) => {\n  // your tests\n})\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".inject")," methods can also be chained by omitting the callback function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .inject()\n  .get('/')\n  .headers({ foo: 'bar' })\n  .query({ foo: 'bar' })\n  .end((err, res) => { // the .end call will trigger the request\n    console.log(res.payload)\n  })\n")),(0,r.kt)("p",null,"or in the promisified version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .inject({\n    method: String,\n    url: String,\n    query: Object,\n    payload: Object,\n    headers: Object,\n    cookies: Object\n  })\n  .then(response => {\n    // your tests\n  })\n  .catch(err => {\n    // handle error\n  })\n")),(0,r.kt)("p",null,"Async await is supported as well!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const res = await fastify.inject({ method: String, url: String, payload: Object, headers: Object })\n  // your tests\n} catch (err) {\n  // handle error\n}\n")),(0,r.kt)("h4",{id:"another-example"},"Another Example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Fastify = require('fastify')\n\nfunction buildFastify () {\n  const fastify = Fastify()\n\n  fastify.get('/', function (request, reply) {\n    reply.send({ hello: 'world' })\n  })\n\n  return fastify\n}\n\nmodule.exports = buildFastify\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"test.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', t => {\n  t.plan(4)\n\n  const fastify = buildFastify()\n\n  // At the end of your tests it is highly recommended to call `.close()`\n  // to ensure that all connections to external services get closed.\n  t.teardown(() => fastify.close())\n\n  fastify.inject({\n    method: 'GET',\n    url: '/'\n  }, (err, response) => {\n    t.error(err)\n    t.equal(response.statusCode, 200)\n    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')\n    t.same(response.json(), { hello: 'world' })\n  })\n})\n")),(0,r.kt)("h3",{id:"testing-with-a-running-server"},"Testing with a running server"),(0,r.kt)("p",null,"Fastify can also be tested after starting the server with ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify.listen()")," or\nafter initializing routes and plugins with ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify.ready()"),"."),(0,r.kt)("h4",{id:"example"},"Example:"),(0,r.kt)("p",null,"Uses ",(0,r.kt)("strong",{parentName:"p"},"app.js")," from the previous example."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"test-listen.js")," (testing with\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/request"},(0,r.kt)("inlineCode",{parentName:"a"},"Request")),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst request = require('request')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', t => {\n  t.plan(5)\n\n  const fastify = buildFastify()\n\n  t.teardown(() => fastify.close())\n\n  fastify.listen({ port: 0 }, (err) => {\n    t.error(err)\n\n    request({\n      method: 'GET',\n      url: 'http://localhost:' + fastify.server.address().port\n    }, (err, response, body) => {\n      t.error(err)\n      t.equal(response.statusCode, 200)\n      t.equal(response.headers['content-type'], 'application/json; charset=utf-8')\n      t.same(JSON.parse(body), { hello: 'world' })\n    })\n  })\n})\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"test-ready.js")," (testing with\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},(0,r.kt)("inlineCode",{parentName:"a"},"SuperTest")),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst supertest = require('supertest')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', async (t) => {\n  const fastify = buildFastify()\n\n  t.teardown(() => fastify.close())\n\n  await fastify.ready()\n\n  const response = await supertest(fastify.server)\n    .get('/')\n    .expect(200)\n    .expect('Content-Type', 'application/json; charset=utf-8')\n  t.same(response.body, { hello: 'world' })\n})\n")),(0,r.kt)("h3",{id:"how-to-inspect-tap-tests"},"How to inspect tap tests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Isolate your test by passing the ",(0,r.kt)("inlineCode",{parentName:"li"},"{only: true}")," option")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"test('should ...', {only: true}, t => ...)\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"tap")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"npx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> npx tap -O -T --node-arg=--inspect-brk test/<test-file.test.js>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-O")," specifies to run tests with the ",(0,r.kt)("inlineCode",{parentName:"li"},"only")," option enabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-T")," specifies not to timeout (while you're debugging)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--node-arg=--inspect-brk")," will launch the node debugger")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"In VS Code, create and launch a ",(0,r.kt)("inlineCode",{parentName:"li"},"Node.js: Attach")," debug configuration. No\nmodification should be necessary.")),(0,r.kt)("p",null,"Now you should be able to step through your test file (and the rest of\n",(0,r.kt)("inlineCode",{parentName:"p"},"Fastify"),") in your code editor."))}c.isMDXComponent=!0}}]);