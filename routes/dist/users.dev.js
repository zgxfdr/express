"use strict";

var express = require('express');

var router = express.Router();

var fs = require('fs');

var path = require('path');
/* GET users listing. */
// router.get('/user/:name')  url:/user/zss


var publicPath = path.join(__dirname, 'views');
router.get('/login', function (req, res, next) {
  fs.readFile(path.join(publicPath, 'index.html'), function (err, data) {
    //如果不先设置头的话，当接收到数据为buffer类型的时候，express会自动将头设置为 application / octet-stream
    console.log(data);
    res.render('index', {
      username: "zss",
      password: "666666"
    }); // res.set('Content-type','text/html');
    // res.send(data);
  });
});
module.exports = router;