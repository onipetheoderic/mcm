import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


const User = new Schema({
	address: String,
	first_name: String,
	middle_name: String,
	last_name: String,
	company_name: String,
	email: String,	
	isAdmin: {type: Boolean, default: false},
	isSuperUser: {type: Boolean, default: false},
	username: String,
	sex: String,
	company_logo: String,
	company_name: String,
	password: String,
	phone: String,	
	isBishop: {type: Boolean, default:false },	
	isStaff: {type: Boolean, default: false},
	isSchool: {type: Boolean, default: false},
	isTeacher: {type: Boolean, default: false},
	isPupil: {type: Boolean, default: false},
	isParent: {type: Boolean, default: false},  
});

User.plugin(passportLocalMongoose);
User.plugin(autoIncrement.plugin, { model: 'User', field: 'user_id' });

export default mongoose.model('user', User);
