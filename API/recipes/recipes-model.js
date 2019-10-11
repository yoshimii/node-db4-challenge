const db = require('../../data/dbConfig')

module.exports = {
   getRecipes,
   getInstructions
}

function getRecipes() {
   return db('recipes')
}

function getInstructions(id) {
   return db('steps')
      .join('recipes', 'recipes.id', '=', 'steps.recipe_id')
      .where('steps.recipe_id', '=', id)
      .select('steps.instructions', 'steps.step_number', 'steps.recipe_id', 'recipes.recipe_name')
}
