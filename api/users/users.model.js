const db = require('../../dbConfig');

const addUser = (user) => {
    return db('users')
            .returning('id')
            .insert(user)
            .then(ids => ({id: ids[0]}))
}

const getUsers = () => {
    return db('users')
}

module.exports = {
    addUser,
    getUsers
}