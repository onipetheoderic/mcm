var mongoose = require('mongoose');
var ClassSchema = new mongoose.Schema({
    school_id: String,
    name : { type : String, required: true },	
    desired_color: String,
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Class', ClassSchema);

