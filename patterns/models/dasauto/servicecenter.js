var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create ServiceCenter Schema
var ServiceCenter = new Schema({
	uid      : { type: String, require: true, trim: true, unique: true }, // bmw001
	company  : { type: String, require: true, trim: true }, //'BMW',
	dealer   : { type: String, required: true, trim: true }, //'한독',
	title    : { type: String, required: true, trim: true }, //'분당서비스센터',
	address  : String,   //'경기도 성남시 분당구 궁내동 314',
	tel      : String   // '031-8016-7301',
});

module.exports = mongoose.model('ServiceCenter', ServiceCenter);