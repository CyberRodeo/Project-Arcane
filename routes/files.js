const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const middleware = require("../middleware/index");
const File = require('../models/file');


router.get('/', (req, res)=>{
    File.find({}).then((allFiles)=>{
        res.render("dashboard", {allFiles: allFiles});
    });
});


router.get('/files/:id', (req, res)=>{
    res.send('duh');
});

router.get('/files', (req, res)=>{
    res.render('error404');
});

module.exports = router;