const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Product name is required"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },

        price:{
            type:Number,
            required:true,
            default:0
        },
        
        price:{
            type:String,
            required:true
        }
    },
    {
        Timestamp:true
    }
)

const Product = mongoose.model("Product",productSchema);

module.exports = Product;