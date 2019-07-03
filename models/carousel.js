var mongoose = require('mongoose');
var carouselSchema = new mongoose.Schema({
    creator_id: {type:String, required: true},
//image should be in the resolutin of 700 by 438
    image: { type: String, required: true },//TODO--> later change it to required 
    link: { type: String, required: true },//TODO--> later change it to required 
    header: { type: String, required: true },//TODO--> later change it to required 
    secondheader: { type: String, required:true },//TODO--> later change it to required 
    description: { type: String, required: true },//TODO--> later change it to required

    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Carousel', carouselSchema);

