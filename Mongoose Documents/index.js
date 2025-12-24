import mongoose from "mongoose";

// 1️⃣ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/universalDB")
.then(() => {
    console.log("MongoDB Connected ✅");
})
.catch((err) => {
    console.log("Connection Error ❌", err);
});

// 2️⃣ Schema Definition (with validation)
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    course: {
        type: String
    }
});

// 3️⃣ Model Creation
const Student = mongoose.model("Student", studentSchema);

// 4️⃣ MAIN FUNCTION (All concepts here)
async function run() {

    // 🔹 CREATE DOCUMENT
    const student1 = new Student({
        name: "Hardeep Singh",
        age: 20,
        course: "BCA"
    });

    // 🔹 VALIDATE DOCUMENT
    await student1.validate();  
    console.log("Validation Passed ✅");

    // 🔹 SAVE DOCUMENT
    await student1.save();
    console.log("Document Saved ✅");

    // 🔹 READ DOCUMENT
    const foundStudent = await Student.findOne({ name: "Hardeep Singh" });
    console.log("Found Student:", foundStudent);

    // 🔹 UPDATE USING DOCUMENT
    foundStudent.course = "Full Stack Development";
    await foundStudent.save();
    console.log("Document Updated using save() ✅");

    // 🔹 UPDATE USING QUERY
    const updatedStudent = await Student.findOneAndUpdate(
        { name: "Hardeep Singh" },
        { age: 22 },
        { new: true }
    );
    console.log("Updated using Query:", updatedStudent);

    // 🔹 OVERWRITE DOCUMENT
    updatedStudent.overwrite({
        name: "Hardeep",
        age: 23,
        course: "Software Engineering"
    });
    await updatedStudent.save();
    console.log("Document Overwritten ✅");

}

run().catch(console.error);
