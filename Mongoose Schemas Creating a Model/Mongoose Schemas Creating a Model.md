# 🧾 Mongoose Schemas – Creating a Model

**Last Updated:** 29 Sep, 2025

In Mongoose, a **Schema acts as your blueprint** and defines what each document in MongoDB should look like including fields, types, defaults, and rules.  
A **Model acts as your builder** and allows you to create, read, update, and delete documents in the database with ease.

This documentation explains step-by-step how to create:

- Schema
- Model
- Documents
- Save data into MongoDB

---

## ✅ Steps to Create Model with Mongoose Schema

To demonstrate how to create a model using Mongoose, follow these steps to set up the environment.

---

## 🟢 Step 1: Initialize a Node.js Project

First, create a Node.js project. Run the following command in your terminal:

```bash
npm init -y
```

This command generates a **package.json** file which manages project dependencies.

Add start script:

```json
"start": "node app.js"
```

Now you can start the development server using:

```bash
npm start
```

> Note: The above command will not do anything right now since we have not written any code in our JavaScript file.

---

## 🟢 Step 2: Install Mongoose and MongoDB Dependencies

Install the required modules using:

```bash
npm install mongodb mongoose
```

This installs:

- MongoDB driver
- Mongoose ODM

---

## 🟢 Step 3: Create the `app.js` File

Create `app.js` and connect to MongoDB:

```javascript
// app.js
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/magesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));
```

Database name = **magesDB**

---

## 🟢 Step 4: Define the Mongoose Schema

A schema defines:

- fields
- types
- validation
- structure of document

Here we define schema for **Mage (game character)**:

```javascript
// Filename - app.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/magesDB');

const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  power_type: {
    type: String,
    require: true,
  },
  mana_power: Number,
  health: Number,
  gold: Number,
});
```

Explanation:

| Field | Meaning |
|-------|--------|
| name | mage name |
| power_type | element / physical |
| mana_power | magic energy |
| health | life power |
| gold | coins |

Schema ensures **every document follows same structure**.

---

## 🟢 Step 5: Create the Model Using the Schema

Create model from schema:

```javascript
const Mage = mongoose.model('Mage', mageSchema);
```

- `Mage` = Model name
- Collection created = **mages**
- Model allows CRUD operations

> Model works at **collection level**

---

## 🟢 Step 6: Create and Save Documents Using the Model

Create object → save to database

```javascript
// app.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/magesDB');

const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  power_type: {
    type: String,
    require: true,
  },
  mana_power: Number,
  health: Number,
  gold: Number,
});

const Mage = new mongoose.model('Mage', mageSchema);

const mage_1 = new Mage({
  name: 'Takashi',
  power_type: 'Element',
  mana_power: 200,
  health: 1000,
  gold: 10000,
});

mage_1.save();
```

Here:

- **Mage** → Model  
- **mage_1** → Document  
- `save()` → stores record in DB

---

## 🟢 Viewing Data in MongoDB GUI

Open **Studio 3T / Compass**  
Connect → select database:

```
magesDB → mages collection
```

You will see document with automatic `_id` created.

---

## 🟢 Creating Multiple Documents

You can create unlimited objects and save them.

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/magesDB');

const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  power_type: {
    type: String,
    require: true,
  },
  mana_power: Number,
  health: Number,
  gold: Number,
});

const Mage = new mongoose.model('Mage', mageSchema);

const mage_1 = new Mage({
  name: 'Takashi',
  power_type: 'Element',
  mana_power: 200,
  health: 1000,
  gold: 10000,
});

mage_1.save();

const mage_2 = new Mage({
  name: 'Steve',
  power_type: 'Physical',
  mana_power: 500,
  health: 5000,
  gold: 50,
});

mage_2.save();
```

Now database contains **two documents**.

---

## 🏁 Conclusion

- A **Schema** defines field structure and rules  
- A **Model** is created from Schema using `mongoose.model()`  
- A **Document** is created using `new Model()`  
- `save()` stores document inside MongoDB  

You can create as many objects from the model as needed. Each saved object becomes a **document in the collection**.

---

🎯 With this knowledge you can now:

- define schemas
- build models
- create documents
- store game characters or any real data

Happy Coding 🚀
