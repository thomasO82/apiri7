const userModel = require('../models/userModel')
const promoModel = require('../models/promoModel')
exports.postUser = async (req, res) => {
    try {
        const promo = promoModel.findOne({_id: req.params.idPromos})
        if (promo) {
            const newUser = new userModel(req.body)
            newUser.validateSync()
            await newUser.save()
            await promo.updateOne({_id: req.params.idPromo}, { $push: { users: newUser._id }})
            res.json("Votre utilisateur a bien ete creer")
        }else{
            res.json("aucune promo trouver")
        }
      
       
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

exports.getUsers = async (req, res) => {
    try {
        let users = null
        if (req.query.age) {
            users = await userModel.find({ age: req.query.age })
        } else {
            users = await userModel.find()

        }
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userDeleted = await userModel.deleteOne({ _id: req.params.id })
        res.json(userDeleted)
    } catch (error) {
        res.json(error.message)
    }
}

exports.updateUser =async(req, res) => {
    try {
        const userUpdated = await userModel.updateOne({ _id: req.params.id }, req.body)
        res.json(userUpdated)
    } catch (error) {
        res.json(error.message)
    }
}