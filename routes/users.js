const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const File = require('../models/file');
const middlewareobj = require("../middleware/index");

require('dotenv').config();

router.get('/profile', middlewareobj.userLogged, (req, res) => {
    res.render('user/viewProfile');
}); 

router.get('/', (req, res) =>{
    res.render('errorhandling/error404', {Reason: "No users found!"});
});

router.post('/logout', (req, res)=>{
    process.env.isLoggedin = 'false';
    console.log('User has been successfully logged out!')
});

module.exports = router;