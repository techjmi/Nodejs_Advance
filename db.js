const mongoose= require("mongoose")
const URL= "mongodb://127.0.0.1:27017/hotels"
const mongodbConnectd= async()=>{
    try {
        await mongoose.connect(URL)
        console.log("Connection is Successful With Database")
    } catch (error) {
        console.log("The error while connecting with database is", error.message)
    }
}
module.exports= mongodbConnectd