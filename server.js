const express =  require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('done!')
});

app.get('/main', (req, res)=>{
    res.render('arcane.html')
});

app.listen(3000, () =>{
    console.log('Arcane server is up!')
});
