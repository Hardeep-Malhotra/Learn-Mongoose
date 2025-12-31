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

// 3️⃣ Remove document by _id
async function removeUserById() {

  const id = "65f0c1b2e9a8c44c12345678";   
  try{

    // optional: validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("❌ Invalid MongoDB ObjectId");
      return;
    }

    const deletedUser = await User.findByIdAndRemove(id);

    if (deletedUser) {
      console.log("✔ Deleted User:", deletedUser);
    } else {
      console.log("❌ No user found with this ID");
    }

  } catch (err) {
    console.log("Error:", err);
  }
}

removeUserById();
