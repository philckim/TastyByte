import React, { Component, useState, useEffect } from 'react';
import { Jumbotron, Container, ListGroup, Button, Form, Col } from 'react-bootstrap';
import RecipeCard from './ViewRecipe';

import './feed.css';

const Feed = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=4")
        .then(response => response.json())
        .then(data => {
          setRecipes(data.results);
        });
    }, []);
  
    return (
      <>
      <Container>

        <Jumbotron>
        {recipes.map(recipe => (
        <RecipeCard 
            picture={recipe.picture.large} 
            name={recipe.name.first + " " + recipe.name.last} 
            description={recipe.email} 
            ingredients={recipe.gender}
            instructions={recipe.location.city}
            tags={recipe.location.state}
        />
        ))}
        </Jumbotron>
    </Container>
    </>
    );
  };
  
  export default Feed;