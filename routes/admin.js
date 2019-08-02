import express from 'express';
import passport from 'passport';
import crypto from 'crypto';
const path = require("path");
var fileExtension = require('file-extension'); 
import AboutUs from '../models/aboutUs';
import PupilContent from '../models/pupilContent';
import Auth from '../models/auth';
import Logo from '../models/logo'
import BSkill from '../models/bSkill'
import PupilBasic from '../models/pupilBasic'
import PupilBehaviour from '../models/pupilBehaviour'
import CommentType from '../models/commentType'
import Behaviour from '../models/behaviour'
import ReportSheet from '../models/reportSheet'
import Service from '../models/service'
import DataLog from '../models/dataLog'
import User from '../models/user';
import Parent from '../models/parent';
import PupilClass from '../models/pupilClass';
import Pupil from '../models/pupil';
import Carousel from '../models/carousel'
import Role from '../models/role';
import ReportCard from '../models/reportCard';
import JssClass from '../models/jssClass';
import ReportSubject from '../models/reportSubject';
import Product from '../models/product';
import Setting from '../models/setting';
import School from '../models/school';
import Stafftype from '../models/staffType';
import Newsletter from '../models/newsletter';
import MessageSchool from '../models/messageSchool';
import Message from '../models/message';
import Staff from '../models/staff';
import Subject from '../models/subject';
import Category from '../models/category';
import Class from '../models/class';

import sha512 from 'sha512';

const state = require('../models/state.json');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const router = express.Router();

function encrypt(text) {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}


router.get('/home', (req, res) => {
    if(!req.user){
        // res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Please Login"}})                
        res.redirect('/admin/login');
    }

    Subject.find({school_id: req.user._id}).exec(function (err, subjects){
        if(err) {
            console.log(err)
        }
        var subject_count = subjects.length;
        console.log("this is the subject count", subject_count);

    MessageSchool.find({school_id: req.user._id}).exec(function (err, message){
        if(err) {
            console.log(err)
        }
        var message_count = message.length;
        console.log("this is the message count", message_count);
    MessageSchool.find({}).exec(function(err, all_msgs){
        if(err){
            console.log(err)
        }
        var all_msg_count = all_msgs.length;
  

    Newsletter.find({school_id: req.user._id}).exec(function (err, newsletter){
        if(err) {
            console.log(err)
        }
        var newsletter_count = newsletter.length;
        console.log("this is the message count", newsletter_count);

    
    Parent.find({school_id: req.user._id}).exec(function (err, parents){
        if(err) {
            console.log(err)
        }
        var parent_count = parents.length;
        console.log("this is the parent count", parent_count);

    Pupil.find({school_id: req.user._id}).exec(function (err, pupils){

        if(err) {
            console.log(err)
        }
        var pupil_count = pupils.length;
        console.log("this is the pupil count", pupil_count);


    Stafftype.find({school_id: req.user._id}).exec(function (err, staffType){
        if(err) {
            console.log(err)
        }
        var stafftype_count = staffType.length;
        console.log("this is the staffType count", stafftype_count);

    Staff.find({user_id: req.user._id}).exec(function (err, staff_zone){
         if(err) {
            console.log(err)
        }
        var staff_zone_count = staff_zone.length;
        console.log("this is the staff_zone length", staff_zone_count)
    
    Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
        var staff_pupilss_count;
        var staff_image_name;
        var pupilss_count;
        var subs_count;
        var class_counters;
        var parent_counters;
        var report_subjecter;
        var report_counter;
        var people_counter;
        User.findOne({_id: req.user._id}, function(err, user){
            if(user.isStaff === true){
                console.log("staff_pupils", staff_pupils.school_id)
        //to get a the staff from the staff table using its user_id
        let staff_pupils_school_id = staff_pupils.school_id
        staff_image_name = staff_pupils.passport_name;

        Staff.find({school_id: staff_pupils_school_id}).exec(function (err, staff_pupilss){
            if(err) {
                console.log(err)
            }
        staff_pupilss_count = staff_pupilss.length;            
        })

        Pupil.find({class_id: staff_pupils.class_id}).exec(function (err, pupilss){
            if(err) {
                console.log(err)
            }
        pupilss_count = pupilss.length;            
        })
        Subject.find({school_id: staff_pupils_school_id}).exec(function (err, subs){
            if(err) {
                console.log(err)
            }
        subs_count = subs.length;            
        })
        PupilClass.find({staff_id: req.user._id}).exec(function (err, pupil_class_count){
            if(err) {
                console.log(err)
            }
            people_counter = pupil_class_count.length;
        });
        Class.find({school_id: staff_pupils_school_id}).exec(function (err, class_counter){
            if(err) {
                console.log(err)
            }
        class_counters = class_counter.length; 
        console.log("this is from the class ocunter", class_counters) 
        })
        ReportCard.find({school_id: staff_pupils_school_id}).exec(function (err, report_count){
            if(err) {
                console.log(err)
            }
        report_counter = report_count.length; 
        console.log("this is from the class ocunter", report_count) 
        })
        ReportSubject.find({teacher_id: req.user._id}).exec(function (err, report_subject){
            if(err) {
                console.log(err)
            }
        report_subjecter = report_subject.length; 
        console.log("this is from the class ocunter", report_subjecter) 
        })
        Parent.find({school_id: staff_pupils_school_id}).exec(function (err, parent_counter){
            if(err) {
                console.log(err)
            }
        parent_counters = parent_counter.length; 
        console.log("this is from the class ocunter", parent_counters) 
        })


            }

     
         if(err) {
            console.log(err)
        }
    

// From the pupils side
Pupil.findOne({user_id: req.user._id}, function(err, pupilss){
        var p_staff_pupilss_count;
        var p_pupilss_count;
        var p_subs_count;
        var p_class_counters;
        var p_parent_counters;
        var pupilz;


         // Pupil.find({class_id: pupilz}).exec(function (err, all_pupils_in_class){
         //        let all_pupils_in_class_count =  all_pupils_in_class.length;
                   
   

        User.findOne({_id: req.user._id}, function(err, user){
            if(user.isPupil === true){
                console.log("pupils", pupilss.school_id)
        //to get a the staff from the staff table using its user_id
        let staff_pupils_school_id = pupilss.school_id

        Staff.find({school_id: staff_pupils_school_id}).exec(function (err, staff_pupilss){
            if(err) {
                console.log(err)
            }
        p_staff_pupilss_count = staff_pupilss.length;            
        })

        Pupil.find({school_id: staff_pupils_school_id}).exec(function (err, pupilss){
            if(err) {
                console.log(err)
            }
        p_pupilss_count = pupilss.length;            
        })


        Subject.find({school_id: staff_pupils_school_id}).exec(function (err, subs){
            if(err) {
                console.log(err)
            }
        p_subs_count = subs.length;            
        })
        Class.find({school_id: staff_pupils_school_id}).exec(function (err, class_counter){
            if(err) {
                console.log(err)
            }
        p_class_counters = class_counter.length; 
        console.log("this is from the class ocunter", class_counters) 
        })
        Parent.find({school_id: staff_pupils_school_id}).exec(function (err, parent_counter){
            if(err) {
                console.log(err)
            }
        p_parent_counters = parent_counter.length; 
        console.log("this is from the class ocunter", parent_counters) 
        })


            }

     
         if(err) {
            console.log(err)
        }
        


    Staff.find({school_id: req.user._id}).exec(function (err, staff){

        if(err) {
            console.log(err)
        }
        var staff_count = staff.length;
        console.log("this is the staff_skool count", staff_count);

    Subject.find({school_id: req.user._id}).exec(function (err, subject){
        if(err) {
            console.log(err)
        }
        var subject_count = subject.length;
        console.log("this is the carousel count", subject_count);

    School.find({}).exec(function (err, skool){
        if(err) {
            console.log(err)
        }
        var skool_count = skool.length;
        console.log("this is the carousel count", skool_count);

    Class.find({school_id: req.user._id}).exec(function (err, my_class){
        if(err) {
            console.log(err)
        }
        var class_count = my_class.length;
        console.log("this is the carousel count", class_count);

    School.findOne({schoolID: req.user._id}, function(err, schoolx){    
    
    res.render('AdminBSBMaterialDesign-master/dashboard', {layout: 'layout/admin.hbs', my_id: req.user._id, all_msg_count: all_msg_count, newsletter_count:newsletter_count, message_count:message_count, staff_pupils:staff_pupils, schoolx:schoolx,user: req.user, staff_image_name:staff_image_name, stafftype_count: stafftype_count, subject_count: subject_count, staff_count: staff_count, class_count: class_count, subject_count: subject_count, parent_count: parent_count, pupil_count: pupil_count, skool_count: skool_count, staff_zone_count: staff_zone_count, staff_pupilss_count: staff_pupilss_count, p_staff_pupilss_count: p_staff_pupilss_count, pupilss:pupilss, pupilss_count:pupilss_count, p_pupilss_count: p_pupilss_count,  class_counters: class_counters, subs_count: subs_count, p_subs_count: p_subs_count, parent_counters: parent_counters, report_counter:report_counter, report_subjecter: report_subjecter, people_counter: people_counter})
        });
        });
    });
    });
    });
});
});
    });
});
});
 });
});
});
});
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
    User.find({}).exec(function (err, user_all){
        if(err) {
            console.log(err)
        }
        var user_all_count = user_all.length;
        var all_users_count;
        if(user_all_count>=2){   
            all_users_count = false           
        }
        else{   
            all_users_count = true          
        }
        console.log("this is the list of users counts", all_users_count )
    res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error:"Please Login"}, all_users_count: all_users_count })
  
    });
});

router.get('/all_pupils_login_details/:id', (req, res) => {
    let class_id = req.params.id
    if(req.session.pupil_id || req.user){  
        Pupil.find({class_id: class_id}).exec(function (err, pupils){

        if(err) {
            console.log(err)
        }
        else {
           res.render('result/all_pupils_details', {layout: false, pupils:pupils})     
        }
       })
    }
    else{
        redirector(req, res)
    }

})

router.get('/all_pupils_login_details_class', (req, res) => {
    redirector(req, res)
    Class.find({school_id: req.user._id}, function(err, all_class){      
        console.log("this is the categories",all_class)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
    res.render('AdminBSBMaterialDesign-master/all_pupils_details', {layout: 'layout/admin.hbs', user: req.user, all_class:all_class})
    })

})

router.get('/register', (req, res) => {
    User.find({}).exec(function (err, skool){
        if(skool.length>=2){
            res.redirect('/admin/login')
        }        
    res.render('AdminBSBMaterialDesign-master/register', {layout: false})
});
});

router.get('/pupils_login', (req, res) => {    
    res.render('AdminBSBMaterialDesign-master/pupils_login', {layout: false, message:{error:"Pupils Login here"} })
});

router.get('/staffs_login', (req, res) => {    
    res.render('AdminBSBMaterialDesign-master/staffs_login', {layout: false, message:{error:"Staffs Login here"} })
});
/*"generated_result_key" : "PreciousGibah9997",
    "generated_password_key" : "9997",
*/

router.get('/pupil_dashboard', (req, res) => {     
    //lets find the school by its id
    // let pupil_id = decrypt(req.session.pupil_id)
    Pupil.findOne({_id: decrypt(req.session.pupil_id)}, function(err, pupil){
        let school_fees_status = pupil.school_fees_paid.toLowerCase()
        let paid;
        if(school_fees_status !="paid"){
            paid = false;
        }
        else {
            paid = true;
        }
        res.render('AdminBSBMaterialDesign-master/pupil_dashboard', {layout: 'layout/admin.hbs', paid:paid, school_fees_status:school_fees_status, pupil:pupil})
    })
});
router.get('/staffs_dashboard', (req, res) => {     
    let myCollegues;
    let myreportSheets;
    let mypupils;
    let myself_class;
    let staff_details;
    Auth.findOne({_id: decrypt(req.session.pupil_id)}, function(err, user){
        Staff.findOne({user_id: user._id}, function(err, myself){
           staff_details = myself
      
        Pupil.find({class_id: staff_details.class_id}, function(err, all_pupils){
            mypupils = all_pupils.length;   
      
        console.log("teachers pupils",mypupils, staff_details)
        res.render('AdminBSBMaterialDesign-master/staffs_dashboard', {layout: 'layout/admin.hbs', staff_details:staff_details, mypupils:mypupils, staff_details:staff_details})
    })
});
})
})

router.post('/pupils_login', (req, res) => {
   
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password)
    Pupil.findOne({generated_result_key: username}).then(function(user) {
       if(user){
            console.log(user)
            console.log("User with the gen result keuy is")
            let pupil_id = user.id
            if (user.generated_password_key == password){
                  console.log('User connected');
                  // let encUsername = encrypt(username)
                  // let encPassword = encrypt(password)
                  // console.log(encUsername, encPassword)
                  let encId = encrypt(pupil_id)
                  
                  // req.session.username = username;
                  // req.session.password = password;
                  req.session.pupil_id = encId;
                  console.log(req.session);
                  console.log("from the fucking session", decrypt(req.session.pupil_id))
                  // console.log(decrypt(encPassword))
                  // console.log(decrypt(encUsername))
                  // res.status(200).send('User Authentified');
                  res.redirect('/admin/pupil_dashboard')
            }else{
                  // res.status(401).send('Invalid Password Key');
                  res.render('AdminBSBMaterialDesign-master/register', {layout: false, message:{error: "invalid generated_result_key and password"}})
            }
        }

    })

})


