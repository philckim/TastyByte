const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Recipe = require('../../models/Recipe');

// @route   POST api/recipe
// @desc    Creates new recipe
// @access  Public
router.post(
    '/',
    [
        //checking recipe fields
        check('name', 'Name is required').not().isEmpty(),
        check('author', 'Author is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        check('instructions', 'Instructions are required').not().isEmpty(),
        check('ingredients', 'Ingredients are required').not().isEmpty(),
        check('tags', 'tags are required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        //pull fields from body
        const {
            name,
            author,
            description,
            instructions,
            photo,
            tags
        } = req.body;

        try {
            let recipe = new Recipe({
                name: req.body.name,
                author: req.body.author,
                description: req.body.description,
                instructions: req.body.instructions,
                ingredients: req.body.ingredients,
                photo: req.body.photo,
                tags: req.body.tags
            });

            // Save new recipe to database
            await recipe.save();
            res.send(recipe);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   GET api/recipe
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Recipe route'));

// @route   DELETE api/recipe id
// @desc    delete a recipe from database
// @access  Public

// app.delete('api/recipe/:id', (req, res) => {
//   console.log(req.params.id);
//   let query = { _id: objectID(req.params.id) };
//   console.log(query);
//   Recipe.deleteOne(query, function (err, result) {
//     assert.equal(null, err);
//     console.log('Recipe deleted');
//   }).catch((err) => next(err));
// });

// @route   GET api/recipe id
// @desc    get a recipe from database
// @access  Public

// app.get('api/recipe/:id', (req, res) => {
//     console.log(req.params.id);
//     let query = { _id: objectID(req.params.id) };
//     console.log(query);
//     Recipe.find(query, function (err, result) {
//       assert.equal(null, err);
//       console.log('Item found');
//     }).catch((err) => next(err));
//   });

module.exports = router;
