# Mongoose Validation

**Last Updated : 22 Sep, 2025**

Mongoose validation is a middleware that runs before a document is saved to the database. It automatically validates data based on rules defined in the schema, ensuring that all fields meet the specified requirements. If the data doesn't meet the validation criteria, an error is thrown, preventing the document from being saved.

---

## Types of Mongoose Validation

In Mongoose there are two types of validation:

1. Built-in Validators  
2. Custom Validators  

---

## 1. Built-in Validators

Mongoose provides several built-in validators that are simple to use and provide out-of-the-box validation for common data requirements.

---

### ⭐ Required Validator

Schema uses Required Validator when it is mandatory that a field cannot be left empty when saving a document. The required validator takes an array with 2 items, first a Boolean var and a message to return the validation if it fails. If the value is missing, Mongoose will throw an error.

#### Syntax

```js
required: [true, "user name is required"]

Without custom error message:

required: true
Example

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  }
});
Explanation: In this example, the field name is required. If an attempt is made to save a document with a missing name, Mongoose will return the error: "Name is required."

⭐ Unique Validator
Unique is not a validator, but an option. If the unique option is set, Mongoose will require each document to have a unique value for each path.

Syntax

unique: [true, 'email already exists']
Without custom message:


unique: true
Example

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists']
  }
});
Explanation: The email field is unique in the database. If a document with a duplicate email is inserted, Mongoose will return an error: "Email already exists."

⭐ Min and Max Validators
The min and max validators ensure that numeric or date values fall within a specified range. If the value is outside the defined bounds, an error is thrown.

Syntax

min: [value, 'Error message']
max: [value, 'Error message']
Example

const personSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
    min: [18, 'Age must be 18 or above']
  }
});
Explanation: In this example, the age field must be at least 18. If an age value lower than 18 is provided, Mongoose will return the error: "Age must be 18 or above".

2. Custom Validators
In addition to the built-in validators, we can define custom validators.

In custom validation, a validation function is passed along with the declaration. Defining a custom validator involves creating a specialized function within the schema's field definition to ensure that the data inserted or updated meets specific criteria beyond the standard validation rules offered by Mongoose.

Defining a Custom Validator
To define a custom validator, we need to pass a validation function to the schema definition. This function can return true for valid data or false (or an error message) for invalid data.

Syntax

validate: function(value) {
  return value === 'expected value';
}
Example

const personSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z0-9]+$/.test(value); // username must contain only letters and numbers
      },
      message: 'Username must be alphanumeric'
    }
  }
});
Explanation: In this example, the username field uses a custom validator that checks if the value contains only alphanumeric characters. If the validation fails, Mongoose will return the error: "Username must be alphanumeric."

How Does Mongoose Validation Work?
Mongoose validation occurs automatically when calling the save() method. Before saving a document, Mongoose runs all validation rules defined in the schema. If the data passes all validations, it is saved to the database. If any validation fails, Mongoose throws an error, and the document is not saved.

Example 1: Basic Validation
In this example, we will use a "required" validator to check whether a value is passed to the document or not before saving it to the DB.


// main.js

const mongoose = require('mongoose')

// Database connection
mongoose.connect('mongodb://localhost:27017/query-helpers', {
    dbName: 'event_db',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to database'));

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);
const person = new Person({});

(async () => {
    try {
        await person.save();
    } catch (err) {
        console.log(err)
    }
})();

Step to Run Application

node main.js
Example 2: Using "Required" and "Min" Validators for Age Validation
In this example, we will use both "required" and a "min" validator to check whether a value is passed to the document or not and whether the value is above a threshold number before saving it to the Database.


// main.js

const mongoose = require('mongoose')

// Database connection
mongoose.connect('mongodb://localhost:27017/query-helpers', {
    dbName: 'event_db',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to database'));

const personSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be 18 or above']
    }
});

const Person = mongoose.model('Person', personSchema);
const person = new Person({ age: 16 });

(async () => {
    try {
        await person.save();
    } catch (err) {
        console.log(err)
    }
})();

Step to Run Application

node main.js