router.post('/staffs_login', (req, res) => {
   
    let username = req.body.username;
    let password = req.body.password;
    let passwordhash = sha512(req.body.password)
    console.log(username, password)
    Auth.findOne({username: username}).then(function(user) {
        if(!user) {
            res.render('AdminBSBMaterialDesign-master/staffs_login', {layout: false, message:{error: "Username does not Exist"}})  
        }
       else if(user){
            console.log(user)
           
            let pupil_id = user.id
            if (user.password == passwordhash){
                  console.log('User connected');
                  // let encUsername = encrypt(username)
                  // let encPassword = encrypt(password)
                  // console.log(encUsername, encPassword)
                  let encId = encrypt(pupil_id)
                  
                  // req.session.username = username;
                  // req.session.password = password;
                  req.session.pupil_id = encId;
                  console.log(req.session);
                  console.log("from the fucking session", decrypt(req.session.pupil_id))
                  // console.log(decrypt(encPassword))
                  // console.log(decrypt(encUsername))
                  // res.status(200).send('User Authentified');
                  res.redirect('/admin/staffs_dashboard')
            }else{
                  // res.status(401).send('Invalid Password Key');
                  res.render('AdminBSBMaterialDesign-master/staffs_login', {layout: false, message:{error: "invalid password"}})
            }
        }
          

    })

})
/*Auth.findOne({username: req.body.username}, function(err, vals){
        if (vals==null) {
            // 
            console.log("username not taken")
            var passwordhash = sha512(req.body.password)*/



router.get('/edit_school/:id', (req, res) => {  
    redirector(req, res)  
    let school_id = req.params.id;
    //lets find the school by its id
    School.findOne({_id:school_id}, function(err, school){
    let singleSchool = school
    res.render('AdminBSBMaterialDesign-master/school_form', {layout: 'layout/admin.hbs', singleSchool:singleSchool})
    })
});

router.get('/edit_school_school/:id', (req, res) => {  
    redirector(req, res)  
    let user_id = req.params.id;
    //lets find the school by its id
    School.findOne({schoolID: user_id}, function(err, school){
        let singleSchool = school
        res.render('AdminBSBMaterialDesign-master/school_form', {layout: 'layout/admin.hbs', singleSchool:singleSchool})
    })
});

router.get('/carousels/:id', (req, res) => {
    redirector(req, res)  
    let user_id = req.params.id;
    // let carouselImage = req.files.carousel;
    // let carouselImage_name = imagePlacerAndNamer(req, res, carouselImage);

    
    School.findOne({schoolID: user_id}, function(err, school){
        let singleSchool_id = school._id;
        Carousel.find({school_id:singleSchool_id}, function(err, carousels){

        res.render('AdminBSBMaterialDesign-master/carousel_form', {layout: 'layout/admin.hbs', carousels:carousels, singleSchool_id:singleSchool_id})
        })
    })

})

router.get('/services/:id', (req, res) => {
    redirector(req, res)  
    let user_id = req.params.id;
    // let carouselImage = req.files.carousel;
    // let carouselImage_name = imagePlacerAndNamer(req, res, carouselImage);

    
    School.findOne({schoolID: user_id}, function(err, school){
        let singleSchool_id = school._id;
        Service.find({school_id:singleSchool_id}, function(err, services){

        res.render('AdminBSBMaterialDesign-master/services_form', {layout: 'layout/admin.hbs', services:services, singleSchool_id:singleSchool_id})
        })
    })

})
/*school_id: {type:String, required: true},
//image should be in the resolutin of 700 by 438
    icon_name: { type: String, required: true },//TODO--> later change it to required 
    title: { type: String, required: true },//TODO--> later change it to required 
    description: { type: String, required: true },//TODO--> later change it to required
    show: {type:Boolean, default: true},*/
router.post('/create_service', (req, res, next) => {
       let service = new Service(); 
    service.icon_name = req.body.icon_name;
    // carousel.link = req.body.link;
    service.title = req.body.title;
    service.description = req.body.description;
    service.school_id = req.body.school_id;

    service.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});


// router.get('/create_event')
router.get('/create_edit_logo/:id', (req, res) => {  
    redirector(req, res)  
    let user_id = req.params.id;
    //lets find the school by its id

    School.findOne({schoolID: user_id}, function(err, school){
        let singleSchool = school
        let school_id = school._id;

    Logo.find({school_id: school_id}, function(err, abouts){
        let about_length = abouts.length;
        if(about_length>0){
            Logo.findOne({school_id: school_id}, function(err, logo){
                res.render('AdminBSBMaterialDesign-master/create_edit_logo', {layout: 'layout/admin.hbs', logo:logo, school_id:school_id})        
            })
        }
        else{
            res.render('AdminBSBMaterialDesign-master/create_logo', {layout: 'layout/admin.hbs', school_id:school_id})        
        }
        
    })
    });
})

router.post('/create_logo', (req, res, next) => {
   redirector(req, res)

    let logo = new Logo(); 

    let my_passport = req.files.passport;
    
    let passport_name = imagePlacerAndNamer(req, res, my_passport);

    logo.image = passport_name;
    logo.school_id = req.body.school_id;

    logo.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});

router.post('/create_edit_logo/:logo_id', (req, res, next) => {
    redirector(req, res)
    let my_passport = req.files.passport;
    let school_id = req.body.school_id;
    let passport_name = imagePlacerAndNamer(req, res, my_passport);
    Logo.findByIdAndUpdate(req.params.logo_id,
        {
            "image": passport_name,
            "alternate_text": req.body.alternate_text            
        }).exec(function(err, updated_logo){
    if(err) {
       console.log(err);
       
    } else {
       console.log(updated_logo) 
        res.redirect(`/admin/create_edit_logo/${req.user._id}`)
    }
    });

});



router.get('/create_edit_about_us/:id', (req, res) => {  
    redirector(req, res)  
    let user_id = req.params.id;
    //lets find the school by its id
    School.findOne({schoolID: user_id}, function(err, school){
        let singleSchool = school
        let school_id = school._id;

    AboutUs.find({school_id: school_id}, function(err, abouts){
        let about_length = abouts.length;
        if(about_length>0){
            AboutUs.findOne({school_id: school_id}, function(err, about){
                res.render('AdminBSBMaterialDesign-master/create_edit_about_us', {layout: 'layout/admin.hbs', about:about, school_id:school_id})        
            })
        }
        else{
            res.render('AdminBSBMaterialDesign-master/create_about_us', {layout: 'layout/admin.hbs', school_id:school_id})        
        }
        
    })
    });
})
/*    school_id: {type:String, required: true},
    introductory_text: { type: String, required: true },//TODO--> later change it to required 
    description: { type: String, required: true },//TODO--> later change it to required 
    secondheader: { type: String, required:true },//TODO--> later change it to required 
    show: {type:Boolean, default: false},*/



router.post('/create_about_us', (req, res, next) => {
   

    let aboutus = new AboutUs(); 
   
    aboutus.introductory_text = req.body.introductory_text;
    aboutus.description = req.body.description;
    aboutus.secondheader = req.body.secondheader;
    aboutus.school_id = req.body.school_id;

    aboutus.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});

/*PupilClass.findByIdAndUpdate(result_id,
    { */

router.post('/create_edit_about_us/:about_id', (req, res, next) => {

    AboutUs.findByIdAndUpdate(req.params.about_id,
        {
            "introductory_text": req.body.introductory_text,
            "description": req.body.description,
            "secondheader": req.body.secondheader
        }).exec(function(err, updated_about){
    if(err) {
       console.log(err);
       
    } else {
       console.log(updated_about) 
        res.redirect("/admin/home")
    }
    });

});




router.post('/create_carousel', (req, res, next) => {
    let carouselImage = req.files.carousel;
    let carouselImage_name = imagePlacerAndNamer(req, res, carouselImage);

    let carousel = new Carousel(); 
    carousel.image = carouselImage_name;
    // carousel.link = req.body.link;
    carousel.header = req.body.header;
    carousel.secondheader = req.body.secondheader;
    carousel.description = req.body.description;
    carousel.school_id = req.body.school_id;

    carousel.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});

router.get('/edit_pupil/:id', (req, res) => {  
    redirector(req, res); 
    let myClassess;
    let pupil_id = req.params.id;
    //lets find the school by its id
    Pupil.findOne({_id:pupil_id}, function(err, pupil){
    let singlePupil = pupil
    Class.find({school_id:req.user._id}, function(err, all_class){
        console.log("all you class", all_class)
        res.render('AdminBSBMaterialDesign-master/edit_pupil_page', {layout: 'layout/admin.hbs', all_class:all_class, state:state, singlePupil: singlePupil})
    })
});
});


router.get('/edit_staff/:id', (req, res) => {  
    redirector(req, res) 
    let myClassess; 
    let pupil_id = req.params.id;
    //lets find the school by its id
    Staff.findOne({_id: pupil_id}, function(err, pupil){
    let singlePupil = pupil
    Class.find({school_id: req.user._id}, function(err, myClass){ 
                myClassess = myClass;
    res.render('AdminBSBMaterialDesign-master/edit_staff_page', {layout: 'layout/admin.hbs', myClassess:myClassess, singlePupil:singlePupil})
    })
});
});



router.get('/edit_parent/:id', (req, res) => {  
    redirector(req, res)  
    let parent_id = req.params.id;
    //lets find the school by its id
    Parent.findOne({_id:parent_id}, function(err, school){
    let singleSchool = school
    res.render('AdminBSBMaterialDesign-master/edit_parent_page', {layout: 'layout/admin.hbs', singleSchool:singleSchool})
    })
});

router.get('/create_school', (req, res) => {   
redirector(req, res) 
    res.render('AdminBSBMaterialDesign-master/create_school', {layout: 'layout/admin.hbs', user: req.user})
});

router.get('/all_my_class_pupils', (req, res) => {
    redirector(req, res);
    Pupil.findOne({user_id: req.user._id}, function(err, pupil){
        let pupil_class_id = pupil.class_id
    Pupil.find({class_id: pupil_class_id}, function(err, all_pupils_in_class){ 
                all_pupils_in_class =  all_pupils_in_class;
                    res.render('AdminBSBMaterialDesign-master/all_my_class_pupils', {layout: 'layout/admin.hbs', all_pupils_in_class: all_pupils_in_class})
    });
    })
})

// router.get('/teacher_pupils', (req, res) => {  
//     // to get the school id using the staff_id
//     redirector(req, res);
//     Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
//         var staff_id = req.user._id;
//         var staff_class_id = staff_pupils.class_id
//         var staff_pupilss_count;
//         var myClassess;
//         User.findOne({_id: req.user._id}, function(err, user){
//             if(user.isStaff === true){
//                 console.log("staff_pupils", staff_pupils.school_id)
//                 //to get a the staff from the staff table using its user_id
//                 let staff_pupils_school_id = staff_pupils.school_id    
//             Class.find({school_id: staff_pupils_school_id}, function(err, myClass){ 
//                 myClassess = myClass;
              
         
//             Pupil.find({class_id: staff_class_id}, function(err, pupils){ 
//                 res.render('AdminBSBMaterialDesign-master/teacher_pupils', {layout: 'layout/admin.hbs', staff_id: staff_id, staff_pupils_school_id: staff_pupils_school_id, myClass:myClass, pupils:pupils, myClassess: myClassess})
//             })
//                })
//             }
//         });
//     });
// });

router.get('/teacher_pupils', (req, res) => {  
    // to get the school id using the staff_id
    
    if(req.session.pupil_id || req.user){   
    var user_id = req.user ? req.user._id : decrypt(req.session.pupil_id); 
        Staff.findOne({user_id: user_id}, function(err, staff){
            let staff_class_id = staff.class_id
            let staff_class_name = staff.class_name

        Pupil.find({class_id: staff_class_id}, function(err, all_pupils){
             res.render('AdminBSBMaterialDesign-master/teacher_pupils', {layout: 'layout/admin.hbs', staff_class_id: staff_class_id, staff_class_name:staff_class_name, all_pupils:all_pupils})
        })
        })
        // console.log("teacher_ user_ id",user_id)
    }
    else {
        redirector(req, res);
    }
})

