// Filename - index.js

const mongoose = require("mongoose");

// 1️⃣ Database connection
mongoose.connect("mongodb://127.0.0.1:27017/userdatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Connection Error:", err));

// 2️⃣ User model
const User = mongoose.model("User", {
  name: { type: String },
  age: { type: Number }
});

// 3️⃣ Finding a document by _id
const id = "5ebadc45a99bde77b2efb20e";

async function findUserById() {

// ⚠️ To avoid errors when the ObjectId is invalid, we add this check
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("❌ Invalid MongoDB ObjectId");
    return;
  }

  try {
    const doc = await User.findById(id);

    if (doc) {
      console.log("Result:", doc);
    } else {
      console.log("❌ No document found for this ID");
    }
  } catch (err) {
    console.log("Query Error:", err);
  }
}

findUserById();
