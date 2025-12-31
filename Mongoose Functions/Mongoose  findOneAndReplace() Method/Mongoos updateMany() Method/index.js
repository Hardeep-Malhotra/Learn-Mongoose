const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase")
  .then(() => console.log("Connected"))
  .catch(err => console.log("Connection Error:", err));

// 2️⃣ Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("User", userSchema);

// 3️⃣ updateMany() example
async function updateManyUsers() {
  try {

    const result = await User.updateMany(
      { city: "Delhi" },                 // 👉 filter: whom to update
      { $set: { city: "New Delhi" } }    // 👉 what to update
    );

    console.log("✔ Update Result:", result);

  } catch (err) {
    console.log("Error:", err);
  }
}

updateManyUsers();
