const route = require('express').Router();
const userModel = require('./users.model');

//POST user
route.post('/', async (req,res) => {
    const user = req.body
    try {
        const id = await userModel.addUser(user)
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET users
route.get('/', async (req,res) => {
    try {
        const users = await userModel.getUsers()
        res.status(200).json(users)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;