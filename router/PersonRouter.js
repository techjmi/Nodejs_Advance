const express= require("express")
const MenuItem = require("../model/Menu")
const Person = require("../model/Person")
const router=  express.Router()
router.get("/user", (req,res)=>{
    const customUser={
        "name":"shamim",
        "age":4,
        "email":"yxz@gmail.com"

    }
    res.send(customUser)
})
router.post("/add", async(req,res)=>{
    try {
        const data= req.body
        const newPerson= new Person(data)
        const response= await newPerson.save()
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        console.log('the error while posting data ', error.message)
        res.json(error.message)
    }
})
router.get("/fetch", async(req, res)=>{
    try {
        const response = await Person.find()
        console.log('Data Fetched', response)
        res.status(200).json(response)
        
    } catch (error) {
        console.log('the error while gettign the data ', error.message)
        res.json(error.message)
    }
})
//parametrised api
router.get("/:worktype", async(req, res)=>{
    try {
        const worktype= req.params.worktype
        if(worktype==='waiter'||worktype==='chef'||worktype==='manager'){
            const response =await Person.find({work:worktype})
            console.log(response)
            res.status(200).json(response)
        }
        else{
            res.status(400).json({error:"Invalid Work Type"})
        }
    } catch (error) {
        console.log('the error while gettign the data ', error.message)
        res.json(error.message)
    }
})
//update operation
router.put('/update/:id', async(req, res)=>{
    try {
        const id= req.params.id
        const updateData= req.body
        const response= await Person.findByIdAndUpdate(id, updateData,{
            new:true,
            validators:true
        })
        console.log('data updated', response)
        res.status(200).json(response)
    } catch (error) {
        console.log('the error while updating the data ', error.message)
        res.json(error.message)
    }
})
//delete opertaion
router.delete('/delete/:id', async(req,res)=>{
    try {
        const id= req.params.id
        const response= await Person.findByIdAndDelete(id)
        console.log(response)
        res.status(200).json({msg:"delete user"})
        
    } catch (error) {
        console.log('the error while updating the data ', error.message)
        res.json(error.message)
    }
})
module.exports= router