import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/populateDB")
    .then(() => {
        console.log("MongoDB connected ✅");
    })
    .catch((err) => {
        console.log("Error Caught : ", err);
    });



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Post = mongoose.model("Post", postSchema);

async function run() {
    const user = await User.create({
        name: "Hardeep Singh",
        email: "hardeep@example.com"
    });

    console.log("USER CREATED SUCCESSFULLY...", User);


    const post = await Post.create({
        title: "First Post",
        description: "This is my first post",
        author: user._id
    });

    const normalPost = await Post.find();
    console.log("\n❌ Without Populate:");
    console.log(normalPost);

    const populatedPosts = await Post.find().populate("author");


    console.log("\n✅ With Populate:");
    console.log(populatedPosts);


};

run()
    .catch((err) => {
        console.log(err);
    })