# 🗑️ Mongoose | remove() Function



The `remove()` function in Mongoose is used to remove documents from the database according to a given condition.

> Note: In newer versions of Mongoose, `remove()` is deprecated.  
> Recommended alternatives are `deleteOne()` and `deleteMany()`.

---

## 🔧 Installation of Mongoose

Install mongoose:

```bash
npm install mongoose
Check mongoose version:


npm version mongoose
Run your file (for example: index.js):

node index.js
🧠 What remove() Does
Deletes documents from collection

Works based on the given condition

If multiple documents match → all will be deleted

Example condition:

delete users having age ≥ 30

⚠️ Important Update

remove() is deprecated in latest Mongoose versions.
Instead use:

deleteMany() → delete multiple documents

deleteOne() → delete only one document

🛠 Working Example (Recommended – using deleteMany)

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

// 3️⃣ Insert sample data (optional – run once)
/*
async function insertData(){
    await Student.insertMany([
        { name: "Aman", age: 18, city: "Delhi" },
        { name: "Punit", age: 22, city: "Mumbai" },
        { name: "Neha", age: 19, city: "Delhi" },
        { name: "Punit", age: 25, city: "Pune" }
    ]);
    console.log("Sample Data Inserted");
};
*/

// 4️⃣ Remove/Delete example
async function removeExample(){

  // ⭐ delete all students with age >= 30
  const result = await Student.deleteMany({ age: { $gte: 30 } });

  console.log("Deleted documents info:", result);
};

removeExample();

▶️ Steps to Run Program

Install mongoose

Ensure MongoDB server is running

Create index.js file

Paste above code

Run command:


node index.js
🧾 Output
All documents with age ≥ 30 will be deleted

Console will show:

Deleted documents info: { acknowledged: true, deletedCount: X }

🧩 Summary
remove() → deletes documents by condition (deprecated)

deleteMany() → recommended for multiple delete

deleteOne() → recommended for single delete

Always apply condition carefully

