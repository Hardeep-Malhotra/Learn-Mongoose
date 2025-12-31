import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);

// CREATE (POST)
app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send({ message: "Student Added", student });
});

// READ ALL (GET)
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.send(data);
});

// READ SINGLE (GET by id)
app.get("/students/:id", async (req, res) => {
    const data = await Student.findById(req.params.id);
    res.send(data);
});

// UPDATE (PUT)
app.put("/students/:id", async (req, res) => {
    const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: "Updated Successfully", data });
});

// DELETE (DELETE)
app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted Successfully" });
});

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
