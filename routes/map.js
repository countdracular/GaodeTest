/**
 * Created by Administrator on 2015/9/3.
 */
var express = require('express');
var router = express.Router();

/* GET map page. */
router.get('/', function(req, res, next) {
    res.render('map');
});

module.exports = router;
