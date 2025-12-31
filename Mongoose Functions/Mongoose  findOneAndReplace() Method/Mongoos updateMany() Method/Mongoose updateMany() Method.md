# 🔄 Mongoose | updateMany() Method


The `updateMany()` method in Mongoose is used to **update multiple documents at once** that match a given condition. It performs bulk updates in a single operation, making it efficient for modifying large sets of data.

Unlike `updateOne()`, which updates only the first matched document, `updateMany()` applies changes to **all matching documents**.

---

## 🎯 What does updateMany() do?

- ✔ updates **all documents** that match the filter  
- ✔ performs bulk updates in one operation  
- ✔ returns result info (matched & modified count)  
- ❌ does **not** return updated documents

---

## 🧾 Syntax

Model.updateMany(filter, update, options, callback);


### Parameters

- **filter** → condition to select documents  
- **update** → update operation (`$set`, `$inc`, etc.)  
- **options (optional)** → e.g., `upsert: true`  
- **callback (optional)** → handles result & error  

### 🔁 Return Type

- returns a **Query object** containing
  - matchedCount  
  - modifiedCount  
  - acknowledged  

---

## 🛠 Example — basic usage

User.updateMany(
{ age: { $gte: 5 } },
{ name: "ABCD" },
function (err, result) {
if (err) console.log(err);
else console.log("Updated Docs:", result);
}
);

This will:

- find users with age ≥ 5  
- change `name` to **"ABCD"** for **all matches**

---

## ⚙️ Installation Steps

### Install Mongoose

npm install mongoose


### Check version

npm version mongoose



Your `package.json` will contain:

"dependencies": {
"mongoose": "^7.6.5"
}



---

## ▶️ Running the application

1. Create a project folder  
2. Create `index.js`  
3. Add your Mongoose code  
4. Run:

node index.js



---

## 🧠 When to use updateMany()

Use when you want to:

- update many documents at once  
- apply same change to large dataset  
- bulk edit users/products/posts  
- increase counters in batch  

---

## ⚠️ Important Notes

- does **not** return updated documents  
- returns only operation summary  
- for single document → use `updateOne()`  
- for returning updated docs → use `find()` after updating  

---

## 🏁 Conclusion

The `updateMany()` method in Mongoose is ideal for:

- bulk updates  
- batch modifications  
- mass data changes  

It updates **all matching documents** efficiently and returns how many were modified. For single-document updates, use `updateOne()`, and for returned updated docs, combine with find queries.
