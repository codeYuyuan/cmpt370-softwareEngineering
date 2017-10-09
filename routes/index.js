var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mainPage');
});
router.get('/about', function(req, res, next) {
    res.render('about')
});
router.get('/search', function(req, res, next) {
    res.render('search')
});
router.get('/login', function (req,res, next) {
    res.render('login');
})

router.get('/register', function (req,res, next) {
    res.render('register');
})
module.exports = router;
