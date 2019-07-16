var mongoose = require('mongoose');
var MessageSchema = new mongoose.Schema({
    sender_id: String,
    sender_name: String,
    reciever_id: String,
    reciever_name: String,
    // sender_viewed: {type: Boolean, default: false}
    reciever_viewed: {type: Boolean, default: false},
    school_id: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Message', MessageSchema);

