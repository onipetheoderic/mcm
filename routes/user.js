import express from 'express';
import passport from 'passport';
import User from '../models/user';


const router = express.Router();


router.post('/:id/registration', (req, res, next) => {
 User.register(new User({ username: req.body.username,
    first_name: req.body.first_name,
    company_name: req.body.company_name,
    company_logo: req.body.company_logo,
  last_name: req.body.last_name,
  address: req.body.address,
	phone: req.body.phone,
  email: req.body.email,
  shop_number: req.params.id,  
	middle_name: req.body.middle_name,
}), req.body.password, (err, user) => {
                     if (err) {
                        console.log(err)											 
                        res.send({error: err.message})
                        res.render('clientFrontEnds/index', {message:{error: err.message}});  
                     }
                     passport.authenticate('local')(req, res, () => {											 
                       req.session.save((err) => {												
                         if (err) {
                           return next(err);
                         }
                        res.redirect('/'+req.params.id);
                       });
                     });
                   });
});
router.get('login', (req, res) => {
	res.render('login')
})

router.get('/login', (req, res) => {
  res.render('index', { user: req.user, login_errors: req.session.messages || [],
                        error: req.flash('error')});
});

router.post('/:id/login', passport.authenticate('local',
                                            { failureRedirect: 'login',
                                              failureFlash: true,
                                              failureMessage: "Invalid username or password" }),
            (req, res, next) => {
              req.session.save((err) => {
                if (err) {
                  return done(null, false, {
                    error: 'The Username or password is Incorrect'                   
                });           
        }
     
				console.log(req.user);//to get the current session saved
                res.redirect('/'+req.params.id);
              });
        });

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/login');
  });
});

router.get('/ping', (req, res) => {
  res.status(200).send('pong!');
});

router.get('/doctor', (req, res) => {

});



// router.post('/login/:id', function(req, res, next){
// 	var username = req.body.username;
// 	var password = req.body.password;
//   let shop_id = req.params.id;
// 	req.checkBody('username', 'Username field is required').notEmpty();
// 	req.checkBody('password', 'Password field is required').notEmpty();
  
// 	passport.authenticate('local-login', {
// 	  successRedirect: "/"+shop_id,
// 	  failureRedirect: '/',
// 	  failureFlash: true,
// 	})(req, res, next);
  
//   });

//LogOut function
router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'You are logged Out');
	res.redirect('/user/login');
});

module.exports = router;


