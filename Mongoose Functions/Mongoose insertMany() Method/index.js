const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/shop")
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));

// 2️⃣ Schema & Model
const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    inStock: Boolean
});

const Product = mongoose.model("Product", productSchema);

// 3️⃣ insertMany() — universal example
async function addProducts() {

    try {
        const result = await Product.insertMany([
            { title: "Laptop", price: 55000, category: "Electronics", inStock: true },
            { title: "Headphones", price: 2000, category: "Electronics", inStock: true },
            { title: "Chair", price: 3000, category: "Furniture", inStock: false },
            { title: "Notebook", price: 50, category: "Stationery", inStock: true }
        ]);

        console.log("Products inserted successfully:");
        console.log(result);

    } catch (error) {
        console.log("Insert error:", error);
    }
}

addProducts();
