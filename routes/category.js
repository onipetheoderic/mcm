import express from 'express';
import passport from 'passport';
import Category from '../models/category';
import crypto from 'crypto';
const path = require("path");
var fileExtension = require('file-extension'); 
const router = express.Router();

const fs = require('fs');
var multer = require('multer');

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
const cpUpload = upload.fields([{ name: 'image', maxCount: 1 } ]);

router.post('/add', cpUpload, (req, res) =>{
    if(!req.user){
        // res.redirect('/admin/login');   
    }
    let category = new Category();             
    category.creator_id = req.user._id;
    category.name =  req.body.name;	
    category.description = req.body.description;	
    category.keyword = req.body.keyword;	
    const image = req.files['image'][0].filename;
    category.image= image;

    category.save(function(err){
       
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