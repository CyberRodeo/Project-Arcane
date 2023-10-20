const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');
const File = require('../models/file');


router.get('/', (req, res) => {
    res.render('home/arcane');
}); 

router.get("/login", (req, res)=>{
    res.render('auths/login');
});

router.get('/upload', (req, res)=>{
    res.render('files/upload');
});


module.exports = router;