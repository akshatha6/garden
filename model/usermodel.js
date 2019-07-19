const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    loginID:{type:String,required:true},
    password:{type:String,required:true},
    userType:{type:String,requiresd:true},
    createdOn:{type:Data,default:new Data()}
});

module.exports=mongoose.model("users",userSchema);