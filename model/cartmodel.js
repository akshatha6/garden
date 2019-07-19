const mongoose=require('mongoose');

const cartSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
 //   userType:{type:String,required:true},
 imagePath:{type:String,required:true},
    
});

module.exports=mongoose.model("cart",cartSchema);