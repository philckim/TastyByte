const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tastyebytedb', { useNewUrlParser: true, useUnifiedTopology: true })    .then(() => console.log('Connected to Mongo')) 
    .catch(err => console.err('Could not connect to Mongo', err))

const recipeSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    instructions: String,
    ingredients: Array,
    photos: Array,
    tags: Array
});

const Recipe = mongoose.model('Recipe', recipeSchema);

async function createRecipe(){  
    
    const recipe1 = new Recipe({  
        name: 'Spaghetti',   
        author: 'Phil',
        description: 'Chef Boyardee',  
        instructions: 'Do you have a microwave?',
        ingredients: [],
        photos: null,
        tags: []

    })  
    let result = await recipe1.save();  
    console.log("recipe1 - " + result);        
    
};
createRecipe();