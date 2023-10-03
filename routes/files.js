const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const middleware = require("../middleware/index");
const Files = require('../models/file');


router.get('/', (req, res)=>{
    Files.find({}, (err, allFiles)=>{
        if(err){
            console.log(err);
        } else {
            res.render('dashboard', {files: allFiles});
        }
    });
});