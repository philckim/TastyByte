import React, { useState, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecipeCard from './ViewRecipe';

import './feed.css';

const Feed = () => {
	const [ recipes, setRecipes ] = useState(
		[
			// {
			// 	picture: 'https://i.imgur.com/uGXcfnT.jpg',
			// 	name: 'Miso Soba',
			// 	description: 'Lorem ipsum dolor sit amet',
			// 	ingredients: 'Lorem ipsum dolor sit amet',
			// 	instructions: 'Lorem ipsum dolor sit amet',
			// 	tags: 'Lorem ipsum dolor sit amet'
			// },
			// {
			// 	picture: 'https://i.imgur.com/gajIzSd.jpg',
			// 	name: 'Steak',
			// 	description: 'Lorem ipsum dolor sit amet',
			// 	ingredients: 'Lorem ipsum dolor sit amet',
			// 	instructions: 'Lorem ipsum dolor sit amet',
			// 	tags: 'Lorem ipsum dolor sit amet'
			// },
			// {
			// 	picture: 'https://i.imgur.com/7CA6APF.jpg',
			// 	name: 'Herb Chicken',
			// 	description: 'Lorem ipsum dolor sit amet',
			// 	ingredients: 'Lorem ipsum dolor sit amet',
			// 	instructions: 'Lorem ipsum dolor sit amet',
			// 	tags: 'Lorem ipsum dolor sit amet'
			// }
		]
	);

	useEffect(() => {
		fetch('http://localhost:8080/api/recipe/').then((response) => response.json()).then((data) => {
			setRecipes(data.recipes);
		});
	}, []);

	const addNewRecipeHandler = (newRecipe) => {
		setRecipes(recipes.concat(newRecipe));
	};

	return (
		<Container>
			<Jumbotron>
				{recipes.map((recipe) => (
					<RecipeCard
						photo={recipe.photo}
						name={recipe.name}
						description={recipe.description}
						instructions={recipe.instructions}
					/>
				))}
			</Jumbotron>

			{console.log(recipes)}

			<div className="button">
				<button
					onClick={() =>
						addNewRecipeHandler({
							picture: 'https://i.imgur.com/EThjIeG.png',
							name: 'Lorem Ipsum',
							description: 'Lorem ipsum dolor sit amet',
							ingredients: 'Lorem ipsum dolor sit amet',
							instructions: 'Lorem ipsum dolor sit amet',
							tags: 'Lorem ipsum dolor sit amet'
						})}
				>
					Add Recipe
				</button>
			</div>
		</Container>
	);
};

export default Feed;
