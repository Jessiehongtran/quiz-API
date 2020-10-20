const route = require('express').Router()
const responseModel = require('./responses.model')

//GET response
route.get('/', async (req,res) => {
    try {
        const responses = await responseModel.getResponses()
        res.status(200).json(responses)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST responses
route.post('/', async (req,res) => {
    const response = req.body
    try {
        const id = await responseModel.addResponse(response)
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET responses by question
route.get('/question/:questionID', async (req,res) => {
    const questionID = req.params.questionID
    try {
        const responses = await responseModel.getResponsesByQuestion(questionID)
        res.status(200).json(responses)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET responses by user
route.get('/user/:userId', async (req,res) => {
    const userId = req.params.userId
    try {
        const responses = await responseModel.getResponsesByUser(userId)
        res.status(200).json(responses)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//FIND a response

//UPDATE a response

module.exports = route;