router.get('/teacher_pupils_result', (req, res) => {  
    // to get the school id using the staff_id
    if(req.session.pupil_id || req.user){  
         var user_id = req.user ? req.user._id : decrypt(req.session.pupil_id);  
        Staff.findOne({user_id: user_id}, function(err, staff){
            let staff_class_id = staff.class_id
            let staff_class_name = staff.class_name
    // ReportCard.find({staff_id: staff_id}, function(err, reports){
            ReportSheet.find({staff_id: user_id}, function(err, all_pupils){
                 res.render('AdminBSBMaterialDesign-master/teacher_pupils_results', {layout: 'layout/admin.hbs', staff_class_id: staff_class_id, staff_class_name:staff_class_name, all_pupils:all_pupils})
            })
        })
    }
    else {
        redirector(req, res)
    }
})

router.get('/single_report_sheet/:id', (req, res) => {
    let reportsheet_id = req.params.id;
    //lets now query the reportCard collections using reportsheet_ID
    // let singleData;
    // report sheet variables
    let schoolName;//found
    let pupils_name;//found
    let year_session;
    let grading_period;
    let class_teacher_name;//found
    let current_class;//found
    let school_logo;
    let alternate_text;
    

    ReportCard.findOne({reportsheet_id: reportsheet_id}, function(err, report){
      let singleData = report;
         // console.log("this is the single data",singleData)
    //     // Now lets get the pupils full name
         pupils_name = singleData.full_name
         console.log("this is the pupils name:", pupils_name)
        //now we get the staff id which would be usefull for us later on
        let staff_id = singleData.staff_id;
        current_class = singleData.class_name;
        // Now lets get the staff_name
        // console.log("this is the current class", current_class)

        Staff.findOne({user_id: staff_id}, function(err, staffData){
            class_teacher_name = staffData.first_name + " " + staffData.middle_name + " " + staffData.last_name
            // console.log("this is the classTeachers name", class_teacher_name)
        })     
    /*Now lets get the school name*/
        School.findOne({schoolID:singleData.school_id}, function(err, schoolData){
            schoolName = schoolData.name + " " + schoolData.schoolType
            // console.log(schoolData.name, schoolData.schoolType)
            // console.log("this is the school ", schoolName)
       
        Logo.findOne({school_id: schoolData._id}, function(err, logo){
            school_logo = logo.image
            alternate_text = logo.alternate_text
            // console.log("this is the school logo ₦₦₦₦₦₦₦₦₦₦₦₦",school_logo, alternate_text);
 
    ReportSheet.findOne({_id:reportsheet_id}, function(err, single_report){
        let term_name = single_report.term_name
        // console.log(single_report)
    
    PupilBehaviour.find({reportsheet_id: reportsheet_id}, function(err, behaviour){
       let all_behaviour = behaviour;
        // console.log(all_behaviour)
   
    PupilBasic.find({reportsheet_id: reportsheet_id}, function(err, bskill){
       let all_bskill = bskill;
        // console.log(all_bskill)
    
    PupilContent.find({reportsheet_id: reportsheet_id}, function(err, comment){
       let all_comment = comment;
         console.log("these Are all the comment###₦₦₦₦₦", all_comment)
   
    ReportCard.find({reportsheet_id: reportsheet_id}, function(err, reports){
        let all_reports = reports
        // console.log("these are all the reports",all_reports)

        console.log("this is the shcool name", schoolName)
        res.render('result/index', {layout: false, all_comment:all_comment, alternate_text:alternate_text, school_logo:school_logo, current_class:current_class, class_teacher_name:class_teacher_name, pupils_name:pupils_name, term_name: term_name, all_behaviour:all_behaviour, all_bskill:all_bskill, all_reports:all_reports, schoolName: schoolName})     
  // console.log("route reached")
})
    })
})
     })
    })
     })
    
       })
         })
    });

router.get('/all_school_messages', (req, res) => {
    MessageSchool.find({school_id: req.user._id}, function(err, schoolmsgs){
        let school_msgs = schoolmsgs;
        res.render('AdminBSBMaterialDesign-master/all_school_messages', {layout: 'layout/admin.hbs', school_msgs: school_msgs})
    })
})

// all_school_msgs
router.get('/all_school_msgs', (req, res) => {
    MessageSchool.find({}, function(err, schoolmsgs){
        let school_msgs = schoolmsgs;
        res.render('AdminBSBMaterialDesign-master/all_school_msgs', {layout: 'layout/admin.hbs', school_msgs: school_msgs})
    })
})
router.get('/all_school_newsletters', (req, res) => {
    Newsletter.find({school_id: req.user._id}, function(err, newsletter){
        let newsletters = newsletter;
        res.render('AdminBSBMaterialDesign-master/all_school_newsletters', {layout: 'layout/admin.hbs', newsletters: newsletters})
    })
})


router.get('/change_staff_password/:id', (req, res) => {

})

router.post('/change_staff_password/:id', (req, res) => {

})


router.get('/all_editable_scores', (req, res) => {
    if(req.session.pupil_id || req.user){  
         var user_id = req.user ? req.user._id : decrypt(req.session.pupil_id);  
        Staff.findOne({user_id: user_id}, function(err, staff){
            let staff_class_id = staff.class_id
            let staff_class_name = staff.class_name
    // ReportCard.find({staff_id: staff_id}, function(err, reports){
            ReportSheet.find({staff_id: user_id}, function(err, all_pupils){
                 res.render('AdminBSBMaterialDesign-master/all_editable_scores', {layout: 'layout/admin.hbs', staff_class_id: staff_class_id, staff_class_name:staff_class_name, all_pupils:all_pupils})
            })
        })
    }
    else {
        redirector(req, res)
    }
})



router.get('/single_report_sheet_edit/:id', (req, res) => {
    let reportsheet_id = req.params.id;
    //lets now query the reportCard collections using reportsheet_ID
    let all_bskill;
    let all_behaviour;
    let term_name;
    // let singleData;
    // report sheet variables
    let schoolName;//found
    let pupils_name;//found
    let year_session;
    let grading_period;
    let class_teacher_name;//found
    let current_class;//found
    let school_logo;
    let alternate_text;
    let all_comment;

    ReportCard.findOne({reportsheet_id: reportsheet_id}, function(err, report){
      let singleData = report;
         // console.log("this is the single data",singleData)
    //     // Now lets get the pupils full name
         pupils_name = singleData.full_name
         console.log("this is the pupils name:", pupils_name)
        //now we get the staff id which would be usefull for us later on
        let staff_id = singleData.staff_id;
        current_class = singleData.class_name;
        // Now lets get the staff_name
        // console.log("this is the current class", current_class)

        Staff.findOne({user_id: staff_id}, function(err, staffData){
            class_teacher_name = staffData.first_name + " " + staffData.middle_name + " " + staffData.last_name
            // console.log("this is the classTeachers name", class_teacher_name)
        })     
    /*Now lets get the school name*/
        School.findOne({schoolID:singleData.school_id}, function(err, schoolData){
            schoolName = schoolData.name + " " + schoolData.schoolType
            // console.log(schoolData.name, schoolData.schoolType)
            // console.log("this is the school ", schoolName)
       
        Logo.findOne({school_id: schoolData._id}, function(err, logo){
            school_logo = logo.image
            alternate_text = logo.alternate_text
            // console.log("this is the school logo ₦₦₦₦₦₦₦₦₦₦₦₦",school_logo, alternate_text);
 
    ReportSheet.findOne({_id:reportsheet_id}, function(err, single_report){
        term_name = single_report.term_name
        // console.log(single_report)
    })
    PupilBehaviour.find({reportsheet_id: reportsheet_id}, function(err, behaviour){
        all_behaviour = behaviour;
        // console.log(all_behaviour)
    })
    PupilBasic.find({reportsheet_id: reportsheet_id}, function(err, bskill){
        all_bskill = bskill;
        // console.log(all_bskill)
    })
    PupilContent.find({reportsheet_id: reportsheet_id}, function(err, comment){
        all_comment = comment;
         console.log("these Are all the comment###₦₦₦₦₦", all_comment)
    })
    
    ReportCard.find({reportsheet_id: reportsheet_id}, function(err, reports){
        let all_reports = reports
        // console.log("these are all the reports",all_reports)

        console.log("this is the shcool name", schoolName)
        res.render('result/index_edit', {layout: false, reportsheet_id:reportsheet_id, all_comment:all_comment, alternate_text:alternate_text, school_logo:school_logo, current_class:current_class, class_teacher_name:class_teacher_name, pupils_name:pupils_name, term_name: term_name, all_behaviour:all_behaviour, all_bskill:all_bskill, all_reports:all_reports, schoolName: schoolName})     
  // console.log("route reached")
})
})
       })
         })
    });



router.post('/edit_reportcard_scores/:id', (req, res) => {
    // redirector(req, res)
    if(req.session.pupil_id || req.user){ 
    let report_id_instance = req.body.reportsheet_id
    let result_id = req.params.id;
    let total = parseInt(req.body.test_score1)+parseInt(req.body.test_score2)+parseInt(req.body.test_score3)+parseInt(req.body.examScore)
    ReportCard.findByIdAndUpdate(result_id,
    { 

        "test_score1": parseInt(req.body.test_score1),
        "test_score2": parseInt(req.body.test_score2),
        "test_score3": parseInt(req.body.test_score3),
        "thirdColor": parseInt(req.body.examScore),
        "total": total,
        
    }).exec(function(err, updated_school){
    if(err) {
       console.log(err);
       
    } else {
        console.log(updated_school)
        
        res.redirect(`/admin/single_report_sheet_edit/${report_id_instance}`)
    }
    });
}
else {
    redirector(req, res)
}
})


router.post('/edit_teachers_remark_scores/:id', (req, res) => {
    // redirector(req, res)
    if(req.session.pupil_id || req.user){ 
    let report_id_instance = req.body.reportsheet_id
    let result_id = req.params.id;
    
    PupilContent.findByIdAndUpdate(result_id,
    { 

        "score": req.body.score,
        
        
    }).exec(function(err, updated_school){
    if(err) {
       console.log(err);
       
    } else {
        console.log(updated_school)
        
        res.redirect(`/admin/single_report_sheet_edit/${report_id_instance}`)
    }
    });
}
else {
    redirector(req, res)
}
})


router.post('/edit_behaviour_scores/:id', (req, res) => {
    // redirector(req, res)
    if(req.session.pupil_id || req.user){ 
    let report_id_instance = req.body.reportsheet_id
    let result_id = req.params.id;
    
    PupilBehaviour.findByIdAndUpdate(result_id,
    { 

        "score": req.body.score,
        
        
    }).exec(function(err, updated_school){
    if(err) {
       console.log(err);
       
    } else {
        console.log(updated_school)
        
        res.redirect(`/admin/single_report_sheet_edit/${report_id_instance}`)
    }
    });
}
else {
    redirector(req, res)
}
})

router.post('/edit_bskill_scores/:id', (req, res) => {
    // redirector(req, res)
    if(req.session.pupil_id || req.user){ 
    let report_id_instance = req.body.reportsheet_id
    let result_id = req.params.id;
    
    PupilBasic.findByIdAndUpdate(result_id,
    { 

        "score": req.body.score,
        
        
    }).exec(function(err, updated_school){
    if(err) {
       console.log(err);
       
    } else {
        console.log(updated_school)
        
        res.redirect(`/admin/single_report_sheet_edit/${report_id_instance}`)
    }
    });
}
else {
    redirector(req, res)
}
})


router.get('/create_report_c', (req, res) => {  
    // to get the school id using the staff_id
    redirector(req, res);
    Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
        var staff_id = req.user._id;
        var staff_pupilss_count;
        var myClassess;
        User.findOne({_id: req.user._id}, function(err, user){
            if(user.isStaff === true){
                console.log("staff_pupils", staff_pupils.school_id)
                //to get a the staff from the staff table using its user_id
                let staff_pupils_school_id = staff_pupils.school_id    
            Class.find({school_id: staff_pupils_school_id}, function(err, myClass){ 
                myClassess = myClass;

            // Class.findOne({}) todo
              
         
            Pupil.find({school_id: staff_pupils_school_id}, function(err, pupils){ 
                res.render('AdminBSBMaterialDesign-master/create_report_card', {layout: 'layout/admin.hbs', staff_id: staff_id, staff_pupils_school_id: staff_pupils_school_id, myClass:myClass, pupils:pupils, myClassess: myClassess})
            })
               })
            }
        });
    });
});



router.get('/register_pupil', (req, res) => {    
    res.render('AdminBSBMaterialDesign-master/pupil_form', {layout: 'layout/admin.hbs', user: req.user, state: state})
});
router.get('/register_parent', (req, res) => {    
    res.render('AdminBSBMaterialDesign-master/parent_form', {layout: 'layout/admin.hbs', user: req.user})
});

function redirector(req, res){
 if(!req.user){
        // res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Please Login"}})                
        res.redirect('/admin/login');
    }   
}

