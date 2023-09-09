const mongoose=require('mongoose');
const User =require('./models/userModels');
const Product=require('./models/productModels')

mongoose.connect('mongodb://127.0.0.1:27017/sathishcode').then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('connected Error')
})

const user = new User({
     name:'sathish',
     age:26
});

const product=new Product({
    productname:'T-Shirt',
    productprice:1000
});

user.save().then(()=>{
    console.log('User Save')
})

product.save().then(()=>{
    console.log('Product Save')
})