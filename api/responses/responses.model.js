const db = require('../../dbConfig');

const getResponses = () => {
    return db('responses as r')
            .join('questions as q', 'q.id', 'r.questionID')
            .join('answers as a', 'a.id', 'r.answerID')
            .join('users as u', 'u.id', 'r.userID')
            .select(
                'q.question_text',
                'a.answer_text',
                'a.isAnswer',
                'u.name',
                'u.email'
            )
}

const getResponsesByQuestion = (question_id) => {
    return db('responses as r')
            .where('r.questionID', question_id)
            .join('questions as q', 'q.id', 'r.questionID')
            .join('answers as a', 'a.id', 'r.answerID')
            .join('users as u', 'u.id', 'r.userID')
            .select(
                'q.question_text',
                'a.answer_text',
                'a.isAnswer',
                'u.name',
                'u.email'
            )
}

const addResponse = (response) => {
    return db('responses')
            .returning('id')
            .insert(response)
            .then(ids => ({id: ids[0]}))
}

const getResponsesByUser = (userId) => {
    return db('responses as r')
            .where('r.userID', userId)
            .join('questions as q', 'q.id', 'r.questionID')
            .join('answers as a', 'a.id', 'r.answerID')
            .join('users as u', 'u.id', 'r.userID')
            .select(
                'q.question_text',
                'a.answer_text',
                'a.isAnswer',
            )
}

module.exports = {
    getResponses,
    addResponse,
    getResponsesByQuestion,
    getResponsesByUser
}