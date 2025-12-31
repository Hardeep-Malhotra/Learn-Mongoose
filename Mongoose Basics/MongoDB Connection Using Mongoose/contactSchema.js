import mongoose, { mongo } from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Phone_no:{
        type:Number,
        required:true
    }
});

const contact = mongoose.model("Contact",contactSchema);

export default contact;