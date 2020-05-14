import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron Classname="jumbotron1">
          <p>Currently Under Construction!</p>
          <h1 className="home-title">Welcome to TastyByte!</h1>
          <div className="create-act-btn">
            <Button variant="primary" size="lg" href="/createaccount">
              Create Account
            </Button>
          </div>
          <div className="login-btn">
            <Button variant="primary" size="lg" href="/formlogin">
              Login
            </Button>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}

export default Home;
