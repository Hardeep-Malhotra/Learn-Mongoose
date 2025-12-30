const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/school")
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));

// 2️⃣ Schema & Model
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const Student = mongoose.model("Student", studentSchema);

// 3️⃣ Sample data insert (run once)
async function insertData() {
    await Student.insertMany([
        { name: "Amit", age: 20, city: "Delhi" },
        { name: "Gourav", age: 22, city: "Pune" },
        { name: "Amit", age: 25, city: "Mumbai" }
    ]);
    console.log("Sample data inserted");
}

// 4️⃣ update() example – change Amit → Gourav
async function updateExample() {

    // before update — check data
    const before = await Student.find({ name: "Gourav" });
    console.log("Before Update:", before);

    // ⭐ update() function
    Student.update(
        { name: "Amit" },                 // filter
        { $set: { name: "Gourav" } },     // update operation
        function (err, result) {
            if (err) console.log(err);
            else console.log("Update Result:", result);
        }
    );

    // after update — check data again
    const after = await Student.find({ name: "Gourav" });
    console.log("After Update:", after);
}

// insertData();   // run only once
updateExample();