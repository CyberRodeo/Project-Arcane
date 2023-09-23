const express = require('express');
const app = express();
const { chart } = import('chart.js');
const PORT = 8000;


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('arcane')
}); 

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

app.listen(PORT || process.env.PORT, process.env.IP,  function(){
    console.log("Arcane server is up on PORT:", PORT)
});