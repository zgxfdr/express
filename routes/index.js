var express = require('express');
 

const userHandle = require('../handle/user');
 

const initRoutes = async (app) => {
 
    // root
    app.get('/', function (req, res, next) {
      res.send({ success: true, data: 'root' });
    });
  
    // user
    app.post('/user/login', userHandle.login);
    app.get('/user/logout', userHandle.logout);

    app.get('/user/:id', userHandle.updatedPassword);
    
  };
  
  module.exports = initRoutes;
  