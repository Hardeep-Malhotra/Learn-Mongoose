
const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/IndexDB")
    .then(() => console.log("MongoDB Connected ✅"))
    .catch(err => console.log(err));


const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        index: true,
        required: true
    }
});

const User = mongoose.model("User", personSchema);

User.create({
    name: "Hardeep Singh",
    email: "Example123@gmail.com",
    mobile_no: 8956232345
}).then(() => {
    console.log("Document Inserted Successfully ✅");
}).catch(() => {
    console.log("Something went wrong , while document saving...!");
})