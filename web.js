var http = require("http");
var express = require("express");
var app = express();
var controllers = require('./patterns/controllers');
var webrouter = require('./webrouter');
var mongoose = require('mongoose');

// dasauto db connect
mongoose.connect('mongodb://localhost/dasautoDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('connect to mongoose, dasautoDB opened');
});

app.set('views', __dirname + '/patterns/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
//app.use(express.staticCache());
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.directory(__dirname + '/public'));
app.use(function(req, res, next){
  throw new Error(req.url + ' not found');
});
app.use(function(err, req, res, next) {
  console.log(err);
  res.send(err.message);
});

if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', controllers.index);

// prefix route
var prefixes = ['nodestudy', 'processing'];
prefixes.forEach(function(prefix) {
	webrouter.route(app, prefix);
});

var port = Number(process.env.PORT || 8080);
http.createServer(app).listen(port);
console.log('Server running at http://myounggun.herokuapp.com:' + port + "/");