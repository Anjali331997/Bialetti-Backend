const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    user_id: { type: String },
    quantity: { type: Number }
});


const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel }