const mongoose=require('mongoose');
const User =require('./models/userModels');

mongoose.connect('mongodb://127.0.0.1:27017/sathishcode').then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('connected Error')
})

const user = new User({
     name:'sathish',
     age:26
});

user.save().then(()=>{
    console.log('User Save')
})