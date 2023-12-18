const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      passport_local = require('passport-local'),
      body_parser = require('body-parser'),
      PORT = 8000,
      userRoutes = require('./routes/users'),
      fileRoutes = require('./routes/files'),
      indexRoutes = require('./routes/index'),
      User = require('./models/user')
      Files = require('./models/file'),
      seedDB = require('./seeds'),
      middleware = require('./middleware/index'),
      logger = require('./logs/logs'),
      multer = require('multer'),
      cloudinary = require('cloudinary');
          
cloudinary.config({ 
  cloud_name: process.env.cloudname, 
  api_key: process.env.apikey, 
  api_secret: process.env.apisecret 
});

require('dotenv').config();


mongoose.connect(process.env.localDatabase, {
}).then(() =>{
    logger('Arcane DB has been connected successfully!');
}).catch(err => {
    console.err("ERROR",err.message);
});

// seedDB();
logger('I Love Computers - CyberRodeo');
// seedDB.seedUser();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

app.use(indexRoutes);
app.use("/dashboard", fileRoutes);
app.use("/user", userRoutes);


app.listen(PORT || process.env.PORT, process.env.IP,  function(){
    logger("Arcane server is up on PORT:", PORT)
});