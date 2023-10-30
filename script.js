const mongoose=require('mongoose');
const User =require('./models/userModels');


mongoose.connect('mongodb://127.0.0.1:27017/sathishcode').then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('connected Error')
})

// const user = new User({
//      name:'Aravind',
//      age:24
// });
// user.save().then(()=>{
//     console.log('User Save')
// })

// const product=new Product({
//     productname:'T-Shirt',
//     productprice:1000
// });
async function run(){
    const newuser=await User.create({
        name:"sathish",
        age:26
    });
    newuser.name='Mathew';
    await newuser.save();
    console.log(newuser)
}
run();
