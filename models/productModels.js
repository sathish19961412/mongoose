const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
        productname:String,
        productprice:Number
});


const productModel=mongoose.model('Product',productSchema);


module.exports=productModel;