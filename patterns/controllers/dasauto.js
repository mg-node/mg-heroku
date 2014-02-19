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
     if (!err) { // ����Ʈ�� ������ �� �ƴ϶� �ַܼ� ��
        console.log(stuff);
        res.write(stuff);
        res.end();
     }
  });
};