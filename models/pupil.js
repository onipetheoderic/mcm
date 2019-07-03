import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var Pupil = new mongoose.Schema({
	parent_id: String,
	school_id: String,	
	dob: String,	
	state_of_origin: String,
	sex: String,
	office_address: String,
	home_address: String,
	religion: String,
	church_attended: String,
	marital_status: String,
	phone: String,
	suspended: {type: Boolean, default: false},
	expelled: {type: Boolean, default: false},
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('Pupil', Pupil);
