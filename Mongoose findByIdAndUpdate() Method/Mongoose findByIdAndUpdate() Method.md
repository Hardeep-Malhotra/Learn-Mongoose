# 🔁 Mongoose | findByIdAndUpdate() Function


The `findByIdAndUpdate()` function in Mongoose is used to **find a document by its `_id` and update it** with new values. It performs the find and update operations together in a single atomic operation, which ensures reliability and data consistency.

This method is especially useful when you already know the document’s `_id` and want to update specific fields without fetching the entire document first.

---

## ❓ What is Mongoose findByIdAndUpdate()?

`findByIdAndUpdate()`:

- searches a document using `_id`
- updates the matched document
- optionally returns the updated document
- performs the operation atomically

It is part of Mongoose’s modern and efficient Query API.

---

## ✅ Syntax

Model.findByIdAndUpdate(id, update, options, callback);



---

## 🧩 Parameters

### 1. `id`
The unique `_id` of the document you want to update.

### 2. `update`
An object containing fields and new values to update.

Example:

{ name: "John", age: 25 }



or with update operators:

{ $set: { name: "John" }, $inc: { age: 1 } }


### 3. `options` (optional)

Common options:

| Option | Description |
|--------|-------------|
| `new` | returns updated document if true (default: false) |
| `upsert` | creates document if not found (default: false) |
| `runValidators` | applies schema validators during update |

### 4. `callback` (optional)
A function to handle result or error.  
If omitted, the function returns a **Promise**.

---

## 🔙 Return Value

- returns **updated document** when `new: true`
- returns **original document** when `new: false` (default)
- returns **null** if no document matches `_id`

---

## 🛠 How to Use findByIdAndUpdate()

### Step 1 — Install Mongoose

npm install mongoose


### Step 2 — Check version (optional)

npm version mongoose



### Step 3 — Create script and run

- create `index.js`
- write your code using `findByIdAndUpdate()`
- run:

node index.js



---

## ⭐ Why Use findByIdAndUpdate()?

- ✔ atomic operation (find + update together)
- ✔ efficient and fast
- ✔ less code than separate find() and update() calls
- ✔ ideal when `_id` already known

---

## 🧠 Common Use Cases

- updating user profile information
- changing account status (e.g., `isActive`, `isVerified`)
- modifying numeric counters (likes, votes, points)
- updating document fields in real-time applications

---

## ⚠️ Important Notes

- `_id` must be a **valid MongoDB ObjectId**
- invalid `_id` may throw an error
- use `runValidators: true` to enforce schema validation
- `new: true` is needed to return updated document

---

## 📝 Conclusion

The `findByIdAndUpdate()` function in Mongoose is a powerful and efficient way to:

- locate a document by `_id`
- update specific fields
- perform the operation atomically

It simplifies code, improves performance, and is widely used in applications such as user management, content updates, and status changes.