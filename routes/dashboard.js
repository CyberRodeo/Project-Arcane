const   express = require('express'),
        user = require('./users'),
        mongoose = require('mongoose'),
        router = express.Router();
        middleware = require("../middleware/index"),
        File = require('../models/file'),
        logger = require('../logs/logs'),
        usrSession = require("../userSession/session");

require('dotenv').config();

router.get('/', middleware.userLogged, (req, res)=>{
    File.find({}).then((allFiles)=>{
        UserSession = usrSession.fetchUserSession();
        res.render("dashboard/dashboard", {allFiles: allFiles, activeUser: UserSession});
    });
});

router.get('/files', (req, res)=>{
    res.render('errorhandling/error404', {Reason: "Whether there is no such file with id or you are on the wrong link"});
});

module.exports = router;