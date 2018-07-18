var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({
    creator_id: {type: String}, //TODO: later on change it to required, to track the user that created the category
	name : { type : String, required: true, unique: true, trim: true },
    description :  { type : String },
    keywords :  { type : String, trim: true },//this is for seachability
    image: { type: String },//TODO--> later change it to required 
	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Category', categorySchema);

