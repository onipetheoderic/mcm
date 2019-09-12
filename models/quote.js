var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
    email: String,
    message: String,
    reciever_viewed: {type: Boolean, default: false},
    name: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Quote', QuoteSchema);

