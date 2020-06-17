import React, { Component } from "react";
import { Jumbotron, Container, Button, Form } from "react-bootstrap";

class RecoverUsername extends Component {
  render() {
    return (
      <Container>
        <Jumbotron className="jumbotron1">
          <h2>Forgot Username?</h2>
          <p>We'll help you remember.</p>
          <Form.Group controlId="formBasicEmail" className="emailinputrecovery">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="send" className="recoveruserbtn">
            Make me remember!
          </Button>
        </Jumbotron>
      </Container>
    );
  }
}

export default RecoverUsername;
