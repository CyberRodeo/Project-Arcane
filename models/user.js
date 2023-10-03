const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    pfp: String
});

module.exports = mongoose.model('User', userSchema)