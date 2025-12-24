# 📘 Mongoose Document API


Mongoose is an **Object Data Modeling (ODM)** library for MongoDB and Node.js, designed to work in an asynchronous environment. Mongoose provides a straightforward API to interact with MongoDB. It allows you to model your application data and perform operations like **Create, Read, Update, and Delete (CRUD)** in MongoDB.

This document explains the important **Mongoose Document API** functions that allow us to interact with MongoDB documents.

---

## 🔹 What is a Mongoose Document?

In Mongoose, a **document** corresponds to a MongoDB document.  
When you use a Mongoose model to create a new document, it behaves as an **instance of the model**.

This instance allows us to interact with MongoDB easily and provides multiple methods to perform operations like save, update, find, and delete.

---

## 🔹 Setting Up Mongoose in Node.js

### Step 1: Install Mongoose
```bash
npm install mongoose
Step 2: Create Node.js Application
Create a folder and a file (example: index.js) and run it using:


node index.js
Step 3: Start MongoDB Server

mongod
🔑 Key Mongoose Document Operations
1️⃣ Creating New Documents (CREATE)
To create a new document, we use a Mongoose model.
To save documents:

create() → insert document(s) directly

save() → save a document instance

📌 Example: Insert Multiple Documents

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/UserData", {})
    .then(() => {
        console.log("MONGODB connected successfully...................");
    })
    .catch(() => {
        console.log("Something went wrong while MONGODB Connected.......!");
    });

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

User.create([
    { name: "Rishu", age: 21 },
    { name: "Megha", age: 24 },
    { name: "Aman", age: 16 },
    { name: "Riya", age: 18 }
]).then(() => {
    console.log("Document inserted successfully ✅");
});

2️⃣ Retrieving Documents (READ)
To retrieve documents, we use methods like findOne() or find().

📌 Example: Find One Document

User.findOne({ age: { $gte: 21 } })
    .then((res) => {
        console.log("Result are : ", res);
    })
    .catch((err) => {
        console.log("Error Caught : ", err);
    });
📌 This query returns one document where age ≥ 21.

3️⃣ Updating Documents (UPDATE)
To update documents, we can use:

updateOne()

findOneAndUpdate()

Difference:
updateOne() → does NOT return updated document

findOneAndUpdate() → CAN return updated document

📌 Example: Update Document and Return Updated Result

User.findOneAndUpdate(
    { name: "Rishu" },
    { age: 22 },
    { new: true }
)
.then((res) => {
    console.log("updated result : ", res);
})
.catch((err) => {
    console.log("Error Caught : ", err);
});

4️⃣ Overwriting a Document (REPLACE)
To completely overwrite a document, we use replaceOne().

📌 Old document is removed and replaced with a new one.

📌 Example: Replace Document

User.replaceOne(
    { name: "Rishu" },
    { name: "Hardeep Singh", age: 20 },
    { new: true }
)
.then((res) => {
    console.log("Result are : ", res);
})
.catch((err) => {
    console.log("Error caught : ", err);
});
🔍 Summary of Operations
Operation	Method Used
Create	create(), save()
Read	findOne(), find()
Update	updateOne(), findOneAndUpdate()
Replace	replaceOne()

🔹 Why Choose Mongoose for MongoDB?
Schema Validation
Ensures correct and consistent data before saving.

Powerful Querying
Easy-to-use methods like findOne(), updateOne(), etc.

Built-in Middleware
Allows logic before/after save or delete operations.

Scalability
Suitable for large and scalable Node.js applications.

🔚 Conclusion
The Mongoose Document API provides powerful methods to work with MongoDB documents in a Node.js environment. Using methods like create(), findOne(), findOneAndUpdate(), and replaceOne(), developers can easily manage CRUD operations.

With these techniques, you can efficiently manage MongoDB documents and build structured, scalable applications using Mongoose.