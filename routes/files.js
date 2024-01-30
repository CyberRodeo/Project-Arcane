const { findOneAndUpdate } = require('../models/user');

const   express = require('express'),
        user = require('./users'),
        mongoose = require('mongoose'),
        router = express.Router();
        middleware = require("../middleware/index"),
        File = require('../models/file'),
        logger = require('../logs/logs'),
        usrSession = require("../userSession/session")
        multer = require('multer');

require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function(req, file, cb){
        const dateNow = Date.now();
        const fileName = `${dateNow} - ${file.originalname}`;
        cb(null, fileName);
    }
  })
  
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
    logger('File has been uploaded');
    let user = usrSession.fetchUserSession();
    let data = [
        {
            name: req.body.fileName,
            description: req.body.fileDescription,
            file: req.file.path,
            owner: {
                name: user.name,
                username: user.username
            }
        }
    ];

    File.create(data).then((err)=> {
        logger(err);
    });

    res.redirect('/dashboard');
});

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