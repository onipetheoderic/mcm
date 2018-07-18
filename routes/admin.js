import express from 'express';
import passport from 'passport';
import crypto from 'crypto';
import path from 'path';
import fileExtension from 'file-extension';
import fs from 'fs';
import multer from 'multer';

var imageName;
import User from '../models/user';
import Role from '../models/role';
import Product from '../models/product';
import Setting from '../models/setting';
import Carousel from '../models/carousel';
import Category from '../models/category';
const router = express.Router();


router.get('/home', (req, res) => {
    if(!req.user){
        // res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Please Login"}})                
        res.redirect('/admin/login');
    }
    Category.find({creator_id: req.user._id}).exec(function (err, categories) {
        if(err){
            console.log(err)
        }
        var category_count = categories.length;
        console.log("This is the category count",category_count)
      
    Product.find({creator_id: req.user._id}).exec(function (err, products) {
        if(err){
            console.log(err)
        }
        var product_count = products.length;
        console.log("this is the product count",product_count)

    Carousel.find({creator_id: req.user._id}).exec(function (err, carousels){
        if(err) {
            console.log(err)
        }
        var carousel_count = carousels.length;
        console.log("this is the carousel count", carousel_count);
    
    
    res.render('AdminBSBMaterialDesign-master/dashboard', {layout: 'layout/admin.hbs', user: req.user, product_count: product_count, category_count: category_count, carousel_count: carousel_count})
        });
        });
    });
});

router.get('/admin/add', (req, res) => {
    if(!req.user){
        res.redirect('/admin/login');
    }
    Category.find({creator_id: req.user._id}, function(err, category){      
        console.log("this is the categories",category)
        if (err) throw err;  
    res.render('AdminBSBMaterialDesign-master/pages/add_product', {layout: 'layout/admin.hbs', category: category})
});
});

router.get('/admin/add_carousel', (req, res) => {
    if(!req.user){
        res.redirect('/admin/login');
    }
     
    res.render('AdminBSBMaterialDesign-master/pages/add_carousel', {layout: 'layout/admin.hbs'})

});

router.get('/admin/add_category', (req, res) => {
    if(!req.user){
        res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "You have to be Logged In to create a category"}})                
    }
    Category.find({creator_id: req.user._id}, function(err, category){      
        console.log("this is the categories",category)
        if (err) throw err;        
    res.render('AdminBSBMaterialDesign-master/pages/add_category', {layout: 'layout/admin.hbs', category:category})

    });
});

router.get('/page_settings', (req, res) => {
    res.render('');
});
router.get('/login', (req, res) => {
    res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error:"Please Login"}})
  
});
router.get('/register', (req, res) => {
    res.render('AdminBSBMaterialDesign-master/register', {layout: false})
});
/*  let product = new Product();             
    product.category_id = req.category_id    
    product.name =  req.body.name;	
    product.description = req.body.description;	
    product.price = req.body.price;	
    product.stock = req.body.stock;
    product.model = req.body.model;	
    product.color = req.body.color;	   
    product.save(function(err){
       
    if(err){
        console.log(err);
        return;
    } else {                    
        console.log("successfully save, redirecting now..........")
        res.redirect('/get/get_products_by_company_id');//we go back to the home page
    }*/
router.post('/registration', (req, res, next) => {
    User.register(new User({ username: req.body.username,
       user_name: req.body.user_name,
       first_name: req.body.first_name,
       company_name: req.body.company_name,
       company_logo: req.body.company_logo,
       last_name: req.body.last_name,
       phone: req.body.phone,
       email: req.body.email,
       middle_name: req.body.middle_name,
   }), req.body.password, (err, user) => {
            if (err) {
                console.log(err)											 
                res.render('AdminBSBMaterialDesign-master/register', {layout: false, message:{error:err}})
                }
            let role = new Role();
            passport.authenticate('local')(req, res, () => {	               							 
                req.session.save((err) => {
                
                role.user_id = req.user._id
                
                role.save(function(err){
                    console.log("successfully saved")
                if(err){
                    console.log(err);
                    return;
                } else {                    
                    console.log("successfully saved to the role db")
                }
            });

                if (err) {
                    return next(err);
                }                
                res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{success: "successfully registered, now login"}})
                });
            });
            });
   });

router.post('/login', passport.authenticate('local',
        { failureRedirect: 'login',
            failureFlash: true,
            failureMessage: "Invalid username or password" }),
    (req, res, next) => {
        req.session.save((err) => {
        if (err) {                 
            res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Invalid Username or passsword"}})                
        }     
        console.log(req.user);//to get the current session saved
        res.redirect('/admin/home');
        });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{success: "Successfully Sign out"}})                
  });
});


export default router;