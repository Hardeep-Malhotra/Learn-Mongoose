import mongoose from "mongoose";
import express from 'express'
import contactRoutes from './contactForm.js'


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/User",)
.then(() => {
  console.log("MongoDB Connected Successfully ✅");
})
.catch((err) => {
  console.log("MongoDB Connection Error ❌", err);
});

app.use("/", contactRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000 🚀");
});