const mongoose=require('mongoose');

//Intergration Schema Name
const addressSchema=new mongoose.Schema({
      city:String,
      street:String
})
//Schema Name
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
      bestfriend:{
           type:mongoose.SchemaTypes.ObjectId,
           ref:'User'
      },
      hobbies:[String],
      address:addressSchema
});
/*Schema Used To The Schema Name.methods().methodname*/
// userSchema.methods.sayHi=function(){
//       console.log(`My name is ${this.name}`)
// }

//Statics Used Schemaname.statics.findByName

userSchema.statics.findByName =function(name){
      return this.find({name:name})
}
//query() method Used to byName() function
userSchema.query.byName =function(name){
      return this.where({name:name})
}
userSchema.virtual('namedEmail').get(function(){
      return `${this.name} <${this.email}>`
})
const userModel=mongoose.model('User',userSchema);


module.exports=userModel;