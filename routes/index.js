var express = require('express');

const userHandler = require('../handle/user');

/* GET home page. */
const routes = () => {
    var router = express.Router();
    console.log(22);
    // user
    router.get('/user/login', userHandler.login);
    router.get('/user/logout', userHandler.logout);

    // product
    // router.get('/products', userHandler.login);
    // router.get('/user/logout', userHandler.logout);
    return router;
}

module.exports = routes;