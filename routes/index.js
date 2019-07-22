import express from 'express';
import passport from 'passport';

import Carousel from '../models/carousel';
import User from '../models/user'
import Category from '../models/category';
import Product from '../models/product';
import Newsletter from '../models/newsletter';
import MessageSchool from '../models/messageSchool';

import School from '../models/school';

const router = express.Router();
// foo${n}bar`
router.get('/:school_name', (req, res) => {
    let name = req.params.school_name;
   // Now lets query the school table to get all the school datas

 School.findOne({name: name}, function(err, school_data){
    console.log(school_data)
    if (school_data==null) {
    // handle error
    res.redirect('/')
  }
  else if(school_data !=null){
    let schoolData = school_data;
    var name = school_data.name;
    var bigSlogan = school_data.bigSlogan;
    let bigImage = school_data.bigImage;
    let mediumImage= school_data.mediumImage
    let small_historic_quote= school_data.small_historic_quote
    let advertisement_text_header= school_data.advertisement_text_header
    let advertisement_text_description= school_data.advertisement_text_description
    let advertisement_text_header1= school_data.advertisement_text_header1
    let advertisement_text_description1= school_data.advertisement_text_description1
    let logo = school_data.logo
    let visionStatement = school_data.visionStatement
    let missionStatement = school_data.missionStatement

    res.render('clientFrontEnds/index', {layout: false, schoolData:schoolData, name: name, missionStatement:missionStatement, visionStatement: visionStatement, advertisement_text_description1: advertisement_text_description1, advertisement_text_header1: advertisement_text_header1, advertisement_text_description: advertisement_text_description, advertisement_text_header: advertisement_text_header, mediumImage:mediumImage, bigImage: bigImage, bigSlogan: bigSlogan, small_historic_quote: small_historic_quote})
    }
});
});
//this is the shop details 5b3dcf81de387222e4110915

router.post('/send_message/:school_id', (req, res, next) => {
let school_id = req.params.school_id;
let school_name = req.body.name;

let messageSchool = new MessageSchool();   
    // messageSchool.sender_name =req.body.sender_name;
    messageSchool.email = req.body.email;    
    messageSchool.school_id = school_id;
    messageSchool.message = req.body.message;

messageSchool.save(function(err, doc){       
                        if(err){
                            console.log("error durring saving",err);
                            return;
                        } else {                    
                            console.log(doc, "successfully save, redirecting now..........")
                            res.redirect('/school/'+school_name)
                      
                        }
                    });
})

router.post('/send_newsletter/:school_id', (req, res, next) => {
let school_id = req.params.school_id;
let school_name = req.body.name;

let newsletter = new Newsletter();   
    newsletter.email = req.body.email;
    newsletter.school_id = school_id;

    newsletter.save(function(err, doc){       
                        if(err){
                            console.log("error durring saving",err);
                            return;
                        } else {                    
                            console.log(doc, "successfully save, redirecting now..........")
                            res.redirect('/school/'+school_name)
                        }
                    });
})

/*debug routes*/
router.get('/get/get_all_messages', (req, res, next) => {
    MessageSchool.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get/get_all_newsletter', (req, res, next) => {
    Newsletter.find({}, function(err, users) {
     console.log(users)
    });

})
export default router;

// 5d1bfff4aaca805f29d10806