const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const mongoose = require('mongoose');

let objectID = require('mongodb').ObjectID;
app.use(express.json());
app.use(cors());

mongoose
	.connect('mongodb://localhost/tastybytedb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to Mongo'))
	.catch((err) => console.err('Could not connect to Mongo', err));

const recipeSchema = new mongoose.Schema({
	name: String,
	author: String,
	description: String,
	instructions: String,
	ingredients: Array,
	photos: Array,
	tags: Array
});

const Recipe = mongoose.model('Recipe', accountSchema);

const accountSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String
});

const Account = mongoose.model('Account', accountSchema);

app.get('/', (req, res) => res.send('Hello World!'));

// RECIPE ROUTES

app.get('/api/recipe', cors(), (req, res) => {
	let query = req.params.query;
	Recipe.find({ request: query }, function(err, result) {
		if (err) throw err;
		if (result) {
			res.json(result);
		} else res.send(JSON.stringify({ error: 'Error' }));
	}).select({ id: 1, name: 1, author: 1, description: 1, instructions: 1, ingredients: 1, photos: 1, tags: 1 });
});

app.get('api/recipe/:id', (req, res) => {
	console.log(req.params.id);
	let query = { _id: objectID(req.params.id) };
	console.log(query);
	Recipe.find(query, function(err, result) {
		assert.equal(null, err);
		console.log('Item found');
	}).catch((err) => next(err));
});

app.post('/api/recipe', cors(), (req, res) => {
	let recipe = new Recipe({
		name: req.body.name,
		author: req.body.author,
		description: req.body.description,
		instructions: req.body.instructions,
		ingredients: req.body.ingredients,
		photos: req.body.photos,
		tags: req.body.tags
	});
	recipe.save(function(err, result) {
		if (err) {
			return next(err);
		}
		res.status(201).json(result);
	});
});

app.delete('api/recipe/:id', (req, res) => {
	console.log(req.params.id);
	let query = { _id: objectID(req.params.id) };
	console.log(query);
	Recipe.deleteOne(query, function(err, result) {
		assert.equal(null, err);
		console.log('Recipe deleted');
	}).catch((err) => next(err));
});

// ACCOUNT ROUTES

app.post('/api/createaccount', (req, res) => {
	let account = new Account({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
	account.save(function(err, result) {
		if (err) {
			return next(err);
		}
		res.status(201).json(result);
	});
});

app.get('/api/account/', (req, res) => {
	let query = req.params.query;
	Account.find({ request: query }, function(err, result) {
		if (err) throw err;
		if (result) {
			res.json(result);
		} else res.send(JSON.stringify({ error: 'Error' }));
	}).select({
		username: 1,
		email: 1,
		password: 1
	});
});

app.get('api/account/:id', (req, res) => {
	console.log(req.params.id);
	let query = { _id: objectID(req.params.id) };
	console.log(query);
	Account.find(query, function(err, result) {
		assert.equal(null, err);
		console.log('Item found');
	}).catch((err) => next(err));
});

app.delete('api/account/:id', (req, res) => {
	console.log(req.params.id);
	let query = { _id: objectID(req.params.id) };
	console.log(query);
	Account.deleteOne(query, function(err, result) {
		assert.equal(null, err);
		console.log('Account deleted');
	}).catch((err) => next(err));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
