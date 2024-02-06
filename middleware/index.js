const express = require('express'),
      logger = require('../logger/logs');

require('dotenv').config();

var middlewareobj = {};

middlewareobj.authMiddleware = function(req, res, next){
    if(process.env.isLoggedin == 'false'){
        res.redirect('/');
        logger('User is not logged in, no access granted!');
    } else {
        next();
    }
}


middlewareobj.isloggedin = function(req, res, next){
    if(process.env.isLoggedin == 'true'){
        res.redirect('/dashboard');
    } else {
        next();
    }
};

middlewareobj.userLogged = function(req, res, next){
    if(process.env.isloggedin == 'true'){
        next();
    } else {
        logger('No user session detected, no access granted!')
        res.redirect('/login');
    }
};


middlewareobj.upldMidwre = function(req, res, next){
    if(process.env.isloggedin == 'false'){
        logger('No user session detected, no access granted!')
        res.redirect('/login');
    } else {
        next();
    }
};

middlewareobj.logoutmidwre = function(req, res, next){
    if(process.env.isLoggedin == 'false'){
        res.redirect('login');
        logger('No User session detected, redirected to login page.')
    } else {
        next();
    }
};

module.exports = middlewareobj;