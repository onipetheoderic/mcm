import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var Parent = new mongoose.Schema({
	passport_name: String,
	first_name: String,
	middle_name: String,
	last_name: String,
	user_id: String,
	role_id: String,
	fullName: String,
	school_id: String,	
	state_of_origin: String,
	lga_of_origin: String,
	sex: String,
	occupation: String,	
	office_address: String,
	phone: String,
	home_address: String,
	religion: String,
	church_attended: String,
	marital_status: String,
	fired: {type: Boolean, default: false},
	suspended: {type: Boolean, default: false},
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('Parent', Parent);
