
exports.up = function(knex) {
  return knex.schema.createTable('answers', table => {
      table.increments()
      table.string('answer_text').notNullable()
      table.integer('questionID')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('questions')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
      table.boolean('isAnswer')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('answers')
};
