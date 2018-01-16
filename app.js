var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');
var apiPosts = require('./routes/api/posts');
var auth = require('./routes/auth');
var apiPosts = require('./routes/api/posts');

var app = express();

var User = require('./models/user');

//Connect to MongoDB
mongoose.connect('mongodb://localhost/bootcamp');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(require('express-session')({
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  secret:'d}o`+{ho6N~u7z-d=2PhU%ag^5SY~PXW_L/>>6\ce2=!76!"RB23DCGci,96#.T',
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    domain: 'localhost',
    //httpOnly: true,
    //secure: true,
    maxAge: 1000 * 60 * 24 // 24 hours
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

passport.use(User.createStrategy());

passport.use(new GitHubStrategy({
  clientID:'14f7dd2c2c6f812f7b91',
  clientSecret:'f6da146eb9af20fea3919daee751c8176861b73c',
  callbackURL:'http://localhost:3000/auth/github/callback'
},function(accessToken, refreshToken, profile, cb){

//The ID MUST be cast to an INTEGER.
  User.findOne({'githubData.id':parseInt(profile.id)}, function (err,user) {
    if(err){
      return done(err);
    }

    if(user){

      //TODO update the githubData
      return cb(err, user);
    } else {
      var newUser = new User();
      newUser.githubData = profile._json;

      //When creating from a third party skip validation as we do not want to
      //try and guess those fields
      newUser.save({ validateBeforeSave: false}, function(err){

        if(err) {
          throw err;
        }

        return cb(err, newUser);

      });
     }
    });

  })
);

passport.serializeUser(function(user, done){
  return done(null, {
    id: user._id,
    username: user.username,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  });
});

passport.deserializeUser(function(user, done){
  return done(null, user);
});

//Create the session
app.use(function(req, res, next){

  var userSession='';

  if(req.isAuthenticated()){
    userSession = req.session.passport.user;
  }

req.app.locals = {
    session: {
      user: userSession
    }
  }

  next();
});

app.use(function(req,res,next){

  let whitelist = [
    '/',
    '/public',
    '/users/login',
    '/users/register',
    '/api/users/register',
    '/auth/github'
  ];

if(whitelist.indexOf(req.url) !== -1){
  return next();
}

  //Allow access to dynamic end points
  var subs = [
    '/posts/view/',
    '/auth/github/callback'
  ];

  for(var sub of subs){
    if(req.url.substring(0, sub.length)===sub){
      return next();
    }
  }

  if(req.isAuthenticated()){
    return next();
  }
  res.status(401);
  return res.send('unauthorized');
});

app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);
app.use('/api/users', apiUsers);
app.use('/api/posts', apiPosts;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
