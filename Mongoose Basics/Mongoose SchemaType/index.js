import mongoose from "mongoose";

// 🔹 Database connection
mongoose.connect("mongodb://127.0.0.1:27017/learnmongoose")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("Connection Error ❌", err));

// 🔹 Creating Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    skills: [{
        type: String
    }],
    dob: {
        type: Date
    }
});

// 🔹 Student Model
const Student = mongoose.model("Student", studentSchema);

// 🔹 Creating Student Document
let student1 = new Student({
    name: "Hardeep Singh",
    age: 20,
    skills: ["Software Engineer", "FullStack Developer", "Problem Solver"],
    dob: new Date()
});

// 🔹 Saving document
student1.save()
.then(() => {
    console.log("Student saved successfully ✅");
})
.catch((err) => {
    console.log("Save Error ❌", err);
});
