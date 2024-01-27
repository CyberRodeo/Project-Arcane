const { GuildDefaultMessageNotifications } = require('discord.js');
const { GridFsStorage } = require('multer-gridfs-storage');

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      passport_local = require('passport-local'),
      body_parser = require('body-parser'),
      PORT = 3000,
      userRoutes = require('./routes/users'),
      dashroutes = require('./routes/dashboard'),
      filesroutes = require('./routes/files'),
      indexRoutes = require('./routes/index'),
      User = require('./models/user')
      Files = require('./models/file'),
      seedDB = require('./seeds'),
      middleware = require('./middleware/index'),
      logger = require('./logs/logs'),
      multer = require('multer'),
      gridfs = require('multer-gridfs-storage'),
      methodOverride = require('method-override'),
      grid = require('gridfs-stream');
      
require('dotenv').config();

const dbconn = mongoose.connect(process.env.localDatabase, {
}).then(() =>{
    logger('Arcane DB has been connected successfully!');
}).catch(err => {
    console.err("ERROR",err.message);
});

// let gfs;

// dbconn.once('open', () => {
//     gfs = Grid(dbconn.db, mongoose,mongo);
//     gfs.collections('uploads');
// });

const storage = new GridFsStorage({
    url: process.env.localDatabase,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
                const fileName = file.originalname;
                const fileinfo = {
                    filename: fileName,
                    bucketname: 'uploads'
                };
                resolve(fileinfo);
        });
    }
});

const upload = multer({storage});



logger('I Love Computers - CyberRodeo');
// seedDB.seed();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

app.use(indexRoutes);
app.use("/dashboard", dashroutes);
app.use("/user", userRoutes);
app.use("/file", filesroutes);

app.post('/upload', upload.single('file', (req, res) => {
    res.redirect('/dashboard');
}));


app.listen(PORT || process.env.PORT, process.env.IP,  function(){
    logger("Arcane server is up on PORT:", PORT)
});