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
	fourthColor: String,
	schoolDescription: {type: String, default: "Gra, best school in kwara state, oldest school in kwara state"},
	proprietorName: String,
	schoolType: String,
	hmName: String,
	logo: String,
	visionStatement: String,
	missionStatement: String,
	phone: String,
	address: {type: String, default: "Beside state police headquarters, G.R.A, ILorin. P.M.B 134, ilorin - Kwara State"},
	email: {type: String, default: "stjosephnurseryprimaryschs@gmail.com"},

},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('School', School);
