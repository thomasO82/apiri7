const mongoose = require('mongoose')

const promoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    users: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "users"
            }
        ],

    },

})

const promoModel = mongoose.model('promos', promoSchema)
module.exports = promoModel