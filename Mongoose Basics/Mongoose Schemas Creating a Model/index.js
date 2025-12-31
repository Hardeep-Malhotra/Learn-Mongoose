// index.js

// 1️⃣ Import mongoose
const mongoose = require("mongoose");

// 2️⃣ Connect to MongoDB (database name = magesDB)
mongoose
  .connect("mongodb://127.0.0.1:27017/magesDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("Connection Error ❌", err));

/*
  3️⃣ Create Schema
  👉 Schema = Blueprint/Structure of document
*/
const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // field must be present
  },
  power_type: {
    type: String,
    required: true,
  },
  mana_power: Number,
  health: Number,
  gold: Number,
});

/*
  4️⃣ Create Model from Schema
  👉 Model = Class / Blueprint for collection
  👉 MongoDB collection name automatically: mages
*/
const Mage = mongoose.model("Mage", mageSchema);

/*
  5️⃣ Create Document (real data)
  👉 Document = record created from model
*/
const mage1 = new Mage({
  name: "Takashi",
  power_type: "Element",
  mana_power: 200,
  health: 1000,
  gold: 10000,
});

/*
  6️⃣ Save Document to MongoDB
*/
mage1
  .save()
  .then((result) => {
    console.log("Document Saved 📄");
    console.log(result);
  })
  .catch((err) => {
    console.log("Error ❌", err);
  });
