const express = require("express");
const server = express();

server.get("/", function(req, res) {
  console.log("FULL");
  return res.send("I'm here!");
});

server.listen(3000);
