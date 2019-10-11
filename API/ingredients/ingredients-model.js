const db = require('../../data/dbConfig')

module.exports = {
   getShoppingList
}

function getShoppingList(id) {
   console.log(id)
   return db('shopping-list')
      .join('recipes', 'recipes.id', '=', 'shopping-list.recipes_id')
      .join('ingredients', 'ingredients.id', '=', 'shopping-list.ingredients_id')
      .where('shopping-list.recipes_id', '=', id)
      .select('ingredients.ingredient_name', 'ingredients.qty', 'recipes.recipe_name')
}


