# 📘 Mongoose Schemas and Indexes



Mongoose is a powerful **Object Data Modeling (ODM)** library for MongoDB in a Node.js environment. It provides a straightforward way to interact with MongoDB, including features like schema definition, model creation, and database query handling.

One key feature of Mongoose is its ability to **create and manage indexes automatically**, which helps improve query performance.

---

## 🔹 What are Mongoose Schemas?

In Mongoose, a **Schema** defines the structure of documents within a MongoDB collection. It includes information such as:

- Fields and their data types  
- Validation rules  
- Default values  
- Indexes  
- References to other collections  

Schemas are the foundation of **Mongoose models**, which are used to interact with the database. They help maintain consistency and enable structured and organized data storage in MongoDB.

---

## 🔹 What are Mongoose Indexes?

Indexes in Mongoose are used to **speed up the retrieval of documents** by creating a structured data map for faster searches.

- MongoDB automatically creates an index on the **`_id` field**
- We can define **custom indexes** on frequently queried fields to improve performance

---

## 🔹 Types of Indexes in Mongoose

- **Single Field Index**  
  Index on one field to optimize queries filtering by that field.

- **Compound Index**  
  Index on multiple fields, useful for queries involving more than one condition.

- **Text Index**  
  Used for full-text search on string fields.

- **Unique Index**  
  Ensures that values in a field are unique across all documents.

- **Geospatial Index**  
  Used for location-based (geographical) queries.

---

## 🔹 How to Define and Use Mongoose Indexes

Mongoose automatically creates an index for the `_id` field.  
Let’s see how indexes work using examples.

---

## 🛠 Step 1: Setup Node.js Application

```bash
mkdir folder_name
cd folder_name
npm init -y
🛠 Step 2: Install Required Module

npm install mongoose
📂 Project Structure
project-folder/
│── script.js
│── script2.js
│── package.json
│── node_modules/
🧪 Example 1: Default Indexes in Mongoose
Mongoose automatically creates an index on the _id field.

File: script.js

// Require the mongoose module
const mongoose = require('mongoose');

// Path to our Database
const url = 'mongodb://localhost:27017/GFG';

// Connecting to database
mongoose.connect(url)
    .then(() => {
        console.log("Connected successfully");
    })
    .catch(() => {
        console.log("Error in the Connection");
    });

// Calling Schema class
const Schema = mongoose.Schema;

// Creating structure of the collection
const collection_structure = new Schema({
    name: String,
    marks: Number,
});

// Creating collection
const collections = mongoose.model("GFG", collection_structure);

// Inserting document
collections.create({
    name: "Ragavpp",
    marks: 13,
})
.then(() => {
    console.log("Document inserted");
})
.catch((err) => {
    console.log(err.message);
});
▶ Run the Application

node script.js
Output:

Connected successfully
Document inserted
📌 MongoDB automatically creates an index on _id.

🧪 Example 2: Adding a Custom Index for Mobile Number
In this example, we add an index on the mobile field to optimize queries.

File: script2.js

// Require the mongoose module
const mongoose = require('mongoose');

// Path to our Database
const url = 'mongodb://localhost:27017/GFG';

// Connecting to database
mongoose.set('strictQuery', false);

mongoose.connect(url)
    .then(() => {
        console.log("Connected Successful");
    })
    .catch(() => {
        console.log("Error in the Connection");
    });

// Calling Schema class
const Schema = mongoose.Schema;

// Creating structure with index on mobile
const collection_structure = new Schema({
    name: {
        type: String,
        require: true,
    },
    marks: {
        type: Number,
        default: 0
    },
    mobile: {
        type: Number,
        index: true,
        require: true,
    }
});

// Creating collection
const collections = mongoose.model("GFG", collection_structure);

// Inserting document
collections.create({
    name: "Sam Snehil",
    marks: 88,
    mobile: 9338948473,
})
.then(() => {
    console.log("Document inserted");
})
.catch((err) => {
    console.log(err);
});
▶ Run the Application

node script2.js
📌 After running this code, the mobile field will be indexed, which can be verified in MongoDB Atlas or local MongoDB under the Indexes tab.

🧠 Explanation
Index on mobile improves query performance when filtering by mobile number

Indexed fields are searched faster than non-indexed fields

Indexes are especially useful for large datasets

🔹 Conclusion
Mongoose Schemas and Indexes are essential for building efficient and scalable Node.js applications with MongoDB.

Schemas define the structure and rules of documents

Indexes improve query performance and scalability

By using indexes wisely on frequently queried fields, we can ensure faster queries and smooth application performance as our data grows.