"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[42152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const l={},r=void 0,s={unversionedId:"Guides/Serverless",id:"version-latest/Guides/Serverless",title:"Serverless",description:"Run serverless applications and REST APIs using your existing Fastify",source:"@site/versioned_docs/version-latest/Guides/Serverless.md",sourceDirName:"Guides",slug:"/Guides/Serverless",permalink:"/website-next/docs/latest/Guides/Serverless",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Serverless.md",tags:[],version:"latest",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Recommendations",permalink:"/website-next/docs/latest/Guides/Recommendations"},next:{title:"Fastify Style Guide",permalink:"/website-next/docs/latest/Guides/Style-Guide"}},i={},p=[{value:"Should you use Fastify in a serverless platform?",id:"should-you-use-fastify-in-a-serverless-platform",level:4},{value:"Contents",id:"contents",level:3},{value:"AWS",id:"aws",level:2},{value:"Using @fastify/aws-lambda",id:"using-fastifyaws-lambda",level:3},{value:"app.js",id:"appjs",level:4},{value:"lambda.js",id:"lambdajs",level:4},{value:"Example",id:"example",level:4},{value:"Considerations",id:"considerations",level:3},{value:"Beyond API Gateway",id:"beyond-api-gateway",level:4},{value:"Google Cloud Functions",id:"google-cloud-functions",level:2},{value:"Creation of Fastify instance",id:"creation-of-fastify-instance",level:3},{value:"Add Custom <code>contentTypeParser</code> to Fastify instance",id:"add-custom-contenttypeparser-to-fastify-instance",level:3},{value:"Define your endpoint (examples)",id:"define-your-endpoint-examples",level:3},{value:"Implement and export the function",id:"implement-and-export-the-function",level:3},{value:"Local test",id:"local-test",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Read logs",id:"read-logs",level:4},{value:"Example request to <code>/hello</code> endpoint",id:"example-request-to-hello-endpoint",level:4},{value:"References",id:"references",level:3},{value:"Google Cloud Run",id:"google-cloud-run",level:2},{value:"Adjust Fastify server",id:"adjust-fastify-server",level:3},{value:"Add a Dockerfile",id:"add-a-dockerfile",level:3},{value:"Add a .dockerignore",id:"add-a-dockerignore",level:3},{value:"Submit build",id:"submit-build",level:3},{value:"Deploy Image",id:"deploy-image",level:3},{value:"netlify-lambda",id:"netlify-lambda",level:2},{value:"functions/server.js",id:"functionsserverjs",level:3},{value:"netlify.toml",id:"netlifytoml",level:3},{value:"webpack.config.netlify.js",id:"webpackconfignetlifyjs",level:3},{value:"Scripts",id:"scripts",level:3},{value:"Vercel",id:"vercel",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run serverless applications and REST APIs using your existing Fastify\napplication. By default, Fastify will not work on your serverless platform of\nchoice, you will need to make some small changes to fix this. This document\ncontains a small guide for the most popular serverless providers and how to use\nFastify with them."),(0,o.kt)("h4",{id:"should-you-use-fastify-in-a-serverless-platform"},"Should you use Fastify in a serverless platform?"),(0,o.kt)("p",null,"That is up to you! Keep in mind that functions as a service should always use\nsmall and focused functions, but you can also run an entire web application with\nthem. It is important to remember that the bigger the application the slower the\ninitial boot will be. The best way to run Fastify applications in serverless\nenvironments is to use platforms like Google Cloud Run, AWS Fargate, and Azure\nContainer Instances, where the server can handle multiple requests at the same\ntime and make full use of Fastify's features."),(0,o.kt)("p",null,"One of the best features of using Fastify in serverless applications is the ease\nof development. In your local environment, you will always run the Fastify\napplication directly without the need for any additional tools, while the same\ncode will be executed in your serverless platform of choice with an additional\nsnippet of code."),(0,o.kt)("h3",{id:"contents"},"Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#aws"},"AWS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#google-cloud-functions"},"Google Cloud Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#google-cloud-run"},"Google Cloud Run")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#netlify-lambda"},"Netlify Lambda")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#vercel"},"Vercel"))),(0,o.kt)("h2",{id:"aws"},"AWS"),(0,o.kt)("p",null,"To integrate with AWS, you have two choices of library:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/aws-lambda-fastify"},"@fastify/aws-lambda"),"\nwhich only adds API Gateway support but has heavy optimizations for fastify."),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/H4ad/serverless-adapter"},"@h4ad/serverless-adapter"),"\nwhich is a little slower as it creates an HTTP request for each AWS event but\nhas support for more AWS services such as: AWS SQS, AWS SNS and others.")),(0,o.kt)("p",null,"So you can decide which option is best for you, but you can test both libraries."),(0,o.kt)("h3",{id:"using-fastifyaws-lambda"},"Using @fastify/aws-lambda"),(0,o.kt)("p",null,"The sample provided allows you to easily build serverless web\napplications/services and RESTful APIs using Fastify on top of AWS Lambda and\nAmazon API Gateway."),(0,o.kt)("h4",{id:"appjs"},"app.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify');\n\nfunction init() {\n  const app = fastify();\n  app.get('/', (request, reply) => reply.send({ hello: 'world' }));\n  return app;\n}\n\nif (require.main === module) {\n  // called directly i.e. \"node app\"\n  init().listen({ port: 3000 }, (err) => {\n    if (err) console.error(err);\n    console.log('server listening on 3000');\n  });\n} else {\n  // required as a module => executed on aws lambda\n  module.exports = init;\n}\n")),(0,o.kt)("p",null,"When executed in your lambda function we do not need to listen to a specific\nport, so we just export the wrapper function ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," in this case. The\n",(0,o.kt)("a",{parentName:"p",href:"#lambdajs"},(0,o.kt)("inlineCode",{parentName:"a"},"lambda.js"))," file will use this export."),(0,o.kt)("p",null,"When you execute your Fastify application like always, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"node app.js")," ",(0,o.kt)("em",{parentName:"p"},"(the\ndetection for this could be ",(0,o.kt)("inlineCode",{parentName:"em"},"require.main === module"),")"),", you can normally listen\nto your port, so you can still run your Fastify function locally."),(0,o.kt)("h4",{id:"lambdajs"},"lambda.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const awsLambdaFastify = require('@fastify/aws-lambda')\nconst init = require('./app');\n\nconst proxy = awsLambdaFastify(init())\n// or\n// const proxy = awsLambdaFastify(init(), { binaryMimeTypes: ['application/octet-stream'] })\n\nexports.handler = proxy;\n// or\n// exports.handler = (event, context, callback) => proxy(event, context, callback);\n// or\n// exports.handler = (event, context) => proxy(event, context);\n// or\n// exports.handler = async (event, context) => proxy(event, context);\n")),(0,o.kt)("p",null,"We just require\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/aws-lambda-fastify"},"@fastify/aws-lambda")," (make sure\nyou install the dependency ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i @fastify/aws-lambda"),") and our\n",(0,o.kt)("a",{parentName:"p",href:"#appjs"},(0,o.kt)("inlineCode",{parentName:"a"},"app.js"))," file and call the exported ",(0,o.kt)("inlineCode",{parentName:"p"},"awsLambdaFastify")," function with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," as the only parameter. The resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," function has the correct\nsignature to be used as a lambda ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," function. This way all the incoming\nevents (API Gateway requests) are passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," function of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/aws-lambda-fastify"},"@fastify/aws-lambda"),"."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"An example deployable with\n",(0,o.kt)("a",{parentName:"p",href:"https://claudiajs.com/tutorials/serverless-express.html"},"claudia.js")," can be\nfound\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/claudiajs/example-projects/tree/master/fastify-app-lambda"},"here"),"."),(0,o.kt)("h3",{id:"considerations"},"Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API Gateway does not support streams yet, so you are not able to handle\n",(0,o.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Reply#streams"},"streams"),"."),(0,o.kt)("li",{parentName:"ul"},"API Gateway has a timeout of 29 seconds, so it is important to provide a reply\nduring this time.")),(0,o.kt)("h4",{id:"beyond-api-gateway"},"Beyond API Gateway"),(0,o.kt)("p",null,"If you need to integrate with more AWS services, take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://viniciusl.com.br/serverless-adapter/docs/main/frameworks/fastify"},"@h4ad/serverless-adapter"),"\non Fastify to find out how to integrate."),(0,o.kt)("h2",{id:"google-cloud-functions"},"Google Cloud Functions"),(0,o.kt)("h3",{id:"creation-of-fastify-instance"},"Creation of Fastify instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require(\"fastify\")({\n  logger: true // you can also define the level passing an object configuration to logger: {level: 'debug'}\n});\n")),(0,o.kt)("h3",{id:"add-custom-contenttypeparser-to-fastify-instance"},"Add Custom ",(0,o.kt)("inlineCode",{parentName:"h3"},"contentTypeParser")," to Fastify instance"),(0,o.kt)("p",null,"As explained ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/issues/946#issuecomment-766319521"},"in issue\n#946"),",\nsince the Google Cloud Functions platform parses the body of the request before\nit arrives at the Fastify instance, troubling the body request in case of ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," methods, you need to add a custom ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/ContentTypeParser"},(0,o.kt)("inlineCode",{parentName:"a"},"Content-Type\nParser"))," to mitigate this behavior."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('application/json', {}, (req, body, done) => {\n  done(null, body.body);\n});\n")),(0,o.kt)("h3",{id:"define-your-endpoint-examples"},"Define your endpoint (examples)"),(0,o.kt)("p",null,"A simple ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', async (request, reply) => {\n  reply.send({message: 'Hello World!'})\n})\n")),(0,o.kt)("p",null,"Or a more complete ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," endpoint with schema validation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.route({\n  method: 'POST',\n  url: '/hello',\n  schema: {\n    body: {\n      type: 'object',\n      properties: {\n        name: { type: 'string'}\n      },\n      required: ['name']\n    },\n    response: {\n      200: {\n        type: 'object',\n        properties: {\n          message: {type: 'string'}\n        }\n      }\n    },\n  },\n  handler: async (request, reply) => {\n    const { name } = request.body;\n    reply.code(200).send({\n      message: `Hello ${name}!`\n    })\n  }\n})\n")),(0,o.kt)("h3",{id:"implement-and-export-the-function"},"Implement and export the function"),(0,o.kt)("p",null,"Final step, implement the function to handle the request and pass it to Fastify\nby emitting ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," event to ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify.server"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fastifyFunction = async (request, reply) => {\n  await fastify.ready();\n  fastify.server.emit('request', request, reply)\n}\n\nexport.fastifyFunction = fastifyFunction;\n")),(0,o.kt)("h3",{id:"local-test"},"Local test"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/functions-framework-nodejs"},"Google Functions Framework for\nNode.js"),"."),(0,o.kt)("p",null,"You can install it globally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @google-cloud/functions-framework\n")),(0,o.kt)("p",null,"Or as a development library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @google-cloud/functions-framework\n")),(0,o.kt)("p",null,"Then you can run your function locally with Functions Framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @google-cloud/functions-framework --target=fastifyFunction\n")),(0,o.kt)("p",null,"Or add this command to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n...\n"dev": "npx @google-cloud/functions-framework --target=fastifyFunction"\n...\n}\n')),(0,o.kt)("p",null,"and run it with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud functions deploy fastifyFunction \\\n--runtime nodejs14 --trigger-http --region $GOOGLE_REGION --allow-unauthenticated\n")),(0,o.kt)("h4",{id:"read-logs"},"Read logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud functions logs read\n")),(0,o.kt)("h4",{id:"example-request-to-hello-endpoint"},"Example request to ",(0,o.kt)("inlineCode",{parentName:"h4"},"/hello")," endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://$GOOGLE_REGION-$GOOGLE_PROJECT.cloudfunctions.net/me \\\n  -H "Content-Type: application/json" \\\n  -d \'{ "name": "Fastify" }\'\n{"message":"Hello Fastify!"}\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions/docs/quickstart-nodejs"},"Google Cloud Functions - Node.js Quickstart\n"))),(0,o.kt)("h2",{id:"google-cloud-run"},"Google Cloud Run"),(0,o.kt)("p",null,"Unlike AWS Lambda or Google Cloud Functions, Google Cloud Run is a serverless\n",(0,o.kt)("strong",{parentName:"p"},"container")," environment. Its primary purpose is to provide an\ninfrastructure-abstracted environment to run arbitrary containers. As a result,\nFastify can be deployed to Google Cloud Run with little-to-no code changes from\nthe way you would write your Fastify app normally."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Follow the steps below to deploy to Google Cloud Run if you are already\nfamiliar with gcloud or just follow their\n",(0,o.kt)("a",{parentName:"em",href:"https://cloud.google.com/run/docs/quickstarts/build-and-deploy"},"quickstart")),"."),(0,o.kt)("h3",{id:"adjust-fastify-server"},"Adjust Fastify server"),(0,o.kt)("p",null,"In order for Fastify to properly listen for requests within the container, be\nsure to set the correct port and address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function build() {\n  const fastify = Fastify({ trustProxy: true })\n  return fastify\n}\n\nasync function start() {\n  // Google Cloud Run will set this environment variable for you, so\n  // you can also use it to detect if you are running in Cloud Run\n  const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined\n\n  // You must listen on the port Cloud Run provides\n  const port = process.env.PORT || 3000\n\n  // You must listen on all IPV4 addresses in Cloud Run\n  const host = IS_GOOGLE_CLOUD_RUN ? "0.0.0.0" : undefined\n\n  try {\n    const server = build()\n    const address = await server.listen({ port, host })\n    console.log(`Listening on ${address}`)\n  } catch (err) {\n    console.error(err)\n    process.exit(1)\n  }\n}\n\nmodule.exports = build\n\nif (require.main === module) {\n  start()\n}\n')),(0,o.kt)("h3",{id:"add-a-dockerfile"},"Add a Dockerfile"),(0,o.kt)("p",null,"You can add any valid ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," that packages and runs a Node app. A basic\n",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," can be found in the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/knative/docs/blob/2d654d1fd6311750cc57187a86253c52f273d924/docs/serving/samples/hello-world/helloworld-nodejs/Dockerfile"},"gcloud\ndocs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Use the official Node.js 10 image.\n# https://hub.docker.com/_/node\nFROM node:10\n\n# Create and change to the app directory.\nWORKDIR /usr/src/app\n\n# Copy application dependency manifests to the container image.\n# A wildcard is used to ensure both package.json AND package-lock.json are copied.\n# Copying this separately prevents re-running npm install on every code change.\nCOPY package*.json ./\n\n# Install production dependencies.\nRUN npm i --production\n\n# Copy local code to the container image.\nCOPY . .\n\n# Run the web service on container startup.\nCMD [ "npm", "start" ]\n')),(0,o.kt)("h3",{id:"add-a-dockerignore"},"Add a .dockerignore"),(0,o.kt)("p",null,"To keep build artifacts out of your container (which keeps it small and improves\nbuild times) add a ",(0,o.kt)("inlineCode",{parentName:"p"},".dockerignore")," file like the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-.dockerignore"},"Dockerfile\nREADME.md\nnode_modules\nnpm-debug.log\n")),(0,o.kt)("h3",{id:"submit-build"},"Submit build"),(0,o.kt)("p",null,"Next, submit your app to be built into a Docker image by running the following\ncommand (replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT-ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"APP-NAME")," with your GCP project id and an\napp name):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud builds submit --tag gcr.io/PROJECT-ID/APP-NAME\n")),(0,o.kt)("h3",{id:"deploy-image"},"Deploy Image"),(0,o.kt)("p",null,"After your image has built, you can deploy it with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud beta run deploy --image gcr.io/PROJECT-ID/APP-NAME --platform managed\n")),(0,o.kt)("p",null,"Your app will be accessible from the URL GCP provides."),(0,o.kt)("h2",{id:"netlify-lambda"},"netlify-lambda"),(0,o.kt)("p",null,"First, please perform all preparation steps related to ",(0,o.kt)("strong",{parentName:"p"},"AWS Lambda"),"."),(0,o.kt)("p",null,"Create a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"functions"),",  then create ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," (and your endpoint\npath will be ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js"),") inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions")," folder."),(0,o.kt)("h3",{id:"functionsserverjs"},"functions/server.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export { handler } from '../lambda.js'; // Change `lambda.js` path to your `lambda.js` path\n")),(0,o.kt)("h3",{id:"netlifytoml"},"netlify.toml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[build]\n  # This will be run the site build\n  command = "npm run build:functions"\n  # This is the directory is publishing to netlify\'s CDN\n  # and this is directory of your front of your app\n  # publish = "build"\n  # functions build directory\n  functions = "functions-build" # always appends `-build` folder to your `functions` folder for builds\n')),(0,o.kt)("h3",{id:"webpackconfignetlifyjs"},"webpack.config.netlify.js"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do not forget to add this Webpack config, or else problems may occur")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const nodeExternals = require('webpack-node-externals');\nconst dotenv = require('dotenv-safe');\nconst webpack = require('webpack');\n\nconst env = process.env.NODE_ENV || 'production';\nconst dev = env === 'development';\n\nif (dev) {\n  dotenv.config({ allowEmptyValues: true });\n}\n\nmodule.exports = {\n  mode: env,\n  devtool: dev ? 'eval-source-map' : 'none',\n  externals: [nodeExternals()],\n  devServer: {\n    proxy: {\n      '/.netlify': {\n        target: 'http://localhost:9000',\n        pathRewrite: { '^/.netlify/functions': '' }\n      }\n    }\n  },\n  module: {\n    rules: []\n  },\n  plugins: [\n    new webpack.DefinePlugin({\n      'process.env.APP_ROOT_PATH': JSON.stringify('/'),\n      'process.env.NETLIFY_ENV': true,\n      'process.env.CONTEXT': env\n    })\n  ]\n};\n")),(0,o.kt)("h3",{id:"scripts"},"Scripts"),(0,o.kt)("p",null,"Add this command to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,o.kt)("em",{parentName:"p"},"scripts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n...\n"build:functions": "netlify-lambda build functions --config ./webpack.config.netlify.js"\n...\n}\n')),(0,o.kt)("p",null,"Then it should work fine"),(0,o.kt)("h2",{id:"vercel"},"Vercel"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," provides zero-configuration deployment for Node.js\napplications. To use it now, it is as simple as configuring your ",(0,o.kt)("inlineCode",{parentName:"p"},"vercel.json"),"\nfile like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "rewrites": [\n        {\n            "source": "/(.*)",\n            "destination": "/api/serverless.js"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Then, write ",(0,o.kt)("inlineCode",{parentName:"p"},"api/serverless.js")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"use strict";\n\n// Read the .env file.\nimport * as dotenv from "dotenv";\ndotenv.config();\n\n// Require the framework\nimport Fastify from "fastify";\n\n// Instantiate Fastify with some config\nconst app = Fastify({\n  logger: true,\n});\n\n// Register your application as a normal plugin.\napp.register(import("../src/app"));\n\nexport default async (req, res) => {\n    await app.ready();\n    app.server.emit(\'request\', req, res);\n}\n')))}u.isMDXComponent=!0}}]);