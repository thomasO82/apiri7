const userRouter = require("express").Router()
const userController = require('../controllers/userController')

userRouter.post('/promos/:idPromo/users/', userController.postUser)
userRouter.get('/users', userController.getUsers)
userRouter.get('/users/:id',userController.getOneUser )
userRouter.delete('/users/:id',userController.deleteUser)
userRouter.put('/users/:id',userController.updateUser)


module.exports = userRouter