function additioner(param1, param2, param3, param4){
    let total = parseInt(param1) + parseInt(param2) + parseInt(param3) + parseInt(param4)
    return total;
}
// this is a function to get the name from the model using the ID gotten from the form
//pre-requisites, the model must have a name field/attribute
function getNameFromModelUsingId(modelName, id){
    let current_id = id
    let modelInstance;
    if(modelName=="School"){
    School.findOne({schoolID: current_id}, function(err, values){
        modelInstance = values.name
    
    })    
    }
    else if(modelName=="Class"){
        Class.findOne({_id: current_id}, function(err, values){
        modelInstance = values.name    
    })   
    }

    return modelInstance;
}



router.get('/register_staff', (req, res) => {
    redirector(req, res)
    Stafftype.find({school_id: req.user._id}, function(err, staffType){      
        console.log("this is the categories",staffType)
        if (err) throw err;
    Subject.find({school_id: req.user._id}, function(err, subject){      
        console.log("this is the categories",subject)
        if (err) throw err; 
    School.findOne({schoolID: req.user._id}, function(err, school){
        let singleSchool = school
        console.log("this is the single school vals", singleSchool)
       
    Class.find({school_id: req.user._id}, function(err, myClass){      
        console.log("this is the categories",myClass)
        if (err) throw err;  
        res.render('AdminBSBMaterialDesign-master/staff_form', {layout: 'layout/admin.hbs', singleSchool:singleSchool, user: req.user, staffType:staffType, subject:subject, myClass:myClass})
});
});
});
});
  }) 





router.get('/register_new_staff_type', (req, res) => {
    redirector(req, res)
    console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_staff_type', {layout: 'layout/admin.hbs', user: req.user})
})

router.get('/register_new_subject', (req, res) => {
    redirector(req, res)
    let school_id = req.user._id
    console.log("this is the user id that mad e", req.user._id)
    Subject.find({school_id:school_id}, function(err, all_subject){
    res.render('AdminBSBMaterialDesign-master/register_new_subject', {layout: 'layout/admin.hbs', all_subject:all_subject, school_id:school_id})
})
})
/**/
router.get('/create_class', (req, res, next) => {
    redirector(req, res)
    let school_id = req.user._id
    console.log("this is the user id that mad e", req.user._id)
    Class.find({school_id:school_id}, function(err, all_class){

    res.render('AdminBSBMaterialDesign-master/register_new_class', {layout: 'layout/admin.hbs', school_id: 
        school_id, all_class: all_class, user: req.user})
})
 })

// router.get('/edit_class', (req, res, next) => {
//     redirector(req, res)
//     Class.find({}, function(err, all_class) {
//         let all_classess = all_class
//         res.render('AdminBSBMaterialDesign-master/edit_class', {layout: 'layout/admin.hbs', all_classess})  
//     });
   
// })

router.get('/create_results', (req, res, next) => {
    redirector(req, res)
     // let staff_id = req.user._id
     let bskills;
     let behaviours;
     Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
    let school_id = staff_pupils.school_id
    console.log("this is the shcool id", school_id)
    //  console.log("this is the user id that mad e", req.user._id, school_id)
    // BSkill.find({school_id:school_id})
    Subject.find({school_id: school_id}, function(err, all_subject){
        res.render('AdminBSBMaterialDesign-master/create_results', {layout: 'layout/admin.hbs', all_subject:all_subject})
    })
    })
})


router.get('/create_subject', (req, res, next) => {
    redirector(req, res)
     let school_id = req.user._id
 console.log("this is the user id that mad e", req.user._id)
 Subject.find({school_id:school_id}, function(err, all_subject){
    res.render('AdminBSBMaterialDesign-master/register_new_subject', {layout: 'layout/admin.hbs', all_subject:all_subject})
})
})

/*  reportsheet_id: String,
    class_name: String,
    class_id: String,
    staff_id: String,
    school_id: String,
    pupil_id: String,*/

router.get('/create_bskills', (req, res, next) => {
    redirector(req, res)
    let school_id = req.user._id
        console.log("this is the user id that mad e", req.user._id)
    BSkill.find({school_id:school_id}, function(err, all_subject){
        res.render('AdminBSBMaterialDesign-master/create_bskill', {layout: 'layout/admin.hbs', all_subject:all_subject, school_id:school_id})
    })
})
router.get('/create_behaviour', (req, res, next) => {
    redirector(req, res)
    let school_id = req.user._id
        console.log("this is the user id that mad e", req.user._id)
    BSkill.find({school_id:school_id}, function(err, all_subject){
        res.render('AdminBSBMaterialDesign-master/create_behaviour', {layout: 'layout/admin.hbs', all_subject:all_subject, school_id:school_id})
    })
})

router.get('/create_comment_type', (req, res, next) => {
    redirector(req, res)
    let school_id = req.user._id
        console.log("this is the user id that mad e", req.user._id)
    CommentType.find({school_id:school_id}, function(err, all_subject){
        res.render('AdminBSBMaterialDesign-master/create_comment_type', {layout: 'layout/admin.hbs', all_subject:all_subject, school_id:school_id})
    })
})

router.get('/create_parent', (req, res, next) => {
   redirector(req, res)
 console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/parent_form', {layout: 'layout/admin.hbs', user: req.user, state:state})
})

router.get('/create_pupil/:class_id', (req, res, next) => {
    redirector(req, res)
    let school_id = req.user._id
    Class.findOne({_id: req.params.class_id}, function(err, myClass){      
        console.log("this is the categories",myClass)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
        
    res.render('AdminBSBMaterialDesign-master/pupil_form', {layout: 'layout/admin.hbs', user: req.user, myClass:myClass, school_id:school_id})
});
});



// lets create a route for the admin to view peoples result 
router.get('/view_pupils_result_by_pupil_id/:pupil_id', (req, res, next) =>{
    if(req.session.pupil_id || req.user){    
        ReportSheet.find({pupil_id: req.params.pupil_id}, function(err, all_report_sheets){
            console.log("this is the pupils report sheets", all_report_sheets)
            res.render('AdminBSBMaterialDesign-master/view_pupils_result_by_pupil_id', {layout: 'layout/admin.hbs', all_report_sheets: all_report_sheets})
        })
    }
    else{
        redirector(req, res)
    }
})



router.get('/create_pupil_page', (req, res, next) => {
    redirector(req, res)   
   
    Class.find({school_id: req.user._id}, function(err, all_class){      
        console.log("this is the categories",all_class)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
    res.render('AdminBSBMaterialDesign-master/pupil_class_page', {layout: 'layout/admin.hbs', user: req.user, all_class:all_class})
});
});

router.post('/registration', (req, res, next) => {
    User.countDocuments({}, function(err, count) {
    if (err) { return handleError(err) } //handle possible errors
        console.log("this is the number of users", count)
    if(count<=2){
        var is_admin = true
        var is_superUser = true
        var is_bishop = true
        User.register(new User({ username: req.body.username,
       user_name: req.body.user_name,
       first_name: req.body.first_name,
       company_name: req.body.company_name,
       company_logo: req.body.company_logo,
       last_name: req.body.last_name,
       phone: req.body.phone,
       email: req.body.email,
       isAdmin: true,
       isSuperUser: true,
       isBishop: true,
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
                res.render('AdminBSBMaterialDesign-master/login', {layout: false, message:{success: "successfully registered, now login"}})
                });
            });
     });

    }
    else{
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
                res.render('AdminBSBMaterialDesign-master/login', {layout: false, message:{success: "successfully registered, now login"}})
                });
            });
     });

    } 

        
    })   
       });

// debugging Codes
router.get('/get_all_stafftypes', (req, res, next) => {
    Stafftype.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_logo', (req, res, next) => {
    Logo.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_auths', (req, res, next) => {
    Auth.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_commenttypes', (req, res, next) => {
    CommentType.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_reportcards', (req, res, next) => {
    ReportCard.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_bskills', (req, res, next) => {
    BSkill.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_behaviours', (req, res, next) => {
    Behaviour.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_reportsheets', (req, res, next) => {
    ReportSheet.find({}, function(err, users) {
     console.log(users)
    });

})

router.get('/get_all_aboutus', (req, res, next) => {
    AboutUs.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_results', (req, res, next) => {
    PupilClass.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_rs', (req, res, next) => {
    ReportSubject.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_reports', (req, res, next) => {
    ReportCard.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_parents', (req, res, next) => {
    Parent.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_staffs', (req, res, next) => {
    Staff.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_subjects', (req, res, next) => {
    Subject.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_users', (req, res, next) => {
    User.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_schools', (req, res, next) => {
    School.find({}, function(err, users) {
     console.log(users)
    });

})
router.get('/get_all_pupils', (req, res, next) => {
    Pupil.find({}, function(err, users) {
     console.log(users)
    });

})





router.post('/create_staff_type', (req, res, next) => {
    let staffType = new Stafftype(); 

    staffType.school_id = req.user._id; 
    staffType.name = req.body.name;
    staffType.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});



router.post('/create_new_report_sheet', (req, res, next) => {
    let reportCard = new ReportCard(); 
    reportCard.name = req.body.name;
    reportCard.term_name = req.body.term_name
    reportCard.staff_id = req.body.staff_id;
    reportCard.class_name = req.body.class_name;
    reportCard.school_id = req.body.staff_pupils_school_id;
    reportCard.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});



router.post('/register_new_subject', (req, res, next) => {
    let subject = new Subject(); 

    subject.school_id = req.user._id; 
    subject.name = req.body.name;
    subject.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});


router.post('/register_new_class', (req, res, next) => {
    let my_class = new Class(); 

    my_class.school_id = req.user._id; 
    my_class.name = req.body.name;
    my_class.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/create_class')
      
        }
    });

});

router.post('/new_report_subject', (req, res, next) => {
    let reportSubject = new ReportSubject(); 

    // my_class.school_id = req.user._id; 
    reportSubject.teacher_id = req.user._id;
    reportSubject.subject_name = req.body.subject_name;
    reportSubject.pupil_id = req.body.pupil_id;
    reportSubject.school_id = req.body.school_id;
    reportSubject.subject_test1 = req.body.subject_test1
    reportSubject.subject_test2 = req.body.subject_test2
    reportSubject.subject_test3 = req.body.subject_test3
    reportSubject.subject_test4 = req.body.subject_test4
    
    reportSubject.save(function(err, doc){       
        if(err){
            console.log("error durring saving",err);
            return;
        } else {                    
            console.log(doc, "successfully save, redirecting now..........")
            res.redirect('/admin/home')
      
        }
    });

});
// in this function we pass in the whole image, then we extract its name from it
//then save the image as the extracted name in the uploads directory and db

function imagePlacerAndNamer(req, res, the_file){
    let file_name = Date.now()+ the_file.name
    the_file.mv('Views/public/uploads/' + file_name, function(err) {

        // console.log("this si thhe uploaded image",file_name)
   });
    return file_name
}
router.get('/view_all_schools', (req, res) => {
    redirector(req, res)
    School.find({}, function(err, schools) {
        let all_schools = schools
        res.render('AdminBSBMaterialDesign-master/view_all_schools', {layout: 'layout/admin', all_schools:all_schools} )
    });    
})

router.post('/update_school/:id', (req, res) => {
    redirector(req, res)
    let result_id = req.params.id;
    
    School.findByIdAndUpdate(result_id,
    { 
        "name": req.body.name,
        "majorColor":req.body.majorColor,
        "minorColor":req.body.minorColor,
        "thirdColor":req.body.thirdColor,
        "schoolDescription":req.body.schoolDescription,
        "proprietorName":req.body.proprietorName,
        "schoolType":req.body.schoolType,
        "hmName":req.body.hmName,    
        "phone":req.body.phone,     
        "visionStatement":req.body.visionStatement,
        "missionStatement":req.body.missionStatement,
    }).exec(function(err, updated_school){
    if(err) {
       console.log(err);
       
    } else {
        console.log(updated_school)
        
        res.redirect("/admin/home")
    }
    });
})
// login



router.post('/update_pupil/:id', (req, res) => {
    redirector(req, res)
    let class_name;
    let class_id;
    
    Pupil.findByIdAndUpdate(req.params.id,
    { 
       
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "middle_name": req.body.middle_name,
        "sex": req.body.sex,    
        "school_fees_paid" :req.body.school_fees_paid,        
        
    }).exec(function(err, updated_pupil){
    if(err) {
       console.log(err);
       
    } else {
        console.log(updated_pupil)
        res.redirect("/admin/all_pupils_edit")
    }
    });
})

