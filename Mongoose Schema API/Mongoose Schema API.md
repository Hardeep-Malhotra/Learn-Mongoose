# 📘 Mongoose Schema API

**Last Updated:** 19 May, 2025  

Mongoose is a powerful **ODM (Object Document Mapper)** tool for **Node.js**, specifically designed to work with **MongoDB**.  
It provides an easy way to define data models, interact with the database, and enforce data integrity using schemas.

In this guide, we explore the **Mongoose Schema API**, including:
- Defining schemas  
- Creating models  
- Performing CRUD operations  

Whether you are a **beginner** or an **experienced developer**, this README will help you understand how to use Mongoose schemas to streamline database interactions.

---

## 📌 What is Mongoose and the Schema API?

Mongoose is a package used in **Node.js** to:
- Handle database queries  
- Build schemas  
- Implement business logic using MongoDB  

Mongoose allows us to connect to a MongoDB instance, either:
- **Locally**
- Or **Cloud-based (Atlas)**

One of the most important APIs provided by Mongoose is the **Schema API**.

👉 Whenever we want to store data in MongoDB, we must follow a **specific schema**, which defines:
- What fields exist
- What data type they store

### Example
A schema for an **exercise** may contain:
- exercise-name  
- exercise-description  
- exercise-duration  

---

## 🧩 Schema API Syntax

```js
const newEntity = new mongoose.Schema({
    field1: String,
    field2: Number,
    field3: Boolean
});
This syntax defines the structure of data stored in MongoDB.

🔑 Key Mongoose Schema Functions
1️⃣ Schema()
Used to define the structure of the data

Takes all entity fields as input (name, age, email, etc.)

js
Copy code
const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
    email: String
});
2️⃣ model()
Creates a model using the schema

Used to perform database operations like:

insert

update

find

delete

const User = mongoose.model("User", userSchema);
🧪 Example: Working with Mongoose Schema API
📂 Step 1: Project Setup
bash
Copy code
mkdir mongoose_examples
cd mongoose_examples
npm init -y
npm install mongoose express
Final folder structure:

pgsql
Copy code
mongoose_examples/
│── index.js
│── package.json
│── node_modules/
🧾 Step 2: Create index.js
js
Copy code
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const uri = 'mongodb://127.0.0.1:27017/?directConnection=true';

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to MongoDB successfully.');
});

const Schema = mongoose.Schema;

const newExercise = new Schema({
    name: String,
    description: String,
    duration: Number
});

const Exercise = mongoose.model('Exercise', newExercise);

// Insert data
app.post('/insertExercise', (req, res) => {
    Exercise.create({
        name: 'Cycling',
        description: 'Cycling on the road',
        duration: 30
    });
    res.send('Exercise inserted successfully.');
});

// Fetch data
app.get('/findExercises', (req, res) => {
    Exercise.find()
        .then((exercise) => res.send(exercise))
        .catch((error) => res.send('Error ' + error));
});

app.get('/', (req, res) => {
    res.send('Mongoose Schema API');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
▶️ Step 3: Run the Application

node index.js
Expected output:


Server is listening on the port 5000.
Connected to MongoDB successfully.
➕ Step 4: Insert Data
Send a POST request to:


http://localhost:5000/insertExercise
You can use:

Thunder Client (VS Code extension)

Postman

📤 Step 5: Retrieve Data
Open in browser:


http://localhost:5000/findExercises
This will return all exercises stored in MongoDB.

🔄 Performing Update Operations in Mongoose
Example: Update Mobile Price

const newMobile = new Schema({
    name: String,
    price: Number,
    rating: Number,
    isBig: Boolean
});

const Item = mongoose.model('Item', newMobile);

// Update price
app.post('/updateMobile', (req, res) => {
    Item.updateOne(
        { name: 'Samsung 30s' },
        { price: 30000 },
        (err) => {
            if (err) res.send(err);
            else res.send('Document updated successfully.');
        }
    );
});

// Fetch updated data
app.get('/findUpdatedMobile', (req, res) => {
    Item.findOne({ name: 'Samsung 30s' })
        .then((mobile) => res.send(mobile))
        .catch((err) => res.send(err));
});
🧠 Why Use Mongoose? (Key Benefits)
Data Integrity
Enforces schema rules and validation

Ease of Use
Simple methods like create(), save(), find()

Middleware Support
Pre-save and post-save hooks

Population
Automatically replaces referenced documents using populate()

🏁 Conclusion
In this guide, we covered:

Mongoose Schema API basics

Schema and model creation

CRUD operations (Create, Read, Update)

Mongoose provides a structured, consistent, and powerful way to work with MongoDB.
Now that you understand the basics, try creating schemas for your own applications and explore advanced features like middleware and population.

