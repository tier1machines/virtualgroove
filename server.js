const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Socket dependencies
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 7000;

// Global middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Handlers
const api = require('./routes/api');
const auth = require('./routes/auth');
const broker = require('./routes/broker');

// Serve static files
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/css', express.static(path.join(__dirname, 'src', 'public', 'css')));

// Routes
app.use('/api', api);
app.use('/auth', auth);
//app.use('/broker', broker);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


/*** SOCKETS ***/
io.on('connection', function(socket) {

  /*
  socket.on('reco', function(video) {
	console.log('Recommended video: ', video);
	io.sockets.emit('reco', video);
  });
  */

  // RabbitMQ worker
  const consumer = require('./msgbroker/worker');
  consumer(io);

});

io.on('disconnect', () => {
  console.log('client disconnected');
});


//app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


http.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


