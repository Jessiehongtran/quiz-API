
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { question_text: "Halloween's origins date back to this ancient festival."},
        { question_text: "The Celts lived about 2,000 years ago in the area which is presently..."},
      ]);
    });
};
