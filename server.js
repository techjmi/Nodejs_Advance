// var os =require("os")
// var fs= require("fs")
// var user=os.userInfo() //know the user info
// console.log(user)

// //crrate a text file
// fs.appendFile("geeting.txt", 'hi'+ user.username+"!",()=>{
//     console.log("file created sucessfully")
// })
require('dotenv').config()
const express= require("express")
const mongodbConnectd = require("./db")
const app= express()
const bodyParser = require("body-parser")
const Person = require("./model/Person")
const MenuItem = require("./model/Menu")
const PersonRouter = require("./router/PersonRouter")
const MenuRouter= require("./router/MenuRouter")
const PORT= process.env.PORT||8000
app.use(bodyParser.json())
app.get("/", (req,res)=>{
    res.send("hello this is advancced nodejs tutorial....")
})
app.use('/user', PersonRouter)
app.use('/menu', MenuRouter)
mongodbConnectd()

app.listen(PORT, ()=>{
    console.log(`The Server is running on Port No ${PORT}`)
})