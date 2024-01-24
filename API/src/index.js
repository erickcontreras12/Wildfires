const app = require('./app');
const server = require('http').Server(app);

async function main() {
  // set app port
  const port = process.env.APP_PORT;
  //Express Application
  await server.listen(port);
  console.log(`Server on port ${port}: Connected`);
}

main();
