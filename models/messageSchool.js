var mongoose = require('mongoose');
var MessageSchoolSchema = new mongoose.Schema({
    sender_name: String,
    sender_location: String,
    sender_email: String,
    reciever_viewed: {type: Boolean, default: false},
    school_id: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('MessageSchool', MessageSchoolSchema);

