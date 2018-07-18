var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    creator_id: {type: String},
    name : { type : String, required: true },
    category_id: {type: String, required:true},
    type : { type : String },
    description :  { type : String },
    image: { type: String },//TODO--> later change it to required
	price :  { type : Number },
    stock: { type: Number, required: true},
    model: { type: String },
    color: { type: String },
    produced_by: { type: String},
    rating :  { type : Number },
    image2: {type: String},
    image3: {type: String},
    image4: {type: String},
	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Product', productSchema);

