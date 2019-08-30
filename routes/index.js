import express from 'express';
import passport from 'passport';

import Carousel from '../models/carousel';
import Logo from '../models/logo'
import Special from '../models/special';
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
    let logo;
   // Now lets query the school table to get all the school datas

 School.findOne({name: name}, function(err, school_data){
    console.log(school_data)
    if (school_data==null) {
    // handle error
    res.redirect('/')
  }
  else if(school_data !=null){
    let schoolData = school_data;
    var school_id = school_data._id
    Logo.findOne({school_id: school_id}, function(err, school_logo){
     console.log(school_logo)

    Special.findOne({school_id: school_id}, function(err, school_special){
     console.log(school_special)

    res.render('clientFrontEnds/index', {layout: false, school_special:school_special, school_logo:school_logo, schoolData:schoolData, name: name})
     })
})
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