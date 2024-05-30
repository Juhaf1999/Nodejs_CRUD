const Product = require("../models/product.model.js")



const getProducts = async(req,res) =>{
    try {
        const getData =  await Product.find()
        res.status(200).json(getData)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const getSingleProduct = async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
}

const createProducts = async(req,res) =>{
    try {
        const Prod = await Product.create(req.body);
        res.status(200).json(Prod);
      } catch (error) {
          console.log(error)
          res.status(500).json({message: error.message})
      }
}

const updateProducts = async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        const updateProduct = await Product.findById(id)

        if (!product) {
           return res.status(404).json({message:"Product not found"})
        }

        res.status(400).json(updateProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProduct = async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
    
        if (!product) {
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json("Product Deleted Successfully")
       } catch (error) {
        res.status(500).json({message:error.message})
       }
}

module.exports = {
    getProducts,
    getSingleProduct,
    createProducts,
    updateProducts,
    deleteProduct
}