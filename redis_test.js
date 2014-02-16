/**
 * redis test
 */
var net = require('net');
var redis = require('redis');

var server = net.createServer(function (conn) {
	console.log('connected');
	
	var client = redis.createClient();
	
	client.on('error', function(err) {
		console.log('Error' + err);
	});
	
	client.select(5);
	
	conn.on('data', function (data) {
		console.log(data + 'from ' + conn.remoteAddress + ' ' + conn.remotePort);
		
		try {
			var obj = JSON.parse(data);
			
			client.hset(obj.member, 'name',  obj.name,  redis.print);
			client.hset(obj.member, 'score', obj.score, redis.print);
			client.hset(obj.member, 'date',  obj.date,  redis.print);
			
			client.zadd('Zowie!', parseInt(obj.score), obj.member);
		} catch (err) {
			console.log(err);
		}
	});
	
	conn.on('close', function(){
		console.log('client closed connection');
		client.quit();
	});
	
}).listen(8124);

console.log('redist test: port 8124');