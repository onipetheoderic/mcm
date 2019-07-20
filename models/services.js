var mongoose = require('mongoose');
var ServicesSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
//image should be in the resolutin of 700 by 438
    icon_name: { type: String, required: true },//TODO--> later change it to required 
    title: { type: String, required: true },//TODO--> later change it to required 
    description: { type: String, required: true },//TODO--> later change it to required
    show: {type:Boolean, default: true},

    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Services', ServicesSchema);

