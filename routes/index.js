var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.setLocale('de')
    res.render('index', { title: 'Express' });

});

router.get('/index', function(req, res, next) {
    res.setLocale('en')
    res.render('index', { title: 'Hi' });

});

module.exports = router;
