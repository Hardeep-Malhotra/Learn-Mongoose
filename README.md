# 🧩 Learn-Mongoose — Complete Practical Guide to Mongoose ODM

A comprehensive, example-driven repository to master **Mongoose** with **MongoDB** in Node.js application's.

This repo is structured as a **hands-on reference lab** covering:

- Schemas, Models, Queries  
- Validation, Indexes, Virtuals  
- Population & Referencing  
- Middleware, Hooks & Plugin's  
- Transactions & Aggregation  
- CRUD Apps, Pagination, Authentication  
- File upload & retrieval example's  

💡 **Learn Mongoose by building and running focused examples for every major API.**

---

## 🧭 What This Repository Covers
![Learn Mongoose Banner](https://cdn-media-1.freecodecamp.org/images/0%2Ab5piDNW1dqlkJWKe.)
![Learn Mongoose Banner](https://media2.dev.to/dynamic/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fozxvr1f8bby3un9t9xch.png)
![Learn Mongoose Banner](https://miro.medium.com/1%2AfO3aEMPBo3WEGXPbJ__QmQ.jpeg)

### 1️⃣ Mongoose Basics & Connection Setup
- Installing & connecting to MongoDB  
- Local and Atlas connection setup  
- Understanding the Mongoose connection object  

### 2️⃣ Schema API, SchemaType's & Options
- Defining schemas with `mongoose.Schema`  
- Field types: `String`, `Number`, `Boolean`, `Date`, `Array`, `ObjectId`, etc.  
- Schema options for **strict data integrity**  
- Creating models from schemas  

### 3️⃣ Documents vs Models
- Difference between **documents** and **models**  
- CRUD operations: `find()`, `findOne()`, `findById()`  
- Update: `updateOne()`, `updateMany()`, `findOneAndUpdate()`  
- Delete: `deleteOne()`, `findOneAndDelete()`, `findByIdAndDelete()`  
- Helpers: `where()`, `exists()`  

### 4️⃣ Validation, Indexes & Virtuals
- Field validation rules (`required`, `min`, `max`, `match`)  
- Unique and compound indexes for faster queries  
- Virtual properties for computed fields  

### 5️⃣ Populate & Referencing
- Referencing documents across collection's  
- Using `populate()` for **relational-like behavior** in MongoDB  

### 6️⃣ Middleware, Hooks & Plugins
- Pre-save and post-save hooks  
- Custom plugins for reusable logic  

### 7️⃣ Transactions
- Performing atomic operations using **Mongoose sessions**  
- Ensuring data consistency across multiple documents  

### 8️⃣ Aggregation with Mongoose
- Using **MongoDB aggregation pipelines** via Mongoose  
- `$match`, `$group`, `$project`, `$lookup`, `$sort`, `$limit`  

---

## 🧪 Practical Mini-Applications Included

### 📸 Image Upload & Retrieval App
- Upload images using **Multer**  
- Store metadata in MongoDB  
- Retrieve images via Node.js endpoints  

### 📝 Contact Form
![Learn Mongoose Banner](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes/mvc_express.png)
- Store user submissions in MongoDB using a **Mongoose schema**  

### 🔐 Signup/Login System
![Learn Mongoose Banner](https://media2.dev.to/dynamic/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fk2vi3g73qy12ebznxqzs.png)

- Authentication with **Mongoose User model**  
- Password hashing with bcrypt  
- Session handling & protected routes  

### 📄 Pagination Example
- Efficiently paginate large datasets using **Mongoose queries**  

### CRUD Operations Demo Apps
- Real-world examples demonstrating **Create, Read, Update, Delete** flows  

> These examples emphasize **practical usage** rather than just theory.

---

## ▶️ How to Run Examples

```bash
npm install
node index.js
Open the respective folder

Read the .md explanation for context

Run the example file

🎯 Purpose of This Repository
This repo serves as:

📘 Mongoose revision notebook

🧪 Practice ground for every Mongoose feature

🧠 Deep understanding of ODM concepts

🛠️ Interview preparation material

📚 Real examples for learning data modeling

🧠 Skills Demonstrated
Strong MongoDB data modeling

Mongoose Schema mastery

Advanced querying techniques

Middleware & validation usage

Relational data handling via populate()

Building small apps using Mongoose

📂 Suggested Project Structure
Learn-Mongoose/
│
├── Mongoose Basics/
│   ├── Aggregation in MongoDB.md
│   ├── MongoDB Connection Using Mongoose/
│   ├── Mongoose Document API.md
│   ├── Mongoose Documents vs Models.md
│   ├── Mongoose Documents.md
│   ├── Mongoose Plugins.md
│   ├── Mongoose Queries.md
│   ├── Mongoose Schema API.md
│   ├── Mongoose SchemaType.md
│   ├── Mongoose SchemaType Options.md
│   ├── Mongoose Schemas Creating a Model.md
│   ├── Mongoose Schemas Virtuals.md
│   ├── Mongoose Schemas and Indexes.md
│   ├── Mongoose Validation.md
│   ├── Mongoose Virtuals.md
│   └── index.js
│
├── Mongoose Functions/
│   ├── exists() Method
│   ├── find() Method
│   ├── findOne() Method
│   ├── findById() Method
│   ├── findByIdAndUpdate() Method
│   ├── findOneAndUpdate() Method
│   ├── deleteOne() Method
│   ├── update() Method
│   ├── insertMany() Method
│   ├── where() Method
│   └── index.js
│
├── Node.js CRUD Operations Using Mongoose/
│   └── index.js
│
├── Transactions in Mongoose/
│   └── index.js
│
├── Mongoose Image Upload and Retrieval App/
│   ├── uploads/
│   ├── views/
│   ├── model.js
│   ├── app.js
│   └── .env
│
├── Signup Form Using Node.js and MongoDB/
│   ├── public/
│   ├── server.js
│   └── readme.md
│
├── login-System/
│   ├── model/
│   ├── views/
│   ├── app.js
│
├── pagination-example/
│   └── server.js
│
├── README.md
├── package.json
└── .gitignore

👨‍💻 Author
Hardeep Singh
Backend Developer | MERN Stack Learner | Mongoose Explorer

