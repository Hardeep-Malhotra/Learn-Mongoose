# 📌 Mongoose Plugins

**Last Updated : 28 Apr, 2025**

Mongoose Plugins are a powerful way to **reuse logic across multiple schemas**.  
A plugin works like a reusable function that can be attached to schemas to **modify schema behavior**.

Plugins **do not directly interact with models or documents**, and they **cannot execute queries or write data directly**.  
Instead, they enhance schemas using middleware, fields, or methods.

---

## 🔹 What is a Mongoose Plugin?

A **Mongoose Plugin** is a JavaScript function that takes:
- a **Schema** (required)
- an **Options object** (optional)

It is mainly used to:
- add fields to schemas
- attach middleware (pre / post hooks)
- reuse common logic across schemas

---

## 🔹 Plugin Syntax

```js
function plugin_name(schema, options) {}
Parameters
schema → Required. Used to modify the schema.

options → Optional. Used to pass custom configurations.

🔹 Installation of Mongoose
Step 1: Initialize Project
s
npm init -y
Step 2: Install Mongoose

npm i mongoose
Step 3: Check Mongoose Version

npm info mongoose version
Step 4: Run the Application

node index.js
🔹 Ways to Add Plugins
Creating a custom plugin

Using an npm mongoose plugin

🧪 Example 1: Custom Plugin for Timestamps
🎯 Goal
Automatically add:

createdAt

lastAccess

and update them on save and find.

📁 Step 1: Create Plugin File
plugs.js

module.exports = exports =
function time_plugins(schema, options) {

    // Add timestamp fields
    schema.add({ lastAccess: Date });
    schema.add({ createdAt: Date });

    // Runs before save()
    schema.pre('save', function (next) {
        this.createdAt = new Date();
        this.lastAccess = new Date();
        next();
    });

    // Runs after find()
    schema.post('find', async function (result) {
        if (result) {
            await this.updateMany(
                {},
                { lastAccess: new Date() }
            ).clone();
        }
    });
}
📁 Step 2: Use Plugin in Schema
app.js

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(url);
mongoose.set('strictQuery', false);

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Attach plugin
userSchema.plugin(require('./plugs'));

// Create Model
const User = mongoose.model('User', userSchema);

// Save document
const user = new User({
    name: 'Geeks for Geeks',
    email: 'geeksforgeeks@gfg.com',
    password: 'mongoose'
});
user.save();

// Trigger find()
User.find();
✅ Output
You can verify in MongoDB Compass or terminal that:

createdAt is added on save

lastAccess updates after find

🌍 Example 2: Global Plugin (All Schemas)
Instead of attaching a plugin to each schema, we can attach it globally.

app.js

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(url);

// Apply plugin globally
mongoose.plugin(require('./plugs'));

mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const bookSchema = new mongoose.Schema({
    name: String,
    author: String
});

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);

const user = new User({
    name: 'Geeks for Geeks',
    email: 'geeksforgeeks@gfg.com',
    password: 'mongoose'
});

const book = new Book({
    name: "Mongoose Guides",
    author: "Geeks"
});

user.save();
book.save();

User.find();
Book.find();
✅ Result
Both User and Book schemas now have:

createdAt

lastAccess

same plugin behavior

🔐 Example 3: Using mongoose-hidden Plugin
🎯 Purpose
Hide sensitive fields (like password) when sending data to the client.

Step 1: Install Plugin
npm i mongoose-hidden
Step 2: Use Plugin
app.js

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(url);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,

    // Hidden field
    password: {
        type: String,
        hide: true
    }
});

// Attach plugin
userSchema.plugin(require('mongoose-hidden')());

const User = mongoose.model('User', userSchema);

const user = new User({
    name: 'Geeks for Geeks',
    email: 'geeksforgeeks@gfg.com',
    password: 'mongoose'
});

user.save();

// Convert to JSON
console.log(user.toJSON());

✅ Output

{
  "name": "Geeks for Geeks",
  "email": "geeksforgeeks@gfg.com"
}
👉 password is hidden automatically.

🎓 Exam Ready Points
Mongoose plugins help reuse schema logic

Plugins modify schemas, not models

Plugins support middleware, fields, and methods

Can be applied per schema or globally

Useful for timestamps, soft deletes, auditing, hiding fields

🏁 Conclusion
Mongoose Plugins provide a clean and reusable way to extend schema functionality.
They help keep code DRY, organized, and scalable, especially in large applications.

