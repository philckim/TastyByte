import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import { addLike, removeLike } from '../actions/post';
import { connect } from 'react-redux';

import '../index.css';

const Feed = () => {
	const [ recipes, setRecipes ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/api/recipe/').then((response) => response.json()).then((data) => {
			setRecipes(data.recipes);
		});
	}, []);

	return (
		<Container>
			<Jumbotron>
				{recipes.map((recipe) => (
					<RecipeCard
						photo={recipe.photo}
						author={recipe.author}
						name={recipe.name}
						description={recipe.description}
						instructions={recipe.instructions}
					/>
				))}
			</Jumbotron>
			{console.log(recipes)}
		</Container>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike })(Feed);
