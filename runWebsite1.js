//Made by Treya Nash

const express = require('express')
const app = express()
const port = 8502
const http = require('http');
const server = http.createServer(app);
const {Server }= require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public');
//   });

app.use(express.static('public'))

server.listen(port, () => {
    console.log("Hello Website")
})


