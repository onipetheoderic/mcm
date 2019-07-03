import express from 'express';
import passport from 'passport';

import Carousel from '../models/carousel';
import User from '../models/user'
import Category from '../models/category';
import Product from '../models/product';

const router = express.Router();

router.post('/checkout/:id/', function(req,res){   
    if(!req.user){     
      //  res.send({success: "this is the good one"})   
        res.send({error: "Unable to CheckOut, Please Login"})
    }
    else if(req.user){
        let cart = req.body.cart;   
       // console.log(cart)
        const vcart = JSON.parse(cart);   
      //  res.send({success: "You are logged In"});

        var orders = [];
        User.findOne({shop_id: req.params.id}, function(err, user){       
        const user_id = user._id;         
        Product.find({creator_id: user_id}, function(err, products){           
        for(var i in vcart){
            for(var p in products){
                if(vcart[i].id.trim() == products[p].id.trim()){
                    console.log("it is the same");
                    var stock_remain = parseInt(products[p].stock - vcart[i].quantity)
                    // if(stock_remain > 0)
                    // {
                    //     res.send({success: "true"})
                    // }
                    orders.push({id: vcart[i].id.trim(), remain: stock_remain, name: vcart[i].name})
                    // orders.push(vcart[i].id.trim() + ":"+ stock_remain);                  
                }
            }
        }
        console.log(orders);
        res.send({success: orders})
        });
    });            
    }    
});

router.get('/:id', (req, res) => {
    
});
//this is the shop details 5b3dcf81de387222e4110915

export default router;

