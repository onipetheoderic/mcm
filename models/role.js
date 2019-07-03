var mongoose = require('mongoose');
var roleSchema = new mongoose.Schema({
    role_name: {type: String, default: "User_Role" },
    user_id: {type: String},
    shop_id:{type: String},
    premium: {type: Boolean, default: false},
    user_name: {type: String, default:false },
	create_user_ability : {type: Boolean, default:false },
    delete_user_ability : {type: Boolean, default:false },
    view_user_ability :  {type: Boolean, default:false },
    disable_user_ability: {type: Boolean, default:false },  
    create_product_ability: {type: Boolean, default:false },
    view_product_ability: {type: Boolean, default:true },
    update_product_ability: {type: Boolean, default:false },
    delete_product_ability: {type: Boolean, default:false },
    mark_product_as_delivered: {type: Boolean, default:false },
    assign_role_ability: {type: Boolean, default:false },
    shipping_fee_set_ability: {type: Boolean, default:false },
    tax_fee_set_ability: {type: Boolean, default:false },
    create_role_ability: {type: Boolean, default:false },
    upgrade_staff_role_ability: {type: Boolean, default:false },
    register_user_ability: {type: Boolean, default:false },
},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

module.exports = mongoose.model('Role', roleSchema);
//Dynamic Role Based Access Control
//It would be a transactional db