const route = require('express').Router()
const qaModel = require('./qna.model')

const getAnswersInQuestion = (qna) => {
    let preQuesID = 1
    let questions = []
    let question_text = ""
    let answersForQues = []
    for (let i = 0; i < qna.length; i++){
        let curQuesID = qna[i].questionID
        if (curQuesID === preQuesID){
            question_text = qna[i].question_text
            answersForQues.push({
                answerID: qna[i].answerID,
                answer: qna[i].answer_text,
                isAnswer: qna[i].isAnswer
                })
        } else {
            questions.push({
                questionID: preQuesID,
                question: question_text,
                answers: answersForQues
            })
            answersForQues = []
            answersForQues.push({
                answerID: qna[i].answerID,
                answer: qna[i].answer_text,
                isAnswer: qna[i].isAnswer
            })
        }

        if (i === qna.length -1){
            questions.push({
                questionID: preQuesID,
                question: question_text,
                answers: answersForQues
            })
        }
        preQuesID = curQuesID
    }
    return questions
}

//GET question + answer 
route.get('/', async (req,res) => {
    try {
        const qna = await qaModel.getQnA()
        const questions = getAnswersInQuestion(qna)
        res.status(200).json(questions)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST question
route.post('/', async (req,res) => {
    const question = req.body
    try {
        const id = await qaModel.addQues(question)
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//FIND question by id
route.get('/:questionID', async (req,res) => {
    const questionID = req.params.questionID
    try {
        const response = await qaModel.findQuesById(questionID)
        if (response.length > 0){
            res.status(200).json(response[0])
        }
        else {
            res.status(401).json({error: 'not found'})
        }
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE question
route.patch('/:questionID', async (req, res) => {
    const questionID = req.params.questionID
    const change = req.body
    try {
        const count = await qaModel.updateQues(change, questionID)
        res.status(200).json({message: `Update ${count} question`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST answer
route.post('/:questionId/answers', async (req,res) => {
    const questionId = req.params.questionId
    const answer = req.body
    answer.questionID = questionId
    try {
        const id = await qaModel.addAns(answer)
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//FIND answer by id
route.get('/:answerID', async (req,res) => {
    const answerID = req.params.answerID
    try {
        const response = await qaModel.findAnsById(answerID)
        if (response.length > 0){
            res.status(200).json(response[0])
        }
        else {
            res.status(401).json({error: 'not found'})
        }
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE answer
route.patch('/answers/:answerID', async (req, res) => {
    const answerID = req.params.answerID
    const change = req.body
    try {
        const count = await qaModel.updateAns(change, answerID)
        res.status(200).json({message: `Updated ${count} answer`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;