import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);
//my beautiful database structure for the report sheet

var ReportSheet = new mongoose.Schema({
	pupil_id: String,
	staff_id: String,
	term_name: String,
	pupil_name: String,
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('ReportSheet', ReportSheet);
