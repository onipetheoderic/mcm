import express from 'express';
var session = require('express-session');
const expressValidator = require('express-validator');
// import favicon from 'serve-favicon';
import logger from 'morgan';
const path = require("path");
const fs = require("fs");
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import lessMiddleware from 'less-middleware';
import passport from 'passport';
import mongoose from 'mongoose';
import { Strategy } from 'passport-local';
import flash from 'connect-flash';
import hbs from 'hbs';
const fileUpload = require('express-fileupload');

// routes are imported here, note any auth or init middleware are to be placed
// above this line.
import index from './routes/index';
import home from './routes/home';
import admin from './routes/admin';
import category from './routes/category';
import product from './routes/product';
import user from './routes/user';
// import add from './routes/add';
// import getters from './routes/getters';
// import company from './routes/company';
// import add_doctor from './routes/add_doctor'
// import nurse from './routes/nurse';

const app = express();
app.use(fileUpload());
var debug = require('debug');
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || '3000';



// export locals ato template
hbs.localsAsTemplateData(app);
app.locals.defaultPageTitle = 'Katify';

// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout/main' });

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(session({cookie: { maxAge: 60000 }}));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'AdminBSBMaterialDesign-master')));
app.use('/bower_components', express.static(`${__dirname}/bower_components`));



app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(flash());
app.use(function(req, res, next){
  // if there's a flash message in the session request, make it available  
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
  });
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'Views/public')));//this is for the css and js files in the template folder


// Express-validator MiddleWare copied from https://github.com/ctavan/express-validator/issues/238
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var   namespace = param.split('.'),
            root      = namespace.shift(),
            formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
app.use('/', home);
app.use('/admin', admin);
app.use('/school', index);
app.use('/user', user);

// passport account auth

import User from './models/user';
import School from './models/school';


passport.use(new Strategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// mongoose
mongoose.connect('mongodb://localhost/mcsm');

// catch 404 and forward to error handler

app.get('/', function(req, res, next){
 res.render('socrateweb/index', {layout: 'layout/socrateweb', error_code: 404})
});

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//this is to set a global variable for the user, to know if the user is logged in or not
// app.get('*', function(req, res, next){
// 	res.locals.user = req.user || null;
// 	next();
// });


// // error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.send('what???', 404);
  res.render('errorpage/index', {layout: false, error_code: 404})
});
// EXPRESS MESSAGES MIDDLEWARE copied from https://github.com/expressjs/express-messages
app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);//this is basically setting a global variable called messages to the express messages module
  next();
});




hbs.registerPartial('banner', fs.readFileSync(__dirname + '/Views/partials/banner.hbs', 'utf8'));

hbs.registerPartial('about', fs.readFileSync(__dirname + '/Views/partials/about.hbs', 'utf8'));

hbs.registerPartial('course_area', fs.readFileSync(__dirname + '/Views/partials/course_area.hbs', 'utf8'));

hbs.registerPartial('faculty_area', fs.readFileSync(__dirname + '/Views/partials/faculty_area.hbs', 'utf8'));

hbs.registerPartial('feature_area', fs.readFileSync(__dirname + '/Views/partials/feature_area.hbs', 'utf8'));

hbs.registerPartial('footer', fs.readFileSync(__dirname + '/Views/partials/footer.hbs', 'utf8'));

hbs.registerPartial('header', fs.readFileSync(__dirname + '/Views/partials/header.hbs', 'utf8'));

hbs.registerPartial('testimony_area', fs.readFileSync(__dirname + '/Views/partials/testimony_area.hbs', 'utf8'));
// hbs helpers
hbs.registerHelper('json', function (content) {
    return JSON.stringify(content);
});

hbs.registerHelper('uppercase', function (str) {
  if(str && typeof str === "string") {
    return str.toUpperCase();
  }
  return '';
});

hbs.registerHelper('truncator', function (str) {
  if(str.length>=600) {
    var maxLength = 600 // maximum number of characters to extract

//trim the string to the maximum length
    var trimmedString = str.substr(0, maxLength);

//re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return trimmedString+"...";
  }
  else{
    return str;
  }
});

hbs.registerHelper('grader', function (val) {
  if(val == 0){
    return "-"
  }
  else if(val && parseInt(val) < 40) {
    return "V.Poor"
  }
  else if(parseInt(val)>60) {
    return "V.Good"
  } 
  
  else if(val && parseInt(val) <= 20) {
    return "V.Poor"
  }
  else if(val && val>=40 && val < 45) {
    return "Poor"
  }
  else if(val && val>=45 && val < 50) {
    return "Fair"
  }
  else if(val && val>=50 && val < 60) {
    return "Good"
  }
  
  
  
});

hbs.registerHelper('remark', function(val){
  if(val && val === 5){
    return "✓"
  }
});

hbs.registerHelper('link', function(text, options) {
  var attrs = [];

  for (const prop in options.hash) {
    attrs.push(
      `${hbs.handlebars.escapeExpression(prop)}="` +
       `${hbs.handlebars.escapeExpression(options.hash[prop])}"`);
  }

  return new hbs.handlebars.SafeString(
    `<a ${attrs.join(' ')}>${hbs.handlebars.escapeExpression(text)}</a>`
  );
});
//to emit an event for everyOne we say: io.emit('some event', { for: 'everyone' });
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ', msg)
    io.emit('chat message', msg);//with these method we wills end the message to everyone including the sender
  })
  //each socket also fires a special disconnect method;
  socket.on('disconnect', function(){
    console.log("User disconnected")
  });
});



http.listen(port, function(){//this takes a callback, that is if we want to run something when we start listening to the port
	console.log("Listening on Port:", port);
});

module.exports = app;
