import React, { Component } from "react";
import { Jumbotron, Container, Form, Button, Col } from "react-bootstrap";

class FormCreateAccount extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Create your Tasty Byte Account</h2>
          <br />
          <br />

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter First name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Last name" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="user" placeholder="Enter username" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control type="password" placeholder="Verify Password" />
              </Form.Group>
            </Form.Row>

            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Upload Profile Picture</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <br />

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to terms and conditions."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}

export default FormCreateAccount;
