var mongoose = require('mongoose');
var SubjectSchema = new mongoose.Schema({
    school_id: String,
    name : { type : String, required: true },	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Subject', SubjectSchema);

