const express = require('express');
const user = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const middleware = require("../middleware/index");
const File = require('../models/file');

router.get('/profile', (req, res) => {
    res.send('Duh')
}); 

router.get('/', (req, res) =>{
    res.render('error404', {Reason: "No users found!"});
});

module.exports = router;