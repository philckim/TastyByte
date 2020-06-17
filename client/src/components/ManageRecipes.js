import React, { useState, useEffect } from 'react';
import {
  Jumbotron,
  Container,
  ListGroup,
  Button,
  ButtonGroup,
} from 'react-bootstrap';

const ManageRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/recipe/')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  const deleteHandler = (event) => {
    event.preventDefault();
    console.log('Recipe Deleted');
  };

  const DisplayRecipe = () => {
    let RecipeList = [];
    Object.keys(recipes).forEach((recipe) => {
      RecipeList.push(
        <ListGroup.Item key={recipe}>
          {recipes[recipe].name}
          <ButtonGroup className='float-right'>
            <Button variant='info'>Edit</Button>
            <Button variant='danger' onClick={deleteHandler}>
              Delete
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      );
    });
    return RecipeList;
  };

  return (
    <Container>
      <Jumbotron>
        <h2>View and Manage Your Tasty Byte Recipes</h2>
        <br />
        <br />
        <ListGroup variant='flush'>
          <DisplayRecipe />
        </ListGroup>
      </Jumbotron>
    </Container>
  );
};

export default ManageRecipes;
