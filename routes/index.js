const   express = require('express'),
        router = express.Router(),
        passport = require('passport'),
        User = require('../models/user'),
        File = require('../models/file'),
        bodyParser = require('body-parser'),
        middleware = require("../middleware/index"),
        logger = require('../logs/logs'),
        usrSession = require("../userSession/session");

router.use(bodyParser.urlencoded({extended : true}));

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

router.post('/login', (req, res, next)=>{
    User.find({username: req.body.username}).then((foundUser)=>{
        if(foundUser.length != 0){
            // console.log(foundUser);
            if(foundUser[0].pass == req.body.password){
                process.env.isLoggedin = 'true';
                usrSession.userSession(foundUser);
                res.redirect('/dashboard');
                logger('User has been verified!');
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