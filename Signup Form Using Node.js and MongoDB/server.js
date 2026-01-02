const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect("mongodb://localhost:27017/signUP")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String
});

const User = mongoose.model('User', userSchema);

app.post('/sign_up', async (req, res) => {
    try {
       const userData =  await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        });
        console.log(userData);

        console.log("User signed up successfully");
        return res.redirect('signup_success.html');

    } catch (err) {
        console.log("Error during sign up:", err);
        return res.status(500).send("Internal Server Error");

    };
});


app.get('/', (req, res) => {
    return res.redirect('index.html');

});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});