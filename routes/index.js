var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'production, design, develop', name: 'Julietta'});
});
router.get('/design', function(req, res, next) {
  res.render('design', { 
    title: 'production, design, develop', name: 'Julietta'});
});
router.get('/develop', function(req, res, next){
  res.render('develop',{
    title:'Julietta\'s resume'
  });
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
router.get('/ace', function(req, res, next){
  res.render('ace',{
    title:'Julietta\'s resume'
  });
});
router.get('/bank_one', function(req, res, next){
  res.render('bank_one',{
    title:'Julietta\'s resume'
  });
});
router.get('/hallmark', function(req, res, next){
  res.render('hallmark',{
    title:'Julietta\'s resume'
  });
});
router.get('/chicago_public_schools', function(req, res, next){
  res.render('chicago_public_schools',{
    title:'Julietta\'s resume'
  });
});
router.get('/jhalcomb', function(req, res, next){
  res.render('jhalcomb',{
    title:'Julietta\'s resume'
  });
});
router.get('/l_m', function(req, res, next){
  res.render('l_m',{
    title:'Julietta\'s resume'
  });
});
router.get('/kohls', function(req, res, next){
  res.render('Spec',{
    title:'Julietta\'s resume'
  });
});
router.get('/virginia_slims', function(req, res, next){
  res.render('virginia_slims',{
    title:'Julietta\'s resume'
  });
});
router.get('/contact', function(req, res, next){
  res.render('contact',{
    title:'Julietta\'s resume'
  });
});


///crash server fort pm2 texting
router.get('/exit', function(req, res, next){
  process.exit(1);
});


module.exports = router;
