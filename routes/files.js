const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const middleware = require("../middleware/index");
const File = require('../models/file');
const logger = require('../logs/logs')
require('dotenv').config();

UserSession = process.env.userSession;
console.log(UserSession);


router.get('/', middleware.userLogged, (req, res)=>{
    File.find({}).then((allFiles)=>{
        res.render("dashboard/dashboard", {allFiles: allFiles, activeUser: UserSession});
    });
});

router.get('/files', (req, res)=>{
    res.render('errorhandling/error404', {Reason: "Whether there is no such file with id or you are on the wrong link"});
});

module.exports = router;