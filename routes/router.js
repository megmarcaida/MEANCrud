/**
 * Created by Latte on 10/26/2017.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/',function (req,res,next) {
    res.render('Starter',{title:"Mean App"});
});

module.exports = router;
