const express= require("express")
const MenuItem = require("../model/Menu")
const router= express.Router()
router.post("/menu_list", async(req,res)=>{
    try {
        const data= req.body
        const menuitem=new MenuItem(data)
        const response= await menuitem.save()
        console.log(response)
        res.status(200).json(response)
        
    } catch (error) {
        console.log('the error while posting data ', error.message)
        res.json(error.message)
    }
    })
    //get method
    router.get('/get_menu', async(req, res)=>{
        try {
            const response= await MenuItem.find()
            console.log(response)
            res.status(200).json(response)
        } catch (error) {
            console.log('the error while getting the data ', error.message)
            res.json(error.message)
        }
    })
    module.exports= router