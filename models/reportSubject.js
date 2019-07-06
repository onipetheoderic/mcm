import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var ReportSubject = new mongoose.Schema({
	subject_name: String,
	subject_id: String,
	pupil_id: String,
	subject_test1: {type: Number, default: 0},
	subject_test2: {type: Number, default: 0},
	subject_test3: {type: Number, default: 0},
	subject_test4: {type: Number, default: 0},
	
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('ReportSubject', ReportSubject);
