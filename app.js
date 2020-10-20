const express = require('express')
const app = express()
const cors = require('cors')

const qaRoute = require('./api/questionAnswer/qna.route');
const resRoute = require('./api/responses/responses.route');
const userRoute = require('./api/users/users.route');

app.use(express.json())
app.use(cors())
app.use('/questions', qaRoute)
app.use('/responses', resRoute)
app.use('/users', userRoute)

module.exports = app;