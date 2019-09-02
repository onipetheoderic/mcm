var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
    head_masters_remark: {type:String, required:true},
    teachers_remark: {type:String, required:true },
    next_term_begins: {type:String, required:true}
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Comment', commentSchema);
