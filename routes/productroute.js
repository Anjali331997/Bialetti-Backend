const { Router } = require("express");
const { ProductModel } = require("../models/product.model");
const { CartModel } = require("../models/cart.model");

const ProductRouter = Router();

ProductRouter.get("/", async (req, res) => {
    try {
        const allProducts = await ProductModel.find();
        res.status(200).send(allProducts);
    } catch (error) {
        res.status(500).send({msg : "Error getting all Products data"})
    }
})


ProductRouter.get("/cart", async (req, res) => {
    //authorize user (realtionship maintenance)
    const user_id = req.user_id;
    try {
        const cartProducts = await CartModel.find({ user_id: user_id });
        res.status(200).send(cartProducts);
    } catch (error) {
        res.status(500).send({ msg: "Error getting cart Products, try again later!" })
    }

    /* res.send({ msg: "Inside cart" }) */
})

ProductRouter.post("/cart", async (req, res) => {
    const Product = req.body;
    const id = req.user_id;
    console.log(Product);
    console.log(id);
    try {
        const cartProduct = new CartModel({
            ...Product,
            quantity : 1,
            user_id: id
        });
        console.log(cartProduct);
        await cartProduct.save();
        res.status(200).send({ msg: "Product added to cart successfully" })
    } catch (err) {
        res.status(500).send({ msg: "Error adding Product to cart" })
    }
})

ProductRouter.delete("/cart/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await CartModel.findByIdAndDelete({ _id: id });
        console.log(result)
        res.status(200).send({ msg: "Product deleted successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Error deleting Product from cart" })
    }
})

ProductRouter.get("/checkout", (req, res) => {
    res.send({ msg: "Inside checkout" })
})

module.exports = { ProductRouter };