import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

// import routes
import contestRoutes from './routes/contest.server.route';
// define our app using express
const app = express();
// express-busboy to parse multipart/form-data
bb.extend(app);
// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
// set the port
const port = process.env.PORT || 3001;
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contest-app', {
  useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

app.use('/api', contestRoutes);
app.get('/', (req,res) => {
  return res.end('Api working');
})
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
const server = app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});

// socket io operations
const http = require('http');
const io = require('socket.io').listen(server);
// listen for incoming connections from client
io.sockets.on('connection', function (socket) {
  // start listening for coords
  socket.on('send:coords', function (data) {
    // Send the current positions to the connected client when client is ready
    getContest(data, function(contestInfo){
      console.log('Send Contest to client ' + socket.id);
      socket.emit('load:contest', contestInfo);
    });
    console.log("Receieved Cords Connected Client: ", data.id);
  	// broadcast your coordinates to everyone except you
  	socket.broadcast.emit('load:coords', data);
  });
  // start listening for vote
  socket.on('send:vote', function (data) {
    console.log("Receieved Data from Client: ", socket.id);
    console.log("Data : ", data);
  });
});

// get specific contest details for the user - based on his/her current geolocation co-ordinates
function getContest(data, callback){
  var latVal = data.coords.lat;
  var lngVal = data.coords.lng;

  var options = {
      port: 3001,
      path: '/api/?lat='+latVal+'&lng='+lngVal,
      method: 'GET'
  };
  var req = http.request(options, function(res) {
      var output = '';

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          output += chunk;
      });

      res.on('end', function() {
          var obj = JSON.parse(output);
          if (callback != undefined){
              callback(obj);
          }
      });
  });

  req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
  });

  req.end();
}