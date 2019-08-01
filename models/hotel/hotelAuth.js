var mongoose = require('mongoose');
var HotelAuthSchema = new mongoose.Schema({
    username: {type:String, required: true},
    password: { type: String, required: true },//TODO--> later change it to required 
   	isBishop: {type: Boolean, default:false },	
	isStaff: {type: Boolean, default: false},
	isPupil: {type: Boolean, default: false},
	token: String,
	suspended: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('HotelAuth', HotelAuthSchema);
