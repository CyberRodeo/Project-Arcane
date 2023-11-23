const express = require('express');
const user = require('../models/user');
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

router.post("/profile", (req, res, next) => {
    currentUser = usrSession.fetchUserSession();
    
    let query = {
        name: currentUser.name
    }; 
    let update = {
        name: req.body.name,
        aboutme: req.body.abtme
    };

    user.findOneAndUpdate(query, update, {new: true}).then(()=>{
        logger("user has been updated!");
        res.redirect('/logout');
    });
});


module.exports = router;