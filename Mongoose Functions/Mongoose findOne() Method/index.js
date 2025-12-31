const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase")
  .then(() => console.log("Connected"))
  .catch(err => console.log("Connection Error:", err));

// 2️⃣ Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// 3️⃣ findOne() Example
async function findOneUser() {
  try {

    // 👉 Find first user with name = "Aman"
    const user = await User.findOne({ name: "Aman" });

    if (user) {
      console.log("✔ User Found:", user);
    } else {
      console.log("❌ No user found");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

findOneUser();
