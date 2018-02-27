var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'production, design, develop', name: 'Julietta'});
});
router.get('/resume', function(req, res, next){
  res.render('resume',{
    title:'Julietta\'s resume'
  });
});
router.get('/aldi', function(req, res, next){
  res.render('aldi',{
    title:'Julietta\'s resume'
  });
});
router.get('/hallmark', function(req, res, next){
  res.render('hallmark',{
    title:'Julietta\'s resume'
  });
});
router.get('/kennedy', function(req, res, next){
  res.render('kennedy',{
    title:'Julietta\'s resume'
  });
});
router.get('/jhalcomb', function(req, res, next){
  res.render('jhalcomb',{
    title:'Julietta\'s resume'
  });
});
router.get('/chase', function(req, res, next){
  res.render('chase',{
    title:'Julietta\'s resume'
  });
});
router.get('/andMore', function(req, res, next){
  res.render('andMore',{
    title:'Julietta\'s resume'
  });
});
router.get('/kohls', function(req, res, next){
  res.render('Spec',{
    title:'Julietta\'s resume'
  });
});
router.get('/seven', function(req, res, next){
  res.render('Seven World Wide',{
    title:'Julietta\'s resume'
  });
});
router.get('/family', function(req, res, next){
  res.render('family',{
    title:'Julietta\'s resume'
  });
});


///crash server fort pm2 texting
router.get('/exit', function(req, res, next){
  process.exit(1);
});


module.exports = router;
