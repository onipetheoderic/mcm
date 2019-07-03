var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
    user_id: {type: String, required:true},
    product_id: { type: String },
    product_quantitiy :  { type : Number },
    delivered: {type: Boolean, default:false}	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Order', orderSchema);

