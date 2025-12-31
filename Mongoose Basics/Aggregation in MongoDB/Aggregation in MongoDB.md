# 📌 Aggregation in MongoDB


MongoDB Aggregation is a process for performing advanced data transformations and computations on collections. It uses the aggregation pipeline, where documents pass through a series of stages such as filtering, grouping, sorting, reshaping, and calculating to produce summarized or transformed results.

---

## 🔹 Aggregation Approaches

MongoDB provides multiple approaches for performing aggregation depending on the complexity and type of data analysis you need to perform.

---

## ✅ 1. Single Purpose Aggregation

Single-purpose aggregation methods are designed for simple analytical queries. It is used when we need simple access to document like counting the number of documents or for finding all distinct values in a document. It simply provides the access to the common aggregation which provides straightforward aggregation functions like:

- `count()` → Returns the number of documents in a collection  
- `distinct()` → Retrieves unique values for a specified field  
- `estimatedDocumentCount()` → Provides an estimated count of documents  

### ✔️ Example: Counting Users in Each City

**Query**

```js
db.users.aggregate([
  { $group: { _id: "$city", totalUsers: { $sum: 1 } } }
])
Output


[
  { _id: 'Los Angeles', totalUsers: 1 },
  { _id: 'New York', totalUsers: 1 },
  { _id: 'Chicago', totalUsers: 1 }
]
Explanation

Groups documents by the city field

Uses $sum to count users in each city

Returns _id (city) and totalUsers

✅ 2. MongoDB Aggregation Pipeline
The MongoDB aggregation pipeline is a multi-stage process where each stage transforms documents.
The output of one stage becomes the input of the next stage.

The basic pipeline stages are:

Filtering like queries

Transforming documents

Grouping and sorting

Can also be used in sharded collections

🧠 Example Explanation
$match → filters documents

$group → groups values and performs operations like $sum

aggregate() function supports stages, expressions, accumulators

🔧 Aggregation Pipeline Method

Assume a collection users

{
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "city": "New York"
}

1️⃣ $group — group by city and average age

db.users.aggregate([
  { $group: { _id: "$city", averageAge: { $avg: "$age" } } }
])

2️⃣ $project — select fields

db.users.aggregate([
  { $project: { name: 1, city: 1, _id: 0 } }
])

3️⃣ $match — filter age > 30

db.users.aggregate([
  { $match: { age: { $gt: 30 } } }
])

4️⃣ $sort — sort by age

db.users.aggregate([
  { $sort: { age: 1 } }
])

5️⃣ $limit — limit output documents

db.users.aggregate([
  { $limit: 2 }
])
🚀 How to use MongoDB Aggregation
Steps

Connect to MongoDB

Select collection

Define aggregation pipeline

Run aggregate() query

✔ Example — Average Student Grade

db.students.aggregate([
  {
    $group: {
      _id: null,
      averageGrade: { $avg: "$grade" }
    }
  }
])

⚡ How Fast is MongoDB Aggregation?

depends on pipeline complexity

size of data

indexes

server hardware

optimized for big data

supports real-time analytics

🧩 Practical Node.js Example (index.js)

Below is a complete working example using Mongoose aggregation:


const mongoose = require("mongoose");

// 1️⃣ Connect MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/aggDemo")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

async function insertSimpleUsers() {
    await User.insertMany([
        { name: "Aman", age: 25, city: "Delhi", salary: 30000 },
        { name: "Riya", age: 28, city: "Mumbai", salary: 45000 },
        { name: "Vikas", age: 35, city: "Delhi", salary: 50000 },
        { name: "Neha", age: 22, city: "Chennai", salary: 25000 },
        { name: "Rahul", age: 30, city: "Mumbai", salary: 60000 },
    ]);

    console.log("All users are successfuly inserted.");
};

async function runAggregation() {
    const result = await User.aggregate([

        {
            $match: {
                age: { $gt: 25 }
            }
        },

        {
            $group: {
                _id: "$city",
                totalUsers: { $sum: 1 },
                avgAge: { $avg: "$age" },
                avgSalary: { $avg: '$salary' },
                maxSalary: { $max: "$salary" }
            }
        },
        {
            $project: {
                _id: 0,
                city: "$_id",
                totalUsers: 1,
                avgAge: 1,
                avgSalary: 1,
                maxSalary: 1
            }
        },

        {
            $sort:{
                avgSalary:-1
            }
        },
        {
            $limit:2
        }
    ]);
    
        console.log("Aggregation Result : ");
        console.log(result);
};

async function start(){
    await insertSimpleUsers();
    await runAggregation();
};

start();

▶️ Run this project

node index.js
🎯 What this aggregation does
filters users with age > 25

groups users by city

calculates

total users

average age

average salary

maximum salary

sorts by highest salary

limits top 2 cities

