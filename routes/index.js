const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');
const File = require('../models/file');

router.get('/tfbro', (req, res) => {
    // res.send('HIII');
    // res.render('arcane')
});



module.exports = router;