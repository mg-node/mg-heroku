var ServiceCenter = require('../models/dasauto/servicecenter.js');
var async = require('async');
var path = require('path');

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

exports.regist = function(req, res) {
	var filePath = path.normalize(__dirname + "/../../public/dasauto/regist.html");
	
	res.sendfile(filePath);
};

exports.save = function(req, res) {
	async.waterfall([
		function(callback) {
			ServiceCenter.find({company: req.body.company}, function(err, docs) {
				var cnt = docs.length + 1;
				callback(null, cnt);
			});
		},
		function(cnt, callback) {
			var uid = req.body.company + '-' + ('000' + cnt).slice(-3);
			var item = {
					uid     : uid,
					company : req.body.company,
					dealer  : req.body.dealer,
					title   : req.body.title,
					address : req.body.address,
					tel     : req.body.tel
			};
			
			var collection = new ServiceCenter(item);
			
			collection.save(function(err, doc) {
				if (err) {
					res.send(err);
				} else {
					var datas = {
							title: 'Added',
							servicecenter: doc
					};
					
					res.render('dasauto/added', {
						locals: datas,
						cache: false
					});
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
			var datas = {
					title: 'Service Center',
					servicecenter: doc
			};
			
			res.render('dasauto/show', {
				locals: datas,
				cache: false
			});
		}
	});
};

exports.del = function(req, res) {
	var uid = req.params.uid;
	
	ServiceCenter.remove({ uid: uid}, function(err, doc) {
		if (err) {
			res.send('There is no center with uid of ' + uid);
		} else {
			res.send('delected ' + uid);
		}
	});
};

exports.edit = function(req, res) {
	var uid = req.params.uid;
	
	ServiceCenter.findOne({ uid: uid }, function(err, doc) {
		if (err) {
			res.send('There is no center with uid of ' + uid);
		} else {
			var datas = {
					title: 'Edit Service Center',
					servicecenter: doc
			};
			
			res.render('dasauto/edit', {
				locals: datas,
				cache: false
			});
		}
	});
};

exports.update = function(req, res) {
	var uid = req.params.uid;
	
	res.send('TODO: update ' + uid);
};