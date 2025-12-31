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

// 3️⃣ Delete document by condition (NOT by id)
async function deleteUser() {
  try {

    const deletedUser = await User.findOneAndDelete({
      name: "Aman"          // 👉 condition (any field allowed)
    });

    if (deletedUser) {
      console.log("✔ Deleted User:", deletedUser);
    } else {
      console.log("❌ No user matched the condition");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

deleteUser();
