
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();//primary key
        tbl.string('recipe_name', 128)
            .notNullable()
            .unique();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.string('instructions')
            .notNullable()
            .unique()
        tbl.integer('step_number')
            .notNullable()
            .unique()
        tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
};
