const express = require('express');

const RecipesRouter = require('./API/recipes/recipes-router');
const IngredientsRouter = require('./API/ingredients/ingredients-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);
server.use('/api/ingredients', IngredientsRouter);

module.exports = server;