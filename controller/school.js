import User from '../models/user';
import School from '../models/school';
import Role from '../models/role';
import passport from 'passport';

const redirector = (req, res) =>{
 if(!req.user){
        res.redirect('/admin/login');
    }   
}

exports.createSchool = function(req, res) {
	redirector(req, res)
    res.render('AdminBSBMaterialDesign-master/create_school', {layout: 'layout/admin.hbs', user: req.user})
}

exports.createSchoolPost = function(req, res) {
	redirector(req, res)
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

}

