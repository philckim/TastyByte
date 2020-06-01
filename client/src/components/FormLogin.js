import React, { useState } from 'react';
import { Jumbotron, Container, Form, Button, Image, Col, Row } from 'react-bootstrap';
import Logo from './tastybytelogo.png';
import './../../src/index.css';

const FormLogin = () => {
	const [ formData, setFormData ] = useState({
		username: '',
		password: ''
	});

	const { username, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('Success');
	};

	return (
		<Container>
			<Jumbotron>
				<Row
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: '5%',
						marginLeft: '0%',
						marginRight: '0%'
					}}
				>
					<Col xs={10} md={5}>
						<Image className="tbLOgo" src={Logo} alt="Tasty Byte Logo" roundedCircle />
					</Col>
				</Row>
				<h2>Login</h2>
				<Form onSubmit={(e) => onSubmit(e)}>
					<Form.Group controlId="formBasicusername">
						<Form.Label>User name</Form.Label>
						<Form.Control
							type="user"
							name="username"
							value={username}
							onChange={(e) => onChange(e)}
							required
							placeholder="Enter Username"
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							value={password}
							onChange={(e) => onChange(e)}
							required
							minLength="6"
							placeholder="Password"
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember me" />
					</Form.Group>
					<Button value="FormLogin" type="submit">
						Submit
					</Button>
					<p>
						Forgot <a href="/recoverpassword">password</a> or <a href="/recoverusername">username</a>?
					</p>
					<p>
						Not a member? Join us <a href="/createaccount">now</a>
					</p>
				</Form>
			</Jumbotron>
		</Container>
	);
};

export default FormLogin;
