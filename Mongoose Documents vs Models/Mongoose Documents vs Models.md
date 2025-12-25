# 📚 Mongoose Documents vs Models

**Last Updated:** 05 Jun, 2025  

Mongoose is a widely used Node.js library for working with **MongoDB**, a NoSQL database. It simplifies database handling using an **ODM (Object Data Modeling) framework**.

Two primary concepts in Mongoose are:

- **Models**
- **Documents**

This documentation explains both in detail and highlights their differences.

---

## 🧠 What are Mongoose Models?

A **Model** in Mongoose is a **constructor function** that defines the **structure of documents** in a MongoDB collection.

➡️ Model = Blueprint / Class  
➡️ Document = Object created from Model  

A model is created from a **Schema**, and it allows performing CRUD operations on data.

### ✅ Key Characteristics of Mongoose Models

- Acts as a **constructor function**
- Used to **create documents**
- Provides **static methods** like:
  - `find()`
  - `create()`
  - `updateOne()`
  - `deleteOne()`
- Based on a **Schema definition**
- Works at **collection level**

---

## 🧩 Model Syntax Example

```javascript
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define Schema
const userSchema = new Schema({
  username: String,
  email: String,
  age: Number
});

// Create Model
const User = mongoose.model('User', userSchema);
```

### 📌 Explanation of Parameters

- **Require Mongoose** – imports library  
- **Define Schema** – structure of document  
- **Create Model** – `mongoose.model('User', userSchema)`  
- **Export Model** – reuse in other files  

---

## 🧪 Example: Using Model in Another File

```javascript
const YourModel = require("./path/to/your/model");

// Create new instance
const instance = new YourModel({
  fieldName1: "some value",
  fieldName2: 42,
});

// Save instance
instance.save((error, savedInstance) => {
  if (error) console.error(error);
  else console.log("Instance saved:", savedInstance);
});
```

---

## 🟢 What are Mongoose Documents?

A **Document** is an **instance of a Model**.

➡️ Model = design / template  
➡️ Document = real record in database  

Each document follows the structure defined in its schema.

### ✅ Key Characteristics of Documents

- Instance created from Model (`new Model()`)
- Represents **single record**
- Provides **instance methods** like:
  - `save()`
  - `remove()`
  - `updateOne()`
- Validated using schema rules

---

## 🧩 Document Syntax Example

```javascript
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  age: 25
});

newUser.save()
  .then(savedUser => console.log('User saved:', savedUser))
  .catch(error => console.error('Error saving user:', error));
```

---

## 🧪 Complete Model + Document Example

```javascript
const mongoose = require("mongoose");

// Define schema
const yourSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// Create model
const YourModel = mongoose.model("YourModel", yourSchema);

// Create document instance
const document = new YourModel({
  name: "John Doe",
  age: 30,
  email: "john@example.com",
});

// Save document
document.save((error, savedDocument) => {
  if (error) console.error(error);
  else console.log("Document saved:", savedDocument);
});
```

---

## 📊 Difference Between Mongoose Models and Documents

| Aspect | Mongoose Model | Mongoose Document |
|--------|----------------|-------------------|
| Definition | Constructor function representing a collection | Instance of a model representing a single record |
| Purpose | Interact with entire collection | Represent and modify one record |
| Type | Class / Blueprint | Object / Instance |
| Methods | Static (`find`, `create`, `update`) | Instance (`save`, `remove`) |
| Level | Collection level | Record level |
| Schema Binding | Based on schema | Follows schema |
| Persistence | Does not store data itself | Stored in database |
| Use Case | Query, bulk operations | Modify specific record |
| Creation | `mongoose.model()` | `new Model()` |
| Field Access | Does not hold data | Holds real field data |
| Example | `User = mongoose.model()` | `new User({})` |

---

## 🏁 Conclusion

- **Models** define the **structure** and provide tools to interact with collections.  
- **Documents** are **actual records** created using models.  
- Models = Blueprint  
- Documents = Data instances  

Understanding both makes it easier to build **scalable** and **efficient** MongoDB applications using Mongoose.

---

### ✍️ Author

**Hardeep Singh**  
Happy Learning 🚀
