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
	latitude: String,
	longitude: String,
	schoolDescription: String,
	proprietorName: String,
	schoolType: String,
	hmName: String,
	bigSlogan: {type: String, default: "We Are Ranked as the Best School in Nigeria"},
	bigImage: String,
	mediumImage: String,
	small_historic_quote: {type: String, default: "In the history of modern school, there is probably no greater leap forward than building the future of your child with us"},
	advertisement_text_header: {type: String, default: "Over 20 First-Class Graduates produced every year, are former students of "},
	advertisement_text_description: {type: String, default: "Yearly more than 20 First-Class graduates in Universities across Nigeria and the Whole world, are former student/pupils of our Great School. So therefore the best asset you can give your Child is proper foundation, which is what we give our pupils/students"},
	advertisement_text_header1: {type: String, default: "is not just a School, but an EDUCATION itself"},
	advertisement_text_description1: {type: String, default: " Albert Einstein: Education is what remains after one has forgotten what one has learned in school. We believe Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life."},
	logo: {type: String, default: "logo.png"},
	visionStatement: String,
	missionStatement: String,

},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('School', School);
