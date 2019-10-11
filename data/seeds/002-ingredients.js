
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: '1', ingredient_name: 'box of Kellogs Rice Krispy Treats', qty: 1},

      ]);
    });
};
