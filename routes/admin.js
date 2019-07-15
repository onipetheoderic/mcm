import express from 'express';
import passport from 'passport';
import crypto from 'crypto';
const path = require("path");
var fileExtension = require('file-extension'); 
import DataLog from '../models/dataLog'
import User from '../models/user';
import Parent from '../models/parent';
import PupilClass from '../models/pupilClass';
import Pupil from '../models/pupil';
import Role from '../models/role';
import ReportCard from '../models/reportCard';
import JssClass from '../models/jssClass';
import ReportSubject from '../models/reportSubject';
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
        var report_subjecter;
        var report_counter;
        var people_counter;
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
    
    
    res.render('AdminBSBMaterialDesign-master/dashboard', {layout: 'layout/admin.hbs', user: req.user, stafftype_count: stafftype_count, subject_count: subject_count, staff_count: staff_count, class_count: class_count, subject_count: subject_count, parent_count: parent_count, pupil_count: pupil_count, skool_count: skool_count, staff_zone_count: staff_zone_count, staff_pupilss_count: staff_pupilss_count, p_staff_pupilss_count: p_staff_pupilss_count, pupilss_count:pupilss_count, p_pupilss_count: p_pupilss_count,  class_counters: class_counters, subs_count: subs_count, p_subs_count: p_subs_count, parent_counters: parent_counters, report_counter:report_counter, report_subjecter: report_subjecter, people_counter: people_counter})
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
router.get('/register', (req, res) => {
    User.find({}).exec(function (err, skool){
        if(skool.length>=2){
            res.redirect('/admin/login')
        }        
    res.render('AdminBSBMaterialDesign-master/register', {layout: false})
});
});

router.get('/edit_school/:id', (req, res) => {  
    redirector(req, res)  
    let school_id = req.params.id;
    //lets find the school by its id
    School.findOne({_id:school_id}, function(err, school){
    let singleSchool = school
    res.render('AdminBSBMaterialDesign-master/school_form', {layout: 'layout/admin.hbs', singleSchool:singleSchool})
    })
});

router.get('/edit_pupil/:id', (req, res) => {  
    redirector(req, res)  
    let myClassess;
    let pupil_id = req.params.id;
    //lets find the school by its id
    Pupil.findOne({user_id:pupil_id}, function(err, pupil){
    let singlePupil = pupil
    Class.find({school_id: req.user._id}, function(err, myClass){ 
                myClassess = myClass;
    res.render('AdminBSBMaterialDesign-master/edit_pupil_page', {layout: 'layout/admin.hbs', myClassess:myClassess, state:state, singlePupil: singlePupil})
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



router.get('/create_report_card', (req, res) => {  
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
              
         
            Pupil.find({school_id: staff_pupils_school_id}, function(err, pupils){ 
                res.render('AdminBSBMaterialDesign-master/report_card', {layout: 'layout/admin.hbs', staff_id: staff_id, staff_pupils_school_id: staff_pupils_school_id, myClass:myClass, pupils:pupils, myClassess: myClassess})
            })
               })
            }
        });
    });
});

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
    console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_subject', {layout: 'layout/admin.hbs', user: req.user})
})

router.get('/create_class', (req, res, next) => {
    redirector(req, res)
 console.log("this is the user id that mad e", req.user._id)
    res.render('AdminBSBMaterialDesign-master/register_new_class', {layout: 'layout/admin.hbs', user: req.user})
})

// router.get('/edit_class', (req, res, next) => {
//     redirector(req, res)
//     Class.find({}, function(err, all_class) {
//         let all_classess = all_class
//         res.render('AdminBSBMaterialDesign-master/edit_class', {layout: 'layout/admin.hbs', all_classess})  
//     });
   
