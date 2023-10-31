const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const middleware = require("../middleware/index");
const File = require('../models/file');

router.get('/profile', (req, res) => {
    res.render('user/viewProfile');
}); 

router.get('/', (req, res) =>{
    res.render('errorhandling/error404', {Reason: "No users found!"});
});

module.exports = router;