const promoRouter = require("express").Router()
const promoController = require('../controllers/promoController')

promoRouter.get('/promos', promoController.getPromos)
promoRouter.post('/promos', promoController.postPromos)

module.exports = promoRouter