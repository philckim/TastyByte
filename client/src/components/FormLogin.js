import React, { Component } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";

class FormLogin extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="home-title">Welcome to TastyByte!</h1>
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <p>
              Forgot password? <a href="/recoverpassword">click here</a>
            </p>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}

export default FormLogin;
