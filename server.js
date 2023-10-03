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

const seeddb = require('./seedDB');

// mongoose.connect('mongodb+srv://legend:legend1234321@yelpcamp.bp884.mongodb.net/arcane', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to Arcane db !')
// }).catch(err => {
//     console.err("ERROR", err.message);
// });

mongoose.connect("mongodb://127.0.0.1:27017/arcane", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('connected to db!');
}).catch(err => {
    console.err("ERROR",err.message);
});

seedDB();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('arcane');
}); 

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get("/login", (req, res)=>{
    res.render('login');
});

app.use(indexRoutes);
// app.use(userRoutes);
// app.use(fileRoutes);

app.listen(PORT || process.env.PORT, process.env.IP,  function(){
    console.log("Arcane server is up on PORT:", PORT)
});