"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[12463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return t?a.createElement(g,s(s({ref:n},f),{},{components:t})):a.createElement(g,s({ref:n},f))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},s=void 0,o={unversionedId:"Guides/Database",id:"version-v4.12.x/Guides/Database",title:"Database",description:"Database",source:"@site/versioned_docs/version-v4.12.x/Guides/Database.md",sourceDirName:"Guides",slug:"/Guides/Database",permalink:"/website-next/docs/v4.12.x/Guides/Database",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Database.md",tags:[],version:"v4.12.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Contributing To Fastify",permalink:"/website-next/docs/v4.12.x/Guides/Contributing"},next:{title:"Delay Accepting Requests",permalink:"/website-next/docs/v4.12.x/Guides/Delay-Accepting-Requests"}},l={},p=[{value:"Database",id:"database",level:2},{value:"MySQL",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3},{value:"Redis",id:"redis",level:3},{value:"Mongo",id:"mongo",level:3},{value:"LevelDB",id:"leveldb",level:3},{value:"Writing plugin for a database library",id:"writing-plugin-for-a-database-library",level:3},{value:"Writing a plugin for a database engine",id:"writing-a-plugin-for-a-database-engine",level:3},{value:"Migrations",id:"migrations",level:3},{value:"Postgrator",id:"postgrator",level:4}],f={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("p",null,"Fastify's ecosystem provides a handful of\nplugins for connecting to various database engines.\nThis guide covers engines that have Fastify\nplugins maintained within the Fastify organization."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If a plugin for your database of choice does not exist\nyou can still use the database as Fastify is database agnostic.\nBy following the examples of the database plugins listed in this guide,\na plugin can be written for the missing database engine. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you would like to write your own Fastify plugin\nplease take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Guides/Plugins-Guide"},"plugins guide"))),(0,r.kt)("h3",{id:"mysql"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify-mysql"},"MySQL")),(0,r.kt)("p",null,"Install the plugin by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i @fastify/mysql"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fastify = require('fastify')()\n\nfastify.register(require('@fastify/mysql'), {\n  connectionString: 'mysql://root@localhost/mysql'\n})\n\nfastify.get('/user/:id', function(req, reply) {\n  fastify.mysql.query(\n    'SELECT id, username, hash, salt FROM users WHERE id=?', [req.params.id],\n    function onResult (err, result) {\n      reply.send(err || result)\n    }\n  )\n})\n\nfastify.listen({ port: 3000 }, err => {\n  if (err) throw err\n  console.log(`server listening on ${fastify.server.address().port}`)\n})\n")),(0,r.kt)("h3",{id:"postgres"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify-postgres"},"Postgres")),(0,r.kt)("p",null,"Install the plugin by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i pg @fastify/postgres"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fastify = require('fastify')()\n\nfastify.register(require('@fastify/postgres'), {\n  connectionString: 'postgres://postgres@localhost/postgres'\n})\n\nfastify.get('/user/:id', function (req, reply) {\n  fastify.pg.query(\n    'SELECT id, username, hash, salt FROM users WHERE id=$1', [req.params.id],\n    function onResult (err, result) {\n      reply.send(err || result)\n    }\n  )\n})\n\nfastify.listen({ port: 3000 }, err => {\n  if (err) throw err\n  console.log(`server listening on ${fastify.server.address().port}`)\n})\n")),(0,r.kt)("h3",{id:"redis"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify-redis"},"Redis")),(0,r.kt)("p",null,"Install the plugin by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i @fastify/redis")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"'use strict'\n\nconst fastify = require('fastify')()\n\nfastify.register(require('@fastify/redis'), { host: '127.0.0.1' })\n// or\nfastify.register(require('@fastify/redis'), { url: 'redis://127.0.0.1', /* other redis options */ })\n\nfastify.get('/foo', function (req, reply) {\n  const { redis } = fastify\n  redis.get(req.query.key, (err, val) => {\n    reply.send(err || val)\n  })\n})\n\nfastify.post('/foo', function (req, reply) {\n  const { redis } = fastify\n  redis.set(req.body.key, req.body.value, (err) => {\n    reply.send(err || { status: 'ok' })\n  })\n})\n\nfastify.listen({ port: 3000 }, err => {\n  if (err) throw err\n  console.log(`server listening on ${fastify.server.address().port}`)\n})\n")),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"@fastify/redis")," doesn't close\nthe client connection when Fastify server shuts down.\nTo opt-in to this behavior, register the client like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"fastify.register(require('@fastify/redis'), {\n  client: redis,\n  closeClient: true\n})\n")),(0,r.kt)("h3",{id:"mongo"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify-mongodb"},"Mongo")),(0,r.kt)("p",null,"Install the plugin by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i @fastify/mongodb")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fastify = require('fastify')()\n\nfastify.register(require('@fastify/mongodb'), {\n  // force to close the mongodb connection when app stopped\n  // the default value is false\n  forceClose: true,\n  \n  url: 'mongodb://mongo/mydb'\n})\n\nfastify.get('/user/:id', function (req, reply) {\n  // Or this.mongo.client.db('mydb').collection('users')\n  const users = this.mongo.db.collection('users')\n\n  // if the id is an ObjectId format, you need to create a new ObjectId\n  const id = this.mongo.ObjectId(req.params.id)\n  users.findOne({ id }, (err, user) => {\n    if (err) {\n      reply.send(err)\n      return\n    }\n    reply.send(user)\n  })\n})\n\nfastify.listen({ port: 3000 }, err => {\n  if (err) throw err\n})\n")),(0,r.kt)("h3",{id:"leveldb"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify-leveldb"},"LevelDB")),(0,r.kt)("p",null,"Install the plugin by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i @fastify/leveldb")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fastify = require('fastify')()\n\nfastify.register(\n  require('@fastify/leveldb'),\n  { name: 'db' }\n)\n\nfastify.get('/foo', async function (req, reply) {\n  const val = await this.level.db.get(req.query.key)\n  return val\n})\n\nfastify.post('/foo', async function (req, reply) {\n  await this.level.db.put(req.body.key, req.body.value)\n  return { status: 'ok' }\n})\n\nfastify.listen({ port: 3000 }, err => {\n  if (err) throw err\n  console.log(`server listening on ${fastify.server.address().port}`)\n})\n")),(0,r.kt)("h3",{id:"writing-plugin-for-a-database-library"},"Writing plugin for a database library"),(0,r.kt)("p",null,"We could write a plugin for a database\nlibrary too (e.g. Knex, Prisma, or TypeORM).\nWe will use ",(0,r.kt)("a",{parentName:"p",href:"https://knexjs.org/"},"Knex")," in our example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"'use strict'\n\nconst fp = require('fastify-plugin')\nconst knex = require('knex')\n\nfunction knexPlugin(fastify, options, done) {\n  if(!fastify.knex) {\n    const knex = knex(options)\n    fastify.decorate('knex', knex)\n\n    fastify.addHook('onClose', (fastify, done) => {\n      if (fastify.knex === knex) {\n        fastify.knex.destroy(done)\n      }\n    })\n  }\n\n  done()\n}\n\nexport default fp(knexPlugin, { name: 'fastify-knex-example' })\n")),(0,r.kt)("h3",{id:"writing-a-plugin-for-a-database-engine"},"Writing a plugin for a database engine"),(0,r.kt)("p",null,"In this example, we will create a basic Fastify MySQL plugin from scratch (it is\na stripped-down example, please use the official plugin in production)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fp = require('fastify-plugin')\nconst mysql = require('mysql2/promise')\n\nfunction fastifyMysql(fastify, options, done) {\n  const connection = mysql.createConnection(options)\n\n  if (!fastify.mysql) {\n    fastify.decorate('mysql', connection)\n  }\n\n  fastify.addHook('onClose', (fastify, done) => connection.end().then(done).catch(done))\n\n  done()\n}\n\nexport default fp(fastifyMysql, { name: 'fastify-mysql-example' })\n")),(0,r.kt)("h3",{id:"migrations"},"Migrations"),(0,r.kt)("p",null,"Database schema migrations are an integral part of database management and\ndevelopment. Migrations provide a repeatable and testable way to modify a\ndatabase's schema and prevent data loss."),(0,r.kt)("p",null,"As stated at the beginning of the guide, Fastify is database agnostic and any\nNodeJS database migration tool can be used with it. We will give an example of\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postgrator"},"Postgrator")," which has support\nfor Postgres, MySQL, SQL Server and SQLite. For MongoDB migrations, please check\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/migrate-mongo"},"migrate-mongo"),"."),(0,r.kt)("h4",{id:"postgrator"},(0,r.kt)("a",{parentName:"h4",href:"https://www.npmjs.com/package/postgrator"},"Postgrator")),(0,r.kt)("p",null,"Postgrator is NodeJS SQL migration tool that uses a directory of SQL scripts to\nalter the database schema. Each file an migrations folder need to follow the\npattern: ",(0,r.kt)("inlineCode",{parentName:"p"}," [version].[action].[optional-description].sql"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"version:")," must be an incrementing number (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"001")," or a timestamp)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"action:")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"do")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undo"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"do")," implements the version, ",(0,r.kt)("inlineCode",{parentName:"p"},"undo"),"\nreverts it. Think about it like ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," in other migration tools."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"optional-description")," describes which changes migration makes. Although\noptional, it should be used for all migrations as it makes it easier for\neveryone to know which changes are made in a migration."),(0,r.kt)("p",null,"In our example, we are going to have a single migration that creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),"\ntable and we are going to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Postgrator")," to run the migration."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i pg postgrator")," to install dependencies needed for the\nexample.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"// 001.do.create-users-table.sql\nCREATE TABLE IF NOT EXISTS users (\n  id SERIAL PRIMARY KEY NOT NULL,\n  created_at DATE NOT NULL DEFAULT CURRENT_DATE,\n  firstName TEXT NOT NULL,\n  lastName TEXT NOT NULL\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const pg = require('pg')\nconst Postgrator = require('postgrator')\nconst path = require('path')\n\nasync function migrate() {\n  const client = new pg.Client({\n    host: 'localhost',\n    port: 5432,\n    database: 'example', \n    user: 'example',\n    password: 'example',\n  });\n\n  try {\n    const postgrator = new Postgrator({\n      migrationPattern: path.join(__dirname, '/migrations/*'),\n      driver: 'pg',\n      database: 'example',\n      schemaTable: 'migrations',\n      currentSchema: 'public', // Postgres and MS SQL Server only\n      execQuery: (query) => client.query(query),\n    });\n\n    const result = await postgrator.migrate()\n\n    if (result.length === 0) {\n      console.log(\n        'No migrations run for schema \"public\". Already at the latest one.'\n      )\n    }\n\n    console.log('Migration done.')\n\n    process.exitCode = 0\n  } catch(err) {\n    console.error(error)\n    process.exitCode = 1\n  }\n  \n  await client.end()\n}\n\nmigrate()\n")))}u.isMDXComponent=!0}}]);