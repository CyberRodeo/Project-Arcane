const { findOneAndUpdate } = require('../models/user');

const   express = require('express'),
        user = require('./users'),
        mongoose = require('mongoose'),
        router = express.Router();
        middleware = require("../middleware/index"),
        File = require('../models/file'),
        logger = require('../logs/logs'),
        usrSession = require("../userSession/session");

require('dotenv').config();

router.get('/:id/edit', async (req, res) => {
    let id = req.params.id;
    const fetchedFile = await File.findById(id);
    res.render('files/edit', {file: fetchedFile});
});

router.post('/:id/edit', async (req, res) => {
    let query = {
        _id: req.params.id
    };

    let update = {
        name: req.body.name,
        description: req.body.abtme
    };

    await File.findOneAndUpdate(query, update).then(() => {
        logger("File has been edited!");
    });

    res.redirect('/dashboard');    
});

router.get('/:id/delete', (req, res)=>{
    let query = {
        _id : req.params.id
    };

    File.findByIdAndDelete(query).then(() => {
        logger('File has been deleted!');
    });

    res.redirect('/dashboard');
});

router.get('/:id/download', (req, res)=>{
    res.send('Your requested file must be downloading rn!');
});


module.exports = router;