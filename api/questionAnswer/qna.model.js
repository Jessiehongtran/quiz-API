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

module.exports = {
    getQnA,
    addQues,
    addAns
}