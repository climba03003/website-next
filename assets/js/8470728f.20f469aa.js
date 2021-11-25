"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[2941],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7891:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={title:"Serverless",sidebar_label:"Serverless",hide_title:!1},s=void 0,p={unversionedId:"Serverless",id:"Serverless",isDocsHomePage:!1,title:"Serverless",description:"Run serverless applications and REST APIs using your existing Fastify application.",source:"@site/docs/Serverless.md",sourceDirName:".",slug:"/Serverless",permalink:"/docs/v3/Serverless",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Serverless.md",tags:[],version:"current",frontMatter:{title:"Serverless",sidebar_label:"Serverless",hide_title:!1},sidebar:"sidebar",previous:{title:"Routes",permalink:"/docs/v3/Routes"},next:{title:"Style Guide",permalink:"/docs/v3/Style-Guide"}},d=[{value:"Should you use Fastify in a serverless platform?",id:"should-you-use-fastify-in-a-serverless-platform",children:[],level:4},{value:"Contents",id:"contents",children:[],level:3},{value:"AWS Lambda",id:"aws-lambda",children:[{value:"app.js",id:"appjs",children:[],level:3},{value:"lambda.js",id:"lambdajs",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Considerations",id:"considerations",children:[],level:3}],level:2},{value:"Google Cloud Functions",id:"google-cloud-functions",children:[{value:"Creation of Fastify instance",id:"creation-of-fastify-instance",children:[],level:3},{value:"Add Custom <code>contentTypeParser</code> to Fastify instance",id:"add-custom-contenttypeparser-to-fastify-instance",children:[],level:3},{value:"Define your endpoint (examples)",id:"define-your-endpoint-examples",children:[],level:3},{value:"Implement and export the function",id:"implement-and-export-the-function",children:[],level:3},{value:"Local test",id:"local-test",children:[],level:3},{value:"Deploy",id:"deploy",children:[{value:"Read logs",id:"read-logs",children:[],level:4},{value:"Example request to <code>/hello</code> endpoint",id:"example-request-to-hello-endpoint",children:[],level:4}],level:3},{value:"References",id:"references",children:[],level:3}],level:2},{value:"Google Cloud Run",id:"google-cloud-run",children:[{value:"Adjust Fastify server",id:"adjust-fastify-server",children:[],level:3},{value:"Add a Dockerfile",id:"add-a-dockerfile",children:[],level:3},{value:"Add a .dockerignore",id:"add-a-dockerignore",children:[],level:3},{value:"Submit build",id:"submit-build",children:[],level:3},{value:"Deploy Image",id:"deploy-image",children:[],level:3}],level:2},{value:"netlify-lambda",id:"netlify-lambda",children:[{value:"functions/server.js",id:"functionsserverjs",children:[],level:3},{value:"netlify.toml",id:"netlifytoml",children:[],level:3},{value:"webpack.config.netlify.js",id:"webpackconfignetlifyjs",children:[],level:3},{value:"Scripts",id:"scripts",children:[],level:3}],level:2},{value:"Vercel",id:"vercel",children:[],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Run serverless applications and REST APIs using your existing Fastify application.\nBy default, Fastify will not work on your serverless platform of choice, you will need\nto make some small changes to fix this. This document contains a small guide for\nthe most popular serverless providers and how to use Fastify with them."),(0,r.kt)("h4",{id:"should-you-use-fastify-in-a-serverless-platform"},"Should you use Fastify in a serverless platform?"),(0,r.kt)("p",null,"That is up to you! Keep in mind that functions as a service should always use\nsmall and focused functions, but you can also run an entire web application with them.\nIt is important to remember that the bigger the application the slower the initial boot will be.\nThe best way to run Fastify applications in serverless environments\nis to use platforms like Google Cloud Run, AWS Fargate, and Azure Container Instances,\nwhere the server can handle multiple requests at the same time and make full use of Fastify's features."),(0,r.kt)("p",null,"One of the best features of using Fastify in serverless applications is the ease of development.\nIn your local environment, you will always run the Fastify application directly without the need\nfor any additional tools, while the same code will be executed in your serverless platform of\nchoice with an additional snippet of code."),(0,r.kt)("h3",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aws-lambda"},"AWS Lambda")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#google-cloud-functions"},"Google Cloud Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#google-cloud-run"},"Google Cloud Run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#netlify-lambda"},"Netlify Lambda")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vercel"},"Vercel"))),(0,r.kt)("h2",{id:"aws-lambda"},"AWS Lambda"),(0,r.kt)("p",null,"The sample provided allows you to easily build serverless web applications/services\nand RESTful APIs using Fastify on top of AWS Lambda and Amazon API Gateway."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Using ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/fastify/aws-lambda-fastify"},"aws-lambda-fastify")," is just one possible way.")),(0,r.kt)("h3",{id:"appjs"},"app.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify');\n\nfunction init() {\n  const app = fastify();\n  app.get('/', (request, reply) => reply.send({ hello: 'world' }));\n  return app;\n}\n\nif (require.main === module) {\n  // called directly i.e. \"node app\"\n  init().listen(3000, (err) => {\n    if (err) console.error(err);\n    console.log('server listening on 3000');\n  });\n} else {\n  // required as a module => executed on aws lambda\n  module.exports = init;\n}\n")),(0,r.kt)("p",null,"When executed in your lambda function we do not need to listen to a specific port,\nso we just export the wrapper function ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," in this case.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Serverless/#lambda-js"},(0,r.kt)("inlineCode",{parentName:"a"},"lambda.js"))," file will use this export."),(0,r.kt)("p",null,"When you execute your Fastify application like always,\ni.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"node app.js")," ",(0,r.kt)("em",{parentName:"p"},"(the detection for this could be ",(0,r.kt)("inlineCode",{parentName:"em"},"require.main === module"),")"),",\nyou can normally listen to your port, so you can still run your Fastify function locally."),(0,r.kt)("h3",{id:"lambdajs"},"lambda.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const awsLambdaFastify = require('aws-lambda-fastify')\nconst init = require('./app');\n\nconst proxy = awsLambdaFastify(init())\n// or\n// const proxy = awsLambdaFastify(init(), { binaryMimeTypes: ['application/octet-stream'] })\n\nexports.handler = proxy;\n// or\n// exports.handler = (event, context, callback) => proxy(event, context, callback);\n// or\n// exports.handler = (event, context) => proxy(event, context);\n// or\n// exports.handler = async (event, context) => proxy(event, context);\n")),(0,r.kt)("p",null,"We just require ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/aws-lambda-fastify"},"aws-lambda-fastify"),"\n(make sure you install the dependency ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i --save aws-lambda-fastify"),") and our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Serverless/#app-js"},(0,r.kt)("inlineCode",{parentName:"a"},"app.js"))," file and call the\nexported ",(0,r.kt)("inlineCode",{parentName:"p"},"awsLambdaFastify")," function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," as the only parameter.\nThe resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," function has the correct signature to be used as a lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," function.\nThis way all the incoming events (API Gateway requests) are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," function of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/aws-lambda-fastify"},"aws-lambda-fastify"),"."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"An example deployable with ",(0,r.kt)("a",{parentName:"p",href:"https://claudiajs.com/tutorials/serverless-express.html"},"claudia.js")," can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/claudiajs/example-projects/tree/master/fastify-app-lambda"},"here"),"."),(0,r.kt)("h3",{id:"considerations"},"Considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API Gateway does not support streams yet, so you are not able to handle ",(0,r.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reply/#streams"},"streams"),"."),(0,r.kt)("li",{parentName:"ul"},"API Gateway has a timeout of 29 seconds, so it is important to provide a reply during this time.")),(0,r.kt)("h2",{id:"google-cloud-functions"},"Google Cloud Functions"),(0,r.kt)("h3",{id:"creation-of-fastify-instance"},"Creation of Fastify instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require(\"fastify\")({\n  logger: true // you can also define the level passing an object configuration to logger: {level: 'debug'}\n});\n")),(0,r.kt)("h3",{id:"add-custom-contenttypeparser-to-fastify-instance"},"Add Custom ",(0,r.kt)("inlineCode",{parentName:"h3"},"contentTypeParser")," to Fastify instance"),(0,r.kt)("p",null,"As explained ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/issues/946#issuecomment-766319521"},"in issue #946"),", since the Google Cloud Functions platform parses the body of the request before it arrives into Fastify instance, troubling the body request in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," methods, you need to add a custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/v3/Content-Type-Parser"},(0,r.kt)("inlineCode",{parentName:"a"},"Content-Type Parser"))," to mitigate this behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('application/json', {}, (req, body, done) => {\n  done(null, body.body);\n});\n")),(0,r.kt)("h3",{id:"define-your-endpoint-examples"},"Define your endpoint (examples)"),(0,r.kt)("p",null,"A simple ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', async (request, reply) => {\n  reply.send({message: 'Hello World!'})\n})\n")),(0,r.kt)("p",null,"Or a more complete ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," endpoint with schema validation: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.route({\n  method: 'POST',\n  url: '/hello',\n  schema: {\n    body: {\n      type: 'object',\n      properties: {\n        name: { type: 'string'}\n      },\n      required: ['name']\n    },\n    response: {\n      200: {\n        type: 'object', \n        properties: {\n          message: {type: 'string'}\n        }\n      }\n    },\n  },\n  handler: async (request, reply) => {\n    const { name } = request.body;\n    reply.code(200).send({\n      message: `Hello ${name}!`\n    })\n  }\n})\n")),(0,r.kt)("h3",{id:"implement-and-export-the-function"},"Implement and export the function"),(0,r.kt)("p",null,"Final step, implement the function to handle the request and pass it to Fastify by emitting ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," event to ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify.server"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fastifyFunction = async (request, reply) => {\n  await fastify.ready();\n  fastify.server.emit('request', request, reply)\n}\n\nexport.fastifyFunction = fastifyFunction;\n")),(0,r.kt)("h3",{id:"local-test"},"Local test"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/functions-framework-nodejs"},"Google Functions Framework for Node.js"),"."),(0,r.kt)("p",null,"You can install it globally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @google-cloud/functions-framework\n")),(0,r.kt)("p",null,"Or as a development library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @google-cloud/functions-framework\n")),(0,r.kt)("p",null,"Than you can run your function locally with Functions Framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @google-cloud/functions-framework --target=fastifyFunction\n")),(0,r.kt)("p",null,"Or add this command to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n...\n"dev": "npx @google-cloud/functions-framework --target=fastifyFunction"\n...\n}\n')),(0,r.kt)("p",null,"and run it with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud functions deploy fastifyFunction \\\n--runtime nodejs14 --trigger-http --region $GOOGLE_REGION --allow-unauthenticated\n")),(0,r.kt)("h4",{id:"read-logs"},"Read logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud functions logs read\n")),(0,r.kt)("h4",{id:"example-request-to-hello-endpoint"},"Example request to ",(0,r.kt)("inlineCode",{parentName:"h4"},"/hello")," endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://$GOOGLE_REGION-$GOOGLE_PROJECT.cloudfunctions.net/me -H "Content-Type: application/json" -d \'{ "name": "Fastify" }\'\n{"message":"Hello Fastify!"}\n')),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions/docs/quickstart-nodejs"},"Google Cloud Functions - Node.js Quickstart "))),(0,r.kt)("h2",{id:"google-cloud-run"},"Google Cloud Run"),(0,r.kt)("p",null,"Unlike AWS Lambda or Google Cloud Functions, Google Cloud Run is a serverless ",(0,r.kt)("strong",{parentName:"p"},"container")," environment. Its primary purpose is to provide an infrastructure-abstracted environment to run arbitrary containers. As a result, Fastify can be deployed to Google Cloud Run with little-to-no code changes from the way you would write your Fastify app normally."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Follow the steps below to deploy to Google Cloud Run if you are already familiar with gcloud or just follow their ",(0,r.kt)("a",{parentName:"em",href:"https://cloud.google.com/run/docs/quickstarts/build-and-deploy"},"quickstart")),"."),(0,r.kt)("h3",{id:"adjust-fastify-server"},"Adjust Fastify server"),(0,r.kt)("p",null,"In order for Fastify to properly listen for requests within the container, be sure to set the correct port and address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function build() {\n  const fastify = Fastify({ trustProxy: true })\n  return fastify\n}\n\nasync function start() {\n  // Google Cloud Run will set this environment variable for you, so\n  // you can also use it to detect if you are running in Cloud Run\n  const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined\n\n  // You must listen on the port Cloud Run provides\n  const port = process.env.PORT || 3000\n\n  // You must listen on all IPV4 addresses in Cloud Run\n  const address = IS_GOOGLE_CLOUD_RUN ? "0.0.0.0" : undefined\n\n  try {\n    const server = build()\n    const address = await server.listen(port, address)\n    console.log(`Listening on ${address}`)\n  } catch (err) {\n    console.error(err)\n    process.exit(1)\n  }\n}\n\nmodule.exports = build\n\nif (require.main === module) {\n  start()\n}\n')),(0,r.kt)("h3",{id:"add-a-dockerfile"},"Add a Dockerfile"),(0,r.kt)("p",null,"You can add any valid ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," that packages and runs a Node app. A basic ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," can be found in the official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/knative/docs/blob/2d654d1fd6311750cc57187a86253c52f273d924/docs/serving/samples/hello-world/helloworld-nodejs/Dockerfile"},"gcloud docs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Use the official Node.js 10 image.\n# https://hub.docker.com/_/node\nFROM node:10\n\n# Create and change to the app directory.\nWORKDIR /usr/src/app\n\n# Copy application dependency manifests to the container image.\n# A wildcard is used to ensure both package.json AND package-lock.json are copied.\n# Copying this separately prevents re-running npm install on every code change.\nCOPY package*.json ./\n\n# Install production dependencies.\nRUN npm install --only=production\n\n# Copy local code to the container image.\nCOPY . .\n\n# Run the web service on container startup.\nCMD [ "npm", "start" ]\n')),(0,r.kt)("h3",{id:"add-a-dockerignore"},"Add a .dockerignore"),(0,r.kt)("p",null,"To keep build artifacts out of your container (which keeps it small and improves build times) add a ",(0,r.kt)("inlineCode",{parentName:"p"},".dockerignore")," file like the one below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.dockerignore"},"Dockerfile\nREADME.md\nnode_modules\nnpm-debug.log\n")),(0,r.kt)("h3",{id:"submit-build"},"Submit build"),(0,r.kt)("p",null,"Next, submit your app to be built into a Docker image by running the following command (replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT-ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"APP-NAME")," with your GCP project id and an app name):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud builds submit --tag gcr.io/PROJECT-ID/APP-NAME\n")),(0,r.kt)("h3",{id:"deploy-image"},"Deploy Image"),(0,r.kt)("p",null,"After your image has built, you can deploy it with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud beta run deploy --image gcr.io/PROJECT-ID/APP-NAME --platform managed\n")),(0,r.kt)("p",null,"Your app will be accessible from the URL GCP provides."),(0,r.kt)("h2",{id:"netlify-lambda"},"netlify-lambda"),(0,r.kt)("p",null,"First, please perform all preparation steps related to ",(0,r.kt)("strong",{parentName:"p"},"AWS Lambda"),"."),(0,r.kt)("p",null,"Create a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"functions"),",  then create ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," (and your endpoint path will be ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js"),") inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"functions")," folder."),(0,r.kt)("h3",{id:"functionsserverjs"},"functions/server.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export { handler } from '../lambda.js'; // Change `lambda.js` path to your `lambda.js` path\n")),(0,r.kt)("h3",{id:"netlifytoml"},"netlify.toml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[build]\n  # This will be run the site build\n  command = "npm run build:functions"\n  # This is the directory is publishing to netlify\'s CDN\n  # and this is directory of your front of your app\n  # publish = "build"\n  # functions build directory\n  functions = "functions-build" # always appends `-build` folder to your `functions` folder for builds\n')),(0,r.kt)("h3",{id:"webpackconfignetlifyjs"},"webpack.config.netlify.js"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do not forget to add this Webpack config, or else problems may occur")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const nodeExternals = require('webpack-node-externals');\nconst dotenv = require('dotenv-safe');\nconst webpack = require('webpack');\n\nconst env = process.env.NODE_ENV || 'production';\nconst dev = env === 'development';\n\nif (dev) {\n  dotenv.config({ allowEmptyValues: true });\n}\n\nmodule.exports = {\n  mode: env,\n  devtool: dev ? 'eval-source-map' : 'none',\n  externals: [nodeExternals()],\n  devServer: {\n    proxy: {\n      '/.netlify': {\n        target: 'http://localhost:9000',\n        pathRewrite: { '^/.netlify/functions': '' }\n      }\n    }\n  },\n  module: {\n    rules: []\n  },\n  plugins: [\n    new webpack.DefinePlugin({\n      'process.env.APP_ROOT_PATH': JSON.stringify('/'),\n      'process.env.NETLIFY_ENV': true,\n      'process.env.CONTEXT': env\n    })\n  ]\n};\n")),(0,r.kt)("h3",{id:"scripts"},"Scripts"),(0,r.kt)("p",null,"Add this command to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,r.kt)("em",{parentName:"p"},"scripts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n...\n"build:functions": "netlify-lambda build functions --config ./webpack.config.netlify.js"\n...\n}\n')),(0,r.kt)("p",null,"Then it should work fine"),(0,r.kt)("h2",{id:"vercel"},"Vercel"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," provides zero-configuration deployment for\nNode.js applications. In order to use it now, it is as simple as\nconfiguring your ",(0,r.kt)("inlineCode",{parentName:"p"},"vercel.json")," file like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "rewrites": [\n        {\n            "source": "/(.*)",\n            "destination": "/api/serverless.js"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Then, write ",(0,r.kt)("inlineCode",{parentName:"p"},"api/serverless.js")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"use strict";\n\n// Read the .env file.\nimport * as dotenv from "dotenv";\ndotenv.config();\n\n// Require the framework\nimport Fastify from "fastify";\n\n// Instantiate Fastify with some config\nconst app = Fastify({\n  logger: true,\n});\n\n// Register your application as a normal plugin.\napp.register(import("../src/app"));\n\nexport default async (req, res) => {\n    await app.ready();\n    app.server.emit(\'request\', req, res);\n}\n')))}c.isMDXComponent=!0}}]);