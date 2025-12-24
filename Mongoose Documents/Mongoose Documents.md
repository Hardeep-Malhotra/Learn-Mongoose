# 📘 Mongoose Documents



Mongoose is a powerful **Object Data Modeling (ODM)** library for MongoDB and Node.js. It makes it easier to interact with MongoDB databases by providing a structured way to handle data, perform validation, and manage documents efficiently.

This document explains **Mongoose Documents**, how they work, and how to use different document-level operations in a Node.js application.

---

## 🔹 What Are Mongoose Documents?

In Mongoose, a **Document** represents a single instance of a model.  
It is essentially a MongoDB document mapped to a Mongoose model.

Each instance of a model corresponds to **one document** in the database, and we can perform **CRUD (Create, Read, Update, Delete)** operations on it.

📌 Example:  
If we define a `User` model, then every new `User()` object becomes a **Mongoose Document**.

Documents have built-in properties and methods that help in managing and manipulating data efficiently.

---

## 🔹 Key Features of Mongoose Documents

- **One-to-One Mapping**  
  Each Mongoose document maps to exactly one MongoDB document.

- **CRUD Operations**  
  Documents support operations like `save()`, `find()`, `update()`, and `delete()`.

- **Schema Validation**  
  Documents automatically validate data according to schema rules before saving.

- **Methods and Virtuals**  
  Documents can have instance methods and virtual fields for extra functionality.

---

## 🔹 Mongoose Document Operations

### 1️⃣ Retrieving Mongoose Documents

To retrieve documents, Mongoose provides methods like `findOne()` and `findById()`.

```js
const doc = await MyModel.findById(myid);
2️⃣ Saving Mongoose Documents
After creating or modifying a document, it must be saved using the save() method.


await doc.save();
This method is asynchronous and should be awaited.

3️⃣ Updating Mongoose Documents
Documents can be updated in two ways:

🔹 Using save()

doc.firstname = 'gfg';
await doc.save();
🔹 Using Query Methods (without save)

await MyModel.findByIdAndUpdate(myid, { firstname: 'gfg' });
4️⃣ Validating Mongoose Documents
Mongoose validates documents before saving them.
You can explicitly validate using validate().


const schema = new Schema({ name: String, age: Number });
const Person = mongoose.model('Person', schema);

let p1 = new Person({ name: 'gfg', age: 'bar' });
// Validation will fail
await p1.validate();

let p2 = new Person({ name: 'gfg', age: 20 });
// Validation will succeed
await p2.validate();
5️⃣ Overwriting Mongoose Documents
To completely replace a document, use overwrite().


const doc = await MyModel.findById(myid);
doc.overwrite({ fullname: 'gfg' });
await doc.save();
🧪 Example: Universal Mongoose Document Example
(All concepts in one place)

This example demonstrates:

Creating a document

Validation

Saving

Reading

Updating (document & query)

Overwriting

📁 File: index.js

import mongoose from "mongoose";

// 1️⃣ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/universalDB")
.then(() => {
    console.log("MongoDB Connected ✅");
})
.catch((err) => {
    console.log("Connection Error ❌", err);
});

// 2️⃣ Schema Definition (with validation)
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    course: {
        type: String
    }
});

// 3️⃣ Model Creation
const Student = mongoose.model("Student", studentSchema);

// 4️⃣ Main Function
async function run() {

    // CREATE DOCUMENT
    const student1 = new Student({
        name: "Hardeep Singh",
        age: 20,
        course: "BCA"
    });

    // VALIDATE DOCUMENT
    await student1.validate();
    console.log("Validation Passed ✅");

    // SAVE DOCUMENT
    await student1.save();
    console.log("Document Saved ✅");

    // READ DOCUMENT
    const foundStudent = await Student.findOne({ name: "Hardeep Singh" });
    console.log("Found Student:", foundStudent);

    // UPDATE USING DOCUMENT
    foundStudent.course = "Full Stack Development";
    await foundStudent.save();
    console.log("Document Updated using save() ✅");

    // UPDATE USING QUERY
    const updatedStudent = await Student.findOneAndUpdate(
        { name: "Hardeep Singh" },
        { age: 22 },
        { new: true }
    );
    console.log("Updated using Query:", updatedStudent);

    // OVERWRITE DOCUMENT
    updatedStudent.overwrite({
        name: "Hardeep",
        age: 23,
        course: "Software Engineering"
    });
    await updatedStudent.save();
    console.log("Document Overwritten ✅");
}

run().catch(console.error);

🔚 Conclusion
Mongoose Documents are essential for modeling and manipulating data in a MongoDB database using Node.js. They provide a structured way to perform CRUD operations, validation, and document-level updates.

By understanding how documents work and using methods like save(), validate(), findOne(), findOneAndUpdate(), and overwrite(), developers can efficiently manage data and build scalable applications with Mongoose.

