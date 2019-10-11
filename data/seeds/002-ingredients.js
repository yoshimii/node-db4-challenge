
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'box of Kellogs Rice Krispy Treats', qty: 1, recipe_id: 1},

      ]);
    });
};