router.post('/update_staff/:id', (req, res) => {
   
    let school_name;
    let class_name;
   
    Class.findOne({_id: req.body.class}, function(err, values){
        console.log("all schools", values)
        class_name = values.name
    }) 

    let staff = new Staff();     
    
    redirector(req, res)
    let result_id = req.params.id;
    console.log(req.body)
    let bigImage = req.files.passport_name;
    let bigImage_name = imagePlacerAndNamer(req, res, bigImage);
    Staff.findByIdAndUpdate(result_id,
    { 
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "middle_name": req.body.middle_name,
        "phone": req.body.phone,
        "dob": req.body.dob,
        "sex": req.body.sex,
        "state_of_origin": req.body.state_of_origin,
        "class_name": class_name,
        "class_id": req.body.class,
        "address": req.body.address,
        "staffType_id": req.body.staffType_id,
        "address": req.body.address,
        "church_attended":req.body.church_attended,
        "expelled":req.body.expelled,
        "place_of_birth": req.body.place_of_birth,
        "suspended":req.body.suspended,
        "fired": req.body.fired,
        "church_attended" :req.body.church_attended,
        "school_fees_paid" :req.body.school_fees_paid,
        "religion":req.body.religion,
        "passport_name": bigImage_name,               
        
    }).exec(function(err, updated_pupil){
    if(err) {
       console.log(err);
       
    } else {
        
        res.redirect("/admin/all_staffs")
    }
    });
})


router.post('/create_school', (req, res) => {
    let school = new School();  
    User.register(new User({ username: req.body.username,
       user_name: req.body.user_name,
       isSchool: true,
       first_name: req.body.first_name,
       company_name: req.body.company_name,
       last_name: req.body.last_name,
       phone: req.body.phone,
       email: req.body.email,
      
   }), req.body.password, (err, user) => {

            if (err) {
                console.log(err)                                             
                res.render('AdminBSBMaterialDesign-master/school_form', {layout: 'layout/admin', message:{error:err}})
                }
            let role = new Role();
            passport.authenticate('local')(req, res, () => {                                             
                req.session.save((err) => {
                
                role.user_id = req.user._id//session comes from d db
                
                role.save(function(err, doc){
                    console.log("successfully saved")
                    let current_school_id = doc._id;
                if(err){
                    console.log(err);
                    return;
                }                
                else {     
                    school.creator_id = req.user._id; 
                    school.schoolID = req.user._id;
                    school.name = req.body.name;
                    school.majorColor = req.body.majorColor;
                    school.minorColor = req.body.minorColor;
                    school.thirdColor = req.body.thirdColor;
                    school.fourthColor = req.body.fourthColor;
                    school.schoolDescription = req.body.schoolDescription;
                    school.proprietorName = req.body.proprietorName;
                    school.schoolType = req.body.schoolType;
                    school.hmName = req.body.hmName;                       
                    school.visionStatement =req.body.visionStatement;
                    school.missionStatement = req.body.missionStatement;
                    
                    school.save(function(err, doc){       
                    if(err){
                        console.log("error durring saving",err);
                        return;
                    } else {                    
                        console.log(doc, "successfully save, redirecting now..........")
                  
                    }
                });
//rd ends here           
                console.log("successfully saved to the role db")
            }
        });

            if (err) {
                return next(err);
            }                
            res.redirect('/admin/login')
            });
        });
 });

});



// router.post('/create_staff', (req, res, next) => {
//     let current_id = req.user._id
//     let my_passport = req.files.passport;
//     let school_name;
//     let class_name;
//     let passport_name = imagePlacerAndNamer(req, res, my_passport);
//     School.findOne({schoolID: req.user._id}, function(err, values){
//         console.log("all schools", values)
//         school_name = values.name
//     })
//     Class.findOne({_id: req.body.class}, function(err, values){
//         console.log("all schools", values)
//         class_name = values.name
//     }) 

//     let staff = new Staff();     
//     let dataLog = new DataLog();
     
//     User.register(new User({ username: req.body.username,
//        isStaff: true,
//        sex: req.body.sex,
//        first_name: req.body.first_name,
//        last_name: req.body.last_name,
//        sex: req.body.sex,
//        phone: req.body.phone,
//        email: req.body.email,      
//    }), req.body.password, (err, user) => {

//             if (err) {
//                 console.log(err)                                             
//                 res.render('AdminBSBMaterialDesign-master/staff_form', {layout: 'layout/admin', message:{error:err}})
//                 }
//             let role = new Role();
            
//             passport.authenticate('local')(req, res, () => {                                              
//                 req.session.save((err) => {
//                 console.log("this is the current user_id", req.user._id)
//                 const current_user_id = req.user._id
//                 role.user_id = req.user._id//session comes from d db
//                  console.log("this is the current user_id", req.user._id)
//                 role.save(function(err, doc){
//                     console.log("successfully saved")
//                     let current_school_id = doc._id;
                
//                 if(err){
//                     console.log(err);
//                     return;
//                 } 
  
//                 else {   
//                  console.log("this is the current user_id", current_id, req.user._id)  
//                     // var schoolName = getNameFromModelUsingId("School", req.user._id)
                    
//                     dataLog.message = "A new staff has been created by: "+ school_name+ " School"
//                     dataLog.school_id = current_id;
//                     staff.user_id = current_user_id; 
//                     staff.passport_name = passport_name;
//                     staff.role_id = current_school_id;
//                     staff.sex = req.body.sex;                  
//                     staff.class_id = req.body.class;
//                     staff.class_name = class_name;
//                     staff.subject_id = req.body.subject_id;
//                     staff.staffType_id = req.body.staffType_id;
//                     staff.school_id = current_id;
//                     staff.first_name = req.body.first_name 
//                     staff.middle_name = req.body.middle_name
//                     staff.last_name = req.body.last_name;
//                     staff.school_name = school_name;
//                     staff.phone = req.body.phone;
//                     staff.save(function(err, doc){       
//                         if(err){
//                             console.log("error durring saving",err);
//                             return;
//                         } else {                    
//                             console.log(doc, "successfully save, redirecting now..........")
                      
//                         }
//                     });
//                     dataLog.save(function(err, doc){       
//                         if(err){
//                             console.log("error durring saving",err);
//                             return;
//                         } else {                    
//                             console.log(doc, "successfully save, redirecting now..........")
                      
//                         }
//                     });
//     //rd ends here           
//                     console.log("successfully saved to the role db")
//                 }
//             });

//                 if (err) {
//                     return next(err);
//                 }      

//                res.redirect('/admin/login')
//                 });
//             });
//      });

// });

router.post('/create_parent', (req, res, next) => {
    let current_id = req.user._id
    let my_passport = req.files.passport;
    let passport_name = imagePlacerAndNamer(req, res, my_passport);
    let parent = new Parent();  
    User.register(new User({ username: req.body.username,
       user_name: req.body.user_name,
       isParent: true,
       sex: req.body.sex,
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       sex: req.body.sex,
       phone: req.body.phone,
       email: req.body.email,      
   }), req.body.password, (err, user) => {

            if (err) {
                console.log(err)                                             
                res.render('AdminBSBMaterialDesign-master/staff_form', {layout: false, message:{error:err}})
                }
            let role = new Role();
            passport.authenticate('local')(req, res, () => {                                             
                req.session.save((err) => {
                console.log("this is the current user_id", req.user._id)
                const current_user_id = req.user._id
                role.user_id = req.user._id//session comes from d db
                 console.log("this is the current user_id", req.user._id)
                role.save(function(err, doc){
                    console.log("successfully saved")
                    let current_school_id = doc._id;

                
                if(err){
                    console.log(err);
                    return;
                } 
  
                
                else {   
                 console.log("this is the current user_id", current_id)         
                    parent.user_id = current_user_id; 
                    parent.role_id = current_school_id;
                    parent.passport_name = passport_name;           
                    parent.sex = req.body.sex;
                    parent.fullName = req.body.last_name + " " + req.body.first_name;
                    parent.state_of_origin = req.body.state_of_origin;
                    parent.occupation = req.body.occupation;
                    parent.home_address = req.body.home_address;
                    parent.office_address = req.body.office_address;
                    parent.religion = req.body.religion;
                    parent.church_attended = req.body.church_attended;
                    parent.marital_status = req.body.marital_status
                    parent.school_id = current_id;
                    parent.phone = req.body.phone
                    parent.lga_of_origin = req.body.lga_of_origin;

                    parent.save(function(err, doc){       
                        if(err){
                            console.log("error durring saving",err);
                            return;
                        } else {                    
                            console.log(doc, "successfully save, redirecting now..........")
                      
                        }
                    });
    //rd ends here           
                    console.log("successfully saved to the role db")
                }
            });

                if (err) {
                    return next(err);
                }                
                res.redirect('/admin/login')
                });
            });
     });

});


// record_scores
/*  school_id: String,
    subject_name: String,
    subject_id: String,
    pupil_id: String,
    subject_test1: {type: Number, default: 0},
    subject_test2: {type: Number, default: 0},
    subject_test3: {type: Number, default: 0},
    subject_test4: {type: Number, default: 0}, */
// router.get('/all_pupils_scores', (req, res, next) => {
//      redirector(req, res)
//     let current_staff_id = req.user._id
//     PupilClass.find({staff_id: current_staff_id}).exec(function (err, pupil_class){
//         if(err) {
//             console.log(err)
//         }

//         let pupil_class_results = pupil_class
//         console.log("these are the user details: ",pupil_class_results)
//     // lets use pupil's id within the db to get the pupils details 
//     // Pupils.findOne({user_id: pupil_class_results.})
//         res.render('AdminBSBMaterialDesign-master/pupils_result', {layout: 'layout/admin.hbs', pupil_class_results: pupil_class})
//     });
// })



router.get('/pupils_report_edit/:id', (req, res) => {
    redirector(req, res)
    // let result_id = req.params.id;
    PupilClass.findOne({_id: req.params.id}, function(err, pupilClass){
        // console.log("this is the pupils class",pupilClass)
        let pupil_class = pupilClass
        res.render('AdminBSBMaterialDesign-master/report_edit', {layout: 'layout/admin.hbs', pupil_class: pupil_class})
    })
})

router.get('/pupils_report_view/:id', (req, res) => {
    PupilClass.findOne({_id: req.params.id}, function(err, pupilClass){
        // console.log("this is the pupils class",pupilClass)
        let pupil_class = pupilClass
        // lets calculate the class average
//         res.render('AdminBSBMaterialDesign-master/view_pupil_result', {layout: false, pupil_class: pupil_class})
        res.render('result/index', {layout: false, pupil_class: pupil_class})
    })
})

/*all pupils sheet*/
/*here we would be using the people's id for the selection*/
router.get('/single_pupil_report_view/:id', (req, res) => {
    PupilClass.find({pupil_id: req.params.id}, function(err, pupilClass){
        // console.log("this is the pupils class",pupilClass)
        let pupil_class = pupilClass
        // lets calculate the class average
    Pupil.findOne({user_id: req.params.id}, function(err, singlePupil){
        let pupil_pix = singlePupil.passport_name;   
        let sinPupil = singlePupil;
        
        res.render('AdminBSBMaterialDesign-master/view_single_pupil_reports', {layout: 'layout/admin', sinPupil:sinPupil, pupil_class: pupil_class, pupil_pix: pupil_pix})
    })
    })
});





router.get('/pupils_report_view/:id', (req, res) => {
    redirector(req, res)
    // let result_id = req.params.id;
    PupilClass.findOne({_id: req.params.id}, function(err, pupilResult){
        // console.log("this is the pupils class",pupilClass)
        let pupil_result = pupilResult
        let pupil_id = pupil_class.pupil_id
    // lets query the pupils table to get the pupils details
    Pupil.findOne({user_id: pupil_id}, function(err, pups){
        let pups_details = pups;    
        res.render('AdminBSBMaterialDesign-master/report_edit', {layout: 'layout/admin.hbs', pups_details: pups_details, pupil_result: pupil_result})
    })
})
})

