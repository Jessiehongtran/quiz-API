
exports.up = function(knex) {
  return knex.schema.createTable('questions', table => {
      table.increments()
      table.string('question_text').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('questions')
};
