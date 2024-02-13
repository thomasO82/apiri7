const promoModel = require('../models/promoModel')

exports.getPromos = async (req, res)=>{
    try {
       const promos = await promoModel.find()
       res.json(promos)
    } catch (error) {
        res.json(error.message)
    }
}

exports.postPromos = async (req, res)=>{
    try {
       const promos = new promoModel(req.body)
       promos.validateSync()
       await promos.save()
       res.json("La promo a bien été sauvegardé")
    } catch (error) {
        res.json(error.message)
    }
}

