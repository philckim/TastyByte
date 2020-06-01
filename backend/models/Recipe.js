const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	instructions: {
		type: String,
		required: true
	},
	ingredients: {
		type: [ String ],
		required: true
	},
	photo: {
		type: String,
		default: 'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpg'
	},
	tags: {
		type: [ String ],
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
