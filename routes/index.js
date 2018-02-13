var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Running with PM2', name: 'Julietta'});
});
router.get('/resume', function(req, res, next){
  res.render('resume',{
    title:'Julietta\'s resume'
  });
});
///crash server fort pm2 texting
router.get('/exit', function(req, res, next){
  process.exit(1);
});


module.exports = router;
