const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: String,
    description: String,
    file: String,
    filename: String,
    owner: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        name: String,
        username: String,
        pfp: String
    }
});

module.exports = mongoose.model('File', fileSchema);