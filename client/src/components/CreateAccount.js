import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Jumbotron, Container, Form, Button, Col } from 'react-bootstrap';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

const CreateAccount = ({ setAlert, register, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		password2: ''
	});

	const { firstname, lastname, email, password, password2 } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ firstname, lastname, email, password });
		}
	};

	if (isAuthenticated) {
		return <Redirect to="/FormLogin" />;
	}

	return (
		<Container>
			<Jumbotron>
				<h2>Create your Tasty Byte Account</h2>
				<br />
				<br />

				<Form onSubmit={(e) => onSubmit(e)}>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								name="firstname"
								value={firstname}
								onChange={(e) => onChange(e)}
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
								placeholder="Enter Last name"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={(e) => onChange(e)}
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
								value={password}
								onChange={(e) => onChange(e)}
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
						<Form.Check type="checkbox" label="I agree to terms and conditions." required />
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

CreateAccount.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(CreateAccount);
