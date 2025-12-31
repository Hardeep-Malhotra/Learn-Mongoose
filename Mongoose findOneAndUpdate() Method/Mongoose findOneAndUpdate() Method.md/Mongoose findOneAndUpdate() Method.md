# 🔄 Mongoose | findOneAndUpdate() Method


The `findOneAndUpdate()` method in Mongoose is an essential tool for performing **atomic updates** in MongoDB, ensuring data consistency and integrity. It is especially useful in multi-user environments where multiple updates may target the same document. By using atomic operations, `findOneAndUpdate()` guarantees that a modification is applied safely, preventing race conditions and data conflicts.

---

## 🎯 What is Mongoose findOneAndUpdate()?

The `findOneAndUpdate()` method:

- finds a single document that matches a specified filter  
- updates the document in an **atomic** operation  
- can optionally return the **updated** document  

This makes it highly suitable when you want to modify a document based on a particular condition.

---

## ⭐ Key Features

- ✔ **Atomic updates** — prevents conflicts during concurrent updates  
- ✔ **Returns updated document** using `new: true`  
- ✔ **Supports upsert** (insert if not found)  
- ✔ Works with callbacks, Promises, and async/await  

---

## ⚙️ How Atomic Updates Work

An operation is **atomic** when it is executed as a single, indivisible step.

`findOneAndUpdate()`:

- finds the matching document  
- updates it in a single operation  
- prevents overlapping writes during execution  

This ensures data safety in concurrent systems.

---

## 🧾 Syntax

Model.findOneAndUpdate(filter, update, options, callback);



### Parameters

- **filter** → query condition to match document  
- **update** → update operations (`$set`, `$inc`, etc.)  
- **options (optional)**  
  - `new: true` → returns updated document  
  - `upsert: true` → creates document if not found  
- **callback (optional)** → executed after operation completes  

### ✔ Return Type

- Updated document (if `new: true`)  
- Original document (default behavior)  
- `null` if no document matches  

---

## 🛠 Examples

### ✅ Example 1 — Basic usage

Updates email of user named **Alice**:

User.findOneAndUpdate(
{ name: "Alice" },
{ $set: { email: "alice@example.com" } },
{ new: true },
(err, user) => {
if (err) console.error(err);
console.log(user);
}
);


---

### ✅ Example 2 — Upsert (update or insert)

Book.findOneAndUpdate(
{ title: "The Great Gatsby" },
{ $set: { price: 19.99 } },
{ upsert: true, new: true },
(err, book) => {
if (err) console.error(err);
console.log(book);
}
);


If book exists → price updated  
If not → new book created ✔

---

### ✅ Example 3 — Updating discriminator key

Animal.findOneAndUpdate(
{ name: "Fido", __t: "Dog" },
{ $set: { __t: "Cat" } },
{ new: true },
(err, animal) => {
if (err) console.error(err);
console.log(animal);
}
);



---

## 🚀 Installing Mongoose

npm install mongoose



Verify installation:

npm version mongoose



---

## ▶️ Running a Project

1. Create folder  
2. Create `index.js`  
3. Add Mongoose code  
4. Run:

node index.js


---

## 🧪 Verify Changes

Open database in:

- MongoDB Compass  
- Robo3T  
- Mongo Shell  

Check whether the document was updated as expected.

---

## 🏁 Conclusion

The `findOneAndUpdate()` method in Mongoose is a powerful way to:

- perform atomic updates  
- prevent concurrent conflicts  
- insert documents using upsert  
- return updated documents  

Understanding this method allows developers to update MongoDB documents safely, efficiently, and with minimal code. It is a fundamental part of building real-world Node.js + MongoDB applications.







