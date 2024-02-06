const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    pass: String,
    pfp: String,
    username: String,
    aboutme: String
});

module.exports = mongoose.model('User', userSchema)