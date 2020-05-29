import React, { useState } from 'react';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';

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
				<h1 className="home-title">Welcome to TastyByte!</h1>
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
				</Form>
			</Jumbotron>
		</Container>
	);
};

export default FormLogin;
