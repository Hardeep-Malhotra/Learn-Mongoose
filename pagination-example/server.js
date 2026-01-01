const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://localhost:27017/paginationDemo')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });


const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);


app.get('/add-sample', async (req, res) => {
    await User.deleteMany({});

    await User.insertMany([
        { name: "Aman", age: 21 },
        { name: "Rohit", age: 23 },
        { name: "Sumit", age: 25 },
        { name: "Neha", age: 22 },
        { name: "Riya", age: 24 },
        { name: "Karan", age: 28 },
        { name: "Mohan", age: 30 },
        { name: "Sohan", age: 19 },
        { name: "Tina", age: 20 },
        { name: "Arjun", age: 26 },
        { name: "Kabir", age: 27 },
        { name: "Sameer", age: 29 },
        { name: "Rachit", age: 22 },
        { name: "Pooja", age: 23 },
        { name: "Muskan", age: 20 },
        { name: "Dev", age: 31 },
        { name: "Nitin", age: 18 },
        { name: "Meena", age: 32 },
        { name: "Rekha", age: 28 },
        { name: "Rahul", age: 26 }
    ]);
    res.send("Sample data added successfully 😎");
});

app.get('/users', async (req, res) => {

    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;


    let skip = (page - 1) * limit;

    const total = await User.countDocuments();

    const data = await User.find()
        .sort({ _id: 1 })
        .skip(skip)
        .limit(limit);

    res.json({
        page,
        limit,
        totalDocuments: total,
        totalPages: Math.ceil(total / limit),
        resultsOnThisPage: data.length,
        data
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});