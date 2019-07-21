var mongoose = require('mongoose');
var GallerySchema = new mongoose.Schema({
    school_id: {type:String, required: true},
    image: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Gallery', GallerySchema);