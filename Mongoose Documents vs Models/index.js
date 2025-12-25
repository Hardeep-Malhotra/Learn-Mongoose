const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/modelDocumentExample")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/*
  2️⃣ Create Schema
  👉 Schema defines the structure (fields + types)
*/
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

/*
  3️⃣ Create Model from Schema
  👉 Model = Blueprint / Class
  👉 Model represents collection in MongoDB
*/
const User = mongoose.model("User", userSchema);

/*
  4️⃣ Create Document from Model
  👉 Document = Real data / Record
  👉 Instance of Model
*/
const newUser = new User({
  name: "Hardeep Singh",
  email: "hardeep@example.com",
  age: 21,
});

/*
  5️⃣ Save Document to Database
*/
newUser
  .save()
  .then((savedUser) => {
    console.log("📄 Document Saved Successfully");
    console.log(savedUser);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });
