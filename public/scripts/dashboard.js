function redirect(){
    window.location.href = "/user/profile";
}

var dotenv = require('dotenv');

dotenv.config();

function logout(){
    process.env.isLoggedin = 'false';
    console.log('User has been logged out successfully!')
}

