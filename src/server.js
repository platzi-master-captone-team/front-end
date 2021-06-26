//Loading dependencies & initializing express
const os = require('os');
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');

//For signalling in WebRTC
const socketIO = require('socket.io');

//Use cors
app.use(cors());

//Define the folder which contains the CSS and JS for the fontend
app.use(express.static(__dirname + '/public'));

//Define a route
app.get('/', function (req, res) {
  //Render a view (located in the directory views/) on this route
  res.render('index.html');
});

//Initialize http server and associate it with express
var server = http.createServer(app);

//Ports on which server should listen - 8000 or the one provided by the environment
server.listen(process.env.PORT || 3000);

//Initialize socket.io
var io = socketIO(server, {
  cors: {
    origin: '*',
  },
});

//Implementing Socket.io
//connection event is fired as soon as a client connects to this socket.
io.on('connection', function (socket) {
  //Event for joining/creating room
  socket.on('create or join', function (room) {
    //Finding clients in the current room
    let clientsInRoom = io.of('/').adapter.rooms.get(room);
    let numClients = clientsInRoom ? 1 : 0;

    //If no client is in the room, create a room and add the current client
    if (numClients === 0) {
      socket.join(room);
      socket.emit('created', room, socket.id);
    }

    //If one client is already in the room, add this client in the room
    else if (numClients === 1) {
      socket.join(room);
      io.to(room).emit('ready');
    }

    //If two clients are already present in the room, do not add the current client in the room
    else {
      // max two clients
      socket.emit('full', room);
    }
  });

  //Defining Server behavious on Socket Events
  socket.on('message', function (message, room) {
    //server should send the received message only in room
    socket.in(room).emit('message', message, room);
  });

  //Event for notifying other clients when a client leaves the room
  socket.on('bye', function () {
    console.log('received bye');
  });
});