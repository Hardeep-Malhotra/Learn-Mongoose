const mongoose = require("mongoose");

// 1️⃣ Connect MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/aggDemo")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

async function insertSimpleUsers() {
    await User.insertMany([
        { name: "Aman", age: 25, city: "Delhi", salary: 30000 },
        { name: "Riya", age: 28, city: "Mumbai", salary: 45000 },
        { name: "Vikas", age: 35, city: "Delhi", salary: 50000 },
        { name: "Neha", age: 22, city: "Chennai", salary: 25000 },
        { name: "Rahul", age: 30, city: "Mumbai", salary: 60000 },
    ]);

    console.log("All users are successfuly inserted.");
};

async function runAggregation() {
    const result = await User.aggregate([

        {
            $match: {
                age: { $gt: 25 }
            }
        },

        {
            $group: {
                _id: "$city",
                totalUsers: { $sum: 1 },
                avgAge: { $avg: "$age" },
                avgSalary: { $avg: '$salary' },
                maxSalary: { $max: "$salary" }
            }
        },
        {
            $project: {
                _id: 0,
                city: "$_id",
                totalUsers: 1,
                avgAge: 1,
                avgSalary: 1,
                maxSalary: 1
            }
        },

        {
            $sort:{
                avgSalary:-1
            }
        },
        {
            $limit:2
        }
    ]);
    
        console.log("Aggregation Result : ");
        console.log(result);
};

async function start(){
    await insertSimpleUsers();
    await runAggregation();
};
start();

