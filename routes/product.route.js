 const express = require("express");
 const router = express.Router();
 const Product = require("../models/product.model.js")
 const {getProducts, getSingleProduct, createProducts,
        updateProducts, deleteProduct} = require("../Controllers/product.controller.js")

 router.get("/", getProducts);
 router.get("/:id", getSingleProduct);
 router.post("/",createProducts);
 router.put("/:id", updateProducts);
 router.delete("/:id", deleteProduct)


 module.exports = router;