const mongoose = require("mongoose");

// Database connection
mongoose.connect("mongodb://localhost:27017/schoolDB");

// 1. Defining the Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 8 },
    highschool: { type: Boolean, default: false },
});

// 2. Creating the Model
const Student = mongoose.model("Student", studentSchema);

// Function to save a student record
const saveStudent = async (name, age) => {
    let s = new Student({
        name: name,
        age: age,
    });
    await s.save();
    console.log(`Student saved: ${s.name}`);
};

// Query to update students where age > 12 to highschool status
const updateHighSchoolStatus = async () => {
    await Student.updateMany(
        { age: { $gt: 12 } }, 
        { highschool: true }
    );
    console.log("✅ Updated highschool status for eligible students.");
};

const run = async () => {
    // Adding sample data
    await saveStudent("Ajay", 5);
    await saveStudent("Rajesh", 13);
    await saveStudent("Manav", 15);
    
    // Updating records
    await updateHighSchoolStatus();
    
    console.log("Process Finished.");
};

run();