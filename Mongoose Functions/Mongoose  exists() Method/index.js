const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
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

// 3️⃣ Sample data insert (run once if needed)

async function insertData(){
  await Student.insertMany([
    { name: "Aman", age: 18, city: "Delhi" },
    { name: "Neha", age: 20, city: "Pune" },
    { name: "Rohit", age: 22, city: "Mumbai" }
  ]);
  console.log("Sample Data Inserted");
}


// 4️⃣ exists() example
async function existsExample(){

  // 👉 check if student named "Aman" exists
  const result = await Student.exists({ name: "Aman" });

  if(result){
    console.log("✔ Aman exists. Id:", result._id);
  } else {
    console.log("❌ Aman does NOT exist");
  }
}
// insertData();

existsExample();


