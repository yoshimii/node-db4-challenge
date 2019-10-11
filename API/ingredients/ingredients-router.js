const express = require('express');
const Ingredients = require('./ingredients-model');

const router = express.Router();


// get a shopping list by recipe_id
router.get('/:recipe_id', (req, res) => {
    console.log('params',req.params)
    Ingredients.getShoppingList(req.params.recipe_id)
        .then(shoppingList => {
            console.log('inside promise', shoppingList)
            res.status(200).json(shoppingList)
        }).catch(err => {
            res.status(500).json(err)
        })
});


module.exports = router;