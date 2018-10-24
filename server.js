let express = require('express');
let app = express();
let server = app.listen(80, 'localhost');

app.use(express.static('public'));

console.log("Socket Server running...");

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', newConnection);
io.sockets.on('disconnect', disconnected);

function newConnection(socket){
  console.log('connected Client: ' + socket.id);
}

function disconnected(){
  console.log('Client disconnected');
}
