

## Command List

~~~shell
npm init
npm install serve

// Make mock server
mkdir static
cd static
touch index.html
touch app.js

// Run server
cd ..
npx serve -p 5050 static

// Setup the prequently command
vi package.json ( add "static" under the "scripts" )
npm run static

// Fetch data from another server not mockData
>> edit app.js
touch server.mjs
node server.mjs // Run data server
npm run static // Run main server
~~~

~~~shell
// Create the mock service using the Fastify framework
// Node.js web framework that is built for rapid implementation and high performance
mkdir mock-srv
sd mock-srv
npm add fastify fastify-cli
npx fastify generate . --esm
npm install
npm install @fastify/cors
>> edit app.js in mock-srv
>> * fastify.register(cors)

>> create index.js in mock-srv/routes/[item]

// Run web server in 5050 port
cd .. && npm run static
// Run data server in 3000 port
npm run dev
~~~