
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping-list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping-list').insert([
        {recipes_id: 1, ingredients_id: 1},

      ]);
    });
};
