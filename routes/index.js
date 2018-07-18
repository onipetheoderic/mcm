import express from 'express';
import passport from 'passport';

import Carousel from '../models/carousel';
import User from '../models/user'
import Category from '../models/category';
import Product from '../models/product';


const router = express.Router();

//
// router.get('/shop/:id', (req, res) => {
//     User.findOne({shop_id: req.params.id}, function(err, shop){
//         if(err || shop===null) {
//             res.render('clientFrontEnds/index2')
//         } //We now filter where creator_id is equal to shop_id in the products
//         console.log("this is the shop details", shop._id);
//         Category.find({creator_id: shop._id}, function(err, category){
//             console.log("this is the categoryListing with the shop_id",category )
       
//         Product.find({creator_id: shop._id}, function(err, product){
//             console.log("this is the product listing for this admin user",product )
        
//             res.render('clientFrontEnds/index', {shop: shop, category: category, product: product});
//         });
//     });
//     })
   
// });
router.post('/checkout/:id/', function(req,res){   
   let cart = req.body.cart;
    // console.log(cart);
    const vcart = JSON.parse(cart)
    // console.log(vcart)
    var orders = [];
    for(let i in vcart){
        console.log(vcart[i].id);
        orders.push(vcart[i].id)
       
    }
    console.log(orders);
    res.send({message: "it was a success"})
    });

router.get('/:id', (req, res) => {
   // console.log("the is the id", req.params.id)
        if(!req.params.id || req.params.id===null) {
            res.redirect('/error');
        }

        User.findOne({shop_id: req.params.id}, function(err, user){
            if(err || user===null){
                res.redirect('/error')
            }
            const shop_id = "shop_id_"+ req.params.id;
            const normal_shop_id = req.params.id;
            console.log(shop_id);
            console.log("this is the user/shop_id: ", user._id);

            Category.find({creator_id: user._id}, function(err, category){       
                console.log("this is the category listings: ", category)           
                       
            Product.find({creator_id: user._id}, function(err, products){
                console.log("this is the product listing for this admin user",products )
            
            Carousel.find({creator_id: user._id}, function(err, carousels){
                console.log("this is the product listing for this admin user",carousels )
                        
            res.render('clientFrontEnds/index', {category: category, normal_shop_id: normal_shop_id, products: products, carousels: carousels, shop_id: shop_id});  
        })
    });       
});       
});       
    
});
//this is the shop details 5b3dcf81de387222e4110915

export default router;

