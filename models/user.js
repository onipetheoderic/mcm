import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/katifier");
autoIncrement.initialize(connection);


const User = new Schema({
	shop_id: Number,
	shop_number: String,
	shop_name: String,
	address: String,
	first_name: String,
	middle_name: String,
	last_name: String,
	company_name: String,
	email: String,	
	isShop: {type: Boolean, default: false},
	username: String,
	company_logo: String,
	password: String,
	phone: String,	
	premium: {type: Boolean, default:false },	  
});

User.plugin(passportLocalMongoose);
User.plugin(autoIncrement.plugin, { model: 'User', field: 'shop_id' });

export default mongoose.model('user', User);
