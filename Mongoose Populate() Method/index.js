const mongoose = require("mongoose");

// 🔗 Database connect
mongoose.connect("mongodb://127.0.0.1:27017/populatedb")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));



const classSchema = new mongoose.Schema({
    className: String,
    section: String
});

const Class = mongoose.model("Class", classSchema);

const studentSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    class_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    }
});

const Student = mongoose.model("Student", studentSchema);

async function start() {


    const class1 = await Class.create({
        className: "BCA 3rd semster",
        section: "A"
    });

    const student1 = await Student.create({
        name: "Hardeep Singh",
        roll_no: 1240995005,

        class_Id: class1._id
    });

    console.log("\n👉 WITHOUT POPULATE RESULT\n");
    const s1 = await Student.find();
    console.log(s1);


    console.log("\n👉 WITH POPULATE RESULT\n");
    const s2 = await Student.find().populate("class_Id");
    console.log(s2);
};

start();