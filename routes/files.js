const   express = require('express'),
        user = require('./users'),
        mongoose = require('mongoose'),
        router = express.Router();
        middleware = require("../middleware/index"),
        File = require('../models/file'),
        logger = require('../logs/logs'),
        usrSession = require("../userSession/session");

require('dotenv').config();

router.get('/:id/edit',(req, res) => {
    const id = req.params.id;
    res.render('files/edit', {file: File.findById(id)});
});

router.get('/:id/delete', (req, res)=>{
    res.send('file deleted!');
});

router.get('/:id/download', (req, res)=>{
    res.send('Your requested file must be downloading rn!');
});


module.exports = router;