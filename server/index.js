import express from "express";
// import Socket from "./services/SocketService";
import Startup from "./utils/Startup.js";
// import DbConnetion from "./utils/DbConfig";

//create server & socketServer
const app = express();
// const socketServer = require("http").createServer(app);
// const io = require("socket.io")(socketServer);
const PORT = process.env.PORT || 5000;

//Establish Socket
// TODO Need to change socket
// Socket.setIO(io);

// Start up Process
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to Atlas MongoDB
// DbConnection.connect();

//Start Server
// socketServer.listen(port, () => {
//   console.log(`[SERVING ON PORT: ${port}]`);
// });

app.listen(PORT, () => console.log("Server started on port " + PORT));
