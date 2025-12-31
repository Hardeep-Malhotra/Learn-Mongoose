# 🗑️ Mongoose | findByIdAndRemove() Function



The `findByIdAndRemove()` function in Mongoose is used to find a document by its unique `_id` and remove it from the MongoDB collection. It is a convenient way to perform both operations (find + remove) in a single step and returns the removed document if it exists.

MongoDB is a popular, cross-platform, document-oriented NoSQL database that provides high availability, high performance, and easy scalability. Mongoose is an ODM (Object Data Modeling) library that allows us to work with MongoDB in Node.js applications more easily.

---

## ✅ What does findByIdAndRemove() do?

The `findByIdAndRemove()` function:

- searches for a document using its `_id`
- removes the matched document from the database
- returns the removed document (if found)

It is part of Mongoose’s document removal API and is useful when you already know the document’s identifier.

> ⚠️ Note: In newer Mongoose versions, `findByIdAndDelete()` is preferred, but `findByIdAndRemove()` is still supported for backward compatibility.

---

## 🔧 Prerequisites

To use `findByIdAndRemove()`, you should be familiar with:

- MongoDB basics  
- Mongoose ODM  
- Node.js and asynchronous operations  

---

## 🧩 Syntax

Model.findByIdAndRemove(id, options, callback);



### Parameters

- **id** → `_id` of the document to remove  
- **options (optional)** → additional settings  
- **callback (optional)** → function called after operation completes  

If callback is omitted, the function returns a **Promise**.

---

## 🚀 Setting up Environment

### Step 1 — Initialize Node.js project

npm init -y


### Step 2 — Install dependencies

npm install express mongoose


### Example dependencies section

"dependencies": {
"express": "^4.18.2",
"mongoose": "^8.0.3"
}



---

## 🛠 How findByIdAndRemove() Works

1. Connect to MongoDB  
2. Define a Mongoose model  
3. Call `findByIdAndRemove()` with a valid `_id`  
4. Matching document is deleted  
5. Deleted document is returned in the result  

---

## ▶️ Steps to Run Program

1. Create project folder  
2. Create file such as `index.js` (or `app.js`)  
3. Add your Mongoose code using `findByIdAndRemove()`  
4. Run the script:

node index.js


---

## 🧾 Output

- If document exists → it is deleted and returned  
- If no document matches `_id` → result is `null`  
- If `_id` is invalid → an error may occur  

You can verify before and after state using MongoDB Compass, Robo 3T, or terminal shell.

---

## ⭐ Why use findByIdAndRemove()?

- ✔ simple, clean API  
- ✔ removes document by `_id` directly  
- ✔ returns removed document for logging/debugging  
- ✔ combines find and remove in one operation  

---

## 📝 Conclusion

The `findByIdAndRemove()` method in Mongoose provides an easy and efficient way to:

- locate a document by its `_id`
- remove it from the database
- receive the deleted document as feedback

It is especially useful for applications such as user management, post deletion, and cleanup operations where documents need to be removed based on their unique identifier.
