const express = require("express");
const cors = require("cors");
const socket = require("socket.io");

const app = express();
app.use(cors());

const clients = [];

const server = app.listen(2000, () => {
  console.log(`Server listening on port 2000!`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("add-user", (data) => { });
  socket.on("drop-user", (data) => { });
  socket.on("msg", (data) => {
    io.broadcast("msg", data);
  });
});
