# 🗑️ Mongoose | findOneAndRemove() Function



The `findOneAndRemove()` function in Mongoose is used to **find the first document that matches a condition and remove it** from the collection. It returns the removed document if found, otherwise `null`.

> ⚠️ Note: In newer versions of Mongoose, `findOneAndDelete()` is preferred. However, `findOneAndRemove()` is still supported for backward compatibility.

---

## ✅ What does findOneAndRemove() do?

- finds **first matching document**
- deletes it from MongoDB
- returns the **deleted document**
- returns **null** if no match is found

---

## 🧾 Syntax

Model.findOneAndRemove(filter, options, callback);


### Parameters

- **filter** → query condition to match document  
- **options (optional)** → additional options  
- **callback (optional)** → function called after deletion  

If callback is omitted, the function returns a **Promise**.

---

## 🛠 Installation

npm install mongoose



Check installed version:

npm version mongoose


---

## ▶️ Example

User.findOneAndRemove(
{ age: { $gte: 5 } },
function (err, doc) {
if (err) console.log(err);
else console.log("Removed User:", doc);
}
);



---

## 🚀 Steps to Run

1. Create project folder  
2. Create `index.js`  
3. Add Mongoose code  
4. Run:

node index.js



---

## 🧠 When to use findOneAndRemove()

Use when you want to:

- delete **only first** matching record
- delete using **any filter** (not only `_id`)
- return the deleted document for logging or audit

---

## 🔍 Recommended Alternatives

| Method | Use case |
|--------|----------|
| `findOneAndDelete()` | preferred modern alternative |
| `deleteOne()` | delete without returning document |
| `deleteMany()` | delete multiple docs |

---

## 🏁 Conclusion

The `findOneAndRemove()` function is useful for:

- locating a document by condition  
- deleting only the **first match**  
- retrieving the deleted document  

For new applications, prefer `findOneAndDelete()`, but this method remains valuable for compatibility and legacy codebases.







