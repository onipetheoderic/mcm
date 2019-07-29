import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var pupilContent = new mongoose.Schema({
	name: String,
	school_id: String,
	score: String,
	pupil_id: String,
	staff_id: String,
	reportsheet_id: String,

},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('pupilContent', pupilContent);