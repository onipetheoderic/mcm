import express from 'express';
import passport from 'passport';
import crypto from 'crypto';
import path from 'path';
import fileExtension from 'file-extension';
import fs from 'fs';
import multer from 'multer';
// 5d1e2e3b344ba144a107aae1
// 5d1e2e3b344ba144a107aae1',


var imageName;
import User from '../models/user';
import Parent from '../models/parent';
import Pupil from '../models/pupil';
import Role from '../models/role';
import Product from '../models/product';
import Setting from '../models/setting';
import Carousel from '../models/carousel';
import School from '../models/school';
import Stafftype from '../models/staffType';
import Staff from '../models/staff';
import Subject from '../models/subject';
import Category from '../models/category';
import Class from '../models/class';
const state = require('../models/state.json');

const router = express.Router();


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
        console.log("this is the carousel count", subject_count);
    
    Parent.find({school_id: req.user._id}).exec(function (err, parents){
        if(err) {
            console.log(err)
        }
        var parent_count = parents.length;
        console.log("this is the carousel count", parent_count);

    Pupil.find({school_id: req.user._id}).exec(function (err, pupils){

        if(err) {
            console.log(err)
        }
        var pupil_count = pupils.length;
        console.log("this is the carousel count", pupil_count);


    Stafftype.find({school_id: req.user._id}).exec(function (err, staffType){
        if(err) {
            console.log(err)
        }
        var stafftype_count = staffType.length;
        console.log("this is the carousel count", stafftype_count);

    Staff.find({user_id: req.user._id}).exec(function (err, staff_zone){
         if(err) {
            console.log(err)
        }
        var staff_zone_count = staff_zone.length;
        console.log("this is the staff_zone length", staff_zone_count)
    
    Staff.findOne({user_id: req.user._id}, function(err, staff_pupils){
        var staff_pupilss_count;
        var pupilss_count;
        var subs_count;
        var class_counters;
        var parent_counters;
        User.findOne({_id: req.user._id}, function(err, user){
            if(user.isStaff === true){
                console.log("staff_pupils", staff_pupils.school_id)
        //to get a the staff from the staff table using its user_id
        let staff_pupils_school_id = staff_pupils.school_id

        Staff.find({school_id: staff_pupils_school_id}).exec(function (err, staff_pupilss){
            if(err) {
                console.log(err)
            }
        staff_pupilss_count = staff_pupilss.length;            
        })

        Pupil.find({school_id: staff_pupils_school_id}).exec(function (err, pupilss){
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
        Class.find({school_id: staff_pupils_school_id}).exec(function (err, class_counter){
            if(err) {
                console.log(err)
            }
        class_counters = class_counter.length; 
        console.log("this is from the class ocunter", class_counters) 
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
    
    
    res.render('AdminBSBMaterialDesign-master/dashboard', {layout: 'layout/admin.hbs', user: req.user, stafftype_count: stafftype_count, subject_count: subject_count, staff_count: staff_count, class_count: class_count, subject_count: subject_count, parent_count: parent_count, pupil_count: pupil_count, skool_count: skool_count, staff_zone_count: staff_zone_count, staff_pupilss_count: staff_pupilss_count, pupilss_count:pupilss_count,  class_counters: class_counters, subs_count: subs_count, parent_counters: parent_counters})
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


router.get('/edit_school', (req, res) => {    
    res.render('AdminBSBMaterialDesign-master/school_form', {layout: 'layout/admin.hbs', user: req.user})
});

router.get('/create_school', (req, res) => {    
    res.render('AdminBSBMaterialDesign-master/create_school', {layout: 'layout/admin.hbs', user: req.user})
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
// List/View Routes Below



router.get('/register_staff', (req, res) => {
    redirector(req, res)
    Stafftype.find({school_id: req.user._id}, function(err, staffType){      
        console.log("this is the categories",staffType)
        if (err) throw err;
    Subject.find({school_id: req.user._id}, function(err, subject){      
        console.log("this is the categories",subject)
        if (err) throw err; 
    
    Class.find({school_id: req.user._id}, function(err, myClass){      
        console.log("this is the categories",myClass)
        if (err) throw err;  
        res.render('AdminBSBMaterialDesign-master/staff_form', {layout: 'layout/admin.hbs', user: req.user, staffType:staffType, subject:subject, myClass:myClass})
});
});
});
});






router.get('/register_new_staff_type', (req, res) => {
    redirector(req, res)
    console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_staff_type', {layout: 'layout/admin.hbs', user: req.user})
})

router.get('/register_new_subject', (req, res) => {
    redirector(req, res)
    console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_subject', {layout: 'layout/admin.hbs', user: req.user})
})

router.get('/create_class', (req, res, next) => {
    redirector(req, res)
 console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_class', {layout: 'layout/admin.hbs', user: req.user})
})
router.get('/create_subject', (req, res, next) => {
    redirector(req, res)
 console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_subject', {layout: 'layout/admin.hbs', user: req.user})
})

router.get('/create_parent', (req, res, next) => {
   redirector(req, res)
 console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/parent_form', {layout: 'layout/admin.hbs', user: req.user, state:state})
})

router.get('/create_pupil', (req, res, next) => {
    redirector(req, res)
    Subject.find({school_id: req.user._id}, function(err, subject){      
        console.log("this is the categories",subject)
        if (err) throw err; 
    Parent.find({school_id: req.user._id}, function(err, parent){      
        console.log("this is the categories",parent)
        if (err) throw err; 
    
    Class.find({school_id: req.user._id}, function(err, myClass){      
        console.log("this is the categories",myClass)
        if (err) throw err;  
        console.log("this is the user id that mad e", state)
    res.render('AdminBSBMaterialDesign-master/pupil_form', {layout: 'layout/admin.hbs', user: req.user, state:state, myClass:myClass, subject:subject, parent:parent})
});
});
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
            res.redirect('/admin/home')
      
        }
    });

});
/*majorColor: String,
    minorColor: String,
    thirdColor: String,
    fourthColor: String,
    latitude: String,
    longitude: String,
    schoolDescription: String,
    proprietorName: String,
    schoolType: String,
    hmName: String,
    bigSlogan: 
    bigImage: String,
    mediumImage: String,
    small_historic_quote: {type: String, default: "In the history of modern school, there is probably no greater leap forward than building the future of your child with us"},
    advertisement_text_header: {type: String, default: "Over 20 First-Class Graduates produced every year, are former students of "},
    advertisement_text_description: {type: String, default: "Yearly more than 20 First-Class graduates in Universities across Nigeria and the Whole world, are former student/pupils of our Great School. So therefore the best asset you can give your Child is proper foundation, which is what we give our pupils/students"},
    advertisement_text_header1: {type: String, default: "is not just a School, but an EDUCATION itself"},
    advertisement_text_description1: {type: String, default: " Albert Einstein: Education is what remains after one has forgotten what one has learned in school. We believe Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life."},
    logo: {type: String, default: "logo.png"},
    visionStatement: String,
    missionStatement: String,*/

router.post('/create_school', (req, res, next) => {
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
                res.render('AdminBSBMaterialDesign-master/school_form', {layout: false, message:{error:err}})
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
                // rd goes here
               
                else {     
                    school.creator_id = req.user._id; 
                    school.schoolID = req.user._id;
                    school.name = req.body.name;
                    school.majorColor = req.body.majorColor;
                    school.minorColor = req.body.minorColor;
                    school.thirdColor = req.body.thirdColor;

                    school.fourthColor = req.body.fourthColor;
                    school.latitude = req.body.latitude;
                    school.longitude = req.body.longitude
                    school.schoolDescription = req.body.schoolDescription;
                    school.proprietorName = req.body.proprietorName;
                    school.schoolType = req.body.schoolType;
                    school.hmName = req.body.hmName;
                    school.bigSlogan = req.body.bigSlogan;
                    school.bigImage = req.body.bigImage;
                    school.mediumImage = req.body.mediumImage;
                    school.visionStatement = req.body.visionStatement;
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
                res.render('AdminBSBMaterialDesign-master/login', {layout: false, message:{success: "successfully registered, now login"}})
                });
            });
     });

     });


/**/


router.post('/create_staff', (req, res, next) => {
    let current_id = req.user._id

    let staff = new Staff(); 
      
     
    User.register(new User({ username: req.body.username,
       user_name: req.body.user_name,
       isStaff: true,
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
                    staff.user_id = current_user_id; 
                    staff.role_id = current_school_id;
                    staff.sex = req.body.sex;
                    staff.dob = req.body.dob;
                    staff.salary = req.body.salary;
                    staff.class_id = req.body.class_id;
                    staff.subject_id = req.body.subject_id;
                    staff.staffType_id = req.body.staffType_id;
                    staff.school_id = current_id;
                    staff.address = req.body.address;
                    staff.first_name = req.body.first_name 
                    staff.middle_name = req.body.middle_name
                    staff.last_name = req.body.last_name;
                    // staff.school_name = school_name;
                    staff.phone = req.body.phone;
                    staff.save(function(err, doc){       
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

router.post('/create_parent', (req, res, next) => {
    let current_id = req.user._id
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





router.post('/create_pupil', (req, res, next) => {
    let current_id = req.user._id
    let pupil = new Pupil();  
    User.register(new User({ username: req.body.username,
       user_name: req.body.user_name,
       isPupil: true,
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
                    pupil.user_id = current_user_id; 
                    pupil.role_id = current_school_id;      
                    pupil.parent_id = req.body.parent_id;
                    pupil.sex = req.body.sex;
                    pupil.favourite_subject = req.body.favourite_subject;
                    pupil.state_of_origin = req.body.state_of_origin;
                    pupil.religion = req.body.religion;
                    pupil.church_attended = req.body.church_attended;
                    pupil.school_id = current_id;
                    pupil.current_class = req.body.current_class;
                    pupil.phone = req.body.phone
                    pupil.lga_of_origin = req.body.lga_of_origin;
                    pupil.place_of_birth = req.body.place_of_birth;
                    pupil.dob = req.body.dob;
                    pupil.address = req.body.address;
                    pupil.first_name = req.body.first_name 
                    pupil.middle_name = req.body.middle_name
                    pupil.last_name = req.body.last_name;
                    // pupil.school_name = school_name;
                    pupil.phone = req.body.phone;
                    pupil.save(function(err, doc){       
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

router.get('/all_staffs', (req, res, next) => {
    redirector(req, res);
    Staff.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_staffs', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})

router.get('/all_pupils', (req, res, next) => {
    redirector(req, res);
    Pupil.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_pupils', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})

router.get('/all_parents', (req, res, next) => {
    redirector(req, res);
    Parent.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_parents', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
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


router.get('/all_schools', (req, res, next) => {
    redirector(req, res);
    School.find({school_id: req.user._id}, function(err, all_staffs) {
   
         res.render('AdminBSBMaterialDesign-master/all_schools', {layout: 'layout/admin.hbs', user: req.user, all_staffs: all_staffs})
    });
})


export default router;