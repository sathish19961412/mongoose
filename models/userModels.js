const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
      name:String,
      age:Number
});

const userModel=mongoose.model('User',userSchema);


module.exports=userModel;