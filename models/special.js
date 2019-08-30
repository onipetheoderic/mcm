var mongoose = require('mongoose');
var SpecialSchema = new mongoose.Schema({
    school_id: {type:String, required: true},
    header: { type: String, default: "What makes Us Special" },
	header2: {type:String, default: "There are many Unique featues that makes us very special in Our Great School"},
   	special1: {type:String, default: "50 years of Experience"},
   	special1Description: {type:String, default: "We are the best at training of your kids, we have alot of experience in this area"},
    special2: {type:String, default: "Spacious and serene learning environment"},
   	special2Description: {type:String, default: "the learning environment is very clean serene and beautiful"},
   	special3: {type:String, default: "Excursions beyond the boundaries of Nigeria"},
   	special3Description: {type:String, default: "Our pupils go on Excursions across nigeria and the whole world"},
   	special4: {type:String, default: "Hostel facilities available"},
   	special4Description: {type:String, default: "When it comes ultra-modern hostel facilities, we are the best"}
    	
},{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Special', SpecialSchema);
