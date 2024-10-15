/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up and down time of user defined links
 **/

// dependencies
const http = require("http");
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`app is listening from port ${app.config.port}`);
  });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
