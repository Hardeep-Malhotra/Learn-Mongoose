# 🗑️ Mongoose | findOneAndDelete() Function


The `findOneAndDelete()` function in Mongoose is used to find a single document that matches a specified filter and delete it from the MongoDB collection. This method simplifies document removal and is widely used in Node.js applications that interact with MongoDB.

It deletes **only the first matching document** and returns the deleted document if found.

---

## 🎯 Purpose of findOneAndDelete()

The `findOneAndDelete()` function:

- searches for a document using a filter condition  
- deletes the first document that matches the filter  
- returns the deleted document (or `null` if no match is found)

It is considered a **modern alternative** to older methods such as `remove()` and supports async/await as well as callback styles.

---

## ✅ Syntax

Model.findOneAndDelete(filter, options, callback);



### Parameters

- **filter** → specifies which document to delete  
- **options (optional)** → additional settings such as sort or projection  
- **callback (optional)** → function executed after operation completion  

If no callback is provided, the method returns a **Promise**.

---

## 🧠 Return Value

- **Success** → deleted document is returned  
- **No match** → `null` is returned  

This makes it easy to log deleted data or perform additional operations after deletion.

---

## 🪜 Steps to Use findOneAndDelete()

### Step 1 — Install Mongoose

npm install mongoose



### Step 2 — Check installed Mongoose version (optional)

npm version mongoose


### Step 3 — Set up project

- create a new folder  
- create a file such as `index.js`  
- write your Mongoose code  
- run the script using:

node index.js


---

## 🔍 How findOneAndDelete() Works

1. Connect to MongoDB  
2. Define a Mongoose model  
3. Call `findOneAndDelete()` with a filter condition  
4. First matched document is deleted  
5. Deleted document is returned  

Example condition types:

- `{ age: { $gte: 18 } }`
- `{ name: "John" }`
- `{ email: "test@gmail.com" }`

---

## ⭐ Why Use findOneAndDelete()?

- ✔ clear and simple syntax  
- ✔ deletes using **any filter** (not only `_id`)  
- ✔ returns deleted document  
- ✔ supports callbacks, Promises, and async/await  
- ✔ efficient for deleting a **single document**

---

## 🧠 Common Use Cases

- delete user by email
- remove record older than specific age/date
- delete first post matching a condition
- removing flagged/disabled accounts

---

## ⚠️ Important Notes

- only the **first matching document** is deleted  
- use `deleteMany()` to delete multiple documents  
- returned result can be `null` if no match exists  
- handle errors using try–catch or callbacks

---

## 📝 Conclusion

The `findOneAndDelete()` function in Mongoose is a powerful and convenient method for:

- locating a document using a filter condition  
- deleting the matched document  
- retrieving the deleted document for logging or further processing  

Its clear syntax, Promise support, and efficient behavior make it an ideal choice for applications that need reliable and simple document deletion in MongoDB.
