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
