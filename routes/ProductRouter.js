const express = require("express");
const ProductModel = require("../models/product.model.js");


const ProductRouter = express.Router();

ProductRouter.get('/test', (req, res) => {
    res.send({ message: "products routes are working" })
})

ProductRouter.get("/", async (req, res) => {
    try {
        const allProducts = await ProductModel.find({});
        // console.log(allProducts);
        res.status(200).send({ allProducts });

    } catch (error) {
        res.status(500).send({
            "msg": "Error getting all Products data",
            "err": error
        })
    }
})




module.exports = { ProductRouter };