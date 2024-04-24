const express = require("express");
const { ProductModel } = require("../models/product.model");


const ProductRouter = express.Router();

ProductRouter.get('/test',(req,res)=>{
    res.send("products routes are working")
})

ProductRouter.get("/all", async (req, res) => {
    try {
        const allProducts = await ProductModel.find();
        // console.log(allProducts);
        res.status(200).send(allProducts);
       
    } catch (error) {
        res.status(500).send({msg : "Error getting all Products data",err:"herr"})
    }
})




module.exports = { ProductRouter };