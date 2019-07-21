var mongoose = require('mongoose');
var LogoSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
    imagesmall: String,
    imageMedium: String,
    imageBig: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Logo', LogoSchema);

