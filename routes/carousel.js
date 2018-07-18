import express from 'express';
import passport from 'passport';
import Carousel from '../models/carousel';
import sharp from 'sharp';
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
    },  
    transform: function (req, file, cb) {
          //Perform desired transformations
          cb(null, sharp(file).resize(700, 438).max())
    }
    
})
var upload = multer({ storage: storage });
const cpUpload = upload.fields([{ name: 'image', maxCount: 1 } ]);
/*
     image: { type: String },//TODO--> later change it to required 
    link: { type: String },//TODO--> later change it to required 
    header: { type: String },//TODO--> later change it to required 
    secondheader: { type: String },//TODO--> later change it to required 
    description: { type: String },//TODO--> later change it to required
    db.users.remove({})
 */
router.post('/add', cpUpload, (req, res) =>{
    if(!req.user){
        // res.redirect('/admin/login');   
    }
    let carousel = new Carousel();             
    carousel.creator_id = req.user._id;
    carousel.link =  req.body.link;	
    carousel.header = req.body.header;	
    carousel.secondheader = req.body.secondheader;	
    carousel.description = req.body.description;
    const image = req.files['image'][0].filename;
    sharp(image).resize(700, 438).max();
    carousel.image= image;
    
    carousel.save(function(err){       
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