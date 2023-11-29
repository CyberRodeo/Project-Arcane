require('dotenv').config();
const logger = require("../logs/logs");

var session = {};

session.userSession = function(obj){
    process.env.userName = obj[0].name;
    process.env.userPfp = obj[0].pfp;
    process.env.userAbtMe = obj[0].aboutme;
    process.env.userUsrname = obj[0].username;
};

session.fetchUserSession = function(){
    var userSession = {
        name: process.env.userName,
        pfp: process.env.userPfp,
        abtme: process.env.userAbtMe,
        username: process.env.userUsrname
    }

    logger("User session fetched!");
    return userSession;
};  

module.exports = session;

