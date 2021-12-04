require("dotenv").config();

const express = require('express')
const app = express()
app.use(express.json())
const port = 5000




const product=require("./product")

const mongoose = require("mongoose")
const productModel=require("./Models/productModel")

mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Moongo db connect"))
app.get('/', (req, res) => res.send('Welcome to Product Management System'))

app.use("/product",product);


app.post("/addProduct",(req,res)=>{
    const {newProduct}= req.body;
   productModel.create(newProduct);
   return res.json({ data :"Product add successfully"});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))