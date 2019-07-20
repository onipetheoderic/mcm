var mongoose = require('mongoose');
var schoolEventSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
//image should be in the resolutin of 700 by 438
    image: { type: String, required: true },//TODO--> later change it to required 
    time: { type: String, required: true },//TODO--> later change it to required 
    date: { type: String, required: true },//TODO--> later change it to required 
    eventName: { type: String, required:true },//TODO--> later change it to required 
    eventDescription: { type: String, required: true },//TODO--> later change it to required
    show: {type:Boolean, default: true},

    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('schoolEvent', schoolEventSchema);

