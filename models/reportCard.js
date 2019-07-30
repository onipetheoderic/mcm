import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var ReportCard = new mongoose.Schema({
	full_name: String,
	subject_name: String,
	subject_id: String,
	test_score1: Number,
	test_score2: Number,
	test_score3: Number,
	examScore: Number,
	total: Number,
	term_name: String,
	reportsheet_id: String,
	class_name: String,
	class_id: String,
	staff_id: String,
	school_id: String,
	pupil_id: String,


},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


ReportCard.pre('save', function() {
	console.log(this)
});
// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('ReportCard', ReportCard);
