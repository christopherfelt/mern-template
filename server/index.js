import express from "express";
import Socket from "./services/SocketService";
import Startup from "./Startup";
import DbConnetion from "./utils/DbConfig";

//create server & socketServer
const app = express();
const socketServer = require("http").createServer(app);
const io = require("socket.io")(socketServer);
const port = process.env.PORT || 3000;

//Establish Socket
// NOTE Need to change socket
Socket.setIO(io);
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to Atlas MongoDB
DbConnection.connect();

//Start Server
socketServer.listen(port, () => {
  console.log(`[SERVING ON PORT: ${port}]`);
});