router.post('/pupils_report_edit/:id', (req, res, next) => {
    redirector(req, res)
    let result_id = req.params.id;
    console.log(req.body)
    PupilClass.findByIdAndUpdate(result_id,
    { 
        "maths_test1": parseInt(req.body.maths_test1),
       "maths_test2": parseInt(req.body.maths_test2),
       "maths_test3": parseInt(req.body.maths_test3),
       "maths_exam": parseInt(req.body.maths_exam),
       "maths_total": parseInt(additioner(req.body.maths_test1, req.body.maths_test2, req.body.maths_test3, req.body.maths_exam)),       

       "english_test1": parseInt( req.body.english_test1),
       "english_test2": parseInt( req.body.english_test2),
       "english_test3": parseInt( req.body.english_test3),
       "english_exam": parseInt( req.body.english_exam),
       "english_total": parseInt( additioner(req.body.english_test1, req.body.english_test2, req.body.english_test3, req.body.english_exam)),        
      
       "yoruba_test1": parseInt( req.body.yoruba_test1),
       "yoruba_test2": parseInt( req.body.yoruba_test2),
       "yoruba_test3": parseInt( req.body.yoruba_test3),
       "yoruba_exam": parseInt( req.body.yoruba_exam),
       "yoruba_total": parseInt( additioner(req.body.yoruba_test1, req.body.yoruba_test2, req.body.yoruba_test3, req.body.yoruba_exam)),

       "basic_science_test1": parseInt( req.body.basic_science_test1),
       "basic_science_test2": parseInt( req.body.basic_science_test2),
       "basic_science_test3": parseInt( req.body.basic_science_test3),
       "basic_science_exam": parseInt( req.body.basic_science_exam),
       "basic_science_total": parseInt( additioner(req.body.basic_science_test1, req.body.basic_science_test2, req.body.basic_science_test3, req.body.basic_science_exam)),
        
       "social_test1": parseInt(req.body.social_test1),
       "social_test2": parseInt(req.body.social_test2),
       "social_test3": parseInt(req.body.social_test3),
       "social_exam": parseInt(req.body.social_exam),
       "social_total": parseInt(additioner(req.body.social_test1, req.body.social_test2, req.body.social_test3, req.body.social_exam)),        
       "arts_test1": parseInt( req.body.arts_test1),
       "arts_test2": parseInt( req.body.arts_test2),
       "arts_test3": parseInt( req.body.arts_test3),
       "arts_exam": parseInt( req.body.arts_exam),
       "arts_total": parseInt( additioner(req.body.arts_test1, req.body.arts_test2, req.body.arts_test3, req.body.arts_exam)),
       
       "agric_test1": parseInt( req.body.agric_test1),
       "agric_test2": parseInt( req.body.agric_test2),
       "agric_test3": parseInt( req.body.agric_test3),
       "agric_exam": parseInt( req.body.agric_exam),
       "agric_total": parseInt(additioner(req.body.agric_test1, req.body.agric_test2, req.body.agric_test3, req.body.agric_exam)),
       
       "civic_test1": parseInt( req.body.civic_test1),
       "civic_test2": parseInt( req.body.civic_test2),
       "civic_test3": parseInt( req.body.civic_test3),
       "civic_exam": parseInt( req.body.civic_exam),
       "civic_total": parseInt( additioner(req.body.civic_test1, req.body.civic_test2, req.body.civic_test3, req.body.civic_exam)),
       
       "crs_test1": parseInt( req.body.crs_test1),
       "crs_test2": parseInt( req.body.crs_test2),
       "crs_test3": parseInt( req.body.crs_test3),
       "crs_exam": parseInt( req.body.crs_exam),
       "crs_total": parseInt( additioner(req.body.crs_test1, req.body.crs_test2, req.body.crs_test3, req.body.crs_exam)),
       
       "phe_name": parseInt( req.body.phe_name),
       "phe_test1": parseInt( req.body.phe_test1),
       "phe_test2": parseInt( req.body.phe_test2),
       "phe_test3": parseInt( req.body.phe_test3),
       "phe_exam": parseInt( req.body.phe_exam),
       "phe_total": parseInt( additioner(req.body.phe_test1, req.body.phe_test2, req.body.phe_test3, req.body.phe_exam)),
       
       "business_test1": parseInt( req.body.business_test1),
       "business_test2": parseInt( req.body.business_test2),
       "business_test3": parseInt( req.body.business_test3),
       "business_exam": parseInt( req.body.business_exam),
       "business_total": parseInt( additioner(req.body.business_test1, req.body.business_test2, req.body.business_test3, req.body.business_exam)),
        
       "french_test1": parseInt( req.body.french_test1),
       "french_test2": parseInt( req.body.french_test2),
       "french_test3": parseInt( req.body.french_test3),
       "french_exam": parseInt( req.body.french_exam),
       "french_total": parseInt( additioner(req.body.french_test1, req.body.french_test2, req.body.french_test3, req.body.french_exam)),
        
       "computer_test1": parseInt( req.body.computer_test1),
       "computer_test2": parseInt( req.body.computer_test2),
       "computer_test3": parseInt( req.body.computer_test3),
       "computer_exam": parseInt( req.body.computer_exam),
       "computer_total": parseInt( additioner(req.body.computer_test1, req.body.computer_test2, req.body.computer_test3, req.body.computer_exam)),
        
       "home_econs_test1": parseInt( req.body.home_econs_test1),
       "home_econs_test2": parseInt( req.body.home_econs_test2),
       "home_econs_test3": parseInt( req.body.home_econs_test3),
       "home_econs_exam": parseInt( req.body.home_econs_exam),
       "home_econs_total": parseInt( additioner(req.body.home_econs_test1, req.body.home_econs_test2, req.body.home_econs_test3, req.body.home_econs_exam)),
        
       "music_test1": parseInt( req.body.music_test1),
       "music_test2": parseInt( req.body.music_test2),
       "musci_test3": parseInt( req.body.music_test3),
       "music_exam": parseInt( req.body.music_exam),
       "music_total": parseInt( additioner(req.body.music_test1, req.body.music_test2, req.body.music_test3, req.body.music_exam)),
               
       "basic_tech_test1": parseInt( req.body.basic_tech_test1),
       "basic_tech_test2": parseInt( req.body.basic_science_test2),
       "basic_tech_test3": parseInt( req.body.basic_science_test3),
       "basic_tech_exam": parseInt( req.body.basic_tech_exam),
       "basic_tech_total": parseInt( additioner(req.body.basic_tech_test1, req.body.basic_tech_test2, req.body.basic_tech_test3, req.body.basic_tech_exam)),
        
       "writing_test1": parseInt( req.body.writing_test1),
       "writing_test2": parseInt( req.body.writing_test2),
       "writing_test3": parseInt( req.body.writing_test3),
       "writing_exam": parseInt( req.body.writing_exam),
       "writing_total": parseInt( additioner(req.body.writing_test1, req.body.writing_test2, req.body.writing_test3, req.body.writing_exam)), 
        
       "phonics_test1": parseInt( req.body.phonics_test1),
       "phonics_test2": parseInt( req.body.phonics_test2),
       "phonics_test3": parseInt( req.body.phonics_test3),
       "phonics_exam": parseInt(  req.body.phonics_exam),
       "phonics_total": parseInt( additioner(req.body.phonics_test1, req.body.phonics_test2, req.body.phonics_test3, req.body.phonics_exam)),
        
        "quantitative_test1": parseInt( req.body.quantitative_test1),
        "quantitative_test2": parseInt( req.body.quantitative_test2),
        "quantitative_test3": parseInt(req.body.quantitative_test3),
        "quantitative_exam": parseInt( req.body.quantitative_exam),
        "quantitative_total": parseInt( additioner(req.body.quantitative_test1, req.body.quantitative_test2, req.body.quantitative_test3, req.body.quantitative_exam)),

        "verbal_test1": parseInt( req.body.verbal_test1),
        "verbal_test2": parseInt( req.body.verbal_test2),
        "verbal_test3": parseInt(req.body.verbal_test3),
        "verbal_exam": parseInt( req.body.verbal_exam),
        "verbal_total": parseInt( additioner(req.body.verbal_test1, req.body.verbal_test2, req.body.verbal_test3, req.body.verbal_exam)),
        
        "teachers_remark": req.body.teachers_remark,
        "head_master_remark": req.body.headmaster_remark,
        "handwritting": parseInt(req.body.handwritting),
        "drawing": parseInt(req.body.drawing),
        "games_sport": parseInt(req.body.games_sport),
        "reading": parseInt(req.body.reading),
        "punctuality": parseInt(req.body.punctuality),
        "attendance": parseInt(req.body.attendance),
        "hygiene": parseInt(req.body.hygiene),
        "attentiveness": parseInt(req.body.attentiveness),
        "honesty": parseInt(req.body.honesty),
        "neatness": parseInt(req.body.neatness),
        "participation": parseInt(req.body.participation),



    }).exec(function(err, updated_pupil){
    if(err) {
       console.log(err);
       
    } else {
        
        res.redirect("/admin/all_pupils_scores")
    }
    });

})





router.post('/edit_school/:id', (req, res, next) => {
    redirector(req, res)
    let result_id = req.params.id;
    console.log(req.body)
    School.findByIdAndUpdate(result_id,
    { 
  
    majorColor: req.body.majorColor,
    minorColor: req.body.minorColor,
    thirdColor: req.body.thirdColor,
    fourthColor: req.body.fourthColor,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    schoolDescription: req.body.schoolDescription,
    proprietorName: req.body.proprietorName,
    schoolType: req.body.schoolType,
    hmName: req.body.hmName,
    bigSlogan: req.body.bigSlogan,
    bigImage: req.body.bigImage,
    mediumImage: req.body.mediumImage,
    smallSlogan: req.body.smallSlogan,
    small_historic_quote: req.body.small_historic_quote,
    advertisement_text_header: req.body.advertisement_text_header,
    advertisement_text_description: req.body.advertisement_text_description,
    advertisement_text_header1: req.body.advertisement_text_header1,
    advertisement_text_description1: req.body.advertisement_text_description1,
    logo: req.body.logo,
    visionStatement: req.body.visionStatement,
    missionStatement: req.body.missionStatement,

    }).exec(function(err, updated_pupil){
    if(err) {
       console.log(err);
       
    } else {
        
        res.redirect("/admin/all_schools")
    }
    });
})


/*
creator_id: String,
   
    majorColor: String,
    minorColor: String,
    thirdColor: String,
    fourthColor: String,
    latitude: String,
    longitude: String,
    schoolDescription: String,
    proprietorName: String,
    schoolType: String,
    hmName: String,
    bigSlogan: {type: String, default: "We Are Ranked as the Best School in Nigeria"},
    bigImage: String,
    mediumImage: String,
    smallSlogan: String,
    small_historic_quote: {type: String, default: "In the history of modern school, there is probably no greater leap forward than building the future of your child with us"},
    advertisement_text_header: {type: String, default: "Over 20 First-Class Graduates produced every year, are former students of "},
    advertisement_text_description: {type: String, default: "Yearly more than 20 First-Class graduates in Universities across Nigeria and the Whole world, are former student/pupils of our Great School. So therefore the best asset you can give your Child is proper foundation, which is what we give our pupils/students"},
    advertisement_text_header1: {type: String, default: "is not just a School, but an EDUCATION itself"},
    advertisement_text_description1: {type: String, default: " Albert Einstein: Education is what remains after one has forgotten what one has learned in school. We believe Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life."},
    logo: {type: String, default: "logo.png"},
    visionStatement: String,
    missionStatement: String,*/

