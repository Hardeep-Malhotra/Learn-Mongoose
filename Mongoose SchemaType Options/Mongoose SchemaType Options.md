# 📘 Mongoose SchemaType Options

**Last Updated : 09 Jun, 2025**

Mongoose is a robust Object Data Modeling (ODM) library for MongoDB and Node.js that makes database interactions easy. One of Mongoose's main features is its SchemaType options, which developers can use to specify the shape and behavior of data in MongoDB. Mastering these options is important to make sure that your data is validated, indexed, and managed within your MongoDB collections.

In this article, we will discuss the various SchemaType options provided by Mongoose with examples so that you can take advantage of these feature-rich options for more effective data modeling and validation.

---

## 🔹 What are Mongoose SchemaType Options?

In Mongoose, a schema type is an attribute of a schema that specifies the type, required, and other properties of a field in a MongoDB collection. Schema types are utilized to ensure the validation of data that is being stored in the collection and to specify how the data should be stored in the database.

You can specify a schema type in a Mongoose schema by providing the type of the field and any preferred options.

---

## 🔹 Commonly Used Mongoose SchemaType Options

Mongoose schema types have several options that you can use to customize the behavior of your schema. Some of the options available for schema types include:

- **required**  
  This option specifies whether a value for the field is required. If set to true, the field will be required in all documents. Not specifying this field will by default have a value of false.

- **default**  
  This setting defines a default value for the field. If no field value is specified in a new document, it will use the default value.

- **unique**  
  This setting defines whether the values in the field should be unique throughout all documents in the collection (For example: username field).

- **index**  
  This parameter defines whether to create an index on the field. Indexes can enhance the performance of queries and other operations on the field.

- **sparse**  
  This option specifies whether to create a sparse index for the field. A sparse index only includes documents that have a value for the indexed field.

- **validate**  
  This option allows you to specify a validation function for the field. The function will be invoked when a new document is saved and the document won't be saved if the validation function returns an error.

- **alias**  
  This option allows you to specify an alias for the field. The alias can be used instead of the actual field name in queries and other operations.

- **get and set**  
  These options allow you to specify getter and setter functions for the field. The getter function is invoked when the field is retrieved, and the setter function is invoked when the field is assigned a value.

---

## 🔹 Example 1: Using Multiple SchemaType Options in Mongoose

In the example below, we define a Mongoose schema with a name field of type String. This field is required and has a default value of `John Doe`. Additionally, the name field is set to be unique, and an index is created for it.

The index is also sparse, meaning it will only include documents with a value for name.

We set a validation to ensure the string length is greater than 3. The field also has an alias `full_name`, so you can reference it with that name in queries. Finally, getter and setter functions are applied: when the name field is accessed, it is converted to uppercase, and when it is set, it is converted to lowercase.

```js
// Creating an example schema
// using different schema type options
const mongoose = require('mongoose');

// Defining schema
let schemaClass = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'John Doe',
        unique: true,
        index: true,
        sparse: true,
        validate: (value) => value.length > 3,
        alias: 'full_name',
        get: (value) => value.toUpperCase(),
        set: (value) => value.toLowerCase()
    }
});

// creating model from the schema
let Schema = mongoose.model('Schema', schemaClass);

let schema1 = new Schema({
    name: "GeeksForGeeks"
});

// will have a default value of John Doe
let schema2 = new Schema({});

console.log(schema1);
console.log(schema2);
📌 Output
schema1 output

schema2 output

📌 Explanation
In this schema, the name field is configured with several options: it is required with a default value of John Doe, unique to ensure no duplicates, and indexed for faster querying. The sparse index ensures the index only includes documents with a defined name.

A custom validation ensures the name is longer than 3 characters. The field also has an alias full_name, and get/set functions automatically convert the name to uppercase when accessed and lowercase when set.

🔹 Example 2: Schema for a Book Document
Here’s an example of a book schema. The schema includes:

A title field (required string)

An author field (required string)

A publishedDate field (required date)

A pageCount field (required number)

A publisher field (optional string)

A coverImageUrl field (optional string)

js
Copy code
// Creating an example schema
const mongoose = require('mongoose');

// Defining schema
let bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    publisher: String,
    coverImageUrl: String
});

// creating model from the schema
let Book = mongoose.model('Book', bookSchema);

let book = new Book({
    title: "DSA",
    author: "GeeksForGeeks",
    publishedDate: new Date(),
    pageCount: 512,
});

console.log("Book:", book);
📌 Output
book

📌 Explanation
This example illustrates the use of the required option:

required: true ensures that the title, author, publishedDate, and pageCount fields are mandatory when creating a new book document.

publisher and coverImageUrl are optional fields and do not have the required option set.

🔹 Conclusion
Mongoose SchemaType options offer robust capabilities for data validation, manipulation, and indexing within MongoDB collections. Through the specification of options such as required, default, unique, and validate, developers can ensure data integrity and improve performance.

Mastering and utilizing SchemaType options is essential to developing strong and scalable applications with MongoDB and Node.js.