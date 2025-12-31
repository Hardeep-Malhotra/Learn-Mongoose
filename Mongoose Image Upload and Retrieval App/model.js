const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name:String,
    desc:String,
    imgage:{
        data:Buffer,
        content_type:String
    }
});

module.exports = mongoose.model('Image', imageSchema);