router.post('/submitScore/:id', (req, res, next) => {
    redirector(req, res)
    let pupil_id = req.params.id;
    let staff_id = req.user._id;


    let primaryClass = new PupilClass();
        primaryClass.pupil_id = pupil_id;  
        primaryClass.staff_id = staff_id;
        primaryClass.pupil_name = req.body.pupil_name;
        primaryClass.result_type = req.body.result_type;
        primaryClass.pic = req.body.pupil_pic;
        if(req.body.maths_test1){ 
        primaryClass.maths_name = req.body.maths_name;
        primaryClass.maths_test1= req.body.maths_test1;
        primaryClass.maths_test2= req.body.maths_test2;
        primaryClass.maths_test3=req.body.maths_test3;
        primaryClass.maths_exam = req.body.maths_exam;
        primaryClass.maths_total = additioner(req.body.maths_test1, req.body.maths_test2, req.body.maths_test3, req.body.maths_exam) 
        }
        if(req.body.english_test1){ 
        primaryClass.english_name= req.body.english_name;
        primaryClass.english_test1= req.body.english_test1;
        primaryClass.english_test2= req.body.english_test2;
        primaryClass.english_test3= req.body.english_test3;
        primaryClass.english_exam= req.body.english_exam;
        primaryClass.english_total = additioner(req.body.english_test1, req.body.english_test2, req.body.english_test3, req.body.english_exam) 
        }
        if(req.body.yoruba_test1){   
        primaryClass.yoruba_test1= req.body.yoruba_test1;
        primaryClass.yoruba_test2= req.body.yoruba_test2;
        primaryClass.yoruba_test3= req.body.yoruba_test3;
        primaryClass.yoruba_exam= req.body.yoruba_exam;
        primaryClass.yoruba_total= additioner(req.body.yoruba_test1, req.body.yoruba_test2, req.body.yoruba_test3, req.body.yoruba_exam) 
        }
        if(req.body.basic_science_test1){
        primaryClass.basic_science_test1= req.body.basic_science_test1;
        primaryClass.basic_science_test2= req.body.basic_science_test2;
        primaryClass.basic_science_test3= req.body.basic_science_test3;
        primaryClass.basic_science_exam= req.body.basic_science_exam;
        primaryClass.basic_science_total= additioner(req.body.basic_science_test1, req.body.basic_science_test2, req.body.basic_science_test3, req.body.basic_science_exam) 
        }
        if(req.body.social_test1){
        primaryClass.social_test1= req.body.social_test1;
        primaryClass.social_test2= req.body.social_test2;
        primaryClass.social_test3= req.body.social_test3;
        primaryClass.social_exam= req.body.social_exam;
        primaryClass.social_total= additioner(req.body.social_test1, req.body.social_test2, req.body.social_test3, req.body.social_exam) 
        }
        if(req.body.arts_test1){
        primaryClass.arts_test1= req.body.arts_test1;
        primaryClass.arts_test2= req.body.arts_test2;
        primaryClass.arts_test3= req.body.arts_test3;
        primaryClass.arts_exam= req.body.arts_exam;
        primaryClass.arts_total= additioner(req.body.arts_test1, req.body.arts_test2, req.body.arts_test3, req.body.arts_exam) 
        }

        if(req.body.agric_test1){
        primaryClass.agric_test1= req.body.agric_test1;
        primaryClass.agric_test2= req.body.agric_test2;
        primaryClass.agric_test3= req.body.agric_test3;
        primaryClass.agric_exam= req.body.agric_exam;
        primaryClass.agric_total= additioner(req.body.agric_test1, req.body.agric_test2, req.body.agric_test3, req.body.agric_exam) 
        }
        if(req.body.civic_test1){
        primaryClass.civic_test1= req.body.civic_test1;
        primaryClass.civic_test2= req.body.civic_test2;
        primaryClass.civic_test3= req.body.civic_test3;
        primaryClass.civic_exam= req.body.civic_exam;
        primaryClass.civic_total= additioner(req.body.civic_test1, req.body.civic_test2, req.body.civic_test3, req.body.civic_exam)
        }

        if(req.body.crs_test1){
        primaryClass.crs_test1= req.body.crs_test1;
        primaryClass.crs_test2= req.body.crs_test2;
        primaryClass.crs_test3= req.body.crs_test3;
        primaryClass.crs_exam= req.body.crs_exam;
        primaryClass.crs_total= additioner(req.body.crs_test1, req.body.crs_test2, req.body.crs_test3, req.body.crs_exam)
        }
        if(req.body.phe_test1){
        primaryClass.phe_name= req.body.phe_name;
        primaryClass.phe_test1= req.body.phe_test1;
        primaryClass.phe_test2= req.body.phe_test2;
        primaryClass.phe_test3= req.body.phe_test3;
        primaryClass.phe_exam= req.body.phe_exam;
        primaryClass.phe_total= additioner(req.body.phe_test1, req.body.phe_test2, req.body.phe_test3, req.body.phe_exam)
        }

        if(req.body.business_test1){
        primaryClass.business_test1= req.body.business_test1;
        primaryClass.business_test2= req.body.business_test2;
        primaryClass.business_test3= req.body.business_test3;
        primaryClass.business_exam= req.body.business_exam;
        primaryClass.business_total= additioner(req.body.business_test1, req.body.business_test2, req.body.business_test3, req.body.business_exam) 
        }
        if(req.body.french_test1){
        primaryClass.french_test1= req.body.french_test1;
        primaryClass.french_test2= req.body.french_test2;
        primaryClass.french_test3= req.body.french_test3;
        primaryClass.french_exam= req.body.french_exam;
        primaryClass.french_total= additioner(req.body.french_test1, req.body.french_test2, req.body.french_test3, req.body.french_exam) 
        }

       if(req.body.computer_test1){
        primaryClass.computer_test1= req.body.computer_test1;
        primaryClass.computer_test2= req.body.computer_test2;
        primaryClass.computer_test3= req.body.computer_test3;
        primaryClass.computer_exam= req.body.computer_exam;
        primaryClass.computer_total= additioner(req.body.computer_test1, req.body.computer_test2, req.body.computer_test3, req.body.computer_exam) 
        }
        if(req.body.home_econs_test1){
        primaryClass.home_econs_test1= req.body.home_econs_test1;
        primaryClass.home_econs_test2= req.body.home_econs_test2;
        primaryClass.home_econs_test3= req.body.home_econs_test3;
        primaryClass.home_econs_exam= req.body.home_econs_exam;
        primaryClass.home_econs_total= additioner(req.body.home_econs_test1, req.body.home_econs_test2, req.body.home_econs_test3, req.body.home_econs_exam) 
        }

        if(req.body.music_test1){
        primaryClass.music_test1= req.body.music_test1;
        primaryClass.music_test2= req.body.music_test2;
        primaryClass.musci_test3= req.body.music_test3;
        primaryClass.music_exam= req.body.music_exam;
        primaryClass.music_total= additioner(req.body.music_test1, req.body.music_test2, req.body.music_test3, req.body.music_exam) 
        }
        if(req.body.basic_tech_test1){        
        primaryClass.basic_tech_test1= req.body.basic_tech_test1;
        primaryClass.basic_tech_test2= req.body.basic_science_test2;
        primaryClass.basic_tech_test3= req.body.basic_science_test3;
        primaryClass.basic_tech_exam= req.body.basic_tech_exam;
        primaryClass.basic_tech_total= additioner(req.body.basic_tech_test1, req.body.basic_tech_test2, req.body.basic_tech_test3, req.body.basic_tech_exam) 
        }
        if(req.body.writing_test1){
        primaryClass.writing_test1 = req.body.writing_test1;
        primaryClass.writing_test2 = req.body.writing_test2;
        primaryClass.writing_test3 = req.body.writing_test3;
        primaryClass.writing_exam = req.body.writing_exam;
        primaryClass.writing_total = additioner(req.body.writing_test1, req.body.writing_test2, req.body.writing_test3, req.body.writing_exam) 
        }
        if(req.body.phonics_test1){
        primaryClass.phonics_test1 = req.body.phonics_test1;
        primaryClass.phonics_test2 = req.body.phonics_test2;
        primaryClass.phonics_test3 = req.body.phonics_test3;
        primaryClass.phonics_exam =  req.body.phonics_exam;
        primaryClass.phonics_total = additioner(req.body.phonics_test1, req.body.phonics_test2, req.body.phonics_test3, req.body.phonics_exam) 
        }
        if(req.body.quantitative_test1){
        primaryClass.quantitative_test1 = req.body.quantitative_test1;
        primaryClass.quantitative_test2 = req.body.quantitative_test2;
        primaryClass.quantitative_test3 =req.body.quantitative_test3;
        primaryClass.quantitative_exam = req.body.quantitative_exam;
        primaryClass.quantitative_total = additioner(req.body.quantitative_test1, req.body.quantitative_test2, req.body.quantitative_test3, req.body.quantitative_exam) 
        }
        if(req.body.verbal_test1){
        primaryClass.verbal_test1 = req.body.verbal_test1;
        primaryClass.verbal_test2 = req.body.verbal_test2;
        primaryClass.verbal_test3 =req.body.verbal_test3;
        primaryClass.verbal_exam = req.body.verbal_exam;
        primaryClass.verbal_total = additioner(req.body.verbal_test1, req.body.verbal_test2, req.body.verbal_test3, req.body.verbal_exam) 
        }
        primaryClass.teachers_remark = req.body.teachers_remark;
        primaryClass.head_master_remark = req.body.headmaster_remark;
        primaryClass.handwritting= parseInt(req.body.handwritting);
        primaryClass.drawing= parseInt(req.body.drawing);
        primaryClass.games_sport= parseInt(req.body.games_sport);
        primaryClass.reading= parseInt(req.body.reading);
        primaryClass.punctuality=parseInt(req.body.punctuality);
        primaryClass.attendance= parseInt(req.body.attendance);
        primaryClass.hygiene=parseInt(req.body.hygiene);
        primaryClass.attentiveness= parseInt(req.body.attentiveness);
        primaryClass.honesty= parseInt(req.body.honesty);
        primaryClass.neatness=parseInt(req.body.neatness);
        primaryClass.participation=parseInt(req.body.participation);
        primaryClass.save(function(err, jss){  
            if(err){
                console.log("error durring saving",err);
                return;
                } else {                    
                console.log("successfully save, redirecting now..........")
                    res.redirect('/admin/home')
                }
        })   
    // console.log("What was fucking sendt", staff_id, pupil_id, req.body)
});



router.get('/jss_class_report/:id', (req, res) => {
    redirector(req, res);
    let pupil_id = req.params.id;
    let staff_id = req.user._id;
    var all_subjects;
    var staff_pupils_school_id;
    var jss_id;
    var jss_pupil;

    JssClass.findOne({pupil_id: pupil_id}, function(err, pupils){
        if(pupils != null){
            console.log("There are pupils presents")
            jss_pupil = pupils;

            Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
                staff_pupils_school_id = staff_pupils.school_id;
                console.log("this is the iddddd", jss_pupil)  
                res.render('AdminBSBMaterialDesign-master/jss_class', {layout: 'layout/admin.hbs', jss_pupil: jss_pupil, user: req.user, pupil_id:pupil_id,  staff_id:staff_id, school_id:staff_pupils_school_id})
            });
        }
        else{
            let jssClass = new JssClass();
                jssClass.pupil_id = pupil_id;  
                jssClass.staff_id = staff_id;
                jssClass.save(function(err, jss){       
                    if(err){
                        console.log("error durring saving",err);
                        return;
                    } else {                    
                        console.log(jss, "successfully save, redirecting now..........")
                        Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
                            staff_pupils_school_id = staff_pupils.school_id;
                            console.log("this is the iddddd", staff_pupils_school_id)  
                            let jss_pupil = jss;
                            console.log("this are the fucning jss new students",jss_pupil)
                            res.render('AdminBSBMaterialDesign-master/jss_class', {layout: 'layout/admin.hbs', jss_pupil: jss_pupil, user: req.user, pupil_id:pupil_id,  staff_id:staff_id, school_id:staff_pupils_school_id})
                        });
                        
                    }
                });
                
            }
        })
  

   
});
/* Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
    let school_id = staff_pupils.school_id
    console.log("this is the shcool id", school_id)
    //  console.log("this is the user id that mad e", req.user._id, school_id)
    Subject.find({school_id: school_id}, function(err, all_subject){
        res.render('AdminBSBMaterialDesign-master/create_results', {layout: 'layout/admin.hbs', all_subject:all_subject})
    })
    })*/


router.get('/pupils_report/:id', (req, res) => {
    if(req.session.pupil_id || req.user){   
        var user_id = req.user ? req.user._id : decrypt(req.session.pupil_id); 
    let pupil_id = req.params.id;
    let staff_id = user_id
    let school_id;
    let pupil;
    let full_name;
    let class_name;
    let class_id;
    let bSkill;
    let behaviours;
    let commentType;
    //let get the pupils first, middle, lastname
     

            Staff.findOne({user_id: user_id}, function(err, staff_pupils){
                school_id = staff_pupils.school_id
            BSkill.find({school_id:school_id}, function(err, users) {
             // console.log(users)
             bSkill = users
            });
            Behaviour.find({school_id:school_id}, function(err, users) {
             // console.log(users)
             behaviours = users
            });
            CommentType.find({school_id:school_id}, function(err, comments){
                commentType = comments
            })
           
            Subject.find({school_id: school_id}, function(err, all_subject){
                Pupil.findOne({_id: pupil_id}, function(err, staff_pupils){ 
                pupil = staff_pupils
                console.log("all pupils", pupil)

                full_name = pupil.first_name + " " + pupil.middle_name + " " + pupil.last_name
                class_name = pupil.class_name;
                class_id = pupil.class_id
                console.log("these are the bskills",bSkill)
                res.render('AdminBSBMaterialDesign-master/create_results', {layout: 'layout/admin.hbs', behaviours:behaviours, bSkill:bSkill, pupil_id:pupil_id, full_name:full_name, class_name: class_name, class_id:class_id, staff_id:staff_id, school_id:school_id, all_subject:all_subject, commentType:commentType})
          
            });

            })
            });
    }
    else {
        redirector(req, res)
    }
});

router.get('/created_reports', (req, res)=> {
    redirector(req, res);

    let staff_id = req.user._id;
    ReportCard.find({staff_id: staff_id}, function(err, reports){
        let all_reports = reports
        console.log(all_reports)
       res.render('AdminBSBMaterialDesign-master/my_result', {layout: 'layout/admin.hbs', all_reports:reports}) 
    })
})

router.get('/created/:id', (req, res) => {
    redirector(req, res);
    let pupils_id = req.params.id
    console.log(pupils_id)

    ReportCard.find({pupil_id:pupils_id}, function(err, reports){
        let all_reports = reports
        console.log(all_reports)
        res.render('result/index', {layout: false, all_reports:all_reports})     
  // console.log("route reached")
})
})
/*  pupil_id: String,
    staff_id: String,
    term_name: String,
    pupil_name: String,*/

router.post('/create_report_sheet',(req, res) => {
    let pupil_id = req.body.pupil_id
    let staff_id = req.body.staff_id
    let term_name = req.body.term_name
    let pupil_name = req.body.pupil_name
    console.log(pupil_id, staff_id, term_name, pupil_name)

    let reportSheet = new ReportSheet();
        reportSheet.pupil_id = pupil_id;  
        reportSheet.staff_id = staff_id;
        reportSheet.term_name = term_name;
        reportSheet.pupil_name = pupil_name
            reportSheet.save(function(err, jss){       
                if(err){
                    console.log("error durring saving",err);
                    return;
                } else {                    
                    res.status(200).json(jss);                        
                }
    });
});

