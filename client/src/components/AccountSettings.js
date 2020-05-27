import React, { Component } from "react";
import { Jumbotron, Container, Button, Form, Col } from "react-bootstrap";

class AccountSettings extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Manage Your Tasty Byte Account</h2>
          <br />
          <br />
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Change Username</Form.Label>
                <Form.Control type="user" placeholder="Change username" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Verify New Username</Form.Label>
                <Form.Control type="user" placeholder="Verify username" />
              </Form.Group>
            </Form.Row>

            <br />

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Change Email</Form.Label>
                <Form.Control type="email" placeholder="Change email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Verify New Email</Form.Label>
                <Form.Control type="email" placeholder="Verify email" />
              </Form.Group>
            </Form.Row>

            <br />

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Enter Current Password</Form.Label>
                <Form.Control type="password" placeholder="Current password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Change Password</Form.Label>
                <Form.Control type="password" placeholder="Change password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Verify New Password</Form.Label>
                <Form.Control type="password" placeholder="Verify Password" />
              </Form.Group>
            </Form.Row>
            <br />
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Change Profile Picture</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <br />

            <Form.Label>Choose Tags to Follow:</Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Vegan"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Gluten Free"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Dairy Free"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Keto"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Paleo"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Vegetarian"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Pescatarian"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Nut Free"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Soy Free"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Chicken"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Italian"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}

export default AccountSettings;
