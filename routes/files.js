const   express = require('express'),
        user = require('./users'),
        mongoose = require('mongoose'),
        router = express.Router();
        middleware = require("../middleware/index"),
        File = require('../models/file'),
        logger = require('../logger/logs'),
        usrSession = require("../userSession/session")
        multer = require('multer'),
        fs = require('fs'),
        http = require('https');

require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/upload')
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
            filename: req.file.filename,
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

router.get('/:id/delete', async (req, res)=>{
    let query = {
        _id : req.params.id
    };

    const file = await File.findById(req.params.id);
    const requestedFile = file.filename;
    const file_path = file.file;
    const files = fs.readdirSync('./uploads/upload');

    if(files.includes(requestedFile)){
        logger('File was successfully found in the registered directory and now will proceed into removal process.');
        fs.unlinkSync(file_path);
        logger('File has been removed successfully.');
    } else {
        logger('file was not found at the registered directory!');
    };

    File.findByIdAndDelete(query).then(() => {
        logger('File object has been removed from the database.');
    });

    res.redirect('/dashboard');
});

router.get('/:id/download', (req, res)=>{
    logger('download router was opened!!');
    res.redirect('dashboard');
});

module.exports = router;