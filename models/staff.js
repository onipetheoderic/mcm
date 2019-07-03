import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var Staff = new mongoose.Schema({
	school_id: String,	
	dob: String,
	sex: String,
	staffType_id: String,
	salary: Number,
	teachers_remark: String,
	subject_id: String,
	class_id: String,
	hm_remark: String,
	proprietor_remark: String,
	suspended: {type: Boolean, default: false},
	fired: {type: Boolean, default: false},
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('Staff', Staff);
