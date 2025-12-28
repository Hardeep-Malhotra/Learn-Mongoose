// main.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/validation_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Universal Schema with all validators
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Name is required"]        // REQUIRED
  },

  email: {
    type: String,
    required: [true, "Email is required"],      // REQUIRED
    unique: [true, "Email already exists"],     // UNIQUE (index option)
    match: [/^\S+@\S+\.\S+$/, "Invalid email"]  // REGEX / MATCH validator
  },

  age: {
    type: Number,
    required: true,                             // REQUIRED
    min: [18, "Age must be at least 18"],       // MIN
    max: [60, "Age must be below 60"]           // MAX
  },

  username: {
    type: String,
    required: true,
    minlength: [4, "Minimum 4 characters required"], // MIN LENGTH
    maxlength: [12, "Maximum 12 characters allowed"], // MAX LENGTH

    // CUSTOM VALIDATOR
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9]+$/.test(value);    // only alphanumeric
      },
      message: "Username must be alphanumeric"
    }
  }
});

const User = mongoose.model("User", userSchema);

// ❌ Purposely wrong data to see all validations triggering
const demoUser = new User({
  name: "",                // missing
  email: "abc.com",        // invalid + might duplicate
  age: 16,                 // less than 18
  username: "ab@12"        // invalid custom validator
});

(async () => {
  try {
    await demoUser.save();
  } catch (err) {
    console.log("❌ Validation Error Occurred");
    console.log(err.message);
  }
})();
