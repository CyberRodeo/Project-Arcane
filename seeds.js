const mongoose = require('mongoose');
const user = require('./models/user');
const File = require('./models/file');

var data = [
    {
        name: "arcane.ejs",
        description: "file of the home page"
    },
    {
        name: "anchor.png",
        description: "png file of the anchor logo"
    },
    {
        name: "VS Code - Insiders Edition",
        description: "setup file for the vs code"
    },
    {
        name: "server.js",
        description: "source code of the arcane server"
    },
    {
        name: "db.bat",
        description: "batch file to run up the local database"
    },
    {
        name: "package-lock.json",
        description: "json file for dependencies"
    }
];

var seedObj = {};

var User = [
    {
        name: "Harry",
        username: "cyberrodeo",
        pass: "iamnobody467",
        aboutme: "i am nobody!",
        pfp: "https://th.bing.com/th/id/OIP.0syNPGI4n2hFKnWmWltTJwHaHa?pid=ImgDet&rs=1"
    }
]
    


seedObj.seed = async function(){
    try{
        await File.deleteMany();
        console.log('DB has been seeded!');
        await File.create(data).then((err)=>{
            if(err){
                console.log(err);
            } else {
                console.log('File has been created!')
            }
        });
    } catch(err){
        console.log(err);
    }  
};

seedObj.seedUser = async function(){
    try{
        await user.create(User).then((err)=>{
            if(err){
                console.log(err);
            } else {
                console.log('user has been added!')
            }
        });
    } catch(err){
        console.log(err);
    }  
};

  
    

module.exports = seedObj;