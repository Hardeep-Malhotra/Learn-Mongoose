const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/virtualDB")
    .then(() => console.log("MongoDB Connected ✅"))
    .catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
});

// ✅ Virtual with NORMAL function (IMPORTANT)
userSchema.virtual("fullname")
  .get(function () {
      return this.firstname + " " + this.lastname;
  })
  .set(function (value) {
      const parts = value.split(" ");
      this.firstname = parts[0];
      this.lastname = parts[1];
  });

// Model
const User = mongoose.model("User", userSchema);

// Create user
const user = new User({});

// SET virtual
user.fullname = "Hardeep Singh";

// GET values
console.log("First Name:", user.firstname);
console.log("Last Name:", user.lastname);
console.log("Full Name:", user.fullname);