router.get('/delete_class/:id', (req, res) => {
    let class_id = req.params.id;
    Class.findByIdAndRemove({_id: req.params.id}, 
       function(err, docs){
        if(err) res.json(err);
        else res.redirect('/admin/create_class');
    });
 
})

router.get('/delete_comment_type/:id', (req, res) => {
    let class_id = req.params.id;
    CommentType.findByIdAndRemove({_id: req.params.id}, 
       function(err, docs){
        if(err) res.json(err);
        else res.redirect('/admin/create_comment_type');
    });
 
})


router.get('/delete_pupil/:id', (req, res) => {
    let class_id = req.params.id;
    Pupil.findByIdAndRemove({_id: req.params.id}, 
       function(err, docs){
        if(err) res.json(err);
        else res.redirect('/admin/all_pupils_edit');
    });
 
})

router.get('/delete_subject/:id', (req, res) => {
    let class_id = req.params.id;
    Subject.findByIdAndRemove({_id: req.params.id}, 
       function(err, docs){
        if(err) res.json(err);
        else res.redirect('/admin/register_new_subject');
    });
 
})


/*username: {type:String, required: true},
    password: { type: String, required: true },//TODO--> later change it to required 
    isBishop: {type: Boolean, default:false },  
    isStaff: {type: Boolean, default: false},
    isSchool: {type: Boolean, default: false},
    isTeacher: {type: Boolean, default: false},
    isPupil: {type: Boolean, default: false},
    isParent: {type: Boolean, default: false}, 
    token: String,
    suspended: String,*/
router.post('/create_staff',(req, res) => {
    let class_name;
    let school_name;
    School.findOne({schoolID: req.user._id}, function(err, values){
        console.log("all schools", values)
        school_name = values.name
    })
    Class.findOne({_id: req.body.class}, function(err, values){
        console.log("single class", values)
        class_name = values.name
    });
    Auth.findOne({username: req.body.username}, function(err, vals){
        if (vals==null) {
            // 
            console.log("username not taken")
            var passwordhash = sha512(req.body.password)
            let auth = new Auth();
                auth.username = req.body.username;
                auth.password = passwordhash;
                auth.isStaff = true;        
                auth.save(function(err, auth_details){       
                    if(err){
                        console.log("error durring saving",err);
                        return;
                    } else {                    
                        // lets get the auth_details
                        let submitted_id = auth_details.id;
                        let staff = new Staff();
                            staff.user_id = submitted_id; 
                            staff.sex = req.body.sex;                  
                            staff.class_id = req.body.class;
                            staff.class_name = class_name;
                            staff.subject_id = req.body.subject_id;
                            staff.staffType_id = req.body.staffType_id;
                            staff.school_id = req.user._id
                            staff.first_name = req.body.first_name 
                            staff.middle_name = req.body.middle_name
                            staff.last_name = req.body.last_name;
                            staff.school_name = school_name;
                            staff.phone = req.body.phone;
                            staff.save(function(err, doc){       
                                if(err){
                                    console.log("error durring saving",err);
                                    return;
                                } else {                    
                                    console.log(doc, "successfully save, redirecting now..........")
                                    res.redirect('/admin/home');
                                }
                            });

                    }
                });
        }
        else if(vals !=null){
            //http://localhost:3000/admin/register_staff
            console.log("username taken")

            Stafftype.find({school_id: req.user._id}, function(err, staffType){      
                console.log("this is the categories",staffType)
                if (err) throw err;
            Subject.find({school_id: req.user._id}, function(err, subject){      
                console.log("this is the categories",subject)
                if (err) throw err; 
            School.findOne({schoolID: req.user._id}, function(err, school){
                let singleSchool = school
                console.log("this is the single school vals", singleSchool)

            Class.find({school_id: req.user._id}, function(err, myClass){      
                console.log("this is the categories",myClass)
                if (err) throw err;  
            res.render('AdminBSBMaterialDesign-master/staff_form', {layout: 'layout/admin.hbs', singleSchool:singleSchool, user: req.user, staffType:staffType, subject:subject, myClass:myClass, reg_message: "username taken already"})
                
            })
        })
        })

    });
            }
        })
   

});



router.get('/senior_class_report/:id', (req, res) => {
    let pupil_id = req.params.id;
    let staff_id = req.user._id;
    var all_subjects;
    var staff_pupils_school_id;
  

    Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
        staff_pupils_school_id = staff_pupils.school_id;
        console.log("this is the iddddd", staff_pupils_school_id)

    Subject.find({school_id:staff_pupils_school_id}, function(err, subjects){
        console.log("all_subjects", subjects)

    ReportCard.find({staff_id:staff_id}, function(err, reportCards){
        console.log("all_subjects", reportCards)    
    res.render('AdminBSBMaterialDesign-master/ss_class', {layout: 'layout/admin.hbs', user: req.user, pupil_id:pupil_id,  staff_id:staff_id, subjects:subjects, school_id:staff_pupils_school_id, reportCards:reportCards})
});
});
  });
});

router.get('/primary_report/:id', (req, res) => {
    let pupil_id = req.params.id;
    let staff_id = req.user._id;
    var all_subjects;
    var staff_pupils_school_id;
  

    Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
        staff_pupils_school_id = staff_pupils.school_id;
        console.log("this is the iddddd", staff_pupils_school_id)

    Subject.find({school_id:staff_pupils_school_id}, function(err, subjects){
        console.log("all_subjects", subjects)

    ReportCard.find({staff_id:staff_id}, function(err, reportCards){
        console.log("all_subjects", reportCards)    
    res.render('AdminBSBMaterialDesign-master/pri_class', {layout: 'layout/admin.hbs', user: req.user, pupil_id:pupil_id,  staff_id:staff_id, subjects:subjects, school_id:staff_pupils_school_id, reportCards:reportCards})
});
});
  });
});

router.get('/decision_page/:id', (req, res) => {
    redirector(req, res)
    let pupil_id = req.params.id;
    let staff_id = req.user._id;
    res.render('AdminBSBMaterialDesign-master/decision_page', {layout: 'layout/admin.hbs', user: req.user, pupil_id:pupil_id,  staff_id:staff_id})
});



router.post('/create_pupil_basic', (req, res, next) => {
    let all_pupils = req.body;
    // redirector(req, res)
    console.log(all_pupils)
    PupilBasic.insertMany(all_pupils, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_pupil_behaviour', (req, res, next) => {
    let all_pupils = req.body;
    // redirector(req, res)
    console.log(all_pupils)
    PupilBehaviour.insertMany(all_pupils, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_pupil_content', (req, res, next) => {
    let all_pupils = req.body;
    // redirector(req, res)
    console.log(all_pupils)
    PupilContent.insertMany(all_pupils, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});


router.post('/create_pupil', (req, res, next) => {
    let all_pupils = req.body;
    redirector(req, res)
    console.log(all_pupils)
    Pupil.insertMany(all_pupils, { ordered: false }, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_result', (req, res, next) => {
    let all_pupils = req.body;
    // redirector(req, res)
    // console.log(all_pupils)
    ReportCard.insertMany(all_pupils, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_upil_page')
        res.status(200).json(docs);
      }
    }); 
});





router.post('/create_class', (req, res, next) => {
    let all_class = req.body;
    redirector(req, res)
    console.log(all_class)
    Class.insertMany(all_class, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_subject', (req, res, next) => {
    let all_subjects = req.body;
    redirector(req, res)
    console.log(all_subjects)
    Subject.insertMany(all_subjects, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_bskill', (req, res, next) => {
    let all_subjects = req.body;
    redirector(req, res)
    console.log(all_subjects)
    BSkill.insertMany(all_subjects, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_behaviour', (req, res, next) => {
    let all_subjects = req.body;
    redirector(req, res)
    console.log(all_subjects)
    Behaviour.insertMany(all_subjects, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

router.post('/create_comment_type', (req, res, next) => {
    let all_subjects = req.body;
    // redirector(req, res)
    console.log(all_subjects)
    PupilContent.insertMany(all_subjects, function (err, docs) {
      if (err){ 
          return console.error(err);
          res.status(400).json(err);
      } else {
        // console.log("Multiple documents inserted to Collection", docs);
        // res.redirect('/admin/create_pupil_page')
        res.status(200).json(docs);
      }
    }); 
});

// router.post('/login', passport.authenticate('local',
//         { failureRedirect: 'login',
//             failureFlash: true,
//             failureMessage: "Invalid username or password" }),
//     (req, res, next) => {
//         req.session.save((err) => {
//         if (err) {                 
//             res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Invalid Username or passsword"}})                
//         }     
//         console.log(req.user);//to get the current session saved
//         res.redirect('/admin/home');
//         });
// });
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
    if(err){                 
        res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Invalid Username or passsword"}})                
    }
    if (!user) {
      // *** Display message without using flash option
      // re-render the login form with a message
      return res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Invalid Username or passsword"}})
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/admin/home');
    });
  })(req, res, next);
})

/*if (err) {                 
            res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{error: "Invalid Username or passsword"}})                
        }*/

/*app.get('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      // *** Display message without using flash option
      // re-render the login form with a message
      return res.render('login', { message: info.message })
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});*/

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.render('AdminBSBMaterialDesign-master/index', {layout: false, message:{success: "Successfully Sign out"}})                
  });
});

router.get('/all_staffs', (req, res, next) => {
    redirector(req, res);
    Staff.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_staffs', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})
//heredity
router.get('/all_pupils_edit', (req, res, next) => {
    redirector(req, res);
    Class.find({school_id: req.user._id}, function(err, all_class){      
        console.log("this is the categories",all_class)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
    res.render('AdminBSBMaterialDesign-master/all_pupils_edit', {layout: 'layout/admin.hbs', user: req.user, all_class:all_class})
    })
});
router.get('/all_pupils', (req, res, next) => {
    redirector(req, res);
    Class.find({school_id: req.user._id}, function(err, all_class){      
        console.log("this is the categories",all_class)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
    res.render('AdminBSBMaterialDesign-master/all_pupils', {layout: 'layout/admin.hbs', user: req.user, all_class:all_class})
    })
});
router.get('/all_pupils_in_single_class/:id', (req, res, next) => {
    let classid = req.params.id;
    console.log("This is the motherfucking class id",classid);
    redirector(req, res);
    Pupil.find({class_id:classid}, function(err, all_pupils){
        console.log(all_pupils)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
    Class.findOne({_id: req.params.id}, function(err, single_class){      
        console.log("this is the categories",single_class)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
        res.render('AdminBSBMaterialDesign-master/all_pupils_in_single_class', {layout: 'layout/admin.hbs', single_class:single_class, user: req.user, all_pupils:all_pupils})
    })
})
})
router.get('/all_pupils_in_single_class_edit/:id', (req, res, next) => {
    let classid = req.params.id;
    console.log("This is the motherfucking class id",classid);
    redirector(req, res);
    Pupil.find({class_id:classid}, function(err, all_pupils){
        console.log(all_pupils)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
    Class.findOne({_id: req.params.id}, function(err, single_class){      
        console.log("this is the categories",single_class)
        if (err) throw err;  
        // console.log("this is the user id that mad e", state)
        res.render('AdminBSBMaterialDesign-master/all_pupils_in_single_class_edit', {layout: 'layout/admin.hbs', single_class:single_class, user: req.user, all_pupils:all_pupils})
    })
})
})


router.get('/all_parents', (req, res, next) => {
    redirector(req, res);
    Parent.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_parents', {layout: 'layout/admin.hbs', user: req.user, all_parent: all_parent})
    });
})

router.get('/all_class', (req, res, next) => {
    redirector(req, res);
    Class.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_class', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})

router.get('/all_subjects', (req, res, next) => {
    redirector(req, res);
    Subject.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_subjects', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})

router.get('/all_subjects_staff', (req, res, next) => {
    redirector(req, res);
    //we try to find the user_id within the staff model
    //
    Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
        User.findOne({_id: req.user._id}, function(err, user){
            if(user.isStaff === true){
                console.log("staff_pupils", staff_pupils.school_id)
                //to get a the staff from the staff table using its user_id
                let staff_pupils_school_id = staff_pupils.school_id    
            }
        });
    });
    ReportCard.find({school_id: staff_pupils_school_id}, function(err, all_reports) {
    Pupil.find({school_id: staff_pupils_school_id}, function(err, all_pupils) {
    Subject.find({school_id: staff_pupils_school_id}, function(err, all_subject) {
    Class.find({school_id: staff_pupils_school_id}, function(err, all_class) {
   
        res.render('AdminBSBMaterialDesign-master/all_subjects', {layout: 'layout/admin.hbs', user: req.user, all_class:all_class, all_subject:all_subjects, all_pupils: all_pupils, all_reports: all_reports})
    });
    });
});
});
})




router.get('/all_parents_staff', (req, res, next) => {
    redirector(req, res);
    Subject.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_subjects', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})
router.get('/all_schools', (req, res, next) => {
    redirector(req, res);
    School.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_schools', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})

// router.get('*', function(req, res){
//   res.send('what???', 404);
// });
export default router;