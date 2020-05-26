import React, { Component, useState, useEffect } from 'react';
import { Jumbotron, Container, ListGroup, Button, Form, Col } from 'react-bootstrap';
import RecipeCard from './ViewRecipe';

import './feed.css';

const Feed = () => {
	//const [recipes, setRecipes] = useState([]);

	const [ recipes, setRecipes ] = useState([
		{
			picture: 'https://i.imgur.com/uGXcfnT.jpg',
			name: 'Miso Soba',
			description: 'Lorem ipsum dolor sit amet',
			ingredients: 'Lorem ipsum dolor sit amet',
			instructions: 'Lorem ipsum dolor sit amet',
			tags: 'Lorem ipsum dolor sit amet'
		},
		{
			picture: 'https://i.imgur.com/gajIzSd.jpg',
			name: 'Steak',
			description: 'Lorem ipsum dolor sit amet',
			ingredients: 'Lorem ipsum dolor sit amet',
			instructions: 'Lorem ipsum dolor sit amet',
			tags: 'Lorem ipsum dolor sit amet'
		},
		{
			picture: 'https://i.imgur.com/7CA6APF.jpg',
			name: 'Herb Chicken',
			description: 'Lorem ipsum dolor sit amet',
			ingredients: 'Lorem ipsum dolor sit amet',
			instructions: 'Lorem ipsum dolor sit amet',
			tags: 'Lorem ipsum dolor sit amet'
		}
	]);

	// for testing with dummy data from randomizer API, may use again later
	// useEffect(() => {
	//   fetch("https://randomuser.me/api/?results=4")
	//     .then(response => response.json())
	//     .then(data => {
	//       setRecipes(data.results);
	//     });
	// }, []);

	const addNewRecipeHandler = (newRecipe) => {
		setRecipes(recipes.concat(newRecipe));
	};

	return (
		<Container>
			<Jumbotron>
				{recipes.map((recipe) => (
					<RecipeCard
						picture={recipe.picture}
						name={recipe.name}
						description={recipe.description}
						ingredients={recipe.ingredients}
						instructions={recipe.instructions}
						tags={recipe.tags}
					/>
				))}
			</Jumbotron>
		</Container>
	);
};

export default Feed;
