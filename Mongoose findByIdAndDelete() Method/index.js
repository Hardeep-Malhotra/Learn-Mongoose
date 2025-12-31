const mongoose = require("mongoose");

// 1️⃣ Database connection
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Connection Error:", err));

// 2️⃣ User model
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", UserSchema);

// Insert data
async function insertingData() {
  try {
    const users = await User.insertMany([
      { name: "Alice", age: 28 },
      { name: "Bob", age: 34 }
    ]);

    console.log("Data Inserted Successfully");
    console.log(users);

  } catch (err) {
    console.log("Error Inserting Data:", err);
  }
}

// Delete by ID
async function deleteData() {

  try {
    const id = "69547974dc30c164ca1cb12b";

    // To avoid error when ObjectId is invalid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("❌ Invalid MongoDB ObjectId");
      return;
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      console.log("✔ Data Deleted Successfully:", deletedUser);
    } else {
      console.log("❌ No user found with this ID");
    }

  } catch (err) {
    console.log("Delete Error:", err);
  }
}

// insertingData();
deleteData();
