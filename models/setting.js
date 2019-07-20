var mongoose = require('mongoose');
var settingSchema = new mongoose.Schema({
	school_id: String,
    show_carousel_default: {type:Boolean, default: true},
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('setting', settingSchema);

