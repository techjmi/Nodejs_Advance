// var os =require("os")
// var fs= require("fs")
// var user=os.userInfo() //know the user info
// console.log(user)

// //crrate a text file
// fs.appendFile("geeting.txt", 'hi'+ user.username+"!",()=>{
//     console.log("file created sucessfully")
// })

const express= require("express")
const mongodbConnectd = require("./db")
const app= express()
const bodyParser = require("body-parser")
const Person = require("./model/Person")
const MenuItem = require("./model/Menu")
const PersonRouter = require("./router/PersonRouter")
const MenuRouter= require("./router/MenuRouter")

app.use(bodyParser.json())
app.get("/", (req,res)=>{
    res.send("hello this is advancced nodejs tutorial....")
})
app.use('/api', PersonRouter)
app.use('/list', MenuRouter)
mongodbConnectd()

app.listen(8000, ()=>{
    console.log("the server is running on port no 8000")
})