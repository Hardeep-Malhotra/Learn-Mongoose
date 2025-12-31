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

// 3️⃣ Delete document using condition
async function removeUser() {
  try {

    const removedUser = await User.findOneAndRemove({
      name: "Aman"          // 👉 any condition (not only _id)
    });

    if (removedUser) {
      console.log("✔ Removed User:", removedUser);
    } else {
      console.log("❌ No user matched the condition");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

removeUser();
