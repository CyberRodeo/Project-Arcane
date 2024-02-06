const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      PORT = 3000,
      userRoutes = require('./routes/users'),
      dashroutes = require('./routes/dashboard'),
      filesroutes = require('./routes/files'),
      indexRoutes = require('./routes/index'),
      User = require('./models/user')
      Files = require('./models/file'),
      seedDB = require('./seeds'),
      middleware = require('./middleware/index'),
      logger = require('./logger/logs'),
      multer = require('multer'),
      dld = require('download');

require('dotenv').config();

mongoose.connect(process.env.localDatabase, {
}).then(() =>{
    logger('Arcane DB has been connected successfully!');
}).catch(err => {
    console.err("ERROR",err.message);
});

var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

logger('I Love Computers - CyberRodeo');
// seedDB.seed();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

app.use(indexRoutes);
app.use("/dashboard", dashroutes);
app.use("/user", userRoutes);
app.use("/file", filesroutes);

app.listen(PORT || process.env.PORT, process.env.IP,  function(){
    logger("Arcane server is up on PORT:", PORT)
});