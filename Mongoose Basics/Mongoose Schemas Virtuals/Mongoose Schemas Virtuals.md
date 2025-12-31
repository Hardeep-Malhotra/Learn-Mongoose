# 📘 Mongoose Schemas Virtuals

**Last Updated : 28 Mar, 2025**

Virtuals are a powerful feature in Mongoose that allow us to add attributes to documents without actually storing them in the database. These properties can be dynamically calculated based on other fields, making it easier to manage and manipulate your data.

In this article, we’ll dive into **Mongoose Schema Virtuals**, explaining how to use virtuals for computed properties in your Mongoose models.

---

## 🔹 What are Mongoose Schema Virtuals?

Mongoose Schema Virtuals are document attributes that only exist logically and are **not written to the MongoDB database**. They do not persist or get stored in the collection.

When we access a virtual property, **Mongoose calls the `get()` method**.

Virtual property setters are applied **before other validation**. For example, a virtual property can be used to:
- Combine first and last names into a full name
- Format a date field

Virtuals are helpful for transforming or combining data **without altering the actual database structure**.

---

## 🔹 Syntax

```js
schema({
    virtuals: {
        propertyName: 'Program Logic'
    }
});
Parameters
propertyName: The name of the virtual property you want to define.

🔹 How Does Mongoose Virtuals Work?
Virtual properties allow us to create computed fields that appear like normal schema properties.

Virtuals are not stored in MongoDB

They are computed dynamically when accessed

Virtuals can use both get() and set() methods

Methods Used in Virtuals
Get Method
Used to retrieve and return a virtual property.
It creates a calculated field using existing document values.

Set Method
Used to set a virtual property and automatically update actual schema fields.

🔹 How to Set Up Mongoose Virtuals
Before using virtuals, you need to install Mongoose.

Installation

npm install mongoose
Create a file (for example index.js) and run it using:


node index.js
🧪 Example 1: Using the Get Method to Create a Full Name
This example demonstrates how a virtual property can combine firstName and lastName into a fullName.

Filename: app.js

// Require the mongoose module
const mongoose = require('mongoose');

// Path to our DataBase
const url = "mongodb://localhost:27017/GFG";

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

// Creating Structure of the model
const schema = new Schema(
    {
        firstName: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        }
    },
    {
        virtuals: {
            fullName: {
                get() {
                    return this.firstName + ' ' + this.lastName;
                }
            }
        }
    }
);

// Compile our model
const Person = mongoose.model('Person', schema);

// Create a model instance
const person = new Person({ firstName: 'Sam', lastName: 'Snehil' });

// Using the virtuals
console.log(
    'FullName without concatenation: ',
    person.firstName + ' ' + person.lastName
);
console.log(
    'Full Name with virtuals: ' + person.fullName
);

Output

FullName without concatenation: Sam Snehil
Full Name with virtuals: Sam Snehil
Connected Successful
Explanation
The virtual property fullName combines firstName and lastName.
When person.fullName is accessed, the get() method is triggered and returns the combined value.

🧪 Example 2: Using the Set Method to Split a Full Name
This example uses the set() method to split a full name into name and address.

Filename: index.js

// Require the mongoose module
const mongoose = require('mongoose');

// Path to our DataBase
const url = "mongodb://localhost:27017/GFG";

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

// Creating Structure of the model
const schema = new Schema({
    name: String,
    address: String,
});

// Creating virtual property
schema.virtual('Introduce')
    .get(function () {
        return this.name + ' is from ' + this.address;
    })
    .set(function (value) {
        let temp1 = value.split(' ');
        this.name = temp1[0];
        this.address = temp1[1];
    });

// Compile our model
const Person = mongoose.model('Person', schema);

// Create a model instance
const person = new Person({});
person.Introduce = 'Sam NewDelhi';

// Using the virtual
console.log(person.Introduce);
Output


Sam is from NewDelhi
Connected Successful
Explanation
When person.Introduce is set, the set() method splits the value and assigns it to name and address.
The get() method formats and returns the value when accessed.

🔹 Why Use Mongoose Virtuals?
Efficient Data Handling
Compute values dynamically without storing extra fields.

Cleaner Code
Keep computed logic inside the schema.

Improved Data Integrity
Derived fields remain consistent and reliable.

🔹 Conclusion
Mongoose Virtuals are a powerful feature for adding computed fields to MongoDB documents without storing them in the database. By using get() and set() methods, virtuals help manage complex data transformations efficiently.

They are especially useful for derived data such as:

Full names

Addresses

Formatted values

Using virtuals leads to cleaner code, better organization, and improved maintainability.