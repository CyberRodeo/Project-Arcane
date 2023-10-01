const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
        
    }
});

module.exports = mongoose.model('File', fileSchema);