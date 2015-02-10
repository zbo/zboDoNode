var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
    res.setLocale('de')
    res.render('stocks', { title: 'Stocks' });

});

module.exports = router;

