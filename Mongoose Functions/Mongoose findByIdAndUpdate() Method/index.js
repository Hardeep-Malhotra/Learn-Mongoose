const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase")
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

// 2️⃣ Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("User", userSchema);

// 3️⃣ findByIdAndUpdate example
async function updateUser() {

  const id = "65f0b5a2d4c9d66c0b123456"; 

  try {

    // update name & age
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { 
        $set: { name: "Updated Name", age: 30 } 
      },
      { 
        new: true,       // 👉 returns updated document
        runValidators: true 
      }
    );

    if (updatedUser) {
      console.log("✔ Updated User:", updatedUser);
    } else {
      console.log("❌ User not found");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

updateUser();
