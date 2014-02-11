// web.js
var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

console.log(process.version);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});