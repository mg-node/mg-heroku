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

if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', controllers.index);

// prefix route
var prefixes = ['nodestudy', 'processing'];
prefixes.forEach(function(prefix) {
	webrouter.route(app, prefix);
});

var dasauto = require('./patterns/controllers/dasauto');
app.get('/dasauto', dasauto.index);
app.get('/dasauto/saveform', dasauto.saveform);
app.post('/dasauto/save', dasauto.save);
app.get('/dasauto/:uid', dasauto.show);

var port = Number(process.env.PORT || 8080);
http.createServer(app).listen(port);
console.log('Server running at http://myounggun.herokuapp.com:' + port + "/");

/*var async = requir('async');
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
	if(err) {
		return console.dir(err);
	}

	var collection = db.collection('ascenter');
	  
	var doc1 = {
			company  : 'BMW',
			dealer   : '�ѵ�',
			title    : '�д缭�񽺼���',
			address  : '��⵵ ������ �д籸 �ó��� 314',
			tel      : '031-8016-7301',
			campaign_id : '2014001' 
	};
	
	var doc2 = {
			company  : 'BMW',
			dealer   : '�ڿ���',
			title    : '�д缭�񽺼���',
			address  : '��⵵ ������ �д籸 �д� 98-1',
			tel      : '031-711-7401',
			campaign_id : '' 
	};

	collection.remove(null, {safe: true }, function (err, result){
		collection.insert(doc1, {w:1}, function(err, result) {
			if (err) {
				return console.dir(err);
			}
			//console.log(result);
		});
	
		collection.insert(doc2, {w:1}, function(err, result) {
			if (err) {
				return console.dir(err);
			}
			//console.log(result);
			
			collection.find().toArray(function(err, docs) {
				console.log(docs);
			});
		});
	});
});*/