## Node.js CRUD Operations Using Mongoose
Node.js, Mongoose, and MongoDB Atlas simplify database operations by enabling schema-based data modeling and cloud storage. With Mongoose, performing Create, Read, Update, and Delete (CRUD) operations becomes easy, structured, and efficient, while MongoDB Atlas provides secure, scalable cloud hosting.

## Node.js CRUD with Mongoose
Here are the steps to setting up Node.js CRUD with Mongoose & MongoDB:

# Step 1: Initialize Node project
Start by creating a new Node.js project. If you haven’t done so already, we can initialize your project by running the following commands:

mkdir nodejs-crud
cd nodejs-crud
npm init -y

This command initializes a package.json file in your project folder. The -y flag auto-generates the package.json file with default values.

The next step is to set up a basic folder structure for the project:

mkdir src
cd src
This folder will contain your application logic, such as the server, routes, models, etc.

# Step 2: Install Mongoose and Express
Express is a minimal web framework for Node.js that makes building APIs easy. Mongoose simplifies the interaction between Node.js and MongoDB by allowing you to define models, Schemas, and interact with the database.

Install both dependencies by running:

npm install express mongoose --save
Express: A fast and minimal web framework for Node.js.

Mongoose: An ODM (Object Data Modeling) library that works as an abstraction layer between your Node.js code and MongoDB.
Once installed, we’re ready to build the basic structure of our server.


## Step 3: Configuring Postman for API Testing
Postman allows us to send HTTP requests to your Node.js API endpoints and check if everything is working. Here’s how to set it up for testing:

Create a New Collection: Group your API requests in collections to keep things organized.

Create Requests for Each CRUD Operation: Set up requests for each of the CRUD operations we will implement (POST, GET, PUT, DELETE).

Test Your Endpoints: Use the relevant HTTP method (GET, POST, PUT, DELETE) to send requests to your server. Ensure that you can add, retrieve, update, and delete data from your MongoDB Atlas database.


# 📚 Node.js CRUD API using Express & Mongoose

A simple and clean REST API demonstrating **CRUD operations** using:

- Node.js
- Express.js
- MongoDB
- Mongoose ODM

This project is perfect for **beginners** who want to understand how backend API works with MongoDB.

---

## 🚀 Features

- Create Record
- Read Records (all + single)
- Update Record
- Delete Record
- MongoDB Connection using Mongoose
- JSON Request Handling

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Runtime | Node.js |
| Framework | Express |
| Database | MongoDB |
| ODM | Mongoose |

---

## 📂 Project Structure

```
node-crud/
│
├── index.js        # Main server file
├── package.json
└── README.md
```

---

## 🔧 Installation & Setup



### 1 Create main file

```
index.js
```

---

## 🧩 MongoDB Connection

Project connects to:

```
mongodb://127.0.0.1:27017/studentDB
```

You can replace with your **MongoDB Atlas URI** if required.

---

## 🧾 API Schema (Model)

A Student document contains:

| Field | Type | Description |
|------|------|--------------|
| name | String | Student Name |
| age | Number | Student Age |
| course | String | Enrolled Course |

---

## 🧑‍💻 API Endpoints (CRUD)

### ▶️ 1. Create Student (POST)
Create a new student object using the StudentModel and save it to the database using .save().
We can even insert new documents without hardcoding the fields as done above. For that, we need to change the request from GET to POST and use the body-parser middleware to accept the new student's data. This ensures that we can insert details of as many students as we need.
**URL**
```
POST /students
```

**Body**
```json
{
  "name": "Hardeep",
  "age": 20,
  "course": "BCA"
}
```

**Response**
```json
{
  "message": "Student Added",
  "student": {
    "_id": "abc123",
    "name": "Hardeep",
    "age": 20,
    "course": "BCA"
  }
}
```

---

### 📥 2. Read All Students (GET)
To retrieve records from a database collection we make use of the .find() function.
To retrieve a single record or the first matched document we make use of the function findOne(). 
**URL**
```
GET /students
```

**Response**
```json
[
  {
    "_id": "abc123",
    "name": "Hardeep",
    "age": 20,
    "course": "BCA"
  }
]
```

---

### 🔍 3. Read Single Student by ID (GET)

**URL**
```
GET /students/:id
```

Example:
```
GET /students/6767ab98bbq123
```

---

### ✏️ 4. Update Student by ID (PUT)
Just like with the delete request, we’ll be using the _id to target the correct item. .findByIdAndUpdate() takes the target’s id, and the request data you want to replace it with.
**URL**
```
PUT /students/:id
```

**Body**
```json
{
  "age": 22
}
```

**Response**
```json
{
  "message": "Updated Successfully"
}
```

---

### 🗑️ 5. Delete Student (DELETE)
To delete a record from the database, we make use of the function .remove(). It accepts a condition that is the parameter according to which it performs deletion. Here the condition is Id:188.We can also use the .findByIdAndDelete() method to easily remove a record from the database. Every object created with Mongoose is given its own _id, and we can use this to target specific items with a DELETE request. 

**URL**
```
DELETE /students/:id
```

**Response**
```json
{
  "message": "Deleted Successfully"
}
```

---

## ▶️ Run the Server

```
node index.js
```

or if using nodemon:

```
npx nodemon index.js
```

---

## 🧠 What You Learn

✔ REST API basics  
✔ How Express routing works  
✔ Mongoose schema & model  
✔ CRUD operations  
✔ Connecting Node with MongoDB  

---

## 🧪 Testing Tools

You can test API using:

- Postman
- Thunder Client (VS Code)
- Insomnia

---

## 📝 Author

**Hardeep Singh**

Happy Coding ❤️

