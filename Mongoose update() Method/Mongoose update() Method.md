
# ✏️ Mongoose | update() Function



The `update()` function in Mongoose is used to modify one or more documents in a MongoDB collection that match a given filter. It performs the update operation but does **not return the updated document itself**. Instead, it returns information about the update operation (such as number of matched and modified documents).

This function is part of Mongoose’s Query API and is useful for updating data in Node.js applications.

---

## ❓ What is the Mongoose update() Function?

The `update()` function updates documents in a collection that satisfy a specific condition.

- It **changes field values**
- It **does not return updated document**
- It **returns operation result info** (matched/modified count)

If you need the updated document, you should use:

- `findOneAndUpdate()`

---

## 🧾 Syntax

Model.update(query, update, options, callback)



### Parameters

- **query** → filter to select which documents to update  
- **update** → update operations such as `$set`, `$inc`  
- **options (optional)** → extra settings such as `multi:true`  
- **callback (optional)** → handles response after update  

---

## 🛠 Example – Basic Usage

This example connects to MongoDB and shows update usage.

```javascript
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

// 3️⃣ Sample data insert (run once)
async function insertData() {
    await Student.insertMany([
        { name: "Amit", age: 20, city: "Delhi" },
        { name: "Gourav", age: 22, city: "Pune" },
        { name: "Amit", age: 25, city: "Mumbai" }
    ]);
    console.log("Sample data inserted");
}

// 4️⃣ update() example – change Amit → Gourav
async function updateExample() {

    // before update — check data
    const before = await Student.find({ name: "Gourav" });
    console.log("Before Update:", before);

    // ⭐ update() function
    Student.update(
        { name: "Amit" },                 // filter
        { $set: { name: "Gourav" } },     // update operation
        function (err, result) {
            if (err) console.log(err);
            else console.log("Update Result:", result);
        }
    );

    // after update — check data again
    const after = await Student.find({ name: "Gourav" });
    console.log("After Update:", after);
}

// insertData();   // run only once
updateExample();

## ▶️ Steps to Run

Step 1 — Install Mongoose
npm install mongoose

Step 2 — Run the application
node index.js

Step 3 — Verify in Compass / Robo 3T
You will see documents where name “Amit” becomes “Gourav”.

## 🧪 Example 2 — Update With Condition
Update age of users older than 18:

User.update(
  { age: { $gt: 18 } },
  { $inc: { age: 1 } },
  { multi: true },
  (err, result) => {
    if (err) console.log(err);
    else console.log("Update Result:", result);
  }
);

## 🧰 Common update operators

| Operator | Meaning |
|----------|---------|
| `$set`   | Set a new value |
| `$inc`   | Increase or decrease a numeric value |
| `$unset` | Remove a field from the document |
| `$push`  | Add a value to an array field |


## ⚠️ Important Note
update() is deprecated in latest Mongoose versions
Recommended alternatives:

updateOne()

updateMany()

findOneAndUpdate() (returns updated doc)

## 📝 Conclusion
The update() function:

updates documents that match a given condition

does not return updated documents

returns operation result instead

For returning updated documents, use:

findOneAndUpdate()

