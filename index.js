const express = require('express')
const mongoose = require("mongoose");
const Product = require("./models/product.model.js")
const app = express();
const productRoute = require("./routes/product.route.js")

app.use(express.json())


//call routes
app.use("/products", productRoute);


mongoose.connect("mongodb://localhost:27017/Node-API")
.then(() =>{
    console.log("Connected to database");  
})
.catch(() =>{
    console.log("Connected failed")
});


app.get('/', (req,res) =>{
   res.send("Welcome from node API for Testing")
})




app.listen("3000", () =>{
    console.log("App run 3000 port");
})