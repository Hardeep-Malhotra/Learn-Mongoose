# Mongoose SchemaType


Mongoose is a powerful Object Data Modeling (ODM) library for MongoDB, providing a straightforward way to define the structure of documents, enforce validation, and handle database interactions. Mongoose SchemaTypes are key components that define the types of data stored in MongoDB collections, such as strings, numbers, dates.

---

## What Are Mongoose SchemaTypes?

In Mongoose, SchemaTypes define the types of data that a specific field in a MongoDB collection can store. Each SchemaType corresponds to a specific MongoDB data type, allowing us to enforce consistent structure and validation rules for our documents.

Mongoose SchemaTypes support various data types, including strings, numbers, dates, arrays, objects, booleans, and more. By using SchemaTypes, Mongoose ensures that data is consistent and validates according to the type specified.

---

## Syntax:

```js
const schema = new Schema({
    name: { type: String },
    age: { type: Number, default: 10 }, 
});
Understanding the Purpose of Mongoose SchemaTypes
The purpose of using Mongoose SchemaTypes is to structure and validate data consistently. Here are some key reasons why SchemaTypes are important in MongoDB and Mongoose:

Data Validation: SchemaTypes enforce validation rules that ensure data integrity before it is saved in the database.

Type Safety: By defining specific types for each field, SchemaTypes help prevent type mismatches and errors.

Query Optimization: Mongoose and MongoDB optimize queries based on the field types, improving performance when retrieving data.

Default Values: SchemaTypes allow you to set default values for fields, ensuring that they are always initialized when a document is created.

How to Define Mongoose SchemaTypes

To define a SchemaType in Mongoose, we use the Schema() constructor. Here’s how to define a schema with various types:


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  birthdate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  skills: { type: [String] },  // Array of Strings
  profileImage: { type: Buffer },  // Binary Data (Image)
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]  // Array of ObjectIds for relationships
});

const User = mongoose.model('User', userSchema);
Explanation:
String, Number, Boolean, Date, Buffer, and Array are used to define the field types.

The friends field stores an array of ObjectIds, referencing documents in the User collection to create relationships.

Mongoose SchemaTypes and Validation
Mongoose SchemaTypes support various validation options to ensure that the data matches the expected format before saving it to the database. These validations include required, min, max, enum, match, and validate.

Example of Validation:

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0 },
  category: { type: String, enum: ['Electronics', 'Clothing', 'Food'] }
});

const Product = mongoose.model('Product', productSchema);
Explanation:
The name field is required.

The price field must be greater than or equal to 0.

The category field can only have values from a predefined set: "Electronics", "Clothing", or "Food".

Mongoose SchemaTypes for Special Data Types
1. ObjectId: References to Other Documents
The ObjectId type is used to reference other documents in different collections. This allows you to establish relationships between documents, much like foreign keys in relational databases.


const orderSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },  // Reference to the Product model
  quantity: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);
2. Decimal128: High Precision Floating-Point Numbers
For high-precision floating-point numbers (useful for financial data), Mongoose supports the Decimal128 type. This type ensures accuracy by using IEEE 754-2008 double-precision format.


const priceSchema = new Schema({
  amount: { type: mongoose.Schema.Types.Decimal128, required: true }
});

const Price = mongoose.model('Price', priceSchema);
This ensures that financial data remains precise, even with very large or small numbers.

3. Mixed: Flexible Schema for Unstructured Data
The Mixed type allows us to store any kind of data in a field. This is useful for situations where the structure of the data may change or is dynamic.


const itemSchema = new Schema({
  name: String,
  data: Schema.Types.Mixed
});

const Item = mongoose.model('Item', itemSchema);


✅ Best Practices When Using Mongoose SchemaTypes

Always Use Validation: Define clear validation rules for our schema fields to prevent invalid data from being saved to the database.

Leverage Default Values: Use the default option to provide default values for fields that are not explicitly set.

Limit Use of Mixed Type: While the Mixed type offers flexibility, it bypasses validation, so use it sparingly and only for truly dynamic data.

Optimize for Performance: Use appropriate types, like ObjectId for references, to maintain efficient querying and indexing.