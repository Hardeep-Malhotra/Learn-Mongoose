# Signup Form using Node.js and MongoDB

This is a simple Signup Form project built using Node.js, Express.js, and MongoDB.  
The user can submit basic details like name, email, password, and phone number, which are then stored in MongoDB.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Bootstrap (Frontend UI)

---

## 📁 Project Structure

signup-project  
 ├── public  
 │   ├── index.html  
 │   └── signup_success.html  
 ├── server.js  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone or download project  
git clone <repository-link>
cd signup-project



### 2️⃣ Install dependencies  
npm install



### 3️⃣ Start MongoDB (if not already running)

Windows (services) → MongoDB  
or  
mongod



### 4️⃣ Run the project  
node server.js


or (recommended)
npx nodemon server.js



---

## 🌐 Open in browser
http://localhost:3000



---

## 🗄️ Database
Database Name: `gfg`  
Collection Name: `details`

Each document contains:
```json
{
 "name": "",
 "email": "",
 "password": "",
 "phone": ""
}

✔ Features
Signup form with validation

Data stored in MongoDB

Clean Bootstrap UI

Success page after registration

🔒 Security Note
Currently password is stored as plain text (for learning only).
For production use:

bcrypt hashing

form validation

login + JWT


✨ Future Improvements
Login system

Password hashing

Email verification

API version

🧑‍💻 Author
Hardeep Singh