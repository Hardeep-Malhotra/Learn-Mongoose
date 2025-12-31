const { Schema, default: mongoose } = require("mongoose");

// * 1. ObjectId: References to Other Documents
// ~ different collections. This allows you to establish relationships between documents, much like foreign keys in relational databases.

const orderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: Student // ! Reference to the Product model
    }
});
const OrderSchema = mongoose.model(" OrderSchema", orderSchema);


//* 2. Decimal128: High Precision Floating-Point Numbers
// ~ Decimal128 is used to store numbers with very high accuracy.
// ~ It is mainly used for money, price, salary, tax, and other financial values.
// ~ Unlike normal Number type, Decimal128 does not cause rounding errors.
// ~ It keeps the value exact, even for very big or very small decimal numbers.

const priceSchema = new Schema({
  amount: { type: mongoose.Schema.Types.Decimal128, required: true }
});
const Price = mongoose.model('Price', priceSchema);


// * 3. Mixed: Flexible Schema for Unstructured Data
// ~ The Mixed type allows us to store any kind of data in a field. This is useful for situations where the structure of the data may change or is dynamic.

const itemSchema = new Schema({
    name: String,
    data:Schema.Types.Mixed
});
const Item = mongoose.model('Item',itemSchema);
