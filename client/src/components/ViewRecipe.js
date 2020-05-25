// Visual display of individual recipe posts

import React, { Component, useState, useEffect } from 'react';
import { Jumbotron, Container, ListGroup, Button, Form, Col } from 'react-bootstrap';
import './feed.css';

const RecipeCard = (props) => {
	return (
		<div className="contact-card">
			<img src={props.picture} alt="profile" />
			<div className="user-details">
				<p>Name: {props.name}</p>
				<p>Description: {props.description}</p>
				<p>Ingredients: {props.ingredients}</p>
				<p>Instructions: {props.instructions}</p>
				<p>Tags: {props.tags}</p>
			</div>
		</div>
	);
};

export default RecipeCard;
