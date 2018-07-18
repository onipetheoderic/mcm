var mongoose = require('mongoose');
var settingSchema = new mongoose.Schema({
    user_id: {type: String, default:false },
    isPaidest :  {type: Boolean, default:false },
	isPaid : {type: Boolean, default:false },
    isFree : {type: Boolean, default:true},
    isPremiumTemplate: {type: Boolean, default:false},
    isFreeTemplate: {type:Boolean, default:true},        
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Setting', settingSchema);
//Dynamic Role Based Access Control
//It would be a transactional db