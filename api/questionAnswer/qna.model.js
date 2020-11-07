const db = require('../../dbConfig');

const getQnA = () => {
    return db('questions as q')
            .join('answers as a', 'a.questionID', 'q.id')
            .select(
                'q.id as questionID',
                'q.question_text',
                'a.id as answerID',
                'a.answer_text',
                'a.isAnswer'
            )
}

const addQues = (ques) => {
    return db('questions')
            .returning('id')
            .insert(ques)
            .then(ids => ({id: ids[0]}))
}

const addAns = (ans) => {
    return db('answers')
            .returning('id')
            .insert(ans)
            .then(ids => ({id: ids[0]}))
}

const updateQues = (change, questionID) => {
    return db('questions')
            .where({id: questionID})
            .update(change)
}

const updateAns = (change, answerID) => {
    return db('answers')
            .where({id: answerID})
            .update(change)
}

const findQuesById = (quesID) => {
    return db('questions')
            .where({id: quesID})
}

const findAnsById = (ansID) => {
    return db('answers')
            .where({id: ansID})
}

module.exports = {
    getQnA,
    addQues,
    addAns,
    updateQues,
    updateAns,
    findQuesById,
    findAnsById
}