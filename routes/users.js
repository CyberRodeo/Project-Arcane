const   express = require('express'),
        user = require('../models/user'),
        mongoose = require('mongoose'),
        router = express.Router(),
        File = require('../models/file'),
        middlewareobj = require("../middleware/index"),
        logger = require('../logger/logs'),
        usrSession = require('../userSession/session');

require('dotenv').config();

router.get('/profile', middlewareobj.userLogged, (req, res) => {
    UserSession = usrSession.fetchUserSession();
    res.render('user/editProfile', {userSession: UserSession});
}); 

router.get('/', (req, res) => {
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

    user.findOneAndUpdate(query, update, {new: true}).then(() => {
        logger("user has been updated!");
        res.redirect('/logout');
    });
});


module.exports = router;