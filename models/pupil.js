import mongoose from 'mongoose';
var Pupil = new mongoose.Schema({
	passport_name: String,
	parent_id: String,
	school_id: String,	
	first_name: String,
	middle_name: String,
	last_name: String,
	sex: String,	
	class_name: String,
	class_id: String,
	school_fees_paid: String,	
	suspended: {type: Boolean, default: false},
	expelled: {type: Boolean, default: false},
	generated_result_key: String,
	generated_password_key: String,
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


module.exports = mongoose.model('Pupil', Pupil);
