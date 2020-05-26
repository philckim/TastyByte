// Visual display of individual recipe posts

import React, { Component, useState, useEffect } from 'react';
import { Jumbotron, Container, ListGroup, Button, Form, Col } from 'react-bootstrap';
import './feed.css';

const RecipeCard = (props) => {
	return (
		<div className="recipe-card">
			<img src={props.picture} alt="profile" />
			<div className="recipe-details">
				<p className="category">Name:</p>
				<p>{props.name}</p>
				<p className="category">Description:</p>
				<p>{props.description}</p>
				<p className="category">Ingredients:</p>
				<p>{props.ingredients}</p>
				<p className="category">Instructions:</p>
				<p>{props.instructions}</p>
				<p className="category">Tags:</p>
				<p>{props.tags}</p>
			</div>
		</div>
	);
};

export default RecipeCard;
