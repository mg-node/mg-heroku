var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create ServiceCenter Schema
var ServiceCenter = new Schema({
	uid      : { type: String, require: true, trim: true, unique: true }, // bmw001
	company  : { type: String, require: true, trim: true }, //'BMW',
	dealer   : { type: String, required: true, trim: true }, //'�ѵ�',
	title    : { type: String, required: true, trim: true }, //'�д缭�񽺼���',
	address  : String,   //'��⵵ ������ �д籸 �ó��� 314',
	tel      : String   // '031-8016-7301',
});

module.exports = mongoose.model('ServiceCenter', ServiceCenter);