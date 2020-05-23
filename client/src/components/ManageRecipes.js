import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  ListGroup,
  Button,
  Form,
  Col,
} from "react-bootstrap";

class ManageRecipes extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>View and Manage Your Tasty Byte Recipes</h2>
          <br />
          <br />
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Jumbotron>
      </Container>
    );
  }
}

export default ManageRecipes;
