const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      passport_local = require('passport-local'),
      body_parser = require('body-parser'),
      PORT = 8000;

const userRoutes = require('./routes/users'),
      fileRoutes = require('./routes/files'),
      indexRoutes = require('./routes/index');

const User = require('./models/user')
      Files = require('./models/file');

const seedDB = require('./seeds');

const middleware = require('./middleware/index');

const logger = require('./logs/logs');

require('dotenv').config();


mongoose.connect(process.env.localDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    logger('Arcane DB has been connected successfully!');
}).catch(err => {
    console.err("ERROR",err.message);
});

// seedDB();
logger('i love computers');
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