const express = require('express');

let server = express();
server.listen(9000, () => {
  console.log("API Start...")
})

server.get("/person", (req, res) => {
  res.json({ "result": "success", "data": [] })
})