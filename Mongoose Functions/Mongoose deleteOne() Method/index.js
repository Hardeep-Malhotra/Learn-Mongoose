// Filename: index.js

const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/school")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Connection error:", err));

// 2️⃣ Schema & Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const Student = mongoose.model("Student", studentSchema);

// 3️⃣ deleteOne() example
async function deleteOneExample() {
  try {
    const result = await Student.deleteOne({ name: "Aman" });

    console.log("Delete Result:", result); 
    // { acknowledged: true, deletedCount: 1 }
  } catch (err) {
    console.log("Error:", err);
  }
}

// Run function
deleteOneExample();
