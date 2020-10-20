
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {
          answer_text: "Roman festival of Halloween",
          questionID: 1,
          isAnswer: false
        },
        {
          answer_text: "Celtic festival of Samhain",
          questionID: 1,
          isAnswer: true
        },
        {
          answer_text: "Viking Festival of Hallow's Eve",
          questionID: 1,
          isAnswer: false
        },
        {
          answer_text: "Greek festival of Autumn",
          questionID: 1,
          isAnswer: false
        },
        {
          answer_text: "Ireland",
          questionID: 2,
          isAnswer: false
        },
        {
          answer_text: "the United Kingdom",
          questionID: 2,
          isAnswer: false
        },
        {
          answer_text: "northern France",
          questionID: 2,
          isAnswer: false
        },
        {
          answer_text: "All of these",
          questionID: 2,
          isAnswer: true
        },
      ]);
    });
};