// })




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
            res.redirect('/admin/home')
      
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
    console.log(req.body)
    let bigImage = req.files.bigImage;
    let mediumImage = req.files.mediumImage;
    let mediumImage2 = req.files.mediumImage2;
    let logo = req.files.logo;  
    let logoMedium = req.files.logoMedium;
    let staff_image = req.files.staff_image;
    let staff_image2 = req.files.staff_image2;
    let staff_image3 = req.files.staff_image3;
    let staff_image4 = req.files.staff_image4;


    let bigImage_name = imagePlacerAndNamer(req, res, bigImage);
    let mediumImage2_name =imagePlacerAndNamer(req, res, mediumImage2);
    let mediumImage_name = imagePlacerAndNamer(req, res, mediumImage);   
    let logo_name = imagePlacerAndNamer(req, res, logo);
    let logoMedium_name =imagePlacerAndNamer(req, res, logoMedium);     
    let staff_image_name =imagePlacerAndNamer(req, res, staff_image);
    let staff_image2_name =imagePlacerAndNamer(req, res, staff_image2);
    let staff_image3_name =imagePlacerAndNamer(req, res, staff_image3);
    let staff_image4_name =imagePlacerAndNamer(req, res, staff_image4);
    School.findByIdAndUpdate(result_id,
    { 
        "name": req.body.name,
        "majorColor" :req.body.majorColor,
        "minorColor" :req.body.minorColor,
        "thirdColor" :req.body.thirdColor,
        "fourthColor" :req.body.fourthColor,
        "latitude" :req.body.latitude,
        "longitude" :req.body.longitude,
        "schoolDescription" :req.body.schoolDescription,
        "proprietorName" :req.body.proprietorName,
        "schoolType" :req.body.schoolType,
        "hmName" :req.body.hmName,
        "bigSlogan" :req.body.bigSlogan,
        "bigImage" :bigImage_name,               
        "logo" :logo_name,                
        "logoMedium" :logoMedium_name,                
        "mediumImage":mediumImage_name,
        "mediumImage2":mediumImage2_name,
        "facebook": req.body.facebook,
        "twitter": req.body.twitter,
        "staff_image" :staff_image_name,
        "staff_image2" :staff_image2_name,
        "staff_image3" :staff_image3_name,
        "staff_image4" :staff_image4_name,
        "visionStatement":req.body.visionStatement,
        "missionStatement":req.body.missionStatement,
        "small_historic_quote": req.body.small_historic_quote,
        "staff_fullname" :req.body.staff_fullname,
        "staff_fullname2" :req.body.staff_fullname2,
        "staff_fullname3" :req.body.staff_fullname3,
        "staff_fullname4" :req.body.staff_fullname4,
        "staff_position" :req.body.staff_position,
        "staff_position2" :req.body.staff_position2,
        "staff_position3" :req.body.staff_position3,
        "staff_position4" :req.body.staff_position4,
        "staff_comment" :req.body.staff_comment,
        "staff_comment2" :req.body.staff_comment2,
        "staff_comment3" :req.body.staff_comment3,
        "staff_comment4" :req.body.staff_comment4,

    }).exec(function(err, updated_pupil){
    if(err) {
       console.log(err);
       
    } else {
        
        res.redirect("/admin/view_all_schools")
    }
    });
})

