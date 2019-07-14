var mongoose = require('mongoose');
var SchoolFeesSchema = new mongoose.Schema({
    school_id: String,
    pupil_id: String,
    amount_paid: Number,
    pupil_name: String,
    school_name: String,
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('SchoolFees', SchoolFeesSchema);

