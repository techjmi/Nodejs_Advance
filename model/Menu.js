const mongoose= require("mongoose")
const MenuSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet', 'spicy', 'sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    
})
//create model
const MenuItem=mongoose.model("MenuItem", MenuSchema)
module.exports= MenuItem