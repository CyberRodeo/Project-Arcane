const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');
const File = require('../models/file');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended : true}));

const middleware = require("../middleware/index");



require('dotenv').config();


router.get('/', (req, res) => {
    res.render('home/arcane');
}); 

router.get("/login", middleware.loginMidwre, (req, res)=>{
    res.render('auths/login');
});

router.get('/upload', middleware.upldMidwre,  (req, res)=>{
    res.render('files/upload');
});

console.log(process.env.user, process.env.password);

router.post('/login', (req, res)=>{
    if(req.body.username == process.env.user && req.body.password == process.env.password){
        process.env.isLoggedin = 'true';
        res.redirect('/dashboard');
        console.log('User Verified!')
        // console.log(process.env.isLoggedin);
    } else {
        res.redirect('/login');
        console.log('The username or the password is incorrect!')
    }
});


module.exports = router;