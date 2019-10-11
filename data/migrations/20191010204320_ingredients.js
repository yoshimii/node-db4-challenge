
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name')
            .notNullable()
            .unique()
        tbl.float('qty')
            .notNullable()
            .unsigned()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('shopping-list', tbl => {
        tbl.increments()
        tbl.integer('recipes_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('ingredients_id')
            .notNullable()
            .unsigned()
            .notNullable()
            .references()
            .inTable()
            .onUpdate()
            .onDelete()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExists('ingredients')
    .dropIfTableExists('shopping-list')
};
