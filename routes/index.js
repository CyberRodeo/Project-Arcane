const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');
const File = require('../models/file');


router.get('/', (req, res) => {
    res.render('arcane');
}); 

router.get("/login", (req, res)=>{
    res.render('login');
});


module.exports = router;