var mongoose = require('mongoose');
var LogoSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
 	image: String,
    alternate_text: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Logo', LogoSchema);



