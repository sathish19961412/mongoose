const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({
      city:String,
      street:String
})
const userSchema=new mongoose.Schema({
      name:String,
      age:Number,
      email:String,
      createAt:Date,
      updateAt:Date,
      bestfriend:mongoose.SchemaTypes.ObjectId,
      hobbies:[String],
      address:addressSchema
});

const userModel=mongoose.model('User',userSchema);


module.exports=userModel;