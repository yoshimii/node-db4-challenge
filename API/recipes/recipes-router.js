const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

// get all recipes
router.get('/', (req, res) => {
  Recipes.getRecipes()
      .then(recipes => {
        res.status(200).json(recipes)
        })
      .catch(err => {
        res.status(500).json(err)
        })
});
module.exports = router;

//gets steps for a recipe

router.get('/:id/steps', (req, res) => {
  Recipes.getInstructions(req.params.id)
      .then(instructions => {
        res.status(200).json(instructions)
        })
        .catch(err => {
          res.status(500).json(err)
          })
});