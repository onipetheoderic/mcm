import express from 'express';
import passport from 'passport';
import Product from '../models/product';
import Category from '../models/category';
import crypto from 'crypto';
const path = require("path");
var fileExtension = require('file-extension'); 
const router = express.Router();

const fs = require('fs');
var multer = require('multer');

var imageName;


var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, 'Views/public/uploads/')
    },
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length>1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
})
var upload = multer({ storage: storage });
const cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image2', maxCount: 1 }, {name: 'image3', maxCount:1}, { name: 'image4', maxCount: 1 } ]);


router.post('/add', cpUpload, (req, res) =>{
   
    let product = new Product();   
    product.creator_id = req.user._id;          
    product.category_id = req.body.category_id;
    product.name =  req.body.name;	
    product.description = req.body.description;	
    product.price = req.body.price;	
    product.stock = req.body.stock;
    product.model = req.body.model;	
    product.color = req.body.color;	   
    product.produced_by =  req.body.produced_by;	
    const image = req.files['image'][0].filename;
    product.image= image;

    const image2 = req.files['image2'][0].filename;
    product.image2 = image2; 

    const image3 = req.files['image3'][0].filename;
    product.image3 = image3; 
    
    const image4 = req.files['image4'][0].filename;
    product.image4 = image4; 
    product.save(function(err){       
    if(err){
        console.log(err);
        return;
    } else {                    
        console.log("successfully save, redirecting now..........")
        res.redirect('/admin/home');//we go back to the home page
    }
});
});

export default router;