const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase")
  .then(() => console.log("Connected"))
  .catch(err => console.log("Connection error:", err));

// 2️⃣ Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("User", userSchema);

// 3️⃣ findOneAndUpdate() example
async function updateUser() {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { name: "Aman" },                 // 👉 filter condition
      { $set: { age: 30, city: "Delhi" } }, // 👉 update fields
      {
        new: true,          // 👉 returns updated document
        runValidators: true // 👉 schema validations applied
      }
    );

    if (updatedUser) {
      console.log("✔ Updated User:", updatedUser);
    } else {
      console.log("❌ No user found with this name");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

updateUser();
