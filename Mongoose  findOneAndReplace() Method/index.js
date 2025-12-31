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

// 3️⃣ Example: findOneAndReplace()
async function replaceUser() {
  try {

    const result = await User.findOneAndReplace(
      { name: "Aman" },                // 👉 filter condition
      {                                // 👉 NEW DOCUMENT replaces old
        name: "Updated User",
        age: 30,
        city: "Delhi"
      },
      {
        new: true,          // 👉 return replaced document
        upsert: false       // 👉 don't create new if not found
      }
    );

    if (result) {
      console.log("✔ Replaced Document:", result);
    } else {
      console.log("❌ No matching user found");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

replaceUser();
