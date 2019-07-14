import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);

var School = new mongoose.Schema({
	creator_id: String,
	schoolID: String,
	facebook: String,
	twitter: String,
	name: String,
	majorColor: String,
	minorColor: String,
	thirdColor: String,
	fourthColor: String,
	latitude: String,
	longitude: String,
	schoolDescription: {type: String, default: "Gra, best school in kwara state, oldest school in kwara state"},
	proprietorName: String,
	schoolType: String,
	hmName: String,
	bigSlogan: {type: String, default: "We are ranked as the best school and oldest school in kwara state"},
	bigImage: String,
	mediumImage: String,
	smallSlogan: String,
	hmImage: String,
	logo: String,
	logoBig: String,
	logoMedium: String,
	pupil_image:String,
	pupil_image2:String,
	pupil_image3:String,
	pupil_image4: String,
	staff_image: String,
	staff_image2: String,
	staff_image3: String,
	staff_image4: String,
	staff_fullname: {type: String, default: "logoMedium.png"},
	staff_fullname2: {type: String, default: "logoMedium1.png"},
	staff_fullname3: {type: String, default: "logoMedium2.png"},
	staff_fullname4: {type: String, default: "logoMedium3.png"},
	staff_position: {type: String, default: "logoMedium.png"},
	staff_position2: {type: String, default: "logoMedium1.png"},
	staff_position3: {type: String, default: "logoMedium2.png"},
	staff_position4: {type: String, default: "logoMedium3.png"},
	staff_comment: {type: String, default: "logoMedium.png"},
	staff_comment2: {type: String, default: "logoMedium1.png"},
	staff_comment3: {type: String, default: "logoMedium2.png"},
	staff_comment4: {type: String, default: "logoMedium3.png"},
	proprietorImage: String,
	mediumImage2: String,
	small_historic_quote: {type: String, default: "In the history of modern school, there is probably no greater leap forward than building the future of your child with us"},
	advertisement_text_header: {type: String, default: "Over 20 First-Class Graduates produced every year, are former students of "},
	advertisement_text_description: {type: String, default: "Yearly more than 20 First-Class graduates in Universities across Nigeria and the Whole world, are former student/pupils of our Great School. So therefore the best asset you can give your Child is proper foundation, which is what we give our pupils/students"},
	advertisement_text_header1: {type: String, default: "is not just a School, but an EDUCATION itself"},
	advertisement_text_description1: {type: String, default: " Albert Einstein: Education is what remains after one has forgotten what one has learned in school. We believe Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life."},
	visionStatement: String,
	missionStatement: String,
	phone: {type: String, default: "+234 803 517 4511"},
	address: {type: String, default: "Beside state police headquarters, G.R.A, ILorin. P.M.B 134, ilorin - Kwara State"},
	email: {type: String, default: "stjosephnurseryprimaryschs@gmail.com"},

},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('School', School);
