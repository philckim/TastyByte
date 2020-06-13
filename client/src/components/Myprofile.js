import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
		<Fragment>
			<h1 className="medium profi">Profile</h1>
			<p className="lead">
				<i className="fa fa-user" /> Welcome {account && account.firstname}
			</p>
		</Fragment>
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
