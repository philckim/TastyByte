import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Button, Container, Jumbotron } from 'react-bootstrap';
import '../../src/index.css';

const Myprofile = ({ getCurrentProfile, auth: { account }, profile: { profile, loading } }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	//if the profile is null and still loading we'll show the spinner
	//account.firstname is being pull from auth
	return loading && profile === null ? (
		<Spinner />
	) : (
		<Container className="myprofile">
			<Jumbotron>
				<h2 className="medium profi">My Profile</h2>
				<p className="lead">
					<i>
						<FontAwesomeIcon icon="coffee" />
					</i>{' '}
					Welcome to your profile {account && <p>{account.firstname}</p>}.
				</p>
				{profile !== null ? <Fragment>has</Fragment> : <Fragment>has not</Fragment>}

				<Form.Group>
					<Form.Label htmlFor="description">Tell us something about yourself.</Form.Label>
					<Form.Control
						name="status"
						as="textarea"
						placeholder="Tell us why you want to share your recipe..."
						rows="3"
					/>
					<Button variant="dark" type="submit" className="profilebtn">
						Submit
					</Button>
				</Form.Group>
				<Button variant="dark" className="profilebtn2" href="/createrecipe">
					Ready to share your recipe? Click ME!
				</Button>
			</Jumbotron>
		</Container>
	);
};

Myprofile.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Myprofile);
