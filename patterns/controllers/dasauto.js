var ServiceCenter = require('../models/dasauto/servicecenter.js');
var async = require('async');

exports.index = function(req, res) {
	ServiceCenter.find({}, function(err, docs) {
		var datas = {
				title: 'Service Center List',
				servicecenters: docs
		};
		
		res.render('dasauto/index', {
			locals: datas,
			cache: false
		});
	});
};

exports.saveform = function(req, res) {
	var path = require('path');
	var filePath = path.normalize(__dirname + "/../../public/dasauto/saveform.html");
	
	res.sendfile(filePath);
};

exports.save = function(req, res) {
	async.waterfall([
		function(callback) {
			var cnt = 0;
			ServiceCenter.find({company: req.body.company}, function(err, docs) {
				cnt = docs.length + 1;
			});
			
			callback(null, cnt);
		},
		function(cnt, callback) {
			var uid = ('000' + cnt).slice(-3);
			var item = {
					uid     : uid,
					company : req.body.company,
					dealer  : req.body.dealer,
					title   : req.body.title,
					address : req.body.address,
					tel     : req.body.tel
			};
			
			var collection = new ServiceCenter(item);
			
			collection.save(function(err, data) {
				if (err) {
					res.send(err);
				} else {
					console.log(data);
					res.send('added ok');
				}
			});
			
			callback(null, 'done');
		}
	], function (err, result) {
		if (err) {
			console.log(err);
		}
		// result now equals 'done'
	});
};

exports.show = function(req, res) {
	var uid = req.params.uid;
	
	ServiceCenter.findOne({ uid: uid }, function(err, doc) {
		if (err) {
			res.send('There is no center with uid of ' + uid);
		} else {
			console.log('show = ' + doc);
			var datas = {
					title: 'Service Center List',
					servicecenter: doc
			};
			
			res.render('dasauto/show', {
				locals: datas,
				cache: false
			});
		}
	});
};