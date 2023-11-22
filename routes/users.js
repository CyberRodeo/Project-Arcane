const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const File = require('../models/file');
const middlewareobj = require("../middleware/index");
const logger = require('../logs/logs');
const usrSession = require('../userSession/session');

require('dotenv').config();

router.get('/profile', middlewareobj.userLogged, (req, res) => {
    UserSession = usrSession.fetchUserSession();
    res.render('user/editProfile', {userSession: UserSession});
}); 

router.get('/', (req, res) =>{
    res.render('errorhandling/error404', {Reason: "No users found!"});
});

router.post("/updateuser", (req, res, next) => {
    res.redirect('/success')
});

router.get("/success", (req, res, next)=>{
    res.send('HII')
});
module.exports = router;