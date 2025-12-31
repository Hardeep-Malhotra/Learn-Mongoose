const mongoose = require("mongoose");

// 1️⃣ MongoDB connect
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

// 3️⃣ Sample data insert (only once)
async function insertData() {
    await Student.insertMany([
        { name: "Aman", age: 18, city: "Delhi" },
        { name: "Punit", age: 22, city: "Mumbai" },
        { name: "Neha", age: 19, city: "Delhi" },
        { name: "Punit", age: 25, city: "Pune" }
    ]);
    console.log("Sample Data Inserted");
}

// 4️⃣ find() examples
async function examples() {

    // ➤ Example 1: All students
    const all = await Student.find({});
    console.log("All Students:", all);

    // ➤ Example 2: Condition (name = Punit)
    const onlyPunit = await Student.find({ name: "Punit" });
    console.log("Only Punit:", onlyPunit);

    // ➤ Example 3: Projection (age hide)
    const noAge = await Student.find({ name: "Punit" }, { age: 0 });
    console.log("Age hidden:", noAge);

    // ➤ Example 4: Age >= 20 and limit 1
    const ageLimit = await Student.find({ age: { $gte: 20 } }, null, { limit: 1 });
    console.log("Age >= 20 (limit 1):", ageLimit);

    // ➤ Example 5: Sort by age ascending
    const sorted = await Student.find().sort({ age: 1 });
    console.log("Sorted by Age:", sorted);

    // ➤ Example 6: Pagination (skip+limit)
    const page2 = await Student.find().skip(1).limit(2);
    console.log("Page 2 like result:", page2);
}

// 5️⃣ run functions
// ⚠️ insertData() ko sirf first time run karo
// insertData();

examples();
