const { Router } = require("express");
const { ProductModel } = require("../models/product.model");


const ProductRouter = Router();

ProductRouter.get("/", async (req, res) => {
    try {
        const allProducts = await ProductModel.find();
        res.status(200).send(allProducts);
    } catch (error) {
        res.status(500).send({msg : "Error getting all Products data",
    error})
    }
})




module.exports = { ProductRouter };