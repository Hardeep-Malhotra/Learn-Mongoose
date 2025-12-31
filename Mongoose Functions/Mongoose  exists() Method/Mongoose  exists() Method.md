# ✔️ Mongoose | exists() Function



The `exists()` function in Mongoose is used to check whether at least one document exists in the database that matches the given filter.

It is mainly used for:
- checking if a user already exists
- validating unique email or username
- quick presence or availability check

---

## ✅ What `exists()` returns

- Returns a **truthy value with _id** if at least one document exists  
- Returns **null** if no document exists  

It does **NOT** return the full document.

---

## 🔧 Installing Mongoose

```bash
npm install mongoose

Check mongoose version:

npm version mongoose

Run your file (for example: index.js):

node index.js

🛠 Example: Using exists() in Mongoose

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
/*
async function insertData(){
  await Student.insertMany([
    { name: "Aman", age: 18, city: "Delhi" },
    { name: "Neha", age: 20, city: "Pune" },
    { name: "Rohit", age: 22, city: "Mumbai" }
  ]);
  console.log("Sample Data Inserted");
}
*/

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

// insertData();   // run first time only
existsExample();

▶️ Output:

If record exists
✔ Aman exists. Id: 67ab23cd89ef1234abcd90

If record does not exist
❌ Aman does NOT exist

🧩 How it works:

searches in the database

if a match is found → returns truthy value with _id

if no match is found → returns null

does not return the complete document

## 🆚 exists() vs findOne() vs find()

| Function   | Purpose |
|------------|---------|
| `exists()` | Only checks if a document exists ✔/❌ (does not return full data) |
| `findOne()` | Returns a single matching document |
| `find()` | Returns multiple matching documents (in an array) |


📝 Summary:

exists() → checks if a document exists

fast and lightweight

best for duplicate checks and validations

returns _id or null