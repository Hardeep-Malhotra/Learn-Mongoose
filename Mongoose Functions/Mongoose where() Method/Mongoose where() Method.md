# 📚 Mongoose | where() Function



The `where()` function in Mongoose is used to create a Query, apply conditions to it, and then return the Query.  
It is very useful when you want to build queries step-by-step using a clean and readable syntax.

---

## 🔧 Installation of mongoose module

Install mongoose using:

```bash
npm install mongoose
Check version:

npm version mongoose
Run the project file (for example: index.js):


node index.js

🧠 What where() Does
Creates a query object

Applies conditions like gte, lte, equals, etc.

Returns documents that match those conditions

It is helpful for writing chained, readable queries.

🛠 Example: Using where() in Mongoose

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

// 3️⃣ Sample data insert function (run only once)
async function insertData() {
  await Student.insertMany([
    { name: "Aman", age: 18, city: "Delhi" },
    { name: "Punit", age: 22, city: "Mumbai" },
    { name: "Neha", age: 19, city: "Delhi" },
    { name: "Punit", age: 25, city: "Pune" }
  ]);
  console.log("Sample Data Inserted");
}

// 4️⃣ where() example
async function whereExample() {

  // ⭐ age between 15 and 25
  const s1 = await Student.where("age").gte(15).lte(25);

  console.log("Students with age between 15 and 25:", s1);
}

// insertData();   // 👉 first time only
whereExample();

▶️ Steps to Run
Install mongoose

Ensure MongoDB is running

Create index.js file

Paste above code

(Optional) run insertData() once

Execute:


node index.js

🧾 Output
Returns all students whose:

age ≥ 15

age ≤ 25

🧩 Summary 

where() → query builder

gte() → greater than or equal

lte() → less than or equal

exec() or await → runs query

✔️ Use Cases

range queries (age, price, marks etc.)

applying multiple conditions

writing readable chained queries

building dynamic filters