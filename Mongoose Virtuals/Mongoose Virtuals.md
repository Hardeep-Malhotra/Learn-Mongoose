## Mongoose Virtuals
Mongoose virtuals are fields that are not saved in the database. They are made from other data in the document, like combining first and last name to make a full name. The get method tells how to calculate the value, and it runs every time the virtual field is used.

## How to Set Up Mongoose Virtuals
To use Mongoose Virtuals, we'll first need to set up a Node.js project and install the Mongoose package. Once Mongoose is installed, we can easily define schemas and add virtual properties for enhanced functionality.

### Methods Of Mongoose Virtuals
Methods Of Mongoose Virtuals:

### 1. Get Method
The get() method of a virtual property allows us to retrieve a value based on existing document fields.

### Example 1: Using the Get Method to Create a Full Name
In this example, we'll use the get() method to create a virtual property that combines a user's first and last name into a full name. This approach makes it easier to retrieve and display the full name without manually concatenating the first and last name fields.

### 2. Set Method
The set() method of a virtual property allows you to modify existing document fields based on the value provided for the virtual property. This is useful when you want to update fields without explicitly specifying each one.

### Example 2: Using the Set Method to Split a Full Name into First and Last Name
In this example, we'll use the set() method to automatically split a full name into first and last name when the virtual property name.full is assigned a value. This approach allows you to update multiple fields with a single input, streamlining the process of handling and storing data.

# Example of get() and set() Method
```js
// Import mongoose library
import mongoose from "mongoose";

// Connect to MongoDB database named "virtualDB"
mongoose.connect("mongodb://127.0.0.1:27017/virtualDB")
    .then(() => {
        console.log("MongoDB connected ✅");
    })
    .catch((err) => {
        console.log("Error Caught : ", err);
    });

// Create user schema with firstName and lastName fields
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

// Define a virtual field called "fullName"
userSchema.virtual("fullName")

    // Getter: how to return fullName when accessed
    .get(function () {
        // Join firstName and lastName with a space
        return this.firstName + " " + this.lastName;
    })

    // Setter: how to split fullName when value is assigned
    .set(function (value) {
        // Split the full name into parts based on space
        const parts = value.split(" ");

        // Assign first and last name separately
        this.firstName = parts[0];
        this.lastName = parts[1];
    });

// Create User model from schema
const User = mongoose.model("User", userSchema);

// Create user by providing first and last name separately
const user1 = new User({
    firstName: "Hardeep",
    lastName: "Singh"
});

// Accessing virtual fullName using getter
console.log("FullName : ", user1.fullName);

// Create user by providing fullName only (setter runs automatically)
const user2 = new User({
    fullName: "Hardeep Singh"
});

// Display first and last name generated from setter
console.log("FirstName : ", user2.firstName);
console.log("LastName : ", user2.lastName);
