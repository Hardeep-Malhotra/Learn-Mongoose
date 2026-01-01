

# 📚 Node.js + MongoDB Pagination API

This project demonstrates **Pagination in MongoDB using Node.js, Express, and Mongoose**.

It explains how to use:

- `limit()`
- `skip()`
- `page & limit query parameters`
- `MongoDB data se pagination`

---

## 🚀 Features

- Simple and clean REST API
- Skip–Limit based pagination
- Sample data generator endpoint
- Sorting with `_id`
- Beginner friendly code

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📦 Installation

### 1️⃣ Clone or download project

```bash
git clone <your-repo-url>
cd pagination-example
2️⃣ Install dependencies

npm install
3️⃣ Start MongoDB
Ensure MongoDB is running locally:


mongod
4️⃣ Run the server

node server.js
Server will run at:

http://localhost:5000
🗄 MongoDB Connection
Default database used:


mongodb://localhost:27017/paginationDemo
🧩 API Endpoints
✅ Add Sample Data
This endpoint inserts 20 demo users into MongoDB.

GET /add-sample
Response:

Sample data added successfully 😎
📃 Get Paginated Users

GET /users?page=<number>&limit=<number>
🔹 Example Requests
Description	URL
Page 1, 5 users per page	/users?page=1&limit=5
Page 2	/users?page=2&limit=5
Page 3	/users?page=3&limit=5
Default (page=1, limit=5)	/users

🧠 Pagination Logic

Formula used:

skip = (page - 1) * limit
Example:

page = 3

limit = 5

Then:

skip = (3 − 1) × 5 = 10
Meaning:

first 10 records skipped

next 5 returned

🧾 API JSON Response Example

{
  "page": 2,
  "limit": 5,
  "totalDocuments": 20,
  "totalPages": 4,
  "resultsOnThisPage": 5,
  "data": [
    {
      "_id": "65a1234bcf8e92d12",
      "name": "Karan",
      "age": 28
    }
  ]
}

⭐ Future Enhancements

🔘 Next / Previous buttons UI

⚡ Cursor-based pagination

🌐 React frontend

🔍 Search + filter + pagination combo

👨‍💻 Author
Hardeep Singh

🎯 Summary
This project is ideal for:

Beginners learning MongoDB pagination

REST API learners

MERN stack projects

Interview preparation