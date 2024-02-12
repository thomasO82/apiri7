const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./router/userRouter')
const app = express()

app.use(express.json()) // permet de pouvoir recuperer les donner client
app.use(userRouter) //permet a express d'utiliser le fichier de routes

app.listen(3000, (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecté au server");
    }
})

mongoose.connect("mongodb://localhost:27017/apiuserri")