router.post('/update_pupil/:id', (req, res) => {
    redirector(req, res)
    let result_id = req.params.id;
    console.log(req.body)
    let bigImage = req.files.passport_name;
    let bigImage_name = imagePlacerAndNamer(req, res, bigImage);
    Pupil.findByIdAndUpdate(result_id,
    { 
       
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "middle_name": req.body.middle_name,
        "phone": req.body.phone,
        "dob": req.body.dob,
        "sex": req.body.sex,
        "state_of_origin": req.body.state_of_origin,
        "class_name": req.body.class_name,
        "class_id": req.body.class_id,
        "church_attended":req.body.church_attended,
        "expelled":req.body.expelled,
        "place_of_birth": req.body.place_of_birth,
        "suspended":req.body.suspended,
        "expelled": req.body.expelled,
        "church_attended" :req.body.church_attended,
        "school_fees_paid" :req.body.school_fees_paid,
        "religion":req.body.religion,
        "passport_name": bigImage_name,               
        
    }).exec(function(err, updated_pupil){
    if(err) {
       console.log(err);
       
    } else {
        
        res.redirect("/admin/all_pupils")
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

   let bigImage = req.files.bigImage;
   let mediumImage = req.files.mediumImage;
   let mediumImage2 = req.files.mediumImage2;
   let logo = req.files.logo;  
   let logoMedium = req.files.logoMedium;
   let staff_image = req.files.staff_image;
   let staff_image2 = req.files.staff_image2;
   let staff_image3 = req.files.staff_image3;
   let staff_image4 = req.files.staff_image4;


    let bigImage_name = imagePlacerAndNamer(req, res, bigImage);
    let mediumImage2_name =imagePlacerAndNamer(req, res, mediumImage2);
    let mediumImage_name = imagePlacerAndNamer(req, res, mediumImage);   
    let logo_name = imagePlacerAndNamer(req, res, logo);
    let logoMedium_name =imagePlacerAndNamer(req, res, logoMedium);     
    let staff_image_name =imagePlacerAndNamer(req, res, staff_image);
    let staff_image2_name =imagePlacerAndNamer(req, res, staff_image2);
    let staff_image3_name =imagePlacerAndNamer(req, res, staff_image3);
    let staff_image4_name =imagePlacerAndNamer(req, res, staff_image4);
    console.log("this is the image name:")   


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
                    school.latitude = req.body.latitude;
                    school.longitude = req.body.longitude
                    school.schoolDescription = req.body.schoolDescription;
                    school.proprietorName = req.body.proprietorName;
                    school.schoolType = req.body.schoolType;
                    school.hmName = req.body.hmName;

                school.bigSlogan = req.body.bigSlogan;
                school.bigImage = bigImage_name;               
                school.logo = logo_name;                
                school.logoMedium = logoMedium_name;                
                school.mediumImage = mediumImage_name;
                school.mediumImage2 = mediumImage2_name;
                school.staff_image = staff_image_name;
                school.staff_image2 = staff_image2_name;
                school.staff_image3 = staff_image3_name;
                school.staff_image4 = staff_image4_name;
                school.facebook = req.body.facebook;
                school.twitter = req.body.twitter;
                school.staff_fullname = req.body.staff_fullname;
                school.staff_fullname2= req.body.staff_fullname2;
                school.staff_fullname3= req.body.staff_fullname3;
                school.staff_fullname4= req.body.staff_fullname4;
                school.staff_position= req.body.staff_position;
                school.staff_position2= req.body.staff_position2;
                school.staff_position3= req.body.staff_position3;
                school.staff_position4= req.body.staff_position4;
                school.staff_comment= req.body.staff_comment;
                school.staff_comment2= req.body.staff_comment2;
                school.staff_comment3= req.body.staff_comment3;
                school.staff_comment4= req.body.staff_comment4;
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



router.post('/create_staff', (req, res, next) => {
    let current_id = req.user._id
    let my_passport = req.files.passport;
    let school_name;
    let class_name;
    let passport_name = imagePlacerAndNamer(req, res, my_passport);
    School.findOne({schoolID: req.user._id}, function(err, values){
        console.log("all schools", values)
        school_name = values.name
    })
    Class.findOne({_id: req.body.class}, function(err, values){
        console.log("all schools", values)
        class_name = values.name
    }) 

    let staff = new Staff();     
    let dataLog = new DataLog();
     
    User.register(new User({ username: req.body.username,
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
                res.render('AdminBSBMaterialDesign-master/staff_form', {layout: 'layout/admin', message:{error:err}})
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
                 console.log("this is the current user_id", current_id, req.user._id)  
                    // var schoolName = getNameFromModelUsingId("School", req.user._id)
                    
                    dataLog.message = "A new staff has been created by: "+ school_name+ " School"
                    dataLog.school_id = current_id;
                    staff.user_id = current_user_id; 
                    staff.passport_name = passport_name;
                    staff.role_id = current_school_id;
                    staff.sex = req.body.sex;
                    staff.dob = req.body.dob;
                    staff.salary = req.body.salary;
                    staff.class_id = req.body.class;
                    staff.class_name = class_name;
                    staff.subject_id = req.body.subject_id;
                    staff.staffType_id = req.body.staffType_id;
                    staff.school_id = current_id;
                    staff.address = req.body.address;
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
                      
                        }
                    });
                    dataLog.save(function(err, doc){       
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
router.get('/all_pupils_scores', (req, res, next) => {
     redirector(req, res)
    let current_staff_id = req.user._id
    PupilClass.find({staff_id: current_staff_id}).exec(function (err, pupil_class){
        if(err) {
            console.log(err)
        }

        let pupil_class_results = pupil_class
        console.log("these are the user details: ",pupil_class_results)
    // lets use pupil's id within the db to get the pupils details 
    // Pupils.findOne({user_id: pupil_class_results.})
        res.render('AdminBSBMaterialDesign-master/pupils_result', {layout: 'layout/admin.hbs', pupil_class_results: pupil_class})
    });
})

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
        
        res.render('AdminBSBMaterialDesign-master/view_pupil_result', {layout: false, pupil_class: pupil_class})
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
        "head_master_remark": req.body.head_master_remark,
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
        primaryClass.head_master_remark = req.body.head_master_remark;
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

router.get('/pupils_report/:id', (req, res) => {
    redirector(req, res);
    let pupil_id = req.params.id;
    let staff_id = req.user._id;
    //let get the pupils first, middle, lastname
    User.findOne({_id: pupil_id}, function(err, staff_pupils){ 
        let pupil = staff_pupils


        console.log("this is the pupil_id",pupil_id)     
        console.log("this is the pupil data",pupil)
        res.render('AdminBSBMaterialDesign-master/report', {layout: 'layout/admin.hbs', user: req.user, pupil: pupil,  staff_id:staff_id})
    });

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





router.post('/create_pupil', (req, res, next) => {
    let current_id = req.user._id
    let my_passport = req.files.passport;
    
    let school_name;
    let class_name;
    let passport_name = imagePlacerAndNamer(req, res, my_passport);
    School.findOne({schoolID: req.user._id}, function(err, values){
        console.log("all schools", values)
        school_name = values.name
    })
    Class.findOne({_id: req.body.class}, function(err, values){
        console.log("all schools", values)
        class_name = values.name
    }) 

    
    let dataLog = new DataLog();
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
                    dataLog.message = "A new staff has been created by: "+ school_name+ " School"
                    dataLog.school_id = current_id;
                    pupil.user_id = current_user_id; 
                    pupil.passport_name = passport_name;
                    pupil.role_id = current_school_id;      
                    pupil.parent_id = req.body.parent_id;
                    pupil.sex = req.body.sex;
                    pupil.favourite_subject = req.body.favourite_subject;
                    pupil.state_of_origin = req.body.state_of_origin;
                    pupil.religion = req.body.religion;
                    pupil.church_attended = req.body.church_attended;
                    pupil.school_id = current_id;
                    pupil.class_id = req.body.class;
                    pupil.class_name = class_name;
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
                    dataLog.save(function(err, doc){       
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
    Pupil.find({school_id: req.user._id}, function(err, all_pupils) {
   console.log(all_pupils)
        res.render('AdminBSBMaterialDesign-master/all_pupils', {layout: 'layout/admin.hbs', user: req.user, all_pupils: all_pupils})
    });
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

router.get('*', function(req, res){
  res.send('what???', 404);
});
export default router;