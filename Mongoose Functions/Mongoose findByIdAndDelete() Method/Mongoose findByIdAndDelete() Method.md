# 🗑️ Mongoose | findByIdAndDelete() Method


The `findByIdAndDelete()` method in Mongoose is used to find and delete a document from a MongoDB collection using its unique `_id` value. This method simplifies deletion operations and is commonly used in real-world applications such as user management systems, blogs, e-commerce platforms, and more.

---

## ❓ What is findByIdAndDelete()?

`findByIdAndDelete()`:

- searches for a document using its `_id`
- deletes the matched document from the collection
- returns the **deleted document** (if found)

It is a modern and preferred alternative to deprecated methods such as `remove()`.

---

## ✅ Syntax

Model.findByIdAndDelete(id, options, callback);



### Parameters

- **id** → the `_id` of the document to delete  
- **options (optional)** → extra settings such as `lean`, `select`  
- **callback (optional)** → handles error or deleted document

---

## 🪜 Steps to Use findByIdAndDelete()

### Step 1 — Install Mongoose

npm install mongoose

### Step 2 — Check installed version (optional)

npm version mongoose


### Step 3 — Create project and file

- create a new folder
- add a JavaScript file like `index.js`
- write your Mongoose code using `findByIdAndDelete()`
- run using:

node index.js



---

## 🔍 How It Works (Process)

1. connect to MongoDB database  
2. define a model (collection schema)  
3. call `findByIdAndDelete()` with a valid `_id`  
4. the matching document is deleted  
5. the deleted document is returned as the result  

---

## ⭐ Why use findByIdAndDelete()?

- ✔ clear & easy API
- ✔ deletes using unique `_id`
- ✔ returns deleted document
- ✔ avoids deprecated functions like `remove()`
- ✔ part of modern Mongoose API

---

## 🧠 Important Notes

- `_id` must be a **valid MongoDB ObjectId**
- if no matching document is found → result will be `null`
- if invalid id format is passed → it may throw an error
- use validation to avoid invalid `_id` errors

---

## 📝 Conclusion

`findByIdAndDelete()` is a powerful and simple Mongoose method to:

- find a document by its `_id`
- delete it from the database
- receive the deleted document as output

It is widely used in applications where records must be removed securely and efficiently, such as user accounts, posts, orders, and more.
