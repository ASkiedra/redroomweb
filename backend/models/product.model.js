// productSchema = data that gets into mongodb for each product
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// if rows are removed from this, POSTING a request to put products in the database will only work for the rows that have remained
const productSchema = new Schema({
    name: { type: String, required: true },
    imagename: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: Array, required: false },
    maincategory: {type: String, required: false},
    price: { type: Array, required: false },
    orderBy: { type: Array, required: false },
    manufacturer: { type: String, required: false },
    productCode: { type: String, required: true },
    info: { type: String, required: false },
    available: { type: Array, required: true },
    description: { type: Array, required: false },
    extraField: {type: Array, required: false}
},
    {
        timestamps: true,
    });

const Product = mongoose.model("Product", productSchema);



module.exports = Product;