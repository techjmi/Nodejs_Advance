const mongoose= require("mongoose")
//create a Schema
const PersonSchema= mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:["chef", 'manager', "waiter"],
        required:true
    },
    mobile:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true
    },
    address:{
        type:String, 
        required:true
    },
    mobile:{
        type:Number, 
        required:true
    },
})
//create a model
const Person= mongoose.model("Person", PersonSchema)
module.exports= Person