

var express = require('express'); // express is the standard server framework for Node.js

var bodyParser = require('body-parser'); // body-parser handles HTTP POST requests by extracting the entire body portion of an incoming request stream and exposing it on req.body
var http = require('http');  // To support HTTP features


var app = express();
var httpServer = http.Server(app);



app.use(express.static(__dirname + '/.../public'));



var port = 8080;


httpServer.listen(port, function () {
  console.log("server listening on port", port);
});

