import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var School = new mongoose.Schema({
	creator_id: String,
	schoolID: String,
	name: String,
	majorColor: String,
	minorColor: String,
	thirdColor: String,
	latitude: String,
	longitude: String,
	urlname: String,
	schoolDescription: String,
	proprietorName: String,
	schoolType: String,
	hmName: String,
	slogan: String,
	visionStatement: String,
	missionStatement: String,
	schoolphoneNumber: String,
	username: String,
	password: String,
	generated_name: String,
	dob: String
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('School', School);
