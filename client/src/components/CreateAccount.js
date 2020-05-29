import React, { useState } from 'react';
import { Jumbotron, Container, Form, Button, Col } from 'react-bootstrap';

const CreateAccount = () => {
	const [ formData, setFormData ] = useState({
		firstname: '',
		lastname: '',
		username: '',
		email: '',
		password: '',
		password2: ''
	});

	const { firstname, lastname, username, email, password, password2 } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log('Passwords do not match');
		} else {
			console.log('Success');
		}
	};

	return (
		<Container>
			<Jumbotron onSubmit={(e) => onSubmit(e)}>
				<h2>Create your Tasty Byte Account</h2>
				<br />
				<br />

				<Form>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								name="firstname"
								value={firstname}
								onChange={(e) => onChange(e)}
								required
								placeholder="Enter First name"
							/>
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								name="lastname"
								value={lastname}
								onChange={(e) => onChange(e)}
								required
								placeholder="Enter Last name"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="text"
								name="username"
								value={username}
								onChange={(e) => onChange(e)}
								required
								placeholder="Enter username"
							/>
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={(e) => onChange(e)}
								required
								placeholder="Enter email"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								minLength="6"
								value={password}
								onChange={(e) => onChange(e)}
								required
								placeholder="Enter password"
							/>
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								name="password2"
								value={password2}
								onChange={(e) => onChange(e)}
								required
								placeholder="Verify Password"
							/>
						</Form.Group>
					</Form.Row>

					<Form.File id="formcheck-api-regular">
						<Form.File.Label>Upload Profile Picture</Form.File.Label>
						<Form.File.Input />
					</Form.File>
					<br />

					<Form.Group id="formGridCheckbox">
						<Form.Check type="checkbox" label="I agree to terms and conditions." />
					</Form.Group>

					<Button value="CreateAccount" type="submit" onSubmit={(e) => onSubmit(e)}>
						Create Account
					</Button>
					<p>
						Already have an account? <a href="/FormLogin">Sign in</a>
					</p>
				</Form>
			</Jumbotron>
		</Container>
	);
};

export default CreateAccount;
