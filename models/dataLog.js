var mongoose = require('mongoose');
var dataLogSchema = new mongoose.Schema({
    creator_id: {type: String},
    school_id:  String,
    message: String,
	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('DataLog', dataLogSchema);

