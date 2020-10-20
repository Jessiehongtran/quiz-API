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
            answersForQues.push(qna[i].answer_text)
        } else {
            questions.push({
                question: question_text,
                answers: answersForQues
            })
            answersForQues = []
            answersForQues.push(qna[i].answer_text)
        }

        if (i === qna.length -1){
            questions.push({
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

module.exports = route;