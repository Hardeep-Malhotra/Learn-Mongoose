const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.set('strictQuery', false);

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Plugin attach
userSchema.plugin(require('./pulgs.js'));

const User = mongoose.model('User', userSchema);

const user = new User({
    name: 'Geeks for Geeks',
    email: 'geeksforgeeks@gfg.com',
    password: 'mongoose'
});

user.save();
User.find();
