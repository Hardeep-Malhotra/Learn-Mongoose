
import mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/UserData", {})
    .then(() => {
        console.log("MONGODB connected successfully...................");
    })
    .catch(() => {
        console.log("Something went wrong while MONGODB Connected.......!");
    });

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

const newUser = User.create([
    {
        name: "Rishu",
        age: 21,
    },
    {
        name: "Megha",
        age: 24,
    },
    {
        name: "Aman",
        age: 16,
    },
    {
        name: "Riya",
        age: 18,
    },
]).then(() => {
    console.log("Document inserted successfully✅");
});


User.findOne({ age: { $gte: 21 } })
    .then((res) => {
        console.log("Result are : ", res);
    })
    .catch((err) => {
        console.log("Error Caught : ", err);
    });

User.findOneAndUpdate({ name: "Rishu" }, { age: 22 }, { new: true })
    .then((res) => {
        console.log("updated result : ", res);
    })
    .catch((err) => {
        console.log("Error Caught  : ", err);
    });


User.replaceOne({name:"Rishu"},{name:"Hardeep Singh", age : 20},{new : true})
.then((res)=>{
    console.log("Result are  : " , res);
})
.catch(()=>{
    console.log("Error caught : " , err);
});