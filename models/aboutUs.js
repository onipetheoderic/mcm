var mongoose = require('mongoose');
var AboutUsSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
    introductory_text: { type: String, required: true },//TODO--> later change it to required 
    description: { type: String, required: true },//TODO--> later change it to required 
    secondheader: { type: String, required:true },//TODO--> later change it to required 
    show: {type:Boolean, default: false},

    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('AboutUs', AboutUsSchema);

