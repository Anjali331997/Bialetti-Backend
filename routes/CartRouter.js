const { Router } = require("express");
const { CartModel } = require("../models/cart.model");

const CartRouter = Router();

CartRouter.get("/", async (req, res) => {
    //authorize user (realtionship maintenance)
    const user_id = req.user_id;
    try {
        const cartCartRouters = await CartModel.find({ user_id: user_id });
        res.status(200).send(cartCartRouters);
    } catch (error) {
        res.status(500).send({ msg: "Error getting cart CartRouters, try again later!" })
    }

    /* res.send({ msg: "Inside cart" }) */
})

CartRouter.post("/", async (req, res) => {
    const CartRouter = req.body;
    const id = req.user_id;
    // console.log(CartRouter);
    // console.log(id);
    try {
        const cartCartRouter = new CartModel({
            ...CartRouter,
            quantity : 1,
            user_id: id
        });
        console.log(cartCartRouter);
        await cartCartRouter.save();
        res.status(200).send({ msg: "CartRouter added to cart successfully" })
    } catch (err) {
        res.status(500).send({ msg: "Error adding CartRouter to cart" })
    }
})

CartRouter.delete("/cart/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await CartModel.findByIdAndDelete({ _id: id });
        console.log(result)
        res.status(200).send({ msg: "CartRouter deleted successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Error deleting CartRouter from cart" })
    }
})

CartRouter.get("/checkout", (req, res) => {
    res.send({ msg: "Inside checkout" })
})