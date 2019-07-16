var mongoose = require('mongoose');
var NewsletterSchema = new mongoose.Schema({
    email: String,
    reciever_viewed: {type: Boolean, default: false},
    school_id: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);

