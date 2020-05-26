import React, { Component } from 'react';

import { Jumbotron, Container, ListGroup, Button, Form, Col, ButtonGroup } from 'react-bootstrap';

class ManageRecipes extends Component {
	render() {
		return (
			<Container>
				<Jumbotron>
					<h2>View and Manage Your Tasty Byte Recipes</h2>
					<br />
					<br />
					<ListGroup variant="flush">
						<ListGroup.Item>
							Mushroom Risotto
							<ButtonGroup className="float-right">
								<Button variant="info">Edit</Button> <Button variant="danger">Delete</Button>{' '}
							</ButtonGroup>
						</ListGroup.Item>
						<ListGroup.Item>
							Chicken Pot Pie
							<ButtonGroup className="float-right">
								<Button variant="info">Edit</Button> <Button variant="danger">Delete</Button>{' '}
							</ButtonGroup>
						</ListGroup.Item>
						<ListGroup.Item>
							Pan Pizza
							<ButtonGroup className="float-right">
								<Button variant="info">Edit</Button> <Button variant="danger">Delete</Button>{' '}
							</ButtonGroup>
						</ListGroup.Item>
						<ListGroup.Item>
							Al Pastor
							<ButtonGroup className="float-right">
								<Button variant="info">Edit</Button> <Button variant="danger">Delete</Button>{' '}
							</ButtonGroup>
						</ListGroup.Item>
					</ListGroup>
				</Jumbotron>
			</Container>
		);
	}
}

export default ManageRecipes;
