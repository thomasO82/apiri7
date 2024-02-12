const userRouter = require("express").Router()
const userModel = require("../models/userModel")

userRouter.post('/user', async(req,res)=>{
    try {
        console.log(req.body);
        const newUser = new userModel(req.body)
        newUser.validateSync() 
        await newUser.save()
        res.json("Votre utilisateur a bien ete creer")
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

userRouter.get('/users', async(req,res)=>{
    try {
        let users = null
        if (req.query.age) {
             users = await userModel.find({age: req.query.age}) 
        }else{
             users = await userModel.find() 

        }
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

userRouter.get('/users/:id',async(req, res)=>{
    try {
        const user = await userModel.findOne({_id: req.params.id})
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})

userRouter.delete('/users/:id',async(req,res)=>{
    try {
        const userDeleted = await userModel.deleteOne({_id: req.params.id})
        res.json(userDeleted)
    } catch (error) {
        res.json(error.message)
    }
})

userRouter.put('/users/:id',async(req,res)=>{
    try {
        const userUpdated = await userModel.updateOne({_id: req.params.id},req.body)
        res.json(userUpdated)
    } catch (error) {
        res.json(error.message)
    }
})



module.exports = userRouter