const mongoose = require("mongoose");

const  ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});


const  ProductModel = mongoose.model("product",  ProductSchema);

module.exports = ProductModel