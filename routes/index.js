const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');
const File = require('../models/file');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended : true}));

const middleware = require("../middleware/index");
const logger = require('../logs/logs');



require('dotenv').config();


router.get('/', (req, res) => {
    res.render('home/arcane');
}); 

router.get("/login", middleware.isloggedin, (req, res)=>{
    res.render('auths/login');
});

router.get('/upload', middleware.upldMidwre,  (req, res)=>{
    res.render('files/upload');
});

// router.post('/login', (req, res)=>{
//     if(req.body.username == process.env.user && req.body.password == process.env.password){
//         process.env.isLoggedin = 'true';
//         res.redirect('/dashboard');
//         logger('User has been verified!')
//         // logger(process.env.isLoggedin);
//     } else {
//         res.redirect('/login');
//         logger('The username or the password is incorrect!')
//     }
// });

router.post('/login', (req, res, next)=>{
    User.find({username: req.body.username}).then((foundUser)=>{
        if(foundUser.length != 0){
            console.log(foundUser);
            if(foundUser[0].pass == req.body.password){
                process.env.isLoggedin = 'true';
                process.env.userSession = foundUser[0];
                res.redirect('/dashboard');
                logger('User has been verified!');
                console.log(process.env.userSession);
            } else {
                res.redirect('/login');
                logger('User has not been verified! [wrong credentials]');
            }
        } else {
            res.redirect('/login');
            logger('No User with the given arguement found.')
        }
    });
});

router.get('/logout', middleware.logoutmidwre, (req, res)=>{
    process.env.isLoggedin = 'false';
    logger('User has been successfully logged out!');
    res.redirect('/login');
});

module.exports = router;