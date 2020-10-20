
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {
          questionID: 1,
          answerID: 1,
          userID: 1
        },
        {
          questionID: 2,
          answerID: 6,
          userID: 1
        },
        
      ]);
    });
};
