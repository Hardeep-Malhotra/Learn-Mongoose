
# 💰 Transactions in Mongoose

**Last Updated : 08 Oct, 2025**

---

## 📌 What is a Transaction in MongoDB?

A **transaction** ensures that a group of database operations are executed as a **single atomic unit**.

👉 **Either all operations succeed together OR all of them fail together**

✔ All changes are permanently saved  
❌ Or none of the changes are saved  

Transactions guarantee:

- data consistency  
- data integrity  
- safety in multi-step operations  

### 🏦 Real-life example (bank transfer)

- Account **A → debit ₹1000**  
- Account **B → credit ₹1000**

If **credit fails**, then:

❌ only debit must NOT happen  
✔ both operations must roll back

📌 **This is exactly what transactions do.**

---

## 🧠 Important Transaction Terms

### 1️⃣ Session
A **session** is a container in which a transaction runs.

startSession → startTransaction → operations → commit / abort → endSession

pgsql
Copy code

### 2️⃣ startTransaction()
Starts the transaction  
MongoDB begins tracking all operations executed inside it

### 3️⃣ commitTransaction()
Commits the transaction

✔ permanently saves all operations  
✔ makes changes durable  
❌ cannot be undone afterward  

### 4️⃣ abortTransaction()
Aborts the transaction

❌ discards all changes  
✔ rolls database back to the state before the transaction  

### 5️⃣ endSession()
Closes the session and releases resources

---

## ⚙️ Mongoose Transaction Setup

### ✅ Step 1 — Import & connect Mongoose

```js
import mongoose from "mongoose";

✅ Step 2 — Create a Session

const session = await mongoose.startSession();

✅ Step 3 — Execute operations inside transaction

You can use:

automatic control → withTransaction()

manual control → startTransaction(), commitTransaction(), abortTransaction()

🧩 Example — Using withTransaction()

let session = null;

return Customer.createCollection()
  .then(() => Customer.startSession())
  .then(_session => {
    session = _session;

    return session.withTransaction(() => {
      return Customer.create([{ name: 'Test' }], { session });
    });

  })
  .then(() => Customer.countDocuments())
  .then(count => console.log(`Total customers: ${count}`))
  .then(() => session.endSession());

👤 Transactions with Mongoose Documents
If a document is retrieved using a session, its .save() automatically uses the same transaction session.


const UserModel = db.model('User', new Schema({ name: String }));

let userSession = null;

return UserModel.createCollection()
  .then(() => db.startSession())
  .then(session => {
    userSession = session;
    return UserModel.create({ name: 'john' });
  })
  .then(() => {
    userSession.startTransaction();
    return UserModel.findOne({ name: 'john' }).session(userSession);
  })
  .then(user => {
    user.name = "smith";
    return user.save();
  })
  .then(() => userSession.commitTransaction())
  .then(() => userSession.endSession());

📊 Transactions with Aggregation Framework

const EventModel = db.model(
  'Event',
  new Schema({ createdAt: Date }),
  'Event'
);

let eventSession = null;

return EventModel.createCollection()
  .then(() => db.startSession())
  .then(session => {
    eventSession = session;
    eventSession.startTransaction();

    return EventModel.insertMany(
      [{ createdAt: new Date() }],
      { session: eventSession }
    );
  })
  .then(() =>
    EventModel.aggregate([]).session(eventSession)
  )
  .then(() => eventSession.commitTransaction())
  .then(() => eventSession.endSession());

🔁 Manual Control & Rollback

✔ Manual Transaction Control

const session = await mongoose.startSession();
session.startTransaction();

try {

  await Customer.create([{ name: "Test" }], { session });

  await session.commitTransaction();   // explicit commit

} catch (error) {

  await session.abortTransaction();    // rollback on error
  console.error("Transaction failed:", error);

} finally {

  session.endSession();                // always executed
}


🤖 Automatic Rollback using withTransaction()

const session = await mongoose.startSession();

await session.withTransaction(async () => {

  await Order.create([{ item: "Book" }], { session });

  if (someConditionFails) {
    await session.abortTransaction();
    throw new Error("Transaction aborted due to failed condition");
  }

});

session.endSession();

🧩 Practical JavaScript Example (Bank Transaction)

import mongoose from "mongoose";

async function main() {

  await mongoose.connect("mongodb://127.0.0.1:27017/transactionDemo");
  console.log("MongoDB Connected");

  const accountSchema = mongoose.Schema({
    name: String,
    balance: Number
  });

  const Account = mongoose.model("Account", accountSchema);

  await Account.insertMany([
    { name: "A", balance: 5000 },
    { name: "B", balance: 2000 }
  ]);

  console.log("Users Accounts Inserted Successfully...");

  const session = await mongoose.startSession();
  session.startTransaction();

  try {

    // deduct 1000 from A
    await Account.updateOne(
      { name: "A" },
      { $inc: { balance: -1000 } },
      { session }
    );

    // add 1000 to B
    await Account.updateOne(
      { name: "B" },
      { $inc: { balance: 1000 } },
      { session }
    );

    await session.commitTransaction();
    console.log("Transaction Successfully Completed ✅");

  } catch (err) {

    console.log("Transaction Failed ❌");
    console.log(err);

    await session.abortTransaction();

  } finally {
    session.endSession();
  }

  const accounts = await Account.find();
  console.log("Final Accounts:");
  console.log(accounts);
}

main();

| Step               | Meaning                                |
|--------------------|----------------------------------------|
| **Session**        | Transaction container                  |
| **startTransaction** | Start atomic operation (transaction begins) |
| **commitTransaction** | Save permanently (final write)        |
| **abortTransaction**  | Undo everything (rollback)            |
| **endSession**     | Close session and free resources       |


🎯 Summary

Transaction = all or nothing

prevents half-saved data

ensures strong data consistency

best for:

bank transfers

payments & wallets

inventory management

order processing

requires MongoDB replica set or Atlas cluster