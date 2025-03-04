

## Command List

~~~
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
> edit app.js
touch server.mjs
node server.mjs // Run data server
npm run static // Run main server
~~~
