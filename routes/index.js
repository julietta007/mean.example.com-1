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
router.get('/ace', function(req, res, next){
  res.render('ace',{
    title:'Julietta\'s resume'
  });
});
router.get('/jhalcomb', function(req, res, next){
  res.render('jhalcomb',{
    title:'Julietta\'s resume'
  });
});
router.get('/jpMorganChase', function(req, res, next){
  res.render('jpMorganChase',{
    title:'Julietta\'s resume'
  });
});
router.get('/chicagoPublicSchools', function(req, res, next){
  res.render('chicagoPublicSchools',{
    title:'Julietta\'s resume'
  });
});
router.get('/spec', function(req, res, next){
  res.render('spec',{
    title:'Julietta\'s resume'
  });
});
router.get('/and more', function(req, res, next){
  res.render('and more',{
    title:'Julietta\'s resume'
  });
});

///crash server fort pm2 texting
router.get('/exit', function(req, res, next){
  process.exit(1);
});


module.exports = router;
