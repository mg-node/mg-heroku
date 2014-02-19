/*
 *  German cars: service center list
 */
var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
	MongoClient.connect("mongodb://localhost:27017/dasauto", function(err, db) {
	  if(err) { 
		  return console.dir(err);
	  } 
	  console.log('db open');
	  db.collection('ascenter', function(err, collection) {
		  console.log('collection ascenter');
	  });
	});
	
  res.render('index', { title: 'Service Center List' }, function(err, stuff) {
     if (!err) { // 컨텐트를 브라우저 뿐 아니라 콘솔로 출
        console.log(stuff);
        res.write(stuff);
        res.end();
     }
  });
};