# 🔐 NodeJS Login System with MongoDB & Passport.js

This is a complete **Login & Registration Authentication System** built using:

- NodeJS  
- ExpressJS  
- MongoDB  
- Mongoose  
- Passport.js (Local Strategy)  
- EJS Templating Engine  

It supports:

✔ User Registration  
✔ Secure Password Hashing  
✔ Login / Logout  
✔ Session-based Authentication  
✔ Protected Routes  
✔ Postman Testing  
✔ Bootstrap UI Pages  

---

## 🚀 Features

- 🧑‍💻 Register new users
- 🔑 Secure login system
- 🛡️ Password hashing using passport-local-mongoose
- 🔒 Access protected routes only after login
- 🚪 Logout functionality
- 🍪 Session-based authentication
- 🗄 MongoDB database storage
- 🎨 Bootstrap forms UI

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Backend | Node.js |
| Framework | Express.js |
| Authentication | Passport.js |
| Database | MongoDB |
| ODM | Mongoose |
| View Engine | EJS |
| Session Storage | express-session |

---

## 📂 Project Structure

login-system
│
├── app.js
├── package.json
├── model
│ └── User.js
└── views
├── home.ejs
├── login.ejs
├── register.ejs
└── secret.ejs



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo / create folder

git clone <your-repo-url>
cd login-system



### 2️⃣ Install dependencies

npm install



### 3️⃣ Start MongoDB server

mongod



### 4️⃣ Run project

nodemon app.js



### 5️⃣ Open in browser

http://localhost:3000



---

## 🧩 Environment Requirements

- NodeJS installed
- MongoDB installed and running
- npm package manager
- Internet for Bootstrap CDN (optional)

---

## 🗄️ Database Used

Database Name:

loginDB


Collection created automatically:

users



Password is **hashed**, not plain text.

---

## 👨‍💻 User Model

```js
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
🔐 Authentication Flow
User registers using username & password

Password gets hashed + salted automatically

User session created

User can login

Protected page /secret opens only after login

Logout destroys session

## 🌐 Routes Overview

| Method | Route | Description |
|--------|-------|-------------|
| GET    | /          | Home page |
| GET    | /register  | Show register form |
| POST   | /register  | Register user |
| GET    | /login     | Show login form |
| POST   | /login     | Login user |
| GET    | /secret    | Protected route |
| GET    | /logout    | Logout user |


🧪 Testing With Postman
🔹 Register User

POST http://localhost:3000/register
Body type:


x-www-form-urlencoded
Fields:

key	value
username	testuser
password	123456

🔹 Login User

POST http://localhost:3000/login
Same body fields as above.

🔹 Access Protected Route

GET http://localhost:3000/secret
Works only after login.

🎨 Views / Pages
Home Page

Register Page

Login Page

Secret Protected Page

All built using EJS + Bootstrap.

🛡️ Security Features
Password hashing

Salt added to passwords

Plain password not stored

Unique usernames

Session based protection

Middleware to protect private routes

⚠️ Common Errors & Fixes
❌ UserExistsError
Reason → Same username already exists

Fix:

Use new username
or

Delete existing user from DB

❌ Cannot POST /register
Reasons:

wrong method (GET instead of POST)

URL has extra space

body not sent as x-www-form-urlencoded

❌ Cannot read property 'username' of undefined
Fix:

Add:

app.use(express.urlencoded({extended:true}));
app.use(express.json());

🚀 Future Improvements

JWT Token-based authentication

Forgot password via email OTP

Role-based login system

Google / GitHub login

Profile page

React frontend integration

🙌 Author

Project created by:
Hardeep Singh

⭐ Summary

This project is ideal for learning:

NodeJS authentication

Passport.js local strategy

MongoDB user management

Secure password storage

Protected routing

Session handling

It can be extended into:

✔ Full Stack App
✔ Admin Dashboard
✔ E-Commerce Auth System
✔ Student Portal Login