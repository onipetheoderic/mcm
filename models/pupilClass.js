import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);
//my beautiful database structure for the report sheet

var PupilClass = new mongoose.Schema({
	pupil_name: String,
	pupil_class: String,
	pic: String,
	pupil_id: String,
	staff_id: String,
	report_id: String,
	result_type: String,
	maths_name: {type: String, default: "Mathematics"},
	maths_test1:{type: Number, default: 0},
	maths_test2:{type: Number, default: 0},
	maths_test3:{type: Number, default: 0},
	maths_exam: {type: Number, default: 0},
	maths_total: {type: Number, default: 0},
	english_name: {type: String, default: "English"},
	english_test1:{type: Number, default: 0},
	english_test2:{type: Number, default: 0},
	english_test3:{type: Number, default: 0},
	english_exam: {type: Number, default: 0},
	english_total: {type: Number, default: 0},
	yoruba_name: {type: String, default: "Yoruba"},
	yoruba_test1:{type: Number, default: 0},
	yoruba_test2:{type: Number, default: 0},
	yoruba_test3:{type: Number, default: 0},
	yoruba_exam: {type: Number, default: 0},
	yoruba_total: {type: Number, default: 0},
	basic_science_name: {type: String, default: "Basic Science"},
	basic_science_test1:{type: Number, default: 0},
	basic_science_test2:{type: Number, default: 0},
	basic_science_test3:{type: Number, default: 0},
	basic_science_exam: {type: Number, default: 0},
	basic_science_total: {type: Number, default: 0},
	social_name: {type: String, default: "Social Studies"},
	social_test1:{type: Number, default: 0},
	social_test2:{type: Number, default: 0},
	social_test3:{type: Number, default: 0},
	social_exam: {type: Number, default: 0},
	social_total: {type: Number, default: 0},
	arts_name: {type: String, default: "Fine Arts"},
	arts_test1:{type: Number, default: 0},
	arts_test2:{type: Number, default: 0},
	arts_test3:{type: Number, default: 0},
	arts_exam: {type: Number, default: 0},
	arts_total: {type: Number, default: 0},
	agric_name: {type: String, default: "Agricultural Science"},
	agric_test1:{type: Number, default: 0},
	agric_test2:{type: Number, default: 0},
	agric_test3:{type: Number, default: 0},
	agric_exam: {type: Number, default: 0},
	agric_total: {type: Number, default: 0},
	civic_name: {type: String, default: "Civic Education"},
	civic_test1:{type: Number, default: 0},
	civic_test2:{type: Number, default: 0},
	civic_test3:{type: Number, default: 0},
	civic_exam: {type: Number, default: 0},
	civic_total: {type: Number, default: 0},
	crs_name: {type: String, default: "CRS"},
	crs_test1:{type: Number, default: 0},
	crs_test2:{type: Number, default: 0},
	crs_test3:{type: Number, default: 0},
	crs_exam: {type: Number, default: 0},
	crs_total: {type: Number, default: 0},
	phe_name: {type: String, default: "Physical Health Education"},
	phe_test1:{type: Number, default: 0},
	phe_test2:{type: Number, default: 0},
	phe_test3:{type: Number, default: 0},
	phe_exam: {type: Number, default: 0},
	phe_total: {type: Number, default: 0},
	business_name: {type: String, default: "Business Studies"},
	business_test1:{type: Number, default: 0},
	business_test2:{type: Number, default: 0},
	business_test3:{type: Number, default: 0},
	business_exam: {type: Number, default: 0},
	business_total: {type: Number, default: 0},
	french_name: {type: String, default: "French"},
	french_test1:{type: Number, default: 0},
	french_test2:{type: Number, default: 0},
	french_test3:{type: Number, default: 0},
	french_exam: {type: Number, default: 0},
	french_total: {type: Number, default: 0},
	computer_name: {type: String, default: "Computer Studies"},
	computer_test1:{type: Number, default: 0},
	computer_test2:{type: Number, default: 0},
	computer_test3:{type: Number, default: 0},
	computer_exam: {type: Number, default: 0},
	computer_total: {type: Number, default: 0},
	home_econs_name: {type: String, default: "Home Economics"},
	home_econs_test1:{type: Number, default: 0},
	home_econs_test2:{type: Number, default: 0},
	home_econs_test3:{type: Number, default: 0},
	home_econs_exam: {type: Number, default: 0},
	home_econs_total: {type: Number, default: 0},
	music_name: {type: String, default: "Music"},
	music_test1:{type: Number, default: 0},
	music_test2:{type: Number, default: 0},
	musci_test3:{type: Number, default: 0},
	music_exam: {type: Number, default: 0},
	music_total: {type: Number, default: 0},
	basic_tech_name: {type: String, default: "Basic Technology"},
	basic_tech_test1:{type: Number, default: 0},
	basic_tech_test2:{type: Number, default: 0},
	basic_tech_test3:{type: Number, default: 0},
	basic_tech_exam: {type: Number, default: 0},
	basic_tech_total: {type: Number, default: 0},
	irk_name: {type: String, default: "IRK"},
	irk_test1:{type: Number, default: 0},
	irk_test2:{type: Number, default: 0},
	irk_test3:{type: Number, default: 0},
	irk_exam: {type: Number, default: 0},
	irk_total: {type: Number, default: 0},
	writing_name: {type: String, default: "writing"},
	writing_test1:{type: Number, default: 0},
	writing_test2:{type: Number, default: 0},
	writing_test3:{type: Number, default: 0},
	writing_exam: {type: Number, default: 0},
	writing_total: {type: Number, default: 0},
	phonics_name: {type: String, default: "Phonics"},
	phonics_test1:{type: Number, default: 0},
	phonics_test2:{type: Number, default: 0},
	phonics_test3:{type: Number, default: 0},
	phonics_exam: {type: Number, default: 0},
	phonics_total: {type: Number, default: 0},
	quantitative_name: {type: String, default: "Quantitative Reasoning"},
	quantitative_test1:{type: Number, default: 0},
	quantitative_test2:{type: Number, default: 0},
	quantitative_test3:{type: Number, default: 0},
	quantitative_exam: {type: Number, default: 0},
	quantitative_total: {type: Number, default: 0},
	verbal_name: {type: String, default: "Verbal Reasoning"},
	verbal_test1:{type: Number, default: 0},
	verbal_test2:{type: Number, default: 0},
	verbal_test3:{type: Number, default: 0},
	verbal_exam: {type: Number, default: 0},
	verbal_total: {type: Number, default: 0},
	teachers_remark: String,
	head_master_remark: String,
	handwritting: {type: Number, default: 3},
	drawing: {type: Number, default: 3},
	games_sport: {type: Number, default: 3},
	reading: {type: Number, default: 3},
	punctuality: {type: Number, default: 3},
	attendance: {type: Number, default: 3},
	hygiene: {type: Number, default: 3},
	attentiveness: {type: Number, default: 3},
	honesty: {type: Number, default: 3},
	neatness: {type: Number, default: 3},
	participation: {type: Number, default: 3},


},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('PupilClass', PupilClass);
