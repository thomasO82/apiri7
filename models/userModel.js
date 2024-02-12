const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    firstname: {
        type: String,
        required: [true, "le prenom est requis"]
    },
    age: {
        type: Number,
        required: [true, "l'age est requis"]
    },
    email: {
        type: String,
        required: [true, "le mail est requis"]
    },
    password: {
        type: String,
        required: [true, "le password est requis"]
    },
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel