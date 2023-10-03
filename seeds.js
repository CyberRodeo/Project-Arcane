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
        description: "png filr of the anchor logo"
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
]


    // File.deleteMany({},(err)=>{
    //     if(err){
    //         console.err(err);
    //     } else {
    //         console.log('db has beem seeded!')
    //     }

    //     data.forEach((seed)=>{
    //         file.create(seed, (err, file)=>{
    //             if(err){
    //                 console.err(err);
    //             } else {
    //                 console.log('file has been added.')
    //             }
    //         });
    //     });
    // });

    // try{
    //     File.deleteMany({name: "tf bro?", description: "tf bro?"}, (err) =>{
    //         if(err){
    //             console.err(err);
    //         } else {
    //             console.log('db has been seeded!');
    //         }

    //         data.forEach((seed) =>{
    //             if(err){
    //                 console.err(err);
    //             } else {
    //                 console.log('file has been addded!');
    //             }
    //         });
    //     });


    async function seed(){
        try{
            await File.deleteMany();
            console.log('DB has been seeded!');
            await data.forEach((seed)=>{
                File.create(seed, (err, File)=>{
                    if(err){
                        console.error(err);
                    } else{
                        console.log("File has been added!");
                    }
                });              
            });
        } catch(err){
            console.log(err);
        }       
    };

  
    

module.exports = seed;