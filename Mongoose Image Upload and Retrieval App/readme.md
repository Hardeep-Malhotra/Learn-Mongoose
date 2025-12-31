# 🖼️ MongoDB Image Upload & Retrieval App

This is a Node.js project that allows users to **upload images and store them in MongoDB** using **Mongoose**.  
Images are uploaded using **Multer**, stored as **Buffer**, and retrieved and displayed from the database.

---

## 🚀 Features

- Upload image with title & description  
- Store image directly inside MongoDB  
- Retrieve and display stored images  
- Uses Multer for file uploading  
- Uses EJS as template engine  
- Simple beginner-friendly code  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Multer  
- EJS  

---

## 📂 Project Structure

project-folder
│ app.js
│ model.js
│ .env
│ package.json
│
├── uploads
└── views
└── imagePage.ejs



---

## ⚙️ Installation & Setup

### 1️⃣ Clone or download project

```bash
git clone <project-url>
cd project-folder

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables
Create .env file:


MONGO_URL=mongodb://127.0.0.1:27017/imagesInMongoApp
PORT=3000

4️⃣ Start MongoDB server (if local)
mongod

5️⃣ Run project
nodemon app.js

Server will run at:
http://localhost:3000

📤 API Endpoints
➤ Upload Image

POST /upload
Body (form-data)

Key	Type
name	text
desc	text
image	file

➤ Get All Images

GET /
Returns JSON list of stored images.

🧠 How It Works
User uploads image via form/Postman

Multer stores file in /uploads folder

Node reads file using fs module

Converts image → binary buffer

Saves into MongoDB

Image retrieved as Base64 string

📌 Future Improvements
Delete image feature

Edit image & description

Store images on Cloudinary

JWT authentication

React frontend

👨‍💻 Author
Hardeep Singh
MongoDB • Node.js • Web Development Learner 🚀

