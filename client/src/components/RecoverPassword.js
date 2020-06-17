import React, { Component } from 'react';
import { Jumbotron, Container, Button, Form } from 'react-bootstrap';

class RecoverPassword extends Component {
	render() {
		return (
			<Container>
				<Jumbotron Classname="jumbotron1">
					<p>Currently Under Construction!</p>
					<h2>Forgot Password?</h2>
					<p>You can reset your password here.</p>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Enter Email</Form.Label>
							<Form.Control type="email" placeholder="Email" required />
						</Form.Group>
						<Button variant="primary" type="send" className="recoverpwsendbtn">
							Reset Password
						</Button>
					</Form>
				</Jumbotron>
			</Container>
		);
	}
}

export default RecoverPassword;
