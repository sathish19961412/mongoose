const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({
      city:String,
      street:String
})
const userSchema=new mongoose.Schema({
      name:String,
      age:{
        type:Number,
        min:10,
        max:30,
        validate:{
            validator: v => v % 2 == 0,
            message: props => `${props.value} is not even number`
        }
      },
      email:{
        type:String,
        required:true,
        lowercase:true
      },
      createAt:{
            type:Date,
            default:()=>Date.now()
      },
      updateAt:Date,
      bestfriend:mongoose.SchemaTypes.ObjectId,
      hobbies:[String],
      address:addressSchema
});

const userModel=mongoose.model('User',userSchema);


module.exports=userModel;