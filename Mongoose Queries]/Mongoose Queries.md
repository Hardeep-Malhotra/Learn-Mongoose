 ## 🍃 Mongoose Queries 

 GuideMongoose queries provide an easy and organized way to interact with a MongoDB database. They are used to find, add, update, or delete data efficiently using JavaScript.

 ## 📌 Common Use CasesCreate:
  Adding new documents to the database.Read: Retrieving documents from MongoDB.Update: Modifying existing documents.Delete: Removing documents from the database.

  🛠 Basic SyntaxThe basic way to create a Mongoose model and execute a query is shown below:JavaScriptconst Student = mongoose.model('Student', studentSchema);

// Example: Finding a student by name and updating their age

Student.findOneAndUpdate({ name: 'John' }, { age: 21 }, (err, student) => {
    if (err) return handleError(err);
    else {
        console.log("Updated successfully");
    }
});

Model: mongoose.model('Student', studentSchema) creates the Student
model.Query: findOneAndUpdate searches for "John" and updates his data.Callback: Used to handle errors or confirm a successful operation.

 ## 🔍 Types of Mongoose QueriesMongoose provides various built-in methods to perform CRUD operations:

 **Model.find()** Returns all documents that match the filter.
 **Model.findOne()** Returns the first document that matches the filter.
 **Model.findById()**Searches for a document specifically by its unique ID.Model.
 **updateOne()**Updates the first document that matches the filter.Model.
**updateMany()**Updates all documents that match the filter.
 **Model.deleteOne()**Deletes the first document that matches the filter.
 **Model.deleteMany()**Deletes all documents that match the filter.
 **Model.findByIdAndDelete()**Finds a document by ID and deletes it.
 **Model.findOneAndReplace()**Finds a document and replaces it with a new one.
 
 ## 🚀 Step-by-Step Implementation ExampleIn this example, we will create a Student Model, save student records, and update their status based on their age.
**Step 1:** Initialize ProjectBashnpm init -y
**Step 2:** Install MongooseBashnpm i mongoose
**Step 3:** Create the Application (index.js)JavaScriptconst mongoose = require("mongoose");
```js
## // Database connection
mongoose.connect("mongodb://localhost:27017/schoolDB");

## // 1. Defining the Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 8 },
    highschool: { type: Boolean, default: false },
});

## // 2. Creating the Model
const Student = mongoose.model("Student", studentSchema);

## // Function to save a student record
const saveStudent = async (name, age) => {
    let s = new Student({
        name: name,
        age: age,
    });
    await s.save();
    console.log(`Student saved: ${s.name}`);
};

## // Query to update students where age > 12 to highschool status
const updateHighSchoolStatus = async () => {
    await Student.updateMany(
        { age: { $gt: 12 } }, 
        { highschool: true }
    );
    console.log("✅ Updated highschool status for eligible students.");
};

const run = async () => {
    // Adding sample data
    await saveStudent("Ajay", 5);
    await saveStudent("Rajesh", 13);
    await saveStudent("Manav", 15);
    
    // Updating records
    await updateHighSchoolStatus();
    
    console.log("Process Finished.");
};

## run();

🖥️ How to RunOpen your terminal and run:Bashnode index.js
Result: In MongoDB, Rajesh and Manav will have highschool: true because their age is greater than 12, while Ajay will remain false.🏁 SummaryMongoose makes database management intuitive by using schemas and models. By utilizing these queries, you can maintain data integrity and build robust Node.js applications.