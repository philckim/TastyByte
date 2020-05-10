import React from "react";
import { Row, Col, Button } from "reactstrap";

export default (props) => {
  return (
    <div className="homediv">
      <Row className="welcome-title">
        <Col>
          <h1>WELCOME TO TASTY BYTE!</h1>
          <Button
            color="none"
            className="create-acc-button"
            onClick={(_) => {
              props.setPage(1);
            }}
          >
            Create Account
          </Button>
        </Col>
        <Col>
          <Button
            color="none"
            className="login-button"
            onClick={(_) => {
              props.setPage(2);
            }}
          >
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};
