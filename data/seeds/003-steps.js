
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, instructions: 'open wrapper', step_number:1},
        {recipe_id: 1, instructions: 'place on microwave safe dish', step_number:2},
        {recipe_id: 1, instructions: 'microwave for 15 seconds', step_number:3},

      ]);
    });
};
