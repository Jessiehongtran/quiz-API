
exports.up = function(knex) {
  return knex.schema.createTable('responses', table => {
    table.increments()
    table.integer('questionID')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('questions')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
    table.integer('answerID')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('answers')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
    table.integer('userID')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  
};
