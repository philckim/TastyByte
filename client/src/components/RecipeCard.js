// Visual display of individual recipe posts

import React from 'react';
import './feed.css';

const RecipeCard = (props) => {
	return (
		<div className="recipe-card">
			<img src={props.photo} alt="profile" />
			<div className="recipe-details">
				<p className="category">Name:</p>
				<p>{props.name}</p>
				<p className="category">Created By: </p>
				<p>{props.author}</p>
				<p className="category">Description:</p>
				<p>{props.description}</p>
				<p className="category">Instructions:</p>
				<p>{props.instructions}</p>
			</div>
		</div>
	);
};

export default RecipeCard;
