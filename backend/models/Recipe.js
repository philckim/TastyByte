const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Recipe Title'
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous User'
    },
    description: {
        type: String,
        required: true,
        default: 'No description entered.'
    },
    instructions: {
        type: String,
        required: true,
        default: 'No instructions entered.'
    },
    ingredients: {
        type: [String],
        required: true,
        default: 'No ingredients entered.'
    },
    photo: {
        type: String,
        required: true,
        default: 'https://i.imgur.com/5RZtSSA.png'
    },
    tags: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
