const mongoose = require("mongoose");

// 1️⃣ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/school")
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

// 2️⃣ Schema & Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const Student = mongoose.model("Student", studentSchema);


async function insertData(){
    await Student.insertMany([
        { name: "Aman", age: 18, city: "Delhi" },
        { name: "Punit", age: 22, city: "Mumbai" },
        { name: "Neha", age: 19, city: "Delhi" },
        { name: "Punit", age: 25, city: "Pune" }
    ]);
    console.log("Sample Data Inserted");
};

async function whereExample(){
  const result = await Student.deleteMany({ age: { $gte: 30 } });

  console.log("Deleted documents info:", result);
};


whereExample();


