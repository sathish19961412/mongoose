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
    try{
        // const newuser=await User.create({
        //     name:"sathish",
        //     email:"Sathishfreelanc5@gmail.com",
        //     age:28,
        //     hobbies:['Cricket','Music'],
        //     address:{
        //         street:"41/20A F.C.I Colony"
        //     }
        // });
    
        // console.log(newuser)
        const user=await User.findById('6543607dd16bc5fb9fed9fd2');
       
        //user.sayHi()
        // .where('id')
        // .equals('653f9a96464b464ab0be0446')
        // .populate('bestfriend')
        // .limit(1);
        console.log(user)
        console.log(user.namedEmail)
    }catch(e){
        console.log(e.message)
    }
   
}
run();
